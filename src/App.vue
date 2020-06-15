<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
    <!-- <router-link to="/login2">Login</router-link>
    <router-link to="/hello2">Hello</router-link> -->
  <!-- <router-link to="/user/boy">User</router-link> -->
  </div>
</template>

<script>
export default {
  name: "App",

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
