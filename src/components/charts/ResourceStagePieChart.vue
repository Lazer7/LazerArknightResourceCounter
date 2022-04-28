<template>
  <div class="resourcestagepiechart">
    <DropDown v-model="selectedResource" :options="resources" :filter="true">
      <template #value="slotProps">
        <div class="grid">
          <div class="col-2">
            <img :src="getIcon(slotProps.value)" width="16" />
          </div>
          <div class="col">
            {{ slotProps.value }}
          </div>
        </div>
      </template>
      <template #option="slotProps">
        <div class="grid">
          <div class="col-2">
            <img :src="getIcon(slotProps.option)" width="32" />
          </div>
          <div class="col">
            {{ slotProps.option }}
          </div>
        </div>
      </template>
    </DropDown>
    <canvas id="resourceStagePieChart" class="canvas"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import randomColor from "random-color";
import { DataUtil } from "@/utils/dataUtil.js";

export default {
  name: "DropTableView",
  data() {
    return {
      dataMatrix: [],
      resources: [],
      searchResource: "",
      selectedResource: "Orirock Cube",
      labels: [],
      values: [],
      colors: [],
      chart: null,
    };
  },
  async mounted() {
    this.dataMatrix = await DataUtil.getFormattedMatrixData(
      this.$store.getters["UserData/currentServer"]
    );
    this.loadResources();
    this.loadData();
  },
  computed: {
    filteredData() {
      return this.resources.filter(
        (item) =>
          item.toLowerCase().indexOf(this.searchResource.toLowerCase()) >= 0
      );
    },
  },
  watch: {
    async selectedResource() {
      await this.loadData();
      await this.loadChart();
    },
  },
  methods: {
    setValue(item) {
      this.selectedResource = item;
      this.loadResources();
    },
    async loadResources() {
      this.resources = [];
      this.dataMatrix.forEach((data) => {
        if (!this.resources.includes(data.itemId)) {
          this.resources.push(data.itemId);
        }
      });
      await this.loadData();
      this.loadChart();
    },
    async loadData() {
      this.data = [];
      this.labels = [];
      this.values = [];
      this.colors = [];
      this.dataMatrix.forEach((resource) => {
        if (resource.itemId === this.selectedResource) {
          this.labels.push(resource.stageId);
          this.values.push(resource.quantity);
          this.colors.push(randomColor().hexString());
        }
      });
    },
    loadChart() {
      const ctx = document
        .getElementById("resourceStagePieChart")
        .getContext("2d");
      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: this.labels,
          datasets: [
            {
              label: "Stages",
              data: this.values,
              backgroundColor: this.colors,
              borderColor: this.colors,
              borderWidth: 1,
            },
          ],
        },
        options: {
          legend: {
            position: "bottom",
          },
        },
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
