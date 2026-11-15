// Book 4 Spreads Part 3: Topics 11–15 (Spreads 20–29, Pages 41–60)
// High-yield DSSSB Cyber Forensic notes: Mobile Forensics & Telecom Analysis

module.exports = [
  // =========================================================================
  // TOPIC 11: ANDROID ARTEFACTS PART 2 - THIRD-PARTY APPS & MEDIA (Spreads 20 & 21, Pages 41–44, Q101–Q110)
  // =========================================================================
  // Spread 20: Part 1 - Instant Messaging Forensics: WhatsApp, Telegram & Signal (Pages 41–42)
  {
    spreadId: 20,
    left: {
      pageNumber: 41,
      runningHead: 'CH. 11 • MESSAGING FORENSICS: WHATSAPP & SIGNAL',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 11 • Topic 11: Third-Party Apps & Media (Part 1)</span>
      <h2>Encrypted Messaging Forensics: WhatsApp, Telegram & Signal</h2>
    </div>

    <div class="intro-abstract">
      <p>Modern criminal communications have largely migrated from traditional unencrypted cellular SMS to over-the-top (OTT) encrypted instant messaging applications. Digital forensic examiners must understand application sandbox structures, local SQLite databases, and cryptographic key extraction techniques.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. WhatsApp Forensics: Databases & Crypt14/15 Decryption (Q101)</span>
      <p>WhatsApp stores chat conversations and media metadata in SQLite databases within its private sandbox and shared external storage:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Live Unencrypted Database</span>
            <span class="statute-tag">Path: /data/data/com.whatsapp/databases/</span>
          </div>
          <p>• <strong>Primary File:</strong> <code>msgstore.db</code> (and companion <code>msgstore.db-wal</code>).<br>
          • <strong>Evidentiary Contents:</strong> Complete chat history, sender/receiver JIDs (e.g., <code>[phone]@s.whatsapp.net</code>), group messages, read status, and message transmission timestamps.<br>
          • <strong>Access Requirement:</strong> Requires root privileges, physical dump, or forensic extraction agent to bypass sandbox permissions.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Encrypted External Backups (Q101)</span>
            <span class="statute-tag">msgstore.db.crypt14 / crypt15</span>
          </div>
          <p>• <strong>Path:</strong> <code>/sdcard/Android/media/com.whatsapp/WhatsApp/Databases/</code>.<br>
          • <strong>Encryption:</strong> Encrypted with <strong>256-bit AES</strong> in GCM/CBC mode.<br>
          • <strong>Decryption Key Extraction (Q101):</strong> To decrypt backups offline, examiners must extract the 32-byte symmetric master key file stored at <code>/data/data/com.whatsapp/files/key</code>. Without this key, external backup databases cannot be decrypted.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Telegram Forensics: cache4.db & Cloud Sync (Q102)</span>
      <p>Unlike WhatsApp's local-first architecture, Telegram is primarily cloud-synced, but maintains extensive local cache databases:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Telegram Local Storage: cache4.db (Q102)</span>
          <span class="statute-tag">Path: /data/data/org.telegram.messenger/databases/</span>
        </div>
        <p>• <strong>Primary Database:</strong> <code>cache4.db</code> contains cached non-secret chats, channel broadcasts, contacts, user profile photos, and shared documents.<br>
        • <strong>Secret Chats:</strong> End-to-end encrypted 'Secret Chats' utilize device-specific Diffie-Hellman keys. They are stored locally in <code>cache4.db</code> but are never synchronized to Telegram's cloud servers.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 42,
      runningHead: 'CH. 11 • SIGNAL SQLCIPHER & BROWSER ARTEFACTS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 11 (Part 1 Continued) • Signal & Browser Forensics</span>
      <h2>Signal SQLCipher Encryption & Chrome History</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Signal Messenger Forensics: The SQLCipher Barrier (Q103)</span>
      <p>Signal represents the highest level of mobile application security. Even if an examiner achieves physical root extraction, the raw database file cannot be opened in standard SQLite viewers:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">SQLCipher Full-Database Encryption (Q103)</span>
          <span class="statute-tag">Path: /data/data/org.thoughtcrime.securesms/</span>
        </div>
        <p>• Signal stores all data in <code>signal.db</code>, encrypted using <strong>SQLCipher</strong> (256-bit AES page-level encryption with HMAC-SHA1/SHA512 integrity checks).<br>
        • <strong>Passphrase Derivation:</strong> The database encryption key is generated randomly upon app installation and stored inside app shared preferences (<code>org.thoughtcrime.securesms_preferences.xml</code>) or Android Keystore. Forensic tools must extract this passphrase to decrypt <code>signal.db</code>.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Android Browser Forensics: Google Chrome History (Q104, Q105)</span>
      <p>Google Chrome is the default browser on modern Android devices. Its artefacts are stored under <code>/data/data/com.android.chrome/app_chrome/Default/</code>:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Chrome Database</th>
            <th>Critical Tables</th>
            <th>Forensic Evidentiary Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>History (Q104)</strong></td>
            <td><code>urls</code>, <code>visits</code>, <code>downloads</code></td>
            <td>Visited URLs, page titles, visit counts, search terms, and files downloaded over HTTP/HTTPS.</td>
          </tr>
          <tr>
            <td><strong>Cookies (Q110)</strong></td>
            <td><code>cookies</code></td>
            <td>Session authentication tokens, persistent tracking IDs. Encrypted via AES with keys in Keystore.</td>
          </tr>
          <tr>
            <td><strong>Login Data</strong></td>
            <td><code>logins</code></td>
            <td>Saved website usernames and passwords (passwords encrypted via Chrome credential encryption).</td>
          </tr>
        </tbody>
      </table>
      <p><strong>Timestamp Interpretation (Q105):</strong> Chrome timestamps are formatted as <strong>WebKit Epoch</strong>: microseconds elapsed since <em>January 1, 1601 UTC</em>. (Formula: <code>Unix_Sec = (WebKit_Microsec / 1,000,000) - 11,644,473,600</code>).</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 11 (Part 1/2) Complete.</strong> Turn page for MediaStore, EXIF GPS &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="10" onclick="window.openMCQForSpread(10)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q101–Q110) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 21: Part 2 - MediaStore Catalog, EXIF Metadata & Hardware Keystores (Pages 43–44)
  {
    spreadId: 21,
    left: {
      pageNumber: 43,
      runningHead: 'CH. 11 • MEDIASTORE CATALOG & EXIF GPS FORENSICS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 11 • Topic 11: Third-Party Apps & Media (Part 2)</span>
      <h2>MediaStore Indexing, EXIF Geolocation & Keystores</h2>
    </div>

    <div class="intro-abstract">
      <p>Media files recovered from mobile devices provide critical corroboration in criminal investigations. Android maintains a central indexing provider for all multimedia, while embedded EXIF tags reveal physical geolocation coordinates.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Android MediaStore Database: external.db (Q106)</span>
      <p>Rather than traversing millions of raw storage sectors, the Android operating system maintains a central SQLite index of all media files across storage volumes:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Path: external.db (Q106)</span>
            <span class="statute-tag">Media Index</span>
          </div>
          <p>• <strong>Path:</strong> <code>/data/data/com.android.providers.media/databases/external.db</code>.<br>
          • <strong>Tables:</strong> <code>images</code>, <code>video</code>, <code>audio</code>, and <code>files</code>.<br>
          • <strong>Key Columns:</strong> <code>_data</code> (absolute file path), <code>_size</code>, <code>mime_type</code>, <code>date_added</code>, <code>date_modified</code>, <code>latitude</code>, and <code>longitude</code>.<br>
          • <strong>Forensic Goldmine:</strong> If a suspect deletes photos from the gallery, residual metadata records often persist in <code>external.db</code>, proving the image previously existed on the handset!</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Thumbnail Caches (.thumbnails)</span>
            <span class="statute-tag">Visual Reconstruction</span>
          </div>
          <p>Stored in <code>/sdcard/DCIM/.thumbnails/</code>. Contains low-resolution cached previews of images. Even if the full-resolution photo was deleted from disk, the thumbnail cache frequently preserves the visual evidence!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. EXIF Metadata: Pinpointing Suspect Location (Q107)</span>
      <p>Photographs captured by smartphone camera modules contain Exchangeable Image File Format (EXIF) metadata embedded directly within the JPEG/HEIC header:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">High-Yield EXIF Forensic Tags (Q107)</span>
          <span class="statute-tag">Crime Scene Proof</span>
        </div>
        <p>• <code>GPSLatitude</code> & <code>GPSLongitude</code>: Precise geographic decimal coordinates.<br>
        • <code>GPSAltitude</code> & <code>GPSTimeStamp</code>: Altitude above sea level and atomic UTC timestamp.<br>
        • <code>Make</code> & <code>Model</code>: Exact device hardware (e.g., Apple iPhone 14 Pro, Samsung SM-S918B).<br>
        • <code>DateTimeOriginal</code>: Sub-second timestamp when the camera shutter was pressed.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 44,
      runningHead: 'CH. 11 • HARDWARE KEYSTORE & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 11 (Part 2 Continued) • Hardware Security & Exam Traps</span>
      <h2>Android Keystore, TEE & Topic 11 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Hardware-Backed Android Keystore System (Q108)</span>
      <p>How does modern Android prevent banking passwords and encryption keys from being stolen even if malware achieves root privileges?</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Trusted Execution Environment (TEE) & StrongBox (Q108)</span>
          <span class="statute-tag">Hardware Key Isolation</span>
        </div>
        <p>• <strong>Mechanism:</strong> Cryptographic keys generated via the Android Keystore API are stored and used exclusively within the <strong>Trusted Execution Environment (TEE)</strong> (e.g., ARM TrustZone) or a dedicated <strong>StrongBox Keymaster</strong> hardware chip.<br>
        • <strong>Zero Key Exposure:</strong> Cryptographic operations (signing, decryption) are executed inside the secure hardware core. <em>The private key material is never exposed to the main Android OS RAM, preventing key extraction even by a root user!</em></p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Android Artefacts Part 2 (Q101–Q110)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (WhatsApp Backups):</strong> Offline WhatsApp backup files (<code>msgstore.db.crypt14/15</code>) require the 32-byte key stored in <code>/data/data/com.whatsapp/files/key</code> to decrypt (Q101).<br>
        ⚠️ <strong>Trap 2 (Signal Encryption):</strong> Signal does not use plain SQLite; it uses <strong>SQLCipher</strong> full-database AES encryption (Q103).<br>
        ⚠️ <strong>Trap 3 (Chrome Timestamps):</strong> Chrome uses WebKit timestamps (microseconds since Jan 1, 1601 UTC), NOT standard Unix epoch (Q105).<br>
        ⚠️ <strong>Trap 4 (MediaStore Index):</strong> The central media database indexing images, videos, and audio on Android is <strong>external.db</strong> (Q106).<br>
        ⚠️ <strong>Trap 5 (EXIF Location):</strong> The EXIF metadata tags providing suspect positioning are <code>GPSLatitude</code>, <code>GPSLongitude</code>, and <code>GPSTimeStamp</code> (Q107).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 11: Third-Party Apps &amp; Media Artefacts?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q101–Q110).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="10" onclick="window.openMCQForSpread(10)">
        Practice Topic 11 Quiz (Q101–Q110) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 12: TOOLS & TECHNOLOGIES FOR ANDROID FORENSICS (Spreads 22 & 23, Pages 45–48, Q111–Q120)
  // =========================================================================
  // Spread 22: Part 1 - Command-Line Forensic Tools: ADB, Fastboot & Andriller (Pages 45–46)
  {
    spreadId: 22,
    left: {
      pageNumber: 45,
      runningHead: 'CH. 12 • ANDROID FORENSIC TOOLS: ADB & FASTBOOT',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 12 • Topic 12: Android Tools (Part 1)</span>
      <h2>Command-Line Forensic Tooling: ADB & Fastboot</h2>
    </div>

    <div class="intro-abstract">
      <p>Mobile forensic examinations leverage a combination of open-source command-line utilities and certified commercial software workstations. Mastering command-line tools provides deep diagnostic flexibility when commercial automated suites encounter proprietary device barriers.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Android Debug Bridge (ADB) Forensic Command Suite (Q111)</span>
      <p>The Android Debug Bridge (ADB) is a versatile client-server tool communicating over USB port 5037. Key forensic commands include:</p>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>ADB Command Syntax</th>
            <th>Forensic Operation & Evidentiary Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>adb backup -apk -shared -all -f backup.ab</code> (Q111)</td>
            <td>Creates a full logical backup of installed APKs, app data (where allowed), and shared storage into an Android Backup archive (<code>.ab</code>).</td>
          </tr>
          <tr>
            <td><code>adb pull /data/system/packages.xml .</code></td>
            <td>Copies a targeted file or directory from the device file system to the forensic examination workstation (requires root).</td>
          </tr>
          <tr>
            <td><code>adb shell content query --uri [URI]</code> (Q119)</td>
            <td>Directly queries system content providers without root. E.g., querying <code>content://telephony/carriers</code> dumps APN and cellular carrier routing settings.</td>
          </tr>
          <tr>
            <td><code>adb bugreport bugreport.zip</code></td>
            <td>Compiles an extensive diagnostic dump of all system logs, dumpsys services, tombstones, and battery history.</td>
          </tr>
          <tr>
            <td><code>adb logcat -d &gt; logcat.txt</code></td>
            <td>Dumps the current contents of the volatile logcat circular ring buffers to a file and exits.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. Unpacking Android Backups: Android Backup Extractor (ABE) (Q112)</span>
      <p>Android Backup files (<code>.ab</code>) cannot be opened directly by standard ZIP utilities. The <strong>Android Backup Extractor (ABE)</strong> removes the 24-byte proprietary Android backup header (which specifies backup version, compression flag, and encryption algorithm) and unpacks the zlib compressed stream into a standard <code>.tar</code> archive.</p>
    </div>
      `
    },
    right: {
      pageNumber: 46,
      runningHead: 'CH. 12 • FASTBOOT MODE & ANDRILLER SUITE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 12 (Part 1 Continued) • Bootloader Protocols & Utilities</span>
      <h2>Fastboot Protocol & Andriller Forensic Suite</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Fastboot Protocol Forensics (Q113)</span>
      <p>Fastboot is a bootloader-level protocol executed before the Linux kernel initializes. The handset connects over USB in a minimal diagnostic state:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Diagnostic & Extraction Capabilities (Q113)</span>
          <span class="statute-tag">Bootloader Protocol</span>
        </div>
        <p>• <strong>Device Auditing:</strong> Executing <code>fastboot getvar all</code> dumps hardware partition sizes, bootloader unlock status, baseband modem version, and serial numbers.<br>
        • <strong>Tether-Booting Custom Recovery:</strong> On devices with unlocked bootloaders, examiners can execute <code>fastboot boot recovery.img</code>. This loads a custom forensic recovery image (e.g., TWRP) directly into volatile RAM <em>without modifying or flashing the device's internal NAND storage</em>, preserving chain of custody!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Andriller Android Forensic Suite (Q114)</span>
      <p>Andriller is a specialized forensic utility developed specifically for smartphones running Android:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Core Forensic Modules (Q114)</span>
          <span class="statute-tag">Open-Source & Commercial</span>
        </div>
        <p>• Read-only ADB extraction of contacts, call logs, SMS, and WhatsApp chat history.<br>
        • <strong>Lockscreen PIN / Gesture Decoding:</strong> Automatically cracks gesture pattern keys (parsing <code>gesture.key</code>) and brute-forces 4-to-6 digit PIN hashes (<code>password.key</code>) on supported Android releases.<br>
        • Generates structured HTML forensic examination reports with calculated SHA-256 hashes.</p>
      </div>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 12 (Part 1/2) Complete.</strong> Turn page for Commercial Forensic Suites (Cellebrite, Magnet) &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="11" onclick="window.openMCQForSpread(11)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q111–Q120) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 23: Part 2 - Commercial Suites: Cellebrite, Magnet AXIOM, MSAB & Autopsy (Pages 47–48)
  {
    spreadId: 23,
    left: {
      pageNumber: 47,
      runningHead: 'CH. 12 • COMMERCIAL FORENSIC SUITES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 12 • Topic 12: Android Tools (Part 2)</span>
      <h2>Commercial Forensic Suites: Cellebrite, Magnet & MSAB</h2>
    </div>

    <div class="intro-abstract">
      <p>Government cyber forensic laboratories and law enforcement agencies rely on certified commercial forensic platforms to extract, decode, correlate, and report mobile evidence in court-admissible formats.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Cellebrite Ecosystem: UFED & Physical Analyzer (Q115)</span>
      <p>Cellebrite divides mobile digital forensics into two operational phases:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Cellebrite UFED Hardware</span>
            <span class="statute-tag">Data Acquisition</span>
          </div>
          <p>Ruggedized touchscreen hardware or software running proprietary bootloader/EDL exploit chains to bypass passcodes and extract raw bitstream images or file systems.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Physical Analyzer (PA) (Q115)</span>
            <span class="statute-tag">Decoding & Reporting</span>
          </div>
          <p>Workstation analysis software that ingests the raw extraction. It parses SQLite databases, carves deleted freelist records, decodes encrypted apps, and reconstructs interactive timelines.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Magnet AXIOM Mobile & MSAB XRY (Q116, Q117)</span>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Forensic Suite</th>
            <th>Core Architectural Strengths & Methodologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Magnet AXIOM Mobile (Q116)</strong></td>
            <td><strong>Artifact-First Processing:</strong> Correlates mobile phone extractions, cloud warrant returns (Google Takeout, iCloud), and desktop computer artefacts into a unified evidence graph. Excels at recovering chat histories and fragmented pictures.</td>
          </tr>
          <tr>
            <td><strong>MSAB XRY (Q117)</strong></td>
            <td>Structured three-tier extraction architecture: (1) <strong>Logical</strong> (API-based), (2) <strong>File System</strong> (live directory dumps), and (3) <strong>Physical</strong> (raw flash partition imaging). Uses read-only forensic file containers (<code>.xry</code>).</td>
          </tr>
          <tr>
            <td><strong>Oxygen Forensic Detective (Q118)</strong></td>
            <td>Deep application decoding, built-in cloud token extractor (Oxygen Cloud Extractor), and specialized parsers for IoT smartwatches, fitness bands, and drone flight logs.</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 48,
      runningHead: 'CH. 12 • AUTOPSY ANDROID ANALYZER & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 12 (Part 2 Continued) • Open-Source Analysis & Exam Traps</span>
      <h2>Autopsy Android Module & Tooling Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Open-Source Analysis: Autopsy Android Analyzer (Q120)</span>
      <p>The open-source <strong>Autopsy</strong> forensic platform includes a dedicated Android Analyzer module:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Automated Parsing Pipeline (Q120)</span>
          <span class="statute-tag">Autopsy Blackboard</span>
        </div>
        <p>• Ingests raw Android disk images (<code>.dd</code>) or logical folder dumps.<br>
        • Automatically locates and parses standard SQLite databases (<code>contacts2.db</code>, <code>telephony.db</code>, Chrome <code>History</code>).<br>
        • Extracts call records, SMS/MMS messages, web bookmarks, and GPS coordinates directly into Autopsy's Blackboard evidence tree for rapid keyword searching.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Android Forensic Tools (Q111–Q120)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (ADB Logical Backup):</strong> The command to create a full backup archive is <code>adb backup -apk -shared -all -f backup.ab</code> (Q111).<br>
        ⚠️ <strong>Trap 2 (ABE Purpose):</strong> Android Backup Extractor (ABE) converts <code>.ab</code> archives to standard uncompressed <code>.tar</code> files (Q112).<br>
        ⚠️ <strong>Trap 3 (Fastboot Boot):</strong> <code>fastboot boot recovery.img</code> boots a recovery kernel into RAM without modifying NAND flash memory (Q113).<br>
        ⚠️ <strong>Trap 4 (Cellebrite Roles):</strong> UFED handles physical data extraction; <strong>Physical Analyzer</strong> handles decoding and report generation (Q115).<br>
        ⚠️ <strong>Trap 5 (XRY Tiers):</strong> MSAB XRY organizes extractions into Logical, File System, and Physical (Q117).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 12: Android Forensic Tools &amp; Technologies?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q111–Q120).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="11" onclick="window.openMCQForSpread(11)">
        Practice Topic 12 Quiz (Q111–Q120) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 13: CHALLENGES & LIMITATIONS OF ANDROID FORENSICS (Spreads 24 & 25, Pages 49–52, Q121–Q130)
  // =========================================================================
  // Spread 24: Part 1 - FDE vs FBE & Direct Boot Architecture (Pages 49–50)
  {
    spreadId: 24,
    left: {
      pageNumber: 49,
      runningHead: 'CH. 13 • ANDROID ENCRYPTION: FDE VS FBE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 13 • Topic 13: Android Challenges (Part 1)</span>
      <h2>Android Storage Encryption: FDE vs File-Based Encryption</h2>
    </div>

    <div class="intro-abstract">
      <p>Android's cryptographic evolution has erected monumental barriers to digital forensic examination. The transition from legacy Full Disk Encryption (FDE) to modern hardware-backed File-Based Encryption (FBE) fundamentally altered what evidence is recoverable from locked smartphones.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Legacy Full Disk Encryption (FDE) (Q121)</span>
      <p>Standardized in Android 5.0 through Android 9.0, Full Disk Encryption operated at the block device level:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">FDE Architecture & The All-or-Nothing Flaw (Q121)</span>
          <span class="statute-tag">Block Device Encryption</span>
        </div>
        <p>• <strong>Single Master Key:</strong> A single 128/256-bit AES master key encrypted the entire <code>/data</code> (userdata) block partition using <code>dm-crypt</code>.<br>
        • <strong>Cold Boot Inaccessibility:</strong> Until the user entered their screen passcode, the phone could not boot at all—no phone calls could be received, and alarm clocks could not sound.<br>
        • <strong>Forensic Status:</strong> Once decrypted, the entire userdata partition was completely unlocked simultaneously.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Modern File-Based Encryption (FBE) & Direct Boot (Q121, Q122)</span>
      <p>Introduced in Android 7.0 and strictly mandated for all devices launching with Android 10+, <strong>File-Based Encryption (FBE)</strong> encrypts individual files with unique cryptographic keys. This enables <strong>Direct Boot</strong>:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Device Encrypted (DE) Storage (Q122)</span>
            <span class="statute-tag">Available at Boot</span>
          </div>
          <p>• <strong>Key Derivation:</strong> Key is derived strictly from a hardware-bound secret in the SoC's secure element. Does NOT require user passcode.<br>
          • <strong>Accessible Data:</strong> Alarms, incoming telephony/SMS services, and accessibility settings. Accessible immediately in BFU state.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Credential Encrypted (CE) Storage (Q122)</span>
            <span class="statute-tag">Locked Until First Unlock</span>
          </div>
          <p>• <strong>Key Derivation:</strong> Key is derived from: (1) Hardware secret, AND (2) The user's screen lock PIN/passcode.<br>
          • <strong>Accessible Data:</strong> All user private data (WhatsApp chats, photos, downloaded files). Completely locked until first user authentication!</p>
        </div>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 50,
      runningHead: 'CH. 13 • HARDWARE SECURITY ENCLAVES & TITAN M2',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 13 (Part 1 Continued) • Hardware Security Chips</span>
      <h2>Hardware Security Chips: Titan M2 & Qualcomm SPU</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Dedicated Hardware Security Coprocessors (Q123, Q127)</span>
      <p>Modern Android flagships isolate cryptographic key generation and authentication inside dedicated silicon chips:</p>
      
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Google Titan M2 / StrongBox Chip (Q123)</span>
          <span class="statute-tag">Discrete Microcontroller</span>
        </div>
        <p>• A custom discrete security chip with dedicated RAM, flash, and cryptographic accelerators.<br>
        • <strong>Hardware Rate-Limiting:</strong> Enforces exponential backoff delays on passcode attempts. Even if an attacker has physical possession of the motherboard, the Titan M2 limits attempts to prevent software brute-forcing.<br>
        • <strong>Physical Attack Resistance:</strong> Shielded against side-channel analysis, power-glitching, and laser fault injection.</p>
      </div>

      <div class="statute-card card-teal" style="margin-top: 10px;">
        <div class="statute-header">
          <span class="statute-section">Qualcomm Secure Processing Unit (SPU) (Q127)</span>
          <span class="statute-tag">On-Die Hardware Enclave</span>
        </div>
        <p>• Integrated directly onto Snapdragon SoCs as an isolated subsystem with its own secure CPU and crypto engines.<br>
        • Manages biometric templates, Android Keystore operations, and eSIM cryptographic profiles, completely isolated from Android OS exploits.</p>
      </div>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 13 (Part 1/2) Complete.</strong> Turn page for Bootloader Policies, TRIM &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="12" onclick="window.openMCQForSpread(12)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q121–Q130) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 25: Part 2 - OEM Bootloader Policies, FTL TRIM Erasure & Exam Traps (Pages 51–52)
  {
    spreadId: 25,
    left: {
      pageNumber: 51,
      runningHead: 'CH. 13 • BOOTLOADER LOCKOUTS & FTL TRIM WEAR',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 13 • Topic 13: Android Challenges (Part 2)</span>
      <h2>OEM Policies & Flash Wear-Leveling Constraints</h2>
    </div>

    <div class="intro-abstract">
      <p>Beyond cryptographic barriers, forensic investigators must navigate aggressive OEM bootloader locking policies, user consent prompts, and solid-state drive autonomous background data erasure.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. OEM Bootloader Policies & Mandatory Reset (Q124, Q125)</span>
      <p>Unlike personal computers where investigators can insert a forensic USB drive and boot into a Linux live environment, Android original equipment manufacturers (OEMs) enforce draconian hardware policies:</p>
      <ul class="forensic-list">
        <li><strong>Bootloader Lockout:</strong> Bootloaders reject unsigned code. Flashing a custom recovery kernel requires unlocking the bootloader.</li>
        <li><strong>Mandatory Cryptographic Wipe (Q124):</strong> Executing <code>fastboot oem unlock</code> automatically triggers a complete factory reset, destroying File-Based Encryption master keys!</li>
        <li><strong>ADB RSA Key Prompts (Q125):</strong> Connecting an unlocked Android phone to a new forensic computer triggers an RSA confirmation dialog that requires physical screen touch confirmation.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. Flash Translation Layer (FTL) & TRIM Destruction (Q130)</span>
      <p>Why is unallocated space carving increasingly futile on modern mobile flash memory (UFS / eMMC)?</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Autonomous TRIM Garbage Collection (Q130)</span>
          <span class="statute-tag">Wear-Leveling</span>
        </div>
        <p>• Modern flash controllers maintain a <strong>Flash Translation Layer (FTL)</strong> mapping logical block addresses to physical NAND flash cells.<br>
        • When an operating system deletes a file, it issues a <strong>TRIM / discard command</strong>.<br>
        • The FTL controller unmaps those physical blocks and runs background <strong>Garbage Collection</strong>, resetting the cells to <code>0xFF</code>. When a forensic tool requests those unallocated sectors, the controller returns all zeros!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 52,
      runningHead: 'CH. 13 • FACTORY RESET PROTECTION & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 13 (Part 2 Continued) • Anti-Theft & Exam Traps</span>
      <h2>Factory Reset Protection & Topic 13 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Factory Reset Protection (FRP) & Re-Activation Locks (Q129)</span>
      <p>Introduced in Android 5.1, <strong>Factory Reset Protection (FRP)</strong> prevents unauthorized device setup following an untrusted wipe (e.g. wiped via recovery mode or fastboot):</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">FRP Partition Architecture (Q129)</span>
          <span class="statute-tag">Persistent Cloud Lock</span>
        </div>
        <p>• Credentials and cryptographic lock flags are stored in a dedicated persistent partition (<code>/dev/block/bootdevice/by-name/frp</code> or <code>persistent</code>) that survives standard factory resets.<br>
        • The device setup wizard mandates entering the previously configured Google Account username and password before allowing setup to proceed.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Android Challenges (Q121–Q130)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (FBE vs FDE):</strong> FBE encrypts files individually into Device Encrypted (DE) and Credential Encrypted (CE) storage; FDE encrypted the whole userdata partition with one key (Q121).<br>
        ⚠️ <strong>Trap 2 (Direct Boot):</strong> In Direct Boot (BFU state), only Device Encrypted (DE) storage is accessible; Credential Encrypted (CE) data remains locked (Q122).<br>
        ⚠️ <strong>Trap 3 (Fastboot Unlock Wipe):</strong> Unlocking the bootloader automatically commands a mandatory wipe of the userdata partition (Q124).<br>
        ⚠️ <strong>Trap 4 (Chip-Off with FBE):</strong> Desoldering a modern UFS chip running FBE yields unreadable ciphertext because the encryption key is locked inside the SoC's hardware security chip (Q128).<br>
        ⚠️ <strong>Trap 5 (TRIM Erasure):</strong> FTL TRIM commands cause flash memory controllers to actively erase unallocated blocks, thwarting traditional carving (Q130).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 13: Challenges &amp; Limitations of Android Forensics?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q121–Q130).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="12" onclick="window.openMCQForSpread(12)">
        Practice Topic 13 Quiz (Q121–Q130) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 14: IOS ARCHITECTURE & SECURITY FOUNDATIONS (Spreads 26 & 27, Pages 53–56, Q131–Q140)
  // =========================================================================
  // Spread 26: Part 1 - Darwin/XNU Kernel, Secure Enclave & Hardware Crypto (Pages 53–54)
  {
    spreadId: 26,
    left: {
      pageNumber: 53,
      runningHead: 'CH. 14 • IOS ARCHITECTURE: DARWIN/XNU & SEP',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 14 • Topic 14: iOS Architecture & Security (Part 1)</span>
      <h2>Apple iOS Architecture: Darwin/XNU & Secure Enclave</h2>
    </div>

    <div class="intro-abstract">
      <p>Apple's iOS operates a deeply integrated, hardware-anchored security architecture engineered from the silicon up. Understanding the Darwin/XNU hybrid kernel and the hardware Secure Enclave Processor (SEP) is fundamental to conducting iOS digital forensic examinations.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Darwin / XNU Hybrid Kernel Architecture (Q131)</span>
      <p>The foundation of iOS is Apple's Darwin operating system, powered by the <strong>XNU (X is Not Unix)</strong> hybrid kernel, which integrates three core subsystems:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Mach 3.0 Microkernel Subsystem (Q131)</span>
            <span class="statute-tag">Low-Level Core</span>
          </div>
          <p>Handles thread scheduling, processor dispatching, virtual memory management, inter-process communication (Mach ports and messages), and task handling.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">FreeBSD / POSIX Subsystem (Q131)</span>
            <span class="statute-tag">OS Interface</span>
          </div>
          <p>Provides the POSIX application programming interface (API), process credentials, BSD sockets networking, file system mounting, and TrustedBSD Mandatory Access Control (MAC).</p>
        </div>
      </div>
      <p style="margin-top: 8px;">• <strong>I/O Kit:</strong> An object-oriented C++ framework providing device drivers for hardware peripherals (display, camera, USB, flash storage controllers).</p>
    </div>

    <div class="section-block">
      <span class="section-label">2. Secure Enclave Processor (SEP) Architecture (Q132)</span>
      <p>Fabricated directly into Apple A-series and M-series chips, the <strong>Secure Enclave (SEP)</strong> is a physically isolated coprocessor running its own dedicated operating system (<strong>sepOS</strong>):</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Isolated Silicon Hardware Security (Q132)</span>
          <span class="statute-tag">sepOS Subsystem</span>
        </div>
        <p>• <strong>Dedicated Hardware:</strong> Features its own secure microkernel, dedicated encrypted RAM, true random number generator (TRNG), and dedicated hardware AES engine.<br>
        • <strong>Biometric Engine:</strong> Evaluates fingerprint (Touch ID) and facial 3D mesh (Face ID) biometric templates. <em>Biometric templates never leave the Secure Enclave and cannot be read by the main iOS kernel!</em><br>
        • <strong>Hardware Passcode Rate-Limiting:</strong> Enforces exponential backoff timers (up to 60 minutes) on incorrect passcode attempts, thwarting software brute-forcing.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 54,
      runningHead: 'CH. 14 • HARDWARE AES ENGINE & UID/GID KEYS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 14 (Part 1 Continued) • Silicon Keys & Secure Boot</span>
      <h2>Silicon-Fused Keys & The Apple Secure Boot Chain</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Hardware AES Engine & Factory Silicon Keys: UID vs GID (Q133)</span>
      <p>Apple embeds cryptographic keys directly into the Application Processor silicon during fabrication using microscopic electronic fuses:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Device Unique ID (UID) (Q133)</span>
            <span class="statute-tag">Factory-Fused Silicon Secret</span>
          </div>
          <p>• A 256-bit AES key burned into the Application Processor during silicon manufacturing.<br>
          • <strong>Inaccessible to Software:</strong> No software, firmware, or debugger can read the raw UID key directly—not even Apple engineers! Only the hardware AES engine can use it to encrypt and decrypt data, cryptographically binding stored data to that specific physical motherboard.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Group ID (GID)</span>
            <span class="statute-tag">Processor Family Secret</span>
          </div>
          <p>A common 256-bit AES key shared across all processors of a specific model family (e.g. all Apple A15 chips). Used to encrypt general firmware updates and verify official Apple software builds.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. The Apple Secure Boot Chain (Q134)</span>
      <p>To ensure that only authorized Apple software executes on the hardware, iOS enforces a cryptographic chain of trust rooted in hardware silicon:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Sequential Chain of Trust (Q134)</span>
          <span class="statute-tag">Silicon to User Space</span>
        </div>
        <p>1. <strong>Boot ROM (SecureROM):</strong> Immutable read-only code burned into silicon during manufacturing. Contains Apple Root CA public key. Measures and executes the Low-Level Bootloader.<br>
        2. <strong>Low-Level Bootloader (LLB):</strong> Verifies cryptographic signatures and loads iBoot.<br>
        3. <strong>iBoot:</strong> Verifies the iOS Kernel cache signature, initializes drivers, and loads the kernel.<br>
        4. <strong>iOS Kernel (XNU):</strong> Validates user space daemons, enforces code signing via <code>amfid</code>, and launches <code>launchd</code>.</p>
      </div>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 14 (Part 1/2) Complete.</strong> Turn page for Apple Data Protection Classes (A, B, C, D) &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="13" onclick="window.openMCQForSpread(13)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q131–Q140) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 27: Part 2 - Apple Data Protection Classes (A, B, C, D) & Exam Traps (Pages 55–56)
  {
    spreadId: 27,
    left: {
      pageNumber: 55,
      runningHead: 'CH. 14 • APPLE DATA PROTECTION CLASSES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 14 • Topic 14: iOS Architecture & Security (Part 2)</span>
      <h2>Apple Data Protection Architecture: Classes A, B, C & D</h2>
    </div>

    <div class="intro-abstract">
      <p>Apple does not rely on single-key disk encryption. The iOS <strong>Data Protection</strong> framework integrates hardware cryptographic keys, the user's screen passcode, and file system metadata to assign every individual file to one of four protection classes.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Four Apple Data Protection Classes (Q135–Q138)</span>
      <p>Understanding which class protects a targeted file determines whether digital evidence is recoverable from an AFU or BFU device:</p>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Class Designation</th>
            <th>API Constant</th>
            <th>Cryptographic Key Lifetime in RAM</th>
            <th>Forensic Accessibility Post-Lock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Class A (Q135)</strong></td>
            <td><code>NSFileProtectionComplete</code></td>
            <td>Key is <strong>erased from RAM immediately</strong> when the device screen is locked! Derived from user passcode + hardware UID.</td>
            <td><strong>Inaccessible when locked:</strong> High-security items (Mail messages, Safari browsing history, Health databases). Completely unreadable until user unlocks screen.</td>
          </tr>
          <tr>
            <td><strong>Class B (Q137)</strong></td>
            <td><code>NSFileProtectionCompleteUnlessOpen</code></td>
            <td>Key is maintained in RAM if file is open. Uses asymmetric public-key wrapping to permit appending data while screen is locked.</td>
            <td>Files created or opened before lock can continue receiving data (e.g. background audio recording, ongoing file download).</td>
          </tr>
          <tr>
            <td><strong>Class C (Q136)</strong></td>
            <td><code>NSFileProtectionCompleteUntilFirstUserAuthentication</code></td>
            <td>Key is derived upon first unlock after boot and <strong>remains resident in RAM</strong> even when device is locked thereafter!</td>
            <td><strong>Default Class for Apps:</strong> Third-party apps (WhatsApp, Telegram) can write and read cached chats while locked. Recoverable in AFU forensic extractions!</td>
          </tr>
          <tr>
            <td><strong>Class D (Q138)</strong></td>
            <td><code>NSFileProtectionNone</code></td>
            <td>Key is derived strictly from the hardware UID key; independent of user passcode.</td>
            <td><strong>Accessible at all times:</strong> Unencrypted system files, wallpaper, direct boot telephony daemons. Accessible in BFU state.</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 56,
      runningHead: 'CH. 14 • MANDATORY ACCESS CONTROL & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 14 (Part 2 Continued) • Sandboxing & Exam Traps</span>
      <h2>Seatbelt Sandboxing & iOS Security Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">2. TrustedBSD Mandatory Access Control & Seatbelt Sandbox (Q139, Q140)</span>
      <p>Every process executing in iOS is confined by Apple's <strong>Seatbelt</strong> sandbox framework:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Seatbelt Profile Enforcement (Q139, Q140)</span>
          <span class="statute-tag">Kernel MAC</span>
        </div>
        <p>• Enforced at the XNU kernel boundary via the TrustedBSD MAC framework.<br>
        • Sandboxed processes cannot communicate over arbitrary UNIX domain sockets, execute unauthorized system calls, or read outside their assigned container directory.<br>
        • <strong>Kernel ASLR (KASLR) (Q140):</strong> Randomizes kernel memory offsets at every boot, thwarting hardcoded Return-Oriented Programming (ROP) memory exploits.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. DSSSB Exam Traps: iOS Architecture & Security (Q131–Q140)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (iOS Kernel Core):</strong> iOS is powered by the <strong>Darwin / XNU</strong> hybrid kernel combining Mach microkernel, FreeBSD, and I/O Kit (Q131).<br>
        ⚠️ <strong>Trap 2 (Secure Enclave OS):</strong> The Secure Enclave executes its own isolated microkernel called <strong>sepOS</strong> (Q132).<br>
        ⚠️ <strong>Trap 3 (Device UID Key):</strong> The 256-bit AES UID key is permanently fused into the processor silicon and cannot be read by any software or Apple (Q133).<br>
        ⚠️ <strong>Trap 4 (Secure Boot Order):</strong> Boot ROM &rarr; Low-Level Bootloader (LLB) &rarr; iBoot &rarr; iOS Kernel (Q134).<br>
        ⚠️ <strong>Trap 5 (Class A vs Class C):</strong> Class A keys are wiped from RAM immediately upon lock; Class C keys remain resident in RAM after the first unlock (Q135, Q136).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 14: iOS Architecture &amp; Security Foundations?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q131–Q140).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="13" onclick="window.openMCQForSpread(13)">
        Practice Topic 14 Quiz (Q131–Q140) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 15: IOS FILE SYSTEM ARCHITECTURE & APP CONTAINERS (Spreads 28 & 29, Pages 57–60, Q141–Q150)
  // =========================================================================
  // Spread 28: Part 1 - APFS Architecture, Inodes & Partition Schemes (Pages 57–58)
  {
    spreadId: 28,
    left: {
      pageNumber: 57,
      runningHead: 'CH. 15 • IOS FILE SYSTEM: APFS ARCHITECTURE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 15 • Topic 15: iOS File System (Part 1)</span>
      <h2>Apple File System (APFS) Architecture & Timestamps</h2>
    </div>

    <div class="intro-abstract">
      <p>Introduced in iOS 10.3 to replace the legacy Hierarchical File System Plus (HFS+), the <strong>Apple File System (APFS)</strong> is an advanced 64-bit file system optimized specifically for solid-state flash memory. APFS introduces copy-on-write cloning, nanosecond timestamp precision, and container space sharing.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Evolution from HFS+ to APFS (Q141)</span>
      <p>The transition from legacy HFS+ to APFS revolutionized mobile file system forensics:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Architectural Feature</th>
            <th>Legacy HFS+ (iOS &lt; 10.3)</th>
            <th>Modern APFS (iOS 10.3+ / macOS)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Inode Address Space</strong></td>
            <td>32-bit (Limited addressable files)</td>
            <td><strong>64-bit Inodes:</strong> Supports up to 9 quintillion files per volume.</td>
          </tr>
          <tr>
            <td><strong>Timestamp Precision (Q142)</strong></td>
            <td>1-second granularity</td>
            <td><strong>Nanosecond Precision:</strong> Microsecond/nanosecond resolution (10<sup>-9</sup> sec) for precise timeline ordering.</td>
          </tr>
          <tr>
            <td><strong>Cloning & Snapshots (Q149)</strong></td>
            <td>Not supported</td>
            <td><strong>Copy-on-Write:</strong> Instantaneous file cloning and read-only point-in-time volume snapshots.</td>
          </tr>
          <tr>
            <td><strong>Encryption Architecture</strong></td>
            <td>Emulated block encryption</td>
            <td><strong>Multi-Key Native Encryption:</strong> Per-file multi-key encryption tied to Data Protection classes.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. Nanosecond Timestamps in Forensic Analysis (Q142)</span>
      <p>In HFS+, two events occurring within the same second had identical timestamps. In APFS, every file creation (<code>btime</code>), modification (<code>mtime</code>), access (<code>atime</code>), and inode change (<code>ctime</code>) is recorded with nanosecond resolution. Forensic timeline reconstruction can determine the exact microsecond sub-sequence in which a suspect took a photo, opened WhatsApp, and sent a message.</p>
    </div>
      `
    },
    right: {
      pageNumber: 58,
      runningHead: 'CH. 15 • IOS PARTITIONS: SYSTEM VS DATA',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 15 (Part 1 Continued) • iOS Partition Scheme</span>
      <h2>iOS Dual-Partition Layout: System vs Data Partitions</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. iOS Partition Scheme: System (/) vs Data (/private/var) (Q143)</span>
      <p>Apple divides non-volatile flash storage into two primary APFS partitions within a shared storage container pool:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">System Partition (rootfs /) (Q143)</span>
            <span class="statute-tag">Mounted Read-Only</span>
          </div>
          <p>• <strong>Mount Point:</strong> <code>/</code>.<br>
          • <strong>Contents:</strong> The base iOS operating system, system daemons, core frameworks, and stock Apple applications.<br>
          • <strong>Integrity:</strong> Mounted strictly read-only. In iOS 14+, sealed by <strong>Signed System Volume (SSV)</strong> with cryptographic Merkle tree hashes verified during boot.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Data Partition (/private/var) (Q143)</span>
            <span class="statute-tag">Mounted Read-Write</span>
          </div>
          <p>• <strong>Mount Point:</strong> <code>/private/var</code>.<br>
          • <strong>Contents:</strong> <strong>100% of user-generated digital evidence:</strong> third-party applications, WhatsApp databases, camera photos, Keychain records, and diagnostic logs.<br>
          • <strong>Forensic Scope:</strong> The sole target of forensic extractions.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. APFS Sealed System Volume (SSV)</span>
      <p>Starting in iOS 15 / macOS Big Sur, the operating system boots not from the live disk partition, but from an immutable, cryptographically sealed <strong>APFS Snapshot</strong>. Any byte modification to system files causes the bootloader to reject the snapshot, preventing persistent rootkits.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 15 (Part 1/2) Complete.</strong> Turn page for App Sandbox Containers, Plists &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="14" onclick="window.openMCQForSpread(14)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q141–Q150) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 29: Part 2 - iOS App Sandbox Containers, Shared App Groups & Property Lists (Pages 59–60)
  {
    spreadId: 29,
    left: {
      pageNumber: 59,
      runningHead: 'CH. 15 • IOS APP SANDBOX CONTAINERS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 15 • Topic 15: iOS File System (Part 2)</span>
      <h2>Application Sandbox Containers & Shared App Groups</h2>
    </div>

    <div class="intro-abstract">
      <p>Apple separates application executable binaries from application data. In iOS forensics, applications and their persistent databases are organized into container directories identified by randomized 128-bit GUIDs.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. iOS Application Container Layout (Q144)</span>
      <p>Unlike Android where an app's code and data live together in <code>/data/data/</code>, iOS strictly separates them into two distinct directory trees:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Bundle Container (Q144)</span>
            <span class="statute-tag">Path: /private/var/containers/Bundle/Application/[UUID]/</span>
          </div>
          <p>• Contains the static, read-only application bundle (e.g. <code>WhatsApp.app</code>).<br>
          • Holds compiled Mach-O executable code, assets, localization strings, and the master <code>Info.plist</code> configuration file.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Data Container (Q144)</span>
            <span class="statute-tag">Path: /private/var/containers/Data/Application/[UUID]/</span>
          </div>
          <p>• Contains all active user data, chat databases, and settings.<br>
          • Sub-directories: <code>Documents/</code>, <code>Library/</code>, and <code>tmp/</code>.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Internal Structure of the Data Container (Q145–Q147)</span>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Sub-Directory</th>
            <th>Primary Content & Role</th>
            <th>Backup & Forensic Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Documents/ (Q145)</strong></td>
            <td>User-generated documents, downloaded media, active SQLite databases.</td>
            <td><strong>Backed up by default</strong> in iTunes and iCloud logical backups. Primary forensic target!</td>
          </tr>
          <tr>
            <td><strong>Library/Preferences/ (Q146)</strong></td>
            <td>App configuration settings stored in binary Property Lists (<code>[BundleID].plist</code>).</td>
            <td>Backed up in iTunes backups. Contains user account settings and toggles.</td>
          </tr>
          <tr>
            <td><strong>Library/Caches/ (Q146)</strong></td>
            <td>Cached web assets, image previews, temporary database files.</td>
            <td><strong>Excluded from backups.</strong> Extracted only via full file system acquisition!</td>
          </tr>
          <tr>
            <td><strong>tmp/ (Q147)</strong></td>
            <td>Transient scratch files generated during active app execution.</td>
            <td>Purged by OS during memory pressure; may contain uncommitted evidence.</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 60,
      runningHead: 'CH. 15 • SHARED APP GROUPS & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 15 (Part 2 Continued) • Shared Groups & Property Lists</span>
      <h2>Shared App Groups, Property Lists & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Shared App Groups Containers (Q148)</span>
      <p>When multiple apps or app extensions from the same developer need to share databases (e.g. WhatsApp and its background Notification Service Extension), data cannot live inside a single app container:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Path: /private/var/mobile/Containers/Shared/AppGroup/[UUID]/ (Q148)</span>
          <span class="statute-tag">Shared Database Storage</span>
        </div>
        <p>• Used by modern messaging apps to maintain shared access across widget and background services.<br>
        • <strong>Forensic Note:</strong> On modern iOS, WhatsApp stores its central chat database <code>ChatStorage.sqlite</code> inside the Shared App Group container, NOT the main Data container!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Property Lists (.plist) in iOS Forensics (Q150)</span>
      <p>Apple systems utilize <strong>Property Lists (<code>.plist</code>)</strong> for configuration and state storage. While simple plists are human-readable XML, iOS compiles most files into <strong>Binary Plist format (magic header: <code>bplist00</code>)</strong> for performance. Forensic tools parse binary plists to extract account details and device metadata.</p>
    </div>

    <div class="section-block">
      <span class="section-label">5. DSSSB Exam Traps: iOS File System Architecture (Q141–Q150)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (File System Standard):</strong> Modern Apple devices use <strong>Apple File System (APFS)</strong> with nanosecond timestamps, replacing legacy HFS+ (Q141, Q142).<br>
        ⚠️ <strong>Trap 2 (Partition Roles):</strong> The System partition (<code>/</code>) is read-only; user evidence lives in the Data partition (<code>/private/var</code>) (Q143).<br>
        ⚠️ <strong>Trap 3 (Container Separation):</strong> App code lives in the Bundle container; user data lives in the Data container under randomized UUIDs (Q144).<br>
        ⚠️ <strong>Trap 4 (Library/Caches in Backups):</strong> <code>Library/Caches/</code> is NOT included in standard iTunes backups; it requires full file system extraction (Q146).<br>
        ⚠️ <strong>Trap 5 (Shared App Groups):</strong> Shared messaging databases (like WhatsApp's <code>ChatStorage.sqlite</code>) reside in <code>/private/var/mobile/Containers/Shared/AppGroup/[UUID]/</code> (Q148).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 15: iOS File System Architecture?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q141–Q150).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="14" onclick="window.openMCQForSpread(14)">
        Practice Topic 15 Quiz (Q141–Q150) &rarr;
      </button>
    </div>
      `
    }
  }
];

