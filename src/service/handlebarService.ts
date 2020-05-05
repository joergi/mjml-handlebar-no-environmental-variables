import {Express} from "express";
import hbs from "express-handlebars";
import helpers from "handlebars-helpers";
import * as path from "path";

export const initializeHandlebars = (app: Express) => {
    app.set("view engine", "hbs");

    app.engine("hbs", hbs({
        defaultLayout: "default",
        extname: ".hbs",
        helpers: helpers()
    }));

    app.set("views", path.join(__dirname, "../handlebars/views"));
};
