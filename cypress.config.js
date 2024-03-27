const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  e2e: {
    //baseUrl: "https://www.micarrefour.com.ar",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      snapshotOnly: true,
      requestMode: true,
    }
  },
});
