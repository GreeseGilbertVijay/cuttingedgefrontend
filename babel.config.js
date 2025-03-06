module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            'react-native-device-info': './react-native-device-info.js',
          },
        },
      ],
      'react-native-reanimated/plugin', // 👈 Required for Reanimated (if using)
      '@babel/plugin-proposal-export-namespace-from', // 👈 Ensures compatibility with some libraries
    ],
  };
};
