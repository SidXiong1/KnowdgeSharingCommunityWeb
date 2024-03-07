<template>
    <div class="container">
      <div class="login_box">
        <div class="left_box">
          <img src="https://pic1.zhimg.com/v2-2577b397a4de8e9fa08790316e38856c_r.jpg" alt="" />
        </div>
        <div class="right_box">
          <div class="logo">
            <img src="@/assets/auic.jpg" alt="" />
          </div>
          <P>水一方 . 平台 . 登陆系统</P>
          <div class="input_box">
            <img src="@/assets/user.jpg" class="prefix_icon" alt="" />
            <el-input
              placeholder="请输入内容"
              type="text"
              v-model="username"
              class="input_inner"
            >
            </el-input>
          </div>
          <div class="input_box">
            <img src="@/assets/pas.jpg" class="prefix_icon" alt="" />
            <el-input
              placeholder="请输入密码"
              :type="hiddenpwd ? 'password' : 'text'"
              v-model="password"
              class="input_inner"
            >
            </el-input>
            <img
              :src="hiddenpwd ? passshow : passhide"
              class="prefix_icon"
              @click="shoupassword"
              alt=""
            />
          </div>
          <div class="input_box">
            <el-input
              v-model="captcha"
              placeholder="请输入验证码"
              class="input_inner"
            ></el-input>
            <ValidCode @input="createValidCode" class="ValidCode_btn"/>
          </div>
          <el-button
            type="primary"
            round
            :plain="true"
            class="login_btn"
            @click="login"
            >登录</el-button
          >
          <div style="margin: 10px 0 0 200px; text-align: right;">
            <router-link to="/register" class="link">注册</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
    
    <script>
     import ValidCode from "@/components/ValidCode";
    

  export default {
    name: "login_main",
    components: {
      ValidCode
    },
    data() {
      return {
        username: "",
        password: "",
        hiddenpwd: true,
        errorMessage: "",
        passshow: require("@/assets/pas_hid.jpg"),
        passhide: require("@/assets/pas_show.jpg"),
        captcha: "",
        captchaCode: "",
        isCaptchaValid: false,
        validCode: ''
  
      };
    },
    methods: {
      createValidCode(data) {
        this.validCode = data
      },
      
      shoupassword() {
        this.hiddenpwd = !this.hiddenpwd;
      },

      open1() {
        const h = this.$createElement;
        this.$notify({
          title: "登陆提示",
          message: h("i", { style: "color: teal" }, this.errorMessage),
          duration: 1000,
        });
      },
  
  
      getCaptcha() {
        // 获取验证码的逻辑
        const chars =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let captcha_ = "";
        for (let i = 0; i < 6; i++) {
          captcha_ += chars[Math.floor(Math.random() * chars.length)];
        }
        // 将生成的验证码保存到变量中
        this.captchaCode = captcha_;
      },
  
  
      validateCaptcha() {
        // 验证输入的验证码是否正确
        const enteredCaptcha = this.captcha
        if (enteredCaptcha === this.captchaCode) {
          this.isCaptchaValid = true;
        } else {
          this.isCaptchaValid = false;
        }
      },
  
  
      async login() {
        // this.validateCaptcha();
        // if (this.isCaptchaValid) {
          try {
            if (!this.captcha) {
              this.errorMessage = "请填写验证码";
              this.open1();//提示信息推送
              return;
            }
            if (this.captcha.toLowerCase() !== this.validCode.toLowerCase()) {
              this.errorMessage = "验证码错误，请重试";
              this.open1();//提示信息推送
              return;
            }
            // Send username and password to backend for validation
            const response = await fetch("http://localhost:3000/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username: this.username,
                password: this.password,
              }),
            });
            if (response.ok) {
              // Redirect to main page if login is successful
              this.errorMessage = "登陆成功";
  
              // 跳转到main.vue页面
              this.$router.push("/index");
            } else {
              // Show error message if login fails
  
              this.errorMessage = "用户名或密码不正确，请重新输入";
            }
          } catch (error) {
            this.errorMessage = "An error occurred. Please try again later.";
          }
        // } else {
        //   this.errorMessage = "验证码出错，请重新验证";
        // }
        this.open1();//提示信息推送
      }
    },
  };
  </script>
    <style scoped>
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login_box {
    width: 1000px;
    height: 600px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    box-shadow: 0 0 10px -2px cornflowerblue;
        margin: 50px auto;
  }
  .left_box {
    width: 424px;
    background-color: #333;
  }
  .left_box img {
    width: 100%;
    height: 100%;
  }
  .right_box {
    background-color: #fff;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    width: 250px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 50px;
  }
  .logo img {
    width: 100%;
    height: 100%;
  }
  .right_box p {
    font-size: 24;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #333;
  }
  .input_box {
    display: flex;
    width: 298px;
    height: 58px;
    background-color: #f1f2f7;
    border-radius: 20px;
    margin-bottom: 25px;
    align-items: center;
  }
  .prefix_icon {
    height: 20px;
    width: 20px;
    margin: 0 10px 0 23px;
  }
  .input_inner {
    width: 300px;
  }
  >>> .el-input__inner {
    border: none;
    outline: none;
    background-color: #f1f2f7;
  }
  .ValidCode_btn{
    width:200px;
    height:80px;
  }
  .login_btn {
    width: 298px;
    height: 45px;
    margin-top: 2px;
    box-sizing: border-box;
  }
  .input_box {
    display: flex;
    align-items: center;
  }
  .input_inner {
    width: 300px;
  }
  .link {
    margin-right: 10px;
    color: rgb(137, 137, 175); /* 链接文本颜色 */
  text-decoration: none; /* 移除链接下划线 */
  font-weight: bold; /* 文本加粗 */
  font-size:15px;
  }
  </style>
  