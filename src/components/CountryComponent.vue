<template>
  <div>
    <SearchComponent msg />
    <!-- <router-link to="/">Go to my Home</router-link> -->
    <div class="homeList">
      <h2>Veja nossos principais destinos na {{this.$route.params.name}}</h2>
      <b-row class="countryGroupCard">
        <div class="countryCard" v-for="pais in paises" v-bind:key="pais.index">
          <router-link :to="{ path: '/users'+pais.id }">
            <b-img
              class="cardImg"
              :src="getImageUrl(pais.photos[0].photo_reference)"
              fluid
              :alt="pais.name"
            ></b-img>
            <h4>{{pais.name}}</h4>
          </router-link>
        </div>
      </b-row>
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
        `http://localhost:8080/maps/api/place/findplacefromtext/json?input=cidades%20da%20${this.$route.params.name}&inputtype=textquery&fields=photos,name,rating&key=AIzaSyAxo6NjdG49PCiRTIvLwOleZT7k7f9_nbA`
      )
      .then(resp => {
        this.paises = resp.data.candidates;
        // console.log(this.paises[0].name);
      });
    // .get(
    //     `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.paises.photos.photo_reference}&key=AIzaSyAxo6NjdG49PCiRTIvLwOleZT7k7f9_nbA`
    //   );
    // .then(({ data }) => (this.paises = data.candidates));
  },
  methods: {
    getImageUrl(imageId) {
      return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${imageId}&key=AIzaSyAxo6NjdG49PCiRTIvLwOleZT7k7f9_nbA`;
    }
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
.countryCard {
  min-width: 15rem;
  min-height: 15rem;
  margin: 2em;
  max-width: 15rem;
  max-height: 15rem;
  border: solid;
  border-color: white;
}
.countryCard h4{
  color: aliceblue;
  padding-top: 10px;
}
.countryGroupCard {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cardImg {
  width: 100%;
  height: 236px;
}
</style>>