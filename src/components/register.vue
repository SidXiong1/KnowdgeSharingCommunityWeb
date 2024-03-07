<template>
  <div style="height: 100vh; overflow: hidden">
    <div
      style="
        width: 70%;
        margin: 30px auto;
        border-radius: 10px;
        box-shadow: 0 0 10px -2px cornflowerblue;
        display: flex;
      "
    >
      <div style="flex: 1; padding: 50px 50px">
        <img src="https://pic1.zhimg.com/v2-2577b397a4de8e9fa08790316e38856c_r.jpg" alt="" style="width: 100%" />
      </div>
      <div style="flex: 1; padding: 20px">
        <div class="form-toggle">
          <b>注册</b>
        </div>
        <el-form ref="form" :model="form" size="normal" :rules="rules">
          <el-form-item prop="username" class="props">
            <el-input
              placeholder="账号"
              clearable
              v-model="form.username"
              prefix-icon="el-icon-user"
            />
          </el-form-item>

          <el-form-item prop="password" class="props">
            <el-input
              placeholder="密码"
              v-model="form.password"
              show-password
              prefix-icon="el-icon-lock"
            />
          </el-form-item>

          <el-form-item prop="password2" class="props">
            <el-input
              placeholder="确认密码"
              v-model="form.password2"
              show-password
              prefix-icon="el-icon-lock"
            />
          </el-form-item>

          <el-form-item prop="phonenum" class="props">
            <el-input
              placeholder="电话"
              clearable
              v-model="form.phonenum"
              prefix-icon="el-icon-user"
            />
          </el-form-item>

          <el-form-item prop="email" class="props">
            <el-input
              placeholder="邮箱"
              clearable
              v-model="form.email"
              prefix-icon="el-icon-user"
            />
          </el-form-item>

          <ek-form-item>
            <div style="display: flex">
              <el-input
                v-model="captcha"
                style="width: 60%"
                placeholder="请输入验证码"
                size="medium"
              ></el-input>
              <ValidCode @input="createValidCode" />
            </div>
          </ek-form-item>
          <el-form-item style="padding-top: 15px">
            <el-button type="primary" style="width: 100%" :disabled="!isFormValid" @click="login">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
   
   
  <script>
import ValidCode from "@/components/ValidCode";
import "js-base64";

const Base64 = require("js-base64").Base64;

export default {
  computed: {
  isFormValid() {
    const isUsernameFilled = !!this.form.username.trim();
    const isPasswordFilled = !!this.form.password.trim();
    const isPassword2Filled = !!this.form.password2.trim();
    return isUsernameFilled && isPasswordFilled && isPassword2Filled ;
  },
},
  name: "RegisterPage",
  components: {
    ValidCode,
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
        password2: "",
      },
      errorMessage: "",
      captcha: "",
      captchaCode: "",
      isCaptchaValid: false,
      validCode: "",

      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 6 到 11 个字符",
            trigger: "blur",
          },
        ],
        password2: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 6 到 11 个字符",
            trigger: "blur",
          },
        ],
        phonenum: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
          {
            pattern: /^\d{11}$/,
            message: "电话号码必须为11个数字字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            pattern: /^(?![_])[\w]{4,16}(?<![_])$/,
            message:
              "邮箱必须为4到16个字符,可使用英文小写字母、数字和下划线",
            trigger: "blur",
          },
        ],
      },
    };
  },

  
  mounted() {
  let username = localStorage.getItem("username");
  if (username) {
    this.form.username = localStorage.getItem("username");
    this.form.password = Base64.decode(localStorage.getItem("password")); 
    this.form.password2 = Base64.decode(localStorage.getItem("password2")); 
    this.checked = true;
  }

  // 添加默认规则使 'phonenum' 和 'email' 可以为空
  this.$set(this.rules.phonenum[0], 'required', false);
  this.$set(this.rules.email[0], 'required', false);
},

  methods: {
    //接收验证码组件提交的4位验证码
    createValidCode(data) {
      this.validCode = data;
    },
    open1() {
      const h = this.$createElement;
      this.$notify({
        title: "注册提示",
        message: h("i", { style: "color: teal" }, this.errorMessage),
      });
    },
    async login() {
      try {
        if (!this.captcha) {
          this.errorMessage = "请填写验证码";
          this.open1(); //提示信息推送
          return;
        }
        if (this.captcha.toLowerCase() !== this.validCode.toLowerCase()) {
          this.errorMessage = "验证码错误，请重试";
          this.open1(); //提示信息推送
          return;
        }
        if (!this.form.password||!this.form.password||!this.form.password2) {
          this.errorMessage = "信息不全，请重新输入如";
          this.open1(); //提示信息推送
          return;
        }
        if (this.form.password!=this.form.password2) {
          this.errorMessage = "两次密码不一致，请确认输入";
          this.open1(); //提示信息推送
          return;
        }

        // Send username and password to backend for validation
        const response = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: this.form.username,
            password: this.form.password,
            phonenum: this.form.phonenum,
            email: this.form.email,
          }),
        });
        if (response.ok) {
          // Redirect to main page if login is successful
          this.errorMessage = "注册完成，请登录";
          this.$router.push("/");
        } else {
          this.errorMessage = "用户已存在，请重新输入";
        }
      } catch (error) {
        this.errorMessage = "An error occurred. Please try again later.";
      }
      this.open1(); //提示信息推送
    },
  },
};
</script>
   
  <style scoped>
.form-toggle {
  margin: 20px 0;
  text-align: center;
}
.form-toggle b {
  font-size: 20px;
  cursor: pointer;
}
.props {
  margin-top: -5px;
}
</style>
  