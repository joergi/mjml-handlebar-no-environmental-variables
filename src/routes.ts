import express, {Router} from "express";
import {render} from "./controller/controller";

const router: Router = express.Router();

/**
 * Returns the rendered html
 */
router.route("/test")
    .get(render);

export = router;
