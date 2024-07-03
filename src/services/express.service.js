import express from "express";
import fs from "fs";
import bodyParser from "body-parser";

/*
  body-parser: Parse incoming request bodies in a middleware before your handlers, 
  available under the req.body property.
*/
// import { fileURLToPath } from 'url'
// import path from 'path'
import { fileURLToPath } from "url";
import path from "path";

const namePath = path.dirname(fileURLToPath(import.meta.url))
const routeFiles = fs
  .readdirSync(namePath + "/../routes/")
  .filter(
    (file) => file.endsWith(".js")
  );

let server;
let routes = [];

class ExpressService {
  static async  init ()  {
    try {
      /*
        Loading routes automatically
      */
      for (const file of routeFiles) {
        const route = await import(`../routes/${file}`);
        const routeName = Object.keys(route)[0];
        routes.push(route[routeName]);
      }

      server = express();
      server.use(bodyParser.json());
      server.use(routes);

      server.listen(process.env.SERVER_PORT);
      console.log("[EXPRESS] Express initialized");
    } catch (error) {
      console.log("[EXPRESS] Error during express service initialization");
      throw error;
    }
  }
}

export default ExpressService;
