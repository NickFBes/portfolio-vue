<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import emailjs from "emailjs-com";

const nome = ref("");
const email = ref("");
const mensagem = ref("");
const status = ref("");

const enviarEmail = () => {
  const templateParams = {
    from_name: nome.value,
    from_email: email.value,
    message: mensagem.value,
    time: new Date().toLocaleString('fr-FR'),
  };

  emailjs
    .send(
      "service_f36l95p",       // <- substitua pelo seu Service ID
      "template_68j6bif",      // <- substitua pelo seu Template ID
      templateParams,
      "rsQYNtDgOsypBOrSr"      // <- substitua pelo seu User ID (Public Key)
    )
    .then(() => {
      status.value = "Envoyée!";
      nome.value = "";
      email.value = "";
      mensagem.value = "";
    })
    .catch((error) => {
      status.value = "Error: " + error.text;
    });
};
</script>

<template>
  <section class="contact section">
    <div class="container">
      <div class="row full-screen alinhar-itens-no-centro">
        <!-- Formulário -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -500 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 1000, easing: 'ease-out' },
          }"
          class="form-contact"
        >
          <h1>Entrer en contact</h1>
          <p>Remplis le formulaire ci-dessous.</p>
          <form class="form" @submit.prevent="enviarEmail">
            <input type="text" placeholder="Votre nom" required v-model="nome" />
            <input type="email" placeholder="Votre e-mail" required v-model="email" />
            <textarea placeholder="Votre message" rows="5" required v-model="mensagem"></textarea>
            <button type="submit">Envoyer</button>
            <p>{{ status }}</p>
          </form>
        </div>

        <!-- Informações de Contato -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 500 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 1000, delay: 400, easing: 'ease-out' },
          }"
          class="info-contact"
        >
          <h2>Mes réseaux</h2>
          <ul class="contact-links">
            <li>
              <a target="_blank">
                <font-awesome-icon icon="fa-solid fa-envelope" />
                nickfbes@proton.me
              </a>
            </li>
            <li>
              <a href="tel:+33000000000" target="_blank">
                <font-awesome-icon icon="fa-solid fa-phone" />
                +33 0 00 00 00 00
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/exemple" target="_blank">
                <font-awesome-icon icon="fa-brands fa-linkedin" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://wa.me/33000000000" target="_blank">
                <font-awesome-icon icon="fa-brands fa-whatsapp" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href="https://github.com/NickFBes" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://instagram.com/exemple" target="_blank">
                <font-awesome-icon icon="fa-brands fa-instagram" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.contact {
  background-color: var(--cor-fundo-escuro);
  color: var(--cor-branca);
  padding: 60px 20px;
  min-height: calc(100vh - 158.4px);
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding-inline: 30px;
}

.full-screen {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.form-contact,
.info-contact {
  flex: 1 1 45%;
  padding: 20px 30px;
  max-width: 520px;
}

.form-contact h1,
.info-contact h2 {
  font-family: var(--fonte-primaria);
  font-size: var(--fonte-gigante);
  color: var(--cor-primaria);
  margin-bottom: 10px;
}

.form-contact p {
  font-family: var(--fonte-secundaria);
  font-size: var(--fonte-media);
  font-weight: 600;
  color: var(--cor-branca);
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form input,
.form textarea {
  background: transparent;
  border: 1px solid var(--cor-primaria);
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;
  font-size: 2rem;
  font-family: var(--fonte-secundaria);
  outline: none;
  transition: border 0.3s, box-shadow 0.3s;
  color: var(--cor-branca);
}

.form input:focus,
.form textarea:focus {
  border-color: var(--cor-secundaria);
  box-shadow: 0 0 8px var(--cor-secundaria);
}

.form button {
  background-color: var(--cor-primaria);
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  font-weight: bold;
  font-family: var(--fonte-secundaria);
  transition: background-color 0.3s;
}

.form button:hover {
  filter: brightness(1.5) drop-shadow(0 0 2px var(--cor-primaria));
  background-color: var(--cor-secundaria);
  color: whitesmoke;
  filter: drop-shadow(0 0 10px #00bfff);
  transition: all 0.4s ease;
}

/* Contatos */
.contact-links {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-links li a {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--cor-branca);
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.8;
  font-family: var(--fonte-secundaria);
  transition: color 0.3s;
}

.contact-links li a:hover {
  filter: brightness(1.5) drop-shadow(0 0 2px var(--cor-primaria));
}

.contact-links svg {
  font-size: 2.3rem;
}

.contact-links a:hover svg {
  color: whitesmoke;
  filter: brightness(1.5) drop-shadow(0 0 2px var(--cor-primaria));
  transition: all 0.4s ease;
}

/* Responsivo */
@media (max-width: 900px) {
  .full-screen {
    flex-direction: column;
  }

  .form-contact,
  .info-contact {
    flex: 1 1 100%;
    text-align: center;
  }

  .contact-links {
    align-items: center;
  }

  .contact-links li a {
    justify-content: center;
  }
}
</style>
