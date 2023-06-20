<script setup lang="ts"></script>

<template>
  <main>
    <ContentDoc />
    <ContentDoc v-slot="data">
      <p>{{ data }}</p>
      <ContentRenderer :value="data" />
    </ContentDoc>
  </main>
</template>

<style lang="scss" scoped></style>
