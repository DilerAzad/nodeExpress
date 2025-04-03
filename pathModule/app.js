const path = require('path');

const filePath = path.join(__dirname, '/content','subfolder','text.txt');
const absolutePath = path.resolve(__dirname, '/content','subfolder','text.txt');
console.log(filePath);

