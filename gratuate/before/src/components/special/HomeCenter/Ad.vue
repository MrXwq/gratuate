<template>
  <div class="ad-box">
    <!-- <div class="ad-right">商铺头条</div>
    <div class="ad-data">
      <div class="data-item" v-for="(item, index) in ads" :key="index">
        <div class="ad-type">{{item.type}}</div>
        <div class="ad-title">{{item.title}}</div>
      </div>
    </div> -->
    <van-notice-bar :text="ads[0].title" left-icon="volume-o" />
  </div>
</template>
<script>
import { NoticeBar } from "vant";
export default {
  data() {
    return {
      ads: [
        {
          type: "手机",
          title: "国产破天荒价格，引入大量人群围观"
        },
        {
          type: "手机",
          title: "国产破天荒价格，引入大量人群围观"
        },
        {
          type: "手机",
          title: "国产破天荒价格，引入大量人群围观"
        },
        {
          type: "手机",
          title: "国产破天荒价格，引入大量人群围观"
        },
        {
          type: "手机",
          title: "国产破天荒价格，引入大量人群围观"
        }
      ]
    };
  },
  created() {
    this.getAd()
  },
  methods: {
    async getAd() {
      let res = await this.$http.get('/api/ad');
      this.ads = res.data
    }
  },
  components: {
    [NoticeBar.name]: NoticeBar
  }
};
</script>
<style lang="scss" scoped>
.ad-box {
  // display: flex;
  padding: 20px;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  background: white;
  border-radius: 0 0 20px 20px;
  border-top: 1px solid rgb(230, 225, 225);
  overflow: hidden;
  &::v-deep .van-notice-bar__left-icon {
    font-size: .15rem;
  }
  .van-notice-bar {
    font-size: .13rem;
  }
  &::v-deep .van-notice-bar__wrap {
    height: .16rem; 
  }
  // .ad-right {
  //   font-size: 30px;
  //   font-weight: bold;
  // }
  // .ad-data {
  //   margin-left: 20px;
  //   overflow: hidden;
  //   .data-item {
  //     display: flex;
  //     &:not(:first-of-type) {
  //       margin-top: 10px;
  //     }
  //     .ad-type {
  //       padding: 0 10px;
  //       background-color: #feefec;
  //       color: #e86217;
  //     }
  //     .ad-title {
  //       margin-left: 10px;
  //     }
  //   }
  // }
}
</style>