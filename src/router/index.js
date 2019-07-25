import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import About from '@/components/About'
import Index from '@/components/Index'
import UserCenter from '@/views/UserCenter'
import WriteDiary from '@/views/WriteDiary'
import AllDiary from '@/views/AllDiary'
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
          path: '/userCenter',
          component: UserCenter
        },
        {
          path: '/writeDiary',
          component: WriteDiary
        },
        {
          path:'/allDiary',
          component:AllDiary
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
        path: '/userCenter'
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