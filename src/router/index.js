import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login/Login.vue'
import Books from '../pages/Books/Books.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'


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
            path: '/order',
            component: Order,
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

