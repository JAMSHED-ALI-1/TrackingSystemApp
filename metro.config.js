const { getDefaultConfig } = require("metro-config");


module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
      assetPlugins: ["expo-asset/tools/hashAssetFiles"],
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();

// const { getDefaultConfig } = require("metro-config");

// module.exports = (async () => {
//   const defaultConfig = await getDefaultConfig(__dirname);

//   // Modify the default configuration to add support for '.cjs' files
//   defaultConfig.resolver.sourceExts.push('cjs');

//   return {
//     ...defaultConfig,
//     transformer: {
//       babelTransformerPath: require.resolve("react-native-svg-transformer"),
//       assetPlugins: ["expo-asset/tools/hashAssetFiles"],
//     },
//     resolver: {
//       ...defaultConfig.resolver,
//       assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== "svg"),
//       sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],
//     },
//   };
// })();

