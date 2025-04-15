<script setup>
import { onMounted, ref } from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const projetos = ref([
  {
    id: 1,
    titulo: 'Projet 1',
    imagem: '/images/projet1.png',
    descricao: 'Projet réalisé en utilisant HTML, CSS et JavaScript.',
    link: 'https://github.com/seuusuario/projet1'
  },
  {
    id: 2,
    titulo: 'Projet 2',
    imagem: '/images/projet2.png',
    descricao: 'Projet Vue avec API et Firebase.',
    link: 'https://github.com/seuusuario/projet2'
  },
  {
    id: 3,
    titulo: 'Projet 3',
    imagem: '/images/projet3.png',
    descricao: 'Projet de portfolio professionnel.',
    link: 'https://github.com/seuusuario/projet3'
  },
  {
    id: 4,
    titulo: 'Projet 4',
    imagem: '/images/projet4.png',
    descricao: 'Projet fullstack avec Node.js et MongoDB.',
    link: 'https://github.com/seuusuario/projet4'
  }
])

onMounted(() => {
  new Swiper('.slider-wrapper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  })
})
</script>

<template>
  <section class="projetos section" id="projetos">
    <div class="row">
      <div class="section-title">
        <h2>Mes projets</h2>
      </div>
    </div>

    <div class="swiper slider-wrapper">
      <div class="swiper-wrapper container-projetos">
        <div
          class="swiper-slide projeto"
          v-for="projeto in projetos"
          :key="projeto.id"
        >
          <a :href="projeto.link" target="_blank">
            <img :src="projeto.imagem" :alt="projeto.titulo" />
            <h3>{{ projeto.titulo }}</h3>
            <div class="informacoes-projeto">
              <p>{{ projeto.descricao }}</p>
              <p>🔗 Ver no GitHub Pages</p>
            </div>
          </a>
        </div>
      </div>

      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </section>
</template>

<style scoped>
.section-title h2 {
  font-size: var(--fonte-gigante);
  color: var(--cor-primaria);
  margin-bottom: 60px;
  text-align: center;
  letter-spacing: 1.5px;
  font-family: var(--fonte-primaria);
}

.swiper {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
}

.container-projetos {
  display: flex;
  padding: 1rem;
  margin: 0 auto;
}

.projeto {
  border-radius: 5px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background-color: var(--cor-fundo-escuro);
}

.projeto:hover {
  box-shadow: 0 0 20px var(--cor-secundaria);
  transform: scale(1.01);
  z-index: 1;
}

.projeto img {
  width: 100%;
  display: block;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  max-height: 420px;
  object-fit: cover;
}

.projeto .informacoes-projeto {
  padding: 20px;
  background-color: var(--cor-fundo-escuro);
  opacity: 1;
  position: relative;
}

.projeto h3 {
  font-size: 2.2rem;
  font-weight: 600;
  background-color: var(--cor-fundo-escuro);
  width: 100%;
  padding: 10px 20px;
  color: var(--cor-primaria);
}

.projeto .informacoes-projeto p {
  font-size: 1.4rem;
  margin-top: 10px;
}

/* Botões de navegação do Swiper */
.swiper-button-next,
.swiper-button-prev {
  color: var(--cor-primaria);
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid var(--cor-primaria);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 10px var(--cor-primaria);
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  
  
  box-shadow: 0 0 15px var(--cor-primaria), 0 0 30px var(--cor-secundaria);
}

/* Ícones das setas (ajustar se estiver usando setas como imagens) */
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .projeto {
    max-width: 90%;
    margin: 0 auto;
  }
}
</style>
