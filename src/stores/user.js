import {defineStore} from 'pinia'

const useUser = defineStore("user", {
  state:() => ({
    name: "cq",
    age: 17
  })
})

export default useUser