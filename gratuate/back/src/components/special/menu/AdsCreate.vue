<template>
  <div class="ad-create-box">
    <h1>{{id ? '编辑' : '新建'}}广告</h1>
    <el-form
      :model="adsForm"
      ref="adsForm"
      label-width="100px"
      class="demo-adsForm"
    >
      <el-form-item label="产品参数名">
        <el-input v-model="adsForm.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('adsForm')">添加</el-button>
        <el-button @click="resetForm('adsForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      adsForm: {},
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
      const res = await this.$http.get(`api/ad/${this.id}`);
      this.adsForm = res.data;
    },
    // 获取提交/编辑分类信息
    async postParams() {
      if (this.id) {
        await this.$http.put(`/api/ad/${this.id}`, this.adsForm);
      } else {
        await this.$http.post("/api/ad", this.adsForm);
      }
      this.$message({
        type: "success",
        message: "添加成功"
      });
      this.$router.push("/ads/list");
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