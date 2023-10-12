<template>
    <body>
    
        <NavComponent />
        <LoginComponentTenant />
        <FooterComponent />
    </body>
    </template>
    
    <script>
    import LoginComponentTenant from './LoginComponentTenant.vue';
    import NavComponent from './NavComponent.vue';
    import FooterComponent from './FooterComponent.vue';
    export default {
        name: "LoginPageTenant",
        components: {
            LoginComponentTenant,
            NavComponent,
            FooterComponent
        },
        mounted() {
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
    