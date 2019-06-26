<template>
  <div class="jumbotron-fluid">
    <div class="container">
      <br/>
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            Oferta
            <span class="text-muted">para trazer</span>
          </h2>
          <p
            class="lead"
          >Tá indo para sua terra natal? <span class="text-muted">Ajude conterrâneos a trazerem coisas que desejam da terra de vocês!</span></p>
          <a @click="$router.push('/offerin')"  class="btn btn-primary">Cadastre a oferta</a>
        </div>
        <div class="col-md-5">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="250"
            height="250"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder:250x250"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"></rect>
            <text x="50%" y="50%" fill="#aaa" dy=".3em">200x200</text>
          </svg>
        </div>
      </div>
      <hr class="featurette-divider">
      <div class="row featurette">
        <div class="col-md-5">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="250"
            height="250"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder:250x250"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"></rect>
            <text x="50%" y="50%" fill="#aaa" dy=".3em">200x200</text>
          </svg>
        </div>
        <div class="col-md-7">
          <h2 class="featurette-heading">
            Ofertas
            <span class="text-muted">para buscarem</span>
          </h2>
          <p
            class="lead"
          >Quer que alguém traga algo? <span class="text-muted">Veja as ofertas já cadastradas!</span></p>
          <a @click="$router.push('/offer')" class="btn btn-primary">Busque ofertas</a>
        </div>
      </div>
    </div>
    <br/>
    <br/>
  </div>
</template>

<script>

export default {
  name: "PaginaInicial",
  
  data() {
    return {
      offer: []
    };
  },
  mounted() {
    this.$http.get("/offer/1").then(response => {
      this.offer = response.data;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
