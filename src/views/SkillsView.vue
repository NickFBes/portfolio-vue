<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const informacoes = document.querySelectorAll('.informacoes')
  const container = document.querySelector('.container-habilidades')

  informacoes.forEach((item) => {
    item.addEventListener('click', () => {
      const isAtivo = item.classList.contains('ativo')

      informacoes.forEach((el) => el.classList.remove('ativo'))
      container.classList.remove('bloqueado')

      if (!isAtivo) {
        item.classList.add('ativo')
        container.classList.add('bloqueado')

        setTimeout(() => {
          item.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 300)
      }
    })
  })
})
  
</script>

<script>
export default {
  data() {
    return {
      habilidades: [
        { titulo: 'JavaScript', icone: 'devicon devicon-javascript-plain', descricao: 'Manipulação dinâmica e lógica de programação avançada.' },
        { titulo: 'HTML5', icone: 'devicon devicon-html5-plain-wordmark', descricao: 'Criação de estruturas semânticas e acessíveis.' },
        { titulo: 'CSS3', icone: 'devicon devicon-css3-plain-wordmark', descricao: 'Estilização moderna, animações e responsividade.' },
        { titulo: 'GitHub', icone: 'devicon devicon-github-original', descricao: 'Versionamento e colaboração em projetos open source.' },
        { titulo: 'Git', icone: 'devicon devicon-git-plain', descricao: 'Controle de versões e fluxo de desenvolvimento.' },
        { titulo: 'Vue.js', icone: 'devicon devicon-vuejs-plain', descricao: 'Framework JavaScript progressivo para interfaces modernas.' },
        { titulo: 'PHP', icone: 'devicon devicon-php-plain', descricao: 'Desenvolvimento back-end e lógica de servidores.' },
        { titulo: 'MySQL', icone: 'devicon devicon-mysql-plain-wordmark', descricao: 'Banco de dados relacional e consultas SQL.' }
      ]
    }
  }
}
</script>

<template>
  <section class="habilidades section" id="habilidades">
    <div class="container">
      <div class="section-title">
        <h2>Compétences</h2>
      </div>

      <div class="container-habilidades">
        <div class="informacoes" v-for="(habilidade, index) in habilidades" :key="index">
          <div class="logo">
            <i :class="habilidade.icone"></i>
          </div>
          <h3>{{ habilidade.titulo }}</h3>
          <p>{{ habilidade.descricao }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.habilidades.section {
  background-color: var(--cor-fundo-escuro);
  padding: 80px 20px;
  color: var(--cor-branca);
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
  position: relative;
}

.informacoes {
  flex: 0 1 260px;
  background-color: var(--cor-fundo-cinza-claro);
  border-radius: 15px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 0 8px rgba(1, 183, 255, 0.1);
  transition: all 0.4s ease;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.informacoes .logo i {
  font-size: 5rem;
  color: var(--cor-primaria);
  transition: transform 0.4s ease, color 0.4s ease;
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
  opacity: 0;
  max-height: 0;
  transition: max-height 0.5s ease, opacity 0.4s ease;
}

.informacoes:hover {
  background-color: var(--cor-fundo-cinza-escuro);
  transform: scale(1.05);
  box-shadow: 0 0 15px var(--cor-secundaria), 0 0 25px var(--cor-primaria);
}

.informacoes:hover .logo i {
  color: var(--cor-branca);
  transform: scale(1.2) rotate(3deg);
}

.informacoes.ativo {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.05);
  background-color: var(--cor-fundo-cinza-escuro);
  z-index: 9999;
  width: 90%;
  max-width: 600px;
  border: 2px solid var(--cor-primaria);
  box-shadow: 0 0 20px var(--cor-secundaria), 0 0 30px var(--cor-primaria);
}

.informacoes.ativo p {
  max-height: 300px;
  opacity: 1;
  margin-top: 20px;
}

.container-habilidades.bloqueado .informacoes:not(.ativo) {
  filter: blur(1.5px) grayscale(80%);
  pointer-events: none;
  transform: scale(0.95);
  opacity: 0.4;
}

@media screen and (max-width: 768px) {
  .habilidades .container-habilidades {
    justify-content: center;
    gap: 20px;
    padding: 0 15px;
  }

  .informacoes {
    flex: 0 1 90%;
    max-width: 250px;
    margin: 0 auto;
  }

  .informacoes.ativo {
    width: 95vw;
    max-width: 95%;
    height: auto;
    max-height: 80vh;
    overflow-y: auto;
    padding: 40px 20px;
  }
}
</style>