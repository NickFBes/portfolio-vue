import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'


// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faSun, faMoon, } from '@fortawesome/free-solid-svg-icons'

// Motion Plugin
import { MotionPlugin } from '@vueuse/motion'

// Adiciona ícones à biblioteca
library.add(fab, faEnvelope, faPhone, faSun, faMoon)

// Cria o app
const app = createApp(App)

// Usa plugins e registra componentes
app.use(router)
app.use(MotionPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)

// Monta o app
app.mount('#app')
