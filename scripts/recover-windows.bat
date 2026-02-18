@echo off
setlocal

cd /d "%~dp0.."

echo [1/5] 현재 폴더 확인...
if not exist package.json (
  echo [ERROR] package.json을 찾을 수 없습니다.
  echo         C:\Users\신예찬\Desktop\APP\Foorink 폴더에서 실행해야 합니다.
  exit /b 1
)

echo [2/5] expo-sqlite 흔적 점검...
findstr /i "expo-sqlite" package.json >nul
if %errorlevel%==0 (
  echo [WARN] package.json에 expo-sqlite가 보입니다. 오래된 코드일 수 있습니다.
) else (
  echo [OK] package.json에는 expo-sqlite가 없습니다.
)

echo [3/5] 캐시/의존성 정리...
if exist node_modules rd /s /q node_modules
if exist package-lock.json del /f /q package-lock.json
call npm cache clean --force

echo [4/5] 재설치...
call npm install
if errorlevel 1 (
  echo [ERROR] npm install 실패
  exit /b 1
)

echo [5/5] Expo 시작...
call npm run start -c

endlocal
