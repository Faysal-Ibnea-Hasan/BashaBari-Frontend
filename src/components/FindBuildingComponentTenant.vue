<template>
<body>
    <NavComponentTenant />
    <div class="h-auto">
        
        
        <div class="flex mt-10 mb-10 place-content-center">
            <div class="h-32 w-64">
            <select v-on:click="get_buildings_byArea" v-model="area" class="select w-full max-w-xs">
                <option value="">Please Select Area</option>
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
        </div>
        </div>
        

        <div class="grid mt-10 mb-10 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            
                <router-link :to="'/find-flats/' + item.building_Id" href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8" v-for="item in buildings" :key="item.id">
                <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                <div class="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                            {{ item.name }}
                        </h3>

                        <p class="mt-1 text-xs font-medium text-gray-600">{{ item.building_Id }}</p>
                    </div>

                    <div class="hidden sm:block sm:shrink-0">
                        <img alt="Paul Clapton" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" class="h-16 w-16 rounded-lg object-cover shadow-sm" />
                    </div>
                </div>

                <div class="mt-4">
                    <p class="max-w-[40ch] text-sm text-gray-500">
                        {{ item.address }}
                    </p>
                </div>

                <dl class="mt-6 flex gap-4 sm:gap-6">
                    <div class="flex flex-col-reverse">
                        <dt class="text-sm font-medium text-gray-600">Area</dt>
                        <dd class="text-xs text-gray-500">{{ item.area }}</dd>
                    </div>

                    <div class="flex flex-col-reverse">
                        <dt class="text-sm font-medium text-gray-600">Parking Facility</dt>
                        <dd class="text-xs text-gray-500">{{ item.parking }}</dd>
                    </div>
                </dl>
            </router-link>
        
            
        </div>

    </div>
    <FooterComponent />
</body>
</template>

<script>
import axios from 'axios'
import NavComponentTenant from './NavComponentTenant.vue';
import FooterComponent from './FooterComponent.vue';

export default {
    name: "FindBuildingComponentTenant",
    data() {
        return {
            buildings: [],
            area: '',
        }
    },
    components: {
        NavComponentTenant,
        FooterComponent
    },
    methods: {
        check_tenant() {
            let users = localStorage.getItem('tenant-info');

            if (!users) {
                this.$router.push({
                    name: 'LoginPageTenant'
                })
            }
        },
        async get_buildings() {
            let get_buildings = await axios.get("https://shomadhan.top/admin/api/Api/Building/Table");
            let response = get_buildings.data.data
            this.buildings = response
            //console.warn(response)
        },
        async get_buildings_byArea() {
            let get_buildings_byArea = await axios.post("https://shomadhan.top/admin/api/Api/Building/ByArea", {
                area: this.area
            });
            let response = get_buildings_byArea.data.data
            this.buildings = response

        }
    },
    mounted() {
        this.check_tenant();
        this.get_buildings();
    }
}
</script>

<style>

</style>
