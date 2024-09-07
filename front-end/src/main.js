import { createApp } from 'vue'
import App from './App.vue'

// 생성한 뷰 라우터 받아오기
import { router } from './router/index.js'
// import { store } from './store/index.js'

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)
app.use(router)
// app.use(store)
app.mount('#app')
