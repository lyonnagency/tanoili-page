import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Comparative from '@/components/pages/Comparative'
import About from '@/components/pages/About'
import  Err_404 from '@/components/pages/404'
import  Process from '@/components/pages/Process'
import  Nosotros from '@/components/pages/Nosotros'
import  Contact from '@/components/pages/Contacto'
import  Products from '@/components/pages/Products'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/comparative',
      name: 'comparative',
      component: Comparative
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/process',
      name: 'process',
      component: Process
    },
    {
      path: '/about',
      name: 'about',
      component: Nosotros
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path:'/*',
      name:'404',
      component:Err_404
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
})
