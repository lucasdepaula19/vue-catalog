<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <div id="nav">
      <router-link to="/">
        <h6>Home</h6>
      </router-link>
    </div>
    <h1>Para onde irei?</h1>
    <div class="container">
      <b-form class="busca">
        <b-input-group>
          <b-input
            class="input-buscar"
            type="text"
            placeholder="Para onde você quer ir?"
            name="termo"
            id="termo"
            v-model="termo"
            autocomplete="off"
          />
          <router-link :to="{ path: '/place'+termo }" @click.native="$router.go()">
            <b-button variant="info" type="submit" class="btn-buscar">Buscar</b-button>
          </router-link>
        </b-input-group>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      termo: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Usar sempre CSS 'flex' */
.busca {
  width: 35rem;
  margin: 0;
}
h1 {
  color: aliceblue;
}
.container {
  height: 7em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-buscar {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 6em;
}
.input-buscar {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
</style>
