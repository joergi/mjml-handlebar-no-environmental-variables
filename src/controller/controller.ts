import {Request, Response} from "express";
import mjml2html from "mjml";
import path from "path";
import {TemplateModel} from "../model/templateModel";

export const render = (req: Request, res: Response): void => {
    console.log("hellooo");
    res.render(
        path.join(`main`),
        new TemplateModel(),
        (error, html) => {
            if (error) {
                console.log("error" + error.message);
                res.sendStatus(400);
            } else {
                res.send(mjml2html(html, {minify: true}).html).end();
            }
        });
};
