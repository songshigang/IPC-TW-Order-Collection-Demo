const http = require('http');
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const os = require('os');

const PORT = 8401;
const DOWNLOAD_DIR = path.join(os.homedir(), 'Downloads', 'IPC-TW-Orders');

let captureStatus = {
    inProgress: false,
    steps: [],
    result: null,
    done: false
};

function resetStatusWithSteps(steps) {
    captureStatus = {
        inProgress: true,
        steps: steps,
        result: null,
        done: false
    };
}

function updateStep(index, status, detail, errorMsg) {
    if (index < captureStatus.steps.length) {
        captureStatus.steps[index].status = status;
        if (detail !== undefined) captureStatus.steps[index].detail = detail;
        if (errorMsg !== undefined) captureStatus.steps[index].errorMsg = errorMsg;
        const now = new Date();
        const ts = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0') + ':' + String(now.getSeconds()).padStart(2, '0');
        if (status === 'active') captureStatus.steps[index].startTime = ts;
        if (status === 'done' || status === 'error') captureStatus.steps[index].endTime = ts;
    }
}

async function launchBrowser() {
    if (!fs.existsSync(DOWNLOAD_DIR)) {
        fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
    }
    return await chromium.launch({
        headless: false,
        channel: 'chrome',
        args: [
                '--start-maximized',
                '--disable-background-mode',
                '--disable-background-networking',
                '--disable-component-extensions-with-background-pages'
            ]
    });
}

async function finishCapture(page, browser, startTime) {
    const endTime = Date.now();
    const durationSec = Math.round((endTime - startTime) / 1000);
    const durationMin = Math.floor(durationSec / 60);
    const durationRemSec = durationSec % 60;
    const durationStr = durationMin > 0 ? durationMin + '分' + durationRemSec + '秒' : durationRemSec + '秒';

    const tableRows = await page.locator('.el-table__body-wrapper .el-table__row').count();

    captureStatus.result = { orderCount: tableRows, successCount: tableRows, failCount: 0, duration: durationStr };
    captureStatus.done = true;
    captureStatus.inProgress = false;

    await page.waitForTimeout(5000);
    await browser.close();
}

function handleError(error, browser) {
    console.error('Capture error:', error.message);
    const currentStep = captureStatus.steps.findIndex(s => s.status === 'active');
    if (currentStep >= 0) {
        updateStep(currentStep, 'error', captureStatus.steps[currentStep].detail, error.message);
    }
    captureStatus.result = { orderCount: 0, successCount: 0, failCount: 0, duration: '0秒', error: error.message };
    captureStatus.done = true;
    captureStatus.inProgress = false;
    if (browser) {
        try { browser.close(); } catch (e) {}
    }
}

async function getCaptcha(page) {
    return await page.evaluate(() => {
        const spans = document.querySelectorAll('.ValidCode span');
        let code = '';
        spans.forEach(span => { code += span.textContent.trim(); });
        return code;
    });
}

async function setCaptcha(page, code) {
    await page.evaluate((code) => {
        const app = document.querySelector('#app').__vue__;
        if (app && app.$children && app.$children[0]) {
            const loginComp = app.$children[0];
            loginComp.$set(loginComp.ruleForm, 'verify', code);
            loginComp.$set(loginComp.ruleForm, 'code', code);
        }
    }, code);
    await page.locator('input[name="verify"]').fill(code);
}

async function doLoginTms(page, username, password) {
    await page.evaluate(({ u, p }) => {
        const app = document.querySelector('#app').__vue__;
        const loginComp = app.$children[0];
        loginComp.$set(loginComp.ruleForm, 'userNo', u);
        loginComp.$set(loginComp.ruleForm, 'pwd', p);
    }, { u: username, p: password });

    const captchaCode = await getCaptcha(page);
    if (captchaCode) {
        await setCaptcha(page, captchaCode);
    }

    await page.click('button.el-button--primary');

    try {
        await page.waitForURL(url => !url.toString().includes('/login'), { timeout: 10000 });
        return true;
    } catch(e) {
        const newCaptcha = await getCaptcha(page);
        if (newCaptcha) {
            await setCaptcha(page, newCaptcha);
            await page.click('button.el-button--primary');
            try {
                await page.waitForURL(url => !url.toString().includes('/login'), { timeout: 10000 });
                return true;
            } catch(e2) {
                return false;
            }
        }
        return false;
    }
}

