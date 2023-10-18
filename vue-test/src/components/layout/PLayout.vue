<script setup>
import PHeader from './header/PHeader.vue';
import PGnb from './header/PGnb.vue';
import PMain from './main/PMain.vue';
import PFooter from '../layout/footer/PFooter.vue';
</script>
<template>
  <div :class="$style.app">
    <PHeader />
    <PGnb />
    <PMain />
    <PFooter />
  </div>
</template>

<style lang="scss" module>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
