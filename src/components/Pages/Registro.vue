<template>
  <div>
    <br>
    <div class="container">
      <form>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="sobre">Primeiro nome</label>
            <input
              v-model="data.name"
              type="text"
              class="form-control"
              name="sobre"
              placeholder="Seu nome"
            >
          </div>
          <div class="form-group col-md-4">
            <label for="sobre">Sobrenome</label>
            <input
              v-model="data.last_name"
              type="text"
              class="form-control"
              placeholder="Seu sobrenome"
              name="sobre"
            >
          </div>          
          <div class="form-group col-md-4">
            <label for="senha">Senha</label>
            <input
              v-model="data.password"
              type="password"
              class="form-control"              
              name="senha"
            >
          </div>          
        </div>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="sobre">CPF</label>
            <input
              v-model="data.cpf"
              type="text"
              class="form-control"
              name="sobre"
              placeholder="Seu CPF"
            >
          </div>
          <div class="form-group col-md-4">
            <label for="email">Email</label>
            <input
              v-model="data.email"
              type="email"
              class="form-control"
              placeholder="Seu melhor email"
              name="email"
            >
          </div>          
          <div class="form-group col-md-4">
            <label for="nascimento">Nascimento</label>
            <input
              v-model="data.birthday"
              type="date"
              class="form-control"
              placeholder="Quando você nasceu?  "
              name="nascimento"
            >
          </div>          
        </div>      
        

        <hr>

        <h5><strong>Seu endereço</strong></h5>

        <br>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="primeira">Primeira parte</label>
            <input
              v-model="data.first_part"
              type="text"
              class="form-control"
              name="primeira"
              placeholder="Primeira parte do endereço"
            >
          </div>
          <div class="form-group col-md-4">
            <label for="segunda">Segunda parte</label>
            <input
              v-model="data.second_part"
              type="text"
              class="form-control"
              placeholder="A cidade para onde você vai"
              name="segunda"
            >
          </div>
          <div class="form-group col-md-4">
            <label for="cep">CEP</label>
            <input
              v-model="data.postal_code"
              type="text"
              class="form-control"
              placeholder="O seu CEP"
              name="cep"
            >            
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="bairro">Bairro</label>
            <input
              v-model="data.neighborhood"
              type="text"
              class="form-control"
              name="bairro"
              placeholder="O bairro que você ficará"
            >
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
        <div class="offset-md-9 col-md-4">
          <button @click="salvar" class="btn btn-primary">Cadastrar usuário</button>
        </div>
      </form>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: "Registro",

  data() {
    return {
      data: {
        name: "",
        last_name: "",
        birthday: "",
        cpf: "",
        email: "",
        password: "",
        first_part: "",
        second_part: "",
        postal_code: "",
        neighborhood: "",
        city: "",
        state: ""
      }
    };
  },
  methods: {
    salvar() {    

      this.data.birthday = this.moment(this.data.birthday).format(
        "DD/MM/YYYY"
      );
      
      this.$http.post("/user/register", this.data).then(response => {
        if (response.status == 201) {
          window.location = "/login";
        }
      });
    }
  },
  mounted() {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
