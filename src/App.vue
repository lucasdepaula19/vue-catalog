<template>
  <div id="app">
    <SearchComponent id="busca"/>
    <router-view />
  </div>
</template>

<script>
import SearchComponent from "@/components/SearchComponent.vue";

export default {
  name: "app",
  components: {
    SearchComponent
  },
};
</script>

<style>
/* #busca {
  background-image: url("./assets/hills-2836301_1920.jpg");
  background-repeat: repeat-y;
  background-size: cover;
  min-height: 100%;
  height: auto;
  text-align: center;
} */
#app {
  background-image: url("./assets/scotland-540119_1920.jpg");
  /* background-color: rgb(212, 196, 196); */
  background-repeat: repeat-y;
  background-size: cover;
  min-height: 100%;
  height: auto;
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
