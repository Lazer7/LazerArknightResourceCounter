export default {
  namespaced: true,
  state: {
    hidden: false,
  },
  getters: {
    hidden: (state) => {
      return state.hidden;
    },
  },
  mutations: {
    hideMenu(state, value) {
      state.hidden = value;
    },
  },
  actions: {
    hideMenu(context, value) {
      context.commit("hideMenu", value);
    },
  },
};
