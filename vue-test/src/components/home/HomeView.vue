<script setup>
// import { watch } from 'vue';
import { useMouse } from '../../composables/mouse';
const { x, y } = useMouse();
</script>

<template>
  <div>마우스 위치: {{ x }}, {{ y }}</div>
</template>

<style></style>
