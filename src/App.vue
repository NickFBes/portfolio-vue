<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div id="app">
    <Header />

    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade-blur" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* Transição fade + blur entre páginas */
.fade-blur-enter-active,
.fade-blur-leave-active {
  transition: all 0.5s ease;
}

.fade-blur-enter-from,
.fade-blur-leave-to {
  opacity: 0;
  filter: blur(8px);
}

.fade-blur-enter-to,
.fade-blur-leave-from {
  opacity: 1;
  filter: blur(0);
}

/* Layout básico */
#app {
  background-color: var(--cor-fundo-escuro);
  color: var(--cor-branca);
  font-family: var(--fonte-secundaria);
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  position: relative;
}


</style>