<template>
  <div class="header">
    <div class="ui secondary pointing menu">
      <a class="active item" href="/"> Image Bucket </a>
      <a class="item" href="#"> Messages </a>
      <div class="right menu">
        <a v-if="isLoggedIn" class="ui item" @click="logout"> Logout </a>
        <a v-else class="ui item" @click="login"> Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  name: "AppHeader",
  getters: {
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
    }),
  },
  methods: {
    ...mapActions({
      login: "login",
      logout: "logout",
    }),
  },
}
</script>

<style></style>
