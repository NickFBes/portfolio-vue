<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const menuAberto = ref(false)
const larguraTela = ref(window.innerWidth)

const obterTemaInicial = () => {
  const temaSalvo = localStorage.getItem('theme')
  if (temaSalvo) {
    return temaSalvo === 'dark'
  } else {
    localStorage.setItem('theme', 'dark')
    return true
  }
}

const isDark = ref(obterTemaInicial())
const iconeTema = ref(isDark.value ? 'fa-sun' : 'fa-moon') // <-- SOL no tema escuro

const atualizarLargura = () => {
  larguraTela.value = window.innerWidth
}

const fecharMenu = () => {
  if (larguraTela.value <= 900) {
    menuAberto.value = false
  }
}

const aplicarTema = () => {
  document.documentElement.className = isDark.value ? 'dark' : 'light'
  iconeTema.value = isDark.value ? 'fa-sun' : 'fa-moon' // <-- SOL se escuro, LUA se claro
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  const novoTema = isDark.value ? 'dark' : 'light'
  localStorage.setItem('theme', novoTema)
  aplicarTema()
}

onMounted(() => {
  window.addEventListener('resize', atualizarLargura)
  aplicarTema()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', atualizarLargura)
})
</script>



<template>
  <header class="header">
    <div class="container">
      <div class="row justify-content-between alinhar-itens-no-centro">
        <router-link to="/" class="logo-link">
          <img src="/images/logo.png" alt="Logo NB" class="logo-img" />
        </router-link>

        <nav :class="{ aberto: menuAberto }">
          <ul>
            <li><router-link to="/" @click="fecharMenu">Home</router-link></li>
            <li><router-link to="/sobre" @click="fecharMenu">À propos de moi</router-link></li>
            <li><router-link to="/habilidades" @click="fecharMenu">Compétences</router-link></li>
            <li><router-link to="/projetos" @click="fecharMenu">Mes projets</router-link></li>
            <li><router-link to="/contact" @click="fecharMenu">Contact</router-link></li>
          </ul>
        </nav>

        <div class="actions">
          <div class="theme-box" @click="toggleTheme">
            <font-awesome-icon :icon="iconeTema" class="theme-icon" />
            
          </div>

          <div class="menu" @click="menuAberto = !menuAberto">
            <span class="hamburguer" :class="{ ativo: menuAberto }"></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 30px;
  background: var(--cor-fundo-header);
  border-bottom: 1px solid var(--cor-primaria);
  border-radius: 0 0 5% 5%;
  z-index: 2;
  position: relative;
}

.logo-img {
  height: 60px;
  width: auto;
  filter: drop-shadow(0 0 5px var(--cor-secundaria));
  transition: 0.3s ease;
}

.logo-link:hover .logo-img {
  transform: scale(1.05);
  filter: drop-shadow(0 0 10px var(--cor-hover-glow));
}

.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.menu {
  display: none;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1001;
}

.hamburguer {
  position: relative;
  width: 30px;
  height: 3px;
  background-color: var(--cor-secundaria);
  transition: 0.5s ease-in-out;
}

.hamburguer::before,
.hamburguer::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: var(--cor-secundaria);
  transition: 0.3s;
}

.hamburguer::before {
  top: -10px;
}

.hamburguer::after {
  bottom: -10px;
}

.hamburguer.ativo {
  background: transparent;
}

.hamburguer.ativo::before {
  transform: rotate(45deg);
  top: 0;
}

.hamburguer.ativo::after {
  transform: rotate(-45deg);
  bottom: 0;
}

nav ul {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: clamp(10px, 2vw, 24px);
  padding-left: 0;
  margin: 0;
}

nav li {
  list-style: none;
}

nav li a {
  font-family: var(--fonte-primaria);
  text-transform: uppercase;
  color: var(--cor-branca);
  font-size: 1.5rem;
  font-weight: 600;
  padding: 6px 12px;
  letter-spacing: 1.5px;
  transition: 0.2s ease;
  white-space: nowrap;
}

nav li a:hover {
  color: var(--cor-navlisthover);
  transform: scale(1.08);
  text-shadow: 0 0 2px #00bfff, 0 0 2px #00bfff;
  transition: all 0.5s ease;
}

.theme-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 20px;
  background-color: var(--cor-theme-box-bg);
  color: var(--cor-theme-box-text);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  font-family: var(--fonte-primaria);
  box-shadow: 0 0 10px var(--cor-theme-box-shadow);
  border: 1px solid var(--cor-theme-box-border);
}

.theme-icon {
  font-size: 1.4rem;
  transition: transform 0.3s ease, filter 0.3s ease;
  color: var(--cor-theme-darklight);
}

.theme-box:hover .theme-icon {
  transform: rotate(-150deg) scale(1.1);
 
}


/* RESPONSIVO */
@media (max-width: 900px) {
  .menu {
    display: flex;
  }

  nav {
    position: fixed;
    top: 80px;
    right: 20px;
    background: color-mix(in srgb, var(--cor-fundo-escuro) 95%, transparent);
    backdrop-filter: blur(12px);
    border: 1px solid var(--cor-primaria);
    box-shadow: 0 0 15px var(--cor-secundaria);
    flex-direction: column;
    align-items: flex-start;
    width: 240px;
    padding: 2rem;
    display: none;
    z-index: 1000;
  }

  nav.aberto {
    display: flex;
  }

  nav ul {
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }

  nav li {
    width: 100%;
  }

  nav li a {
    font-size: 1rem;
    width: 100%;
    display: block;
    padding: 10px 12px;
  }

  .actions {
    gap: 0.5rem;
  }
}
</style>
