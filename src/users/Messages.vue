<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>个人信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="mainMessage">
      <el-row>
        <el-col :span="16"
          ><div class="leftMessage">
            <p>昵称</p>
            <el-input
              v-model="userName"
              placeholder="请输入内容"
              class="input-inner"
            ></el-input>
            <p>手机号</p>
            <el-input
              v-model="userNumber"
              placeholder="请输入内容"
              class="input-inner"
            ></el-input>
            <p>邮箱</p>
            <el-input
              v-model="userEmail"
              placeholder="请输入内容"
              class="input-inner"
            ></el-input>
            <p>个人简介</p>
            <el-input
              v-model="userText"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
              placeholder="请输入内容"
              class="input-text"
            >
            </el-input>
            <br />
            <el-button type="primary" class="change">更改信息</el-button>
          </div></el-col
        >
        <el-col :span="8"
          ><div class="rightPhoto">
            <p>头像</p>
            <img src="@/assets/account.png" alt="" />
            <br />
            <el-button type="primary" class="changePhoto">上传头像</el-button>
          </div></el-col
        >
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Messages",
  data(){

    return {
    userName: "",
    userNumber: "",
    userEmail: "",
    userText: "",
    };
   
  },
};
</script>

<style scoped>
.el-breadcrumb {
  margin-bottom: 15px;
  font-size: 12px;
}
.mainMessage {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  border-radius: 10px;
}
.input-inner {
  width: 820px;
  height: 50px;
  background-color: #ffffff;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
}
.input-text {
  width: 820px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
}
.rightPhoto img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 5px;
}
.changePhoto {
  margin-top: 10px;
  margin-left: 25px;
}
</style>