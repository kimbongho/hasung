const homeStore = {
  namespaced: true,
  state: () => ({
		introduce: false
  }),
  mutations: {
    setIntroduce(state, value) {
        state.introduce = value;
    }
  },
  getters: {},
  actions: {
  },
};

export default homeStore;