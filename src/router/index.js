import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import About from '@/components/About'
import Index from '@/components/Index'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Login
        },
        {
            path: '/about',
            component: About
        }, {
            path: '/index',
            component: Index
        }

    ]
})