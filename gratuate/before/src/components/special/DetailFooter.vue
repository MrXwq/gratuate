<template>
  <div class="commoditylist-item-pn">
    <div class="item-right">
      <span>￥</span>
      <input disabled class="preferential" v-model="total" />
    </div>
    <div class="red-add">
      <van-button type="primary" @click="putCommodity(item)">确认修改</van-button>
      <div @click="redAdd(item)" class="reduce purchase-button">-</div>
      <input class="purchase" type="text" v-model="item.purchaseNum" />
      <div @click="redAdd(item, 'add')" class="add purchase-button">+</div>
    </div>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      total: 0
    };
  },
  created() {
    this.item &&
      (this.total = this.item.purchaseNum * this.item.commodity.preferential);
  },
  components: {
    [Button.name]: Button
  },
  methods: {
    redAdd(item, type) {
      if (type === "add") {
        item.purchaseNum++;
      } else if (item.purchaseNum != 1) {
        item.purchaseNum--;
      }
      this.total = this.item.purchaseNum * this.item.commodity.preferential;
      console.log(this.total);
    },
    putCommodity(item) {
      this.$http.put(`/api/cart/${item._id}`, item);
    }
  },
};
</script>
<style lang="scss" scoped>
.commoditylist-item-pn {
  display: flex;
  justify-content: space-between;
  .item-right {
      display: flex;
  }
  .preferential {
    font-size: 0.15rem;
    width: .5rem;
    height: .2rem;
    background: none;
  }
  .red-add {
    display: flex;
    font-size: 0.2rem;
    .purchase-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 0.3rem;
      height: 0.3rem;
      background: whitesmoke;
    }
    .purchase {
      width: 0.3rem;
      text-align: center;
    }
    .reduce {
      margin-left: 10px;
    }
  }
}
</style>