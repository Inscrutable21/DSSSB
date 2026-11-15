const fs = require('fs');

const p1 = require('./book4_mcqs_p1.js');
const p2 = require('./book4_mcqs_p2.js');
const p3 = require('./book4_mcqs_p3.js');
const p4 = require('./book4_mcqs_p4.js');

const allMCQs = [...p1, ...p2, ...p3, ...p4];
console.log('Total Book 4 MCQs assembled:', allMCQs.length);

if (allMCQs.length !== 200) {
  console.error('ERROR: Expected 200 MCQs, got', allMCQs.length);
  process.exit(1);
}

// Verify IDs are 1 to 200 sequentially
for (let i = 0; i < allMCQs.length; i++) {
  if (allMCQs[i].id !== (i + 1)) {
    console.warn(`Fixing ID mismatch at index ${i}: expected ${i + 1}, had ${allMCQs[i].id}`);
    allMCQs[i].id = i + 1;
  }
}

const content = '// Book 4 MCQs: Mobile Forensics & Telecom Analysis\n// 200 High-Yield DSSSB Pattern Questions (10 Questions per Topic across 20 Topics)\nwindow.book4MCQs = ' + JSON.stringify(allMCQs, null, 2) + ';\n';
fs.writeFileSync('book4_mcqs.js', content, 'utf8');
console.log('Successfully wrote book4_mcqs.js with 200 MCQs!');

