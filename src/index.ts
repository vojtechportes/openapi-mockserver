import express, { Request, Response } from "express";
import { getConfig } from "./utils/getConfig";
// import { setApiRoutes } from './setApiRoutes'
import { cwd } from './utils/getCwd'

const config = getConfig(cwd);

const app = express();

app.listen(config.port, () => {
  console.log("server started at http://localhost:" + config.port);
});

// setApiRoutes(app, config)

app.get("*", async (req: Request, res: Response) => {
  res.send({
    message: "test"
  });
});
