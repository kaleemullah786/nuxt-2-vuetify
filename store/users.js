export const state = () => ({
    users: { listing: [], newUsers: [] },
    loading: false,
    error: null,
});

export const mutations = {
    SET_LISTING_USERS(state, users) {
        state.users.listing = users;
    },
    ADD_NEW_USER(state, user) {
        state.users.newUsers.push(user);
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_ERROR(state, error) {
        state.error = error;
    },
};

export const actions = {
    async fetchUsers({ commit }) {
        commit('SET_LOADING', true);
        try {
            const { data } = await fetch('https://reqres.in/api/users').then(res => res.json())
            commit('SET_LISTING_USERS', data);
        } catch (error) {
            commit('SET_ERROR', error);
        } finally {
            commit('SET_LOADING', false);
        }
    },
    addNewUser({ commit }, user) {
        commit('ADD_NEW_USER', user);
    },
};

export const getters = {
    listingUsers: (state) => state.users.listing,
    newUsers: (state) => state.users.newUsers,
    loading: (state) => state.loading,
    error: (state) => state.error,
  };
