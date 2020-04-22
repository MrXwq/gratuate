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
          imgSrc:"https://img.alicdn.com/imgextra/i1/2675669696/O1CN01YKLlof2LUopbI1RmM_!!2675669696.jpg_640x640q80_.webp",
        },
        {
          imgSrc:"https://img.alicdn.com/imgextra/i4/2675669696/O1CN01zMM5Vl2LUomTvM4mo_!!2675669696.jpg_640x640q80_.webp",
        },
        {
          imgSrc:"https://img.alicdn.com/imgextra/i3/2675669696/O1CN012LUoi20KG2deA9H_!!2675669696.jpg_640x640q80_.webp",
        },
        {
          imgSrc:"https://img.alicdn.com/imgextra/i3/2675669696/TB2aCZ3cNGYBuNjy0FnXXX5lpXa_!!2675669696.jpg_640x640q80_.webp",
        },
        {
          imgSrc:"https://img.alicdn.com/imgextra/i3/2675669696/TB2z2TFvg0kpuFjSspdXXX4YXXa_!!2675669696.jpg_640x640q80_.webp",
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
