<template>
  <body>
    <NavComponentTenant/>
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
    <FooterComponent/>
  </body>
</template>

<script>
import NavComponentTenant from './NavComponentTenant.vue';
import HeroComponent from './HeroComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
    name:"HomePageTenant",
    data(){
      return {
        name:'',
        mobile:'',
        isVisible:false
      }
    },
    methods:{ 
      showAlert(){
        this.isVisible = true
        setTimeout(()=>{
                this.isVisible = false;
            },5000)

      }
    },
    components:{
        NavComponentTenant,
        HeroComponent,
        FooterComponent
    },
    mounted() {
        let users = localStorage.getItem('tenant-info');
        
        if (!users) {
            this.$router.push({
                name: 'LoginPageTenant'
            })
        }
        else{
            this.name = JSON.parse(users).name
            this.mobile = JSON.parse(users).mobile
        }
        this.showAlert();
        
       
        
        
        
        
    },
    

}
</script>

<style>

</style>
