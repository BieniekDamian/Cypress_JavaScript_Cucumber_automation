const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') { launchOptions.args.push("--incognito"); }
    if (browser.name === 'electron') { launchOptions.preferences.incognito = true }
    if (browser.name === 'edge') { launchOptions.args.push("--inprivate"); }

    return launchOptions    
  })    
}
