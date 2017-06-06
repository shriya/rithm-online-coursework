var path = require("path")

// Normalize a path
console.log(path.normalize('/test/test1//2slashes/1slash/tab/..')); 

// Join multiple paths together
console.log(path.join('/first', 'second', 'something', 'then', '..'));

// Resolve a path (find the absolute path)
console.log(path.resolve('first.js'));

// Find the extension of a filename
console.log(path.extname('main.js'));
