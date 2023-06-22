<script setup lang="ts">
const props = defineProps<{
  delay: number;
}>();

const { delay } = toRefs(props);

await delayResult();

async function delayResult() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("");
    }, delay.value);
  });
}
</script>

<template>
  <div>delayCompo</div>
</template>

<style lang="scss" scoped></style>
