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
        "content": "\n        <h2>Digital Forensics: Practical Meaning</h2>\n        \n        <h3>A. The Wet Paint Analogy</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          Physical crime scene evidence (like a bullet casing or dried blood) sits quietly on a shelf. <strong>Digital evidence is like wet paint</strong>: if an untrained officer touches it with bare hands, they smear the entire painting. Even clicking a mouse writes hidden files to disk.\n        </p>\n\n        <!-- Locard's Principle -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 0 4px 4px 0; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            🐾 Locard's Exchange Principle: The Invisible Cat Hair\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0;\">\n            <em>\"Every contact leaves a trace.\"</em> If you play with a white cat, you leave cat hairs on your dark shirt, and you leave your shirt's fibers on the cat. When a hacker connects to a victim server: the server's IP is saved in the hacker's browser, and the hacker's MAC address, browser version, and commands are stamped into the server's logs!\n          </p>\n        </div>\n\n        <!-- Order of Volatility -->\n        <div style=\"background: rgba(245, 158, 11, 0.05); border-left: 3px solid #f59e0b; padding: 6px 9px; border-radius: 0 4px 4px 0; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #b45309; font-size: 0.8rem; margin-bottom: 2px;\">\n            🍦 Order of Volatility (RFC 3227): The Melting Ice Cream Cone\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            In the hot sun, an ice cream cone melts in 2 minutes, while a chocolate bar takes an hour. You must eat the ice cream first! In a computer, collect the fastest-melting evidence first:\n          </p>\n          <div style=\"font-size: 0.73rem; line-height: 1.3; background: var(--page-bg); border: 1px solid var(--ui-border); padding: 4px 7px; border-radius: 3px;\">\n            <strong>1. CPU Cache &amp; Registers:</strong> Melts in nanoseconds.<br>\n            <strong>2. RAM (Memory):</strong> Melts in milliseconds the moment power is cut.<br>\n            <strong>3. Network Sockets &amp; Live Processes:</strong> Vanishes on reboot.<br>\n            <strong>4. Hard Drives &amp; SSDs:</strong> Stable; lasts years without power.<br>\n            <strong>5. Archival Backup Tapes &amp; Paper:</strong> Stable for decades.\n          </div>\n        </div>\n\n        <div style=\"background: rgba(239, 68, 68, 0.07); border-left: 3px solid #ef4444; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.3;\">\n          <strong style=\"color: #b91c1c;\">⚠️ The Rookie Mistake:</strong> An investigator unscrews the hard drive first while leaving the computer on. Result: RAM, live chats, and active attacker connections all melt away forever!\n        </div>\n"
      }
    },
    {
      "spreadId": 2,
      "left": {
        "pageNumber": 5,
        "runningHead": "Topic 1: Branches — Disk Forensics",
        "content": "\n        <h2>Topic 1: Branches of Digital Forensics</h2>\n        <h3>1.1 Disk Forensics: Hands-On at Your Laptop</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.38; margin-bottom: 6px;\">\n          You are the cyber forensic investigator. You arrive at the scene with your forensic laptop. A suspect's 500 GB hard drive is lying on the table. What do you physically do, step by step?\n        </p>\n\n        <!-- STEP 1: Physical Setup on your desk -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 3px;\">\n            🔌 STEP 1: Setting Up Your Desk (Why You Don't Just Plug It In)\n          </div>\n          <p style=\"font-size: 0.76rem; line-height: 1.34; margin: 0 0 4px 0;\">\n            <strong>The Trap:</strong> If you plug the suspect's drive directly into your laptop's USB port, Windows behaves like dirty boots on a crime scene: it immediately writes hidden indexing files (<code>Thumbs.db</code>), alters access timestamps, and ruins court admissibility.\n          </p>\n          <p style=\"font-size: 0.76rem; line-height: 1.34; margin: 0;\">\n            <strong>What You Physically Do:</strong>\n            <br>1. Take out your <strong>Hardware Write-Blocker Bridge</strong> (a small box with two sides: \"Evidence\" and \"Host\").\n            <br>2. Plug the suspect drive into the <strong>EVIDENCE</strong> port.\n            <br>3. Connect the <strong>HOST</strong> USB cable into your laptop.\n            <br>4. A green LED lights up: <strong>WRITE BLOCKED 🛑</strong>. Your laptop can now read every bit, but cannot alter or write 1 single byte!\n            <br>5. Plug your own clean external storage drive into your laptop (this will store the copy).\n          </p>\n        </div>\n\n        <!-- STEP 2: What you do on your screen (Imaging) -->\n        <div style=\"background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-left: 3px solid #10b981; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #047857; font-size: 0.8rem; margin-bottom: 3px;\">\n            💻 STEP 2: On Your Laptop Screen (Making the Bit-Stream Clone)\n          </div>\n          <p style=\"font-size: 0.76rem; line-height: 1.34; margin: 0 0 3px 0;\">\n            <strong>Why Not Copy-Paste (Ctrl+C)?</strong> Normal copy-paste only photocopies visible files. Deleted files, hidden slack space, and erased notes are completely ignored.\n          </p>\n          <p style=\"font-size: 0.76rem; line-height: 1.34; margin: 0;\">\n            <strong>What You Click on Your Screen:</strong>\n            <br>1. Open <strong>FTK Imager</strong> ➔ Click <code>File</code> ➔ <code>Create Disk Image</code>.\n            <br>2. Select <strong>Physical Drive</strong> (this tells your laptop to read every magnetic sector from 0 to 976,773,168).\n            <br>3. Destination: Choose <strong>E01 (Expert Witness Format)</strong> and save it onto your external storage drive.\n            <br>4. Click <strong>Start</strong>. Your laptop reads every 0 and 1 through the one-way bridge.\n            <br>5. When finished, it verifies the SHA-256 hash: <strong>MATCH ✅</strong>.\n            <br>6. You seal the suspect's original drive in an evidence bag and lock it in the locker. You never touch it again.\n          </p>\n        </div>\n\n        <!-- STEP 3: Finding Slack Space & Deleted Files -->\n        <div style=\"background: var(--page-bg-subtle); border: 1px solid var(--ui-border); border-left: 3px solid #f59e0b; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #b45309; font-size: 0.8rem; margin-bottom: 3px;\">\n            🔍 STEP 3: Finding Slack Space &amp; Deleted Evidence on Your Screen\n          </div>\n          <p style=\"font-size: 0.76rem; line-height: 1.34; margin: 0 0 4px 0;\">\n            You load your <code>case.E01</code> file into <strong>Autopsy</strong> on your laptop. On your screen:\n          </p>\n          <div style=\"background: var(--page-bg); border: 1px solid var(--ui-border); border-radius: 4px; padding: 5px 8px; margin-bottom: 4px; font-size: 0.74rem;\">\n            <strong>The 4-Seater Taxi in Action (Slack Space):</strong><br>\n            • You click on a 150-byte text file <code>notes.txt</code>. Windows booked a full 4,096-byte Cluster (taxi) for it.<br>\n            • In your bottom Hex viewer window, bytes 0 to 149 show the note. But bytes 150 to 4,095 are <strong>Slack Space</strong> (empty taxi seats).<br>\n            • In that slack space, you find leftover text from a deleted extortion letter written last month that Windows never wiped!\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0;\">\n            <strong>Unallocated Space:</strong> In your file tree, you see files marked with a <strong>red [X]</strong>. When the suspect pressed Delete, Windows only crossed their name off the hotel register. The actual photos and documents sit untouched in Unallocated Space. You right-click ➔ <em>Export File</em> ➔ and the deleted document opens!\n          </p>\n        </div>\n      "
      },
      "right": {
        "pageNumber": 6,
        "runningHead": "Topic 1: Branches — RAM / Memory Forensics",
        "content": "\n        <h2>Topic 1: Branches of Digital Forensics</h2>\n        <h3>1.2 Memory (RAM) Forensics: Catching the Crime Live</h3>\n        <p style=\"font-size: 0.81rem; line-height: 1.4; margin-bottom: 6px;\">\n          If the hard drive is a diary, <strong>RAM is a glowing neon sign</strong>: while electric power is on, words glow brightly. The microsecond someone pulls the plug from the wall socket, the glow vanishes instantly into total darkness forever!\n        </p>\n\n        <!-- Movie Scene: Normal Virus vs Fileless Malware -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 7px 10px; border-radius: 4px; margin-bottom: 8px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.82rem; margin-bottom: 4px;\">\n            🎬 Scene 1: The Amateur Burglar vs. The Invisible Spy\n          </div>\n          \n          <div style=\"font-size: 0.77rem; line-height: 1.38; margin-bottom: 5px;\">\n            <strong>A. The Amateur Burglar (Normal Virus):</strong><br>\n            A thief breaks into your house. He carries a heavy backpack containing a crowbar and a hammer. He breaks your locker, steals money, and runs away, but he accidentally drops his backpack under your sofa! When the police security guard (<strong>Antivirus</strong>) searches the house, he spots the foreign backpack, sounds the alarm, and catches the thief. The backpack is a <strong>malicious file saved on the hard drive</strong>.\n          </div>\n\n          <div style=\"font-size: 0.77rem; line-height: 1.38; margin-bottom: 5px;\">\n            <strong>B. The Invisible Spy (Fileless Malware):</strong><br>\n            Now imagine a much smarter spy breaks in. He carries <strong>absolutely nothing</strong> in his pockets! No tools, no weapons. He walks into your kitchen, picks up <strong>YOUR OWN kitchen knife</strong> from your stand, cuts open your safe, takes the money, washes your knife, puts it back neatly, and leaves.\n            <div style=\"background: rgba(245, 158, 11, 0.1); border-left: 2px solid #f59e0b; padding: 4px 6px; margin-top: 3px; border-radius: 2px;\">\n              • When the guard (Antivirus) searches the house: he looks for outsider weapons. He sees your kitchen knife in its stand and says: <em>\"Everything looks normal! No foreign weapon found.\"</em><br>\n              • In a computer: your kitchen knife is a built-in genuine Windows program (like <strong>PowerShell</strong>). The spy uses Windows' own tools inside <strong>RAM</strong> and leaves zero files on the hard drive!\n            </div>\n          </div>\n\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.77rem; margin-top: 4px;\">\n            🔍 How do you catch him? You must catch him RED-HANDED while he is in the house holding the knife! That snapshot of the live room in action is a <strong>RAM Dump</strong>. If you turn off the PC, the spy vanishes!\n          </div>\n        </div>\n\n        <!-- 3 Other Critical Things that live ONLY in RAM -->\n        <div style=\"background: var(--page-bg-subtle); border: 1px solid var(--ui-border); padding: 6px 10px; border-radius: 4px; margin-bottom: 8px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.79rem; margin-bottom: 4px;\">\n            🎬 3 More Secrets that Vanish the Instant Power is Cut:\n          </div>\n          <div style=\"font-size: 0.76rem; line-height: 1.34;\">\n            <strong>① The Bank Locker Combination (BitLocker Keys):</strong> If a laptop hard drive is encrypted, it is like a locked steel bank vault. While the suspect is using the laptop, the secret combination to open the vault sits in RAM. Pull the plug &rarr; combination disappears &rarr; vault locks forever.<br><br>\n            <strong>② Plain Readable WhatsApp / Signal Chats:</strong> On the hard drive, WhatsApp stores scrambled code (<code>#$@!%</code>). But to show words on screen, the computer translates them into plain English in RAM. Shut down the laptop &rarr; readable words disappear forever.<br><br>\n            <strong>③ The Live Phone Call Wire (C2 IP Address):</strong> Malware is on a live phone call with the attacker's server. While running, the attacker's phone number (IP address) exists only in RAM. Power off &rarr; the phone call terminates and you lose your only lead!\n          </div>\n        </div>\n\n        <!-- How to capture and what not to do -->\n        <div style=\"background: rgba(239, 68, 68, 0.08); border-left: 3px solid #ef4444; padding: 6px 8px; border-radius: 0 4px 4px 0; font-size: 0.76rem; line-height: 1.32;\">\n          <strong style=\"color: #b91c1c;\">⚠️ The Golden Rule for Live Computers:</strong><br>\n          <strong>NEVER turn off or restart a running computer!</strong> Plug in a clean USB with a RAM capturer (<code>winpmem.exe</code>), save RAM directly to your external drive, and generate a SHA-256 hash. If you pull the plug, every piece of live evidence disappears forever!\n        </div>\n      "
      }
    },
    {
      "spreadId": 3,
      "left": {
        "pageNumber": 7,
        "runningHead": "Topic 1: Branches — Mobile & Network Forensics",
        "content": "\n        <h2>Topic 1: Branches of Digital Forensics</h2>\n        \n        <h3>1.3 Mobile Forensics: You Seize a Suspect's Smartphone</h3>\n        <p style=\"font-size: 0.79rem; line-height: 1.36; margin-bottom: 5px;\">\n          You raid a suspect's flat and seize their unlocked iPhone/Android phone right off their desk. Smartphones hold GPS history, WhatsApp chats, and selfies—but they have two deadly traps:\n        </p>\n\n        <!-- The 2 Mobile Traps & Hands-on Action -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.79rem; margin-bottom: 3px;\">\n            🚨 TRAP 1: The Remote Suicide Switch (Remote Wipe)\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            The suspect's friend in another city logs into <code>icloud.com/find</code> or Google's <em>Find My Device</em> and clicks <strong>\"Erase Phone\"</strong>. If the phone catches a cell or Wi-Fi signal for even 2 seconds, it wipes all data clean in front of your eyes!\n          </p>\n          <div style=\"background: rgba(16, 185, 129, 0.08); padding: 3px 6px; border-radius: 3px; font-size: 0.73rem; color: #047857; margin-bottom: 4px;\">\n            <strong>What You Physically Do:</strong> Turn on <strong>Airplane Mode</strong> immediately, or slide the phone into a <strong>Faraday Bag</strong> (a pouch made of metallic copper mesh that blocks all radio, cellular, and Wi-Fi signals).\n          </div>\n\n          <div style=\"font-weight: 700; color: #b91c1c; font-size: 0.79rem; margin-top: 4px; margin-bottom: 2px;\">\n            ⚠️ TRAP 2: The BFU (Before First Unlock) Death Trap!\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            The phone battery is at 11%! If the battery dies or the phone reboots, it enters <strong>BFU (Before First Unlock)</strong>. The phone's hardware security chip (Apple Secure Enclave / Android TrustZone) immediately purges all decryption keys from RAM and seals the vault. Even a ₹50-Lakh forensic workstation cannot crack it without the passcode!\n          </p>\n          <div style=\"background: rgba(239, 68, 68, 0.08); padding: 3px 6px; border-radius: 3px; font-size: 0.73rem; color: #991c1c;\">\n            <strong>What You Physically Do:</strong> Connect a portable <strong>Power Bank</strong> to the phone <em>inside</em> the Faraday bag so the battery never drops to 0%!\n          </div>\n        </div>\n\n        <div style=\"background: var(--page-bg-subtle); border: 1px solid var(--ui-border); padding: 5px 8px; border-radius: 4px; margin-bottom: 6px; font-size: 0.74rem; line-height: 1.3;\">\n          <strong>💻 On Your Forensic Laptop (Cellebrite / Oxygen):</strong> Connect the phone via USB. Because you kept it alive in AFU (After First Unlock), your laptop extracts the <strong>Full File System</strong>: reading SQLite databases (<code>msgstore.db</code> for WhatsApp) and mapping latitude/longitude GPS photo locations on a map!\n        </div>\n\n        <h3>1.4 Network Forensics: Tapping the Wire &amp; Wireshark</h3>\n        <p style=\"font-size: 0.78rem; line-height: 1.34; margin-bottom: 5px;\">\n          A company's bank accounts are getting drained right now. You rush to the server room to catch evidence flying across the network wire.\n        </p>\n\n        <!-- Network Hands-On Box -->\n        <div style=\"background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.25); border-left: 3px solid #f59e0b; padding: 6px 9px; border-radius: 4px; margin-bottom: 4px;\">\n          <div style=\"font-weight: 700; color: #b45309; font-size: 0.79rem; margin-bottom: 2px;\">\n            🔌 1. Tapping the Network Wire (Hardware TAP vs. SPAN Port)\n          </div>\n          <p style=\"font-size: 0.74rem; line-height: 1.32; margin: 0 0 4px 0;\">\n            Like tapping a water pipe with a T-valve: you plug a small <strong>Hardware TAP</strong> into the suspect's Ethernet cable, or tell the network switch (<strong>SPAN Port</strong>) to send a duplicate stream of all packets straight into your laptop's network jack.\n          </p>\n\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.79rem; margin-bottom: 2px;\">\n            💻 2. What You See in Wireshark on Your Laptop\n          </div>\n          <p style=\"font-size: 0.74rem; line-height: 1.32; margin: 0 0 4px 0;\">\n            You open <strong>Wireshark</strong> and click Start. Colored packets scroll rapidly. You type <code>dns</code> in the search bar. Instantly, you see the infected computer asking: <em>\"Where is hacker-c2-server.ru?\"</em> You caught the exact address!\n          </p>\n\n          <div style=\"font-weight: 700; color: #047857; font-size: 0.79rem; margin-bottom: 2px;\">\n            🕵️ 3. Traffic is Encrypted with HTTPS? Use the Secret Handshake (JA3 Fingerprint)\n          </div>\n          <p style=\"font-size: 0.74rem; line-height: 1.32; margin: 0;\">\n            When traffic is encrypted, the letters look like scrambled noise. But before encryption starts, every program does an unencrypted greeting (TLS Handshake). Just like spies having a unique secret handshake, Cobalt Strike malware has a distinct handshake code (<strong>JA3 fingerprint</strong>). Without needing to decrypt the text, your laptop detects: <em>\"This encrypted connection belongs to malware, not Google Chrome!\"</em>\n          </p>\n        </div>\n      "
      },
      "right": {
        "pageNumber": 8,
        "runningHead": "Topic 1: Branches — Cloud, DB & Email Forensics",
        "content": "\n        <h2>Topic 1: Branches of Digital Forensics</h2>\n\n        <h3>1.5 Cloud Forensics: When You Can't Seize the Server</h3>\n        <p style=\"font-size: 0.79rem; line-height: 1.36; margin-bottom: 5px;\">\n          If evidence is in an AWS or Azure mega-datacenter in the USA, you cannot physically seize the server across international borders. What do you do on your laptop?\n        </p>\n\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 5px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.79rem; margin-bottom: 2px;\">\n            📸 1. The Virtual Freeze-Frame (EBS Disk Snapshot)\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            In your AWS console on your laptop: select the criminal's virtual drive ➔ click <strong>Create Snapshot</strong>. In seconds, AWS creates an exact, frozen bit-stream twin of the live drive without shutting it down. You share it to your isolated forensic account and mount it Read-Only.\n          </p>\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.79rem; margin-bottom: 2px;\">\n            📹 2. The CCTV Black Box (AWS CloudTrail Logs)\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0;\">\n            Even if a hacker deletes their cloud server, CloudTrail is an unchangeable audit record. On your screen, you download the JSON log: it proves user <code>admin_steve</code> logged in from IP <code>185.220.101.5</code> at 02:14 AM and downloaded <code>customers.csv</code>!\n          </p>\n        </div>\n\n        <h3>1.6 Database Forensics: Catching the Bank Fraud</h3>\n        <div style=\"background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.25); border-left: 3px solid #f59e0b; padding: 5px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            <strong>The Crime:</strong> A corrupt accountant runs SQL: <code>UPDATE Balance SET 5000000 WHERE User='Me';</code>. The database table now shows ₹50 Lakhs. The accountant deletes the app history and claims he was always rich.\n          </p>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0;\">\n            <strong>The Secret Carbon-Copy (Transaction Log - .LDF):</strong> SQL databases write every single change to a transaction log (<code>.LDF</code>) <em>before</em> touching the main table. You load the <code>.LDF</code> on your laptop into ApexSQL: it reveals the smoking gun:\n            <br>• <strong>Before Value:</strong> <code>₹1,000</code> | <strong>After Value:</strong> <code>₹50,00,000</code>\n            <br>• <strong>User ID:</strong> <code>Accountant_SID</code> | <strong>Time:</strong> <code>23:42:10</code> (Caught red-handed!)\n          </p>\n        </div>\n\n        <h3>1.7 Email Forensics: The Fake CEO Envelope</h3>\n        <div style=\"background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-left: 3px solid #10b981; padding: 5px 9px; border-radius: 4px; margin-bottom: 4px;\">\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            <strong>The Envelope Analogy:</strong> Anyone can write <em>\"From: CEO\"</em> on an envelope in pen. But you cannot fake the postal rubber stamps on the back!\n          </p>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            <strong>Read Headers from the BOTTOM UP:</strong> In Outlook/Gmail, click <em>View Original</em>. Hackers fake the top lines, but the very <strong>lowest <code>Received:</code> header</strong> was stamped by the first post office server:\n            <br><code>Received: from 194.26.29.112 (Russian Server) by mail.company.com</code>\n            <br>The email came from a hacker in Russia, not your CEO!\n          </p>\n          <p style=\"font-size: 0.74rem; line-height: 1.3; margin: 0;\">\n            <strong>SPF &amp; DKIM:</strong> The CEO's domain has a list of authorized mail IPs. The hacker's IP isn't on the list ➔ <strong>SPF = FAIL ❌</strong>. The cryptographic signature is missing ➔ <strong>DKIM = FAIL ❌</strong>.\n          </p>\n        </div>\n      "
      }
    },
    {
      "spreadId": 4,
      "left": {
        "pageNumber": 9,
        "runningHead": "Topic 2: Crime Scene Investigation — Scene Control",
        "content": "\n        <h2>Topic 2: Investigation of digital crime scenes</h2>\n        <h3>2.1 Arrival &amp; Securing the Perimeter</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 6px;\">\n          You lead a cyber raid team into an apartment. The digital crime scene is extremely fragile. The first 3 minutes determine whether your evidence survives in court.\n        </p>\n\n        <!-- What you do in the first 3 minutes -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 3px;\">\n            🚨 The First 180 Seconds: What You Physically Do\n          </div>\n          <ol style=\"font-size: 0.75rem; line-height: 1.34; margin-left: 16px; margin-bottom: 3px;\">\n            <li><strong>Separate All Persons from Electronics:</strong> Move suspects away from desks immediately! Suspects will try to hit the power button, slam laptop lids, or enter self-destruct hotkeys.</li>\n            <li><strong>Do NOT Touch the Mouse or Keyboard:</strong> Never click anything or type randomly. Every keystroke alters system logs and memory.</li>\n            <li><strong>Search for Booby Traps:</strong> Look for \"kill-switch\" USB rubber duckies, flash drives tied to door handles with fishing line, or open shredder programs.</li>\n            <li><strong>Identify External Internet Lines:</strong> Find the Wi-Fi router, optical fiber modem, and Ethernet cables. Disconnect the WAN internet cable to prevent remote outside tampering!</li>\n          </ol>\n        </div>\n\n        <div style=\"background: var(--page-bg-subtle); border: 1px solid var(--ui-border); padding: 5px 8px; border-radius: 4px; font-size: 0.74rem; line-height: 1.32;\">\n          <strong>Legal Shield (Section 105 BNSS 2023):</strong> All scene entry, search, and seizure in India <strong>must be video-recorded</strong> on a smartphone or bodycam from the doorway continuously without pauses, in the presence of 2 independent witnesses (Panchas).\n        </div>\n"
      },
      "right": {
        "pageNumber": 10,
        "runningHead": "Topic 2: Crime Scene — RF Isolation & Photography",
        "content": "\n        <h2>Topic 2: Investigation of digital crime scenes</h2>\n        <h3>2.2 RF Isolation &amp; In-Situ Photography</h3>\n\n        <!-- In-Situ Photography -->\n        <div style=\"background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-left: 3px solid #10b981; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #047857; font-size: 0.8rem; margin-bottom: 2px;\">\n            📸 1. In-Situ Photography: Capture Before You Touch\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            <em>In-situ</em> means \"in its original place\". Take high-resolution photos in 4 stages:\n          </p>\n          <ul style=\"font-size: 0.74rem; line-height: 1.3; margin-left: 14px; margin-bottom: 0;\">\n            <li><strong>Wide-Angle Room View:</strong> Shows the computer in context of doors, windows, and suspects.</li>\n            <li><strong>Screen Closeup:</strong> Photograph whatever is displayed on the monitor (open chats, web pages, error messages).</li>\n            <li><strong>Back Panel Cabling:</strong> Photograph which cables (USB, HDMI, Ethernet) are plugged into which exact ports.</li>\n            <li><strong>Physical Clues:</strong> Sticky notes with written passwords on monitors, diaries, or USBs under mice pads!</li>\n          </ul>\n        </div>\n\n        <!-- RF Isolation / Faraday -->\n        <div style=\"background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.25); border-left: 3px solid #f59e0b; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #b45309; font-size: 0.8rem; margin-bottom: 2px;\">\n            🛡️ 2. RF Isolation: Building the Electronic Shield\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0;\">\n            Smartphones, smartwatches, and tablets must be shielded from incoming radio signals instantly. If you don't have a Faraday bag immediately, use <strong>three layers of heavy-duty aluminum foil</strong> wrapped tightly around the phone with zero gaps, or switch to Airplane Mode.\n          </p>\n        </div>\n\n        <!-- The Mouse Jiggler Trick -->\n        <div style=\"background: var(--page-bg-subtle); border-left: 3px solid #0284c7; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.32;\">\n          <strong>💡 The Mouse Jiggler Trick:</strong> If the computer screen is currently on and logged in, Windows may lock itself after 3 minutes of inactivity. Plug a hardware <strong>Mouse Jiggler</strong> USB or gently tap the <code>Shift</code> key every 60 seconds to keep the screen awake while you plug in your RAM acquisition drive!\n        </div>\n"
      }
    },
    {
      "spreadId": 5,
      "left": {
        "pageNumber": 11,
        "runningHead": "Topic 2: Crime Scene — Live Triage Protocol",
        "content": "\n        <h2>Topic 2: Investigation of digital crime scenes</h2>\n        <h3>2.3 Live System Triage: When the Screen is ON</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 6px;\">\n          You walk into the office and the suspect's computer monitor is glowing. The desktop is unlocked. What do you do on your laptop and with your forensic USB?\n        </p>\n\n        <!-- Live Triage Steps -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 3px;\">\n            💻 The Live Triage Workflow (Hands-On Step-by-Step)\n          </div>\n          <ol style=\"font-size: 0.75rem; line-height: 1.34; margin-left: 16px; margin-bottom: 3px;\">\n            <li><strong>DO NOT Power Off!</strong> Pulling the plug destroys RAM, BitLocker keys, and live chat sessions.</li>\n            <li><strong>Insert Your Forensic USB:</strong> Plug in your sterile USB containing command-line portable tools (<code>winpmem.exe</code> or <code>DumpIt.exe</code>). Never copy tools to the suspect's drive!</li>\n            <li><strong>Dump Live RAM:</strong> Run <code>winpmem.exe -o E:\\evidence_ram.raw</code>. Stream memory directly to your external drive.</li>\n            <li><strong>Record Live Network Connections:</strong> Run <code>netstat -ano > E:\\active_connections.txt</code> (records active attacker IP sockets).</li>\n            <li><strong>Record Running Processes:</strong> Run <code>tasklist /v > E:\\live_processes.txt</code> (shows hidden background malware).</li>\n            <li><strong>Compute SHA-256 Instantly:</strong> Generate hashes before pulling the power cord!</li>\n          </ol>\n        </div>\n\n        <div style=\"background: rgba(239, 68, 68, 0.07); border-left: 3px solid #ef4444; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.3;\">\n          <strong style=\"color: #b91c1c;\">⚠️ The Fatal Trap:</strong> An officer clicks \"Shut Down\" from the Start menu. Windows installs pending updates, overwrites RAM with shutdown logs, and erases memory contents cleanly! Always perform a live dump first, then yank the power cord directly.\n        </div>\n"
      },
      "right": {
        "pageNumber": 12,
        "runningHead": "Topic 2: Crime Scene — Dead System Protocol",
        "content": "\n        <h2>Topic 2: Investigation of digital crime scenes</h2>\n        <h3>2.4 Dead System Protocol: When the Screen is OFF</h3>\n\n        <div style=\"background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.25); border-left: 3px solid #ef4444; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <strong style=\"color: #b91c1c; font-size: 0.8rem;\">🛑 CARDINAL FORENSIC RULE: NEVER TURN ON A DEAD SYSTEM!</strong>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 3px 0 0 0;\">\n            An untrained cop thinks: <em>\"Let me just turn it on to see what files are on the desktop.\"</em> Turning on a computer executes startup programs, modifies 5,000 registry keys, deletes temporary files, wipes slack space, and destroys your legal chain of custody!\n          </p>\n        </div>\n\n        <!-- How to properly pull power -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 3px;\">\n            🔌 How to Disconnect Power Safely at the Scene\n          </div>\n          <ul style=\"font-size: 0.74rem; line-height: 1.32; margin-left: 14px; margin-bottom: 0;\">\n            <li><strong>Desktop Tower:</strong> Pull the power plug directly out from the <strong>back of the computer tower</strong>! (Do NOT unplug from the wall socket—the computer might be connected to an invisible battery backup / UPS under the desk).</li>\n            <li><strong>Laptops:</strong> Unplug the AC charger. If the battery is removable, remove it immediately. If the battery is non-removable, <strong>leave the lid open</strong> (closing it writes a hibernate file to disk) and hold the power button down for 10 seconds to force hard power-off.</li>\n            <li><strong>Label All Cables:</strong> Use colored masking tape to label every cable before unplugging (e.g., <em>Cable 1 ➔ HDMI Port 1</em>).</li>\n          </ul>\n        </div>\n\n        <div style=\"background: var(--page-bg-subtle); border: 1px solid var(--ui-border); padding: 5px 8px; border-radius: 4px; font-size: 0.74rem; line-height: 1.32;\">\n          <strong>Secure Packaging:</strong> Place the computer tower or laptop in an anti-static bubble bag, apply red tamper-evident tape across all drive bays and USB ports, and sign across the tape with witness signatures.\n        </div>\n"
      }
    },
    {
      "spreadId": 6,
      "left": {
        "pageNumber": 13,
        "runningHead": "Topic 3: maintaining proper documentation",
        "content": "\n        <h2>Topic 3: maintaining proper documentation</h2>\n        <h3>3.1 The Investigator's Field Diary</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          In criminal court, there is an unbending golden rule: <strong>\"If it wasn't written down in ink at that exact moment, in the eyes of the judge, it never happened!\"</strong>\n        </p>\n\n        <!-- The Field Logbook -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            📓 The Black Box Field Diary (Contemporaneous Notes)\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            Never use loose sheets or a pencil! Carry a bound hard-cover notebook with pre-printed page numbers.\n          </p>\n          <ul style=\"font-size: 0.74rem; line-height: 1.3; margin-left: 14px; margin-bottom: 0;\">\n            <li><strong>Exact Arrival Time &amp; Weather:</strong> <em>\"10:14 AM, 3rd floor flat, AC running at 22°C.\"</em></li>\n            <li><strong>State of Electronics:</strong> <em>\"Dell OptiPlex desktop active; screen displaying WhatsApp Web chat with 'Vikram'.\"</em></li>\n            <li><strong>Hardware Identifiers:</strong> Record Model, Serial # (e.g. <code>SN: WCC4N1049281</code>), and capacity before unplugging.</li>\n            <li><strong>Every Physical Action:</strong> Who unplugged the cable, at what exact minute, and which USB port was used.</li>\n          </ul>\n        </div>\n\n        <div style=\"background: rgba(239, 68, 68, 0.07); border-left: 3px solid #ef4444; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.3;\">\n          <strong style=\"color: #b91c1c;\">⚠️ The Courtroom Trap:</strong> If you write notes 3 days later from memory, the defense lawyer will ask: <em>\"Officer, what was the serial number of the drive you seized?\"</em> When you hesitate, they claim police planted a different hard drive!\n        </div>\n"
      },
      "right": {
        "pageNumber": 14,
        "runningHead": "Topic 3: Documentation — Seizure Memo (Panchnama)",
        "content": "\n        <h2>Topic 3: maintaining proper documentation</h2>\n        <h3>3.2 The Seizure Memo (Panchnama) under Sec 105 BNSS</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          The Seizure Memo (Panchnama) is the <strong>legal birth certificate</strong> of digital evidence. Under **Section 105 BNSS 2023**, strict procedures are mandatory:\n        </p>\n\n        <!-- Panchnama Anatomy -->\n        <div style=\"background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-left: 3px solid #10b981; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #047857; font-size: 0.8rem; margin-bottom: 2px;\">\n            📜 Anatomy of a Bulletproof Panchnama\n          </div>\n          <ol style=\"font-size: 0.74rem; line-height: 1.32; margin-left: 16px; margin-bottom: 2px;\">\n            <li><strong>Two Independent Witnesses (Panchas):</strong> Respectable local citizens with no police connection. They observe the entire seizure.</li>\n            <li><strong>Mandatory Videography:</strong> A continuous, unedited video recording from entry to sealing.</li>\n            <li><strong>Exhaustive Description:</strong> Brand, serial number, existing physical damages (scratches, cracked glass) so the suspect cannot claim police broke it.</li>\n            <li><strong>Tamper Seal Number:</strong> Record the unique holographic serial number of the evidence tape applied.</li>\n            <li><strong>Signatures:</strong> Both Panchas, the seizing officer, and the suspect must sign across every single page and across the physical seals!</li>\n          </ol>\n        </div>\n\n        <div style=\"background: var(--page-bg-subtle); border: 1px solid var(--ui-border); padding: 5px 8px; border-radius: 4px; font-size: 0.74rem; line-height: 1.32;\">\n          <strong>Why Witness Signatures Across Seals Matter:</strong> If the tape is peeled off, the ink signature splits. It is physically impossible to put the tape back on without misaligning the signature line!\n        </div>\n"
      }
    },
    {
      "spreadId": 7,
      "left": {
        "pageNumber": 15,
        "runningHead": "Topic 4: chain of custody — Architecture",
        "content": "\n        <h2>Topic 4: chain of custody</h2>\n        <h3>4.1 The Olympic 4x100m Relay Race</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          Think of the <strong>Chain of Custody</strong> like an Olympic 4x100m relay race. If Runner 1 drops the baton, or hands it to an unregistered stranger, the entire team is disqualified!\n        </p>\n\n        <!-- Relay Analogy Box -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            🏃 Cradle-to-Grave Tracking: Every Hand Must Sign\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            From the moment a hard drive is picked up from a suspect's desk until it is presented to the High Court judge, every single transfer must be signed on the Chain of Custody form:\n          </p>\n          <div style=\"font-size: 0.72rem; line-height: 1.3; background: var(--page-bg); border: 1px solid var(--ui-border); padding: 4px 7px; border-radius: 3px;\">\n            <strong>• Who Released It:</strong> Officer Name, Rank &amp; Signature.<br>\n            <strong>• Who Received It:</strong> Malkhana custodian / Lab analyst signature.<br>\n            <strong>• Date &amp; Minute:</strong> <em>\"14-Oct-2026 at 14:32 IST\"</em>.<br>\n            <strong>• Purpose:</strong> <em>\"Transferred for bit-stream imaging at CFSL CBI\"</em>.<br>\n            <strong>• Seal Condition:</strong> <em>\"Verified intact with holographic seal #DEL-8492\"</em>.\n          </div>\n        </div>\n\n        <div style=\"background: rgba(245, 158, 11, 0.07); border-left: 3px solid #f59e0b; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.3;\">\n          <strong>The Golden Standard:</strong> If anyone asks: <em>\"Where was this hard drive on 15th August at 3:00 PM?\"</em>, you can point to the log and say: <em>\"Locked in Vault 3, Locker 12 of the Central Forensic Lab under Custodian Sharma.\"</em>\n        </div>\n"
      },
      "right": {
        "pageNumber": 16,
        "runningHead": "Topic 4: chain of custody — Break in Custody",
        "content": "\n        <h2>Topic 4: chain of custody</h2>\n        <h3>4.2 Surviving a \"Break in Custody\" Challenge</h3>\n\n        <!-- The 52-Hour Mystery -->\n        <div style=\"background: rgba(239, 68, 68, 0.07); border: 1px solid rgba(239, 68, 68, 0.25); border-left: 3px solid #ef4444; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #b91c1c; font-size: 0.8rem; margin-bottom: 2px;\">\n            💥 The Defense Lawyer's Classic Trap: The 52-Hour Gap\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0;\">\n            In court, the defense lawyer checks your log: <em>\"Officer, evidence left the police station on Friday at 5 PM, but the lab received it on Monday at 9 AM. Where was the suspect's laptop for 52 hours? Did it spend the weekend in your personal car trunk? How can we be sure you didn't plant evidence?\"</em><br>\n            If there is a gap, the court presumes tampering and throws out the evidence!\n          </p>\n        </div>\n\n        <!-- How to Protect Against Breaks -->\n        <div style=\"background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-left: 3px solid #10b981; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #047857; font-size: 0.8rem; margin-bottom: 2px;\">\n            🛡️ The 2 Shields That Prove Zero Tampering\n          </div>\n          <ul style=\"font-size: 0.74rem; line-height: 1.32; margin-left: 14px; margin-bottom: 0;\">\n            <li><strong>Tamper-Evident Tape:</strong> Specialized red security tape. If someone tries to peel it, the adhesive self-destructs and reveals permanent white letters: <strong>\"VOID / OPENED\"</strong>.</li>\n            <li><strong>Cryptographic Hash Comparison:</strong> Even if someone challenges the physical box, you show the SHA-256 hash computed at the scene: <code>e3b0c4...</code> and the hash at the lab: <code>e3b0c4...</code>. <strong>Math proves not a single 0 or 1 was altered!</strong></li>\n          </ul>\n        </div>\n"
      }
    },
    {
      "spreadId": 8,
      "left": {
        "pageNumber": 17,
        "runningHead": "Topic 5: SOP — Handling & Preservation",
        "content": "\n        <h2>Topic 5: SOP for Handling &amp; Preservation</h2>\n        <h3>5.1 Electrostatic (ESD) Safety: The Invisible Lightning</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          You can permanently destroy a seized hard drive or RAM chip without dropping it, without spilling water, and without even knowing you did it!\n        </p>\n\n        <!-- ESD Analogy -->\n        <div style=\"background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.25); border-left: 3px solid #f59e0b; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #b45309; font-size: 0.8rem; margin-bottom: 2px;\">\n            ⚡ The Invisible 10,000-Volt Zap\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            Walking across a carpet on a dry day builds up **3,000 to 15,000 Volts** of static electricity in your body. When you touch a metal doorknob, you feel a tiny spark. But microchips on a hard drive circuit board can be fried by just **100 Volts**!\n          </p>\n          <div style=\"font-size: 0.73rem; line-height: 1.3; background: var(--page-bg); border: 1px solid var(--ui-border); padding: 4px 7px; border-radius: 3px;\">\n            <strong>What You Physically Do:</strong><br>\n            • Wear an <strong>Anti-Static Wrist Strap</strong> clipped to an unpainted metal chassis.<br>\n            • Hold circuit boards and hard drives by their <strong>outer metal edges only</strong>.<br>\n            • <strong>NEVER touch the shiny gold connector pins</strong> with bare fingers! The static electricity in your fingertips will zap the controller chips dead.\n          </div>\n        </div>\n\n        <div style=\"background: rgba(2, 132, 199, 0.05); border-left: 3px solid #0284c7; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.32;\">\n          <strong>Anti-Static Bags:</strong> Always place bare hard drives into semi-transparent silver or pink anti-static bags that form a Faraday cage around the circuits.\n        </div>\n"
      },
      "right": {
        "pageNumber": 18,
        "runningHead": "Topic 5: SOP — Acquisition of Evidence",
        "content": "\n        <h2>Topic 5: SOP for Handling &amp; Preservation</h2>\n        <h3>5.2 SOP: Acquisition &amp; Verification Protocol</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          When acquiring evidence from storage media, follow this certified 5-step Standard Operating Procedure:\n        </p>\n\n        <!-- 5-Step SOP -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            📋 The 5-Step Bit-Stream Acquisition Checklist\n          </div>\n          <ol style=\"font-size: 0.74rem; line-height: 1.32; margin-left: 16px; margin-bottom: 2px;\">\n            <li><strong>Sterilize Destination Media:</strong> Wipe your forensic destination drive with zeros (<code>DoD 5220.22-M</code> or zero-fill) to guarantee no old case data lingers.</li>\n            <li><strong>Connect via Hardware Write-Blocker:</strong> Verify the green \"WRITE BLOCKED\" LED is on before connecting to your workstation.</li>\n            <li><strong>Initial Hash Computation:</strong> The software reads sector 0 to max sector and computes SHA-256.</li>\n            <li><strong>Select Container Format:</strong> Choose <strong>E01</strong> (Expert Witness) to embed case metadata, hashes, and internal CRC error checks.</li>\n            <li><strong>Verification Hash:</strong> The software immediately reads back the generated image and verifies that Source Hash == Image Hash.</li>\n          </ol>\n        </div>\n\n        <div style=\"background: rgba(16, 185, 129, 0.07); border-left: 3px solid #10b981; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.3;\">\n          <strong>Work on the Clone, Never the Original:</strong> Once the image is verified, store the original in a safe. Make a working copy of the image and conduct 100% of your examination on the working copy!\n        </div>\n"
      }
    },
    {
      "spreadId": 9,
      "left": {
        "pageNumber": 19,
        "runningHead": "Topic 5: SOP — packaging & labeling",
        "content": "\n        <h2>Topic 5: SOP Packaging &amp; Labeling</h2>\n        <h3>5.3 The 3 Golden Bags &amp; Evidence Labeling</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          Different electronic items require completely different packaging materials to survive transit:\n        </p>\n\n        <!-- The 3 Bags -->\n        <div style=\"background: var(--page-bg-subtle); border: 1px solid var(--ui-border); padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-size: 0.74rem; line-height: 1.34;\">\n            <strong>1. Anti-Static Bag (Pink / Metallic Silver):</strong> For bare hard drives, SSDs, memory chips. Discharges static safely.<br><br>\n            <strong>2. Faraday Pouch (Copper-Mesh Fabric):</strong> For smartphones, smartwatches, GPS units. Blocks incoming remote wipe radio waves.<br><br>\n            <strong>3. Bubble Wrap &amp; Rigid Cardboard Box:</strong> Hard drives have microscopic mechanical needles floating over platters. Dropping a drive 2 inches onto a table can cause a head crash! Wrap in 2 inches of bubble wrap.\n          </div>\n        </div>\n\n        <!-- The Exhibit Label -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border-left: 3px solid #0284c7; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.32;\">\n          <strong>Every Exhibit Label Must State:</strong><br>\n          • Exhibit Number: <code>EX-01/HDD</code><br>\n          • Seizing Officer: Name, Rank &amp; Belt #<br>\n          • Date, Time &amp; Seizure Location<br>\n          • Witness Signatures across the seal tape!\n        </div>\n"
      },
      "right": {
        "pageNumber": 20,
        "runningHead": "Topic 5: SOP — Transportation Pitfalls",
        "content": "\n        <h2>Topic 5: SOP Transportation Pitfalls</h2>\n        <h3>5.4 The 4 Transportation Nightmares</h3>\n\n        <!-- 4 Pitfalls Box -->\n        <div style=\"background: rgba(239, 68, 68, 0.07); border: 1px solid rgba(239, 68, 68, 0.25); border-left: 3px solid #ef4444; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #b91c1c; font-size: 0.8rem; margin-bottom: 2px;\">\n            🚗 What Ruins Evidence Between the Scene and the Lab\n          </div>\n          <ul style=\"font-size: 0.74rem; line-height: 1.32; margin-left: 14px; margin-bottom: 0;\">\n            <li><strong>Car Trunk Heat Oven:</strong> A car trunk in Indian summer reaches 65°C! Extreme heat demagnetizes hard drive platters and causes lithium phone batteries to swell or explode. <em>Always transport evidence inside the air-conditioned cabin!</em></li>\n            <li><strong>Police Wireless Radio Magnets:</strong> High-power police VHF radio transmitters and heavy car speaker magnets create magnetic fields that can corrupt bits on magnetic tapes and older HDDs. Keep evidence 3 feet away!</li>\n            <li><strong>Airport X-Ray Scanners:</strong> Security walkthrough metal detectors generate pulsed magnetic fields. Carry evidence with official movement orders and request physical hand inspection.</li>\n            <li><strong>Moisture &amp; Condensation:</strong> Bringing a cold drive into a hot humid room causes water condensation on platters. Let drives acclimate before powering on!</li>\n          </ul>\n        </div>\n\n        <div style=\"background: var(--page-bg-subtle); border: 1px solid var(--ui-border); padding: 5px 8px; border-radius: 4px; font-size: 0.74rem; line-height: 1.32;\">\n          <strong>Log the Mileage &amp; Route:</strong> In sensitive cases, log the vehicle odometer reading and transit route so defense counsel cannot allege an unrecorded detour.\n        </div>\n"
      }
    },
    {
      "spreadId": 10,
      "left": {
        "pageNumber": 21,
        "runningHead": "Topic 6: Acquisition Tools — Hardware Bridges",
        "content": "\n        <h2>Topic 6: digital data acquisition tools</h2>\n        <h3>6.1 Hardware Write-Blockers &amp; Dedicated Duplicators</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          What physical devices do forensic examiners carry in their toolkit, and how do they work on your desk?\n        </p>\n\n        <!-- Hardware Bridge vs Standalone Duplicator -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            🔌 1. Portable Hardware Bridges (e.g., Tableau T8u)\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            A small pocket-sized adapter that connects between the suspect's drive and your forensic laptop.\n          </p>\n          <p style=\"font-size: 0.74rem; line-height: 1.3; margin: 0;\">\n            <strong>How It Works Electronically:</strong> The bridge contains a specialized microcontroller. When your laptop sends a <em>Write</em> command (e.g., SATA command <code>0x25 WRITE EXT</code>), the bridge chip instantly blocks it and returns <em>\"Error: Drive is Write-Protected\"</em>. Only <em>Read</em> commands (<code>0x20 READ EXT</code>) are permitted through.\n          </p>\n        </div>\n\n        <div style=\"background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-left: 3px solid #10b981; padding: 6px 9px; border-radius: 4px; margin-bottom: 4px;\">\n          <div style=\"font-weight: 700; color: #047857; font-size: 0.8rem; margin-bottom: 2px;\">\n            💼 2. Standalone Field Duplicators (e.g., Logicube Falcon / Atola)\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0;\">\n            A self-contained forensic computer packed inside a rugged military case. It has two drive bays: <strong>SOURCE (Write-Blocked)</strong> and <strong>TARGET</strong>. You don't even need a laptop! You plug both drives in, press Start on the touch screen, and it clones at 50 GB/min while printing a paper receipt with the SHA-256 hash!\n          </p>\n        </div>\n"
      },
      "right": {
        "pageNumber": 22,
        "runningHead": "Topic 6: Acquisition Tools — Software & Formats",
        "content": "\n        <h2>Topic 6: digital data acquisition tools</h2>\n        <h3>6.2 Software Imagers &amp; Forensic Formats</h3>\n\n        <!-- Software Imagers -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            💻 The Two Workhorses: FTK Imager &amp; dc3dd\n          </div>\n          <ul style=\"font-size: 0.74rem; line-height: 1.32; margin-left: 14px; margin-bottom: 0;\">\n            <li><strong>FTK Imager (Windows GUI):</strong> Industry standard. Clean graphical interface, mounts images as drive letters, calculates hashes, and previews slack space.</li>\n            <li><strong>dc3dd (Linux CLI):</strong> The US Department of Defense version of the Unix <code>dd</code> command. Run: <code>dc3dd if=/dev/sdb of=/evidence/case.raw hash=sha256</code>. Includes progress indicators and bad-sector auto-zeroing.</li>\n          </ul>\n        </div>\n\n        <!-- The 3 Image Formats -->\n        <div style=\"background: var(--page-bg-subtle); border: 1px solid var(--ui-border); padding: 6px 9px; border-radius: 4px; margin-bottom: 4px;\">\n          <div style=\"font-weight: 700; color: var(--text-heading); font-size: 0.79rem; margin-bottom: 3px;\">\n            📦 The 3 Forensic Container Formats Compared:\n          </div>\n          <div style=\"font-size: 0.73rem; line-height: 1.32;\">\n            • <strong>RAW / DD (.raw / .dd):</strong> An exact dump of 0s and 1s. Simple and universal, but has NO built-in metadata, no compression, and no case information.<br>\n            • <strong>E01 (Expert Witness Format):</strong> The gold standard in courts! Compresses data by ~40%, embeds case name, examiner name, acquisition date, and has a checksum at every block to detect corruption.<br>\n            • <strong>AFF (Advanced Forensic Format):</strong> Open-source, extensible alternative to E01.\n          </div>\n        </div>\n"
      }
    },
    {
      "spreadId": 11,
      "left": {
        "pageNumber": 23,
        "runningHead": "Topic 7: Collecting Data — Hard Drives (HDDs)",
        "content": "\n        <h2>Topic 7: Collecting Data from Digital Sources</h2>\n        <h3>7.1 Collecting from Hard Disk Drives (HDDs)</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          Traditional mechanical hard drives have spinning magnetic platters with microscopic read/write heads flying a few nanometers above the surface.\n        </p>\n\n        <!-- HDD Step by Step -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            🛠️ Step-by-Step HDD Extraction at Your Desk\n          </div>\n          <ol style=\"font-size: 0.74rem; line-height: 1.32; margin-left: 16px; margin-bottom: 2px;\">\n            <li><strong>Photograph Drive Label:</strong> Capture the serial number, model, firmware, and jumper settings.</li>\n            <li><strong>Identify Interface:</strong> SATA (standard L-connector), NVMe/M.2 (blade stick), or older IDE (40-pin ribbon).</li>\n            <li><strong>Handle Bad Sectors:</strong> If the drive has physical scratches, normal copying freezes. Forensic software uses <strong>reverse reading</strong> and replaces unreadable sectors with zeros while logging their sector IDs.</li>\n            <li><strong>Capture Host Protected Area (HPA):</strong> Ensure your write-blocker temporarily unmasks HPA/DCO hidden partitions so no secret sectors escape the image.</li>\n          </ol>\n        </div>\n\n        <div style=\"background: rgba(245, 158, 11, 0.07); border-left: 3px solid #f59e0b; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.3;\">\n          <strong>Magnetic Remanence:</strong> On HDDs, deleted files stay physically on the magnetic coating for months or years until another file writes over them.\n        </div>\n"
      },
      "right": {
        "pageNumber": 24,
        "runningHead": "Topic 7: Collecting Data — The SSD TRIM Nightmare",
        "content": "\n        <h2>Topic 7: Collecting Data from Digital Sources</h2>\n        <h3>7.2 The SSD TRIM Nightmare: The Janitor with the Broom</h3>\n\n        <!-- The TRIM Story -->\n        <div style=\"background: rgba(239, 68, 68, 0.07); border: 1px solid rgba(239, 68, 68, 0.25); border-left: 3px solid #ef4444; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #b91c1c; font-size: 0.8rem; margin-bottom: 2px;\">\n            🧹 Why Deleted Files on SSDs Vanish Within Minutes\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            Solid State Drives (SSDs) use flash chips. Unlike HDDs, flash memory cannot overwrite an existing cell—it must completely wipe a 2 MB block before writing new data!\n          </p>\n          <p style=\"font-size: 0.74rem; line-height: 1.3; margin: 0;\">\n            <strong>The Janitor (TRIM Command):</strong> To keep the SSD fast, Windows sends a <code>TRIM</code> command: <em>\"Hey SSD, user deleted this file, clean those cells now!\"</em> The SSD's internal garbage collector sweeps in and replaces the deleted data with zeros (<code>0x00</code>).\n          </p>\n        </div>\n\n        <!-- The Forensic Implication -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 4px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            🛡️ What You Physically Do to Save Evidence on an SSD:\n          </div>\n          <ul style=\"font-size: 0.74rem; line-height: 1.32; margin-left: 14px; margin-bottom: 0;\">\n            <li><strong>Cut Power Immediately:</strong> If an SSD stays powered on, the internal janitor keeps running even if the computer is idle, zeroing out deleted evidence!</li>\n            <li><strong>Use TRIM-Disabling Write-Blockers:</strong> When imaging in the lab, use a hardware write-blocker that actively filters out ATA <code>DATA SET MANAGEMENT (TRIM)</code> commands.</li>\n          </ul>\n        </div>\n"
      }
    },
    {
      "spreadId": 12,
      "left": {
        "pageNumber": 25,
        "runningHead": "Topic 7: Collecting Data — Mobile & Network",
        "content": "\n        <h2>Topic 7: Collecting Data from Digital Sources</h2>\n        <h3>7.3 Mobile Devices &amp; Network Logs</h3>\n\n        <!-- Mobile Extraction Levels -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            📱 The 3 Levels of Mobile Extraction\n          </div>\n          <ul style=\"font-size: 0.74rem; line-height: 1.32; margin-left: 14px; margin-bottom: 0;\">\n            <li><strong>1. Logical Extraction (Front Door):</strong> Like an iTunes or Android ADB backup. Copies contacts, SMS, call logs, and camera photos. Misses app sandbox databases and deleted messages.</li>\n            <li><strong>2. File System Extraction (Full House Tour):</strong> Gains root/jailbreak privilege. Copies app databases (WhatsApp <code>msgstore.db</code>), browser caches, and system logs.</li>\n            <li><strong>3. Physical Extraction (Bit-by-Bit):</strong> Dumps the entire raw flash chip. Captures unallocated space and deleted media. Extremely difficult on modern encrypted phones.</li>\n          </ul>\n        </div>\n\n        <!-- Network Logs -->\n        <div style=\"background: var(--page-bg-subtle); border-left: 3px solid #f59e0b; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.32;\">\n          <strong>🌐 Network Router Logs:</strong> Download DHCP lease logs (matches MAC addresses to internal IPs with timestamps) and DNS query logs (reveals every website visited by devices on the Wi-Fi network).\n        </div>\n"
      },
      "right": {
        "pageNumber": 26,
        "runningHead": "Topic 7: Collecting Data — Cloud & Email",
        "content": "\n        <h2>Topic 7: Collecting Data from Digital Sources</h2>\n        <h3>7.4 Cloud Storage &amp; Corporate Email Servers</h3>\n\n        <!-- Cloud Storage -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            ☁️ Cloud Storage (Google Drive / OneDrive / Dropbox)\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0;\">\n            <strong>Never download files via a regular web browser!</strong> Downloading alters cloud file access dates. Use forensic API extractors (like Magnet AXIOM Cloud) using legal warrant tokens. This preserves original server timestamps, revision histories, and MD5 hashes.\n          </p>\n        </div>\n\n        <!-- Corporate Email Servers -->\n        <div style=\"background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-left: 3px solid #10b981; padding: 6px 9px; border-radius: 4px; margin-bottom: 4px;\">\n          <div style=\"font-weight: 700; color: #047857; font-size: 0.8rem; margin-bottom: 2px;\">\n            📧 Corporate Email Servers (Exchange / Office 365)\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0;\">\n            Export mailboxes as <strong>.PST</strong> or <strong>.EDB</strong> (Exchange database) files using legal eDiscovery searches. Extract unedited RFC 822 email bodies with original attachment hashes, and pull server audit logs showing who accessed the mailbox and when.\n          </p>\n        </div>\n"
      }
    },
    {
      "spreadId": 13,
      "left": {
        "pageNumber": 27,
        "runningHead": "Topic 8: hash value generation — Principles",
        "content": "\n        <h2>Topic 8: hash value generation</h2>\n        <h3>8.1 Mathematical Integrity &amp; The Digital DNA</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          How do you prove to a skeptical High Court judge that evidence was not planted by the police? You use <strong>Cryptographic Hashes</strong>.\n        </p>\n\n        <!-- Hash Analogy -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            🧬 The Magic Meat Grinder (One-Way Hashing)\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            Imagine a magic kitchen blender. You drop a 500-page book inside, press blend, and it produces a unique 64-character code (<strong>SHA-256</strong>).\n          </p>\n          <ul style=\"font-size: 0.74rem; line-height: 1.3; margin-left: 14px; margin-bottom: 0;\">\n            <li><strong>The Avalanche Effect:</strong> If you change just <strong>one single comma</strong> in the 500-page book, the entire 64-character code changes completely!</li>\n            <li><strong>One-Way Street:</strong> You can turn meat into sausages, but you cannot turn sausages back into a cow. You cannot reverse a hash back into the original data.</li>\n            <li><strong>MD5 vs. SHA-256:</strong> MD5 (128-bit) is broken—hackers can craft an \"evil twin\" file with the same hash (collision). Courts strictly mandate <strong>SHA-256</strong> ($2^{256}$ combinations; collision mathematically impossible).</li>\n          </ul>\n        </div>\n\n        <div style=\"background: rgba(16, 185, 129, 0.07); border-left: 3px solid #10b981; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.3;\">\n          <strong>The 3-Way Verification:</strong> Scene Hash == Image Hash == Working Copy Hash. When all three match, tamper-proofing is mathematically verified.\n        </div>\n"
      },
      "right": {
        "pageNumber": 28,
        "runningHead": "Topic 8: hash value generation — BSA Section 63",
        "content": "\n        <h2>Topic 8: hash value generation</h2>\n        <h3>8.2 Drafting the Section 63 BSA 2023 Certificate</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          Under the new Indian law — <strong>Section 63 of Bharatiya Sakshya Adhiniyam (BSA) 2023</strong> (replacing old Sec 65B IT Act) — electronic records require an admissibility certificate.\n        </p>\n\n        <!-- Certificate Box -->\n        <div style=\"background: var(--page-bg-subtle); border: 1px solid var(--ui-border); padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.79rem; margin-bottom: 2px;\">\n            📜 What You Put in Your Certificate on Your Laptop:\n          </div>\n          <div style=\"font-size: 0.73rem; line-height: 1.32;\">\n            1. <strong>Device Description:</strong> Make, model, serial # (e.g., <code>Seagate Barracuda SN: Z4T82N</code>).<br>\n            2. <strong>Operating Health:</strong> Certified statement that the computer was operating normally and not compromised.<br>\n            3. <strong>Mathematical Hashes:</strong><br>\n            &nbsp;&nbsp;• Original Physical Drive SHA-256: <code>e3b0c44298fc1c14...</code><br>\n            &nbsp;&nbsp;• Bit-Stream E01 Image SHA-256: <code>e3b0c44298fc1c14...</code><br>\n            &nbsp;&nbsp;• Hash Match Status: <strong>VERIFIED 100% IDENTICAL</strong>.<br>\n            4. <strong>Signatures:</strong> Signed by the forensic examiner and officer in charge.\n          </div>\n        </div>\n\n        <div style=\"background: rgba(239, 68, 68, 0.07); border-left: 3px solid #ef4444; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.3;\">\n          <strong>No Certificate = Inadmissible:</strong> Without this signed certificate, the defense can get WhatsApp chats, emails, and hard drive clones completely rejected as hearsay evidence!\n        </div>\n"
      }
    },
    {
      "spreadId": 14,
      "left": {
        "pageNumber": 29,
        "runningHead": "Topic 9: Data Recovery — NTFS $MFT",
        "content": "\n        <h2>Topic 9: Methods of Data Recovery and Carving</h2>\n        <h3>9.1 NTFS Internals &amp; The Master File Table ($MFT)</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          Windows uses the New Technology File System (NTFS). To recover deleted evidence, you must understand the secret bookkeeper: the <strong>Master File Table ($MFT)</strong>.\n        </p>\n\n        <!-- MFT Anatomy -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            🗂️ The Library Catalog &amp; Resident Files\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            Every file on an NTFS drive has a 1,024-byte record (index card) inside the hidden <code>$MFT</code> database file:\n          </p>\n          <ul style=\"font-size: 0.74rem; line-height: 1.3; margin-left: 14px; margin-bottom: 0;\">\n            <li><strong>Resident Files (The Post-It Note):</strong> If a file is small (under ~700 bytes, like a password list or short text file), Windows stores the actual content <strong>directly inside the $MFT record itself</strong>! Even if a suspect formats the drive, as long as the $MFT record exists, the entire file is instantly recovered!</li>\n            <li><strong>Non-Resident Files:</strong> Larger files store pointers (Data Runs) to clusters. When you press \"Delete\", Windows only flips a 1-bit switch in the $MFT: from <code>0x01</code> (In-Use) to <code>0x00</code> (Deleted). The data on the drive remains untouched!</li>\n          </ul>\n        </div>\n\n        <div style=\"background: var(--page-bg-subtle); border-left: 3px solid #10b981; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.32;\">\n          <strong>Recovery in Autopsy:</strong> In your forensic software, deleted files appear with a red [X]. Simply right-click ➔ <em>Export File</em> to restore them.\n        </div>\n"
      },
      "right": {
        "pageNumber": 30,
        "runningHead": "Topic 9: Data Recovery — FAT32 0xE5 Undeletion",
        "content": "\n        <h2>Topic 9: Methods of Data Recovery and Carving</h2>\n        <h3>9.2 FAT32 &amp; The Famous 0xE5 Deleted Flag</h3>\n\n        <!-- 0xE5 Story -->\n        <div style=\"background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.25); border-left: 3px solid #f59e0b; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #b45309; font-size: 0.8rem; margin-bottom: 2px;\">\n            ✏️ How FAT32 \"Deletes\" a File (The Strikethrough)\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            Most USB drives, SD cards, and dashcams use FAT32. When you delete a file named <code>MURDER.PDF</code>, FAT32 does NOT erase the file data or wipe the drive.\n          </p>\n          <p style=\"font-size: 0.74rem; line-height: 1.3; margin: 0;\">\n            Instead, it simply replaces the <strong>very first letter of the filename</strong> in the directory table with the hex byte <strong>0xE5</strong> (the Greek character &sigma;):<br>\n            <code>M U R D E R . P D F</code> &rarr; <code>[0xE5] U R D E R . P D F</code><br>\n            It marks the cluster chain as \"free to write\", but leaves 100% of the content intact on the sectors.\n          </p>\n        </div>\n\n        <!-- How to Recover -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 4px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            🛠️ What You Do in Hex Editor on Your Laptop:\n          </div>\n          <p style=\"font-size: 0.74rem; line-height: 1.32; margin: 0;\">\n            1. Open the disk image in <strong>WinHex</strong> or <strong>FTK Imager</strong>.<br>\n            2. Find the directory entry with <code>0xE5</code>.<br>\n            3. Replace <code>0xE5</code> with the original letter (e.g. <code>M</code>).<br>\n            4. Follow the starting cluster number recorded in the table ➔ Your deleted PDF opens instantly!\n          </p>\n        </div>\n"
      }
    },
    {
      "spreadId": 15,
      "left": {
        "pageNumber": 31,
        "runningHead": "Topic 9: Carving — Magic Bytes Signatures",
        "content": "\n        <h2>Topic 9: Methods of Data Recovery and Carving</h2>\n        <h3>9.3 File Carving: Finding Files When Tables are Destroyed</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          What happens when a suspect formats the drive or smashes the file system? Directory tables and $MFT are gone! File names no longer exist. How do you recover photos?\n        </p>\n\n        <!-- Magic Bytes Table -->\n        <div style=\"background: var(--page-bg-subtle); border: 1px solid var(--ui-border); padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.79rem; margin-bottom: 3px;\">\n            📖 The Magic Book Covers (File Headers &amp; Footers)\n          </div>\n          <p style=\"font-size: 0.74rem; line-height: 1.32; margin: 0 0 4px 0;\">\n            Every file format in the world begins and ends with distinctive hex bytes called <strong>Magic Numbers</strong>:\n          </p>\n          <table style=\"width: 100%; font-size: 0.72rem; border-collapse: collapse;\">\n            <tr style=\"background: var(--page-border); color: #fff;\">\n              <th style=\"padding: 3px 5px; text-align: left;\">File Type</th>\n              <th style=\"padding: 3px 5px; text-align: left;\">Header (Start)</th>\n              <th style=\"padding: 3px 5px; text-align: left;\">Footer (End)</th>\n            </tr>\n            <tr style=\"border-bottom: 1px solid var(--ui-border);\">\n              <td style=\"padding: 3px 5px;\"><strong>JPEG Image</strong></td>\n              <td style=\"padding: 3px 5px;\"><code>FF D8 FF E0 / E1</code></td>\n              <td style=\"padding: 3px 5px;\"><code>FF D9</code></td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid var(--ui-border);\">\n              <td style=\"padding: 3px 5px;\"><strong>PDF Document</strong></td>\n              <td style=\"padding: 3px 5px;\"><code>25 50 44 46 (%PDF)</code></td>\n              <td style=\"padding: 3px 5px;\"><code>25 25 45 4F 46 (%%EOF)</code></td>\n            </tr>\n            <tr>\n              <td style=\"padding: 3px 5px;\"><strong>ZIP / Office DOCX</strong></td>\n              <td style=\"padding: 3px 5px;\"><code>50 4B 03 04 (PK..)</code></td>\n              <td style=\"padding: 3px 5px;\"><code>50 4B 05 06</code></td>\n            </tr>\n          </table>\n        </div>\n\n        <div style=\"background: rgba(2, 132, 199, 0.05); border-left: 3px solid #0284c7; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.32;\">\n          <strong>How Carving Works:</strong> The software acts like a metal detector scanning raw sectors. When it spots <code>FF D8 FF</code>, it marks \"Start\". It reads until it hits <code>FF D9</code>, and carves out <code>recovered_001.jpg</code>!\n        </div>\n"
      },
      "right": {
        "pageNumber": 32,
        "runningHead": "Topic 9: Carving — Fragmented Files & Scalpel",
        "content": "\n        <h2>Topic 9: Methods of Data Recovery and Carving</h2>\n        <h3>9.4 Fragmented Files &amp; Carving with Scalpel</h3>\n\n        <!-- Fragmented Files -->\n        <div style=\"background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.25); border-left: 3px solid #f59e0b; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #b45309; font-size: 0.8rem; margin-bottom: 2px;\">\n            🧩 The Jigsaw Puzzle: Fragmented Files\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0;\">\n            If a file was stored contiguously, carving works 100%. But on crowded drives, large videos are split into 3 scattered chunks. A simple carver only grabs chunk 1, resulting in a half-playable video. Advanced carving uses bifragment gap analysis to stitch the pieces back together.\n          </p>\n        </div>\n\n        <!-- Scalpel on your laptop -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 4px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            💻 What You Run in Terminal on Your Laptop:\n          </div>\n          <p style=\"font-size: 0.74rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            Using the open-source forensic carver <strong>Scalpel</strong>:\n          </p>\n          <div style=\"background: var(--page-bg); border: 1px solid var(--ui-border); padding: 4px 6px; border-radius: 3px; font-size: 0.72rem; font-family: monospace;\">\n            # 1. Enable JPG and PDF in config:<br>\n            nano /etc/scalpel/scalpel.conf<br>\n            # 2. Execute carving against the raw image:<br>\n            scalpel -c scalpel.conf -o /evidence/carved_output/ case.raw\n          </div>\n          <p style=\"font-size: 0.73rem; line-height: 1.3; margin: 3px 0 0 0;\">\n            Scalpel scans the raw drive dump and dumps thousands of recovered images, PDFs, and Word documents into your output folder!\n          </p>\n        </div>\n"
      }
    },
    {
      "spreadId": 16,
      "left": {
        "pageNumber": 33,
        "runningHead": "Topic 10: Analytical Techniques — Metadata EXIF",
        "content": "\n        <h2>Topic 10: Analytical Techniques</h2>\n        <h3>10.1 Metadata: The Photo's Hidden Passport</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          Criminals often edit pictures, delete names, or crop photos, completely forgetting that the digital camera permanently stamps hidden metadata into the file:\n        </p>\n\n        <!-- EXIF Box -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            📸 What EXIF Data Tells You in Terminal on Your Laptop:\n          </div>\n          <p style=\"font-size: 0.74rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            Run: <code>exiftool suspect_photo.jpg</code>. Within 1 second, your screen displays:\n          </p>\n          <div style=\"font-size: 0.72rem; line-height: 1.3; background: var(--page-bg); border: 1px solid var(--ui-border); padding: 4px 7px; border-radius: 3px;\">\n            <strong>• Camera Device:</strong> Apple iPhone 15 Pro Max (Serial: <code>F2LN19X...</code>)<br>\n            <strong>• Date &amp; Millisecond:</strong> <code>2026:10:12 14:22:09.412+05:30</code><br>\n            <strong>• GPS Coordinates:</strong> <code>28.6139° N, 77.2090° E</code><br>\n            <strong>• Exact Altitude:</strong> <code>216 meters above sea level</code>\n          </div>\n          <p style=\"font-size: 0.73rem; line-height: 1.3; margin: 3px 0 0 0;\">\n            You paste the GPS coordinates into Google Maps: the suspect took the picture standing right outside Connaught Place, New Delhi!\n          </p>\n        </div>\n\n        <div style=\"background: var(--page-bg-subtle); border-left: 3px solid #10b981; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.32;\">\n          <strong>Document Metadata:</strong> In Word/PDF files, metadata reveals author names, total editing time, printer names, and revision history!\n        </div>\n"
      },
      "right": {
        "pageNumber": 34,
        "runningHead": "Topic 10: Analytical Techniques — Timestomping",
        "content": "\n        <h2>Topic 10: Analytical Techniques</h2>\n        <h3>10.2 Timestomping: Fake Passport vs. Birth Certificate</h3>\n\n        <!-- Timestomping Story -->\n        <div style=\"background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.25); border-left: 3px solid #f59e0b; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #b45309; font-size: 0.8rem; margin-bottom: 2px;\">\n            🕒 How Hackers Alter Dates (And How You Catch Them)\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            A hacker drops a backdoor Trojan <code>malware.exe</code> onto a server today. To blend in with legitimate system files, the hacker uses a tool like <em>Timestomp</em> to change the file creation date to <strong>12-Nov-2018</strong>.\n          </p>\n          <p style=\"font-size: 0.74rem; line-height: 1.3; margin: 0;\">\n            <strong>The Two Clocks of NTFS:</strong> Windows tracks two separate timestamps inside the <code>$MFT</code> record:\n            <br>1. <code>$STANDARD_INFORMATION ($SI)</code>: The user-accessible timestamp (the fake passport). Hackers can change this.\n            <br>2. <code>$FILE_NAME ($FN)</code>: The internal system timestamp written strictly by the Windows OS kernel. Normal user tools cannot touch it!\n          </p>\n        </div>\n\n        <!-- Catching them in Autopsy -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 4px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            🔍 What Your Screen Shows in Autopsy:\n          </div>\n          <p style=\"font-size: 0.74rem; line-height: 1.32; margin: 0;\">\n            Autopsy compares the two records side by side:<br>\n            • <code>$SI Timestamp:</code> <code>2018-11-12 10:00:00</code> (Fake)<br>\n            • <code>$FN Timestamp:</code> <code>2026-10-14 23:42:10</code> (Real!)<br>\n            <strong>Timestomp Detected!</strong> You prove the file was dropped on 14th Oct 2026 and backdated to deceive investigators.\n          </p>\n        </div>\n"
      }
    },
    {
      "spreadId": 17,
      "left": {
        "pageNumber": 35,
        "runningHead": "Topic 10: Analytical Techniques — Keyword Searches",
        "content": "\n        <h2>Topic 10: Analytical Techniques</h2>\n        <h3>10.3 Finding Words in a 2 Terabyte Ocean</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          A 2 TB drive has over 4 billion sectors. You cannot read them one by one. How do you find the needle in the haystack?\n        </p>\n\n        <!-- Search Techniques -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            🔎 Indexed Search vs. Live String Extraction\n          </div>\n          <ul style=\"font-size: 0.74rem; line-height: 1.32; margin-left: 14px; margin-bottom: 0;\">\n            <li><strong>Indexed Search:</strong> Forensic software (Autopsy/AXIOM) reads all text upfront and builds an alphabetical index (like the back of a book). When you search <em>\"hawala\"</em>, results appear in 0.5 seconds!</li>\n            <li><strong>Live Raw Grep:</strong> Scans unallocated space and slack space for raw ASCII and Unicode text that no longer belongs to any active file.</li>\n            <li><strong>The Fake Extension Trick:</strong> The suspect renames <code>extortion_letter.docx</code> to <code>song.mp3</code> so you won't click it. The <code>strings</code> tool extracts all human-readable text from the mp3, exposing the extortion letter!</li>\n          </ul>\n        </div>\n\n        <div style=\"background: var(--page-bg-subtle); border-left: 3px solid #10b981; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.32;\">\n          <strong>Tip:</strong> Always search in both <strong>ASCII</strong> (standard English) and <strong>Unicode / UTF-16</strong> (used internally by Windows and Indian languages).\n        </div>\n"
      },
      "right": {
        "pageNumber": 36,
        "runningHead": "Topic 10: Analytical Techniques — Regex Queries",
        "content": "\n        <h2>Topic 10: Analytical Techniques</h2>\n        <h3>10.4 Regular Expressions (Regex): The Smart Fishing Net</h3>\n\n        <!-- Regex Story -->\n        <div style=\"background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-left: 3px solid #10b981; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #047857; font-size: 0.8rem; margin-bottom: 2px;\">\n            🎣 Searching for Patterns Instead of Specific Words\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            What if a suspect stole 500 credit card numbers, but you don't know whose cards they are? You cannot search for a name! You must search for the <strong>pattern</strong> of a credit card.\n          </p>\n          <div style=\"font-size: 0.72rem; line-height: 1.3; background: var(--page-bg); border: 1px solid var(--ui-border); padding: 4px 7px; border-radius: 3px; font-family: monospace;\">\n            • Credit Card Pattern:<br>\n            &nbsp;&nbsp;\\b(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})\\b<br>\n            • Indian PAN Card Pattern:<br>\n            &nbsp;&nbsp;[A-Z]{5}[0-9]{4}[A-Z]{1}<br>\n            • Indian Aadhaar Pattern:<br>\n            &nbsp;&nbsp;\\b[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}\\b<br>\n            • Email Address Pattern:<br>\n            &nbsp;&nbsp;[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\n          </div>\n        </div>\n\n        <div style=\"background: rgba(2, 132, 199, 0.05); border-left: 3px solid #0284c7; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.32;\">\n          <strong>What You See on Screen:</strong> Autopsy scans unallocated space with the PAN regex: instantly, a table of 150 stolen PAN numbers pops up on your screen!\n        </div>\n"
      }
    },
    {
      "spreadId": 18,
      "left": {
        "pageNumber": 37,
        "runningHead": "Topic 10: Analytical Techniques — timeline creation",
        "content": "\n        <h2>Topic 10: Analytical Techniques</h2>\n        <h3>10.5 Timeline Creation: Building the Movie of the Crime</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          Judges do not understand hex bytes or registry hives. They understand a clear, minute-by-minute <strong>story</strong>: <em>\"What did the suspect do between 11 PM and midnight?\"</em>\n        </p>\n\n        <!-- Plaso Story -->\n        <div style=\"background: rgba(2, 132, 199, 0.05); border: 1px solid rgba(2, 132, 199, 0.2); border-left: 3px solid #0284c7; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.8rem; margin-bottom: 2px;\">\n            ⏳ The Super-Timeline in Action (Plaso / Log2Timeline)\n          </div>\n          <p style=\"font-size: 0.75rem; line-height: 1.32; margin: 0 0 3px 0;\">\n            You run <code>log2timeline.py timeline.plaso case.E01</code> on your laptop. It merges file system dates, browser history, USB insertion logs, and prefetch records into a single spreadsheet:\n          </p>\n          <div style=\"font-size: 0.72rem; line-height: 1.3; background: var(--page-bg); border: 1px solid var(--ui-border); padding: 4px 7px; border-radius: 3px;\">\n            <strong>23:12:04</strong> - Suspect plugged in SanDisk USB (USBSTOR log).<br>\n            <strong>23:14:18</strong> - Opened folder \"Secret_Designs\" (Shellbag).<br>\n            <strong>23:16:42</strong> - Ran <code>7z.exe</code> to zip files (Prefetch).<br>\n            <strong>23:18:01</strong> - Copied <code>designs.zip</code> to USB (LNK file).<br>\n            <strong>23:19:12</strong> - Safely disconnected USB drive.\n          </div>\n        </div>\n\n        <div style=\"background: rgba(16, 185, 129, 0.07); border-left: 3px solid #10b981; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.3;\">\n          <strong>Courtroom Impact:</strong> This minute-by-minute sequence destroys the suspect's alibi that <em>\"someone else must have done it\"</em>.\n        </div>\n"
      },
      "right": {
        "pageNumber": 38,
        "runningHead": "Topic 10: Analytical Techniques — log correlation",
        "content": "\n        <h2>Topic 10: Analytical Techniques</h2>\n        <h3>10.6 Log Correlation: The 5 Golden Windows Event IDs</h3>\n\n        <!-- Event IDs Table -->\n        <div style=\"background: var(--page-bg-subtle); border: 1px solid var(--ui-border); padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #0284c7; font-size: 0.79rem; margin-bottom: 3px;\">\n            📜 The 5 Security Event IDs You Must Check on Your Laptop:\n          </div>\n          <table style=\"width: 100%; font-size: 0.72rem; border-collapse: collapse;\">\n            <tr style=\"background: var(--page-border); color: #fff;\">\n              <th style=\"padding: 3px 5px; text-align: left;\">Event ID</th>\n              <th style=\"padding: 3px 5px; text-align: left;\">What It Records</th>\n              <th style=\"padding: 3px 5px; text-align: left;\">Forensic Value</th>\n            </tr>\n            <tr style=\"border-bottom: 1px solid var(--ui-border);\">\n              <td style=\"padding: 3px 5px;\"><strong>4624</strong></td>\n              <td style=\"padding: 3px 5px;\">Successful Logon</td>\n              <td style=\"padding: 3px 5px;\">Type 2 = Keyboard, Type 10 = Remote RDP Hack!</td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid var(--ui-border);\">\n              <td style=\"padding: 3px 5px;\"><strong>4625</strong></td>\n              <td style=\"padding: 3px 5px;\">Failed Logon Attempt</td>\n              <td style=\"padding: 3px 5px;\">50 failures in 1 minute = Brute-force attack.</td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid var(--ui-border);\">\n              <td style=\"padding: 3px 5px;\"><strong>4720</strong></td>\n              <td style=\"padding: 3px 5px;\">New User Created</td>\n              <td style=\"padding: 3px 5px;\">Hacker creating a backdoor admin account.</td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid var(--ui-border);\">\n              <td style=\"padding: 3px 5px;\"><strong>7045</strong></td>\n              <td style=\"padding: 3px 5px;\">New Service Installed</td>\n              <td style=\"padding: 3px 5px;\">Malware creating persistent startup service.</td>\n            </tr>\n            <tr>\n              <td style=\"padding: 3px 5px;\"><strong>1102</strong></td>\n              <td style=\"padding: 3px 5px;\">Audit Log Cleared</td>\n              <td style=\"padding: 3px 5px;\">Burglar trying to wipe the security camera!</td>\n            </tr>\n          </table>\n        </div>\n\n        <div style=\"background: rgba(239, 68, 68, 0.07); border-left: 3px solid #ef4444; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.3;\">\n          <strong>Event ID 1102 is Guilty Intent:</strong> When a suspect clears the event log, Event ID 1102 records the exact user name who pressed \"Clear\"!\n        </div>\n"
      }
    },
    {
      "spreadId": 19,
      "left": {
        "pageNumber": 39,
        "runningHead": "Topic 11: Tools used for analysis and evaluation...",
        "content": "\n        <h2>Topic 11: Tools for Analysis &amp; Evaluation</h2>\n        <h3>11.1 Forensic Software Suites Compared</h3>\n        <p style=\"font-size: 0.8rem; line-height: 1.36; margin-bottom: 5px;\">\n          Which tool should you use, and why do accredited cyber laboratories keep multiple forensic suites?\n        </p>\n\n        <!-- Tools Table -->\n        <div style=\"background: var(--page-bg-subtle); border: 1px solid var(--ui-border); padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <table style=\"width: 100%; font-size: 0.72rem; border-collapse: collapse;\">\n            <tr style=\"background: var(--page-border); color: #fff;\">\n              <th style=\"padding: 3px 5px; text-align: left;\">Forensic Suite</th>\n              <th style=\"padding: 3px 5px; text-align: left;\">Cost / Type</th>\n              <th style=\"padding: 3px 5px; text-align: left;\">Best Practical Use Case</th>\n            </tr>\n            <tr style=\"border-bottom: 1px solid var(--ui-border);\">\n              <td style=\"padding: 3px 5px;\"><strong>Autopsy</strong></td>\n              <td style=\"padding: 3px 5px;\">Free / Open-Source</td>\n              <td style=\"padding: 3px 5px;\">General disk analysis, keyword regex searches, file carving.</td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid var(--ui-border);\">\n              <td style=\"padding: 3px 5px;\"><strong>Magnet AXIOM</strong></td>\n              <td style=\"padding: 3px 5px;\">Commercial</td>\n              <td style=\"padding: 3px 5px;\">King of chat artifacts (WhatsApp, Signal, Telegram), browser history.</td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid var(--ui-border);\">\n              <td style=\"padding: 3px 5px;\"><strong>EnCase</strong></td>\n              <td style=\"padding: 3px 5px;\">Commercial</td>\n              <td style=\"padding: 3px 5px;\">Enterprise corporate investigations; court-tested worldwide.</td>\n            </tr>\n            <tr style=\"border-bottom: 1px solid var(--ui-border);\">\n              <td style=\"padding: 3px 5px;\"><strong>Volatility 3</strong></td>\n              <td style=\"padding: 3px 5px;\">Free / CLI</td>\n              <td style=\"padding: 3px 5px;\">Gold standard RAM analysis; detects process injection &amp; keys.</td>\n            </tr>\n            <tr>\n              <td style=\"padding: 3px 5px;\"><strong>Wireshark</strong></td>\n              <td style=\"padding: 3px 5px;\">Free / GUI</td>\n              <td style=\"padding: 3px 5px;\">Network PCAP packet inspection; JA3 TLS handshake analysis.</td>\n            </tr>\n          </table>\n        </div>\n\n        <div style=\"background: rgba(2, 132, 199, 0.05); border-left: 3px solid #0284c7; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.32;\">\n          <strong>The Dual-Tool Validation Rule:</strong> In high-profile criminal cases, FSL Delhi and CFSL always verify critical evidence with <em>two independent tools</em> (e.g. Autopsy + AXIOM) so the defense cannot claim a software bug produced false evidence.\n        </div>\n"
      },
      "right": {
        "pageNumber": 40,
        "runningHead": "Topic 11: Court Report & Master Field Checklist",
        "content": "\n        <h2>Topic 11: Tools for Analysis &amp; Evaluation</h2>\n        <h3>11.2 Master Courtroom Cross-Examination Checklist</h3>\n\n        <!-- Checklist -->\n        <div style=\"background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-left: 3px solid #10b981; padding: 6px 9px; border-radius: 4px; margin-bottom: 6px;\">\n          <div style=\"font-weight: 700; color: #047857; font-size: 0.8rem; margin-bottom: 2px;\">\n            ⚖️ The 7 Questions the Defense Lawyer Will Ask You:\n          </div>\n          <ol style=\"font-size: 0.74rem; line-height: 1.32; margin-left: 16px; margin-bottom: 0;\">\n            <li><strong>\"Did you use a write-blocker?\"</strong> &rarr; <em>\"Yes, Tableau T8u, serial # entered in contemporaneous field log.\"</em></li>\n            <li><strong>\"Did you alter the original drive?\"</strong> &rarr; <em>\"No, original drive sealed; 100% of analysis performed on bit-stream clone.\"</em></li>\n            <li><strong>\"Do cryptographic hashes match?\"</strong> &rarr; <em>\"Yes, SHA-256 matched at the scene and in the laboratory.\"</em></li>\n            <li><strong>\"Is the chain of custody unbroken?\"</strong> &rarr; <em>\"Yes, every custodian signed the transfer form with seal verification.\"</em></li>\n            <li><strong>\"Was seizure video-recorded?\"</strong> &rarr; <em>\"Yes, compliant with Section 105 BNSS 2023 with two Panchas.\"</em></li>\n            <li><strong>\"Did you use certified tools?\"</strong> &rarr; <em>\"Yes, NIST CFTT validated software.\"</em></li>\n            <li><strong>\"Is the Section 63 BSA certificate attached?\"</strong> &rarr; <em>\"Yes, signed and submitted as Exhibit A.\"</em></li>\n          </ol>\n        </div>\n\n        <div style=\"background: var(--page-bg-subtle); border-left: 3px solid #0284c7; padding: 5px 8px; border-radius: 0 4px 4px 0; font-size: 0.74rem; line-height: 1.32;\">\n          <strong>Verdict:</strong> When all 7 questions are answered with hard documentation, the defense case collapses and the electronic evidence is admitted without challenge!\n        </div>\n"
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