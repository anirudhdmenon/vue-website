import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home-view.vue'

<script id="cookieyes" type="text/javascript" 
        src="https://scriptstaging.cookieyes.com/client_data/462525f2db575d54d0304931/script.js">
</script>

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
