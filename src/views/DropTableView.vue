<template>
  <div class="droptable">
    <h1 class="title is-1 text-left">Arknights Drop Table</h1>
    <Table :resourceData="data" :loading="isLoading" />
  </div>
</template>

<script>
import Table from "@/components/tables/ResourcesTable.vue";
import { DataUtil } from "@/services/dataUtil";

export default {
  name: "DropTableView",
  components: {
    Table,
  },
  data() {
    return {
      isLoading: false,
      data: [],
    };
  },
  async mounted() {
    this.isLoading = true;
    this.data = await DataUtil.getFormattedMatrixData(
      this.$store.getters["UserData/currentServer"]
    );
    this.isLoading = false;
  },
};
</script>
