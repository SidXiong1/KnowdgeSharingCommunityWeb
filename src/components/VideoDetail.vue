<template>
  <el-container direction="vertical">
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
                background-color="#ced4da"
                text-color="black"
                active-text-color="#ffd04b"
              >
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">文章</el-menu-item>
                <el-menu-item index="3">视频</el-menu-item>
                <el-menu-item index="4">讨论</el-menu-item>
                <el-menu-item index="5" class="menuUser"
                  >个人中心<img src="@/assets/user.png" alt="" />
                </el-menu-item>
              </el-menu>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-header>

    <el-main>
      <!-- 视频展示 -->
      <div class="clearfix">
        <h1>{{ videoTitle }}</h1>
      </div>
      <!-- 视频播放 -->
      <div class="video-container">
        <video :src="src" class="videosrc" controls></video>
        <!-- <source src="csgo.mp4" type="video/mp4"> -->
      </div>

      <!-- 间隔 -->
      <div class="k1"></div>

      <!-- 评论发布 -->
      <div class="commentbox">
        <div class="comment">
          <el-input
            class="input"
            v-model="input"
            placeholder="请输入你的评论"
          ></el-input>
          <el-button type="primary" round onclick="comment_new">发布</el-button>
        </div>
      </div>

      <!-- 间隔 -->
      <div class="k1"></div>

      <!-- 评论展示 -->
      <el-card class="commentbox-card">
        <div class="clearfix">
          <h1>全部评论</h1>
        </div>
        <el-divider></el-divider>

        <div
          class="comment-section"
          v-for="comment in comments"
          :key="comment.comment_id"
        >
          <div class="comment-content">
            <div class="comment-header">
              <span class="username">{{ comment.comment_user_id }}</span>
              <span class="timestamp">{{ comment.comment_time }}</span>
            </div>
            <div class="comment-main">
              <p class="comment-text">{{ comment.comment_text }}</p>
              <el-button
                class="likeButton"
                type="primary"
                icon="el-icon-thumb"
                @click="likeadd"
                >{{comment.comment_likenum }}</el-button
              >
            </div>
          </div>
        </div>

        <!-- 更多评论... -->
        <div class="moreconment">
          <el-button round class="showMoreButton">显示更多</el-button>
        </div>
      </el-card>

      <!-- 间隔 -->
      <div class="k1"></div>
      <!-- 相关视频 -->
      <el-card class="rve">
        <div>
          <h1>相关视频</h1>
        </div>
        <el-divider></el-divider>
        <!-- 相关视频详情 -->
        <el-row :gutter="20" class="elrow">
          <el-col :span="6" class="elcol"
            ><div class="grid-content bg-purple">
              <img src="@/assets/video001.png" class="videoImg" /></div
          ></el-col>
          <el-col :span="6" class="elcol"
            ><div class="grid-content bg-purple">
              <p>{{ videoName }}</p>
            </div></el-col
          >
          <el-col :span="6" class="elcol"
            ><div class="grid-content bg-purple">
              <p>{{ videoTime }}</p>
            </div></el-col
          >
          <el-col :span="6" class="elcol"
            ><div class="grid-content bg-purple">
              <p>{{ videoDate }}</p>
            </div></el-col
          >
          <el-col :span="6" class="elcol"
            ><div class="grid-content bg-purple">
              <p>{{ videoDescribe }}</p>
            </div></el-col
          >
          <el-col :span="6" class="elcol"
            ><div class="grid-content bg-purple">
              <el-button round @click="goToVideoDetail5">视频详情-></el-button>
            </div></el-col
          >
        </el-row>

        <el-row :gutter="20" class="elrow">
          <el-col :span="6" class="elcol"
            ><div class="grid-content bg-purple">
              <img src="@/assets/video002.png" class="videoImg" /></div
          ></el-col>
          <el-col :span="6" class="elcol"
            ><div class="grid-content bg-purple">
              <p>{{ videoName2 }}</p>
            </div></el-col
          >
          <el-col :span="6" class="elcol"
            ><div class="grid-content bg-purple">
              <p>{{ videoTime2 }}</p>
            </div></el-col
          >
          <el-col :span="6" class="elcol"
            ><div class="grid-content bg-purple">
              <p>{{ videoDate2 }}</p>
            </div></el-col
          >
          <el-col :span="6" class="elcol"
            ><div class="grid-content bg-purple">
              <p>{{ videoDescribe2 }}</p>
            </div></el-col
          >
          <el-col :span="6" class="elcol"
            ><div class="grid-content bg-purple">
              <el-button @click="goToVideoDetail6" round>视频详情-></el-button>
            </div></el-col
          >
        </el-row>
      </el-card>

      <div class="end">
        <p>@D个痛快</p>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import axios from "axios";

