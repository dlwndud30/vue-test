<script setup></script>

<template>
  <main class="main">
    <RouterView />
  </main>
</template>
<style scoped>
.main {
  position: relative;
  height: calc(100% - 80px);
  padding-top: 40px;
  flex: 1 1 auto;
  align-self: center;
  overflow-y: auto;
  scroll-behavior: smooth;
  width: 100%;
}
</style>
