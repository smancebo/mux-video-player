module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./app'],
        alias: {
          atoms: './app/components/atoms',
          molecules: './app/components/molecules',
          organisms: './app/components/organisms',
        },
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
      },
    ],
  ],
};
