<script setup>
</script>

<template>
  <footer class="footer">
    <div class="container">
      <h2>Envoyez-moi un message !</h2>
      <div class="social-links">
        <a href="#" aria-label="LinkedIn">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="#" aria-label="WhatsApp">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
        <a href="#" aria-label="GitHub">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="#" aria-label="Instagram">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  
  text-align: center;
  background: linear-gradient(180deg, #0b0f2b 0%, #111827 100%);
  border-top: 1px solid var(--cor-primaria);
  box-shadow: inset 0 5px 20px rgba(0, 183, 255, 0.2);
  border-radius: 5% 5% 0 0;
}

.footer .container {
  padding: 5rem 2rem;
}

.footer h2 {
  font-family: var(--fonte-secundaria);
  font-size: var(--fonte-normal);
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  color: var(--cor-branca);
  text-shadow: 0 0 5px var(--cor-primaria), 0 0 10px var(--cor-secundaria);
}

/* Redes sociais */
.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--cor-branca);
  transition: all 0.5s ease;
}

.social-links a:hover {
  transform: scale(1.1);
}

.social-links a:hover svg {
  color: whitesmoke;
  filter: drop-shadow(0 0 10px #00bfff) drop-shadow(0 0 10px #00bfff);
  transition: all 0.5s ease;
}
</style>
