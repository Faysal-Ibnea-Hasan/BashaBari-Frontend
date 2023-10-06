<template>
<body>
    <div class="flex items-center justify-center mt-5">

        <div class="card w-96 bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
                <h2 class="card-title">Wait!</h2>
                <p>Who are You?</p>

            </div>
        </div>
    </div>
    <div class="flex items-center justify-center">

        <div class="flex  w-2/4  mt-5">
            <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">Owner</div>
            <div class="divider divider-horizontal">OR</div>
            <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">Tenent</div>
        </div>
    </div>
</body>
</template>

<script>
export default {
    name: 'OwnerOrTenant',
}
</script>
