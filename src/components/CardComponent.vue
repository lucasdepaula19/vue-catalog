<template>
  <div>
      <b-card-group class="GroupCard" deck>
        <b-card class="Card" v-for="item in itens" v-bind:key="item.index">
          <router-link :to="{ path: '/myPath'+item.id }">{{item.name}}</router-link>
        </b-card>
      </b-card-group>
  </div>
</template>

<script>

export default {
  name: "CardComponent",
  computed: {},

  components: {
  },

  data() {
  },

  mounted() {
  }
};
</script>

<style scoped>
.Card{
  min-width: 15rem;
  min-height: 15rem;
  margin-bottom: 2em;
  max-width: 15rem;
  max-height: 15rem;
}
.GroupCard{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>>