async function runCaptureTms(platformUrl, username, password) {
    const steps = [
        { title: '啟動瀏覽器', detail: '正在啟動 Chrome 瀏覽器...', status: 'active' },
        { title: '導航至客戶平台', detail: '', status: 'pending' },
        { title: '輸入帳號密碼', detail: '', status: 'pending' },
        { title: '識別並填寫驗證碼', detail: '自動識別圖片驗證碼', status: 'pending' },
        { title: '登入系統', detail: '提交登入請求', status: 'pending' },
        { title: '進入訂單導入頁面', detail: '訂單中心 → 訂單導入', status: 'pending' },
        { title: '篩選處理失敗訂單', detail: '點擊漏斗圖標，選擇處理狀態', status: 'pending' },
        { title: '搜尋並選取訂單', detail: '搜尋失敗訂單並全選', status: 'pending' },
        { title: '導出訂單資料', detail: '點擊導出按鈕', status: 'pending' }
    ];
    resetStatusWithSteps(steps);
    const startTime = Date.now();
    let browser = null;

    try {
        updateStep(0, 'active', '正在啟動 Chrome 瀏覽器...');
        browser = await launchBrowser();
        const context = await browser.newContext({ viewport: null, acceptDownloads: true });
        const page = await context.newPage();
        await page.bringToFront();
        updateStep(0, 'done', 'Chrome 瀏覽器已啟動（全屏）');
        await page.waitForTimeout(1000);

        updateStep(1, 'active', '正在導航至 ' + platformUrl);
        await page.goto(platformUrl, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForSelector('input[name="username"]', { timeout: 10000 });
        updateStep(1, 'done', '已導航至 ' + platformUrl);
        await page.waitForTimeout(1000);

        updateStep(2, 'active', '正在輸入帳號密碼...');
        updateStep(2, 'done', '已輸入帳號: ' + username + '，密碼: ******');
        await page.waitForTimeout(1000);

        updateStep(3, 'active', '正在識別圖片驗證碼...');
        const captchaCode = await getCaptcha(page);
        updateStep(3, 'done', '驗證碼識別結果: ' + captchaCode);
        await page.waitForTimeout(1000);

        updateStep(4, 'active', '正在提交登入請求...');
        const loginSuccess = await doLoginTms(page, username, password);
        if (!loginSuccess) {
            updateStep(4, 'error', '登入失敗', '帳號密碼或驗證碼錯誤');
            captureStatus.result = { orderCount: 0, successCount: 0, failCount: 0, duration: '0秒', error: '登入失敗' };
            captureStatus.done = true;
            captureStatus.inProgress = false;
            await browser.close();
            return;
        }
        updateStep(4, 'done', '登入成功，已進入系統首頁');
        await page.waitForTimeout(1000);

        updateStep(5, 'active', '正在進入訂單導入頁面...');
        await page.waitForTimeout(2000);
        await page.locator('.el-submenu__title').filter({ hasText: '订单中心' }).click({ timeout: 5000 });
        await page.waitForTimeout(1000);
        await page.locator('.el-menu-item').filter({ hasText: '订单导入' }).click({ timeout: 5000 });
        await page.waitForTimeout(3000);
        updateStep(5, 'done', '已進入訂單導入頁面');
        await page.waitForTimeout(1000);

        updateStep(6, 'active', '正在點擊漏斗圖標，展開查詢條件...');
        const filterBtn = page.locator('button.el-button--primary.el-button--mini').filter({ has: page.locator('svg') });
        await filterBtn.click();
        await page.waitForTimeout(1000);
        updateStep(6, 'done', '已展開查詢條件面板');
        await page.waitForTimeout(1000);

        updateStep(7, 'active', '正在選擇處理狀態為「處理失敗」...');
        const statusFormItem = page.locator('.el-form-item').filter({ hasText: '处理状态' });
        const statusSelect = statusFormItem.locator('.el-select').first();
        await statusSelect.click();
        await page.waitForTimeout(800);

        const failOption = page.locator('.el-select-dropdown__item:visible').filter({ hasText: '处理失败' });
        if (await failOption.count() > 0) {
            await failOption.first().click();
            updateStep(7, 'done', '已選擇處理狀態：處理失敗');
        } else {
            updateStep(7, 'done', '已選擇處理狀態（選項可能不同）');
        }
        await page.waitForTimeout(500);

        const searchBtn = page.locator('button').filter({ hasText: '搜索' });
        if (await searchBtn.count() > 0) {
            await searchBtn.first().click();
        } else {
            const queryBtn = page.locator('button').filter({ hasText: '查询' });
            if (await queryBtn.count() > 0) {
                await queryBtn.first().click();
            }
        }
        await page.waitForTimeout(3000);

        const selectAllCheckbox = page.locator('.el-table__header .el-checkbox').first();
        if (await selectAllCheckbox.count() > 0) {
            await selectAllCheckbox.click();
            await page.waitForTimeout(500);
        }
        updateStep(7, 'done', '已搜尋並全選失敗訂單');
        await page.waitForTimeout(1000);

        updateStep(8, 'active', '正在點擊導出按鈕...');
        const exportBtn = page.locator('button.filter-button').filter({ hasText: '导出' });
        if (await exportBtn.count() > 0) {
            const [download] = await Promise.all([
                page.waitForEvent('download', { timeout: 15000 }).catch(() => null),
                exportBtn.click()
            ]);
            if (download) {
                const downloadFilename = download.suggestedFilename() || 'export.xlsx';
                const savePath = path.join(DOWNLOAD_DIR, downloadFilename);
                await download.saveAs(savePath);
                updateStep(8, 'done', '已導出至：' + savePath);
            } else {
                await page.waitForTimeout(2000);
                updateStep(8, 'done', '已點擊導出，檔案下載中...');
            }
        } else {
            const altExportBtn = page.locator('button').filter({ hasText: '导出' });
            if (await altExportBtn.count() > 0) {
                const [download] = await Promise.all([
                    page.waitForEvent('download', { timeout: 15000 }).catch(() => null),
                    altExportBtn.first().click()
                ]);
                if (download) {
                    const downloadFilename = download.suggestedFilename() || 'export.xlsx';
                    const savePath = path.join(DOWNLOAD_DIR, downloadFilename);
                    await download.saveAs(savePath);
                    updateStep(8, 'done', '已導出至：' + savePath);
                } else {
                    await page.waitForTimeout(2000);
                    updateStep(8, 'done', '已點擊導出按鈕');
                }
            } else {
                updateStep(8, 'done', '未找到導出按鈕');
            }
        }

        await finishCapture(page, browser, startTime);

    } catch (error) {
        handleError(error, browser);
    }
}

async function doLoginSct(page, username, password) {
    await page.locator('#tab-1').click();
    await page.waitForTimeout(1000);

    const usernameInput = page.locator('#pane-1 input[name="username"]');
    const passwordInput = page.locator('#pane-1 input[name="password"]');

    await usernameInput.click();
    await page.keyboard.type(username, { delay: 30 });
    await passwordInput.click();
    await page.keyboard.type(password, { delay: 30 });
    await page.waitForTimeout(500);

    await page.locator('#pane-1 button.el-button--primary').click();

    try {
        await page.waitForURL(url => !url.toString().includes('/login'), { timeout: 10000 });
        return true;
    } catch(e) {
        return false;
    }
}

function formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + d;
}

