<script setup lang="ts">
interface JsonDoc {
  doc: {
    body: {
      [key in string]: {
        name: string;
        childes: { name: string }[];
      };
    };
  };
}
</script>

<template>
  <main>
    <ContentDoc v-slot="data: JsonDoc">
      <p>{{ data }}</p>
      <h2 class="text-green-500 text-[2rem]">렌더</h2>
      <div v-for="item in data.doc.body" class="border my-2 block">
        {{ item.name }}
        <div v-for="child in item.childes">
          {{ child.name }}
        </div>
      </div>
    </ContentDoc>
  </main>
</template>

<style lang="scss"></style>
