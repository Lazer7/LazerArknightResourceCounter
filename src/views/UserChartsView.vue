<template>
  <div class="settings">
    <h1 class="title is-1 text-left">Charts</h1>
    <div class="grid">
      <div class="col-12 lg:col-4">
        <Card>
          <template #title> Highest Resource Gathered </template>
          <template #content>
            <ProgressSpinner v-if="isLoading" />
            <div v-else>
              <div class="grid">
                <div class="col-6">
                  <img
                    :src="getIcon(highestResource.itemId)"
                    class="product-image"
                    width="28"
                    style="margin-bottom: -10px"
                  />
                  {{ highestResource.itemId }}
                </div>
                <div class="col-6">
                  Quantity: {{ highestResource.quantity }}
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card>
          <template #title> Frequent Stage Farmed </template>
          <template #content>
            <ProgressSpinner v-if="isLoading" />
            <div v-else>
              <div class="grid">
                <div class="col-6">Stage: {{ highestStage.stageId }}</div>
                <div class="col-6">Times: {{ highestStage.times }}</div>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card>
          <template #title> Total Reports </template>
          <template #content>
            <ProgressSpinner v-if="isLoading" />
            <div v-else>
              {{ totalReports }}
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
// import UserResourceChart from "@/components/tables/UserResourceChart.vue";
import { DataUtil } from "@/utils/dataUtil.js";

export default {
  name: "DropTableView",
  components: {
    // UserResourceChart,
  },
  data() {
    return {
      userData: [],
      stageData: [],
      highestResource: {},
      highestStage: {},
      numberOfReports: 0,
      totalReports: 0,
      isLoading: true,
    };
  },
  async mounted() {
    this.isLoading = true;
    await this.loadStages();
    await this.loadData();
    this.loadHighestResource();
    this.loadHighestStage();
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
    loadHighestResource() {
      var userQuantity = [];
      this.userData.forEach((data) => {
        var resource = userQuantity.find((d) => d.itemId === data.itemId);
        if (resource) {
          resource.quantity += data.quantity;
        } else {
          userQuantity.push({
            itemId: data.itemId,
            quantity: data.quantity,
          });
        }
      });
      this.highestResource = { quantity: 0 };
      userQuantity.forEach((data) => {
        if (data.quantity > this.highestResource.quantity) {
          this.highestResource = data;
        }
      });
    },
    loadHighestStage() {
      var uniqueStages = [];
      this.totalReports = 0;
      this.userData.forEach((data) => {
        const currentStage = uniqueStages.find(
          (stage) => stage.stageId === data.stageId
        );
        if (!this.highestStage.times || this.highestStage.times < data.times) {
          this.highestStage = data;
        }
        if (!currentStage) {
          this.totalReports += data.times;
          uniqueStages.push(data);
        }
      });
    },
    getIcon(material) {
      try {
        return require(`@/assets/materials/${material.replaceAll(
          " ",
          "_"
        )}.webp`);
      } catch (err) {
        return "";
      }
    },
  },
};
</script>
