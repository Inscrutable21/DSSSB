const fs = require('fs');
global.window = {};
require('../book5_data.js');
require('../book5_mcqs.js');

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

const data = window.book5Data;
const spreads = data.spreads;

spreads.forEach((spread, idx) => {
  const topicIdx = Math.floor(idx / 2);
  const topicNum = topicIdx + 1;
  const mainTitle = syllabusTopics[topicIdx];
  const spreadInTopic = idx % 2;
  const pageL = spreadInTopic * 2 + 1;
  const pageR = spreadInTopic * 2 + 2;

  function updatePage(pageObj, pageNum) {
    let content = pageObj.content;
    const mH2 = content.match(/<h2>(.*?)<\/h2>/);
    let subTitle = mH2 ? mH2[1] : 'Deep Dive & Analysis';

    // Remove any previous subtitle suffix like "(Part 1)" if present
    subTitle = subTitle.replace(/\s*\(Part\s*\d+\)\s*/i, '').trim();

    const newHeader = `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC ${topicNum} • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">${mainTitle}</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: ${subTitle} (Part ${pageNum}/4)</h3>
    </div>`;

    if (content.includes('class="legal-dispatch-header"') || content.includes('class="syllabus-header-card"')) {
      content = content.replace(/<div class="(?:legal-dispatch-header|syllabus-header-card)">[\s\S]*?<\/div>/, newHeader.trim());
    } else {
      content = newHeader + content;
    }
    pageObj.content = content;
    return subTitle;
  }

  const subL = updatePage(spread.left, pageL);
  const subR = updatePage(spread.right, pageR);

  // Update runningHead
  spread.left.runningHead = `TOPIC ${topicNum} • ${mainTitle.slice(0, 40).toUpperCase()}`;
  spread.right.runningHead = `TOPIC ${topicNum} • PART ${pageR}/4`;
});

// Update TOC Data
const toc = data.tocData;
for (let s = 0; s < 40; s++) {
  const topicIdx = Math.floor(s / 2);
  const topicNum = topicIdx + 1;
  const mainTitle = syllabusTopics[topicIdx];
  const part = (s % 2) + 1;
  
  // Extract subtitle from left page of this spread
  const leftContent = spreads[s].left.content;
  const mSub = leftContent.match(/class="syllabus-subtopic-title">Subtopic:\s*(.*?)\s*\(Part/);
  const subTitle = mSub ? mSub[1] : (part === 1 ? 'Foundations & Mechanics' : 'Deep Dive & Attacks');

  toc[s] = {
    chapter: `Syllabus Topic ${topicNum} (Part ${part}/2)`,
    title: `${mainTitle}: ${subTitle}`,
    spreadIndex: s,
    page: `${s * 2 + 1}–${s * 2 + 2}`
  };
}

data.stats = '40 Spreads • 80 Pages • 20 Syllabus Topics (4 Pages/Topic) • 200 Aligned MCQs';
data.description = 'Comprehensive 80-Page Deep Dive into Information Security, Cryptography & VAPT: Confidentiality, Integrity & Availability (CIA) Triad, AAA & Non-repudiation, Concepts of Cryptography & Steganography, Symmetric & Asymmetric Algorithms, Hashing, Cryptanalysis, Digital Signatures & Certificates, Steganalysis, VAPT Lifecycle, Vulnerability vs Weakness, CVEs, CVSS v3.1/v4.0, VA Tools and Penetration Testing Tools.';

// Write back to book5_data.js
const outData = '// Book 5 Data: Information Security, Cryptography & VAPT\n// Comprehensive 80-Page Architecture: 4 Full In-Depth Pages per Syllabus Topic\n// Main Heading = Official Syllabus Topic | Subtopic = Granular Subtopic Heading\nwindow.book5Data = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('book5_data.js', outData, 'utf8');
console.log('Successfully updated book5_data.js with Syllabus Main Headings & Subtopics!');

// Update book5_mcqs.js
const mcqs = window.book5MCQs;
for (let i = 0; i < mcqs.length; i++) {
  const topicIdx = Math.floor(i / 10);
  mcqs[i].topic = syllabusTopics[topicIdx];
}
const outMCQs = '// Book 5 MCQs: Information Security, Cryptography & VAPT (200 Questions)\n// Topic field aligned 1:1 with Official Syllabus Main Headings\nwindow.book5MCQs = ' + JSON.stringify(mcqs, null, 2) + ';\n';
fs.writeFileSync('book5_mcqs.js', outMCQs, 'utf8');
console.log('Successfully updated book5_mcqs.js with Syllabus Topics!');
