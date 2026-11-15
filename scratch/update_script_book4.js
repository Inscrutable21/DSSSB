const fs = require('fs');
let script = fs.readFileSync('script.js', 'utf8');

const isCRLF = script.includes('\r\n');
if (isCRLF) {
  script = script.replace(/\r\n/g, '\n');
}

// Replace isBook5 checks with (activeBookId === 'book4' || activeBookId === 'book5') or (mcqActiveBook === 'book4' || mcqActiveBook === 'book5')
script = script.replace(
  "const isBook5 = (activeBookId === 'book5');\n    const targetIdx = isBook5 ? Math.floor(currentSpread / 2) : currentSpread;",
  "const isMultiPage = (activeBookId === 'book4' || activeBookId === 'book5');\n    const targetIdx = isMultiPage ? Math.floor(currentSpread / 2) : currentSpread;"
);

script = script.replace(
  "const isBook5 = (mcqActiveBook === 'book5');\n      const label = isBook5 ? `Topic ${sIdx + 1}` : `Spread ${sIdx + 1}`;",
  "const isMultiPage = (mcqActiveBook === 'book4' || mcqActiveBook === 'book5');\n      const label = isMultiPage ? `Topic ${sIdx + 1}` : `Spread ${sIdx + 1}`;"
);

script = script.replace(
  "const isBook5 = (mcqActiveBook === 'book5');\n    const topicIdx = Math.floor((q.id - 1) / 10);\n    const targetSpread = isBook5 ? (topicIdx * 2) : topicIdx;",
  "const isMultiPage = (mcqActiveBook === 'book4' || mcqActiveBook === 'book5');\n    const topicIdx = Math.floor((q.id - 1) / 10);\n    const targetSpread = isMultiPage ? (topicIdx * 2) : topicIdx;"
);

script = script.replace(
  "const label = isBook5 ? `Topic ${topicIdx + 1}` : `Spread ${targetSpread + 1}`;",
  "const label = isMultiPage ? `Topic ${topicIdx + 1}` : `Spread ${targetSpread + 1}`;"
);

script = script.replace(
  "const isBook5 = (mcqActiveBook === 'book5');\n    const topicCount = 20;",
  "const isMultiPage = (mcqActiveBook === 'book4' || mcqActiveBook === 'book5');\n    const topicCount = 20;"
);

script = script.replace(
  "const pL = isBook5 ? (s * 4 + 1) : (s * 2 + 1);\n      const pR = isBook5 ? (s * 4 + 4) : (s * 2 + 2);",
  "const pL = isMultiPage ? (s * 4 + 1) : (s * 2 + 1);\n      const pR = isMultiPage ? (s * 4 + 4) : (s * 2 + 2);"
);

script = script.replace(
  "const tocIdx = isBook5 ? (s * 2) : s;",
  "const tocIdx = isMultiPage ? (s * 2) : s;"
);

script = script.replace(
  "opt.textContent = isBook5",
  "opt.textContent = isMultiPage"
);

if (isCRLF) {
  script = script.replace(/\n/g, '\r\n');
}

fs.writeFileSync('script.js', script, 'utf8');
console.log('Successfully updated script.js for Book 4 & Book 5 multi-page topic support!');

