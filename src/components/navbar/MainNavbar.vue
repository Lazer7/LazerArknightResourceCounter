<template>
  <div>
    <MenuBar class="primary">
      <template #start>
        <a @click="hideMenu"><i class="pi pi-bars" /> </a>
        <span class="mobile-hidden">
          &nbsp;&nbsp;&nbsp;
          <img
            src="@/assets/images/logo.png"
            alt="Arknights Resource Counter"
          />
          &nbsp;Resource Counter
        </span>
      </template>
      <template #end>
        <div class="buttons text-right">
          <DropDown v-model="selectedServer" :options="serverList" />
          &nbsp; &nbsp;
          <Button
            :label="penguinId ? 'ID: ' + penguinId : 'Login'"
            @click="showLogin(true)"
          />
          <Login v-if="login" @close="showLogin(false)" />
        </div>
      </template>
    </MenuBar>
  </div>
</template>

<script>
import Login from "@/components/dialogs/LoginDialog.vue";
export default {
  name: "MainNavBar",
  components: {
    Login,
  },
  data() {
    return {
      active: false,
      login: false,
      selectedServer: this.$store.getters["UserData/currentServer"],
      serverList: this.$store.getters["UserData/serverList"],
    };
  },
  computed: {
    penguinId() {
      return this.$store.getters["UserData/PenguinID"];
    },
  },
  watch: {
    selectedServer() {
      this.$store.dispatch("UserData/setServer", this.selectedServer);
      window.location.reload();
    },
  },
  methods: {
    hideMenu() {
      this.$store.dispatch(
        "MenuState/hideMenu",
        !this.$store.state.MenuState.hidden
      );
    },
    showLogin(value) {
      this.login = value;
    },
  },
};
</script>
