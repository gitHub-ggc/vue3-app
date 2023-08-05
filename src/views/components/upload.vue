<template>
<div class="upload">
    <div class="imgs">
        <div class="img-box" v-for="(item,index) in imgArr" :key="index">
            <img src="../../static/images/banner4.jpg" alt="">
            <van-icon name="close" @click="closeEvent(index)" />
        </div>
    </div>
    <van-uploader :after-read="onRead">
     <div class="upload-box">
        <van-icon name="plus" />
        <div class="text">上传照片/视频</div>
     </div>
    </van-uploader>
</div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

const imgArr = reactive(['defalut']);
function onRead(file:any) {
           if(file){
            imgArr.push(1);
           }
         }
function closeEvent(num:any){
   imgArr.splice(num,1);
}
</script>
<style lang="less" scoped>
.upload{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .imgs{
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
     .img-box{
        border-radius: 10px;
        width:93px;
        height: 93px;
        margin-right: 10px;
        margin-bottom: 10px;
        position: relative;
        img{
            width:100%;
            height: 100%;
        }
        ::v-deep .van-icon{
            position: absolute;
            color:#f00;
            font-size:20px;
            top:-8px;
            right: -10px;
        }
     }   
    }
   .upload-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:20px 10px;
    border:1px dashed rgba(192, 192, 192);
    border-radius: 10px;
    ::v-deep .van-icon{
        font-size:20px;
        color:rgba(135, 135, 135);
    }
    .text{
        font-size:12px;
        color:rgba(135, 135, 135);
        margin-top:15px;
    }
   }
}
</style>