<template>
<body>
    <NavComponentOwner />
    <div class="h-auto">
        <!-- Announcement Banner -->
        <div class="max-w-[85rem] mt-5 mb-5 px-4 sm:px-6 lg:px-8 mx-auto">
            <div class="bg-blue-600 bg-[url('../svg/component/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 rounded-md text-center">
                <p class="mr-2 inline-block text-white">
                    Want to create your own building?
                </p>
                <button onclick="my_modal_2.showModal()" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-full border-2 border-white font-semibold text-white hover:bg-white/[.1] hover:border-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 transition-all text-sm" href="../figma.html">
                    Click to Create
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
                    

                    <div class="text-center -mt-10 h-max sm:p-6 md:col-span-2 lg:p-8">
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="text" hidden placeholder="Building Name" v-model="post_building.post_id" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="text" placeholder="Building Name" v-model="post_building.name" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="text" placeholder="Building Address" v-model="post_building.address" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="text" placeholder="Developer" v-model="post_building.developer" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <select v-model="post_building.parking" class="select select-bordered w-full max-w-xs mt-2 text-sm font-semibold uppercase tracking-widest">
                            <option disabled value="">Parking Facility</option>
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                        </select>
                        <select v-model="post_building.area" class="select select-bordered w-full max-w-xs mt-2 text-sm font-semibold uppercase tracking-widest">
                            <option disabled value="">Area</option>
                        
                            <option value="Mirpur-1">Mirpur-1</option>
                            <option value="Mirpur-2">Mirpur-2</option>
                            <option value="Mirpur-6">Mirpur-6</option>
                            <option value="Mirpur-7">Mirpur-7</option>
                            <option value="Mirpur-10">Mirpur-10</option>
                            <option value="Mirpur-11">Mirpur-11</option>
                            <option value="Mirpur-12">Mirpur-12</option>
                            <option value="Mirpur-13">Mirpur-13</option>
                            <option value="Mirpur-14">Mirpur-14</option>
                        </select>
                        <select v-model="post_building.city" class="select select-bordered w-full max-w-xs mt-2 text-sm font-semibold uppercase tracking-widest">
                            <option disabled value="">City</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Others">Others</option>
                        </select>
                        <select v-model="post_building.district" class="select select-bordered w-full max-w-xs mt-2 text-sm font-semibold uppercase tracking-widest">
                            <option disabled value="">District</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Others">Others</option>
                        </select>
                        <select v-model="post_building.postal_code" class="select select-bordered w-full max-w-xs mt-2 text-sm font-semibold uppercase tracking-widest">
                            <option disabled value="">Postal Code</option>
                            <option value="1216">1216</option>
                            <option value="Others">Others</option>
                        </select>
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="date" placeholder="Developed Date" v-model="post_building.date" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <form method="dialog">
                            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button v-on:click="post_building_data" class="btn  inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white">create</button>
                        </form>

                        
                    </div>
                </section>

            </dialog>
            <dialog id="my_modal_3" class="modal">

                <section class="modal-box overflow-hidden rounded-lg  shadow-2xl md:grid md:grid-cols-1">
                    

                    <div class="p-4 -mt-10 text-center sm:p-6 md:col-span-2 lg:p-8">
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="text" hidden placeholder="Building Name" v-model="update_building.owner_Id" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="text" hidden placeholder="Building Name" v-model="update_building.id" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="text" name="name" placeholder="Building Name" v-model="update_building.name" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="text" name="address" placeholder="Building Address" v-model="update_building.address" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="text" name="developer" placeholder="Developer" v-model="update_building.developer" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <select v-model="update_building.parking" class="select select-bordered w-full max-w-xs mt-2 text-sm font-semibold uppercase tracking-widest">
                            <option disabled value="">Parking Facility</option>
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                        </select>
                        <select v-model="update_building.area" class="select select-bordered w-full max-w-xs mt-2 text-sm font-semibold uppercase tracking-widest">
                            <option disabled value="">Area</option>
                        
                            <option value="Mirpur-1">Mirpur-1</option>
                            <option value="Mirpur-2">Mirpur-2</option>
                            <option value="Mirpur-6">Mirpur-6</option>
                            <option value="Mirpur-7">Mirpur-7</option>
                            <option value="Mirpur-10">Mirpur-10</option>
                            <option value="Mirpur-11">Mirpur-11</option>
                            <option value="Mirpur-12">Mirpur-12</option>
                            <option value="Mirpur-13">Mirpur-13</option>
                            <option value="Mirpur-14">Mirpur-14</option>
                        </select>
                        <select v-model="update_building.city" class="select select-bordered w-full max-w-xs mt-2 text-sm font-semibold uppercase tracking-widest">
                            <option disabled value="">City</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Others">Others</option>
                        </select>
                        <select v-model="update_building.district" class="select select-bordered w-full max-w-xs mt-2 text-sm font-semibold uppercase tracking-widest">
                            <option disabled value="">District</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Others">Others</option>
                        </select>
                        <select v-model="update_building.postal_code" class="select select-bordered w-full max-w-xs mt-2 text-sm font-semibold uppercase tracking-widest">
                            <option disabled value="">Postal Code</option>
                            <option value="1216">1216</option>
                            <option value="Others">Others</option>
                        </select>
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="date" name="date" placeholder="Developed Date" v-model="update_building.date" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <form method="dialog">
                            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button v-on:click="updateBuilding" class="btn inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white">Update</button>
                        </form>

                        
                    </div>
                </section>

            </dialog>
            <dialog id="my_modal_1" class="modal">

                <section class="modal-box overflow-hidden rounded-lg  shadow-2xl ">

                    <div class="details flex place-content-center">

                        <div class="flow-root w-9/12 rounded-lg border border-gray-100 py-3 shadow-sm">
                            <dl class="-my-3 divide-y divide-gray-100 text-sm">

                                <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                    <dt class="font-medium text-gray-900">Building Name</dt>
                                    <dd class="text-gray-700 sm:col-span-2">{{ update_building.name }}</dd>
                                </div>

                                <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                    <dt class="font-medium text-gray-900">Building Address</dt>
                                    <dd class="text-gray-700 sm:col-span-2">{{ update_building.address }}</dd>
                                </div>

                                <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                    <dt class="font-medium text-gray-900">Developer</dt>
                                    <dd class="text-gray-700 sm:col-span-2">{{ update_building.developer }}</dd>
                                </div>
                                <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                    <dt class="font-medium text-gray-900">Location/Area</dt>
                                    <dd class="text-gray-700 sm:col-span-2">{{ update_building.area }}</dd>
                                </div>

                                <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                    <dt class="font-medium text-gray-900">Developed Date</dt>
                                    <dd class="text-gray-700 sm:col-span-2">
                                        {{ update_building.date}}
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
        </div>
        <div class="mb-10 mt-10">
            <div class="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 mt-24 h-auto">

                <a href="#" class="block rounded-lg p-4 shadow-sm shadow-indigo-100" v-for="item in buildings" :key="item.id">
                    <img alt="Home" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" class="h-56 w-full rounded-md object-cover" />

                    <div class="mt-2">
                        <dl>
                            <div class="flex place-content-center">
                                <dd class=" text-gray-500 font-medium">{{ item.name }}</dd>
                            </div>
                        </dl>

                        <div class="button-group flex place-content-center">
                            <span class="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm mt-3">
                                <button v-on:click="getBuildingId(item.id)" onclick="my_modal_3.showModal()" class="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
                                    Edit
                                </button>

                                <button v-on:click="getBuildingId(item.id)" onclick="my_modal_1.showModal()" class="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
                                    View
                                </button>

                                <button v-on:click="deleteBuilding(item.id)" class="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
                                    Delete
                                </button>
                            </span>
                        </div>

                    </div>
                </a>

            </div>
        </div>

    </div>

    <FooterComponent />
