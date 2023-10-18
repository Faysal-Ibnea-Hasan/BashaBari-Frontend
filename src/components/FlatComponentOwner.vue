<template>
<body>
    <NavComponentOwner />
    <div class="h-auto">
        <!-- Card Blog -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <!-- Grid -->
            <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                <!-- Card -->
                <a class="group rounded-xl overflow-hidden" href="#" v-for="item in owner_buildings" :key="item.id">
                    <div class="sm:flex">
                        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                            <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
                        </div>

                        <div class="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                                {{ item.name }}
                            </h3>
                            <p class="mt-3 text-gray-600 dark:text-gray-400">
                                {{ item.building_Id }}
                            </p>
                            <router-link :to="'/flat-details-owner/' + item.building_Id"> <!--catch and send the building_Id to the route-->

                                <p class="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                                    See Flats
                                    <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </p>
                            </router-link>
                            </div>
                    </div>
                </a>
                <!-- End Card -->
            </div>
            <!-- End Grid -->
        </div>
        <!-- End Card Blog -->
    </div>

                

                

                
    <FooterComponent />
</body>
</template>

<script>
import NavComponentOwner from "../components/NavComponentOwner.vue"
import FooterComponent from "../components/FooterComponent.vue"
import axios from 'axios'

export default {
    name: "FlatComponentOwner",
    data() {
        return {
            owner_Id: '',
            owner_buildings:[],
            
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
        async get_owner_building() {
            let users = localStorage.getItem('users-info');
            const id = JSON.parse(users).id
            this.owner_Id = id

            let get_owner_building = await axios.get("http://127.0.0.1:8000/api/Api/Building/Owner/" + this.owner_Id);
            let responseData = get_owner_building.data.data
            this.owner_buildings = responseData
            console.warn(this.owner_buildings);
        }
    },
    mounted() {
        this.check_owner();
        this.get_owner_building();
    },
}
</script>

<style>

</style>
