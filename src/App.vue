<template>
  <div id="app">
    <Toast />
    <Navbar />
    <div class="grid router">
      <Menu class="col-12 lg:col-2" />
      <router-view class="col main" />
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
};
</script>
