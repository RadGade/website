// We assume that user is signed in in this file


window.addEventListener('load', (event) => {
  if (!userSession.isUserSignedIn()) {
    alert('Error: User is not signed in.');
  }

});
