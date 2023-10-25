<template>
<body>
    <NavComponentTenant />
    <div v-for="item in notice" :key="item.id" class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
        <div class="p-8 flex">
            <div class="pr-4">
                <p class="text-xl font-bold">{{ item.date }}</p>
            </div>
            <div class="ms-5 w-3/4">
                <div class="uppercase  tracking-wide text-sm text-indigo-500 font-semibold">{{ item.title }}</div>
                <p class="mt-2 text-start text-gray-500">{{ item.description }}</p>
                <!-- <p class="mt-2 text-gray-500">Event Details...</p> -->
            </div>
        </div>
    </div>
    
</body>
</template>

<script>
import NavComponentTenant from './NavComponentTenant.vue';
import FooterComponent from './FooterComponent.vue';
import axios from 'axios';

export default {
    name: "NoticeComponentTenant",
    data() {
        return {
            tenant_Id: '',
            building_Id: '',
            notice: [],
            
            
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
            } else {
                this.tenant_Id = JSON.parse(users).tenant_Id

            }
            
        },
        async get_tenant_building() {
            const get_tenant_building = await axios.get("http://127.0.0.1:8000/api/Api/Rent/Tenant/" + this.tenant_Id);
            let responseData = get_tenant_building.data.data;
            this.building_Id = responseData[0].building_Id
            // console.warn(this.building_Id)
            const get_notice_by_building_id = await axios.get("http://127.0.0.1:8000/api/Api/Notice/TableByBuildingID/" + this.building_Id);
            let responseData1 = get_notice_by_building_id.data.data
            this.notice = responseData1

            
            
            
            // console.warn(this.new_notice)
        },
        truncateDatabase(){
            setTimeout(async () => {
                let truncateData = await axios.delete("http://127.0.0.1:8000/api/Api/DeleteNoticeAfterTime")
            }, 10000);
            if(truncateData.data.status == true) {
                this.get_tenant_building();
            }
        }
         
        

    },
    mounted() {
        this.check_tenant();
        this.get_tenant_building();
        

    }

}
</script>

<style>

</style>
