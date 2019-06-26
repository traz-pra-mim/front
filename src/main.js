import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import moment from 'moment'
import VueRouter from 'vue-router'

import PaginaInicial from './components/Pages/PaginaInicial'
import Ofertas from './components/Pages/Ofertas'
import OfertasCadastrar from './components/Pages/OfertasCadastrar'
import OfertasDetalhes from './components/Pages/OfertasDetalhes'
import Login from './components/Pages/Login'


Vue.prototype.moment = moment
Vue.config.productionTip = false

const base = axios.create({
  baseURL: 'http://0.0.0.0:8080/api-v1/api/'
})

Vue.prototype.$http = base

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: PaginaInicial },
    { path: '/offer', component: Ofertas } ,   
    { path: '/offerin', component: OfertasCadastrar },
    { path: '/offerdetails/:id', component: OfertasDetalhes  },
    { path: '/login', component: Login },
    
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
