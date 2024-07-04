<template>
  <AuthForm heading="Login to your account" button-text="Login" :alert="alert" @submit="login" />
</template>
<script>
export default {
  middleware({ $auth, redirect }) {
    if ($auth.loggedIn) {
      return redirect('/')
    }
  },
  data() {
    return { alert: { show: false, text: null } }
  },
  methods: {
    async login(data) {
      try {
        await this.$auth.loginWith('local', { data });
        this.$router.push('/');
      } catch (error) {
        console.error(error);
        this.alert = { show: true, text: error }
        console.error(error);
        setTimeout(() => {
          this.alert = { show: false, text: null }
        }, 1000);
      }
    }
  }
}
</script>
