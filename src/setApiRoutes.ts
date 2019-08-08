import { Application } from 'express'
import { getYamlData } from './getYamlData'
import { Conf } from './getConfig'

export const setApiRoutes = async (app: Application, config: Conf) => {
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