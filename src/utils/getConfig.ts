import cosmiconfig from "cosmiconfig";

export interface ConfigProps {
  prependUrl?: string;
  port?: number;
  definition: string;
  mockRules?: {
    [path: string]: {
      [method: string]: {
        numberOfMocks?: { min: number; max: number };
        keyValues?: {
          [name: string]: any | any[];
        };
      };
    };
  };
}

export const getConfig = (dir: string): ConfigProps => {
  const explorer = cosmiconfig("openapiMock");
  const { config = [] } = explorer.searchSync(dir) || {};

  console.log(explorer.searchSync(dir));

  const defaults: ConfigProps = {
    prependUrl: "",
    port: 3500,
    definition: "data.YAML"
  };

  return { ...defaults, ...config };
};
