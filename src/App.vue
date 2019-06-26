<template>
  <div id="app"> 
    <Header/>  
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Template/Header";
import Footer from "./components/Template/Footer";
export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
