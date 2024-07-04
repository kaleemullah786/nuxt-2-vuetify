export const actions = {
    nuxtServerInit({ dispatch }) {
      return dispatch('users/fetchUsers');
    },
  };
  