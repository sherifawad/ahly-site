// module.exports = ({ env }) => ({
//   plugins: [
//     require("postcss-import")(),
//     require("postcss-preset-env")({ browsers: ["last 2 versions", "> 0.05%", "IE 7"], stage: 0 }),
//     // require("cssnano")({ preset: "default" })
//     env === "production" ? require("cssnano")({ preset: "default" }) : false,
//   ],
// });

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      browsers: ["last 2 versions", "> 0.05%", "IE 7"],
      stage: 0,
    },
    cssnano: {},
  },
};
