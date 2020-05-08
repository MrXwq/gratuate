<template>
  <div class="commodity-create-box">
    <h1>{{id ? '编辑' : '新建'}}分类</h1>
    <el-form
      :model="categoriesForm"
      ref="categoriesForm"
      label-width="100px"
      class="demo-categoriesForm"
    >
      <el-form-item label="父类">
        <el-select v-model="categoriesForm.parent">
          <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类">
        <el-input v-model="categoriesForm.name"></el-input>
      </el-form-item>
      <el-form-item label="分类icon">
        <el-input v-model="categoriesForm.icon"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('categoriesForm')">添加</el-button>
        <el-button @click="resetForm('categoriesForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categoriesForm: {},
      parents: [],
      categories: [],
      id: this.$route.params.id
    };
  },
  created() {
    this.id && this.fetch();
    this.fetchParents();
  },
  methods: {
    // 获取此数据
    async fetch() {
      const res = await this.$http.get(`api/category/${this.id}`);
      this.categoriesForm = res.data;
    },
    // 获取父级分类
    async fetchParents() {
      const res = await this.$http.get(`api/category`);
      this.parents = res.data;
    },
    //   地址选中值改变后
    handleChange(value) {
      console.log(value);
    },
    // 获取提交/编辑分类信息
    async postCategories() {
      if (this.id) {
        await this.$http.put(`/api/category/${this.id}`, this.categoriesForm);
      } else {
        await this.$http.post("/api/category", this.categoriesForm);
      }
      this.$message({
        type: "success",
        message: "添加成功"
      });
      this.$router.push("/categories/list");
    },
    submitForm(formName) {
      this.postCategories();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
.commodity-create-box {
}
</style>