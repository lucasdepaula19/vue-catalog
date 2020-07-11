<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    
    <!-- <img alt="Vue logo" src="../../image/logo.png"> -->
    <!-- <SearchComponent msg="Welcome to Your Vue.js App"/> -->
    <h1>Para onde irei?</h1>
    <SearchComponent msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchComponent from '@/components/SearchComponent.vue'

export default {
  name: 'Home',
  components: {
    SearchComponent
  }
}
</script>
<style scoped>
.home{

  background-image: url("../assets/scotland-540119_1920.jpg");
  height: 100%;
  background-size: cover;
}
</style>