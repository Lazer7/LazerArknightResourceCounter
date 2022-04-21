<template>
  <MenuComponent :model="items" :class="isHidden + ' ' + isOverlay" />
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Menu",
          items: [
            {
              label: "Info",
              icon: "pi pi-heart-fill",
              command: this.navigateToInfo,
            },
          ],
        },
        {
          label: "Personal",
          items: [
            {
              label: "User Input Table",
              icon: "pi pi-heart-fill",
              command: this.navigateToHome,
            },
            {
              label: "User Charts",
              icon: "pi pi-upload",
              command: this.navigateToUserCharts,
            },
          ],
        },
        {
          label: "Penguin Logistics",
          items: [
            {
              label: "Drop Table",
              icon: "pi pi-heart-fill",
              command: this.navigateToDropTable,
            },
            {
              label: "Resource Charts",
              icon: "pi pi-upload",
              command: this.navigateToResource,
            },
          ],
        },
        {
          label: "Settings",
          items: [
            {
              label: "User Preferences",
              icon: "pi pi-heart-fill",
              command: this.navigateToPreferences,
            },
          ],
        },
      ],
      menuOverlay: false,
    };
  },
  computed: {
    isHidden() {
      return this.$store.state.MenuState.hidden ? "is-hidden" : "";
    },
    isOverlay() {
      return this.menuOverlay ? "overlay" : "";
    },
  },
  mounted() {
    window.addEventListener("resize", this.reportWindowSize);
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
    navigateToUserCharts() {
      this.$router.push("/UserCharts");
    },
    navigateToInfo() {
      this.$router.push("/Info");
    },
    navigateToDropTable() {
      this.$router.push("/DropTable");
    },
    navigateToResource() {
      this.$router.push("/Resource");
    },
    navigateToPreferences() {
      this.$router.push("/Settings");
    },
    isActive(name) {
      return this.$route.name === name;
    },
    reportWindowSize() {
      this.$store.dispatch("MenuState/hideMenu", window.innerWidth <= 1490);
      this.menuOverlay = window.innerWidth <= 1490 && window.innerWidth >= 950;
    },
  },
};
</script>
