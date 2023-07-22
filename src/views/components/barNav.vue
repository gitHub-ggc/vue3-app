<script setup lang="ts">
const {title} = defineProps(['title','showIcon']);

</script>
<template>
<div id="bar-nav">
    <div class="bar-title">
        <van-icon name="arrow-left" v-if="showIcon" />
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
        font-size: 25px;
        color: #fff;
        padding: 10px 0;
        
        .van-icon{
 
        }
        .bar-name{

        }
    }
}
</style>