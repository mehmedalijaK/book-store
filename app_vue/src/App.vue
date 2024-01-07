<template>
  <div id="app">
    <nav>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/" style="color: blue;">Home</b-nav-item>
            <b-nav-item v-if="token" to="/create-order" style="color: green;">Create order</b-nav-item>
            <b-nav-item v-if="!token" to="/register" style="color: orange;">Register</b-nav-item>
            <b-nav-item v-if="!token" to="/login" style="color: red;">Log In</b-nav-item>
            <b-nav-item v-else @click="logout()" style="color: purple;">Log Out</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </nav>
    <router-view/>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex';

  export default{
    computed: {
      ...mapState([
        'token'
      ])
    },
    methods: {
      ...mapMutations([
        'removeToken',
        'setToken'
      ]),
      logout() {
        this.removeToken();
      }
    },
    mounted() {
      if (localStorage.token) {
        this.setToken(localStorage.token);
      }
    },



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
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
