import {  createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LoginPageOwner from './components/LoginPageOwner.vue'
import RegisterPageTenant from './components/RegisterPageTenant.vue'
import LoginPageTenant from './components/LoginPageTenant.vue'
import HomePageOwner from './components/HomePageOwner.vue'
import HomePageTenant from './components/HomePageTenant.vue'
import TenantList from './components/TenantList.vue'
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
    },
    {
        name:'HomePageTenant',
        path:'/home-tenant',
        component:HomePageTenant,
    },
    {
        name:'HomePageOwner',
        path:'/home-owner',
        component:HomePageOwner,
    },
    {
        name:'TenantList',
        path:'/list-tenant',
        component:TenantList,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router