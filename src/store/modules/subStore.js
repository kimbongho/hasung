const subStore = {
  namespaced: true,
  state: () => ({
		event: ''
  }),
  mutations: {
    setEvent(state, value) {
        state.event = value;
    }
  },
  getters: {},
  actions: {
  },
};

export default subStore;