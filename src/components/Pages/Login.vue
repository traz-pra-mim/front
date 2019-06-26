<template>
  <div>
    <br>
    <div class="container" style="width:40%">
      <form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Digite suas credenciais</h1>
        <label for="inputEmail" class="sr-only">Email</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email"
          required
          autofocus
          v-model="user.email"
        >
        <label for="inputPassword" class="sr-only">Senha</label>
        <input type="password" class="form-control" placeholder="Senha" required v-model="user.password">
        <br>
        <h4 class="text-danger">{{ error }}</h4>
        <button @click="login" class="btn btn-lg btn-primary btn-block" type="button">Sign in</button>
      </form>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
          email: '',
          password: ''
      },
      error: '',
      token: []
    };
  },
  methods: {
    login() {        
      this.$http.post("/user/login", this.user).then(response => {
        if (response.data == null) {
            this.error = "O login falhou!"
        } else {
            localStorage.token = response.data.token;
            window.location = '/';
        }
      });
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
