$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:8400/")
$listener.Start()
Write-Host "Server started at http://localhost:8400/"
$basePath = $PWD.Path

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $filePath = Join-Path $basePath $request.Url.AbsolutePath.TrimStart('/')
        if ($filePath -eq $basePath -or $filePath -eq (Join-Path $basePath '')) {
            $filePath = Join-Path $basePath "index.html"
        }
        
        if (Test-Path $filePath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                '.html' { 'text/html; charset=utf-8' }
                '.js' { 'application/javascript' }
                '.css' { 'text/css' }
                '.png' { 'image/png' }
                '.jpg' { 'image/jpeg' }
                '.ico' { 'image/x-icon' }
                default { 'application/octet-stream' }
            }
            $response.ContentType = $contentType
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        $response.Close()
    } catch {
        # Ignore errors
    }
}
