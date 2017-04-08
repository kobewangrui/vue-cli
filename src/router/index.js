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
          component:require('views/content/product.vue'),
          children:[
            {
              path:'/',
              component:require('views/content/product/route/list.vue')
            },
            {
              path:'/product/route/detail',
              component:require('views/content/product/route/detail.vue')
            }
          ]
        },
        {
          path:'/order',
          component:require('views/content/order.vue'),
          children:[
            {
              path:'/',
              component:require('views/content/order/submitOrder.vue')
            },
            {
              path:'/order/pay',
              component:require('views/content/order/choosePay.vue')
            }
          ]
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