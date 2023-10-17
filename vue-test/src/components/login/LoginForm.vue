<script setup>
import { ref, watch, onMounted } from 'vue';

import { useFetch } from '../../composables/fetch.js';
const url = ref('/api/login');
const { data, error } = useFetch(url);

import axios from 'axios';

const user = ref({ email: '', password: '' });

watch(user.value, () => {
  console.log(user.value);
});

const load = async () => {
  const result = await axios.get('/api/login');
  user.value = result.data;
};

onMounted(() => {
  load();
});
</script>
<template>
  <div>로그인</div>
  <form>
    <div>
      <label for="email">Email</label>
      <input
        id="email"
        type="text"
        v-model="user.email"
      />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        v-model="user.password"
      />
    </div>
  </form>

  <div>{{ data }}</div>
  <div>{{ error }}</div>
</template>
