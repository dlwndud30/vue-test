<script setup>
import { ref, shallowRef, watch } from 'vue';

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar'],
});

const shallowObj = shallowRef({
  nested: { count: 0 },
  arr: ['foo', 'bar'],
});

function mutateDeeply() {
  console.log(obj.value);
  obj.value.nested.count++;
  obj.value.arr.push('baz');
  console.log(shallowObj.value);
  shallowObj.value.nested.count++;
  shallowObj.value.arr.push('baz');
}

watch(
  () => shallowObj.value, //반응 x
  () => {
    console.log(shallowObj.value);
  }
);
watch(obj.value, () => {
  //반응 o
  console.log(obj.value);
});
</script>

<template>
  <div>
    <span>{{ obj }}</span
    ><br />
    <span>{{ obj.nested.count }}</span>
    <span>{{ obj.arr }}</span
    ><br />
    <span>-------------------</span><br />
    <span>{{ shallowObj }}</span
    ><br />
    <span>{{ shallowObj.nested.count }}</span>
    <span>{{ shallowObj.arr }}</span
    ><br />
    <button
      class="btn btn-sm btn-outline-primary"
      @click="mutateDeeply"
    >
      mutateDeeply
    </button>
  </div>
</template>

<style></style>
