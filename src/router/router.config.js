import home from '../components/home'

const routes = [
    {
        path: '/',
        name: 'main',
        redirect: '/home',
        meta: { title: '初始页' }
    },
    {
        path: '/home',
        meta: { title: '首页', icon: 'home'},
        component: home
    }
]

export default routes