<template>
<body>

    <div class="hero min-h-screen  bg-gray-50">

        <div class="hero-content mt-10 mb-10 flex-col lg:flex-row">
            <img src="../assets/images/welcome_photo.jpg" class="max-w-sm rounded-lg shadow-2xl" />
            <div class="ms-4">
                <h1 class="text-3xl font-extrabold sm:text-5xl">Welcome To BashaBari!</h1>
                <p class="mt-4 sm:text-xl/relaxed">"Welcome to the future of hassle-free living! At BashaBari, we're dedicated to simplifying the journey of finding your perfect home. Explore a world of rental possibilities where your dream space is just a click away. Start your search today and open the door to a new beginning."</p>
                <!-- You can open the modal using ID.showModal() method -->
                <button class="mt-8 inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-focus focus:outline-none focus:ring" onclick="my_modal_3.showModal()">Get Started</button>
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
    <!--Verify Owner Section Start-->
    <section class="bg-gray-50">
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div class="mx-auto max-w-xl text-center">
                <h1 class="text-3xl font-extrabold sm:text-5xl">
                    New to BashaBari?
                    <strong class="font-extrabold mt-3 text-red-700 sm:block">
                        Are you an Owner?
                    </strong>
                </h1>

                <p class="mt-4 sm:text-xl/relaxed">
                    If a you are new to our website and a new owner, we have to verify you first. <br>For further process please click on Get Started <br><strong>OR</strong><br>If you want to know more about this process please click on Learn More.
                </p>

                <div class="mt-8 flex flex-wrap justify-center gap-4">
                    <a class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto" href="/get-started">
                        Get Started
                    </a>

                    <a class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto" href="/about">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!--Verify Owner Section End-->
    <section class="bg-gray-900 text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div class="mx-auto max-w-lg text-center">
                <h2 class="text-3xl font-bold sm:text-4xl">What are we ?</h2>

                <p class="mt-4 text-gray-300">
                    We would like to let you know about us and our pupose.
                </p>
            </div>

            <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <a class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="/services/digital-campaigns">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>

                    <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

                    <p class="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                        possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                    </p>
                </a>

                <a class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="/services/digital-campaigns">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>

                    <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

                    <p class="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                        possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                    </p>
                </a>

                <a class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="/services/digital-campaigns">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>

                    <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

                    <p class="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                        possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                    </p>
                </a>

                <a class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="/services/digital-campaigns">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>

                    <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

                    <p class="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                        possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                    </p>
                </a>

                <a class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="/services/digital-campaigns">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>

                    <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

                    <p class="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                        possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                    </p>
                </a>

                <a class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="/services/digital-campaigns">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>

                    <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

                    <p class="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                        possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                    </p>
                </a>
            </div>

        </div>
    </section>
    <!-- Features -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div class="lg:col-span-7">
                <!-- Grid -->
                <div class="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                    <div class="col-span-4">
                        <img class="rounded-xl" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80" alt="Image Description">
                    </div>
                    <!-- End Col -->

                    <div class="col-span-3">
                        <img class="rounded-xl" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description">
                    </div>
                    <!-- End Col -->

                    <div class="col-span-5">
                        <img class="rounded-xl" src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description">
                    </div>
                    <!-- End Col -->
                </div>
                <!-- End Grid -->
            </div>
            <!-- End Col -->

            <div class="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                <div class="space-y-6 sm:space-y-8">
                    <!-- Title -->
                    <div class="space-y-2 md:space-y-4">
                        <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                            Collaborative tools to design user experience
                        </h2>
                        <p class="text-gray-500">
                            Use our tools to explore your ideas and make your vision come true. Then share your work easily.
                        </p>
                    </div>
                    <!-- End Title -->

                    <!-- List -->
                    <ul role="list" class="space-y-2 sm:space-y-4">
                        <li class="flex space-x-3">
                            <!-- Solid Check -->
                            <svg class="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1" />
                                <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                            </svg>
                            <!-- End Solid Check -->

                            <span class="text-sm sm:text-base text-gray-500">
                                <span class="font-bold">Less routine</span> – more creativity
                            </span>
                        </li>

                        <li class="flex space-x-3">
                            <!-- Solid Check -->
                            <svg class="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1" />
                                <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                            </svg>
                            <!-- End Solid Check -->

                            <span class="text-sm sm:text-base text-gray-500">
                                Hundreds of thousands saved
                            </span>
                        </li>

                        <li class="flex space-x-3">
                            <!-- Solid Check -->
                            <svg class="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1" />
                                <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                            </svg>
                            <!-- End Solid Check -->

                            <span class="text-sm sm:text-base text-gray-500">
                                Scale budgets <span class="font-bold">efficiently</span>
                            </span>
                        </li>
                    </ul>
                    <!-- End List -->
                </div>
            </div>
            <!-- End Col -->
        </div>
        <!-- End Grid -->
    </div>
    <!-- End Features -->
    <!--Contact Us Section Start-->
    <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                    Any Query?
                </h2>

                <p class="hidden text-gray-500 md:mt-4 md:block">
                    You can reach us anytime you want.
                </p>

                <div class="mt-4 md:mt-8">
                    <a href="#" class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring">
                        Click To Connect
                    </a>
                </div>
            </div>
        </div>

        <img alt="Contact Us" src="../assets/images/contact.jpg" class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]" />
    </section>
    <!--Contact Us Section End-->

    <!-- <div class="hero min-h-[75vh] bg-base-200 flex justify-between ">

        <div class="card w-96 bg-base-100 shadow-xl -mt-28 hover:-translate-y-1 hover:scale-110 duration-200 ">
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
        <div class="card w-96 bg-base-100 shadow-xl -mt-28 hover:-translate-y-1 hover:scale-110 duration-200 ">
            <figure class="px-10 pt-10">
                <img src="../assets/images/pic-1.jpg" alt="Shoes" class="rounded-xl h-40 w-40" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">What are we ?</h2>
                <p>We would like to let you know about us and our pupose.</p>
                <div class="card-actions">
                    <button class="btn btn-primary ">About Us</button>
                </div>
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl -mt-28 hover:-translate-y-1 hover:scale-110 duration-200">
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
    </div> -->

</body>
</template>

<script>
export default {
    name: 'HeroComponent',
    // data(){
    //     return {
    //         isVisible: false,
    //     }
    // },
    // methods:{
    //     showAlart(){
    //         this.isVisible = true;
    //         setTimeout(()=>{
    //             this.isVisible = false;
    //         },5000)
    //     }
    // },
    // mounted(){
    //     this.showAlart();
    // }

}
</script>
