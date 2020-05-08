<template>
  <div class="commoditylist-box">
    <CardList :commodity="commodity" :order="1"></CardList>
  </div>
</template>
<script>
export default {
  data() {
    return {
      order: [],
      commodity: []
    };
  },
  async created() {
    await this.getCommoditylist(this.id);
    this.order.forEach((item, index) => {
      this.commodity.push(item.commodity);
      this.commodity[index]["purchaseNum"] = item.purchaseNum;
    });
  },
  methods: {
    async getCommoditylist(type) {
      let res = await this.$http.post(`/api/order/get`, {
        token: localStorage.token
      });
      this.order = res.data;
    }
  },
  components: {
    CardList: () => import("@/components/common/CardList.vue")
  }
};
</script>
<style lang="scss" scoped>
.commoditylist-box {
  padding-bottom: 0.43rem;
}
</style>