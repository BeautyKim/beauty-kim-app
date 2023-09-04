export declare namespace CommonConfig {

  interface Params {
    baseUrl: string;
    mode: string | undefined;
    port: number;
    token: string | undefined;
    databaseId: string | undefined;
  }
}

export default function getConfigs(params: CommonConfig.Params) {
  const { baseUrl, mode, port, token, databaseId } = params;

  return {
    baseUrl,
    mode,
    port,
    token,
    databaseId
  }
}