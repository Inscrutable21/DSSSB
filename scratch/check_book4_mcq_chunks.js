const fs = require('fs');
global.window = {};
eval(fs.readFileSync('book4_mcqs.js', 'utf8'));
const mcqs = window.book4MCQs;

for (let i = 0; i < 20; i++) {
  const start = i * 10;
  console.log(`Topic ${i + 1} (Q${start + 1}-Q${start + 10}):`);
  console.log(`  Q${start + 1}: ${mcqs[start].question.substring(0, 90)}...`);
  console.log(`  Q${start + 10}: ${mcqs[start + 9].question.substring(0, 90)}...`);
}
