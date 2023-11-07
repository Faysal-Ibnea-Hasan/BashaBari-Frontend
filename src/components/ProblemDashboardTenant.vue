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
    <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead class="ltr:text-left rtl:text-right">
                <tr>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Building ID
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Title
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Description
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Date
                    </th>
                    <th class="px-4 py-2"></th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
                <tr>
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">

                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700"></td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700"></td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700"></td>
                    <td class="whitespace-nowrap px-4 py-2">
                        <a onclick="my_modal_3.showModal()" href="#" class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                            Update
                        </a>
                        <!-- <a v-on:click="remove_notice(item.id)" href="#" class="inline-block rounded bg-indigo-600 ms-2 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                            Delete
                        </a> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
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
            console.warn(this.tenant_Id);
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

        }

    },
    mounted() {
        this.check_tenant();
        this.get_assign_by_tenantID();
    }
}
</script>

<style>

</style>
