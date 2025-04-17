<script setup>
import { ref } from 'vue'

const codeLines = ref([
  // Vue.js
  "<template><div v-if=\"isVisible\">Bonjour Vue!</div></template>",

  // PHP
  "<?php echo htmlspecialchars($_POST['name']); ?>",

  // JavaScript
  "document.querySelectorAll('.btn').forEach(btn => btn.disabled = false);",

  // SQL
  "SELECT email FROM users WHERE verified = 1 ORDER BY created_at DESC;",

  // React (JSX)
  "const Button = () => <button onClick={() => alert('Clicked!')}>Click me</button>;",

  // TypeScript
  "function greet(name: string): string { return `Hello, ${name}`; }",

  // Python
  "with open('data.txt') as file: data = file.read()",  

  // C++
  "std::vector<int> nums = {1, 2, 3}; std::sort(nums.begin(), nums.end());",

  // Rust
  "let numbers = vec![1, 2, 3]; let doubled: Vec<_> = numbers.iter().map(|x| x * 2).collect();",

  // Kotlin
  "val names = listOf(\"Jean\", \"Marie\").map { it.uppercase() }",

  // Bash
  "grep -Ri 'error' ./logs/",

  // HTML
  "<input type=\"text\" placeholder=\"Votre email\" required />",

  // CSS
  ".highlight { background-color: #01b7ff; color: white; }",

  // Swift
  "let sum = (1...5).reduce(0, +)",

  // Go
  "fmt.Println(strings.ToUpper(\"bonjour\"))",

  // Easter eggs (3 discretas e engraçadas)
  "if (!coffee) throw new Error('No build before espresso');",
  "echo 'alias deploy=\"echo non\"' >> ~/.bashrc",
  "// TODO: Replace hacks with proper code before 2040"
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
            transition: { duration: 1200, easing: 'ease-out' }
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
  <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
  <a href="#"><font-awesome-icon icon="fa-brands fa-whatsapp" /></a>
  <a href="#"><font-awesome-icon icon="fa-brands fa-github" /></a>
  <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
</div>
        </div>

        <!-- Imagem com animação após redes sociais -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 550 }"
          :enter="{
            opacity: 1,
            
            x: 0,
            transition: { duration: 1000, delay: 500, easing: 'ease-out' }
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
  
}

.texto-home {
  flex: 1 1 50%;
  padding-inline: 30px;
  padding-block: 20px;
  max-width: 520px;
  
  z-index: 2;
  text-align: left;
 
}

.img-home {
  flex: 1 1 50%;
  padding: 20px;
  text-align: center;
  
}

.img-home .img-box {
 
  max-width: 380px;
  
  padding: 10px;
  
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
  transition: filter 0.3s ease;
}

.redes-sociais a:hover {
  filter: brightness(1.5) drop-shadow(0 0 2px var(--cor-primaria));
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
