<template>
  <body>
    <NavComponentOwner/>
    Notice
    <FooterComponent/>
  </body>
</template>

<script>
import NavComponentOwner from './NavComponentOwner.vue';
import FooterComponent from './FooterComponent.vue';
import axios from 'axios';

export default {
name:"NoticeComponentOwner",
components:{
    NavComponentOwner,
    FooterComponent
}
    
}
</script>

<style>

</style>