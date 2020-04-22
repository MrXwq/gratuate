<template>
  <div class="recommend-box">
    <div class="recommend-container">
      <div class="recommend-header">
        <i class="iconfont icontuijian-copy-copy"></i>
        <span>极力推荐</span>
      </div>
      <div
        class="recommend-item"
        v-for="(item, index) in recommends"
        :key="index"
        @click="goCommodityDetail(item.id)"
      >
        <div>
          <img class="recommend-img" :src="item.imgUrl" alt="商品图片" />
        </div>
        <div class="recommend-text">
          <div class="recommend-title">{{item.title}}</div>
          <div class="recommend-price-box">
            <span class="recommend-sign">￥</span>
            <span class="recommend-price">{{item.price}}</span>
            <span class="recommend-payed">{{item.hasPurchased}}人已购买</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { COMMODITYDETAIL } from "@/constants/URL.js";
export default {
  data() {
    return {
      recommends: [
        {
          id: 1,
          imgUrl:
            "http://gw.alicdn.com/bao/uploaded/i1/2675669696/O1CN01YKLlof2LUopbI1RmM_!!2675669696.jpg_500x500q90.jpg_.webp",
          title: "简约现代床头柜北欧汉尼斯储物柜小户型迷你床边柜卧室家具两斗柜",
          price: 399,
          hasPurchased: 1
        },
        {
          id: 2,
          imgUrl:
            "http://gw.alicdn.com/bao/uploaded/i1/2675669696/O1CN01YKLlof2LUopbI1RmM_!!2675669696.jpg_500x500q90.jpg_.webp",
          title: "简约现代床头柜北欧汉尼斯储物柜小户型迷你床边柜卧室家具两斗柜",
          price: 399,
          hasPurchase: 1
        },
        {
          id: 3,
          imgUrl:
            "http://gw.alicdn.com/bao/uploaded/i1/2675669696/O1CN01YKLlof2LUopbI1RmM_!!2675669696.jpg_500x500q90.jpg_.webp",
          title: "简约现代床头柜北欧汉尼斯储物柜小户型迷你床边柜卧室家具两斗柜",
          price: 399,
          hasPurchase: 1
        },
        {
          id: 4,
          imgUrl:
            "http://gw.alicdn.com/bao/uploaded/i1/2675669696/O1CN01YKLlof2LUopbI1RmM_!!2675669696.jpg_500x500q90.jpg_.webp",
          title: "简约现代床头柜北欧汉尼斯储物柜小户型迷你床边柜卧室家具两斗柜",
          price: 399,
          hasPurchase: 1
        }
      ]
    };
  },
  methods: {
    goCommodityDetail(id) {
      this.$router.push({
        path: COMMODITYDETAIL,
        query: {
          id
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.recommend-container {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.1rem;
  .recommend-header {
    width: 100%;
    text-align: center;
  }
  .recommend-item {
    display: flex;
    flex-direction: column;
    margin: 10px 5px 0;
    width: 1.7rem;
    border-radius: 0.1rem;
    overflow: hidden;
    .recommend-img {
      width: 1.7rem;
      height: 1.7rem;
    }
    .recommend-text {
      padding: 0 13px;
      height: 1rem;
      background: white;
      .recommend-title {
        margin-top: 10px;
      }
      .recommend-price-box {
        margin-top: 10px;
        .recommend-sign {
          color: #ff5500;
          font-size: 0.1rem;
        }
        .recommend-price {
          color: #ff5500;
          font-size: 0.13rem;
        }
        .recommend-payed {
          color: #999999;
          font-size: 0.1rem;
        }
      }
    }
  }
}
</style>