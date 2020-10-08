import Vue from 'vue'
import App from './App.vue'
// import { icon } from 'vue-fontawesome'
import '../node_modules/halfmoon/css/halfmoon-variables.min.css'
const halfmoon = require("halfmoon");
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Register globally
// import Ninjas from './Ninjas.vue'

// Vue.component('ninjas', Ninjas);
// Vue.component('vf-icon', icon)

new Vue({
  el: '#app',
  render: h => h(App),
  mounted: function() {
    halfmoon.onDOMContentLoaded();
  }
})
