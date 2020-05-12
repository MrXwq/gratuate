<template>
  <div class="param-create-box">
    <h1>{{id ? '编辑' : '新建'}}基础参数</h1>
    <el-form :model="userForm" ref="userForm" label-width="100px" class="demo-userForm">
      <el-form-item label="用户名">
        <el-input v-model="userForm.username"></el-input>
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input v-model="userForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('userForm')">添加</el-button>
        <el-button @click="resetForm('userForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userForm: {},
      parents: [],
      categories: [],
      id: this.$route.params.id
    };
  },
  created() {
    this.id && this.fetch();
  },
  methods: {
    // 获取此数据
    async fetch() {
      const res = await this.$http.get(`user/users/${this.id}`);
      this.userForm = res.data;
    },
    // 获取提交/编辑参数信息
    async postParams() {
      if (this.id) {
        await this.$http.put(`/user/users/${this.id}`, this.userForm);
      } else {
        Object.assign(this.userForm, { authority: "operation" });
        await this.$http.post("/user/register", this.userForm);
      }
      this.$message({
        type: "success",
        message: "添加成功"
      });
      this.$router.push("/user/list");
    },
    submitForm(formName) {
      this.postParams();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>