<template>
  <div class="commodity-create-box">
    <el-form
      :model="commodityForm"
      :rules="rules"
      ref="commodityForm"
      label-width="100px"
      class="demo-commodityForm"
    >
      <el-tabs value="basic" type="border-card">
        <el-tab-pane label="基础信息" name="basic">
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
          <el-form-item label="颜色">
            <el-select v-model="commodityForm.color" multiple>
              <el-option
                v-for="item in categories"
                :key="item._id"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上传轮播图">
            <el-upload
              class="carousel-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              list-type="picture-card"
              :show-file-list="false"
              :on-success="addCarousel"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <div class="carousel-imgs">
              <img
                v-for="(cimg, index) in commodityForm.carousel"
                :key="index"
                width="100%"
                :src="cimg"
                alt
              />
            </div>
          </el-form-item>
          <el-form-item label="上传详情页图">
            <el-upload
              class="detail-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              list-type="picture-card"
              :show-file-list="false"
              :on-success="addDetail"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <div class="detail-imgs">
              <img
                v-for="(dimg, index) in commodityForm.detail"
                :key="index"
                width="100%"
                :src="dimg"
                alt
              />
            </div>
          </el-form-item>
          <el-form-item label="列表页图">
            <!-- 如果属性一开始没有值的时候，可能会导致赋值赋不上去，所以我们要用vue里面的显示赋值 -->
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="addListImg"
            >
              <img v-if="commodityForm.listImg" :src="commodityForm.listImg" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="商品基础参数" name="param">
          <el-button
            @click="commodityForm.params.push({paramName: '', paramVal: ''})"
            type="primary"
          >
            <i class="el-icon-circle-plus"></i>
            添加商品基础参数
          </el-button>
          <el-row>
            <el-col :md="12" v-for="(item,i) in commodityForm.params" :key="i">
              <el-select v-model="commodityForm.params[i].paramName">
                <el-option
                  v-for="item in param"
                  :key="item._id"
                  :label="item.paramName"
                  :value="item.paramName"
                ></el-option>
              </el-select>
              <el-input v-model="commodityForm.params[i].paramVal"></el-input>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="基础服务" name="service">
          <el-button @click="commodityForm.service.push({})" type="primary">
            <i class="el-icon-circle-plus"></i>
            添加基础服务
          </el-button>
          <el-row>
            <el-col :md="12" v-for="(s,i) in commodityForm.service" :key="i">
              <el-select v-model="commodityForm.service[i].basis">
                <el-option
                  v-for="item in service"
                  :key="item._id"
                  :label="item.basis"
                  :value="item.basis"
                ></el-option>
              </el-select>
              <!-- <el-form-item label="基础服务名称">
                <el-input type="text" v-model="s.basis"></el-input>
              </el-form-item>-->
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
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
      commodityForm: {
        params: [
          {
            paramName: "",
            paramVal: ""
          }
        ],
        service: [],
        carousel: [],
        detail: [],
        color: []
      },
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
      id: this.$route.params.id,
      param: [],
      service: [],
      dialogImageUrl: ""
    };
  },
  async created() {
    this.id && (await this.fetchCommodityForm());
    this.getOrigins();
    this.fetchCategories();
    this.fetchParam();
    this.fetchService();
  },
  methods: {
    addListImg(res) {
      this.$set(this.commodityForm, 'listImg', res.url)
    },
    addDetail(res) {
      this.commodityForm.detail.push(res.url);
    },
    addCarousel(res) {
      this.commodityForm.carousel.push(res.url);
      // console.log(res,this.commodityForm.carousel)
      // carousel.push(res.url)
    },
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ""}`
      };
    },
    async fetchService() {
      const res = await this.$http.get("api/service");
      this.service = res.data;
    },
    async fetchParam() {
      const res = await this.$http.get("api/param");
      this.param = res.data;
    },
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
      this.$router.push("/commodity/list");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + "/api/upload";
    }
  }
};
</script>
<style lang="scss">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 5rem;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
  }
  .avatar {
    width: 5rem;
    height: 5rem;
    display: block;
  }
</style>
<style lang="scss" scoped>
.commodity-create-box {
  .demo-commodityForm {
    .carousel-uploader {
      // &::v-deep .el-upload-list__item {
      //   width: 50px;
      //   height: 50px;
      // }
      &::v-deep .el-upload--picture-card {
        position: relative;
        width: 50px;
        height: 50px;
        .el-icon-plus {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .carousel-imgs {
      display: flex;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .detail-uploader {
      &::v-deep .el-upload--picture-card {
        position: relative;
        width: 50px;
        height: 50px;
        .el-icon-plus {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .detail-imgs {
      display: flex;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>