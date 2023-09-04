import { Client } from "@notionhq/client";

export const notion = new Client({ 
    auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID || "";