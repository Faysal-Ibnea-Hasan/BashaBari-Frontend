<template>
<body>
    <NavComponentOwner />
    <div class="h-auto">
        <!-- Announcement Banner -->
        <div class="max-w-[85rem] mt-5 mb-5 px-4 sm:px-6 lg:px-8 mx-auto">
            <div class="bg-blue-600 bg-[url('../svg/component/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 rounded-md text-center">
                <p class="mr-2 inline-block text-white">
                    Assign Tenant To Your Building
                </p>
                <button onclick="my_modal_2.showModal()" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-full border-2 border-white font-semibold text-white hover:bg-white/[.1] hover:border-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 transition-all text-sm" href="../figma.html">
                    Click to Assign
                    <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
        </div>
        <!-- End Announcement Banner -->
        <dialog id="my_modal_2" class="modal">

            <section class="modal-box overflow-hidden rounded-lg  shadow-2xl md:grid md:grid-cols-3">
                <img alt="Trainer" src="../assets/images/pic-1.jpg" class="h-32 w-full object-cover md:h-full" />

                <div class="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" hidden placeholder="Owner ID" v-model="post_assignData.owner_Id" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" placeholder="Building ID" v-model="post_assignData.building_Id" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" placeholder="Flat ID" v-model="post_assignData.flat_Id" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" placeholder="Tenant ID" v-model="post_assignData.tenant_Id" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>

                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <button v-on:click="post_assignDatas" class="btn mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white">create</button>
                    </form>

                    <p class="mt-8 text-xs font-medium uppercase text-gray-400">
                        Offer valid until 24th March, 2021 *
                    </p>
                </div>
            </section>

        </dialog>
        <div class="overflow-x-auto">
            <table class="table table-zebra">
                <!-- head -->
                <thead>
                    <tr>
                        <th>Owner ID</th>
                        <th>Building ID</th>
                        <th>Flat ID</th>
                        <th>Tenant ID</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->

                    <tr v-for="item in assignData" :key="item.id">

                        <td>{{ item.owner_Id }}</td>
                        <td>{{ item.building_Id }}</td>
                        <td>{{ item.flat_Id }}</td>
                        <td>{{ item.tenant_Id }}</td>
                        <td>
                            <button v-on:click="remove_tenant(item.id)" class="btn btn-sm btn-error">Remove</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
    <FooterComponent />
</body>
</template>

<script>
import axios from 'axios'
import FooterComponent from './FooterComponent.vue'
import NavComponentOwner from './NavComponentOwner.vue'

export default {
    name: 'AssignTenantComponent',
    data() {
        return {
            assignData: [],
            owner_Id: '',
            post_assignData: {
                owner_Id: '',
                building_Id: '',
                flat_Id: '',
                tenant_Id: '',
            }
        }
    },
    components: {
        NavComponentOwner,
        FooterComponent
    },
    methods: {
        check_owner() {
            let users = localStorage.getItem('users-info');

            if (!users) {
                this.$router.push({
                    name: 'LoginPageOwner'
                })
            }
        },
        async get_assignData() {
            let users = localStorage.getItem('users-info');
            const id = JSON.parse(users).id
            this.owner_Id = id

            let response = await axios.get("http://127.0.0.1:8000/api/Api/Rent/Owner/" + this.owner_Id);
            let responseData = response.data.data
            this.assignData = responseData
            console.warn(this.assignData)
        },
        async post_assignDatas() {
            let response = await axios.post("http://127.0.0.1:8000/api/Api/Rent/Create_Form_Post", {
                owner_Id: this.owner_Id,
                building_Id: this.post_assignData.building_Id,
                flat_Id: this.post_assignData.flat_Id,
                tenant_Id: this.post_assignData.tenant_Id,
            });
            if (response.data.status == true) {
                this.get_assignData();
            }
        },
        async remove_tenant(id) {
            let remove_tenant = await axios.delete("http://127.0.0.1:8000/api/Api/DeleteRent/" + id)
            if (remove_tenant.status == 200) {
                this.get_assignData();
            }

        }
    },
    mounted() {
        this.get_assignData();
        this.check_owner();
    }
}
</script>

<style>

</style>
