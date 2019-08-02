import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'
const Login = () => import('@/components/Login')
// import About from '@/components/About'
const About = () => import('@/components/About')
// import Index from '@/components/Index'
const Index = () => import('@/components/Index')
// import UserCenter from '@/views/UserCenter'
const UserCenter = () => import('@/views/UserCenter')
// import WriteDiary from '@/views/WriteDiary'
const WriteDiary = () => import('@/views/WriteDiary')
// import AllDiary from '@/views/AllDiary'
 const AllDiary = () => import('@/views/AllDiary')
// import DiaryTags from '@/views/DiaryTags'
const DiaryTags = () => import('@/views/DiaryTags')
// import Avatar from '@/views/Avatar'
const Avatar = () => import('@/views/Avatar')
// import PersonalData from '@/views/PersonalData'
const PersonalData = () => import('@/views/PersonalData')
// import ChangePwd from '@/views/ChangePwd'
const ChangePwd = () => import('@/views/ChangePwd')
// import Advice from '@/views/Advice'
const Advice = () => import('@/views/Advice')
// import DiaryDetails from '@/views/DiaryDetails'
const DiaryDetails = () => import('@/views/DiaryDetails')
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