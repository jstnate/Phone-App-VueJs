<template>
  <nav>
      <router-link to="/">Contacts</router-link> |
      <router-link to="/call">Appeler</router-link> |
      <router-link to="/history">Journal d'appels</router-link>
  </nav>
  <router-view/>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: green;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
