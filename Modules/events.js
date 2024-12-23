const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
    console.log("Please turn off the motor!!");
    setTimeout(() => {
        console.log("Please turn off the motor its a gentle remainder!!");
    }, 3000);
});

console.log("Script is running");
console.log("Script is still running");
myEmitter.emit('waterFull');
