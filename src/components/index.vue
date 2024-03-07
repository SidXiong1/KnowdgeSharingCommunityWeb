<template>
  <el-container class="container">
    <el-header height="70px">
      <div>
        <el-row :gutter="15">
          <el-col :span="4" class="leftCol">
            <img src="@/assets/logo1.png" alt="" />
          </el-col>
          <el-col :span="12">
            <div class="input-box">
              <img src="@/assets/search.png" class="prefix-icon" alt="" />
              <el-input placeholder="请输入内容" class="input-inner"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <el-menu router :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
              background-color="rgb(61, 206, 235)" text-color="black" active-text-color="#ffd04b">
              <el-menu-item index="./index">首页</el-menu-item>
              <el-menu-item index="./ph">文章</el-menu-item>
              <el-menu-item index="./video_page">视频</el-menu-item>
              <el-menu-item index="./talk">讨论</el-menu-item>
              <el-menu-item index="./user" class="menuUser">个人中心<img src="@/assets/user.png" alt="" />
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col></el-col>
        </el-row>
      </div>
    </el-header>

    <el-container>
      <el-container>
        <el-main>
          <div class="shiping">
            <el-button type="primary" round class="anniu" @click="GOTO1">更多视频</el-button>
            <el-empty image-size="200" description="水治理" class="logo"
              image="https://tse2-mm.cn.bing.net/th/id/OIP-C.swfIydInZS_ppLr-H3ySvAHaFB?pid=ImgDet&rs=1">
              <el-button type="primary">播放</el-button>
            </el-empty>
            <el-empty image-size="200" description="水污染" class="logo"
              image="https://pic.ntimg.cn/file/20190306/25875152_101108557085_2.jpg">
              <el-button type="primary">播放</el-button>
            </el-empty>
            <el-empty image-size="200" description="水资源" class="logo"
              image="https://img.zcool.cn/community/011acc5df51cb8a8012097b3a4bc23.jpg@1280w_1l_2o_100sh.jpg">
              <el-button type="primary">播放</el-button>
            </el-empty>
            <p class="ppp">热门视频</p>
          </div>
          <div class="wenzhang">

            <el-button type="primary" round class="anniu" @click="GOTO2">更多文章</el-button>
            <div style="width: 240px" class="hhh">
              <el-skeleton style="width: 240px" :loading="loading" animated :throttle="500">
                <template slot="template">
                  <el-skeleton-item variant="image" style="width: 240px; height: 240px;" />
                  <div style="padding: 14px;">
                    <el-skeleton-item variant="h3" style="width: 50%;" />
                    <div
                      style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;">
                      <el-skeleton-item variant="text" style="margin-right: 16px;" />
                      <el-skeleton-item variant="text" style="width: 30%;" />
                    </div>
                  </div>
                </template>
                <template>
                  <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
                    <img src="https://img.zcool.cn/community/011acc5df51cb8a8012097b3a4bc23.jpg@1280w_1l_2o_100sh.jpg"
                      class="image_" />
                    <div style="padding: 14px;">
                      <span>水资源</span>
                      <div class="bottom card-header">
                        <span class="time">{{ currentDate }}</span>
                        <el-button type="text" class="button">查看</el-button>
                      </div>
                    </div>
                  </el-card>
                </template>
              </el-skeleton>
            </div>

            <div style="width: 240px" class="hhh">
              <el-skeleton style="width: 240px" :loading="loading" animated :throttle="500" class="">
                <template slot="template">
                  <el-skeleton-item variant="image" style="width: 240px; height: 240px;" />
                  <div style="padding: 14px;">
                    <el-skeleton-item variant="h3" style="width: 50%;" />
                    <div
                      style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;">
                      <el-skeleton-item variant="text" style="margin-right: 16px;" />
                      <el-skeleton-item variant="text" style="width: 30%;" />
                    </div>
                  </div>
                </template>
                <template>
                  <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
                    <img src="https://pic.ntimg.cn/file/20190306/25875152_101108557085_2.jpg"
                      class="image_" />
                    <div style="padding: 14px;">
                      <span>水污染</span>
                      <div class="bottom card-header">
                        <span class="time">{{ currentDate }}</span>
                        <el-button type="text" class="button">查看</el-button>
                      </div>
                    </div>
                  </el-card>
                </template>
              </el-skeleton>
            </div>



            <div style="width: 240px" class="hhh">
              <el-skeleton style="width: 240px" :loading="loading" animated :throttle="500">
                <template slot="template">
                  <el-skeleton-item variant="image" style="width: 240px; height: 240px;" />
                  <div style="padding: 14px;">
                    <el-skeleton-item variant="h3" style="width: 50%;" />
                    <div
                      style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;">
                      <el-skeleton-item variant="text" style="margin-right: 16px;" />
                      <el-skeleton-item variant="text" style="width: 30%;" />
                    </div>
                  </div>
                </template>
                <template>
                  <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
                    <img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.swfIydInZS_ppLr-H3ySvAHaFB?pid=ImgDet&rs=1"
                      class="image_" />
                    <div style="padding: 14px;">
                      <span>水治理</span>
                      <div class="bottom card-header">
                        <span class="time">{{ currentDate }}</span>
                        <el-button type="text" class="button">查看</el-button>
                      </div>
                    </div>
                  </el-card>
                </template>
              </el-skeleton>
            </div>
            <p class="ppp">热门文章</p>
          </div>

          <router-view />
        </el-main>
        <el-footer height="30px">水一方 版权所有@ D个痛快</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

 
