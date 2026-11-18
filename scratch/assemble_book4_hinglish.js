const fs = require('fs');
const p1 = require('./gen_book4_hinglish_p1.js');
const p2 = require('./gen_book4_hinglish_p2.js');

const allSpreads = [...p1, ...p2];

if (allSpreads.length !== 20) {
  console.error(`Error: Expected 20 spreads, got ${allSpreads.length}`);
  process.exit(1);
}

const tocTitles = [
  "Basics of mobile devices, mobile communications",
  "challenges, resource constraints and types of acquisitions",
  "types of acquisitions: Manual, Logical, File System, Physical",
  "types of acquisitions: Low-Level Hardware & Chip-Off",
  "rooting & system",
  "app permissions",
  "jail-breaking",
  "Android OS architecture and file logging mechanism in Android-phone",
  "file logging mechanism in Android-phone",
  "types of artefacts: Android Databases & Communications",
  "types of artefacts: App & Multimedia Artefacts",
  "tools and technologies for Android Forensics",
  "challenges & limitations of Android forensics",
  "IOS: iPhone OS (iOS) architecture",
  "iOS file system",
  "iOS app permissions, logging in IOS",
  "tools & technologies for iOS forensics",
  "challenges & limitations of iOS forensics",
  "forensic analysis of Pagers, Wearable devices and other smart gadgets",
  "CDR (Call Details) Analysis"
];

const subtopics = [
  "AP vs BP Architecture, Cellular Generations & Global Identifiers",
  "Crime Scene Triage, Power States, Faraday Bags & Water Damage",
  "Four-Tiered Extraction Pyramid, SIM Files (EF_SMS/IMSI) & PUK",
  "Qualcomm EDL 9008, BROM, JTAG TAP Probing & Chip-Off BGA",
  "Superuser UID 0, Systemless Magisk, SELinux MAC & Knox eFuse",
  "Android Sandboxing, Runtime Permissions & AndroidManifest Audit",
  "iOS Sandbox Escapes, amfid Bypass, checkm8 BootROM & Agents",
  "Android 5-Layer Stack, ART Runtime & Zygote Process Forking",
  "logcat Circular Buffers, dumpsys Commands & DropBox Crash Logs",
  "SQLite WAL Mode (.db/.wal/.shm), Telephony DBs & Freelist Carving",
  "WhatsApp crypt14/15 AES-GCM Key Extraction, Telegram & EXIF GPS",
  "ADB Command Suite, Fastboot Protocols, Cellebrite UFED & Magnet",
  "FDE vs FBE Architecture, Direct Boot (CE vs DE) & Flash TRIM",
  "Darwin XNU Hybrid Kernel, Mach, Secure Enclave SEP & Hardware UID",
  "APFS 64-bit Architecture, Partitions & Data Protection Classes A-D",
  "TCC.db Permissions, Unified Logging os_log, sysdiagnose & CoreDuet",
  "iTunes Encrypted Backups Manifest.db, libimobiledevice & GrayKey",
  "BFU vs AFU Cryptographic States, Hardware Delays & Lockdown Mode",
  "POCSAG/FLEX Radio Pagers, Apple Watch HealthKit & AirTag BLE",
  "CDR Formats, Cell Global Identity CGI, Tower Azimuth & Sec 65B/63"
];

const tocData = tocTitles.map((title, idx) => ({
  spreadIndex: idx,
  pageNumber: idx * 2 + 1,
  title: title,
  subtopics: subtopics[idx]
}));

const book4Data = {
  id: "book4",
  title: "Book 4: Mobile & Telecom Forensics",
  shortTitle: "Mobile & Telecom Forensics",
  fullTitle: "MOBILE DEVICE & TELECOMMUNICATIONS FORENSICS",
  badge: "DSSSB JSA (Cyber Forensic) — Book 4",
  category: "Mobile & Network Forensics",
  subtitle: "Mobile Device, Android, iOS & CDR Forensics (DSSSB Intermediate Hinglish Edition)",
  description: "DSSSB Exam-Focused Revision (40-Page Hinglish Edition): Basics of Mobile Devices, Mobile Communications, Triage, 4-Tier Acquisitions, Hardware Probing (JTAG/EDL/Chip-Off), Rooting, App Permissions, Jailbreaking, Android OS Architecture, Logcat Logging, SQLite Databases, WhatsApp & Media Artifacts, Android Forensic Tools, FDE vs FBE, iOS Architecture & SEP, APFS & Protection Classes, iOS Logging & TCC, iOS Tools & GrayKey, BFU vs AFU, Pagers & Wearables, and CDR/Tower Dump Analysis.",
  stats: "20 Spreads • 40 Pages • 20 Syllabus Topics • 200 Aligned MCQs",
  coverClass: "book4-theme",
  tocSubtitle: "DSSSB JSA Mobile & Telecom Forensics 20-Topic Hinglish Master Index",
  tocData: tocData,
  spreads: allSpreads
};

const jsContent = `/**
 * DSSSB JSA (Cyber Forensic) - Book 4 Dataset
 * Exactly 20 Spreads / 40 Pages / 20 Syllabus Topics / 200 Aligned MCQs
 * Complete Hinglish Edition following SKILL.md Tutorial Methodology
 */

const b4Payload = ${JSON.stringify(book4Data, null, 2)};

if (typeof window !== 'undefined') {
  window.book4Data = b4Payload;
}
if (typeof global !== 'undefined') {
  global.book4Data = b4Payload;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = b4Payload;
}
`;

fs.writeFileSync('e:/DSSSB/book4_data.js', jsContent, 'utf8');
console.log('Successfully wrote e:/DSSSB/book4_data.js!');
console.log(`Spreads: ${allSpreads.length}, TOC Items: ${tocData.length}`);
