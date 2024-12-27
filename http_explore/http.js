const http = require("http");
const fs = require('fs');

const port = 8000;



const myServer = http.createServer((req, res)=>{
    // console.log("New Request Receive!!");
    // console.log(req);
    const recData = `${Date.now()} : New Request Receive!!\n`;
    fs.writeFile("test.txt", "Hello", ()=>{});
    fs.appendFile("./log.txt", recData, (err, res)=>{
        console.log("hi");
    })
    res.end("Hello From Server Again!!");
});

myServer.listen(port, ()=>{
    console.log("Server is running....");
});

