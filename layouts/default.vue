<template>
  <v-app> 
    <v-app-bar fixed dense flat app>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn v-if="$auth.loggedIn"  color="red" plain small @click.prevent="logout">Logout</v-btn>
      <div v-else>
        <NuxtLink to="/register">
        <v-btn  color="secondary"  plain small>Register</v-btn>
      </NuxtLink>
        <NuxtLink to="/login">
      <v-btn  color="primary"  plain small>Login</v-btn>
      </NuxtLink>
    </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'TestLogo',
    }
  },
  methods:{
    logout(){
      this.$auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>
