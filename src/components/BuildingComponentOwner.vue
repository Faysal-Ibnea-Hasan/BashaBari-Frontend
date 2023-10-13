<template>
<body>
    <NavComponentOwner />
    <div class="h-screen">
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 mt-28" >
            <div class="h-48  rounded-lg bg-gray-200" v-for="item in buildings" :key="item.id">
                <div class="card h-48 rounded-lg card-side bg-base-100 shadow-xl">
                    <figure><img src="../assets/images/welcome_photo.jpg" alt="Movie" class="h-32 w-32 ms-2" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ item.name }}</h2>
                        <p>Address: {{ item.address }}</p>
                        <p>Developer: {{ item.developer }}</p>
                        <p>Developed Date: {{ item.date }}</p>
                        
                    </div>
                </div>
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
            owner:[],
            buildings:[],
            building_Ids:[],//for getting building id in a array then send it to the mounted parameter and use params to get data
            
        }
    },
    components: {
        NavComponentOwner,
        FooterComponent,
    },
    async mounted(building_Ids) {
        let users = localStorage.getItem('users-info');

        if (!users) {
            this.$router.push({
                name: 'LoginPageOwner'
            })
        } else {

            this.id = JSON.parse(users).id
        }
        const id = JSON.parse(users).id
        let getData = await axios.get("http://127.0.0.1:8000/api/Api/Owner/Table/" + id);
        this.owner = getData.data.data //fetch all the data in the getData response

        const getApiImages = getData.data.data.image //fetch only images in the getData response
        let getImage = await axios.get("http://127.0.0.1:8000/api/Api/Owner/Image/" + getApiImages);
        this.image = getImage.config.url //for getting the image url and use it in the template

        let getAssign = await axios.get("http://127.0.0.1:8000/api/Api/Own/Assign/" + id);
         this.building_Ids   = getAssign.data.data
         

         let getBuilding = await axios.get("http://127.0.0.1:8000/api/Api/Building/Table/", {params: {building_Ids: building_Ids}}); //send array of building_Ids to get data from api
         this.buildings = getBuilding.data.data
         console.log(this.buildings);
        

    },

}
</script>

<style>

</style>
