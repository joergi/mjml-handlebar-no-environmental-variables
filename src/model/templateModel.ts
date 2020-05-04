import {appConfig, Config} from "../config";

export class TemplateModel {

    public config: Config;

    constructor() {
        this.config = appConfig;
    }
}
