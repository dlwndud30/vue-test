<script setup>
import PHeader from './header/PHeader.vue';
import PMain from './main/PMain.vue';
import PFooter from '../layout/footer/PFooter.vue';
</script>
<template>
  <div :class="$style.app">
    <PHeader />
    <PMain />
    <PFooter />
  </div>
</template>

<style lang="scss" module>
.app {
  display: flex;
  height: 100%;
  flex-direction: column;
  position: relative;
  min-width: 1340px;
  letter-spacing: -0.5px;
  transition: all 0.3s ease-in-out;
}
</style>
