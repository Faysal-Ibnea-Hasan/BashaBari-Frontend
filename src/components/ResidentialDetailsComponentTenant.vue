<template>
<body>
    <NavComponentTenant />
    <div class="h-auto">
        <!-- Announcement Banner -->
        <div class="max-w-[85rem] mt-10 mb-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <div class="bg-blue-600 bg-[url('../svg/component/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 rounded-md text-center">
                <p class="mr-2 inline-block text-white">
                    Your Building Details
                </p>
                
            </div>
        </div>
        <!-- End Announcement Banner -->
        <!--Building Details Start-->
        <div class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
            <dl class="-my-3 divide-y divide-gray-100 text-sm" v-for="item in building_details" :key="item.id">
                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Title</dt>
                    <dd class="text-gray-700 sm:col-span-2">Mr</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Building Name</dt>
                    <dd class="text-gray-700 sm:col-span-2">{{ item.name }}</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Developer</dt>
                    <dd class="text-gray-700 sm:col-span-2">{{ item.developer }}</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Building ID</dt>
                    <dd class="text-gray-700 sm:col-span-2">{{ item.building_Id }}</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Address</dt>
                    <dd class="text-gray-700 sm:col-span-2">
                        {{ item.address }}
                    </dd>
                </div>
            </dl>
        </div>
        <!--Building Details End-->
        <!-- Announcement Banner -->
        <div class="max-w-[85rem] mt-10 mb-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <div class="bg-blue-600 bg-[url('../svg/component/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 rounded-md text-center">
                <p class="mr-2 inline-block text-white">
                    Your Flat Details
                </p>
                
            </div>
        </div>
        <!-- End Announcement Banner -->
        <!--Flat Details Start-->
        <div class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
            <dl class="-my-3 divide-y divide-gray-100 text-sm" v-for="item in flat_details" :key="item.id">
                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Flat ID</dt>
                    <dd class="text-gray-700 sm:col-span-2">{{ item.flat_Id }}</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Flat Name</dt>
                    <dd class="text-gray-700 sm:col-span-2">{{ item.unit_name }}</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Floor</dt>
                    <dd class="text-gray-700 sm:col-span-2">{{ item.floor }}</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Room</dt>
                    <dd class="text-gray-700 sm:col-span-2">{{ item.room }}</dd>
                </div>

                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Washroom</dt>
                    <dd class="text-gray-700 sm:col-span-2">
                        {{ item.washroom }}
                    </dd>
                </div>
                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Balconi</dt>
                    <dd class="text-gray-700 sm:col-span-2">
                        {{ item.balconi }}
                    </dd>
                </div>
                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Rent Value</dt>
                    <dd class="text-gray-700 sm:col-span-2">
                        {{ item.rent_value }}
                    </dd>
                </div>
            </dl>
        </div>
        <!--Flat Details End-->
    </div>
    <FooterComponent />
</body>
</template>

<script>
import NavComponentTenant from './NavComponentTenant.vue';
import FooterComponent from './FooterComponent.vue';
import axios from 'axios';

export default {
    name: "ResidentialDetailsComponentTenant",
    data() {
        return {
            tenant_details: [],
            rent_details: [],
            building_details: [],
            flat_details: [],
            tenant_Id: '',
            owner_Id: '',
            building_Id: '',
            flat_Id: '',
        }
    },
    components: {
        NavComponentTenant,
        FooterComponent,
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
        },
        async get_tenant_details() {
            const get_tenant_details = await axios.get("https://shomadhan.top/admin/api/Api/Tenant/TableById/" + this.tenant_Id)
            let responseData = get_tenant_details.data.data
            this.tenant_details = responseData
            // console.warn(this.tenant_details);
        },
        async get_tenant_rent_details() {
            const get_tenant_rent_details = await axios.get("https://shomadhan.top/admin/api/Api/Rent/Tenant/" + this.tenant_Id);
            let responseData = get_tenant_rent_details.data.data;
            this.rent_details = responseData
            //console.warn(responseData);
            this.owner_Id = this.rent_details.owner_Id;
            this.building_Id = this.rent_details.building_Id;
            this.flat_Id = this.rent_details.flat_Id;

            const get_tenant_building_details = await axios.get("https://shomadhan.top/admin/api/Api/Building/ByBuilding_Id/" + this.building_Id);
            let responseData1 = get_tenant_building_details.data.data;
            this.building_details = responseData1;

            const get_tenant_flat_details = await axios.get("https://shomadhan.top/admin/api/Api/Flat/TableByFlatID/" + this.flat_Id);
            let responseData2 = get_tenant_flat_details.data.data
            this.flat_details = responseData2
            //console.warn(get_tenant_flat_details);

        },

    },
    mounted() {
        this.check_tenant();
        this.get_tenant_details();
        this.get_tenant_rent_details();

    }

}
</script>

<style>

</style>
