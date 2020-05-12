<template>
  <div class="commoditylist-box">
    <div v-for="(item, index) in commodity" :key="index" class="commoditylist-item">
      <div class="commoditylist-item-img">
        <img :src="item.commodity && item.commodity.listImg" alt />
      </div>
      <div class="commoditylist-item-right">
        <div class="commoditylist-title">
          {{item.commodity && item.commodity.title}}
          <van-button type="danger" @click="deleteCart(item)">删除</van-button>
        </div>
        <!-- <div class="commoditylist-item-pn">
          <div>
            <span>￥</span>
            <span
              class="preferential"
            >{{item.commodity && item.purchaseNum * item.commodity.preferential}}</span>
          </div>
          <div class="red-add">
            <van-button type="primary" @click="putCommodity(item)">确认修改</van-button>
            <div @click="redAdd(item)" class="reduce purchase-button">-</div>
            <input class="purchase" type="text" v-model="item.purchaseNum" />
            <div @click="redAdd(item, 'add')" class="add purchase-button">+</div>
          </div>
        </div> -->
        <DetailFooter :item="item"></DetailFooter>
      </div>
    </div>
    <footer>
      <van-button @click="settlement" class="settlement" type="primary">结算</van-button>
    </footer>
    <!-- <van-card
      v-for="(item, index) in commodity"
      :key="index"
      tag="热"
      :num="item.purchaseNum"
      :price="item.commodity && item.commodity.preferential"
      :title="item.commodity && item.commodity.title"
      :thumb="item.commodity && item.commodity.listImg"
    >
      <template #footer>
        <van-button size="mini">添加</van-button>
        <van-button size="mini">减少</van-button>
      </template>
    </van-card>-->
  </div>
</template>
<script>
import { Card, SwipeCell, Button, Toast } from "vant";
export default {
  data() {
    return {
      commodity: [],
      id: this.$route.params.id
    };
  },
  created() {
    this.getCommoditylist(this.id);
  },
  methods: {
    deleteCart(item) {
      this.$http.delete(`/api/cart/${item._id}`)
      this.getCommoditylist(this.id);
      Toast('删除成功')
    },
    // 删除购物车，添加到订单
    async settlement() {
      await this.$http.post("/api/order/list", this.commodity);
      await this.$http.delete("/api/cart");
      this.$router.push({
        path: "/order"
      });
    },
    putCommodity(item) {
      this.$http.put(`/api/cart/${item._id}`, item);
    },
    
    beforeClose({ position, instance }) {
      console.log(instance, position);
      instance.close();
      // this.$http.delete(`/api/cart/${id}`)
      // switch (position) {
      //   case 'left':
      //   case 'cell':
      //   case 'outside':
      //     instance.close();
      //     break;
      //   case 'right':
      //     Dialog.confirm({
      //       message: '确定删除吗？',
      //     }).then(() => {

      //     });
      //     break;
      // }
    },
    close(id) {
      // console.log(id)
      // // this.$http.delete(`/api/cart/${id}`)
      // console.log('删除')
    },
    async getCommoditylist(type) {
      let res = await this.$http.post(`/api/cart/get`, {
        token: localStorage.token
      });
      this.commodity = res.data;
    }
  },
  components: {
    CardList: () => import("@/components/common/CardList.vue"),
    DetailFooter: () => import("@/components/special/DetailFooter.vue"),
    [Card.name]: Card,
    [SwipeCell.name]: SwipeCell,
    [Button.name]: Button
  }
};
</script>
<style lang="scss" scoped>
.commoditylist-box {
  padding-bottom: 0.43rem;
  overflow-y: scroll;
  .commoditylist-item {
    display: flex;
    padding: 0.2rem;
    box-sizing: border-box;
    background: white;
    &:not(:first-of-type) {
      margin-top: 20px;
    }
    .commoditylist-item-img {
      width: 1rem;
      height: 1rem;
      img {
        // width: 100%;
        height: 100%;
      }
    }
    .commoditylist-item-right {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 20px;
      .commoditylist-title {
        font-size: 0.2rem;
      }
      .commoditylist-item-pn {
        display: flex;
        justify-content: space-between;
        .preferential {
          font-size: 0.15rem;
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
    }
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.2rem;
    .settlement {
      padding: 0 0.3rem;
      margin-top: 30px;
      // width: .3rem;
    }
  }
}
</style>