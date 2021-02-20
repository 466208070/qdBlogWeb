import Vue from 'vue'
import vueRouter from 'vue-router'
import routes from './router.config'

Vue.use(vueRouter)
var router =  new vueRouter({
    mode: 'history',
    routes: routes
})
export default router