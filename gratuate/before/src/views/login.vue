<template>
  <div>
    <form class="form-box">
      <h2>登录</h2>
      <input type="text" placeholder="请输入你的账号" v-model="model.username" />
      <input type="password" placeholder="请输入你的密码" v-model="model.password" />
      <input type="submit" @click="login" value="登录" />
    </form>
    <span>没有账号？</span><router-link to="/register">注册</router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        model: {},
      };
    },
    created() {},
    methods: {
      async login() {
        const res = await this.$http.post('/user', this.model);
        this.$router.push('/login');
        console.log(res);
      },
    },
  };
</script>
<style lang="scss" scoped>
.form-box {
  input {
    font-size: .1rem;
  }
}
</style>
