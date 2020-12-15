import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Web3 from 'web3'
import Config from './config'

Vue.mixin({
  async created() {  	
    // console.log(await ethereum.send('net_version'))
    
    if (window.ethereum) {
      this.$web3 = new Web3(window.ethereum)
    }    

    this.$config = Config    
  }
  
})

Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
