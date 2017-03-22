import Hello from '@/components/Hello'

export default function (VueRouter) {
  const routes = [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
  const router = new VueRouter({
    mode: 'history',
    routes
  })
  return router
}