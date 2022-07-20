const http = require("http");
const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if (req.url == "/") {
        res.end("hello from home side");
    }
    else if (req.url == "/about") {
        res.end("hello from about side");
    }
    else if (req.url == "/contact") {
        res.end("hello from contact side");
    }
    else{
        res.end("<h1>404 error page. page doesn't exit...</h1>");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to port no 8000......");
});