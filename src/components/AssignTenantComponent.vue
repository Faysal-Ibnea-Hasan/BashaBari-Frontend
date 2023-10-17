<template>
<body>
    <NavComponentOwner />
    <div class="h-auto">
        <div class="overflow-x-auto">
            <table class="table table-zebra">
                <!-- head -->
                <thead>
                    <tr>
                        
                        <th>Building ID</th>
                        <th>Flat ID</th>
                        <th>Tenant ID</th>
                    </tr>
                </thead>
                <tbody >
                    <!-- row 1 -->
                    
                    <tr v-for="item in assignData" :key="item.id">
                        
                        <td>{{ item.building_Id }}</td>
                        <td>{{ item.flat_Id }}</td>
                        <td>{{ item.tenant_Id }}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
    <FooterComponent />
</body>
</template>

<script>
import axios from 'axios'
import FooterComponent from './FooterComponent.vue'
import NavComponentOwner from './NavComponentOwner.vue'

export default {
    name: 'AssignTenantComponent',
    data(){
        return {
            assignData:[],
        }
    },
    components: {
        NavComponentOwner,
        FooterComponent
    },
    methods: {
        async get_assignData() {
            let users = localStorage.getItem('users-info');
            const id = JSON.parse(users).id

            let response = await axios.get("http://127.0.0.1:8000/api/Api/Rent/Owner/" +id);
            let responseData = response.data.data
            this.assignData = responseData
            console.warn(this.assignData)
        }
    },
    mounted(){
        this.get_assignData();
    }
}
</script>

<style>

</style>
