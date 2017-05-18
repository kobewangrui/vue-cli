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
            },
            {
              path:'/order/success',
              component:require('views/content/order/success.vue')
            }
          ]
        },        
        {
          path:'/help',
          component:require('views/content/help.vue'),
          children:[
            { 
              path: 'usuallyQuestion', 
              component: require('views/content/help/usuallyQuestion.vue') 
            },
            { 
              path: 'greenHand', 
              component: require('views/content/help/greenHand.vue') 
            },
            { 
              path: 'accountMan', 
              component: require('views/content/help/accountManagement.vue') 
            },
            { 
              path: 'disclaimer', 
              component: require('views/content/help/disclaimer.vue') 
            },
            { 
              path: 'gaiaTrip', 
              component: require('views/content/help/gaiaTrip.vue') 
            },
            { 
              path: 'helpCenterSP', 
              component: require('views/content/help/helpCenterZ/helpCenterSearchProduct.vue') 
            },
            { 
              path: 'helpCenterOM', 
              component: require('views/content/help/helpCenterZ/helpCenterOrderManage.vue') 
            },
            { 
              path: 'helpCenterTM', 
              component: require('views/content/help/helpCenterZ/helpCenterTravellerMessage.vue') 
            },
            { 
              path: 'helpCenterFD', 
              component: require('views/content/help/helpCenterZ/helpCenterFinancialData.vue') 
            },
            { 
              path: 'helpCenterRG', 
              component: require('views/content/help/helpCenterZ/helpCenterReceiveGuest.vue') 
            },
            { 
              path: 'helpCenterQC', 
              component: require('views/content/help/helpCenterG/helpCenterQualificationCertification.vue') 
            },
            { 
              path: 'helpCenterPM', 
              component: require('views/content/help/helpCenterG/helpCenterProductManagement.vue') 
            },
            { 
              path: 'helpCenterGOM', 
              component: require('views/content/help/helpCenterG/helpCenterGOrderManage.vue') 
            },
            { 
              path: 'helpCenterGFD', 
              component: require('views/content/help/helpCenterG/helpCenterGFinancialData.vue') 
            }
          ]
        },
        { 
          path: '/about', 
          component: require('views/content/about.vue'),
          children:[
            { 
              path: '/', 
              component: require('views/content/about/aboutUs.vue') 
            },
            { 
              path: 'add', 
              component: require('views/content/about/add.vue') 
            },
            { 
              path: 'contact', 
              component: require('views/content/about/contact.vue') 
            },
            { 
              path: 'cooperation', 
              component: require('views/content/about/cooperation.vue') 
            },
            { 
              path: 'popularize', 
              component: require('views/content/about/popularize.vue') 
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
    // 登录拦截
    // router.beforeEach((to, from, next) => {
    //   console.warn('beforeEach')
    //   console.warn(to.fullPath)
    //   if(true && to.path != '/login'){
    //     console.log('尚未登录')
    //     next({
    //       path: '/login'
    //     })
    //   }else{
    //     console.warn('登录成功')
    //     next()
    //   }
    // })

  return router
}