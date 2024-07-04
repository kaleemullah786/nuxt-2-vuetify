<template>
  <main class="space-y-4 mt-4">
    <h1 class="text-xl font-bold">Users Listing</h1>
    <v-data-table :headers="headers" :items="users" :loading="!users" :items-per-page="15" class="elevation-0">
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
      users: []
    }
  },
  methods: {
    async fetchUsers() {

    }
  },
  async fetch() {
    const { data } = await fetch('https://reqres.in/api/users').then(res => res.json())
    this.users = data
  }
}
</script>
