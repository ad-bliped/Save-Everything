# Foorink

음식 / 커피 / 와인 / 위스키 감상평을 기록하는 로컬 퍼스트(서버리스) 모바일 앱 초기 구조입니다.

## Windows 정확 경로 (요청 반영)
아래 경로가 맞습니다.

`C:\Users\신예찬\Desktop\APP\Foorink`

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

## 포함된 초기 구조
- Expo + React Native + TypeScript
- Expo Router 라우팅
- SQLite 스키마/초기화
- 엔트리 저장 repository 템플릿
- EAS Build (`build:apk`, `build:aab`)
