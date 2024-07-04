<template>
  <main class="space-y-4 mt-4">
    <h1 class="text-xl font-bold">Users Listing</h1>
    <p class="italic">{{ newUsers.length }} new user(s) registered. Note this info is coming from users store.</p>
    <v-data-table :headers="headers" :items="listingUsers" :loading="loading" :items-per-page="15" class="elevation-0">
      <template v-slot:item.avatar="{ item }">
        <v-avatar size="36">
      <img
        :src="item.avatar"
        alt="item.first_name"
      >
    </v-avatar>
      </template>
    </v-data-table>
  </main>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      headers: [
        {
          text: 'Avatar',
          align: 'start',
          sortable: false,
          value: 'avatar',
        },
        { text: 'First Name', value: 'first_name' },
        { text: 'Last Name', value: 'last_name' },
        { text: 'Email', value: 'email' },
      ],
      // users: []
    }
  },
  async fetch({ store }) {
    await store.dispatch('users/fetchUsers');
  },
  computed: {
    listingUsers() {
      return this.$store.getters['users/listingUsers'];
    },
    newUsers() {
      return this.$store.getters['users/newUsers'];
    },
    loading() {
      return this.$store.getters['users/loading'];
    },
    error() {
      return this.$store.getters['users/error'];
    },
  },
}
</script>
