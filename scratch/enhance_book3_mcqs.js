const fs = require('fs');

global.window = {};
require('../book3_mcqs.js');

const mcqs = window.book3MCQs;
console.log('Read book3MCQs count:', mcqs.length);

const topicNames = [
  "RAM Volatility & CPU Architecture",               // Topic 1: Q1–Q10
  "Memory Acquisition Tools & Drivers",              // Topic 2: Q11–Q20
  "Paging & _EPROCESS Structures",                  // Topic 3: Q21–Q30
  "PEB, TEB & Thread Structures",                    // Topic 4: Q31–Q40
  "Process Hierarchy & Token Stealing",              // Topic 5: Q41–Q50
  "Volatility 3 Core Process Plugins",               // Topic 6: Q51–Q60
  "VAD Trees & Malfind Analysis",                    // Topic 7: Q61–Q70
  "In-Memory Registry & Credential Harvesting",       // Topic 8: Q71–Q80
  "Advanced Code Injection Techniques",              // Topic 9: Q81–Q90
  "Linux Memory Forensics",                          // Topic 10: Q91–Q100
  "Compression, KASLR & Pool Tags",                  // Topic 11: Q101–Q110
  "Enterprise Memory & C2 Artifacts",                // Topic 12: Q111–Q120
  "Browser Forensics & Communications in RAM",       // Topic 13: Q121–Q130
  "Hardware & Hypervisor Attacks",                   // Topic 14: Q131–Q140
  "Reverse Engineering In-Memory Binaries",          // Topic 15: Q141–Q150
  "Network Sockets in Memory",                       // Topic 16: Q151–Q160
  "Extraction of Encryption Keys from Memory",       // Topic 17: Q161–Q170
  "Live Memory Debugging & WinDbg",                  // Topic 18: Q171–Q180
  "Memory Hardware & Virtual Machine Snapshots",     // Topic 19: Q181–Q190
  "Incident Response, In-Memory YARA & Legal Rules"  // Topic 20: Q191–Q200
];

mcqs.forEach((q, idx) => {
  const topicIdx = Math.floor(idx / 10);
  q.topic = topicNames[topicIdx] || "RAM & Memory Forensics";
});

const content = '// Book 3 MCQs: RAM & Memory Forensics\n// 200 High-Yield DSSSB Pattern Questions (10 Questions per Topic across 20 Topics)\nwindow.book3MCQs = ' + JSON.stringify(mcqs, null, 2) + ';\n';
fs.writeFileSync('book3_mcqs.js', content, 'utf8');
console.log('Successfully updated book3_mcqs.js with topic fields for all 200 MCQs!');
