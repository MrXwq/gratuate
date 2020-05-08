<template>
  <div class="service-create-box">
    <h1>{{id ? '编辑' : '新建'}}基础服务</h1>
    <el-form
      :model="serviceForm"
      ref="serviceForm"
      label-width="100px"
      class="demo-serviceForm"
    >
      <el-form-item label="产品参数名">
        <el-input v-model="serviceForm.basis"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('serviceForm')">添加</el-button>
        <el-button @click="resetForm('serviceForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      serviceForm: {},
      categories: [],
      id: this.$route.params.id
    };
  },
  created() {
    this.id && this.fetch();
    // this.fetchParents();
  },
  methods: {
    // 获取此数据
    async fetch() {
      const res = await this.$http.get(`api/service/${this.id}`);
      this.serviceForm = res.data;
    },
    // 获取父级分类
    async fetchParents() {
      const res = await this.$http.get(`api/service`);
      this.parents = res.data;
    },
    //   地址选中值改变后
    handleChange(value) {
      console.log(value);
    },
    // 获取提交/编辑分类信息
    async postParams() {
      if (this.id) {
        await this.$http.put(`/api/service/${this.id}`, this.serviceForm);
      } else {
        await this.$http.post("/api/service", this.serviceForm);
      }
      this.$message({
        type: "success",
        message: "添加成功"
      });
      this.$router.push("/service/list");
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