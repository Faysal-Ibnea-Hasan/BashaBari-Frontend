<template>
<body>
  <NavComponent />
  <HeroComponent/>
  
</body>
</template>

<script>
import HeroComponent from './HeroComponent.vue'
import NavComponent from './NavComponent.vue'
import OwnerOrTenant from './OwnerOrTenant.vue'

export default {
    name: 'HelloWorld',
    components: {
        NavComponent,
        OwnerOrTenant,
        HeroComponent
    }
}
</script>
