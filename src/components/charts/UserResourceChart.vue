<template>
  <div class="resourcestagepiechart">
    <div v-if="loading">
      <Skeleton class="mb-2"></Skeleton>
      <Skeleton class="mb-2"></Skeleton>
      <Skeleton class="mb-2"></Skeleton>
      <Skeleton height="20rem" class="mb-2"></Skeleton>
    </div>
    <canvas v-else id="resourceStagePieChart"></canvas>
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
          (data) => data.itemId == userData.itemId
        );
        if (!itemData) {
          dataMatrix.push({
            itemId: userData.itemId,
            quantity: userData.quantity,
          });
        } else {
          itemData.quantity += userData.quantity;
        }
      });
      dataMatrix = dataMatrix.filter((data) => data.quantity !== 0);
      dataMatrix.forEach((data) => {
        this.labels.push(data.itemId);
        this.values.push(data.quantity);
        this.colors.push(randomColor().hexString());
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
        type: "bar",
        data: {
          labels: this.labels,
          datasets: [
            {
              data: this.values,
              backgroundColor: this.colors,
              borderColor: this.colors,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              ticks: {
                color: "white",
              },
            },
            y: {
              ticks: {
                color: "white",
              },
            },
          },
          plugins: {
            legend: {
              display: false,
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
