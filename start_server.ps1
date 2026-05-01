$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:8091/")
$listener.Start()
Write-Host "Server started at http://localhost:8091/"
while ($listener.IsListening) {
    Start-Sleep -Milliseconds 100
}
