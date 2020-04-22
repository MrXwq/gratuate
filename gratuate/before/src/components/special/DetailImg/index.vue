<template>
  <div class="detail-img-box">
    <div class="detail-img-title">
      <span class="line"></span>
      <div class="icon-text">
        <i class="iconfont icontupian"></i>
        <span class="detail-text">详情</span>
      </div>
      <span class="line"></span>
    </div>
    <div class="item-box" v-for="(item, index) in detailImgs" :key="index">
      <img class="item-img" :src="item.imgSrc" alt="详情图片" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailImgs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.detail-img-box {
  width: 100vw;
  .item-box {
    width: 100%;
    .item-img {
      width: 100%;
    }
  }
  .detail-img-title {
    display: flex;
    padding: 0.08rem 0;
    justify-content: center;
    align-items: center;
    .line {
      width: 0.4rem;
      border-top: 0.01rem solid #999;
    }
    .icon-text {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 20px;
      .icontupian {
        color: #999;
        font-size: 35px;
      }
      .detail-text {
        color: #999;
      }
    }
  }
}
</style>