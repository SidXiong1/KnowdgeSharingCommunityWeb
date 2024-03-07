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
              <el-input placeholder="请输入内容" class="input-inner"></el-input>
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
              router
            >
              <el-menu-item index="./index">首页</el-menu-item>
              <el-menu-item index="./ph">文章</el-menu-item>
              <el-menu-item index="./video_page">视频</el-menu-item>
              <el-menu-item index="./talk">讨论</el-menu-item>
              <el-menu-item index="./user" class="menuUser"
                >个人中心<img src="@/assets/user.png" alt="" />
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col></el-col>
        </el-row>
      </div>
    </el-header>

    <!-- 导航栏结束 -->

    <!-- <el-container class="box1">
    
        <div class="shiping">
           
        <el-container class="box3">
          <el-container class="box3-1">
            <el-carousel :interval="4000" type="card" height="200px">
              <el-carousel-item v-for="item in imgList" :key="item.id">
                <img :src="item.idView" class="image" />
              </el-carousel-item>
            </el-carousel>
          </el-container>
          <el-container class="box3-2"> </el-container>
        </el-container>
      </div>
      <div class="shiping">
        <el-container class="box4">
          nihao
        </el-container>
      </div>
      </el-container> -->

    <el-container>
      <el-container>
        <el-main>
          <div class="shiping">
            <div class="box3-1">
              <span> </span>
              <el-carousel
                :interval="4000"
                type="card"
                width="65%"
                height="80%"
              >
                <el-carousel-item v-for="item in imgList" :key="item.id">
                  <img
                    :src="item.idView"
                    class="image"
                    height="100%"
                    width="100%"
                  />
               
                </el-carousel-item>
              </el-carousel>
            </div>

            <div class="box3-2">
              <div class="heading-section">
                <h4><em>作者</em> 周榜</h4>
              </div>
              <div class="writter">
                <ul>
                  <li>
                    <span>01</span>
                    <img
                      src="https://img0.baidu.com/it/u=2617817781,3254387725&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=653"
                      alt=""
                      style="
                        width: 46px;
                        height: 46px;

                        border-radius: 50%;
                        margin-right: 15px;
                      "
                    />
                    <h6>LahutaM</h6>
                    <el-icon-circle-check></el-icon-circle-check>
                    <button class="follow">
                      <a href="#">关注</a>
                    </button>
                  </li>

                  <li>
                    <span>02</span>
                    <img
                      src="https://img0.baidu.com/it/u=2617817781,3254387725&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=653"
                      alt=""
                      style="
                        width: 46px;
                        height: 46px;

                        border-radius: 50%;
                        margin-right: 15px;
                      "
                    />
                    <h6>LahutaM</h6>
                    <el-icon-circle-check></el-icon-circle-check>
                    <button class="follow">
                      <a href="#">关注</a>
                    </button>
                  </li>
                  <li>
                    <span>03</span>
                    <img
                      src="https://img0.baidu.com/it/u=2617817781,3254387725&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=653"
                      alt=""
                      style="
                        width: 46px;
                        height: 46px;

                        border-radius: 50%;
                        margin-right: 15px;
                      "
                    />
                    <h6>LahutaM</h6>
                    <el-icon-circle-check></el-icon-circle-check>
                    <button class="follow">
                      <a href="#">关注</a>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="shiping1">
            <span> 热门讨论</span>

            <div class="shiping2">
              <div class="item" v-for="item in imgUrl" :key="item.url">
                <img :src="item.img" @click="gotoDetail(item.id)" alt="" />

                <h6>{{ item.text }}</h6>
              </div>
            </div>
          </div>
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>

          <div class="shiping3"></div>

          <router-view />
        </el-main>
        <el-footer height="30px">水一方 版权所有@ D个痛快</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      currentDate: "2021-06-01",

      imgUrl: [
        {
          img: require("../assets/fixed-image/stream-01.jpg"),
          text: "水资源作用",
          id: 20,
        },
        {
          img: require("../assets/fixed-image/stream-02.jpg"),
          text: "水污染整治建议",
          id: 23,
        },
        {
          img: require("../assets/fixed-image/stream-03.jpg"),
          text: "水污染整治建议",
          id: 24,
        },
        {
          img: require("../assets/fixed-image/stream-04.jpg"),
          text: "介绍水资源",
          id: 15,
        },
        {
          img: require("../assets/fixed-image/stream-05.jpg"),
          text: "保护水资源的方法",
          id: 26,
        },
        {
          img: require("../assets/fixed-image/stream-06.jpg"),
          text: "我国水污染现状",
          id: 35,
        },
        {
          img: require("../assets/fixed-image/stream-07.jpg"),
          text: "你好",
          id: 37,
        },
        {
          img: require("../assets/fixed-image/stream-08.jpg"),
          text: "何为水污染？",
          id: 29,
        },
      ],

      imgList: [
        {
          id: 0,
          idView:
            "https://img.ixintu.com/download/jpg/202004/7598e518a49eda8cdf8768446b5f03ce_800_1200.jpg!con",
        },
        {
          id: 1,
          idView:
            "https://tse4-mm.cn.bing.net/th/id/OIP-C.YpnvCrqVt-svpTdmQAAy_wHaLH?w=124&h=186&c=7&r=0&o=5&pid=1.7",
        },
        {
          id: 2,
          idView:
            "https://bpic.588ku.com/back_pic/19/03/31/66e4e899146c675f394746e0bd7389db.jpg",
        },
        {
          id: 3,
          idView:
            "https://img.zcool.cn/community/01bd2c5543ffa80000019ae9c93a9b.jpg@1280w_1l_2o_100sh.jpg",
        },
        {
          id: 4,
          idView:
            "https://img-u-4.51miz.com/Templet/00/24/64/00/246400_c23ad43d7e40708b9b13da369141e543.jpg",
        },
        {
          id: 5,
          idView:
            "https://bpic.588ku.com/back_pic/19/03/31/66e4e899146c675f394746e0bd7389db.jpg",
        },
        {
          id: 6,
          idView:
            "https://img.zcool.cn/community/01bd2c5543ffa80000019ae9c93a9b.jpg@1280w_1l_2o_100sh.jpg",
        },
      ],
    };
  },
  methods: {
    gotoDetail(id) {
      this.$router.push({ path: "/Detail?topic_id=" + id });
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
  background-color: #aed0fb;
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
  background-color: #3baee7;
  width: 90%;
  height: 900px;
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
  background-color: #3baee7;
  width: 1300px;
  height: 1000px;
  /* display: flex; */
  /* justify-self: space-around; */
  border-radius: 40px;
  overflow: hidden;
  flex-wrap: wrap;
  text-align: left;
  color: pink;
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
  width: 60%;
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
.follow{

background: none;
border: none;


}
</style>