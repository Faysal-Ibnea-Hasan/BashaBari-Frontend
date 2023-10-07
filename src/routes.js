import {  createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LoginPageOwner from './components/LoginPageOwner.vue'
import RegisterPageTenant from './components/RegisterPageTenant.vue'
import LoginPageTenant from './components/LoginPageTenant.vue'

const routes =[
    {
        name:'HelloWorld',
        path:'/',
        component:HelloWorld,
    },
    {
        name:'LoginPageOwner',
        path:'/login-owner',
        component:LoginPageOwner,
    },
    {
        name:'RegisterPageTenant',
        path:'/register-tenant',
        component:RegisterPageTenant,
    },
    {
        name:'LoginPageTenant',
        path:'/login-tenant',
        component:LoginPageTenant,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router