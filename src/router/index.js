export default function (VueRouter) {
  const routes = [
    {
      path: '/',
      component: require('views/content/index.vue'),
      children:[
        {
          path:'index',
          component:require('views/content/hello/index.vue')
        },        
        {
          path:'hello2',
          component:require('views/content/hello/hello2.vue')
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