<template>
  <el-container class="container">
    <el-header height="70px">
      <div>
        <el-row :gutter="15">
          <el-col :span="4" class="leftCol">
            <img src="@/assets/logo2.png" alt="" />
          </el-col>
          <el-col :span="12">
            <div class="input-box">
              <img src="@/assets/search.png" class="prefix-icon" alt="" />
              <el-input placeholder="请输入内容" class="input-inner"
             
              ></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="rgb(61, 206, 235)"
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
          </el-col>
          <el-col></el-col>
        </el-row>
      </div>
    </el-header>

    <!-- 导航栏结束 -->
    <el-container>
      <el-container>
        <el-main>
          <div v-for="topic in topics" :key="topic.id" class="shiping1">
            <span> {{ topic.title }}</span>
            <!-- <span> {{ topicNa }}</span> -->

            <div class="shiping5">{{ topic.content }}</div>
            <!-- <div class="shiping5">{{ topicDoc }}</div> -->
            <div class="date">
              {{ topic.username }}
              <!-- {{ auther }} -->
              <br />
              {{ topic.create_time }}
              <!-- {{ editdate }} -->
            </div>
          </div>
          <div class="input">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="总座有何高见"
              v-model="textarea"
            >
            </el-input>

            <el-button type="primary" round>发布</el-button>
          </div>

          <div class="shiping1">
            <span> 热门回帖</span>

            <div class="shiping5">
              <el-row :gutter="20">
                <el-col :span="16" 
                v-for="reply in replys" :key="reply.id"
                  ><div class="grid-content bg-purple">
                    <div class="reply1">
                      <div class="date">
                        {{ reply.username }}
                        <br />
                        {{ reply.create_time }}
                      </div>
                      <div class="content">
                        {{ reply.content }}
                      </div>
                      <div class="el-icon-chat-dot-square">
                        点赞量999
                      </div>
                    </div>
                  </div></el-col
                >
              </el-row>
            </div>
          </div>
          <!-- 
          <div class="shiping1">
            <span> 热门讨论</span>

            <div class="shiping2">
              <div class="item" v-for="item in imgUrl" :key="item.url">
                <img :src="item.img" alt="" />

                <h6>{{ item.text }}</h6>
              </div>
            </div>
          </div> -->
          <!-- <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination> -->

          <!-- <div class="shiping3"></div> -->

          <router-view />
        </el-main>
        <el-footer height="30px">水一方 版权所有@ D个痛快</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>


  <script>