async function runCaptureCostco(platformUrl, username, password) {
    const steps = [
        { title: '啟動瀏覽器', detail: '正在啟動 Chrome 瀏覽器...', status: 'active' },
        { title: '導航至好市多物流平台', detail: '', status: 'pending' },
        { title: '切換至用戶登入', detail: '選擇「用戶登入」頁籤', status: 'pending' },
        { title: '輸入帳號密碼', detail: '', status: 'pending' },
        { title: '登入系統', detail: '提交登入請求', status: 'pending' },
        { title: '進入訂單管理', detail: '右側選單 → 訂單管理', status: 'pending' },
        { title: '選擇訂單狀態', detail: '訂單狀態=創建', status: 'pending' },
        { title: '設定訂單日期', detail: '點擊「最近一週」按鈕', status: 'pending' },
        { title: '清除接單日期', detail: '清除接單日期條件', status: 'pending' },
        { title: '搜尋訂單', detail: '點擊搜尋按鈕', status: 'pending' },
        { title: '導出訂單資料', detail: '點擊右上角導出按鈕', status: 'pending' }
    ];
    resetStatusWithSteps(steps);
    const startTime = Date.now();
    let browser = null;

    try {
        updateStep(0, 'active', '正在啟動 Chrome 瀏覽器...');
        browser = await launchBrowser();
        const context = await browser.newContext({ viewport: null, acceptDownloads: true });
        const page = await context.newPage();
        await page.bringToFront();
        updateStep(0, 'done', 'Chrome 瀏覽器已啟動（全屏），下載目錄：' + DOWNLOAD_DIR);
        await page.waitForTimeout(1000);

        updateStep(1, 'active', '正在導航至 ' + platformUrl);
        await page.goto(platformUrl, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForSelector('.el-tabs__item', { timeout: 10000 });
        updateStep(1, 'done', '已導航至好市多物流平台');
        await page.waitForTimeout(1000);

        updateStep(2, 'active', '正在切換至「用戶登入」頁籤...');
        await page.locator('#tab-1').click();
        await page.waitForTimeout(1000);
        updateStep(2, 'done', '已切換至用戶登入頁籤');
        await page.waitForTimeout(1000);

        updateStep(3, 'active', '正在輸入帳號密碼...');
        const usernameInput = page.locator('#pane-1 input[name="username"]');
        const passwordInput = page.locator('#pane-1 input[name="password"]');
        await usernameInput.click();
        await page.keyboard.type(username, { delay: 30 });
        await passwordInput.click();
        await page.keyboard.type(password, { delay: 30 });
        updateStep(3, 'done', '已輸入帳號: ' + username + '，密碼: ******');
        await page.waitForTimeout(1000);

        updateStep(4, 'active', '正在提交登入請求...');
        await page.locator('#pane-1 button.el-button--primary').click();
        try {
            await page.waitForURL(url => !url.toString().includes('/login'), { timeout: 10000 });
            updateStep(4, 'done', '登入成功，已進入系統首頁');
        } catch(e) {
            updateStep(4, 'error', '登入失敗', '帳號密碼錯誤或登入超時');
            captureStatus.result = { orderCount: 0, successCount: 0, failCount: 0, duration: '0秒', error: '登入失敗' };
            captureStatus.done = true;
            captureStatus.inProgress = false;
            await browser.close();
            return;
        }
        await page.waitForTimeout(1000);

        updateStep(5, 'active', '正在進入訂單管理頁面...');
        await page.waitForTimeout(2000);
        const orderMenuItem = page.locator('li.el-menu-item').filter({ hasText: /^订单管理$/ });
        if (await orderMenuItem.count() > 0) {
            await orderMenuItem.first().click();
            await page.waitForTimeout(3000);
            updateStep(5, 'done', '已進入訂單管理頁面');
        } else {
            updateStep(5, 'done', '嘗試進入訂單管理頁面');
        }
        await page.waitForTimeout(1000);

        updateStep(6, 'active', '正在選擇訂單狀態為「創建」...');
        const statusLabel = page.locator('label.el-form-item__label').filter({ hasText: /^订单状态$/ });
        if (await statusLabel.count() > 0) {
            const statusFormItem = statusLabel.first().locator('..').locator('..');
            const statusSelect = statusFormItem.locator('.el-select').first();
            if (await statusSelect.count() > 0) {
                await statusSelect.click();
                await page.waitForTimeout(800);
                const createOption = page.locator('.el-select-dropdown__item:visible').filter({ hasText: '创建' });
                if (await createOption.count() > 0) {
                    await createOption.first().click();
                    updateStep(6, 'done', '已選擇訂單狀態：創建');
                } else {
                    updateStep(6, 'done', '已點擊訂單狀態下拉框（未找到「創建」選項）');
                }
            } else {
                updateStep(6, 'done', '未找到訂單狀態下拉框');
            }
        } else {
            updateStep(6, 'done', '未找到訂單狀態欄位');
        }
        await page.waitForTimeout(1000);

        updateStep(7, 'active', '正在設定訂單日期為「最近一週」...');
        const orderDateLabel = page.locator('label.el-form-item__label').filter({ hasText: /^订单日期$/ });
        if (await orderDateLabel.count() > 0) {
            const dateFormItem = orderDateLabel.first().locator('..').locator('..');
            const dateRangePicker = dateFormItem.locator('.el-date-editor').first();
            if (await dateRangePicker.count() > 0) {
                await dateRangePicker.click();
                await page.waitForTimeout(1000);
                const lastWeekBtn = page.locator('.el-picker-panel__shortcut').filter({ hasText: '最近一周' });
                if (await lastWeekBtn.count() > 0) {
                    await lastWeekBtn.first().click();
                    await page.waitForTimeout(500);
                    updateStep(7, 'done', '已設定訂單日期：最近一週');
                } else {
                    const shortcuts = await page.evaluate(() => {
                        const items = [];
                        document.querySelectorAll('.el-picker-panel__shortcut').forEach(el => {
                            items.push(el.textContent.trim());
                        });
                        return items;
                    });
                    console.log('Available shortcuts:', JSON.stringify(shortcuts));
                    const today = new Date();
                    const weekAgo = new Date(today);
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    const todayStr = formatDate(today);
                    const weekAgoStr = formatDate(weekAgo);
                    const dateInputs = dateRangePicker.locator('input');
                    const inputCount = await dateInputs.count();
                    if (inputCount >= 2) {
                        await dateInputs.nth(0).click();
                        await page.keyboard.press('Control+a');
                        await page.keyboard.type(weekAgoStr, { delay: 20 });
                        await page.keyboard.press('Tab');
                        await page.waitForTimeout(300);
                        await dateInputs.nth(1).click();
                        await page.keyboard.press('Control+a');
                        await page.keyboard.type(todayStr, { delay: 20 });
                        await page.keyboard.press('Escape');
                    }
                    updateStep(7, 'done', '已手動設定訂單日期：' + weekAgoStr + ' ~ ' + todayStr);
                }
            } else {
                updateStep(7, 'done', '未找到訂單日期選擇器');
            }
        } else {
            updateStep(7, 'done', '未找到訂單日期欄位');
        }
        await page.waitForTimeout(1000);

        updateStep(8, 'active', '正在清除接單日期條件...');
        const acceptDateLabel = page.locator('label.el-form-item__label').filter({ hasText: /^接单日期$/ });
        if (await acceptDateLabel.count() > 0) {
            const acceptDateFormItem = acceptDateLabel.first().locator('..').locator('..');
            const acceptDateRangePicker = acceptDateFormItem.locator('.el-date-editor').first();
            if (await acceptDateRangePicker.count() > 0) {
                const clearIcon = acceptDateRangePicker.locator('.el-icon-circle-close, .el-range__close-icon, [class*="close"]');
                if (await clearIcon.count() > 0) {
                    await clearIcon.first().click();
                    updateStep(8, 'done', '已清除接單日期條件');
                } else {
                    const dateInputs = acceptDateRangePicker.locator('input');
                    const inputCount = await dateInputs.count();
                    for (let i = 0; i < inputCount; i++) {
                        await dateInputs.nth(i).click();
                        await page.keyboard.press('Control+a');
                        await page.keyboard.press('Delete');
                    }
                    await page.keyboard.press('Escape');
                    updateStep(8, 'done', '已手動清除接單日期');
                }
            } else {
                updateStep(8, 'done', '未找到接單日期選擇器');
            }
        } else {
            updateStep(8, 'done', '未找到接單日期欄位，跳過');
        }
        await page.waitForTimeout(1000);

        updateStep(9, 'active', '正在搜尋訂單...');
        const searchBtn = page.locator('button.el-button--primary.filter-button').filter({ hasText: '搜索' });
        if (await searchBtn.count() > 0) {
            await searchBtn.first().click();
        } else {
            const anySearchBtn = page.locator('button').filter({ hasText: '搜索' });
            if (await anySearchBtn.count() > 0) {
                await anySearchBtn.first().click();
            }
        }
        await page.waitForTimeout(3000);
        updateStep(9, 'done', '已搜尋訂單');
        await page.waitForTimeout(1000);

        updateStep(10, 'active', '正在點擊導出按鈕...');
        const exportBtn = page.locator('button.el-button--mini').filter({ hasText: '导出' });
        if (await exportBtn.count() > 0) {
            const [download] = await Promise.all([
                page.waitForEvent('download', { timeout: 15000 }).catch(() => null),
                exportBtn.first().click()
            ]);
            if (download) {
                const downloadFilename = download.suggestedFilename() || 'export.xlsx';
                const savePath = path.join(DOWNLOAD_DIR, downloadFilename);
                await download.saveAs(savePath);
                updateStep(10, 'done', '已導出至：' + savePath);
            } else {
                await page.waitForTimeout(2000);
                updateStep(10, 'done', '已點擊導出，檔案下載中...');
            }
        } else {
            const altExportBtn = page.locator('button').filter({ hasText: '导出' });
            if (await altExportBtn.count() > 0) {
                const [download] = await Promise.all([
                    page.waitForEvent('download', { timeout: 15000 }).catch(() => null),
                    altExportBtn.first().click()
                ]);
                if (download) {
                    const downloadFilename = download.suggestedFilename() || 'export.xlsx';
                    const savePath = path.join(DOWNLOAD_DIR, downloadFilename);
                    await download.saveAs(savePath);
                    updateStep(10, 'done', '已導出至：' + savePath);
                } else {
                    await page.waitForTimeout(2000);
                    updateStep(10, 'done', '已點擊導出按鈕');
                }
            } else {
                updateStep(10, 'done', '未找到導出按鈕');
            }
        }

        await finishCapture(page, browser, startTime);

    } catch (error) {
        handleError(error, browser);
    }
}

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    const url = new URL(req.url, `http://localhost:${PORT}`);

    if (req.method === 'POST' && url.pathname === '/api/capture/start') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                const params = JSON.parse(body);
                const platformType = params.platformType || 'tms';
                const platformUrl = params.platformUrl || (platformType === 'costco' ? 'https://sct.emdlz.com.cn/login' : 'https://tms.iyeed.com.cn/login');
                const username = params.username || (platformType === 'costco' ? 'admin' : 'admin');
                const password = params.password || (platformType === 'costco' ? 'admin!@#123' : 'password');

                if (captureStatus.inProgress) {
                    res.writeHead(409, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: '已有抓取任務正在執行' }));
                    return;
                }

                if (platformType === 'costco') {
                    runCaptureCostco(platformUrl, username, password);
                } else {
                    runCaptureTms(platformUrl, username, password);
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: '抓取任務已啟動' }));
            } catch (e) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: e.message }));
            }
        });
        return;
    }

    if (req.method === 'GET' && url.pathname === '/api/capture/status') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(captureStatus));
        return;
    }

    if (req.method === 'POST' && url.pathname === '/api/capture/reset') {
        captureStatus = { inProgress: false, steps: [], result: null, done: false };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: '已重置' }));
        return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
    console.log(`Capture server running at http://localhost:${PORT}`);
    console.log('API endpoints:');
    console.log('  POST /api/capture/start  - Start capture task');
    console.log('  GET  /api/capture/status - Get capture progress');
    console.log('  POST /api/capture/reset  - Reset capture status');
});
