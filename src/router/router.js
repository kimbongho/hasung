import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import HomeLayOut from '../layouts/HomeLayout.vue'
import SubLayout from '../layouts/SubLayout.vue'
import AboutView from '../views/About.vue'
import ServiceView from '../views/Service.vue'
import ContractView from '../views/Contract.vue'
import EmergencyCommentView from '../views/EmergencyComment.vue'
import HospitalGuideView from '../views/HospitalGuide.vue'
import PayTableView from '../views/PayTable.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeLayOut,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        }
      ]
    },
    {
      path: '/',
      component: SubLayout,
      children: [
        {
          path: '/about',
          name: '회사소개',
          meta: {
            depth1: '홈',
            depth2: '회사소개',
          }, 
          component: AboutView
        },
        {
          path: '/service',
          name: '서비스소개',
          meta: {
            depth1: '홈',
            depth2: '서비스소개',
          }, 
         component: ServiceView
        },
        {
          path: '/emergency',
          name: '응급이송후기',
          meta: {
            depth1: '홈',
            depth2: '응급이송후기',
          }, 
          component: EmergencyCommentView
        },
        {
          path: '/paytable',
          name: '구급차요금표',
          meta: {
            depth1: '홈',
            depth2: '구급차요금표',
          },
          component: PayTableView
        },
        {
          path: '/hospital',
          name: '병원안내',
          meta: {
            depth1: '홈',
            depth2: '병원안내',
          },
          component: HospitalGuideView
        },
        {
          path: '/contract',
          name: '오시는길',
          meta: {
            depth1: '홈',
            depth2: '오시는길',
          },
          component: ContractView
        } 
      ]
    },
    
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active-link',
})

export default router
