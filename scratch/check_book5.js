const fs = require('fs');
global.window = {};
const content = fs.readFileSync('book5_data.js', 'utf8');
eval(content);
const book5Data = window.book5Data;
console.log('Book5 Title:', book5Data.title);
console.log('Spreads length:', book5Data.spreads.length);
console.log('TOC length:', book5Data.tocData.length);
book5Data.tocData.forEach((t, i) => {
  console.log(`Topic ${i+1} (Spread ${t.spreadIndex}): ${t.title}`);
});
