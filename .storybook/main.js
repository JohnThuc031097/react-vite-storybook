/** @type { import('@storybook/react-vite').StorybookConfig } */

const config = {
    stories: [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../src/components/**/*.stories.@(js|jsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        // {
        //     name: '@storybook/addon-styling',
        //     options: {
        //         postCss: {
        //             implementation: require.resolve('postcss'),
        //         },
        //     },
        // },
        "@storybook/addon-interactions",
        "@storybook/addon-mdx-gfm"
    ],
    core: {},
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;
