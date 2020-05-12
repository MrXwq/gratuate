<template>
  <div>
    <div class="mark">
      <div class="swiper">
        <Swiper :swiperArr="swiperArr"></Swiper>
      </div>
      <Classofocation></Classofocation>
      <Ad></Ad>
      <Recommend></Recommend>
    </div>
  </div>
</template>
<script>
import Ad from "./Ad.vue";
import Swiper from "@/components/common/Swiper.vue";
import Classofocation from "./Classification.vue";
import Recommend from "./Recommend.vue";
export default {
  data() {
    return {
      swiperArr: [
        {
          imgSrc:"https://gw.alicdn.com/imgextra/i4/198/O1CN01bfoEyy1DKj1F8ntOD_!!198-0-lubanu.jpg",
        },
        {
          imgSrc:"https://img.alicdn.com/simba/img/TB1wuSzDYY1gK0jSZTESutDQVXa.jpg_q50.jpg",
        },
        {
          imgSrc:"https://img.alicdn.com/imgextra/i1/26/O1CN017CbhBV1C3wtgsAyvc_!!26-0-luban.jpg",
        },
        {
          imgSrc:"https://gw.alicdn.com/imgextra/i2/194/O1CN01YjmzWD1DItR8VpSRp_!!194-0-lubanu.jpg",
        },
        {
          imgSrc:"https://img.alicdn.com/imgextra/i4/48/O1CN01fPXLLo1CE1bubyQlH_!!48-0-luban.jpg",
        },
      ]
    };
  },
  methods: {
  },
  components: {
    Swiper,
    Classofocation,
    Recommend,
    Ad
  }
};
</script>

<style lang="scss" scoped>
.mark {
  width: 100%;
  .swiper {
    height: 1.5rem;
  }
}
</style>
