<template>
<body>
    <NavComponentOwner />
    <div class="h-auto">
        <!-- Announcement Banner -->
        <div class="max-w-[85rem] mt-5 mb-5 px-4 sm:px-6 lg:px-8 mx-auto">
            <div class="bg-blue-600 bg-[url('../svg/component/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 rounded-md text-center">
                <p class="mr-2 inline-block text-white">
                    Add Flats To Your Building
                </p>
                <button onclick="my_modal_2.showModal()" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-full border-2 border-white font-semibold text-white hover:bg-white/[.1] hover:border-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 transition-all text-sm" href="../figma.html">
                    Click to Add
                    <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
        </div>
        <!-- End Announcement Banner -->
        <dialog id="my_modal_2" class="modal">

            <section class="modal-box overflow-hidden rounded-lg  shadow-2xl md:grid md:grid-cols-1">

                <div class="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" hidden placeholder="Owner ID" v-model="owner_Id" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" hidden placeholder="Building ID" v-model="building_Id" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" placeholder="Unit Name" v-model="create_flat_details.unit_name" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="number" placeholder="Floor" v-model="create_flat_details.floor" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" placeholder="Area" v-model="create_flat_details.area" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="number" placeholder="Room" v-model="create_flat_details.room" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="number" placeholder="Washroom" v-model="create_flat_details.washroom" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="number" placeholder="Balconi" v-model="create_flat_details.balconi" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" placeholder="Rent Value" v-model="create_flat_details.rent_value" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <button v-on:click="post_flat_details" class="btn mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white">create</button>
                    </form>

                </div>
            </section>

        </dialog>
        <dialog id="my_modal_3" class="modal">

            <section class="modal-box overflow-hidden rounded-lg  shadow-2xl md:grid md:grid-cols-1">

                <div class="flow-root">
                    <dl class="-my-3 divide-y divide-gray-100 text-sm">
                        <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Unit Name</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ popup.unit_name }}</dd>
                        </div>

                        <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Floor</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ popup.floor }}</dd>
                        </div>

                        <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Area</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ popup.area }}</dd>
                        </div>

                        <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Room</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ popup.room }}</dd>
                        </div>

                        <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Washroom</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ popup.washroom }}</dd>
                        </div>

                        <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Balconi</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ popup.balconi }}</dd>
                        </div>

                        <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Balconi</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ popup.rent_value }}</dd>
                        </div>
                        <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Balconi</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ popup.building_Id }}</dd>
                        </div>

                        <form method="dialog">
                                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                                </form>

                        
                    </dl>
                </div>
            </section>

        </dialog>
        <div class="mt-10 mb-10 m grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <a onclick="my_modal_3.showModal()" v-on:click="get_flat_details_popup(item.id)" href="#" class="block rounded-lg p-4 shadow-sm shadow-indigo-100" v-for="item in buildings_flats" :key="item.id">
                <img alt="Home" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" class="h-56 w-full rounded-md object-cover" />

                <div class="mt-2">
                    <dl>
                        <div>
                            <dt class="sr-only">Rent</dt>

                            <dd class="text-sm text-gray-500">৳{{ item.rent_value }}</dd>
                        </div>

                        <div>
                            <dt class="sr-only">Unit Name</dt>

                            <dd class="font-medium">{{ item.unit_name }}</dd>
                        </div>
                    </dl>

                    <div class="mt-6 flex items-center gap-8 text-xs">
                        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg class="h-4 w-4 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>

                            <div class="mt-1.5 sm:mt-0">
                                <p class="text-gray-500">Area</p>

                                <p class="font-medium">{{ item.area }}</p>
                            </div>
                        </div>

                        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg class="h-4 w-4 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>

                            <div class="mt-1.5 sm:mt-0">
                                <p class="text-gray-500">Bedroom</p>

                                <p class="font-medium">{{ item.room }}</p>
                            </div>
                        </div>
                        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg class="h-4 w-4 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>

                            <div class="mt-1.5 sm:mt-0">
                                <p class="text-gray-500">Bathroom</p>

                                <p class="font-medium">{{ item.washroom }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
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
    name: "FlatDetailsComponentOwner",
    data() {
        return {
            owner_Id: '',
            building_Id: '',
            buildings_flats: [],
            popup:[],
            create_flat_details: {

                unit_name: '',
                floor: '',
                area: '',
                room: '',
                washroom: '',
                balconi: '',
                rent_value: '',
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
        async get_building_flats() {
            let users = localStorage.getItem('users-info');
            const id = JSON.parse(users).id
            this.owner_Id = id
            this.building_Id = this.$route.params.building_Id

            let get_building_flats = await axios.get("http://127.0.0.1:8000/api/Api/Flat/TableByBuilding/" + this.$route.params.building_Id);
            let responseData = get_building_flats.data.data
            this.buildings_flats = responseData
            console.warn(this.building_Id);

        },

        async post_flat_details() {
            let post_flat_details = await axios.post("http://127.0.0.1:8000/api/Api/Flat/Create_Form_Post", {
                owner_Id: this.owner_Id,
                building_Id: this.building_Id,
                unit_name: this.create_flat_details.unit_name,
                floor: this.create_flat_details.floor,
                area: this.create_flat_details.area,
                room: this.create_flat_details.room,
                washroom: this.create_flat_details.washroom,
                balconi: this.create_flat_details.balconi,
                rent_value: this.create_flat_details.rent_value,
            });
            if (post_flat_details.data.status == true) {
                this.get_building_flats();
            }
        },
        async get_flat_details_popup(id){
            let get_flat_details_popup = await axios.get("http://127.0.0.1:8000/api/Api/Flat/Table/" + id);
            let responseData = get_flat_details_popup.data.data
            this.popup = responseData
        }

    },
    mounted() {
        this.check_owner();
        this.get_building_flats();
    }

}
</script>

<style>

</style>
