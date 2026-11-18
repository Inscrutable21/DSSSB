const fs = require('fs');

const p1 = require('./gen_book5_40p_p1.js');
const p2 = require('./gen_book5_40p_p2.js');

const allSpreads = [...p1, ...p2];
console.log('Total 40-page Book 5 spreads to assemble:', allSpreads.length);

if (allSpreads.length !== 20) {
  console.error('ERROR: Expected 20 spreads, got', allSpreads.length);
  process.exit(1);
}

const syllabusTopics = [
  'Confidentiality, Integrity, and Availability (CIA) Triad',
  'Authentication, Authorization & Non-repudiation',
  'Concepts of Cryptography & Steganography',
  'Symmetric and Asymmetric algorithms: Symmetric (Stream vs Block & DES)',
  'Symmetric and Asymmetric algorithms: Symmetric (AES & Modes of Operation)',
  'Symmetric and Asymmetric algorithms: Asymmetric (Public-Key & RSA)',
  'Symmetric and Asymmetric algorithms: Asymmetric (Diffie-Hellman & ECC)',
  'Hashing Algorithms: Properties, Avalanche & Collision Resistances',
  'Hashing Algorithms: Modern Families (SHA-2, SHA-3) & HMAC',
  'Cryptanalysis: Goals, Classical Attack Models & Cryptanalytic Methods',
  'Digital Signature: Architecture, Signing/Verification & Services',
  'Digital Certificate & Certifying Authorities (CA): X.509 & PKI Trust',
  'Steganalysis and Its Challenges: Detection, Attacks & Traps',
  'Vulnerability Assessment and Penetration Testing (VAPT)',
  'Vulnerability v/s Weakness & Types of Vulnerabilities (Input Validation)',
  'Types of Vulnerabilities: Memory Corruption, Access Control & Web Flaws',
  'Common Vulnerabilities and Exposures (CVEs): MITRE & NVD Architecture',
  'Common Vulnerability Scoring System (CVSS): Metrics & Severity Scale',
  'Vulnerability Assessment Tools and Techniques: Lifecycle & Scanners',
  'Penetration Testing and Its Methods/Tools: PTES Phases & Tool Suite'
];

// Generate 20-item Table of Contents (1 item per spread / topic)
const tocData = [];
for (let s = 0; s < 20; s++) {
  const topicNum = s + 1;
  const mainTitle = syllabusTopics[s];

  // Extract subtopic title from left page
  const leftContent = allSpreads[s].left.content;
  const mSub = leftContent.match(/class="syllabus-subtopic-title">Subtopic:\s*(.*?)</);
  const subTitle = mSub ? mSub[1] : 'Core Concepts & Mechanisms';

  tocData.push({
    chapter: `Syllabus Topic ${topicNum}`,
    title: `${mainTitle}`,
    spreadIndex: s,
    page: `${s * 2 + 1}–${s * 2 + 2}`
  });
}

global.window = {};
require('../book5_data.js');

window.book5Data.spreads = allSpreads;
window.book5Data.tocData = tocData;
window.book5Data.stats = '20 Spreads • 40 Pages • 20 Syllabus Topics • 200 Aligned MCQs';
window.book5Data.description = 'DSSSB Exam-Focused Revision (40-Page Intermediate Edition): Information Security, CIA Triad, AAA & Non-repudiation, Crypto vs Stego, Symmetric (DES/AES) & Asymmetric (RSA/DH/ECC), Hashing (SHA-2/SHA-3/HMAC), Cryptanalysis, Digital Signatures & X.509 Certificates, Steganalysis, VAPT, CVEs, CVSS v3.1, VA Tools & Pentest Tools.';

const output = '// Book 5 Data: Information Security, Cryptography & VAPT\n// 40-Page Architecture: Exactly 2 Pages (1 Spread) per Syllabus Topic\n// Intermediate Level: DSSSB Exam Focused, Clear, No Bloated Math\nwindow.book5Data = ' + JSON.stringify(window.book5Data, null, 2) + ';\n';
fs.writeFileSync('book5_data.js', output, 'utf8');
console.log('Successfully wrote 40-page book5_data.js! Size:', (fs.statSync('book5_data.js').size / 1024).toFixed(1), 'KB');
