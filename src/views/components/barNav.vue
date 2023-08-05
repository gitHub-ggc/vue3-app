<script setup lang="ts">
const {title} = defineProps(['title','showIcon']);
function goBack(){
    history.back()
}
</script>
<template>
<div id="bar-nav">
    <div class="bar-title">
        <van-icon @click="goBack" name="arrow-left" v-if="showIcon" />
        <div class="bar-name">{{title}}</div>
    </div>
</div>
</template>
<style scoped lang="less">
#bar-nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    .bar-title{
        display: flex;
        align-items: center;
        width: 100%;
        background: #e4bb6e;
        color: #fff;
        padding: 15px 0;
        text-align: center;
        width:100%;
        font-size: 18px;
        ::v-deep .van-icon{
            font-size:25px;
        }
        .bar-name{
            text-align: center;
            width:100%;
            font-size: 18px;
        }
    }
}
</style>