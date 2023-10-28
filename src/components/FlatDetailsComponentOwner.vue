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
        <!--Create Flat Modal Start-->
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
                    <select v-model="create_flat_details.status" class="select select-bordered w-full max-w-xs mt-2 text-sm font-semibold uppercase tracking-widest">
                        <option disabled value="">Status</option>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                        <option value="Will Be Available">Will Be Available</option>
                    </select>
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <button v-on:click="post_flat_details" class="btn mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white">create</button>
                    </form>

                </div>
            </section>

        </dialog>
        <!--Create Flat Modal End-->
        <!--Assign Tenant Modal Start-->
        <dialog id="my_modal_4" class="modal">

            <section class="modal-box overflow-hidden rounded-lg  shadow-2xl md:grid md:grid-cols-3">
                <img alt="Trainer" src="../assets/images/pic-1.jpg" class="h-32 w-full object-cover md:h-full" />

                <div class="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" hidden placeholder="Owner ID" v-model="owner_Id" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" placeholder="Building ID" v-model="building_Id" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>

                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" required placeholder="Tenant ID" v-model="post_assignData.tenant_Id" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" placeholder="Tenant ID" v-model="flat_Id" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>

                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <button v-on:click="post_assignDatas" class="btn mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white">create</button>
                    </form>

                </div>
            </section>

        </dialog>
        <!--Assign Tenant Modal End-->
        <!--Update Flat Modal Start-->
        <dialog id="my_modal_1" class="modal">

            <section class="modal-box overflow-hidden rounded-lg  shadow-2xl md:grid md:grid-cols-1">

                <div class="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" hidden placeholder="Owner ID" v-model="owner_Id" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" hidden placeholder="Building ID" v-model="building_Id" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" placeholder="Unit Name" name="unit_name " v-model="update_flat_details.unit_name" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="number" placeholder="Floor" name="floor" v-model="update_flat_details.floor" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" placeholder="Area" name="area" v-model="update_flat_details.area" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="number" placeholder="Room" name="room" v-model="update_flat_details.room" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="number" placeholder="Washroom" name="washroom" v-model="update_flat_details.washroom" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="number" placeholder="Balconi" name="balconi" v-model="update_flat_details.balconi" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <p class="text-sm font-semibold uppercase tracking-widest">
                        <input type="text" placeholder="Rent Value" name="rent_value" v-model="update_flat_details.rent_value" class="input input-bordered w-full max-w-xs mt-2" />
                    </p>
                    <select v-model="update_flat_details.status" class="select select-bordered w-full max-w-xs mt-2 text-sm font-semibold uppercase tracking-widest">
                        <option disabled value="">Status</option>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                        <option value="Will Be Available">Will Be Available</option>
                    </select>
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <button v-on:click="update_flats" class="btn mt-4 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white">Update</button>
                    </form>

                </div>
            </section>

        </dialog>
        <!--Update Flat Modal End-->

        <!--Details Modal Start-->
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
                            <dt class="font-medium text-gray-900">Rent Value</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ popup.rent_value }}</dd>
                        </div>
                        <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Flat ID</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ popup.flat_Id }}</dd>
                        </div>
                        <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Status</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ popup.status }}</dd>
                        </div>

                        <form method="dialog">
                            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        </form>

                    </dl>
                </div>
            </section>

        </dialog>
        <!--Details Modal End-->
        <!--Card Start-->
        <div class="mt-10 mb-10 m grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div class="indicator" v-for="item in buildings_flats" :key="item.id">
                <span v-if="item.status == 'Not Available'" class="indicator-item badge badge-error">{{ item.status }}</span>
                <span v-else-if="item.status == 'Will Be Available'" class="indicator-item badge badge-primary">{{ item.status }}</span>
                <span v-else-if="item.status == 'Available'" class="indicator-item badge badge-success">{{ item.status }}</span>
                

                <a href="#" class="block rounded-lg p-4 shadow-sm shadow-indigo-100" >
                    <img alt="Home" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" class="h-56 w-full rounded-md object-cover" />

                    <div class="mt-2">
                        <dl>
                            <div>
                                <dt class="sr-only">Rent</dt>

                                <dd class="text-sm text-gray-500">৳{{ item.rent_value }}</dd>
                            </div>

                            <div>
                                <dt class="sr-only">Unit Name</dt>

                                <dd class="font-medium">{{ item.unit_name }} | {{ item.flat_Id }}</dd>
                            </div>
                        </dl>
                        <div class="flex place-content-center">
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

                        <!--Button Group Start -->
                        <div class="flex place-content-center mt-10 mb-5">

                            <div class="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
                                <button onclick="my_modal_1.showModal()" v-on:click="get_flat_details_popup(item.id)" class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>

                                    Edit
                                </button>

                                <button onclick="my_modal_3.showModal()" v-on:click="get_flat_details_popup(item.id)" class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    View
                                </button>
                                <button onclick="my_modal_4.showModal()" v-on:click="get_flat_details_popup(item.id)" class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    Assign
                                </button>

                                <button v-on:click="delete_flat(item.id)" class="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>

                                    Delete
                                </button>
                            </div>
                        </div>
                        <!--Button Group End -->
                    </div>
                </a>
            </div>
        </div>
        <!--Card End-->

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
            flat_Id: '',
            status_available: 'Available',
            status_notavailable: 'Not Available',
            buildings_flats: [],
            popup: [],
            post_assignData: {
                owner_Id: '',
                building_Id: '',
                flat_Id: '',
                tenant_Id: '',
            },
            create_flat_details: {

                unit_name: '',
                floor: '',
                area: '',
                room: '',
                washroom: '',
                balconi: '',
                rent_value: '',
                status: '',
            },
            update_flat_details: {
                id: '',
                unit_name: '',
                floor: '',
                area: '',
                room: '',
                washroom: '',
                balconi: '',
                rent_value: '',
                status: '',
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

            let get_building_flats = await axios.get("http://127.0.0.1:8000/api/Api/Flat/TableByBuildingID/" + this.$route.params.building_Id);
            let responseData = get_building_flats.data.data
            this.buildings_flats = responseData
            // console.warn(this.building_Id);

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
                status: this.create_flat_details.status,
            });
            if (post_flat_details.data.status == true) {
                this.get_building_flats();
            }
        },
        async get_flat_details_popup(id) {
            let get_flat_details_popup = await axios.get("http://127.0.0.1:8000/api/Api/Flat/Table/" + id);
            let responseData = get_flat_details_popup.data.data
            this.update_flat_details.id = get_flat_details_popup.data.data.id;
            this.flat_Id = responseData.flat_Id
            this.update_flat_details = responseData
            this.popup = responseData
            console.warn(this.flat_Id);
        },
        async delete_flat(id) {
            let delete_flat = await axios.delete("http://127.0.0.1:8000/api/Api/DeleteFlat/" + id);
            if (delete_flat.status == 200) {
                this.get_building_flats();
            }
        },
        async update_flats() {
            let update_flats = await axios.put("http://127.0.0.1:8000/api/Api/Flat/Updated/" + this.update_flat_details.id, {
                owner_Id: this.owner_Id,
                building_Id: this.building_Id,
                unit_name: this.update_flat_details.unit_name,
                floor: this.update_flat_details.floor,
                area: this.update_flat_details.area,
                room: this.update_flat_details.room,
                washroom: this.update_flat_details.washroom,
                balconi: this.update_flat_details.balconi,
                rent_value: this.update_flat_details.rent_value,
                status: this.update_flat_details.status,
            });
            console.warn(update_flats);
            if (update_flats.data.status == true) {
                this.get_building_flats();
            }
        },
        async post_assignDatas() {
            let response = await axios.post("http://127.0.0.1:8000/api/Api/Rent/Create_Form_Post", {
                owner_Id: this.owner_Id,
                building_Id: this.building_Id,
                flat_Id: this.flat_Id,
                tenant_Id: this.post_assignData.tenant_Id,
            });
            if (response.data.status == true) {
                let update_flat_status = await axios.put("http://127.0.0.1:8000/api/Api/Flat/Updated/" + this.update_flat_details.id, {
                    owner_Id: this.owner_Id,
                    building_Id: this.building_Id,
                    unit_name: this.update_flat_details.unit_name,
                    floor: this.update_flat_details.floor,
                    area: this.update_flat_details.area,
                    room: this.update_flat_details.room,
                    washroom: this.update_flat_details.washroom,
                    balconi: this.update_flat_details.balconi,
                    rent_value: this.update_flat_details.rent_value,
                    status: this.status_notavailable
                })
                this.get_building_flats();
            }
        },

    },
    mounted() {
        this.check_owner();
        this.get_building_flats();
    }

}
</script>

<style>

</style>
