<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  export default {
    created() {
      console.log(process.env.NODE_ENV)
    }
  }
</script>
<style lang="scss">
@import "@/assets/css/common";
#app {
  height: 100vh;
}
</style>
