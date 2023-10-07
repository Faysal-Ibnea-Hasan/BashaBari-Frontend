<template>
<body>

    <div class="hero  min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
            <img src="../assets/images/pic-1.jpg" class="max-w-sm rounded-lg shadow-2xl" />
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
                                <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">Owner</div>
                                <div class="divider divider-horizontal">OR</div>
                                <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">Tenent</div>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    </div>

</body>
</template>

<script>
export default {
    name: 'HeroComponent',
}
</script>
