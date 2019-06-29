<template>
  <div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <h2>{{ offer.title }}</h2>
        </div>
        <div class="offset-sm-5 col-sm-3">
          <h5>Criado por {{ offer.user }}</h5>
        </div>
      </div>
      <div class="row col-sm-12">
        <h4>{{ offer.description }}</h4>
      </div>
      <h6>
        <span class="text-muted">{{ offer.type }}</span>
      </h6>
      <br>
      <br>
      <div class="row">
        <div class="col-sm-4">
          <h5>
            <strong>Peso máximo:</strong>
            {{offer.weight}} kg
          </h5>
          <h5>
            <strong>Preço máximo:</strong>
            R$ {{ offer.price }}
          </h5>
          <hr class="featurette-divider">
          <h5>
            <strong>Dia da ida:</strong>
            {{ moment(offer.departure).format('DD/MM/YYYY')}}
          </h5>
          <h5>
            <strong>Dia da volta:</strong>
            {{ moment(offer.arrival).format('DD/MM/YYYY')}}
          </h5>
        </div>
        <div class="offset-sm-4 col-sm-4">
          <h5>
            <strong>Bairro:</strong>
            {{offer.neighborhood}}
          </h5>
          <h5>
            <strong>Cidade:</strong>
            {{offer.city}}
          </h5>
          <h5>
            <strong>Estado:</strong>
            {{offer.state}}
          </h5>
        </div>
      </div>
      <br>    
      <h5 v-if="!autorizado">Você já se cadastrou nessa oferta.</h5>
      <button
        v-else-if="logado"
        @click="marcarInteresse"  
        class="btn btn-success"
        type="button"
      >Estou interessado</button>
      <h5 v-else>Para registrar interesse, logue no sistema.</h5>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: "OfertasDetalhes",
  data() {
    return {
      offer: [],
      logado: false,
      autorizado: true
    };
  },
  methods: {
    marcarInteresse() {
      let id = this.$route.params.id;
      let data = {
        offer: id,
        token: localStorage.token
      };

      this.$http.post("/offer/interest", data).then(response => {
        if (response.status == 201) {
          window.location = "/offer";
        }
      });
      
    }
  },
  mounted() {
    let id = this.$route.params.id;

    this.$http.get("/offer/" + id).then(response => {
      this.offer = response.data;
      this.offer.price = this.offer.price.toFixed(2);
      this.offer.weight = this.offer.weight.toFixed(2);
    });

    let data = {
      offer: id,
      token: localStorage.token
    };

    this.$http.post("/user/authorized", data).then(response => {
      this.autorizado = !response.data;

    });

    if (localStorage.token != null) {
      this.logado = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
