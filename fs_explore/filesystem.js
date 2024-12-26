const fs = require("fs");

// write file system ----------------------------------->
// Synchr.... Blocking Request
// fs.writeFileSync("./test.txt", "Hi, This is the test file.");

// Async.... Non blocking Request
// fs.writeFile("./test.txt", "Hello World!!", ()=>{});

// read file system--------------------------------->
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// fs.readFile("./contact.txt", "utf-8", (err, result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }
// })

// append file system---------------------------------->
// fs.appendFileSync("./test.txt", `${Date.now()} Hey there\n`);

// Copy fs -------------------------------->
// fs.cpSync("./test.txt", "./copy.txt");

// Unlink || Delete fs------------------------------->
// fs.unlinkSync("./copy.txt")

// console.log(fs.statSync("./test.txt"));
// console.log(fs.statSync("./test.txt").isFile());  True
// console.log(fs.statSync("./test.txt").isDirectory()); False
