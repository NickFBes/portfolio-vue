<script setup>
import { ref } from 'vue'

const habilidades = ref([
  { titulo: 'JavaScript', icone: 'devicon devicon-javascript-plain', descricao: 'Manipulação dinâmica e lógica de programação avançada.' },
  { titulo: 'HTML5', icone: 'devicon devicon-html5-plain-wordmark', descricao: 'Criação de estruturas semânticas e acessíveis.' },
  { titulo: 'CSS3', icone: 'devicon devicon-css3-plain-wordmark', descricao: 'Estilização moderna, animações e responsividade.' },
  { titulo: 'GitHub', icone: 'devicon devicon-github-original', descricao: 'Controle de versão e colaboração em projetos open source.' },
  { titulo: 'Git', icone: 'devicon devicon-git-plain', descricao: 'Gerenciamento de versões e fluxo de trabalho ágil.' },
  { titulo: 'Vue.js', icone: 'devicon devicon-vuejs-plain', descricao: 'Framework progressivo para interfaces de usuário interativas.' },
  { titulo: 'PHP', icone: 'devicon devicon-php-plain', descricao: 'Desenvolvimento back-end e integração de APIs.' },
  { titulo: 'MySQL', icone: 'devicon devicon-mysql-plain-wordmark', descricao: 'Gerenciamento de banco de dados e modelagem relacional.' }
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
        <h2>Competências</h2>
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
  border: 1px solid rgba(1, 183, 255, 0.15);
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
