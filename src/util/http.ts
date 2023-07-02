import axios from 'axios'
import {useStore} from 'vuex'
import { Toast } from 'vant';
const http = axios.create({
    baseUrl:"http://localhost:5173/api",
    timeout:90000
})
let store = useStore();
http.interceptors.request.use(config => {
  console.log(1111,store)
//   config.header['cook'] = store.state.loginToken;
  return config;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  })

http.interceptors.response.use(response =>{
    const res = response.data;
    if(res.code === 200){
        return res
    }else{
        Toast(res.msg || '未知异常，请联系管理员');
        return Promise.reject(error);
    }
})

export default http;