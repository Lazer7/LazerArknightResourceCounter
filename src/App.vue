<template>
  <div id="app">
    <Toast />
    <Navbar />
    <div class="grid router">
      <Menu class="col-12 lg:col-2 overlay" />
      <div id="main-container" class="col main">
        <div :class="mask ? 'container-mask' : ''">
          <ScrollPanel class="panel-container">
            <router-view />
          </ScrollPanel>
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
      return !menuState;
    },
  },
};
</script>
