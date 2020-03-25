window.addEventListener('load', (event) => {
  if (!userSession.isUserSignedIn()) {
    alert('Error: User is not signed in.');
  }
});
