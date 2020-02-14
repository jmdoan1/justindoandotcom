export interface Config {
    fbApiKey: string;
    fbAuthDomain: string;
    fbDatabaseURL: string;
    fbProjectId: string;
    fbStorageBucket: string;
    fbMessagingSenderId: string;
    fbAppId: string;
}

// insert all necessary strings into config-example.json and re-save the file as config.json. Check for changes in the config-example.json file when pulling updates to carry them over in your config.json file
export const config: Config = require('./config.json');