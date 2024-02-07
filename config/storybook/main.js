module.exports = {
  core: {
    builder: 'webpack5',
  },
  //stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  stories: ['../../src/components/**/*.stories.js','../../src/views/**/*.stories.js'],

  addons: ['@storybook/addon-essentials', '@storybook/addon-links']
}
