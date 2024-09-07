// webpack-dev-server 가 활용하는 포트 변경: 8000 -> 3000
// @vue/cli-service 가 이 설정을 읽은 뒤 webpack-dev-server 가 실행되며, front-end 는 3000 포트, back-end 는 8080 포트에서 동작함

module.exports = {
  devServer: {
    port: 3000
  }
}