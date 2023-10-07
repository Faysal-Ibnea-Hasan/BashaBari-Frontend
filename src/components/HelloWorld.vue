<template>
<body>
  <NavComponent />
  <HeroComponent/>
  <FooterComponent/>
  
</body>
</template>

<script>
import HeroComponent from './HeroComponent.vue'
import NavComponent from './NavComponent.vue'
import OwnerOrTenant from './OwnerOrTenant.vue'
import FooterComponent from './FooterComponent.vue'

export default {
    name: 'HelloWorld',
    components: {
        NavComponent,
        OwnerOrTenant,
        HeroComponent,
        FooterComponent
    }
}
</script>
