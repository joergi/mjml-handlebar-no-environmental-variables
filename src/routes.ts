import bodyParser from "body-parser";
import express, {Request, Response, Router} from "express";
import {render} from "./controller/testController";

const router: Router = express.Router();
const jsonParser = bodyParser.json();

/**
 * Returns the rendered html
 */
router.route("/test")
    .get(render);

export = router;
