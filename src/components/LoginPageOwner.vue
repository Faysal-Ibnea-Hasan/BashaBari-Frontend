<template>
<body>

    <NavComponent />
    <LoginComponentOwner />
    <!-- <FooterComponent /> -->
</body>
</template>

<script>
import LoginComponentOwner from './LoginComponentOwner.vue';
import NavComponent from './NavComponent.vue';
import FooterComponent from './FooterComponent.vue';
export default {
    name: "LoginPageOwner",
    components: {
        LoginComponentOwner,
        NavComponent,
        FooterComponent
    },
    mounted() {
        let users = localStorage.getItem('users-info');
        if (users) 
        {
            this.$router.push({
                name: 'HomePageOwner'
            })
        }
    }
}
</script>
