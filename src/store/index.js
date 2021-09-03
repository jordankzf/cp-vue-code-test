import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    loadingStatus: false,
  },
  getters: {
    posts: (state) => {
      return state.posts;
    },
    loadingStatus(state) {
      return state.loadingStatus;
    },
  },
  mutations: {
    SET_ITEMS(state, posts) {
      state.posts = posts;
    },
    loadingStatus(state, newLoadingStatus) {
      state.loadingStatus = newLoadingStatus;
    },
  },
  actions: {
    async loadPosts({ commit }) {
      commit("loadingStatus", true);
      try {
        const response = await axios.get(
          "http://jsonplaceholder.typicode.com/posts"
        );
        commit("SET_ITEMS", response.data);
        commit("loadingStatus", false);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
