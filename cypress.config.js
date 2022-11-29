const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "36miba",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/**/*/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    screenshotOnRunFailure:true,
    trashAssetsBeforeRuns:true,

    env:{
      webdriveruni_homepage:"http://www.webdriveruniversity.com",
    }
  },
});
