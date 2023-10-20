<template>
  <body>
    <NavComponentTenant/>
    <div class="h-auto">
        Find Buildings
    </div>
    <FooterComponent/>
  </body>
</template>

<script>
import axios from 'axios'
import NavComponentTenant from './NavComponentTenant.vue';
import FooterComponent from './FooterComponent.vue';

export default {
    name:"FindBuildingComponentTenant",
    components:{
        NavComponentTenant,
        FooterComponent
    }
}
</script>

<style>

</style>