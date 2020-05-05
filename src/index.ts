import express, {Express} from "express";

import {appConfig} from "./config";
import {logger} from "./logger";
import router from "./routes";
import {initializeHandlebars} from "./service/handlebarService";

const app: Express = express();

app.use(`/${appConfig.context}/static`, express.static("src/public"));
app.use("/test", router);
initializeHandlebars(app);

const server = app.listen(appConfig.port, () => {
    logger.info(`server started at http://localhost:${appConfig.port}`);
});

module.exports = server;
