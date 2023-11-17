<template>
<div class="navbar sticky top-0 z-40  drop-shadow-xl rounded-xl bg-base-100">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <router-link to="/find-buildings">
                    <li><a>Find your next home</a></li>
                </router-link>
                <li>
                    <a>Parent</a>
                    <ul class="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </li>
                <router-link to="/notice-tenant">

                    <li><a>Notice</a></li>
                </router-link>
                <router-link to="/problem_&_support-tenant">

                    <li><a>Problem & Support</a></li>
                </router-link>
            </ul>
        </div>
        <router-link to="/home-tenant"><a class="btn btn-ghost normal-case text-xl">BashaBari</a></router-link>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <router-link to="/find-buildings">
                <li><a>Find your next home</a></li>
            </router-link>

            <li tabindex="0">
                <details>
                    <summary >Parent</summary>
                    <ul class="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li>

            <router-link v-if="status == false" to="/notice-tenant">
                <button disabled><li class=" disabled"><a>Notice</a></li></button>
            </router-link>
            <router-link v-if="status == true" to="/notice-tenant">
                <button><li><a>Notice</a></li></button>
            </router-link>

            <router-link v-if="status == false" to="/problem_&_support-tenant">

                <button disabled><li class="disabled"><a>Problem & Support</a></li></button>
            </router-link>
            <router-link v-if="status == true" to="/problem_&_support-tenant">

                <button><li><a>Problem & Support</a></li></button>
            </router-link>
        </ul>
    </div>

    <!-- Profile button -->
    <div class="navbar-end">

        <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img :src="image" />
                </div>
            </label>
            <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                    <a class="justify-between">
                        Profile

                    </a>
                </li>

                <li><a v-on:click="logout">Logout</a></li>
            </ul>
        </div>
    </div>

    <!-- Profile button -->
</div>
</template>

<script>
import axios from 'axios';
import {
    ref
} from 'vue';

export default {
    name: 'NavComponentTenant',
    
    data() {
        return {
            image: '',
            tenant_Id: '',
            status: '',
            
            

        }
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({
                name: 'LoginPageTenant'
            })
        },
        async getData_Tenant() {
            let users = localStorage.getItem('tenant-info');
            const id = JSON.parse(users).id
            const tenant_Id = JSON.parse(users).tenant_Id;
            this.tenant_Id = tenant_Id;
            let getData = await axios.get("https://shomadhan.top/admin/api/Api/Tenant/Table/" + id);
            this.tenant = getData.data.data //fetch all the data in the getData response
            this.image = getData.data.imageUrl

        },
        async get_rent_by_tenantID() {
            // let get_assign_by_tenantID = await axios.get("https://shomadhan.top/admin/api/Api/Rent/Tenant/" + this.tenant_Id)
            

            // localStorage.setItem("status", JSON.stringify(get_assign_by_tenantID.data.status));
            let status = localStorage.getItem("status");
            this.status = JSON.parse(status);
            console.warn(this.status)
            
            
            

        }
    },
    mounted() {
        this.getData_Tenant();

        this.get_rent_by_tenantID();

       // console.warn(this.isVisible)

    },
    

}
</script>
