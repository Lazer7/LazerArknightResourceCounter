export default {
  namespaced: true,
  state: {
    penguinID: "",
    server: "US",
    serverList: ["US", "CN", "JP", "KR"],
    userData: [],
  },
  getters: {
    PenguinID: (state) => {
      const storedPenguinID = localStorage.getItem("penguinID");
      if (storedPenguinID) {
        state.penguinID = storedPenguinID;
      }
      return state.penguinID;
    },
    currentServer: (state) => {
      const storedServer = localStorage.getItem("server");
      if (state.serverList.includes(storedServer)) {
        state.server = storedServer;
      } else {
        localStorage.setItem("server", "US");
        state.server = "US";
      }
      return state.server;
    },
    serverList: (state) => {
      return state.serverList;
    },
  },
  mutations: {
    setServer(state, value) {
      if (state.serverList.includes(value)) {
        localStorage.setItem("server", value);
        state.server = value;
      } else {
        localStorage.setItem("server", "US");
        state.server = "US";
      }
    },
    setPenguinId(state, value) {
      localStorage.setItem("penguinID", value);
      state.penguinID = value;
    },
  },
  actions: {
    setServer(context, value) {
      context.commit("setServer", value);
    },
    setPenguinId(context, value) {
      context.commit("setPenguinId", value);
    },
  },
};
