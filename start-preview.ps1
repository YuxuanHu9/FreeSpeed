$ErrorActionPreference = 'Stop'
$previewUrl = 'http://127.0.0.1:8765/FreeSpeed/'
try {
    $previewResponse = Invoke-WebRequest -Uri $previewUrl -UseBasicParsing -TimeoutSec 2
    if ($previewResponse.StatusCode -eq 200 -and $previewResponse.Content -match '<title>FreeSpeed') {
        Write-Host "FreeSpeed preview is already running: $previewUrl"
        return
    }
} catch { }
# Skip the Microsoft Store alias in WindowsApps, which is not a real interpreter.
$previewPython = Get-Command python, python3 -CommandType Application -All -ErrorAction SilentlyContinue |
    Where-Object { $_.Source -notmatch '\\WindowsApps\\' } |
    Select-Object -First 1 -ExpandProperty Source
if (-not $previewPython) { throw 'Python 3 was not found on PATH.' }
Set-Location -LiteralPath $PSScriptRoot
Write-Host "FreeSpeed preview: $previewUrl"
& $previewPython (Join-Path $PSScriptRoot 'preview.py')
