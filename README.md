### 빌드 실행
```
mvn install
```

### 변경사항 로컬 및 원격 저장소 반영
```
git add .
git commit -m "커밋 메시지"
git push -u origin main
```

#### 원격 저장소에 푸시되지 않은 항목 확인
```
git log --branches --not --remotes
```

### front-end 소스 컴파일
```
cd front-end
npm run serve
```
##### 메모
- npm run serve
  - vue-cli-service serve 명령어를 호출해서 개발 서버를 실행
- vue.js 의 jest 활용한 테스트 진행 시 ``npm test`` 명령어 수행 시 ~ package.json 오류 발생하는 경우 => 해당 명령어는 package.json 이 위치한 경로에서 수행되어야 함
