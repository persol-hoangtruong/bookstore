/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require("next/jest");
const fs = require("fs");
const { pathsToModuleNameMapper } = require("ts-jest");

// eslint-disable-next-line import/extensions
const { compilerOptions } = require("./tsconfig.json");


const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  preset: "ts-jest",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: fs.existsSync("setupTests.ts") ?
    ["<rootDir>/setupTests.ts"] :
    [],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),

};
module.exports = createJestConfig(customJestConfig);
