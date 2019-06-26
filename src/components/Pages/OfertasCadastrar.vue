<template>
  <div>
    <div v-if="logado">
     
    </div>
    <div v-else class="container">
      <h3>Por favor, logue no sistema para poder cadastrar.</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: "OfertasCadastrar",
 
  data() {
    return {
      offer: [],
      logado: false
    };
  },
  mounted() {
    //this.$http.get("/offer/1").then(response => {
    //  this.offer = response.data;
    //});
    if (localStorage.token != null) {
      this.logado = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
