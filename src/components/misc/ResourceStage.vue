<template>
  <div class="grid">
    <div class="col-3 center-height">
      <img :src="getIcon(resource)" class="product-image" width="75" />
    </div>
    <div class="col-6 center-height">
      <h2>{{ resource }}</h2>
    </div>
    <div class="col-3 center-height">
      <h2>{{ stage }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropTableView",
  props: ["resource", "stage"],
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
  },
};
</script>
