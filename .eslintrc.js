module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'unicorn', 'ramda'],
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'plugin:import/warnings',
    'plugin:ramda/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-debugger': 'off',
    'no-console': 'warn',
    'prettier/prettier': 'error',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',
    'class-methods-use-this': 'off',
    'prettier/prettier': ['error', {
     'endOfLine':'auto'
    }],
    'import/no-cycle': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
