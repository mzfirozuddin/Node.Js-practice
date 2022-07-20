const fs = require("fs")

// fs.writeFileSync("hello.txt","My name is mirza firoz uddin")
// fs.appendFileSync("hello.txt","I am a student")


// fs.renameSync("hello.txt","read.txt")   //rename the file

// fs.mkdirSync("firoz")  // create the "firoz" folder

// fs.unlinkSync("index.js")  // delete index.js file

fs.rmdirSync("firoz")    // delete folder "firoz"