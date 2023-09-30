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
        "@storybook/addon-interactions",
        // {
        //     name: '@storybook/addon-styling',
        //     options: {
        //         postCss: {
        //             implementation: require.resolve('postcss'),
        //         },
        //     },
        // },
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
};
export default config;
