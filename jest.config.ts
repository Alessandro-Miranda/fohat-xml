/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
const CONFIG = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  coverageThreshold: {
    global: {
      branches: 95,
      lines: 95,
      functions: 95,
      statments: 95,
    },
  },
  // A set of global variables that need to be available in all test environments
  // globals: {},
  moduleFileExtensions: ['ts', 'tsx', 'node', 'js', 'd.ts'],
  moduleNameMapper: { },
  transform: {
    '^.+\\.(ts|tsx|js)$': [
      'ts-jest',
      { tsconfig: { jsx: 'react', allowUmdGlobalAccess: true } },
    ],
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
};

export default CONFIG;