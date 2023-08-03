import '@/assets/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/lib/animate.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'
import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from './router/router'


createApp(App).use(store).use(router).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
