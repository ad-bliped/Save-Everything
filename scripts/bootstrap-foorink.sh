#!/usr/bin/env bash
set -euo pipefail

TARGET_DIR="$HOME/Desktop/APP/Foorink"
SOURCE_DIR="$(cd "$(dirname "$0")/.." && pwd)"

mkdir -p "$TARGET_DIR"

rsync -av --delete \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='.expo' \
  --exclude='dist' \
  "$SOURCE_DIR/" "$TARGET_DIR/"

cat <<MSG
✅ Foorink 프로젝트 파일을 아래 경로로 복사했습니다.
$TARGET_DIR

다음 명령으로 실행하세요:
  cd "$TARGET_DIR"
  npm install
  npm run start
MSG
