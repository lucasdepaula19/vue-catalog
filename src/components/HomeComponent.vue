<template>
  <div class="Container homeList">
    <!-- <router-link to="/">Go to my Home</router-link> -->
    <h2>Encontre seu lugar no mundo</h2>
    <b-row class="homeGroupCard">
      <CardComponent
        v-for="continente in continentes"
        v-bind:key="continente.id"
        :photo="continente.photo"
        :name="continente.name"
      >
      </CardComponent>
    </b-row>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "HomeComponent",
  computed: {},

  components: {
    CardComponent
  },

  data() {
    return {
      continentes: [
        {
          id: "1",
          name: "América do Sul",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS334oNMeJToWjQGczcD5mW6HZwciz1SjWCZg&usqp=CAU"
        },
        {
          id: "2",
          name: "América Central",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQafE_5zf0XtUyqJRmKtWWdkbznBMKykR6fSQ&usqp=CAU"
        },
        {
          id: "3",
          name: "América do Norte",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0USi1L1h69qFZn_-Im6sJ7suO7mQuGiYXSA&usqp=CAU"
        },
        {
          id: "4",
          name: "Europa",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQH-6kVYrHwmUV2S0F9pNDP27pDtcBLHfNzcQ&usqp=CAU"
        },
        {
          id: "5",
          name: "Ásia",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSG7TtptNLuFlhcmKIFyLA04gqzhHfdru8ViA&usqp=CAU"
        },
        {
          id: "6",
          name: "África",
          photo:
            "https://www.stoodi.com.br/wp-content/uploads/2020/03/africa.jpg"
        },
        {
          id: "7",
          name: "Oceania",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBdrKcx-BCgGykD1mSMrncP6lThUD_15YaBQ&usqp=CAU"
        },
        {
          id: "8",
          name: "Antárdida",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRv-i3NXxF3c9BOaxnlzHgGGt73k8zwd3CYaw&usqp=CAU"
        }
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
.homeGroupCard {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
