// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'font-awesome/scss/font-awesome.scss'
import './assets/style/reset.css'
import './assets/style/style.scss'

import tabbar from './packages/tabBar'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(tabbar)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  components: { App },
  render: h => h(App),
}).$mount("#app");
