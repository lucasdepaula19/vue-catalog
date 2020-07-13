<template>
    <div class="Card">
      <router-link :to="{ path: '/country' + name }">
        <b-img class="cardImg" :src="photo" fluid :alt="name"></b-img>
        <h4>{{ name }}</h4>
      </router-link>
    </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    photo: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.Card {
  min-width: 15rem;
  min-height: 15rem;
  margin: 2em;
  max-width: 15rem;
  max-height: 15rem;
  border: solid;
  border-color: white;
}
.cardImg {
  width: 100%;
  height: 234px;
}
.Card h4 {
  color: aliceblue;
  padding-top: 10px;
}
</style>
