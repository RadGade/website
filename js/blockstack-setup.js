const appConfig = new blockstack.AppConfig(["store_write", "publish_data"])

appConfig.redirectURI = () => "home.html";

var userSession = new blockstack.UserSession({
 appConfig,
});

function signOut() {
  // We pass url to redirect after signing out
  blockstack.signUserOut('index.html');
}
