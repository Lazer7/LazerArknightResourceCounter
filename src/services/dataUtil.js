import { PenguinService } from "@/services/penguinService.js";
import { DataService } from "@/services/dataService.js";

export class DataUtil {
  static blackList = [
    "Rhodes Island Supplies",
    "Rhodes Island Supplies II",
    "New Year's Lantern",
    "Thank-You Celebration Supplies",
    "32-hour Strategic Ration",
    "Emergency Sanity Sampler",
  ];
  static async getFormattedMatrixData(server = "US") {
    var data = await PenguinService.getMatrixData(server);
    var resources = await DataService.getResourceData();
    var stages = await DataService.getStageData();
    data = data.filter((value) => {
      return (
        resources[value.itemId] != undefined &&
        !DataUtil.blackList.includes(resources[value.itemId].name) &&
        (stages[value.stageId] != undefined ||
          stages[value.stageId.replace("_perm", "")]) &&
        value.start >= 1556676000000
      );
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
      value.itemId = resources[value.itemId].name;
      value.efficiency = parseFloat(
        ((value.quantity / value.times) * 100).toFixed(2)
      );
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
    });
    return data;
  }

  static async getFormattedStageData(server = "US") {
    var resources = await DataService.getResourceData();
    var stages = await PenguinService.getStageData(server);

    stages = stages.filter((stage) => {
      return (
        stage.existence[server].exist && !stage.existence[server].closeTime
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
