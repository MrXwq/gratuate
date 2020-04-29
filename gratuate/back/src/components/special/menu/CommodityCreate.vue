<template>
  <div class="commodity-create-box">
    <el-form
      :model="commodityForm"
      :rules="rules"
      ref="commodityForm"
      label-width="100px"
      class="demo-commodityForm"
    >
      <el-form-item label="商品标题">
        <el-input v-model="commodityForm.title"></el-input>
      </el-form-item>
      <el-form-item label="商品原价">
        <el-input v-model="commodityForm.price"></el-input>
      </el-form-item>
      <el-form-item label="商品现价">
        <el-input v-model="commodityForm.preferential"></el-input>
      </el-form-item>
      <el-form-item label="商品运费">
        <el-input v-model="commodityForm.freight"></el-input>
      </el-form-item>
      <el-form-item label="寄出地">
        <el-cascader
          v-model="commodityForm.origin"
          :options="origins"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="commodityForm.categories" multiple>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="支持基础服务">
        <el-input v-model="commodityForm.params"></el-input>
      </el-form-item>
      <el-form-item label="产品参数">
        <el-input v-model="commodityForm.service"></el-input>
      </el-form-item>-->
      <!-- <el-form-item label="活动区域" prop="region">
        <el-select v-model="commodityForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="commodityForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="commodityForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="commodityForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="commodityForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="commodityForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="commodityForm.desc"></el-input>
      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="submitForm('commodityForm')">立即创建</el-button>
        <el-button @click="resetForm('commodityForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      commodityForm: {},
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      origins: [], //地址信息
      originValue: "",
      categories: [], //分类
      id: this.$route.params.id
    };
  },
  async created() {
    this.id && this.fetchCommodityForm();
    await this.getOrigins();
    await this.fetchCategories();
  },
  methods: {
    //   获取商品信息
    async fetchCommodityForm() {
      const res = await this.$http.get(`api/commodity/${this.id}`);
      this.commodityForm = res.data;
    },
    // 获取分类数据
    async fetchCategories() {
      const res = await this.$http.get(`api/category`);
      this.categories = res.data;
    },
    //   地址选中值改变后
    handleChange(value) {
      this.commodityForm.origin = value[1];
    },
    // 获取地址信息
    async getOrigins() {
      const res = await this.$http.get("/api/origin");
      res.data.forEach((item, index) => {
        this.origins.push({
          value: item.pinyin,
          label: item.pinyin,
          children: item.placeName.map(place => ({
            value: place,
            label: place
          }))
        });
      });
    },
    // 提交
    async submitForm(formName) {
      //   this.$refs[formName].validate(valid => {
      //     if (valid) {
      //       alert("submit!");
      //     } else {
      //       console.log("error submit!!");
      //       return false;
      //     }
      //   });
      if (this.id) {
        await this.$http.put(`/api/commodity/${this.id}`, this.commodityForm);
      } else {
        await this.$http.post("/api/commodity", this.commodityForm);
      }
      this.$message({
        type: "success",
        message: "添加成功"
      });
      this.$router.push("/commodity");
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