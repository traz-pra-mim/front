<template>
  <div>
    <div class="container">
      <div class="card">
        <div class="card-header text-center"><h2>Ofertas</h2></div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Cidade</th>                    
                        <th>Estado</th>                    
                        <th>Tipo</th>                    
                        <th></th>                    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="offer in offers" v-bind:key="offer.id">
                        <td>{{ offer.title }}</td>
                        <td>{{ offer.description }}</td>
                        <td>{{ offer.city }}</td>
                        <td>{{ offer.state }}</td>
                        <td><strong>{{ offer.type }}</strong></td>
                        <td><a href="#!" @click="$router.push('/offerdetails/' + offer.id)"><i class="fas fa-search"></i></a></td>
                    </tr>
                </tbody>                    
            </table>
        </div>
      </div>
    </div>
    <br>
    <br>
  </div>
</template>

<script>

export default {
  name: "Ofertas",
  data() {
    return {
      offers: []
    };
  },
  mounted() {
    this.$http.get("/offer").then(response => {
      this.offers = response.data;    
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
