<template>
<body>
    <NavComponentTenant />
    <!-- Announcement Banner -->
    <div class="max-w-[85rem] mt-5 mb-5 px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="bg-blue-600 bg-no-repeat bg-cover bg-center p-4 rounded-md text-center">
            <p class="mr-2 inline-block text-white">
                Post your problem here
            </p>
            <button onclick="my_modal_2.showModal()" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-full border-2 border-white font-semibold text-white hover:bg-white/[.1] hover:border-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 transition-all text-sm" href="../figma.html">
                Click Here
                <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
            </button>
        </div>
    </div>
    <!-- End Announcement Banner -->
    <div>
        <!-- Open the modal using ID.showModal() method -->

        <dialog id="my_modal_2" class="modal">

            <section class="modal-box overflow-hidden rounded-lg  shadow-2xl md:grid md:grid-cols-1">

                <div class="p-4 -mt-10 text-center sm:p-6 md:col-span-2 lg:p-8">
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" hidden placeholder="Building ID" v-model="building_Id" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" hidden placeholder="Flat ID" v-model="flat_Id" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" hidden placeholder="Tenant ID" v-model="tenant_Id" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" placeholder="Title" v-model="title" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>

                    <p class="text-sm mt-2 font-semibold uppercase tracking-widest">
                        <textarea class="textarea textarea-bordered textarea-lg w-full max-w-xs" placeholder="Description" v-model="description"></textarea>
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="date" placeholder="Date" v-model="date" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>

                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <button v-on:click="post_problem" class="btn mt-2 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white">Create</button>
                    </form>
                </div>
            </section>
        </dialog>

    </div>
    <!-- Table Section -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Card -->
        <div class="flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                    <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">

                        <!-- Table -->
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-slate-800">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-start">
                                        <div class="flex items-center gap-x-2">
                                            <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Title
                                            </span>
                                        </div>
                                    </th>

                                    <th scope="col" class="px-6 py-3 text-start">
                                        <div class="flex items-center gap-x-2">
                                            <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Description
                                            </span>
                                        </div>
                                    </th>

                                    <th scope="col" class="px-6 py-3 text-start">
                                        <div class="flex items-center gap-x-2">
                                            <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Date
                                            </span>
                                        </div>
                                    </th>

                                    <th scope="col" class="px-6 py-3 text-start">
                                        <div class="flex items-center gap-x-2">
                                            <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Status
                                            </span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                <tr class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800" v-for="item in problems" :key="item.id">
                                    <td class="h-px w-px whitespace-nowrap align-top">
                                        <a class="block p-6" href="#">
                                            <div class="flex items-center gap-x-4">
                                                
                                                <div>
                                                    <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{{ item.title }}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </td>

                                    <td class="h-px w-72 min-w-[18rem] align-top">
                                        <a class="block p-6" href="#">
                                            
                                            
                                            <span class="block text-sm text-gray-500">{{ item.description }}</span>
                                        </a>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap align-top">
                                        <a class="block p-6" href="#">
                                            <span class="text-sm text-gray-600 dark:text-gray-400">{{ item.date }}</span>
                                        </a>
                                    </td>
                                    <td class="h-px w-px whitespace-nowrap align-top">
                                        <a class="block p-6" href="#">
                                            <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                <svg class="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                                {{ item.status }}
                                            </span>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- End Table -->
                    </div>
                </div>

            </div>
        </div>
        <!-- End Card -->
    </div>
    <!-- End Table Section -->
</body>
</template>

<script>
import axios from 'axios';

import NavComponentTenant from './NavComponentTenant.vue';
import {
    ref
} from 'vue';

export default {
    name: "ProblemDashboardTenant",
    data() {
        return {
            tenant_Id: '',
            building_Id: '',
            flat_Id: '',
            title: '',
            description: '',
            date: '',
            status: '',
            flat_state: ref('initial value'),
            building_state: ref('initial value'),
            assignDetails: [],
            problems: [],
        }
    },
    components: {
        NavComponentTenant
    },
    methods: {
        check_tenant() {
            let users = localStorage.getItem('tenant-info');

            if (!users) {
                this.$router.push({
                    name: 'LoginPageTenant'
                })
            } else {
                this.tenant_Id = JSON.parse(users).tenant_Id
            }
            //console.warn(this.tenant_Id);
        },

        async get_assign_by_tenantID() {
            let get_assign_by_tenantID = await axios.get("http://127.0.0.1:8000/api/Api/Rent/Tenant/" + this.tenant_Id);
            const response = get_assign_by_tenantID.data.data;
            this.assignDetails = response;

            this.flat_state = response[0].flat_Id
            this.building_state = response[0].building_Id

            //console.warn(this.state);
        },
        async post_problem() {
            let post_problem = await axios.post("http://127.0.0.1:8000/api/Api/Problem/Create_Form_Post", {
                building_Id: this.building_state,
                flat_Id: this.flat_state,
                tenant_Id: this.tenant_Id,
                title: this.title,
                description: this.description,
                date: this.date,
                status: this.status,
            })
            if(post_problem.data.status == true) {
                this.get_problems_by_tenant();
            }

        },
        async get_problems_by_tenant() {
            let get_problems_by_tenant = await axios.get("http://127.0.0.1:8000/api/Api/Problem/TableByTenantId/" + this.tenant_Id);
            let response = get_problems_by_tenant.data.data;
            this.problems = response
            console.warn(this.problems);
        }

    },
    mounted() {
        this.check_tenant();
        this.get_assign_by_tenantID();
        this.get_problems_by_tenant();
    }
}
</script>

<style>

</style>
