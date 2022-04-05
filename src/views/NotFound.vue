<template>
<main class="not-found">
  <h1>This page can't be found</h1>
  <div class="actions">
    <router-link :to="{name:'home'}" tag="button">
      Return to home
    </router-link>
  </div>
</main>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>