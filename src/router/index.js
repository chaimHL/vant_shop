import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Cart from '../views/Cart.vue'
import Personal from '../views/Personal.vue'
import Goodsdetail from '../views/Goodsdetail.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  // meta是路由元信息，keepAlive为自定义属性，目的是让此属性为true的组件保持缓存，切换页面不会重新加载
  { path: '/home', component: Home, meta: { keepAlive: true } },
  { path: '/list', component: List },
  { path: '/cart', component: Cart },
  { path: '/personal', component: Personal },
  { name: 'goodsDetail', path: '/goodsDetail/:goodsId', component: Goodsdetail }
]

const router = new VueRouter({
  routes
})

export default router
