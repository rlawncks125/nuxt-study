<script setup lang="ts"></script>

<template>
  <div>Slot</div>
  <br />
  <SlotBasicSlot :attrsValue="'BasicSlot'" class="border">
    <template #header>
      <h1 class="text-[1.5rem]">기본 Slots</h1>
      <h1>Title</h1>
    </template>

    <!-- default -->
    <div>Main Content</div>

    <template v-slot:footer>
      <div>Footer</div>
    </template>
  </SlotBasicSlot>
  <br />

  <SlotProp v-slot="slotProps" :attrsValue="'PropsSlot'" class="border">
    <div>
      <p class="text-[1.5rem]">Slots Props</p>
      <p class="text-green-600">Vue 3.3+ 에 추가</p>
      <p>- 기존 slots 템플릿 콘텐츠 v-slot:name , #name 으로 못쓰고</p>
      <p>- 오직 매개변수 ( v-slot="slotProps" ) 로만 사용</p>
      <p>slotProps : {{ slotProps }}</p>
    </div>
  </SlotProp>
</template>

<style lang="scss" scoped></style>
