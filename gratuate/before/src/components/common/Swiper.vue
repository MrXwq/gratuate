<template>
  <div class="swiper-box">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in swiperArr" :key="index">
        <img :src="item.imgSrc" class="swiper-img" alt="轮播图" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div
        v-if="swiperParams ? swiperParams.prevNextButton : true"
        class="swiper-button-prev"
        slot="button-prev"
      ></div>
      <div
        v-if="swiperParams ? swiperParams.prevNextButton : true"
        class="swiper-button-next"
        slot="button-next"
      ></div>
    </swiper>
  </div>
</template>
<script>
import wolf from "@/assets/img/wolf.jpg";
export default {
  props: {
    swiperParams: {
      type: Object,
      default: () => {}
    },
    imgHeight: {
      type: String,
      default: ""
    },
    swiperArr: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOption: {},
      wolf
    };
  },
  created() {
    this.swiperOption = {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: this.swiperParams ? this.swiperParams.paginationType : "bullets"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      autoplay: this.swiperParams
        ? this.swiperParams.autoplay
        : {
            delay: 2500,
            disableOnInteraction: false
          }
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.swiper-box {
  height: 100%;
  .swiper {
    height: 100%;
    .swiper-img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>