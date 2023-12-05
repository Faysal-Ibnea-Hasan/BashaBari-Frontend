<template>
<body>
    <NavComponentOwner />
    <div class="h-auto">
        
        

        <dialog id="my_modal_1" class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Are You Sure?</h3>
                <p class="py-4">You Want To Remove Your Tenant </p>
                <div class="modal-action">
                    
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn btn-error " v-on:click="remove_tenant()">Confirm</button>
                        <button class="btn btn-neutral ms-2">Cancel</button>
                    </form>
                </div>
            </div>
        </dialog>
        <div class="overflow-x-auto">
            <table class="table table-zebra">
                <!-- head -->
                <thead>
                    <tr>
                        <th>Owner ID</th>
                        <th>Building ID</th>
                        <th>Flat ID</th>
                        <th>Tenant</th>
                        <th>Joined Date</th>
                        <!-- <th>Left Date</th> -->
                        
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->

                    <tr v-for="item in assignData" :key="item.id">

                        <td>{{ item.owner_Id }}</td>
                        <td>{{ item.building_Id }}</td>
                        <td>{{ item.flat_Id }}</td>
                        <td>{{ item.tenants.name }} ({{ item.tenant_Id }})</td>
                        <td>{{ item.joined_at }}</td>
                        <!-- <td>{{ item.left_at }}</td> -->
                        
                        <td>
                            <button onclick="my_modal_1.showModal()" v-on:click="get_id(item.flat_Id,item.id,item.tenant_Id)" class="btn btn-sm btn-error">Remove</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
    
</body>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'
import FooterComponent from './FooterComponent.vue'
import NavComponentOwner from './NavComponentOwner.vue'

export default {
    name: 'AssignTenantComponent',
    data() {
        return {
            assignData: [],
            available_flat: [],
            owner_Id: '',
            currentDate:new Date().toISOString().split('T')[0],
            status_available: 'Available',
            tenant_Id: ref(''),
            flat_Id: ref(''),
            post_assignData: {
                owner_Id: '',
                building_Id: '',
                flat_Id: '',
                tenant_Id: '',
                joined_at: '',
            },
            assign_id: ref('')
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
        async get_assignData() {
            let users = localStorage.getItem('users-info');
            const id = JSON.parse(users).id
            this.owner_Id = id

            let response = await axios.get("https://shomadhan.top/admin/api/Api/Rent/Owner/" + this.owner_Id);
            let responseData = response.data.data
            this.assignData = responseData
            //console.warn(this.assignData)
        },
        
        async post_assignDatas() {
            let response = await axios.post("https://shomadhan.top/admin/api/Api/Rent/Create_Form_Post", {
                owner_Id: this.owner_Id,
                building_Id: this.post_assignData.building_Id,
                flat_Id: this.post_assignData.flat_Id,
                tenant_Id: this.post_assignData.tenant_Id,
            });
            if (response.data.status == true) {
                this.get_assignData();
            }
        },
        async get_id(flat_Id,id,tenant_Id) {
            this.assign_id = id
            this.flat_Id = flat_Id,
            this.tenant_Id = tenant_Id
            
           // console.warn(this.assign_id, this.flat_Id, this.tenant_Id);
        },
        async remove_tenant() {
            let remove_tenant = await axios.delete("https://shomadhan.top/admin/api/Api/DeleteRent/" + this.assign_id)
            
            if (remove_tenant.status == 200) {
                
                let update_flat_status = await axios.post("https://shomadhan.top/admin/api/Api/Flat/Status/Updated/" + this.flat_Id, {
                    
                    status: this.status_available,
                })
                let update_tenant = await axios.post("https://shomadhan.top/admin/api/Api/RentLog/UpdatedDate/" + this.tenant_Id,{
                    left_at:this.currentDate
                })
                let update_assign_status = await axios.post("https://shomadhan.top/admin/api/Api/Tenant/UpdatedStatus/" + this.tenant_Id,{
                    assign_status: 0
                })
                this.get_assignData();
            }

        }
    },
    mounted() {
        this.get_assignData();
        this.check_owner();
        
    }
}
</script>

<style>

</style>
