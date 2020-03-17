function signIn() {
  userSession.redirectToSignIn();
}


window.addEventListener('load', (event) => {
  if (userSession.isUserSignedIn()) {
    doMainActionWhenUserIsSignedIn();
  } else if ((userSession.isSignInPending())) {
    userSession.handlePendingSignIn().then(function() {
      doMainActionWhenUserIsSignedIn();
    });
  }
});
