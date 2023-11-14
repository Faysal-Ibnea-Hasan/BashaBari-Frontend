<template>
<!-- <div v-if="isVisible" class="bg-teal-50 border-t-2 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30" role="alert">
    <div class="flex">
        <div class="flex-shrink-0">

            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" /></svg>
            </span>

        </div>
        <div class="ms-3">
            <h3 class="text-gray-800 font-semibold dark:text-white">
                Successfully created an account.
            </h3>
            <p class="text-sm text-gray-700 dark:text-gray-400">
                Please wait before login.
            </p>
        </div>
    </div>
</div> -->
<div :style="{backgroundImage:'url('+backgroundImage+')'}" class="hero min-h-screen bg-base-200">

    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center ms-4 lg:text-left">
            <h1 class="text-5xl font-bold">Register now!</h1>
            <p class="py-6">Already Registered?</p>
            <router-link to="/login-tenant"><button class="btn btn-outline btn-primary">Login</button></router-link>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <form @submit.prevent="registerTenant">
                <div class="form-control w-3/4 ms-12">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" v-model="tenants.name" class="input input-sm input-bordered hover:translate-x-6  duration-500" required />
                </div>
                <div class="form-control w-3/4 ms-12">
                    <label class="label">
                        <span class="label-text">Mobile</span>
                    </label>
                    <input type="text" placeholder="Mobile Number" v-model="tenants.mobile" class="input input-sm input-bordered hover:translate-x-6  duration-500" required />
                </div>
                <div class="form-control w-3/4 ms-12">
                    <label class="label">
                        <span class="label-text">Address</span>
                    </label>
                    <input type="text" placeholder="Address" v-model="tenants.address" class="input input-sm input-bordered hover:translate-x-6  duration-500" required />
                </div>
                <div class="form-control w-3/4 ms-12">
                    <label class="label">
                        <span class="label-text">NID</span>
                    </label>
                    <input type="text" placeholder="NID" v-model="tenants.nid" class="input input-sm input-bordered hover:translate-x-6  duration-500" required />
                </div>

                <div class="form-control w-3/4 ms-12">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" v-model="tenants.password" class="input input-sm input-bordered hover:translate-x-6  duration-500" required />

                </div>
                <div class="form-control mt-6 mb-4 w-3/4 ms-12">
                    <button type="submit" class="btn btn-primary">Register</button>
                </div>
            </form>

        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2'

export default {
    name: "RegisterComponentTenant",
    data() {
        return {
            tenants: {
                name: '',
                mobile: '',
                address: '',
                nid: '',
                password: ''
            },
            isVisible: false,
            backgroundImage: ('src/assets/images/scattered-forcefields.svg')
        }
    },
    methods: {
        async registerTenant() {
            let result = await axios.post("https://shomadhan.top/admin/api/Api/Tenant/Create_Form_Post", {
                name: this.tenants.name,
                mobile: this.tenants.mobile,
                address: this.tenants.address,
                nid: this.tenants.nid,
                password: this.tenants.password
            });
            if (result.data.status == true) {
                Swal.fire({
                    title: "Success!",
                    text: "Account created successfully!",
                    icon: "success"
                });
                this.$router.push({
                    name: 'LoginPageTenant'
                })

            }

        },
        showAlart() {
            this.isVisible = true;
            setTimeout(() => {
                this.isVisible = false;
                this.$router.push({
                    name: 'LoginPageTenant'
                })
            }, 3000)

        }
    }
}
</script>
