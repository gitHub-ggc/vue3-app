<script setup lang="ts">
import {useStore} from 'vuex'
// import Vue from 'vue'
import {useInfo} from '@/api/use.ts'
import { Button,Icon } from 'vant';

// Vue.use(Button);
const store = useStore();
function btn(){
  // let useStore = useStore();
  console.log(store)
  useInfo({a:1}).then(res => {
    console.log(8888,res)
  })
}
// console.log(6666,store,store.state.loginToken)
</script>

<template>
  <div>
    home
    <Button type="primary" @click="btn">按钮</Button>
    6666
    <Icon name="close"></Icon>
  </div>
</template>

<style scoped>

</style>
