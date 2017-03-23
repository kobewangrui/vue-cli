export default function (VueRouter) {
  const routes = [
    {
      path: '/',
      component: require('views/hello.vue'),
      children:[
        {
          path:'index',
          component:require('views/hello/index.vue')
        }
      ]
    }
  ]
  const router = new VueRouter({
    mode: 'history',
    routes
  })
  return router
}