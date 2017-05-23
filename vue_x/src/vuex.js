import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//创建Store实例
const store = new Vuex.Store({
  // 存储状态值
  state: {
    ...
  },
  // 状态值的改变方法,操作状态值
  // 提交mutations是更改Vuex状态的唯一方法
  mutations: {
    ...
  },
  // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
  getters: {
    ...
  },
  actions: { 
    ...
  }
})
// 要改变状态值只能通过提交mutations来完成

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  // 将store实例注入到根组件下的所有子组件中
  store
  // 子组件通过this.$store来方位store
})