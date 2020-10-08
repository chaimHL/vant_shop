import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/vant.js'
import './assets/iconfont/iconfont.css'
import 'amfe-flexible'
import './assets/less/global.less'

Vue.config.productionTip = false

// 价格小数点过滤器
Vue.filter('toFixed', (val, num = 2) => {
  return parseFloat(val).toFixed(num)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
