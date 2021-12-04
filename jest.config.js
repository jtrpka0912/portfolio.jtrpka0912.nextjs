// jest.config.js

module.exports = {
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
    ],
    moduleNameMapper: {
      /* Handle CSS imports (with CSS modules)
      https://jestjs.io/docs/webpack#mocking-css-modules */
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  
      // Handle CSS imports (without CSS modules)
      '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  
      /* Handle image imports
      https://jestjs.io/docs/webpack#handling-static-assets */
      '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
        '<rootDir>/__mocks__/fileMock.js',
    },
    modulePathIgnorePatterns: [
      // This will contain large object examples to use for component attributes/props
      'examples' 
    ],
    preset: "ts-jest",
    /** Add more to this array for other tests if we move the tests away from __tests__ */
    roots: [
      "<rootDir>/__tests__"
    ],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    testEnvironment: 'jsdom',
    transform: {
      /* Use babel-jest to transpile tests with the next/babel preset
      https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
    ],

    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}