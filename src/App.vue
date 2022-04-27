<template>
  <div id="app">
    <Toast />
    <Navbar />
    <div class="grid router">
      <Menu class="col-12 lg:col-2" />
      <div id="main-container" class="col main">
        <div :class="mask ? 'container-mask' : ''">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/MainNavbar.vue";
import Menu from "@/components/menu/ContextMenu.vue";
export default {
  name: "AppView",
  components: {
    Navbar,
    Menu,
  },
  computed: {
    mask() {
      var menuState = this.$store.getters["MenuState/hidden"];
      return window.innerWidth <= 1542 && !menuState;
    },
  },
};
</script>
