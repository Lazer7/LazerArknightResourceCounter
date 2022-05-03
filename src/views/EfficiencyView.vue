<template>
  <div>
    <h1 class="title is-1 text-left">Farm Table</h1>
    <div class="grid">
      <div class="col-12 lg:col-4">
        <Card class="text-left">
          <template #title> Devices </template>
          <template #content>
            <ResourceStage
              :resource="DamagedDevice.itemId"
              :stage="DamagedDevice.stageId"
            />
            <ResourceStage :resource="Device.itemId" :stage="Device.stageId" />
            <ResourceStage
              :resource="IntegratedDevice.itemId"
              :stage="IntegratedDevice.stageId"
            />
            <ResourceStage
              :resource="OptimizedDevice.itemId"
              :stage="OptimizedDevice.stageId"
            />
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card class="text-left">
          <template #title> Ester </template>
          <template #content>
            <ResourceStage :resource="Ester.itemId" :stage="Ester.stageId" />
            <ResourceStage
              :resource="Polyester.itemId"
              :stage="Polyester.stageId"
            />
            <ResourceStage
              :resource="PolyesterPack.itemId"
              :stage="PolyesterPack.stageId"
            />
            <ResourceStage
              :resource="PolyesterLump.itemId"
              :stage="PolyesterLump.stageId"
            />
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card class="text-left">
          <template #title> Oriron </template>
          <template #content>
            <ResourceStage
              :resource="OrironShard.itemId"
              :stage="OrironShard.stageId"
            />
            <ResourceStage :resource="Oriron.itemId" :stage="Oriron.stageId" />
            <ResourceStage
              :resource="OrironCluster.itemId"
              :stage="OrironCluster.stageId"
            />
            <ResourceStage
              :resource="OrironBlock.itemId"
              :stage="OrironBlock.stageId"
            />
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card class="text-left">
          <template #title> Polyketon </template>
          <template #content>
            <ResourceStage
              :resource="Diketon.itemId"
              :stage="Diketon.stageId"
            />
            <ResourceStage
              :resource="Polyketon.itemId"
              :stage="Polyketon.stageId"
            />
            <ResourceStage :resource="Aketon.itemId" :stage="Aketon.stageId" />
            <ResourceStage
              :resource="KetonColloid.itemId"
              :stage="KetonColloid.stageId"
            />
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card class="text-left">
          <template #title> Sugar </template>
          <template #content>
            <ResourceStage
              :resource="SugarSubstitute.itemId"
              :stage="SugarSubstitute.stageId"
            />
            <ResourceStage :resource="Sugar.itemId" :stage="Sugar.stageId" />
            <ResourceStage
              :resource="SugarPack.itemId"
              :stage="SugarPack.stageId"
            />
            <ResourceStage
              :resource="SugarLump.itemId"
              :stage="SugarLump.stageId"
            />
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card class="text-left">
          <template #title> Oof-Rocks </template>
          <template #content>
            <ResourceStage
              :resource="Orirock.itemId"
              :stage="Orirock.stageId"
            />
            <ResourceStage
              :resource="OrirockCube.itemId"
              :stage="OrirockCube.stageId"
            />
            <ResourceStage
              :resource="OrirockCluster.itemId"
              :stage="OrirockCluster.stageId"
            />
            <ResourceStage
              :resource="OrirockConcentration.itemId"
              :stage="OrirockConcentration.stageId"
            />
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card class="text-left">
          <template #title> Manganese </template>
          <template #content>
            <ResourceStage
              :resource="ManganeseOre.itemId"
              :stage="ManganeseOre.stageId"
            />
            <ResourceStage
              :resource="ManganeseTrihydrate.itemId"
              :stage="ManganeseTrihydrate.stageId"
            />
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card class="text-left">
          <template #title> Kohl </template>
          <template #content>
            <ResourceStage
              :resource="LoxicKohl.itemId"
              :stage="LoxicKohl.stageId"
            />
            <ResourceStage
              :resource="WhiteHorseKohl.itemId"
              :stage="WhiteHorseKohl.stageId"
            />
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card class="text-left">
          <template #title> RMA </template>
          <template #content>
            <ResourceStage
              :resource="RMA7012.itemId"
              :stage="RMA7012.stageId"
            />
            <ResourceStage
              :resource="RMA7024.itemId"
              :stage="RMA7024.stageId"
            />
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card class="text-left">
          <template #title> Grindstone </template>
          <template #content>
            <ResourceStage
              :resource="Grindstone.itemId"
              :stage="Grindstone.stageId"
            />
            <ResourceStage
              :resource="GrindstonePentahydrate.itemId"
              :stage="GrindstonePentahydrate.stageId"
            />
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card class="text-left">
          <template #title> Alloy </template>
          <template #content>
            <ResourceStage
              :resource="IncandescentAlloy.itemId"
              :stage="IncandescentAlloy.stageId"
            />
            <ResourceStage
              :resource="IncandescentAlloyBlock.itemId"
              :stage="IncandescentAlloyBlock.stageId"
            />
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card class="text-left">
          <template #title> Gel </template>
          <template #content>
            <ResourceStage
              :resource="CoagulatingGel.itemId"
              :stage="CoagulatingGel.stageId"
            />
            <ResourceStage
              :resource="PolymerizedGel.itemId"
              :stage="PolymerizedGel.stageId"
            />
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card class="text-left">
          <template #title> Crystalline </template>
          <template #content>
            <ResourceStage
              :resource="CrystallineComponent.itemId"
              :stage="CrystallineComponent.stageId"
            />
            <ResourceStage
              :resource="CrystallineCircuit.itemId"
              :stage="CrystallineCircuit.stageId"
            />
            <ResourceStage
              :resource="CrystallineElectronicUnit.itemId"
              :stage="CrystallineElectronicUnit.stageId"
            />
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card class="text-left">
          <template #title> Solvent </template>
          <template #content>
            <ResourceStage
              :resource="SemiSyntheticSolvent.itemId"
              :stage="SemiSyntheticSolvent.stageId"
            />
            <ResourceStage
              :resource="RefinedSolvent.itemId"
              :stage="RefinedSolvent.stageId"
            />
          </template>
        </Card>
      </div>
      <div class="col-12 lg:col-4">
        <Card class="text-left">
          <template #title> Cutting Fluid </template>
          <template #content>
            <ResourceStage
              :resource="CompoundCuttingFluid.itemId"
              :stage="CompoundCuttingFluid.stageId"
            />
            <ResourceStage
              :resource="CuttingFluidSolution.itemId"
              :stage="CuttingFluidSolution.stageId"
            />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import { DataUtil } from "@/utils/dataUtil";
