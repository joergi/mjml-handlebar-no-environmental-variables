import express, {Express} from "express";

import {appConfig} from "./config";
import {logger} from "./logger";
import router from "./routes";

const app: Express = express();

app.use(`/${appConfig.context}/static`, express.static("src/public"));

// initializeHandlebars(app);

const server = app.listen(appConfig.port, () => {
    logger.info(`server started at http://localhost:${appConfig.port}`);
});

module.exports = server;
