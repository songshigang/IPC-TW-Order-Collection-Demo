239 187 191 $file = "d:\德亦信息\金佰利\IPC\TW\订单采集\IPC TW Order Collection Demo\index.html"
$content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)

$old = @"
                    ],
                    
                    productList: [
"@

$new = @"
                    ],
                    
                    soldToList: [
                        { soldToCode: '31334380', soldToName: '31334380 - 家樂福' },
                        { soldToCode: '31334381', soldToName: '31334381 - 好市多' },
                        { soldToCode: '31334382', soldToName: '31334382 - 統一超商' },
                        { soldToCode: '31334383', soldToName: '31334383 - 全家' }
                    ],
                    
                    productList: [
"@

$content = $content.Replace($old, $new)
[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host "Done - added soldToList"
