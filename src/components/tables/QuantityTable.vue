<template>
  <div>
    <DataTable :value="rows" responsiveLayout="scroll">
      <ColumnComponent
        field="itemId"
        header="Item Drop"
        style="min-width: 16rem"
      >
        <template #body="slotProps">
          <img
            :src="getIcon(slotProps.data.name)"
            class="product-image"
            width="30"
          />
          {{ slotProps.data.name }}
        </template>
      </ColumnComponent>
      <ColumnComponent field="quantity" header="Quantity">
        <template #body="slotProps">
          <div v-if="loading">
            <Skeleton class="mb-2" />
          </div>
          <div v-else>
            {{ slotProps.data.quantity }}
          </div>
        </template>
      </ColumnComponent>
    </DataTable>
  </div>
</template>

<script>
export default {
  name: "DropTableView",
  props: ["rows", "userData", "loading"],
  watch: {
    async userData() {
      await this.loadQuantity();
    },
  },
  methods: {
    loadQuantity() {
      Object.keys(this.rows).forEach((data) => {
        const resource = this.rows[data];
        var userResource = this.userData.find(
          (user) => user.itemId === resource.name
        );
        if (userResource) {
          resource.quantity = userResource.quantity;
        } else {
          resource.quantity = 0;
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
