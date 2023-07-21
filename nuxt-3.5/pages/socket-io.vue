<script setup lang="ts">
const { $socket } = useNuxtApp();

onMounted(() => {
  $socket.listenPong((payload) => {
    console.log("listen : " + payload);
  });
});
</script>

<template>
  <ClientOnly>
    <div>socketIo</div>

    <button @click="$socket.sendPing('send Client')">send</button>
  </ClientOnly>
</template>

<style lang="scss" scoped></style>
