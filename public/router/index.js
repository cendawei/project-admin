import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index-page',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: resolve => require(['@/components/index/index.vue'], resolve)
        }
    ]
})
