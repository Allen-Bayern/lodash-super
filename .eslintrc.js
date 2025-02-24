module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'shared-node-browser': true,
    es2024: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: ['error', 4, { SwitchCase: 1 }],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
};
