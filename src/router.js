import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: 'dashboard/basic-dashboard',
            component: () => import('@/layouts/Layout'),
            children: [
                // Components
                {
                    name: 'Alerts',
                    path: 'pages/alerts',
                    component: () => import('@/views/pages/Alerts'),
                },

                {
                    name: 'Profile',
                    path: 'pages/profile',
                    component: () => import('@/views/pages/Profile'),
                },

                {
                    name: 'Icons',
                    path: 'pages/icons',
                    component: () => import('@/views/pages/Icons'),
                },

                {
                    name: 'TableSimple',
                    path: 'pages/tables-simple',
                    component: () => import('@/views/pages/TableSimple'),
                },

                {
                    name: 'Dashboard',
                    path: 'dashboard/basic-dashboard',
                    component: () => import('@/views/dashboard/BasicDashboard'),
                },
                
                {
                    path: '/vehicle-plate',
                    name: 'vehicle-plate',
                    component: () => import('@/views/pages/Workshop.vue'),
                },

                {
                    path: '/file-upload',
                    name: 'file-upload',
                    component: () => import('@/views/pages/FileUpload/Index.vue'),
                },
                {
                    path: '/live-map',
                    name: 'live-map',
                    component: () => import('@/views/pages/Livemap/Index.vue'),
                }

            ]
        },
    ], 
})