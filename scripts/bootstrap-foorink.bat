@echo off
setlocal

REM Keep this script ASCII-only to avoid encoding issues on some Windows CMD setups.
set "TARGET_DIR=%USERPROFILE%\Desktop\APP\Foorink"
set "SOURCE_DIR=%~dp0.."

if not exist "%TARGET_DIR%" mkdir "%TARGET_DIR%"
if errorlevel 1 (
  echo Failed to create target directory: %TARGET_DIR%
  exit /b 1
)

robocopy "%SOURCE_DIR%" "%TARGET_DIR%" /MIR /XD ".git" "node_modules" ".expo" "dist" >nul
set "ROBOCOPY_EXIT=%ERRORLEVEL%"

REM Robocopy exit codes below 8 are success/warning.
if %ROBOCOPY_EXIT% GEQ 8 (
  echo Robocopy failed with exit code %ROBOCOPY_EXIT%.
  exit /b %ROBOCOPY_EXIT%
)

echo Sync complete.
echo Target: %TARGET_DIR%
echo.
echo Next commands:
echo   cd /d "%TARGET_DIR%"
echo   npm install
echo   npm run start

endlocal
