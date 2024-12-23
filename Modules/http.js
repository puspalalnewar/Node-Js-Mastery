const http = require('http');

const port = process.env.PORT || 2000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200,
    res.setHeader('Content-Type', 'text/html'),
    res.end('<h1>This is Puspalal Newar</h1><p>This is the way to rock the world!!</p>')
})

server.listen(port, ()=>{
    console.log(`Server is listing to the port ${port}`);
})