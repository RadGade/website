// var appConfig = new blockstack.AppConfig(
//   ['email', 'publish_data', 'store_write'], // app access scopes
//   // You also can pass
//   // appDomain
//   // redirectPath
//   // manifestPath 
// );

// var userSession = new blockstack.UserSession({
//   appConfig: AppConfig
// }); 

const appConfig = new blockstack.AppConfig(['store_write', 'publish_data'], 'http://localhost:3000')
    
    appConfig.redirectURI = () => 'home.html' 
        
    const blockstack = new blockstack.UserSession({ appConfig })
           
    const invalidAuthRequest = blockstack.makeAuthRequest(privateKey)
       
    console.log(invalidAuthRequest)




function signOut() {
  // We pass url to redirect after signing out
  blockstack.signUserOut('index.html');
}

