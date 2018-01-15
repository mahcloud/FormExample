module.exports = {
  files: {
    javascripts: {
      joinTo: {
        "app.js": /^(app)|(node_modules)/
      }
    }
  },

  plugins: {
    babel: {
      "presets": [
        [
          "env", {
            "modules": false,
            "targets": {
              "browsers": ["last 2 versions", "ie >= 11"]
            }
          }
        ],
        "react"
      ],
      "plugins": [
        "transform-es2015-modules-commonjs",
        "array-includes",
        "transform-object-rest-spread"
      ]
    }
  },

  paths: {
    watched: ["app"]
  },

  modules: {
    autoRequire: {
      "app.js": ["app.js"]
    }
  },

  npm: {
    enabled: true
  }
};
