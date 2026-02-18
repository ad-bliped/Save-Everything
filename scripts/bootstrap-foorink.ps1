$ErrorActionPreference = 'Stop'

$targetDir = 'C:\Users\신예찬\Desktop\APP\Foorink'
$sourceDir = Split-Path -Parent $PSScriptRoot

if (!(Test-Path $targetDir)) {
  New-Item -Path $targetDir -ItemType Directory -Force | Out-Null
}

robocopy $sourceDir $targetDir /MIR /XD .git node_modules .expo dist | Out-Null

Write-Host "✅ Foorink 프로젝트를 아래 경로에 동기화했습니다."
Write-Host $targetDir
Write-Host ""
Write-Host "다음 명령으로 실행하세요:"
Write-Host "  cd $targetDir"
Write-Host "  npm install"
Write-Host "  npm run start"
