import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';

Vue.use(Donut);
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:project',
        name: 'Project',
        component: () => import('../views/Project.vue'),
        children:        [
            {
                path: 'analysis',
                component: () => import('../components/Resources.vue')
            },
            {
                path: 'architecture',
                component: () => import('../components/Resources.vue')
            },
            {
                path: 'development',
                component: () => import('../components/Resources.vue')
            },
            {
                path: 'testing',
                component: () => import('../components/Resources.vue')
            },
            {
                path: 'support',
                component: () => import('../components/Resources.vue')
            },
            {
                path: 'docs',
                component: () => import('../components/Resources.vue')
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router
