import Vue from 'vue'
import VueRouter from 'vue-router'
import Student from '../views/Student'
import  Teacher from '../views/Teacher'
import Home from '../views/Home'
import Login from '../views/Login'
import Yishang from  '../views/Yishang'
import Detail from '../views/Detail'
import * as path from "path";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    hidden: true
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    hidden: true
  },
  {
    path: '/home',
    name: '导航一',
    component: Home,
    children:[
      {
        path: '/student',
        name: '管理学生',
        component: Student
      },
      {
        path: '/teacher',
        name: '管理教师',
        component: Teacher
      },
      {
        path: '/yishang',
        name: '大一上选课',
        component: Yishang
      }
    ]
  },
  {
    path: '/detail',
    name:'课程详情',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
