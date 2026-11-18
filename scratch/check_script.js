const fs = require('fs');
const scriptContent = fs.readFileSync('script.js', 'utf8');

// Check isMultiPage occurrences
const matches = scriptContent.match(/isMultiPage[^\n]*/g);
console.log('isMultiPage occurrences:', matches);

// Check if openMCQForSpread works for book5
const openMCQ = scriptContent.match(/function openMCQForSpread[\s\S]*?^}/m);
if (openMCQ) {
  console.log('openMCQForSpread length:', openMCQ[0].length);
}
