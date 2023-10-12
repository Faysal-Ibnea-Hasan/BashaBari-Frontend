<template>
<body>
    <NavComponentOwner />
    <div class="alert alert-success" v-if="isVisible">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>You have logged in successfully!</span>
    </div>
    <div class="h-screen">

        <div class="chat ms-5 mt-5 chat-start">
            <!-- <div v-for="item in items" :key="item.id" class="chat-bubble">Hello {{ item.name }}, Hope you are doing well.</div> -->
            <div class="chat-bubble">Hello {{ name }}, Hope you are doing well.</div>

        </div>
        <div class="chat ms-5 mt-5 chat-start">
            <div class="chat-bubble">Your mobile number is {{ mobile }} .</div>
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
            name: null,
            mobile: null,
            isVisible: false,
        }
    },
    components: {
        NavComponentOwner,
        HeroComponent,
        FooterComponent
    },
    methods:{
        showAlart(){
            this.isVisible = true;
            setTimeout(()=>{
                this.isVisible = false;
            },5000)
        }
    },
    
    mounted() {
        let users = localStorage.getItem('users-info');
        
        if (!users) {
            this.$router.push({
                name: 'LoginPageOwner'
            })
        }
        else{
            this.name = JSON.parse(users).name
            this.mobile = JSON.parse(users).mobile
        }
        
        this.showAlart();
        
        
        
        
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

    //         //  await axios.get("http://127.0.0.1:8000/api/Api/Owner/Table")
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
