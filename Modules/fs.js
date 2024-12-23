const fs = require('fs');

fs.writeFile("file2.txt", "This is a file2 text.", ()=>{
    console.log("File2 has been created!!");
})

// const a = fs.readFileSync('file.txt');
// console.log(a);

// fs.readFile('file.txt','utf8', (err, data)=>{
//     console.log(err, data);
// })