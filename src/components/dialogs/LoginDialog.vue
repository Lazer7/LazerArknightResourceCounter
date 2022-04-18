<template>
  <Dialog header="Penguin Statistic Login" :visible="true" :closable="false">
    <div class="flex align-items-left">
      <div class="field col-12">
        <br />
        <span class="p-float-label">
          <InputText id="withoutgrouping" v-model="id" />
          <label for="login">Penguin ID</label>
        </span>
      </div>
    </div>
    <template #footer>
      <div class="flex justify-content-center">
        <Button label="Submit" @click="submit" class="p-button-text" />
        <Button label="Cancel" @click="close" class="p-button-text" />
      </div>
    </template>
  </Dialog>
</template>

<script>
export default {
  data() {
    return {
      id: "",
    };
  },
  mounted() {
    this.id = this.$store.getters["UserData/PenguinID"];
  },
  methods: {
    submit() {
      if (this.id) {
        this.$store.dispatch("UserData/setPenguinId", this.id);
      } else {
        this.$store.dispatch("UserData/setPenguinId", "");
      }
      window.location.reload();
      this.close();
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>
