<script setup lang="ts">
import Footer from "@/views/components/footer.vue"
import { useRoute, useRouter } from "vue-router"
const route = useRoute();
</script>

<template>
  <div id="home">
    <div class="home-bg">
      <div class="bg-box">
        <div class="box-title">
          首页
        </div>
        <div class="box-userinfo">
          <div class="userinfo-box">
            <span class="uer-name">刘小浩</span>
            <span class="uer-class">小班</span>
            <span class="uer-icon">
              <img src="../static/images/icon_owhalrympar/xiazai.png" alt="">
            </span>
          </div>
          <div class="user-right">
            <div class="user-icon">
              <img src="../static/images/icon_owhalrympar/jifenshangcheng.png" alt="">
            </div>
            <div class="user-num">2600</div>
          </div>
        </div>
        <div class="bg-time">
          <div class="time-title">有效期: </div>
          <div class="time-date">2022-02-20</div>
        </div>
      </div>
    </div>
    <div class="home-banner">
      <div class="banner-box">
        <img src="../static/images/git2.png" alt="">
      </div>
    </div>
    <div class="home-list">
      <div class="list-title">
        <div class="title-icon">
          <img src="" alt="">
        </div>
        <div class="title-text">礼盒列表</div>
      </div>
      <div class="list-content">
        <div class="list-box" v-for="(item,index) in 6" :key="index">
          <div class="list-img">
            <img src="../static/images/banner2.jpg" alt="">
          </div>
          <div class="box-title">这里是标题</div>
          <div class="box-content">这里是礼盒内容数据</div>
          <div class="box-btn">
            <span>购买</span>
          </div>
        </div>
      </div>
    </div>
    <Footer :path="route.path" 
    v-if="route.path === '/home' ||
    route.path === '/dK' ||
    route.path === '/jF' ||
    route.path === '/gR'">
    </Footer>
  </div>
</template>

<style scoped lang="less" >
#home{
 box-sizing: border-box;
 position: relative;
 .home-bg{
  overflow: hidden;
  height: 200px;
  border-radius: 0 0 20px 20px;
  background: linear-gradient(to bottom right, rgab(255,172,69), #A0F1EA);
  background: linear-gradient(to bottom right, rgba(255,172,69), rgba(255,141,39));
  .bg-box{
    padding:10px;
    .box-title{
      color:#fff;
      font-size: 16px;
      text-align: center;
      margin-bottom: 20px;
      font-weight: bolder;
    }
    .box-userinfo{
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .userinfo-box{
        display: flex;
        align-items: center;
        .uer-name{
          font-size: 18px;
          color:#fff;
          display: inline-block;
          margin-right: 10px;
        }
        .uer-class{
          font-size: 12px;
          color:#fff;
          padding:2px 10px;
          background: rgba(78,194,132);
          border-radius: 10px;
          display: inline-block;
          margin-right: 20px;
        }
        .uer-icon{
          height: 20px;
          width:20px;
          display: flex;
          img{
            height: 100%;
            width:100%;
          }
        }
      }
      .user-right{
        display: flex;
        align-items: center;
        .user-icon{
          height: 20px;
          width:20px;
          display: flex;
          img{
            height: 100%;
            width:100%;
          }
        }
        .user-num{
          color:#fff;
          font-size:18px;
          margin-left:10px;
          font-weight: bolder;
        }
      }
    }
    .bg-time{
      display: flex;
      color:#fff;
      font-size:14px;
      .time-title{
        margin-right: 10px;
      }
    }
  }
 }
 .home-banner{
  position:absolute;
  top:110px;
  left:0px;
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  .banner-box{
    height: 150px;
    display: flex;
    padding: 20px;
    img{
      width:100%;
      border-radius: 10px;
    }
  }
 }
 .home-list{
  padding:10px;
  padding-right: 0;
  margin-top:85px;
  padding-bottom: 50px;
  .list-title{
    display: flex;
    align-items: center;
    margin-bottom: 0px;
    .title-icon{
      display: flex;
      width:20px;
      height: 20px;
      img{
        width:100%;
        height: 100%;
      }
    }
    .title-text{
      font-weight: bolder;
      color:#000;
      font-size:16px;
      margin-left:10px;
    }
  }
  .list-content{
    overflow: hidden;
    .list-box{
      float: left;
      width:47%;
      margin-right: 10px;
      margin-bottom: 10px;
      background: rgba(207,255,228);
      .list-img{
        width:100%;
        height: 100px;
        display: flex;
        margin-bottom: 5px;
        img{
          width:100%;
          height:100%;
        }
      }
      .box-title{
        text-align: center;
        color:rgba(227,136,44);
        font-size: 15px;
        margin-bottom: 0px;
      }
      .box-content{
        text-align: center;
        color:rgba(254,185,105);
        font-size: 12px;
        margin-bottom: 5px;
      }
      .box-btn{
        display: flex;
        justify-content: center;
        padding-bottom: 10px;
        span{
          border-radius: 10px;
          display: inline-block;
          color:#fff;
          padding:3px 10px;
          background: rgba(254,185,105);
        }
      }
    }
  }
 }
}
</style>
