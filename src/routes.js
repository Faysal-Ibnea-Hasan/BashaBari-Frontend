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
import NoticeComponentTenant from './components/NoticeComponentTenant.vue'
import ProblemAndSupportOwner from './components/ProblemAndSupportOwner.vue'
import ProblemDashboardOwner from './components/ProblemDashboardOwner.vue'
import ProblemAndSupportTenant from './components/ProblemAndSupportTenant.vue'
import ProblemDashboardTenant from './components/ProblemDashboardTenant.vue'
import ProfileComponentOwner from './components/ProfileComponentOwner.vue'
import ProfileComponentTenant from './components/ProfileComponentTenant.vue'

const routes =[
    {
        name:'HelloWorld',
        base:'https://shomadhan.top/',
        path:'/',
        component:HelloWorld,
    },
    {
        name:'LoginPageOwner',
        base:'https://shomadhan.top/',
        path:'/login-owner',
        component:LoginPageOwner,
        
    },
    {
        name:'RegisterPageTenant',
        path:'/register-tenant',
        base:'https://shomadhan.top/',
        component:RegisterPageTenant,
    },
    {
        name:'LoginPageTenant',
        path:'/login-tenant',
        base:'https://shomadhan.top/',
        component:LoginPageTenant,
    },
    {
        name:'HomePageTenant',
        path:'/home-tenant',
        base:'https://shomadhan.top/',
        component:HomePageTenant,
    },
    {
        name:'HomePageOwner',
        path:'/home-owner',
        base:'https://shomadhan.top/',
        component:HomePageOwner,
        
    },
    {
        name:'TenantList',
        path:'/list-tenant',
        base:'https://shomadhan.top/',
        component:TenantList,
    },
    {
        name:'BuildingComponentOwner',
        path:'/buildings-owner',
        base:'https://shomadhan.top/',
        component:BuildingComponentOwner,
    },
    {
        name:'AssignTenantComponent',
        path:'/assign-tenant',
        base:'https://shomadhan.top/',
        component:AssignTenantComponent,
    },
    {
        name:'FlatComponentOwner',
        path:'/flat-owner',
        base:'https://shomadhan.top/',
        component:FlatComponentOwner,
    },
    {
        name:'FlatDetailsComponentOwner',
        base:'https://shomadhan.top/',
        path:'/flat-details-owner/:building_Id', //Catch the building Id when route clicked
        component:FlatDetailsComponentOwner,
    },
    {
        name:'FindBuildingComponentTenant',
        path:'/find-buildings', 
        base:'https://shomadhan.top/',
        component:FindBuildingComponentTenant,
    },
    {
        name:'FindFlatComponentTenant',
        path:'/find-flats/:building_Id',
        base:'https://shomadhan.top/', 
        component:FindFlatComponentTenant,
    },
    {
        name:'ResidentialDetailsComponentTenant',
        path:'/residential-details', 
        base:'https://shomadhan.top/',
        component:ResidentialDetailsComponentTenant,
    },
    {
        name:'NoticeComponentOwner',
        path:'/notice-owner', 
        base:'https://shomadhan.top/',
        component:NoticeComponentOwner,
    },
    {
        name:'NoticeComponentTenant',
        path:'/notice-tenant',
        base:'https://shomadhan.top/',  
        component:NoticeComponentTenant,
    },
    {
        name:'ProblemAndSupportOwner',
        base:'https://shomadhan.top/',
        path:'/problem_&_support-owner',   
        component:ProblemAndSupportOwner,
    },
    {
        name:'ProblemDashboardOwner',
        path:'/problem-dashboard-owner',
        base:'https://shomadhan.top/',   
        component:ProblemDashboardOwner,
    },
    {
        name:'ProblemAndSupportTenant',
        path:'/problem_&_support-tenant', 
        base:'https://shomadhan.top/',  
        component:ProblemAndSupportTenant,
    },
    {
        name:'ProblemDashboardTenant',
        path:'/problem-dashboard-tenant',
        base:'https://shomadhan.top/',   
        component:ProblemDashboardTenant,
    },
    {
        name:'ProfileComponentOwner',
        path:'/owner-profile',
        base:'https://shomadhan.top/',   
        component:ProfileComponentOwner,
    },
    {
        name:'ProfileComponentTenant',
        path:'/tenant-profile',
        base:'https://shomadhan.top/',   
        component:ProfileComponentTenant,
    },
]
const router = createRouter({
    history: createWebHistory(),
    mode: history,
    routes
})
export default router