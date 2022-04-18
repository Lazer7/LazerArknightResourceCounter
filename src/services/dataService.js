import axios from "axios";

export class DataService {
  static async getResourceData() {
    const response = await await axios.get(
      "https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/item_table.json"
    );
    return response.data.items;
  }

  static async getStageData() {
    const response = await await axios.get(
      "https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/stage_table.json"
    );
    return response.data.stages;
  }
}
