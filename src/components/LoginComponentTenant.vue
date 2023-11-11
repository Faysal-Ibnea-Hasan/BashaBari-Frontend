<template>
<div class="alert alert-error" v-if="isVisible">
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Oops! Looks like you don't have an account yet.</span>
</div>
<div :style="{backgroundImage:'url('+backgroundImage+')'}" class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
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
export default {
    name: "LoginComponentTenant",
    data() {
        return {
            mobile: '',
            password: '',
            isVisible: false,
            backgroundImage:('src/assets/images/scattered-forcefields.svg')
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
                this.$router.push({
                    name: 'HomePageTenant'
                })
            } else if (result.data.status == false) {
                this.showAlart();
            }
        },
        showAlart() {
            this.isVisible = true;
            setTimeout(() => {
                this.isVisible = false;
            }, 5000)
        }
    }
}
</script>
