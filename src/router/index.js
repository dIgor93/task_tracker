import Vue from 'vue'
import VueRouter from 'vue-router'
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
import Project from "../views/Project";
import Home from "../views/Home";

Vue.use(Donut);
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/main/:project',
        name: 'main',
        component: Project,
        props: true,
        children: [
            {
                name: 'resources',
                path: 'analysis',
                component: () => import('../components/ResourcesAnalysis')
            },
            {
                path: 'architecture',
                component: () => import('../components/ResourcesArchitecture')
            },
            {
                path: 'development',
                component: () => import('../components/ResourcesDevelopment')
            },
            {
                path: 'testing',
                component: () => import('../components/ResourcesTesting')
            },
            {
                path: 'support',
                component: () => import('../components/ResourcesSupport')
            },
            {
                path: 'docs',
                component: () => import('../components/ResourcesDocs')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
