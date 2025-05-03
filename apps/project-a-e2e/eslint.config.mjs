import baseConfig from '../../eslint.base.config.mjs';
import cypress from 'eslint-plugin-cypress/flat';

export default [
  cypress.configs['recommended'],
  ...baseConfig,
  {
    // Override or add rules here
    rules: {},
  },
];
