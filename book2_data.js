window.book2Data = {
  "id": "book2",
  "title": "Book 2: Digital Forensics",
  "shortTitle": "Digital Forensics (Official Syllabus)",
  "fullTitle": "DIGITAL FORENSICS: OFFICIAL EXAMINATION PRACTICAL TREATISE",
  "badge": "DSSSB JSA (Cyber Forensic) — Book 2",
  "category": "Official Syllabus Practical Investigation & Laboratory Tools",
  "description": "Complete word-for-word syllabus practical guide covering Branches, Crime Scenes, Documentation, Chain of Custody, SOPs, Acquisition Tools, Data Sources, Hashes, Carving, Analytical Techniques & Tools.",
  "stats": "11 Topics • 20 Spreads • 40 Pages",
  "coverClass": "book2-theme",
  "tocSubtitle": "DSSSB JSA (Cyber Forensic) Digital Forensics Official Syllabus Guide",
  "labBtnLong": "Forensics Lab",
  "labBtnShort": "Evidence Lab",
  "labDrawerTitle": "Digital Forensics Official Syllabus Practical Lab",
  "labDrawerSubtitle": "Standard Operating Procedures, Acquisition Tools, File Carving & Analytical Frameworks",
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
        "runningHead": "Official Examination Frontispiece",
        "content": "\n        <div class=\"cover-border-box\">\n          <div>\n            <div class=\"cover-title-badge\" style=\"background: rgba(14, 116, 144, 0.12); color: #0e7490; border-color: #0e7490;\">Government of NCT of Delhi</div>\n            <div style=\"font-family: var(--font-title); font-size: 0.92rem; font-weight: 700; color: var(--text-heading); margin-bottom: 6px;\">\n              Delhi Subordinate Services Selection Board\n            </div>\n            <div style=\"margin: 6px 0;\">\n              <svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" style=\"color: #0284c7; display: inline-block;\">\n                <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n                <path d=\"m10 15 5-3-5-3v6z\"></path>\n                <line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line>\n                <line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line>\n              </svg>\n            </div>\n            <h2 style=\"font-family: var(--font-title); font-size: 1.15rem; color: #0369a1; margin-bottom: 2px;\">\n              Junior Scientific Assistant\n            </h2>\n            <div style=\"font-size: 0.88rem; font-weight: 700; color: var(--text-heading); margin-bottom: 6px;\">\n              (Digital Forensics Discipline)\n            </div>\n          </div>\n\n          <ul class=\"cover-features-list\">\n            <li><strong>Official Syllabus Directives:</strong> Word-for-word alignment with official Delhi FSL & DSSSB examination notifications.</li>\n            <li><strong>Practical Investigation Focus:</strong> Step-by-step procedures for seizing hard drives, mobile phones, servers, and volatile RAM.</li>\n            <li><strong>Failure & Challenge Scenarios:</strong> What goes wrong when steps are missed (SSD TRIM wiping, BitLocker lockouts, bad sectors).</li>\n            <li><strong>Evidence Admissibility:</strong> Cryptographic SHA-256 verification and Section 63 BSA 2023 certification.</li>\n            <li><strong>Laboratory Workflows:</strong> Magic Bytes file carving, NTFS $MFT parsing, and Plaso super-timeline correlation.</li>\n          </ul>\n\n          <div style=\"font-size: 0.74rem; color: var(--text-muted); border-top: 1px solid var(--ui-border); padding-top: 5px;\">\n            Central Forensic Science Laboratory (CFSL) • FSL Delhi Laboratory Manual<br>\n            <strong>2026 Official Syllabus Practical Edition • Book II</strong>\n          </div>\n        </div>\n      "
      },
      "right": {
        "pageNumber": 2,
        "runningHead": "DSSSB Official Textbook Title Page",
        "content": "\n        <div class=\"cover-border-box\">\n          <div>\n            <span class=\"badge-exam\" style=\"background: rgba(14, 116, 144, 0.15); color: #0284c7; border: 1px solid #0284c7;\">Book 2: Official Syllabus</span>\n            <h1 class=\"cover-h1\" style=\"color: #0369a1; font-size: 1.18rem; margin: 6px 0;\">\n              DIGITAL FORENSICS: OFFICIAL EXAMINATION TREATISE\n            </h1>\n            <div style=\"font-size: 0.84rem; color: var(--text-muted); font-style: italic; margin-bottom: 8px;\">\n              Practical Step-by-Step Field Manual & Laboratory Examination Guide\n            </div>\n            <div style=\"height: 2px; width: 50px; background: #0284c7; margin: 0 auto 10px;\"></div>\n          </div>\n\n          <div class=\"book-callout\" style=\"text-align: left; margin: 0 0 8px 0; font-size: 0.78rem; border-left-color: #0284c7; line-height: 1.35;\">\n            <strong>Exact Official Syllabus Coverage:</strong> Branches of Digital Forensics • Investigation of digital crime scenes • maintaining proper documentation • chain of custody • Standard Operating Procedures for Handling, Preservation, Acquisition, packaging, labeling & Transportation • digital data acquisition tools • identifying and collecting data from hard drives, mobile, network, cloud, email • hash value generation • Methods of Data Recovery and Carving • analytical techniques • Tools used for analysis and evaluation.\n          </div>\n\n          <div style=\"background: var(--page-bg-subtle); padding: 6px 10px; border-radius: 6px; border: 1px solid var(--ui-border); font-size: 0.76rem; text-align: left; line-height: 1.35;\">\n            <strong>Practical Pedagogical Model:</strong> Every topic explains <em>Why we do it</em>, <em>How to do it step-by-step</em>, <em>What can go wrong if a step is skipped</em>, and <em>Real-world case scenarios</em>.\n          </div>\n\n          <div>\n            <button class=\"cover-btn-start\" style=\"background: linear-gradient(135deg, #0284c7, #0369a1);\" onclick=\"document.getElementById('nextBtn').click();\">\n              Open Book & View Official Syllabus &rarr;\n            </button>\n          </div>\n        </div>\n      "
      }
    },
    {
      "spreadId": 1,
      "left": {
        "pageNumber": 3,
        "runningHead": "Official Syllabus Architecture",
        "content": "\n        <h2 style=\"font-size: 1.02rem; margin-top: 0; color: #0369a1; border-bottom: 1px solid #0284c7; padding-bottom: 2px;\">Official Syllabus Architecture</h2>\n        <p style=\"font-size: 0.76rem; margin-bottom: 5px; color: var(--text-muted);\">Exact word-for-word syllabus mapping extracted from official DSSSB notification:</p>\n        \n        <div style=\"font-size: 0.71rem; line-height: 1.26; background: var(--page-bg-subtle); padding: 6px 8px; border-radius: 6px; border: 1px solid var(--ui-border);\">\n          <div style=\"margin-bottom: 3px;\"><strong style=\"color: #0284c7;\">1. Branches of Digital Forensics:</strong> Disk, RAM/Memory, Mobile (iOS/Android), Network, Cloud, Database, and Email forensics.</div>\n          <div style=\"margin-bottom: 3px;\"><strong style=\"color: #0284c7;\">2. Investigation of digital crime scenes:</strong> Arrival, perimeter control, videography under BNSS 2023, RF Faraday shielding, and Live vs Dead triage.</div>\n          <div style=\"margin-bottom: 3px;\"><strong style=\"color: #0284c7;\">3. maintaining proper documentation:</strong> Contemporaneous logbooks, incident notes, and Seizure Memos (Panchnama) with witness signatures.</div>\n          <div style=\"margin-bottom: 3px;\"><strong style=\"color: #0284c7;\">4. chain of custody:</strong> Cradle-to-grave transfer logs, tamper-evident seals, preventing custody gaps, and surviving courtroom defense challenges.</div>\n          <div style=\"margin-bottom: 3px;\"><strong style=\"color: #0284c7;\">5. Standard Operating Procedures for Handling, Preservation, Acquisition, packaging, labeling & Transportation of electronic evidence:</strong> ESD safety, Faraday packaging, write-blocking, transit hazard avoidance.</div>\n          <div style=\"margin-bottom: 3px;\"><strong style=\"color: #0284c7;\">6. digital data acquisition tools:</strong> Hardware write-blockers (Tableau, Falcon), software imagers (FTK Imager, dc3dd), and RAW vs E01 vs AFF formats.</div>\n          <div style=\"margin-bottom: 3px;\"><strong style=\"color: #0284c7;\">7. identifying and collecting data from relevant digital sources:</strong> Hard drives, SSD TRIM implications, mobile devices, network logs, cloud storage, and email servers.</div>\n          <div style=\"margin-bottom: 3px;\"><strong style=\"color: #0284c7;\">8. hash value generation:</strong> MD5 vs SHA-256, collision resistance, the 3-way verification equation, and Section 63 BSA 2023 certification.</div>\n          <div style=\"margin-bottom: 3px;\"><strong style=\"color: #0284c7;\">9. Methods of Data Recovery and Carving:</strong> NTFS $MFT resident files, FAT32 0xE5 undeletion, Magic Bytes hex signatures, and fragmented carving.</div>\n          <div style=\"margin-bottom: 3px;\"><strong style=\"color: #0284c7;\">10. analytical techniques for analyzing digital data:</strong> Metadata examination (EXIF), timestomp detection ($SI vs $FN), keyword regex queries, Plaso super-timelines, and Windows Event IDs.</div>\n          <div><strong style=\"color: #0284c7;\">11. Tools used for analysis and evaluation of digital evidences:</strong> Autopsy, Magnet AXIOM, EnCase, Volatility 3, Wireshark, and laboratory reporting.</div>\n        </div>\n      "
      },
      "right": {
        "pageNumber": 4,
        "runningHead": "Digital Forensics: Practical Meaning",
        "content": "\n        <h2>Digital Forensics: Practical Meaning</h2>\n        \n        <h3>A. What Digital Forensics Actually Is</h3>\n        <p><strong>Digital Forensics</strong> is the scientific identification, collection, preservation, examination, analysis, and presentation of electronic data in a manner that proves facts beyond reasonable doubt in a court of law.</p>\n        <p>Unlike physical evidence that sits unchanged on a shelf, digital data is invisible, fragile, and volatile. If you power on a seized laptop just to view a folder, the operating system writes thousands of files, updates registry keys, alters timestamps, and can overwrite deleted evidence!</p>\n\n        <div class=\"book-callout\" style=\"border-left-color: #0284c7;\">\n          <strong>The Golden Rule:</strong> Never examine or analyze the original physical evidence media. Always make an exact, bit-for-bit forensic clone and conduct all analysis on the copy.\n        </div>\n\n        <h3>B. Locard's Exchange Principle in Practice</h3>\n        <p><em>\"Every contact leaves a trace.\"</em> How does this apply to cybercrime?</p>\n        <ul style=\"font-size: 0.79rem; line-height: 1.34; margin-left: 14px;\">\n          <li>When an employee plugs in an unauthorized USB thumb drive to copy confidential files, Windows records the USB serial number, drive vendor, and timestamp in the registry under <code>USBSTOR</code>. Even if the USB is thrown into the river, the computer proves it was connected!</li>\n          <li>When a suspect deletes an incriminating PDF, Windows only marks the cluster as free—the actual document payload remains intact in unallocated sectors until overwritten.</li>\n        </ul>\n\n        <h3>C. The Order of Volatility (RFC 3227)</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          Collect perishable evidence first: <strong>1. CPU Registers/Cache</strong> &rarr; <strong>2. RAM (Memory)</strong> &rarr; <strong>3. Network State & Sockets</strong> &rarr; <strong>4. Hard Disks / SSDs</strong> &rarr; <strong>5. Remote Cloud Logs & Backups</strong>.\n        </p>\n      "
      }
    },
    {
      "spreadId": 2,
      "left": {
        "pageNumber": 5,
        "runningHead": "Topic 1: Branches — Disk Forensics",
        "content": "\n        <h2>Topic 1: Branches of Digital Forensics</h2>\n        <h3>1.1 Disk Forensics (Storage Media)</h3>\n        <p><strong>Disk Forensics</strong> is the extraction and analysis of evidence stored on persistent magnetic and solid-state drives (HDDs, SSDs, USB flash drives, SD cards).</p>\n\n        <div class=\"book-figure\">\n          <img src=\"assets/evidence_hardware.jpg\" alt=\"Drive Extraction & Hardware Bridge\">\n          <div class=\"book-figure-caption\">\n            <span>Figure 1.1: Physical Drive Inspection & Forensic Bridge Interfacing</span>\n            <span>Bit-Stream Duplicate Acquisition</span>\n          </div>\n        </div>\n\n        <h3>A. Sectors, Clusters, and Slack Space</h3>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><strong>Sector:</strong> Smallest physical storage unit on a drive (512 bytes or 4096 bytes).</li>\n          <li><strong>Cluster:</strong> Smallest allocation unit used by the file system (typically 4 KB = 8 sectors). If a file is only 150 bytes, Windows still allocates the whole 4096-byte cluster!</li>\n          <li><strong>Slack Space:</strong> The leftover empty space between the physical end of the file and the end of the cluster. Criminals hide messages here, and remnants of previously deleted files linger here.</li>\n          <li><strong>Unallocated Space:</strong> Clusters marked as \"free to write\" by the file system. Deleted files live here until overwritten.</li>\n          <li><strong>HPA & DCO:</strong> Host Protected Area and Device Configuration Overlay—hidden drive areas that standard operating systems cannot see, used by malware to conceal data.</li>\n        </ul>\n      "
      },
      "right": {
        "pageNumber": 6,
        "runningHead": "Topic 1: Branches — RAM / Memory Forensics",
        "content": "\n        <h2>Topic 1: Branches of Digital Forensics</h2>\n        <h3>1.2 Memory (RAM) Forensics: Capturing Live Crime</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.35; margin-bottom: 6px;\">\n          Your computer has two memories: the <strong>hard drive</strong> is like a notebook (retains data when closed); <strong>RAM</strong> is like a whiteboard (erased the instant power is removed). RAM forensics captures live, running evidence before it evaporates.\n        </p>\n\n        <div style=\"margin-bottom: 8px;\">\n          <div style=\"font-size: 0.79rem; font-weight: 700; color: #0284c7; margin-bottom: 5px;\">\n            🔍 What Lives ONLY in RAM — and Why You Must Capture It First:\n          </div>\n\n          <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 5px 9px; border-radius: 4px; margin-bottom: 5px;\">\n            <div style=\"font-weight: 700; color: #0284c7; font-size: 0.79rem; margin-bottom: 2px;\">\n              🔐 1. The Safe Combination (BitLocker / FileVault Keys)\n            </div>\n            <p style=\"font-size: 0.76rem; line-height: 1.32; margin: 0;\">\n              Your hard drive is like a locked bank vault. BitLocker &amp; FileVault are the locks. When a user logs in, the master combination (decryption key) is loaded into <strong>RAM only</strong> so the computer can read files. Turn off power &rarr; the key vanishes forever and the drive stays permanently locked.\n            </p>\n          </div>\n\n          <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 5px 9px; border-radius: 4px; margin-bottom: 5px;\">\n            <div style=\"font-weight: 700; color: #0284c7; font-size: 0.79rem; margin-bottom: 2px;\">\n              🥷 2. The Invisible Burglar (Fileless Malware)\n            </div>\n            <p style=\"font-size: 0.76rem; line-height: 1.32; margin: 0;\">\n              Normal viruses leave tools (files) on the drive. Fileless malware brings no files — it hijacks legitimate Windows tools (PowerShell/WMI) directly inside RAM. An antivirus scanning the disk finds nothing. The live RAM dump is your <strong>only evidence</strong> of the attack.\n            </p>\n          </div>\n\n          <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 5px 9px; border-radius: 4px; margin-bottom: 5px;\">\n            <div style=\"font-weight: 700; color: #0284c7; font-size: 0.79rem; margin-bottom: 2px;\">\n              💬 3. Plaintext Chats Before They Vanish (WhatsApp / Signal Web)\n            </div>\n            <p style=\"font-size: 0.76rem; line-height: 1.32; margin: 0;\">\n              Encrypted messaging apps store scrambled text on the hard drive. But to display messages on screen, the web browser decodes them into readable text in RAM. Power off = decrypted chats are erased; only unreadable disk ciphertext remains.\n            </p>\n          </div>\n\n          <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 5px 9px; border-radius: 4px; margin-bottom: 5px;\">\n            <div style=\"font-weight: 700; color: #0284c7; font-size: 0.79rem; margin-bottom: 2px;\">\n              📞 4. The Live Phone Call (Active Attacker C2 IP Addresses)\n            </div>\n            <p style=\"font-size: 0.76rem; line-height: 1.32; margin: 0;\">\n              Malware communicates actively with the attacker's Command &amp; Control (C2) server. While running, the remote IP address exists in active RAM network sockets. Shutting down ends the call and destroys your primary investigative lead.\n            </p>\n          </div>\n        </div>\n\n        <h3 style=\"font-size: 0.88rem; margin: 4px 0 2px 0;\">A. Step-by-Step: Capturing RAM on Live Machine</h3>\n        <ol style=\"font-size: 0.76rem; line-height: 1.32; margin-left: 16px; margin-bottom: 5px;\">\n          <li><strong>Insert Clean Forensic USB:</strong> Use a write-tested drive containing static CLI binaries (<code>winpmem.exe</code> or <code>DumpIt.exe</code>). Never copy tools onto the suspect's local drive!</li>\n          <li><strong>Stream RAM Directly:</strong> <code>winpmem.exe -o E:\\case101_ram.raw</code> (captures memory straight to evidence media).</li>\n          <li><strong>Immediate Hash:</strong> Compute SHA-256 immediately for court admissibility under Sec 63 BSA 2023.</li>\n        </ol>\n\n        <div style=\"background: rgba(239, 68, 68, 0.07); border-left: 3px solid #ef4444; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.75rem; line-height: 1.3; margin-bottom: 5px;\">\n          <strong style=\"color: #b91c1c;\">⚠️ Fatal Mistake &amp; Consequence:</strong><br>\n          An investigator reboots to enter BIOS or cuts power. Capacitors discharge in milliseconds; all BitLocker keys, plain chats, and fileless malware disappear forever.\n        </div>\n\n        <h3 style=\"font-size: 0.88rem; margin: 4px 0 2px 0;\">B. RAM Analysis with Volatility 3</h3>\n        <p style=\"font-size: 0.75rem; line-height: 1.3; margin: 0;\">\n          Inspect process trees to uncover hidden malicious child processes:<br>\n          <code>vol -f case101_ram.raw windows.pstree</code>\n        </p>\n      "
      }
    },
    {
      "spreadId": 3,
      "left": {
        "pageNumber": 7,
        "runningHead": "Topic 1: Branches — Mobile & Network Forensics",
        "content": "\n        <h2>Topic 1: Branches of Digital Forensics</h2>\n        \n        <h3>1.3 Mobile Device Forensics (iOS & Android)</h3>\n        <p>Smartphones hold GPS tracks, call logs, selfies, and chat histories. However, they present two formidable security barriers:</p>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><strong>App Sandboxing:</strong> Each app runs in an isolated directory. Apps cannot read other apps' databases without root/jailbreak permissions.</li>\n          <li><strong>File-Based Encryption (FBE):</strong> Each file is encrypted with a unique key tied to hardware security chips (Secure Enclave on iPhone, TrustZone on Android).</li>\n        </ul>\n\n        <div class=\"book-callout\" style=\"border-left-color: #0284c7;\">\n          <strong>The BFU (Before First Unlock) Nightmare:</strong><br>\n          If an unlocked seized phone runs out of battery, it restarts into <strong>BFU</strong> state. In BFU mode, encryption keys are purged from memory. Even high-end forensic workstations cannot unlock the phone without the user passcode! Always keep phones powered using power banks inside Faraday bags.\n        </div>\n\n        <h3>1.4 Network Forensics: Traffic Analysis</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          Network forensics captures evidence in transit. Intercept traffic using physical <strong>Hardware TAPs</strong> or switch <strong>SPAN mirror ports</strong>. Inspect raw PCAP captures in <strong>Wireshark</strong>. When traffic is encrypted via HTTPS, use <strong>JA3/JA4 TLS Fingerprinting</strong> to identify the malware client handshake parameters without needing decryption!\n        </p>\n      "
      },
      "right": {
        "pageNumber": 8,
        "runningHead": "Topic 1: Branches — Cloud, DB & Email Forensics",
        "content": "\n        <h2>Topic 1: Branches of Digital Forensics</h2>\n\n        <h3>1.5 Cloud Forensics</h3>\n        <p>In cloud investigations, you cannot physically seize AWS, Azure, or Google Cloud servers across sovereign borders:</p>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><strong>IaaS (e.g. AWS EC2):</strong> You can take instant point-in-time virtual disk snapshots (EBS snapshots) and mount them read-only on a forensic workstation.</li>\n          <li><strong>CloudTrail Logs:</strong> Immutable JSON audit trails recording every API call, user login, S3 download, and IP address.</li>\n          <li><strong>Ephemeral Containers:</strong> Docker containers spin up, execute a crime, and vanish. Centralized real-time log streaming (Splunk/CloudWatch) is mandatory.</li>\n        </ul>\n\n        <h3>1.6 Database Forensics</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          In financial fraud, suspects alter balances in SQL tables. Forensic examiners recover fraudulent modifications from <strong>Transaction Logs (.LDF / Write-Ahead Logs)</strong>, which record before-and-after values, user SIDs, and timestamps before changes commit to the main database file.\n        </p>\n\n        <h3>1.7 Email Forensics</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          In Business Email Compromise (BEC) and phishing, the \"From\" line is easily forged. Read RFC 5322 headers <strong>from the bottom up</strong>: the lowest <code>Received:</code> line reveals the true originating IP address. Verify <strong>SPF</strong> (sender IP authorization), <strong>DKIM</strong> (cryptographic body signature), and inspect hidden mailbox forwarding rules.\n        </p>\n      "
      }
    },
    {
      "spreadId": 4,
      "left": {
        "pageNumber": 9,
        "runningHead": "Topic 2: Crime Scene Investigation — Scene Control",
        "content": "\n        <h2>Topic 2: Investigation of digital crime scenes</h2>\n        <h3>2.1 Arrival, Perimeter Control & Physical Securing</h3>\n        <p>The digital crime scene is extremely delicate. Mistakes made in the first 10 minutes can contaminate or erase conclusive evidence.</p>\n\n        <div class=\"book-figure\">\n          <img src=\"assets/forensic_lab.jpg\" alt=\"Crime Scene Digital Evidence Workstation\">\n          <div class=\"book-figure-caption\">\n            <span>Figure 2.1: On-Scene Digital Evidence Workstation</span>\n            <span>Preventing Physical and Remote Spoliation</span>\n          </div>\n        </div>\n\n        <h3>A. Step-by-Step Scene Securing Protocol</h3>\n        <ol style=\"font-size: 0.78rem; line-height: 1.36; margin-left: 16px;\">\n          <li><strong>Control All Occupants Immediately:</strong> Move suspects away from desks, keyboards, mice, and mobile phones. Suspects may attempt to hit key combinations (e.g. emergency wiper scripts), smash drives, or click \"Cancel\".</li>\n          <li><strong>Mandatory Videography under Section 105 BNSS 2023:</strong> The Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023 legally mandates that the entire search, seizure, and seal application must be recorded on video.</li>\n          <li><strong>Scan the Environment for Peripherals:</strong> Search for wireless dongles, hidden micro-SD cards, external SSDs under mousepads, NAS drives, and home Wi-Fi routers.</li>\n        </ol>\n      "
      },
      "right": {
        "pageNumber": 10,
        "runningHead": "Topic 2: Crime Scene — RF Isolation & Photography",
        "content": "\n        <h2>Topic 2: Investigation of digital crime scenes</h2>\n        <h3>2.2 Radio Frequency (RF) Isolation & In-Situ Photography</h3>\n\n        <h3>A. Why Mobile Devices Wipe Themselves Remotely</h3>\n        <p>An accomplice outside the scene can log into Apple iCloud (\"Find My iPhone\") or Google Account (\"Find My Device\") and issue an instantaneous remote factory reset command. When the phone receives the cellular or Wi-Fi signal, it zeroes out its encryption keys in 3 seconds!</p>\n\n        <div class=\"book-callout\" style=\"border-left-color: #0284c7;\">\n          <strong>Step-by-Step Radio Frequency (RF) Isolation:</strong><br>\n          1. <strong>Do Not Power Off:</strong> Turning the phone off puts it into BFU mode, locking encryption keys permanently.<br>\n          2. <strong>Enable Airplane Mode:</strong> Swipe down on the lock screen and turn on Airplane Mode. Confirm Wi-Fi and Bluetooth are OFF.<br>\n          3. <strong>Enclose in a Certified Faraday Bag:</strong> Place inside a dual-layer copper-shielded Faraday pouch. Fold flap twice and seal.<br>\n          4. <strong>Test the Shielding:</strong> Call the suspect phone from an investigator's phone. If it rings, the Faraday bag has a leak—double-bag it immediately!\n        </div>\n\n        <h3>B. In-Situ Photographic Protocol Before Touching Anything</h3>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><strong>Wide-Angle Room Views:</strong> Room layout, desk position, power cords, and network cables.</li>\n          <li><strong>Straight-on Monitor Capture:</strong> Photograph screens straight-on, capturing active windows, chat dialogues, and system tray icons.</li>\n          <li><strong>Cable Mapping:</strong> Photograph rear PC panels before unplugging. Affix numbered, color-coded stickers to each wire and its socket so it can be reassembled identically in the laboratory.</li>\n        </ul>\n      "
      }
    },
    {
      "spreadId": 5,
      "left": {
        "pageNumber": 11,
        "runningHead": "Topic 2: Crime Scene — Live Triage Protocol",
        "content": "\n        <h2>Topic 2: Investigation of digital crime scenes</h2>\n        <h3>2.3 Live System Triage Protocol: When Screen is ON</h3>\n        <p>If you approach a computer and the monitor is active and logged in, you must execute a live triage decision matrix.</p>\n\n        <div style=\"background: #f0fdf4; border: 1px solid #16a34a; padding: 7px 11px; border-radius: 4px; font-size: 0.79rem; line-height: 1.36; margin-bottom: 8px;\">\n          <strong style=\"color: #15803d;\">LIVE TRIAGE IS MANDATORY IF:</strong><br>\n          • <strong>Full-Disk Encryption is Active:</strong> BitLocker, FileVault, or VeraCrypt volumes are currently mounted and unlocked. If you pull the plug, the volume locks, and without the recovery key, data is permanently lost!<br>\n          • <strong>Active Network Exfiltration:</strong> Attacker is transferring stolen files over SSH/RDP.<br>\n          • <strong>Unsaved Volatile Evidence:</strong> Open chats, text files, or crypto wallets in RAM.\n        </div>\n\n        <h3>A. Step-by-Step Live Triage Workflow</h3>\n        <ol style=\"font-size: 0.78rem; line-height: 1.36; margin-left: 16px;\">\n          <li><strong>Prevent Screen Sleep:</strong> Gently move the mouse (or use a hardware mouse jiggler) to keep the screen active. Never click icons!</li>\n          <li><strong>Insert Clean Forensic Triage USB:</strong> Plug in a pre-configured thumb drive containing standalone CLI tools.</li>\n          <li><strong>Capture Volatile RAM First:</strong> Run <code>winpmem.exe -o E:\\mem.raw</code>. RAM holds the encryption keys!</li>\n          <li><strong>Extract BitLocker Recovery Key:</strong> Run <code>manage-bde -protectors -get C:</code>. Document the 48-digit recovery password immediately on paper and photograph it!</li>\n          <li><strong>Log Active Network Sockets:</strong> Run <code>netstat -ano > E:\\sockets.txt</code>.</li>\n        </ol>\n      "
      },
      "right": {
        "pageNumber": 12,
        "runningHead": "Topic 2: Crime Scene — Dead System Protocol",
        "content": "\n        <h2>Topic 2: Investigation of digital crime scenes</h2>\n        <h3>2.4 Dead (Powered-Off) System Protocol: When Screen is OFF</h3>\n\n        <div class=\"book-callout\" style=\"border-left-color: #dc2626; background: rgba(220, 38, 38, 0.05);\">\n          <strong style=\"color: #b91c1c;\">CARDINAL RULE: NEVER POWER ON A DEAD SYSTEM AT THE SCENE!</strong><br>\n          Turning on a computer boots the OS, modifying thousands of registry keys, creating swap files, overwriting unallocated clusters, and possibly executing auto-start anti-forensic wiper scripts.\n        </div>\n\n        <h3>A. Step-by-Step: How to Safely Cut Power</h3>\n        <p>If live triage is finished, or the drive is unencrypted and you must cut power:</p>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><strong>Desktop Workstation:</strong> <em>DO NOT</em> click Start &rarr; Shut Down (which writes shutdown artifacts to disk and triggers wiper scripts). <strong>Pull the AC power cord directly from the rear of the power supply unit (PSU)</strong> on the computer chassis. Do NOT pull from the wall socket (in case a UPS battery backup is connected!).</li>\n          <li><strong>Laptop with Removable Battery:</strong> Pull the AC charging cable first, then immediately remove the physical battery pack.</li>\n          <li><strong>Laptop with Built-in Battery:</strong> Press and hold the power button continuously for 10-12 seconds until all LEDs extinguish and fans stop.</li>\n        </ul>\n\n        <h3>B. Physical Drive Extraction</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          Once power is dead: Wear an anti-static wrist strap, open the chassis, disconnect SATA/NVMe ribbon cables gently, extract the drive, and immediately place it inside a metallized anti-static bag.\n        </p>\n      "
      }
    },
    {
      "spreadId": 6,
      "left": {
        "pageNumber": 13,
        "runningHead": "Topic 3: maintaining proper documentation",
        "content": "\n        <h2>Topic 3: maintaining proper documentation</h2>\n        <h3>3.1 Contemporaneous Field Notes & Incident Registry</h3>\n        <p>In criminal proceedings, undocumented evidence is inadmissible evidence. Contemporaneous notes recorded at the exact moment of seizure form the bedrock of courtroom testimony.</p>\n\n        <h3>A. What Defense Attorneys Look for in Cross-Examination</h3>\n        <p>Defense lawyers will challenge your memory months or years after the raid:</p>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><em>\"Officer, which exact drawer was this thumb drive in?\"</em></li>\n          <li><em>\"Was the laptop screen on or off when you walked into the room?\"</em></li>\n          <li><em>\"Who else entered the room while you were seizing the PC?\"</em></li>\n        </ul>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          If your notes don't state the exact drawer, screen state, and person list contemporaneously, the judge may treat your memory as unreliable!\n        </p>\n\n        <h3>B. Mandatory Case Logbook Elements</h3>\n        <div style=\"background: var(--page-bg-subtle); padding: 7px 11px; border-left: 3px solid #0284c7; font-size: 0.78rem; line-height: 1.35;\">\n          • Date, time synchronized to IST / UTC, and GPS coordinates.<br>\n          • Names and designations of all search team members.<br>\n          • Environmental conditions: Temperature, moisture, power status.<br>\n          • Specific physical location where each digital device was discovered.\n        </div>\n      "
      },
      "right": {
        "pageNumber": 14,
        "runningHead": "Topic 3: Documentation — Seizure Memo (Panchnama)",
        "content": "\n        <h2>Topic 3: maintaining proper documentation</h2>\n        <h3>3.2 Seizure Memo (Panchnama) under Section 105 BNSS 2023</h3>\n        <p>Prepared contemporaneously at the crime scene in the presence of two independent witnesses (Panchas):</p>\n        \n        <table class=\"statute-table\" style=\"font-size: 0.73rem; margin: 6px 0;\">\n          <thead>\n            <tr><th>Field Required</th><th>What to Record (Real Practical Example)</th></tr>\n          </thead>\n          <tbody>\n            <tr><td><strong>Exhibit Mark</strong></td><td>Unique code: e.g. <code>CFSL-2026-CY-001/Ex-A1</code>.</td></tr>\n            <tr><td><strong>Hardware Make & Model</strong></td><td>Western Digital Blue 1TB HDD, Model: WD10EZEX.</td></tr>\n            <tr><td><strong>Physical Serial Number</strong></td><td><code>WCC4N7KX8J1P</code> (Must match printed drive sticker!).</td></tr>\n            <tr><td><strong>Cosmetic Condition</strong></td><td>Scratched top cover, missing left screw, dented bezel.</td></tr>\n            <tr><td><strong>Seizure Location</strong></td><td>Top drawer of office table in Bedroom #2.</td></tr>\n            <tr><td><strong>Witness Signatures</strong></td><td>Signatures of both independent witnesses and seizing IO.</td></tr>\n          </tbody>\n        </table>\n\n        <h3>A. Why Documenting Cosmetic Scratches Protects You</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          <strong>Real Scenario:</strong> An investigator seizes a laptop with a cracked screen corner but forgets to note it in the seizure memo. In court, the defense claims: <em>\"The police dropped my client's laptop, causing a head crash that corrupted the hard drive and created fake evidence!\"</em> If the scratch was documented with photographs at the scene, the defense argument is immediately defeated!\n        </p>\n      "
      }
    },
    {
      "spreadId": 7,
      "left": {
        "pageNumber": 15,
        "runningHead": "Topic 4: chain of custody — Architecture",
        "content": "\n        <h2>Topic 4: chain of custody</h2>\n        <h3>4.1 Architecture & Courtroom Lifeline</h3>\n        <p>The <strong>Chain of Custody</strong> is a cradle-to-grave, unbroken chronological record detailing every single person who touched, moved, stored, or analyzed the evidence.</p>\n\n        <div class=\"book-callout\" style=\"border-left-color: #0284c7;\">\n          <strong>The Legal Standard:</strong> The prosecutor must prove to the Magistrate that Exhibit Ex-A1 presented in court today is the EXACT same physical drive seized from the suspect's desk on day one, and that no unauthorized person had access to modify it.\n        </div>\n\n        <h3>A. Mandatory Fields in the Custody Transfer Log</h3>\n        <p>Every time an exhibit changes hands, a log entry must be signed:</p>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><strong>Date & Exact Time:</strong> Synchronized to Indian Standard Time (IST / UTC).</li>\n          <li><strong>Released By:</strong> Full Name, Rank, and Signature of the person handing over.</li>\n          <li><strong>Received By:</strong> Full Name, Rank, and Signature of the recipient.</li>\n          <li><strong>Purpose of Transfer:</strong> e.g., \"Transit from Police Station to CFSL Lab for Bit-Stream Imaging\".</li>\n          <li><strong>Seal Integrity Status:</strong> \"Tamper Seal CFSL-DEL-9842 intact without tears\".</li>\n        </ul>\n      "
      },
      "right": {
        "pageNumber": 16,
        "runningHead": "Topic 4: chain of custody — Break in Custody",
        "content": "\n        <h2>Topic 4: chain of custody</h2>\n        <h3>4.2 Break in Custody Pitfalls & Tamper Sealing</h3>\n\n        <h3>A. What Happens If There Is a Break in Custody?</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          <strong>The Fatal Mistake:</strong> An investigator takes a seized hard drive home over the weekend and leaves it in his bedroom closet before submitting it to the forensic lab on Monday.<br>\n          <strong>Courtroom Repercussion:</strong> The defense cross-examines the officer: <em>\"Where was this drive between Friday 5 PM and Monday 10 AM? Who had access? Could a family member or third party have inserted a USB drive?\"</em> Because there is no official vault custody log for those 60 hours, the Judge excludes the evidence entirely!\n        </p>\n\n        <h3>B. Tamper-Evident Security Seals</h3>\n        <div class=\"book-callout\" style=\"border-left-color: #0284c7;\">\n          <strong>The Overlapping Signature Rule:</strong><br>\n          • Apply serialized red tamper-evident VOID tape across container openings.<br>\n          • The investigating officer and both independent witnesses must sign their full signatures across the tape boundary—half the signature on the tape, half on the box. Any peeling tears the signature and reveals a permanent <strong>\"VOID\"</strong> pattern, providing immediate proof of tampering!\n        </div>\n      "
      }
    },
    {
      "spreadId": 8,
      "left": {
        "pageNumber": 17,
        "runningHead": "Topic 5: SOP — Handling & Preservation",
        "content": "\n        <h2>Topic 5: SOP for Handling, Preservation, Acquisition...</h2>\n        <h3>5.1 SOP: Handling & Electrostatic (ESD) Safety</h3>\n        <p>Electronic evidence is fragile micro-circuitry. You can permanently destroy stored evidence without even knowing you did it!</p>\n\n        <h3>A. The Invisible Danger: Electrostatic Discharge (ESD)</h3>\n        <p>Walking across a rug generates up to 3,000 volts of static electricity. While humans cannot feel a discharge below 2,000 volts, a microscopic spark of just <strong>100 volts</strong> can vaporize silicon gates inside NAND flash chips or short-circuit hard drive controllers!</p>\n\n        <div class=\"book-callout\" style=\"border-left-color: #0284c7;\">\n          <strong>Step-by-Step Handling Safety Checklist:</strong><br>\n          1. <strong>Wear Grounded ESD Wrist Straps:</strong> Connect the alligator clip of the wrist strap to an unpainted metal earth ground or grounded workbench mat.<br>\n          2. <strong>Wear Powder-Free Nitrile Gloves:</strong> Prevents transferring skin oils, salt, and moisture to connector pins while preventing fingerprint contamination.<br>\n          3. <strong>Hold Drives Strictly by Outer Edges:</strong> Grasp hard drives by their metal sides. NEVER touch the green printed circuit board (PCB), solder joints, or gold interface pins.<br>\n          4. <strong>Allow Thermal Acclimatization:</strong> If a drive is brought from a cold winter vehicle into a warm laboratory, wait 30 minutes before powering on to prevent internal condensation droplets from causing head crashes.\n        </div>\n      "
      },
      "right": {
        "pageNumber": 18,
        "runningHead": "Topic 5: SOP — Acquisition of Evidence",
        "content": "\n        <h2>Topic 5: SOP for Handling, Preservation, Acquisition...</h2>\n        <h3>5.2 SOP: Acquisition Planning & Execution</h3>\n\n        <h3>A. The Three Types of Forensic Acquisition</h3>\n        <table class=\"statute-table\" style=\"font-size: 0.73rem; margin: 6px 0;\">\n          <thead>\n            <tr><th>Acquisition Type</th><th>What is Copied</th><th>When to Use It</th></tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><strong>Physical (Bit-Stream)</strong></td>\n              <td>Every sector from Sector 0 to last LBA (including unallocated, slack space, and HPA).</td>\n              <td><strong>Gold Standard!</strong> Mandatory whenever the physical drive is functional and accessible.</td>\n            </tr>\n            <tr>\n              <td><strong>Logical Acquisition</strong></td>\n              <td>Only files and directories recognized by the active file system.</td>\n              <td>Used when physical access is locked (e.g. non-rooted mobile phones or RAID volumes).</td>\n            </tr>\n            <tr>\n              <td><strong>Targeted Triage</strong></td>\n              <td>Specific high-value folders (e.g. <code>AppData</code>, event logs).</td>\n              <td>Rapid incident response on massive 50TB corporate SAN storage arrays.</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h3>B. Step-by-Step Acquisition Procedure</h3>\n        <ol style=\"font-size: 0.78rem; line-height: 1.36; margin-left: 16px;\">\n          <li><strong>Sanitize Target Media:</strong> Destination drive must be wiped with zeros (DoD zero wipe) and verified with all-zeros hash.</li>\n          <li><strong>Connect Hardware Write-Blocker:</strong> Connect source drive through a certified write-blocker to the workstation.</li>\n          <li><strong>Launch Imaging Software:</strong> Run FTK Imager or <code>dc3dd</code>. Select Physical Drive.</li>\n          <li><strong>Compute Simultaneous Dual Hashes:</strong> Compute both MD5 and SHA-256 during read.</li>\n        </ol>\n      "
      }
    },
    {
      "spreadId": 9,
      "left": {
        "pageNumber": 19,
        "runningHead": "Topic 5: SOP — packaging & labeling",
        "content": "\n        <h2>Topic 5: SOP for Handling, Preservation, Acquisition, packaging, labeling & Transportation...</h2>\n        <h3>5.3 SOP: Packaging & Evidence Labeling</h3>\n        <p>Proper packaging ensures the physical exhibit arrives at the laboratory in the exact condition it was seized.</p>\n\n        <h3>A. Packaging Material Hierarchy</h3>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><strong>Step 1: Anti-Static Shielding Bag:</strong> Place the hard drive or memory card inside a silver-metallized anti-static bag. This creates a \"Faraday Cage\" effect against static electricity.</li>\n          <li><strong>Step 2: Cushioning:</strong> Wrap the anti-static bag in anti-static bubble wrap (pink bubble wrap) to absorb road vibrations and mechanical shocks.</li>\n          <li><strong>Step 3: Rigid Outer Container:</strong> Place the wrapped drive into a sturdy evidence box.</li>\n        </ul>\n\n        <h3>B. Evidence Label Specifications</h3>\n        <div style=\"background: var(--page-bg-subtle); padding: 7px 11px; border-radius: 4px; font-size: 0.76rem; line-height: 1.35; border: 1px solid var(--ui-border); margin: 6px 0;\">\n          • FIR Number & Police Station name.<br>\n          • Exhibit Mark (e.g. Ex-A1).<br>\n          • Exact Seizure Date, Time (IST), and Physical Location.<br>\n          • Seizing Officer Name, Rank, and Signatures of Witnesses across the tamper seal.\n        </div>\n      "
      },
      "right": {
        "pageNumber": 20,
        "runningHead": "Topic 5: SOP — Transportation Pitfalls",
        "content": "\n        <h2>Topic 5: SOP for Handling, Preservation, Acquisition, packaging, labeling & Transportation...</h2>\n        <h3>5.4 SOP: Transportation Pitfalls & Traps</h3>\n\n        <h3>A. The Three Deadliest Transportation Traps</h3>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><strong>Trap 1: Vehicle Audio Speaker Magnets:</strong> Police vehicles often have large audio subwoofers or radio communication speakers in the trunk. The powerful permanent magnets inside speakers generate intense magnetic fields. Placing a magnetic hard drive next to a speaker coil can flip magnetic bits and corrupt sector data!</li>\n          <li><strong>Trap 2: Excessive Heat in Car Trunks:</strong> In Indian summers, temperatures inside a locked vehicle trunk can exceed 60°C. High heat causes electrical charge leakage in NAND flash cells (SSDs, USB thumb drives), inducing silent bit-rot and data corruption.</li>\n          <li><strong>Trap 3: Airport & Security X-Ray Scanners:</strong> While modern solid-state drives generally resist standard airport X-rays, magnetic and sensitive high-density optical media can suffer degradation. Always carry digital exhibits by hand with official judicial transport permits!</li>\n        </ul>\n\n        <h3>B. Secure Transport Rules</h3>\n        <div style=\"background: var(--page-bg-subtle); padding: 7px 11px; border-left: 3px solid #0284c7; font-size: 0.78rem; line-height: 1.35;\">\n          • Transport exhibits in the passenger cabin (air-conditioned climate) rather than the hot trunk.<br>\n          • Keep evidence secured in a locked hard case under direct custody of an authorized police officer.<br>\n          • Deliver directly to the FSL evidence intake vault and obtain immediate signed receipt.\n        </div>\n      "
      }
    },
    {
      "spreadId": 10,
      "left": {
        "pageNumber": 21,
        "runningHead": "Topic 6: Acquisition Tools — Hardware Bridges",
        "content": "\n        <h2>Topic 6: digital data acquisition tools</h2>\n        <h3>6.1 Hardware Write-Blockers & Duplicators</h3>\n        <p>When you plug a USB drive or hard drive into a standard computer, the operating system immediately attempts to write to it: updating volume timestamps, creating hidden <code>System Volume Information</code> folders, and writing disk signatures.</p>\n\n        <h3>A. How Hardware Write-Blockers Work Under the Hood</h3>\n        <p>A hardware write-blocker (e.g. <strong>Tableau T35u SATA/IDE Bridge</strong>, <strong>WiebeTech UltraDock</strong>) sits physically between the suspect drive and your forensic computer:</p>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li>It monitors all ATA/SCSI commands transmitted by your operating system.</li>\n          <li>When your OS sends a <strong>READ</strong> command (e.g. <code>READ SECTOR 1024</code>), the write-blocker passes it through to the suspect drive and returns the data.</li>\n          <li>When your OS sends a <strong>WRITE</strong> command (e.g. <code>WRITE SECTORS</code>, <code>FORMAT</code>, <code>TRIM</code>), the write-blocker intercepts it, drops it instantly, and returns a false \"Write Successful\" or \"Write Protected\" signal back to your OS. The suspect drive never receives the write command!</li>\n        </ul>\n\n        <h3>B. Standalone Field Duplicators (Falcon-NEO)</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          Dedicated portable devices like the <strong>Logicube Falcon-NEO</strong> duplicate drives at blazing speeds (up to 50 GB/min) in the field without needing a laptop. They have dual write-blocked source ports and automatically compute SHA-256 hashes on the fly.\n        </p>\n      "
      },
      "right": {
        "pageNumber": 22,
        "runningHead": "Topic 6: Acquisition Tools — Software & Formats",
        "content": "\n        <h2>Topic 6: digital data acquisition tools</h2>\n        <h3>6.2 Software Imagers & Master Forensic Formats</h3>\n\n        <h3>A. Leading Forensic Imaging Software</h3>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><strong>FTK Imager:</strong> The free industry gold standard. Simple GUI, creates bit-stream E01/RAW images, mounts images read-only, and exports hash logs.</li>\n          <li><strong>dc3dd:</strong> Specialized Linux command-line tool created by the US DoD Cyber Crime Center. Superior to standard <code>dd</code>: displays real-time progress, performs on-the-fly hashing, and splits images automatically.</li>\n        </ul>\n\n        <h3>B. Master Forensic Image Formats Compared</h3>\n        <table class=\"statute-table\" style=\"font-size: 0.73rem; margin: 6px 0;\">\n          <thead>\n            <tr><th>Format</th><th>Extension</th><th>Pros & Cons</th></tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><strong>RAW / DD</strong></td>\n              <td><code>.dd / .raw / .img</code></td>\n              <td><strong>Pros:</strong> Universal compatibility across all tools.<br><strong>Cons:</strong> No compression, cannot store case metadata inside file.</td>\n            </tr>\n            <tr>\n              <td><strong>Expert Witness (EnCase)</strong></td>\n              <td><code>.E01 / .Ex01</code></td>\n              <td><strong>Pros:</strong> Industry court standard. Chunks data into 64-sector blocks with internal Adler32/MD5 checksums. Stores case notes and acquisition hash inside header.<br><strong>Cons:</strong> Proprietary format.</td>\n            </tr>\n            <tr>\n              <td><strong>Advanced Forensic Format</strong></td>\n              <td><code>.AFF</code></td>\n              <td><strong>Pros:</strong> Open-source, extensible, supports metadata and compression without licensing restrictions.</td>\n            </tr>\n          </tbody>\n        </table>\n      "
      }
    },
    {
      "spreadId": 11,
      "left": {
        "pageNumber": 23,
        "runningHead": "Topic 7: Collecting Data — Hard Drives (HDDs)",
        "content": "\n        <h2>Topic 7: identifying and collecting data from relevant digital sources...</h2>\n        <h3>7.1 Collecting Data from Hard Disk Drives (HDDs)</h3>\n        <p>Step-by-step practical procedure for seizing and extracting data from a desktop or laptop hard drive.</p>\n\n        <h3>A. Step-by-Step Procedure: Collecting Data from an HDD</h3>\n        <ol style=\"font-size: 0.78rem; line-height: 1.36; margin-left: 16px;\">\n          <li><strong>Pre-Inspection & Cleanliness:</strong> Inspect drive pins for physical damage. Document manufacturer model and serial number.</li>\n          <li><strong>Connect to Hardware Write-Blocker:</strong> Plug the SATA data and power cable from the drive into the \"Source / Write-Blocked\" port of your Tableau T35u.</li>\n          <li><strong>Connect Write-Blocker to Forensic Workstation:</strong> Plug the USB 3.0 output cable from the write-blocker into your forensic PC. Turn on the write-blocker power switch. Ensure the LED glows <strong>BLUE</strong> (indicating Write-Block Active).</li>\n          <li><strong>Launch FTK Imager:</strong> Select <em>File &rarr; Create Disk Image</em>. Choose <strong>Physical Drive</strong>.</li>\n          <li><strong>Select Destination & Format:</strong> Choose <strong>E01 (Expert Witness Format)</strong>. Enter Case FIR Number, Evidence Number, Examiner Name, and Notes. Set compression to 6.</li>\n          <li><strong>Start Acquisition & Verify:</strong> Check the box <em>\"Verify images after they are created\"</em>. The tool reads all sectors and computes MD5 and SHA-256.</li>\n        </ol>\n\n        <h3>B. The \"Click of Death\" Mechanical Failure</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          If the drive makes loud clicking or grinding sounds, the mechanical read/write head is failing. Stop immediately! Repeated attempts will scratch magnetic platters. Send the drive to a cleanroom for head replacement.\n        </p>\n      "
      },
      "right": {
        "pageNumber": 24,
        "runningHead": "Topic 7: Collecting Data — The SSD TRIM Nightmare",
        "content": "\n        <h2>Topic 7: identifying and collecting data from relevant digital sources...</h2>\n        <h3>7.2 Solid-State Drives (SSDs) & The TRIM Disaster</h3>\n        <p>Solid-State Drives (SSDs) and NVMe drives represent a catastrophic challenge for digital forensic investigators!</p>\n\n        <h3>A. What Makes SSDs So Dangerous for Evidence?</h3>\n        <p>On traditional magnetic HDDs, when a file is deleted, the data sits on the platter forever until overwritten. On modern SSDs, NAND flash memory cannot overwrite an existing block without erasing an entire flash block first. To keep the drive fast, modern operating systems use the <strong>ATA TRIM</strong> command (or NVMe Deallocate):</p>\n\n        <div class=\"book-callout\" style=\"border-left-color: #dc2626; background: rgba(220, 38, 38, 0.05);\">\n          <strong style=\"color: #b91c1c;\">THE TRIM CATASTROPHE IN REAL LIFE:</strong><br>\n          1. A suspect deletes an extortion letter from their Windows 11 NVMe SSD.<br>\n          2. Windows immediately sends a <code>TRIM</code> command to the SSD controller.<br>\n          3. The SSD controller's background <strong>Garbage Collection</strong> routine immediately wipes those NAND flash cells and resets them to all-zeros (<code>0x00</code>).<br>\n          4. <strong>Result:</strong> If the computer remains powered on for just 10-15 minutes after deletion, the deleted file is wiped clean by the SSD itself! File carving will return only blank 0x00 bytes!\n        </div>\n\n        <h3>B. What Must an Investigator Do When Seizing an SSD?</h3>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><strong>Cut Power Immediately:</strong> Never leave a machine with an SSD idling while you talk to witnesses. Every second it runs, background garbage collection destroys deleted evidence!</li>\n          <li><strong>Use Write-Blockers that Drop TRIM Commands:</strong> Ensure your hardware bridge strictly blocks ATA TRIM commands.</li>\n        </ul>\n      "
      }
    },
    {
      "spreadId": 12,
      "left": {
        "pageNumber": 25,
        "runningHead": "Topic 7: Collecting Data — Mobile & Network",
        "content": "\n        <h2>Topic 7: identifying and collecting data from relevant digital sources...</h2>\n        <h3>7.3 Mobile Devices & Network Logs</h3>\n\n        <h3>A. Step-by-Step Procedure: Mobile Device Acquisition</h3>\n        <ol style=\"font-size: 0.78rem; line-height: 1.36; margin-left: 16px;\">\n          <li><strong>Isolate Immediately:</strong> Place device in a tested Faraday bag to prevent remote wipes.</li>\n          <li><strong>Prevent Screen Lockout:</strong> If unlocked, adjust display timeout to \"Never\" or \"30 minutes\" and enable USB Debugging (on Android).</li>\n          <li><strong>Connect to Forensic Workstation via Write-Blocked Cable:</strong> Use Cellebrite UFED or Magnet AXIOM.</li>\n          <li><strong>Perform Extraction:</strong>\n            <ul style=\"font-size: 0.76rem; line-height: 1.34; margin: 3px 0 3px 12px;\">\n              <li><em>Advanced Logical:</em> Captures call logs, SMS, photos, and accessible SQLite DBs.</li>\n              <li><em>Physical via EDL Mode (Qualcomm):</em> Short test-point pins on the motherboard or use an EDL cable to force the phone into Emergency Download mode. Dumps raw encrypted NAND flash bit-for-bit!</li>\n            </ul>\n          </li>\n          <li><strong>What If the Phone is Locked?</strong> Do NOT enter random PIN guesses! After 10 failed attempts, iPhones can erase all data automatically. Use law-enforcement brute-force tools (GrayKey / Cellebrite Premium) that exploit bootrom vulnerabilities without triggering wipe counters.</li>\n        </ol>\n\n        <h3>B. Collecting Network Telemetry</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          Export router DHCP lease tables (mapping MAC addresses to IP addresses) and firewall NAT translation logs before circular buffer memory overwrites.\n        </p>\n      "
      },
      "right": {
        "pageNumber": 26,
        "runningHead": "Topic 7: Collecting Data — Cloud & Email",
        "content": "\n        <h2>Topic 7: identifying and collecting data from relevant digital sources...</h2>\n        <h3>7.4 Cloud Storage & Corporate Email Servers</h3>\n\n        <h3>A. Step-by-Step Procedure: Corporate Email Collection</h3>\n        <p>In Business Email Compromise (BEC) and corporate bribery cases, suspect employees delete emails and empty their \"Trash\" folders.</p>\n        <ol style=\"font-size: 0.78rem; line-height: 1.36; margin-left: 16px;\">\n          <li><strong>Do NOT Log In as the User:</strong> Logging into webmail updates the \"Last Login IP\" and changes unread flags.</li>\n          <li><strong>Admin-Level eDiscovery Export:</strong> Access Microsoft 365 Purview / Google Workspace Admin.</li>\n          <li><strong>Apply Litigation Hold:</strong> Freeze the mailbox so even if the user deletes emails, a shadow copy is retained in the hidden <code>Purges</code> / <code>Recoverable Items</code> folder.</li>\n          <li><strong>Export Mailbox as .PST or .MBOX:</strong> Export with complete RFC 5322 metadata headers and cryptographic SHA-256 manifest.</li>\n        </ol>\n\n        <h3>B. Collecting from Cloud Storage (AWS / Google Drive)</h3>\n        <div style=\"background: var(--page-bg-subtle); padding: 7px 11px; border-left: 3px solid #0284c7; font-size: 0.78rem; line-height: 1.35; margin: 6px 0;\">\n          • <strong>Local Client Cache:</strong> Check the suspect's laptop before looking at the cloud! Google Drive and OneDrive sync engines maintain local SQLite databases (e.g. <code>SyncEngine.log</code>, <code>metadata.db</code>) listing all synchronized, deleted, or shared files.<br>\n          • <strong>AWS S3 Bucket Logs:</strong> Enable S3 server access logging to document who downloaded confidential company intellectual property.\n        </div>\n      "
      }
    },
    {
      "spreadId": 13,
      "left": {
        "pageNumber": 27,
        "runningHead": "Topic 8: hash value generation — Principles",
        "content": "\n        <h2>Topic 8: hash value generation</h2>\n        <h3>8.1 Principles & Mathematical Integrity</h3>\n        <p>How do you prove to a skeptical Judge that an image file containing child exploitation or corporate theft was not planted by the police?</p>\n\n        <h3>A. What is a Hash Function?</h3>\n        <p>A cryptographic hash function takes any digital input—whether a 10-byte text message or a 4-terabyte hard drive—and runs it through complex mathematical algorithms (MD5, SHA-1, SHA-256) to produce a fixed-length string of hexadecimal numbers.</p>\n\n        <div class=\"book-callout\" style=\"border-left-color: #0284c7;\">\n          <strong>The \"Avalanche Effect\" Demonstrated:</strong><br>\n          Input 1: <code>\"Pay Raj ₹10,000 on Monday\"</code><br>\n          SHA-256: <code>a4f9b2c3d8e7...881f</code> (64 hex characters)<br><br>\n          Input 2: <code>\"Pay Raj ₹10,000 on Monday.\"</code> (Only added 1 single dot!)<br>\n          SHA-256: <code>7c1e5a9b0d2f...39a4</code> (Completely different string!)\n        </div>\n\n        <h3>B. Why MD5 is Deprecated and SHA-256 is Mandatory</h3>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><strong>MD5 (128-bit):</strong> In 2004, researchers demonstrated \"collision attacks\"—it is possible to engineer two completely different files that produce the exact same MD5 hash. Defense attorneys will challenge MD5 in court!</li>\n          <li><strong>SHA-256 (256-bit):</strong> The international gold standard. There are more possible SHA-256 hashes ($2^{256}$) than atoms in the observable universe. Collision is mathematically impossible with modern computing.</li>\n        </ul>\n      "
      },
      "right": {
        "pageNumber": 28,
        "runningHead": "Topic 8: hash value generation — BSA Section 63",
        "content": "\n        <h2>Topic 8: hash value generation</h2>\n        <h3>8.2 Verification & Section 63 BSA 2023 Certification</h3>\n\n        <h3>A. The Unbroken Three-Way Hash Equation</h3>\n        <p>In your formal laboratory report, you must present the three matching hashes:</p>\n        <div style=\"background: #1e293b; color: #f8fafc; padding: 7px 10px; border-radius: 4px; font-family: monospace; font-size: 0.72rem; line-height: 1.4; margin: 6px 0;\">\n          Source Physical Drive Hash:  e3b0c44298fc1c149afbf4c8996fb924...<br>\n          Acquired Forensic Image Hash: e3b0c44298fc1c149afbf4c8996fb924...<br>\n          Working Laboratory Copy Hash: e3b0c44298fc1c149afbf4c8996fb924...\n        </div>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          If all three match bit-for-bit, it is mathematically proven that no evidence was altered, inserted, or deleted!\n        </p>\n\n        <h3>B. Drafting the Section 63 BSA 2023 Certificate</h3>\n        <p>Under <strong>Section 63 of Bharatiya Sakshya Adhiniyam, 2023</strong> (formerly Section 65B Indian Evidence Act), electronic evidence is strictly inadmissible without a statutory certificate signed by the forensic examiner affirming:</p>\n        <ol style=\"font-size: 0.78rem; line-height: 1.36; margin-left: 16px;\">\n          <li>Full description of the target device (Make, Model, Serial Number).</li>\n          <li>That the computer/workstation was operating properly during acquisition.</li>\n          <li>The hardware write-blocker model used to prevent alterations.</li>\n          <li>The exact SHA-256 acquisition and verification hashes.</li>\n        </ol>\n\n        <h3>C. What Happens If the Hashes Do Not Match?</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          If the verification hash differs from the acquisition hash by even 1 character, <strong>the evidence has been altered!</strong> The Judge will throw the exhibit out of court, and the forensic examiner faces severe professional reprimand.\n        </p>\n      "
      }
    },
    {
      "spreadId": 14,
      "left": {
        "pageNumber": 29,
        "runningHead": "Topic 9: Data Recovery — NTFS $MFT",
        "content": "\n        <h2>Topic 9: Methods of Data Recovery and Carving</h2>\n        <h3>9.1 NTFS Internals & The Master File Table ($MFT)</h3>\n        <p>To recover deleted evidence like a professional, you must know what happens inside the Windows New Technology File System (NTFS) when a user hits \"Delete\".</p>\n\n        <h3>A. Anatomy of the Master File Table ($MFT)</h3>\n        <p>Every file and folder on an NTFS volume is represented by a <strong>1024-byte record</strong> inside the hidden system file <code>$MFT</code>.</p>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><strong>Header:</strong> Begins with magic ASCII string <code>FILE</code>.</li>\n          <li><strong>In-Use Flag:</strong> <code>0x01</code> = Active File; <code>0x00</code> = Deleted File!</li>\n          <li><strong>Attribute $10 ($STANDARD_INFORMATION):</strong> Holds user-visible MACE timestamps and file permissions.</li>\n          <li><strong>Attribute $30 ($FILE_NAME):</strong> Holds real filename and kernel-controlled timestamps.</li>\n          <li><strong>Attribute $80 ($DATA):</strong> Holds the actual file contents!</li>\n        </ul>\n\n        <h3>B. The \"Resident File\" Recovery Secret</h3>\n        <div class=\"book-callout\" style=\"border-left-color: #0284c7;\">\n          <strong>Instant 100% Recovery:</strong><br>\n          If a file is small (under ~700 bytes, like passwords, bank account numbers, or short letters), NTFS does not waste a separate cluster on the disk. It stores the entire file content <em>directly inside the 1024-byte MFT record itself</em>! Even if the suspect wipes all unallocated clusters, the resident file inside the MFT is recovered completely!\n        </div>\n      "
      },
      "right": {
        "pageNumber": 30,
        "runningHead": "Topic 9: Data Recovery — FAT32 0xE5 Undeletion",
        "content": "\n        <h2>Topic 9: Methods of Data Recovery and Carving</h2>\n        <h3>9.2 FAT32 / exFAT Internals & Undeletion</h3>\n        <p>Flash drives, SD cards, and dashcam memory cards typically use FAT32 or exFAT.</p>\n\n        <h3>A. What Actually Happens When You Delete a File in FAT?</h3>\n        <p>When you delete a file (e.g. <code>REPORT.DOC</code>) on a USB drive, Windows does NOT wipe the disk sectors! It only performs two tiny actions:</p>\n        <div style=\"background: var(--page-bg-subtle); padding: 7px 11px; border-left: 3px solid #0284c7; margin-bottom: 8px; border-radius: 0 4px 4px 0; font-size: 0.79rem; line-height: 1.35;\">\n          1. <strong>Replaces First Letter with 0xE5:</strong> In the 32-byte directory entry, Windows changes the first character <code>'R'</code> to the hex byte <code>0xE5</code> (the Greek sigma &sigma; deletion marker). The filename becomes <code>_EPORT.DOC</code>.<br>\n          2. <strong>Zeros Out the Cluster Allocation Chain:</strong> In the File Allocation Table, it marks the clusters as <code>0x00000000</code> (available for reuse).<br>\n          3. <strong>THE FILE DATA IS 100% INTACT!</strong> Every byte of text and data remains untouched on the drive until a new file is written over it.\n        </div>\n\n        <h3>B. Step-by-Step Practical Undeletion Walkthrough</h3>\n        <ol style=\"font-size: 0.78rem; line-height: 1.36; margin-left: 16px;\">\n          <li>Open the forensic image in a hex editor or Autopsy.</li>\n          <li>Locate the directory entry with the <code>0xE5</code> first byte.</li>\n          <li>Read the <strong>Starting Cluster</strong> number and <strong>File Size</strong> in bytes stored in the directory entry.</li>\n          <li>Navigate directly to that starting cluster and extract contiguous sectors matching the file size.</li>\n          <li>Rename the first letter back (e.g. <code>REPORT.DOC</code>). The file is completely restored!</li>\n        </ol>\n      "
      }
    },
    {
      "spreadId": 15,
      "left": {
        "pageNumber": 31,
        "runningHead": "Topic 9: Carving — Magic Bytes Signatures",
        "content": "\n        <h2>Topic 9: Methods of Data Recovery and Carving</h2>\n        <h3>9.3 File Carving Mechanics & Magic Bytes</h3>\n        <p>What happens when a suspect formats the drive, or the file system metadata is completely corrupted? Standard undeletion fails because directory entries are gone. This is where <strong>File Carving</strong> saves the investigation.</p>\n\n        <h3>A. What Are Magic Bytes (File Signatures)?</h3>\n        <p>Every file type has unique, unvarying hexadecimal sequences stamped at its very beginning (Header) and very end (Footer):</p>\n\n        <table class=\"statute-table\" style=\"font-size: 0.72rem; margin: 6px 0;\">\n          <thead>\n            <tr><th>File Type</th><th>Header Hex (Magic Bytes)</th><th>Footer Hex</th></tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><strong>JPEG / JPG Photo</strong></td>\n              <td><code>FF D8 FF E0</code> or <code>FF D8 FF E1</code></td>\n              <td><code>FF D9</code></td>\n            </tr>\n            <tr>\n              <td><strong>PNG Image</strong></td>\n              <td><code>89 50 4E 47 0D 0A 1A 0A</code></td>\n              <td><code>49 45 4E 44 AE 42 60 82</code></td>\n            </tr>\n            <tr>\n              <td><strong>PDF Document</strong></td>\n              <td><code>25 50 44 46</code> (<code>%PDF</code>)</td>\n              <td><code>25 25 45 4F 46</code> (<code>%%EOF</code>)</td>\n            </tr>\n            <tr>\n              <td><strong>ZIP / DOCX / XLSX</strong></td>\n              <td><code>50 4B 03 04</code> (<code>PK..</code>)</td>\n              <td><code>50 4B 05 06</code></td>\n            </tr>\n            <tr>\n              <td><strong>Windows Executable (.exe)</strong></td>\n              <td><code>4D 5A</code> (<code>MZ</code> - Mark Zbikowski)</td>\n              <td>Calculated from PE header</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h3>B. How the Carving Engine Works Step-by-Step</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          The carving tool (e.g. <strong>Scalpel</strong> or <strong>PhotoRec</strong>) scans unallocated sectors sequentially:\n          1. Detects header <code>FF D8 FF</code>. Notes start offset.<br>\n          2. Reads forward sector by sector until it encounters footer <code>FF D9</code>.<br>\n          3. Carves the enclosed byte block out to disk and names it <code>carved_001.jpg</code>.\n        </p>\n      "
      },
      "right": {
        "pageNumber": 32,
        "runningHead": "Topic 9: Carving — Fragmented Files & Scalpel",
        "content": "\n        <h2>Topic 9: Methods of Data Recovery and Carving</h2>\n        <h3>9.4 Fragmented Files & Dedicated Carvers</h3>\n\n        <h3>A. The Fragmentation Nightmare</h3>\n        <p>Simple header-to-footer carving assumes the file was saved in contiguous clusters. What happens on a heavily used drive where files are fragmented across scattered sectors?</p>\n\n        <div class=\"book-callout\" style=\"border-left-color: #dc2626; background: rgba(220, 38, 38, 0.05);\">\n          <strong style=\"color: #b91c1c;\">THE CORRUPTED CARVED FILE TRAP:</strong><br>\n          If a 5MB JPEG photo was split into two pieces with chunks of an MP3 song in between, a dumb carver copies from JPEG Header to JPEG Footer, sucking in the MP3 sectors! The resulting picture will be corrupted, showing only half a photo with grey lines.\n        </div>\n\n        <h3>B. Step-by-Step: Carving with Scalpel</h3>\n        <ol style=\"font-size: 0.78rem; line-height: 1.36; margin-left: 16px;\">\n          <li>Open configuration file <code>/etc/scalpel/scalpel.conf</code>.</li>\n          <li>Uncomment the target file signatures (e.g. <code>jpg y 5000000 ÿØÿ ÿÙ</code>).</li>\n          <li>Run Scalpel against the raw disk image:\n            <div style=\"background: #1e293b; color: #f8fafc; padding: 5px 8px; border-radius: 3px; font-family: monospace; font-size: 0.72rem; margin: 3px 0;\">\n              scalpel -c scalpel.conf -o /recovered_files/ disk_image.raw\n            </div>\n          </li>\n          <li>Scalpel parses unallocated sectors and exports all recovered files into organized folders.</li>\n        </ol>\n      "
      }
    },
    {
      "spreadId": 16,
      "left": {
        "pageNumber": 33,
        "runningHead": "Topic 10: Analytical Techniques — Metadata EXIF",
        "content": "\n        <h2>Topic 10: analytical techniques for analyzing digital data...</h2>\n        <h3>10.1 metadata examination (EXIF & Documents)</h3>\n        <p>Metadata is \"data about data\". Criminals often focus on hiding or deleting the text of a document, completely forgetting that metadata is permanently attached to the file.</p>\n\n        <h3>A. EXIF Metadata in Photos: The Crime Buster</h3>\n        <p>When a smartphone or digital camera snaps a photo, it embeds detailed <strong>EXIF (Exchangeable Image File Format)</strong> metadata into the JPEG header:</p>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><strong>Exact GPS Coordinates:</strong> Latitude and Longitude coordinates embedded by the phone's GPS chip, pinpointing the location down to 3 meters!</li>\n          <li><strong>Device Hardware:</strong> Smartphone Make, Model, unique camera serial number, and firmware version.</li>\n          <li><strong>Camera Settings:</strong> Flash status, focal length, exposure, and exact shutter timestamp.</li>\n        </ul>\n\n        <div class=\"book-callout\" style=\"border-left-color: #0284c7;\">\n          <strong>Step-by-Step EXIF Extraction with ExifTool:</strong><br>\n          Run command: <code>exiftool -GPSPosition -CreateDate crime_photo.jpg</code><br>\n          Output reveals: <code>GPS Position: 28 deg 38' 14.2\" N, 77 deg 13' 28.1\" E</code>.<br>\n          Paste coordinates directly into Google Maps—it reveals the exact building and room where the illicit photo was captured!\n        </div>\n\n        <h3>B. Document Metadata in Microsoft Word (OOXML)</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          A <code>.docx</code> file is a zipped archive. Unzip it and inspect <code>docProps/core.xml</code>: It stores the original author's name, company template, total editing time (e.g. 4 minutes), revision number, and the date the file was first created.\n        </p>\n      "
      },
      "right": {
        "pageNumber": 34,
        "runningHead": "Topic 10: Analytical Techniques — Timestomping",
        "content": "\n        <h2>Topic 10: analytical techniques for analyzing digital data...</h2>\n        <h3>10.2 MACE Timestamps & Timestomp Detection</h3>\n\n        <h3>A. What are MACE Timestamps?</h3>\n        <p>NTFS tracks four timestamps for every single file:</p>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><strong>M (Modified):</strong> When the contents of the file were last changed.</li>\n          <li><strong>A (Accessed):</strong> When the file was opened, viewed, or executed.</li>\n          <li><strong>C (Created / Born):</strong> When the file was first placed on this volume.</li>\n          <li><strong>E (Entry Modified):</strong> When the MFT record itself was updated.</li>\n        </ul>\n\n        <h3>B. Catching \"Timestomping\" in the Act</h3>\n        <p>Sophisticated hackers use anti-forensic tools (like Meterpreter <code>timestomp</code>) to change malware dates to match Windows system files from 2018 so they blend in.</p>\n\n        <div class=\"book-callout\" style=\"border-left-color: #0284c7;\">\n          <strong>How Forensic Scientists Catch Timestomping:</strong><br>\n          In NTFS, timestamps are stored in TWO distinct attributes inside the $MFT:<br>\n          1. <code>$STANDARD_INFORMATION</code> ($SI): User-mode APIs can modify this attribute (this is what timestomp changes).<br>\n          2. <code>$FILE_NAME</code> ($FN): Controlled exclusively by the Windows kernel! User-mode tools cannot modify $FN timestamps.<br><br>\n          <strong>The Dead Giveaway:</strong> If an examiner compares $SI vs $FN and discovers $SI says <em>\"2018\"</em> while $FN says <em>\"October 2026\"</em>, timestomping is conclusively proven in court!\n        </div>\n      "
      }
    },
    {
      "spreadId": 17,
      "left": {
        "pageNumber": 35,
        "runningHead": "Topic 10: Analytical Techniques — Keyword Searches",
        "content": "\n        <h2>Topic 10: analytical techniques for analyzing digital data...</h2>\n        <h3>10.3 keyword searches & String Extraction</h3>\n        <p>When you seize a 2-terabyte hard drive, you have over 4 billion sectors of data. You cannot read through it manually. Keyword searches are how investigators find the smoking gun.</p>\n\n        <h3>A. Indexed vs Raw Unindexed Searches</h3>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li><strong>Indexed Searching (dtSearch / Lucene in Autopsy):</strong> The software reads the entire drive first and builds an inverted dictionary index. Indexing takes hours, but subsequent searches return results in milliseconds!</li>\n          <li><strong>Raw / Unindexed Searching:</strong> The tool scans every byte from sector 0 to the end. It is slow, but essential for finding fragmented strings in unallocated space that indexers missed.</li>\n        </ul>\n\n        <h3>B. Proximity & Boolean Search Operators</h3>\n        <div style=\"background: var(--page-bg-subtle); padding: 7px 11px; border-left: 3px solid #0284c7; margin: 6px 0; font-size: 0.79rem; line-height: 1.35;\">\n          • <strong>Boolean Operators:</strong> <code>(\"ransom\" OR \"extortion\") AND (\"bitcoin\" OR \"wallet\") NOT \"sample\"</code>.<br>\n          • <strong>Proximity Searching:</strong> <code>\"bribe\" w/5 \"contract\"</code> (Matches files where \"bribe\" occurs within 5 words of \"contract\").\n        </div>\n\n        <h3>C. Character Encoding Traps</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          A search for <code>\"password\"</code> in standard ASCII will MISS all Windows registry passwords because Windows stores strings in <strong>UTF-16LE</strong> (Unicode: <code>p\u0000a\u0000s\u0000s\u0000...</code>). Always configure your search tool to scan across <strong>ASCII, UTF-8, UTF-16, and Base64</strong> simultaneously!\n        </p>\n      "
      },
      "right": {
        "pageNumber": 36,
        "runningHead": "Topic 10: Analytical Techniques — Regex Queries",
        "content": "\n        <h2>Topic 10: analytical techniques for analyzing digital data...</h2>\n        <h3>10.4 Regular Expressions (Regex) in Practice</h3>\n        <p>In financial cybercrimes, you do not know the suspect's stolen credit card numbers or PAN numbers in advance. <strong>Regular Expressions (Regex)</strong> allow you to search for patterns rather than specific text.</p>\n\n        <h3>A. Practical Forensic Regex Cheatsheet</h3>\n        <table class=\"statute-table\" style=\"font-size: 0.71rem; margin: 6px 0;\">\n          <thead>\n            <tr><th>Target Evidence</th><th>Forensic Regex Pattern</th></tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><strong>Email Addresses</strong></td>\n              <td><code>[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}</code></td>\n            </tr>\n            <tr>\n              <td><strong>IPv4 Addresses</strong></td>\n              <td><code>\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b</code></td>\n            </tr>\n            <tr>\n              <td><strong>Credit Cards (Visa/Master)</strong></td>\n              <td><code>\\b(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})\\b</code></td>\n            </tr>\n            <tr>\n              <td><strong>Indian PAN Card</strong></td>\n              <td><code>\\b[A-Z]{5}[0-9]{4}[A-Z]{1}\\b</code></td>\n            </tr>\n            <tr>\n              <td><strong>Indian Aadhaar Card</strong></td>\n              <td><code>\\b[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}\\b</code></td>\n            </tr>\n            <tr>\n              <td><strong>Bitcoin Wallet</strong></td>\n              <td><code>\\b[13][a-km-zA-HJ-NP-Z1-9]{25,34}\\b</code></td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h3>B. Running Regex in Autopsy</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          In Autopsy, select <em>Keyword Search &rarr; Regular Expression</em>, paste the PAN card regex, and select <em>\"Search Unallocated Space\"</em>. Autopsy scans raw deleted clusters and surfaces all 10-character PAN identities within minutes!\n        </p>\n      "
      }
    },
    {
      "spreadId": 18,
      "left": {
        "pageNumber": 37,
        "runningHead": "Topic 10: Analytical Techniques — timeline creation",
        "content": "\n        <h2>Topic 10: analytical techniques for analyzing digital data...</h2>\n        <h3>10.5 timeline creation & Super-Timelines</h3>\n        <p>In court, judges and juries do not understand hex dumps or raw registry keys. They understand a clear, minute-by-minute <strong>story</strong>: <em>\"What did the suspect do on October 12 between 2:00 PM and 2:15 PM?\"</em></p>\n\n        <h3>A. What is a Super-Timeline?</h3>\n        <p>A single log entry can be disputed, but a <strong>Super-Timeline</strong> merges events across every part of the operating system into one master chronological table:</p>\n        <ul style=\"font-size: 0.78rem; line-height: 1.34; margin-left: 14px;\">\n          <li>File system MACE file modifications.</li>\n          <li>Windows Security Event Log logins and process creations.</li>\n          <li>Browser URL visits and download completions.</li>\n          <li>Registry UserAssist execution records.</li>\n          <li>USB device connections and disconnections.</li>\n        </ul>\n\n        <h3>B. Step-by-Step Super-Timeline with Plaso</h3>\n        <div style=\"background: #1e293b; color: #f8fafc; padding: 7px 10px; border-radius: 4px; font-family: monospace; font-size: 0.72rem; line-height: 1.38; margin: 6px 0;\">\n          # Extract all timeline artifacts into Plaso database<br>\n          log2timeline.py case101.plaso disk_image.E01<br>\n          # Filter for the crime date range and export CSV<br>\n          psort.py -o l2tcsv -w timeline.csv case101.plaso \"date >= '2026-10-12'\"\n        </div>\n      "
      },
      "right": {
        "pageNumber": 38,
        "runningHead": "Topic 10: Analytical Techniques — log correlation",
        "content": "\n        <h2>Topic 10: analytical techniques for analyzing digital data...</h2>\n        <h3>10.6 log correlation & pattern analysis using specialized software</h3>\n        <p>The Windows Security Event Log (<code>Security.evtx</code>) records every critical security action.</p>\n\n        <h3>A. The Five Essential Event IDs Every Investigator Must Know</h3>\n        <table class=\"statute-table\" style=\"font-size: 0.72rem; margin: 6px 0;\">\n          <thead>\n            <tr><th>Event ID</th><th>Event Name</th><th>Investigative Value</th></tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><code>4624</code></td>\n              <td><strong>Successful Logon</strong></td>\n              <td>Check Logon Type! Type 2 = Physical Keyboard; Type 3 = Network share; Type 10 = Remote Desktop (RDP). Shows caller IP!</td>\n            </tr>\n            <tr>\n              <td><code>4625</code></td>\n              <td><strong>Failed Logon</strong></td>\n              <td>50 failed logons in 1 minute indicates automated password brute-forcing or credential stuffing.</td>\n            </tr>\n            <tr>\n              <td><code>4688</code></td>\n              <td><strong>Process Creation</strong></td>\n              <td>Shows the exact process executed and full command-line arguments (e.g. <code>powershell -enc ...</code>).</td>\n            </tr>\n            <tr>\n              <td><code>7045</code></td>\n              <td><strong>New Service Installed</strong></td>\n              <td>Primary indicator of malware installing persistent backdoor services (in System.evtx).</td>\n            </tr>\n            <tr>\n              <td><code>1102</code></td>\n              <td><strong>Audit Log Cleared</strong></td>\n              <td>Logs when a criminal runs <code>wevtutil cl</code> to delete evidence. Shows user account responsible!</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h3>B. pattern analysis using specialized software</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          Specialized threat analysis software scans proxy and firewall logs to detect <strong>C2 Beaconing</strong>: periodic HTTP/DNS calls sent every exact 60.0 seconds (or with small jitter). Pattern matching isolates stealthy malware callbacks in massive network traffic.\n        </p>\n      "
      }
    },
    {
      "spreadId": 19,
      "left": {
        "pageNumber": 39,
        "runningHead": "Topic 11: Tools used for analysis and evaluation...",
        "content": "\n        <h2>Topic 11: Tools used for analysis and evaluation of digital evidences</h2>\n        <h3>11.1 Forensic Software Suites Compared</h3>\n        <p>Which tool should you use, and why do laboratories keep multiple forensic suites?</p>\n\n        <table class=\"statute-table\" style=\"font-size: 0.72rem; margin: 6px 0;\">\n          <thead>\n            <tr><th>Forensic Suite</th><th>Type</th><th>Best Used For & Core Strengths</th></tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><strong>Autopsy</strong></td>\n              <td>Open-Source</td>\n              <td>The best free, extensible suite. Superb Lucene keyword indexing, ingest modules, timeline analysis, and hash lookup database.</td>\n            </tr>\n            <tr>\n              <td><strong>Magnet AXIOM</strong></td>\n              <td>Commercial</td>\n              <td>The artifact-first leader. Ingests Computer, Mobile, and Cloud images simultaneously. World-class chat rebuilding and timeline link analysis.</td>\n            </tr>\n            <tr>\n              <td><strong>EnCase Forensic</strong></td>\n              <td>Commercial</td>\n              <td>Longest courtroom track record. Robust EnScript automation, deep raw hex analysis, and multi-drive enterprise processing.</td>\n            </tr>\n            <tr>\n              <td><strong>Volatility 3</strong></td>\n              <td>Open-Source</td>\n              <td>Gold standard for RAM triage. Unmatched for finding kernel rootkits and process hollowing.</td>\n            </tr>\n            <tr>\n              <td><strong>Wireshark</strong></td>\n              <td>Open-Source</td>\n              <td>Unrivalled packet disassembly and PCAP stream analysis.</td>\n            </tr>\n            <tr>\n              <td><strong>X-Ways Forensics</strong></td>\n              <td>Commercial</td>\n              <td>Lightweight, lightning fast German suite. Runs from a USB stick with zero installation footprint.</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <h3>A. The Dual-Tool Verification Mandate</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34;\">\n          In high-stakes murder or corporate espionage cases, never rely on a single tool. If Autopsy uncovers a deleted email, verify the same offset in EnCase or X-Ways. When two independent tools produce the identical finding, defense cross-examination cannot shake your testimony!\n        </p>\n      "
      },
      "right": {
        "pageNumber": 40,
        "runningHead": "Topic 11: Court Report & Master Field Checklist",
        "content": "\n        <h2>Topic 11: Tools used for analysis and evaluation of digital evidences</h2>\n        <h3>11.2 Courtroom Examination Report & Master Field Checklist</h3>\n\n        <div style=\"background: var(--page-bg-subtle); padding: 7px 11px; border-radius: 4px; border: 1px solid var(--ui-border); font-size: 0.76rem; line-height: 1.35; margin-bottom: 6px;\">\n          • <strong>Order of Volatility:</strong> Registers/CPU &rarr; RAM &rarr; Network/Sockets &rarr; Disks &rarr; Backups.<br>\n          • <strong>Hardware Write-Blockers:</strong> Drop write commands at hardware bridge while passing reads.<br>\n          • <strong>The SSD Trap:</strong> ATA TRIM triggers garbage collection that zeros deleted blocks.<br>\n          • <strong>Faraday Bags:</strong> Block RF signals to prevent remote factory wipe of seized phones.<br>\n          • <strong>Mobile Lockouts:</strong> Don't enter guesses. Keep unlocked phones active; avoid BFU mode.<br>\n          • <strong>Magic Bytes Signatures:</strong> JPEG: <code>FF D8 FF</code> | PNG: <code>89 50 4E 47</code> | PDF: <code>%PDF</code> | ZIP: <code>50 4B 03 04</code>.<br>\n          • <strong>FAT32 Deletion:</strong> Replaces first letter with <code>0xE5</code> (&sigma;); data remains on disk.<br>\n          • <strong>NTFS Timestomping:</strong> Compare <code>$STANDARD_INFORMATION</code> ($SI) with <code>$FILE_NAME</code> ($FN).<br>\n          • <strong>Windows Event IDs:</strong> 4624 (Logon), 4625 (Failed Logon), 4688 (Process Created), 1102 (Log Cleared).<br>\n          • <strong>Court Certification:</strong> Section 63 BSA 2023 certificate affirming matching SHA-256 hashes.\n        </div>\n\n        <div style=\"text-align: center; margin-top: 10px;\">\n          <button class=\"cover-btn-start\" style=\"background: linear-gradient(135deg, #0284c7, #0369a1); padding: 8px 16px; font-size: 0.82rem;\" onclick=\"document.getElementById('deepDiveToggleBtn').click();\">\n            Open Official Syllabus Forensics Scenario Lab &rarr;\n          </button>\n        </div>\n      "
      }
    }
  ],
  "tocData": [
    {
      "chapter": "Cover",
      "title": "Front Cover & Examination Directives",
      "spreadIndex": 0,
      "page": "1–2"
    },
    {
      "chapter": "Syllabus",
      "title": "Official Syllabus Architecture (All 11 Topics)",
      "spreadIndex": 1,
      "page": "3–4"
    },
    {
      "chapter": "Topic 01",
      "title": "Branches of Digital Forensics (Disk & RAM Forensics)",
      "spreadIndex": 2,
      "page": "5–6"
    },
    {
      "chapter": "Topic 01",
      "title": "Branches of Digital Forensics (Mobile, Network, Cloud, Email)",
      "spreadIndex": 3,
      "page": "7–8"
    },
    {
      "chapter": "Topic 02",
      "title": "Investigation of digital crime scenes (Perimeter & RF Isolation)",
      "spreadIndex": 4,
      "page": "9–10"
    },
    {
      "chapter": "Topic 02",
      "title": "Investigation of digital crime scenes (Live vs Dead Triage)",
      "spreadIndex": 5,
      "page": "11–12"
    },
    {
      "chapter": "Topic 03",
      "title": "maintaining proper documentation (Field Notes & Seizure Memo)",
      "spreadIndex": 6,
      "page": "13–14"
    },
    {
      "chapter": "Topic 04",
      "title": "chain of custody (Custody Architecture & Tamper Seals)",
      "spreadIndex": 7,
      "page": "15–16"
    },
    {
      "chapter": "Topic 05",
      "title": "SOP for Handling, Preservation, Acquisition of electronic evidence",
      "spreadIndex": 8,
      "page": "17–18"
    },
    {
      "chapter": "Topic 05",
      "title": "SOP for packaging, labeling & Transportation of electronic evidence",
      "spreadIndex": 9,
      "page": "19–20"
    },
    {
      "chapter": "Topic 06",
      "title": "digital data acquisition tools (Hardware Write-Blockers)",
      "spreadIndex": 10,
      "page": "21–22"
    },
    {
      "chapter": "Topic 06",
      "title": "digital data acquisition tools (Software Imagers & Formats)",
      "spreadIndex": 11,
      "page": "23–24"
    },
    {
      "chapter": "Topic 07",
      "title": "identifying and collecting data from hard drives & SSD TRIM",
      "spreadIndex": 12,
      "page": "25–26"
    },
    {
      "chapter": "Topic 07",
      "title": "identifying and collecting data from mobile, network, cloud & email",
      "spreadIndex": 13,
      "page": "27–28"
    },
    {
      "chapter": "Topic 08",
      "title": "hash value generation (SHA-256 & Section 63 BSA 2023)",
      "spreadIndex": 14,
      "page": "29–30"
    },
    {
      "chapter": "Topic 09",
      "title": "Methods of Data Recovery and Carving (NTFS $MFT & FAT32 0xE5)",
      "spreadIndex": 15,
      "page": "31–32"
    },
    {
      "chapter": "Topic 09",
      "title": "Methods of Data Recovery and Carving (Magic Bytes & Scalpel)",
      "spreadIndex": 16,
      "page": "33–34"
    },
    {
      "chapter": "Topic 10",
      "title": "analytical techniques (metadata examination & timestomping)",
      "spreadIndex": 17,
      "page": "35–36"
    },
    {
      "chapter": "Topic 10",
      "title": "analytical techniques (keyword searches, timelines & log correlation)",
      "spreadIndex": 18,
      "page": "37–38"
    },
    {
      "chapter": "Topic 11",
      "title": "Tools used for analysis and evaluation of digital evidences & Checklist",
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