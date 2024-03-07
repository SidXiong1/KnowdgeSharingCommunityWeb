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

        <el-container>
            <el-aside width="400px">
                <div class="aside">
                    <div class="writer">
                        <p class="tit">作者：</p>
                        <p class="conn"> xxxxx</p>
                        <el-button type="info" icon="el-icon-message" circle class="send"></el-button>
                        <el-button type="warning" icon="el-icon-star-off" circle class="send"></el-button>
                    </div>

                    <el-collapse v-model="activeName" accordion class="mes">
                        <el-collapse-item name="1" class="mes-tit">
                            <template slot="title">
                                <p>一致性 Consistency</p>
                            </template>
                            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                        </el-collapse-item>
                        <el-collapse-item title="反馈 Feedback" name="2" class="mes-tit">
                            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                        </el-collapse-item>
                        <el-collapse-item title="效率 Efficiency" name="3" class="mes-tit">
                            <div>简化流程：设计简洁直观的操作流程；</div>
                            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                        </el-collapse-item>
                        <el-collapse-item title="可控 Controllability" name="4" class="mes-tit">
                            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                        </el-collapse-item>
                    </el-collapse>

                    <el-button-group class="but">
                        <el-button type="primary" icon="el-icon-edit"></el-button>
                        <el-button type="primary" icon="el-icon-share"></el-button>
                        <el-button type="primary" icon="el-icon-delete"></el-button>
                    </el-button-group>
                </div>
            </el-aside>
            <el-main>
                <div class="main">
                    <div class="title">
                        <p class="tit">
                            标题
                        </p>
                    </div>
                    <hr>
                    <div class="content">
                        <p class="con">
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </p>
                    </div>
                </div>
            </el-main>
        </el-container>

    </el-container>
</template>

<script>
export default {
    name: "PassageView",
    data() {
        return {
            activeName: '1'
        };
    }
}
</script>

<style scoped>
>>>.el-header[data-v-2173b8da] {
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
.el-main {
    /* background-color: aqua; */
    background-image: url(../assets/0.webp);
}

.aside {
    background-color: rgb(247, 239, 229);
    width: 100vw;
    height: 100vw;
    display: flex;
    flex-direction: column;
    /* background-image: url(../assets/000.png); */

    /* line-height: 200px; */
}

.writer {
    width: 400px;
    height: 100px;
    display: flex;
    flex-direction: row;
    /* background-color: black; */
    margin-top: 100px;
    background-color: rgb(240, 218, 191);
}

.send {
    margin-left: 50px;
    margin-top: 25px;
    margin-bottom: 25px;
}

.mes {
    margin-top: 100px;
}

.mes-tit {
    font-size: xx-large;
}

.but {
    margin-top: 150px;
    margin-left: 200px;
    /* background-color: rgb(240, 218, 191); */
}

.main {
    background-color: #ced4da;
    width: 67vw;
    height: 100vw;
    /* display: flex; */
    /* align-items: center; */

}

.tit {
    font-size: xx-large;
    text-align: center;
}

.content {
    /* display: flex; */
    word-wrap: break-word;
    width: 600px;
    margin-left: 180px;
}

.con {
    font-size: large;
    text-align: center;
    /* width: 600px; */
}

.conn {
    font-size: large;
    text-align: center;
    margin-top: 50px;
    /* width: 600px; */
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

</style>