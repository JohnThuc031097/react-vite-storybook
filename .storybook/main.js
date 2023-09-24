/** @type { import('@storybook/react-vite').StorybookConfig } */

import { mergeConfig } from 'vite';

const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
    ],
    core: {
        builder: '@storybook/builder-vite', // 👈 The builder enabled here.
    },
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    async viteFinal(config, { configType }) {
        // Merge custom configuration into the default config

        if (configType === 'DEVELOPMENT') {
            // Your development configuration goes here
        }
        if (configType === 'PRODUCTION') {
            // Your production configuration goes here.
        }

        return mergeConfig(config, {
            // Add dependencies to pre-optimization
            optimizeDeps: {
                include: ['storybook-dark-mode', 'storybook-light-mode'],
            },
        });
    },
};
export default config;
