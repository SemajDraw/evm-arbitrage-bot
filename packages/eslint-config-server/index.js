module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts'] },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: { alwaysTryTypes: true, project: '.' },
    },
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/space-before-blocks': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'max-classes-per-file': 'off',
    'no-console': 'off',
    'import/no-named-as-default': 'off',
    'import/no-extraneous-dependencies': [
      'off',
      { devDependencies: ['**/*.e2e-spec.ts', '**/*.spec.ts'] },
    ],
  },
  ignorePatterns: [
    '**/*.js',
    'node_modules',
    '.turbo',
    'dist',
    'coverage',
    '.eslintrc.js',
  ],
};
