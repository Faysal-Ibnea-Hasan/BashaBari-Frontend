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
                <router-link to="/create-search-agent">
                    <li><a>Create Search Agent</a></li>
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
            <router-link to="/create-search-agent">
                <li><a>Create Search Agent</a></li>
            </router-link>

            <li tabindex="0">
                <details>
                    <summary>Parent</summary>
                    <ul class="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li>

            <router-link v-if="tenant.assign_status == 0" to="/notice-tenant">
                <button disabled>
                    <li class=" disabled"><a>Notice</a></li>
                </button>
            </router-link>
            <router-link v-if="tenant.assign_status == 1" to="/notice-tenant">
                <button>
                    <li><a>Notice</a></li>
                </button>
            </router-link>

            <router-link v-if="tenant.assign_status == 0" to="/problem_&_support-tenant">

                <button disabled>
                    <li class="disabled"><a>Problem & Support</a></li>
                </button>
            </router-link>
            <router-link v-if="tenant.assign_status == 1" to="/problem_&_support-tenant">

                <button>
                    <li><a>Problem & Support</a></li>
                </button>
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
                    <router-link to="/tenant-profile" class="justify-between">
                        Profile

                    </router-link>
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
            image: JSON.parse(localStorage.getItem('tenant-info')).image,
            tenant: {
                assign_status: JSON.parse(localStorage.getItem('tenant-info')).assign_status,
            },

            name: ref('')

        }
    },

    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({
                name: 'LoginPageTenant'
            })
        },
        
    },
    

}
</script>
