<script setup>
import { useMotion, useMotionControls } from '@vueuse/motion'
import { ref, nextTick } from 'vue'

const mostrarAccordion = ref(false)

const linhasTexto = [
  "Bonjour ! Je m'appelle Nicolas Bes et je suis un développeur web en formation !",
  "J'aime BEAUCOUP le domaine de la technologie.",
  "Je me mets toujours au défi avec de nouveaux projets...",
  "et je participe à des communautés de programmation pour obtenir des retours.",
  "J'aime ÉNORMÉMENT le domaine de la technologie. 😁"
]
</script>

<template>
  <section class="section sobre-mim" id="sobre-mim">
    <div class="container">
      <div class="section-title">
        <h2>À propos de moi</h2>
      </div>

      <div class="conteudo">
        <!-- Imagem animada vindo da esquerda -->
        <div v-motion :initial="{ x: -400, opacity: 0 }" :enter="{
            opacity: 1,
            
            x: 0,
            transition: { duration: 900, delay: 400, easing: 'ease-out' }
          }" class="imagem">
          <img src="/images/nico.png" alt="Foto de Nicolas" />
        </div>

        <!-- Texto linha a linha com v-motion -->
        <div class="texto">
          <div v-for="(linha, index) in linhasTexto" :key="index">
            <div
            v-motion
          :initial="{ opacity: 0, x: 400 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 1100, easing: 'ease-out' }
          }"
              class="linha-texto"
            >
              {{ linha }}
            </div>
          </div>

          <!-- Botão accordion -->
          <div class="accordion-wrapper"
          v-motion
          :initial="{ opacity: 0, y: 450 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 1100, easing: 'ease-out' }
          }">
            <button @click="mostrarAccordion = !mostrarAccordion" class="botao-cv">
              📄 Mon CV
            </button>

            <div v-motion v-if="mostrarAccordion"
              :initial="{ opacity: 0, height: 0 }"
              :enter="{ opacity: 1, height: 'auto', transition: { duration: 0.4 } }"
              class="accordion-content"
            >
              <a href="/src/arquivos/cv.pdf" target="_blank" class="cv-opcao">Visualiser</a>
              <a href="/src/arquivos/cv.pdf" download class="cv-opcao">Télécharger</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 5rem 2rem;
  color: var(--cor-primaria);
  min-height: calc(100vh - 200px);
}

.section-title h2 {
  color: var(--cor-primaria);
}

.section-title h2 {
  font-size: var(--fonte-gigante);
  color: var(--cor-primaria);
  font-family: var(--fonte-primaria);
}

.conteudo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.imagem img {
  max-height: 400px;
  width: 100%;
  max-width: 320px;
  border-radius: 20%;
  border: 5px solid var(--cor-primaria);
  
  transition: 0.3s ease;
}

.texto {
  max-width: 600px;
  padding: 1rem;
  font-family: var(--fonte-secundaria);
}

.linha-texto {
  font-size: var(--fonte-normal);
  line-height: 1.7;
  margin-bottom: 15px;
  color: var(--cor-branca);
}

.accordion-wrapper {
  margin-top: 2rem;
}

.botao-cv {
  background: var(--cor-fundo-escuro);
  border: 2px solid var(--cor-primaria);
  color: var(--cor-branca);
  padding: 12px 24px;
  border-radius: 10px;
  font-size: var(--fonte-normal);
  font-family: var(--fonte-primaria);
  cursor: pointer;
  box-shadow: 0 0 15px var(--cor-primaria);
  text-shadow: 0 0 5px var(--cor-secundaria);
  transition: 0.3s ease;
}

.botao-cv:hover {
  transform: scale(1.05);
  text-shadow:
    0 0 10px #00bfff,
    0 0 10px #00bfff,
    0 0 10px #00bfff;
}

.accordion-wrapper {
  margin: 0,5rem;
  padding: 1rem;
}

.accordion-content {
  margin-top: 1rem;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.cv-opcao {
  background: transparent;
  border: 2px solid var(--cor-secundaria);
  color: var(--cor-branca);
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-family: var(--fonte-primaria);
  font-size: var(--fonte-normal);
  transition: 0.3s;
  box-shadow: 0 0 10px var(--cor-secundaria);
}

.cv-opcao:hover {
  background: var(--cor-secundaria);
  color: #000;
  box-shadow: 0 0 20px var(--cor-secundaria);
}
</style>
