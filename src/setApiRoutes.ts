import { Application } from 'express'
import { getYamlData } from './getYamlData'
import { ConfigProps } from './utils/getConfig'

export const setApiRoutes = async (app: Application, config: ConfigProps) => {
  const data = await getYamlData(config.definition) as any;

  try {
    console.log(data.paths)
    Object.keys(data.paths).forEach((key: string) => {
      console.log(data.paths[key])
    })
  } catch (e) {
    throw new Error(e)
  }
}