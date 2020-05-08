<template>
  <div class="register-box">
    <form class="form-box">
      <div class="register-title">注册</div>
      <input type="text" placeholder="请输入你的账号" v-model="model.username" class="txt" />
      <span class="err-class" v-if="errType.accountEmpty">{{USER_TEXT.ACCOUNT_EMPTY}}</span>
      <input type="password" placeholder="请输入你的密码" v-model="model.password" class="txt" />
      <span class="err-class" v-if="errType.passwordEmpty">{{USER_TEXT.PASSWORK_EMPTY}}</span>
      <input type="password" placeholder="再次确认你的密码" v-model="model.confirmPassword" class="txt" />
      <span class="err-class" v-if="errType.inconsistent">{{USER_TEXT.INCONSISTENT}}</span>
      <van-button type="info" @click="register" round >注册</van-button>
      <!-- <input type="submit" @click="register" value="注册" class="register-btn" /> -->
    </form>
  </div>
</template>
<script>
import { Button } from "vant";
import { USER_TEXT } from "@/constants/TEXT.js";
export default {
  data() {
    return {
      USER_TEXT,
      errType: {
        accountEmpty: false,
        passwordEmpty: false,
        inconsistent: false
      },
      model: {
        username: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  created() {},
  methods: {
    async register() {
      if (!this.model.username) {
        this.errType.accountEmpty = true;
        return;
      }
      if (!this.model.password) {
        this.errType.passwordEmpty = true;
        return;
      }
      if (!this.model.confirmPassword) {
        this.errType.inconsistent = true;
        return;
      }
      let res = await this.$http.post("/user/register", this.model);
      console.log(res);

      if (res) {
        this.$router.push("/login");
      }
    }
  },
  components: {
    [Button.name]: Button
  }
};
</script>
<style lang="scss" scoped>
.register-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  // background: rgba($color: #000000, $alpha: 0.8);
  background-image: url("~@/assets/img/wolf.jpg");
  background-repeat: no-repeat;
  background-size: auto 100%;

  // background: url('~@/assets/img/wolf.jpg') no-repeat;
  .form-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    text-align: center;
    .register-title {
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
    // .register-btn {
    //   width: 60%;
    //   margin-top: 0.5rem;
    //   background: #3b71f0;
    //   color: white;
    //   border-radius: 0.5rem;
    // }
    .err-class {
      color: red;
    }
  }
  .van-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    height: .4rem;
    width: 2rem;
    box-sizing: border-box;
    font-size: .2rem;
  }
}
</style>
