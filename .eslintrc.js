// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto', semi: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
