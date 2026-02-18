@echo off
setlocal

REM This script is intended to be launched from:
REM C:\Users\신예찬\Desktop\APP>Foorink\RUN_FROM_APP.bat

cd /d "%~dp0"

echo [INFO] Project dir: %cd%
if not exist package.json (
  echo [ERROR] package.json not found. Please clone/extract repo into APP\Foorink first.
  exit /b 1
)

echo [STEP] npm install
call npm install
if errorlevel 1 (
  echo [ERROR] npm install failed.
  exit /b 1
)

echo [STEP] npm run start -c
call npm run start -c

endlocal
