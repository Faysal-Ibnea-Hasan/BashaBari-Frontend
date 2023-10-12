<template>
<body>
    <div class="alert alert-success" v-if="isVisible">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Your purchase has been confirmed!</span>
    </div>

    <div class="hero min-h-screen bg-base-200">

        <div class="hero-content flex-col lg:flex-row">
            <img src="../assets/images/welcome_photo.jpg" class="max-w-sm rounded-lg shadow-2xl" />
            <div class="ms-4">
                <h1 class="text-5xl font-bold">Welcome To BashaBari!</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <!-- You can open the modal using ID.showModal() method -->
                <button class="btn btn-primary" onclick="my_modal_3.showModal()">Get Started</button>
                <dialog id="my_modal_3" class="modal">
                    <div class="modal-box">
                        <form method="dialog">
                            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                        <div class="flex items-center justify-center">

                            <div class="flex  w-3/4">
                                <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center hover:bg-neutral-content ">
                                    <router-link to="/login-owner">Owner</router-link>
                                </div>
                                <div class="divider divider-horizontal">OR</div>
                                <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center hover:bg-neutral-content">
                                    <router-link to="/register-tenant">Tenant</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    </div>
    <div class="hero min-h-[75vh] bg-base-200 flex justify-between ">

        <div class="card w-96 bg-base-100 shadow-xl -mt-28 ">
            <figure class="px-10 pt-10">
                <img src="../assets/images/pic-1.jpg" alt="Shoes" class="rounded-xl h-40 w-40" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">New Owner ?</h2>
                <p>If a you are a new owner, we have to verify you first.</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Verify</button>
                </div>
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl -mt-28 ">
            <figure class="px-10 pt-10">
                <img src="../assets/images/pic-1.jpg" alt="Shoes" class="rounded-xl h-40 w-40" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">What are we ?</h2>
                <p>We would like to let you know about us and our pupose.</p>
                <div class="card-actions">
                    <button class="btn btn-primary">About Us</button>
                </div>
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl -mt-28 ">
            <figure class="px-10 pt-10">
                <img src="../assets/images/pic-1.jpg" alt="Shoes" class="rounded-xl h-40 w-40" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Any Query?</h2>
                <p>You can reach us anytime <br> you want. </p>
                <div class="card-actions">
                    <button class="btn btn-primary">Contact Us</button>
                </div>
            </div>
        </div>
    </div>

</body>
</template>

<script>
export default {
    name: 'HeroComponent',
    data(){
        return {
            isVisible: false,
        }
    },
    methods:{
        showAlart(){
            this.isVisible = true;
            setTimeout(()=>{
                this.isVisible = false;
            },5000)
        }
    },
    mounted(){
        this.showAlart();
    }
    
}
</script>
