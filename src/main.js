import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// kgn styling
import './assets/scss/main.scss'

// vue meta for title tags
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import VueSilentbox from 'vue-silentbox'
Vue.use(VueSilentbox)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// import VueMatomo from 'vue-matomo'
//
// Vue.use(VueMatomo, {
//   host: 'https://demo-page.de',
//   siteId: 1,
//   trackerFileName: 'matomo',
//   router: router,
//   enableLinkTracking: true,
//   requireConsent: true,
//   requireCookieConsent: true,
//   trackInitialView: true,
//   disableCookies: false,
//   enableHeartBeatTimer: false,
//   heartBeatTimerInterval: 15,
//   debug: false,
//   userId: undefined,
//   cookieDomain: undefined,
//   domains: undefined,
//   preInitActions: []
// });


Vue.config.productionTip = false

import i18n from "@/i18n/i18n"

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
