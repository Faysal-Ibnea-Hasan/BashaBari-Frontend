<template>
<body>
    <NavComponentOwner />
    <div class="h-screen">

        <dialog id="my_modal_1" class="modal">

            <section class="modal-box overflow-hidden rounded-lg  shadow-2xl ">

                <div class="details flex place-content-center">

                    <div class="flow-root w-9/12 rounded-lg border border-gray-100 py-3 shadow-sm">
                        <dl class="-my-3 divide-y divide-gray-100 text-sm" v-for="item in tenant" :key="item.id">

                            <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                <dt class="font-medium text-gray-900">Name</dt>
                                <dd class="text-gray-700 sm:col-span-2">{{ item.name }}</dd>
                            </div>

                            <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                <dt class="font-medium text-gray-900">Mobile Number</dt>
                                <dd class="text-gray-700 sm:col-span-2">{{ item.mobile }}</dd>
                            </div>

                            <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                <dt class="font-medium text-gray-900">Address</dt>
                                <dd class="text-gray-700 sm:col-span-2">{{ item.address }}</dd>
                            </div>
                            <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                <dt class="font-medium text-gray-900">National ID</dt>
                                <dd class="text-gray-700 sm:col-span-2">{{ item.nid }}</dd>
                            </div>
                            <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                <dt class="font-medium text-gray-900">Tenant ID</dt>
                                <dd class="text-gray-700 sm:col-span-2">{{ item.tenant_Id }}</dd>
                            </div>
                            <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                <dt class="font-medium text-gray-900">Email</dt>
                                <dd class="text-gray-700 sm:col-span-2">{{ item.email }}</dd>
                            </div>
                            <form method="dialog">
                                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                            </form>
                        </dl>
                    </div>
                </div>
            </section>

        </dialog>
        <div class="mt-5 mb-5 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div class="container" v-for="item in rent" :key="item.id">

                <article class="group">
                    <div class="image flex place-content-center">
                        <img :src="item.tenants.image" class="h-32 w-32 object-cover shadow-xl rounded-full transition group-hover:grayscale-[50%]" />
                    </div>

                    <div class="p-4">

                        <h3 class="text-lg text-center font-medium text-gray-900">
                            {{ item.tenants.name }}
                        </h3>

                        <p class="mt-2 line-clamp-3 text-center text-sm/relaxed text-gray-500">
                            {{ item.tenant_Id }}
                        </p>
                        <p class="mt-2 line-clamp-3 text-center text-sm/relaxed text-gray-500">
                            Joined : {{ item.joined_at }}
                        </p>
                    </div>

                    <div class="details flex place-content-center">

                        <button v-on:click="get_id(item.tenant_Id)" onclick="my_modal_1.showModal()" class="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring">
                            <span class="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                            <span class="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                                Details
                            </span>
                        </button>
                    </div>
                </article>

            </div>

        </div>

    </div>

</body>
</template>

<script>
import NavComponentOwner from './NavComponentOwner.vue';
import FooterComponent from './FooterComponent.vue';
import axios from 'axios';
export default {
    name: "TenantList",
    data() {
        return {
            rent: [],
            tenant: [],

        }
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
        async get_id(tenant_Id) {
            let get_details = await axios.get("https://shomadhan.top/admin/api/Api/Tenant/TableById/" + tenant_Id);
            this.tenant = get_details.data.data

            // console.warn(this.tenant)
        },
        async get_rent_by_owner() {
            let users = localStorage.getItem('users-info');
            const id = JSON.parse(users).id

            let get_rent_by_owner = await axios.get("https://shomadhan.top/admin/api/Api/Rent/Owner/" + id);
            this.rent = get_rent_by_owner.data.data
            //console.warn(this.rent);

        }
    },

    async mounted() {
        this.get_rent_by_owner();

    },

    components: {
        NavComponentOwner,
        FooterComponent
    }
}
</script>

<style>

</style>
