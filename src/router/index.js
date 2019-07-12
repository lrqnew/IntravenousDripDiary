import Vue from 'vue'
import Router from 'vue-router'

 import Login from '@/components/Login'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Login
        }, 
       
        {
            path: '/about',
            component: About
        }

    ]
})