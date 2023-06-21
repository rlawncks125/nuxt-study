<script setup lang="ts">
defineSlots<{
  default(props: { test: string }): any;
}>();

const slots = useSlots();
const attrs = useAttrs();
</script>

<template>
  <div :class="attrs.class || ''">
    <p>$slots : {{ slots }} , $attrs : {{ attrs }}</p>

    <main>
      <slot :test="'slotPropsTest'"></slot>
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
