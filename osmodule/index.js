const os = require("os")

console.log(os.arch());      // to know the os architecture

// console.log(os.cpus());     //to know the information about each logical CPU core

// const mem = os.freemem();           // to know the free memory
// console.log(mem);
// console.log(`${mem/1024/1024/1024}`);   

// console.log(os.platform());         // to know the which platform you use
// console.log(os.release());
// console.log(os.tmpdir());       // to know the temp file path

// console.log(os.hostname());     // to know the host name
// console.log(os.homedir());          // to know the home directory

// const mem = os.totalmem();        // to know the total memory
// console.log(mem);                  // output in bytes       
// console.log(mem/1024/1024/1024);    // output in GB      

// console.log(os.loadavg());      // load average of OS

// console.log(os.networkInterfaces());

// console.log(os.type());         // to know the os type

// console.log(os.version());          // it return the kernal version