export declare namespace CommonConfig {

  interface Params {
    baseUrl: string;
    mode: string | undefined;
    port: number;
  }
}

export default function getConfigs(params: CommonConfig.Params) {
  const { baseUrl, mode, port } = params;

  return {
    baseUrl,
    mode,
    port
  }
}