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
<!-- <div :style="{backgroundImage:'url('+backgroundImage+')'}" class="hero min-h-screen bg-base-200">

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
</div> -->
<!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

<section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img alt="Night" src="../assets/images/Reg.jpg" class="absolute inset-0 h-full w-full object-cover opacity-80" />

            <div class="hidden lg:relative lg:block lg:p-12">
                <a class="block text-white" href="/">
                    <span class="sr-only">Home</span>
                    <svg class="h-8 sm:h-10" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z" fill="currentColor" />
                    </svg>
                </a>

                <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                    Welcome to your home 
                </h2>

                <p class="mt-4 leading-relaxed text-white/90">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
                    dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
            </div>
        </section>

        <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div class="max-w-xl lg:max-w-3xl">
                <div class="relative -mt-16 block lg:hidden">
                    <a class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20" href="/">
                        <span class="sr-only">Home</span>
                        <svg class="h-8 sm:h-10" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z" fill="currentColor" />
                        </svg>
                    </a>

                    <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                        Welcome to Squid 🦑
                    </h1>

                    <p class="mt-4 leading-relaxed text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                        nam dolorum aliquam, quibusdam aperiam voluptatum.
                    </p>
                </div>

                <form @submit.prevent="registerTenant" class="mt-8 grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                        <label for="Fullname" class="block text-sm font-medium text-gray-700">
                            Full Name*
                        </label>

                        <input v-model="tenants.name" type="text" id="Fullname" required class="mt-1 w-full h-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm hover:shadow-lg" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label for="Mobile" class="block text-sm font-medium text-gray-700">
                            Mobile Number*
                        </label>

                        <input v-model="tenants.mobile" type="text" id="Mobile" required  class="mt-1 w-full h-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm hover:shadow-lg" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label for="email" class="block text-sm font-medium text-gray-700">
                            Email (optional)
                        </label>

                        <input v-model="tenants.email" type="email" id="email"  class="mt-1 w-full h-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm hover:shadow-lg" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label for="Address" class="block text-sm font-medium text-gray-700">
                            Address (optional)
                        </label>

                        <input v-model="tenants.address" type="text" id="Address"  class="mt-1 w-full h-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm hover:shadow-lg" />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="NID" class="block text-sm font-medium text-gray-700">
                            National Identity Number (optional)
                        </label>

                        <input v-model="tenants.nid" type="text" id="NID"  class="mt-1 w-full h-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm hover:shadow-lg" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label for="Password" class="block text-sm font-medium text-gray-700">
                            Password*
                        </label>

                        <input v-model="initial_password" required type="password" id="Password" name="password" class="mt-1 w-full h-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm hover:shadow-lg" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label for="PasswordConfirmation" class="block text-sm font-medium text-gray-700">
                            Password Confirmation*
                        </label>

                        <input v-model="tenants.password" required type="password" id="PasswordConfirmation" name="password_confirmation" class="mt-1 w-full h-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm hover:shadow-lg" />
                    </div>

                    <!-- <div class="col-span-6">
                        <label for="MarketingAccept" class="flex gap-4">
                            <input type="checkbox" id="MarketingAccept" name="marketing_accept" class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm" />

                            <span class="text-sm text-gray-700">
                                I want to receive emails about events, product updates and
                                company announcements.
                            </span>
                        </label>
                    </div> -->

                    <div class="col-span-6">
                        <p class="text-sm text-gray-500">
                            By creating an account, you agree to our
                            <a href="#" class="text-gray-700 underline">
                                terms and conditions
                            </a>
                            and
                            <a href="#" class="text-gray-700 underline">privacy policy</a>.
                        </p>
                    </div>

                    <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button type="submit" class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                            Create an account
                        </button>

                        <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                            Already have an account?
                            <router-link to="login-tenant" class="text-gray-700 underline">Log in</router-link>.
                        </p>
                    </div>
                </form>
            </div>
        </main>
    </div>
</section>
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
                password: '',
                email: '',
                assign_status: 0,
            },
            initial_password: '',
            // isVisible: false,
            // backgroundImage: ('src/assets/images/scattered-forcefields.svg')
        }
    },
    methods: {
        async registerTenant() {
            if(this.initial_password == this.tenants.password){

                let result = await axios.post("https://shomadhan.top/admin/api/Api/Tenant/Create_Form_Post", {
                    name: this.tenants.name,
                    mobile: this.tenants.mobile,
                    address: this.tenants.address,
                    nid: this.tenants.nid,
                    password: this.tenants.password,
                    email: this.tenants.email,
                    assign_status: this.tenants.assign_status
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
            }
            else if (this.initial_password != this.tenants.password){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Your Password Doesn't Match!",
                    footer: 'Please get registared and try again'
                });
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
