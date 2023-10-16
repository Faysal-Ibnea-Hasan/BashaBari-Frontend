<template>
<body>
    <NavComponentOwner />
    <div class="h-screen">
        <div class="flex items-center justify-center mt-5">
            <div class="card w-96 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Wooh!</h2>
                    <p>Want to add some more tenants?</p>
                    <div class="card-actions justify-end">
                        <button onclick="my_modal_4.showModal()" class="btn btn-primary">Add Tenant</button>

                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5 mb-5 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div class="container" v-for="(arr , setIndex) in tenants" :key="setIndex">

                <article class="group" v-for="(item,index) in arr" :key="index">
                    <div class="image flex place-content-center">
                        <img alt="Lava" src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" class="h-32 w-32 object-cover shadow-xl rounded-full transition group-hover:grayscale-[50%]" />
                    </div>

                    <div class="p-4">

                        <h3 class="text-lg text-center font-medium text-gray-900">
                            {{ item.name }}
                        </h3>

                        <p class="mt-2 line-clamp-3 text-center text-sm/relaxed text-gray-500">
                            {{ item.tenant_Id }}
                        </p>
                    </div>
                </article>
                <dialog id="my_modal_1" class="modal">

                    <section class="modal-box overflow-hidden rounded-lg  shadow-2xl ">

                        <div class="details flex place-content-center">

                            <div class="flow-root w-9/12 rounded-lg border border-gray-100 py-3 shadow-sm">
                                <dl class="-my-3 divide-y divide-gray-100 text-sm">

                                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                        <dt class="font-medium text-gray-900">Building Name</dt>
                                        <dd class="text-gray-700 sm:col-span-2">{{ }}</dd>
                                    </div>

                                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                        <dt class="font-medium text-gray-900">Building Address</dt>
                                        <dd class="text-gray-700 sm:col-span-2">{{ }}</dd>
                                    </div>

                                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                        <dt class="font-medium text-gray-900">Developer</dt>
                                        <dd class="text-gray-700 sm:col-span-2">{{ }}</dd>
                                    </div>

                                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                        <dt class="font-medium text-gray-900">Developed Date</dt>
                                        <dd class="text-gray-700 sm:col-span-2">
                                            {{ }}
                                        </dd>
                                    </div>
                                    <form method="dialog">
                                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                                    </form>
                                </dl>
                            </div>
                        </div>
                    </section>

                </dialog>
                <div class="details flex place-content-center">

                    <button v-on:click="getBuildingId(item.id)" onclick="my_modal_1.showModal()" class="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring">
                        <span class="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                        <span class="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                            Details
                        </span>
                    </button>
                </div>

            </div>

        </div>

    </div>

    <FooterComponent />
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
            tenants_Id: [],
            tenants: [],
            results: [],
            apiResponses: [],
            extractedData: [],
        }
    },
    async mounted() {
        let users = localStorage.getItem('users-info');

        const id = JSON.parse(users).id

        const response1 = await axios.get("http://127.0.0.1:8000/api/Api/Rent/Owner/" + id);
        let ids = response1.data.data.map(item => item.tenant_Id)
        this.tenants_Id = ids.map(item => item)

        console.log(this.tenants_Id);

        for (const id of this.tenants_Id) {

            const response2 = await axios.get(`http://127.0.0.1:8000/api/Api/Tenant/TableById/${id}`);
            this.tenants.push(response2.data.data)
            console.log(this.tenants)
        }

    },

    components: {
        NavComponentOwner,
        FooterComponent
    }
}
</script>

<style>

</style>
