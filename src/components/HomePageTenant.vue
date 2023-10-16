<template>
<body>
    <NavComponentTenant />
    <div class="alert alert-success" v-if="isVisible">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>You have logged in successfully!</span>
    </div>
    <div class="h-auto">

        <div class="chat ms-5 mt-5 chat-start">
            <!-- <div v-for="item in items" :key="item.id" class="chat-bubble">Hello {{ item.name }}, Hope you are doing well.</div> -->
            <div class="chat-bubble">Hello {{ name }}, Hope you are doing well.</div>

        </div>
        <div class="chat ms-5 mt-5 chat-start">
            <div class="chat-bubble">Your mobile number is {{ mobile }} .</div>
        </div>
        <!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
-->

        <section class="mt-10 mb-10 relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
            <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r "></div>

            <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div class="max-w-xl text-center ltr:sm:text-left ">
                    <h1 class="text-3xl font-extrabold sm:text-5xl">
                        Let us find your

                        <strong class="block font-extrabold text-rose-700">
                            Forever Home.
                        </strong>
                    </h1>

                    <p class="mt-4 max-w-lg sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                        tenetur fuga ducimus numquam ea!
                    </p>

                    <div class="mt-8 flex flex-wrap gap-4 text-center">
                        <a href="#" class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                            Get Started
                        </a>

                        <a href="#" class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </div>
    <FooterComponent />
</body>
</template>

<script>
import NavComponentTenant from './NavComponentTenant.vue';
import HeroComponent from './HeroComponent.vue';
import FooterComponent from './FooterComponent.vue';
import axios from 'axios';

export default {
    name: "HomePageTenant",
    data() {
        return {
            name: '',
            mobile: '',
            isVisible: false,
            tenant:[],
            image: '',
        }
    },
   
    components: {
        NavComponentTenant,
        HeroComponent,
        FooterComponent
    },
    methods: {
        showAlert() {
            this.isVisible = true
            setTimeout(() => {
                this.isVisible = false;
            }, 5000)

        },
        check_tenant() {
            let users = localStorage.getItem('tenant-info');

            if (!users) {
                this.$router.push({
                    name: 'LoginPageTenant'
                })
            } else {
                this.name = JSON.parse(users).name
                this.mobile = JSON.parse(users).mobile
            }
        },
        async getData_Tenant() {
            let users = localStorage.getItem('tenant-info');
            const id = JSON.parse(users).id
            let getData = await axios.get("http://127.0.0.1:8000/api/Api/Tenant/Table/" + id);
            console.warn(getData);
            this.tenant = getData.data.data //fetch all the data in the getData response
            this.image = getData.data.imageUrl
            console.warn(this.image);
        }
    },
    async mounted() {
        this.check_tenant();
        this.getData_Tenant();

        this.showAlert();

    },

}
</script>

<style>

</style>
