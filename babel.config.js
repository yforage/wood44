module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ];

  const plugins = [
    "@babel/plugin-proposal-optional-chaining",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    process.env.NODE_ENV === "development" && "react-refresh/babel",
  ].filter(Boolean);

  return {
    presets,
    plugins,
  };
};
