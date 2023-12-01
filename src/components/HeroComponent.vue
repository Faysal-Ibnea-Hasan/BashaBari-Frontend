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
                                    <router-link to="/login-tenant">Tenant</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    </div>
    <!--Verify Owner Section Start-->
    <!--Learn more modal-->
    <!-- You can open the modal using ID.showModal() method -->

    <dialog id="my_modal_2" class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
            <!-- FAQ -->
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <!-- Title -->
                <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Your questions, answered</h2>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">Answers to the most frequently asked questions.</p>
                </div>
                <!-- End Title -->

                <div class="max-w-2xl mx-auto">
                    <!-- Accordion -->
                    <div class="hs-accordion-group">
                        <div class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                            <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                Can I cancel at anytime?
                                <svg class="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" /></svg>
                                <svg class="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m18 15-6-6-6 6" /></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                                <p class="text-gray-800 dark:text-gray-200">
                                    Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
                                </p>
                            </div>
                        </div>

                        <div class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                            <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                                My team has credits. How do we use them?
                                <svg class="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" /></svg>
                                <svg class="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m18 15-6-6-6 6" /></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                <p class="text-gray-800 dark:text-gray-200">
                                    Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
                                </p>
                            </div>
                        </div>

                        <div class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                            <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                                How does Preline's pricing work?
                                <svg class="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" /></svg>
                                <svg class="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m18 15-6-6-6 6" /></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                                <p class="text-gray-800 dark:text-gray-200">
                                    Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
                                </p>
                            </div>
                        </div>

                        <div class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-four">
                            <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                                How secure is Preline?
                                <svg class="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" /></svg>
                                <svg class="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m18 15-6-6-6 6" /></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                                <p class="text-gray-800 dark:text-gray-200">
                                    Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
                                </p>
                            </div>
                        </div>

                        <div class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-five">
                            <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                                How do I get access to a theme I purchased?
                                <svg class="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" /></svg>
                                <svg class="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m18 15-6-6-6 6" /></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                                <p class="text-gray-800 dark:text-gray-200">
                                    If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.
                                </p>
                            </div>
                        </div>

                        <div class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                            <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                                Upgrade License Type
                                <svg class="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" /></svg>
                                <svg class="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m18 15-6-6-6 6" /></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                                <p class="text-gray-800 dark:text-gray-200">
                                    There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- End Accordion -->
                </div>
            </div>
            <!-- End FAQ -->
            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>
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

                    <button onclick="my_modal_2.showModal()" class="btn block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto" href="/about">
                        Learn More
                    </button>
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

                    <h2 class="mt-4 text-xl font-bold text-white">One stop solution</h2>

                    <p class="mt-1 text-sm text-gray-300">
                        BashaBari is the one stop solution for the house and appartment owners where they can maintain their property at ease.
                    </p>
                </a>

                <a class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="/services/digital-campaigns">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>

                    <h2 class="mt-4 text-xl font-bold text-white">Platform for easy living</h2>

                    <p class="mt-1 text-sm text-gray-300">
                        BashaBari is the place where people can find their next home without any hassle.
                    </p>
                </a>

                <a class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="/services/digital-campaigns">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>

                    <h2 class="mt-4 text-xl font-bold text-white">New era of TO-LET</h2>

                    <p class="mt-1 text-sm text-gray-300">
                        BashaBari is the new era of finding to-let. No more waste of time and energy for finding to-let.
                    </p>
                </a>

                <a class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="/services/digital-campaigns">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>

                    <h2 class="mt-4 text-xl font-bold text-white">Easy Management</h2>

                    <p class="mt-1 text-sm text-gray-300">
                        BasahBari provides you a simpliest way to manage records and updates for both owners and the tenants.
                    </p>
                </a>

                <a class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="/services/digital-campaigns">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>

                    <h2 class="mt-4 text-xl font-bold text-white">Problem & Support</h2>

                    <p class="mt-1 text-sm text-gray-300">
                        BashaBari provides you the support if you are facing any kind of problem in your home.
                    </p>
                </a>

                <a class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" href="/services/digital-campaigns">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>

                    <h2 class="mt-4 text-xl font-bold text-white">Review system</h2>

                    <p class="mt-1 text-sm text-gray-300">
                        BashaBari provides you review system for every property. So that you can have the best experience.
                    </p>
                </a>
            </div>

        </div>
    </section>

    <section class="py-14 mt-5">
        <div class="max-w-auto mx-auto px-4 text-gray-600 md:px-8">
            <div class="max-w-2xl mx-auto text-center">
                <h3 class="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    We are currently having
                </h3>
                <p class="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                </p>
            </div>
            <div class="mt-12">
                <ul class="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                    <li class="text-center px-12 md:px-16">
                        <h4 class="text-4xl text-indigo-600 font-semibold">
                            {{owners}}
                        </h4>
                        <p class="mt-3 font-medium text-transform: uppercase">
                            Total owners
                        </p>
                    </li>
                    <li class="text-center px-12 md:px-16">
                        <h4 class="text-4xl text-indigo-600 font-semibold">
                            {{tenants}}
                        </h4>
                        <p class="mt-3 font-medium text-transform: uppercase">
                            Total tenants
                        </p>
                    </li>
                    <li class="text-center px-12 md:px-16">
                        <h4 class="text-4xl text-indigo-600 font-semibold">
                            {{buildings}}
                        </h4>
                        <p class="mt-3 font-medium text-transform: uppercase">
                            Total buildings
                        </p>
                    </li>
                    <li class="text-center px-12 md:px-16">
                        <h4 class="text-4xl text-indigo-600 font-semibold">
                            {{flats}}
                        </h4>
                        <p class="mt-3 font-medium text-transform: uppercase">
                            Total flats
                        </p>
                    </li>
                </ul>
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
                            Experience, what you have never experienced.
                        </h2>
                        <p class="text-gray-500">
                            Join the journey of a new era.
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
                                <span class="font-bold">Find TO-LET</span> – at your ease
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
                                Plenty of Plumbers and Electricians
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
                                Manage property <span class="font-bold">without hassle</span>
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
    <!-- Contact Modal-->
    <!-- You can open the modal using ID.showModal() method -->

    <dialog id="my_modal_4" class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
            <!-- Contact Us -->
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="max-w-2xl lg:max-w-5xl mx-auto">
                    <div class="text-center">
                        <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                            Contact us
                        </h1>
                        <p class="mt-1 text-gray-600 dark:text-gray-400">
                            We'd love to talk about how we can help you.
                        </p>
                    </div>

                    <div class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                        <!-- Card -->
                        <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                            <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Fill in the form
                            </h2>

                            <form>
                                <div class="grid gap-4">
                                    <!-- Grid -->
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label for="hs-firstname-contacts-1" class="sr-only">First Name</label>
                                            <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="First Name">
                                        </div>

                                        <div>
                                            <label for="hs-lastname-contacts-1" class="sr-only">Last Name</label>
                                            <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Last Name">
                                        </div>
                                    </div>
                                    <!-- End Grid -->

                                    <div>
                                        <label for="hs-email-contacts-1" class="sr-only">Email</label>
                                        <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Email">
                                    </div>

                                    <div>
                                        <label for="hs-phone-number-1" class="sr-only">Phone Number</label>
                                        <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Phone Number">
                                    </div>

                                    <div>
                                        <label for="hs-about-contacts-1" class="sr-only">Details</label>
                                        <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Details"></textarea>
                                    </div>
                                </div>
                                <!-- End Grid -->

                                <div class="mt-4 grid">
                                    <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Send inquiry</button>
                                </div>

                                <div class="mt-3 text-center">
                                    <p class="text-sm text-gray-500">
                                        We'll get back to you in 1-2 business days.
                                    </p>
                                </div>
                            </form>
                        </div>
                        <!-- End Card -->

                        <div class="divide-y divide-gray-200 dark:divide-gray-800">
                            <!-- Icon Block -->
                            <div class="flex gap-x-7 py-6">
                                <svg class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <path d="M12 17h.01" /></svg>
                                <div class="grow">
                                    <h3 class="font-semibold text-gray-800 dark:text-gray-200">Knowledgebase</h3>
                                    <p class="mt-1 text-sm text-gray-500">We're here to help with any questions or code.</p>
                                    <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        Contact support
                                        <svg class="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <!-- End Icon Block -->

                            <!-- Icon Block -->
                            <div class="flex gap-x-7 py-6">
                                <svg class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                                <div class="grow">
                                    <h3 class="font-semibold text-gray-800 dark:text-gray-200">FAQ</h3>
                                    <p class="mt-1 text-sm text-gray-500">Search our FAQ for answers to anything you might ask.</p>
                                    <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        Visit FAQ
                                        <svg class="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <!-- End Icon Block -->

                            <!-- Icon Block -->
                            <div class=" flex gap-x-7 py-6">
                                <svg class="w-[28px] h-[28px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M1 14h12M1 4h12M6.5 16.5h1M2 1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
                                </svg>
                                <div class="grow">
                                    <h3 class="font-semibold text-gray-800 dark:text-gray-200">Contact us by mobile</h3>
                                    <p class="mt-1 text-sm text-gray-500">If you wish to call us instead please call us on</p>
                                    <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        01673724510
                                        <!-- <svg class="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor" />
                                        </svg> -->
                                    </a>
                                </div>
                            </div>
                            <!-- End Icon Block -->

                            <!-- Icon Block -->
                            <div class=" flex gap-x-7 py-6">
                                <svg class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" /></svg>
                                <div class="grow">
                                    <h3 class="font-semibold text-gray-800 dark:text-gray-200">Contact us by email</h3>
                                    <p class="mt-1 text-sm text-gray-500">If you wish to write us an email instead please use</p>
                                    <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        bashabari.shomadhan@gmail.com
                                    </a>
                                </div>
                            </div>
                            <!-- End Icon Block -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Contact Us -->

            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>

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
                    <button onclick="my_modal_4.showModal()" class="btn inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring">
                        Click To Connect
                    </button>
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
import axios from 'axios'

export default {
    name: 'HeroComponent',
    data() {
        return {
            owners:'',
            tenants:'',
            buildings:'',
            flats:'',
            
        }
    },
    methods:{
        // showAlart(){
        //     this.isVisible = true;
        //     setTimeout(()=>{
        //         this.isVisible = false;
        //     },5000)
        // }
        async get_dashboard(){
            let get_dashboard = await axios.get("https://shomadhan.top/admin/api/Api/Dashboard");
            this.owners = get_dashboard.data.totalOwner
            this.tenants = get_dashboard.data.totalTenant
            this.buildings = get_dashboard.data.totalBuilding
            this.flats = get_dashboard.data.totalFlat
        }

    },
    mounted(){
        this.get_dashboard();
    }

}
</script>
