<template>
    <AuthForm heading="Register your account" button-text="Register" :alert="alert" @submit="register" />
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
        async register(data) {
            try {
                await this.$axios.post('/register', data)
                await this.$auth.loginWith('local', { data });
                this.$store.dispatch('users/addNewUser', data);                
                this.$router.push('/');
            } catch (error) {
                console.error(error);
                this.alert = { show: true, text: error }
                setTimeout(() => {
                    this.alert = { show: false, text: null }
                }, 1000);
            }
        }
    }
}
</script>