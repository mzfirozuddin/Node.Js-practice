const fs = require("fs")

// fs.mkdir("hello",(err)=>{            //create folder
//     console.log("folder creted")
// });

// fs.writeFile("./hello/read.txt","My name is firoz",(err)=>{     //create file and write something
//     console.log("file creted");
// });

// fs.appendFile("./hello/read.txt"," I am a student of aliah university",(err)=>{  //append in file
//     console.log("data appended");
// });

// fs.readFile("./hello/read.txt","utf-8",(err,data)=>{         // read from file
//     console.log(data);
// });

// fs.rename("./hello/read.txt","./hello/Bio.txt",(err)=>{      // rename file
//     console.log("file renamed");
// });

// fs.unlink("./hello/Bio.txt",(err)=>{             // delete file
//     console.log("file deleted");
// });

fs.rmdir("hello",(err)=>{                   //delete folder
    console.log("folder deleted");
});