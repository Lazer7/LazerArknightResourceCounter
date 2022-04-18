<template>
  <div>
    <div class="card">
      <DataTable
        ref="dt"
        :value="resourceData"
        dataKey="name"
        :paginator="true"
        :rows="10"
        :loading="loading"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 20, 50, 100]"
      >
        <template #header>
          <div class="flex justify-content-left align-items-left">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                v-model="filters['global'].value"
                placeholder="Search..."
              />
            </span>
          </div>
        </template>
        <template #empty> No data found. </template>
        <ColumnComponent
          field="stageId"
          header="Stage Id"
          :sortable="true"
          style="min-width: 5rem"
        />
        <ColumnComponent
          field="itemId"
          header="Item Drop"
          :sortable="true"
          style="min-width: 16rem"
        >
          <template #body="slotProps">
            <img
              :src="getIcon(slotProps.data.itemId)"
              class="product-image"
              width="30"
            />
            {{ slotProps.data.itemId }}
          </template>
        </ColumnComponent>
        <ColumnComponent
          field="quantity"
          header="Drop Quantity"
          :sortable="true"
          style="min-width: 8rem"
        />
        <ColumnComponent
          field="times"
          header="Runs"
          :sortable="true"
          style="min-width: 10rem"
        />
        <ColumnComponent
          field="efficiency"
          header="Efficiency"
          :sortable="true"
          style="min-width: 12rem"
        >
          <template #body="slotProps">
            <span> {{ slotProps.data.efficiency }} % </span>
          </template>
        </ColumnComponent>
        <ColumnComponent
          field="efficiency"
          header="Efficiency"
          :sortable="true"
          style="min-width: 12rem"
        >
          <template #body="slotProps">
            <span> {{ slotProps.data.efficiency }} % </span>
          </template>
        </ColumnComponent>
        <ColumnComponent
          field="start"
          header="Collection Start Date"
          :sortable="true"
          style="min-width: 12rem"
        >
          <template #body="slotProps">
            <TagComponent>
              {{ new Date(slotProps.data.start).toLocaleDateString() }}
            </TagComponent>
          </template>
        </ColumnComponent>
      </DataTable>
    </div>
  </div>
</template>

<script>
import { FilterMatchMode } from "primevue/api";

export default {
  data() {
    return {
      filters: {},
    };
  },
  props: ["resourceData", "loading"],
  async created() {
    this.initFilters();
  },
  methods: {
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
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
  },
};
</script>
