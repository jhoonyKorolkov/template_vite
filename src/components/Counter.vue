<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{ start: number }>();
const count = ref(props.start);
</script>
<template>
  <div class="counter">
    <button class="btn" @click="count--">-</button>
    <span class="counter__value">{{ count }}</span>
    <button class="btn" @click="count++">+</button>
  </div>
</template>
