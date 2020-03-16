var appConfig = new blockstack.AppConfig(
  ['email', 'publish_data', 'store_write'], // app access scopes
  // You also can pass
  // appDomain
  // redirectPath
  // manifestPath 
);

appConfig.appDomain = 'https://genderev.com'

var userSession = new blockstack.UserSession({
  appConfig,
}); 

function signOut() {
  // We pass url to redirect after signing out
  blockstack.signUserOut('index.html');
}
