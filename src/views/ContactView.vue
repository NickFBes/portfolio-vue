<script setup>
import { ref } from 'vue'

const codeLines = ref([
  "<form><input type='text' placeholder='Votre nom'></form>",
  "document.querySelector('#form').submit();",
  "fetch('/send', { method: 'POST' });",
  "echo 'Merci pour votre message ';",
  "// TODO: Send cookies with response 🍪",
  "<button type='submit'>Envoyer</button>",
  "if (!message) alert('Rédige un message d'abord');",
])

function randomStyle() {
  const top = Math.floor(Math.random() * 130)
  const left = Math.floor(Math.random() * 100)
  const size = (Math.random() * 0.7 + 1).toFixed(2)
  const delay = (Math.random() * 6).toFixed(2)
  const zIndex = Math.random() < 0.3 ? 2 : -1

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
  <section class="contact section">
    <div class="container">
      <div class="row full-screen alinhar-itens-no-centro">
        <!-- Formulário -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -500 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 1000, easing: 'ease-out' }
          }"
          class="form-contact"
        >
          <h1>Entrer en contact</h1>
          <p>Remplis le formulaire ci-dessous ou connecte-toi sur les réseaux.</p>
          <form class="form">
            <input type="text" placeholder="Votre nom" required />
            <input type="email" placeholder="Votre e-mail" required />
            <textarea placeholder="Votre message" rows="5" required></textarea>
            <button type="submit">Envoyer ✉️</button>
          </form>
        </div>

        <!-- Imagem + Códigos -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 500 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 1000, delay: 400, easing: 'ease-out' }
          }"
          class="img-contact"
        >
          <div class="img-box hover-effect">
            <img class="outer-shadow" src="/images/nico2.png" alt="photo" />
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
.contact {
  background-color: var(--cor-fundo-escuro);
  color: var(--cor-branca);
  padding: 60px 20px;
  min-height: 100vh;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding-inline: 30px;
}

.full-screen {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(6px);
}

.form-contact {
  flex: 1 1 50%;
  padding-inline: 30px;
  padding-block: 20px;
  max-width: 520px;
  z-index: 2;
  text-align: left;
}

.form-contact h1 {
  font-family: var(--fonte-primaria);
  font-size: var(--fonte-gigante);
  margin-bottom: 10px;
  color: var(--cor-primaria);
}

.form-contact p {
  font-family: var(--fonte-secundaria);
  font-size: var(--fonte-media);
  margin-bottom: 20px;
  color: #ccc;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form input,
.form textarea {
  background: transparent;
  border: 1px solid var(--cor-primaria);
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;
  color: white;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s, box-shadow 0.3s;
  font-family: var(--fonte-secundaria);
}

.form input:focus,
.form textarea:focus {
  border-color: var(--cor-secundaria);
  box-shadow: 0 0 8px var(--cor-secundaria);
}

.form button {
  background-color: var(--cor-primaria);
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  font-family: var(--fonte-secundaria);
}

.form button:hover {
  background-color: var(--cor-secundaria);
}

/* Imagem + código animado */
.img-contact {
  flex: 1 1 50%;
  padding: 20px;
  text-align: center;
}

.img-contact .img-box {
  max-width: 380px;
  margin: auto;
  position: relative;
  padding: 10px;
}

.img-contact img {
  width: 100%;
  border-radius: 20%;
  border: 4px solid var(--cor-primaria);
  box-shadow: 0 0 15px var(--cor-secundaria);
  z-index: 1;
}

/* Código animado */
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

  .form-contact,
  .img-contact {
    flex: 1 1 100%;
    text-align: center;
  }

  .img-contact {
    margin-top: 40px;
  }

  .img-contact .img-box {
    max-width: 320px;
  }
}
</style>
