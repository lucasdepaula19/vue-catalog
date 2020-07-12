<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// import Home from "./views/Home";

// export default {
//   name: "App",
//   components: {
//     Home
//   }
// };
</script>

<style>
#app {
  background-image: url("./assets/scotland-540119_1920.jpg");
  background-repeat: repeat-y;
  background-size: cover;
  /* height: 100%; */
  text-align: center;
  
}
#nav{
  color: #ffffff;
  margin-bottom: 1em;
  padding-top: 10px;
}
#nav a{
  color: #ffffff;
}
</style>
