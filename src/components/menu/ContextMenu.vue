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
              command: () => {
                this.navigateTo("/Info");
              },
            },
          ],
        },
        {
          label: "Personal",
          items: [
            {
              label: "User Input Table",
              icon: "pi pi-heart-fill",
              command: () => {
                this.navigateTo("/");
              },
            },
            {
              label: "Resources Recorded",
              icon: "pi pi-upload",
              command: () => {
                this.navigateTo("/UserResources");
              },
            },
            {
              label: "Charts",
              icon: "pi pi-upload",
              command: () => {
                this.navigateTo("/UserCharts");
              },
            },
          ],
        },
        {
          label: "Penguin Logistics",
          items: [
            {
              label: "Drop Table",
              icon: "pi pi-heart-fill",
              command: () => {
                this.navigateTo("/DropTable");
              },
            },
            {
              label: "Resource Charts",
              icon: "pi pi-upload",
              command: () => {
                this.navigateTo("/Resource");
              },
            },
            {
              label: "Farm Table",
              icon: "pi pi-upload",
              command: () => {
                this.navigateTo("/Efficiency");
              },
            },
          ],
        },
        {
          label: "Settings",
          items: [
            {
              label: "User Preferences",
              icon: "pi pi-heart-fill",
              command: () => {
                this.navigateTo("/Settings");
              },
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
  async mounted() {
    this.reportWindowSize();
    document
      .getElementById("main-container")
      .addEventListener("click", this.closeMenu);
    window.addEventListener("resize", this.reportWindowSize);
  },
  methods: {
    navigateTo(value) {
      this.$router.push(value);
      this.checkMobile();
    },
    checkMobile() {
      if (!this.menuOverlay) {
        this.$store.dispatch("MenuState/hideMenu", window.innerWidth <= 1542);
      }
    },
    closeMenu() {
      if (window.innerWidth <= 1542) {
        this.$store.dispatch("MenuState/hideMenu", true);
      }
    },
    isActive(name) {
      return this.$route.name === name;
    },
    reportWindowSize() {
      this.$store.dispatch("MenuState/hideMenu", window.innerWidth <= 1542);
      this.menuOverlay = window.innerWidth <= 1542 && window.innerWidth >= 950;
    },
  },
};
</script>
