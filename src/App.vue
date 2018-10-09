<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      artist: ''
    }
  }
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
input{
    background: #fff !important;
    width: 50% !important;
    border: none !important;
    padding: .4em 1em !important;
    border-radius: 1em !important;
    margin: 5px auto !important;
    outline: none;

}
.d-block, .w-100{
  background: no-repeat center;
  background-size: contain;  
  box-shadow: none;
  border-radius: 0% !important;
  box-shadow: none;
    min-height: 600px;
}
img{
border-radius: 100%;
padding: 5px;
margin-top: 10px;
box-shadow: 0 0 20px #d2e7f0;
}
@media (max-width: 480px){
  img{
    display: flex;
    justify-content: center;
    margin: auto;
    
  }
  input{
    width: 90% !important;
  }
}

</style>
