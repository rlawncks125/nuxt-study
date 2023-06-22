<script setup lang="ts">
const counter = useState(() => 0);

const increm = () => {
  counter.value++;
};
</script>

<template>
  <div>v-memo</div>
  <h2>length > 1000 이상일때 사용시 효율적이다</h2>
  <h2>
    <p>counter 값 변경에 따라</p>
    <p>true에서 false로 ( true => false )</p>
    <p>false에서 true로 ( false => true )</p>
    <p>변경된 항목들만업데이트가 됨,</p>
  </h2>
  <button @click="increm" class="border border-2 p-2">+</button>
  <p>현재 cunter : {{ counter }} - current ID : {{ counter % 10 }}</p>

  <div
    v-for="item in Array.from({ length: 10 }, (v, i) => ({ id: i }))"
    :key="item.id"
    v-memo="[item.id === counter % 10]"
  >
    <p>{{ item.id }} : {{ counter }} = {{ item.id === counter % 10 }}</p>
  </div>

  <br />
  <div>
    <h2>홀수만 랜더</h2>
    <div
      v-for="item in Array.from({ length: 10 }, (v, i) => ({ id: i }))"
      :key="item.id"
      v-memo="[(item.id % 2) + 1 === counter % 2]"
    >
      <p>
        {{ item.id }} : {{ counter % 2 }} =
        {{ (item.id % 2) + 1 === counter % 2 }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
