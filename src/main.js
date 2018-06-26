// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import VueLazyload from 'vue-lazyload'
import moment from 'moment/moment'

import App from './App'
import store from './store'
import {router} from './router/index';


import Bridge from '../config/bridge.js'
Vue.prototype.$bridge = Bridge

// import VueVideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'

import $ from 'jquery'
Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
Vue.use(VueLazyload, {
	preLoad: 1.4,
	error: '../src/assets/picture.png',
	loading: '../src/assets/picture.png',
	attempt: 1
  })
// Vue.use(VueMaterial)
// Vue.use(VueVideoPlayer)
/* eslint-disable no-new */

Vue.filter('moment', function (value, formatString) {
    formatString = formatString || 'YYYY-MM-DD';
    return moment(value).format(formatString); // value可以是普通日期 20170723
    // return moment.unix(value).format(formatString); // 这是时间戳转时间
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
