## 이 프로젝트는 댓글기능과 로그인 기능이 있는 게시판 입니다.
## 로그인 여부에 따란 게시글 작성 댓글 작성 메인 페이지 열람을 제한 시킬수 있습니다.

### 알게된점
- 실시간 통신을 기능은 넣지 않았지만 별도로 공부를 했다 다음에 기회되면 넣어봐야 겠다.
- 테스트 코드는 제스트와 슈퍼테스트 을 통해 unit e2e 를 모두 해봤다. 몽고디비를 mock 하는 방법과 몽고디비에서 별도로 메모리에 저장하도록 하는 테스트 용 이 있다는 것도 알았다.
- 별도로 테스트 코드와 실시간 통신 기능은 넣지 않았고 테스트 코드와 socket.io  코드는 별도로 연습 을 해서 깃에 올려 두었다.(참고용)
- aws 가 전부가 아니다. git 과 연동해서 배포 할 수 있는 곳을 몇 몇 알아두었다.(프론트는 git hub, netflify) 백엔드는(heroku) db는(mongoalas))
- 그 중 heroku 와 mongoalas 는 실제로 배포 해봤는데... 무료 버전이라서 그런지 너무 느렸다. ㅠ ㅠ  aws 그냥 써야 할듯 한다.
- mongodb pre 기능 : pre는 미들웨어 이고 몽구스에서는 훅이라고도 부르는것 같았다.(db 저장전 미리 지정한 함수를 실행한다. 비밀번호를 해쉬하는 용도로 사용했다.)
- pre 할때 db가 save 될때마다 계속 비밀번호가 바뀐는 오작동이 있어서 해결했다.
  - 해결방법은 만약 패스워드가 바뀐게 없다면 않다면 그냥 next()로 넘겨버렸다.
      ```
      if (!this.isModified("password")) {
        return next();
        }
      ```
### 해결하지 못한 문제점
- 불필요한 통신이 너무 많은것 같다.
- 토큰을 굳이 계속 보내줘야 하는지 의문이다.
-----
- 위 세션방식과 같이 토큰방식을 같이 사용한다면 간단하게 해결 할수 있을 것 같다.(답안 참고)
- 중복되는 코드가 너무 많다(로그인 됬을때난 접근 할 수 있고 로그아웃 됬을때는 접근 할 수 없도록 따로 미들웨어를 만들 필요가 있다.)
- 뷰에 ejs사용 관련 불필요한 스크립트 파일이 너무 많다. 튜터님이 만든 형식 처럼 function 을 따로 모아놓고 필요할때만 가져다가 써는 방식이 가장 깔끔할 것 같다.
- 아니면 파일별로 꼭 필요한 스크립트 파일만 붙여놔야 할 것 같다.

### 앞으로 계획
- rest의 계속 통신을 요청하는 방식이 이해가 잘 안된다.  왜 계속 통신을 하는지 통신을 너무 많이 하는것이 자꾸 맘에 걸린다.
- 곡 필요한 통신만 하는 더 괜찮은 방법이 없을까...검색해 보니까  graphql 은 한번 통신에 쿼리만 바꿔서 모든걸 해결한다던데 이 방법을 한번 알아볼 생각이다.(오버패칭 언더패칭 해결라고 유튜버영상을 참고했다)


