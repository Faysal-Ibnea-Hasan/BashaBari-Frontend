<template>
<body>

    <NavComponent />
    <RegisterComponentTenant />
    <FooterComponent />
</body>
</template>

    
<script>
import RegisterComponentTenant from './RegisterComponentTenant.vue';
import NavComponent from './NavComponent.vue';
import FooterComponent from './FooterComponent.vue';
export default {
    name: "RegisterPageTenant",
    components: {
        RegisterComponentTenant,
        NavComponent,
        FooterComponent
    },
    mounted(){
        let users = localStorage.getItem('tenant-info');
        if (users) 
        {
            this.$router.push({
                name: 'HomePageTenant'
            })
        }
    }

}
</script>
