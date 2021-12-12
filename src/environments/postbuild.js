const fs = require('fs');

//create 404.html
fs.copyFile('./dist/index.html', './dist/404.html', (err) => {
  if (err) throw err;
  console.log('404.html generated');
});
