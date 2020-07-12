<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <h1>Para onde irei?</h1>
    <div class="container">
      <b-form class="busca" method="post" action="/busca">
        <b-input-group>
          <b-input
            class="input-buscar"
            type="text"
            placeholder="Para onde você quer ir?"
            name="termo"
            id="texto-buscar-home"
            autocomplete="off"
          />
          <b-button variant="info" type="submit" class="btn-buscar">Buscar</b-button>
        </b-input-group>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  props: {
    msg: String
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
h1{
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
