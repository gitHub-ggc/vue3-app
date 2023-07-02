<script setup lang="ts">
import { NavBar } from "vant";
import {useRouter} from 'vue-router';

const {title} = defineProps(['title']);


const router = useRouter();
function onClickLeft(){
    router.push(
        {
            path:"/login",
            query:{
                checked:true
            }
        }
    );
}
</script>
<template>
  <div class="nva">
    <NavBar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
   <div class="hide-text">
    xxxx
   </div>
  </div>
</template>
<style lang="less" scoped>
.nva {
  .hide-text{
    padding:20px;
    font-size: 14px;
  }
}
</style>