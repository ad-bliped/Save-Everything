@echo off
setlocal

cd /d "%~dp0.."

if not exist .git (
  echo [ERROR] .git 폴더가 없습니다. 저장소 루트에서 실행하세요.
  exit /b 1
)

echo [STEP] origin SSH URL 적용: git@github.com:ad-bliped/Save-Everything.git

git remote get-url origin >nul 2>&1
if %errorlevel%==0 (
  git remote set-url origin git@github.com:ad-bliped/Save-Everything.git
) else (
  git remote add origin git@github.com:ad-bliped/Save-Everything.git
)

echo [OK] 현재 remote
call git remote -v

echo.
echo 다음 명령으로 업로드하세요:
echo   git push -u origin work

endlocal
