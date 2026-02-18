# Foorink

음식 / 커피 / 와인 / 위스키 감상평을 기록하는 로컬 퍼스트(서버리스) 모바일 앱 초기 구조입니다.

## Windows 정확 경로 (요청 반영)
아래 경로가 맞습니다.

`C:\Users\신예찬\Desktop\APP\Foorink`

## 지금처럼 `...\Desktop\APP>` 프롬프트에서 계속 에러 날 때 (가장 쉬운 픽스)
캡처처럼 `APP` 폴더에서 `npm install`/`npm run start`를 실행하면 항상 실패합니다.
(`APP\\package.json`이 없기 때문)

### 방법 1: APP 위치에서 바로 실행 (추천)
```bat
cd /d "C:\Users\신예찬\Desktop\APP"
Foorink\RUN_FROM_APP.bat
```

### 방법 2: 명령 2줄로 직접 실행
```bat
npm --prefix "C:\Users\신예찬\Desktop\APP\Foorink" install
npm --prefix "C:\Users\신예찬\Desktop\APP\Foorink" run start -c
```

## 지금 캡처 에러(ENOENT package.json) 10초 해결
지금 화면은 `C:\Users\신예찬\Desktop\APP` 폴더에서 실행해서 생긴 오류입니다.

### 방법 A (가장 쉬움)
```bat
cd /d "C:\Users\신예찬\Desktop\APP\Foorink"
npm install
npm run start
```

### 방법 B (`cd` 없이 실행)
```bat
npm --prefix "C:\Users\신예찬\Desktop\APP\Foorink" install
npm --prefix "C:\Users\신예찬\Desktop\APP\Foorink" run start
```

### 위치 확인 1줄
```bat
dir "C:\Users\신예찬\Desktop\APP\Foorink\package.json"
```
- 이 파일이 보이면 경로는 정상입니다.

## 내가 뭘 잘못한 건가? (지금 캡처 기준)
아니요, 명령은 거의 맞게 하셨어요. 문제는 보통 아래 2가지 중 하나입니다.

1. **로컬 폴더가 최신 코드가 아님** (예전 `expo-sqlite` 설정이 남아 있음)
2. **`node_modules`/캐시가 꼬여서 예전 모듈 경로를 계속 참조함**

그래서 아래 복구 스크립트를 추가했습니다.

```bat
cd /d "C:\Users\신예찬\Desktop\APP\Foorink"
scripts\recover-windows.bat
```

또는 npm 스크립트로:
```bat
npm run recover:windows
```

이 스크립트는 자동으로:
- 현재 폴더 확인
- `package.json`의 `expo-sqlite` 흔적 점검
- `node_modules`/`package-lock.json`/npm cache 정리
- 재설치 후 `expo start -c` 실행

### `npm run recover:windows`가 없다고 뜰 때
이 메시지는 **지금 PC의 `package.json`이 오래된 버전**이라는 뜻입니다.

아래 순서로 확인하세요.

```bat
cd /d "C:\Users\신예찬\Desktop\APP\Foorink"
dir package.json
findstr /i "recover:windows recover-windows" package.json
```

- `recover:windows` 또는 `recover-windows`가 안 보이면 최신 코드가 아닙니다.
- 이때는 바로 스크립트 파일로 실행하세요:

```bat
cd /d "C:\Users\신예찬\Desktop\APP\Foorink"
scripts\recover-windows.bat
```

- `scripts\recover-windows.bat` 파일도 없으면, 저장소를 다시 받아야 합니다.

## "파일이 없어"가 뜰 때 먼저 확인
`bootstrap-foorink.ps1` 파일이 없다는 뜻은 보통 2가지입니다.

1. 현재 위치가 프로젝트 폴더가 아님
2. 프로젝트를 아직 PC에 다운로드하지 않음

아래 순서로 진행하세요.

### 1) 프로젝트 먼저 다운로드

#### 방법 A: GitHub ZIP
1. GitHub 저장소 페이지 열기
2. `Code` 버튼 클릭
3. `Download ZIP`
4. 압축 해제 후 폴더 이름을 `Foorink`로 맞춤
5. 폴더를 `C:\Users\신예찬\Desktop\APP\Foorink`에 이동

#### 방법 B: GitHub CLI (공식 `gh` CLI)
```powershell
cd "C:\Users\신예찬\Desktop\APP"
gh repo clone ad-bliped/Save-Everything Foorink
```

#### 방법 C: git clone
```powershell
cd "C:\Users\신예찬\Desktop\APP"
git clone <저장소주소> Foorink
```

### 2) 파일 존재 확인
```powershell
cd "C:\Users\신예찬\Desktop\APP\Foorink"
dir .\scripts
```
아래 파일들이 보여야 정상입니다.
- `bootstrap-foorink.ps1`
- `bootstrap-foorink.bat`

## CMD에서 자주 나는 오류 해결 (지금 화면 기준)
스크린샷의 오류 2개는 아래 원인입니다.

