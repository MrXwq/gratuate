<template>
  <div class="footer-box">
    <div class="button-area">
      <div
        class="button-item"
        @click="buttonGo(item.route)"
        v-for="(item, index) in buttons"
        :key="index"
      >{{item.text}}</div>
    </div>
    <div class="copyright">
      <i class="iconfont iconbanquan"></i>
      <span class="text">2020</span>
      <span class="text">天津大学仁爱学院</span>
      <span class="text">服务中心</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      buttons: [
        {
          text: "登录",
          route: "/login"
        },
        {
          text: "注册",
          route: "/register"
        },
        {
          text: "手机app",
          route: ""
        },
        {
          text: "用户反馈",
          route: "/feedback"
        }
      ]
    };
  },
  methods: {
    buttonGo(route) {
      if (route) {
        this.$router.push(route);
      } else {
        alert("请下载手机app");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.footer-box {
  margin-top: 50px;
  padding: 20px 20px 0;
  width: 100%;
  height: 1rem;
  background: rgb(78, 82, 94);
  .button-area {
    display: flex;
    justify-content: space-between;
    .button-item {
      padding: 15px 30px;
      color: rgb(195, 198, 202);
      box-sizing: border-box;
      border: 1px solid rgb(66, 69, 77);
      background-color: rgb(85, 89, 101);
      border-radius: 10px;
    }
  }
  .copyright {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .iconbanquan {
      font-size: 40px;
      color: #676b76;
    }
    .text {
      color: rgb(195, 198, 202);
      margin-left: 10px;
    }
  }
}
</style>
