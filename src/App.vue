<template>
  <div class="header">
    <AppHeader></AppHeader>
    <div id="app">Just a bit of a hack to get the right layout forum.</div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"
export default {
  name: "App",
  components: {
    AppHeader,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
