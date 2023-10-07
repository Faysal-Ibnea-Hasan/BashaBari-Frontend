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
        }
    }
    </script>
    