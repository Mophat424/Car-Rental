// import type {Config} from 'jest';

// const config: Config = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   verbose: true,
// };

// export default config;



// import type { Config } from 'jest';

// const config: Config = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   verbose: true,
//   roots: ['<rootDir>/tests'], // Explicitly set the tests folder
//   testMatch: ['**/*.test.ts'], // Match .test.ts files
//   moduleFileExtensions: ['ts', 'js', 'json'], // Ensure .ts files are recognized
// };

// export default config;



// import type { Config } from 'jest';

// const config: Config = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   verbose: true,
//   roots: ['<rootDir>/tests'],
//   testMatch: ['**/*.test.ts'],
//   moduleFileExtensions: ['ts', 'js', 'json'],
// };

// export default config;
// import type { Config } from 'jest';

// const config: Config = {
//   verbose: true, // Moved to top level
//   projects: [
//     {
//       displayName: 'unit',
//       testMatch: ['<rootDir>/tests/unit-test/**/*.test.ts'],
//       preset: 'ts-jest',
//       testEnvironment: 'node',
//       moduleFileExtensions: ['ts', 'js', 'json'],
//     },
//     {
//       displayName: 'integration',
//       testMatch: ['<rootDir>/tests/integration-tests/**/*.test.ts'],
//       preset: 'ts-jest',
//       testEnvironment: 'node',
//       moduleFileExtensions: ['ts', 'js', 'json'],
//       // Optional: Add setup for integration tests if needed
//       // setupFilesAfterEnv: ['<rootDir>/tests/integration-tests/setup.ts'],
//     },
//   ],
// };

// export default config;


import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  projects: [
    {
      displayName: 'unit',
      testMatch: ['<rootDir>/tests/unit-test/**/*.test.ts'],
      preset: 'ts-jest',
      testEnvironment: 'node',
      moduleFileExtensions: ['ts', 'js', 'json'],
    },
    {
      displayName: 'integration',
      testMatch: ['<rootDir>/tests/integration-tests/*.test.ts'], // Matches TS/car.test.ts
      preset: 'ts-jest',
      testEnvironment: 'node',
      moduleFileExtensions: ['ts', 'js', 'json'],
    },
  ],
};

export default config;