<template>
<body>
    <NavComponentOwner />
    <div class="h-screen">

        <div class="chat ms-5 mt-5 chat-start">
            <div class="chat-bubble">Hello Anakin, Hope you are doing well.</div>
        </div>
    </div>

    <FooterComponent />
</body>
</template>

<script>
import NavComponentOwner from './NavComponentOwner.vue';
import HeroComponent from './HeroComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
    name: "HomePageOwner",
    components: {
        NavComponentOwner,
        HeroComponent,
        FooterComponent
    }

}
</script>

<style>

  </style>
