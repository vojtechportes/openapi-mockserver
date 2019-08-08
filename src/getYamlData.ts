import SwaggerParser from "swagger-parser";
import { resolve } from "path";

export const getYamlData = async (definition: string) => {
  let parser = new SwaggerParser();
  const path = resolve(process.cwd(), definition);

  return await parser.dereference(path);
};
