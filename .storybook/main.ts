import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(dirname, '..');

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "staticDirs": [
    "../public"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp"
  ],
  "framework": "@storybook/react-vite",
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: /^@base-ui\/react$/,
            replacement: path.resolve(root, 'node_modules/@base-ui/react/index.js'),
          },
          {
            find: /^@base-ui\/utils\/store$/,
            replacement: path.resolve(
              root,
              'node_modules/@base-ui/utils/store/index.js'
            ),
          },
          {
            find: /^reselect$/,
            replacement: path.resolve(root, 'node_modules/reselect/dist/cjs/index.js'),
          },
        ],
      },
    });
  },
};
export default config;
