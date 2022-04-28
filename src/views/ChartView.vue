<template>
  <div class="chart">
    <h1 class="title is-1 text-left">Resource Charts</h1>
    <div class="grid">
      <div class="col-12 lg:col-6">
        <Card>
          <template #title>
            <h3 class="title is-3">Resource Per Stage</h3>
          </template>
          <template #content>
            <ResourceStagePieChart />
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-6">Other Charts</div>
    </div>
  </div>
</template>

<script>
import ResourceStagePieChart from "@/components/charts/ResourceStagePieChart.vue";

export default {
  name: "DropTableView",
  components: {
    ResourceStagePieChart,
  },
};
</script>
