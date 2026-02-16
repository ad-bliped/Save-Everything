@echo off
setlocal

set TARGET_DIR=C:\Users\신예찬\Desktop\APP\Foorink
set SOURCE_DIR=%~dp0..

if not exist "%TARGET_DIR%" mkdir "%TARGET_DIR%"

robocopy "%SOURCE_DIR%" "%TARGET_DIR%" /MIR /XD .git node_modules .expo dist >nul

echo ✅ Foorink 프로젝트를 아래 경로에 동기화했습니다.
echo %TARGET_DIR%
echo.
echo 다음 명령으로 실행하세요:
echo   cd %TARGET_DIR%
echo   npm install
echo   npm run start

endlocal
