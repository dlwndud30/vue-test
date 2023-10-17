<script setup>
import { ref, watch, onMounted } from 'vue';
import LoginForm from './LoginForm.vue';

import { useApi } from '../../composables/useAxios';
const api = useApi();

import { useFetch } from '../../composables/fetch.js';
const url = ref('/api/login');
const { data, error } = useFetch(url);

const user = ref({ email: '', password: '' });
watch(user.value, () => {
  console.log(user.value);
});

const load = async () => {
  const result = await api.get('/api/login');
  user.value = result.data;
};

onMounted(() => {
  load();
});
</script>
<template>
  <div class="p-2">
    <LoginForm :user-data="user" />

    <div>{{ data }}</div>
    <div>{{ error }}</div>
  </div>
</template>
