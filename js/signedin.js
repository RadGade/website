window.addEventListener('load', (event) => {
  if (!userSession.isUserSignedIn()) {
    alert('Error: You are not signed in.');
  }
});
