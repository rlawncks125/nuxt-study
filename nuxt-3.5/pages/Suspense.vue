<script setup lang="ts"></script>

<template>
  <div>Suspense</div>
  <br />
  <h2>Nuxt3 에서는 ClientOnly 태그로 감싸줘야함</h2>
  <h2>아니면 Server Render시 영향을 줘서 요청 시간 늘어남</h2>
  <br />

  <ClientOnly>
    <Suspense>
      <SuspenseDelayCompo :delay="2000" />
      <template #fallback> Loading.. </template>
    </Suspense>
  </ClientOnly>
  <br />
  <br />
  <br />
  <ClientOnly>
    <h2>Nuxt3 는 Suspense 태그로 감싸지 않고</h2>
    <p>useFetch , asyncData 의 pending 값으로 으로 구현할수 있음</p>
    <SuspenseDelayFetch />
  </ClientOnly>
</template>

<style lang="scss" scoped></style>
