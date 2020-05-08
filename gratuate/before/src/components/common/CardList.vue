<template>
  <div>
    <div
      class="commoditylist-item"
      @click="goDetail(item._id)"
      v-for="(item,index) in commodity"
      :key="index"
    >
      <img class="commoditylist-left" :src="item.listImg" alt />
      <div class="commoditylist-right">
        <div class="commoditylist-title">{{item.title}}</div>
        <div class="commoditylist-right-center">
          <span v-if="order">单价</span>
          <span class="commoditylist-preferential">{{'￥' + item.preferential}}</span>
          <span class="commoditylist-price">{{'￥' + item.price}}</span>
          <span v-if="order">总价￥{{item.preferential * item.purchaseNum}}</span>
        </div>
        <div class="commoditylist-right-footer">
          <div>{{'运费：' + item.freight}}</div>
          <div v-if="order">数量：{{item.purchaseNum}}</div>
          <div>{{item.origin}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    commodity: {
      type: Array,
      default: () => []
    },
    order: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      id: this.$route.params.id
    };
  },
  created() {
  },
  methods: {
    goDetail(id) {
      this.$router.push({
        path: "/commoditydetail",
        query: {
          id
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.commoditylist-item {
  display: flex;
  padding: 0.2rem;
  box-sizing: border-box;
  border-bottom: 1px solid black;
  background: white;
  .commoditylist-left {
    width: 1rem;
    height: 1rem;
  }
  .commoditylist-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    width: 100%;
    .commoditylist-title {
      font-size: 0.17rem;
      font-weight: bold;
    }
    .commoditylist-right-center {
      .commoditylist-price {
        text-decoration: line-through;
        color: #999;
      }
      .commoditylist-preferential {
        color: #eb5211;
      }
    }
    .commoditylist-right-footer {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>