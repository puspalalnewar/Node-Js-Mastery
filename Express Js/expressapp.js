const express = require('express');
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res)=>{
    res.send(`Hello, This is me!!`);
})

app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}`)
})

// const myServer = http.createServer(app);
// myServer.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })