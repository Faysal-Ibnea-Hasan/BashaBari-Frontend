<template>
<!-- <div class=" alert alert-error" v-if="isVisible">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Oops! Looks like you don't have an account yet.</span>
    </div> -->

<!-- <div :style="{backgroundImage:'url('+backgroundImage+')'}" class="hero min-h-screen bg-base-200">

    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center ms-4 lg:text-left">
            <h1 class="text-5xl font-bold">Login please!</h1>

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
</div> -->
<!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">

        <form @submit.prevent="login" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p class="text-center text-lg font-medium">Sign in to your account | Owner</p>

            <div>
                <label for="mobile" class="sr-only">Mobile</label>

                <div class="relative">
                    <input v-model="mobile" type="text" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter Mobile Number" />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                    </span>
                </div>
            </div>

            <div>
                <label for="password" class="sr-only">Password</label>

                <div class="relative">
                    <input v-model="password" :type="showPassword ? 'text' : 'password'" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter password" />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg @click="togglePassword" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </span>
                </div>
            </div>

            <button type="submit" class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
                Sign in
            </button>

            <!-- <p class="text-center text-sm text-gray-500">
                No account?
                <router-link to="" class="underline" href="">Sign up</router-link>
            </p> -->
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    name: "LoginComponentOwner",
    data() {
        return {
            mobile: '',
            password: '',
            isVisible: false,
            backgroundImage: ('src/assets/images/subtle-prism.svg'),
            showPassword: false,
        }
    },
    methods: {
        async login() {
            let result = await axios.post(
                `https://shomadhan.top/admin/api/Api/Owner/Check`, {
                    mobile: this.mobile,
                    password: this.password
                }
            )

            if (result.data.status == true) {
                localStorage.setItem("users-info", JSON.stringify(result.data.data));
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                this.$router.push({
                    name: 'HomePageOwner'
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
        togglePassword() {
            this.showPassword = !this.showPassword;
        },

    },

}
</script>
