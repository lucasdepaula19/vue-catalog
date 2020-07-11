<template>
  <div class="homeList">
    <!-- <router-link to="/">Go to my Home</router-link> -->
    <h2>Encontre seu lugar no mundo</h2>
    <b-card-group deck>
      <b-card v-for="pais in paises" v-bind:key="pais.id">
        <p>teste card</p>
        <router-link :to="{ path: '/users'+pais.id }">{{pais.name}}</router-link>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeComponent",
  computed: {},

  data() {
    return {
      paises: []
    };
  },
  
  mounted() {
    axios
      .get("https://www.mocky.io/v2/5ebdbed93100008e00c5cd2d/")
      .then(({ data }) => (this.paises = data.results));
  }
};
</script>
<style scoped>
.homeList{
  padding: 2em;
}
.homeList h2{
  color: white;
  margin-bottom: 1em;
}
</style>>