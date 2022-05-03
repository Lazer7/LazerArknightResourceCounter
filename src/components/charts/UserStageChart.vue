<template>
  <div class="stagepiechart">
    <div v-if="loading">
      <Skeleton class="mb-2"></Skeleton>
      <Skeleton class="mb-2"></Skeleton>
      <Skeleton class="mb-2"></Skeleton>
      <Skeleton height="20rem" class="mb-2"></Skeleton>
    </div>
    <canvas v-else id="stagePieChart" class="canvas"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import randomColor from "random-color";

export default {
  name: "DropTableView",
  props: ["userData", "loading"],
  data() {
    return {
      labels: [],
      values: [],
      colors: [],
      chart: null,
    };
  },
  watch: {
    async userData() {
      await this.loadData();
      await this.loadChart();
    },
  },
  methods: {
    async loadData() {
      var dataMatrix = [];
      this.labels = [];
      this.values = [];
      this.colors = [];
      this.userData.forEach((userData) => {
        var itemData = dataMatrix.find(
          (data) => data.stageId == userData.stageId
        );
        if (!itemData) {
          dataMatrix.push({
            stageId: userData.stageId,
            times: userData.times,
          });
        }
      });
      dataMatrix.forEach((data) => {
        this.labels.push(data.stageId);
        this.values.push(data.times);
        this.colors.push(randomColor().hexString());
      });
    },
    loadChart() {
      const ctx = document.getElementById("stagePieChart").getContext("2d");
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
          plugins: {
            legend: {
              labels: {
                color: "white",
                font: {
                  size: 14,
                },
              },
            },
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
