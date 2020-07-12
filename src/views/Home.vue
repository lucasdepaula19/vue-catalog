<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <img alt="Vue logo" src="../../image/logo.png"> -->
    <!-- <SearchComponent msg="Welcome to Your Vue.js App"/> -->
    <SearchComponent msg />
    <HomeComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchComponent from "@/components/SearchComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  name: "Home",
  components: {
    SearchComponent,
    HomeComponent
  },
};
</script>

<style scoped>
</style>