export default {
  name: "Main",
  data() {
    return {
      loading: false,
      currentDate: '2021-06-01'
    }
  },
  methods: {
    GOTO1(){
      this.$router.push({ path: '/video_page' })

    },
    GOTO2(){
      this.$router.push({ path: '/PH' })

    },
  }
};
</script>

<style scoped>
.container {
  height: 100%;
}

.el-header {
  background-color: rgb(61, 206, 235)
}

.leftCol img {
  width: 90%;
  height: 70px;
}

.input-box {
  width: 492px;
  height: 50px;
  background-color: #f1f2f7;
  border-radius: 25px;
  margin-top: 5px;
  display: flex;
  align-items: center;
}

.prefix-icon {
  height: 23px;
  width: 23px;
  margin: 0 3px 0 22px;
}

.input-inner {
  width: 200px;
}

>>>.el-input__inner {
  border: none;
  outline: none;
  background-color: #f1f2f7;
}

.el-menu-demo {
  height: 70px;
}

.menuUser img {
  width: 40px;
  height: 40px;
}

/* .el-aside {
  background-color: #304156;
  color: #fff;
} */
.el-main {
  background-color: #78b1e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
}

.shiping {
  margin-top: 50px;
  background-color: #87cdef;
  width: 1300px;
  height: 500px;
  display: flex;
  justify-self: space-around;
  border-radius: 40px;
  overflow: hidden;
  flex-wrap: wrap;
  flex-direction: row-reverse
}

>>>.el-empty__description p {
  margin: 0;
  font-size: 20px;
  color: #000000;
}

.logo {
  /* width: 200;
  height: 200; */
  margin: 100px 80px 100px 80px;
  color: black;
}

.el-empty .ppp {
  margin-left: 50px;
  font-family: Hiragino Sans GB;
  font-size: 50px;
}

.wenzhang {
  margin-top: 50px;
  background-color: #87cdef;
  width: 1300px;
  height: 500px;
  display: flex;
  justify-self: space-around;
  border-radius: 40px;
  overflow: hidden;
  flex-wrap: wrap;
  flex-direction: row-reverse
    /* flex-direction: column; */
    /* font-size: 20px; */
    /* align-items: center; */

}

>>>.el-button--text {
  border-color: transparent;
  color: #191a1b;
  background: 0 0;
  padding-left: 0;
  padding-right: 0;
}

.anniu {
  height: 500px;
}

.hhh {
  margin: 100px 60px 100px 60px;

}

.el-footer {
  background-color: #5ebcec;
  display: flex;
  justify-content: center;
  align-items: center;
}

>>>.el-card {
  border-radius: 4px;
  border: none;
  background-color: #46b3de;
  overflow: hidden;
  color: #303133;
  transition: .3s;
}
.image_{
width:250px;
height:200px;
}
</style>