<script setup>
defineProps({
  firstName: String,
  lastName: String,
});

defineEmits(['update:firstName', 'update:lastName']);
</script>

<template>
  <div>
    <input
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)"
    />
  </div>
  <div>
    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)"
    />
  </div>
</template>
