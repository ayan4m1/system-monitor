module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  plugins: ['@babel'],
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 12
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['./src']
      }
    }
  }
};
