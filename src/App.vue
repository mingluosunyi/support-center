<template>
  <div id="app-layout">
    <header class="header">
      <div>
        <img src="../assets/logo.svg">
      </div>
      <div>My shirt shop</div>
    </header>
    <nav-menu />
    <router-view/>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
export default {
  components: {
    'nav-menu': NavMenu
  }
}
</script>

<style lang="stylus">
@import "../style/main.styl"
</style>

<style lang="stylus" scoped>
.header {
  .img {
    width: 64px;
    height: 64px;
  }
}
</style>
