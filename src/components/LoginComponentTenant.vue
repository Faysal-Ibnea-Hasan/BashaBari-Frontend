<template>
<div :style="{backgroundImage:'url('+backgroundImage+')'}" class="hero min-h-screen bg-base-200">

    <div class="hero-content flex-col lg:flex-row-reverse">
        <!-- <div v-if="isVisible" class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div class="flex items-center justify-center w-12 bg-red-500">
                <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                </svg>
            </div>

            <div class="px-4 py-2 -mx-3">
                <div class="mx-3">
                    <span class="font-semibold text-red-500 dark:text-red-400">Error</span>
                    <p class="text-sm text-gray-600 dark:text-gray-200">
                        Your email is already used!
                    </p>
                </div>
            </div>
        </div> -->
        <div class="text-center ms-4 lg:text-left">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6">Not Registered?</p>
            <router-link to="/register-tenant"><button class="btn btn-outline btn-primary">Register</button></router-link>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 hover:-translate-y-1 hover:scale-110 duration-500">
            <div class="card-body">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Mobile Number</span>
                    </label>
                    <input type="text" placeholder="Mobile number" v-model="mobile" class="input input-bordered" required />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" v-model="password" class="input input-bordered" required />

                </div>
                <div class="form-control mt-6">
                    <button v-on:click="login" class="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: "LoginComponentTenant",
    data() {
        return {
            mobile: '',
            password: '',
            tenant_Id: '',
            isVisible: false,
            backgroundImage: ('src/assets/images/scattered-forcefields.svg')
        }
    },
    methods: {
        async login() {
            let result = await axios.post(
                `https://shomadhan.top/admin/api/Api/Tenant/Check`, {

                    mobile: this.mobile,
                    password: this.password
                }
            )

            if (result.data.status == true) {
                localStorage.setItem("tenant-info", JSON.stringify(result.data.data));
                let tenant_Id = localStorage.getItem("tenant-info");
                this.tenant_Id = JSON.parse(tenant_Id).tenant_Id;
                console.warn(this.tenant_Id)
                let get_assign_by_tenantID = await axios.get("https://shomadhan.top/admin/api/Api/Rent/Tenant/" + this.tenant_Id)
                localStorage.setItem("status", JSON.stringify(get_assign_by_tenantID.data.status));
                console.warn(get_assign_by_tenantID)
                this.$router.push({
                    name: 'HomePageTenant'
                })
            } else if (result.data.status == false) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Looks like you don't have an account yet!",
                    footer: 'Please get registared and try again'
                });

            }
        },
        showAlart() {
            this.isVisible = true;
            setTimeout(() => {
                this.isVisible = false;
            }, 5000)
        },

    }
}
</script>
