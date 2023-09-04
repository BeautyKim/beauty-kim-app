import getConfigs from "./config.common";

const baseUrl = 'http://localhost:3002';
const mode = process.env.NEXT_PUBLIC_MODE;
const port = 3003;
const token = process.env.NEXT_PUBLIC_NOTION_TOKEN;
const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

const configNotion = getConfigs({
    baseUrl,
    mode,
    port,
    token,
    databaseId
});

export default configNotion;