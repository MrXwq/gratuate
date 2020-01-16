<template>
  <div class="home-page">
    666
    <div class="test">555</div>
    <img :src="kanbudong" alt="">
  </div>
</template>
<script>
import kanbudong from '../assets/img/kanbudong.jpg'
export default {
  data() {
    return {
      kanbudong
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.home-page {
  font-size: 30px;
  .test {
    color: aqua;
  }
}
</style>