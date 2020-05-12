<template>
  <div class="login-box">
    <form class="form-box">
      <h2 class="login-title">登录</h2>
      <input class="txt" type="text" placeholder="请输入你的账号" v-model="model.username" />
      <input class="txt" type="password" placeholder="请输入你的密码" v-model="model.password" />
      <input class="txt" type="submit" @click="login" value="登录" />
    </form>
    <div>
      <span class="no-user">没有账号？</span>
      <router-link class="register" tag="span" to="/register">注册</router-link>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      model: {}
    };
  },
  created() {},
  methods: {
    async login() {
      const res = await this.$http.post("/user/user", this.model);
      localStorage.token = res.data.token;
      this.$router.push("/home");
      Toast("登录成功");
    }
  }
};
</script>
<style lang="scss" scoped>
.login-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  // background: rgba($color: #000000, $alpha: 0.8);
  background-image: url("~@/assets/img/wolf.jpg");
  background-repeat: no-repeat;
  background-size: auto 100%;
  .form-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    text-align: center;
    .login-title {
      font-size: 0.8rem;
      color: white;
    }
    input {
      display: block;
      padding: 0 0.1rem;
      width: 100%;
      height: 0.45rem;
      text-align: center;
      font-size: 0.15rem;
      box-sizing: border-box;
      outline: none;
      border: none;
    }
    .txt {
      margin: 20px 0;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 0.06rem;
    }
  }
  .no-user {
    color: red;
  }
  .register {
    color:whitesmoke;
  }
}
</style>
