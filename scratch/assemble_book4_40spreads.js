const fs = require('fs');

const p1 = require('./gen_book4_spreads_p1.js');
const p2 = require('./gen_book4_spreads_p2.js');
const p3 = require('./gen_book4_spreads_p3.js');
const p4 = require('./gen_book4_spreads_p4.js');

const allSpreads = [...p1, ...p2, ...p3, ...p4];
console.log('Total Book 4 spreads to assemble:', allSpreads.length);

if (allSpreads.length !== 40) {
  console.error('ERROR: Expected 40 spreads, got', allSpreads.length);
  process.exit(1);
}

// Generate the 40-item Table of Contents
const tocData = [
  // Topic 1: Basics of Mobile Devices & Mobile Communications
  { chapter: "Topic 1 (Part 1)", title: "AP vs BP Architecture & Storage Standards", spreadIndex: 0, page: "1–2" },
  { chapter: "Topic 1 (Part 2)", title: "Cellular Generations & Global Identifiers", spreadIndex: 1, page: "3–4" },

  // Topic 2: Challenges & Resource Constraints
  { chapter: "Topic 2 (Part 1)", title: "Constraints, Volatility & Triage SOPs", spreadIndex: 2, page: "5–6" },
  { chapter: "Topic 2 (Part 2)", title: "Anti-Forensics, Timeouts & USB Locks", spreadIndex: 3, page: "7–8" },

  // Topic 3: Types of Acquisitions
  { chapter: "Topic 3 (Part 1)", title: "Four-Tiered Extraction Hierarchy", spreadIndex: 4, page: "9–10" },
  { chapter: "Topic 3 (Part 2)", title: "Hash Integrity, Write-Blockers & SIM Files", spreadIndex: 5, page: "11–12" },

  // Topic 4: Low-Level & Hardware Acquisitions
  { chapter: "Topic 4 (Part 1)", title: "Low-Level EDL, BROM & JTAG Probing", spreadIndex: 6, page: "13–14" },
  { chapter: "Topic 4 (Part 2)", title: "ISP Micro-soldering & Chip-Off Rework", spreadIndex: 7, page: "15–16" },

  // Topic 5: Rooting & System Privileges
  { chapter: "Topic 5 (Part 1)", title: "Superuser UID 0, su & Systemless Magisk", spreadIndex: 8, page: "17–18" },
  { chapter: "Topic 5 (Part 2)", title: "AVB dm-verity, Knox eFuse & Wiping", spreadIndex: 9, page: "19–20" },

  // Topic 6: App Permissions Architecture & Abuse
  { chapter: "Topic 6 (Part 1)", title: "Android Sandboxing & Permission Model", spreadIndex: 10, page: "21–22" },
  { chapter: "Topic 6 (Part 2)", title: "iOS TCC Framework & Stalkerware Abuse", spreadIndex: 11, page: "23–24" },

  // Topic 7: Jail-breaking iOS
  { chapter: "Topic 7 (Part 1)", title: "amfid Bypass, Taxonomy & checkm8 Exploit", spreadIndex: 12, page: "25–26" },
  { chapter: "Topic 7 (Part 2)", title: "Extraction Agents vs Evidence Contamination", spreadIndex: 13, page: "27–28" },

  // Topic 8: Android OS Architecture
  { chapter: "Topic 8 (Part 1)", title: "Five-Layer Stack, ART & Zygote Process", spreadIndex: 14, page: "29–30" },
  { chapter: "Topic 8 (Part 2)", title: "Android Partitions, A/B Updates & Binder", spreadIndex: 15, page: "31–32" },

  // Topic 9: File Logging Mechanism in Android-phone
  { chapter: "Topic 9 (Part 1)", title: "logcat Circular Ring Buffers & dumpsys", spreadIndex: 16, page: "33–34" },
  { chapter: "Topic 9 (Part 2)", title: "Native Tombstones & DropBox Persistence", spreadIndex: 17, page: "35–36" },

  // Topic 10: Types of Artefacts: Android Part 1 - System & Communication
  { chapter: "Topic 10 (Part 1)", title: "SQLite WAL Journaling & Telephony DBs", spreadIndex: 18, page: "37–38" },
  { chapter: "Topic 10 (Part 2)", title: "Wi-Fi Passwords & Freelist Carving", spreadIndex: 19, page: "39–40" },

  // Topic 11: Types of Artefacts: Android Part 2 - Third-Party Apps & Media
  { chapter: "Topic 11 (Part 1)", title: "WhatsApp crypt14/15, Telegram & Signal", spreadIndex: 20, page: "41–42" },
  { chapter: "Topic 11 (Part 2)", title: "MediaStore external.db & EXIF Geolocation", spreadIndex: 21, page: "43–44" },

  // Topic 12: Tools & Technologies for Android Forensics
  { chapter: "Topic 12 (Part 1)", title: "ADB Command Suite & Fastboot Protocols", spreadIndex: 22, page: "45–46" },
  { chapter: "Topic 12 (Part 2)", title: "Commercial Suites (Cellebrite, Magnet, XRY)", spreadIndex: 23, page: "47–48" },

  // Topic 13: Challenges & Limitations of Android Forensics
  { chapter: "Topic 13 (Part 1)", title: "FDE vs FBE & Direct Boot Architecture", spreadIndex: 24, page: "49–50" },
  { chapter: "Topic 13 (Part 2)", title: "OEM Bootloader Policies & FTL TRIM Wear", spreadIndex: 25, page: "51–52" },

  // Topic 14: iOS Architecture & Security Foundations
  { chapter: "Topic 14 (Part 1)", title: "Darwin/XNU Kernel & Secure Enclave", spreadIndex: 26, page: "53–54" },
  { chapter: "Topic 14 (Part 2)", title: "Apple Data Protection Classes (A, B, C, D)", spreadIndex: 27, page: "55–56" },

  // Topic 15: iOS File System Architecture & App Containers
  { chapter: "Topic 15 (Part 1)", title: "Apple File System (APFS) & Partitions", spreadIndex: 28, page: "57–58" },
  { chapter: "Topic 15 (Part 2)", title: "iOS App Containers & Shared App Groups", spreadIndex: 29, page: "59–60" },

  // Topic 16: iOS App Permissions & Unified Logging in iOS
  { chapter: "Topic 16 (Part 1)", title: "Usage Description Plists & Unified Logs", spreadIndex: 30, page: "61–62" },
  { chapter: "Topic 16 (Part 2)", title: "CurrentPowerlog & CoreDuet knowledgeC", spreadIndex: 31, page: "63–64" },

  // Topic 17: Tools & Technologies for iOS Forensics
  { chapter: "Topic 17 (Part 1)", title: "libimobiledevice & iTunes Backup Manifest", spreadIndex: 32, page: "65–66" },
  { chapter: "Topic 17 (Part 2)", title: "GrayKey Appliances & Keychain Extraction", spreadIndex: 33, page: "67–68" },

  // Topic 18: Challenges & Limitations of iOS Forensics
  { chapter: "Topic 18 (Part 1)", title: "BFU vs AFU States & Hardware Throttling", spreadIndex: 34, page: "69–70" },
  { chapter: "Topic 18 (Part 2)", title: "Apple Lockdown Mode & Liquid Damage Triage", spreadIndex: 35, page: "71–72" },

  // Topic 19: Forensic Analysis of Pagers, Wearables & Smart Gadgets
  { chapter: "Topic 19 (Part 1)", title: "Pagers, POCSAG/FLEX & RF Interception", spreadIndex: 36, page: "73–74" },
  { chapter: "Topic 19 (Part 2)", title: "Apple Watch, HealthKit & Smart Gadgets", spreadIndex: 37, page: "75–76" },

  // Topic 20: CDR (Call Details Record) & Cellular Network Analysis
  { chapter: "Topic 20 (Part 1)", title: "CDR Fundamentals, CGI & Tower Azimuth", spreadIndex: 38, page: "77–78" },
  { chapter: "Topic 20 (Part 2)", title: "IPDR, Tower Dumps & Section 65B/BSA 63", spreadIndex: 39, page: "79–80" }
];

global.window = {};
require('../book4_data.js');

window.book4Data.spreads = allSpreads;
window.book4Data.tocData = tocData;
window.book4Data.stats = '40 Spreads • 80 Pages • 20 Topics (4 Pages/Topic) • 200 Aligned MCQs';
window.book4Data.description = 'Comprehensive 80-Page Deep Dive: Android & iOS Operating System Architectures, Bootloader & Chip-Off Acquisitions, SQLite & Communication Artefacts, Unified Logging, Wearables, Pagers, and Cellular CDR/IPDR Analysis (4 In-Depth Pages per Syllabus Topic).';

const output = '// Book 4 Data: Mobile Device Forensics & Telecom Analysis\n// Comprehensive 80-Page Architecture: 4 Full In-Depth Pages per Syllabus Topic\nwindow.book4Data = ' + JSON.stringify(window.book4Data, null, 2) + ';\n';
fs.writeFileSync('book4_data.js', output, 'utf8');
console.log('Successfully assembled and wrote 40 spreads (80 pages) to book4_data.js! File size:', fs.statSync('book4_data.js').size);

