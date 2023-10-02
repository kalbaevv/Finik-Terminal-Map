// Environment variables for testing purpose only.

// List of native ES6 modules in dependencies,
// which must also be transformed.
const esModules = [
  'gatsby',
  'c',
  // Bellow are `react-markdown` dependencies.
  'vfile',
  'unist-.+',
  'unified',
  'bail',
  'is-plain-obj',
  'trough',
  'remark-.+',
  'mdast-util-.+',
  'micromark',
  'parse-entities',
  'character-entities',
  'property-information',
  'comma-separated-tokens',
  'hast-util-whitespace',
  'remark-.+',
  'space-separated-tokens',
].join('|');

module.exports = {
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'coverage',
        outputName: 'jest-report.xml',
      },
    ],
  ],
  maxWorkers: '50%',
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/tests/jest/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>//tests/jest/__mocks__/file-mock.js`,
    '^gatsby$': `<rootDir>//tests/jest/__mocks__/gatsby.js`,
  },
  modulePathIgnorePatterns: ['<rootDir>/public', '<rootDir>/.cache'],
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!${esModules})/.+$`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [`<rootDir>/tests/jest/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/tests/jest/setup-test-env.js'],
  collectCoverageFrom: ['src/**/*.tsx', 'src/**/*.ts'],
  coverageReporters: ['text'],
  testEnvironment: 'jsdom',
};
