<template>
  <div class="resourcestagepiechart">
    <div class="grid">
      <div class="col-12 lg:col-4">
        <QuantityTable
          :rows="resources1"
          :userData="userData"
          :loading="loading"
        />
      </div>
      <div class="col-12 lg:col-4">
        <QuantityTable
          :rows="resources2"
          :userData="userData"
          :loading="loading"
        />
      </div>
      <div class="col-12 lg:col-4">
        <div class="grid">
          <div class="col-12">
            <QuantityTable
              :rows="smallChips"
              :userData="userData"
              :loading="loading"
            />
          </div>
          <div class="col-12">
            <QuantityTable
              :rows="largeChips"
              :userData="userData"
              :loading="loading"
            />
          </div>
          <div class="col-12">
            <QuantityTable
              :rows="skills"
              :userData="userData"
              :loading="loading"
            />
          </div>
          <div class="col-12">
            <QuantityTable
              :rows="gold"
              :userData="userData"
              :loading="loading"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DataService } from "@/services/dataService";
import QuantityTable from "@/components/tables/QuantityTable.vue";

export default {
  name: "DropTableView",
  props: ["userData", "loading"],
  components: {
    QuantityTable,
  },
  data() {
    return {
      resources: [],
      resources1: [],
      resources2: [],
      smallChips: [],
      largeChips: [],
      skills: [],
      gold: [],
    };
  },
  watch: {
    async userData() {
      await this.loadQuantity();
    },
  },
  async mounted() {
    this.resources = await DataService.getResourceData();
    this.loadData();
  },
  methods: {
    loadData() {
      this.resources1 = [];
      this.resources2 = [];
      this.smallChips = [];
      this.largeChips = [];
      this.gold = [];
      this.skills = [];
      Object.keys(this.resources).forEach((data) => {
        const resource = this.resources[data];
        if (resource.itemId > 30000 && resource.itemId < 30064) {
          this.resources1.push(resource);
        } else if (resource.itemId >= 30064 && resource.itemId < 32000) {
          this.resources2.push(resource);
        } else if (
          resource.itemId > 3200 &&
          resource.itemId < 3290 &&
          resource.itemId.endsWith("1")
        ) {
          this.smallChips.push(resource);
        } else if (
          resource.itemId > 3200 &&
          resource.itemId < 3290 &&
          resource.itemId.endsWith("2")
        ) {
          this.largeChips.push(resource);
        } else if (resource.itemId == 3003) {
          this.gold.push(resource);
        } else if (resource.itemId > 3300 && resource.itemId < 3305) {
          this.skills.push(resource);
        }
      });
    },
    loadQuantity() {
      Object.keys(this.resources).forEach((data) => {
        const resource = this.resources[data];
        var userResource = this.userData.find(
          (user) => user.itemId === resource.name
        );
        if (userResource) {
          resource.quantity = userResource.quantity;
        } else {
          resource.quantity = 0;
        }
      });
      this.loadData();
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
