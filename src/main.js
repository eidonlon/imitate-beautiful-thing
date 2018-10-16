import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import scroller from 'vue-scroller'
import 'font-awesome/scss/font-awesome.scss'
import './assets/style/reset.css'
import './assets/style/style.scss'
import tabbar from './components/tabBar'
import swiper from './components/swiper'
import toast from './components/toast'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.prototype.$axios = axios;

Vue.use(scroller)
Vue.use(tabbar)
Vue.use(swiper)
Vue.use(toast)

new Vue({
  router,
  store,
  components: { App },
  render: h => h(App),
}).$mount("#app");
