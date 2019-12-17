module.exports = {
  extends: `@jameslnewell/eslint-config/react`,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
  },
  overrides: [
    {
      files: [`*.ts`, `*.tsx`],
      rules: {
        'react/display-name': 0,
      },
    },
  ],
};
