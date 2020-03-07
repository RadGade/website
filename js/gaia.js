// Read more in documentation
// http://blockstack.github.io/blockstack.js/classes/usersession.html#putfile
var date = moment().format()

function saveFileToGaia() {
  var fileDetails = getFileDetailsFromForm();
  console.log(fileDetails);
  userSession.putFile(date, fileDetails.content, {
    encrypt: false,
    // contentType (You can set a Content-Type header for unencrypted data)
    // sign (You can sign the data with using Users Private Key)
})

function getFileFromGaia() {
  var fileDetails = getFileDetailsToReadFromForm();
  userSession.getFile(date, {
    //decrypt: fileDetails.decrypt,

    //username:



    // You also can set these options (read more in docs):
    // app (you can get files from other app)
    // username (you need to know their username)
    // verify (you can check if files signature is valid)
    // zoneFileLookupURL (The URL to use for zonefile lookup)
  }).then(function(content) {
    showFileContent(content);
  }).catch(function(err) {
    console.error(err);
    alert("Error occured, check console");
  });
}


function showFileContent(content) {
  document.getElementById('entries').innerHTML = content;

}

function getFileDetailsToReadFromForm() {
  return {
    name: document.getElementById('ityped').value,
    decrypt: (document.getElementById('decrypt').value == 'Yes'),
  };
}

function getFileDetailsFromForm() {
  return {
    name: document.getElementById('ityped').value,
    content: document.getElementById('content').value,
    encrypt: false,
  };
};
