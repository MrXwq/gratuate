<template>
  <div class="home-page">
    <div class="home-box">
      <header class="header-box">
        <div class="header-bd">
          <router-link class="placeholder" to="/search">
            <span class="iconfont iconchazhao">寻找宝贝</span>
          </router-link>
        </div>
      </header>
      <div class="home-center">
        <HomeCenter />
      </div>
      <footer>
        <HomeFooter />
      </footer>
    </div>
  </div>
</template>
<script>
  import HomeCenter from '@/components/special/HomeCenter/index.vue';
  import HomeFooter from '@/components/special/HomeFooter/index.vue';

  export default {
    data() {
      return {};
    },
    created() {
    },
    methods: {
    },
    components: {
      HomeCenter,
      HomeFooter,
    },
  };
</script>
<style lang="scss" scoped>
@import "@/assets/css/common";
.home-page {
  padding-top: .37rem;
  padding-bottom: .43rem;
  height: 100%;
  .home-box {
    position: relative;
    height: 100%;
    width: 100%;
    .header-box {
      position: fixed;
      left: 0rem;
      top: 0rem;
      z-index: 1000;
      width: 100%;
      background-color: rgb(216, 201, 215);
      .header-bd {
        width: 100%;
        padding-right: .09rem;
        padding-left: .42rem;
        padding-top: .08rem;
        padding-bottom: .08rem;
        background-image: url("~@/assets/img/wolf.jpg");
        background-size: .27rem .2rem;
        background-repeat: no-repeat;
        background-position: .09rem center;
        .placeholder {
          display: block;
          font-size: 0rem;
          background-color: rgb(187, 145, 206);
          text-align: center;
          border-radius: .04rem;
          .iconchazhao {
            font-size: .15rem;
          }
        }
      }
    }
  }
}
</style>
