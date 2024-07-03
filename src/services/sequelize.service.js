import { Sequelize } from "sequelize";
import databaseConfig from "../config/database.js";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const namePath = path.dirname(fileURLToPath(import.meta.url))
const modelFiles = fs
  .readdirSync(namePath + "/../models/")
  .filter((file) => file.endsWith(".js"));


class SequelizeService {
  static async init () {
    try {
      let connection = new Sequelize(databaseConfig);

      /*
        Loading models automatically
      */
     
      for (const file of modelFiles) {
        const model = await import(`../models/${file}`);
        model.default.init(connection);
      }

      modelFiles.map(async (file) => {
        const model = await import(`../models/${file}`);
        model.default.associate && model.default.associate(connection.models);
      });

      console.log("[SEQUELIZE] Database service initialized");
    } catch (error) {
      console.log("[SEQUELIZE] Error during database service initialization");
      throw error;
    }
  }
}


export default SequelizeService;
