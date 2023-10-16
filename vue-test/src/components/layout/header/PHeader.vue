<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <header class="wrapper">
    <nav>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 40px;
  background-color: #eeeeee;
}

nav {
  text-align: center;
}

nav a.router-link-exact-active {
  color: green;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid green;
}

nav a:first-of-type {
  border: 0;
}
</style>
