<template>
<nav class="menu">
  <router-link :to="{name: 'home'}" exact>Home</router-link>
  <router-link :to="{name: 'faq'}">FAQ</router-link>
  <router-link :to="{name: 'tickets'}">Support Tickets</router-link>
  <div class="spacer"></div>
  <template>
    <template v-if="$state.user">
      <a>{{ $state.user.username }}</a>
      <a @click="logout">Logout</a>
    </template>
    <template v-else>
      <router-link :to="{name: 'login'}">Login</router-link>
    </template>
  </template>
</nav>
</template>

<script>
export default {
  name: "NavMenu",
  methods: {
    async logout() {
      const result = await this.$fetch('logout')
      if (result.status === 'ok'){
        this.$state.user = null
        this.$router.push({name: 'home'})
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../style/imports.styl"
.router-link-active {
  border-bottom-color: $primary-color;
}
</style>