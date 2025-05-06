<script setup>
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

        <!-- Texto -->
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

          <!-- Botão de CV -->
          <div
            class="cv-wrapper"
            v-motion
            :initial="{ opacity: 0, y: 150 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 1100, easing: 'ease-out' }
            }"
          >
            <a
              href="/files/NicolasBesCvDWWM.pdf"
              target="_blank"
              class="botao-cv"
              rel="noopener"
            >
              📄 Mon CV
            </a>
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
  min-height: calc(100vh - 158.4px);
}

.section-title h2 {
  font-size: var(--fonte-gigante);
  font-family: var(--fonte-primaria);
  color: var(--cor-primaria);
  margin-bottom: 60px;
  letter-spacing: 1.5px;
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
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.8;
  margin-bottom: 18px;
  color: var(--cor-branca);
}

.cv-wrapper {
  margin-top: 2.5rem;
}

.botao-cv {
  background: var(--cor-fundo-escuro);
  border: 2px solid var(--cor-primaria);
  color: var(--cor-branca);
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 1.6rem;
  font-family: var(--fonte-primaria);
  cursor: pointer;
  box-shadow: 0 0 15px var(--cor-primaria);
  text-shadow: 0 0 5px var(--cor-secundaria);
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
}

.botao-cv:hover {
  transform: scale(1.06);
  text-shadow: 0 0 10px #00bfff, 0 0 10px #00bfff, 0 0 10px #00bfff;
}
</style>
