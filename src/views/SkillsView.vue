<script setup>
import { ref } from 'vue'

const habilidades = ref([
  { titulo: 'JavaScript', icone: 'devicon devicon-javascript-plain', descricao: 'Manipulation dynamique et logique de programmation avancée.' },
  { titulo: 'HTML5', icone: 'devicon devicon-html5-plain-wordmark', descricao: 'Création de structures sémantiques et accessibles.' },
  { titulo: 'CSS3', icone: 'devicon devicon-css3-plain-wordmark', descricao: 'Stylisation moderne, animations et réactivité.' },
  { titulo: 'GitHub', icone: 'devicon devicon-github-original', descricao: 'Versionnage et collaboration sur des projets open source.' },
  { titulo: 'Git', icone: 'devicon devicon-git-plain', descricao: 'Contrôle des versions et flux de développement.' },
  { titulo: 'Vue.js', icone: 'devicon devicon-vuejs-plain', descricao: 'Framework JavaScript progressif pour interfaces modernes.' },
  { titulo: 'PHP', icone: 'devicon devicon-php-plain', descricao: 'Développement back-end et logique des serveurs.' },
  { titulo: 'MySQL', icone: 'devicon devicon-mysql-plain-wordmark', descricao: 'Base de données relationnelle et requêtes SQL.' }
])

const ativoIndex = ref(null)

const toggleCard = (index) => {
  ativoIndex.value = ativoIndex.value === index ? null : index
}
</script>

<template>
  <section class="habilidades section" id="habilidades">
    <div class="container">
      <div class="section-title">
        <h2>Compétences</h2>
      </div>

      <div class="container-habilidades">
        <div
          v-for="(habilidade, index) in habilidades"
          :key="index"
          class="card-wrapper"
        >
          <div
            @click="toggleCard(index)"
            v-motion
            :initial="{ opacity: 0, y: 60 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 800,
                easing: 'ease-out'
              }
            }"
            class="informacoes"
            :class="{ ativo: ativoIndex === index }"
          >
            <div class="logo">
              <i :class="habilidade.icone"></i>
            </div>
            <h3>{{ habilidade.titulo }}</h3>

            <transition name="fade-slide">
              <p v-if="ativoIndex === index">{{ habilidade.descricao }}</p>
            </transition>
          </div>
        </div>
      </div>

      <!-- Backdrop opcional -->
      <div
        v-if="ativoIndex !== null"
        class="backdrop"
        @click="ativoIndex = null"
      ></div>
    </div>
  </section>
</template>

<style scoped>
.habilidades.section {
  background-color: var(--cor-fundo-escuro);
  padding: 5rem 2rem;
  color: var(--cor-branca);
  position: relative;
}

.section-title h2 {
  font-size: var(--fonte-gigante);
  color: var(--cor-primaria);
  margin-bottom: 60px;
  text-align: center;
  letter-spacing: 1.5px;
  font-family: var(--fonte-primaria);
}

.container-habilidades {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.card-wrapper {
  flex: 0 1 260px;
  position: relative;
}

.informacoes {
  background: linear-gradient(145deg, var(--cor-fundo-cinza-claro), #1e1e1e);
  border: 1px solid rgba(1, 183, 255, 0.2);
  border-radius: 20px;
  padding: 30px 20px;
  text-align: center;
  box-shadow:
    0 0 10px rgba(72, 99, 252, 0.15),
    0 0 20px rgba(1, 183, 255, 0.05);
  transition: all 0.4s ease;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(3px);
}

.informacoes:hover {
  background: radial-gradient(circle at 20% 20%, #2d2d2d, var(--cor-fundo-cinza-escuro));
  transform: scale(1.06);
  border: 1px solid var(--cor-primaria);
  box-shadow:
    0 0 15px var(--cor-secundaria),
    0 0 25px var(--cor-primaria),
    inset 0 0 10px rgba(1, 183, 255, 0.2);
}

.informacoes.ativo {
  position: fixed;
  top: 40%;
  left: 40%;
  
  z-index: 999;
  width: 90%;
  max-width: 400px;
  background: linear-gradient(145deg, var(--cor-fundo-cinza-claro), #1e1e1e);
  box-shadow:
    0 0 25px var(--cor-secundaria),
    0 0 35px var(--cor-primaria),
    inset 0 0 10px rgba(1, 183, 255, 0.2);
}

.informacoes .logo i {
  font-size: 5rem;
  color: var(--cor-primaria);
  transition: transform 0.4s ease, color 0.4s ease, text-shadow 0.4s ease;
  text-shadow: 0 0 8px rgba(72, 99, 252, 0.3);
}

.informacoes:hover .logo i {
  color: var(--cor-branca);
  transform: scale(1.2) rotate(3deg);
  text-shadow: 0 0 15px var(--cor-secundaria);
}

.informacoes h3 {
  font-size: var(--fonte-extra-grande);
  color: var(--cor-branca);
  margin: 15px 0 10px;
  font-family: var(--fonte-primaria);
}

.informacoes p {
  font-size: var(--fonte-normal);
  font-family: var(--fonte-secundaria);
  line-height: 1.6;
  color: var(--cor-branca);
  margin-top: 20px;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(4px);
  z-index: 998;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(10px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  max-height: 300px;
  transform: translateY(0);
}

@media screen and (max-width: 768px) {
  .habilidades .container-habilidades {
    justify-content: center;
    gap: 20px;
    padding: 0 15px;
  }

  .card-wrapper {
    flex: 0 1 90%;
    max-width: 250px;
    margin: 0 auto;
  }
}
</style>
