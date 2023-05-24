import { createWebHistory, createRouter } from "vue-router";
import Body from '../components/body';

/* Dashboards */
import Default from '../pages/dashboard/default';
import EmployeeDashboard from '../pages/dashboard/employee';
// employee
import addEmployee from '../pages/employee/addemployee/addEmployee.vue'
import createEmployee from '../pages/employee/createemployee/createemployee.vue'
import indexList from '../pages/employee/employeelist/indexList.vue'

import attendance from '../pages/attendance/attendance.vue'

import login from '../auth/login';
import Register from '../auth/register';
import { appName } from '../constants/config';
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
              title: appName,
            }
          },   {
            path: 'employee',
            name: 'employee',
            component: EmployeeDashboard,
            meta: {
              title: appName,
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
          },
          {
            path: 'create-employee',
            name: 'createEmployee',
            component: createEmployee
          }
        ]
      },
      {
        path: '/attendance',
        component: Body,
        children: [
          {
            path: 'viewattendance',
            name: 'viewattendance',
            component: attendance
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
            title: ' login | '+appName,
          }
        },
        {
          path: 'register',
          name: 'register 1',
          component: Register,
          meta: {
            title: ' Register | '+appName,
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