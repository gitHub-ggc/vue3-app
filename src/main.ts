import { createApp } from 'vue'
import './style.css'
import router from "../src/router/index"
import store from "@/store/index"
import App from './App.vue'
import 'amfe-flexible'
import { Toast } from 'vant';
import 'vant/lib/index.css';//vant 样式全局引入
// import '@/plugin/vant'
import './mock/mock'
const app = createApp(App)
app.config.globalProperties.$Toast = Toast;
app.use(router).use(store).mount('#app')
