<template>
  <div class="hello">
    <h1>Niestety zgubiłeś się</h1>
    <p>Cofnij się do poprzedniej strony</p>
    <br/><br/>
    <i class="far fa-flag icon"></i>
    <br/><br/><br/>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
a {
    font-weight: bold;
    color: #42b983;
    &.router-link-exact-active {
      color: #42b983;
    }

}
</style>
