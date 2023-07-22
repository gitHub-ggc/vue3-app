<template>
<div class="footer">
  <div class="footer-box">
    <div class="box-icon" @click="homeEvent">
        <div class="icon-img">
            <img v-if="showHomeIcon" src="../../static/images/icon_zhpk0635zlf/home_light.png" alt="">
            <img v-else src="../../static/images/icon_zhpk0635zlf/homefill.png" alt="">
        </div>
        <div class="icon-text" :class="{'check-ling':closeHomeIcon}">首页</div>
    </div>
    <div class="box-icon" @click="dKEvent">
        <div class="icon-img">
            <img v-if="showDKIcon" src="../../static/images/icon_zhpk0635zlf/sign.png" alt="">
            <img v-else src="../../static/images/icon_zhpk0635zlf/sign-fill.png" alt="">
        </div>
        <div class="icon-text" :class="{'check-ling':closeDKIcon}">打卡</div>
    </div>
    <div class="box-icon" @click="jFEvent">
        <div class="icon-img">
            <img v-if="showJFIcon" src="../../static/images/icon_zhpk0635zlf/jifenshangcheng.png" alt="">
            <img v-else src="../../static/images/icon_zhpk0635zlf/jifenshangcheng_1.png" alt="">
        </div>
        <div class="icon-text" :class="{'check-ling':closeJFIcon}">积分商城</div>
    </div>
    <div class="box-icon" @click="gREvent">
        <div class="icon-img">
            <img v-if="showGRIcon" src="../../static/images/icon_zhpk0635zlf/xiazai.png" alt="">
            <img v-else src="../../static/images/icon_zhpk0635zlf/gerenzhongxin.png" alt="">
        </div>
        <div class="icon-text" :class="{'check-ling':closeGRIcon}">个人中心</div>
    </div>
  </div>
</div>
</template>
<script lang="ts" setup>
import { ref,defineProps } from "vue"
import {useRouter} from "vue-router"
const showHomeIcon = ref(true);
const showDKIcon = ref(true);
const showJFIcon = ref(true);
const showGRIcon = ref(true);
const {path} = defineProps(['path']);
function pathEvnet(){
    showHomeIcon.value = true;
    showDKIcon.value = true;
    showJFIcon.value = true;
    showGRIcon.value = true;
    if(path === '/home'){
      showHomeIcon.value = false;  
    }else if(path === '/dK'){
      showDKIcon.value = false;
    }else if(path === '/jF'){
       showJFIcon.value = false;
    }else if(path === '/gR'){
      showGRIcon.value = false;  
    }
}
const router = useRouter();
function homeEvent(){
  if(path !== '/home'){
    router.push("/home");
  }
}
function dKEvent(){
  if(path !== '/dK'){
    router.push("/dK");
  }
}
function jFEvent(){
  if(path !== '/jF'){
    router.push("/jF");
  }
}
function gREvent(){
  if(path !== '/gR'){
    router.push("/gR");
  }
}
pathEvnet();
</script>
<style lang="less" scoped>
.footer{
    position: fixed;
    bottom: 0;
    left:0;
    background: #fff;
    box-sizing: border-box;
    width:100%;
    .footer-box{
        display: flex;
        padding:10px 20px 10px;
        justify-content: space-between;
        .box-icon{
            display: flex;
            flex-direction:column;
            align-items: center;
            justify-content: center;
            .icon-img{
                display: flex;
                width:20px;
                height: 20px;
                img{
                    width:100%;
                    height: 100%;
                }
            }
            .icon-text{
                font-size:15px;
                color:#999;
            }
            .check-ling{
                color:rgba(227,136,44);
            }
        }
    }
}  
</style>