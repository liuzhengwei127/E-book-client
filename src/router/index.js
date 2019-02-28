import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login/Login.vue'
import Books from '../pages/Books/Books.vue'
import Search from '../pages/Search/Search.vue'
import Orders from '../pages/Orders/Orders.vue'
import Statistics from '../pages/Statistics/Statistics.vue'


Vue.use(VueRouter)

export default new VueRouter({
    // 所有路由
    routes: [
        {
            path: '/login',
            component: Login,
            meta: {
                showNavDetail: false,
            }
        },
        {
            path: '/books',
            component: Books,
            meta: {
                showNavDetail: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showNavDetail: true
            }
        },
        {
            path: '/orders',
            component: Orders,
            meta: {
                showNavDetail: true
            }
        },
        {
            path: '/statistics',
            component: Statistics,
            meta: {
                showNavDetail: true
            }
        },
        {
            path: '/',
            redirect: '/login'
        },
    ]
})
