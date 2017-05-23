// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })



const  vuex_store = new Vuex.Store({
    state:{
        user_name:"就这么抄袭了"
    },
    mutations:{
        showUserName(state){
            alert(state.user_name);
        }
    }
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
    // el:".container",
    store:vuex_store, //注入到vue
    // router:routerConfig,
});