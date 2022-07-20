const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request",(req,res)=>{

    /* // odd method
    
    fs.readFile("input.txt",(err,data)=>{
        if(err){
            return console.error(err);
        }
        res.end(data.toString());
    }); 
    
    */

    const rstream = fs.createReadStream("input.txt");

    rstream.on("data",(chunkdata)=>{
        res.write(chunkdata);
    });

    rstream.on("end",()=>{
        res.end();
    });

    rstream.on("error",(err)=>{
        res.end("File not found!.....");
    });

});

server.listen(8000,"127.0.0.1");