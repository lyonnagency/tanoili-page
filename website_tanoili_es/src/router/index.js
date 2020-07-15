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
import Test from '@/components/pages/test.html'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path:'/test',
      name:'test',
      component:  {template: Test}
    },
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
    },
  ],
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return {x: 0, y: 0}
    }
  }
})
