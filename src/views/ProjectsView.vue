<script setup>
import { onMounted } from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

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
        <div class="swiper-slide projeto" v-for="n in 4" :key="n">
          <a href="https://github.com">
            <img :src="`/images/projet${n}.png`" :alt="`Projet ${n}`" />
            <h3>Projet {{ n }}</h3>
            <div class="informacoes-projeto">
              <p>Projet réalisé en utilisant HTML, CSS et JavaScript.</p>
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

/* Swiper container */
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
  max-height: 260px;
  object-fit: cover;
}

.projeto .informacoes-projeto {
  padding: 20px;
  background-color: var(--cor-fundo-escuro);
  opacity: 1;
  position: relative;
}

.projeto h3 {
  font-size: 2rem;
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

/* Responsivo */
@media (max-width: 768px) {
  .projeto {
    max-width: 90%;
    margin: 0 auto;
  }
}
</style>
