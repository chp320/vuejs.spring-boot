import { createRouter, createWebHistory } from 'vue-router'

// 연결할 각  컴포넌트 import (src/views 디렉토리 하위에 컴포넌트들 생성해둠)
// import Home from '../views/Home.vue'
import Test from '../views/Test.vue'

// 라우터 설계
const routes = [
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

// 라우터 생성
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 라우터 추출 (main.js 에서 import)
// export default router
export { router }
