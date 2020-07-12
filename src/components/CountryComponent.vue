<template>
  <div>
    <SearchComponent msg />
    <!-- <router-link to="/">Go to my Home</router-link> -->
    <div class="homeList">
      <h2>Veja nossas sugestões</h2>
      <b-card-group deck>
        <!-- <b-card v-for="pais in paises" v-bind:key="pais.id">
          <p>teste card</p>
          <router-link :to="{ path: '/users'+pais.id }">{{pais.name}}</router-link>
        </b-card>-->
      </b-card-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchComponent from "./SearchComponent.vue";

export default {
  name: "CountryComponent",
  computed: {},

  components: {
    SearchComponent
  },

  data() {
    return {
      paises: []
    };
  },

  mounted() {
    axios
      .get(
        "http://localhost:8080/maps/api/place/findplacefromtext/json?input=cidades%20da%20europa&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyAxo6NjdG49PCiRTIvLwOleZT7k7f9_nbA"
      )
      .then(resp => {
        console.log(resp);
      });
    // .then(({ data }) => (this.paises = data.candidates));
  }
};
</script>

<style scoped>
.homeList {
  padding: 2em;
}
.homeList h2 {
  color: white;
  margin-bottom: 1em;
}
h1 {
  color: white;
}
</style>>