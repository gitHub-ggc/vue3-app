<template>
<div class="dk">
 <div class="dk-top">
    <div class="top-title">打卡</div>
    <div class="top-content">
        <div class="top-box1">
            <div class="box1-name">
                <div class="box1-text">刘小浩</div>
                <div class="box1-class">小班</div>
                <div class="box-use">
                    <img src="../../static/images/icon_owhalrympar/xiazai.png" alt="">
                </div>
            </div>
            <div class="box1-jf">
                <div class="jf-img">
                    <img src="../../static/images/icon_owhalrympar/jifenshangcheng.png" alt="">
                </div>
                <div class="jf-num">2600</div>
            </div>
        </div>
        <div class="top-box2">
            <div class="box2-time">
                <div class="time-date">
                    <span>有效期：</span>
                    <span class="time-span">2022-02-20</span>
                </div>
            </div>
            <div class="time-mouth">
                    <span>3月</span>
                    <div class="time-icon">
                        <van-icon name="play" />
                    </div>
            </div>
        </div>
    </div>
 </div>
 <div class="dk-tab">
    <div class="tab-box">
        <span class="tab-cor" @click="activeEvent(1)" :class="{'tab-cor-ac':active1}">第一周</span>
        <span class="tab-cor" @click="activeEvent(2)" :class="{'tab-cor-ac':active2}">第二周</span>
        <span class="tab-cor" @click="activeEvent(3)" :class="{'tab-cor-ac':active3}">第三周</span>
        <span class="tab-cor" @click="activeEvent(4)" :class="{'tab-cor-ac':active4}">第四周</span>
    </div>
 </div>
 <div class="dk-list">
    <div class="list-title">任务列表</div>
    <div class="list-box" v-for="(item,index) in 6" :key="index">
        <div class="box-content1">
            <div class="content1-box">
                <div class="box-img">
                    <van-icon name="shop-collect" />
                </div>
                <div class="img-title">准备早餐</div>
            </div>
            <div class="content1-rg">+ 15积分</div>
        </div>
        <div class="box-content2">
            <div class="content2-text">全麦面包一片，牛奶一杯</div>
        </div>
        <div class="box-content3">
            <div class="content3-text">鸡蛋一个</div>
            <div class="content3-btn" @click="dkEvent(index)">打卡</div>
        </div>
    </div>
 </div>
 <!-- <van-datetime-picker
  v-model="currentDate"
  type="year-month"
 
  /> -->
  <Footer :path="route.path" 
    v-if="route.path === '/home' ||
    route.path === '/dK' ||
    route.path === '/jF' ||
    route.path === '/gR'">
    </Footer>   
</div>
</template>
<script setup lang="ts">
import Footer from "@/views/components/footer.vue";
import {useRoute,useRouter} from "vue-router";
import {ref,reactive } from 'vue';

const route = useRoute();
const router = useRouter();
let active1 = ref(true);
let active2 = ref(false);
let active3 = ref(false);
let active4 = ref(false);
function activeEvent(num:any){
  active1.value = false; 
  active2.value = false;  
  active3.value = false; 
  active4.value = false; 
  if(num === 1){
    active1.value = true;
  }else if(num === 2){
    active2.value = true;
  }else if(num === 3){
    active3.value = true;
  }else if(num === 4){
    active4.value = true;
  }
}
let currentDate = ref('3');
function dkEvent(num:any){
   router.push(`/dk-detail/${num}`);
}
// function  formatter() {
//             // if (type === 'year') {
//             //     return `${value}年`;
//             // } else if (type === 'month') {
//             //     return `${value}月`
//             // }
//             // return value;
//           }
</script>
<style lang="less" scoped>
.dk{
    box-sizing: border-box;
    padding:10px;
    // height: 100%;
    background: linear-gradient(to bottom right, rgba(155, 138, 255), rgba(100, 86, 251));
    .dk-top{
      .top-title{
        font-size:15px;
        color:#fff;
        text-align: center;
        margin-bottom: 10px;
      }
      .top-content{
        .top-box1{
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            .box1-name{
                display: flex;
                align-items: center;
                .box1-text{
                    font-size: 18px;
                    color:#fff;
                    margin-right: 5px;
                }
                .box1-class{
                    font-size: 12px;
                    color:#fff;
                    padding:2px 10px;
                    background: rgba(78,194,132);
                    border-radius: 10px;
                    display: inline-block;
                    margin-right: 20px;
                }
                .box-use{
                    height: 20px;
                    width:20px;
                    display: flex;
                    img{
                        height: 100%;
                        width:100%;
                    }
                }
            }
            .box1-jf{
                display: flex;
                align-items: center;
                .jf-img{
                    height: 20px;
                    width:20px;
                    display: flex;
                    img{
                        height: 100%;
                        width:100%;
                    } 
                }
                .jf-num{
                    font-size: 18px;
                    color:#fff;
                    margin-left:5px;
                }
            }
        }
        .top-box2{
            display: flex;
            justify-content: space-between;
            .box2-time{
                color:#fff;
                font-size:15px;
                .time-date{
                    display: flex;
                    align-items: center;
                    .time-span{
                        display: inline-block;
                        margin-left:3px;
                    }
                }
            }
            .time-mouth{
                display: flex;
                align-items: center;
                span{
                    font-size: 18px;
                    color:#fff;
                    font-weight: bold;
                }
                .time-icon{
                    display: flex;
                    margin-left:5px;
                    ::v-deep .van-icon{
                      font-size: 10px;
                      color:#fff;
                    }
                    img{
                        width:100%;
                        height: 100%;
                    }
                }
            }
        }
      }  
    }
    .dk-tab{
        margin-top:15px;
        margin-bottom: 20px;
      .tab-box{
        display: flex;
        padding:0 8px;
        justify-content: space-between;
        background: linear-gradient(to bottom right, rgba(139, 113, 234), rgba(110, 85, 216));
        .tab-cor{
            color:#fff;
            font-size:16px;
            padding:8px 0;
        }
        .tab-cor-ac{
            color:rgba(219, 193, 88)
        }
      }  
    }
    .dk-list{
      padding-bottom: 50px;
      .list-title{
        font-size:18px;
        color:#fff;
        font-weight: bold;
        text-align: center;
        margin-bottom: 15px;
      }
      .list-box{
        background: #fff;
        margin-bottom: 15px;
        border-radius: 10px;
        padding:10px;
        .box-content1{
            margin-bottom: 8px;
           display: flex;
           justify-content: space-between;
           .content1-box{
            display: flex;
            align-items: center;
            .box-img{
                display: flex;
                width:20px;
                height: 20px;
                ::v-deep .van-icon{
                    font-size: 20px;
                    color:rgba(255, 186, 0);
                }
                img{
                    width:100%;
                    height: 100%;
                }
            }
            .img-title{
                font-size:15px;
                font-weight: bold;
                margin-left:10px;
            }
           }
           .content1-rg{
            font-size: 15px;
            color:rgba(110, 85, 216);
           }
        }
        .box-content2{
            font-size: 15px;
            margin-left:20px;
            margin-bottom: 10px;
            color:rgba(156, 156, 156);
            .content2-text{
                margin-left:10px;
            }
        }
        .box-content3{
            display: flex;
            padding-left:10px;
            justify-content: space-between;
            .content3-text{
                color:rgba(156, 156, 156);
                font-size:15px;
                margin-left:20px;
            }
            .content3-btn{
                font-size:16px;
                color:#fff;
                padding:3px 15px;
                border-radius: 15px;
                background: rgba(255, 186, 0);
            }
        }
      }
    }
} 
</style>