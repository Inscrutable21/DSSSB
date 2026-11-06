window.book2Data = {
  "id": "book2",
  "title": "Book 2: Digital Forensics SOPs",
  "shortTitle": "Digital Forensics & Incident Response",
  "fullTitle": "DIGITAL FORENSICS INVESTIGATION & EVIDENCE HANDLING",
  "badge": "DSSSB JSA (Cyber Forensic) — Book 2",
  "category": "Practical Forensics & Investigation",
  "description": "Comprehensive Operational SOPs, Artifact Carving & Lab Analysis under RFC 3227, NTFS, MBR/GPT, Registry & BSA 2023.",
  "stats": "20 Spreads • 40 Pages • 200 MCQs Aligned",
  "coverClass": "book2-theme",
  "tocSubtitle": "DSSSB JSA (Cyber Forensic) 20-Spread Practical Manual",
  "labBtnLong": "Forensic Lab SOPs",
  "labBtnShort": "Forensics Lab",
  "labDrawerTitle": "Digital Forensics Evidence Acquisition & Triage Lab",
  "labDrawerSubtitle": "Hex Analysis, MFT Attribute Dissection, Artifact Carving & Evidence Logs",
  "deepDiveTabs": [
    {
      "key": "df_branches",
      "label": "1. Branches of Digital Forensics"
    },
    {
      "key": "df_scene",
      "label": "2. Investigation of digital crime scenes"
    },
    {
      "key": "df_documentation_coc",
      "label": "3 & 4. maintaining proper documentation & chain of custody"
    },
    {
      "key": "df_sop",
      "label": "5. SOP for Handling, Preservation, Acquisition, packaging, labeling & Transportation"
    },
    {
      "key": "df_tools_acquisition",
      "label": "6. digital data acquisition tools"
    },
    {
      "key": "df_sources",
      "label": "7. identifying and collecting data from hard drives, mobile, network, cloud, email"
    },
    {
      "key": "df_hashing",
      "label": "8. hash value generation"
    },
    {
      "key": "df_recovery_carving",
      "label": "9. Methods of Data Recovery and Carving"
    },
    {
      "key": "df_analytical_techniques",
      "label": "10. analytical techniques for analyzing digital data"
    },
    {
      "key": "df_tools_evaluation",
      "label": "11. Tools used for analysis and evaluation of digital evidences"
    }
  ],
  "spreads": [
    {
      "spreadId": 0,
      "left": {
        "pageNumber": 1,
        "runningHead": "RFC 3227 Order of Volatility & Live Triage SOPs",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 1 • Evidence Volatility & Preservation</span>\n      <h2>RFC 3227 Order of Volatility & Live Triage SOPs</h2>\n    </div>\n    <p>Digital evidence is transient and highly susceptible to alteration. The foundational standard governing evidence capture is <strong>RFC 3227 (Guidelines for Evidence Collection and Archiving)</strong>. RFC 3227 establishes a strict hierarchy known as the <strong>Order of Volatility</strong>:</p>\n    <ol>\n      <li><strong>Registers and Cache:</strong> CPU registers and on-chip processor caches exhibit the highest volatility (measured in nanoseconds);</li>\n      <li><strong>Routing Table, ARP Cache, Process Table, Kernel Statistics, Memory:</strong> Live physical RAM;</li>\n      <li><strong>Temporary File Systems / Swap Space:</strong> Temporary swap file space resides directly after physical RAM and kernel memory, preceding fixed hard disks;</li>\n      <li><strong>Disk / Non-Volatile Storage:</strong> Hard drives, solid-state drives;</li>\n      <li><strong>Remote Logging and Network Data:</strong> Syslog, firewall streams;</li>\n      <li><strong>Physical Configuration and Network Topology;</strong></li>\n      <li><strong>Archival Media:</strong> Backup tapes, optical discs.</li>\n    </ol>\n\n    <div class=\"analogy-box\">\n      <strong>The Melting Ice Sculpture Analogy:</strong> CPU registers and RAM are like dry ice exposed to sunlight—they evaporate within milliseconds if power is cut. Performing a graceful operating system shutdown via the Start menu directly violates forensic protocol because it purges volatile RAM, overwrites event logs, and triggers shutdown scripts!\n    </div>\n\n    <h3>Hardware vs Software Write-Blocking</h3>\n    <ul>\n      <li><strong>Software Write-Block:</strong> Configured via Windows Registry at <code>HKLM\\SYSTEM\\CurrentControlSet\\Control\\StorageDevicePolicies</code> by setting <strong>WriteProtect to 1</strong>.</li>\n      <li><strong>Hardware Write-Blocker:</strong> Operates at the physical bus layer. It intercepts and drops ATA/SCSI write command opcodes at the hardware level before they ever reach the drive controller, providing physical independence from the host OS.</li>\n    </ul>"
      },
      "right": {
        "pageNumber": 2,
        "runningHead": "E01 Image Formats, Hashing Algorithms & Logical vs Physical",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Forensic Imaging & Integrity Verification</span>\n      <h2>E01 Image Formats, Hashing Algorithms & Logical vs Physical</h2>\n    </div>\n\n    <h3>Forensic Image Formats: E01 vs Raw DD</h3>\n    <p>The <strong>Expert Witness Format (E01 / EnCase)</strong> encapsulates raw bitstream disk data alongside internal case metadata (examiner name, case number, evidence description, notes) and internal block-level CRC32 checksums, terminating with an MD5/SHA-1 acquisition hash at the footer.</p>\n\n    <h3>Cryptographic Hashing & Verification (MD5, SHA-1, SHA-256)</h3>\n    <ul>\n      <li><strong>Digest Output Lengths:</strong> MD5 produces <strong>128 bits</strong> (16 bytes); SHA-1 produces <strong>160 bits</strong> (20 bytes); SHA-256 produces <strong>256 bits</strong> (32 bytes).</li>\n      <li><strong>Verification Criterion:</strong> Bit-level identical correspondence confirms that the acquisition process introduced zero alterations and that the duplicate matches the source exactly.</li>\n      <li><strong>Collision Vulnerability:</strong> Relying solely on MD5 is legally risky because practical cryptographic hash collision attacks exist where two distinct binary files produce identical MD5 digests. Modern forensic SOPs mandate dual hashing (e.g. SHA-256 + MD5).</li>\n    </ul>\n\n    <h3>Physical Bitstream vs Logical Acquisition</h3>\n    <p>A physical acquisition copies every physical sector (LBA 0 to LBA max). In contrast, a <strong>logical acquisition</strong> captures only files recognized by the active file system, completely omitting <strong>unallocated space, slack space, file system metadata structures, and deleted cluster contents</strong>.</p>\n\n    <div class=\"exam-trap-box\">\n      <strong>DSSSB Exam Trap:</strong> Note the exact digest lengths tested in Q8:\n      <ul>\n        <li>MD5: <strong>128 bits</strong> | SHA-1: <strong>160 bits</strong> | SHA-256: <strong>256 bits</strong>.</li>\n        <li>Graceful Start Menu shutdown is a critical forensic violation!</li>\n      </ul>\n    </div>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 1</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q1–Q10) on RFC 3227, Write-Blockers, E01, and Hashing Bit-Lengths.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(0)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q1–Q10) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 1,
      "left": {
        "pageNumber": 3,
        "runningHead": "RAM Slack, File Slack, SSD TRIM & Faraday Bags",
        "content": "<div class=\"exam-trap-box\">\n      <strong>Exam Rule on File Slack:</strong> In modern file systems like <strong>NTFS</strong> or <strong>FAT32</strong>, <strong>File Slack (Cluster Slack)</strong> constitutes the remaining unused physical sectors between the last written sector of a file and the end of the cluster allocation block. RAM slack covers bytes to sector end, while cluster slack spans remaining sectors to cluster end.\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 2 • Storage Slack & Mobile Triage</span>\n      <h2>RAM Slack, File Slack, SSD TRIM & Faraday Bags</h2>\n    </div>\n    \n    <h3>RAM Slack vs File Slack (Cluster Slack)</h3>\n    <ul>\n      <li><strong>RAM Slack (Sector Slack):</strong> In legacy 512-byte magnetic disk sectors, RAM slack is the data gap between the end of logical file data and the end of that specific 512-byte sector. In older operating systems, this gap was padded with remnants from the kernel's RAM memory buffer.</li>\n      <li><strong>File Slack (Cluster Slack):</strong> The remaining unused physical sectors between the last written sector of a file and the end of the allocated cluster. File slack frequently contains remnants of previously deleted files.</li>\n    </ul>\n\n    <h3>Solid-State Drives (SSDs) & The TRIM Challenge</h3>\n    <p>Calculating cryptographic hashes over solid-state drives (SSDs) presents unique forensic challenges: deterministic read-zero policies and background garbage collection (<strong>TRIM</strong> command) alter unallocated sector contents between successive reads, causing hash discrepancies even when using hardware write-blockers!</p>\n\n    <h3>Mobile Evidence Seizure & Faraday Isolation</h3>\n    <p>Seizing active mobile smartphones requires immediate shielding inside a <strong>Faraday isolation bag</strong> to block external radio frequency (RF) signals (cellular, Wi-Fi, Bluetooth), preventing remote wipe commands or incoming signals from altering handset state.</p>"
      },
      "right": {
        "pageNumber": 4,
        "runningHead": "AFU vs BFU States, LiME, HPA/DCO & dd Syntax",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Memory Acquisition & Physical Tools</span>\n      <h2>AFU vs BFU States, LiME, HPA/DCO & dd Syntax</h2>\n    </div>\n\n    <h3>iPhone Security States: AFU vs BFU</h3>\n    <p>When an iPhone is in an <strong>After First Unlock (AFU)</strong> state, critical Class A and Class C encryption keys reside in volatile Secure Enclave RAM. If allowed to power off or discharge, it reboots into <strong>Before First Unlock (BFU)</strong> state, purging encryption keys and severely limiting forensic extraction.</p>\n\n    <h3>Linux Memory Extractor (LiME) & Hidden Disk Areas</h3>\n    <ul>\n      <li><strong>LiME (Linux Memory Extractor):</strong> The standard open-source tool functioning as a Loadable Kernel Module (LKM) for acquiring volatile physical memory from Linux systems without writing into swap space.</li>\n      <li><strong>HPA & DCO:</strong> The <strong>Host Protected Area (HPA)</strong> and <strong>Device Configuration Overlay (DCO)</strong> are hidden disk regions inaccessible to standard OS calls, accessible via ATA commands like <code>SET MAX ADDRESS</code>.</li>\n      <li><strong>Physical Acquisition dd Command:</strong> The standard command line syntax is:<br>\n      <code>dd if=/dev/sdb of=/evidence/image.raw bs=4096 conv=noerror,sync</code></li>\n      <li><strong>Principle of Evidence Preservation:</strong> Mandates that all forensic analysis must be conducted exclusively on verified forensic duplicates, never on the original evidence.</li>\n      <li><strong>Chain of Custody (CoC):</strong> Meticulously documents every transfer, handler, date-time, and storage location.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 2</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q11–Q20) on Slack space, SSD TRIM, iPhone AFU/BFU, and LiME dd acquisition.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(1)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q11–Q20) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 2,
      "left": {
        "pageNumber": 5,
        "runningHead": "Live NetBIOS Triage, Hardware TAPs & JA3 Fingerprinting",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 3 • Live Triage & File System Foundations</span>\n      <h2>Live NetBIOS Triage, Hardware TAPs & JA3 Fingerprinting</h2>\n    </div>\n    \n    <h3>Live Network Artifacts: nbtstat & Hardware TAPs</h3>\n    <ul>\n      <li><strong>nbtstat -c:</strong> Executing <code>nbtstat -c</code> extracts recently resolved NetBIOS computer names mapped to their corresponding IP addresses from the local NetBIOS name cache.</li>\n      <li><strong>Hardware TAP vs SPAN Port:</strong> A Hardware Test Access Point (TAP) reproduces full-duplex traffic without dropping frames under saturated gigabit links, whereas a switch SPAN (mirror) port drops overflow packets during high-bandwidth bursts.</li>\n      <li><strong>JA3 Fingerprinting:</strong> Analyzes encrypted TLS client hello packets by computing an MD5 hash of five parameters: SSL Version, Accepted Ciphers, List of Extensions, Elliptic Curves, and Point Formats.</li>\n    </ul>\n\n    <h3>File Header Magic Signatures (PE & JPEG)</h3>\n    <ul>\n      <li><strong>PE Executable Binary:</strong> <code>4D 5A</code> (MZ) at offset 0x00, followed by <code>50 45 00 00</code> (PE\u0000\u0000) at the offset indicated by <code>e_lfanew</code> (offset 0x3C).</li>\n      <li><strong>JPEG Image Markers:</strong> Start of Image (SOI) is <code>FF D8 FF</code>; End of Image (EOI) is <code>FF D9</code>.</li>\n    </ul>"
      },
      "right": {
        "pageNumber": 6,
        "runningHead": "FAT32 Limits, Deleted Entries & NTFS MFT Records",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">File Systems: FAT32 & NTFS MFT Records</span>\n      <h2>FAT32 Limits, Deleted Entries & NTFS MFT Records</h2>\n    </div>\n\n    <h3>FAT32 File System Architecture</h3>\n    <ul>\n      <li><strong>Maximum File Size:</strong> Permissible individual file size on standard FAT32 is <strong>4 Gigabytes minus 1 byte (4,294,967,295 bytes)</strong>.</li>\n      <li><strong>Deleted Entry Marker:</strong> In the 32-byte directory entry, the first byte is replaced with <strong>0xE5</strong> (Sigma character in CP437) to designate the entry as deleted while cluster pointers remain.</li>\n    </ul>\n\n    <h3>NTFS Master File Table (MFT) Internals</h3>\n    <ul>\n      <li><strong>MFT Record Size:</strong> Each individual record inside the Master File Table ($MFT) is allocated a fixed size of <strong>1024 bytes (1 Kilobyte)</strong>.</li>\n      <li><strong>Active Record Magic String:</strong> Offset 0x00 of every valid MFT record begins with the 4-byte ASCII signature <strong>FILE (0x46 0x49 0x4C 0x45)</strong> (or BAAD if corrupt).</li>\n      <li><strong>Resident File Attribute:</strong> An attribute whose entire data content is sufficiently compact (typically under 700 bytes) to reside directly inside the 1024-byte MFT record itself without allocating external clusters.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 3</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q21–Q30) on nbtstat, JA3 TLS fingerprinting, FAT32 4GB limit, and NTFS MFT records.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(2)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q21–Q30) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 3,
      "left": {
        "pageNumber": 7,
        "runningHead": "NTFS Attribute Codes & Timestomping Detection",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 4 • NTFS Deep Dive & Timestomping</span>\n      <h2>NTFS Attribute Codes & Timestomping Detection</h2>\n    </div>\n    \n    <h3>Standard NTFS Attribute Type Codes</h3>\n    <ul>\n      <li><strong>0x10:</strong> <code>$STANDARD_INFORMATION</code> (stores MACB timestamps, file permissions, DOS flags).</li>\n      <li><strong>0x30:</strong> <code>$FILE_NAME</code> (stores file name, parent folder MFT reference, and separate MACB timestamps).</li>\n      <li><strong>0x80:</strong> <code>$DATA</code> (stores default stream payload data).</li>\n    </ul>\n\n    <h3>Timestomping Detection Mechanics</h3>\n    <p>Under <code>$STANDARD_INFORMATION</code>, the operating system tracks Modified, Accessed, Created (MFT Created), and Entry Modified (MACB) timestamps. When an attacker utilizes anti-forensic timestomping tools, they modify <code>$STANDARD_INFORMATION</code> via standard Win32 APIs (e.g. <code>SetFileTime</code>), but <strong>fail to alter the kernel-protected $FILE_NAME (0x30) timestamps</strong>, revealing obvious chronological contradictions!</p>"
      },
      "right": {
        "pageNumber": 8,
        "runningHead": "$UsnJrnl, $LogFile, Alternate Data Streams & Extents",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Journals, Streams & Ext4 Extents</span>\n      <h2>$UsnJrnl, $LogFile, Alternate Data Streams & Extents</h2>\n    </div>\n\n    <h3>NTFS Journals: $UsnJrnl & $LogFile</h3>\n    <ul>\n      <li><strong>$UsnJrnl ($J Stream):</strong> The Update Sequence Number (USN) change journal tracks real-time file metadata events (creation, deletion, rename, data extension) providing chronological proof of user file manipulation.</li>\n      <li><strong>$LogFile:</strong> Records redo and undo transaction logging operations used by NTFS to ensure metadata consistency across crashes.</li>\n    </ul>\n\n    <h3>Alternate Data Streams (ADS) & Zone.Identifier</h3>\n    <ul>\n      <li><strong>ADS Syntax:</strong> Accessed via the syntax <code>filename.ext:streamname</code> (e.g. <code>notepad.exe C:\\evidence.txt:hidden_payload.exe</code>).</li>\n      <li><strong>Zone.Identifier:</strong> Automatically attached to files downloaded from the web via browser Attachment Execution Services, recording <strong>ZoneId=3 (Internet Zone)</strong> and ReferrerUrl.</li>\n    </ul>\n\n    <h3>Linux Ext4 Extents</h3>\n    <p>In Ext4, traditional indirect block pointers are replaced by <strong>Extents</strong>, representing continuous blocks (up to 128MB per extent) via balanced extent trees.</p>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 4</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q31–Q40) on NTFS attributes 0x10/0x30/0x80, timestomping, and Alternate Data Streams.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(3)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q31–Q40) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 4,
      "left": {
        "pageNumber": 9,
        "runningHead": "Linux Ext Inodes, Superblocks & Apple APFS",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 5 • Inodes, APFS & Partition Geometry</span>\n      <h2>Linux Ext Inodes, Superblocks & Apple APFS</h2>\n    </div>\n    \n    <h3>Linux Ext2/Ext3/Ext4 Inode Architecture</h3>\n    <ul>\n      <li><strong>File Name Exclusion:</strong> In Ext file systems, <strong>the file name and relative directory path string are NOT stored within the inode</strong>; they are stored in the data blocks of the parent directory.</li>\n      <li><strong>File Deletion in Ext4:</strong> When an Ext4 file is unlinked, its inode extent tree pointers are zeroed out while the inode is marked free in the allocation bitmap.</li>\n      <li><strong>Superblock:</strong> Stores essential geometry: total block count, free block count, block size, inode count, and mount status.</li>\n    </ul>\n\n    <h3>Apple File System (APFS)</h3>\n    <ul>\n      <li><strong>APFS Snapshots:</strong> Instant creation of read-only, point-in-time state using Copy-on-Write (COW) metadata redirection.</li>\n      <li><strong>HFS+ Catalog File:</strong> Maintained the hierarchical file records organized as a balanced B-Tree.</li>\n      <li><strong>APFS Clones:</strong> Duplicating a 10 GB video creates a second metadata pointer referencing existing data blocks without consuming additional storage blocks.</li>\n    </ul>"
      },
      "right": {
        "pageNumber": 10,
        "runningHead": "Master Boot Record (MBR) Geometry & Partition Limits",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Partition Schemes: MBR Internals</span>\n      <h2>Master Boot Record (MBR) Geometry & Partition Limits</h2>\n    </div>\n\n    <h3>Master Boot Record (MBR) Sector 0 Architecture</h3>\n    <p>The Master Boot Record resides at Sector 0 (LBA 0) of legacy partitioned disks:</p>\n    <ul>\n      <li><strong>Boot Signature (0x55AA):</strong> Located at the very end of Sector 0 at <strong>byte offset 510 to 511 (0x01FE - 0x01FF)</strong>.</li>\n      <li><strong>Partition Table Size:</strong> Occupies a 64-byte block (offsets 446 to 509). Each primary partition entry is exactly 16 bytes.</li>\n      <li><strong>Maximum Primary Partitions:</strong> Accommodates exactly <strong>4 primary partition entries</strong> (64 bytes / 16 bytes).</li>\n      <li><strong>Maximum Addressable Capacity:</strong> Standard MBR 32-bit LBA addressing limits maximum drive capacity to <strong>2.19 Terabytes (2^32 * 512 bytes)</strong>. Drives larger than 2.2 TB require GUID Partition Table (GPT).</li>\n    </ul>\n\n    <div class=\"table-wrapper\">\n      <table class=\"comparison-table\">\n        <thead>\n          <tr><th>Parameter</th><th>Master Boot Record (MBR)</th><th>GUID Partition Table (GPT)</th></tr>\n        </thead>\n        <tbody>\n          <tr><td>Max Disk Size</td><td>2.19 Terabytes</td><td>9.4 Zettabytes (2^64 LBAs)</td></tr>\n          <tr><td>Primary Partitions</td><td>4 Primary</td><td>128 Standard Entries</td></tr>\n          <tr><td>Boot Signature</td><td>0x55AA at offset 510-511</td><td>'EFI PART' at LBA 1</td></tr>\n        </tbody>\n      </table>\n    </div>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 5</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q41–Q50) on Ext inodes, APFS Copy-on-Write, and MBR 2.19TB 0x55AA geometry.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(4)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q41–Q50) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 5,
      "left": {
        "pageNumber": 11,
        "runningHead": "GUID Partition Table (GPT) & Protective MBR",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 6 • GPT Geometry & Registry Architecture</span>\n      <h2>GUID Partition Table (GPT) & Protective MBR</h2>\n    </div>\n    \n    <h3>GUID Partition Table (GPT) Layout</h3>\n    <ul>\n      <li><strong>Protective MBR (LBA 0):</strong> Sector 0 contains a Protective MBR with a single partition type <strong>0xEE</strong> covering the entire drive to prevent legacy utilities from misidentifying and overwriting the GPT disk.</li>\n      <li><strong>Primary Header (LBA 1):</strong> Contains the 8-byte ASCII magic signature <strong>EFI PART (0x45 0x46 0x49 0x20 0x50 0x41 0x52 0x54)</strong>.</li>\n      <li><strong>Backup GPT:</strong> Physically stored at the very end of the physical drive on the final logical block addresses.</li>\n    </ul>\n\n    <h3>Data Carving & PNG Signatures</h3>\n    <ul>\n      <li><strong>Header-Footer Carving Limitation:</strong> If clusters are non-contiguous/fragmented, carved output includes interleaved foreign data.</li>\n      <li><strong>PNG Header Signature:</strong> <code>89 50 4E 47 0D 0A 1A 0A</code>.</li>\n    </ul>"
      },
      "right": {
        "pageNumber": 12,
        "runningHead": "Windows System Hives, UserAssist & Shimcache",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Registry Forensics: User Activity</span>\n      <h2>Windows System Hives, UserAssist & Shimcache</h2>\n    </div>\n\n    <h3>System Hives & User Registry</h3>\n    <ul>\n      <li><strong>System-Wide Hives:</strong> Stored in <code>C:\\Windows\\System32\\config\\</code> (SAM, SECURITY, SOFTWARE, SYSTEM).</li>\n      <li><strong>User-Specific Hive:</strong> Stored at <code>C:\\Users\\&lt;Username&gt;\\NTUSER.DAT</code>.</li>\n    </ul>\n\n    <h3>Execution Artifacts: UserAssist & Shimcache</h3>\n    <ul>\n      <li><strong>UserAssist:</strong> Tracks GUI applications launched via Windows Explorer, recording run count and last execution time. Values are obfuscated using <strong>ROT13 encoding</strong> to protect from accidental modification.</li>\n      <li><strong>Shimcache (AppCompatCache):</strong> Records full file path, file size, last modified timestamp, and whether the binary was executed.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 6</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q51–Q60) on GPT EFI PART, PNG header, UserAssist ROT13, and Shimcache.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(5)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q51–Q60) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 6,
      "left": {
        "pageNumber": 13,
        "runningHead": "Amcache.hve, Shellbags & Prefetch Compression",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 7 • Advanced Windows Forensics</span>\n      <h2>Amcache.hve, Shellbags & Prefetch Compression</h2>\n    </div>\n    \n    <h3>Amcache.hve & Shellbags</h3>\n    <ul>\n      <li><strong>Amcache.hve Location:</strong> Physically stored at <code>C:\\Windows\\AppCompat\\Programs\\Amcache.hve</code>.</li>\n      <li><strong>Forensic Value:</strong> Records cryptographic <strong>SHA-1 hashes of executed binaries</strong>, program installation times, and uninstalled application paths.</li>\n      <li><strong>Shellbags:</strong> Uncovers user folder navigation, viewing preferences, and directory traversal history—even across deleted folders or disconnected USB flash drives.</li>\n    </ul>\n\n    <h3>Windows Prefetch (.pf) Files</h3>\n    <p>Prefetch files in <code>C:\\Windows\\Prefetch\\</code> document program execution, run count, and the last 8 execution timestamps (Win 8/10/11). In Windows 10/11, prefetch files are compressed using <strong>XPRESS Huffman Compression (LZXPRESS)</strong> starting with the 'MAM' magic header.</p>"
      },
      "right": {
        "pageNumber": 14,
        "runningHead": "LNK Files, Jump Lists & Event ID 4624 Logon Types",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Logon Forensics & Shortcut Analysis</span>\n      <h2>LNK Files, Jump Lists & Event ID 4624 Logon Types</h2>\n    </div>\n\n    <h3>LNK Shortcuts & Jump Lists</h3>\n    <ul>\n      <li><strong>LNK Files:</strong> Preserve target file path, timestamps, volume serial number, drive type, NetBIOS machine name, and target MAC address.</li>\n      <li><strong>Jump Lists:</strong> Stored at <code>C:\\Users\\&lt;Username&gt;\\AppData\\Roaming\\Microsoft\\Windows\\Recent\\AutomaticDestinations\\</code>.</li>\n    </ul>\n\n    <h3>Windows Security Event ID 4624 Logon Types</h3>\n    <ul>\n      <li><strong>Event ID 4624:</strong> Successful Logon.</li>\n      <li><strong>Logon Type 2:</strong> Interactive Logon (authenticated physically at the console keyboard).</li>\n      <li><strong>Logon Type 10:</strong> Remote Interactive Logon (via Remote Desktop Protocol / RDP or Terminal Services).</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 7</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q61–Q70) on Amcache SHA-1, Prefetch LZXPRESS, and Event ID 4624 Logon Types.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(6)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q61–Q70) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 7,
      "left": {
        "pageNumber": 15,
        "runningHead": "Security Event IDs & Recycle Bin ($I / $R) Mechanics",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 8 • Event Logs & Storage Deletion</span>\n      <h2>Security Event IDs & Recycle Bin ($I / $R) Mechanics</h2>\n    </div>\n    \n    <h3>Key Windows Event IDs</h3>\n    <ul>\n      <li><strong>Event ID 4624 Logon Type 3:</strong> Network Logon (remote access to shared folder, printer, or IIS web server).</li>\n      <li><strong>Event ID 1102:</strong> The audit log was cleared in Security log.</li>\n      <li><strong>Event ID 4688:</strong> A new process has been created (captures command lines).</li>\n      <li><strong>Event ID 7045 (System):</strong> A new service was installed in the system (persistence mechanism).</li>\n    </ul>\n\n    <h3>Recycle Bin Forensics: $I vs $R Files</h3>\n    <ul>\n      <li><strong>$I File:</strong> Metadata file containing original file deletion timestamp, original file size, and full original file path.</li>\n      <li><strong>$R File:</strong> The actual recovered payload data content of the deleted file.</li>\n    </ul>"
      },
      "right": {
        "pageNumber": 16,
        "runningHead": "USBSTOR Registry Keys & setupapi.dev.log Tracking",
        "content": "<div class=\"exam-trap-box\">\n      <strong>Recycle Bin & Browser Epochs:</strong> In Windows Recycle Bin forensics, the metadata file starting with <code>$I</code> (e.g., <code>$I123456.ext</code>) stores original file deletion metadata (original full file path, original file size, and deletion timestamp), while <code>$R</code> stores file contents. In Google Chrome SQLite 'History' forensics, timestamps represent microseconds elapsed since <strong>January 1, 1601 UTC</strong> (WebKit / Chrome epoch).\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Removable Device Tracking</span>\n      <h2>USBSTOR Registry Keys & setupapi.dev.log Tracking</h2>\n    </div>\n\n    <h3>USB Device Investigation Steps</h3>\n    <ul>\n      <li><strong>USBSTOR Key:</strong> <code>HKLM\\SYSTEM\\CurrentControlSet\\Enum\\USBSTOR</code> enumerates vendor, product name, firmware revision, and unique device serial number of every USB device connected.</li>\n      <li><strong>SetupAPI Device Log:</strong> <code>C:\\Windows\\INF\\setupapi.dev.log</code> records hardware driver installations with precise first-connection timestamps.</li>\n      <li><strong>Unique Hardware Serial Numbers:</strong> Enable digital forensic examiners to conclusively connect a physical USB drive seized at a suspect's home to a compromised corporate terminal.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 8</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q71–Q80) on Event IDs 1102/4688/7045, Recycle Bin $I/$R, and USBSTOR.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(7)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q71–Q80) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 8,
      "left": {
        "pageNumber": 17,
        "runningHead": "File Magic Signatures & Automated File Carving",
        "content": "<div class=\"exam-trap-box\">\n      <strong>File Signatures & Steganography:</strong> The magic byte signature <code>D0 CF 11 E0 A1 B1 1A E1</code> designates a legacy Microsoft Office <strong>97-2003</strong> Compound File Binary format (.doc, .xls, .ppt, <strong>OLECF</strong> header). <strong>Spatial Domain LSB (Least Significant Bit) Steganography</strong> hides secrets in the lowest bits of image pixel color bytes. <strong>Chi-Square (χ²) Analysis</strong> evaluates pairs of values (PoVs) in pixel histograms to detect LSB replacement embedding.\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 9 • Magic Signatures & Automated Carving</span>\n      <h2>File Magic Signatures & Automated File Carving</h2>\n    </div>\n    \n    <h3>File Header Magic Signatures</h3>\n    <ul>\n      <li><strong>PDF:</strong> <code>25 50 44 46 2D</code> (ASCII: <code>%PDF-</code>).</li>\n      <li><strong>ZIP Archive & MS Office OpenXML (DOCX, XLSX, PPTX):</strong> <code>50 4B 03 04</code> (ASCII: <code>PK\u0003\u0004</code>).</li>\n    </ul>\n\n    <h3>Automated File Carving Tools</h3>\n    <ul>\n      <li><strong>Foremost:</strong> Open-source carving utility utilizing configuration file <code>foremost.conf</code> for headers, footers, and maximum extract sizes.</li>\n      <li><strong>Scalpel:</strong> Optimized multithreaded file carver designed for high-performance memory efficiency.</li>\n      <li><strong>PhotoRec:</strong> Carves over 480 file extensions ignoring file system structures.</li>\n    </ul>"
      },
      "right": {
        "pageNumber": 18,
        "runningHead": "NSRL RDS Hash Sets, KFF & Partition Recovery",
        "content": "<div class=\"exam-trap-box\">\n      <strong>Anti-Forensics & Sanitization Standards:</strong> The US Department of Defense <strong>(DoD) 5220.22-M</strong> protocol overwrites addressable locations with a fixed byte, its complement, and a random byte, followed by verification. <strong>Magnetic degaussing</strong> permanently destroys magnetic platters and servo tracks but has zero sanitization effect on non-magnetic silicon <strong>NAND</strong> flash memory in SSDs! <strong>Timestomping</strong> deliberately modifies file <strong>MAC</strong> (Modified, Accessed, Created) timestamps to match legitimate system binaries to deceive chronological timeline analysis.\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Hash Sets & Known File Filtering</span>\n      <h2>NSRL RDS Hash Sets, KFF & Partition Recovery</h2>\n    </div>\n\n    <h3>NIST National Software Reference Library (NSRL)</h3>\n    <p>The NIST <strong>NSRL Reference Data Set (RDS)</strong> contains cryptographic hashes of millions of known, authentic software files:</p>\n    <ul>\n      <li><strong>Known File Filtering (KFF):</strong> Compares forensic image hashes against NSRL RDS to exclude benign OS binaries (reducing analysis volume by 60-80%) and highlight known malicious binaries.</li>\n      <li><strong>TestDisk:</strong> Open-source utility used to recover lost partitions and repair non-booting file system boot sectors.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 9</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q81–Q90) on PDF/ZIP magic bytes, Foremost carving, and NIST NSRL RDS hash filtering.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(8)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q81–Q90) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 9,
      "left": {
        "pageNumber": 19,
        "runningHead": "RFC 5322 Email Standards & Header Analysis",
        "content": "<div class=\"exam-trap-box\">\n      <strong>Exif & Mail Origin:</strong> The <strong>Exif</strong> (Exchangeable Image File Format) metadata segment contains embedded camera metadata, <strong>GPS</strong> coordinates, shutter speed, camera model, and capture timestamps. When analyzing forged emails, parse 'Received:' headers from the bottom up—the bottom-most header represents the initial hop recorded by the true originating Mail Submission Agent (<strong>MSA</strong>).\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 10 • Email Header Anatomy</span>\n      <h2>RFC 5322 Email Standards & Header Analysis</h2>\n    </div>\n    \n    <h3>RFC 5322 & Received Headers</h3>\n    <ul>\n      <li><strong>RFC 5322:</strong> Standard defining Internet Email Message format.</li>\n      <li><strong>Received: Headers:</strong> Appended sequentially by each Mail Transfer Agent (MTA); the <strong>bottom-most Received: header</strong> reveals the originating submission server.</li>\n      <li><strong>X-Originating-IP:</strong> Discloses the true client IP address of the user who submitted the message via webmail.</li>\n    </ul>"
      },
      "right": {
        "pageNumber": 20,
        "runningHead": "SPF, DKIM, DMARC & Storage Formats",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Email Authentication Standards</span>\n      <h2>SPF, DKIM, DMARC & Storage Formats</h2>\n    </div>\n\n    <h3>Email Authentication Mechanisms</h3>\n    <ul>\n      <li><strong>SPF (Sender Policy Framework):</strong> DNS TXT record listing authorized IP addresses permitted to send emails for a domain.</li>\n      <li><strong>DKIM (DomainKeys Identified Mail):</strong> Affixes an asymmetric cryptographic digital signature in the <code>DKIM-Signature:</code> header verifying message integrity.</li>\n      <li><strong>DMARC:</strong> Combines SPF and DKIM with enforcement policies (<code>p=none</code>, <code>p=quarantine</code>, <code>p=reject</code>).</li>\n      <li><strong>Storage Formats:</strong> MBOX stores messages in a single continuous file separated by 'From '; EML/MSG stores messages individually.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 10</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q91–Q100) on RFC 5322 email headers, X-Originating-IP, SPF, DKIM, and DMARC.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(9)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q91–Q100) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 10,
      "left": {
        "pageNumber": 21,
        "runningHead": "Cloud Shared Responsibility & Multi-Tenancy",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 11 • Cloud Forensics & Shared Responsibility</span>\n      <h2>Cloud Shared Responsibility & Multi-Tenancy</h2>\n    </div>\n    <p>In cloud computing forensics, the <strong>Shared Responsibility Model</strong> dictates evidence acquisition boundaries. Under IaaS, CSP controls physical hardware/hypervisor, while the customer controls OS, apps, and data. Multi-tenancy prevents physical drive seizure due to co-mingled data.</p>"
      },
      "right": {
        "pageNumber": 22,
        "runningHead": "AWS EBS Snapshots, CloudTrail & Azure/GCP Logs",
        "content": "<div class=\"exam-trap-box\">\n      <strong>Database Logs & Crash Dumps:</strong> In <strong>SQL</strong> Server forensics, the Transaction Log (<strong>.LDF</strong> file / Write-Ahead Logging) stores every insert, update, and delete transaction before commit. In SQLite, the auxiliary <strong>WAL</strong> file (-wal suffix) holds uncommitted write transactions. Eric Zimmerman's <strong>EvtxECmd</strong> tool parses Windows Event Logs (.evtx) rapidly, reconstructing <strong>XML</strong> structures. Forcing a crash via Crash on Ctrl+ScrollLock registry setting forces an <strong>ACPI</strong>-compatible Windows system to dump volatile memory directly to <strong>%SystemRoot%\\MEMORY.DMP</strong> (typically C:\\Windows\\MEMORY.DMP).\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Cloud Acquisition & Logs</span>\n      <h2>AWS EBS Snapshots, CloudTrail & Azure/GCP Logs</h2>\n    </div>\n    <ul>\n      <li><strong>AWS EBS Snapshots:</strong> Forensically preserves EC2 instances by creating point-in-time EBS volume snapshots.</li>\n      <li><strong>AWS CloudTrail:</strong> Audits all API calls made across AWS resources.</li>\n      <li><strong>Microsoft 365 UAL:</strong> Unified Audit Log tracking email, SharePoint, and Teams activities.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 11</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q101–Q110) on Cloud forensics, AWS EBS snapshots, and CloudTrail.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(10)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q101–Q110) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 11,
      "left": {
        "pageNumber": 23,
        "runningHead": "Volume Shadow Copies (VSS) & SRUM Execution",
        "content": "<div class=\"exam-trap-box\">\n      <strong>TSK & Memory Analysis Standards:</strong> The open-source <strong>Volatility Framework</strong> is the industry standard for analyzing volatile physical memory (<strong>RAM</strong>) dumps across Windows, Linux, and macOS. The Sleuth Kit (<strong>TSK</strong>) CLI suite includes: <code>fls</code> (lists file/directory names including deleted files), <code>ils</code> (lists inode or MFT metadata structures including unallocated inodes), <code>icat</code> (outputs file data units by inode/MFT number), and <code>fsstat</code> (displays file system layout and cluster metrics). <strong>Plaso log2timeline</strong> generates comprehensive super timelines. <strong>FTK Imager Custom Content Image (AD1)</strong> enables targeted logical acquisitions.\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 12 • Volume Shadow Copies & System Activity</span>\n      <h2>Volume Shadow Copies (VSS) & SRUM Execution</h2>\n    </div>\n    <ul>\n      <li><strong>Volume Shadow Copies (VSS):</strong> Block-level differential snapshots tracking past versions of files via <code>vssadmin list shadows</code>.</li>\n      <li><strong>SRUM (System Resource Usage Monitor):</strong> ESE database at <code>C:\\Windows\\System32\\SRU\\SRUDB.dat</code> recording historical application execution, bytes sent/received, and CPU time over 30 days.</li>\n    </ul>"
      },
      "right": {
        "pageNumber": 24,
        "runningHead": "WebCache & Browser History SQLite Databases",
        "content": "<div class=\"exam-trap-box\">\n      <strong>Lab Standards & Legal Admissibility:</strong> <strong>ISO/IEC 27037</strong> provides guidelines for the handling, identification, collection, acquisition, and preservation of digital evidence. <strong>ISO/IEC 17025</strong> specifies general competence, calibration, and quality management requirements for testing digital forensic laboratories. The <strong>Daubert Standard</strong> mandates that forensic methodologies be empirically testable, peer-reviewed, possess a known error rate, and have general acceptance.\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Browser Artifacts: Chrome & Firefox</span>\n      <h2>WebCache & Browser History SQLite Databases</h2>\n    </div>\n    <ul>\n      <li><strong>Google Chrome History:</strong> SQLite database at <code>User Data\\Default\\History</code> storing <code>urls</code>, <code>visits</code>, and <code>downloads</code>.</li>\n      <li><strong>Mozilla Firefox:</strong> Stored in <code>places.sqlite</code>.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 12</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q111–Q120) on Volume Shadow Copies, SRUM execution, and browser SQLite history.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(11)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q111–Q120) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 12,
      "left": {
        "pageNumber": 25,
        "runningHead": "E01 Chunk Geometry & AFF4 Container Architecture",
        "content": "<div class=\"exam-trap-box\">\n      <strong>Specialized Acquisition Tools:</strong> <strong>GNU ddrescue</strong> uses intelligent algorithms that skip bad sectors first to copy intact data, using mapfiles for multi-pass recovery. <strong>Advanced Forensic Format (AFF)</strong> is an open extensible container supporting compression and metadata. <strong>SafeBlock</strong> provides software write-blocking via kernel driver. macOS requires disabling the <strong>Disk Arbitration daemon (diskarbitrationd)</strong> to prevent auto-mounting. <strong>dcfldd</strong> (by DoD DCFL) computes on-the-fly hashing (MD5/SHA) during imaging. <strong>Host Protected Area (HPA)</strong> and <strong>DCO</strong> hide reserved disk areas accessible via ATA READ NATIVE MAX ADDRESS.\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 13 • Advanced Container Formats</span>\n      <h2>E01 Chunk Geometry & AFF4 Container Architecture</h2>\n    </div>\n    <p>E01 structures data into 64-sector (32 KB) chunks with block-level CRC32 checksums. Advanced Forensic Format 4 (AFF4) provides an extensible container supporting sparse imaging and multiple image streams.</p>"
      },
      "right": {
        "pageNumber": 26,
        "runningHead": "BitLocker, FileVault 2 & Linux LUKS Headers",
        "content": "<div class=\"exam-trap-box\">\n      <strong>Volume Artifacts & Tools:</strong> The 32-bit <strong>Volume Serial Number</strong> generated during FAT and NTFS formatting correlates USB storage across registry MountPoints. <strong>ExifTool</strong> (written in Perl by Phil Harvey) is the premier tool for parsing EXIF and media metadata. <strong>Volume Shadow Copy (VSS)</strong> enables inspection of differential snapshots. Windows XP used a single <strong>INFO2</strong> Recycle Bin database, while Windows 10/11 creates individual <strong>$I</strong> files. Default NTFS cluster size is <strong>4 Kilobytes (4,096 bytes / 8 sectors of 512 bytes)</strong>.\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Full Volume Encryption</span>\n      <h2>BitLocker, FileVault 2 & Linux LUKS Headers</h2>\n    </div>\n    <ul>\n      <li><strong>BitLocker:</strong> Utilizes AES-CBC or XTS-AES with 48-digit numerical recovery keys and Volume Master Keys (VMK).</li>\n      <li><strong>LUKS:</strong> Standard Linux disk encryption with multiple keyslot headers.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 13</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q121–Q130) on E01 chunks, AFF4 format, BitLocker VMK, and LUKS encryption.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(12)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q121–Q130) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 13,
      "left": {
        "pageNumber": 27,
        "runningHead": "$MFTMirr, $Bitmap & Data Run Parsing",
        "content": "<div class=\"exam-trap-box\">\n      <strong>NTFS Metadata & Security Identifiers (SIDs):</strong> The NTFS <strong>$Bitmap</strong> file tracks cluster allocation status using 1 bit per cluster (0=free, 1=allocated). The <strong>USN Journal ($UsnJrnl:$J)</strong> records metadata changes (renaming, creation, deletion). In Windows SIDs, the built-in Administrator account always has <strong>RID 500</strong>, while the first user created receives <strong>RID 1000</strong> (or <strong>RID 1001</strong> on modern releases). The <strong>SAM</strong> registry hive stores local accounts, SIDs, login counts, and <strong>NTLM</strong> password hashes.\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 14 • NTFS System Architecture</span>\n      <h2>$MFTMirr, $Bitmap & Data Run Parsing</h2>\n    </div>\n    <ul>\n      <li><strong>$MFTMirr:</strong> Backup copy of the first 4 records of the Master File Table.</li>\n      <li><strong>$Bitmap:</strong> Tracks cluster allocation status (1 bit per cluster; 0 = free, 1 = allocated).</li>\n      <li><strong>Non-Resident Data Runs:</strong> Pairs of length and offset mapping file clusters across the volume.</li>\n    </ul>"
      },
      "right": {
        "pageNumber": 28,
        "runningHead": "Scheduled Tasks & AppCompatCache Details",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Scheduled Tasks & AppCompatCache</span>\n      <h2>Task Scheduler Logs & AppCompatCache Details</h2>\n    </div>\n    <ul>\n      <li><strong>Scheduled Tasks:</strong> XML files in <code>C:\\Windows\\System32\\Tasks\\</code> (Event IDs 106 and 200).</li>\n      <li><strong>AppCompatCache:</strong> Stored in SYSTEM hive tracking up to 1024 entries in Windows 10/11.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 14</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q131–Q140) on NTFS $MFTMirr, $Bitmap, data runs, and Task Scheduler.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(13)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q131–Q140) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 14,
      "left": {
        "pageNumber": 29,
        "runningHead": "Mimikatz LSASS Dumping, SAM & Syskey Encryption",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 15 • Credential Theft & Script Logging</span>\n      <h2>Mimikatz LSASS Dumping, SAM & Syskey Encryption</h2>\n    </div>\n    <ul>\n      <li><strong>Mimikatz:</strong> Dumps plaintext passwords and NTLM hashes from LSASS memory (<code>sekurlsa::logonpasswords</code>).</li>\n      <li><strong>SAM & Syskey:</strong> Password hashes in SAM hive are encrypted with Syskey, stored in the SYSTEM hive.</li>\n    </ul>"
      },
      "right": {
        "pageNumber": 30,
        "runningHead": "PowerShell Event ID 4104 & Windows Error Reporting (.wer)",
        "content": "<div class=\"exam-trap-box\">\n      <strong>Registry InstallDate & WebCache:</strong> Windows installation timestamp resides at <code>HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion -> InstallDate</code> (Unix epoch format). <strong>MRU</strong> stands for <strong>Most Recently Used</strong>. The Windows ESE database <strong>WebCacheV01.dat</strong> stores IE/Edge history, downloads, cache, and <strong>DOM</strong> storage records.\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">PowerShell & Crash Dumps</span>\n      <h2>PowerShell Event ID 4104 & Windows Error Reporting (.wer)</h2>\n    </div>\n    <ul>\n      <li><strong>PowerShell Event ID 4104:</strong> Script Block Logging captures complete code blocks executed.</li>\n      <li><strong>WER (.wer files):</strong> Records application crash dumps, revealing malware crashes.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 15</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q141–Q150) on Mimikatz LSASS dumping, SAM/Syskey, and PowerShell 4104 logging.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(14)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q141–Q150) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 15,
      "left": {
        "pageNumber": 31,
        "runningHead": "ipconfig /displaydns, netstat & Windows Thumbcache",
        "content": "<div class=\"exam-trap-box\">\n      <strong>Network & Mail Protocols:</strong> A standard Ethernet <strong>NIC MAC</strong> address is 48 bits (6 octets in hex). The <strong>ARP</strong> table maps Layer 3 IPv4 addresses to Layer 2 physical <strong>MAC</strong> addresses. The Mail User Agent (<strong>MUA</strong>) is the client application (Outlook, Thunderbird) used to compose/read emails, while the Mail Transfer Agent (<strong>MTA</strong>) routes messages across servers using <strong>SMTP</strong>. <strong>POP3</strong> downloads emails to local clients and typically deletes them from the server.\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 16 • Live Volatile Commands & Database Forensics</span>\n      <h2>ipconfig /displaydns, netstat & Windows Thumbcache</h2>\n    </div>\n    <ul>\n      <li><strong>ipconfig /displaydns:</strong> Dumps local DNS resolver cache showing recently queried domains.</li>\n      <li><strong>netstat -ano:</strong> Lists active TCP/UDP ports and owning Process IDs (PIDs).</li>\n      <li><strong>Thumbcache:</strong> <code>thumbcache_*.db</code> caches image thumbnails even after source deletion.</li>\n    </ul>"
      },
      "right": {
        "pageNumber": 32,
        "runningHead": "ESE Databases (JET Blue) & SQLite Write-Ahead Logs (.wal)",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Database Internals: ESE & SQLite</span>\n      <h2>ESE Databases (JET Blue) & SQLite Write-Ahead Logs (.wal)</h2>\n    </div>\n    <ul>\n      <li><strong>ESE Database (esentutl):</strong> Extensible Storage Engine database format used by WebCache and Windows Search.</li>\n      <li><strong>SQLite WAL (.db-wal):</strong> Write-Ahead Log holds uncommitted transactions and recently deleted records.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 16</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q151–Q160) on DNS cache, netstat, Windows Thumbcache, and SQLite WAL.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(15)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q151–Q160) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 16,
      "left": {
        "pageNumber": 33,
        "runningHead": "IMAP4 vs POP3 & Outlook PST/OST Formats",
        "content": "<div class=\"exam-trap-box\">\n      <strong>Windows Artifacts, TPM & Security Events:</strong> The Background Activity Moderator (<strong>BAM</strong>) in the <strong>SYSTEM</strong> registry hive tracks user execution paths and timestamps. The <strong>SRUM</strong> database (<code>C:\\Windows\\System32\\sru\\SRUDB.dat</code>) tracks per-app <strong>CPU</strong> duration and network bytes. <strong>TPM Platform Configuration Registers (PCRs)</strong> seal BitLocker keys. <strong>Event ID 4720</strong> indicates user creation; <strong>Event ID 4728</strong> indicates user addition to a security group. SQLite database header signature in <strong>ASCII</strong> is <code>SQLite format 3\u0000</code>.\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 17 • Email Retrieval & Forensic Validation</span>\n      <h2>IMAP4 vs POP3 & Outlook PST/OST Formats</h2>\n    </div>\n    <p>IMAP4 enables bidirectional synchronization retaining state on mail servers, while POP3 is a one-way download protocol. Outlook stores data in PST and OST files.</p>"
      },
      "right": {
        "pageNumber": 34,
        "runningHead": "DKIM Tags, SPF Syntax & MIME Headers",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Authentication & MIME Architecture</span>\n      <h2>DKIM Tags, SPF Syntax & MIME Headers</h2>\n    </div>\n    <ul>\n      <li><strong>DKIM Parameters:</strong> <code>v=1; a=rsa-sha256; d=domain.com; s=selector; b=signature; bh=bodyhash</code>.</li>\n      <li><strong>SPF Record:</strong> <code>v=spf1 ip4:... ~all</code>.</li>\n      <li><strong>MIME Multipart:</strong> Encapsulates text, HTML, and base64 encoded attachments.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 17</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q161–Q170) on IMAP4/POP3 protocols, DKIM parameters, and MIME format.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(16)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q161–Q170) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 17,
      "left": {
        "pageNumber": 35,
        "runningHead": "SQLite Page 0x0D & Windows DPAPI MasterKeys",
        "content": "<div class=\"exam-trap-box\">\n      <strong>Linux Forensic Tools:</strong> <strong>Guymager</strong> is a high-speed Linux <strong>GUI</strong> forensic acquisition utility supporting raw (dd) and Expert Witness Format (<strong>E01</strong>) image creation across storage media.\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 18 • Low-Level Structures & TSK Utilities</span>\n      <h2>SQLite Page 0x0D & Windows DPAPI MasterKeys</h2>\n    </div>\n    <ul>\n      <li><strong>SQLite Leaf Page 0x0D:</strong> Byte value 0x0D at offset 0 denotes a Leaf Table B-Tree page holding database table records.</li>\n      <li><strong>DPAPI MasterKeys:</strong> Stored in <code>AppData\\Roaming\\Microsoft\\Protect\\&lt;UserSID&gt;\\</code>, protecting passwords and keys.</li>\n      <li><strong>DKOM Attacks:</strong> Direct Kernel Object Manipulation modifies kernel linked lists (e.g. unlinking from <code>ActiveProcessLinks</code>).</li>\n    </ul>"
      },
      "right": {
        "pageNumber": 36,
        "runningHead": "Pagefile.sys, Hiberfil.sys & TSK (istat, mmls)",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Memory Files & The Sleuth Kit (TSK)</span>\n      <h2>Pagefile.sys, Hiberfil.sys & TSK (istat, mmls)</h2>\n    </div>\n    <ul>\n      <li><strong>Pagefile.sys & Hiberfil.sys:</strong> Pagefile holds swapped RAM pages; hiberfil.sys contains full compressed physical RAM dump.</li>\n      <li><strong>istat:</strong> TSK tool displaying metadata (timestamps, blocks) of an inode or MFT record.</li>\n      <li><strong>mmls:</strong> TSK tool displaying partition table layout and sector offsets.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 18</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q171–Q180) on SQLite 0x0D leaf, DPAPI MasterKeys, and TSK istat/mmls.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(17)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q171–Q180) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 18,
      "left": {
        "pageNumber": 37,
        "runningHead": "TSK blkcat, TCP Handshake & Wireshark Display Filters",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 19 • Packet Forensics & Protocol Dissection</span>\n      <h2>TSK blkcat, TCP Handshake & Wireshark Display Filters</h2>\n    </div>\n    <ul>\n      <li><strong>TSK blkcat:</strong> Displays the raw contents of a specific disk data unit/block.</li>\n      <li><strong>TCP 3-Way Handshake:</strong> SYN -> SYN-ACK -> ACK. TCP RST represents abrupt termination.</li>\n      <li><strong>Wireshark Filters:</strong> DNS: <code>dns &amp;&amp; ip.addr == 192.168.1.50</code>. SYN Flood: <code>tcp.flags.syn == 1 &amp;&amp; tcp.flags.ack == 0</code>.</li>\n    </ul>"
      },
      "right": {
        "pageNumber": 38,
        "runningHead": "Follow TCP Stream, PCAPNG & tcpdump -s 0 Flag",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Packet Capture & Analysis</span>\n      <h2>Follow TCP Stream, PCAPNG & tcpdump -s 0 Flag</h2>\n    </div>\n    <ul>\n      <li><strong>Follow TCP Stream:</strong> Reassembles fragmented TCP segments into readable application payload.</li>\n      <li><strong>PCAPNG:</strong> Extensible packet format supporting nanosecond timestamps.</li>\n      <li><strong>tcpdump -s 0:</strong> Captures the full snapshot length of raw packets without truncation.</li>\n      <li><strong>Authentication-Results:</strong> Evaluates SPF, DKIM, and DMARC status.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 19</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q181–Q190) on TSK blkcat, Wireshark filters, PCAPNG, and tcpdump -s 0.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(18)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q181–Q190) →</button>\n        </div>"
      }
    },
    {
      "spreadId": 19,
      "left": {
        "pageNumber": 39,
        "runningHead": "DMARC p=reject, PSReadLine & SQLite VACUUM",
        "content": "<div class=\"exam-trap-box\">\n      <strong>Email Origins & PowerShell Auditing:</strong> The <code>X-Originating-IP</code> and <code>X-Sender-IP</code> headers reveal the true client IP of the sender connecting via webmail or <strong>MUA</strong>. PowerShell <strong>Script Block Logging</strong> records full script blocks under <strong>Event ID 4104</strong>, even when obfuscated.\n    </div>\n\n    <div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Chapter 20 • Anti-Forensics & Courtroom Evidence SOPs</span>\n      <h2>DMARC p=reject, PSReadLine & SQLite VACUUM</h2>\n    </div>\n    <ul>\n      <li><strong>DMARC p=reject:</strong> Instructs receiving mail servers to reject and block unauthenticated messages at the SMTP gateway.</li>\n      <li><strong>PowerShell PSReadLine:</strong> Console history logged at <code>AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadLine\\ConsoleHost_history.txt</code>.</li>\n      <li><strong>SQLite VACUUM:</strong> Rebuilds the database file, purging the freelist and permanently erasing deleted records.</li>\n      <li><strong>Anti-Forensics:</strong> Deliberate technical actions to alter, erase, or obfuscate evidence.</li>\n    </ul>"
      },
      "right": {
        "pageNumber": 40,
        "runningHead": "Best Evidence Rule, Section 63 BSA & Contemporaneous Notes",
        "content": "<div class=\"legal-dispatch-header\">\n      <span class=\"badge-primary\">Courtroom Admissibility Standards</span>\n      <h2>Best Evidence Rule, Section 63 BSA & Contemporaneous Notes</h2>\n    </div>\n    <ul>\n      <li><strong>Best Evidence Rule:</strong> Requires original evidence or verified bit-for-bit duplicate in court.</li>\n      <li><strong>Section 63 BSA Certificate:</strong> Mandatory legal document certifying electronic evidence integrity.</li>\n      <li><strong>Forensic Lab Notebook:</strong> Contemporaneous documentation of all tools, version numbers, command lines, hashes, and timestamps.</li>\n    </ul>\n    \n        <div class=\"spread-quiz-cta-banner\">\n          <div class=\"spread-quiz-cta-info\">\n            <span style=\"font-size: 1.1rem; margin-right: 8px;\">🎯</span>\n            <div>\n              <strong style=\"font-size: 0.86rem; color: var(--text-heading);\">Test Your Mastery: Spread 20</strong>\n              <div style=\"font-size: 0.74rem; color: var(--text-muted);\">Practice all 10 targeted exam questions (Q191–Q200) on DMARC reject, PSReadLine history, SQLite VACUUM, and Section 63 BSA.</div>\n            </div>\n          </div>\n          <button class=\"btn-tool btn-mcq\" onclick=\"window.openMCQForSpread(19)\" style=\"font-size: 0.8rem; padding: 6px 14px;\">Start Quiz (Q191–Q200) →</button>\n        </div>"
      }
    }
  ],
  "tocData": [
    {
      "chapter": "Ch. 1",
      "title": "RFC 3227 Volatility, Write-Blockers & Cryptographic Integrity",
      "spreadIndex": 0,
      "page": "1–2"
    },
    {
      "chapter": "Ch. 2",
      "title": "Slack Space, SSD TRIM, Mobile Seizure & dd Bitstream Imaging",
      "spreadIndex": 1,
      "page": "3–4"
    },
    {
      "chapter": "Ch. 3",
      "title": "Live Triage, JA3 Fingerprints, FAT32 & NTFS MFT Internals",
      "spreadIndex": 2,
      "page": "5–6"
    },
    {
      "chapter": "Ch. 4",
      "title": "NTFS Attributes, Timestomping, ADS Streams & Ext4 Extents",
      "spreadIndex": 3,
      "page": "7–8"
    },
    {
      "chapter": "Ch. 5",
      "title": "Ext Inodes, Apple APFS Architecture & MBR Sector 0 Geometry",
      "spreadIndex": 4,
      "page": "9–10"
    },
    {
      "chapter": "Ch. 6",
      "title": "GPT Architecture, Data Carving & Windows Registry Execution",
      "spreadIndex": 5,
      "page": "11–12"
    },
    {
      "chapter": "Ch. 7",
      "title": "Amcache.hve, Prefetch, LNK Files & Event ID 4624 Logon Types",
      "spreadIndex": 6,
      "page": "13–14"
    },
    {
      "chapter": "Ch. 8",
      "title": "Event Log Forensics, Recycle Bin & USBSTOR Device Tracking",
      "spreadIndex": 7,
      "page": "15–16"
    },
    {
      "chapter": "Ch. 9",
      "title": "Magic Signatures, File Carvers & NIST NSRL Known File Filtering",
      "spreadIndex": 8,
      "page": "17–18"
    },
    {
      "chapter": "Ch. 10",
      "title": "Email Header Analysis, SPF, DKIM, DMARC & Storage Formats",
      "spreadIndex": 9,
      "page": "19–20"
    },
    {
      "chapter": "Ch. 11",
      "title": "Cloud Forensics, AWS EBS Snapshots & CloudTrail Auditing",
      "spreadIndex": 10,
      "page": "21–22"
    },
    {
      "chapter": "Ch. 12",
      "title": "Volume Shadow Copies, SRUM Database & Browser Forensics",
      "spreadIndex": 11,
      "page": "23–24"
    },
    {
      "chapter": "Ch. 13",
      "title": "Forensic Containers (E01/AFF4) & Disk Encryption (BitLocker/LUKS)",
      "spreadIndex": 12,
      "page": "25–26"
    },
    {
      "chapter": "Ch. 14",
      "title": "NTFS Metadata Files ($MFTMirr, $Bitmap) & Scheduled Tasks",
      "spreadIndex": 13,
      "page": "27–28"
    },
    {
      "chapter": "Ch. 15",
      "title": "Credential Dumping (Mimikatz), SAM/Syskey & PowerShell 4104",
      "spreadIndex": 14,
      "page": "29–30"
    },
    {
      "chapter": "Ch. 16",
      "title": "Live Network Commands, Thumbcache & SQLite WAL Databases",
      "spreadIndex": 15,
      "page": "31–32"
    },
    {
      "chapter": "Ch. 17",
      "title": "Email Retrieval Protocols, DKIM Tags & MIME Multipart Format",
      "spreadIndex": 16,
      "page": "33–34"
    },
    {
      "chapter": "Ch. 18",
      "title": "SQLite Page Types, DPAPI Keys & The Sleuth Kit (istat, mmls)",
      "spreadIndex": 17,
      "page": "35–36"
    },
    {
      "chapter": "Ch. 19",
      "title": "Packet Forensics, Wireshark Filters & tcpdump Capture Standards",
      "spreadIndex": 18,
      "page": "37–38"
    },
    {
      "chapter": "Ch. 20",
      "title": "Anti-Forensics, PowerShell History, SQLite VACUUM & BSA Sec 63",
      "spreadIndex": 19,
      "page": "39–40"
    }
  ],
  "deepDiveData": {
    "df_branches": {
      "title": "Official Topic 1: Branches of Digital Forensics",
      "subtitle": "Disk • RAM/Memory • Mobile (iOS/Android) • Network • Cloud • Database • Email",
      "quote": "Each branch of digital forensics operates under unique physical and architectural realities, requiring distinct tools, extraction levels, and evidentiary standards.",
      "nature": "Multi-Disciplinary Forensic Standard Operating Procedures",
      "forum": "Central / State Forensic Science Laboratories & Special Cyber Crime Units",
      "penalty": "Applying the wrong branch methodology (e.g. rebooting a phone or idling an SSD) results in irreversible data loss.",
      "ingredients": [
        "1. Disk Forensics: Sector/cluster allocation, slack space, unallocated space, and HPA/DCO hidden sector extraction.",
        "2. Memory (RAM) Forensics: Capturing volatile plaintext BitLocker keys, fileless malware, and live network sockets before power cut.",
        "3. Mobile Forensics: Dealing with hardware File-Based Encryption (FBE) and extracting WhatsApp deleted chats from SQLite WAL files.",
        "4. Network Forensics: Intercepting live wire packets via Hardware TAPs and analyzing PCAP captures in Wireshark.",
        "5. Cloud Forensics: Acquiring virtual machine snapshots (AWS EBS) and immutable CloudTrail JSON audit logs.",
        "6. Database & Email Forensics: Recovering altered SQL records from Transaction Logs (.LDF) and tracing spoofed email headers from the bottom up."
      ],
      "scenarios": [
        {
          "name": "Scenario 1: Live RAM Capture Recovers Plaintext Encryption Keys",
          "verdict": "Decisive Success",
          "verdictClass": "verdict-safe",
          "facts": "Examiner arrives at a crime scene with an active BitLocker-encrypted workstation. Instead of pulling the power plug, the examiner dumps volatile memory using winpmem.",
          "legal": "EVIDENCE PRESERVED. The RAM dump preserved the plaintext volume master key and live C2 network sockets before the machine was safely shut down."
        },
        {
          "name": "Scenario 2: Neglecting the SQLite WAL File in Mobile Extraction",
          "verdict": "Incomplete Investigation",
          "verdictClass": "verdict-offence",
          "facts": "An investigator copies msgstore.db from an Android phone but forgets the companion msgstore.db-wal file.",
          "legal": "EVIDENCE OMITTED. In SQLite, recently deleted or received messages reside in the Write-Ahead Log (.db-wal) until the next checkpoint. Missing the WAL file meant missing the suspect's latest extortion messages!"
        }
      ],
      "forensics": [
        "1. Always prioritize memory capture according to the Order of Volatility (RFC 3227).",
        "2. When extracting mobile databases, always copy the .db, .db-wal, and .db-shm files together.",
        "3. Use JA3 TLS fingerprinting to categorize encrypted network traffic."
      ],
      "precedents": "State of Tamil Nadu v. Suhas Katti (2004) — Confirmed the legal admissibility of electronic records and recovered chat communications."
    },
    "df_scene": {
      "title": "Official Topic 2: Investigation of digital crime scenes",
      "subtitle": "Arrival • Videography under BNSS 2023 • Faraday RF Shielding • Live vs Dead Decision Matrix",
      "quote": "You have 10 seconds to decide: Do I pull the power plug, or do I perform live memory capture? The wrong decision permanently destroys evidence.",
      "nature": "Crime Scene First Responder Triage Standard Operating Procedure",
      "forum": "Digital Crime Scene Units & Metropolitan Magistrates",
      "penalty": "Immediate loss of BitLocker decryption keys if power is cut on an encrypted machine.",
      "ingredients": [
        "1. Scene Cordoning: Immediately separate all suspects from keyboards, mice, and phones to prevent keystroke tampering or remote wipes.",
        "2. Mandatory Videography: Section 105 BNSS 2023 requires continuous audio-video recording of search and seizure.",
        "3. Screen-ON Decision: If BitLocker or VeraCrypt is active, perform LIVE triage: capture volatile RAM first, then extract recovery keys.",
        "4. Screen-OFF Decision: NEVER power on a dead machine at the scene. Disconnect AC power directly from chassis PSU.",
        "5. Cable Documentation: Photograph rear panel and tag all wires with color-coded labels before unplugging."
      ],
      "scenarios": [
        {
          "name": "Scenario 1: Pulling Power on a BitLocker-Encrypted Server",
          "verdict": "Fatal Error",
          "verdictClass": "verdict-offence",
          "facts": "An officer sees a running server with an active BitLocker volume. Panicking, he pulls the AC cord from the wall.",
          "legal": "EVIDENCE LOST. Pulling power locked the BitLocker volume. The decryption key in RAM was wiped. Without the 48-digit recovery key or suspect password, the 10TB corporate database cannot be decrypted!"
        },
        {
          "name": "Scenario 2: Accomplice Attempts Remote Wipe via iCloud",
          "verdict": "Evidence Saved",
          "verdictClass": "verdict-safe",
          "facts": "After an arrest, the suspect's brother uses Apple Find My to execute 'Erase iPhone'. The investigator had already sealed the iPhone inside a dual-layer copper Faraday bag.",
          "legal": "ISOLATION SUCCESS. The Faraday bag blocked all LTE, 5G, and Wi-Fi signals. The remote wipe packet could not reach the antenna, preserving all WhatsApp chats and photos."
        }
      ],
      "forensics": [
        "1. Always check for active encryption (BitLocker / FileVault) before cutting power.",
        "2. Use sterile triage USB drives with standalone CLI tools to minimize host footprint.",
        "3. Pull desktop power plugs from the back of the PSU, not the wall, to avoid UPS backup battery engagement."
      ],
      "precedents": "Daubert v. Merrell Dow Pharmaceuticals (1993) — Established the requirement for validated, peer-reviewed scientific procedures in evidence handling."
    },
    "df_documentation_coc": {
      "title": "Official Topics 3 & 4: maintaining proper documentation & chain of custody",
      "subtitle": "Contemporaneous Notes • Seizure Memo (Panchnama) under BNSS • Unbroken Custody Logs • Tamper Tape",
      "quote": "A single unexplained gap in custody or missing witness signature turns ironclad digital proof into legally inadmissible hearsay.",
      "nature": "Statutory Criminal Procedure & Evidence Custody Standard",
      "forum": "Metropolitan Magistrates & Sessions Courts of India",
      "penalty": "Total evidentiary rejection under Section 63 BSA 2023 if chain of custody is compromised.",
      "ingredients": [
        "1. Contemporaneous Seizure Memo: Draft on the spot with two independent Panch witnesses.",
        "2. Hardware Identifiers: Document manufacturer serial number, model, capacity, MAC address, and IMEI.",
        "3. Cosmetic Condition Record: Note all scratches, cracks, and dents to prevent suspect claiming police damaged the drive.",
        "4. Tamper-Evident Security Seals: Apply serialized tape across container flaps with overlapping witness signatures.",
        "5. Unbroken Custody Log: Record every transfer (date, time, releasing officer, receiving officer, purpose, seal status)."
      ],
      "scenarios": [
        {
          "name": "Scenario 1: Drive Left in Officer's Personal Locker Over Weekend",
          "verdict": "Evidence Dismissed",
          "verdictClass": "verdict-offence",
          "facts": "An officer seizes an extortion drive on Friday and keeps it in his personal desk drawer over the weekend before handing it to FSL on Monday.",
          "legal": "BREAK IN CUSTODY. In court, the defense proves there is a 60-hour unaccounted gap without official vault logs. The Judge rules the evidence inadmissible due to lack of chain of custody integrity."
        },
        {
          "name": "Scenario 2: Overlapping Witness Signatures on Security Tape",
          "verdict": "Tamper-Proof Integrity",
          "verdictClass": "verdict-safe",
          "facts": "The officer and two independent witnesses sign across the boundary of red VOID tape sealing the hard drive box.",
          "legal": "IRREFUTABLE PROOF. Any attempt to peel or open the box destroys the serialized tape and tears the signatures, proving the exhibit remained sealed from the crime scene to the courtroom."
        }
      ],
      "forensics": [
        "1. Photograph the physical drive with its serial number sticker visible alongside the Seizure Memo.",
        "2. Maintain electronic barcode tracking in the laboratory evidence management vault.",
        "3. Ensure the person delivering the evidence obtains a signed, timestamped intake receipt."
      ],
      "precedents": "Anvar P.V. v. P.K. Basheer (Supreme Court of India, 2014) — Emphasized strict compliance with statutory procedural safeguards for electronic records."
    },
    "df_sop": {
      "title": "Official Topic 5: Standard Operating Procedures for Handling, Preservation, Acquisition, packaging, labeling & Transportation...",
      "subtitle": "ESD Anti-Static Safety • Physical vs Logical Acquisition • Tamper Sealing • Vehicle Speaker Magnets",
      "quote": "Static electricity you cannot even feel can destroy stored memory cells in microseconds. Proper handling and transport protocols protect the physical integrity of exhibits.",
      "nature": "Mandatory Laboratory Standard Operating Procedure",
      "forum": "Central & State Forensic Science Laboratories",
      "penalty": "Physical evidence destruction from electrostatic discharge or thermal degradation during transit.",
      "ingredients": [
        "1. ESD Wrist Straps & Mats: Always ground yourself before touching internal storage drives; 100V is enough to fry NAND flash dies.",
        "2. Handling Protocol: Grasp hard drives strictly by their non-conductive metal edges; never touch PCBs or gold interface pins.",
        "3. Acquisition Mandate: Work exclusively on bit-stream forensic duplicates, never on original physical exhibits.",
        "4. Serialized Tamper-Evident Packaging: Encase in anti-static bags, bubble wrap, and seal with signed VOID security tape.",
        "5. Transit Precautions: Never place drives near vehicle subwoofer magnets or inside summer car trunks exceeding 60°C."
      ],
      "scenarios": [
        {
          "name": "Scenario 1: Transporting Magnetic Drives in Car Trunk Near Subwoofer",
          "verdict": "Magnetic Bit Corruption",
          "verdictClass": "verdict-offence",
          "facts": "An officer places a seized magnetic hard drive in the trunk of a patrol car next to an aftermarket high-output audio speaker.",
          "legal": "EVIDENTIARY DAMAGE. Powerful permanent speaker magnets generate magnetic fields capable of altering bit polarities on rotational platters, causing uncorrectable read errors."
        },
        {
          "name": "Scenario 2: Grounded Technician Handles Exposed PCB",
          "verdict": "Zero Static Damage",
          "verdictClass": "verdict-safe",
          "facts": "The technician straps on a grounded ESD wrist band and handles the hard drive strictly by its outer aluminum casing.",
          "legal": "PERFECT EXECUTION. Sensitive NAND and controller circuits were shielded from electrostatic discharge."
        }
      ],
      "forensics": [
        "1. Transport exhibits in climate-controlled vehicle passenger cabins.",
        "2. Allow 30 minutes of thermal acclimatization before powering on cold drives in warm labs.",
        "3. Pre-wipe all destination media with DoD 5220.22-M zero sanitization."
      ],
      "precedents": "ISO/IEC 27037 Standard — International guidelines for identification, collection, acquisition, and preservation of digital evidence."
    },
    "df_tools_acquisition": {
      "title": "Official Topic 6: digital data acquisition tools",
      "subtitle": "Tableau Hardware Write-Blockers • Standalone Duplicators (Falcon-NEO) • FTK Imager • dc3dd • E01 vs RAW",
      "quote": "Hardware write-blockers are the definitive technological barrier between evidence integrity and accidental spoliation.",
      "nature": "Forensic Imaging Tool Qualification Standard",
      "forum": "CFSL / FSL Forensic Workstations & Field Triage",
      "penalty": "Connecting suspect media without write-blockers alters drive contents and invalidates acquisition hashes.",
      "ingredients": [
        "1. Hardware Command Dropping: Tableau bridge intercepts and drops all ATA/SCSI WRITE and TRIM commands.",
        "2. Standalone Duplication: Logicube Falcon-NEO clones drives at up to 50 GB/min with simultaneous dual hashing.",
        "3. Software Imagers: FTK Imager (GUI) and dc3dd (CLI) provide piecewise hashing and error-tolerant reading.",
        "4. Format Selection: E01 format encapsulates internal 64-sector block checksums and case metadata.",
        "5. Bad Sector Handling: Configuring 0x00 byte padding to continue imaging without crashing on damaged drives."
      ],
      "scenarios": [
        {
          "name": "Scenario 1: USB Flash Drive Inserted Directly into Windows",
          "verdict": "Evidence Contaminated",
          "verdictClass": "verdict-offence",
          "facts": "An officer inserts a suspect USB drive directly into a Windows PC without a write-blocker to preview files.",
          "legal": "SPOLIATION. Windows automatically writes hidden System Volume Information folders and updates volume GUIDs within 2 seconds. The drive hash is altered, handing the defense an open door for evidence dismissal."
        },
        {
          "name": "Scenario 2: Imaging with E01 Format Catches Silent Bit Rot",
          "verdict": "Integrity Verified",
          "verdictClass": "verdict-safe",
          "facts": "Examiner images a drive to .E01. Months later, one block suffers bit rot. The software pinpoints the exact 64 sectors.",
          "legal": "CORRUPTION CONTAINED. Because .E01 chunks data with internal Adler32 checksums, the exact damaged block is identified without invalidating the rest of the image."
        }
      ],
      "forensics": [
        "1. Verify hardware write-blocker status with test media before attaching evidence.",
        "2. Prefer .E01 format over RAW/DD for evidentiary accountability and metadata encapsulation.",
        "3. Use dc3dd in Linux environments for automated hashing and progress telemetry."
      ],
      "precedents": "Daubert v. Merrell Dow Pharmaceuticals (1993) — Established the requirement for peer-reviewed scientific validity in forensic tools."
    },
    "df_sources": {
      "title": "Official Topic 7: identifying and collecting data from relevant digital sources (hard drives, mobile, network, cloud, email)",
      "subtitle": "HDD Sectors • SSD TRIM Disaster • Mobile EDL/JTAG • CloudTrail JSON • RFC 5322 Email Headers",
      "quote": "Each digital storage medium possesses unique internal architectures dictating data recovery feasibility.",
      "nature": "Multi-Source Evidence Extraction Protocol",
      "forum": "Digital Forensics Examination Laboratories",
      "penalty": "Failing to account for SSD TRIM or mobile BFU mode results in total evidence destruction.",
      "ingredients": [
        "1. Hard Drives (HDDs): Sector/cluster allocation; extracting Host Protected Area (HPA) and Device Configuration Overlay (DCO).",
        "2. The SSD TRIM Catastrophe: ATA TRIM triggers background garbage collection that zeroes out deleted blocks within 10-15 minutes; power must be cut immediately!",
        "3. Mobile Sources: Advanced logical and physical extractions via Qualcomm EDL mode; SQLite WAL parsing.",
        "4. Network Sources: Capturing DHCP lease tables, router syslog, and firewall NAT state tables before memory overwrites.",
        "5. Cloud & Email Servers: M365 Purview eDiscovery mailbox exports (.PST/.MBOX) and AWS S3 bucket access logs."
      ],
      "scenarios": [
        {
          "name": "Scenario 1: Suspect Deletes Files from an NVMe SSD Running Windows 11",
          "verdict": "TRIM Eradication",
          "verdictClass": "verdict-offence",
          "facts": "A suspect deletes embezzlement spreadsheets from an NVMe SSD. The machine stays on for 2 hours before seizure.",
          "legal": "PERMANENTLY ZEROED. Windows sends the ATA TRIM command immediately. The SSD controller's background garbage collection resets those NAND flash blocks to zeros. Carving returns only blank 0x00 bytes."
        },
        {
          "name": "Scenario 2: Tracing Spoofed BEC Email Headers",
          "verdict": "Attacker IP Unmasked",
          "verdictClass": "verdict-safe",
          "facts": "An employee receives an email appearing to come from the CEO. The examiner parses RFC 5322 headers from the bottom up.",
          "legal": "FORGERY EXPOSED. The lowest Received header reveals the message originated from an IP in Nigeria, while SPF and DKIM both failed."
        }
      ],
      "forensics": [
        "1. Cut power immediately on machines containing SSDs to stop TRIM garbage collection.",
        "2. Apply litigation holds on cloud mailboxes before notifying suspects.",
        "3. Extract mobile databases with companion -wal and -shm files."
      ],
      "precedents": "State of Maharashtra v. Dr. Praful B. Desai (Supreme Court of India, 2003) — Approved video and digital media recording as admissible primary evidence."
    },
    "df_hashing": {
      "title": "Official Topic 8: hash value generation",
      "subtitle": "MD5 vs SHA-256 • Avalanche Effect • Three-Way Verification Equation • Section 63 BSA 2023",
      "quote": "A cryptographic hash is an unbreakable mathematical seal. If even 1 bit changes across a 4TB drive, the SHA-256 hash changes completely.",
      "nature": "Cryptographic Evidence Authentication Mandate",
      "forum": "Judicial Courts of Law & Forensic Science Laboratories",
      "penalty": "Exclusion of digital evidence under Bharatiya Sakshya Adhiniyam 2023 if hashes do not match.",
      "ingredients": [
        "1. One-Way Property: Impossible to calculate the original input message from its hash output.",
        "2. Avalanche Effect: Changing a single character alters over 50% of the output hex characters.",
        "3. Three-Way Verification Formula: Hash(Source Drive) == Hash(Acquired E01) == Hash(Working Copy).",
        "4. Algorithm Standard: SHA-256 is mandatory; MD5 is deprecated due to collision attacks.",
        "5. Section 63 BSA 2023 Certificate: Mandatory legal affidavit signed by the examiner certifying system functionality and matching hashes."
      ],
      "scenarios": [
        {
          "name": "Scenario 1: One Byte Modified During Laboratory Mounting",
          "verdict": "Hash Mismatch & Rejection",
          "verdictClass": "verdict-offence",
          "facts": "An examiner accidentally mounts an image in read-write mode. A single 0x01 byte is written to the image file.",
          "legal": "INTEGRITY DESTROYED. When the verification hash is computed for court, it fails to match the acquisition hash. The defense proves the exhibit was modified in the laboratory, disqualifying the evidence."
        },
        {
          "name": "Scenario 2: Matching SHA-256 Hashes Backed by Section 63 Certificate",
          "verdict": "Conclusive Evidence",
          "verdictClass": "verdict-safe",
          "facts": "The examiner submits identical SHA-256 acquisition and verification hashes accompanied by a certified Section 63 BSA affidavit.",
          "legal": "PERFECT ADMISSIBILITY. Mathematical proof confirms zero bits were altered, satisfying judicial thresholds under Indian law."
        }
      ],
      "forensics": [
        "1. Compute SHA-256 immediately upon acquisition and archive the log file in the case docket.",
        "2. Always mount forensic images using read-only mounting utilities (e.g. Arsenal Image Mounter).",
        "3. Draft Section 63 BSA certificate detailing make, model, write-blocker, and hash values."
      ],
      "precedents": "Shafhi Mohammad v. State of Himachal Pradesh (Supreme Court of India, 2018) — Highlighted procedural flexibility while reinforcing cryptographic authenticity."
    },
    "df_recovery_carving": {
      "title": "Official Topic 9: Methods of Data Recovery and Carving",
      "subtitle": "NTFS $MFT Resident Files • FAT32 0xE5 Undeletion • Magic Bytes Signatures • Scalpel Config",
      "quote": "When a suspect formats a drive and clears the file table, file carving retrieves the raw digital fossils from unallocated sectors.",
      "nature": "Technical Data Recovery & Carving Standard",
      "forum": "Digital Forensics Examination Laboratories",
      "penalty": "Corrupted extractions on fragmented files unless format-specific semantic validation is applied.",
      "ingredients": [
        "1. NTFS $MFT Internals: 1024-byte record layout; resident files (&le; 700 bytes) recovered 100% directly from MFT.",
        "2. FAT32 0xE5 Deletion: Replacing first letter with 0xE5 while data stays 100% on disk; undeletion walkthrough.",
        "3. Magic Bytes Recognition: Scanning for headers (JPEG FF D8 FF, PNG 89 50 4E 47, PDF %PDF, ZIP 50 4B 03 04).",
        "4. Terminal Footer Recognition: Locating footers (JPEG FF D9, PDF %%EOF) to calculate exact file length.",
        "5. Smart Carving: Validating internal Huffman tables or EXIF tags to resolve fragmented cluster gaps."
      ],
      "scenarios": [
        {
          "name": "Scenario 1: Recovering Extortion PDF from a Quick-Formatted USB",
          "verdict": "100% Recovery",
          "verdictClass": "verdict-safe",
          "facts": "A suspect formats a USB drive to destroy a contract PDF. The examiner runs Scalpel targeting '%PDF' to '%%EOF'.",
          "legal": "FULL RECOVERY. Quick formatting merely clears allocation tables; raw PDF clusters in unallocated space remained untouched. Scalpel reconstructed the PDF completely."
        },
        {
          "name": "Scenario 2: Fragmented Video Carving Corrupts File",
          "verdict": "Corrupted Payload",
          "verdictClass": "verdict-offence",
          "facts": "A large 2GB MP4 video was scattered across fragmented clusters. A simple header-footer carver extracts interleaved clusters from other files.",
          "legal": "CORRUPTED FILE. Dumb carvers fail on fragmented data. Advanced carving requires parsing MP4 atom boxes (moov, mdat) to rebuild contiguous video frames."
        }
      ],
      "forensics": [
        "1. Configure Scalpel / Foremost with specific hex patterns and reasonable file size boundaries.",
        "2. Validate all carved files using automated file type verification (Linux 'file' command and libmagic).",
        "3. Cross-reference carved files with $UsnJrnl entries to establish original filenames and deletion timestamps."
      ],
      "precedents": "State of Maharashtra v. Dr. Praful B. Desai (Supreme Court of India, 2003) — Affirmed admissibility of recovered digital media records."
    },
    "df_analytical_techniques": {
      "title": "Official Topic 10: analytical techniques for analyzing digital data...",
      "subtitle": "metadata examination • keyword searches • timeline creation • log correlation • pattern analysis",
      "quote": "True forensic expertise lies in correlating hidden metadata and event logs to unmask deception and demonstrate criminal intent.",
      "nature": "Digital Evidence Analytical Standard",
      "forum": "Cyber Crime Incident Response & High-Level Forensic Labs",
      "penalty": "Failing to detect timestomping allows forged alibis and backdated malware to mislead court proceedings.",
      "ingredients": [
        "1. Metadata Examination: Extracting satellite GPS latitude/longitude and camera serials from JPEG EXIF.",
        "2. Timestomp Detection: Comparing $STANDARD_INFORMATION ($SI) timestamps against kernel-controlled $FILE_NAME ($FN) timestamps.",
        "3. Keyword Searches & Regex: Running regular expressions for PAN, Aadhaar, credit cards, and searching ASCII/Unicode simultaneously.",
        "4. Timeline Creation: Generating Plaso super-timelines merging filesystem MACE, browser history, USB mounts, and event logs.",
        "5. Log Correlation: Correlating Windows Event IDs 4624 (Logon Types), 4625, 4688, 7045, and 1102 (Log Cleared)."
      ],
      "scenarios": [
        {
          "name": "Scenario 1: Malware Timestamps Forged to Match 2018 System Binaries",
          "verdict": "Forgery Detected",
          "verdictClass": "verdict-offence",
          "facts": "A malware binary in System32 displays a creation date of 2018 in Windows Explorer. Examination of $MFT shows $SI is 2018, but $FN is October 2026.",
          "legal": "TIMESTOMP PROVEN. The discrepancy between $SI and $FN conclusively proves the file was retroactively backdated using anti-forensic timestomping utilities."
        },
        {
          "name": "Scenario 2: Tracing an Insider Data Heist Minute-by-Minute",
          "verdict": "Guilt Established",
          "verdictClass": "verdict-safe",
          "facts": "Plaso super-timeline shows: 14:02 Event 4624 (Logon Type 2) &rarr; 14:05 USB mounted &rarr; 14:07 LNK shortcut created for confidential financial database &rarr; 14:09 USB disconnected.",
          "legal": "CONCLUSIVE NARRATIVE. The super-timeline provides an unbroken chronological sequence of actions proving the suspect logged in, plugged in a thumb drive, copied the database, and ejected the drive."
        }
      ],
      "forensics": [
        "1. Always parse both $SI and $FN attributes when analyzing suspect Windows executables.",
        "2. Check for fractional nanosecond zeros (.0000000), which indicate programmatic manipulation.",
        "3. Correlate host Event 4624 (Type 10) with external router firewall NAT translation tables."
      ],
      "precedents": "Cosmos Bank Cyber Heist (Pune, 2018) — Log correlation across ATM switch logs, malware memory dumps, and SWIFT servers uncovered the coordinated transnational attack."
    },
    "df_tools_evaluation": {
      "title": "Official Topic 11: Tools used for analysis and evaluation of digital evidences",
      "subtitle": "Autopsy • Magnet AXIOM • EnCase • Volatility 3 • Wireshark • Dual-Tool Cross-Validation",
      "quote": "Forensic software must be scientifically validated to withstand the highest levels of judicial scrutiny.",
      "nature": "Laboratory Tool Qualification Standard • ISO/IEC 17025",
      "forum": "National Accreditation Board for Testing and Calibration Laboratories (NABL)",
      "penalty": "Unvalidated software results in evidence dismissal under judicial cross-examination.",
      "ingredients": [
        "1. Autopsy & The Sleuth Kit: Open-source baseline suite with Lucene keyword indexing, ingest modules, and timeline analysis.",
        "2. Magnet AXIOM: Commercial artifact-first suite for concurrent computer, mobile, and cloud analysis with link analysis.",
        "3. EnCase Forensic: Court-proven evidence examination with EnScript automation and raw hex viewing.",
        "4. Volatility 3: Industry standard for volatile RAM triage, kernel data structures, and injected shellcode.",
        "5. Dual-Tool Validation: Verifying critical findings with two independent tools to defeat defense challenges under cross-examination."
      ],
      "scenarios": [
        {
          "name": "Scenario 1: Cross-Validation with Autopsy and EnCase",
          "verdict": "Gold Standard Evidence",
          "verdictClass": "verdict-safe",
          "facts": "The forensic examiner runs both Autopsy and EnCase on an acquired E01 image. Both suites independently extract the identical deleted email with matching timestamps and MD5 hashes.",
          "legal": "IMPREGNABLE FINDINGS. Dual-tool cross-validation satisfies ISO/IEC 17025 laboratory standards, completely withstanding defense technical challenges."
        },
        {
          "name": "Scenario 2: Custom Unverified Script Used to Extract Evidence",
          "verdict": "Evidence Challenged",
          "verdictClass": "verdict-offence",
          "facts": "An examiner writes a quick Python script to parse a proprietary chat database without conducting validation tests or error-rate benchmarking.",
          "legal": "EVIDENTIARY VULNERABILITY. Under Daubert / Section 63 BSA standards, proprietary unvalidated scripts with unknown error rates are susceptible to procedural disqualification in court."
        }
      ],
      "forensics": [
        "1. Maintain formal tool qualification and validation records under ISO/IEC 17025.",
        "2. Cross-verify critical findings using at least two independent forensic tools.",
        "3. Archive full command-line outputs, configuration files, and tool version numbers in the laboratory case docket."
      ],
      "precedents": "Niranjan Hemchandra Sashittal v. State of Maharashtra (Supreme Court of India, 2013) — Reaffirms the necessity for rigorous scientific testing standards in criminal prosecutions."
    }
  }
};
