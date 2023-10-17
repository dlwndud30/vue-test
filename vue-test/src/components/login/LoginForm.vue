<script setup>
import { ref, watch, onMounted } from 'vue';

import { useFetch } from '../../composables/fetch.js';
const url = ref('/api/login');
const { data, error } = useFetch(url);

const user = ref({ email: '', password: '' });
watch(user.value, () => {
  console.log(user.value);
});

import axios from 'axios';
const load = async () => {
  const result = await axios.get('/api/login');
  user.value = result.data;
};

onMounted(() => {
  load();
});

const vFocus = {
  //el : 디렉티브가 바인딩된 엘리먼트
  mounted(el, binding) {
    console.log(el);
    console.log(binding);
    el.focus();
  },
};

const vExample = {
  //el : 디렉티브가 바인딩된 엘리먼트
  mounted(el, binding) {
    console.log(el);
    console.log(binding);
  },
};

const color = ref('red');

const changeColor = () => {
  if (color.value == 'red') color.value = 'blue';
  else color.value = 'red';
};

const getColor = () => {
  if (color.value == 'red') return 'blue';
  else return 'red';
};

const vColor = (el, binding) => {
  console.log(binding);
  el.style.color = binding.value;
};

const directiveArg = ref('someArg');
const directiveValue = ref('someValue');
</script>
<template>
  <div class="d-flex flex-row pb-2">
    <div v-color="getColor()">로그인</div>
    <BButton
      @click="changeColor"
      class="btn-sm"
      >컬러 변경</BButton
    >
  </div>
  <form>
    <div>
      <label for="email">Email</label>
      <input
        v-focus
        id="email"
        type="text"
        v-model="user.email"
      />
    </div>
    <div v-example:[directiveArg]="directiveValue">
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
