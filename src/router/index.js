export default function (VueRouter) {
  const routes = [
    {
      path: '/',
      component: require('views/content/mall.vue'),
      children:[
        {
          path:'/',
          component:require('views/content/index/index.vue')
        },
      ]
    }
  ]
  const router = new VueRouter({
    mode: 'history',
    routes
  })
  return router
}