</body>
</template>

<script>
import NavComponentOwner from './NavComponentOwner.vue'
import FooterComponent from './FooterComponent.vue';
import axios from 'axios';
export default {
    name: "BuildingComponentOwner",
    data() {
        return {
            owner: [],

            buildings: [],
            // building_Ids: [],for getting building id in a array then send it to the mounted parameter and use params to get data
            post_building: {

                post_id: '',
                name: '',
                address: '',
                developer: '',
                area: '',
                parking: '',
                city: '',
                district: '',
                postal_code: '',
                date: ''
            },
            update_building: {
                owner_Id: '',
                id: '',
                name: '',
                address: '',
                developer: '',
                area: '',
                parking: '',
                city: '',
                district: '',
                postal_code: '',
                date: ''
            }
        }

    },
    components: {
        NavComponentOwner,
        FooterComponent,
    },
    methods: {
        async getBuildingId(id) {
            let getBuildingId = await axios.get("http://127.0.0.1:8000/api/Api/Building/Table/" + id);
            this.update_building.id = getBuildingId.data.data.id;
            this.update_building = getBuildingId.data.data
            // console.warn(getBuildingId);
            console.warn(this.update_building.id)
        },
        async updateBuilding() {
            let users = localStorage.getItem('users-info');

            this.update_building.owner_Id = JSON.parse(users).id
            const updateBuilding = await axios.put("http://127.0.0.1:8000/api/Api/Building/Updated/" + this.update_building.id, {
                owner_Id: this.update_building.owner_Id,
                name: this.update_building.name,
                address: this.update_building.address,
                developer: this.update_building.developer,
                area: this.update_building.area,
                parking: this.update_building.parking,
                city: this.update_building.city,
                district: this.update_building.district,
                postal_code: this.update_building.postal_code,
                date: this.update_building.date
            })
            console.warn(updateBuilding)

            if (updateBuilding.status == 200) {
                this.loadData();
            }
        },
        async deleteBuilding(id) {
            const deleteBuilding = await axios.delete("http://127.0.0.1:8000/api/Api/DeleteBuilding/" + id);
            if (deleteBuilding.status == 200) {
                this.loadData();
            }
        },

        async post_building_data() {
            let users = localStorage.getItem('users-info');

            this.post_building.post_id = JSON.parse(users).id

            const post = await axios.post("http://127.0.0.1:8000/api/Api/Building/Create_Form_Post", {
                owner_Id: this.post_building.post_id,
                name: this.post_building.name,
                address: this.post_building.address,
                developer: this.post_building.developer,
                area: this.post_building.area,
                parking: this.post_building.parking,
                city: this.post_building.city,
                district: this.post_building.district,
                postal_code: this.post_building.postal_code,
                date: this.post_building.date
            });

            if (post.data.status == true) {
                this.loadData();
            }
        },
        async loadData() {
            let users = localStorage.getItem('users-info');

            if (!users) {
                this.$router.push({
                    name: 'LoginPageOwner'
                })
            } else {

                this.id = JSON.parse(users).id
            }
            let id = JSON.parse(users).id
            let getData = await axios.get("http://127.0.0.1:8000/api/Api/Owner/Table/" + id);
            this.owner = getData.data.data //fetch all the data in the getData response

            const getApiImages = getData.data.data.image //fetch only images in the getData response
            let getImage = await axios.get("http://127.0.0.1:8000/api/Api/Owner/Image/" + getApiImages);
            this.image = getImage.config.url //for getting the image url and use it in the template

            let getBuildings = await axios.get("http://127.0.0.1:8000/api/Api/Building/Owner/" + id);
            this.buildings = getBuildings.data.data

            // let getBuilding = await axios.get("http://127.0.0.1:8000/api/Api/Building/Table/" + this.building_Ids); //send array of building_Ids to get data from api
            // this.buildings = getBuilding.data.data

        }
    },

    mounted() {
        this.loadData();
    }

}
</script>

<style>

</style>
