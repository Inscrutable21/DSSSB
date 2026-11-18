const fs = require('fs');
const p1 = require('./gen_book5_hinglish_p1.js');
const p2 = require('./gen_book5_hinglish_p2.js');

const allSpreads = [...p1, ...p2];

if (allSpreads.length !== 20) {
  console.error(`Error: Expected 20 spreads, got ${allSpreads.length}`);
  process.exit(1);
}

const tocTitles = [
  "Confidentiality, Integrity, and Availability (CIA) Triad",
  "Authentication, Authorization, Non-repudiation",
  "concepts of Cryptography & Steganography",
  "Symmetric and Asymmetric algorithms: Symmetric (Stream vs Block & DES)",
  "Symmetric and Asymmetric algorithms: Symmetric (AES & Modes of Operation)",
  "Symmetric and Asymmetric algorithms: Asymmetric (Public-Key & RSA)",
  "Symmetric and Asymmetric algorithms: Asymmetric (Diffie-Hellman & ECC)",
  "Hashing Algorithms: Properties, Avalanche & Collision Resistances",
  "Hashing Algorithms: Modern Families (SHA-2, SHA-3) & HMAC",
  "Cryptanalysis: Goals, Classical Attack Models & Cryptanalytic Methods",
  "Digital Signature: Architecture, Signing/Verification & Services",
  "Digital A Certificate, Certifying Authorities (CA)",
  "steganalysis and its challenges",
  "Vulnerability Assessment and Penetration Testing (VAPT)",
  "vulnerability v/s weakness, types of U, vulnerabilities",
  "types of vulnerabilities: Memory Corruption, Access Control & Web Flaws",
  "Common Vulnerabilities and Exposures (CVEs)",
  "Common Vulnerability Scoring System (CVSS)",
  "vulnerability assessment tools and techniques",
  "penetration testing and its methods/tools"
];

const subtopics = [
  "Core Definitions, 3 Pillars, Controls & Kerckhoffs's Principle",
  "AAA Framework, 3 MFA Factors, Access Models & IT Act Sec 3",
  "Crypto vs Stego, LSB Substitution, DCT & Watermarking",
  "Stream vs Block Ciphers, Shannon's Principles, DES & 3DES",
  "AES SPN Architecture, 4 Round Steps, ECB/CBC/CTR/GCM Modes",
  "Public-Key Paradigm, RSA Math, Hybrid Cryptosystem",
  "Diffie-Hellman Key Agreement, DLP, MitM, PFS & ECC Curves",
  "Hash Properties, Avalanche Effect, Birthday Paradox & Evidence",
  "SHA-2 (256/512), SHA-3 Keccak Sponge, HMAC & Password Salts",
  "Goals of Cryptanalysis, 4 Attack Models, Brute Force & Side Channels",
  "Signing (Private) vs Verification (Public), IT Act Sec 3A, ECDSA",
  "X.509 v3 Standard Fields, PKI Trust Anchors, Indian CCA, CRL vs OCSP",
  "Steganalysis Goals, EOF Appends, Bit-Plane Slicing, Chi-Square PoVs",
  "VA (Breadth) vs PT (Depth), Testing Types, ROE & IT Act Sec 43/66",
  "CWE vs CVE, SQL Injection Attacks & Parameterized Defenses, XSS",
  "Stack Buffer Overflow, ASLR/DEP/Canaries, IDOR, CSRF, SSRF",
  "MITRE CVE Program, Syntax CVE-YYYY-NNNN, CNA Role & NIST NVD",
  "CVSS v3.1 Scale 0.0-10.0, Severity Ratings & Base Vector Metrics",
  "5-Phase VA Lifecycle, Authenticated Scans, Nessus & CISA KEV",
  "PTES 7 Phases, Nmap Port Scanning, Metasploit Meterpreter & Burp"
];

const tocData = tocTitles.map((title, idx) => ({
  spreadIndex: idx,
  pageNumber: idx * 2 + 1,
  title: title,
  subtopics: subtopics[idx]
}));

const book5Data = {
  id: "book5",
  title: "Book 5: InfoSec, Crypto & VAPT",
  shortTitle: "InfoSec, Crypto & VAPT",
  fullTitle: "INFORMATION SECURITY, CRYPTOGRAPHY & VAPT",
  badge: "DSSSB JSA (Cyber Forensic) — Book 5",
  category: "Cyber Security & VAPT",
  subtitle: "Information Security, Cryptography & VAPT (DSSSB Intermediate Hinglish Edition)",
  description: "DSSSB Exam-Focused Revision (40-Page Hinglish Edition): Information Security, CIA Triad, AAA & Non-repudiation, Crypto vs Stego, Symmetric (DES/AES) & Asymmetric (RSA/DH/ECC), Hashing (SHA-2/SHA-3/HMAC), Cryptanalysis, Digital Signatures & X.509 Certificates, Steganalysis, VAPT, CVEs, CVSS v3.1, VA Tools & Pentest Tools.",
  stats: "20 Spreads • 40 Pages • 20 Syllabus Topics • 200 Aligned MCQs",
  coverClass: "book5-theme",
  tocSubtitle: "DSSSB JSA InfoSec & VAPT 20-Topic Hinglish Master Index",
  tocData: tocData,
  spreads: allSpreads
};

const jsContent = `/**
 * DSSSB JSA (Cyber Forensic) - Book 5 Dataset
 * Exactly 20 Spreads / 40 Pages / 20 Syllabus Topics / 200 Aligned MCQs
 * Complete Hinglish Edition following SKILL.md Tutorial Methodology
 */

const b5Payload = ${JSON.stringify(book5Data, null, 2)};

if (typeof window !== 'undefined') {
  window.book5Data = b5Payload;
}
if (typeof global !== 'undefined') {
  global.book5Data = b5Payload;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = b5Payload;
}
`;

fs.writeFileSync('e:/DSSSB/book5_data.js', jsContent, 'utf8');
console.log('Successfully wrote e:/DSSSB/book5_data.js!');
console.log(`Spreads: ${allSpreads.length}, TOC Items: ${tocData.length}`);
