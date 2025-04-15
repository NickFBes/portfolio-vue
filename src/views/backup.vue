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
        <div class="swiper-slide projeto">
          <a href="https://github.com">
            <img src="../assets/images/projet1.png" alt="Nome do projeto" />
            <h3>Projet 1</h3>
            <div class="informacoes-projeto">
              <p>Projet réalisé en utilisant HTML, CSS et JavaScript.</p>
              <p>🔗 Ver no GitHub Pages</p>
            </div>
          </a>
        </div>

        <div class="swiper-slide projeto">
          <a href="https://github.com">
            <img src="../assets/images/projet5.png" alt="Nome do projeto" />
            <h3>Projet 2</h3>
            <div class="informacoes-projeto">
              <p>Projet réalisé en utilisant HTML, CSS et JavaScript.</p>
              <p>🔗 Ver no GitHub Pages</p>
            </div>
          </a>
        </div>

        <div class="swiper-slide projeto">
          <a href="https://github.com">
            <img src="../assets/images/projet3.png" alt="Nome do projeto" />
            <h3>Projet 3</h3>
            <div class="informacoes-projeto">
              <p>Projet réalisé en utilisant HTML, CSS et JavaScript.</p>
              <p>🔗 Ver no GitHub Pages</p>
            </div>
          </a>
        </div>

        <div class="swiper-slide projeto">
          <a href="https://github.com">
            <img src="../assets/images/projet4.png" alt="Nome do projeto" />
            <h3>Projet 4</h3>
            <div class="informacoes-projeto">
              <p>Projet réalisé en utilisant HTML, CSS et JavaScript.</p>
              <p>🔗 Ver no GitHub Pages</p>
            </div>
          </a>
        </div>
      </div>

      <!-- Pagination + Navigation -->
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


/* PROJETOS */
.projetos .container-projetos {
    display: flex;
         
    padding: 1rem;
    margin: 0 auto;
    
        
}

@media(max-width: 1280px) { 
    .projetos .container-projetos {
        padding: 0 var(--mobile-padding);
    }
}

.projetos .container-projetos .projeto {
    border-radius: 5px;
    transition: all 0.3s ease;
    -moz-transition: all .3s ease;
    -o-transition: all .3s ease;
    -webkit-transition: all .3s ease;
    position: relative;            
}

.projetos .container-projetos .projeto:hover,
.projetos .container-projetos .projeto:hover .informacoes-projeto {
    opacity: 0.8;
}

.projetos .container-projetos .projeto img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
  height: auto;
  display: block;
}

.projetos .container-projetos .projeto .informacoes-projeto {
    padding: 20px 20px;    
    background-color: var(--cor-fundo-escuro);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;    
    transition: all .3s ease;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.projetos .container-projetos .projeto .informacoes-projeto p:nth-child(2) {
    font-weight: 500;
    margin-top: 10px;
    font-size: 1.4rem;
}

.projetos .container-projetos .projeto h3 {
    font-size: 2rem;
    font-weight: 500;    
    position: absolute;      
    opacity: 0.7;
    background-color: var(--cor-fundo-escuro);
    width: 100%;
    padding-left: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    bottom: 0;
}


/*********************   SWIPER   ***********************/

.swiper {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
  }


  



</style>



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