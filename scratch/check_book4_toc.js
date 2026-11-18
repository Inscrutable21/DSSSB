const fs = require('fs');
global.window = {};
eval(fs.readFileSync('book4_data.js', 'utf8'));
const b4 = window.book4Data;
console.log('Book 4 Spreads count:', b4.spreads.length);
b4.tocData.forEach((t, i) => {
  console.log(`Topic ${i + 1} (Spread ${t.spreadIndex}): ${t.title}`);
});
