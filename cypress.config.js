const { defineConfig } = require("cypress");

module.exports = defineConfig({

  video: false,
  // video: true,
  // videoCompression: 1,
  // videosFolder: "cypress/videos",

  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 12000,
  numTestsKeptInMemory: 1,
  pageLoadTimeout: 60000,
  responseTimeout: 45000,
  requestTimeout: 45000,
  trashAssetsBeforeRuns: false,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  
  env: {
    envVariableName: "",
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("./cypress/plugins/index.js")(on, config);
      return config;
    },

    testIsolation: false,
    specPattern: [
      "**/testing/*.feature",
    ],
  },
});
