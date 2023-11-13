<template>
<router-view v-slot="{ Component }">
  <transition name="fade" mode="out-in">
    <Component :is="Component"/>
  </transition>
</router-view>
</template>

<script>
  export default {
    name:'App'
  }
</script>
<style scoped>
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s ease-out;
}
</style>
