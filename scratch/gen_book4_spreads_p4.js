// Book 4 Spreads Part 4: Topics 16–20 (Spreads 30–39, Pages 61–80)
// High-yield DSSSB Cyber Forensic notes: Mobile Forensics & Telecom Analysis

module.exports = [
  // =========================================================================
  // TOPIC 16: IOS APP PERMISSIONS & LOGGING IN IOS (Spreads 30 & 31, Pages 61–64, Q151–Q160)
  // =========================================================================
  // Spread 30: Part 1 - Info.plist Declarations & Unified Logging System (Pages 61–62)
  {
    spreadId: 30,
    left: {
      pageNumber: 61,
      runningHead: 'CH. 16 • IOS PRIVACY & UNIFIED LOGGING',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 16 • Topic 16: iOS Permissions & Logging (Part 1)</span>
      <h2>iOS App Permissions & The Unified Logging System</h2>
    </div>

    <div class="intro-abstract">
      <p>Apple enforces a rigorous, multi-tiered user consent architecture to protect consumer privacy. Simultaneously, modern iOS incorporates a centralized, high-performance binary logging system (Apple Unified Logging) that records continuous system telemetry, application lifecycle events, and network transactions.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Purpose Strings in Info.plist (Q151)</span>
      <p>In iOS application design, accessing sensitive hardware or private user data requires explicit pre-declaration in the app bundle's <code>Info.plist</code> file:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Usage Description Keys (Q151)</span>
          <span class="statute-tag">Mandatory Declarations</span>
        </div>
        <p>• <code>NSCameraUsageDescription</code>: Explains why the app requires camera access.<br>
        • <code>NSLocationWhenInUseUsageDescription</code>: Justification for accessing GPS coordinates.<br>
        • <code>NSMicrophoneUsageDescription</code>: Justification for audio recording.<br>
        • <strong>Strict System Enforcement:</strong> If an app requests camera or microphone access without these purpose strings declared, iOS immediately terminates the app process with an exception. Forensic examiners inspect <code>Info.plist</code> to analyze an app's intended capabilities.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Apple Unified Logging System: tracev3 Architecture (Q154)</span>
      <p>Introduced in iOS 10 and macOS Sierra, the <strong>Apple Unified Logging System (<code>os_log</code>)</strong> replaced traditional text-based syslog files:</p>
      <div class="statutory-grid">
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Memory-to-Disk tracev3 Pipeline (Q154)</span>
            <span class="statute-tag">Compressed Binary Logs</span>
          </div>
          <p>• High-throughput system events are logged directly into memory buffers.<br>
          • Flushed periodically to disk as compressed binary files with the <strong><code>.tracev3</code></strong> extension under <code>/private/var/db/diagnostics/</code>.<br>
          • String tokenization: Log format strings are stripped and referenced via UUID string tables stored in <code>/private/var/db/uuidtext/</code>.</p>
        </div>
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">Log Extraction: log collect (Q155)</span>
            <span class="statute-tag">Forensic CLI</span>
          </div>
          <p>On macOS or jailbroken devices, examiners execute:<br>
          <code>log collect --output export.logarchive</code>.<br>
          This compiles <code>.tracev3</code> files and UUID lookup tables into a unified <code>.logarchive</code> bundle parseable via Apple Console.</p>
        </div>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 62,
      runningHead: 'CH. 16 • SYSDIAGNOSE & CRASH LOGS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 16 (Part 1 Continued) • Diagnostics & Telemetry</span>
      <h2>Sysdiagnose Snapshots & Application Crash Reports</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Power of Apple Sysdiagnose (Q156)</span>
      <p>A <strong>sysdiagnose</strong> is an exhaustive diagnostic snapshot of the entire operating system state. It can be triggered on an active iPhone without commercial forensic hardware:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Hardware Button Combination (Q156)</span>
          <span class="statute-tag">Diagnostic Trigger</span>
        </div>
        <p>• <strong>Key Chording:</strong> Simultaneously press and hold <strong>Volume Up + Volume Down + Side/Power Button</strong> for 1 to 1.5 seconds until a short physical haptic vibration is felt.<br>
        • <strong>Output Location:</strong> Generates a multi-gigabyte tarball under <code>/private/var/mobile/Library/Logs/CrashReporter/DiagnosticLogs/sysdiagnose/</code>.<br>
        • <strong>Evidentiary Contents:</strong> Process memory maps, Wi-Fi scan logs, cellular baseband telemetry, active network connections, and system power states.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. iOS Crash Reports: .ips Files (Q157)</span>
      <p>When an iOS app or system daemon crashes, the OS generates an <strong>Incident Post-mortem Snapshot (<code>.ips</code>)</strong> file:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Crash Log Section</th>
            <th>Evidentiary Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Header Metadata</strong></td>
            <td>Process Name, Bundle ID, OS Build, Hardware Model, Crash Timestamp.</td>
          </tr>
          <tr>
            <td><strong>Exception Codes</strong></td>
            <td><code>EXC_BAD_ACCESS</code> (memory corruption), <code>0xbaadfaa1</code> (watchdog timeout), <code>0xdeadfa11</code> (user force quit).</td>
          </tr>
          <tr>
            <td><strong>Thread Backtraces</strong></td>
            <td>CPU instruction pointer, register contents, and loaded dynamic libraries (dylibs).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 16 (Part 1/2) Complete.</strong> Turn page for Powerlog, knowledgeC &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="15" onclick="window.openMCQForSpread(15)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q151–Q160) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 31: Part 2 - Powerlog Analytics, knowledgeC Database & Exam Traps (Pages 63–64)
  {
    spreadId: 31,
    left: {
      pageNumber: 63,
      runningHead: 'CH. 16 • POWERLOG & KNOWLEDGEC FORENSICS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 16 • Topic 16: iOS Permissions & Logging (Part 2)</span>
      <h2>Powerlog Analytics & CoreDuet Behavioral Tracking</h2>
    </div>

    <div class="intro-abstract">
      <p>Among the most potent evidentiary sources on iOS are internal behavioral tracking and power telemetry databases. These databases provide minute-by-minute historical records of device usage, physical orientation, and application focus.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Powerlog Database: CurrentPowerlog.PLSQL (Q158)</span>
      <p>Located in <code>/private/var/mobile/Library/BatteryLife/</code>, <strong>CurrentPowerlog.PLSQL</strong> is an extraordinary forensic goldmine:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">Power & Usage Telemetry (Q158)</span>
            <span class="statute-tag">SQLite Artifact</span>
          </div>
          <p>• <strong>Screen State:</strong> Exact timestamps when the display turned ON, turned OFF, or changed brightness.<br>
          • <strong>Foreground App Duration:</strong> Tracks which app was displayed on screen and for how many seconds.<br>
          • <strong>Hardware State:</strong> Records Wi-Fi scans, cellular data usage per app, camera usage intervals, and battery charging events.<br>
          • <strong>Alibi Verification:</strong> Conclusively proves whether a suspect was actively using their phone at the time of an incident.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">CoreDuet: knowledgeC.db (Q159)</span>
            <span class="statute-tag">Path: Library/CoreDuet/</span>
          </div>
          <p>• Maintained by Apple's CoreDuet framework to predict user habits.<br>
          • Contains the <code>ZOBJECT</code> table tracking timestamped events: app in focus, device lock/unlock status, Do Not Disturb toggles, and Bluetooth audio attachments.<br>
          • <strong>Orientation Telemetry:</strong> Records whether the device was held in Portrait or Landscape mode!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Wi-Fi Association Logs: com.apple.wifi.plist (Q160)</span>
      <p>Historical Wi-Fi associations are preserved in <code>/private/var/preferences/SystemConfiguration/com.apple.wifi.plist</code> (or <code>com.apple.wifi-networks.plist</code>), detailing SSID names, BSSID MAC addresses, security standards, and last connection timestamps.</p>
    </div>
      `
    },
    right: {
      pageNumber: 64,
      runningHead: 'CH. 16 • IOS LOGGING EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 16 (Part 2 Continued) • Forensic Traps & Best Practices</span>
      <h2>iOS Logging & Telemetry Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Correlating Multi-Source iOS Logs</span>
      <p>When compiling digital forensic reports for courtroom presentation, examiners establish unbreakable timelines by cross-correlating three independent iOS datastores:</p>
      <div class="statute-card card-purple">
        <p>1. <strong>TCC.db:</strong> Confirms the application possessed permission to access the resource (e.g., Camera granted).<br>
        2. <strong>knowledgeC.db:</strong> Establishes that the user actively brought the application into foreground focus at that exact second.<br>
        3. <strong>CurrentPowerlog.PLSQL:</strong> Corroborates that the camera sensor drew battery power and the display was active.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: iOS Permissions & Logging (Q151–Q160)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Purpose Strings):</strong> Hardware justification strings (like <code>NSCameraUsageDescription</code>) must be declared in <strong>Info.plist</strong> (Q151).<br>
        ⚠️ <strong>Trap 2 (Unified Logging Format):</strong> Unified logs are stored as compressed binary files with the <strong>.tracev3</strong> extension (Q154).<br>
        ⚠️ <strong>Trap 3 (Sysdiagnose Buttons):</strong> Sysdiagnose is triggered by holding <strong>Volume Up + Volume Down + Power</strong> for 1–1.5 seconds (Q156).<br>
        ⚠️ <strong>Trap 4 (Powerlog Database):</strong> The database logging screen on/off and foreground app usage seconds is <strong>CurrentPowerlog.PLSQL</strong> (Q158).<br>
        ⚠️ <strong>Trap 5 (knowledgeC.db):</strong> CoreDuet behavioral user habit tracking resides in <strong>knowledgeC.db</strong> (Q159).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 16: iOS App Permissions &amp; Logging?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q151–Q160).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="15" onclick="window.openMCQForSpread(15)">
        Practice Topic 16 Quiz (Q151–Q160) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 17: TOOLS & TECHNOLOGIES FOR IOS FORENSICS (Spreads 32 & 33, Pages 65–68, Q161–Q170)
  // =========================================================================
  // Spread 32: Part 1 - libimobiledevice & iTunes Backup Forensics (Pages 65–66)
  {
    spreadId: 32,
    left: {
      pageNumber: 65,
      runningHead: 'CH. 17 • IOS TOOLS: LIBIMOBILEDEVICE & BACKUPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 17 • Topic 17: iOS Forensic Tools (Part 1)</span>
      <h2>Open-Source Tooling: libimobiledevice & iTunes Backups</h2>
    </div>

    <div class="intro-abstract">
      <p>Extracting evidentiary data from iOS devices requires specialized toolsets ranging from open-source communication libraries to multi-thousand-dollar hardware exploitation appliances. Forensic investigators must master logical backup extraction, backup decryption, and manifest indexing.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The libimobiledevice Forensic Suite (Q161, Q162)</span>
      <p><strong>libimobiledevice</strong> is a cross-platform software library that implements Apple's proprietary protocols over USB without requiring iTunes:</p>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Utility</th>
            <th>Primary Forensic Capability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>ideviceinfo</code> (Q161)</td>
            <td>Dumps hardware metadata: serial number, UDID, IMEI, Wi-Fi MAC, iOS build version, and baseband chip ID.</td>
          </tr>
          <tr>
            <td><code>idevicebackup2 backup --full [path]</code> (Q162)</td>
            <td>Initiates a full logical mobile backup of an unlocked/paired iOS device via the <code>com.apple.mobilebackup2</code> service.</td>
          </tr>
          <tr>
            <td><code>idevicecrashreport -k -f [path]</code></td>
            <td>Pulls all crash reports (<code>.ips</code>) and diagnostic archives from the device and saves them locally.</td>
          </tr>
          <tr>
            <td><code>idevicesyslog</code></td>
            <td>Streams live system console log output in real time over USB.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. Encrypted vs Unencrypted iTunes Backups (Q163)</span>
      <p>When performing a logical backup, an examiner can choose between unencrypted and encrypted backups:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Why Forensic Examiners Mandate Encrypted Backups (Q163)</span>
          <span class="statute-tag">Evidence Completeness</span>
        </div>
        <p>• <strong>Unencrypted Backups:</strong> Apple intentionally excludes sensitive data! Unencrypted backups <em>omit Health data, saved Wi-Fi passwords, Apple HomeKit data, and Keychain records</em>.<br>
        • <strong>Encrypted Backups (Temporary Password):</strong> By setting a temporary backup password (e.g., <code>1234</code>) during extraction, iOS includes <strong>Apple HealthKit databases, Wi-Fi networks, and Keychain records</strong>! Examiners decrypt the backup offline using the known temporary password.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 66,
      runningHead: 'CH. 17 • ITUNES BACKUP MANIFEST.DB FORENSICS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 17 (Part 1 Continued) • Backup Manifest Structure</span>
      <h2>Anatomy of an iOS Backup: Manifest.db & SHA-1 Hashes</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Structure of an iOS iTunes Backup (Q164)</span>
      <p>When an iOS device is backed up, files are not saved with their original filenames or directory hierarchies. Instead, Apple flattens the file tree into subfolders named after the first two hex characters of the file's SHA-1 hash:</p>
      
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">The Role of Manifest.db (Q164)</span>
          <span class="statute-tag">Master SQLite Index</span>
        </div>
        <p>• <strong>Filename Formula:</strong> <code>fileID = SHA-1(domain + "-" + relativePath)</code>.<br>
        • <strong>Manifest.db:</strong> An SQLite database in the root of the backup folder. It contains the <code>Files</code> table which maps every 40-character SHA-1 hashed filename back to its original domain (e.g. <code>AppDomain-com.whatsapp</code>), relative path (<code>Documents/ChatStorage.sqlite</code>), file size, and file flags.<br>
        • <strong>Manifest.plist:</strong> Property list storing backup encryption state, date, and passcode derivation salt.<br>
        • <strong>Info.plist:</strong> Stores device metadata (phone name, serial number, phone number, IMEI, ICCID).</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Parsing Flattened Backup Files</span>
      <p>Forensic tools query <code>Manifest.db</code> using SQL queries to reconstruct the original directory tree:<br>
      <code>SELECT fileID, domain, relativePath FROM Files WHERE relativePath LIKE '%.sqlite';</code><br>
      This instantly identifies WhatsApp, SMS, and Safari databases for targeted carving.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 17 (Part 1/2) Complete.</strong> Turn page for GrayKey, Cellebrite Premium, Keychain &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="16" onclick="window.openMCQForSpread(16)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q161–Q170) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 33: Part 2 - Commercial Appliances: GrayKey, Cellebrite Premium & Keychain Extraction (Pages 67–68)
  {
    spreadId: 33,
    left: {
      pageNumber: 67,
      runningHead: 'CH. 17 • COMMERCIAL APPLIANCES & KEYCHAIN',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 17 • Topic 17: iOS Forensic Tools (Part 2)</span>
      <h2>Advanced Exploitation: GrayKey & Keychain Decryption</h2>
    </div>

    <div class="intro-abstract">
      <p>When investigating passcode-locked iPhones, standard commercial software tools fail. Law enforcement agencies deploy specialized hardware appliances and proprietary exploit chains to bypass rate-limits, brute-force passcodes, and extract hardware-encrypted keychains.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. GrayKey (Grayshift / Magnet Forensics) (Q165)</span>
      <p>GrayKey is a dedicated hardware appliance engineered specifically for law enforcement:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Hardware Appliance Capabilities (Q165)</span>
          <span class="statute-tag">Passcode Brute-Forcing</span>
        </div>
        <p>• Connects to target iPhones via dual Lightning or USB-C cables.<br>
        • <strong>Proprietary Exploit Injection:</strong> Deploys low-level kernel and bootloader exploits to disable Secure Enclave passcode attempt counters and exponential delay timers.<br>
        • <strong>Automated Passcode Cracking:</strong> Brute-forces 4-to-6 digit numeric passcodes in minutes to days.<br>
        • <strong>Full File System Extraction:</strong> Once cracked, performs a full bitstream dump of <code>/private/var</code> and decodes the complete iOS Keychain.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Cellebrite Premium & Elcomsoft EIFT (Q166, Q167)</span>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Advanced Tool</th>
            <th>Acquisition Mechanism & Forensic Capabilities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Cellebrite Premium (Q166)</strong></td>
            <td>On-premise advanced hardware/cloud service delivering passcode unlocking, full file system extractions, and physical memory dumps on locked high-end iOS and Android devices.</td>
          </tr>
          <tr>
            <td><strong>Elcomsoft iOS Forensic Toolkit (EIFT) (Q167)</strong></td>
            <td>Dual capability: (1) <strong>Forensic Agent:</strong> Installs a temporary unsigned extraction app via developer signing to dump file system/keychain without jailbreak. (2) <strong>checkm8 Hardware Exploit:</strong> Exploits BootROM on A5–A11 devices.</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 68,
      runningHead: 'CH. 17 • KEYCHAIN EXTRACTION & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 17 (Part 2 Continued) • Keychain Decryption & Traps</span>
      <h2>Decrypted iOS Keychain (keychain-2.db) & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. iOS Keychain Architecture: keychain-2.db (Q169)</span>
      <p>The iOS Keychain is a secure SQLite database residing at <code>/private/var/Keychains/keychain-2.db</code>:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Keychain Storage Classes (Q169)</span>
          <span class="statute-tag">Encrypted Credential Store</span>
        </div>
        <p>• <code>genp</code> (Generic Passwords): App passwords, banking logins, OAuth tokens.<br>
        • <code>inet</code> (Internet Passwords): Safari website credentials, proxy logins.<br>
        • <code>cert</code> & <code>keys</code>: Cryptographic certificates and private keys.<br>
        • <strong>Security:</strong> Every item is encrypted with a key derived from hardware UID and passcode. Extracting the raw <code>keychain-2.db</code> file is useless without decrypting it using the live device's Secure Enclave keys!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: iOS Forensic Tools (Q161–Q170)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Backup Command):</strong> In libimobiledevice, full logical backups are initiated with <code>idevicebackup2 backup --full [path]</code> (Q162).<br>
        ⚠️ <strong>Trap 2 (Encrypted Backup Superiority):</strong> Encrypted iTunes backups capture Health, HomeKit, and Keychain data that are omitted from unencrypted backups (Q163).<br>
        ⚠️ <strong>Trap 3 (Manifest.db Index):</strong> iOS backup files are mapped from SHA-1 hashes to original paths via <strong>Manifest.db</strong> (Q164).<br>
        ⚠️ <strong>Trap 4 (GrayKey Role):</strong> GrayKey is a hardware appliance designed to bypass rate-limits and brute-force passcodes on locked iPhones (Q165).<br>
        ⚠️ <strong>Trap 5 (Keychain Path):</strong> The physical iOS Keychain SQLite database is <strong>/private/var/Keychains/keychain-2.db</strong> (Q169).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 17: Tools &amp; Technologies for iOS Forensics?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q161–Q170).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="16" onclick="window.openMCQForSpread(16)">
        Practice Topic 17 Quiz (Q161–Q170) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 18: CHALLENGES & LIMITATIONS OF IOS FORENSICS (Spreads 34 & 35, Pages 69–72, Q171–Q180)
  // =========================================================================
  // Spread 34: Part 1 - BFU vs AFU States & Secure Enclave Throttling (Pages 69–70)
  {
    spreadId: 34,
    left: {
      pageNumber: 69,
      runningHead: 'CH. 18 • IOS CHALLENGES: BFU VS AFU STATES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 18 • Topic 18: iOS Challenges (Part 1)</span>
      <h2>Forensic Dilemma: BFU vs AFU Operational States</h2>
    </div>

    <div class="intro-abstract">
      <p>The forensic posture of an seized iPhone is fundamentally determined by its operational cryptographic state at the moment of custody. Understanding the critical differences between Before First Unlock (BFU) and After First Unlock (AFU) defines what evidence can legally and technically be recovered.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Deep Dive: BFU vs AFU Cryptographic Boundaries (Q171)</span>
      <p>Why is acquiring evidence from a BFU iPhone a virtual dead end for digital forensic examiners?</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">Before First Unlock (BFU) (Q171)</span>
            <span class="statute-tag">Cold Cryptographic Lock</span>
          </div>
          <p>• The device has rebooted or powered on, but the passcode has NOT been entered.<br>
          • <strong>RAM State:</strong> Class A, Class B, and Class C master keys do NOT exist in memory. The Secure Enclave has never unlocked them.<br>
          • <strong>Accessible Data:</strong> Highly limited. Only Class D files (system wallpapers, cellular registration daemons). All user messages, photos, and databases remain encrypted ciphertext.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">After First Unlock (AFU) (Q171)</span>
            <span class="statute-tag">Warm Cryptographic State</span>
          </div>
          <p>• The user unlocked the screen with their passcode at least once after booting, and the screen subsequently locked.<br>
          • <strong>RAM State:</strong> Class C keys (which protect almost all third-party apps) remain resident in RAM.<br>
          • <strong>Accessible Data:</strong> Advanced extraction tools (Cellebrite Premium, GrayKey) can extract significant communication history and app databases.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Secure Enclave Rate-Limiting & Exponential Backoff (Q172)</span>
      <p>Apple's Secure Enclave does not allow rapid automated software PIN cracking:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Enforced Hardware Delay Progression (Q172)</span>
          <span class="statute-tag">Hardware Throttling</span>
        </div>
        <p>• <strong>Attempts 1–4:</strong> Zero delay.<br>
        • <strong>Attempt 5:</strong> 1-minute timeout.<br>
        • <strong>Attempt 6:</strong> 5-minute timeout.<br>
        • <strong>Attempts 7–8:</strong> 15-minute timeout.<br>
        • <strong>Attempt 9+:</strong> 60-minute timeout per attempt.<br>
        <em>Without an unpatchable BootROM vulnerability (checkm8) or SEP bypass exploit, brute-forcing a complex 6-digit PIN would take over 80 years!</em></p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 70,
      runningHead: 'CH. 18 • USB RESTRICTIONS & 10-ATTEMPT WIPE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 18 (Part 1 Continued) • Anti-Forensic Safeguards</span>
      <h2>Anti-Forensic Controls: USB Restrictions & 10-Attempt Erase</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The 10-Attempt Device Erase Risk (Q173)</span>
      <p>In iOS Settings &rarr; Face ID & Passcode, users can enable <em>"Erase Data"</em>:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Effaceable Storage Obliteration (Q173, Q176)</span>
          <span class="statute-tag">Instant Data Loss</span>
        </div>
        <p>• Entering 10 consecutive incorrect passcodes commands the Secure Enclave to immediately overwrite the <strong>Effaceable Storage (DKEK)</strong>.<br>
        • The File System Key and Class Keys are permanently destroyed in milliseconds.<br>
        • <strong>Forensic Consequence:</strong> Total, irreversible loss of all user evidence. <em>Examiners must NEVER guess passcodes manually on evidentiary devices!</em></p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. USB Restricted Mode: The 1-Hour Port Shutdown (Q174)</span>
      <p>Introduced in iOS 11.4.1, if an iPhone has been locked for more than <strong>one hour</strong>, the Lightning/USB-C controller completely shuts down data lines. Connecting a forensic PC over USB does nothing—the port only charges the battery. To prevent this lockout, examiners connect active keep-awake dongles during transit.</p>
    </div>

    <div class="section-block">
      <span class="section-label">5. Biometric Lockout: 48-Hour Timeout Rule (Q175)</span>
      <p>Face ID and Touch ID automatically shut down and mandate the full passcode if: (1) The device has not been unlocked in <strong>48 hours</strong>, (2) 5 consecutive biometric match attempts fail, or (3) The phone is rebooted.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 18 (Part 1/2) Complete.</strong> Turn page for Apple Lockdown Mode, iCloud ADP &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="17" onclick="window.openMCQForSpread(17)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q171–Q180) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 35: Part 2 - Apple Lockdown Mode, iCloud ADP & Liquid Damage Triage (Pages 71–72)
  {
    spreadId: 35,
    left: {
      pageNumber: 71,
      runningHead: 'CH. 18 • LOCKDOWN MODE & ICLOUD ENCRYPTION',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 18 • Topic 18: iOS Challenges (Part 2)</span>
      <h2>Extreme Security: Lockdown Mode & iCloud ADP</h2>
    </div>

    <div class="intro-abstract">
      <p>Recent iOS updates introduced extreme defensive configurations designed to protect human rights activists, journalists, and high-profile individuals against nation-state mercenary spyware (NSO Group's Pegasus). These modes present extreme challenges to law enforcement forensics.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Apple Lockdown Mode Forensics (Q177)</span>
      <p>Introduced in iOS 16, <strong>Lockdown Mode</strong> hardens the attack surface by severely limiting OS capabilities:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Lockdown Restrictions (Q177)</span>
          <span class="statute-tag">High-Security Posture</span>
        </div>
        <p>• <strong>Instant USB Port Blocking:</strong> Blocks wired connections to computers and accessories immediately upon device lock (bypassing the 1-hour USB Restricted Mode delay).<br>
        • <strong>Message Hardening:</strong> Blocks most incoming message attachments except basic images; disables link previews.<br>
        • <strong>Web Hardening:</strong> Disables Just-In-Time (JIT) JavaScript compilers and WebGL rendering.<br>
        • <strong>Call Restrictions:</strong> Blocks incoming FaceTime calls from unknown contacts.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. iCloud Advanced Data Protection (ADP) (Q178)</span>
      <p>When a suspect enables <strong>Advanced Data Protection (ADP)</strong> for iCloud, Apple deploys true end-to-end encryption:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">The Warrant Defeat Mechanism (Q178)</span>
          <span class="statute-tag">End-to-End Encryption</span>
        </div>
        <p>• In standard iCloud backup, Apple holds the decryption keys in their data centers, complying with legal court orders.<br>
        • <strong>Under ADP:</strong> The encryption keys exist <em>strictly on the suspect's trusted hardware devices</em>! Apple data centers hold only encrypted blobs. Law enforcement serving search warrants on Apple cannot obtain decrypted backups, photos, notes, or reminders.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 72,
      runningHead: 'CH. 18 • LIQUID DAMAGE TRIAGE & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 18 (Part 2 Continued) • Hardware Triage & Traps</span>
      <h2>Liquid Damage Triage & Topic 18 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Liquid Damaged iPhone Stabilization Protocol (Q180)</span>
      <p>Standard operating procedure for submerged or water-damaged iPhones seized at crime scenes:</p>
      <div class="statute-card card-teal">
        <p>⚠️ <strong>Fatal Error:</strong> Never plug in a charger or attempt to power on a wet iPhone!<br>
        1. <strong>Disassembly:</strong> Remove display assembly and immediately disconnect the battery ribbon.<br>
        2. <strong>Ultrasonic Bath:</strong> Immerse logic board in an ultrasonic cleaner filled with <strong>99%+ pure Isopropyl Alcohol (IPA)</strong> to dissolve water and corrosive salts.<br>
        3. <strong>Microscope Inspection:</strong> Inspect capacitors and filters around PMIC and display rails for short circuits.<br>
        4. <strong>Bench Power:</strong> Power using a regulated DC power supply with current-limiting before connecting to extraction tools.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: iOS Challenges (Q171–Q180)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (AFU State):</strong> In AFU state, Class C keys remain resident in RAM, allowing extraction of third-party apps even when locked (Q171).<br>
        ⚠️ <strong>Trap 2 (10-Attempt Erase):</strong> The 10th failed attempt overwrites <strong>Effaceable Storage (DKEK)</strong>, permanently destroying file system keys (Q173, Q176).<br>
        ⚠️ <strong>Trap 3 (USB Restricted Mode):</strong> Disables USB data lines after <strong>1 hour</strong> of lock (Q174).<br>
        ⚠️ <strong>Trap 4 (Biometric Timeout):</strong> Biometrics lock out after <strong>48 hours</strong> of no unlock (Q175).<br>
        ⚠️ <strong>Trap 5 (iCloud ADP):</strong> Under Apple Advanced Data Protection, Apple cannot decrypt backups in response to search warrants (Q178).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 18: Challenges &amp; Limitations of iOS Forensics?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q171–Q180).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="17" onclick="window.openMCQForSpread(17)">
        Practice Topic 18 Quiz (Q171–Q180) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 19: FORENSIC ANALYSIS OF PAGERS, WEARABLES & SMART GADGETS (Spreads 36 & 37, Pages 73–76, Q181–Q190)
  // =========================================================================
  // Spread 36: Part 1 - Pager Architectures, POCSAG/FLEX & RF Interception (Pages 73–74)
  {
    spreadId: 36,
    left: {
      pageNumber: 73,
      runningHead: 'CH. 19 • PAGERS: ARCHITECTURES & PROTOCOLS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 19 • Topic 19: Pagers & Wearables (Part 1)</span>
      <h2>Radio Paging Forensics: POCSAG & FLEX Protocols</h2>
    </div>

    <div class="intro-abstract">
      <p>Beyond smartphones, mobile forensic investigations frequently involve specialized communication and edge computing gadgets: radio pagers (beepers), smartwatches, fitness trackers, and smart IoT appliances. Understanding legacy radio paging protocols and wearable sync mechanisms is vital for complete evidence recovery.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Radio Paging System Architecture (Q181)</span>
      <p>Pagers are simplex (one-way) or duplex radio receivers operating on dedicated VHF/UHF broadcast frequencies (typically 138–174 MHz or 450–470 MHz). They operate under two primary standards:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">POCSAG Protocol (Q181)</span>
            <span class="statute-tag">British Post Office Standard</span>
          </div>
          <p>• Standardized by the Post Office Code Standardisation Advisory Group.<br>
          • Supports transmission speeds of 512, 1200, and 2400 bps using 2-FSK modulation.<br>
          • Encodes numeric and alphanumeric messages into 32-bit codewords.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Motorola FLEX Protocol (Q181)</span>
            <span class="statute-tag">High-Capacity Protocol</span>
          </div>
          <p>• Advanced synchronous paging protocol supporting speeds up to 6400 bps using 4-FSK modulation.<br>
          • Features enhanced battery-saving sleep cycles and forward error correction (FEC).</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Capcodes & The Fatal Vulnerability: Unencrypted Air Broadcasts (Q182)</span>
      <p>How does a pager know a broadcast message belongs to it, and why are pagers cryptographically fragile?</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Capcodes & Passive RF Sniffing (Q182)</span>
          <span class="statute-tag">Cleartext Radio Vulnerability</span>
        </div>
        <p>• <strong>Capcode:</strong> A unique 7-digit decimal address burned into the pager's EEPROM (e.g., <code>1234567</code>). The pager continuously monitors the radio channel and decodes messages matching its Capcode.<br>
        • <strong>Cleartext Broadcasts:</strong> Paging networks broadcast messages across an entire metropolitan area <em>completely in the clear without encryption</em>! Anyone with an inexpensive <strong>Software-Defined Radio (SDR, e.g., RTL-SDR)</strong> and open-source decoding tools (<code>multimon-ng</code>) can passively intercept and log all pager messages transmitted across a city without leaving any electronic footprint!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 74,
      runningHead: 'CH. 19 • PHYSICAL EXTRACTION OF PAGERS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 19 (Part 1 Continued) • Hardware Pager Analysis</span>
      <h2>Physical Examination & EEPROM Desoldering</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Forensic Hardware Examination of Pagers (Q183)</span>
      <p>Pagers do not possess USB ports or standard mobile operating systems. Digital extraction follows specialized hardware triage:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Hardware Extraction Tiers (Q183)</span>
          <span class="statute-tag">PCB Analysis</span>
        </div>
        <p>1. <strong>Manual Photography:</strong> Photographing all received messages, numeric codes, and timestamps displayed on the LCD screen.<br>
        2. <strong>Serial EEPROM Desoldering:</strong> Pagers store received messages and Capcodes in serial Electrically Erasable Programmable Read-Only Memory (EEPROM) chips (e.g., 8-pin 24Cxx or 93Cxx series). Examiners desolder the chip and dump the binary payload using an external hardware EEPROM programmer.<br>
        3. <strong>UART / Serial Test Points:</strong> Probing transmit/receive (TX/RX) pads on the PCB to capture debug console logs.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Modern Pagers in Covert Operations</span>
      <p>Modern terrorist and criminal organizations historically utilized pagers because pagers are passive radio receivers that transmit zero radio energy back to the network, making them undetectable by cellular triangulation systems.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 19 (Part 1/2) Complete.</strong> Turn page for Smartwatches, Wearables, HealthKit &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="18" onclick="window.openMCQForSpread(18)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q181–Q190) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 37: Part 2 - Smartwatches, Wearables, Health Artefacts & Smart Gadgets (Pages 75–76)
  {
    spreadId: 37,
    left: {
      pageNumber: 75,
      runningHead: 'CH. 19 • WEARABLE FORENSICS: APPLE WATCH & WEAR OS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 19 • Topic 19: Pagers & Wearables (Part 2)</span>
      <h2>Smartwatches, Health Telemetry & IoT Forensics</h2>
    </div>

    <div class="intro-abstract">
      <p>Wearable devices such as the Apple Watch, Wear OS watches, and fitness trackers continuously monitor physiological telemetry and physical movement. In violent crime and murder investigations, biometric health data can establish the exact minute of a victim's physiological demise or an assailant's physical exertion.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Apple Watch (watchOS) Forensic Extraction (Q184, Q185)</span>
      <p>Because modern Apple Watches lack physical external data ports, how do investigators acquire evidentiary data?</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Paired Host iPhone Extraction (Q184)</span>
            <span class="statute-tag">Companion Sync</span>
          </div>
          <p>• Apple Watches continuously synchronize telemetry to the paired host iPhone.<br>
          • Performing an encrypted logical or full file system extraction of the host iPhone yields watch backups, paired device metadata, installed watch apps, and synced biometric data.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">HealthKit: healthdb.sqlite (Q185)</span>
            <span class="statute-tag">Path: Library/Health/</span>
          </div>
          <p>• Stored in <code>healthdb.sqlite</code> and <code>healthdb_secure.sqlite</code>.<br>
          • <strong>Biometric Evidentiary Tags:</strong> Timestamped heart rate samples (BPM), resting heart rate, ECG recordings, step counts, flights climbed, and sleep stages.<br>
          • <strong>Courtroom Impact:</strong> A sudden spike in heart rate to 160 BPM followed by cessation of cardiac activity pinpoints the exact time of violent assault or death.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Wear OS & BLE GATT Sniffing (Q186, Q187)</span>
      <p>Google Wear OS smartwatches run an Android-derived kernel. Examiners enable <strong>ADB over Wi-Fi</strong> in Developer Options to extract databases directly. Furthermore, fitness trackers communicate over <strong>Bluetooth Low Energy (BLE) Generic Attribute Profile (GATT)</strong>, allowing examiners to analyze GATT services and characteristics for live telemetry.</p>
    </div>
      `
    },
    right: {
      pageNumber: 76,
      runningHead: 'CH. 19 • IOT GADGETS, AIRTAGS & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 19 (Part 2 Continued) • Smart Gadgets & Exam Traps</span>
      <h2>Smart Speakers, AirTags & Topic 19 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Smart Home Speakers & Tracking AirTags (Q188, Q190)</span>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Smart Gadget</th>
            <th>Evidentiary Location & Extraction Strategy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Smart Speakers (Amazon Echo / Google Nest) (Q188)</strong></td>
            <td>Thin IoT clients. Audio recordings, voice transcriptions, and smart appliance triggers (e.g. lights activated at 2:00 AM) reside in the <strong>cloud provider account</strong> and companion smartphone apps (Alexa/Google Home), acquired via legal warrant returns.</td>
          </tr>
          <tr>
            <td><strong>Fitness GPS Tracks (Garmin / Polar) (Q189)</strong></td>
            <td>Recorded in standardized binary <strong>FIT (Flexible and Interoperable Data Transfer)</strong> or XML-based <strong>GPX / TCX</strong> files containing precise GPS coordinates and cadence.</td>
          </tr>
          <tr>
            <td><strong>Apple AirTags & Smart Trackers (Q190)</strong></td>
            <td>Broadcast rotating BLE beacons detected by Apple's Find My mesh. Hardware serial number engraved under the battery links to the purchaser's Apple ID via legal subpoena.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Pagers & Wearables (Q181–Q190)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Paging Protocols):</strong> Standard radio paging protocols are <strong>POCSAG</strong> and <strong>FLEX</strong> (Q181).<br>
        ⚠️ <strong>Trap 2 (Capcode & Encryption):</strong> A Capcode is a 7-digit pager address; legacy paging messages are broadcast in <strong>cleartext without encryption</strong> (Q182).<br>
        ⚠️ <strong>Trap 3 (Apple Watch Acquisition):</strong> Modern Apple Watches are acquired primarily through encrypted extraction of the <strong>paired host iPhone</strong> (Q184).<br>
        ⚠️ <strong>Trap 4 (Health Database):</strong> Apple biometric and heart rate telemetry is stored in <strong>healthdb.sqlite</strong> (Q185).<br>
        ⚠️ <strong>Trap 5 (Wear OS Acquisition):</strong> Wear OS smartwatches can be extracted by enabling <strong>ADB debugging over Wi-Fi</strong> (Q186).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 19: Pagers, Wearables &amp; Smart Gadgets?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q181–Q190).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="18" onclick="window.openMCQForSpread(18)">
        Practice Topic 19 Quiz (Q181–Q190) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 20: CDR (CALL DETAILS RECORD) & CELLULAR NETWORK ANALYSIS (Spreads 38 & 39, Pages 77–80, Q191–Q200)
  // =========================================================================
  // Spread 38: Part 1 - CDR Fundamentals, CGI Architecture & Azimuth Sectors (Pages 77–78)
  {
    spreadId: 38,
    left: {
      pageNumber: 77,
      runningHead: 'CH. 20 • CDR ANALYSIS: METADATA & CGI STRUCTURE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 20 • Topic 20: CDR Analysis (Part 1)</span>
      <h2>Call Detail Record (CDR) Fundamentals & CGI Structure</h2>
    </div>

    <div class="intro-abstract">
      <p>Call Detail Record (CDR) analysis is the investigative technique of reconstructing subscriber communications, geographic movements, and social network associations using transactional metadata generated by cellular telecommunication service providers.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. What is a Call Detail Record (CDR)? (Q191)</span>
      <p>A Call Detail Record is an automated billing and operational transaction log created by cellular network switches (Mobile Switching Centers - MSC) whenever a mobile station engages in telephony activity:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Core CDR Attributes (Q191)</span>
          <span class="statute-tag">Metadata Only</span>
        </div>
        <p>• <strong>A-Party (Calling Number) & B-Party (Called Number):</strong> Dialed telephone numbers.<br>
        • <strong>Call Type:</strong> Incoming Voice, Outgoing Voice, SMS In/Out, Data Session.<br>
        • <strong>Call Timestamp & Duration:</strong> Call setup time, ringing time, and duration in seconds.<br>
        • <strong>Hardware & SIM Identifiers:</strong> IMEI of the handset and IMSI of the subscriber SIM.<br>
        • <strong>Cell Site Identifiers:</strong> <strong>First Cell ID</strong> (where call was initiated) and <strong>Last Cell ID</strong> (where call was terminated).<br>
        • <em>Crucial Note: A CDR records METADATA; it does NOT contain voice audio recordings or SMS message text!</em></p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Anatomy of the Cell Global Identity (CGI) (Q192)</span>
      <p>Every cellular antenna transceiver sector worldwide is assigned a globally unique <strong>Cell Global Identity (CGI)</strong>:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">CGI Formula: MCC + MNC + LAC + CI (Q192)</span>
          <span class="statute-tag">Cellular Geography</span>
        </div>
        <p>• <strong>MCC (Mobile Country Code):</strong> 3 digits identifying the country (e.g., <code>404</code> and <code>405</code> for India).<br>
        • <strong>MNC (Mobile Network Code):</strong> 2 or 3 digits identifying the cellular carrier (e.g., Airtel, Reliance Jio, Vodafone Idea).<br>
        • <strong>LAC (Location Area Code):</strong> A 16-bit number identifying a cluster of base stations managed by a single Base Station Controller (BSC).<br>
        • <strong>CI (Cell Identity):</strong> A unique number identifying the specific radio sector antenna on the physical tower.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 78,
      runningHead: 'CH. 20 • TOWER AZIMUTH & BEAMWIDTH COVERAGE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 20 (Part 1 Continued) • Radio Sector Geometry</span>
      <h2>Cell Tower Sectors: Azimuth & Beamwidth Analysis</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Cell Tower Sectorization & Azimuth Angles (Q193)</span>
      <p>Modern cellular base stations do not radiate radio signals in a simple 360-degree circle. Towers are partitioned into directional sectors (typically three sectors: Alpha, Beta, Gamma):</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">Azimuth Angle (Q193)</span>
            <span class="statute-tag">Compass Heading</span>
          </div>
          <p>• The compass orientation (in degrees from 0° to 359° relative to True North) pointing down the center of the antenna's main radio beam.<br>
          • <strong>Standard 3-Sector Setup:</strong><br>
          &nbsp;&nbsp;• Sector 1 (Alpha): Azimuth <strong>0°</strong> (Points North)<br>
          &nbsp;&nbsp;• Sector 2 (Beta): Azimuth <strong>120°</strong> (Points Southeast)<br>
          &nbsp;&nbsp;• Sector 3 (Gamma): Azimuth <strong>240°</strong> (Points Southwest)</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Horizontal Beamwidth</span>
            <span class="statute-tag">Wedge-Shaped Coverage</span>
          </div>
          <p>Directional antennas have a 3dB beamwidth typically around <strong>65° to 120°</strong>. A suspect connecting to a tower with Azimuth 120° was physically located within that southeast wedge, NOT behind the tower in the 300° direction!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Timing Advance (TA) & Radial Distance Bands (Q194)</span>
      <p>In TDMA, GSM, and LTE networks, base stations calculate <strong>Timing Advance (TA)</strong> values to synchronize mobile transmissions. Because radio signals travel at the speed of light (300,000 km/s), each unit of Timing Advance corresponds to a specific distance radius (in GSM, 1 TA step &approx; <strong>550 meters</strong>). Multiplying TA by 550m narrows the suspect's location to a curved arc within the sector beam!</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 20 (Part 1/2) Complete.</strong> Turn page for IPDR, Tower Dumps, 65B Admissibility &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="19" onclick="window.openMCQForSpread(19)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q191–Q200) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 39: Part 2 - IPDR, Tower Dumps, Triangulation & Courtroom Admissibility (Pages 79–80)
  {
    spreadId: 39,
    left: {
      pageNumber: 79,
      runningHead: 'CH. 20 • IPDR, TOWER DUMPS & TRIANGULATION',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 20 • Topic 20: CDR Analysis (Part 2)</span>
      <h2>Internet Protocol Detail Records (IPDR) & Tower Dumps</h2>
    </div>

    <div class="intro-abstract">
      <p>As modern criminal conspiracies shift from voice calls to internet VoIP and social apps, traditional CDRs must be combined with Internet Protocol Detail Records (IPDR) and geographic tower dump correlation.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Internet Protocol Detail Records (IPDR) (Q196)</span>
      <p>While voice CDRs capture telephony, an <strong>IPDR</strong> tracks mobile cellular data and internet browsing sessions:</p>
      <div class="statutory-grid">
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">IPDR Core Parameters (Q196)</span>
            <span class="statute-tag">Data Session Logs</span>
          </div>
          <p>• <strong>Source Private IP & Source Port:</strong> Assigned dynamically to the handset.<br>
          • <strong>Public Translated IP (NAT):</strong> Shared carrier-grade NAT public address.<br>
          • <strong>Destination IP & Destination Port:</strong> The remote server contacted (e.g. WhatsApp, Telegram, banking server).<br>
          • <strong>Bytes Transferred:</strong> Uploaded and downloaded data volume per session.</p>
        </div>
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">Tower Dumps in Investigations (Q195)</span>
            <span class="statute-tag">Crime Scene Correlation</span>
          </div>
          <p>A <strong>Tower Dump</strong> lists all cellular activity (every phone number, IMEI, IMSI) recorded on a specific cell tower sector during a targeted time window. Cross-referencing tower dumps from two different crime scenes reveals common suspects!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Cellular Triangulation vs Single-Tower Sector (Q199)</span>
      <p>Single-tower CDR records place a handset only within a broad sector wedge. True <strong>triangulation (multilateration)</strong> requires simultaneous signal measurements (Time Difference of Arrival - TDOA) from at least <strong>three distinct base stations</strong>.</p>
    </div>
      `
    },
    right: {
      pageNumber: 80,
      runningHead: 'CH. 20 • SECTION 65B CERTIFICATION & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 20 (Part 2 Continued) • Legal Admissibility & Exam Traps</span>
      <h2>Legal Admissibility in India: Section 65B / BSA Sec 63</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Evidentiary Admissibility: Section 65B Certificate (Q200)</span>
      <p>In Indian jurisprudence, CDR evidence is electronic record evidence governed strictly by statutory certification mandates:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Section 65B (IEA 1872) / Section 63 (BSA 2024) (Q200)</span>
          <span class="statute-tag">Mandatory Certificate</span>
        </div>
        <p>• Under the Supreme Court landmark ruling in <em>Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020)</em>, secondary electronic evidence like CDR printouts is <strong>strictly inadmissible without a valid Section 65B Certificate</strong>!<br>
        • The certificate must be signed by the telecom provider's authorized Nodal Officer certifying the unbroken integrity and automated generation of the computer logs.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: CDR & Cellular Analysis (Q191–Q200)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (CDR Contents):</strong> CDRs record call metadata (IMEI, IMSI, Cell ID, duration); they do NOT record voice audio (Q191).<br>
        ⚠️ <strong>Trap 2 (CGI Structure):</strong> Cell Global Identity is composed of <strong>MCC + MNC + LAC + CI</strong> (Q192).<br>
        ⚠️ <strong>Trap 3 (Azimuth Definition):</strong> Azimuth is the compass heading (0°–360° from North) of the antenna's directional beam (Q193).<br>
        ⚠️ <strong>Trap 4 (Timing Advance):</strong> In GSM, each unit of Timing Advance represents approximately <strong>550 meters</strong> of radial distance (Q194).<br>
        ⚠️ <strong>Trap 5 (Section 65B / BSA Sec 63):</strong> CDRs require a mandatory statutory certificate signed by a telecom nodal officer to be admissible in court (Q200).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 20: CDR &amp; Cellular Network Analysis?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q191–Q200).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="19" onclick="window.openMCQForSpread(19)">
        Practice Topic 20 Quiz (Q191–Q200) &rarr;
      </button>
    </div>
      `
    }
  }
];

