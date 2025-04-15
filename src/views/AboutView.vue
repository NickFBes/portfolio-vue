<script setup>
</script>

<template>
  <section class="sobre-mim section" id="sobre-mim">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2>À propos de moi</h2>
        </div>
      </div>
      <div class="row conteudo">
        <div class="imagem-sobre-mim">
          <div class="img-box">
            <img src="/images/nico.png" alt="foto sobre mim" />
          </div>
        </div>
        <div class="informacoes-sobre-mim">
          <p>
            Bonjour ! Je m'appelle Nicolas Bes et je suis un développeur web en formation ! J'aime BEAUCOUP le domaine de la technologie, et je suis sûr que je peux contribuer à n'importe quelle équipe avec mes compétences.
          </p>
          <p>
            Je me mets toujours au défi avec de nouveaux projets et je participe à des communautés de programmation pour obtenir des retours d'autres développeurs et développeuses. J'aime ÉNORMÉMENT le domaine de la technologie. 😁
          </p>

          <div class="botoes">
            <a target="_blank" href="/src/arquivos/cv.pdf" class="botao">Regardez mon CV</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 5rem 2rem;
  
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

.row.conteudo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.imagem-sobre-mim {
  flex: 1 1 300px;
  text-align: center;
  padding: 20px;
}

.img-box {
  padding: 15px;
  border-radius: 20px;
  display: inline-block;
}

.img-box img {
  max-width: 100%;
  border-radius: 20%;
  border: 6px solid var(--cor-primaria);
  box-shadow: 0 0 15px var(--cor-secundaria);
  transition: 0.3s ease;
}

.img-box img:hover {
  box-shadow: 0 0 30px var(--cor-secundaria);
}

.informacoes-sobre-mim {
  flex: 1 1 400px;
  padding: 20px 30px;
  font-family: var(--fonte-secundaria);
}

.informacoes-sobre-mim p {
  font-size: var(--fonte-normal);
  margin-bottom: 20px;
  line-height: 1.7;
  color: #e4e4e4;
}

.botoes {
  margin-top: 40px;
}

.botao {
  font-family: var(--fonte-primaria);
  text-transform: uppercase;
  color: var(--cor-branca);
  font-size: var(--fonte-normal);
  font-weight: 800;
  padding: 12px 24px;
  border-radius: 10px;
  letter-spacing: 1.5px;
  border: 2px solid var(--cor-primaria);
  background: transparent;
  text-decoration: none;
  text-shadow: 0 0 5px var(--cor-primaria);
  transition: 0.2s ease;
  box-shadow: 0 0 10px var(--cor-primaria);
  display: inline-block;
}

.botao:hover {
  color: whitesmoke;
  transform: scale(1.08);
  text-shadow:
    0 0 10px #00bfff,
    0 0 10px #00bfff,
    0 0 10px #00bfff;
  
  
  transition: all 0.5s ease;
}
</style>
