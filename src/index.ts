import express, { Request, Response } from "express";
import { getConf } from "./getConfig";
import { setApiRoutes } from './setApiRoutes'

const config = getConf(process.cwd());
const app = express();

app.listen(config.port, () => {
  console.log("server started at http://localhost:" + config.port);
});

setApiRoutes(app, config)

app.get("*", async (req: Request, res: Response) => {
  res.send({
    message: 'test'
  })
});
