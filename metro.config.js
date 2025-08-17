const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const config = getDefaultConfig(__dirname);
const configWithNativeWind = withNativeWind(config, { input: './global.css' });

module.exports = withStorybook(configWithNativeWind, {
  enabled: true,
  configPath: path.resolve(__dirname, './.rnstorybook'),
});