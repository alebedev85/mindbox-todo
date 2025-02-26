import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest", // Используем ts-jest для TypeScript
  testEnvironment: "jsdom", // Для тестирования React-компонентов
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Преобразование TypeScript
    "^.+\\.(js|jsx)$": "babel-jest", // Преобразование JavaScript
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.ts", // Маппинг для SCSS/CSS
    "\\.(svg|png)$": "<rootDir>/__mocks__/styleMock.ts", // Маппинг для SCSS/CSS
    "^@/(.*)$": "<rootDir>/src/$1", // Пример настройки алиасов
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // Для поддержки jest-dom
};

export default config;