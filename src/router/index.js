import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import UserCenter from '@/views/UserCenter'
import About from '@/components/About'
import Index from '@/components/Index'
import WriteDiary from '@/views/WriteDiary'
import AllDiary from '@/views/AllDiary'
import DiaryTags from '@/views/DiaryTags'
import Avatar from '@/views/Avatar'
import PersonalData from '@/views/PersonalData'
import ChangePwd from '@/views/ChangePwd'
import Advice from '@/views/Advice'
import DiaryDetails from '@/views/DiaryDetails'
import UpdateDiary from '@/views/UpdateDiary'
// const Login = () => import('@/components/Login')
// const About = () => import('@/components/About')
// const Index = () => import('@/components/Index')
// const UserCenter = () => import('@/views/UserCenter')
// const WriteDiary = () => import('@/views/WriteDiary')
// const AllDiary = () => import('@/views/AllDiary')
// const DiaryTags = () => import('@/views/DiaryTags')
// const Avatar = () => import('@/views/Avatar')
// const PersonalData = () => import('@/views/PersonalData')
// const ChangePwd = () => import('@/views/ChangePwd')
// const Advice = () => import('@/views/Advice')
// const DiaryDetails = () => import('@/views/DiaryDetails')
Vue.use(Router)
var router = new Router({
  // mode: 'history',
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
        },
        {
          path:'/diaryTags',
          component:DiaryTags
        },
        {
          path:'/avatar',
          component:Avatar
        },
        {
          path:'/personalData',
          component:PersonalData
        },
        {
          path:'/changePwd',
          component:ChangePwd
        },
        {
          path:'/advice',
          component:Advice
        },
        {
          path:'/diaryDetails/:id',
          component:DiaryDetails
        },
        {
          path:'/updateDiary/:id',
          component:UpdateDiary
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