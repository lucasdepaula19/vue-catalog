<template>
  <div class="Container homeList">
    <!-- <router-link to="/">Go to my Home</router-link> -->
    <h2>Encontre seu lugar no mundo</h2>
    <b-card-group deck class="homeGroupCard">
      <b-card class="homeCard" v-for="continente in continentes" v-bind:key="continente.id">
        <router-link :to="{ path: '/users'+continente.id }">{{continente.name}}</router-link>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  computed: {},

  data() {
    return {
      continentes: [
        { id: "1", name: "América do Sul" },
        { id: "2", name: "América Central" },
        { id: "3", name: "América do Norte" },
        { id: "4", name: "Europa" },
        { id: "5", name: "Ásia" },
        { id: "6", name: "África" },
        { id: "7", name: "Oceania" },
        { id: "8", name: "Antárdida" }
      ]
    };
  },

  mounted() {}
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
.homeCard {
  min-width: 15rem;
  min-height: 15rem;
  margin-bottom: 2em;
  max-width: 15rem;
  max-height: 15rem;
}
.homeGroupCard{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>>