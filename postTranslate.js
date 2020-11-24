var fs = require('fs')
fs.readFile('./dist/index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var toPrepand = "<script src='/js/checkLang.js'></script>";
  var result = data.replace(/\<\/head>/g, toPrepand + '</head>');

  fs.writeFile('./dist/index.html', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});