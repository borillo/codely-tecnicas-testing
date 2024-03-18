const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "sbixp8",
  video: false,
  eyesIsDisabled: false,
  eyesBrowser: '[{"width":1280,"height":1024,"name":"chrome"}]',
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 5,
  appliConfFile: {
    concurrency: 3,
    apiKey: "5KtcsRaE1A1nL110111ishKikXNhFImXmC38ZOyFZxkT107ck110",
    browser: [
      {
        width: 1280,
        height: 1024,
        name: "chrome",
      },
    ],
    batchName: "Codely visual testing examples",
    batch: {
      id: "e053eec0-7b58-4539-a1b2-bc01d2ec583d",
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 42247,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
  },
});


require('@applitools/eyes-cypress')(module);
