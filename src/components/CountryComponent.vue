<template>
  <div>
    <!-- <SearchComponent /> -->
    <div class="homeList">
      <h2>Veja nossos principais destinos na {{ this.$route.params.name }}</h2>
      <b-row class="countryGroupCard">
        <CardComponent
          v-for="pais in paises"
          v-bind:key="pais.index"
          :photo="getImageUrl(pais.photos[0].photo_reference)"
          :name="pais.name"
        >
        </CardComponent>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import SearchComponent from "./SearchComponent.vue";
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "CountryComponent",
  computed: {},

  components: {
    // SearchComponent,
    CardComponent
  },

  data() {
    return {
      paises: []
    };
  },

  mounted() {
    axios
      .get(
        `http://localhost:8080/maps/api/place/findplacefromtext/json?input=cidades%20da%20${this.$route.params.name}&inputtype=textquery&fields=formatted_address,photos,name,rating&key=AIzaSyAxo6NjdG49PCiRTIvLwOleZT7k7f9_nbA`
      )
      .then(resp => {
        this.paises = resp.data.candidates;
      });
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
.countryGroupCard {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
