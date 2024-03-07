

<template>
    <el-container class="container">
        <!-- <el-header class="header" height="80px" > -->
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
                        <el-menu router :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"
                            @select="handleSelect" background-color="rgb(61, 206, 235)" text-color="black"
                            active-text-color="#ffd04b">
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

        <!-- </el-header> -->
        <el-container>
            <!-- <el-aside width="400px" class="aside" > -->
            <!-- <el-aside width="400px" class="ArticleDetails" > -->
            <el-aside width="400px" id="form1">
                <img src="../assets/110.png" alt="" width="100%" class="img-">
            </el-aside>
            <el-aside width="400px" id="form2" style="display: none;">
                <img src="../assets/8.png" alt="" width="100%">
                <div class="pa-title">
                    <h2>高等数学</h2>
                </div>
                <div>
                    <p>作品简介：高等数学是指相对于初等数学和中等数学而言，数学的对象及方法较为繁杂的一部分，中学的代数、几何以及简单的集合论初步、逻辑初步称为中等数学，将其作为中小学阶段的初等数学与大学阶段的高等数学的过渡。
                    </p>
                </div>
                <div class="pa-writer">
                    <p class="writer">作者：XXXXXX</p>
                </div>
                <div class="pa-award">
                    <p>点赞100</p>
                    <p>收藏100</p>
                </div>
                <div>
                    <el-button type="primary" round class="read" @click="GoTo"> 立即阅读</el-button>
                </div>

            </el-aside>
            <el-container class="right">
                <el-main>
                    <div class="passage">
                        <!-- <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
                            <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
                        </ul>                         -->
                        <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto"
                            infinite-scroll-distance=10>
                            <li v-for="i in title" class="infinite-list-item" :key="i">
                                <div class="ChoosePassage">
                                    <h3 :style="{ '--color': color }" :class="{ hh3: i.Index == cc }"
                                        @mouseover="ChDark(i.Index)" @click="ChDetail(i.Index)" @mouseenter="ChShow()">
                                        {{ i.T }}
                                    </h3>
                                    <hr>
                                </div>
                            </li>
                        </ul>
                    </div>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: "PassageHome",
    data() {
        return {
            // mysql : require("mysql"),
            I: -1,
            AD: {},
            cc: -1,
            color: 'rgb(140, 141, 217)',
            count: 0,
            title: [
                { T: "标题一.....................", Index: 0 },
                // {T:"标题二...................."},
                // {T:"标题3................."},
                // {T:"标题4............."},
                // {T:"标5............."},
                // {T:"标题6..............."},
            ]
        }
    },
    methods: {
        load() {
            this.count += 2
            this.title.push({ T: "又是一个标题" + this.count, Index: this.count })
        },
        ChDark(Index) {
            this.cc = Index
            // document.getElementById("form1").style.display="";
        },
        ChShow() {
            document.getElementById("form1").style.display = "";
            document.getElementById("form2").style.display = "none";
        },
        ChDetail(i) {
            // this.AD=i
            this.I = i
            // document.getElementById("form1").style.visibility="hidden";
            // document.getElementById("form2").style.visibility="visible";
            document.getElementById("form2").style.display = "";
            document.getElementById("form1").style.display = "none";
        },
        GoTo() {
            //  console.log("ok")
            this.$router.push({ path: '/pw' })
            //     const con = mysql.createConnection({
            //         user: 'root',
            //         password: '123456',
            //         host: "localhost",
            //         database: 'db02'
            //     })
            //     con.connect(err => {
            //         // null代表连接成功
            //         console.log(err);
            //         if(err){
            //             this.$router.push({path:'/pw'})
            //         }
            //     })
            //     let Sqlquery = `SELECT * FROM user `
            //     con.query(Sqlquery)
        }


    }
}
</script>

<style scoped>
.container {
    height: 100%;
}
>>>.el-header[data-v-e9f79e66] {
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
.aside {
    color: rgb(199, 222, 222);
    background-color: darkslategray;
    width: 400px !important;
}

.passage {
    /* color: rgb(200, 212, 237); */
    background-color: #d4d9ef;
    /* background-image: url(../assets/2.png);
    opacity: 0.1;
    width: 100%; */
    /* height: 100vw; */
    /* width: 100vw; */
    /* height: 630px; */
}

.infinite-list {
    height: 630px;
}


.img- {
    margin-top: 70px;
}

h3 {
    color: var(--color);
    /* color: red; */
    /* color: rgb(71, 73, 162); */
}

h2 {
    color: rgb(5, 41, 64);
    text-align: center;
}

.hh3 {
    color: rgb(5, 41, 64);
}



.el-aside {
    background-color: rgb(124, 129, 171);
}

.writer {
    text-align: center;
    color: rgb(205, 200, 238);
}

.read {
    width: 328px;
    height: 45px;
    position: fixed;
    bottom: 10px;
    left: 20px;
}

.right {
    background-image: url(../assets/2.png);

}







/* @import url(../style/lzl.css); */

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

/* >>>.el-input__inner {
    border: none;
    outline: none;
    background-color: #f1f2f7;
} */
::v-deep .el-input__inner {
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
</style>
