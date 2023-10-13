<script setup></script>

<template>
  <main class="main">
    <RouterView />
  </main>
</template>
<style scoped>
.main {
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
}
</style>
