<template>
<body>
    <NavComponentOwner />
    <div class="h-auto">
        
        <div>
            <!-- Open the modal using ID.showModal() method -->
            <button class="btn" onclick="my_modal_2.showModal()">open modal</button>
            <dialog id="my_modal_2" class="modal">

                <section class="modal-box overflow-hidden rounded-lg  shadow-2xl md:grid md:grid-cols-3">
                    <img alt="Trainer" src="../assets/images/pic-1.jpg" class="h-32 w-full object-cover md:h-full" />

                    <div class="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
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
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            <input type="date" placeholder="Developed Date" v-model="post_building.date" class="input input-bordered w-full max-w-xs mt-2" />
                        </p>
                        <form method="dialog">

                            <button v-on:click="post_building_data" class="btn mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white">create</button>
                        </form>

                        <p class="mt-8 text-xs font-medium uppercase text-gray-400">
                            Offer valid until 24th March, 2021 *
                        </p>
                    </div>
                </section>

            </dialog>
        </div>
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 mt-28 mb-5 ">
            <div class="h-48 hover:-translate-y-1 hover:scale-110 duration-200   rounded-lg bg-gray-200" v-for="item in buildings" :key="item.id">
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
            owner: [],

            buildings: [],
            // building_Ids: [],for getting building id in a array then send it to the mounted parameter and use params to get data
            post_building: {

                post_id: '',
                name: '',
                address: '',
                developer: '',
                date: ''
            }
        }
    },
    components: {
        NavComponentOwner,
        FooterComponent,
    },
    methods: {

        async post_building_data() {
            let users = localStorage.getItem('users-info');

            this.post_building.post_id = JSON.parse(users).id

            const post = await axios.post("http://127.0.0.1:8000/api/Api/Building/Create_Form_Post", {
                owner_Id: this.post_building.post_id,
                name: this.post_building.name,
                address: this.post_building.address,
                developer: this.post_building.developer,
                date: this.post_building.date
            });
            console.warn(post);

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
