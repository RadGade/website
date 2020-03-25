const appConfig = new blockstack.AppConfig(['store_write', 'publish_data'])

const appDomain = "https://genderev.com";
  

var userSession = new blockstack.UserSession({
  appConfig,
}); 

function signOut() {
  // We pass url to redirect after signing out
  blockstack.signUserOut('index.html');
}
