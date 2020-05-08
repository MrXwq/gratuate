<template>
  <div class="param-create-box">
    <h1>{{id ? '编辑' : '新建'}}基础参数</h1>
    <el-form
      :model="paramFrom"
      ref="paramFrom"
      label-width="100px"
      class="demo-paramFrom"
    >
      <el-form-item label="产品参数名">
        <el-input v-model="paramFrom.paramName"></el-input>
      </el-form-item>
      <el-form-item label="产品参数值">
        <el-input v-model="paramFrom.paramVal"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('paramFrom')">添加</el-button>
        <el-button @click="resetForm('paramFrom')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paramFrom: {},
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
      const res = await this.$http.get(`api/param/${this.id}`);
      this.paramFrom = res.data;
    },
    // 获取提交/编辑参数信息
    async postParams() {
      if (this.id) {
        await this.$http.put(`/api/param/${this.id}`, this.paramFrom);
      } else {
        await this.$http.post("/api/param", this.paramFrom);
      }
      this.$message({
        type: "success",
        message: "添加成功"
      });
      this.$router.push("/param/list");
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