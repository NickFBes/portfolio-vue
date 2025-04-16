<script setup>
import { ref } from 'vue'

// Linhas de código animadas com piadinhas francesas e dev
const codeLines = ref([
  "const baguette = require('fromage') || 'pain';",
  "if (devMood === 'crashed') reboot('café');",
  "const life = () => code ? survive() : cry();",
  "try { deploy() } catch (erreur) { blame('stagiaire'); }",
  "function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }",
  "// TODO: Demander à ChatGPT de finir ce projet 😅",
  "if (typeof motivation === 'undefined') console.warn('Encore lundi...')",
  "const baguetteLength = Math.PI * fromage;",
  "useEffect(() => manger(🍕), []);",
  "#include <croissant.h>",
  "const bug = feature || surprise();"
])

// Função que retorna estilos aleatórios para cada linha
function randomStyle() {
  const top = Math.floor(Math.random() * 100)
  const left = Math.floor(Math.random() * 100)
  const size = (Math.random() * 0.7 + 0.8).toFixed(2)
  const delay = (Math.random() * 6).toFixed(2)

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `scale(${size})`,
    animationDelay: `${delay}s`,
  }
}
</script>

<template>
  <section class="home section">
    <div class="container">
      <div class="row full-screen alinhar-itens-no-centro">
        
        <!-- Texto: Saudação, Nome, Título -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 2500, easing: 'ease-out' }
          }"
          class="texto-home"
        >
          <p>Salut 🖖</p>
          <h1>Je suis Nicolas Bes</h1>
          <h2>Developpeur Web en formation.</h2>

          <!-- Redes sociais com animação encadeada -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 1000, delay: 500, easing: 'ease-out' }
            }"
            class="redes-sociais"
          >
            <a href="#" class="outer-shadow"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
            <a href="#" class="outer-shadow"><font-awesome-icon icon="fa-brands fa-whatsapp" /></a>
            <a href="#" class="outer-shadow"><font-awesome-icon icon="fa-brands fa-github" /></a>
            <a href="#" class="outer-shadow"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
          </div>
        </div>

        <!-- Imagem com animação após redes sociais -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { duration: 1500, delay: 500, easing: 'ease-out' }
          }"
          class="img-home"
        >
          <div class="img-box hover-effect">
            <img class="outer-shadow" src="/images/nico2.png" alt="photo" />
            
            <!-- Linhas de código animadas ao redor -->
            <div class="code-lines">
              <span
                v-for="(line, index) in codeLines"
                :key="index"
                class="code-line"
                :style="randomStyle()"
              >
                {{ line }}
              </span>
            </div>

            <!-- Cantos com efeito glow -->
            <span class="corner top-left"></span>
            <span class="corner top-right"></span>
            <span class="corner bottom-left"></span>
            <span class="corner bottom-right"></span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  min-height: calc(100vh - 140px);
  background-color: var(--cor-fundo-escuro);
  color: var(--cor-branca);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  overflow: hidden;
  position: relative;
}

.container {
  padding-inline: 30px;
  max-width: 1200px;
  margin: auto;
}

.full-screen {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Alinha conteúdo ao centro */
  align-items: center;
  width: 100%;
  backdrop-filter: blur(6px);
  position: relative; /* Necessário para garantir que a imagem e o texto possam flutuar */
}

.texto-home {
  flex: 1 1 50%;
  padding-inline: 30px;
  padding-block: 20px;
  max-width: 520px;
  margin: auto;
  z-index: 2;
  text-align: left;
  position: relative; /* Permitirá o flutuar do texto */
}

.img-home {
  flex: 1 1 50%;
  padding: 20px;
  text-align: center;
  z-index: 3;
  position: relative;
}

.img-home .img-box {
  position: relative;
  max-width: 380px;
  margin: auto;
  padding: 10px;
}

.img-home .img-box img {
  width: 100%;
  border-radius: 20%;
  border: 4px solid var(--cor-primaria);
  box-shadow: 0 0 15px var(--cor-secundaria);
}

/* Texto */
.texto-home p {
  font-family: var(--fonte-primaria);
  font-size: var(--fonte-grande);
  margin-bottom: 10px;
  color: var(--cor-secundaria);
}

.texto-home h1 {
  font-family: var(--fonte-primaria);
  font-size: var(--fonte-gigante);
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--cor-primaria);
  text-shadow: 0 0 5px var(--cor-primaria);
}

.texto-home h2 {
  font-family: var(--fonte-secundaria);
  font-size: var(--fonte-extra-grande);
  letter-spacing: 2px;
  margin-bottom: 30px;
  color: var(--cor-branca);
}

/* Redes sociais */
.redes-sociais {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 10px;
}

.redes-sociais a {
  font-size: 2.4rem;
  color: var(--cor-primaria);
  padding: 12px;
  border-radius: 20%;
  border: 2px solid var(--cor-primaria);
  transition: all 0.4s ease;
  box-shadow: 0 0 8px var(--cor-primaria);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.redes-sociais a:hover {
  color: var(--cor-fundo-escuro);
  box-shadow: 0 0 20px var(--cor-primaria), 0 0 30px var(--cor-secundaria);
  transform: scale(1.1);
}

.redes-sociais a:hover svg {
  color: whitesmoke;
  filter: drop-shadow(0 0 10px #00bfff);
  transition: all 0.4s ease;
}

/* Linhas de código animadas */
.code-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 4;
}

.code-line {
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 1.2rem;
  color: #00fff7;
  opacity: 1;
  white-space: nowrap;
  animation: floatLine 8s ease-in-out infinite;
  filter: drop-shadow(0 0 3px #01b7ff);
  max-width: 250px;
}

@keyframes floatLine {
  0% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    transform: translateY(-10px) translateX(10px) rotate(1deg);
    opacity: 1;
  }
  75% {
    transform: translateY(10px) translateX(-10px) rotate(-1deg);
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
}

/* Cantos com brilho */
.corner {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: var(--cor-secundaria);
  box-shadow: 0 0 10px var(--cor-primaria), 0 0 20px var(--cor-secundaria);
  z-index: 5;
}

.top-left { top: 0; left: 0; }
.top-right { top: 0; right: 0; }
.bottom-left { bottom: 0; left: 0; }
.bottom-right { bottom: 0; right: 0; }

/* Responsivo */
@media (max-width: 900px) {
  .full-screen {
    flex-direction: column;
    text-align: center;
  }

  .texto-home,
  .img-home {
    flex: 1 1 100%;
    text-align: center;
  }

  .texto-home h1 {
    font-size: 3.5rem;
  }

  .texto-home h2 {
    font-size: 2rem;
  }

  .img-home {
    margin-top: 40px;
  }

  .img-home .img-box {
    max-width: 320px;
  }

  .redes-sociais {
    justify-content: center;
  }
}
</style>
