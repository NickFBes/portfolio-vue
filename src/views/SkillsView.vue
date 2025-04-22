<script setup>
import { ref } from 'vue'

const habilidades = ref([
  {
    titulo: 'JavaScript',
    icone: 'devicon devicon-javascript-plain',
    descricao: 'Manipulation dynamique du DOM, logique de programmation avancée et création d\'applications web interactives.'
  },
  {
    titulo: 'HTML5',
    icone: 'devicon devicon-html5-plain-wordmark',
    descricao: 'Création de structures sémantiques accessibles, respectant les bonnes pratiques de SEO et d\'accessibilité.'
  },
  {
    titulo: 'CSS3',
    icone: 'devicon devicon-css3-plain-wordmark',
    descricao: 'Stylisation moderne avec animations fluides, techniques de responsivité avancées et design adaptatif.'
  },
  {
    titulo: 'GitHub',
    icone: 'devicon devicon-github-original',
    descricao: 'Utilisation de GitHub pour le contrôle de version, la gestion de branches et la collaboration sur des projets open source.'
  },
  {
    titulo: 'Git',
    icone: 'devicon devicon-git-plain',
    descricao: 'Gestion des versions de code source, résolution de conflits et adoption de workflows agiles comme Git Flow.'
  },
  {
    titulo: 'Vue.js',
    icone: 'devicon devicon-vuejs-plain',
    descricao: 'Framework progressif pour créer des interfaces utilisateur dynamiques, modulaires et hautement réactives.'
  },
  {
    titulo: 'PHP',
    icone: 'devicon devicon-php-plain',
    descricao: 'Développement back-end robuste, intégration avec bases de données et création d\'APIs sécurisées.'
  },
  {
    titulo: 'MySQL',
    icone: 'devicon devicon-mysql-plain-wordmark',
    descricao: 'Gestion de bases de données relationnelles, conception de schémas optimisés et requêtes SQL performantes.'
  }
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
        <h2>Competénces</h2>
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
            :initial="{ opacity: 0, y: 30 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 500, delay: index * 100, easing: 'ease-out' }
            }"
            class="informacoes"
            :class="{ ativo: ativoIndex === index }"
          >
            <div class="logo">
              <i :class="habilidade.icone"></i>
            </div>
            <h3>{{ habilidade.titulo }}</h3>

            <transition name="accordion">
              <div v-if="ativoIndex === index" class="descricao">
                <p>{{ habilidade.descricao }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.habilidades.section {
  background-color: var(--cor-fundo-escuro);
  padding: 5rem 2rem;
  color: var(--cor-branca);
  min-height: calc(100vh - 200px);
}

.section-title h2 {
  font-size: var(--fonte-gigante);
  color: var(--cor-primaria);
  text-align: center;
  margin-bottom: 60px;
  font-family: var(--fonte-primaria);
}

.container-habilidades {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
}

.card-wrapper {
  flex: 0 1 220px;
}

.informacoes {
  background: var(--cor-fundo-infoskill);
  border: 1px solid rgb(1, 183, 255);
  border-radius: 20px;
  padding: 25px 18px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(4px);
}

.informacoes:hover {
  border-color: var(--cor-primaria);
  box-shadow: 0 0 12px rgba(1, 183, 255, 0.4);
  transform: translateY(-6px);
}

.logo i {
  font-size: 4rem;
  color: var(--cor-secundaria);
  transition: color 0.4s ease, text-shadow 0.4s ease;
  text-shadow: 0 0 6px rgba(72, 99, 252, 0.2);
}

.informacoes:hover .logo i {
  color: var(--cor-branca);
  text-shadow: 0 0 10px var(--cor-secundaria);
}

h3 {
  margin-top: 10px;
  font-size: var(--fonte-grande);
  color: var(--cor-branca);
  font-family: var(--fonte-primaria);
}

.descricao {
  margin-top: 15px;
  overflow: hidden;
}

.descricao p {
  font-size: var(--fonte-normal);
  font-family: var(--fonte-secundaria);
  line-height: 1.6;
  color: var(--cor-branca);
}

/* Animação suave do accordion */
.accordion-enter-active, .accordion-leave-active {
  transition: max-height 0.4s ease, opacity 0.4s ease;
}
.accordion-enter-from, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-enter-to, .accordion-leave-from {
  max-height: 300px;
  opacity: 1;
}

/* Responsividade */
@media (max-width: 768px) {
  .card-wrapper {
    flex: 0 1 90%;
    max-width: 240px;
    margin: 0 auto;
  }
}

</style>
