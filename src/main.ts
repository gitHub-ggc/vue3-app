import { createApp } from 'vue'
import './style.css'
import router from "../src/router/index"
import store from "@/store/index"
import App from './App.vue'
import 'amfe-flexible';
import '@/plugin/vant'
import {Button,Icon} from 'vant'
import 'vant/lib/index.css';//vant 样式全局引入
import './mock/mock'
const app = createApp(App)
// for(let K in vantPlugin){
//   console.log(K,vantPlugin)
//   app.use(K)
// }
app.use(Button).use(Icon)
// app.config.globalProperties.$Toast = Toast;
app.use(router).use(store).mount('#app')
