<template>
  <div class="layout-box">
    <router-view></router-view>
    <div class="layout-tabbar">
      <router-link
        tag="div"
        v-for="(item,index) in tabbar"
        :key="index"
        :to="item.path"
        @click.native="selectTabbar(item.path)"
      >
        <span class="iconfont" :class="nowConstant === item.path ? item.activeIcon : item.icon"></span>
        <p>{{item.value}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
import { HOME, CART, ORDER, MY } from "@/constants/URL.js";
import { TABBAR_TEXT } from "@/constants/TEXT.js";

export default {
  data() {
    return {
      nowConstant: "",
      tabbar: []
    };
  },
  created() {
    this.nowConstant = this.$route.path;
    this.initTabInfo();
  },
  methods: {
    // 初始话tab栏信息
    initTabInfo() {
      this.tabbar = [
        {
          path: HOME,
          value: TABBAR_TEXT.HOME,
          icon: "iconshouye1",
          activeIcon: "iconshouye"
        },
        {
          path: CART,
          value: TABBAR_TEXT.CART,
          icon: "icongouwuche",
          activeIcon: "icongouwucheman"
        },
        {
          path: ORDER,
          value: TABBAR_TEXT.ORDER,
          icon: "iconsingle",
          activeIcon: "icondingdan1"
        },
        {
          path: MY,
          value: TABBAR_TEXT.MY,
          icon: "icongeren3",
          activeIcon: "icongeren1"
        }
      ];
    },
    // 切换图标
    selectTabbar(val) {
      this.nowConstant = val;
    }
  }
};
</script>
<style lang="scss" scoped>
.layout-tabbar {
  font-size: 0.16rem;
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1001;
  text-align: center;
  background-color: #ffffff;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #f8f8f8;
  align-items: center;
  padding: 0 20px;
  padding-top: 2px;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  .iconfont {
    font-size: 0.2rem;
  }
}
</style>
