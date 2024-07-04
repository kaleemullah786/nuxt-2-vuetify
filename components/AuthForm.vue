<template>
    <div class="flex justify-center items-center h-[80vh]">
        <div class="px-4 w-full md:w-1/2 space-y-4">
            <v-snackbar v-model="alert.show" color="error">
                {{ alert.text }}
            </v-snackbar>
            <h1 class="text-2xl font-bold text-center">{{ heading }}</h1>
            <v-form ref="form" v-model="valid" class="space-y-2" lazy-validation>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                <v-text-field v-model="password" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :rules="passwordRules"
                    :type="show ? 'text' : 'password'" label="Password" @click:append="show = !show"></v-text-field>

                <v-btn :disabled="!valid" color="success" class="mr-4"
                    @click.prevent="$emit('submit', { email, password })">
                    {{ buttonText }}
                </v-btn>

            </v-form>
        </div>
    </div>
</template>
<script>
export default {
    props: ['heading', 'buttonText', 'alert'],
    data() {
        return {
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required.',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid.',
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Password is required.',
            ],
            valid: true,
            show: false,
        }
    },
}
</script>