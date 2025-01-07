// jest.config.js
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Ensure this is set to "jsdom"
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
};
