<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from "vue";
import { Field,Checkbox,showToast } from 'vant';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
let username = ref("admin");
let password = ref("123");
const obj = reactive({username:'admin',password:'123'});
let checked = ref(false);
const route = useRoute();
const router = useRouter();
const store = useStore();
//提交事件
function btn(){
  if(!obj.username || !obj.password){
    showToast('用户名或者密码未填！')
    return;
  }else if(obj.username !== 'admin' || obj.password !== '123'){
    showToast('用户名或者密码错误')
    return;
  }else if(!checked.value){
    showToast('请勾选安全策略')
    return;
  }
  store.commit('Token/set_loginToken',true);
  router.push('/home')
};
//安全策略事件
function hideEvent(){
  router.push('/hide');
}

</script>

<template>
  <div id="login">
    <div class="logo">
      <img src="../static/images/taobaolianmengziti.png" alt="">
    </div>
    <div class="login-input">
      <div class="user-login">用户登入</div>
      <!-- <van-cell-group class="login-group"> -->
        <Field
          v-model="obj.username"
          clearable
          placeholder="用户名"
        />
        <Field
          v-model="obj.password"
          type="password"
          placeholder="密码"
        />
      <!-- </van-cell-group> -->
      <div class="hide">
        <Checkbox v-model="checked"></Checkbox>
        <span class="text">已同意本（<span @click="hideEvent" class="text-color">安全政策</span>）</span>
      </div>
      <!-- <Button type="primary" @click="btn" class="login-btn">登入</Button> -->
      <van-button @click="btn" class="login-btn" type="primary">登入</van-button>
    </div>
  </div>
</template>

<style scoped lang="less">
#login {
  width:100%;
  height: 100%;
  background:linear-gradient(45deg,rgb(218, 189, 189),rgb(236, 203, 203));
  .logo{
    padding:20px;
    width:200px;
    img{
      width:100%;
      height:100%;
    }
  }
  .login-input{
    margin:200px 20px 0;
    background: #fff;
    border-radius: 10px;
    .user-login{
      color:#6a5218;
      font-size:16px;
      padding: 10px 0 0 10px;
      margin-bottom: 10px;
    }
    .hide{
      margin:20px 0;
      display: flex;
      align-items: center;
      padding-left:10px;
      .text{
        font-size: 14px;
        display: inline-block;
        padding-left:10px;
        .text-color{
          color:red;
        }
      }
    }
    .login-btn{
      margin-top:10px;
      width:100%;
    }
  }
}
</style>
