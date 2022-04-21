<template>
  <div class="settings">
    <h1 class="title is-1 text-left">User Data Sheet</h1>
    <div class="grid">
      <div class="col-12">
        <Card>
          <template #title>
            <h3 class="title is-3">Resources Gathered</h3>
          </template>
          <template #content>
            <ResourcePieChart :userData="userData" :loading="isLoading" />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import ResourcePieChart from "@/components/charts/UserResourceChart.vue";
import { DataUtil } from "@/services/dataUtil.js";

export default {
  name: "DropTableView",
  components: {
    ResourcePieChart,
  },
  data() {
    return {
      userData: [],
      stageData: [],
      isLoading: true,
    };
  },
  async mounted() {
    this.isLoading = true;
    await this.loadStages();
    await this.loadData();
    this.isLoading = false;
  },
  methods: {
    async loadStages() {
      this.stageData = await DataUtil.getFormattedStageData(
        this.$store.getters["UserData/currentServer"]
      );
    },
    async loadData() {
      this.isLoading = true;
      try {
        this.userData = await DataUtil.getFormattedUserData(
          this.$store.getters["UserData/PenguinID"]
        );
      } catch (err) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: err + ". Authentication Error, Please Login Again",
          life: 3000,
        });
      }
      this.isLoading = false;
    },
  },
};
</script>
