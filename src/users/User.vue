<template>
  <el-container class="container">
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
              <el-input v-model="search" placeholder="请输入内容" class="input-inner"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                background-color="#8ac6f8" text-color="black" active-text-color="#ffd04b" router>
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
    <el-container>
      <el-aside width="210px">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          background-color="#aed0fb" text-color="#black" active-text-color="#black" router>
          <el-menu-item index="/messages">
            <span slot="title">个人信息</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <span>发布管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/myArt">我的文章</el-menu-item>
              <el-menu-item index="/myTopic">我的帖子</el-menu-item>
              <el-menu-item index="/myReply">我的回复</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span>管理权限</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/colUsers">用户管理</el-menu-item>
              <el-menu-item index="/colArt">文章管理</el-menu-item>
              <el-menu-item index="/colForum">论坛管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
        <el-footer height="30px">假装这里有版权信息</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>


<script>
export default {
  name: "User",
  data() {
    return {
      search: "",
    };
  },
};
</script>


<style scoped>
.container {
  height: 100%;
}

.el-header {
  background-color: #8ac6f8;
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

.el-aside {
  background-color: #aed0fb;
  color: #fff;
}

.el-main {
  background-color: #eaedf1;
}

.el-footer {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>