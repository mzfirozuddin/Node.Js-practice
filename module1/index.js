const fs = require("fs")

//create and write into a file
// fs.writeFileSync("bio.txt","My name is mirza firoz uddin")

// append in a file
// fs.appendFileSync("bio.txt"," I am a student of Aliah University")

//read from a file
// const data = fs.readFileSync("bio.txt") 
// console.log(data)       //here ue get buffer data

// org_data = data.toString(); // here we convert buffer data to normal data
// console.log(org_data);


// const data = fs.readFileSync("bio.txt","utf-8") // here we get normal data because here we use 'utf-8'
// console.log(data);

// fs.unlinkSync("bio.txt");  // delete bio.txt file

fs.rmdirSync("module1")


