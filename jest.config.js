module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  rootDir: '.',
  transform: {
      '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules'],
  coverageDirectory: './coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/__stories__/**/*', '!**/*/*.stories.{ts,tsx}'],
};
