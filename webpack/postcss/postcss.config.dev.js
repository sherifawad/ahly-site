module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      browsers: ["last 2 versions", "> 0.05%", "IE 7"],
      stage: 0,
    },
  },
};
