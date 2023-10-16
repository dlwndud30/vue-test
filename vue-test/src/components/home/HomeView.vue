<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const data = ref([]);

const fetchData = async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/users/');
  data.value = result.data;
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div>
    home
    <div
      v-for="(item, index) in data"
      :key="index"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<style></style>
