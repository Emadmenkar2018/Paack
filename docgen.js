

var fs = require('fs');
var generateMarkdown = require('./generateMarkdown');
var path = require('path');

var json = '';
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    json += chunk;
  }
});

process.stdin.on('end', function() {
  buildDocs(JSON.parse(json));
});

function buildDocs(api) {
  // api is an object keyed by filepath. We use the file name as component name.
  for (var filepath in api) {
    var name = getComponentName(filepath);
    var markdown = generateMarkdown(name, api[filepath]);
    fs.writeFileSync(name + '.md', markdown);
    process.stdout.write(filepath + ' -> ' + name + '.md\n');
  }
}

function getComponentName(filepath) {
  var name = path.basename(filepath);
  // check for index.js
  if (name === 'index.js') {
    const dirs = path.dirname(filepath).split('/');
    name = dirs[dirs.length - 1];
  }
  var ext;
  while ((ext = path.extname(name))) {
    name = name.substring(0, name.length - ext.length);
  }
  return name;
}