<template>
<!-- Card Section -->
<div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
        <div class="flex place-content-between">
            <div>

                <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">
                    Profile
                </h2>
            </div>
            <div v-if="update_tenant_details.assign_status == 1">
                <h2 class="text-base text-white dark:text-gray-200 rounded-full p-2 bg-green-600">
                    Assigned
                </h2>
            </div>
            <div v-else-if="update_tenant_details.assign_status == 0">
                <h2 class="text-base text-white dark:text-gray-200 rounded-full p-2 bg-red-700">
                   Not Assigned
                </h2>
            </div>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-8">
            Manage your name, password and account settings.
        </p>

        <form @submit.prevent="update_tenant">
            <!-- Grid -->
            <div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
                <div class="sm:col-span-3">
                    <label class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                        Profile photo
                    </label>
                </div>
                <!-- End Col -->

                <div class="sm:col-span-9">
                    <div class="flex items-center gap-5">
                        <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800" :src="image" alt="Image Description">
                        <div class="flex gap-x-2">
                            <div>
                                <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="17 8 12 3 7 8" />
                                        <line x1="12" x2="12" y1="3" y2="15" /></svg>
                                    Upload photo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Col -->

                <div class="sm:col-span-3">
                    <label for="af-account-full-name" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                        Full name
                    </label>

                </div>
                <!-- End Col -->

                <div class="sm:col-span-9">
                    <div class="sm:flex">
                        <input v-model="update_tenant_details.name" id="af-account-full-name" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Maria">

                    </div>
                </div>
                <!-- End Col -->

                <div class="sm:col-span-3">
                    <label for="af-account-password" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                        Password
                    </label>
                </div>
                <!-- End Col -->

                <div class="sm:col-span-9">
                    <div class="space-y-2">
                        <input :type="type" v-model="current_password" id="af-account-password" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter current password">
                        <input :type="type" v-model="updated_password" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter new password">
                    </div>
                </div>
                <!-- End Col -->

                <div class="sm:col-span-3">
                    <div class="inline-block">
                        <label for="af-account-phone" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                            Phone
                        </label>
                        <!-- <span class="text-sm text-gray-400 dark:text-gray-600">
                                (Optional)
                            </span> -->
                    </div>
                </div>
                <!-- End Col -->

                <div class="sm:col-span-9">
                    <div class="sm:flex">
                        <input v-model="update_tenant_details.mobile" id="af-account-phone" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="+880 XXXX-XX-XXX">

                    </div>

                </div>

                <div class="sm:col-span-3">
                    <label for="af-account-email" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                        Email
                    </label>

                </div>
                <!-- End Col -->

                <div class="sm:col-span-9">
                    <div class="sm:flex">
                        <input v-model="update_tenant_details.email" id="af-account-email" type="email" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="example@gmail.com">

                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="af-account-address" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                        Address
                    </label>

                </div>
                <!-- End Col -->

                <div class="sm:col-span-9">
                    <div class="sm:flex">
                        <input v-model="update_tenant_details.address" id="af-account-address" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Maria">

                    </div>
                </div>
                <!-- End Col -->
                <div class="sm:col-span-3">
                    <label for="af-account-nid" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                        National Identity Number
                    </label>

                </div>
                <!-- End Col -->

                <div class="sm:col-span-9">
                    <div class="sm:flex">
                        <input v-model="update_tenant_details.nid" id="af-account-nid" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Maria">

                    </div>
                </div>
                <!-- End Col -->

            </div>
            <!-- End Grid -->

            <div class="mt-5 flex justify-end gap-x-2">
                <router-link to="/home-tenant" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Cancel
                </router-link>

                <button type="submit" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Save changes
                </button>
            </div>
        </form>

    </div>
    <!-- End Card -->
</div>

<!-- End Card Section -->
</template>

    
<script>
import axios from 'axios';
import Swal from 'sweetalert2'
import {
    ref
} from 'vue';

export default {
    name: "ProfileComponenttenant",
    data() {
        return {
            image: JSON.parse(localStorage.getItem('tenant-info')).image,
            id: ref(null),
            tenant_details: [],
            update_tenant_details: {
                name: '',
                mobile: '',
                password: '',
                address: '',
                nid: '',
                email: '',
                assign_status: JSON.parse(localStorage.getItem('tenant-info')).assign_status,

            },
            current_password: '',
            updated_password: '',
            type: 'text',

        }
    },
    methods: {
        check_tenant() {
            let users = localStorage.getItem('tenant-info');

            if (!users) {
                this.$router.push({
                    name: 'LoginPageTenant'
                })
            } else {
                this.id = JSON.parse(users).id
                //console.warn(this.id)
            }
        },
        async get_tenant_details() {
            let get_tenant_details = await axios.get("https://shomadhan.top/admin/api/Api/Tenant/Table/" + this.id)
            this.update_tenant_details = get_tenant_details.data.data
            console.warn(this.update_tenant_details)
        },
        async update_tenant() {
            if (this.current_password == this.update_tenant_details.password) {

                let update_tenant = await axios.put("https://shomadhan.top/admin/api/Api/Tenant/Updated/" + this.id, {
                    name: this.update_tenant_details.name,
                    mobile: this.update_tenant_details.mobile,
                    password: this.updated_password,
                    address: this.update_tenant_details.address,
                    nid: this.update_tenant_details.nid,
                    email: this.update_tenant_details.email,
                    assign_status: this.update_tenant_details.assign_status
                })
                if (update_tenant.data.status == true) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Profile Updated Successfully!",
                        icon: "success"
                    });
                    this.get_tenant_details();
                }
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Your Password Doesn't Match!",

                });
            }

        },

    },
    mounted() {
        this.check_tenant();
        this.get_tenant_details();
    }
}
</script>

    
<style>

    </style>
