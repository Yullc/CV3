#  CV3 프로젝트 실행 및 테스트 가이드

## 1. 프로젝트 클론 (Git Clone)
Windows 환경은 **Git Bash**, Mac 환경은 **터미널**을 이용해 아래 명령어를 입력합니다.

```bash
git clone https://github.com/Yullc/CV3
```
IDEA를 이용해 프로젝트 열기.

## 2. npm 설치
해당 IDEA 터미널에서 CV3 내부 프로젝트에 진입후 아래 명령어 입력
```bash
   cd frontend
   npm install
   npm run dev
   ```
## 3. local 페이지 진입
터미널에 나오는 로컬 주소로 들어가기(http://localhost:5173/)

## 4. 페이지 확인
로그인이 안되어있을 경우 시청률, 판매량, 매출액 잠금
로그인 할 경우 잠금해제

## 5. 로그인 방법
테이블 우측에 있는 로그인 버튼 클릭후
id: test,
pw: test

## 6. IntelliJ 사용시 빌드 오류 해결
 settings 접속 -> Build,Executiom, Deployment -> Gradle -> Build and Run을 intelliJ IDEA로 변경