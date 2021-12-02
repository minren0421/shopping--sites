import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import about from '../views/about.vue'
import shoppdata from '../views/shoppdata.vue'
import shopp from '../views/shopp.vue'
import productlist from '../views/productlist.vue'
import detail from '../views/detail.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',component:Index},
  {path: '/index',component:Index},
  {path:'/about',component:about},
  {path:'/shoppdata',component:shoppdata},
  {path:'/shopp',component:shopp},
  {path:'/productlist',component:productlist},
  {path:'/detail/:lid',component:detail,props:true},
]

const router = new VueRouter({
  routes
})

export default router
