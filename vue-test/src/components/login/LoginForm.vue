<script setup>
import { ref } from 'vue';
import CustomInput from './CustomInput.vue';
import CustomInputV2 from './CustomInputV2.vue';

const props = defineProps({
  userData: { type: Object },
});

const vFocus = {
  //el : 디렉티브가 바인딩된 엘리먼트
  mounted(el, binding) {
    // console.log(el);
    // console.log(binding);
    el.focus();
  },
};

const vExample = {
  //el : 디렉티브가 바인딩된 엘리먼트
  mounted(el, binding) {
    // console.log(el);
    // console.log(binding);
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
  el.style.color = binding.value;
};

const directiveArg = ref('someArg');
const directiveValue = ref('someValue');

//---------------------------
const name = ref('name');
const searchText = ref('searchText');
const first = ref('first');
const last = ref('last');
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
        :value="userData.email"
        @input="searchText = $event.target.value"
      />
    </div>
    <div v-example:[directiveArg]="directiveValue">
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        :value="userData.password"
        @input="searchText = $event.target.value"
      />
    </div>
    <div>
      <label for="name">Name</label>
      <input
        id="name"
        :value="name"
        @input="name = $event.target.value"
      />
    </div>
    <div class="py-2">------------v-Model--------------</div>
    <CustomInput v-model.capitalize="searchText" />
    <CustomInput v-model="searchText" />
    <input v-model="searchText" />
    <CustomInputV2
      v-model:firstName="first"
      v-model:lastName="last"
    ></CustomInputV2>
  </form>
</template>
