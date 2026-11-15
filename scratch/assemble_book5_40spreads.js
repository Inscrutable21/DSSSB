const fs = require('fs');

const p1 = require('./gen_spreads_40_p1.js');
const p2 = require('./gen_spreads_40_p2.js');
const p3 = require('./gen_spreads_40_p3.js');
const p4 = require('./gen_spreads_40_p4.js');

const allSpreads = [...p1, ...p2, ...p3, ...p4];
console.log('Total spreads to assemble:', allSpreads.length);

if (allSpreads.length !== 40) {
  console.error('ERROR: Expected 40 spreads, got', allSpreads.length);
  process.exit(1);
}

// Generate the 40-item Table of Contents
const tocData = [
  // Topic 1: CIA Triad & Core Principles
  { chapter: "Topic 1 (Part 1)", title: "CIA Triad Foundations & Breaches", spreadIndex: 0, page: "1–2" },
  { chapter: "Topic 1 (Part 2)", title: "Defense-in-Depth & Risk Management", spreadIndex: 1, page: "3–4" },

  // Topic 2: AAA & Non-Repudiation
  { chapter: "Topic 2 (Part 1)", title: "The AAA Architecture & MFA Factors", spreadIndex: 2, page: "5–6" },
  { chapter: "Topic 2 (Part 2)", title: "RBAC/ABAC Models & Non-Repudiation", spreadIndex: 3, page: "7–8" },

  // Topic 3: Concepts of Cryptography & Steganography
  { chapter: "Topic 3 (Part 1)", title: "Crypto vs Stego & Spatial LSB", spreadIndex: 4, page: "9–10" },
  { chapter: "Topic 3 (Part 2)", title: "Transform Domain, Trilemma & Channels", spreadIndex: 5, page: "11–12" },

  // Topic 4: Symmetric Encryption: Stream vs Block & DES/3DES
  { chapter: "Topic 4 (Part 1)", title: "Stream vs Block & Shannon's Pillars", spreadIndex: 6, page: "13–14" },
  { chapter: "Topic 4 (Part 2)", title: "DES Architecture, 2DES MitM & 3DES", spreadIndex: 7, page: "15–16" },

  // Topic 5: Symmetric Encryption: AES & Cipher Modes
  { chapter: "Topic 5 (Part 1)", title: "AES Architecture & Round Functions", spreadIndex: 8, page: "17–18" },
  { chapter: "Topic 5 (Part 2)", title: "Cipher Modes (ECB, CBC, CTR, GCM)", spreadIndex: 9, page: "19–20" },

  // Topic 6: Asymmetric Algorithms: RSA Architecture & Formulas
  { chapter: "Topic 6 (Part 1)", title: "Public-Key Foundations & RSA Math", spreadIndex: 10, page: "21–22" },
  { chapter: "Topic 6 (Part 2)", title: "RSA Formulas, OAEP & Hybrid Systems", spreadIndex: 11, page: "23–24" },

  // Topic 7: Asymmetric Algorithms: Diffie-Hellman & ECC
  { chapter: "Topic 7 (Part 1)", title: "Diffie-Hellman Key Exchange & PFS", spreadIndex: 12, page: "25–26" },
  { chapter: "Topic 7 (Part 2)", title: "Elliptic Curves, ECDSA & Ed25519", spreadIndex: 13, page: "27–28" },

  // Topic 8: Hashing Algorithms: Core Properties & Legacy Hashes
  { chapter: "Topic 8 (Part 1)", title: "Hash Properties, Avalanche & Resistances", spreadIndex: 14, page: "29–30" },
  { chapter: "Topic 8 (Part 2)", title: "Birthday Attack, MD5/SHA-1 & Forensics", spreadIndex: 15, page: "31–32" },

  // Topic 9: Hashing Algorithms: SHA-2, SHA-3 Sponge & HMAC
  { chapter: "Topic 9 (Part 1)", title: "SHA-2 Family & Length Extension Attacks", spreadIndex: 16, page: "33–34" },
  { chapter: "Topic 9 (Part 2)", title: "HMAC, SHA-3 Sponge & Password KDFs", spreadIndex: 17, page: "35–36" },

  // Topic 10: Cryptanalysis: Attack Models & Techniques
  { chapter: "Topic 10 (Part 1)", title: "Cryptanalysis Goals & 4 Attack Models", spreadIndex: 18, page: "37–38" },
  { chapter: "Topic 10 (Part 2)", title: "Classical Techniques & Side-Channels", spreadIndex: 19, page: "39–40" },

  // Topic 11: Digital Signatures & Indian IT Act 2000
  { chapter: "Topic 11 (Part 1)", title: "Signature Architecture & Security Triad", spreadIndex: 20, page: "41–42" },
  { chapter: "Topic 11 (Part 2)", title: "RSA-PSS, DSA, ECDSA & IT Act Sec 3", spreadIndex: 21, page: "43–44" },

  // Topic 12: Digital Certificates, Certifying Authorities & PKI
  { chapter: "Topic 12 (Part 1)", title: "ITU-T X.509 v3 & PKI Trust Hierarchy", spreadIndex: 22, page: "45–46" },
  { chapter: "Topic 12 (Part 2)", title: "CRL, OCSP Stapling & CT Audit Logs", spreadIndex: 23, page: "47–48" },

  // Topic 13: Steganalysis and Its Challenges
  { chapter: "Topic 13 (Part 1)", title: "Steganalysis Goals & Bit-Plane Slicing", spreadIndex: 24, page: "49–50" },
  { chapter: "Topic 13 (Part 2)", title: "Chi-Square Attack, SPA & Defense Roadblocks", spreadIndex: 25, page: "51–52" },

  // Topic 14: VAPT Fundamentals & Vulnerability v/s Weakness
  { chapter: "Topic 14 (Part 1)", title: "VA vs Penetration Testing & CWE vs CVE", spreadIndex: 26, page: "53–54" },
  { chapter: "Topic 14 (Part 2)", title: "Black/Grey/White Box & ROE Standards", spreadIndex: 27, page: "55–56" },

  // Topic 15: Types of Vulnerabilities: Injection & Memory
  { chapter: "Topic 15 (Part 1)", title: "SQL Injection, Parameterization & XSS", spreadIndex: 28, page: "57–58" },
  { chapter: "Topic 15 (Part 2)", title: "Buffer Overflows (CWE-120), ASLR & Canaries", spreadIndex: 29, page: "59–60" },

  // Topic 16: Types of Vulnerabilities: Web, Auth & Systems
  { chapter: "Topic 16 (Part 1)", title: "Broken Access Control, IDOR & CSRF Tokens", spreadIndex: 30, page: "61–62" },
  { chapter: "Topic 16 (Part 2)", title: "SSRF (169.254.169.254), Clickjacking & Uploads", spreadIndex: 31, page: "63–64" },

  // Topic 17: Common Vulnerabilities and Exposures (CVEs) & CVSS
  { chapter: "Topic 17 (Part 1)", title: "MITRE CVE Standard, CNAs & NVD", spreadIndex: 32, page: "65–66" },
  { chapter: "Topic 17 (Part 2)", title: "CVSS v3.1 Metric Groups & Severity Ratings", spreadIndex: 33, page: "67–68" },

  // Topic 18: Vulnerability Assessment Tools and Techniques
  { chapter: "Topic 18 (Part 1)", title: "5-Phase VA Lifecycle & Credentialed Scans", spreadIndex: 34, page: "69–70" },
  { chapter: "Topic 18 (Part 2)", title: "Nessus NASL, OpenVAS & CISA KEV Catalog", spreadIndex: 35, page: "71–72" },

  // Topic 19: Penetration Testing Methods & Nmap Scanning
  { chapter: "Topic 19 (Part 1)", title: "PTES 7 Phases & Passive/Active Recon", spreadIndex: 36, page: "73–74" },
  { chapter: "Topic 19 (Part 2)", title: "Nmap Flags (-sS, -sT, -sV) & Port States", spreadIndex: 37, page: "75–76" },

  // Topic 20: Penetration Testing Exploitation Tools & Reporting
  { chapter: "Topic 20 (Part 1)", title: "Metasploit Architecture & In-Memory Meterpreter", spreadIndex: 38, page: "77–78" },
  { chapter: "Topic 20 (Part 2)", title: "Burp Suite Proxy, Hashcat & Deliverable Reports", spreadIndex: 39, page: "79–80" }
];

global.window = {};
require('../book5_data.js');

window.book5Data.spreads = allSpreads;
window.book5Data.tocData = tocData;
window.book5Data.stats = '40 Spreads • 80 Pages • 20 Topics (4 Pages/Topic) • 200 Aligned MCQs';
window.book5Data.description = 'Comprehensive 80-Page Deep Dive: CIA Triad, Modern Symmetric & Asymmetric Ciphers, Hashing, Cryptanalysis, Digital Signatures, PKI, Steganography, and Complete VAPT Methodologies (4 In-Depth Pages per Syllabus Topic).';

const output = '// Book 5 Data: Information Security, Applied Cryptography & VAPT\n// Comprehensive 80-Page Architecture: 4 Full In-Depth Pages per Syllabus Topic\nwindow.book5Data = ' + JSON.stringify(window.book5Data, null, 2) + ';\n';
fs.writeFileSync('book5_data.js', output, 'utf8');
console.log('Successfully assembled and wrote 40 spreads (80 pages) to book5_data.js! File size:', fs.statSync('book5_data.js').size);

