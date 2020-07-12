<template>
  <div class="Container homeList">
    <!-- <router-link to="/">Go to my Home</router-link> -->
    <h2>Encontre seu lugar no mundo</h2>
    <b-row class="homeGroupCard">
      <div class="homeCard" v-for="continente in continentes" v-bind:key="continente.id">
        <router-link :to="{ path: '/country'+continente.name }">
          <b-img class="cardImg" :src="continente.photo" fluid :alt="continente.name"></b-img>
          <h4>{{continente.name}}</h4>
        </router-link>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  computed: {},

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
.homeCard {
  min-width: 15rem;
  min-height: 15rem;
  margin: 2em;
  max-width: 15rem;
  max-height: 15rem;
  border: solid;
  border-color: white;
}
.homeCard h4{
  color: aliceblue;
  padding-top: 10px;
}
.homeGroupCard {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cardImg {
  width: 100%;
  height: 236px;
}
</style>>