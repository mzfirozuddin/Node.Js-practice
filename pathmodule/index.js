const path = require("path")
// console.log(path.dirname("C:/Users/FIROZ/Desktop/practice/nodejs/pathmodule/index.js")); 
// console.log(path.extname("C:/Users/FIROZ/Desktop/practice/nodejs/pathmodule/index.js")); 
// console.log(path.basename("C:/Users/FIROZ/Desktop/practice/nodejs/pathmodule/index.js")); 
// console.log(path.parse("C:/Users/FIROZ/Desktop/practice/nodejs/pathmodule/index.js")); 

const mypath = path.parse("C:/Users/FIROZ/Desktop/practice/nodejs/pathmodule/index.js");    // it return a object
console.log(mypath.name);
console.log(mypath.root);
console.log(mypath.base);