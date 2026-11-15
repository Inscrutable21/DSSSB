// Book 4 Spreads Part 2: Topics 6–10 (Spreads 10–19, Pages 21–40)
// High-yield DSSSB Cyber Forensic notes: Mobile Forensics & Telecom Analysis

module.exports = [
  // =========================================================================
  // TOPIC 6: APP PERMISSIONS ARCHITECTURE & ABUSE (Spreads 10 & 11, Pages 21–24, Q51–Q60)
  // =========================================================================
  // Spread 10: Part 1 - Android Sandboxing, Permission Classification & Manifests (Pages 21–22)
  {
    spreadId: 10,
    left: {
      pageNumber: 21,
      runningHead: 'CH. 6 • APP PERMISSIONS: SANDBOXING & MANIFEST',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 6 • Topic 6: App Permissions (Part 1)</span>
      <h2>Mobile Application Sandboxing & Permission Models</h2>
    </div>

    <div class="intro-abstract">
      <p>Mobile operating systems do not rely solely on traditional user-based security boundaries. Both Android and iOS implement rigorous application-level sandboxing governed by fine-grained permission frameworks to restrict access to sensitive hardware interfaces, telephony networks, and private user datastores.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Why App Sandboxing Exists: The Multi-Tenant Architecture (Q51)</span>
      <p>In classical operating systems, any program launched by a user inherits all privileges of that user, meaning a text editor can read personal banking spreadsheets. To prevent rogue software from snooping on sensitive data, mobile systems treat every app as an independent, isolated user:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Android Sandboxing (UID Isolation) (Q51)</span>
            <span class="statute-tag">Linux Discretionary Access</span>
          </div>
          <p>• At installation, the Package Manager assigns each app a unique Linux User ID (e.g., <code>u0_a145</code>).<br>
          • The Linux kernel enforces file permissions: files created in <code>/data/data/com.appname/</code> are owned by that UID with permissions <code>rwx------</code> (mode 700). No other regular app can inspect or execute them.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">iOS Sandboxing (Seatbelt Engine) (Q51)</span>
            <span class="statute-tag">TrustedBSD MAC</span>
          </div>
          <p>• Every iOS app executes inside an isolated container with a randomly generated 128-bit UUID.<br>
          • Apple's kernel sandbox (Seatbelt) enforces Mandatory Access Control (MAC) profiles limiting system calls, network sockets, and directory traversing.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Android Permission Protection Levels (Q52)</span>
      <p>Android categorizes permissions into four distinct protection levels defined in <code>AndroidManifest.xml</code>:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Permission Level</th>
            <th>Granting Mechanism</th>
            <th>Examples & Threat Vector</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Normal (Q52)</strong></td>
            <td>Granted automatically at installation; does not prompt the user.</td>
            <td><code>INTERNET</code>, <code>ACCESS_NETWORK_STATE</code>, <code>SET_WALLPAPER</code>. Low privacy impact.</td>
          </tr>
          <tr>
            <td><strong>Dangerous / Runtime (Q52)</strong></td>
            <td>Requires explicit user consent via runtime dialog pop-up.</td>
            <td><code>READ_CONTACTS</code>, <code>ACCESS_FINE_LOCATION</code>, <code>RECORD_AUDIO</code>, <code>CAMERA</code>, <code>READ_SMS</code>. Direct access to private user data.</td>
          </tr>
          <tr>
            <td><strong>Signature (Q52)</strong></td>
            <td>Granted automatically ONLY if requesting app is signed with the same developer certificate as the app declaring it.</td>
            <td>System vendor services, Google Play Services integrations. Prevents spoofing.</td>
          </tr>
          <tr>
            <td><strong>SignatureOrSystem / Privileged</strong></td>
            <td>Reserved for system image applications pre-installed in <code>/system/priv-app/</code>.</td>
            <td><code>INSTALL_PACKAGES</code>, <code>MASTER_CLEAR</code>, <code>MODIFY_PHONE_STATE</code>. Highest danger.</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 22,
      runningHead: 'CH. 6 • PERMISSION AUDITING & PACKAGES.XML',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 6 (Part 1 Continued) • Manifest & System Auditing</span>
      <h2>Permission Tracking: AndroidManifest.xml & packages.xml</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Forensic Dissection: AndroidManifest.xml vs packages.xml (Q53, Q54)</span>
      <p>When analyzing suspected spyware or malicious stalking apps, examiners inspect two vital configuration files:</p>
      
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Static Declaration: AndroidManifest.xml (Q53)</span>
          <span class="statute-tag">APK Extraction</span>
        </div>
        <p>• Packed inside every APK file in binary XML format (AXML). Decoded using <code>apktool</code> or <code>AXMLPrinter</code>.<br>
        • Contains <code>&lt;uses-permission&gt;</code> tags indicating what the application <em>wishes</em> to access.<br>
        • <strong>Forensic Note:</strong> A declared permission does NOT mean it was granted; it only proves intent.</p>
      </div>

      <div class="statute-card card-teal" style="margin-top: 10px;">
        <div class="statute-header">
          <span class="statute-section">Live Granted State: packages.xml (Q54)</span>
          <span class="statute-tag">System Ground Truth</span>
        </div>
        <p>• Located in <code>/data/system/packages.xml</code> (requires root/physical extraction to read).<br>
        • <strong>Evidentiary Goldmine:</strong> Maintained by the Android Package Manager Service (PMS). It records every installed app's assigned UID, install timestamps, APK path, and specifically lists granted runtime permissions with flags (e.g., <code>granted="true" flags="0"</code>).<br>
        • Proves conclusively in court whether a suspect actively granted camera or microphone access to a surveillance app.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Android Scoped Storage & MANAGE_EXTERNAL_STORAGE (Q55)</span>
      <p>Introduced in Android 10/11, <strong>Scoped Storage</strong> severed legacy unrestricted access to shared external storage (<code>/sdcard</code>). Apps can only read their own package folders unless granted the broad <code>MANAGE_EXTERNAL_STORAGE</code> special app access permission, which is heavily audited by forensic triage tools.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 6 (Part 1/2) Complete.</strong> Turn page for iOS TCC Framework, Spyware Abuse &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="5" onclick="window.openMCQForSpread(5)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q51–Q60) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 11: Part 2 - iOS TCC Framework, Permission Abuse & Malware Analysis (Pages 23–24)
  {
    spreadId: 11,
    left: {
      pageNumber: 23,
      runningHead: 'CH. 6 • IOS TCC FRAMEWORK & TCC.DB FORENSICS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 6 • Topic 6: App Permissions (Part 2)</span>
      <h2>iOS Transparency, Consent & Control (TCC) Framework</h2>
    </div>

    <div class="intro-abstract">
      <p>Apple manages application privacy permissions through its centralized Transparency, Consent, and Control (TCC) subsystem. In iOS forensics, the TCC database represents a chronological audit log of user privacy choices and app access events.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Architecture of iOS TCC & TCC.db (Q56, Q57)</span>
      <p>Whenever an iOS app attempts to access the microphone, camera, contacts, or location, the operating system intercepts the request and verifies the grant in local SQLite databases named <strong>TCC.db</strong>:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">TCC Database Paths (Q56)</span>
            <span class="statute-tag">SQLite Artifacts</span>
          </div>
          <p>• <strong>User Domain:</strong> <code>/private/var/mobile/Library/TCC/TCC.db</code> (Stores user-granted permissions for third-party apps).<br>
          • <strong>System Domain:</strong> <code>/Library/Application Support/com.apple.TCC/TCC.db</code> (Stores system-level daemon permissions).</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">The 'access' Table Schema (Q57)</span>
            <span class="statute-tag">Audit Trail</span>
          </div>
          <p>• <code>service</code>: The permission requested (e.g., <code>kTCCServiceCamera</code>, <code>kTCCServiceMicrophone</code>, <code>kTCCServiceAddressBook</code>).<br>
          • <code>client</code>: The application bundle identifier (e.g., <code>com.whatsapp</code>).<br>
          • <code>auth_value</code>: Authorization state (<code>2</code> = Allowed, <code>0</code> = Denied).<br>
          • <code>last_modified</code>: Unix epoch timestamp indicating exactly when the user modified or granted the permission.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Permission Abuse in Mobile Malware & Stalkerware (Q58)</span>
      <p>Commercial surveillance software (Stalkerware / Pegasus / Chrysaor) abuses mobile permission systems to silently harvest evidentiary data:</p>
      <ul class="forensic-list">
        <li><strong>Accessibility Service Hijacking:</strong> Malicious Android apps prompt the user to enable Accessibility under the guise of an antivirus update. Once granted, the malware intercepts all screen text, logs keystrokes, and automatically grants itself Dangerous permissions without user interaction!</li>
        <li><strong>Notification Listener Abuse:</strong> Intercepts incoming two-factor authentication (2FA) SMS codes and WhatsApp message previews directly from the Android status bar.</li>
        <li><strong>Device Admin Privilege Abuse:</strong> Grants the app authority to lock the screen, wipe the device, and block uninstallation attempts.</li>
      </ul>
    </div>
      `
    },
    right: {
      pageNumber: 24,
      runningHead: 'CH. 6 • PERMISSION ABUSE & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 6 (Part 2 Continued) • Forensic Investigation & Traps</span>
      <h2>Forensic Permission Analysis & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Forensic Investigation Workflow for Permission Auditing (Q59)</span>
      <p>When analyzing a seized device in a cyber-stalking or data-theft incident, investigators follow a four-step triage methodology:</p>
      <div class="statute-card card-amber">
        <p>1. <strong>Extract Application Manifests:</strong> Decompile target APKs or extract <code>Info.plist</code> files from IPA bundles to establish the baseline of requested capabilities.<br>
        2. <strong>Inspect packages.xml (Android):</strong> Parse <code>/data/system/packages.xml</code> to identify anomalous Dangerous permissions granted to background services.<br>
        3. <strong>Parse TCC.db (iOS):</strong> Query the SQLite <code>access</code> table to verify if the victim permitted location tracking and determine the exact timestamp of permission modification.<br>
        4. <strong>Correlate with App Usage Stats:</strong> Match permission grant timestamps against <code>usagestats</code> or iOS <code>knowledgeC.db</code> to establish active background surveillance sessions.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: App Permissions (Q51–Q60)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Sandboxing Basis):</strong> Android sandboxing is enforced at the Linux kernel level by assigning a unique Linux UID to each app (Q51).<br>
        ⚠️ <strong>Trap 2 (Dangerous Permissions):</strong> Permissions like <code>CAMERA</code>, <code>RECORD_AUDIO</code>, and <code>READ_CONTACTS</code> are classified as <strong>Dangerous / Runtime</strong>, requiring explicit user prompt (Q52).<br>
        ⚠️ <strong>Trap 3 (Ground Truth File):</strong> The true record of granted Android permissions is in <code>/data/system/packages.xml</code>, NOT <code>AndroidManifest.xml</code> (which only lists requested permissions) (Q53, Q54).<br>
        ⚠️ <strong>Trap 4 (iOS Permission Engine):</strong> iOS permissions are governed by the <strong>TCC framework</strong> and stored in <code>TCC.db</code> SQLite databases (Q56, Q57).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 6: App Permissions Architecture?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q51–Q60).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="5" onclick="window.openMCQForSpread(5)">
        Practice Topic 6 Quiz (Q51–Q60) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 7: JAIL-BREAKING IOS (Spreads 12 & 13, Pages 25–28, Q61–Q70)
  // =========================================================================
  // Spread 12: Part 1 - Architecture, Privilege Escalation & Taxonomy (Pages 25–26)
  {
    spreadId: 12,
    left: {
      pageNumber: 25,
      runningHead: 'CH. 7 • JAILBREAKING: PRIVILEGE ESCALATION',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 7 • Topic 7: Jail-breaking iOS (Part 1)</span>
      <h2>iOS Jailbreaking Architecture & Privilege Escalation</h2>
    </div>

    <div class="intro-abstract">
      <p>Apple designs iOS as a locked-down, cryptographically verified appliance. <strong>Jailbreaking</strong> is the systematic exploitation of vulnerabilities within the iOS boot chain or Darwin kernel to disable mandatory code signing, bypass sandboxing, and escalate user privileges to root (UID 0).</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Why Jailbreaking Exists: Overcoming iOS Security Controls (Q61)</span>
      <p>In stock iOS, third-party apps run under the restricted <code>mobile</code> user account (UID 501). Jailbreaking defeats three core security defenses:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">amfid Code-Signing Bypass (Q61)</span>
            <span class="statute-tag">Binary Integrity</span>
          </div>
          <p>• Apple's <code>amfid</code> (Apple Mobile File Integrity Daemon) verifies that every binary and dynamic library (dylib) is cryptographically signed by Apple.<br>
          • Jailbreaks patch <code>amfid</code> or hook kernel validation routines, enabling the execution of arbitrary, unsigned Mach-O binaries and command-line tools.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Root Escalation (UID 501 &rarr; UID 0) (Q61)</span>
            <span class="statute-tag">Kernel Exploit</span>
          </div>
          <p>• Exploits a kernel vulnerability (e.g., use-after-free, integer overflow) to overwrite kernel credentials (<code>ucred</code> structure in RAM).<br>
          • The executing process is elevated from UID 501 (mobile) to UID 0 (root), completely neutralizing TrustedBSD sandbox profiles.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Four-Tiered Jailbreak Taxonomy (Q62)</span>
      <p>Jailbreaks are categorized based on their persistence across device reboots and dependence on external computers:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Reboot Behavior</th>
            <th>External Computer Required?</th>
            <th>Forensic Viability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Untethered (Q62)</strong></td>
            <td>Persistent. Device remains jailbroken after reboot without any computer connection.</td>
            <td>No (Only during initial installation).</td>
            <td>Extremely rare in modern iOS. Relies on bootloader or early init exploits.</td>
          </tr>
          <tr>
            <td><strong>Tethered (Q62)</strong></td>
            <td>Non-persistent. If rebooted, device <em>cannot boot at all</em> without being connected to a PC.</td>
            <td>Yes (On every single boot).</td>
            <td>High risk of boot loop if power is lost in transit.</td>
          </tr>
          <tr>
            <td><strong>Semi-Tethered</strong></td>
            <td>Boots into stock, unjailbroken state if rebooted. Needs PC to re-jailbreak.</td>
            <td>Yes (Only to re-enable jailbreak).</td>
            <td>Common in checkm8-based hardware exploits (checkra1n).</td>
          </tr>
          <tr>
            <td><strong>Semi-Untethered (Q62)</strong></td>
            <td>Boots into stock state if rebooted. Re-jailbroken via an app installed on the device.</td>
            <td>No (Re-enabled via sideloaded app, e.g., unc0ver, Taurine).</td>
            <td>Dominant modern software jailbreak architecture.</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 26,
      runningHead: 'CH. 7 • CHECKM8 BOOTROM EXPLOIT & CHECKRA1N',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 7 (Part 1 Continued) • Hardware BootROM Exploits</span>
      <h2>The Watershed: checkm8 & checkra1n Forensics</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The checkm8 Hardware BootROM Vulnerability (Q63, Q64)</span>
      <p>Released in September 2019 by security researcher <em>axi0mX</em>, <strong>checkm8</strong> represents the most impactful hardware exploit in mobile forensic history:</p>
      
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Why checkm8 is Unpatchable by Apple (Q63)</span>
          <span class="statute-tag">Hardware Silicon Flaw</span>
        </div>
        <p>• <strong>Location:</strong> Resides in the <strong>SecureROM (Boot ROM)</strong>, which is read-only memory burned into the silicon during microprocessor fabrication.<br>
        • <strong>Permanent:</strong> Apple <em>cannot patch it via iOS software updates</em>! Every device containing vulnerable silicon remains susceptible forever.<br>
        • <strong>Affected Chipsets:</strong> Apple A5 through A11 Bionic processors (iPhone 4S up to iPhone X / iPad 5th–7th gen).<br>
        • <strong>Vulnerability Mechanism (Q64):</strong> A Use-After-Free (UAF) bug in the USB DFU (Device Firmware Upgrade) stack during USB control transfers.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Forensic Application: checkra1n & Forensic Ramdisks</span>
      <p>Forensic developers leveraged checkm8 to build tools like <strong>checkra1n</strong> and specialized forensic recovery ramdisks:</p>
      <ul class="forensic-list">
        <li><strong>Physical Memory Acquisition:</strong> Enables booting custom unsigned kernels over USB into RAM without modifying the target device's non-volatile NAND flash storage.</li>
        <li><strong>BFU Extractions on iPhone X:</strong> Allows reading raw system partitions and attempting brute-force attacks on disabled devices containing A5–A11 chips.</li>
      </ul>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 7 (Part 1/2) Complete.</strong> Turn page for Forensic Risks, Chain of Custody &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="6" onclick="window.openMCQForSpread(6)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q61–Q70) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 13: Part 2 - Forensic Utility vs Contamination Risks & Evidence Admissibility (Pages 27–28)
  {
    spreadId: 13,
    left: {
      pageNumber: 27,
      runningHead: 'CH. 7 • FORENSIC UTILITY VS EVIDENCE CONTAMINATION',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 7 • Topic 7: Jail-breaking iOS (Part 2)</span>
      <h2>Forensic Extraction vs Evidence Contamination</h2>
    </div>

    <div class="intro-abstract">
      <p>While jailbreaking provides unprecedented access to the iOS file system, applying a consumer jailbreak during a criminal investigation introduces severe forensic integrity violations. Examiners must rigorously distinguish between consumer jailbreaks and forensic extraction agents.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Evidentiary Benefits of Root / Jailbreak Access (Q65)</span>
      <p>When full file system access is achieved, forensic examiners can extract critical artefacts that are completely hidden from standard iTunes logical backups:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Decrypted iOS Keychain (Q65)</span>
            <span class="statute-tag">Stored Passwords</span>
          </div>
          <p>Dumps <code>/private/var/Keychains/keychain-2.db</code> and extracts plaintext Wi-Fi passwords, VPN credentials, Safari credit cards, and cryptographic app authentication tokens.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Full Sandbox Extraction (Q65)</span>
            <span class="statute-tag">Private App Data</span>
          </div>
          <p>Extracts sandboxed directories for secure communication apps (Signal, Telegram, ProtonMail) and system databases (<code>knowledgeC.db</code>, <code>CurrentPowerlog.PLSQL</code>).</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Severe Forensic Risks of Consumer Jailbreaks (Q66)</span>
      <p>Why forensic laboratories strictly prohibit applying consumer jailbreaks (e.g., unc0ver, checkra1n with default flags) to evidentiary devices:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Evidence Contamination Vectors (Q66)</span>
          <span class="statute-tag">Chain of Custody Violation</span>
        </div>
        <p>• <strong>System Partition Modification:</strong> Legacy jailbreaks remount the read-only rootfs (<code>/</code>) as read-write, installing binaries (<code>/bin/bash</code>, <code>/usr/libexec/cydia/</code>), altering file hashes across the OS.<br>
        • <strong>Timestamp Alteration:</strong> Execution alters metadata and inode timestamps on system logs, destroying chronological sequencing.<br>
        • <strong>Bootloop Risk:</strong> A failed jailbreak exploit can trigger a catastrophic kernel panic that bricks the phone into an unbootable recovery state, permanently terminating access to evidence!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 28,
      runningHead: 'CH. 7 • EXTRACTION AGENTS & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 7 (Part 2 Continued) • Forensic Best Practices</span>
      <h2>Forensic Extraction Agents & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Modern Solution: Forensic Extraction Agents (Q67)</span>
      <p>To overcome evidence contamination, leading forensic vendors (Cellebrite, Magnet Forensics, Elcomsoft) developed <strong>Extraction Agents</strong>:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Extraction Agent Architecture (Q67)</span>
          <span class="statute-tag">Forensic Integrity</span>
        </div>
        <p>• <strong>Developer Sideloading:</strong> A lightweight agent app signed with a legitimate Apple Developer Certificate is installed onto the unlocked device via USB.<br>
        • <strong>User-Space In-Memory Escalation:</strong> The agent exploits an in-memory kernel flaw to escalate its own thread privileges without modifying the read-only System partition.<br>
        • <strong>Read-Only Dump:</strong> It streams a complete read-only image of the Data partition (<code>/private/var</code>) and Keychain over USB to the forensic PC, then uninstalls cleanly without leaving persistent modifications.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Jailbreaking iOS (Q61–Q70)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Jailbreak Purpose):</strong> Jailbreaking escalates user privileges from <code>mobile</code> (UID 501) to <code>root</code> (UID 0) and bypasses amfid code signing (Q61).<br>
        ⚠️ <strong>Trap 2 (Taxonomy):</strong> A semi-untethered jailbreak boots into stock mode on restart and is re-enabled using an app on the phone without a computer (Q62).<br>
        ⚠️ <strong>Trap 3 (checkm8 Scope):</strong> checkm8 is an unpatchable BootROM vulnerability affecting Apple chips A5 through A11 (iPhone 4S to iPhone X) (Q63).<br>
        ⚠️ <strong>Trap 4 (Extraction Agent vs Jailbreak):</strong> Commercial extraction agents run in memory without modifying the read-only system partition, preserving chain of custody (Q67).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 7: Jail-breaking iOS Architecture?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q61–Q70).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="6" onclick="window.openMCQForSpread(6)">
        Practice Topic 7 Quiz (Q61–Q70) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 8: ANDROID OS ARCHITECTURE (Spreads 14 & 15, Pages 29–32, Q71–Q80)
  // =========================================================================
  // Spread 14: Part 1 - Five-Layer Architectural Stack & Core Subsystems (Pages 29–30)
  {
    spreadId: 14,
    left: {
      pageNumber: 29,
      runningHead: 'CH. 8 • ANDROID ARCHITECTURE: FIVE-LAYER STACK',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 8 • Topic 8: Android OS Architecture (Part 1)</span>
      <h2>The Five-Layer Android Architectural Stack</h2>
    </div>

    <div class="intro-abstract">
      <p>Android is an open-source software stack engineered for mobile devices. Digital forensic examiners must thoroughly understand its layered architecture to trace how user activity at the application layer propagates down into physical flash storage blocks.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The 5 Foundational Layers of Android OS (Q71)</span>
      <p>From the lowest hardware interface up to the graphical user interface, Android consists of five distinct layers:</p>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Layer</th>
            <th>Core Components</th>
            <th>Forensic Role & Evidentiary Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Linux Kernel (Q71)</strong></td>
            <td>Low-level device drivers (camera, display, Wi-Fi, binder, audio, power), process management, virtual memory, SELinux enforcement.</td>
            <td>Enforces process isolation, hardware access control, and memory protection. Kernel dmesg logs reveal peripheral insertions and hardware faults.</td>
          </tr>
          <tr>
            <td><strong>2. Hardware Abstraction Layer (HAL) (Q71)</strong></td>
            <td>Standardized C/C++ interfaces exposing hardware capabilities to Java frameworks (Camera HAL, Sensors HAL, Audio HAL).</td>
            <td>Translates high-level framework commands into vendor-specific kernel driver calls without exposing proprietary driver code.</td>
          </tr>
          <tr>
            <td><strong>3. Native C/C++ Libraries & Android Runtime (ART) (Q72)</strong></td>
            <td>Native libraries (WebKit, SQLite, Libc, OpenSSL/BoringSSL) and the Android Runtime (ART) running Dalvik Executable (DEX) bytecode.</td>
            <td><strong>SQLite engine:</strong> Manages 90% of forensic databases. <strong>ART:</strong> Compiles DEX bytecode into Ahead-of-Time (AOT) machine code via <code>dex2oat</code>.</td>
          </tr>
          <tr>
            <td><strong>4. Java API Framework (Q73)</strong></td>
            <td>System services: Activity Manager, Package Manager, Content Providers, Notification Manager, Telephony Manager, Location Manager.</td>
            <td>Exposes Android APIs to apps. Forensic examiners query these services using <code>dumpsys</code> and <code>content query</code> commands over ADB.</td>
          </tr>
          <tr>
            <td><strong>5. System & User Applications</strong></td>
            <td>Pre-installed OEM apps (Dialer, Settings, SMS) and third-party apps (WhatsApp, Chrome, Banking).</td>
            <td>Primary focus of forensic investigations: user communications, photos, and web history.</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 30,
      runningHead: 'CH. 8 • ART RUNTIME, DEX & ZYGOTE PROCESS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 8 (Part 1 Continued) • Runtime & Initialization</span>
      <h2>Android Runtime (ART) & The Zygote Process</h2>
    </div>

    <div class="section-block">
      <span class="section-label">2. Evolution of the Runtime: Dalvik vs ART (Q72)</span>
      <p>Understanding how Android executes application code dictates how forensic tools parse memory and decompile APKs:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Dalvik JIT vs ART AOT/Profile-Guided Compilation (Q72)</span>
          <span class="statute-tag">Code Execution</span>
        </div>
        <p>• <strong>Legacy Dalvik VM (Android &lt; 5.0):</strong> Utilized Just-In-Time (JIT) compilation, interpreting DEX bytecode into native code dynamically in RAM during execution. Slower execution, smaller on-disk footprint.<br>
        • <strong>Modern ART (Android 5.0+):</strong> Introduced Ahead-of-Time (AOT) compilation via <code>dex2oat</code>. During installation, DEX bytecode is pre-compiled into native ELF shared libraries (<code>.oat</code> / <code>.odex</code>).<br>
        • <strong>Android 7.0+ Profile-Guided JIT/AOT:</strong> Combines JIT compiler, AOT, and cloud profiles. Frequently used methods are compiled to machine code during overnight charging cycles, creating execution profiles in <code>/data/misc/profiles/</code>.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Zygote Init Process: The Mother of All Apps (Q73)</span>
      <p>During the Android boot sequence, the Linux kernel initializes <code>/init</code>, which parses <code>init.rc</code> and launches the <strong>Zygote</strong> process:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Why Zygote Forks Every Process (Q73)</span>
          <span class="statute-tag">Process Spawning</span>
        </div>
        <p>• Starting a new Dalvik/ART virtual machine for every app launch would exhaust mobile RAM and cause several-second delays.<br>
        • Zygote pre-loads all common core Java classes and Android framework libraries into RAM once at boot.<br>
        • When a user taps an app icon, the Activity Manager requests Zygote to <strong>fork an identical copy of itself</strong> using copy-on-write memory. The new forked process immediately drops superuser privileges, switches to the app's assigned UID, and executes the app code in milliseconds.</p>
      </div>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 8 (Part 1/2) Complete.</strong> Turn page for Partition Layout, A/B Updates &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="7" onclick="window.openMCQForSpread(7)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q71–Q80) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 15: Part 2 - Android Partition Layout, Seamless A/B Updates & IPC Mechanisms (Pages 31–32)
  {
    spreadId: 15,
    left: {
      pageNumber: 31,
      runningHead: 'CH. 8 • ANDROID PARTITION ARCHITECTURE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 8 • Topic 8: Android OS Architecture (Part 2)</span>
      <h2>Android Disk Partition Layout & Forensic Targets</h2>
    </div>

    <div class="intro-abstract">
      <p>Android flash storage is structured into specialized logical partitions. Each partition serves a distinct role in the boot sequence, operating system integrity, or user data persistence.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Primary Android Partition Scheme (Q74)</span>
      <p>In digital forensics, identifying which partition contains evidentiary data prevents wasting laboratory extraction time:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Partition Name</th>
            <th>Mount Point</th>
            <th>File System Type</th>
            <th>Forensic Description & Evidentiary Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>/boot (Q74)</strong></td>
            <td>RAM (during boot)</td>
            <td>Raw image (kernel + ramdisk)</td>
            <td>Contains the Linux kernel (zImage) and initialization ramdisk. Modified by Magisk during systemless rooting.</td>
          </tr>
          <tr>
            <td><strong>/system (Q74)</strong></td>
            <td><code>/system</code> (Read-Only)</td>
            <td>EXT4 / EROFS (Enhanced Read-Only)</td>
            <td>Hosts core Android OS, framework JARs, system binaries, and pre-installed APKs. Protected by dm-verity.</td>
          </tr>
          <tr>
            <td><strong>/data (userdata) (Q74)</strong></td>
            <td><code>/data</code> (Read-Write)</td>
            <td>EXT4 / F2FS (Flash-Friendly FS)</td>
            <td><strong>The Primary Forensic Target:</strong> Contains 99% of user evidence: installed apps, private SQLite databases, photos, contacts, and logs.</td>
          </tr>
          <tr>
            <td><strong>/recovery</strong></td>
            <td>RAM (in recovery)</td>
            <td>Raw image</td>
            <td>Contains secondary recovery kernel and minimal interface for OTA updates and factory resets (TWRP/ClockworkMod).</td>
          </tr>
          <tr>
            <td><strong>/vendor</strong></td>
            <td><code>/vendor</code> (Read-Only)</td>
            <td>EXT4 / EROFS</td>
            <td>Introduced in Project Treble; houses SoC vendor-specific HAL binaries, GPU drivers, and firmware.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. Modern Seamless Updates: A/B Partition Layout (Q75)</span>
      <p>Starting in Android 7.0, Google introduced <strong>Seamless A/B System Updates</strong>. Instead of single partitions, flash storage contains two duplicate sets: <code>boot_a</code>/<code>boot_b</code>, <code>system_a</code>/<code>system_b</code>, <code>vendor_a</code>/<code>vendor_b</code>. Updates stream to the inactive slot in the background. On reboot, the bootloader switches active slots, eliminating the legacy <code>/recovery</code> partition on many modern devices.</p>
    </div>
      `
    },
    right: {
      pageNumber: 32,
      runningHead: 'CH. 8 • BINDER IPC & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 8 (Part 2 Continued) • IPC Subsystems & Exam Traps</span>
      <h2>Binder IPC & Android Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Inter-Process Communication (IPC): The Binder Driver (Q76)</span>
      <p>Because Android sandboxes enforce strict memory isolation between processes, how do apps communicate with system services and each other?</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">The Binder IPC Architecture (Q76)</span>
          <span class="statute-tag">Kernel Subsystem</span>
        </div>
        <p>• Built into the Linux kernel via the character driver <code>/dev/binder</code>.<br>
        • Provides high-performance, low-overhead remote procedure calls (RPC) using shared memory buffers.<br>
        • Enforces security by inspecting the caller's Linux UID at the kernel boundary before passing messages.<br>
        • <strong>Android Intents:</strong> High-level asynchronous messaging objects (Explicit vs Implicit Intents) passed through Binder to trigger Activities, start Services, or broadcast system notifications (e.g., <code>BOOT_COMPLETED</code>).</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Android OS Architecture (Q71–Q80)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (5-Layer Order):</strong> Linux Kernel &rarr; HAL &rarr; Native Libraries/ART &rarr; Java API Framework &rarr; Applications (Q71).<br>
        ⚠️ <strong>Trap 2 (Runtime Compiler):</strong> Modern Android uses ART with Ahead-of-Time (AOT) and JIT compilation, not pure Dalvik JIT (Q72).<br>
        ⚠️ <strong>Trap 3 (Zygote Role):</strong> Zygote pre-loads classes and forks new application processes to save memory and optimize launch speed (Q73).<br>
        ⚠️ <strong>Trap 4 (Forensic Partition):</strong> The primary target containing user chat databases and photos is the <code>/data</code> (userdata) partition (Q74).<br>
        ⚠️ <strong>Trap 5 (Core IPC):</strong> Android's primary Inter-Process Communication mechanism is the <strong>Binder</strong> kernel driver (Q76).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 8: Android OS Architecture?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q71–Q80).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="7" onclick="window.openMCQForSpread(7)">
        Practice Topic 8 Quiz (Q71–Q80) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 9: FILE LOGGING MECHANISM IN ANDROID-PHONE (Spreads 16 & 17, Pages 33–36, Q81–Q90)
  // =========================================================================
  // Spread 16: Part 1 - logcat Ring Buffers, Priorities & System Daemons (Pages 33–34)
  {
    spreadId: 16,
    left: {
      pageNumber: 33,
      runningHead: 'CH. 9 • ANDROID LOGGING: LOGCAT RING BUFFERS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 9 • Topic 9: Android File Logging (Part 1)</span>
      <h2>Android Logging Architecture: The logcat Ring Buffers</h2>
    </div>

    <div class="intro-abstract">
      <p>Android maintains an extensive internal diagnostic logging infrastructure managed by the <code>logd</code> system daemon. For cyber forensic examiners, system and application logs provide real-time, chronological corroboration of user presence, application launches, network connections, and crash events.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Architecture of Android logcat Ring Buffers (Q81)</span>
      <p>Unlike traditional Linux servers that append log lines into flat text files on disk (<code>/var/log/messages</code>), Android writes logs into <strong>in-memory circular ring buffers</strong> in volatile RAM managed by <code>logd</code>:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Why Circular Ring Buffers?</span>
            <span class="statute-tag">Performance & Flash Wear</span>
          </div>
          <p>Continuous disk writes would rapidly destroy NAND flash cells due to write amplification. Ring buffers overwrite the oldest entries when allocated RAM limits (typically 256 KB to 16 MB) are reached.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">The 5 Core logcat Buffers (Q81)</span>
            <span class="statute-tag">Command: logcat -b [buffer]</span>
          </div>
          <p>• <strong>main:</strong> General application and framework messages.<br>
          • <strong>system:</strong> Core Android system messages and Activity Manager life-cycles.<br>
          • <strong>radio (Q81):</strong> Telephony, SMS, cell tower handovers, and baseband modem interactions.<br>
          • <strong>events:</strong> Binary-encoded system event records (screen on/off, app focus).<br>
          • <strong>crash:</strong> Unhandled exceptions, ANRs, and fatal native app termination logs.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Logcat Priority Levels & Filtering Syntax (Q82)</span>
      <p>Every logcat entry carries a one-character priority indicator indicating severity:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Priority Code</th>
            <th>Level Name</th>
            <th>Description & Forensic Focus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>V</code></td>
            <td><strong>Verbose</strong></td>
            <td>Lowest priority; extensive developer debugging messages.</td>
          </tr>
          <tr>
            <td><code>D</code></td>
            <td><strong>Debug</strong></td>
            <td>Informational messages used during active software development.</td>
          </tr>
          <tr>
            <td><code>I</code></td>
            <td><strong>Info</strong></td>
            <td>Normal operational events (e.g., service started, network connected).</td>
          </tr>
          <tr>
            <td><code>W</code></td>
            <td><strong>Warn</strong></td>
            <td>Unexpected condition occurred that did not halt execution.</td>
          </tr>
          <tr>
            <td><code>E</code></td>
            <td><strong>Error</strong></td>
            <td>Critical failure in a subsystem; failed authentication, missing files.</td>
          </tr>
          <tr>
            <td><code>F</code></td>
            <td><strong>Fatal / Assert</strong></td>
            <td>Subsystem crash; immediate process abortion (SIGSEGV, SIGABRT).</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 34,
      runningHead: 'CH. 9 • SYSTEM DIAGNOSTICS & DUMPSYS SERVICES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 9 (Part 1 Continued) • System State Diagnostics</span>
      <h2>Diagnostic Inspection: dumpsys & Device Telemetry</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Power of dumpsys in Forensic Triage (Q83, Q84)</span>
      <p>The <code>dumpsys</code> command queries Android's active system services running inside the <code>system_server</code> process, dumping real-time telemetry over ADB:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">dumpsys usagestats (Q83)</span>
            <span class="statute-tag">App Timeline</span>
          </div>
          <p>• Dumps the internal state of the <code>UsageStatsService</code>.<br>
          • Reveals exact timestamps of when applications were moved to the foreground, total daily usage duration, and last time used.<br>
          • <strong>Forensic Proof:</strong> Proves whether a suspect actively launched a wiped messaging app during the commission of an offense.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">dumpsys batterystats (Q84)</span>
            <span class="statute-tag">Battery Historian</span>
          </div>
          <p>• Dumps historical battery telemetry: screen-on/off intervals, charging plug-in times, Wi-Fi scans, and CPU wake locks.<br>
          • Parsed by Google's <em>Battery Historian</em> tool into a complete visual timeline of device power and physical activity.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. adb bugreport: The Master System Archive (Q85)</span>
      <p>Executing <code>adb bugreport bugreport.zip</code> compiles a comprehensive, multi-gigabyte forensic snapshot containing all logcat buffers, complete <code>dumpsys</code> outputs, tombstone crash traces, kernel dmesg, and battery statistics into a structured ZIP archive.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 9 (Part 1/2) Complete.</strong> Turn page for Native Crash Tombstones, Dropbox &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="8" onclick="window.openMCQForSpread(8)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q81–Q90) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 17: Part 2 - Native Crash Tombstones, DropBox Logs & Exam Traps (Pages 35–36)
  {
    spreadId: 17,
    left: {
      pageNumber: 35,
      runningHead: 'CH. 9 • TOMBSTONES & DROPBOX LOG PERSISTENCE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 9 • Topic 9: Android File Logging (Part 2)</span>
      <h2>Persistent Crash Logs: Native Tombstones & DropBox</h2>
    </div>

    <div class="intro-abstract">
      <p>While logcat ring buffers are volatile and overwrite rapidly, Android maintains persistent on-disk log directories that record severe system anomalies, native code exceptions, and kernel crashes.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Native Crash Logs: /data/tombstones/ (Q86)</span>
      <p>When a native C/C++ process crashes due to a fatal architecture signal (e.g., <code>SIGSEGV</code> segmentation fault, <code>SIGBUS</code> bus error, <code>SIGFPE</code> floating point exception), the Android crash daemon (<code>crash_dump</code>) intercepts execution and generates a detailed post-mortem core dump file:</p>
      
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Anatomy of a Tombstone File (Q86)</span>
          <span class="statute-tag">Path: /data/tombstones/tombstone_XX</span>
        </div>
        <p>• <strong>Location:</strong> Stored on the userdata partition as <code>tombstone_00</code> through <code>tombstone_09</code> (rotating up to 10/50 files).<br>
        • <strong>Evidentiary Contents:</strong> Process Name, Process ID (PID), Thread ID (TID), exact timestamp, signal number, and complete register dump (ARM64: <code>x0</code>–<code>x30</code>, <code>sp</code>, <code>pc</code>).<br>
        • <strong>Stack Backtrace:</strong> Lists every shared library (<code>.so</code>) loaded at the time of the crash, providing absolute proof of malware execution or binary exploitation attempts.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Android DropBox Logging: /data/system/dropbox/ (Q87)</span>
      <p>Not to be confused with the commercial cloud storage service, Android's internal <strong>DropBoxManagerService</strong> persists structured historical logs across reboots:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">DropBox Entry Formats (Q87)</span>
          <span class="statute-tag">Historical Incident Logs</span>
        </div>
        <p>• <strong>Location:</strong> <code>/data/system/dropbox/</code>.<br>
        • <strong>Naming Standard:</strong> <code>[tag]@[timestamp].txt</code> (or <code>.txt.gz</code> for compressed entries).<br>
        • <strong>Common Tags:</strong> <code>data_app_crash</code> (third-party app crashes), <code>system_app_anr</code> (Application Not Responding freezes), <code>system_server_crash</code>, and <code>BATTERY_DISCHARGE_INFO</code>.<br>
        • <strong>Forensic Value:</strong> DropBox records persist for weeks, allowing examiners to reconstruct historical application failure and usage timelines long after logcat buffers have recycled.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 36,
      runningHead: 'CH. 9 • RECOVERY LOGS & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 9 (Part 2 Continued) • Recovery Logs & Exam Traps</span>
      <h2>Recovery Logs & Android Logging Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Recovery Mode Logs: /cache/recovery/ (Q88)</span>
      <p>When an Android phone boots into recovery mode to perform an update or factory wipe, the recovery kernel records actions in <code>/cache/recovery/last_log</code>:</p>
      <ul class="forensic-list">
        <li><strong>Wipe Reconstruction:</strong> Proves whether a factory reset was initiated via the user-facing GUI, through recovery hardware button chording, or remotely via an MDM / Find My command.</li>
        <li><strong>Firmware Flash History:</strong> Records sideloaded ZIP file updates and OEM partition flashes.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Android Logging (Q81–Q90)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (logcat Ring Buffer):</strong> Android logcat logs are stored in <strong>circular ring buffers in RAM</strong>, not permanent flat files on the SD card (Q81).<br>
        ⚠️ <strong>Trap 2 (Radio Buffer):</strong> Cellular network registration, SMS sending logs, and AT commands are recorded in the <strong>radio</strong> logcat buffer (Q81).<br>
        ⚠️ <strong>Trap 3 (dumpsys usagestats):</strong> <code>dumpsys usagestats</code> dumps application foreground launch timestamps and usage durations (Q83).<br>
        ⚠️ <strong>Trap 4 (Native Crashes):</strong> Fatal native ARM crashes generate files in <strong>/data/tombstones/</strong>, not /var/log/ (Q86).<br>
        ⚠️ <strong>Trap 5 (DropBox Directory):</strong> Android's internal historical crash manager stores logs in <strong>/data/system/dropbox/</strong> (Q87).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 9: Android File Logging Mechanisms?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q81–Q90).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="8" onclick="window.openMCQForSpread(8)">
        Practice Topic 9 Quiz (Q81–Q90) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 10: TYPES OF ARTEFACTS: ANDROID PART 1 - SYSTEM & COMMUNICATION (Spreads 18 & 19, Pages 37–40, Q91–Q100)
  // =========================================================================
  // Spread 18: Part 1 - SQLite Database Internals, WAL Journaling & SMS/Call Logs (Pages 37–38)
  {
    spreadId: 18,
    left: {
      pageNumber: 37,
      runningHead: 'CH. 10 • ANDROID ARTEFACTS: SQLITE INTERNALS & WAL',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 10 • Topic 10: Android Artefacts (Part 1)</span>
      <h2>SQLite Database Internals & Write-Ahead Logging (WAL)</h2>
    </div>

    <div class="intro-abstract">
      <p>The vast majority of digital evidence on Android devices is stored inside structured <strong>SQLite</strong> relational database files. Mastering SQLite database mechanics, transaction journals, and B-tree storage layouts is the cornerstone of mobile forensic analysis.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Why SQLite Dominates Mobile Storage (Q91)</span>
      <p>Android does not run a client-server SQL database (like MySQL or Oracle). It embeds the C-based SQLite engine directly into app processes. SQLite databases are self-contained, single-file cross-platform containers starting with the 16-byte magic header string: <code>SQLite format 3\\000</code>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Forensic Goldmine: Rollback Journals vs Write-Ahead Logging (WAL) (Q92)</span>
      <p>SQLite employs two distinct operational transaction journaling modes that dramatically impact evidence recovery:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">Legacy Rollback Journal (<code>.db-journal</code>)</span>
            <span class="statute-tag">Atomic Rollback</span>
          </div>
          <p>• Before modifying a database page, SQLite copies the original unmodified page into a temporary journal file (<code>database.db-journal</code>).<br>
          • Upon commit, the journal is deleted or truncated. If power is severed mid-transaction, the journal restores consistency.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Write-Ahead Logging (<code>.db-wal</code>) (Q92)</span>
            <span class="statute-tag">Concurrency Standard</span>
          </div>
          <p>• <strong>Default in Modern Android:</strong> Changes are appended sequentially to a separate file: <code>database.db-wal</code>. The main <code>.db</code> file remains unchanged.<br>
          • <strong>Shared Memory (<code>.db-shm</code>):</strong> Acts as an index for concurrent readers.<br>
          • <strong>Forensic Value:</strong> Recent chats, deleted records, and uncommitted updates exist inside the WAL file for hours before a <strong>checkpoint</strong> merges them into the main database. <em>Examiners must ALWAYS extract all three companion files (.db, .db-wal, .db-shm) together!</em></p>
        </div>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 38,
      runningHead: 'CH. 10 • SMS, CALL LOGS & TIMESTAMPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 10 (Part 1 Continued) • Telephony Communications</span>
      <h2>Telephony Databases: SMS/MMS & Call Logs</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Core Telephony Databases & File Locations (Q93, Q94)</span>
      <p>System communication records are maintained by Android telephony content providers in protected system directories:</p>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Communication Artifact</th>
            <th>Primary File Path</th>
            <th>Key Tables & Critical Columns</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>SMS & MMS Messages (Q93)</strong></td>
            <td><code>/data/data/com.android.providers.telephony/databases/mmssms.db</code> (or <code>telephony.db</code>)</td>
            <td>• Table: <code>sms</code> (columns: <code>address</code>, <code>date</code>, <code>body</code>, <code>type</code> [1=Inbox, 2=Sent, 3=Draft], <code>read</code>, <code>thread_id</code>).<br>• Table: <code>pdu</code> & <code>part</code> (MMS multimedia content).</td>
          </tr>
          <tr>
            <td><strong>Call Logs (Q94)</strong></td>
            <td><code>/data/data/com.android.providers.contacts/databases/contacts2.db</code> (or <code>calllog.db</code>)</td>
            <td>• Table: <code>calls</code> (columns: <code>number</code>, <code>date</code>, <code>duration</code> (in seconds), <code>type</code> [1=Incoming, 2=Outgoing, 3=Missed, 4=Voicemail, 5=Rejected], <code>name</code>).</td>
          </tr>
          <tr>
            <td><strong>Contact Phonebook</strong></td>
            <td><code>/data/data/com.android.providers.contacts/databases/contacts2.db</code></td>
            <td>• Table: <code>raw_contacts</code>, <code>data</code> (names, email addresses, organization, linked Google accounts).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">4. Timestamp Interpretation in Android Telephony (Q95)</span>
      <p>Timestamps in <code>mmssms.db</code> and <code>contacts2.db</code> are stored as <strong>Unix Epoch Milliseconds</strong> (13-digit integers, e.g., <code>1700000000000</code>), representing the elapsed milliseconds since January 1, 1970 00:00:00 UTC. Examiners convert these to local standard time (IST) during report compilation.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 10 (Part 1/2) Complete.</strong> Turn page for Accounts, Wi-Fi Caches, Freelist Carving &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="9" onclick="window.openMCQForSpread(9)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q91–Q100) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 19: Part 2 - User Accounts, Wi-Fi Configurations, Freelist Carving & Exam Traps (Pages 39–40)
  {
    spreadId: 19,
    left: {
      pageNumber: 39,
      runningHead: 'CH. 10 • ANDROID SYSTEM ARTEFACTS & FREELISTS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 10 • Topic 10: Android Artefacts (Part 2)</span>
      <h2>System Accounts, Wi-Fi Artefacts & SQLite Freelist Carving</h2>
    </div>

    <div class="intro-abstract">
      <p>Beyond call and SMS logs, Android preserves secondary configuration files and caches that establish device ownership, network association history, and deleted conversational fragments.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Configured Accounts: accounts.db (Q96)</span>
      <p>Device ownership and cloud synchronization linkages are defined in the Android Account Manager database:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Path: /data/system_ce/0/accounts_ce.db (Q96)</span>
          <span class="statute-tag">Cloud Identifiers</span>
        </div>
        <p>• Contains the <code>accounts</code> table storing the primary registered Google Account email address, corporate Microsoft Exchange accounts, and third-party sync accounts (WhatsApp, Twitter).<br>
        • Stores OAuth synchronization authentication tokens and last sync timestamps, establishing suspect identity in cybercrime cases.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Wi-Fi Configuration History: WifiConfigStore.xml (Q97, Q98)</span>
      <p>Where does Android record known Wi-Fi networks and wireless access point passwords?</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Wi-Fi Forensic Files (Q97, Q98)</span>
          <span class="statute-tag">Network Positioning</span>
        </div>
        <p>• <strong>Modern Android:</strong> <code>/data/misc/wifi/WifiConfigStore.xml</code> (or <code>/data/misc/apexdata/com.android.wifi/WifiConfigStore.xml</code>).<br>
        • <strong>Legacy Android:</strong> <code>/data/misc/wifi/wpa_supplicant.conf</code>.<br>
        • <strong>Evidentiary Content (Q98):</strong> Lists every connected Wi-Fi network SSID name, security type (WPA2-PSK/WPA3), <strong>Pre-Shared Key (plaintext password)</strong>, BSSID MAC address, and randomized MAC settings. Proves suspect presence at a specific home, office, or hotel router!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 40,
      runningHead: 'CH. 10 • SQLITE FREELIST CARVING & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 10 (Part 2 Continued) • Carving Deleted Records</span>
      <h2>SQLite Freelist Carving & Topic 10 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Recovering Deleted Messages from SQLite Freelists (Q99, Q100)</span>
      <p>When a user deletes an SMS, WhatsApp message, or call record, why can forensic tools often recover the deleted text?</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">The Mechanics of SQLite Deletion (Q100)</span>
          <span class="statute-tag">Data Carving</span>
        </div>
        <p>• SQLite stores tables in <strong>B-tree leaf pages</strong>. When a row is deleted, SQLite does NOT overwrite the data with zeros.<br>
        • The database engine merely removes the row pointer from the cell pointer array and links the free space into a <strong>Freelist</strong> (linked list of unallocated database pages).<br>
        • The raw text payload remains physically intact in the freelist until reused by new records or purged by an explicit <code>VACUUM</code> command.<br>
        • Specialized forensic tools (Cellebrite Physical Analyzer, Belkasoft) parse these unallocated cells to restore deleted messages.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Android Artefacts Part 1 (Q91–Q100)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (WAL Triad):</strong> A modern SQLite database in WAL mode requires extracting <code>.db</code>, <code>.db-wal</code>, and <code>.db-shm</code> together; the WAL file holds the newest data (Q92).<br>
        ⚠️ <strong>Trap 2 (SMS Database):</strong> SMS messages are stored in <code>mmssms.db</code> in the <code>sms</code> table; timestamps are in Unix milliseconds (Q93, Q95).<br>
        ⚠️ <strong>Trap 3 (Call Logs Table):</strong> Call history is located inside <code>contacts2.db</code> within the <code>calls</code> table (Q94).<br>
        ⚠️ <strong>Trap 4 (Wi-Fi Passwords):</strong> Plaintext Wi-Fi passwords and configured SSIDs reside in <code>WifiConfigStore.xml</code> (Q98).<br>
        ⚠️ <strong>Trap 5 (Deleted SQLite Records):</strong> Deleted records remain recoverable in the SQLite <strong>freelist</strong> until a <code>VACUUM</code> command reorganizes the database (Q100).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 10: Android Artefacts (Part 1)?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q91–Q100).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="9" onclick="window.openMCQForSpread(9)">
        Practice Topic 10 Quiz (Q91–Q100) &rarr;
      </button>
    </div>
      `
    }
  }
];

