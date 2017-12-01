import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/index'
import cate from '@/components/cate'
import banner from '@/components/banner'
import wordnew from '@/components/wordnew'
import picnew from '@/components/picnew'
import message from '@/components/message'
import password from '@/components/password'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'index',
      component: home
    },
    {
      path: '/cate',
      name: 'cate',
      component: cate 
    },
    {
      path: '/banner',
      name: 'banner',
      component:banner 
    },
    {
      path: '/wordnew',
      name: 'wordnew',
      component: wordnew 
    },
    {
      path: '/picnew',
      name: 'picnew',
      component: picnew 
    },
    {
      path: '/message',
      name: 'message',
      component:message 
    },
    {
      path: '/password',
      name: 'password',
      component: password
    }
  ]
})
