<template>
<body>
    <div v-if="isLogin">
        <NavComponentTenant />
    </div>
    <div v-if="isNotLogin">
        <NavComponent />
    </div>
    <div class="h-auto">
        <div class="details mt-5 flex place-content-center">

            <div class="flow-root w-6/12 rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl class="-my-3 divide-y divide-gray-100 text-sm" v-for="item in building_details" :key="item.id">

                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Building Name</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ item.name }}</dd>
                    </div>
                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Address</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ item.address }}</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Developer</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ item.developer }}</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Developed Date</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ item.date }}</dd>
                    </div>
                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Owner</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ owner_name }}</dd>
                    </div>
                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Owner's Contact Number</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ owner_mobile }}</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Parking Facility</dt>
                        <dd class="text-gray-700 sm:col-span-2">
                            {{ item.parking }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
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
                            <dt class="font-medium text-gray-900">Building ID</dt>
                            <dd class="text-gray-700 sm:col-span-2">{{ popup.building_Id }}</dd>
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
        <div class="flex mt-10 mb-10 place-content-center">
            <div class="h-32 w-64">
            <select v-on:click="get_building_flats" v-model="status" class="select w-full max-w-xs">
                <option value="">All</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
                <option value="Will Be Available">Will Be Available</option>
                
            </select>
        </div>
        </div>

        <div class="mt-10 mb-10 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div class="indicator" v-for="item in buildings_flats" :key="item.id">
                <span v-if="item.status == 'Not Available'" class="indicator-item badge badge-error">{{ item.status }}</span>
                <span v-else-if="item.status == 'Will Be Available'" class="indicator-item badge badge-primary">{{ item.status }}</span>
                <span v-else-if="item.status == 'Available'" class="indicator-item badge badge-success">{{ item.status }}</span>
                <a href="#" onclick="my_modal_3.showModal()" v-on:click="get_flat_details_popup(item.id)" class="block rounded-lg p-4 shadow-sm shadow-indigo-100" >
                

                    <img alt="Home" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" class="h-56 w-full rounded-md object-cover" />
                

                    <div class="mt-2">
                        <dl>
                            <div>
                                <dt class="sr-only">Rent</dt>

                                <dd class="text-sm text-gray-500">৳{{ item.rent_value }}</dd>
                            </div>

                            <div class="flex place-content-between">
                                <div>
                                    <dt class="sr-only">Unit Name</dt>
                                    <dd class="font-medium">{{ item.unit_name }}</dd>
                                </div>

                                <div class="flex flex-row gap-2">
                                    <dd class="w-auto ps-2 pe-2 text-sm text-center text-white rounded-full bg-cyan-500">{{ item.rent_type }}</dd>
                                    <dd class="w-auto ps-2 pe-2 text-sm text-center text-white rounded-full bg-cyan-500">{{ item.rent_package }}</dd>
                                </div>

                            </div>
                        </dl>
                        <div class="flex">
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
import axios from 'axios'
import NavComponentTenant from './NavComponentTenant.vue';
import NavComponent from './NavComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
    name: "FindFlatComponentTenant",
    data() {
        return {
            owner_Id: '',
            owner_name: '',
            owner_mobile: '',
            popup: [],
            buildings_flats: [],
            building_details: [],
            status: '',
            isLogin: false,
            isNotLogin: false
            
        }
    },
    components: {
        NavComponentTenant,
        NavComponent,
        FooterComponent
    },
    methods: {
        check_tenant() {
            let users = localStorage.getItem('tenant-info');

            if (!users) {
                this.isNotLogin = true
                // this.$router.push({
                //     name: 'LoginPageTenant'
                // })
            }
            else if(users){
                this.isLogin = true
            }
        },
        async get_building_flats() {

            let get_building_flats = await axios.post(`https://shomadhan.top/admin/api/Api/Flat/TableByBuilding?building_Id=${this.$route.params.building_Id}`,{
                status:this.status
            });
            let responseData = get_building_flats.data.data
            this.buildings_flats = responseData
            // if(this.buildings_flats.map(item=>item.status == "Not Available")){
            //     this.badge = 'bg-red-500';
            // }
            // else if(this.buildings_flats.map(item=>item.status == "Will Be Available")){
            //     this.badge = 'bg-red-100';
            // }
            
            //console.warn(this.buildings_flats.map(item=>item.status == "Not Available"));
        },
        async get_building_details() {
            let get_building_details = await axios.get("https://shomadhan.top/admin/api/Api/Building/ByBuilding_Id/" + this.$route.params.building_Id);
            let response = get_building_details.data.data
            this.building_details = response
            this.owner_Id = this.building_details[0].owner_Id
            // console.warn(this.owner_Id)

            let get_owner_details = await axios.get("https://shomadhan.top/admin/api/Api/Owner/Table/" + this.owner_Id);
            let response2 = get_owner_details.data.data
            this.owner_name = response2.name
            this.owner_mobile = response2.mobile
            // console.warn(response2);
        },
        async get_flat_details_popup(id) {
            let get_flat_details_popup = await axios.get("https://shomadhan.top/admin/api/Api/Flat/Table/" + id);
            let responseData = get_flat_details_popup.data.data
            // console.warn(responseData);

            this.popup = responseData
        },
        

    },
    
    mounted() {
        this.check_tenant();
        this.get_building_flats();
        this.get_building_details();

    }

}
</script>

<style>

</style>
