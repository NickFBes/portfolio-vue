import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/globais.css'
import './assets/styles/reset.css'
import './assets/styles/variaveis.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { MotionPlugin } from '@vueuse/motion'

// Adiciona os ícones à biblioteca
library.add(fab)

// Cria o app
const app = createApp(App)

// Usa plugins e registra componentes
app.use(router)
app.use(MotionPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)

// Monta o app
app.mount('#app')
