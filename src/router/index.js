import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import CountryComponent from '../components/CountryComponent.vue'
import PlaceComponent from '../components/PlaceComponent.vue'
import HomeComponent from '../components/HomeComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
    {
    path: '/Country:name',
    name: 'Country',
    component: CountryComponent
  },
  {
    path: '/Place:name',
    name: 'Place',
    component: PlaceComponent
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
