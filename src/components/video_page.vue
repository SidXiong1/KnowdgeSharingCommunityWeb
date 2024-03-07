<template>
  <div class="box">

    <el-header height="70px">
    <div>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="4" class="leftCol">
          <div>
            <img src="@/assets/logo1.png" class="logo" alt="" />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="input-box">
            <img src="@/assets/search.png" class="prefix-icon" alt="" />
            <el-input placeholder="请输入内容" class="input-inner"></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="rgb(61, 206, 235)"
              text-color="black"
              active-text-color="#ffd04b"
              router
            >
            <el-menu-item index="./index">首页</el-menu-item>
              <el-menu-item index="./ph">文章</el-menu-item>
              <el-menu-item index="./video_page">视频</el-menu-item>
              <el-menu-item index="./talk">讨论</el-menu-item>
              <el-menu-item index="./user" class="menuUser">个人中心<img src="@/assets/user.png" alt="" />
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-header>

    <div class="cover">
      <!--视频播放-->
      <div class="video1">
     <img src="@/assets/water1.png" class="video1-img1">
     <img src="@/assets/water2.jpg" class="video1-img2">
      </div>
      <!--视频播放-->
      <div class="video2" @click="goToVideoDetail(1)" >
        <video  src="@/assets/watervideo1.mp4" controls></video>
        <div class="preline">
          
          <el-link type="_blank" :underline="false" >{{message1}}</el-link> 
        </div>
        <el-link type="_blank" :underline="false">Sandbox</el-link> 
      </div>
    </div>
    
    <div class="recommendation">
      <p class="recommendation-text">CHIEF EDITOR RECOMMENDATION</p>
    </div>
    <div class="cover2">
         <div class="firstlbox">
          <div class="smallbox_mini">
  <img src="@/assets/water2.png">
  <span class="text">河水枯竭，生命燃烧,动物们到河床饮水</span>
</div>
<div class="smallbox_mini2">
  <img src="@/assets/224.webp">
  <img src="@/assets/225.webp">
  <p>海洋是生命的摇篮, 约占地球面积的71%, 海洋生物或许不需要人类保护,但人类需要一个健康的海洋生态系统</p>
</div>
         </div>
         <div class="scendbox">
          <div class="scendbox_video" @click=goToVideoDetail(2) >
          <video src="@/assets/watervideo2.mp4"   controls></video>
          <div class="preline">
            <el-link type="_blank" :underline="false">{{message2}} </el-link>
          </div>
        </div>
        <div class="scendbox_video" @click="goToVideoDetail(3)" >
          <video src="@/assets/watervideo3.mp4"   controls></video>
          <div class="preline">
            <el-link type="_blank" :underline="false">{{message3}}</el-link>
          </div>
        </div>
        <div class="scendbox_video"   @click="goToVideoDetail(4)" >
          <video src="@/assets/watervideo4.mp4" controls></video>
          <div class="preline">
            <el-link type="_blank" :underline="false">{{message4}}    </el-link>
          </div>
        </div>
         </div>
         <div class="thirdbox">
           <p>水孕育了世界的生灵，它推动了我们在生命长河中的航行，是它让生命生生不息，水因此成了我们是宝贵的资源。水，让碧草变得更绿！水，让花儿竞相开放！水，让大
树挺拔茁壮！水占人体的外，花要是饮水格外精神；孩子饮水格外活泼：老人饮水格外慈样。水对人们多么里要。</p>
         </div>
    </div>

    <div class="cover3">
  <h2 class="video-title">相关视频</h2>
  <div class="video-container">
    <div class="video"  >
      <video src="@/assets/相关视频1.mp4" controls alt="相关视频1"></video>
      <div class="content">
        <el-link class="video-name" type="_blank" :underline="true" @click="goToVideoDetail(5)" >{{message5}}</el-link>
      <p >中国水周 Sandbox</p>
    </div>
    </div>
    <div class="video" >
      <video src="@/assets/相关视频2.mp4" controls alt="相关视频2"></video>
      <div class="content">
        <el-link class="video-name" type="_blank" :underline="ftrue" @click="goToVideoDetail(6)" >{{message6}}</el-link>
      <p>中国水周 Sandbox</p>
    </div>
    </div>
  </div>
</div>



  </div>
</template>


<script>


export default {
  name:"video_page",
  data() {
  return {
    like:false,
    activeIndex2: '3',
    message1:"中国水周 世界水日",//视频名字
    message2:"水资源公益片",//视频名字
    message3:"一滴水，一片绿，一座城，坚持人水和谐，建设生态文明",//视频名字
    message4:"公益短片 || No water no life",//视频名字
    message5:"蓝色水星",//视频名字
    message6:"海洋生物"//视频名字
  }
},
methods: {
  
    goToVideoDetail(id) {

      this.$router.push({
        path:"/videodetail",
        query:{id}
      }); // 跳转到视频详情页，确保导航已配置正确
    },
    handleSelect(index) {
      if (index === '3') {
        window.location.reload();
      }
      this.activeIndex2 = index;  //目前导航在 视频 
    }
}
}
</script>



