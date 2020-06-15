import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

//1.route ： 就是路由
/**
 *     {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
 */


//2.routers

/**
 * routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
 */

//3.router 路由管理者 包括了 静态的 routers 


//必须定义为 routes 不能定义其他名称
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
    }
]


export default new Router({
    routes
})
