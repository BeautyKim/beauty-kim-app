import { notion } from ".";

const getDatabase = async (databaseId: any) => {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
};

const getPage = async (pageId: any) => {
    const response = await notion.pages.retrieve({ 
      page_id: pageId
    });
    return response;
};

const getBlocks = async (blockId: any) => {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 50,
    });
    return response.results;
};


export {getDatabase, getPage, getBlocks};