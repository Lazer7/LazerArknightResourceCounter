<template>
  <MenuComponent :model="items" :class="isHidden" />
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
    };
  },
  computed: {
    isHidden() {
      return this.$store.state.MenuState.hidden ? "is-hidden" : "";
    },
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
  },
};
</script>
