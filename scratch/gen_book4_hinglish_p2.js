const spreads = [];

// ============================================================================
// TOPIC 11: Types of artefacts: App & Multimedia Artefacts
// Spread 10: Pages 21 & 22 | Questions Q101–Q110
// ============================================================================
spreads.push({
  spreadId: "b4-s9",
  left: {
    pageNumber: 21,
    runningHead: "Book 4: Mobile Forensics • Topic 11: App & Multimedia Artifacts",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 11 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">types of artefacts</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: WhatsApp msgstore Crypt, Telegram & EXIF Geolocation</h3>
    </div>

    <div class="inter-card">
      <h4>1. WhatsApp Forensics & Cryptographic Protection</h4>
      <p>Android WhatsApp me chats do jagah store hoti hain:</p>
      <ul>
        <li><strong>External Shared Storage Backup:</strong> <code>/sdcard/Android/media/com.whatsapp/WhatsApp/Databases/msgstore.db.crypt14</code> ya <code>crypt15</code>.
          <br>Ye database <strong>AES-256-GCM</strong> se encrypted hota hai. Bina decryption key ke ise padha nahi ja sakta.</li>
        <li><strong>The Secret Key Path:</strong> WhatsApp ki actual decryption key private internal sandbox me store hoti hai:
          <br><code>/data/data/com.whatsapp/files/key</code> (Size: exactly 158 bytes).
          <br>Is key ko access karne ke liye root access ya ADB backup downgrade exploit zaroori hota hai.</li>
        <li><strong>Unencrypted Live Database:</strong> Agar device rooted hai, to live plain database seedha mil jata hai:
          <br><code>/data/data/com.whatsapp/databases/msgstore.db</code> (Table: <code>messages</code>, <code>chat</code>).</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 22,
    runningHead: "Book 4: Mobile Forensics • Topic 11: App & Multimedia Artifacts",
    content: `
    <div class="inter-card">
      <h4>2. Telegram & Signal Privacy Models</h4>
      <ul>
        <li><strong>Telegram:</strong> Cloud-based chats server par sync hoti hain aur local cache me <code>tgnet.dat</code> aur <code>cache4.db</code> me plaintext me mil sakti hain. Par <em>Secret Chats</em> end-to-end encrypted (MTProto) hoti hain aur unka data server par nahi rehta.</li>
        <li><strong>Signal:</strong> Maximum security messenger. Iska local SQLite database <strong>SQLCipher</strong> se fully encrypted hota hai jiska passphrase memory (RAM) ke keystore me rehta hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>3. MediaStore & EXIF Geolocation Metadata</h4>
      <p>Android ka <code>com.android.providers.media</code> provider media indexing karta hai:</p>
      <ul>
        <li>Central Media Database: <code>/data/data/com.android.providers.media/databases/external.db</code>.</li>
        <li><strong>EXIF (Exchangeable Image File Format) Metadata:</strong> Photos (JPEG/HEIC) ke header me camera model, timestamp, aur sabse important <strong>GPS Latitude & Longitude Coordinates</strong> store hote hain, jisse crime scene par photo kheenchne ki exact geographic location prove hoti hai.</li>
      </ul>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 11: Q101–Q110) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 11: App Artifacts & EXIF?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q101–Q110) on WhatsApp crypt14/15, key files and EXIF GPS.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="10" onclick="window.openMCQForSpread(10)">
        Start Quiz (Q101–Q110) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 12: Tools and technologies for Android Forensics
// Spread 11: Pages 23 & 24 | Questions Q111–Q120
// ============================================================================
spreads.push({
  spreadId: "b4-s10",
  left: {
    pageNumber: 23,
    runningHead: "Book 4: Mobile Forensics • Topic 12: Android Forensic Tools",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 12 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">tools and technologies for Android Forensics</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: ADB Suite, Fastboot & Forensic Suites</h3>
    </div>

    <div class="inter-card">
      <h4>1. Android Debug Bridge (ADB) Forensic Commands</h4>
      <p>Google ka official client-server CLI tool jo forensic examiner ka primary weapon hai:</p>
      <ul>
        <li><code>adb devices</code>: Connected target phones aur unka authorization status (device vs unauthorized) check karna.</li>
        <li><code>adb pull &lt;remote_path&gt; &lt;local_dest&gt;</code>: Phone se koi bhi file ya database forensic workstation par copy karna.</li>
        <li><code>adb backup -all -apk -shared -f backup.ab</code>: Phone ka full logical backup banana (Android Backup format).</li>
        <li><code>adb shell getprop</code>: Device ke hardware, build version, aur OEM settings ki complete property list nikalna.</li>
      </ul>
      <div class="callout-box">
        <strong>Fastboot Protocol:</strong> Jab phone <em>Bootloader Mode</em> me ho, to Fastboot communication hoti hai (USB port level par). Iska use recovery images flash karne ya bootloader lock status check karne ke liye hota hai (<code>fastboot oem device-info</code>).
      </div>
    </div>
    `
  },
  right: {
    pageNumber: 24,
    runningHead: "Book 4: Mobile Forensics • Topic 12: Android Forensic Tools",
    content: `
    <div class="inter-card">
      <h4>2. Leading Commercial Forensic Suites</h4>
      <table class="inter-table">
        <thead>
          <tr>
            <th>Forensic Suite</th>
            <th>Primary Features</th>
            <th>Special Strength</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Cellebrite UFED</strong></td>
            <td>Hardware acquisition tool + Physical Analyzer software</td>
            <td>EDL/BootROM bypass, locked device lockscreen bypass</td>
          </tr>
          <tr>
            <td><strong>Magnet AXIOM</strong></td>
            <td>Deep artifact parsing & carving across Android/iOS/Cloud</td>
            <td>App chat decoding, timeline correlation</td>
          </tr>
          <tr>
            <td><strong>MSAB XRY</strong></td>
            <td>European forensic suite, dedicated cable kit</td>
            <td>Secure hardware triage, tamper-proof reporting</td>
          </tr>
          <tr>
            <td><strong>Autopsy (Android Module)</strong></td>
            <td>Open-source digital forensics platform</td>
            <td>Parses Android SQLite databases for call logs, SMS, and web history</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="inter-card">
      <h4>3. Live Extraction Agents</h4>
      <p>Modern forensic software target phone me temporary APK (Extraction Agent) push karti hai jo phone ke accessibility ya debug permissions use karke encrypted data extract karke forensic PC par stream kar deti hai bina phone ko permanently root kiye.</p>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 12: Q111–Q120) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 12: Android Forensic Tools?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q111–Q120) on ADB commands, Fastboot, Cellebrite and Magnet AXIOM.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="11" onclick="window.openMCQForSpread(11)">
        Start Quiz (Q111–Q120) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 13: Challenges & limitations of Android forensics
// Spread 12: Pages 25 & 26 | Questions Q121–Q130
// ============================================================================
spreads.push({
  spreadId: "b4-s11",
  left: {
    pageNumber: 25,
    runningHead: "Book 4: Mobile Forensics • Topic 13: Android Challenges & Encryption",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 13 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">challenges & limitations of Android forensics</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: FDE vs FBE & Direct Boot Architecture</h3>
    </div>

    <div class="inter-card">
      <h4>1. Full Disk Encryption (FDE) vs File-Based Encryption (FBE)</h4>
      <p>Android encryption architecture me ye sabse bada badlaav tha (DSSSB favorite concept):</p>
      <ul>
        <li><strong>Legacy FDE (Android 5.0 - 6.0):</strong> Poore <code>userdata</code> partition ko ek single master key (dm-crypt) se block level par encrypt kiya jata tha. Jab tak user phone boot hone par PIN/passcode na dale, tab tak phone ka koi bhi function (alarm, incoming call, SMS) kaam nahi kar sakta tha.</li>
        <li><strong>Modern FBE (Android 7.0+ / Mandatory in Android 10+):</strong> Har file ko individual alag symmetric key se encrypt kiya jata hai! Isse <strong>Direct Boot</strong> feature possible hua jisme phone bina PIN dale restart hone ke baad bhi alarms aur emergency calls chalata hai.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 26,
    runningHead: "Book 4: Mobile Forensics • Topic 13: Android Challenges & Encryption",
    content: `
    <div class="inter-card">
      <h4>2. Direct Boot Storage: CE vs DE Keys</h4>
      <p>FBE do alag-alag cryptographic storage areas provide karta hai:</p>
      <ul>
        <li><strong>DE (Device Encrypted) Storage:</strong> Iski key device ke hardware keystore se bind hoti hai. Phone boot hote hi ye area unlock ho jata hai (User ka PIN dale bina!). Yahan alarm clock aur phone dialer chalte hain.</li>
        <li><strong>CE (Credential Encrypted) Storage:</strong> Iski key <strong>User ke Passcode / PIN</strong> ke saath mathematically derived hoti hai. Jab tak user screen lock unlock nahi karta, CE storage completely locked rehti hai. Saare user WhatsApp, photos, aur SMS CE storage me hote hain!</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>3. Flash Memory TRIM & Unallocated Space Erasure</h4>
      <p>Solid-state flash memory (eMMC/UFS) par write performance maintain karne ke liye OS background me <strong>TRIM command</strong> chalata hai. Jaise hi user koi file delete karta hai, Flash Translation Layer (FTL) un blocks ko zero-fill ya discard mark kar deta hai. Isliye modern phones par traditional unallocated space carving se purana deleted data recover hona lagbhag impossible ho chuka hai.</p>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 13: Q121–Q130) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 13: Android Challenges?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q121–Q130) on FDE vs FBE, CE/DE keys and TRIM command.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="12" onclick="window.openMCQForSpread(12)">
        Start Quiz (Q121–Q130) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 14: IOS: iPhone OS (iOS) architecture
// Spread 13: Pages 27 & 28 | Questions Q131–Q140
// ============================================================================
spreads.push({
  spreadId: "b4-s12",
  left: {
    pageNumber: 27,
    runningHead: "Book 4: Mobile Forensics • Topic 14: iOS Architecture & SEP",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 14 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">IOS: iPhone OS (iOS) architecture</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: Darwin XNU Hybrid Kernel & Secure Enclave</h3>
    </div>

    <div class="inter-card">
      <h4>1. iOS Core Architecture: Darwin XNU Kernel</h4>
      <p>Apple iOS ka core kernel Linux nahi hai! Ye <strong>Darwin XNU</strong> par based hai jo ek hybrid architecture hai:</p>
      <ul>
        <li><strong>Mach Microkernel:</strong> Thread scheduling, inter-process communication (IPC), memory management, virtual memory.</li>
        <li><strong>BSD (Berkeley Software Distribution):</strong> POSIX compliance, networking stack (BSD sockets), file systems, user credentials, process models.</li>
        <li><strong>KASLR (Kernel Address Space Layout Randomization):</strong> Har boot par kernel base address memory me randomize hota hai taaki exploits predict na kar sakein.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 28,
    runningHead: "Book 4: Mobile Forensics • Topic 14: iOS Architecture & SEP",
    content: `
    <div class="inter-card">
      <h4>2. The Secure Enclave Processor (SEP)</h4>
      <p>Apple devices me security ka sabse bada pahaad <strong>Secure Enclave (SEP)</strong> hai:</p>
      <ul>
        <li>Ye main application processor se completely isolated ek separate hardware micro-coprocessor hai jo apna custom microkernel chalata hai.</li>
        <li><strong>UID (Unique ID):</strong> Chip manufacturing ke waqt factory me ek unique 256-bit AES key fuse ki jati hai. Ye key Apple ya kisi software ko kabhi read karne nahi milti.</li>
        <li><strong>Touch ID / Face ID Biometrics:</strong> Biometric templates SEP ke andar encrypted store hote hain. OS ko sirf "Match" ya "No Match" ka boolean signal milta hai.</li>
        <li><strong>Hardware Passcode Delay Counter:</strong> Agar koi wrong passcode dale, to SEP hardware delays enforce karta hai (1 min, 5 min, 15 min, 60 min). 10 galat attempts ke baad data wiping trigger kar sakta hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>3. Dedicated Hardware AES Crypto Engine</h4>
      <p>Main memory (RAM) aur flash storage ke beech me inline <strong>Hardware AES Engine</strong> baitha hota hai. Saara read/write data on-the-fly encrypt/decrypt hota hai bina CPU performance ko slow kiye.</p>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 14: Q131–Q140) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 14: iOS Architecture & SEP?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q131–Q140) on Darwin XNU, Mach, Secure Enclave and hardware UID.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="13" onclick="window.openMCQForSpread(13)">
        Start Quiz (Q131–Q140) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 15: iOS file system
// Spread 14: Pages 29 & 30 | Questions Q141–Q150
// ============================================================================
spreads.push({
  spreadId: "b4-s13",
  left: {
    pageNumber: 29,
    runningHead: "Book 4: Mobile Forensics • Topic 15: APFS & Data Protection",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 15 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">iOS file system</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: APFS Architecture & Data Protection Classes</h3>
    </div>

    <div class="inter-card">
      <h4>1. Apple File System (APFS) Architecture</h4>
      <p>iOS 10.3 me Apple ne 30 saal purane HFS+ ko replace karke <strong>APFS (Apple File System)</strong> introduce kiya:</p>
      <ul>
        <li><strong>64-bit Architecture:</strong> Single volume par $9 \times 10^{18}$ files support karta hai. Nanosecond level timestamp accuracy deta hai.</li>
        <li><strong>Crash Protection:</strong> Redirect-on-write architecture jo file corruption ko rokta hai.</li>
        <li><strong>Partition Layout:</strong>
          <br>&bull; System Partition (<code>/</code>): OS binaries, system plists (Read-Only, APFS snapshot sealed).
          <br>&bull; Data Partition (<code>/private/var</code>): User files, app data, SQLite databases (Read/Write, highly encrypted).</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 30,
    runningHead: "Book 4: Mobile Forensics • Topic 15: APFS & Data Protection",
    content: `
    <div class="inter-card">
      <h4>2. Apple Data Protection Classes (DSSSB Must-Memorize)</h4>
      <p>APFS har individual file ko specific protection class ke tehat encrypt karta hai:</p>
      <table class="inter-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Protection Name</th>
            <th>Forensic Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Class A</strong></td>
            <td>Complete Protection</td>
            <td>Sirf tab read ho sakti hai jab screen UNLOCKED ho. Lock hote hi key memory se erase ho jati hai. (Notes, Health, Mail).</td>
          </tr>
          <tr>
            <td><strong>Class B</strong></td>
            <td>Protected Unless Open</td>
            <td>File tab open ki ja sakti hai jab device unlock ho, par agar file open hai to lock hone ke baad bhi read/write chalta rehta hai.</td>
          </tr>
          <tr>
            <td><strong>Class C</strong></td>
            <td>Protected Until First User Authentication</td>
            <td>Phone boot hone ke baad <strong>pehle unlock ke baad</strong> key memory me rehti hai (AFU state me accessible). Lock hone par bhi accessible. (SMS, WhatsApp).</td>
          </tr>
          <tr>
            <td><strong>Class D</strong></td>
            <td>No Protection</td>
            <td>Device hardware key se encrypted hoti hai, user passcode ki zaroorat nahi hoti. Phone boot hote hi readable (System logs).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 15: Q141–Q150) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 15: APFS & Data Protection?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q141–Q150) on APFS, Class A, B, C, D and plist files.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="14" onclick="window.openMCQForSpread(14)">
        Start Quiz (Q141–Q150) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 16: iOS app permissions & logging in IOS
// Spread 15: Pages 31 & 32 | Questions Q151–Q160
// ============================================================================
spreads.push({
  spreadId: "b4-s14",
  left: {
    pageNumber: 31,
    runningHead: "Book 4: Mobile Forensics • Topic 16: iOS Permissions & Logging",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 16 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">iOS app permissions, logging in IOS</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: TCC.db, Unified Logging & CoreDuet</h3>
    </div>

    <div class="inter-card">
      <h4>1. iOS TCC (Transparency, Consent, and Control) Framework</h4>
      <p>Apple ka privacy gatekeeper jo apps ko Camera, Microphone, Photos, aur Location access karne se rokta hai:</p>
      <ul>
        <li><strong>Usage Description Strings:</strong> Developer ko <code>Info.plist</code> me reason declare karna compulsory hai (e.g., <code>NSCameraUsageDescription</code>, <code>NSLocationWhenInUseUsageDescription</code>).</li>
        <li><strong>TCC Database Path:</strong> User ne kis app ko kya permission di, ye centralized SQLite database me store hota hai:
          <br><code>/private/var/mobile/Library/TCC/TCC.db</code> (Table: <code>access</code>).
          <br>Forensic examiner yahan se pata laga sakta hai ki spyware ne kis time camera ya contacts access kiye the.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 32,
    runningHead: "Book 4: Mobile Forensics • Topic 16: iOS Permissions & Logging",
    content: `
    <div class="inter-card">
      <h4>2. Unified Logging System & sysdiagnose</h4>
      <p>iOS me traditional plain text log files nahi hoti; modern iOS <strong>Unified Logging (os_log)</strong> use karta hai:</p>
      <ul>
        <li>Compressed binary trace files (<code>.tracev3</code> format) me logs likhe jate hain.</li>
        <li><strong>sysdiagnose:</strong> Physical buttons (Volume Up + Volume Down + Power button simultaneously for 1-1.5 sec) press karke device me full system diagnostic dump trigger kiya ja sakta hai jo <code>/private/var/mobile/Library/Logs/CrashReporter/DiagnosticLogs/sysdiagnose/</code> me save hota hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>3. CoreDuet (knowledgeC.db) & Powerlog: User Behavioral Goldmine</h4>
      <ul>
        <li><strong>CoreDuet Database:</strong> <code>/private/var/mobile/Library/CoreDuet/knowledgeC.db</code>.
          <br>Ye database user ke har action ko track karta hai: kaunsi app kis second open hui, kab phone lock/unlock hua, screen brightness kitni thi, aur Bluetooth se kaunsi car connect thi!</li>
        <li><strong>CurrentPowerlog.PLSQL:</strong> Battery consumption ke sath-sath cellular signal strength, app battery usage, aur audio routing logs record karta hai.</li>
      </ul>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 16: Q151–Q160) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 16: iOS Permissions & Logs?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q151–Q160) on TCC.db, Unified Logging and knowledgeC.db.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="15" onclick="window.openMCQForSpread(15)">
        Start Quiz (Q151–Q160) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 17: Tools & technologies for iOS forensics
// Spread 16: Pages 33 & 34 | Questions Q161–Q170
// ============================================================================
spreads.push({
  spreadId: "b4-s15",
  left: {
    pageNumber: 33,
    runningHead: "Book 4: Mobile Forensics • Topic 17: iOS Forensic Tool Suite",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 17 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">tools & technologies for iOS forensics</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: iTunes Backups, libimobiledevice & GrayKey</h3>
    </div>

    <div class="inter-card">
      <h4>1. iTunes Backup Protocol & Manifest Files</h4>
      <p>Standard logical iOS extraction iTunes backup protocol par chalta hai:</p>
      <ul>
        <li>Backup folder me files apne original naam se nahi, balki unke relative path ke <strong>SHA-1 hash name</strong> se save hoti hain.</li>
        <li><strong>Manifest.db:</strong> Central SQLite database jo SHA-1 hash filenames ko unke original file paths, domains, aur metadata se map karta hai.</li>
        <li><strong>Encrypted Backup Advantage:</strong> Agar examiner backup par temporary password lagakar <em>Encrypted Backup</em> le, to Apple us backup me <strong>Health data, Wi-Fi passwords, aur Keychain credentials</strong> bhi include kar deta hai jo normal unencrypted backup me nahi aate!</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 34,
    runningHead: "Book 4: Mobile Forensics • Topic 17: iOS Forensic Tool Suite",
    content: `
    <div class="inter-card">
      <h4>2. libimobiledevice Open-Source Suite</h4>
      <p>Linux/Windows par Apple proprietary services se baat karne ke liye reverse-engineered library:</p>
      <ul>
        <li><code>ideviceinfo</code>: Device UDID, Serial Number, IMEI, iOS build version display karna.</li>
        <li><code>idevicebackup2</code>: Full device backup create aur restore karna.</li>
        <li><code>idevicesyslog</code>: Live Unified Logging output console par stream karna.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>3. Specialized Hardware Appliances: GrayKey</h4>
      <p>Grayshift dwara banaya gaya <strong>GrayKey</strong> law enforcement agencies ka sabse powerful proprietary hardware appliance hai:</p>
      <ul>
        <li>Lightning / USB-C port se connect hokar proprietary micro-exploits inject karta hai.</li>
        <li>Passcode brute-force karta hai bina 10 failed attempts ke wipe limit ko trigger kiye.</li>
        <li>Passcode crack hone ke baad full physical file-system image aur complete decrypted Keychain nikal leta hai.</li>
      </ul>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 17: Q161–Q170) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 17: iOS Forensic Tools?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q161–Q170) on iTunes Manifest.db, libimobiledevice and GrayKey.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="16" onclick="window.openMCQForSpread(16)">
        Start Quiz (Q161–Q170) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 18: Challenges & limitations of iOS forensics
// Spread 17: Pages 35 & 36 | Questions Q171–Q180
// ============================================================================
spreads.push({
  spreadId: "b4-s16",
  left: {
    pageNumber: 35,
    runningHead: "Book 4: Mobile Forensics • Topic 18: iOS Challenges & BFU vs AFU",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 18 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">challenges & limitations of iOS forensics</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: BFU vs AFU States & Anti-Forensic Throttling</h3>
    </div>

    <div class="inter-card">
      <h4>1. BFU (Before First Unlock) vs AFU (After First Unlock)</h4>
      <p>iOS forensics me case ki success phone ke power state par depend karti hai (DSSSB Golden Rule!):</p>
      <ul>
        <li><strong>BFU (Before First Unlock):</strong> Device reboot hone ke baad abhi tak ek baar bhi unlock nahi hua hai.
          <br><em>Cryptographic State:</em> Sabhi encryption keys (Class A, B, C) locked hain. Memory me sirf Class D keys hain. Phone par koi private messages, chats, ya photos extract NAHI kiye ja sakte. Sabse tough state.</li>
        <li><strong>AFU (After First Unlock):</strong> User ne boot hone ke baad kam se kam ek baar apna passcode daala hai, bhale hi screen filhal locked ho.
          <br><em>Cryptographic State:</em> Class C aur Class B encryption keys RAM memory me active rehti hain! Advanced forensic tools memory se keys carve karke maximum data extract kar sakti hain.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 36,
    runningHead: "Book 4: Mobile Forensics • Topic 18: iOS Challenges & BFU vs AFU",
    content: `
    <div class="inter-card">
      <h4>2. Hardware Throttling & Failed Passcode Erasure</h4>
      <p>Secure Enclave hardware level par brute-forcing ko slow karta hai:</p>
      <ul>
        <li>1 se 4 attempts: Zero delay.</li>
        <li>5th attempt: 1 minute delay.</li>
        <li>6th attempt: 5 minute delay.</li>
        <li>7th aur 8th attempt: 15 minute delay.</li>
        <li>9th attempt: 60 minute delay.</li>
        <li>10th attempt: Agar <em>"Erase Data"</em> setting enabled hai, to device flash storage ko zero kar deta hai!</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>3. Apple Lockdown Mode & USB Restricted Mode</h4>
      <ul>
        <li><strong>USB Restricted Mode:</strong> Agar iPhone 1 ghante tak unlock na ho, to Lightning/USB-C port data transfer band kar deta hai aur sirf charging allow karta hai.</li>
        <li><strong>Lockdown Mode:</strong> State-sponsored spyware (Pegasus) se bachne ke liye sandboxing ko extreme tighten karta hai, WebKit JIT compiler disable kar deta hai, aur complex message previews block kar deta hai.</li>
      </ul>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 18: Q171–Q180) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 18: iOS Challenges?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q171–Q180) on BFU vs AFU, hardware delays and Lockdown mode.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="17" onclick="window.openMCQForSpread(17)">
        Start Quiz (Q171–Q180) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 19: Forensic analysis of Pagers, Wearables & Smart Gadgets
// Spread 18: Pages 37 & 38 | Questions Q181–Q190
// ============================================================================
spreads.push({
  spreadId: "b4-s17",
  left: {
    pageNumber: 37,
    runningHead: "Book 4: Mobile Forensics • Topic 19: Pagers & Wearables",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 19 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">forensic analysis of Pagers, Wearable devices and other smart gadgets</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: POCSAG/FLEX Pagers & Apple Watch HealthKit</h3>
    </div>

    <div class="inter-card">
      <h4>1. Radio Pagers & Protocols (POCSAG & FLEX)</h4>
      <p>Pagers ek-tarfa (one-way simplex) radio receiver devices hain jo VHF/UHF frequencies par broad broadcast signals receive karte hain:</p>
      <ul>
        <li><strong>Protocols:</strong> <strong>POCSAG</strong> (Post Office Code Standardisation Advisory Group - 512, 1200, 2400 bps) aur Motorola ka <strong>FLEX</strong> protocol (high-speed, up to 6400 bps).</li>
        <li><strong>RIC (Receiver Identity Code / Capcode):</strong> Har pager ka 7-digit unique address hota hai.</li>
        <li><strong>Vulnerability:</strong> Pager transmissions traditionally unencrypted radio waves par broadcast hoti hain. SDR (Software Defined Radio - RTL-SDR) use karke air se poore network ke pager messages intercept kiye ja sakte hain! Device ke internal EEPROM / SRAM chip se stored numeric/alphanumeric messages extract kiye jate hain.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 38,
    runningHead: "Book 4: Mobile Forensics • Topic 19: Pagers & Wearables",
    content: `
    <div class="inter-card">
      <h4>2. Apple Watch & HealthKit Forensics</h4>
      <p>Wearable devices criminal investigations me alibi establish karne ke liye sabse solid physiological evidence provide karti hain:</p>
      <ul>
        <li><strong>Companion Sync:</strong> Apple Watch ka data paired iPhone ke saath sync hota hai aur <code>healthdb_secure.sqlite</code> me store hota hai.</li>
        <li><strong>Evidence Recovered:</strong>
          <br>&bull; Heart Rate (BPM) & ECG: Victim ke murder ya physical assault ka exact minute aur second confirm karna.
          <br>&bull; Step Count & Flights Climbed: Suspect physical exertion ya running kar raha tha ya nahi.
          <br>&bull; Stand Hours & Sleep Analysis: Suspect so raha tha ya jag raha tha.
          <br>&bull; Standalone GPS Workout Routes: Paired phone ke bina bhi watch independent GPS tracklogs store karti hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>3. Smart Trackers (Apple AirTags)</h4>
      <p>Apple AirTags Bluetooth Low Energy (BLE) advertisement beacons broadcast karte hain jise aas-paas ke millions of Apple devices anonymous peer-to-peer <em>Find My Network</em> ke zariye relay karte hain. Stalking cases me AirTag ka unique rotating BLE identifier aur paired Apple ID forensic proof hota hai.</p>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 19: Q181–Q190) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 19: Pagers & Wearables?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Practice all 10 targeted DSSSB questions (Q181–Q190) on POCSAG pagers, Apple Watch HealthKit and AirTags.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="18" onclick="window.openMCQForSpread(18)">
        Start Quiz (Q181–Q190) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 20: CDR (Call Details) Analysis
// Spread 19: Pages 39 & 40 | Questions Q191–Q200
// ============================================================================
spreads.push({
  spreadId: "b4-s18",
  left: {
    pageNumber: 39,
    runningHead: "Book 4: Mobile Forensics • Topic 20: CDR & Tower Dump Analysis",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 20 • MOBILE FORENSICS</span>
      <h2 class="syllabus-main-title">CDR (Call Details) Analysis</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: Cell Global Identity, Tower Azimuth & IPDR</h3>
    </div>

    <div class="inter-card">
      <h4>1. Call Detail Records (CDR) Fundamentals</h4>
      <p>Telecom Service Providers (TSPs - Jio, Airtel, Vi, BSNL) billing aur legal audit ke liye telecom switches (MSC) par har call aur SMS ka metadata record karte hain. CDR me call content (audio) nahi hota, sirf transaction metadata hota hai:</p>
      <ul>
        <li><strong>Core CDR Fields:</strong>
          <br>&bull; A-Party (Calling Number) & B-Party (Called Number).
          <br>&bull; Call Date, Time, Duration (in seconds), Call Type (Incoming, Outgoing, Missed, SMS-MO, SMS-MT).
          <br>&bull; IMEI (Handset used) & IMSI (SIM card used).
          <br>&bull; First Cell ID (Call start tower) & Last Cell ID (Call end tower).</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 40,
    runningHead: "Book 4: Mobile Forensics • Topic 20: CDR & Tower Dump Analysis",
    content: `
    <div class="inter-card">
      <h4>2. Cell Global Identity (CGI) & Tower Azimuth</h4>
      <p>Cell tower ki geographical position ko <strong>CGI</strong> code se globally identify kiya jata hai:</p>
      <div class="callout-box">
        <strong>CGI Structure: MCC - MNC - LAC - Cell ID</strong>
        <p>&bull; <strong>MCC (Mobile Country Code):</strong> 3 digits (India = 404/405).
        <br>&bull; <strong>MNC (Mobile Network Code):</strong> 2-3 digits (Operator specific).
        <br>&bull; <strong>LAC (Location Area Code):</strong> Telecom cluster area.
        <br>&bull; <strong>Cell ID (CI):</strong> Specific antenna sector on the tower.</p>
        <p>&bull; <strong>Azimuth Angle (0&deg; - 360&deg;):</strong> Antenna ka face kis direction me hai (e.g., Sector 1: 0&deg; North, Sector 2: 120&deg; South-East, Sector 3: 240&deg; South-West). Isse pie-shaped coverage cone me suspect ki location narrow-down hoti hai.</p>
      </div>
    </div>

    <div class="inter-card">
      <h4>3. IPDR, Tower Dumps & Indian Evidence Law</h4>
      <ul>
        <li><strong>Tower Dump Analysis:</strong> Crime scene ke paas wale tower ke specific time window (e.g., raat 2:00 se 2:30 AM) ka poora traffic dump lena taaki suspect phone identify ho sake.</li>
        <li><strong>IPDR (Internet Protocol Detail Record):</strong> User ke mobile data session ka IP, Source Port, Destination IP, aur timestamp mapping.</li>
        <li><strong>Legal Admissibility (Sec 65B IEA / Sec 63 BSA 2023):</strong> CDR aur Tower dump tabhi court me admissible hote hain jab Nodal Officer ka signed <strong>Section 65B / Section 63 Certificate</strong> sath me attach ho.</li>
      </ul>
    </div>

    <!-- SPREAD QUIZ CTA BANNER (Topic 20: Q191–Q200) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-info">
        <span style="font-size: 1.1rem; margin-right: 8px;">🎯</span>
        <div>
          <strong style="font-size: 0.86rem; color: var(--text-heading);">Mastered Topic 20: CDR Analysis?</strong>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Complete your preparation with all 10 targeted DSSSB questions (Q191–Q200) on CGI, Azimuth, IPDR and Section 65B.</div>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="19" onclick="window.openMCQForSpread(19)">
        Start Quiz (Q191–Q200) &rarr;
      </button>
    </div>
    `
  }
});

module.exports = spreads;
