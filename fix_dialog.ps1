$file = "d:\德亦信息\金佰利\IPC\TW\订单采集\IPC TW Order Collection Demo\index.html"
$content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)

$old = '                        <el-dialog v-model="storeMappingDialogVisible" :title="storeMappingDialogTitle" width="500px">'
$new = '                        <el-dialog v-model="storeMappingDialogVisible" :title="storeMappingDialogTitle" width="800px">'

$content = $content.Replace($old, $new)

$old2 = '                            <el-form :model="currentStoreMapping" label-width="120px">'
$new2 = '                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <el-form :model="currentStoreMapping" label-width="100px">'

$content = $content.Replace($old2, $new2)

$old3 = '                                <el-form-item :label="t(''storeCode'')" v-if="!isAddMapping">
                                    <span>{{ currentStoreMapping.storeCode }}</span>
                                </el-form-item>'
$new3 = '                                        <el-form-item :label="t(''storeCode'')" v-if="!isAddMapping">
                                            <span>{{ currentStoreMapping.storeCode }}</span>
                                        </el-form-item>'

$content = $content.Replace($old3, $new3)

$old4 = '                                <el-form-item :label="t(''storeCode'')" v-else required>
                                    <el-input v-model="currentStoreMapping.storeCode" :placeholder="t(''pleaseInput'')"></el-input>
                                </el-form-item>'
$new4 = '                                        <el-form-item :label="t(''storeCode'')" v-else required>
                                            <el-input v-model="currentStoreMapping.storeCode" :placeholder="t(''pleaseInput'')"></el-input>
                                        </el-form-item>'

$content = $content.Replace($old4, $new4)

[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host "Part 1 done"
