<script setup>
import { onMounted, ref } from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const projetos = ref([
  {
    id: 1,
    titulo: 'Carrousel Javascript',
    imagem: `${import.meta.env.BASE_URL}images/projet1.png`,
    descricao: "Ce projet consiste en un carrousel de boutons interactifs qui, lorsqu'ils sont cliqués, changent l'image de fond de la page. Réalisé uniquement avec JavaScript, il offre une expérience fluide et réactive. Chaque bouton représente une image différente, permettant à l'utilisateur de personnaliser l'apparence de la page en un clic.",
    link: 'https://nickfbes.github.io/tlou/'
  },
  {
    id: 2,
    titulo: 'Figma Challenge: Photosnap',
    imagem: `${import.meta.env.BASE_URL}images/projet2.png`,
    descricao: "Ce projet est une recréation du site Photosnap, réalisée à partir d'images conçues sur Figma. J'ai utilisé HTML, CSS et JavaScript pour donner vie à cette interface moderne et esthétique. Le site met en avant des galeries de photos, des fonctionnalités de partage et des options de filtrage, tout en offrant une expérience utilisateur fluide et interactive.",
    link: 'https://nickfbes.github.io/MyPhotosnap/'
  },
  {
    id: 3,
    titulo: 'Projet 3',
    imagem: `${import.meta.env.BASE_URL}images/projet3.png`,
    descricao: "Projet de portfolio professionnel.",
    link: 'https://github.com/seuusuario/projet3'
  },
  {
    id: 4,
    titulo: 'WeatherAPI',
    imagem: `${import.meta.env.BASE_URL}images/projet4.png`,
    descricao: 'Ce projet est une application web qui utilise la WeatherAPI pour afficher la météo actuelle dans n importe quelle ville. Développé avec HTML, CSS et JavaScript, le site permet aux utilisateurs de consulter des informations telles que la température et les conditions climatiques en temps réel. Il suffit d entrer le nom de la ville souhaitée pour obtenir des données mises à jour de manière simple et intuitive.',
    link: 'https://nickfbes.github.io/app-previsao-do-tempo-main2/'
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
      0: { slidesPerView: 1, spaceBetween: 16 },
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 40 }
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
          class="swiper-slide"
          v-for="projeto in projetos"
          :key="projeto.id"
        >
          <div class="projeto">
            <a :href="projeto.link" target="_blank" class="projeto-link">
              <img :src="projeto.imagem" :alt="projeto.titulo" />
              <h3>{{ projeto.titulo }}</h3>
              <div class="informacoes-projeto">
                <p>{{ projeto.descricao }}</p>
                <p>🔗 Link GitHub Pages</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </section>
</template>

<style scoped>
.projetos.section {
  min-height: 100vh;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
}

.section-title h2 {
  font-size: var(--fonte-gigante);
  color: var(--cor-primaria);
  margin-bottom: 60px;
  text-align: center;
  letter-spacing: 1.5px;
  font-family: var(--fonte-primaria);
}

.swiper.slider-wrapper {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  height: 70vh;
  display: flex;
  flex-direction: column;
}

.container-projetos {
  padding: 1rem;
  height: 100%;
}

.swiper-slide {
  display: flex;
  height: 100%;
}

.projeto {
  border-radius: 8px;
  transition: all 0.3s ease;
  overflow: hidden;
  background-color: var(--cor-fundo-escuro);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  align-items: stretch;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding-bottom: 1rem;
}

.projeto-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
}

.projeto img {
  width: 100%;
  display: block;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 250px;
  object-fit: cover;
}

.projeto h3 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--cor-primaria);
  padding: 1rem;
  text-align: center;
  background-color: var(--cor-fundo-escuro);
}

.informacoes-projeto {
  flex-grow: 1;
  padding: 1rem;
  background-color: var(--cor-fundo-escuro);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}

.informacoes-projeto p {
  font-size: 1.4rem;
  margin: 0;
}

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

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .swiper.slider-wrapper {
    height: auto;
  }

  .swiper-slide {
    height: auto;
  }

  .projeto {
    height: auto;
  }

  .projeto img {
    height: auto;
    max-height: 300px;
  }
}
</style>
