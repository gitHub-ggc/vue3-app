<template>
<div class="dk-detail">
 <BarNav :title="title" :showIcon="true"></BarNav>
 <div class="detail-banner">
    <div class="banner-box">
        <div class="boxs">
            <van-icon name="shop-collect" />
            <div class="boxs-text">准备早餐</div>
        </div>
        <div class="box-rg">+ 15积分</div>
    </div>
    <div class="banner-text">全麦面包一片，牛奶一杯，鸡蛋一个</div>
 </div>
 <div class="detail-pic">
    <div class="pic-title">上传照片</div>
    <Upload></Upload>
 </div>
 <div class="detail-dk">
    <div class="dk-box" @click="dkClick">
        <div class="text1">立即</div>
        <div class="text2">打卡</div>
    </div>
 </div>
</div>
</template>
<script setup lang="ts">
import BarNav from "@/views/components/barNav.vue";
import Upload from "@/views/components/upload.vue";
import { ref, reactive} from 'vue';


const title = ref('打卡详情页');
const dkFlat = ref(false)
function dkClick(){
  dkFlat.value = true;      
}
</script>
<style lang="less" scoped>
 .dk-detail{
    overflow: hidden;
  #bar-nav .bar-title{
    text-align: center;
    width:100%;
    font-size: 18px;
  }
  .detail-banner{
    margin:63px 10px 20px 10px;
    padding:10px;
    background: linear-gradient(to bottom right, rgba(155, 138, 255), rgba(100, 86, 251));
    border-radius: 10px;
    .banner-box{
       display: flex;
       justify-content: space-between;
       width:100%;
       margin-bottom: 10px;
       .boxs{
        display: flex;
        align-items: center;
        ::v-deep .van-icon{
            font-size:15px;
            color:rgba(255, 182, 0);
        }
        .boxs-text{
            margin-left:10px;
            font-size:15px;
            color:rgba(255, 182, 0);
        }
       }
       .box-rg{
           font-size:15px;
           color:#fff;
       }
    }
    .banner-text{
        font-size: 15px;
        color: #fff;
        margin-left: 20px;
    }
  }
  .detail-pic{
    padding:0 10px;
    .pic-title{
        font-size:16px;
        color:#000;
        font-weight: bold;
        margin-bottom: 20px;
    }
  }
  .detail-dk{
    padding-top:40px;
    .dk-box{
        width:120px;
        height: 120px;
        background: linear-gradient(to bottom right, rgba(255, 202, 0), rgba(255, 159, 0));
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin:0 auto;
        .text1,.text2{
            color:#fff;
            font-size:17px;
        }
    }
  }

 }   
</style>