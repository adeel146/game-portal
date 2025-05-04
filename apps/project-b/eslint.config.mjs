import baseConfig from '../../eslint.base.config.mjs';
import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import { fixupConfigRules } from '@eslint/compat';
import nx from '@nx/eslint-plugin';
const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...baseConfig,
  ...fixupConfigRules(compat.extends('next')),
  ...fixupConfigRules(compat.extends('next/core-web-vitals')),
  ...nx.configs['flat/react-typescript'],
  {
    ignores: ['.next/**/*'],
  },
];

export default eslintConfig;
