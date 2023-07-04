
import { createApp } from 'vue'
import App from '@/App.vue'
import pinia from '@/stores'
import piniaPersist from 'pinia-plugin-persist'

import { createPinia } from 'pinia'
pinia.use(piniaPersist)




createApp(App).use(createPinia()).mount('#app')

