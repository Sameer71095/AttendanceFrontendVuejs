import { createWebHistory, createRouter } from "vue-router";
import Body from '../components/body';

/* Dashboards */
import Default from '../pages/dashboard/default';
// employee
import addEmployee from '../pages/employee/addemployee/addEmployee.vue'
import indexList from '../pages/employee/employeelist/indexList.vue'


import login from '../auth/login';
import Register from '../auth/register';
// // SAMPLE PAGE
import sample_page from "../pages/sample_page"
const routes = [
    {
        path: '/',
        component: Body,
    
        children: [
          {
            path: '',
            name: 'defaultRoot',
            component: Default,
          },
    
        ]
      },
    {
        path: '/dashboard',
        component: Body,
        meta: {
          requiresAuth: true
        },
        children: [
        {
          path: 'default',
          name: 'default',
          component: Default,
          meta: {
            title: 'Default Dashboard | Cuba - Premium Admin Template',
          }
        },
        ]
      },
      {
        path: '/employee',
        component: Body,
        children: [
          {
            path: 'employeelist',
            name: 'employeelist',
            component: indexList
          },
          {
            path: 'add-employee',
            name: 'addEmployee',
            component: addEmployee
          }
        ]
      },
      
      {
        path: '/auth',
        children: [
        {
          path: 'login',
          name: 'Login 1',
          component: login,
          meta: {
            title: ' login | Cuba - Premium Admin Template',
          }
        },
        {
          path: 'register',
          name: 'register 1',
          component: Register,
          meta: {
            title: ' Register | Cuba - Premium Admin Template',
          }
        }
        ]
      }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    // base: '/cuba-vue/',
  })
  router.beforeEach((to, from, next) => {
    const authRequiredPaths = ['/auth/login', '/auth/register'];
    const isAuthenticated = localStorage.getItem('authToken');
    if (authRequiredPaths.includes(to.path) || isAuthenticated) {
      return next();
    }
    next('/auth/login');
  });
  export default router