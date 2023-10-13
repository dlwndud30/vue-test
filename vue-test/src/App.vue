<script setup>
import { RouterView } from 'vue-router';
import PHeader from './components/PHeader.vue';
</script>

<template>
  <div>
    <PHeader></PHeader>
    <RouterView />
  </div>
</template>
