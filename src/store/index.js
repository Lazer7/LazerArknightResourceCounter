import { createStore } from "vuex";
import MenuState from "./modules/menu";
import UserData from "./modules/data";

export default createStore({
  modules: {
    MenuState,
    UserData,
  },
});
