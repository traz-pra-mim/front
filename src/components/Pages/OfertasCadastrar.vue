<template>
  <div>
    <br>
    <div v-if="logado" class="container">
      <form>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="exampleInputEmail1">Título</label>
            <input
              v-model="data.title"
              type="text"
              class="form-control"
              placeholder="Título da sua oferta"
            >
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="descricao">Descrição</label>
            <textarea
              v-model="data.description"
              class="form-control"
              placeholder="Detalhe bem sua oferta"
              name="descricao"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="peso">Peso máximo</label>
            <input
              v-model="data.weight"
              type="number"
              class="form-control"
              placeholder="Peso (kg)"
              name="peso"
            >
          </div>
          <div class="form-group col-md-6">
            <label for="preco">Preço máximo</label>
            <input
              v-model="data.price"
              type="number"
              class="form-control"
              placeholder="Preço (R$) "
              name="preco"
            >
          </div>
        </div>

        <hr>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="bairro">Bairro</label>
            <input v-model="data.neighborhood" type="text" class="form-control" name="bairro" placeholder="O bairro que você ficará">
          </div>
          <div class="form-group col-md-4">
            <label for="cidade">Cidade</label>
            <input
              v-model="data.city"
              type="text"
              class="form-control"
              placeholder="A cidade para onde você vai"
              name="cidade"
            >
          </div>
          <div class="form-group col-md-4">
            <label for="estado">Estado</label>
            <select id="estado" name="estado" v-model="data.state" class="form-control">
              <option value="2">Acre</option>
              <option value="9">Alagoas</option>
              <option value="10">Amapá</option>
              <option value="11">Amazonas</option>
              <option value="3">Bahia</option>
              <option value="12">Ceará</option>
              <option value="13">Distrito Federal</option>
              <option value="14">Espírito Santo</option>
              <option value="15">Goiás</option>
              <option value="16">Maranhão</option>
              <option value="17">Mato Grosso</option>
              <option value="18">Mato Grosso do Sul</option>
              <option value="6">Minas Gerais</option>
              <option value="19">Pará</option>
              <option value="20">Paraíba</option>
              <option value="21">Paraná</option>
              <option value="22">Pernambuco</option>
              <option value="23">Piauí</option>
              <option value="4">Rio de Janeiro</option>
              <option value="1">Rio Grande do Norte</option>
              <option value="8">Rio Grande do Sul</option>
              <option value="24">Rondônia</option>
              <option value="7">Roraima</option>
              <option value="26">Santa Catarina</option>
              <option value="5">São Paulo</option>
              <option value="25">Sergipe</option>
              <option value="27">Tocantins</option>
            </select>
          </div>
        </div>

        <hr>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="ida">Data da ida</label>
            <input v-model="data.departure" type="date" class="form-control" name="ida">
          </div>
          <div class="form-group col-md-4">
            <label for="chegada">Data da chegada</label>
            <input v-model="data.arrival" type="date" class="form-control" name="chegada">
          </div>
          <div class="form-group col-md-4">
            <label for="tipo">Tipo</label>
            <select id="tipo" name="tipo" v-model="data.type" class="form-control">
              <option value="1">Trago</option>
              <option value="2">Procuro</option>
            </select>
          </div>
        </div>
        <div class="offset-md-9 col-md-4">
          <button @click="salvar" class="btn btn-primary">Salvar ofertas</button>
        </div>
      </form>
    </div>
    <div v-else class="container">
      <h3>Por favor, logue no sistema para poder cadastrar.</h3>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: "OfertasCadastrar",

  data() {
    return {
      offer: [],
      logado: false,
      data: {
        title: "",
        description: "",
        price: "",
        weight: "",
        neighborhood: "",
        city: "",
        state: "",
        type: "",
        departure: "",
        arrival: "",
        user: ""
      }
    };
  },
  methods: {
    salvar() {

      this.data.user = localStorage.getItem('token');

      this.data.departure = this.moment(this.data.departure).format('DD/MM/YYYY')
      this.data.arrival = this.moment(this.data.arrival).format('DD/MM/YYYY')

      this.$http.post("/offer", this.data).then(response => {
        if (response.status == 201) {
          window.location = '/offer';
        }        
      });
    }
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
