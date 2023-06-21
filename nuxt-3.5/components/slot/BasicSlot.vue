<script setup lang="ts">
const slots = useSlots();
const attrs = useAttrs();
</script>

<template>
  <div :class="attrs.class || ''">
    <p>$slots : {{ slots }} , $attrs : {{ attrs }}</p>
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot :test="'test'" />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<style lang="scss" scoped></style>
