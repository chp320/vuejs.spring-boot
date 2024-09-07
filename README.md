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
