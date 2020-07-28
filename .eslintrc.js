module.exports = {
  extends: `@jameslnewell/eslint-config/react`,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
  },
  overrides: [
    {
      files: [`**/pages/*.ts`, `**/pages/*.tsx`],
      rules: {
        'react/display-name': 0,
      },
    },
  ],
};
