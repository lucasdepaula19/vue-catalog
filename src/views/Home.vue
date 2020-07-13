<template>
  <div class="home">
    <SearchComponent/>
    <HomeComponent />
  </div>
</template>

<script>
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