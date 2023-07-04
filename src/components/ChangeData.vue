<template>
<div>
  <h2>名字是：{{ name }}</h2>
  <h2>年龄是: {{ age }}</h2>
  <button @click="updateStore">修改Store数据</button>
  <button @click="resetStore">重置Store数据</button>
  <h1>------------------</h1>
</div>
</template>

<script setup>
import useUser from '../stores/user'
import { storeToRefs } from 'pinia';

const userStore = useUser()
const {name, age} = storeToRefs(userStore)

function updateStore() {
  // 1. 一个个修改状态
  // userStore.name = "川崎"
  // userStore.age = 19

  // 2. $patch一次改变多个状态
  userStore.$patch({
    name: "川川",
    age: 18
  })

  // 3. $state(替换， 基本不用)
}

function resetStore() {
  // 4. $reset()是重置state数据的
  userStore.$reset()
}

</script>

<style scoped>

</style>
