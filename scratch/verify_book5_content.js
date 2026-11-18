const fs = require('fs');
global.window = {};
eval(fs.readFileSync('book5_data.js', 'utf8'));
const data = window.book5Data;

console.log('Book 5 Total Spreads:', data.spreads.length);
console.log('Book 5 Total TOC items:', data.tocData.length);

let errors = 0;
data.spreads.forEach((s, idx) => {
  const left = s.left.content;
  const right = s.right.content;
  
  if (!left.includes('syllabus-main-title')) {
    console.error(`Spread ${idx} missing syllabus-main-title in left`);
    errors++;
  }
  if (!left.includes('syllabus-subtopic-title')) {
    console.error(`Spread ${idx} missing syllabus-subtopic-title in left`);
    errors++;
  }
  if (!right.includes(`openMCQForSpread(${idx})`)) {
    console.error(`Spread ${idx} missing openMCQForSpread(${idx}) in right`);
    errors++;
  }
  if (s.left.pageNumber !== (idx * 2 + 1)) {
    console.error(`Spread ${idx} left pageNumber mismatch: expected ${idx * 2 + 1}, got ${s.left.pageNumber}`);
    errors++;
  }
  if (s.right.pageNumber !== (idx * 2 + 2)) {
    console.error(`Spread ${idx} right pageNumber mismatch: expected ${idx * 2 + 2}, got ${s.right.pageNumber}`);
    errors++;
  }
});

console.log(`Verification completed with ${errors} errors.`);
