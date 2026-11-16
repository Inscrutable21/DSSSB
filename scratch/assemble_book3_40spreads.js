const fs = require('fs');

const p1 = require('./gen_book3_spreads_p1.js');
const p2 = require('./gen_book3_spreads_p2.js');
const p3 = require('./gen_book3_spreads_p3.js');
const p4 = require('./gen_book3_spreads_p4.js');

const allSpreads = [...p1, ...p2, ...p3, ...p4];
console.log('Total Book 3 spreads to assemble:', allSpreads.length);

if (allSpreads.length !== 40) {
  console.error('ERROR: Expected 40 spreads, got', allSpreads.length);
  process.exit(1);
}

// Generate the 40-item Table of Contents
const tocData = [
  // Topic 1: RAM Volatility & CPU Architecture
  { chapter: "Topic 1 (Part 1)", title: "RAM Volatility & RFC 3227 Order of Volatility", spreadIndex: 0, page: "1–2" },
  { chapter: "Topic 1 (Part 2)", title: "Physical vs Virtual Memory & MMU Translation", spreadIndex: 1, page: "3–4" },

  // Topic 2: Memory Acquisition Tools & Drivers
  { chapter: "Topic 2 (Part 1)", title: "Memory Acquisition Mechanics & Kernel Drivers", spreadIndex: 2, page: "5–6" },
  { chapter: "Topic 2 (Part 2)", title: "Acquisition Formats, AFF4 & Hibernation Files", spreadIndex: 3, page: "7–8" },

  // Topic 3: Paging & _EPROCESS Structures
  { chapter: "Topic 3 (Part 1)", title: "Multi-Level Paging & The _EPROCESS Structure", spreadIndex: 4, page: "9–10" },
  { chapter: "Topic 3 (Part 2)", title: "ActiveProcessLinks, DKOM & Pool Scanning", spreadIndex: 5, page: "11–12" },

  // Topic 4: PEB, TEB & Thread Structures
  { chapter: "Topic 4 (Part 1)", title: "User-Mode Structures: PEB, TEB & Segment Registers", spreadIndex: 6, page: "13–14" },
  { chapter: "Topic 4 (Part 2)", title: "PEB_LDR_DATA Module Lists & Thread Structures", spreadIndex: 7, page: "15–16" },

  // Topic 5: Process Hierarchy & Token Stealing
  { chapter: "Topic 5 (Part 1)", title: "Token Stealing Privilege Escalation & DKOM", spreadIndex: 8, page: "17–18" },
  { chapter: "Topic 5 (Part 2)", title: "Windows Process Hierarchy & PPID Spoofing", spreadIndex: 9, page: "19–20" },

  // Topic 6: Volatility 3 Core Process Plugins
  { chapter: "Topic 6 (Part 1)", title: "Volatility 3 Core Plugins: pslist vs psscan", spreadIndex: 10, page: "21–22" },
  { chapter: "Topic 6 (Part 2)", title: "DLLs, Handles, Privileges & Kernel Callbacks", spreadIndex: 11, page: "23–24" },

  // Topic 7: VAD Trees & Malfind Analysis
  { chapter: "Topic 7 (Part 1)", title: "VAD Balanced AVL Trees & Malfind Heuristics", spreadIndex: 12, page: "25–26" },
  { chapter: "Topic 7 (Part 2)", title: "JIT False Positives & Shellcode Carving", spreadIndex: 13, page: "27–28" },

  // Topic 8: In-Memory Registry & Credential Harvesting
  { chapter: "Topic 8 (Part 1)", title: "In-Memory Registry Hives & SAM Hashdump", spreadIndex: 14, page: "29–30" },
  { chapter: "Topic 8 (Part 2)", title: "LSASS Secrets, Mimikatz & Credential Guard", spreadIndex: 15, page: "31–32" },

  // Topic 9: Advanced Code Injection Techniques
  { chapter: "Topic 9 (Part 1)", title: "Classic DLL Injection & Process Hollowing", spreadIndex: 16, page: "33–34" },
  { chapter: "Topic 9 (Part 2)", title: "AtomBombing, Ghosting & Advanced Injection", spreadIndex: 17, page: "35–36" },

  // Topic 10: Linux Memory Forensics
  { chapter: "Topic 10 (Part 1)", title: "Linux Kernel Internals: task_struct & LiME", spreadIndex: 18, page: "37–38" },
  { chapter: "Topic 10 (Part 2)", title: "Syscall Table Hooking & LKM Rootkit Hunting", spreadIndex: 19, page: "39–40" },

  // Topic 11: Compression, KASLR & Pool Tags
  { chapter: "Topic 11 (Part 1)", title: "Windows Memory Compression & KASLR Defenses", spreadIndex: 20, page: "41–42" },
  { chapter: "Topic 11 (Part 2)", title: "Console History, PowerShell & Pool Tags", spreadIndex: 21, page: "43–44" },

  // Topic 12: Enterprise Memory & C2 Artifacts
  { chapter: "Topic 12 (Part 1)", title: "Kerberos Tickets: Golden vs Silver Tickets", spreadIndex: 22, page: "45–46" },
  { chapter: "Topic 12 (Part 2)", title: "Cobalt Strike In-Memory Beacons & YARA", spreadIndex: 23, page: "47–48" },

  // Topic 13: Browser Forensics & Communications in RAM
  { chapter: "Topic 13 (Part 1)", title: "Browser Forensics in RAM & Incognito Reality", spreadIndex: 24, page: "49–50" },
  { chapter: "Topic 13 (Part 2)", title: "Plaintext Web Messaging & TLS Master Secrets", spreadIndex: 25, page: "51–52" },

  // Topic 14: Hardware & Hypervisor Attacks
  { chapter: "Topic 14 (Part 1)", title: "Sub-OS Rootkits: Hypervisors (Ring -1) & DMA", spreadIndex: 26, page: "53–54" },
  { chapter: "Topic 14 (Part 2)", title: "Rowhammer Electrical Flips & Silicon Defenses", spreadIndex: 27, page: "55–56" },

  // Topic 15: Reverse Engineering In-Memory Binaries
  { chapter: "Topic 15 (Part 1)", title: "PE Header Wiping & Section Realignment", spreadIndex: 28, page: "57–58" },
  { chapter: "Topic 15 (Part 2)", title: "Original Entry Point (OEP) & API Unhooking", spreadIndex: 29, page: "59–60" },

  // Topic 16: Network Sockets in Memory
  { chapter: "Topic 16 (Part 1)", title: "In-Memory Network Sockets & windows.netscan", spreadIndex: 30, page: "61–62" },
  { chapter: "Topic 16 (Part 2)", title: "TCP States, Reverse Shells & Socket Binding", spreadIndex: 31, page: "63–64" },

  // Topic 17: Extraction of Encryption Keys from Memory
  { chapter: "Topic 17 (Part 1)", title: "BitLocker FVEK & AES Key Schedules in RAM", spreadIndex: 32, page: "65–66" },
  { chapter: "Topic 17 (Part 2)", title: "Mathematical Key Carving & Hash Verification", spreadIndex: 33, page: "67–68" },

  // Topic 18: Live Memory Debugging & WinDbg
  { chapter: "Topic 18 (Part 1)", title: "Kernel Debugging with WinDbg & Core Commands", spreadIndex: 34, page: "69–70" },
  { chapter: "Topic 18 (Part 2)", title: "Crash Dump Formats & Virtual Machine Dumps", spreadIndex: 35, page: "71–72" },

  // Topic 19: Memory Hardware & Virtual Machine Snapshots
  { chapter: "Topic 19 (Part 1)", title: "Hardware Architectures: NUMA, ECC & Virtualization", spreadIndex: 36, page: "73–74" },
  { chapter: "Topic 19 (Part 2)", title: "Virtual Machine Memory Snapshots & Ballooning", spreadIndex: 37, page: "75–76" },

  // Topic 20: Incident Response, In-Memory YARA & Legal Rules
  { chapter: "Topic 20 (Part 1)", title: "In-Memory Threat Hunting: Web Shells & Session 0", spreadIndex: 38, page: "77–78" },
  { chapter: "Topic 20 (Part 2)", title: "Chain of Custody, Section 65B & Master Traps", spreadIndex: 39, page: "79–80" }
];

global.window = {};
require('../book3_data.js');

window.book3Data.spreads = allSpreads;
window.book3Data.tocData = tocData;
window.book3Data.stats = '40 Spreads • 80 Pages • 20 Topics (4 Pages/Topic) • 200 Aligned MCQs';
window.book3Data.description = 'Comprehensive 80-Page Deep Dive: Volatile RAM Acquisition, Kernel Data Structures (_EPROCESS, PEB/TEB, VAD Trees), Volatility 3, Code Injection Evasions, Linux Memory Forensics, BitLocker Key Carving, and WinDbg Kernel Debugging (4 In-Depth Pages per Syllabus Topic).';

const output = '// Book 3 Data: Memory (RAM) Forensics & Volatility Analysis\n// Comprehensive 80-Page Architecture: 4 Full In-Depth Pages per Syllabus Topic\nwindow.book3Data = ' + JSON.stringify(window.book3Data, null, 2) + ';\n';
fs.writeFileSync('book3_data.js', output, 'utf8');
console.log('Successfully assembled and wrote 40 spreads (80 pages) to book3_data.js! File size:', fs.statSync('book3_data.js').size);
