<script setup>

</script>

<template>
<section class="home section">
    <div class="container">
      <div class="row full-screen alinhar-itens-no-centro">
        <div class="texto-home">
          <p>Salut 🖖</p>
          <h1>Je suis Nicolas Bes</h1>
          <h2>Developpeur Web en formation.</h2>

          <div class="redes-sociais">
            <a href="#" class="outer-shadow"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
            <a href="#" class="outer-shadow"><font-awesome-icon icon="fa-brands fa-whatsapp" /></a>
            <a href="#" class="outer-shadow"><font-awesome-icon icon="fa-brands fa-github" /></a>
            <a href="#" class="outer-shadow"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
          </div>
        </div>

        <div class="img-home">
          <div class="img-box">
            <img class="outer-shadow" src="/images/nico.png" alt="photo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.home {
  min-height: calc(100vh - 115px - 169px);
  background-color: var(--cor-fundo-escuro);
  color: var(--cor-branca);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 140px);
  padding: 60px 20px;
  overflow: hidden;
  position: relative;
}

.full-screen {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  backdrop-filter: blur(6px);
}

.texto-home {
  flex: 1 1 50%;
  padding: 20px;
  z-index: 2;
  text-align: left;
}

.img-home {
  flex: 1 1 50%;
  padding: 20px;
  text-align: center;
}

.img-home .img-box {
  max-width: 280px;
  margin: auto;
  padding: 10px;
  
}

.img-home .img-box img {
  width: 100%;
  border-radius: 20%;
  border: 4px solid var(--cor-primaria);
  box-shadow: 0 0 15px var(--cor-secundaria);
}

/* Tipografia */
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
  text-shadow: 0 0 5px var(--cor-primaria);
  
}

.texto-home h2 {
  font-family: var(--fonte-secundaria);
  font-size: var(--fonte-extra-grande);
  letter-spacing: 2px;
  margin-bottom: 30px;
  color: var(--cor-branca);
}

/* Redes Sociais */
.redes-sociais {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 10px;
}

.redes-sociais a {
  font-size: 2.4rem;
  color: var(--cor-primaria);
  padding: 12px;
  border-radius: 20%;
  border: 2px solid var(--cor-primaria);
  transition: all 0.4s ease;
  box-shadow: 0 0 12px var(--cor-primaria);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.redes-sociais a:hover {
  
  color: var(--cor-fundo-escuro);
  box-shadow: 0 0 20px var(--cor-primaria), 0 0 30px var(--cor-secundaria);
  transform: scale(1.1);
}

/* Efeito neon no ícone (SVG interno) */
.redes-sociais a:hover svg {
  color: whitesmoke;
  filter: drop-shadow(0 0 10px #00bfff) drop-shadow(0 0 10px #00bfff);
  transition: all 0.4s ease;
}

/* Animação */
@keyframes glowText {
  0% {
    text-shadow: 0 0 10px var(--cor-primaria), 0 0 20px var(--cor-secundaria);
  }
  100% {
    text-shadow: 0 0 20px var(--cor-secundaria), 0 0 40px var(--cor-primaria);
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