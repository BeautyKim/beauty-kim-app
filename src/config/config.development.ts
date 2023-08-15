import getConfigs from "./config.common";

const baseUrl = 'http://localhost';
const mode = process.env.NEXT_PUBLIC_MODE;
const port = 3333;

const configDevelopment = getConfigs({
    baseUrl: baseUrl,
    mode: mode,
    port: port
});

export default configDevelopment;