import axios from "axios";
export default {
  data() {
    return {
      replys: [],
      topics: [],
      error: "",
      topic_id: this.$route.query.topic_id,
      textarea:"",

      topicNa: "必由之路：中国式现代化关键在科技现代化",
      topicDoc:
        "加快实现高水平科技自立自强，是推动高质量发展的必由之路。习近平总书记指出，中国式现代化关键在科技现代化。",
      textarea1: "",
      textarea2: "",

      loading: false,
      currentDate: "2021-06-01",

      auther: "auther",
      editdate: "2021-06-01",

      // replys:[
      // { id:1, auther: "川建国",editdate:"2021-2-3",contents:" Maybe this is life", num: 90

      // },

      // {id:2, auther: "奥观海",editdate:"2021-2-3",contents:" Maybe this is life", num: 90

      // },
      // {id:3, auther: "奥观海",editdate:"2021-2-3",contents:" Maybe this is life", num: 90

      // },
      // {id:4, auther: "奥观海",editdate:"2021-2-3",contents:" Maybe this is life", num: 90

      // },
      // {id:5, auther: "奥观海",editdate:"2021-2-3",contents:" Maybe this is life", num: 90

      // },
      // {id:6, auther: "奥观海",editdate:"2021-2-3",contents:" Maybe this is life", num: 90

      // },
      // {id:7, auther: "奥观海",editdate:"2021-2-3",contents:" Maybe this is life", num: 90

      // },
      // {id:8, auther: "奥观海",editdate:"2021-2-3",contents:" Maybe this is life", num: 90

      // },
      // {id:1, auther: "奥观海",editdate:"2021-2-3",contents:" Maybe this is life", num: 90

      // },

      // ],

      imgUrl: [
        {
          img: require("../assets/fixed-image/stream-01.jpg"),
          text: "Hey fuck u",
        },
        {
          img: require("../assets/fixed-image/stream-02.jpg"),
          text: "Hey fuck u",
        },
        {
          img: require("../assets/fixed-image/stream-03.jpg"),
          text: "Hey fuck u",
        },
        {
          img: require("../assets/fixed-image/stream-04.jpg"),
          text: "Hey fuck u",
        },
        {
          img: require("../assets/fixed-image/stream-05.jpg"),
          text: "Hey fuck u",
        },
        {
          img: require("../assets/fixed-image/stream-06.jpg"),
          text: "Hey fuck u",
        },
        {
          img: require("../assets/fixed-image/stream-07.jpg"),
          text: "Hey fuck u",
        },
        {
          img: require("../assets/fixed-image/stream-08.jpg"),
          text: "Hey fuck u",
        },
      ],

      imgList: [
        {
          id: 0,
          idView:
            "https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2022%2F0113%2F32cf6483j00r5njjk005lc000zk0251m.jpg&thumbnail=660x2147483647&quality=80&type=jpg",
        },
        {
          id: 1,
          idView:
            "https://img0.baidu.com/it/u=2617817781,3254387725&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=653",
        },
        {
          id: 2,
          idView:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fd10836cd-6b58-4289-b328-3def9ad1f604%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1691307979&t=2304b069adcfb42662bc04cdf1cb61c1",
        },
        {
          id: 3,
          idView:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fc8579f05-db8e-478a-b64c-4c93f3fe8f38%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1691307980&t=cca70de39f42a7730710d4cd583a53a3",
        },
        {
          id: 4,
          idView:
            ".https://img1.18183.com//image/20211018/1634523728233074.jpeg",
        },
        {
          id: 5,
          idView:
            "https://img1.baidu.com/it/u=3657240955,645121638&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=625",
        },
        {
          id: 6,
          idView:
            "https://p3.itc.cn/q_70/images01/20210719/67f49f3e783e497a80170bcda0c58c79.jpeg",
        },
      ],

      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
  mounted() {
    this.fetchTopic();
    this.fetchReply();
  },
  methods: {
    gotoDetail(id) {
      this.$router.push({ path: "/Detail?topic_id=" + id });
    },
    fetchTopic() {
      this.error = "进入topic查询";
      // 发起获取评论的请求
      // 假设你使用axios库来进行请求
      axios
        .get("http://localhost:3000/topic", {
          params: {
            topic_id: this.topic_id, // 替换为实际的视频ID
          },
        })
        .then((response) => {
          this.topics = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fetchReply() {
      this.error = "进入reply查询";
      // 发起获取评论的请求
      // 假设你使用axios库来进行请求
      axios
        .get("http://localhost:3000/topicReply", {
          params: {
           topic_id: this.topic_id, // 替换为实际的视频ID
          },
        })
        .then((response) => {
          this.replys = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
  
  <style scoped>
.container {
  height: 100%;
}
.el-header {
  background-color: rgb(61, 206, 235);
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
/* .el-aside {
    background-color: #304156;
    color: #fff;
  } */
.el-main {
  background-color: rgba(61, 206, 235, 0.4);

  background-image: url("../assets/fixed-image/banner-bg.jpg");
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.lunbo {
  margin-top: 50px;
  background-color: #3baee7;
  width: 1300px;
  height: 500px;
  display: flex;
}
.shiping {
  margin-top: 50px;
  background-color: #3baee7;
  width: 1300px;
  height: 500px;
  display: flex;
  justify-self: space-around;
  border-radius: 40px;
  overflow: hidden;
  flex-wrap: wrap;
  /* flex-direction: row-reverse; */
}

.shiping2 {
  margin-top: 50px;
  margin-left: 90px;
  background-color: rgba(11, 131, 205, 0.4);
  width: 90%;
  height: 900px;
  display: flex;
  /* justify-self: space-around; */
  border-radius: 40px;
  overflow: hidden;
  flex-wrap: wrap;
  /* flex-direction: row-reverse; */
}
.shiping5 {
  background-size: cover;
  background-attachment: scroll;

  padding-left: 30px;
  margin-top: 50px;
  margin-left: 90px;
  background-color: rgba(11, 131, 205, 0.4);
  width: 90%;
  color: #000;
  display: flex;
  /* justify-self: space-around; */
  border-radius: 40px;
  overflow: hidden;
  flex-wrap: wrap;
  /* flex-direction: row-reverse; */
}

.shiping3 {
  margin-top: 50px;
  background-color: #3baee7;
  width: 1300px;
  height: 10px;
  display: flex;
  justify-self: space-around;
  border-radius: 40px;
  overflow: hidden;
  flex-wrap: wrap;
}

.shiping1 {
  margin-top: 50px;
  padding-top: 25px;
  background-color: rgba(77, 206, 232, 0.4);
  width: 1300px;

  /* display: flex; */
  /* justify-self: space-around; */
  border-radius: 40px;
  overflow: hidden;
  flex-wrap: wrap;
  text-align: left;
  color: rgb(182, 188, 215);
  /* flex-direction: row-reverse; */
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
}
.wenzhang {
  margin-top: 50px;
  background-color: #3baee7;
  width: 1300px;
  height: 500px;
  display: flex;
  justify-self: space-around;
  border-radius: 40px;
  overflow: hidden;
  flex-wrap: wrap;
  /* flex-direction: row-reverse; */
  /* flex-direction: column; */
  /* font-size: 20px; */
  /* align-items: center; */
}
.anniu {
  height: 500px;
}
.hhh {
  margin: 100px 60px 100px 60px;
}
.el-footer {
  height: 50px;
  background-color: #5ebcec;
  display: flex;

  justify-content: center;
  align-items: center;
}

.box1 {
  background-color: #46b3de;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box2 {
  flex-shrink: 0;
  background-color: #285466;
  width: 90%;
  height: 80%;
  flex: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
}
.box3 {
  flex-shrink: 0;
  background-color: #285466;
  width: 90%;
  height: 80%;
  flex: 0.9;
  border-radius: 50px;
}
.box3-1 {
  width: 90%;
  background-color: #aed0fb;
  margin: 25px 25px;
  border-radius: 25px;
  color: #e1e0e0;
  text-align: left;
}

.box3-1 span {
  margin-left: 30px;
  font-size: larger;
}

.el-carousel {
  align-items: center;
  margin-top: 5%;
  margin-bottom: 10%;

  height: 100%;
  width: 90%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 80%;
  height: 800px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

>>> .el-carousel__item {
  width: 35%;
  display: inline-block;
  overflow: hidden;
  z-index: 0;
}

.box3-2 {
  background-color: #aed0fb;
  flex: 1;
  margin: 25px 25px;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
}

.heading-section ul li {
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #353637;
  margin-bottom: 25px;
  padding-bottom: 25px;
}

.box4 {
  margin-top: 50px;
  background-color: #285466;
  width: 90%;
  height: 80%;
  flex: 0.9;
  border-radius: 50px;

  height: 400px;
  background-color: #8a8b8b;
}
.demo-image {
  display: inline-flex;
  margin: 25px;
}

.item img {
  border-start-end-radius: 50px;

  margin: 0px;
}
.item {
  height: 300px;
  width: 270 px;
  margin: 25px;
  margin-bottom: 0px;
}

.words1 {
  margin-left: 50px;
  color: #000;
  display: block;
}

.shiping1 span {
  margin-left: 85px;
  font-size: 50px;
  margin-top: 25px;
  color: #d95858;
}
.shiping2 .item {
  font-size: 50px;
}

.el-pagination {
  margin-top: -40px;
  margin-left: -40px;
  width: 300px;
  background: true;
  background-color: #3baee7;
  font-size: larger;
}

.writter ul li {
  list-style: none;

  display: inline-blockk;
  width: 100%;
  border-bottom: 1px solid #353637;
  margin-bottom: 25px;
  padding-bottom: 25px;
}

.writter ul li span {
  float: left;
  font-size: 15px;
  color: #fff;
  font-weight: 700;
  padding-top: 12px;
  margin-right: 10px;
}
.writter ul li h6 {
  display: inline;
  font-size: 30px;
  color: #ec6090;
  font-weight: 400;
}
.writter a {
  text-decoration: none;
  margin-left: 25px;
  border-bottom: none;
  font-size: 14px;
  color: #fff;
  background-color: #e75e8d;
  padding: 12px 30px;
  display: inline-block;
  border-radius: 25px;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  border-radius: 25%;
  margin: 0 5px;
  background-color: #242488;
  color: #606266;
  min-width: 30px;
  border-radius: 2px;
}
.date {
  margin-left: 100px;
  font-style: italic;
  font-size: 25px;
}
.reply1 .date {
  margin-left: 1px;
  margin-top: 2px;
  font-style: italic;
  font-size: 14px;
}
.content {
  padding-left: 25px;
  padding-right: 100px;
  margin-top: 10px;
  font-style: normal;
  font-size: 17px;
}

/* 回帖界面 */
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: rgba(0, 0, 0, 0.4);
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  color: #ffffff;
  border-start-end-radius: 25px;
  min-height: 36px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.forumcom {
  height: fit-content;
  width: fit-content;
  background-color: skyblue;
  margin-bottom: 10px;
  border-radius: 23px;
}
fudong1 {
  margin-top: -23px;
  margin-left: -15px;
  float: left;
}
.pingluntext {
  color: #1e1e1e;
  word-wrap: break-word;
  margin-left: 10px;
  margin-right: 10px;
  float: left;
}
fudong2 {
  float: left;
}
.fudong3 {
  margin-top: -30px;
}

.el-icon-chat-dot-square {
  float: right;
  margin-top: -20px;
}

.input {
  display: flex;

  margin-top: 50px;
  width: 500px;
  border-radius: 50%;
}
>>> .el-textarea__inner {
  border-radius: 50%;
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  box-sizing: border-box;
  width: 100%;
  font-size: 25px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: none;
  border: 1px solid #000000;
  border-radius: 4px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>