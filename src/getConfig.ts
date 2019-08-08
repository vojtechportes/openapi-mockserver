import cosmiconfig from 'cosmiconfig'
 
export interface Conf {
  prependUrl?: string
  port?: number
  definition: string
  mockRules?: Array<{
    path: string
    numberOfMocks?: { min: number, max: number }
  }>
}

export const getConf = (dir: string): Conf => {
  const explorer = cosmiconfig('openapiMock')
  const config = explorer.searchSync(dir) || {}

  const defaults: Conf = {
    prependUrl: "",
    port: 3500,
    definition: "data.YAML"
  }

  return { ...defaults, ...config }
}