import ResourceStage from "@/components/misc/ResourceStage.vue";
export default {
  name: "DropTableView",
  components: {
    ResourceStage,
  },
  data() {
    return {
      maxtrixData: [],
    };
  },
  async mounted() {
    await this.loadData();
  },
  computed: {
    DamagedDevice() {
      return this.findEfficientStage("Damaged Device");
    },
    Device() {
      return this.findEfficientStage("Device");
    },
    IntegratedDevice() {
      return this.findEfficientStage("Integrated Device");
    },
    OptimizedDevice() {
      return this.findEfficientStage("Optimized Device");
    },
    Ester() {
      return this.findEfficientStage("Ester");
    },
    Polyester() {
      return this.findEfficientStage("Polyester");
    },
    PolyesterLump() {
      return this.findEfficientStage("Polyester Lump");
    },
    PolyesterPack() {
      return this.findEfficientStage("Polyester Pack");
    },
    OrironShard() {
      return this.findEfficientStage("Oriron Shard");
    },
    Oriron() {
      return this.findEfficientStage("Oriron");
    },
    OrironCluster() {
      return this.findEfficientStage("Oriron Cluster");
    },
    OrironBlock() {
      return this.findEfficientStage("Oriron Block");
    },
    Diketon() {
      return this.findEfficientStage("Diketon");
    },
    Polyketon() {
      return this.findEfficientStage("Polyketon");
    },
    Aketon() {
      return this.findEfficientStage("Aketon");
    },
    KetonColloid() {
      return this.findEfficientStage("Keton Colloid");
    },
    SugarSubstitute() {
      return this.findEfficientStage("Sugar Substitute");
    },
    SugarPack() {
      return this.findEfficientStage("Sugar Pack");
    },
    Sugar() {
      return this.findEfficientStage("Sugar");
    },
    SugarLump() {
      return this.findEfficientStage("Sugar Lump");
    },
    Orirock() {
      return this.findEfficientStage("Orirock");
    },
    OrirockCube() {
      return this.findEfficientStage("Orirock Cube");
    },
    OrirockCluster() {
      return this.findEfficientStage("Orirock Cluster");
    },
    OrirockConcentration() {
      return this.findEfficientStage("Orirock Concentration");
    },
    ManganeseOre() {
      return this.findEfficientStage("Manganese Ore");
    },
    ManganeseTrihydrate() {
      return this.findEfficientStage("Manganese Trihydrate");
    },
    LoxicKohl() {
      return this.findEfficientStage("Loxic Kohl");
    },
    WhiteHorseKohl() {
      return this.findEfficientStage("White Horse Kohl");
    },
    RMA7012() {
      return this.findEfficientStage("RMA70-12");
    },
    RMA7024() {
      return this.findEfficientStage("RMA70-24");
    },
    Grindstone() {
      return this.findEfficientStage("Grindstone");
    },
    GrindstonePentahydrate() {
      return this.findEfficientStage("Grindstone Pentahydrate");
    },
    IncandescentAlloy() {
      return this.findEfficientStage("Incandescent Alloy");
    },
    IncandescentAlloyBlock() {
      return this.findEfficientStage("Incandescent Alloy Block");
    },
    CoagulatingGel() {
      return this.findEfficientStage("Coagulating Gel");
    },
    PolymerizedGel() {
      return this.findEfficientStage("Polymerized Gel");
    },
    CrystallineComponent() {
      return this.findEfficientStage("Crystalline Component");
    },
    CrystallineCircuit() {
      return this.findEfficientStage("Crystalline Circuit");
    },
    CrystallineElectronicUnit() {
      return this.findEfficientStage("Crystalline Electronic Unit");
    },
    RefinedSolvent() {
      return this.findEfficientStage("Refined Solvent", true);
    },
    SemiSyntheticSolvent() {
      return this.findEfficientStage("Semi-Synthetic Solvent");
    },
    CompoundCuttingFluid() {
      return this.findEfficientStage("Compound Cutting Fluid", true);
    },
    CuttingFluidSolution() {
      return this.findEfficientStage("Cutting Fluid Solution");
    },
  },
  methods: {
    async loadData() {
      this.maxtrixData = await DataUtil.getFormattedMatrixData();
    },
    findEfficientStage(resource) {
      var stage;
      var resourceStages = this.maxtrixData.filter(
        (stageData) => stageData.itemId === resource && stageData.times > 55
      );
      resourceStages.forEach((stageData) => {
        if (
          (!stage || stage.sanityPerItem > stageData.sanityPerItem) &&
          stageData.sanityPerItem
        ) {
          stage = stageData;
        }
      });
      if (!stage || stage.efficiency < 25) {
        return {
          itemId: resource,
          stageId: "Craft",
        };
      }
      return stage;
    },
  },
};
</script>
