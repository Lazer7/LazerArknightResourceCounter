<template>
  <div class="droptable">
    <h1 class="title is-1 text-left">Personal Drop Table</h1>
    <Card class="text-left">
      <template #title> Submit Drop </template>
      <template #content>
        <DropDown
          v-model="selectedStage"
          :options="stageData"
          optionValue="code"
          :filter="true"
          :filterFields="['code']"
        >
          <template #value="slotProps">
            {{ slotProps.value ? slotProps.value : "Select Stage" }}
          </template>
          <template #option="slotProps">
            {{ slotProps.option.code }}
          </template>
        </DropDown>
        <br />
        <div v-if="validStage">
          <br />
          <h3>Normal Drops</h3>
          <div class="grid">
            <div
              v-for="(resource, index) in normalDrop"
              :key="index"
              class="col-4 md:col-1"
            >
              <div v-if="resource.name">
                <Avatar
                  :image="
                    require(`@/assets/materials/${resource.name.replaceAll(
                      ' ',
                      '_'
                    )}.webp`)
                  "
                  v-if="resource.quantity && resource.quantity !== 0"
                  :key="resource.quantity"
                  class="mr-2"
                  size="xlarge"
                  @click="addResource(resource)"
                  @contextmenu="subResource($event, resource)"
                  v-badge="resource.quantity"
                />
                <Avatar
                  :image="
                    require(`@/assets/materials/${resource.name.replaceAll(
                      ' ',
                      '_'
                    )}.webp`)
                  "
                  v-else
                  :key="resource.quantity"
                  class="mr-2"
                  size="xlarge"
                  @click="addResource(resource)"
                  @contextmenu="subResource($event, resource)"
                />
              </div>
            </div>
          </div>
          <h3>Special Drops</h3>
          <div class="grid">
            <div
              v-for="(resource, index) in specialDrop"
              :key="index"
              class="col-4 md:col-1"
            >
              <div v-if="resource.name">
                <Avatar
                  :image="
                    require(`@/assets/materials/${resource.name.replaceAll(
                      ' ',
                      '_'
                    )}.webp`)
                  "
                  v-if="resource.quantity && resource.quantity !== 0"
                  :key="resource.quantity"
                  class="mr-2"
                  size="xlarge"
                  @click="addResource(resource)"
                  @contextmenu="subResource($event, resource)"
                  v-badge="resource.quantity"
                />
                <Avatar
                  :image="
                    require(`@/assets/materials/${resource.name.replaceAll(
                      ' ',
                      '_'
                    )}.webp`)
                  "
                  v-else
                  :key="resource.quantity"
                  class="mr-2"
                  size="xlarge"
                  @click="addResource(resource)"
                  @contextmenu="subResource($event, resource)"
                />
              </div>
            </div>
          </div>
          <h3>Extra Drops</h3>
          <div class="grid">
            <div
              v-for="(resource, index) in extraDrop"
              :key="index"
              class="col-4 md:col-1"
            >
              <div v-if="resource.name">
                <Avatar
                  :image="
                    require(`@/assets/materials/${resource.name.replaceAll(
                      ' ',
                      '_'
                    )}.webp`)
                  "
                  v-if="resource.quantity && resource.quantity !== 0"
                  :key="resource.quantity"
                  class="mr-2"
                  size="xlarge"
                  @click="addResource(resource)"
                  @contextmenu="subResource($event, resource)"
                  v-badge="resource.quantity"
                />
                <Avatar
                  :image="
                    require(`@/assets/materials/${resource.name.replaceAll(
                      ' ',
                      '_'
                    )}.webp`)
                  "
                  v-else
                  :key="resource.quantity"
                  class="mr-2"
                  size="xlarge"
                  @click="addResource(resource)"
                  @contextmenu="subResource($event, resource)"
                />
              </div>
            </div>
          </div>
          <h5>Furniture Drop</h5>
          <InputSwitch v-model="furniture" />
        </div>
      </template>
      <template #footer>
        <Button
          icon="pi pi-check"
          label="Save"
          @click="submit"
          :disabled="!validStage"
        />
      </template>
    </Card>
    <br />
    <Table :resourceData="data" :loading="isLoading" />
  </div>
</template>

<script>
import Table from "@/components/tables/ResourcesTable.vue";
import { DataUtil } from "@/utils/dataUtil";
import { PenguinService } from "@/services/penguinService";

export default {
  name: "DropTableView",
  components: {
    Table,
  },
  data() {
    return {
      isLoading: false,
      furniture: false,
      data: [],
      stageData: [],
      selectedStage: "",
      penguinId: this.$store.getters["UserData/PenguinID"],
    };
  },
  async mounted() {
    await this.loadStages();
    await this.loadData();
  },
  watch: {
    async penguinId() {
      await this.loadData();
    },
  },
  computed: {
    validStage() {
      return this.stageData.find((stage) => stage.code === this.selectedStage);
    },
    normalDrop() {
      const stage = this.validStage;
      return stage.dropInfos.filter((drop) => {
        return drop.dropType === "NORMAL_DROP";
      });
    },
    specialDrop() {
      const stage = this.validStage;
      return stage.dropInfos.filter((drop) => {
        return drop.dropType === "SPECIAL_DROP";
      });
    },
    extraDrop() {
      const stage = this.validStage;
      return stage.dropInfos.filter((drop) => {
        return drop.dropType === "EXTRA_DROP";
      });
    },
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
        this.data = await DataUtil.getFormattedUserData(
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
    getIcon(material) {
      try {
        return `@/assets/materials/${material.replaceAll(" ", "_")}.webp`;
      } catch (err) {
        return "";
      }
    },
    addResource(resource) {
      if (!resource.quantity) {
        resource.quantity = 1;
      } else {
        resource.quantity += 1;
      }
      this.$forceUpdate();
    },
    subResource(e, resource) {
      e.preventDefault();
      if (resource.quantity) {
        if (resource.quantity > 0) {
          resource.quantity -= 1;
        }
      }
      this.$forceUpdate();
    },
    async submit() {
      const stage = this.validStage;
      var drops = [];

      stage.dropInfos.forEach((drop) => {
        if (drop.quantity && drop.quantity !== 0)
          drops.push({
            dropType: drop.dropType,
            itemId: drop.itemId,
            quantity: drop.quantity,
          });
      });

      if (this.furniture) {
        drops.push({
          dropType: "FURNITURE",
          itemId: "furni",
          quantity: 1,
        });
      }

      try {
        const response = await PenguinService.postStageData(
          {
            drops: drops,
            stageId: stage.stageId,
            server: this.$store.getters["UserData/currentServer"],
            source: "Lazer Client",
            version: "0.1",
          },
          this.$store.getters["UserData/PenguinID"]
        );
        this.selectedStage = "";
        this.furniture = false;
        if (response.headers["x-penguin-set-penguinid"]) {
          this.$store.dispatch(
            "UserData/setPenguinId",
            response.headers["x-penguin-set-penguinid"]
          );
        }
        await this.loadStages();
        await this.loadData();
        this.$toast.add({
          severity: "success",
          summary: "Success",
          detail: "Resource Drop Submitted!",
          life: 3000,
        });
      } catch (err) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: err,
          life: 3000,
        });
      }
    },
  },
};
</script>
