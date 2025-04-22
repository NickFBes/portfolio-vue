<script setup>
</script>

<template>
  <footer class="footer">
    <div class="container">
      <h2 class="footer-title">
        <router-link to="/contact" class="contact-link" @click="fecharMenu">
          Envoyez-moi un message !
          <br>
        </router-link>
      </h2>
      <p class="footer-bottom">All rights reserved © Nicolas Bes 2025</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--cor-fundo-footer);
  border-top: 1px solid var(--cor-primaria);
  padding: 2rem;
  text-align: center;
  font-family: var(--fonte-secundaria);
  color: var(--cor-branca);
  box-shadow: inset 0 5px 20px var(--cor-footer-shadow);
  border-radius: 5% 5% 0 0;
}

.footer-title {
  margin: 0;
  font-size: 2.4rem;
  font-weight: bold;
}

.contact-link {
  color: var(--cor-branca);
  text-decoration: none;
  text-shadow: 0 0 1px var(--cor-primaria);
  transition: all 0.3s ease;
}

.contact-link:hover {
  color: var(--cor-navlisthover);
  transform: scale(1.08);
  text-shadow: 0 0 3px #00bfff, 0 0 3px #00bfff;
  transition: all 0.5s ease;
}

.contact-sub {
  font-size: 1.95rem;
  display: block;
  margin-top: 0.3rem;
}

.footer-bottom {
  margin-top: 1.5rem;
  font-size: 1.2rem;
  opacity: 0.9;
}

</style>
