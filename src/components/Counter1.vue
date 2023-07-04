<template>
  <div>展示pinia的counter的counter值: {{ counterStore.count }}</div>
  <div>解构出来的pinia的counter的count值: {{ count }}</div>
  <button @click="addCount">count+1</button>
  <h1>------------------</h1>
  <div>
    <h1>getters的使用</h1>
    <h2>doubleCount:{{ counterStore.doubleCount }}</h2>
    <h2>doubleCountAddTwo:{{ counterStore.doubleCountAddTwo }}</h2>
    <h2>showMessage: {{ counterStore.showMessage }}</h2>

    <h2>展示pinia的counter的counter值: {{ counterStore.count }}</h2>
    <h2>doubleCountAddTwo:{{ counterStore.doubleCountAddTwo }}</h2>

    <button @click="incrementOne">count+1</button>
    <button @click="incrementNum">count+20</button>
  </div>
  <h1>------------------</h1>
  
</template>

<script setup>
import useCounter from '../stores/counter'
import {storeToRefs} from 'pinia'

const counterStore = useCounter()

// const {count} = counterStore // 解构得到的失去响应式
const {count} = storeToRefs(counterStore)

function addCount() {
  counterStore.count++
}


function incrementOne() {
  counterStore.increment()
}
function incrementNum() {
  counterStore.incrementNum(20)
}
</script>



<style scoped>

</style>
