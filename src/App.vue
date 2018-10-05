<template>
  <div id="app">
    <h4 id="title">Ranking Song</h4>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #171717;
}
#title{
  margin: 0 !important;
  padding: .2em 0em;    
  color: #CDDC39;
  font-family: cursive;
}
@media (max-width: 480px){
  img{
    display: flex;
    justify-content: center;
    margin: auto;
    padding: .3em 0em;
    
  }
}

</style>
