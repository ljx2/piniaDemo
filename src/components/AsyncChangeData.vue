<template>
  <!-- 遍历store的数据 -->
  <div v-for="item in counterStore.list">{{ item }}</div>
</template>

<script setup>
import useCounter from '../stores/counter'
const counterStore = useCounter()

counterStore.getData().then(res =>{
console.log("成功",res);
})
</script>
