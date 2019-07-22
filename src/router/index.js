import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import About from '@/components/About'
import Index from '@/components/Index'
import UserCenter from '@/components/home/UserCenter'
import WriteDiary from '@/components/home/WriteDiary'
Vue.use(Router)


var router = new Router({
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
      component: Index,
      children: [{
          path: '/home/userCenter',
          component: UserCenter
        },
        {
          path: '/home/writeDiary',
          component: WriteDiary
        }
      ]
    }
  ]
});
//全局守卫
router.beforeEach((to, from, nex) => {
  if (to.path == '/') {
    nex();
  } else if (to.path == "/index") {
    if (localStorage.getItem("token")) {
      nex({
        path: '/home/userCenter'
      })
    } else {
      nex();
    }
  } else if (to.path == "/about") {
    nex();
  } else {
    if (localStorage.getItem("token")) {
      nex();
    } else {
      nex({
        path: '/'
      })
    }
  }

})

export default router;