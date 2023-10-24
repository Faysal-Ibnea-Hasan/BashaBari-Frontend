import {  createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LoginPageOwner from './components/LoginPageOwner.vue'
import RegisterPageTenant from './components/RegisterPageTenant.vue'
import LoginPageTenant from './components/LoginPageTenant.vue'
import HomePageOwner from './components/HomePageOwner.vue'
import HomePageTenant from './components/HomePageTenant.vue'
import TenantList from './components/TenantList.vue'
import BuildingComponentOwner from './components/BuildingComponentOwner.vue'
import AssignTenantComponent from './components/AssignTenantComponent.vue'
import FlatComponentOwner from './components/FlatComponentOwner.vue'
import FlatDetailsComponentOwner from './components/FlatDetailsComponentOwner.vue'
import FindBuildingComponentTenant from './components/FindBuildingComponentTenant.vue'
import FindFlatComponentTenant from './components/FindFlatComponentTenant.vue'
import ResidentialDetailsComponentTenant from './components/ResidentialDetailsComponentTenant.vue'
import NoticeComponentOwner from './components/NoticeComponentOwner.vue'

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
    },
    {
        name:'BuildingComponentOwner',
        path:'/buildings-owner',
        component:BuildingComponentOwner,
    },
    {
        name:'AssignTenantComponent',
        path:'/assign-tenant',
        component:AssignTenantComponent,
    },
    {
        name:'FlatComponentOwner',
        path:'/flat-owner',
        component:FlatComponentOwner,
    },
    {
        name:'FlatDetailsComponentOwner',
        path:'/flat-details-owner/:building_Id', //Catch the building Id when route clicked
        component:FlatDetailsComponentOwner,
    },
    {
        name:'FindBuildingComponentTenant',
        path:'/find-buildings', 
        component:FindBuildingComponentTenant,
    },
    {
        name:'FindFlatComponentTenant',
        path:'/find-flats/:building_Id', 
        component:FindFlatComponentTenant,
    },
    {
        name:'ResidentialDetailsComponentTenant',
        path:'/residential-details', 
        component:ResidentialDetailsComponentTenant,
    },
    {
        name:'NoticeComponentOwner',
        path:'/notice-owner', 
        component:NoticeComponentOwner,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router