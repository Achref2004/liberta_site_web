import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  { 
    path: '/daily-activity', 
    name: 'DailyActivity', 
    component: () => import('../views/Daily_act.vue')
  },
    {path: '/anatomie', 
    name: 'anatomie', 
    component: () => import('../views/anatomie.vue')
  },
  { 
    path: '/history', 
    name: 'history', 
    component: () => import('../views/histoire.vue')
  },
  { 
    path: '/centre', 
    name: 'centre', 
    component: () => import('../views/centre.vue')
  },
   { 
    path: '/urgence', 
    name: 'urgence',
    component: () => import('../views/urgence.vue')
  },
   { 
    path: '/podcaste', 
    name: 'podcaste',
    component: () => import('../views/podcaste.vue')
  },
  {
  path: '/profile',
  name: 'profile',
  component: () => import('../views/ProfilePage.vue')
},

   { 
    path: '/loi', 
    name: 'loi', 
    component: () => import('../views/loi.vue')
  },
    
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router