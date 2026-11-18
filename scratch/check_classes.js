const fs = require('fs');
const content = fs.readFileSync('book5_data.js', 'utf8');
console.log('Sample content snippet:');
console.log(content.substring(500, 1000));
