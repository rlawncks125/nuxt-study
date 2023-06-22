<script setup lang="ts">
const { data, refresh, pending } = useLazyFetch("/api/delayData");
</script>

<template>
  <div>
    <button @click="() => refresh()" class="border p-2">reFresh</button>
    <div v-if="pending">fetch Loading...</div>
    <div v-else>{{ data }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
