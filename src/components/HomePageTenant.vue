<template>
<body>
    <NavComponentTenant />
    <!-- <div class="alert alert-success" v-if="isVisible">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>You have logged in successfully!</span>
    </div> -->
    <!-- Announcement Banner -->
    <div class="max-w-[85rem] mt-10 px-4 sm:px-6 lg:px-8 mx-auto">

        <div :style="{ backgroundImage:'url('+backgroundImage+')'}" class=" bg-no-repeat bg-cover bg-center p-4 rounded-md text-center">
            <p class="mr-2 inline-block text-white">
                Hello <strong>{{ name }}</strong>, Your Tenant ID is
            </p>
            <div class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-full border-2 border-white font-semibold text-white hover:bg-white/[.1] hover:border-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 transition-all text-sm" href="../figma.html">
                {{ tenant.tenant_Id }}

            </div>
        </div>
    </div>
    <!-- End Announcement Banner -->
    <div class="h-auto">
        <!--Chat Bubble

            <div class="chat ms-5 mt-5 chat-start">
                 <div v-for="item in items" :key="item.id" class="chat-bubble">Hello {{ item.name }}, Hope you are doing well.</div> 
                <div class="chat-bubble">Hello {{ name }}, Hope you are doing well.</div>

            </div>
            <div class="chat ms-5 mt-5 chat-start">
                <div class="chat-bubble">Your mobile number is {{ mobile }} .</div>
            </div>
        -->

        <section>
            <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div class="bg-purple-500 p-8 md:p-12 lg:px-16 lg:py-24">
                        <div class="mx-auto max-w-xl mt-10 text-center">
                            <h2 class="text-2xl font-bold text-white md:text-3xl">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                            </h2>

                            <p class="hidden text-white/90 sm:mt-4 sm:block">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                                tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
                                et fermentum, augue. Aliquet amet volutpat quisque ut interdum
                                tincidunt duis.
                            </p>

                            <div class="mt-4 md:mt-8">
                                <router-link to="/find-buildings">

                                    <button class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400">
                                        Find Your Next Home
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1">
                        <img alt="Student" src="../assets/images/house-demo-1.jpg" class="h-40 w-full object-cover sm:h-56 md:h-full" />

                        <!-- <img alt="Student" src="../assets/images/home-demo-2.jpg" class="h-40 w-full object-cover sm:h-56 md:h-full" /> -->
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
            tenant: [],
            image: '',
            backgroundImage: ('src/assets/images/subtle-prism.svg')
        }
    },

    components: {
        NavComponentTenant,
        HeroComponent,
        FooterComponent
    },
    methods: {
        // showAlert() {
        //     this.isVisible = true
        //     setTimeout(() => {
        //         this.isVisible = false;
        //     }, 5000)

        // },
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

        // this.showAlert();

    },

}
</script>

<style>

</style>
