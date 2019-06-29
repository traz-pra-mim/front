<template>
  <div>
    <div class="" style="width: 100%; height: 10px; background-color: #21d192;"></div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#!" @click="$router.push('/')">Traz pra mim</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="#!" @click="$router.push('/')">Início</a>
          <a class="nav-item nav-link" href="#!" @click="$router.push('/offer')">Ofertas</a>
          <a
            v-if="logado"
            class="nav-item nav-link"
            href="#!"
            @click="$router.push('/offerin')"
          >Cadastrar Oferta</a>
          <a
            v-if="!logado"
            class="nav-item nav-link"
            href="#!"
            @click="$router.push('/login')"
          >Login</a>
          <a v-if="!logado" class="nav-item nav-link" href="#!" @click="$router.push('/register')">Registrar</a>
          <!--<a v-if="logado" @click="logout" class="nav-item nav-link" href="#!">Sair</a>-->
        </div>
      </div>
      <a v-if="logado" @click="logout" class="text-secondary nav-item nav-link" href="#!">Sair</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logado: false
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      window.location = "/";
    }
  },
  mounted() {
    if (localStorage.token != null) {
      this.logado = true;
    } else {
      this.logado = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
