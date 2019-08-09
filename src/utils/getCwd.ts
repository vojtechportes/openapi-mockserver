import path from "path";

export const cwd = path.resolve(
  path
    .join(__dirname, "../node_modules/openapi-mockserver/bin")
    .split("node_modules")[0]
);
