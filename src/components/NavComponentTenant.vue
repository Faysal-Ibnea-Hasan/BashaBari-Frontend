<template>
<div class="navbar sticky top-0 z-40  drop-shadow-xl rounded-xl bg-base-100">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li>
                    <a>Parent</a>
                    <ul class="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
        </div>
        <router-link to="/"><a class="btn btn-ghost normal-case text-xl">BashaBari</a></router-link>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li tabindex="0">
                <details>
                    <summary>Parent</summary>
                    <ul class="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li>
            <li><a>Item 3</a></li>
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

export default {
    name: 'NavComponentTenant',
    data() {
        return {
            image: ''
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
            let getData = await axios.get("http://127.0.0.1:8000/api/Api/Tenant/Table/" + id);
            this.tenant = getData.data.data //fetch all the data in the getData response
            this.image = getData.data.imageUrl

        }
    },
    mounted() {
        this.getData_Tenant();
    }
}
</script>