export default {
  name: "VideoDetail",

  data() {
    return {
      newid: 0,
      id: this.$route.query.id,
      comments: [], // 初始化为空数组

      input: "",
      usename: "张铈烊",
      conmentText: "保护水资源，保护地球。",
      conmentTime: "2023 07 07",
      likecount: 1555,

      videoName: " 蓝色水星 ",
      videoTime: "1min57s ",
      videoDate: "2023.7.8",
      videoDescribe: "地球是大部分是水",

      videoName2: " 海洋生物 ",
      videoTime2: "33s ",
      videoDate2: "2023.7.7",
      videoDescribe2: "海洋生物居多",

      src: "", // 初始化为一个空字符串
      videoTitle: "",
      errorMessage :""
    };
  },
  mounted() {
    if (this.id == 1) {
      this.src = require("@/assets/watervideo1.mp4");
      this.videoTitle = "中国水周,世界水日";
    } else if (this.id == 2) {
      this.src = require("@/assets/watervideo2.mp4");
      this.videoTitle = "水资源公益片";
    } else if (this.id == 3) {
      this.src = require("@/assets/watervideo3.mp4");
      this.videoTitle = "一滴水，一片绿，一座城，坚持人水和谐，建设生态文明";
    } else if (this.id == 4) {
      this.src = require("@/assets/watervideo4.mp4");
      this.videoTitle = "公益短片 || No water no life";
    } else if (this.id == 5) {
      this.src = require("@/assets/相关视频1.mp4");
      this.videoTitle = "蓝色水星";
    } else if (this.id == 6) {
      this.src = require("@/assets/相关视频2.mp4");
      this.videoTitle = "海洋生物";
    } else if (this.newid == 7) {
      this.src = require("@/assets/相关视频1.mp4");
      this.videoTitle = "蓝色水星";
    } else if (this.newid == 8) {
      this.src = require("@/assets/相关视频2.mp4");
      this.videoTitle = "海洋生物";
    } else if (this.newid == 9) {
      this.src = require("@/assets/相关视频2.mp4");
      this.videoTitle = "海洋生物";
    }
    this.fetchComments();
  },
  methods: {
    open1(){
      const h = this.$createElement;
      this.$notify({
        title: "评论提示",
        message: h("i", { style: "color: teal" }, this.errorMessage),
      });
    },
    async comment_new() {
          try {
            const response = await fetch("http://localhost:3000/comment/new", {
              method: "get",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                
                
              }),
            });
            if (response.ok) {
              // Redirect to main page if login is successful
              this.errorMessage = "OK.";
  
              // 跳转到main.vue页面
              this.$router.push("/index");
            } else {
              // Show error message if login fails
  
              this.errorMessage = "用户名或密码不正确，请重新输入";
            }
          } catch (error) {
            this.errorMessage = "An error occurred. Please try again later.";
          }
        this.open1();//提示信息推送
      },

    likeadd() {
      this.comment.comment_likenumt = this.likecount + 1;
    },

    handleSelect(index) {
      if (index == "3") {
        window.location.reload();
      }
      this.activeIndex2 = index; //目前导航在 视频
    },


    fetchComments() {
      axios
        .get("http://localhost:3000/comment", {
          params: {
            videoId: this.id, // 替换为实际的视频ID
          },
        })
        .then((response) => {
          this.comments = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style scoped>
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
.el-main {
  background-color: lightskyblue;
  display: flex; /* 使用flexbox布局 */
  justify-content: center; /* 水平居中 */
  flex-direction: column;
  align-items: center;
}
.video-container {
  border-radius: 10px;
  width: 1450px;
  height: 650px;
  background-color: deepskyblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
.video-container video {
  height: 95%;
  width: 98%;
  display: block;
  object-fit: fill;
}
.k1 {
  height: 20px;
}
.commentbox {
  border-radius: 10px;
  background-color: deepskyblue;
  width: 1450px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.comment {
  width: 800px;
  height: 40px;
  display: flex;
  flex-direction: row;
}
.commentbox-card {
  background-color: lightskyblue;
  border-radius: 10px;
  width: 1450px;
}

.comment-section {
  border-radius: 10px;
  width: 1410px;
  display: flex;
  justify-content: center;
}

.comment-content {
  flex: 1;
  margin-left: 10px;
}
.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.comment-main {
  display: flex;
  justify-content: space-between;
}
.comment-main p {
  width: 1000px;
}

.username {
  font-weight: bold;
  /* 用户名样式 */
}
.timestamp {
  color: #999;
  /* 时间戳样式 */
}
.moreconment {
  display: flex;
  justify-content: center;
}
.showMoreButton {
  display: block;
  margin-bottom: -10px;
}
.rve {
  border-radius: 10px;
  width: 1450px;
  background-color: lightskyblue;
}

.elrow {
  padding: 20px;
}
.elcol {
  height: 60px;
  width: 230px;
}
.videoImg {
  width: 50px;
  height: 50px;
}
</style>
