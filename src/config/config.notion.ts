import getConfigs from "./config.common";

const baseUrl = 'http://localhost:3002';
const mode = process.env.NEXT_PUBLIC_MODE;
const port = 3003;

const configNotion = getConfigs({
    baseUrl,
    mode,
    port
});

export default configNotion;