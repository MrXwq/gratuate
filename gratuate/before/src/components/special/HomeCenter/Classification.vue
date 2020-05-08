<template>
  <div class="classification-box">
    <div class="classification-container">
      <div class="vertical" v-for="(item, index) in category" :key="index">
        <div
          @click="goConmodityList(item._id)"
          class="vertical-top"
          :class="[ index % 2 != 0 ? 'vertical-bottom' : '']"
          v-if="item.icon"
        >
          <i
            class="iconfont iconfont-top"
            :class="[ index % 2 == 0 ? 'iconfont-bottom' : '',item.icon]"
          ></i>
          <span>{{ item.name}}</span>
        </div>
        <!-- <div class="vertical-bottom">
          <i class="iconfont iconfont-bottom" :class=" item.icon"></i>
          <span>{{ item.name}}</span>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iconfontArr: [
        {
          top: "iconshouji",
          topText: "手机",
          bottom: "iconganglinggaolajianshen",
          bottomText: "运动"
        },
        {
          top: "icondiannao",
          topText: "电脑",
          bottom: "iconmeizhuang",
          bottomText: "美妆"
        },
        {
          top: "iconnvzhuang",
          topText: "女装",
          bottom: "iconxihu",
          bottomText: "洗护"
        },
        {
          top: "iconshipin",
          topText: "饰品",
          bottom: "iconxiezi",
          bottomText: "鞋子"
        },
        {
          top: "iconnanzhuang",
          topText: "男装",
          bottom: "iconyiyao",
          bottomText: "医药"
        },
        {
          top: "iconshipin1",
          topText: "饰品",
          bottom: "iconshengxian",
          bottomText: "生鲜"
        }
      ],
      category: []
    };
  },
  created() {
    this.getClassification();
  },
  methods: {
    async getClassification() {
      const res = await this.$http.get("/api/category");
      this.category = res.data;
      // console.log(res.data)
    },
    goConmodityList(id) {
      this.$router.push({
        path: `/commoditylist/${id}`
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.classification-box {
  .classification-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-top: 0.1rem;
    width: 100%;
    height: 1.5rem;
    box-sizing: border-box;
    background: white;
    overflow-x: auto;
    .vertical {
      margin-left: 0.3rem;
      .iconfont {
        font-size: 0.3rem;
        &.iconfont-top {
          color: #fe6b68;
        }
        &.iconfont-bottom {
          color: #ffc235;
        }
      }
      .vertical-top {
        display: flex;
        flex-direction: column;
        width: 0.4rem;
        &.vertical-bottom {
          display: flex;
          flex-direction: column;
          margin-top: 0.3rem;
          width: 0.4rem;
        }
      }
    }
  }
}
</style>