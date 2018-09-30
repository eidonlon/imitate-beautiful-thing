import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'font-awesome/scss/font-awesome.scss'
import './assets/style/reset.css'
import './assets/style/style.scss'

import tabbar from './packages/tabBar'
import swiper from './packages/swiper'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(tabbar)
Vue.use(swiper)

new Vue({
  router,
  store,
  components: { App },
  render: h => h(App),
}).$mount("#app");