<style scoped>
>>>.el-header[data-v-76186f3a] {
    background-color: rgb(61, 206, 235);
}
.box {
  width: 100vw;
  height: 230vh;
  justify-content: center;
  align-items: center;
  background-color: #78b1e7;
}


.cover {
  width: 90vw;
  height: 40vw; /* 调整高度适应同一行显示 */
  background-color:  #87cdef;
  margin: 4vh 4vw 4vh 4vw;
  border-radius: 10px;
  display: flex; /* 使用Flex布局 */
  flex-wrap: nowrap; /* 防止换行 */
  justify-content: space-between;
}
.cover2{
  width: 90vw;
  height: 40vw; /* 调整高度适应同一行显示 */
  background-color: #87cdef;
  margin: 4vh 4vw 4vh 4vw;
  border-radius: 10px;
}
.cover3{
  width: 90vw;
  height: 30vh; /* 调整高度适应同一行显示 */
  background-color:#87cdef;
  margin: 4vh 4vw 4vh 4vw;
  border-radius: 10px;
}
.firstlbox{
  width: 90vw;
  height:10vw;
background-color: hsl(200, 76%, 73%);
display:flex;
border-radius: 10px;
}
.scendbox{
  width: 90vw;
  height: 40vh;
  background-color: #87cdef;
  border-radius: 10px;
  display:flex;
  flex-wrap: nowrap; /* 防止换行 */
  justify-content: space-between;
  font-weight: bold;
}/*下边视频的大容器 */
.thirdbox{
  width: 86vw;
  height:9vh;
  background-color: rgb(162, 228, 248);
  border-radius: 10px;
  margin: 2vw;
  padding: 1px;
  color:#fff;
  font-size: 1vw;
  font-weight: bold;
}
.video1-img1{
  height: 100%;
  border-radius: 15px;
  margin: 1vw;
}
.video1-img2{
  width: 40%;
  border-radius: 15px;
  margin: 1vw;
}
.smallbox_mini {
  width: 40vw;
  height: 15vh;
  background-color: #87cdef;
  border-radius: 15px;
  margin: 4vh 3vw 1vh 3vw;
  position: relative; /* 设置父容器为相对定位 */
}

.text {
  position: absolute; /* 设置文本为绝对定位 */
  top: 50%; /* 将文本向上偏移50% */
  right: 0.5vw; /* 将文本距离右侧边框10像素 */
  transform: translateY(-50%); /* 上下居中对齐 */
  font-weight: bold;
  color: white;
}/*下边视频上边的东西 */
.smallbox_mini img{
  height: 90%;
  border-radius: 15px;
  padding: 1vh;
}
.smallbox_mini2 {
  width: 40vw;
  height: 15vh;
  background-color: #87cdef;
  color:#fff;
  border-radius: 15px;
  margin: 4vh 3vw 1vh 3vw;
  display: flex; /* 将图标排列在一行 */
  align-items: center; /* 垂直居中对齐 */
  font-weight: bold;
}

.smallbox_mini2 img {
  height: 90%;
  border-radius: 15px;
  padding: 1vh;
}
.video1 {
  width: 40%; /* 调整宽度适应同一行显示 */
  height: 45vh;
  padding: 1vw;
  font-size: 15px;
}

.video1 video {
  max-width: 100%;
  border-radius: 10px;
  margin-right: 100px;
}

.video2 {
  width: 70%; /* 调整宽度适应同一行显示 */
  height: 60vh;
  padding: 1vw;
  font-size: 1vw;
}

.video2 video {
  max-width: 100%;
  border-radius: 10px;
}
.scendbox_video {
  width:30vw;
  font-size: 5px;
  background-color: #87cdef;
  border-radius: 10px;
  /* 设置视频之间的间距 */
  margin: 2vw 2vw 0 2vw;
}/*下边每一个小视频的容器 */

.scendbox_video video {
  max-width: 100%;
  border-radius: 10px;
}
.preline {
  display: flex;
  align-items: center;
}

.video-title {
  margin-right: 10px;
}

.preline img {
  margin: 0;
}

.recommendation {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.recommendation-text {
  color: rgb(113, 29, 29);
  font-weight: bold;
  font-size: 2vw;
  background-color: #78b1e7;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
}

.el-header {
  background-color: #ced4da;
}

.logo {
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
  width: 75%;
}
>>> .el-input__inner {
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

.video-title {
  font-weight: bold;
  font-size: 1.5em;
  margin: 0.5em;
}

.video-container {
  display: flex;
}

.video {
  width: 40vw;
  height: 15vh;
  background-color: #87cdef;
  color:#fff;
  border-radius: 15px;
  margin: 4vh 3vw 1vh 3vw;
  display: flex; /* 将图标排列在一行 */
  align-items: center; /* 垂直居中对齐 */
  font-weight: bold;
}

.video video {
  width: 30%;
  border-radius: 15px;
  padding: 1vh;
}
.video-name{
  font-size: 2vw;
}

</style>