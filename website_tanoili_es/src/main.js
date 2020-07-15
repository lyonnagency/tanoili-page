// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Meta from 'vue-meta'
import 'aos/dist/aos.css';
import * as VueGoogleMaps from "vue2-google-maps";
import AOS from 'aos';
import VueGtag from "vue-gtag";

// Vue.use(VueGtag, {
//   config: {
//     id: "AW-642731809",
//     params: {
//       send_page_view: false
//     }
//   }
// });

Vue.use(VueGtag, {
  config: { id: "AW-642731809" },
  onReady () {
    // ready
    // alert()
  }
}, router);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBRcwQ-Wjdp7C0rpXG1FydBenpycDFpu0w",
    libraries: "places" // necessary for places input
  }
});
Vue.use(Meta)

import VueScrollReveal from 'vue-scroll-reveal'
Vue.use(VueScrollReveal, {
  duration: 1000,
  viewFactor: 0.3,
  scale: 1
})

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate, { locale: 'es' })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,

  components: { App },
  template: '<App/>',
  created () {
    AOS.init()
  },
})
