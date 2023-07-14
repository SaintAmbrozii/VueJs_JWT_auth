<template>
 <div>
   <router-link to="/">Home</router-link>
   <th> </th>
   <router-link to="/registration">Registration</router-link>
   <th> </th>
   <router-link v-if="currentUser" to="/rates">Rates</router-link>
   <th> </th>
   <router-link v-if="currentUser" to="/profile">Profile</router-link>
   <th> </th>
   <router-link to="/login">Login</router-link>
 </div>
</template>

<script>
import eventBus from "../services/eventBus";
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }

  }
}

</script>

<style scoped>

</style>