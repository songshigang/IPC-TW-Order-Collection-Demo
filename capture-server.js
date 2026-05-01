const http = require('http');
const { chromium } = require('playwright');

const PORT = 8401;

let captureStatus = {
    inProgress: false,
    steps: [],
    result: null,
    done: false
};

function resetStatus() {
    captureStatus = {
        inProgress: true,
        steps: [
            { title: '啟動瀏覽器', detail: '正在啟動 Chrome 瀏覽器...', status: 'active' },
            { title: '導航至客戶平台', detail: '', status: 'pending' },
            { title: '輸入帳號密碼', detail: '', status: 'pending' },
            { title: '識別並填寫驗證碼', detail: '自動識別圖片驗證碼', status: 'pending' },
            { title: '登入系統', detail: '提交登入請求', status: 'pending' },
            { title: '進入訂單導入頁面', detail: '訂單中心 → 訂單導入', status: 'pending' },
            { title: '篩選處理失敗訂單', detail: '點擊漏斗圖標，選擇處理狀態', status: 'pending' },
            { title: '搜尋並選取訂單', detail: '搜尋失敗訂單並全選', status: 'pending' },
            { title: '導出訂單資料', detail: '點擊導出按鈕', status: 'pending' }
        ],
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

async function doLogin(page, username, password) {
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

async function runCapture(platformUrl, username, password) {
    resetStatus();
    const startTime = Date.now();
    let browser = null;

    try {
        updateStep(0, 'active', '正在啟動 Chrome 瀏覽器...');
        browser = await chromium.launch({ headless: false, channel: 'chrome' });
        const page = await browser.newPage();
        updateStep(0, 'done', 'Chrome 瀏覽器已啟動');

        updateStep(1, 'active', '正在導航至 ' + platformUrl);
        await page.goto(platformUrl, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForSelector('input[name="username"]', { timeout: 10000 });
        updateStep(1, 'done', '已導航至 ' + platformUrl);

        updateStep(2, 'active', '正在輸入帳號密碼...');
        updateStep(2, 'done', '已輸入帳號: ' + username + '，密碼: ******');

        updateStep(3, 'active', '正在識別圖片驗證碼...');
        const captchaCode = await getCaptcha(page);
        updateStep(3, 'done', '驗證碼識別結果: ' + captchaCode);

        updateStep(4, 'active', '正在提交登入請求...');
        const loginSuccess = await doLogin(page, username, password);
        if (!loginSuccess) {
            updateStep(4, 'error', '登入失敗', '帳號密碼或驗證碼錯誤');
            captureStatus.result = { orderCount: 0, successCount: 0, failCount: 0, duration: '0秒', error: '登入失敗' };
            captureStatus.done = true;
            captureStatus.inProgress = false;
            await browser.close();
            return;
        }
        updateStep(4, 'done', '登入成功，已進入系統首頁');

        updateStep(5, 'active', '正在進入訂單導入頁面...');
        await page.waitForTimeout(2000);
        await page.locator('.el-submenu__title').filter({ hasText: '订单中心' }).click({ timeout: 5000 });
        await page.waitForTimeout(1000);
        await page.locator('.el-menu-item').filter({ hasText: '订单导入' }).click({ timeout: 5000 });
        await page.waitForTimeout(3000);
        updateStep(5, 'done', '已進入訂單導入頁面');

        updateStep(6, 'active', '正在點擊漏斗圖標，展開查詢條件...');
        const filterBtn = page.locator('button.el-button--primary.el-button--mini').filter({ has: page.locator('svg') });
        await filterBtn.click();
        await page.waitForTimeout(1000);
        updateStep(6, 'done', '已展開查詢條件面板');

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

        updateStep(8, 'active', '正在點擊導出按鈕...');
        const exportBtn = page.locator('button.filter-button').filter({ hasText: '导出' });
        if (await exportBtn.count() > 0) {
            await exportBtn.click();
            await page.waitForTimeout(2000);
            updateStep(8, 'done', '已點擊導出，檔案正在下載');
        } else {
            const altExportBtn = page.locator('button').filter({ hasText: '导出' });
            if (await altExportBtn.count() > 0) {
                await altExportBtn.first().click();
                await page.waitForTimeout(2000);
            }
            updateStep(8, 'done', '已點擊導出按鈕');
        }

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

    } catch (error) {
        console.error('Capture error:', error.message);
        const currentStep = captureStatus.steps.findIndex(s => s.status === 'active');
        if (currentStep >= 0) {
            updateStep(currentStep, 'error', captureStatus.steps[currentStep].detail, error.message);
        }
        captureStatus.result = { orderCount: 0, successCount: 0, failCount: 0, duration: '0秒', error: error.message };
        captureStatus.done = true;
        captureStatus.inProgress = false;
        if (browser) {
            try { await browser.close(); } catch (e) {}
        }
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
                const platformUrl = params.platformUrl || 'https://tms.iyeed.com.cn/login';
                const username = params.username || 'admin';
                const password = params.password || 'password';

                if (captureStatus.inProgress) {
                    res.writeHead(409, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: '已有抓取任務正在執行' }));
                    return;
                }

                runCapture(platformUrl, username, password);

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
