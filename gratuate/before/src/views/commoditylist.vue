<template>
  <div class="commoditylist-box">
    <CardList :commodity="commodity" :id="id"></CardList>
  </div>
</template>
<script>
export default {
  data() {
    return {
      commodity: [],
      id: this.$route.params.id,
    };
  },
  created() {
    this.getCommoditylist(this.id);
  },
  methods: {
    async getCommoditylist(type) {
      let res = await this.$http.get(`/api/commoditylist/${type}`);
      this.commodity = res.data;
    }
  },
  components: {
      CardList: () => import('@/components/common/CardList.vue')
  }
};
</script>
<style lang="scss" scoped>
.commoditylist-box {
  
}
</style>