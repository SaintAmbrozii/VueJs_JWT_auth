<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{user.name}}</strong> Profile
      </h3>
    </header>

    <p>
      <strong>Password:</strong>
      {{user.password}}
    </p>
    <p>
      <strong>Email:</strong>
      {{user.email}}
    </p>
    <p>
      <strong>Lastname:</strong>
      {{user.lastname}}
    </p>
  </div>
</template>

<script>
import UserService from "./services/UserService";
import api from "./services/api";
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }else {
      UserService.getById()
    }
  },

}
</script>