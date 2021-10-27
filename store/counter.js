export const state = () => ({
  value: 0
});

export const mutations = {
  increment(state) {
    state.value++;
  },

  decrement(state) {
    state.value--;
  }
};
