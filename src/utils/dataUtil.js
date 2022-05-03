import { PenguinService } from "@/services/penguinService.js";
import { DataService } from "@/services/dataService.js";

export class DataUtil {
  static async getFormattedMatrixData(server = "US") {
    var data = await PenguinService.getMatrixData(server);
    var stages = await PenguinService.getStageData(server);
    var resources = await DataService.getResourceData();
    var currentTime = new Date().getTime();

    stages = stages.filter((stage) => {
      return (
        stage.existence[server].exist &&
        stage.zoneId !== "gachabox" &&
        (!stage.existence[server].closeTime ||
          stage.existence[server].closeTime > currentTime)
      );
    });

    data = data.filter((value) => {
      return (
        stages.find((stage) => stage.stageId === value.stageId) !== undefined &&
        ((value.itemId > 2000 && value.itemId < 3400) || // Check for battle drill and chips
          value.itemId === 4006 || // Check if it's purchase Cert for Stage AP
          (value.itemId > 30000 && value.itemId < 32000))
      );
    });

    data.forEach((value) => {
      const currentStage = stages.find(
        (stage) => stage.stageId === value.stageId
      );
      value.stageSanity = currentStage.apCost;
      value.stageId = currentStage.code;
      value.itemId = resources[value.itemId].name;
      value.efficiency = parseFloat((value.quantity / value.times) * 100);
      if (value.quantity > 0) {
        value.sanityPerItem = parseFloat(
          (currentStage.apCost * value.times) / value.quantity
        );
      }
    });
    return data;
  }

  static async getFormattedUserData(penguinId) {
    var data = await PenguinService.getUserData(penguinId);
    var resources = await DataService.getResourceData();
    var stages = await DataService.getStageData();
    data = data.filter((value) => {
      return value.itemId !== "furni";
    });
    data.forEach((value) => {
      try {
        value.stageSanity = stages[value.stageId].apCost;
      } catch (err) {
        value.stageSanity = stages[value.stageId.replace("_perm", "")].apCost;
      }
      try {
        value.stageId = stages[value.stageId].code;
      } catch (err) {
        value.stageId = stages[value.stageId.replace("_perm", "")].code;
      }
      if (value.itemId !== "furni") {
        value.itemId = resources[value.itemId].name;
        value.efficiency = parseFloat(
          ((value.quantity / value.times) * 100).toFixed(2)
        );
      }
      if (value.quantity > 0) {
        value.sanityPerItem = Math.round(
          (value.stageSanity * value.times) / value.quantity
        );
      }
    });
    return data;
  }

  static async getFormattedStageData(server = "US") {
    var resources = await DataService.getResourceData();
    var stages = await PenguinService.getStageData(server);
    var currentTime = new Date().getTime();
    stages = stages.filter((stage) => {
      return (
        stage.existence[server].exist &&
        stage.zoneId !== "gachabox" &&
        (!stage.existence[server].closeTime ||
          stage.existence[server].closeTime > currentTime)
      );
    });

    stages.forEach((stage) => {
      if (stage.dropInfos) {
        stage.dropInfos = stage.dropInfos.filter((value) => {
          return value.itemId !== "furni" && value.itemId;
        });
      }
      if (stage.dropInfos) {
        stage.dropInfos.forEach((drop) => {
          if (resources[drop.itemId]) {
            drop.name = resources[drop.itemId].name;
          }
        });
      }
    });
    return stages;
  }
}
