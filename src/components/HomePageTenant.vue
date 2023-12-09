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

        <div class=" bg-no-repeat bg-cover bg-purple-700 bg-center p-4 rounded-md text-center">
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
        <!-- Masonry Cards -->
        <div class="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <!-- Grid -->
            <div class="grid sm:grid-cols-12 gap-6">
                <div class="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
                    <!-- Card -->
                    <router-link to="/find-buildings" class="group relative block rounded-xl overflow-hidden" href="#">
                        <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                            <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="../assets/images/house-demo-1.jpg" alt="Image Description">
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                            <div class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                                Find Your Next Home
                            </div>
                        </div>
                    </router-link>
                    <!-- End Card -->
                </div>
                <!-- End Col -->

                <div class="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
                    <!-- Card -->
                    <router-link to="/create-search-agent" class="group relative block rounded-xl overflow-hidden" >
                        <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                            <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description">
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                            <div class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                                Create Search Agent
                            </div>
                        </div>
                    </router-link>
                    <!-- End Card -->
                </div>
                <!-- End Col -->

                <div class="col-span-12 md:col-span-4">
                    <!-- Card -->
                    <router-link to="/residential-details" class="group relative block rounded-xl overflow-hidden" href="#">
                        <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                            <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                            <div class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                                Your Residential Details
                            </div>
                        </div>
                    </router-link>
                    <!-- End Card -->
                </div>
                <!-- End Col -->

                <div class="col-span-12 sm:col-span-6 md:col-span-4">
                    <!-- Card -->
                    <a class="group relative block rounded-xl overflow-hidden" href="#">
                        <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                            <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="Image Description">
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                            <div class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                                Problem and Support
                            </div>
                        </div>
                    </a>
                    <!-- End Card -->
                </div>
                <!-- End Col -->

                <div class="col-span-12 sm:col-span-6 md:col-span-4">
                    <!-- Card -->
                    <a class="group relative block rounded-xl overflow-hidden" href="#">
                        <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                            <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1019&q=80" alt="Image Description">
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                            <div class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                                Empowered management
                            </div>
                        </div>
                    </a>
                    <!-- End Card -->
                </div>
                <!-- End Col -->
            </div>
            <!-- End Grid -->
        </div>
        <!-- End Masonry Cards -->

        <!-- <section>
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

                         <img alt="Student" src="../assets/images/home-demo-2.jpg" class="h-40 w-full object-cover sm:h-56 md:h-full" /> 
                    </div>
                </div>
            </div>
        </section> -->

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
            tenant_Id: '',
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
                this.tenant_Id = JSON.parse(users).tenant_Id
            }
        },
        async getData_Tenant() {
            let users = localStorage.getItem('tenant-info');
            const id = JSON.parse(users).id
            let getData = await axios.get("https://shomadhan.top/admin/api/Api/Tenant/Table/" + id);
            //console.warn(getData);
            this.tenant = getData.data.data //fetch all the data in the getData response
            this.image = getData.data.imageUrl
            //console.warn(this.image);
        },
       // async get_rent_by_tenantID() {
           // let get_assign_by_tenantID = await axios.get("https://shomadhan.top/admin/api/Api/Rent/Tenant/" + this.tenant_Id)
            //localStorage.setItem("status", JSON.stringify(get_assign_by_tenantID.data.status));
            // let status = localStorage.getItem("status");
            // this.status = JSON.parse(status);
            //console.warn(this.status)
        //}

    },
    mounted() {
        this.check_tenant();
        this.getData_Tenant();
        //this.get_rent_by_tenantID();

        // this.showAlert();

    },

}
</script>

<style>

</style>
