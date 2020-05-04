let defaultConfig: any;

// tslint:disable-next-line:no-var-requires
defaultConfig = require("./application.json");

export class Config {

    public static getInstance = (): Config => {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    };
    private static instance: Config;

    public readonly port: number = +process.env.PORT || defaultConfig.port;

    public readonly context: string = defaultConfig.context;
    public readonly hello: string = defaultConfig.hello;
}

export const appConfig: Config = Config.getInstance();
