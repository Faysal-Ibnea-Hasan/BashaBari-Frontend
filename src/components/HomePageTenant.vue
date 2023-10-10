<template>
  <body>
    <NavComponentTenant/>
    <h1>Hello Tenant</h1>
    <FooterComponent/>
  </body>
</template>

<script>
import NavComponentTenant from './NavComponentTenant.vue';
import HeroComponent from './HeroComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
    name:"HomePageTenant",
    components:{
        NavComponentTenant,
        HeroComponent,
        FooterComponent
    },
    

}
</script>

<style>

</style>
