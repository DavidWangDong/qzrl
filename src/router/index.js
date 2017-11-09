import Vue from 'vue'
import Router from 'vue-router'
import newList from '@/components/newList.vue'
import datepicer from '@/components/datepicer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'newList',
      component: newList
    },
    {
      path: '/datepicer/:id',
      name: 'datepicer',
      component: datepicer
    }
  ]
})
