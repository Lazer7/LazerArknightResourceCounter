import axios from "axios";

export class PenguinService {
  static api = "https://penguin-stats.io/PenguinStats/api/v2";
  static async getMatrixData(server = "US") {
    const response = await axios.get(
      `${PenguinService.api}/result/matrix?server=${server}`
    );
    return response.data.matrix;
  }

  static async postStageData(drop, penguinId) {
    const header = penguinId
      ? { headers: { Authorization: `PenguinID ${penguinId}` } }
      : {};
    const response = await axios.post(
      "https://penguin-stats.io/PenguinStats/api/v2/report",
      drop,
      header
    );
    return response;
  }

  static async getStageData(server = "US") {
    const response = await axios.get(
      `https://penguin-stats.io/PenguinStats/api/v2/stages?server=${server}`
    );
    return response.data;
  }

  static async getUserData(penguinId) {
    if (penguinId) {
      const response = await axios.get(
        "https://penguin-stats.io/PenguinStats/api/v2/_private/result/matrix/US/personal",
        {
          headers: {
            Authorization: `PenguinID ${penguinId}`,
          },
        }
      );
      return response.data.matrix;
    } else {
      return [];
    }
  }
}
