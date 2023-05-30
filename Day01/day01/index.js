require('./instantHello')

const talk = require('./talk')
talk()

let user = "Jack";

console.log("Hello", user);

require('./talks') // once the folder is called, it just refers to the index.js file of the folder
// we can use the index.js file to connect 