1. `'C:\Users\...\Desktop\APP"'은 명령이 아닙니다`
   - 경로만 입력해서 생긴 오류입니다.
   - CMD에서는 아래처럼 `cd`를 붙여야 합니다.
   ```bat
   cd /d "C:\Users\신예찬\Desktop\APP"
   ```

2. `'gh'은(는) 내부 또는 외부 명령...이 아닙니다`
   - GitHub CLI(gh)가 아직 설치되지 않은 상태입니다.
   - 해결 방법:
     - A안: gh 설치 후 사용
       ```bat
       winget install --id GitHub.cli
       gh auth login
       gh repo clone ad-bliped/Save-Everything Foorink
       ```
     - B안: gh 없이 git으로 받기
       ```bat
       git clone https://github.com/ad-bliped/Save-Everything.git Foorink
       ```

### CMD에서 그대로 복붙하면 되는 최소 명령
```bat
cd /d "C:\Users\신예찬\Desktop\APP"
git clone https://github.com/ad-bliped/Save-Everything.git Foorink
cd /d "C:\Users\신예찬\Desktop\APP\Foorink"
dir scripts
```

`dir scripts`에서 아래 파일이 보이면 정상입니다.
- `bootstrap-foorink.bat`
- `bootstrap-foorink.ps1`

## 코드 복사(동기화) 방법

### Windows PowerShell
```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\bootstrap-foorink.ps1
```

### Windows CMD
```bat
scripts\bootstrap-foorink.bat
```

### macOS / Linux
```bash
bash scripts/bootstrap-foorink.sh
```

### CMD에서 `.bat`가 깨져 보일 때 (한글/인코딩 문제)
간혹 Windows CMD 인코딩 때문에 `.bat` 출력이 깨지거나 명령이 오작동할 수 있습니다.
이 경우 아래 순서로 진행하세요.

```bat
cd /d "C:\Users\신예찬\Desktop\APP\Foorink"
chcp 65001
scripts\bootstrap-foorink.bat
```

그래도 안 되면 bootstrap 단계는 건너뛰고 바로 실행해도 됩니다.
```bat
cd /d "C:\Users\신예찬\Desktop\APP\Foorink"
npm install
npm run start
```

## 복사 후 실행
```bash
cd C:\Users\신예찬\Desktop\APP\Foorink
npm install
npm run start
```

## APK 빌드 (갤럭시 설치)
```bash
npx expo login
npm run build:apk
```

빌드 완료 후 URL에서 APK를 내려받아 갤럭시에 설치하세요.

## `npm install`에서 `ENOENT package.json` 에러가 뜰 때
지금 캡처처럼 이 에러는 **정상적인 설치 에러가 아니라 경로 에러**입니다.

`C:\Users\신예찬\Desktop\APP`에서 `npm install`을 실행하면
`APP\package.json`을 찾다가 실패합니다.

반드시 아래처럼 **Foorink 폴더까지 이동**한 뒤 실행하세요.

```bat
cd /d "C:\Users\신예찬\Desktop\APP\Foorink"
dir package.json
npm install
npm run start
```

- `dir package.json`에서 파일이 보이면 위치가 맞습니다.
- 파일이 안 보이면 아직 프로젝트를 덜 받은 상태라서, 위의 clone 단계부터 다시 진행하면 됩니다.

## `ERR_MODULE_NOT_FOUND` (`expo-sqlite`) 오류가 뜨는 뜻
이 에러는 한 줄로 말하면:
**지금 설치된 코드/캐시에 `expo-sqlite`가 남아 있는데, 그 안의 파일(`build/SQLiteDatabase`)을 못 찾아서 앱 시작이 중단됐다**는 뜻입니다.

중요: 현재 저장소의 최신 코드에서는 `expo-sqlite`를 제거한 상태라,
정상적으로 최신본이 깔렸다면 이 에러가 나오지 않아야 합니다.

### 바로 확인 (CMD)
```bat
cd /d "C:\Users\신예찬\Desktop\APP\Foorink"
findstr /i "expo-sqlite" package.json
```
- 출력이 **없어야 정상**입니다.
- `expo-sqlite`가 보이면 예전 파일을 쓰고 있는 상태입니다.

### 복구 순서 (CMD 그대로 복붙)
```bat
cd /d "C:\Users\신예찬\Desktop\APP\Foorink"
rd /s /q node_modules
if exist package-lock.json del /f /q package-lock.json
npm cache clean --force
git pull
npm install
npm run start -c
```

### `git pull`이 안 되면 (ZIP/옛폴더 사용자)
```bat
cd /d "C:\Users\신예찬\Desktop\APP"
rmdir /s /q Foorink
gh repo clone ad-bliped/Save-Everything Foorink
cd /d "C:\Users\신예찬\Desktop\APP\Foorink"
npm install
npm run start
```

### 추가 확인
```bat
node -v
npm -v
```
- Node는 LTS 사용 권장입니다.

## 포함된 초기 구조
- Expo + React Native + TypeScript
- Expo Router 라우팅
- SQLite 스키마 파일(복구 후 재연결용)
- 임시 메모리 저장 repository 템플릿
- EAS Build (`build:apk`, `build:aab`)
