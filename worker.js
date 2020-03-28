importScripts('https://unpkg.com/blockstack@21.0.0/dist/blockstack.js', '../workly/workly.js');

const appConfig = new blockstack.AppConfig(['store_write', 'publish_data'])
// const appDomain = "https://genderev.com";
var userSession = new blockstack.UserSession({
appConfig,
});

workly.expose(appConfig);
// workly.expose(appDomain);
workly.expose(UserSession);
