<template>
  <div>
    <form class="form">
      <h2>注册</h2>
      <input type="text" placeholder="请输入你的账号" v-model="model.username" />
      <input type="password" placeholder="请输入你的密码" v-model="model.password" />
      <input type="password" placeholder="再次确认你的密码" v-model="model.confirmPassword" />
      <label>
        <input type="checkbox" />
      </label>
      <input type="submit" @click="save" value="注册" />
    </form>
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
      async save() {
        await this.$http.post('/user', this.model);
        this.$router.push('/login');
      // console.log(res);
      },
    },
  };
</script>
<style lang="scss" scoped>
.form {
  input {
    font-size: .1rem;
  }
}
</style>
