import { createApp } from 'vue'
import moment from 'moment'
import App from './App.vue'
import store from './store'
import router from './router'

moment.locale('fr');

let app=createApp(App)

app.config.globalProperties.$moment=moment

app.use(store).use(router).mount('#app')
