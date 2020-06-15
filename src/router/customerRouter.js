import Vue from "vue"

import VueRouter from 'vue-router'


import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Gir from '@/components/Gir'
import Boy from '@/components/Boy'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        redirect: '/login2' //使用redirect 重定向到 某个路径，这样实现 多个路径指向同一个组件
    },
    {
        path: '/hello2',
        name: 'HelloWorld',
        component: HelloWorld
    },

    {
        path: '/login2',
        name: 'Login',
        component: Login
    },
    {
        path: '/user/:userName',
        name: 'Home',
        component: Home,
        // children:[
        //     {
        //         path: 'gir',
        //         name: 'Gir',
        //         component: Gir
        //     },
        //     {
        //         path: 'boy',
        //         name: 'Boy',
        //         component: Boy
        //     }
        // ]
    }

]

var router = new VueRouter({
    routes
})


export default router;