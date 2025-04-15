<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const menuAberto = ref(false)
const larguraTela = ref(window.innerWidth)

const atualizarLargura = () => {
  larguraTela.value = window.innerWidth
}

const fecharMenu = () => {
  if (larguraTela.value <= 900) {
    menuAberto.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', atualizarLargura)
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
          <img src="../assets/images/logo.png" alt="Logo NB" class="logo-img" />
        </router-link>

        <div class="menu" @click="menuAberto = !menuAberto">
          <span class="hamburguer" :class="{ ativo: menuAberto }"></span>
        </div>

        <nav :class="{ aberto: menuAberto }">
          <ul>
            <li><router-link to="/" @click="fecharMenu">Home</router-link></li>
            <li><router-link to="/sobre" @click="fecharMenu">À propos de moi</router-link></li>
            <li><router-link to="/habilidades" @click="fecharMenu">Compétences</router-link></li>
            <li><router-link to="/projetos" @click="fecharMenu">Mes projets</router-link></li>
          
            
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>


<style scoped>
.header {
  padding: 20px 30px;
  background: linear-gradient(0deg, #0b0f2b 0%, #111827 100%);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--cor-primaria);
  box-shadow: 0 0 20px var(--cor-secundaria);
  border-radius: 0 0 5% 5%;
  z-index: 2;
}

.logo-img {
  height: 70px;
  width: auto;
  filter: drop-shadow(0 0 5px var(--cor-primaria));
  transition: 0.3s ease;
}

.logo-link:hover .logo-img {
  transform: scale(1.05);
  filter: drop-shadow(0 0 15px var(--cor-secundaria));
}

nav ul {
  display: flex;
  align-items: center;
  gap: 20px;
}

nav li a {
  font-family: var(--fonte-primaria);
  text-transform: uppercase;
  color: var(--cor-branca);
  font-size: var(--fonte-normal);
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 10px;
  letter-spacing: 1.5px;
  text-shadow: 0 0 5px var(--cor-primaria);
  transition: 0.2s ease;
}

nav li a:hover {
  
  color: whitesmoke; /* preto */
  transform: scale(1.08); /* aumenta um pouco o tamanho */
  text-shadow:
    0 0 10px #00bfff,
    0 0 10px #00bfff,
    0 0 10px #00bfff; /* neon azul suave */
  
  transition: all 0.5s ease;
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

@media (max-width: 900px) {
  .menu {
    display: flex;
  }

  nav {
    position: fixed;
    top: 80px;
    right: 20px;
    background: rgba(4, 2, 3, 0.95);
    backdrop-filter: blur(12px);
    border: 1px solid var(--cor-primaria);
    box-shadow: 0 0 15px var(--cor-secundaria);
    flex-direction: column;
    align-items: flex-start;
    width: 240px;
    padding: 2rem;
    display: none;
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
    font-size: var(--fonte-grande);
    font-family: var(--fonte-primaria);
    display: block;
    width: 100%;
    text-align: center;
    border-bottom: 2px solid var(--cor-primaria);
    border-radius: 10px;
    padding: 12px;
  }
}

</style>
