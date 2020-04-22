<template>
  <div class="classification-box">
    <div class="classification-container">
      <div class="vertical" v-for="(item, index) in iconfontArr" :key="index">
        <div class="vertical-top">
          <i class="iconfont iconfont-top" :class="item.top"></i>
          <span>{{item.topText}}</span>
        </div>
        <div class="vertical-bottom">
          <i class="iconfont iconfont-bottom" :class="item.bottom"></i>
          <span>{{item.bottomText}}</span>
        </div>
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
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.classification-box {
  .classification-container {
    display: flex;
    padding-top: .1rem;
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
      }
      .vertical-bottom {
        display: flex;
        flex-direction: column;
        margin-top: 0.3rem;
        width: 0.4rem;
      }
    }
  }
}
</style>