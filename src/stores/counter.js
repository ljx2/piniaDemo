import {defineStore} from 'pinia'
import useUser from './user'

const useCounter = defineStore("counter", {
  state () {
    return {
      count: 66,
      list: [1,2,3,4,5]
    }
  },

  persist: {
    enabled: true, // 开启缓存  默认会存储在本地localstorage
    storage: sessionStorage, // 缓存使用方式
    paths:[] // 需要缓存键 
  },

  getters: {
    // 基本使用
    doubleCount(state) {
      return state.count * 2
    },

    doubleCountAddTwo() {
      console.log(this)
      return this.doubleCount + 2
    },

    // 在counter模块拿到user模块的数据
    showMessage(state) {
      console.log(state)
      console.log(this)

      const userStore = useUser()
      return `name: ${userStore.name} -- count: ${state.count}`
    }
  },

  actions: {
    increment(state) {
      console.log(state)
      console.log(this)
      this.count++
    },

    incrementNum(num) {
      this.count += num
    },

    // 异步操作
    async getData() {
      const res =await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([11,22,33,44])
        }, 2000)
      })

      this.list = res
      return "ok"
    }
  }
})
// 返回函数统一使用useXXX命名
export default useCounter;