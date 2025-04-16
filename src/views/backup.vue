<script setup>
import { ref } from 'vue'

const codeLines = ref([
  "const baguette = require('fromage') || 'pain';",
  "if (devMood === 'crashed') reboot('café');", 
  "function getSum(a, b) { return a + b; }", 
  "SELECT * FROM users WHERE age > 18;", 
  "<?php echo 'Bonjour le monde!'; ?>", 
  "let greeting: string = 'Hello, TypeScript!';", 
  "const isEven = (num: number): boolean => num % 2 === 0;", 
  "for (let i = 0; i < 5; i++) { console.log(i); }", 
  "async function fetchData(url) { const response = await fetch(url); return response.json(); }", 
  "def factorial(n): return 1 if n == 0 else n * factorial(n - 1)", 
  "const arr = [1, 2, 3].map(x => x * 2);", 
  "INSERT INTO orders (product_id, quantity) VALUES (1, 5);", 
  "let x: number = 10; while (x > 0) { console.log(x--); }", 
  "class Animal { constructor(name) { this.name = name; } }", 
  "const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;", 
]);

// Função que retorna estilos aleatórios para cada linha
function randomStyle() {
  const top = Math.floor(Math.random() * 130)
  const left = Math.floor(Math.random() * 100)
  const size = (Math.random() * 0.7 + 1).toFixed(2)
  const delay = (Math.random() * 6).toFixed(2)
  
  // 30% de chance de aparecer na frente da imagem
  const isInFront = Math.random() < 0.3
  const zIndex = isInFront ? 2 : -1

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `scale(${size})`,
    animationDelay: `${delay}s`,
    zIndex
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
          :initial="{ opacity: 0, x: -850 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 1500, easing: 'ease-out' }
          }"
          class="texto-home"
        >
          <p>Salut !</p>
          <h1>Je suis Nicolas Bes</h1>
          <h2>Developpeur Web en formation.</h2>

          <!-- Redes sociais com animação encadeada -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 200 }"
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
          :initial="{ opacity: 0, x: 550 }"
          :enter="{
            opacity: 1,
            
            x: 0,
            transition: { duration: 1200, delay: 500, easing: 'ease-out' }
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
  justify-content: center; 
  align-items: center;
  width: 100%;
  backdrop-filter: blur(6px);
  position: relative;
}

.texto-home {
  flex: 1 1 50%;
  padding-inline: 30px;
  padding-block: 20px;
  max-width: 520px;
  margin: auto;
  z-index: 2;
  text-align: left;
  position: relative; 
}

.img-home {
  flex: 1 1 50%;
  padding: 20px;
  text-align: center;
  z-index: 1;
  position: relative;
}

.img-home .img-box {
  position: relative;
  max-width: 380px;
  margin: auto;
  padding: 10px;
  z-index: 1;
}

.img-home .img-box img {
  width: 100%;
  border-radius: 20%;
  border: 4px solid var(--cor-primaria);
  box-shadow: 0 0 15px var(--cor-secundaria);
  z-index: 1;
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
  text-shadow: 0 0 35px var(--cor-primaria);
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
  top: -40px;
  left: -200px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  
  
}

.code-line {
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
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
