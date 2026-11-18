const spreads = [];

// ============================================================================
// TOPIC 1: Basics of mobile devices, mobile communications
// Spread 0: Pages 1 & 2 | Questions Q1–Q10
// ============================================================================
spreads.push({
  spreadId: "b4-s0",
  left: {
    pageNumber: 1,
    runningHead: "Book 4: Mobile Forensics • Topic 1: Mobile Basics & Comms",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 1 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">Basics of mobile devices, mobile communications</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: AP vs BP Architecture & Cellular Networks</h3>
    </div>

    <div class="inter-card">
      <h4>1. Introduction: Mobile Forensics Kyun Alag Hai? (Why It Matters)</h4>
      <p>Traditional computer forensics me hard drive nikal kar write-blocker lagana aasan hota hai. Lekin <strong>Mobile Smartphone Forensics</strong> bilkul alag hai kyunki mobile ek <em>always-connected wireless computer</em> hai jisme flash memory board par soldered hoti hai, do alag processors chalte hain, aur data har second remote wipe ya cellular signals se alter ho sakta hai.</p>
    </div>

    <div class="inter-card">
      <h4>2. Application Processor (AP) vs Baseband Processor (BP)</h4>
      <p>Har modern smartphone me do independent compute units hote hain:</p>
      <ul>
        <li><strong>Application Processor (AP):</strong> Main CPU (ARM architecture) jo high-level OS (Android ya iOS), user applications, graphics, aur user data ko execute karta hai.</li>
        <li><strong>Baseband Processor (BP):</strong> Ek dedicated processor jo apna alag <strong>Real-Time Operating System (RTOS)</strong> chalata hai. Iska kaam cellular radio interface, SIM communication, antenna modulation, aur cell tower handovers ko manage karna hota hai. Forensic examiner ke liye BP isolated rehta hai.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 2,
    runningHead: "Book 4: Mobile Forensics • Topic 1: Mobile Basics & Comms",
    content: `
    <div class="inter-card">
      <h4>3. Cellular Generations & Global Identifiers (DSSSB Must-Memorize)</h4>
      <ul>
        <li><strong>IMEI (International Mobile Equipment Identity):</strong> 15-digit unique hardware serial number (Device ka ID). Structure: <em>TAC (8 digits Type Allocation Code) + Serial (6 digits) + Luhn Check Digit (1 digit)</em>. Dual-SIM phone me 2 IMEI hote hain.</li>
        <li><strong>IMSI (International Mobile Subscriber Identity):</strong> 15-digit SIM card identifier. Structure: <em>MCC (3 digits Mobile Country Code - India = 404/405) + MNC (2-3 digits Mobile Network Code) + MSIN (Subscriber ID)</em>.</li>
        <li><strong>MSISDN (Mobile Station International Subscriber Directory Number):</strong> User ka actual telephone number (e.g., +91 98XXXXXXXX).</li>
        <li><strong>ICCID (Integrated Circuit Card ID):</strong> SIM card chip ke piche print 19 ya 20-digit physical serial number.</li>
      </ul>
      <div class="callout-box">
        <strong>Cellular Core Architecture:</strong>
        <p><strong>HLR (Home Location Register):</strong> Telecom operator ka permanent master database jo subscriber profile aur current location store karta hai.
        <br><strong>VLR (Visitor Location Register):</strong> Roaming me temporary local database jo user ki current location cache karta hai.</p>
      </div>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 1: Q1–Q10) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 1: Mobile Basics & Comms?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q1–Q10) on AP/BP, IMEI, IMSI and cellular networks.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="0" onclick="window.openMCQForSpread(0)">
        Start Quiz (Q1–Q10) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 2: Challenges, resource constraints and triage
// Spread 1: Pages 3 & 4 | Questions Q11–Q20
// ============================================================================
spreads.push({
  spreadId: "b4-s1",
  left: {
    pageNumber: 3,
    runningHead: "Book 4: Mobile Forensics • Topic 2: Triage & Constraints",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 2 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">challenges, resource constraints and types of acquisitions</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: Crime Scene Triage & Volatile Power States</h3>
    </div>

    <div class="inter-card">
      <h4>1. First Response & Golden Rule of Smartphone Triage</h4>
      <p>Crime scene par smartphone seize karte waqt examiner ke paas sirf kuch minute hote hain:</p>
      <div class="callout-box">
        <strong>The Golden Seizure Rule (DSSSB Favorite Question):</strong>
        <p>Agar smartphone <strong>ON (Power On)</strong> halat me mile: <strong>PHONE KO KABHI POWER OFF NA KAREIN!</strong></p>
        <p>Kyun? Kyunki device <strong>AFU (After First Unlock)</strong> state me hota hai jahan master encryption keys RAM me active hoti hain. Jaise hi phone switch off hoga, device <strong>BFU (Before First Unlock)</strong> me chala jayega aur RAM ki encryption keys hamesha ke liye wipe ho jayengi!</p>
      </div>
    </div>

    <div class="inter-card">
      <h4>2. Signal Isolation: Faraday Bags & Boxes</h4>
      <p>Seize karte hi device ko wireless signals se isolate karna compulsory hai taaki criminal cloud se <strong>Remote Wipe (Find My Device / iCloud Erase)</strong> trigger na kar sake:</p>
      <ul>
        <li><strong>Immediate Step:</strong> Agar unlocked hai, to turant <em>Airplane Mode</em> enable karein aur Wi-Fi / Bluetooth off karein.</li>
        <li><strong>Physical Isolation:</strong> Device ko certified <strong>Faraday Bag / Box</strong> (RF Shielded cage) me seal karein.</li>
        <li><strong>Power Maintenance:</strong> Phone ko external battery pack (Power Bank) se connect karke charge rakhein taaki screen lock timeout ya battery death na ho.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 4,
    runningHead: "Book 4: Mobile Forensics • Topic 2: Triage & Constraints",
    content: `
    <div class="inter-card">
      <h4>3. Submerged & Liquid Damaged Smartphone SOP</h4>
      <p>Agar crime scene par phone paani (lake, drain, toilet) me dooba hua mile:</p>
      <ul>
        <li><strong>Kya NA Karein:</strong> Phone ko dhoop me na sukhayein, blow dryer / oven use na karein, aur galti se bhi switch on ya charge na karein (short-circuit se chip fry ho jayegi).</li>
        <li><strong>Correct Forensic Protocol:</strong> Phone ko <em>usi paani ke sample container me submerged halat me hi</em> forensic lab transport karein! Paani se bahar nikalne par hawa ki oxygen se corrosion (rusting) 10x tezi se hoti hai.</li>
        <li><strong>Lab Treatment:</strong> Lab me battery disconnect karke motherboard ko <strong>Pure Isopropyl Alcohol (IPA > 99%)</strong> bath aur ultrasonic cleaner me clean karke dehydrate kiya jata hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Hardware Lock Constraints</h4>
      <p>Modern mobile phones me <strong>USB Restricted Mode</strong> (iOS me 1 ghante baad USB lock) aur Android lock screen timeouts hote hain. Examiner ko timeout se pehle active USB connection establish karna hota hai.</p>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 2: Q11–Q20) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 2: Mobile Triage & Constraints?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q11–Q20) on power states, Faraday bags and water damage.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="1" onclick="window.openMCQForSpread(1)">
        Start Quiz (Q11–Q20) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 3: Types of acquisitions (Manual, Logical, File System, Physical)
// Spread 2: Pages 5 & 6 | Questions Q21–Q30
// ============================================================================
spreads.push({
  spreadId: "b4-s2",
  left: {
    pageNumber: 5,
    runningHead: "Book 4: Mobile Forensics • Topic 3: Acquisition Hierarchy",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 3 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">challenges, resource constraints and types of acquisitions</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: The 4-Tiered Extraction Pyramid & SIM Forensics</h3>
    </div>

    <div class="inter-card">
      <h4>1. The Four-Tiered Extraction Hierarchy (NIST SP 800-101)</h4>
      <p>Mobile forensics me data extraction ke 4 main levels hote hain. Level jitna upar jayega, data utna gehra milega par complexity badh jayegi:</p>
      <ol>
        <li><strong>Manual Acquisition:</strong> Phone ki screen ko examiner physically navigate karta hai aur camera/video recorder se screen par dikhne wale messages aur photos capture karta hai. (Deleted data 0% recover hota hai).</li>
        <li><strong>Logical Acquisition:</strong> Operating system ke standard API backup protocols (jaise Android ADB Backup ya iOS iTunes Backup) se accessible data nikalna. (Sirf live active files milti hain; deleted files nahi milti).</li>
        <li><strong>File System Acquisition:</strong> Device ke internal storage ka complete file structure (app private sandboxes, hidden SQLite databases, system logs) dump karna. Iske liye root/jailbreak ya temporary agent zaroori hota hai.</li>
        <li><strong>Physical Acquisition (Gold Standard):</strong> Flash memory chip ka bit-by-bit raw image (dd dump) lena. (Deleted files, unallocated space carving, SQLite freelist pages sab kuch extract hota hai).</li>
      </ol>
    </div>
    `
  },
  right: {
    pageNumber: 6,
    runningHead: "Book 4: Mobile Forensics • Topic 3: Acquisition Hierarchy",
    content: `
    <div class="inter-card">
      <h4>2. SIM Card Forensics & File System Structure</h4>
      <p>SIM (Subscriber Identity Module) ek smart card chip hai jo GSM 11.11 standards follow karti hai:</p>
      <ul>
        <li><strong>Hierarchical File System:</strong>
          <br>&bull; <code>MF</code> (Master File - Root directory).
          <br>&bull; <code>DF</code> (Dedicated File - Folders, e.g., DF_GSM, DF_TELECOM).
          <br>&bull; <code>EF</code> (Elementary File - Actual data files).</li>
        <li><strong>Core Elementary Files (DSSSB Favorites):</strong>
          <br>&bull; <code>EF_ICCID</code>: SIM card serial number.
          <br>&bull; <code>EF_IMSI</code>: International subscriber ID.
          <br>&bull; <code>EF_SMS</code>: SIM par save SMS messages (deleted SMS status byte <code>0x00</code> ban jati hai).
          <br>&bull; <code>EF_ADN</code>: Abbreviated Dialing Numbers (SIM Phonebook contacts).
          <br>&bull; <code>EF_LOCI</code>: Last known Location Information (LAC & Cell ID).</li>
      </ul>
      <div class="callout-box">
        <strong>SIM Security Warning:</strong> SIM PIN 3 baar galat dalne par lock ho jata hai. Iske baad <strong>PUK (Personal Unblocking Key - 8 digits)</strong> chahiye hoti hai jisme maximum <strong>10 attempts</strong> milte hain. 10 fail hone par SIM permanently destroy ho jati hai.
      </div>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 3: Q21–Q30) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 3: Acquisition Types & SIM?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q21–Q30) on extraction tiers, SIM files and PUK locks.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="2" onclick="window.openMCQForSpread(2)">
        Start Quiz (Q21–Q30) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 4: Types of acquisitions: Low-Level Hardware & Chip-Off
// Spread 3: Pages 7 & 8 | Questions Q31–Q40
// ============================================================================
spreads.push({
  spreadId: "b4-s3",
  left: {
    pageNumber: 7,
    runningHead: "Book 4: Mobile Forensics • Topic 4: Low-Level Hardware",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 4 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">challenges, resource constraints and types of acquisitions</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: EDL, BROM, JTAG & Chip-Off Rework</h3>
    </div>

    <div class="inter-card">
      <h4>1. Low-Level BootROM Exploits: EDL & BROM</h4>
      <p>Jab phone locked ho, screen dead ho, ya USB debugging disable ho, to software tools fail ho jate hain. Tab BootROM hardware modes use hote hain:</p>
      <ul>
        <li><strong>Qualcomm EDL (Emergency Download Mode):</strong> Motherboard par specific test points (EDL Test Points) ko ground se short karke ya special EDL cable (9008 mode) se phone ko EDL mode me daala jata hai. Yahan <em>Firehose / Sahara programmer</em> upload karke locked phone ki raw memory read ki ja sakti hai.</li>
        <li><strong>MediaTek BROM Mode:</strong> MTK chipsets me preloader bypass karke USB handshake intercept kiya jata hai (SP Flash Tool compatible).</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>2. JTAG (Joint Test Action Group - IEEE 1149.1) Probing</h4>
      <p>Factory hardware testing port jo PCB traces par chhupe test pads ke roop me hota hai:</p>
      <ul>
        <li>Tester 5 main signal pins par micro-wires solder karta hai: <strong>TDI</strong> (Test Data In), <strong>TDO</strong> (Test Data Out), <strong>TCK</strong> (Test Clock), <strong>TMS</strong> (Test Mode Select), aur <strong>TRST</strong> (Reset).</li>
        <li>Boundary scan architecture se CPU ko freeze karke direct flash memory ka raw image nikal liya jata hai.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 8,
    runningHead: "Book 4: Mobile Forensics • Topic 4: Low-Level Hardware",
    content: `
    <div class="inter-card">
      <h4>3. ISP (In-System Programming) Micro-Soldering</h4>
      <p>Agar JTAG port lock ya disable ho, to examiner flash chip (eMMC / UFS) ke direct bus lines par microscope ke niche wires solder karta hai:</p>
      <ul>
        <li>Lines: <strong>CMD</strong>, <strong>CLK</strong>, <strong>DAT0</strong>, <strong>VCC</strong> (3.3V), <strong>VCCQ</strong> (1.8V), aur <strong>GND</strong>.</li>
        <li>Chip ko motherboard se bina nikale high-speed raw dump nikal liya jata hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Chip-Off Extraction & The Modern Encryption Barrier</h4>
      <ul>
        <li><strong>Chip-Off Technique:</strong> SMD Rework Station (Heat Gun at ~350&deg;C) se flash memory chip (eMMC / UFS BGA 153, 221, 254) ko desolder karke motherboard se nikalna, re-balling karna, aur dedicated BGA socket programmer me read karna.</li>
        <li><strong>The Forensic Nightmare:</strong> Legacy phones (Android 5 se pehle) me Chip-Off se unallocated deleted data sab mil jata tha. Lekin modern smartphones me <strong>File-Based Encryption (FBE)</strong> hardware-bound hoti hai. Agar chip ko board se alag kar diya, to SoC ke Secure Enclave ke bina data sirf random garbage ciphertext ban kar reh jayega!</li>
      </ul>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 4: Q31–Q40) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 4: Hardware & Chip-Off?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q31–Q40) on EDL 9008, JTAG TAP pins and Chip-Off BGA.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="3" onclick="window.openMCQForSpread(3)">
        Start Quiz (Q31–Q40) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 5: Rooting & system
// Spread 4: Pages 9 & 10 | Questions Q41–Q50
// ============================================================================
spreads.push({
  spreadId: "b4-s4",
  left: {
    pageNumber: 9,
    runningHead: "Book 4: Mobile Forensics • Topic 5: Rooting & System Security",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 5 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">rooting & system</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: Superuser UID 0, Magisk & SELinux Policies</h3>
    </div>

    <div class="inter-card">
      <h4>1. Android Rooting Kya Hai & Kyun Ki Jati Hai?</h4>
      <p>Android ek modified Linux kernel par chalta hai. By default, user aur uski apps low-privilege security context me isolated hoti hain. <strong>Rooting</strong> ka maksad device par <strong>Superuser (UID 0)</strong> privileges prapt karna aur <code>/system/bin/su</code> binary install karna hota hai.</p>
      <ul>
        <li><em>Forensic Advantage:</em> Root access milne par examiner private app sandboxes (WhatsApp databases, Wi-Fi passwords, system logs) ka full physical/file-system image le sakta hai.</li>
        <li><em>Forensic Risk:</em> Rooting process se system files modify hoti hain aur evidence chain of custody par sawal uth sakte hain.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>2. Traditional Root vs Systemless Root (Magisk)</h4>
      <ul>
        <li><strong>Traditional Root (SuperSU):</strong> Seedha <code>/system</code> partition ko modify karta tha. Modern Android me ye <em>dm-verity (Android Verified Boot)</em> ko fail kar deta hai jisse device bootloop me chala jata hai.</li>
        <li><strong>Systemless Root (Magisk):</strong> Ye <code>/system</code> partition ko bilkul touch nahi karta! Balki ye <code>boot.img</code> ke kernel ramdisk ko patch karta hai aur boot ke dauran system files ko RAM memory me overlay karta hai. Isse SafetyNet / Play Integrity pass ho jati hai.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 10,
    runningHead: "Book 4: Mobile Forensics • Topic 5: Rooting & System Security",
    content: `
    <div class="inter-card">
      <h4>3. SELinux (Security-Enhanced Linux) in Android</h4>
      <p>Android 4.4+ se Google ne NSA dwara design kiya gaya <strong>SELinux Mandatory Access Control (MAC)</strong> enforce kiya hai:</p>
      <ul>
        <li><strong>Enforcing Mode:</strong> Har process (chahe root UID 0 hi kyu na ho) strictly define kiye gaye domain policy rules me bandha hota hai. Agar root process unauthorized file access kare, to SELinux use block kar deta hai.</li>
        <li><strong>Permissive Mode:</strong> Policy violations ko log karta hai par block nahi karta (custom ROMs me common).</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Samsung Knox & Physical eFuse (0x0 vs 0x1)</h4>
      <div class="callout-box">
        <strong>DSSSB Hardware Trap:</strong>
        <p>Samsung devices me ek hardware-based security circuit hota hai jise <strong>Knox Warranty Void eFuse</strong> kehte hain. Normal factory state me iska status <code>0x0</code> hota hai.</p>
        <p>Agar examiner ya user custom recovery (TWRP) ya root binary flash karne ki koshish kare, to bootloader ek micro-fuse ko physically <strong>blow (burn)</strong> kar deta hai, jisse status permanently <strong>0x1</strong> ho jata hai! Ek baar fuse blow hone par Knox Secure Folder aur hardware keystore ke data keys permanently destroy ho jate hain.</p>
      </div>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 5: Q41–Q50) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 5: Rooting & System Security?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q41–Q50) on UID 0, Magisk systemless, SELinux and Knox eFuse.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="4" onclick="window.openMCQForSpread(4)">
        Start Quiz (Q41–Q50) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 6: App permissions
// Spread 5: Pages 11 & 12 | Questions Q51–Q60
// ============================================================================
spreads.push({
  spreadId: "b4-s5",
  left: {
    pageNumber: 11,
    runningHead: "Book 4: Mobile Forensics • Topic 6: App Permissions & Sandboxing",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 6 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">app permissions</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: Android Sandboxing & Permission Protection Levels</h3>
    </div>

    <div class="inter-card">
      <h4>1. Android UID Application Sandboxing</h4>
      <p>Android traditional multi-user Linux model ko security sandbox ki tarah use karta hai:</p>
      <ul>
        <li>Har app installation ke waqt OS us app ko ek <strong>unique Linux User ID (UID)</strong> assign karta hai (e.g., <code>u0_a124</code>).</li>
        <li>Har app ka apna private storage directory hota hai: <code>/data/data/&lt;package_name&gt;/</code>.</li>
        <li>Linux file permissions ke tehat ek app kisi doosri app ki files ko na read kar sakti hai na modify kar sakti hai (Application Sandbox).</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>2. Android Permission Protection Levels (DSSSB Standard)</h4>
      <ol>
        <li><strong>Normal Permissions:</strong> Low risk permissions jo system automatically grant kar deta hai bina user confirmation ke (e.g., <code>android.permission.INTERNET</code>, <code>ACCESS_NETWORK_STATE</code>).</li>
        <li><strong>Dangerous Permissions (Runtime Permissions):</strong> High risk permissions jo user ke private data ya hardware ko touch karti hain (e.g., <code>READ_CONTACTS</code>, <code>ACCESS_FINE_LOCATION</code>, <code>RECORD_AUDIO</code>, <code>CAMERA</code>, <code>READ_SMS</code>). Android 6.0+ me runtime prompt zaroori hai.</li>
        <li><strong>Signature Permissions:</strong> Sirf wahi apps le sakti hain jo same developer certificate se sign hon.</li>
        <li><strong>SignatureOrSystem / Privileged:</strong> Device system image me pre-installed system vendor apps ke liye.</li>
      </ol>
    </div>
    `
  },
  right: {
    pageNumber: 12,
    runningHead: "Book 4: Mobile Forensics • Topic 6: App Permissions & Sandboxing",
    content: `
    <div class="inter-card">
      <h4>3. Forensic Permission Analysis & Malware Triage</h4>
      <p>Mobile malware investigation me permission audit sabse pehla step hota hai:</p>
      <ul>
        <li><strong>Static Analysis:</strong> APK file ko decompile karke <code>AndroidManifest.xml</code> me dekha jata hai ki app ne <code>&lt;uses-permission&gt;</code> tags me kya mang rakha hai. Agar ek simple Calculator app <code>SEND_SMS</code> aur <code>READ_CALL_LOG</code> mang rahi hai, to ye seedha spyware ka indicator hai.</li>
        <li><strong>Dynamic Status Check:</strong> Runtime par user ne konsi permission grant ki hui hai, ye live ADB command se pata chalta hai:
          <br><code>adb shell dumpsys package &lt;package_name&gt;</code></li>
        <li><strong>Special Access Abuse:</strong> Malware aksar <strong>Accessibility Service</strong> (CWE-250) aur <strong>Notification Listener</strong> abuse karke background me OTPs chura leta hai aur banking trojans run karta hai.</li>
      </ul>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 6: Q51–Q60) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 6: App Permissions?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q51–Q60) on UID sandboxing, runtime permissions and AndroidManifest.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="5" onclick="window.openMCQForSpread(5)">
        Start Quiz (Q51–Q60) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 7: Jail-breaking
// Spread 6: Pages 13 & 14 | Questions Q61–Q70
// ============================================================================
spreads.push({
  spreadId: "b4-s5b",
  left: {
    pageNumber: 13,
    runningHead: "Book 4: Mobile Forensics • Topic 7: iOS Jailbreaking & Exploits",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 7 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">jail-breaking</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: iOS Sandbox Escapes & The checkm8 Exploit</h3>
    </div>

    <div class="inter-card">
      <h4>1. iOS Jailbreaking Kya Hai & Kyun Zaroori Hai?</h4>
      <p>Apple ka iOS operating system ek strict "Walled Garden" hai jahan app sandbox aur code signing policies user ko root access nahi lene deti. <strong>Jailbreaking</strong> ka matlab hai kernel security vulnerabilities ki ek chain exploit karke:</p>
      <ul>
        <li>Root permissions (UID 0) prapt karna.</li>
        <li>iOS App Sandbox (Container isolation) ko break karna.</li>
        <li>Apple ke Code Signing Enforcement Daemon (<code>amfid</code>) ko patch karna taaki unsigned third-party forensic binaries run ho sakein.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>2. Types of Jailbreaks</h4>
      <ul>
        <li><strong>Untethered:</strong> Permanent jailbreak. Device reboot hone par bhi jailbroken rehta hai (Modern iOS me almost impossible).</li>
        <li><strong>Tethered:</strong> Device reboot karne ke liye computer aur exploit tool se connect karna compulsory hota hai, warna boot nahi hota.</li>
        <li><strong>Semi-Tethered:</strong> Reboot hone par device normal state me boot ho jata hai, par jailbreak features chalane ke liye PC tool se re-exploit karna padta hai (e.g., <strong>checkra1n</strong>).</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 14,
    runningHead: "Book 4: Mobile Forensics • Topic 7: iOS Jailbreaking & Exploits",
    content: `
    <div class="inter-card">
      <h4>3. The checkm8 BootROM Exploit (Forensic Milestone)</h4>
      <p>2019 me security researcher <em>axi0mX</em> dwara release kiya gaya <strong>checkm8</strong> mobile forensics ka sabse bada breakthrough bana:</p>
      <ul>
        <li><strong>Permanent Hardware Flaw:</strong> Ye exploit iOS software me nahi, balki Apple ke physical A-series processor chips ke <strong>BootROM (Read-Only Memory)</strong> me USB DFU stack buffer overflow hai. Apple ise kisi bhi software update se patch nahi kar sakta!</li>
        <li><strong>Supported Devices:</strong> iPhone 4s se lekar iPhone X tak (A5 se A11 Bionic chips).</li>
        <li><strong>Forensic Importance:</strong> checkra1n ke zariye iPhone X tak ke locked devices me temporary DFU exploit chala kar full file system aur keychain dump extract kiya ja sakta hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Forensic Risks & Extraction Agents</h4>
      <p>Public jailbreak tools (unc0ver, Taurine) device ke file system ko permanently modify kar dete hain jisse digital evidence cross-examination me reject ho sakta hai. Isliye commercial forensic suites (Cellebrite, Magnet) <strong>Extraction Agents</strong> use karti hain jo memory me run hokar audit-compliant extraction karti hain.</p>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 7: Q61–Q70) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 7: iOS Jailbreaking?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q61–Q70) on amfid, checkm8 BootROM and extraction agents.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="6" onclick="window.openMCQForSpread(6)">
        Start Quiz (Q61–Q70) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 8: Android OS architecture
// Spread 7: Pages 15 & 16 | Questions Q71–Q80
// ============================================================================
spreads.push({
  spreadId: "b4-s6",
  left: {
    pageNumber: 15,
    runningHead: "Book 4: Mobile Forensics • Topic 8: Android OS Architecture",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 8 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">Android OS architecture and file logging mechanism in Android-phone</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: The 5-Layer Stack & The Zygote Process</h3>
    </div>

    <div class="inter-card">
      <h4>1. Android OS Architecture: The 5-Layer Hierarchy</h4>
      <p>DSSSB me Android ke layers ka exact bottom-to-top sequence bar-bar poocha jata hai:</p>
      <ol>
        <li><strong>Layer 1 (Bottom): Linux Kernel:</strong> Core OS layer jo hardware abstraction, memory management, process isolation, aur low-level hardware drivers (Display, Camera, Wi-Fi, Keypad) handle karti hai.</li>
        <li><strong>Layer 2: Hardware Abstraction Layer (HAL):</strong> Standard C/C++ interfaces jo device-specific drivers ko upper Android framework se jodne ka kaam karti hain.</li>
        <li><strong>Layer 3: Android Runtime (ART) & Native Libraries:</strong>
          <br>&bull; <em>ART:</em> Modern virtual runtime jo AOT (Ahead-of-Time) aur JIT compilation use karta hai (legacy Dalvik ko replace kiya).
          <br>&bull; <em>Native C/C++ Libraries:</em> WebKit, SQLite, OpenGL, SSL, libc.</li>
        <li><strong>Layer 4: Java Application Framework:</strong> High-level APIs jo developers use karte hain (Activity Manager, Window Manager, Content Providers, Telephony Manager).</li>
        <li><strong>Layer 5 (Top): Applications:</strong> System apps (Dialer, Contacts) aur user installed apps (WhatsApp, Chrome).</li>
      </ol>
    </div>
    `
  },
  right: {
    pageNumber: 16,
    runningHead: "Book 4: Mobile Forensics • Topic 8: Android OS Architecture",
    content: `
    <div class="inter-card">
      <h4>2. Zygote Daemon Process & App Startup</h4>
      <p>Android system startup ke dauran <code>init</code> process <strong>Zygote</strong> daemon ko spawn karta hai:</p>
      <ul>
        <li>Zygote Android Runtime (ART) aur core system libraries ko memory me pre-load karta hai.</li>
        <li>Jab bhi koi user app icon par click karta hai, Zygote khud ko Linux <code>fork()</code> system call se duplicate karta hai aur turant naya isolated app process bana deta hai. Isse app launch time 10x fast ho jata hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>3. Android Partitions & A/B Seamless Updates</h4>
      <ul>
        <li><code>/system</code>: Core Android OS files aur system binaries (Read-Only).</li>
        <li><code>/data</code> (Userdata): User files, downloaded apps, SQLite databases (Read/Write, encrypted).</li>
        <li><code>/recovery</code>: Emergency recovery environment (TWRP, Stock recovery).</li>
        <li><strong>A/B (Seamless) Partitioning:</strong> Modern Android me do slot hote hain (Slot A aur Slot B). Background me OTA update doosre slot par install hota hai taaki update fail hone par phone brick na ho.</li>
      </ul>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 8: Q71–Q80) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 8: Android Architecture?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q71–Q80) on the 5-layer stack, ART runtime and Zygote process.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="7" onclick="window.openMCQForSpread(7)">
        Start Quiz (Q71–Q80) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 9: File logging mechanism in Android-phone
// Spread 8: Pages 17 & 18 | Questions Q81–Q90
// ============================================================================
spreads.push({
  spreadId: "b4-s7",
  left: {
    pageNumber: 17,
    runningHead: "Book 4: Mobile Forensics • Topic 9: Android Logging Subsystems",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 9 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">file logging mechanism in Android-phone</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: logcat Circular Buffers, dumpsys & DropBox</h3>
    </div>

    <div class="inter-card">
      <h4>1. logcat Subsystem & Circular Ring Buffers</h4>
      <p>Android me system events aur app activities ko log karne ke liye kernel me RAM-based <strong>Circular Ring Buffers</strong> chalte hain:</p>
      <ul>
        <li><code>main</code>: General applications aur Java framework ke general log messages.</li>
        <li><code>system</code>: Core Android OS system server, battery, aur power state transitions.</li>
        <li><code>radio</code>: Telephony subsystem, cellular baseband commands, SMS routing events, RIL (Radio Interface Layer) logs.</li>
        <li><code>events</code>: Binary structured performance aur diagnostic metrics.</li>
        <li><code>crash</code>: Fatal unhandled exceptions aur app crashes ke stack traces.</li>
      </ul>
      <div class="callout-box">
        <strong>Forensic Limitation:</strong> Ye buffers <strong>RAM memory</strong> me hote hain. Jaise hi buffer full hota hai, naya log purane log ko overwrite kar deta hai (FIFO). Phone reboot hote hi saara logcat data vanish ho jata hai!
      </div>
    </div>
    `
  },
  right: {
    pageNumber: 18,
    runningHead: "Book 4: Mobile Forensics • Topic 9: Android Logging Subsystems",
    content: `
    <div class="inter-card">
      <h4>2. Diagnostic Tools: dumpsys & bugreport</h4>
      <ul>
        <li><strong>dumpsys:</strong> Command-line tool jo active running system services ka deep state snapshot deta hai:
          <br>&bull; <code>dumpsys wifi</code>: Connected Wi-Fi SSIDs, BSSIDs, aur signal strengths.
          <br>&bull; <code>dumpsys telephony.registry</code>: Current cell tower connection status.
          <br>&bull; <code>dumpsys battery</code>: Battery health, charging level, aur thermal stats.</li>
        <li><strong>bugreport:</strong> Complete diagnostic archive jo <code>logcat</code>, <code>dumpsys</code>, tombstone dumps, aur system state ko ek ZIP file me pack karta hai (<code>adb bugreport</code>).</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>3. Persistent Crash Logging: DropBoxManager & Tombstones</h4>
      <p>Jab koi app crash hoti hai ya native C/C++ memory corruption hota hai, to Android disk par persistent logs likhta hai:</p>
      <ul>
        <li><code>/data/system/dropbox/</code>: DropBox service system crashes, kernel panics, aur ANR (Application Not Responding) logs ko disk par persist karti hai.</li>
        <li><code>/data/tombstones/</code>: Native C/C++ process crashes ke time CPU registers aur stack frames ka memory dump (Tombstone file) yahan save hota hai.</li>
      </ul>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 9: Q81–Q90) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 9: Android Logging?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q81–Q90) on logcat ring buffers, dumpsys and DropBox logs.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="8" onclick="window.openMCQForSpread(8)">
        Start Quiz (Q81–Q90) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 10: Types of artefacts: Android Databases & Communications
// Spread 9: Pages 19 & 20 | Questions Q91–Q100
// ============================================================================
spreads.push({
  spreadId: "b4-s8",
  left: {
    pageNumber: 19,
    runningHead: "Book 4: Mobile Forensics • Topic 10: Android Databases & Artifacts",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 10 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">types of artefacts</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: SQLite WAL Journaling & Telephony DBs</h3>
    </div>

    <div class="inter-card">
      <h4>1. SQLite Database Architecture in Android</h4>
      <p>Android me user contacts, call logs, SMS, browser history, aur apps ka lagbhag saara data <strong>SQLite 3</strong> relational databases me store hota hai. Modern Android <strong>WAL (Write-Ahead Logging)</strong> mode use karta hai:</p>
      <ul>
        <li>Main Database File: <code>&lt;filename&gt;.db</code></li>
        <li>Write-Ahead Log: <code>&lt;filename&gt;.db-wal</code> (Nayi transactions pehle yahan likhi jati hain).</li>
        <li>Shared Memory Index: <code>&lt;filename&gt;.db-shm</code> (WAL memory index).</li>
      </ul>
      <div class="callout-box">
        <strong>Forensic Golden Rule:</strong> Evidence copy karte waqt agar aapne sirf <code>.db</code> file copy ki aur <code>.db-wal</code> chhod di, to latest messages aur call records miss ho jayenge! Hamesha teeno files ko ek sath copy karein.
      </div>
    </div>
    `
  },
  right: {
    pageNumber: 20,
    runningHead: "Book 4: Mobile Forensics • Topic 10: Android Databases & Artifacts",
    content: `
    <div class="inter-card">
      <h4>2. Core Android Telephony Database Paths</h4>
      <table class="inter-table">
        <thead>
          <tr>
            <th>Evidence Category</th>
            <th>Standard Database Path</th>
            <th>Mukhya Tables</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Contacts & Calls</strong></td>
            <td><code>/data/data/com.android.providers.contacts/databases/contacts2.db</code></td>
            <td><code>raw_contacts</code>, <code>data</code>, <code>calls</code></td>
          </tr>
          <tr>
            <td><strong>SMS & MMS</strong></td>
            <td><code>/data/data/com.android.providers.telephony/databases/mmssms.db</code></td>
            <td><code>sms</code>, <code>pdu</code>, <code>part</code></td>
          </tr>
          <tr>
            <td><strong>Cellular Telephony</strong></td>
            <td><code>/data/data/com.android.providers.telephony/databases/telephony.db</code></td>
            <td><code>siminfo</code>, <code>carriers</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="inter-card">
      <h4>3. Deleted Record Recovery (Freelist Carving)</h4>
      <p>Jab koi user SMS ya call record delete karta hai, to SQLite use turant disk se wipe nahi karta! Record ko <strong>Freelist Page</strong> me mark kar diya jata hai. Forensic tools (jaise SQLite Carver) unallocated database cells ko parse karke deleted chats aur timestamps recover kar leti hain.</p>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 10: Q91–Q100) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 10: Android Databases?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q91–Q100) on SQLite WAL, contacts2.db and mmssms.db.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="9" onclick="window.openMCQForSpread(9)">
        Start Quiz (Q91–Q100) &rarr;
      </button>
    </div>
    `
  }
});

module.exports = spreads;
