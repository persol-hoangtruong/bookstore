/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require("next/jest");
const fs = require("fs");


const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: fs.existsSync("setupTests.js") ?
    ["<rootDir>/setupTests.js"] :
    [],
};
module.exports = createJestConfig(customJestConfig);
