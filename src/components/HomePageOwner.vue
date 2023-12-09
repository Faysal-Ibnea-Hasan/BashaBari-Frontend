<template>
<body>
    <NavComponentOwner />

    <div class="alert alert-success" v-if="isVisible">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>You have logged in successfully!</span>
    </div>
    <div class="flex place-content-center mt-2 ">

        <img :src="image" alt="" class="h-28 w-28 rounded-full drop-shadow-xl ">
        <div class="chat mt-5 chat-start">
            <!-- <div v-for="item in items" :key="item.id" class="chat-bubble">Hello {{ item.name }}, Hope you are doing well.</div> -->
            <div class="chat-bubble">Welcome {{ name }}, Hope you are doing great!</div>

        </div>
    </div>
    <div class="flex place-content-center mt-2">

        <p>{{ currentDateTime }}</p>
    </div>
    <div class="h-screen">

        
        
        <div class="details mt-5 flex place-content-center">

            <div class="flow-root w-6/12 rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl class="-my-3 divide-y divide-gray-100 text-sm">
                    
    
                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Name</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ owner.name }}</dd>
                    </div>
    
                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Mobile</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ owner.mobile }}</dd>
                    </div>
    
                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Address</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ owner.address }}</dd>
                    </div>
    
                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">National ID</dt>
                        <dd class="text-gray-700 sm:col-span-2">
                            {{ owner.nid }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>

    </div>

    <FooterComponent />
</body>
</template>

<script>
import NavComponentOwner from './NavComponentOwner.vue';
import HeroComponent from './HeroComponent.vue';
import FooterComponent from './FooterComponent.vue';
import axios from 'axios';

export default {
    name: "HomePageOwner",
    data() {
        return {
            owner: [],
            name: null,
            mobile: null,
            image: JSON.parse(localStorage.getItem('users-info')).image,
            id: '',
            isVisible: false,
            currentDateTime: '',
        }
    },
    components: {
        NavComponentOwner,
        HeroComponent,
        FooterComponent
    },
    methods: {
        showAlart() {
            this.isVisible = true;
            setTimeout(() => {
                this.isVisible = false;
            }, 5000)
        },
        updateDateTime() {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            this.currentDateTime = now.toLocaleDateString(undefined, options);
        }
    },
    created() {
        this.updateDateTime();
        setInterval(this.updateDateTime, 1000);

        // Start a timer to increment the count every second
        setInterval(this.incrementCount, 1000);
    },

    async mounted() {
        let users = localStorage.getItem('users-info');

        if (!users) {
            this.$router.push({
                name: 'LoginPageOwner'
            })
        } 
        else {
            this.name = JSON.parse(users).name
            this.mobile = JSON.parse(users).mobile
            this.id = JSON.parse(users).id
        }
        const id = JSON.parse(users).id
        let getData = await axios.get("https://shomadhan.top/admin/api/Api/Owner/Table/" + id);
        this.owner = getData.data.data //fetch all the data in the getData response
        

        // const getApiImages = getData.data.data.image //fetch only images in the getData response
        // let getImage = await axios.get("https://shomadhan.top/admin/api/Api/Owner/Image/" + getApiImages);
        // this.image = getImage.config.url //for getting the image url and use it in the blade
        // console.log(getApiImages);

        // this.showAlart();

    },

    // methods: {
    //     loadData() {
    //         let users = localStorage.getItem('users-info');
    //         this.name = JSON.parse(users).name
    //         this.mobile = JSON.parse(users).mobile

    //         if (!users) {
    //             this.$router.push({
    //                 name: 'HomePageOwner'
    //             });
    //         }

    //         //  await axios.get("https://shomadhan.top/admin/api/Api/Owner/Table")
    //         //     .then(response => {
    //         //         this.items = response.data.data
    //         //     })
    //         //     .catch(error => {
    //         //         console.error('Error loading',error)
    //         //     })
    //     }
    // },
    // mounted() {

    //     this.loadData();
    // }

}
</script>

<style>

  </style>
