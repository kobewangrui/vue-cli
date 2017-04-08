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
        {
          path:'/product',
          component:require('views/content/product/route/list.vue')
        },
        {
          path:'/product/route/detail',
          component:require('views/content/product/route/detail.vue')
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