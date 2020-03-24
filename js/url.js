


const { fs, run, http, https, url } = window.nodebowl;

  // read the third argument (= the url ) & save it into a variable
const myUrl = process.argv[2];

// only run this block if the user inputs a third argument
if (myUrl) {
// destructure these specific properties from the URL
  const { href, host, pathname, protocol } = new URL(myUrl);

// log the destructured properties
  console.log(`The Href is: ${href}`);
  console.log(`The Protocol is: ${protocol}`);
  console.log(`The Host is: ${host}`);
  console.log(`The Pathname is: ${pathname}`);
}

run('url.js');


