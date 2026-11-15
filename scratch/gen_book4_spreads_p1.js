// Book 4 Spreads Part 1: Topics 1–5 (Spreads 0–9, Pages 1–20)
// High-yield DSSSB Cyber Forensic notes: Mobile Forensics & Telecom Analysis

module.exports = [
  // =========================================================================
  // TOPIC 1: BASICS OF MOBILE DEVICES & MOBILE COMMUNICATIONS (Spreads 0 & 1, Pages 1–4, Q1–Q10)
  // =========================================================================
  // Spread 0: Part 1 - Hardware Architecture, Processors & Storage (Pages 1–2)
  {
    spreadId: 0,
    left: {
      pageNumber: 1,
      runningHead: 'CH. 1 • MOBILE BASICS: AP VS BP ARCHITECTURE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 1 • Topic 1: Basics of Mobile Devices (Part 1)</span>
      <h2>Mobile Hardware Architecture: AP vs Baseband Processor</h2>
    </div>

    <div class="intro-abstract">
      <p><strong>Mobile Device Forensics</strong> is the specialized branch of digital forensics dedicated to the recovery and analysis of digital evidence from smartphones, cellular modems, SIM cards, and wearable gadgets. Unlike personal computers, mobile smartphones are designed as highly integrated, constrained System-on-Chip (SoC) architectures where telecommunications hardware and user computing exist in two strictly isolated operational domains.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Why Mobile Devices Differ from Desktop Forensics: The Dual-Processor Core</span>
      <p>To understand mobile forensics, an investigator must understand <strong>WHY</strong> mobile smartphones are structured with two distinct processors. On a standard PC, the main CPU manages all network adapters and operating systems. On a mobile handset, radio transmission requires millisecond-exact timing dictated by cellular standards (3GPP). A sudden CPU lag from a gaming app or video playback could disconnect an ongoing emergency call. Therefore, smartphones isolate cellular operations into two independent computing engines:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Application Processor (AP) (Q1)</span>
            <span class="statute-tag">User Computing</span>
          </div>
          <p>• <strong>Operating Environment:</strong> Executes the user-facing operating system (Android, iOS) and all user applications.<br>
          • <strong>Hardware Control:</strong> Controls the touchscreen display, camera sensors, GPU, audio rendering, and app storage.<br>
          • <strong>Forensic Scope:</strong> Hosts 95% of user-generated evidentiary data (SQLite chat databases, photos, call history, and cached credentials).</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Baseband Processor (BP) (Q1)</span>
            <span class="statute-tag">Radio Telecommunications</span>
          </div>
          <p>• <strong>Operating Environment:</strong> Runs an independent proprietary <strong>Real-Time Operating System (RTOS)</strong> (e.g., Nucleus RTOS, Qualcomm AMSS/Modem OS).<br>
          • <strong>Hardware Control:</strong> Controls the RF transceiver, antenna switches, power amplifier, and SIM card interface.<br>
          • <strong>Forensic Scope:</strong> Holds cellular registration state, base station handover logs, and communicates with the AP via serial AT commands or shared memory IPC.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Evolution of Mobile Non-Volatile Flash Storage: eMMC to UFS (Q2)</span>
      <p>Mobile devices do not utilize mechanical magnetic hard drives. They rely on surface-mounted non-volatile flash memory packages soldered directly onto the logic board. The transition in memory standards dictates forensic chip-off and acquisition capabilities:</p>
      <ul class="forensic-list">
        <li><strong>Embedded MultiMediaCard (eMMC 4.5/5.1):</strong> Legacy parallel bus architecture. Slower half-duplex communication (data can only be read OR written at one time). Pinouts (CMD, CLK, DAT0–DAT7, VCC, VCCQ) are easily tapped using In-System Programming (ISP) hardware adapters.</li>
        <li><strong>Universal Flash Storage (UFS 2.1 / 3.1 / 4.0) (Q2):</strong> Modern high-speed standard. Uses full-duplex differential serial signaling lanes (simultaneous read and write up to 4,200 MB/s). Operates using SCSI command architecture. Solder pads are microscopic Ball Grid Arrays (BGA-153, BGA-254), requiring specialized forensic sockets and high-end thermal rework stations.</li>
      </ul>
    </div>
      `
    },
    right: {
      pageNumber: 2,
      runningHead: 'CH. 1 • MOBILE BASICS: FLASH MEMORY & SECURITY CHIPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 1 (Part 1 Continued) • Flash Storage & Security Enclaves</span>
      <h2>Flash Translation Layer & Hardware Security</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Flash Translation Layer (FTL) & The Destruction of Deleted Artefacts</span>
      <p>Unlike rotating magnetic platters where deleted sectors remain physically unchanged until overwritten, NAND flash memory cannot overwrite an existing page without first erasing an entire block (comprising 128 to 256 pages). The <strong>Flash Translation Layer (FTL)</strong> manages wear-leveling and garbage collection:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">The Forensic Impact of FTL & TRIM</span>
          <span class="statute-tag">Evidence Volatility</span>
        </div>
        <p>When an Android or iOS user deletes a chat or video, the operating system issues a <strong>TRIM / discard command</strong> to the FTL. The FTL marks those physical NAND blocks as invalid. During idle periods, the internal storage controller executes autonomous <strong>Garbage Collection</strong>, erasing the raw flash cells back to binary state (0xFF). <em>Consequently, unallocated space carving on modern smartphones yields far less data than on traditional desktop HDDs!</em></p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Hardware-Based Security & Isolated Coprocessors</span>
      <p>Modern mobile devices integrate dedicated secure cryptographic microcontrollers that thwart both software exploits and direct hardware memory dumps:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Security Engine</th>
            <th>Platform</th>
            <th>Architectural Role & Forensic Consequence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Secure Enclave (SEP)</strong></td>
            <td>Apple iOS</td>
            <td>Runs isolated sepOS. Enforces hardware passcode rate-limiting and biometric template matching. Root AES keys are inaccessible even to kernel jailbreaks.</td>
          </tr>
          <tr>
            <td><strong>Titan M2 / StrongBox</strong></td>
            <td>Google Pixel</td>
            <td>Discrete RISC-V hardware chip with dedicated RAM and crypto accelerators. Protects Android Keystore keys from physical fault-injection attacks.</td>
          </tr>
          <tr>
            <td><strong>Samsung Knox Vault</strong></td>
            <td>Samsung Galaxy</td>
            <td>Tamper-resistant subsystem physically isolated from the main SoC. Houses sensitive credentials, Samsung Pay, and Knox Secure Folder.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 1 (Part 1/2) Complete.</strong> Turn page for Cellular Generations, Global Identifiers &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="0" onclick="window.openMCQForSpread(0)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q1–Q10) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 1: Part 2 - Mobile Communications, Identifiers & Network Architecture (Pages 3–4)
  {
    spreadId: 1,
    left: {
      pageNumber: 3,
      runningHead: 'CH. 1 • MOBILE COMMS: 2G TO 5G GENERATIONS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 1 • Topic 1: Mobile Communications (Part 2)</span>
      <h2>Cellular Generations: 2G, 3G, 4G LTE & 5G NR</h2>
    </div>

    <div class="intro-abstract">
      <p>Cellular communications connect mobile devices to telecommunication core networks over standardized radio air-interfaces. Understanding network architecture is essential for analyzing Call Detail Records (CDRs), tower dumps, and subscriber roaming transactions.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Evolution of Cellular Air-Interface Protocols (Q3)</span>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Generation</th>
            <th>Radio Standards & Core Technologies</th>
            <th>Switching Paradigm</th>
            <th>Forensic Security Posture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>2G (GSM / CDMA)</strong></td>
            <td>TDMA, FDMA; GPRS (packet) / EDGE; A5/1 & A5/2 stream ciphers (Q3).</td>
            <td>Circuit-Switched (Voice) & Packet-Switched (Data)</td>
            <td><strong>Vulnerable to IMSI-Catchers (Stingrays):</strong> Lacks mutual authentication; handset verifies tower, but tower does not require handset cryptographic proof.</td>
          </tr>
          <tr>
            <td><strong>3G (UMTS)</strong></td>
            <td>WCDMA, HSPA, HSPA+; Kasumi (A5/3) encryption cipher.</td>
            <td>Hybrid Circuit + Packet Core</td>
            <td>Introduced mutual authentication between handset and network, preventing basic rogue base station attacks.</td>
          </tr>
          <tr>
            <td><strong>4G (LTE / LTE-A)</strong></td>
            <td>OFDMA (Downlink), SC-FDMA (Uplink); Evolved Packet Core (EPC).</td>
            <td><strong>Pure All-IP Packet Switched</strong> (VoLTE for voice calls)</td>
            <td>Strong AES/SNOW-3G encryption over radio link. Voice calls routed as IP data packets via Session Initiation Protocol (SIP).</td>
          </tr>
          <tr>
            <td><strong>5G (NR - New Radio)</strong></td>
            <td>Sub-6 GHz & mmWave (FR1/FR2); Network Slicing; 5G Core (5GC).</td>
            <td>Service-Based All-IP Architecture</td>
            <td>Encrypted subscriber identity (SUCI concealing the IMSI over the air) to eradicate commercial IMSI-catchers.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. Core Cellular Identifiers: IMEI, IMSI, MSISDN & ICCID (Q4, Q5)</span>
      <p>A mobile connection is governed by four distinct global identifiers that link hardware, subscription, and telephony records:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">IMEI (Hardware ID) (Q4)</span>
            <span class="statute-tag">15 Decimal Digits</span>
          </div>
          <p>• <strong>Definition:</strong> International Mobile Station Equipment Identity. Identifies the physical device chassis.<br>
          • <strong>Structure:</strong> TAC (Type Allocation Code - 8 digits) + Serial Number (6 digits) + Luhn Checksum (1 digit).<br>
          • <strong>Forensic Note:</strong> Dialing <code>*#06#</code> queries the baseband modem to display the hardware IMEI.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">IMSI (Subscriber ID) (Q5)</span>
            <span class="statute-tag">Max 15 Digits</span>
          </div>
          <p>• <strong>Definition:</strong> International Mobile Subscriber Identity. Uniquely identifies the cellular subscriber account inside the SIM.<br>
          • <strong>Structure:</strong> MCC (Mobile Country Code, 3 digits) + MNC (Mobile Network Code, 2–3 digits) + MSIN (Mobile Station ID Number, 9–10 digits).</p>
        </div>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 4,
      runningHead: 'CH. 1 • CELLULAR IDENTIFIERS & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 1 (Part 2 Continued) • Network Elements & Forensics</span>
      <h2>Network Registers: HLR, VLR & Equipment Identity Register</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. MSISDN vs ICCID: Numbers That Bind the Subscriber (Q6)</span>
      <ul class="forensic-list">
        <li><strong>MSISDN (Mobile Station International Subscriber Directory Number):</strong> The actual public telephone number dialed by callers (Country Code + National Destination Code + Subscriber Number). Crucially, the MSISDN is <em>not permanently stored inside the SIM chip</em>; it is mapped to the subscriber's IMSI within the carrier's Home Location Register (HLR).</li>
        <li><strong>ICCID (Integrated Circuit Card Identifier) (Q6):</strong> The physical serial number of the SIM card itself (19 or 20 digits, beginning with <code>89</code> for telecommunications). Engraved directly onto the physical SIM plastic and stored in the SIM's master elementary file <code>EF_ICCID</code>.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">4. Cellular Core Network Elements: HLR, VLR & EIR (Q7)</span>
      <p>When analyzing mobile movement across cell towers, telecom carrier databases store dynamic routing records:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Carrier Network Registries (Q7)</span>
          <span class="statute-tag">Telecom Data</span>
        </div>
        <p>• <strong>HLR (Home Location Register):</strong> The central database containing master subscription records, active services, and current location tracking pointers for all SIM cards issued by that carrier.<br>
        • <strong>VLR (Visitor Location Register):</strong> A temporary local database maintained by the servicing Mobile Switching Center (MSC) managing roaming subscribers currently operating within that geographic area.<br>
        • <strong>EIR (Equipment Identity Register):</strong> A carrier registry tracking device IMEIs in three lists: <strong>White List</strong> (authorized handsets), <strong>Gray List</strong> (monitored handsets), and <strong>Black List</strong> (stolen or barred handsets blocked from cellular network access).</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">5. DSSSB Exam Traps: Basics & Telecommunications (Q1–Q10)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Processor Roles):</strong> The Application Processor (AP) does NOT manage cell tower handovers; radio signaling is executed exclusively by the Baseband Processor (BP) running an RTOS (Q1).<br>
        ⚠️ <strong>Trap 2 (Storage Architecture):</strong> Modern flagship phones use UFS (serial full-duplex), not legacy parallel eMMC (Q2).<br>
        ⚠️ <strong>Trap 3 (IMEI Composition):</strong> The 15th digit of an IMEI is a Luhn algorithm check digit, not a network carrier code (Q4).<br>
        ⚠️ <strong>Trap 4 (IMSI Components):</strong> IMSI consists of MCC + MNC + MSIN. The phone number dialed by people is the MSISDN (Q5, Q6).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 1: Basics of Mobile Devices &amp; Comms?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q1–Q10).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="0" onclick="window.openMCQForSpread(0)">
        Practice Topic 1 Quiz (Q1–Q10) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 2: CHALLENGES & RESOURCE CONSTRAINTS IN MOBILE FORENSICS (Spreads 2 & 3, Pages 5–8, Q11–Q20)
  // =========================================================================
  // Spread 2: Part 1 - Physical Constraints, Volatility & Triage (Pages 5–6)
  {
    spreadId: 2,
    left: {
      pageNumber: 5,
      runningHead: 'CH. 2 • MOBILE CHALLENGES: VOLATILITY & CONSTRAINTS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 2 • Topic 2: Challenges & Constraints (Part 1)</span>
      <h2>Forensic Constraints: Hardware, Battery & Volatility</h2>
    </div>

    <div class="intro-abstract">
      <p>Digital forensic investigators encounter severe physical, cryptographic, and operational constraints when seizing and preserving modern mobile devices. Unlike traditional desktop computers where pulling the AC power plug safely freezes non-volatile hard disk evidence, cutting power to a modern smartphone can permanently lock data behind hardware-enforced cryptographic barriers.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Why Mobile Devices Present Extreme Forensic Challenges</span>
      <p>Mobile forensics is inherently more complex than desktop computer forensics due to five fundamental resource and architectural constraints:</p>
      <ul class="forensic-list">
        <li><strong>Continuous Autonomous Background Activity:</strong> Smartphones are active network endpoints. Even when locked in an idle state, push notification daemons, cloud synchronizations (iCloud, Google Drive), and automated over-the-air (OTA) updates continuously overwrite internal flash logs.</li>
        <li><strong>Integrated Power Sources & Battery Depletion (Q11):</strong> Smartphones carry built-in rechargeable lithium-ion batteries. If the battery dies in custody, the device reboots into a highly secure locked state, permanently destroying all cryptographic keys cached in volatile RAM.</li>
        <li><strong>Thermal Throttling & Hardware Fragility:</strong> Modern mobile processors produce intense heat during intense data extractions. Without active bench cooling, thermal throttling can cause extraction software timeouts or physical logic board failure.</li>
        <li><strong>Proprietary Hardware Diversity:</strong> Unlike PCs with standardized x86_64 BIOS/UEFI architectures, there are over 25,000 unique Android device models featuring proprietary bootloaders, custom partition tables, and distinct system-on-chips (Qualcomm, MediaTek, Exynos, Tensor, Kirin).</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Critical Distinction: BFU vs AFU Forensic States (Q12)</span>
      <p>The forensic viability of recovering evidence hinges entirely on whether the device is seized in the <strong>Before First Unlock (BFU)</strong> state or the <strong>After First Unlock (AFU)</strong> state:</p>
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">Before First Unlock (BFU) (Q12)</span>
            <span class="statute-tag">Cold Boot State</span>
          </div>
          <p>• <strong>Device Condition:</strong> The device has been powered on or restarted, but the user has NOT entered their screen passcode even once.<br>
          • <strong>Cryptographic Status:</strong> Master user credential keys have NOT been derived. Main file system partitions remain locked.<br>
          • <strong>Accessible Evidence:</strong> Highly restricted. Only unencrypted basic system files (e.g., wallpapers, direct-boot alarms) can be extracted.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">After First Unlock (AFU) (Q12)</span>
            <span class="statute-tag">Live Memory State</span>
          </div>
          <p>• <strong>Device Condition:</strong> The user entered their passcode at least once after booting, and the phone was subsequently screen-locked.<br>
          • <strong>Cryptographic Status:</strong> Master keys (Class C in iOS, Credential Encrypted in Android) remain cached in volatile Application Processor memory.<br>
          • <strong>Accessible Evidence:</strong> Broad extraction possible using advanced commercial forensic tools (Cellebrite, GrayKey) to dump chats, emails, and photos.</p>
        </div>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 6,
      runningHead: 'CH. 2 • SEIZURE PROTOCOLS: FARADAY SHIELDING & TRIAGE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 2 (Part 1 Continued) • Seizure Standard Operating Procedures</span>
      <h2>Network Isolation & Remote Wipe Countermeasures</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Remote Wipe Threat: Find My & Enterprise MDM (Q13)</span>
      <p>The greatest immediate threat during mobile device seizure is a <strong>Remote Wipe command</strong> transmitted over cellular, Wi-Fi, or Bluetooth networks. A suspect or accomplice using Apple's <em>Find My iPhone</em> or Google's <em>Find My Device</em> can remotely trigger an instantaneous cryptographic erase, destroying Effaceable Storage keys in under 500 milliseconds.</p>
      
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Mandatory Seizure Protocol: RF Isolation (Q13, Q14)</span>
          <span class="statute-tag">Chain of Custody</span>
        </div>
        <p>To preserve digital evidence, an investigator must execute the following sequential triage protocol at the scene:</p>
        <p>1. <strong>Do NOT Power Off an AFU Device:</strong> Powering off immediately converts an AFU device into a cold BFU state, obliterating RAM keys!<br>
        2. <strong>Enable Airplane Mode (if screen is accessible):</strong> Turn on Airplane Mode and manually verify that Wi-Fi, Bluetooth, and Ultra-Wideband (UWB) are completely disabled.<br>
        3. <strong>Immediate Faraday Enclosure (Q14):</strong> If the screen is locked, place the device immediately inside a certified <strong>Faraday Bag / RF Shielding Box</strong> (providing &gt;80 dB radio attenuation across 100 kHz to 40 GHz).<br>
        4. <strong>Continuous External Power (Power Bank):</strong> Connect an external battery pack inside the Faraday bag to prevent battery exhaustion and involuntary reboot.<br>
        5. <strong>Remove the Physical SIM Card:</strong> Eject the SIM tray to eliminate cellular data connection if Faraday shielding fails.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Water-Submerged & Liquid-Damaged Device Triage (Q15)</span>
      <p>Submerged devices retrieved from crime scenes (e.g., lakes, toilets, chemical vats) require immediate physical stabilization before digital extraction:</p>
      <div class="statute-card card-teal">
        <p>⚠️ <strong>Never Connect a Wet Device to a Charger:</strong> Connecting electricity instantly causes catastrophic electrolysis and short-circuits that incinerate the Power Management Integrated Circuit (PMIC) and CPU!<br>
        • <strong>Laboratory Procedure:</strong> Disassemble chassis &rarr; disconnect battery &rarr; place motherboard into an <strong>ultrasonic bath filled with 99%+ pure Isopropyl Alcohol (IPA)</strong> to displace water and remove mineral corrosion &rarr; bake in a controlled drying oven &rarr; inspect solder pads under a microscope before powering with a bench power supply.</p>
      </div>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 2 (Part 1/2) Complete.</strong> Turn page for USB Restrictions, Biometric Timeouts &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="1" onclick="window.openMCQForSpread(1)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q11–Q20) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 3: Part 2 - USB Restrictions, Biometric Timeouts & Anti-Forensics (Pages 7–8)
  {
    spreadId: 3,
    left: {
      pageNumber: 7,
      runningHead: 'CH. 2 • HARDWARE TIMEOUTS & USB RESTRICTIONS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 2 • Topic 2: Challenges & Constraints (Part 2)</span>
      <h2>Operating System Lockouts & Anti-Forensic Safeguards</h2>
    </div>

    <div class="intro-abstract">
      <p>Both Apple and Google engineer aggressive autonomous anti-forensic safeguards directly into their operating systems. Forensic examiners must operate against strict countdown timers to avoid automated port lockouts and biometric disabling.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. USB Restricted Mode: The One-Hour Data Port Lockout (Q16)</span>
      <p>To defend against hardware passcode-cracking boxes (like early GrayKey appliances), Apple introduced <strong>USB Restricted Mode</strong> in iOS 11.4.1:</p>
      <div class="statutory-grid">
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Mechanism & Operational Trigger (Q16)</span>
            <span class="statute-tag">iOS Security</span>
          </div>
          <p>If an iPhone has not been unlocked with its passcode within the last <strong>one hour</strong>, or if a computer connection has not been authenticated, the Lightning/USB-C controller completely disables digital communication lines. The port provides power charging only; no data packets can pass.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Forensic Countermeasure</span>
            <span class="statute-tag">Triage Action</span>
          </div>
          <p>Investigators must connect an active <strong>USB keep-awake accessory / Lightning adapter</strong> before the one-hour countdown expires to keep the USB controller active, preventing the device from severing communication with forensic workstations.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Biometric Lockout Timeouts: Face ID & Touch ID (Q17)</span>
      <p>Biometric authentication (fingerprint and facial recognition) provides convenient device access, but iOS and Android enforce strict timeout rules that permanently revoke biometric unlocking in favor of the full alphanumeric passcode:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Condition</th>
            <th>iOS Policy (Secure Enclave)</th>
            <th>Android Policy (BiometricPrompt)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Inactivity Period (Q17)</strong></td>
            <td><strong>48 Hours:</strong> If device has not been unlocked in 48 hours, biometrics are disabled.</td>
            <td><strong>72 Hours</strong> (or 24–48 hours depending on OEM security policy).</td>
          </tr>
          <tr>
            <td><strong>Failed Attempts (Q17)</strong></td>
            <td><strong>5 Failed Matches:</strong> Touch ID / Face ID lock out after 5 consecutive failures.</td>
            <td><strong>5 Failed Matches:</strong> Triggers a mandatory 30-second delay or full passcode fallback.</td>
          </tr>
          <tr>
            <td><strong>Reboot / Power-On</strong></td>
            <td>Always mandates Passcode (Device enters BFU state).</td>
            <td>Always mandates Passcode / PIN (Direct Boot state).</td>
          </tr>
          <tr>
            <td><strong>Emergency SOS Trigger</strong></td>
            <td>Pressing Power + Volume buttons 5 times instantly disables biometrics.</td>
            <td>Entering 'Lockdown Mode' from power menu disables biometrics.</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 8,
      runningHead: 'CH. 2 • RESOURCE CONSTRAINTS & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 2 (Part 2 Continued) • Hardware Constraints & Exam Traps</span>
      <h2>Anti-Forensics: Exponential Delay & Hardware Erasure</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Automated Passcode Throttling & 10-Attempt Erase (Q18, Q19)</span>
      <p>When brute-forcing passcodes, examiners face mathematical impossibility enforced by hardware security coprocessors:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Hardware Exponential Backoff (Q18)</span>
          <span class="statute-tag">Rate-Limiting</span>
        </div>
        <p>• <strong>Attempts 1–4:</strong> Instant feedback, zero delay.<br>
        • <strong>Attempt 5:</strong> 1-minute enforced delay.<br>
        • <strong>Attempt 6:</strong> 5-minute enforced delay.<br>
        • <strong>Attempts 7–8:</strong> 15-minute enforced delay.<br>
        • <strong>Attempt 9+:</strong> 60-minute delay per attempt!<br>
        • <strong>10-Attempt Wipe Policy (Q19):</strong> If enabled, the 10th failed attempt commands the Secure Enclave to overwrite the <strong>Effaceable Storage (DKEK)</strong>, permanently destroying file system decryption keys.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Mobile Challenges & Constraints (Q11–Q20)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (AFU vs BFU):</strong> An AFU phone has been unlocked at least once post-boot and contains decrypted master keys in RAM; a BFU phone has never been unlocked post-boot (Q12).<br>
        ⚠️ <strong>Trap 2 (Airplane Mode vs Faraday):</strong> Toggling Airplane Mode on the lockscreen does NOT guarantee isolation because Bluetooth and Find My offline mesh can remain active; certified Faraday shielding is mandatory (Q14).<br>
        ⚠️ <strong>Trap 3 (Water Damaged Devices):</strong> Never place a wet smartphone into rice or plug in a charger; clean the logic board in an ultrasonic pure IPA bath (Q15).<br>
        ⚠️ <strong>Trap 4 (USB Restricted Mode Time):</strong> iOS USB Restricted Mode kicks in after <strong>1 hour</strong> of device lock, not 24 hours (Q16).<br>
        ⚠️ <strong>Trap 5 (Biometric Timeout):</strong> Biometric lockout occurs after <strong>48 hours</strong> of no unlock on iOS, requiring the passcode (Q17).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 2: Challenges &amp; Resource Constraints?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q11–Q20).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="1" onclick="window.openMCQForSpread(1)">
        Practice Topic 2 Quiz (Q11–Q20) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 3: TYPES OF ACQUISITIONS (Spreads 4 & 5, Pages 9–12, Q21–Q30)
  // =========================================================================
  // Spread 4: Part 1 - Four-Tiered Extraction Hierarchy (Pages 9–10)
  {
    spreadId: 4,
    left: {
      pageNumber: 9,
      runningHead: 'CH. 3 • ACQUISITIONS: FOUR-TIERED HIERARCHY',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 3 • Topic 3: Types of Acquisitions (Part 1)</span>
      <h2>The Four-Tiered Acquisition Hierarchy</h2>
    </div>

    <div class="intro-abstract">
      <p>Forensic acquisition is the disciplined process of extracting digital data from mobile physical hardware while maintaining evidentiary integrity and chain of custody. Digital evidence acquisition follows an established four-tiered hierarchy characterized by increasing evidentiary depth, technical complexity, and physical invasiveness.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Four Levels of Mobile Data Acquisition (Q21)</span>
      <p>A digital forensic examiner chooses an acquisition methodology based on device state (locked vs unlocked), hardware model, operating system version, and legal warrant scope:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Level 1: Manual Acquisition (Q21)</span>
            <span class="statute-tag">Visual Inspection</span>
          </div>
          <p>• <strong>Method:</strong> Operating the physical device interface manually (touchscreen, keypad) and visually capturing evidence via specialized overhead high-resolution cameras or video recording.<br>
          • <strong>Use Case:</strong> Obsolete proprietary feature phones lacking data ports, damaged USB connectors, or when software tools lack extraction support.<br>
          • <strong>Limitation:</strong> Extracts only what is visible on the GUI. Cannot recover deleted data, hidden metadata, or system log files.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Level 2: Logical Acquisition (Q21)</span>
            <span class="statute-tag">API & Backup Dump</span>
          </div>
          <p>• <strong>Method:</strong> Communicating with the mobile OS using standard manufacturer sync protocols, Android Debug Bridge (<code>adb backup</code>), or Apple Mobile Backup services.<br>
          • <strong>Data Extracted:</strong> Active contacts, call logs, SMS, photos, and app data allowed by the OS backup manifest.<br>
          • <strong>Limitation:</strong> Excludes protected private app databases (where <code>allowBackup="false"</code>), system logs, and deleted space.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Advanced Extraction: File System vs Physical (Q22)</span>
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">Level 3: File System Acquisition (Q22)</span>
            <span class="statute-tag">Advanced Logical</span>
          </div>
          <p>• <strong>Method:</strong> Utilizing root privileges, temporary kernel exploit agents, or jailbreaks to dump the live, mounted file system structure.<br>
          • <strong>Data Extracted:</strong> Full directory tree (<code>/private/var</code> on iOS, <code>/data</code> on Android), private app databases (WhatsApp, Signal), system logs (logcat, Unified Logs), and SQLite WAL files.<br>
          • <strong>Limitation:</strong> Does not capture raw unallocated sectors or deleted files purged from database freelists.</p>
        </div>
        <div class="statute-card card-cyan">
          <div class="statute-header">
            <span class="statute-section">Level 4: Physical Acquisition (Q22)</span>
            <span class="statute-tag">Bit-by-Bit Raw Dump</span>
          </div>
          <p>• <strong>Method:</strong> Performing a low-level, bit-stream bit-by-bit physical image of the non-volatile flash storage memory.<br>
          • <strong>Data Extracted:</strong> Complete binary contents of all partitions, including unallocated space, file slack, and deleted records.<br>
          • <strong>Limitation:</strong> Extremely difficult on modern devices due to hardware-backed File-Based Encryption (FBE).</p>
        </div>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 10,
      runningHead: 'CH. 3 • ACQUISITION PRECONDITIONS & PAIRING',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 3 (Part 1 Continued) • Technical Preconditions</span>
      <h2>Forensic Preconditions: USB Debugging & iOS Pairing Records</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Technical Preconditions for Logical Extractions (Q23, Q24)</span>
      <p>A computer cannot simply connect to a mobile phone and siphon off data without fulfilling strict OS security handshakes:</p>
      
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Android Precondition: USB Debugging (Q23)</span>
          <span class="statute-tag">ADB Handshake</span>
        </div>
        <p>• Requires enabling Developer Options (tapping 'Build Number' 7 times in Settings).<br>
        • <strong>RSA Host Key Authorization:</strong> When connected, Android displays a prompt: <em>"Allow USB debugging? The computer's RSA key fingerprint is..."</em> The screen must be unlocked to accept this prompt, creating an entry in <code>/data/misc/adb/adb_keys</code>.</p>
      </div>

      <div class="statute-card card-purple" style="margin-top: 10px;">
        <div class="statute-header">
          <span class="statute-section">iOS Precondition: Trust Relationship & Lockdown Records (Q24)</span>
          <span class="statute-tag">Pairing Certificates</span>
        </div>
        <p>• Connecting an iPhone to a workstation triggers: <em>"Trust This Computer?"</em> Mandates typing the device passcode.<br>
        • <strong>Lockdown Pairing Records:</strong> Upon trust, a cryptographically signed plist (Pairing Certificate) is generated and saved on the host computer:<br>
        &nbsp;&nbsp;• <strong>macOS:</strong> <code>/var/db/lockdown/[Device_UDID].plist</code><br>
        &nbsp;&nbsp;• <strong>Windows:</strong> <code>%ProgramData%\\Apple\\Lockdown\\[Device_UDID].plist</code><br>
        • <strong>Forensic Goldmine:</strong> If investigators seize a suspect's desktop PC, extracting the lockdown plist allows a forensic workstation to extract an unlocked iPhone without knowing its passcode!</p>
      </div>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 3 (Part 1/2) Complete.</strong> Turn page for Hash Verification, SIM Forensics &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="2" onclick="window.openMCQForSpread(2)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q21–Q30) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 5: Part 2 - Hash Verification, SIM Card Forensics & Exam Traps (Pages 11–12)
  {
    spreadId: 5,
    left: {
      pageNumber: 11,
      runningHead: 'CH. 3 • HASH INTEGRITY & SIM FORENSICS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 3 • Topic 3: Types of Acquisitions (Part 2)</span>
      <h2>Forensic Integrity & Subscriber Identity Module (SIM)</h2>
    </div>

    <div class="intro-abstract">
      <p>Forensic integrity requires cryptographic verification of acquired evidence. In mobile examinations, write-blocking methodologies and SIM card extraction standards diverge significantly from hard drive computer forensics.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Write-Blocking Limitations in Mobile Forensics (Q25)</span>
      <p>In traditional computer forensics, physical hardware write-blockers (Tableau, WiebeTech) are placed between the evidence hard drive and the workstation to guarantee that zero bytes are transmitted to the evidence disk. <strong>In mobile forensics, traditional hardware write-blockers cannot be used over USB!</strong></p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Why Hardware Write-Blockers Fail Over USB (Q25)</span>
          <span class="statute-tag">Bidirectional Comm</span>
        </div>
        <p>USB communication between a phone and a workstation is inherently bidirectional. The phone operates as an active USB client or host, requiring dynamic query handshakes, token transfers, and power negations. <em>Consequently, forensic software must enforce logical read-only commands, and any software agent pushed to the device must be thoroughly documented in court testimony.</em></p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Cryptographic Hash Verification (MD5 / SHA-256) (Q26)</span>
      <p>To establish chain of custody under Indian Evidence Act Sec 65B (and BSA Sec 63), extracted evidence files must be hashed immediately upon generation:</p>
      <ul class="forensic-list">
        <li><strong>Physical Extractions:</strong> The raw image file (<code>.bin</code>, <code>.dd</code>, <code>.raw</code>) is hashed with SHA-256 immediately upon acquisition. The hash must match throughout analysis.</li>
        <li><strong>Logical & File System Extractions:</strong> Because active phones modify SQLite WAL journals and temporary logs while running, hashing the live phone flash memory is impossible. Instead, individual extracted files are hashed inside the forensic archive (e.g., Cellebrite <code>.ufd</code> / <code>.dar</code> or standard <code>.tar</code>).</li>
      </ul>
    </div>
      `
    },
    right: {
      pageNumber: 12,
      runningHead: 'CH. 3 • SIM ELEMENTARY FILES & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 3 (Part 2 Continued) • SIM File System Architecture</span>
      <h2>Subscriber Identity Module (SIM) Elementary Files</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. SIM Card File System Architecture: MF, DF & EF (Q27, Q28)</span>
      <p>A SIM card is an independent smart card containing its own CPU, ROM, RAM, and EEPROM operating under ISO/IEC 7816 specifications. Its internal hierarchical file system consists of:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>File Structure</th>
            <th>Designation</th>
            <th>Forensic Description & Evidentiary Significance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Master File (MF)</strong></td>
            <td>Root Directory (<code>3F00</code>)</td>
            <td>The root of the smart card file system, equivalent to <code>/</code> in Unix.</td>
          </tr>
          <tr>
            <td><strong>Dedicated Files (DF)</strong></td>
            <td>Sub-Directories</td>
            <td>E.g., <code>DF_GSM</code> (<code>7F20</code>) or <code>DF_TELECOM</code> (<code>7F10</code>), grouping telecommunication application files.</td>
          </tr>
          <tr>
            <td><strong>EF_ICCID (Q27)</strong></td>
            <td>Elementary File (<code>2FE2</code>)</td>
            <td>Stores the 19/20-digit unique serial number of the SIM card.</td>
          </tr>
          <tr>
            <td><strong>EF_IMSI (Q27)</strong></td>
            <td>Elementary File (<code>6F07</code>)</td>
            <td>Stores the subscriber's International Mobile Subscriber Identity.</td>
          </tr>
          <tr>
            <td><strong>EF_SMS (Q28)</strong></td>
            <td>Elementary File (<code>6F3C</code>)</td>
            <td>Contains stored SMS text messages, timestamps, and delivery status flags.</td>
          </tr>
          <tr>
            <td><strong>EF_ADN (Q28)</strong></td>
            <td>Elementary File (<code>6F3A</code>)</td>
            <td>Abbreviated Dialing Numbers (SIM contact phonebook).</td>
          </tr>
          <tr>
            <td><strong>EF_LOCI (Q28)</strong></td>
            <td>Elementary File (<code>6F7E</code>)</td>
            <td>Location Information: Contains the Last Registered Location Area Code (LAC) and Cell ID.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Types of Acquisitions (Q21–Q30)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Physical vs File System):</strong> File system acquisition extracts all mounted directories and databases but CANNOT carve unallocated space; physical acquisition dumps raw flash bits including unallocated space (Q21, Q22).<br>
        ⚠️ <strong>Trap 2 (Lockdown Plist):</strong> An iOS lockdown pairing record plist on a suspect's computer allows full logical backup extraction WITHOUT entering the passcode (Q24).<br>
        ⚠️ <strong>Trap 3 (Write-Blockers):</strong> Standard ATA/SATA hardware write-blockers cannot be connected to smartphones over USB (Q25).<br>
        ⚠️ <strong>Trap 4 (SIM Location File):</strong> The Elementary File storing the last registered cell tower and Location Area Code on a SIM card is <strong>EF_LOCI</strong> (Q28).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 3: Types of Acquisitions?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q21–Q30).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="2" onclick="window.openMCQForSpread(2)">
        Practice Topic 3 Quiz (Q21–Q30) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 4: LOW-LEVEL & HARDWARE ACQUISITIONS (Spreads 6 & 7, Pages 13–16, Q31–Q40)
  // =========================================================================
  // Spread 6: Part 1 - Bootloader Exploits & Emergency Download Modes (Pages 13–14)
  {
    spreadId: 6,
    left: {
      pageNumber: 13,
      runningHead: 'CH. 4 • LOW-LEVEL ACQUISITION: EDL & BROM MODES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 4 • Topic 4: Hardware Acquisitions (Part 1)</span>
      <h2>Low-Level Acquisition: Qualcomm EDL & MediaTek BROM</h2>
    </div>

    <div class="intro-abstract">
      <p>When software extraction fails due to screen lockouts or damaged operating system kernels, forensic examiners leverage low-level hardware interfaces executed by the Application Processor's internal Primary Bootloader (BootROM) before the operating system initializes.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Qualcomm Emergency Download (EDL) Mode (Q31)</span>
      <p>Qualcomm Snapdragon chipsets feature an emergency recovery mode embedded directly in the silicon Primary Bootloader (PBL). Known as <strong>EDL Mode (Qualcomm HS-USB QDLoader 9008)</strong>:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Entry Mechanism (Q31)</span>
            <span class="statute-tag">Hardware Trigger</span>
          </div>
          <p>• Triggered by shorting physical <strong>EDL test points</strong> on the motherboard to ground while connecting USB power, or using a specialized 9008 deep-flash USB cable (shorting D+ to GND).<br>
          • The device enumerates as a USB COM port: <code>Qualcomm HS-USB QDLoader 9008</code>.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Sahara & Firehose Protocols (Q32)</span>
            <span class="statute-tag">Programmer Loader</span>
          </div>
          <p>• <strong>Sahara Protocol:</strong> Used to negotiate initialization parameters and upload a signed binary programmer (known as an <strong>ELF Firehose programmer</strong>, e.g., <code>prog_emmc_firehose_*.mbn</code>) into AP RAM.<br>
          • <strong>Firehose Protocol:</strong> Uses XML commands over USB to read and write raw flash memory partitions directly, bypassing the Android OS and lockscreen completely!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. MediaTek BootROM (BROM) Mode & Preloader Exploits (Q33)</span>
      <p>MediaTek (MTK) System-on-Chips utilize an architectural sequence consisting of <strong>BROM (BootROM) &rarr; Preloader &rarr; LK (Little Kernel) &rarr; Android Boot</strong>:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">MediaTek BROM SLA/DAA Bypasses (Q33)</span>
          <span class="statute-tag">Hardware Exploit</span>
        </div>
        <p>• In stock configurations, MTK BROM mandates Serial Link Authentication (SLA) and Download Agent Authentication (DAA) using cryptographic signatures.<br>
        • <strong>The Kamakiri / MTK Exploit:</strong> Vulnerabilities in the BROM USB control transfer handler allow an attacker to send an invalid USB request that triggers a stack buffer overflow. This disables signature checks, allowing custom <strong>Download Agents (DA)</strong> to be pushed to extract raw flash partitions.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 14,
      runningHead: 'CH. 4 • JTAG BOUNDARY-SCAN FORENSICS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 4 (Part 1 Continued) • Micro-Probing & JTAG Interfaces</span>
      <h2>Joint Test Action Group (JTAG) Boundary-Scan</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Joint Test Action Group (JTAG / IEEE 1149.1) Forensics (Q34, Q35)</span>
      <p>Standardized by the IEEE 1149.1 working group, JTAG is a dedicated hardware interface originally designed for verifying circuit board manufacturing integrity. In digital forensics, JTAG grants direct access to the processor's internal registers and connected memory buses without executing the device's installed firmware.</p>
      
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">The 5 Core JTAG Test Access Port (TAP) Signals (Q34)</span>
          <span class="statute-tag">Hardware Pinouts</span>
        </div>
        <p>To establish a JTAG extraction, an examiner must identify and solder micro-wires to five specific test pads on the phone PCB:</p>
        <ul class="forensic-list">
          <li><strong>TDI (Test Data In):</strong> Serial input line delivering test instructions and data into the processor's boundary-scan register.</li>
          <li><strong>TDO (Test Data Out):</strong> Serial output line streaming raw data out of internal registers and flash memory.</li>
          <li><strong>TCK (Test Clock):</strong> Synchronizes serial data transfer across the TAP controller state machine.</li>
          <li><strong>TMS (Test Mode Select):</strong> Controls TAP state machine transitions (Capture, Shift, Update).</li>
          <li><strong>TRST (Test Reset - Optional):</strong> Asynchronous hardware reset for the TAP controller.</li>
          <li><strong>GND & VREF:</strong> Ground reference and operating voltage sensing (typically 1.8V).</li>
        </ul>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. JTAG Forensic Limitations on Modern Devices (Q35)</span>
      <p>While JTAG was dominant in feature phones and early Android handsets, modern smartphone forensics rarely succeeds with JTAG because:</p>
      <ul class="forensic-list">
        <li><strong>Physical Fuses:</strong> OEMs permanently blow security eFuses during manufacturing, disabling JTAG TAP ports.</li>
        <li><strong>Data Transfer Speeds:</strong> JTAG serial speeds are slow (typically 1–5 MB/minute). Reading a 256 GB UFS chip over JTAG would take months!</li>
      </ul>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 4 (Part 1/2) Complete.</strong> Turn page for In-System Programming, Chip-Off &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="3" onclick="window.openMCQForSpread(3)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q31–Q40) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 7: Part 2 - ISP Micro-soldering, Chip-Off & Exam Traps (Pages 15–16)
  {
    spreadId: 7,
    left: {
      pageNumber: 15,
      runningHead: 'CH. 4 • HARDWARE ACQUISITIONS: ISP & CHIP-OFF',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 4 • Topic 4: Hardware Acquisitions (Part 2)</span>
      <h2>In-System Programming (ISP) & Chip-Off Desoldering</h2>
    </div>

    <div class="intro-abstract">
      <p>When bootloader exploits and JTAG boundary-scan are blocked, examiners turn to hardware-level memory extraction: In-System Programming (ISP) micro-soldering and destructive Chip-Off Ball Grid Array (BGA) desoldering.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. In-System Programming (ISP) Forensics (Q36)</span>
      <p>In-System Programming (ISP) bypasses the Application Processor completely by soldering directly to the passive copper traces that connect the eMMC or UFS flash memory chip to the motherboard:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">ISP Micro-Soldering Pinouts (Q36)</span>
            <span class="statute-tag">Hardware Tapping</span>
          </div>
          <p>An examiner uses high-magnification stereomicroscopes to solder enameled copper jumper wires (0.02 mm thickness) to microscopic test pads:<br>
          • <strong>CMD:</strong> Command/Response line.<br>
          • <strong>CLK:</strong> Clock line driving bus frequency.<br>
          • <strong>DAT0:</strong> Data line (1-bit mode, or DAT0–DAT3 for 4-bit mode).<br>
          • <strong>VCC & VCCQ:</strong> Core memory (3.3V) and I/O buffer (1.8V) power lines.<br>
          • <strong>GND:</strong> Ground reference.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Forensic Advantage of ISP</span>
            <span class="statute-tag">Non-Destructive</span>
          </div>
          <p>Unlike Chip-Off, ISP does not require desoldering the memory chip from the motherboard, significantly lowering the risk of thermal damage to the silicon die. The phone remains physically intact and can often be restored to running condition after testing.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Chip-Off Forensics: Physical Desoldering & Thermal Profiling (Q37)</span>
      <p>Chip-Off is the ultimate method of physical extraction, reserved for severely shattered, crushed, or burnt mobile handsets where the motherboard PCB is broken:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Thermal Rework Standard Operating Procedure (Q37)</span>
          <span class="statute-tag">Physical Extraction</span>
        </div>
        <p>1. <strong>Preheating:</strong> The logic board is placed on an infrared preheating plate (80°C–100°C) to prevent motherboard warping.<br>
        2. <strong>Hot Air Rework:</strong> Hot air at precisely <strong>350°C to 380°C</strong> is applied to reflow the lead-free BGA solder balls (melting point ~217°C). Excessive heat burns the NAND flash cells, permanently destroying evidence!<br>
        3. <strong>Reballing & Socketing:</strong> After removal, flux and residual solder are cleaned using copper solder wick. The BGA package (BGA-153, BGA-162, BGA-221, BGA-254) is inserted into a specialized high-speed hardware reader socket (e.g., UP-828, EasyJTAG Plus) to dump the raw binary data.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 16,
      runningHead: 'CH. 4 • CHIP-OFF LIMITATIONS & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 4 (Part 2 Continued) • Modern Cryptographic Blockers</span>
      <h2>The Demise of Chip-Off: Hardware-Backed FBE</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Why Modern Chip-Off Yields Zero Evidentiary Value (Q38)</span>
      <p>Historically, Chip-Off was the gold standard for recovering deleted data. On modern smartphones (Android 10+ and all iPhones), <strong>Chip-Off physical acquisition yields raw encrypted ciphertext that is mathematically impossible to decrypt!</strong></p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">The Cryptographic Dead End (Q38)</span>
          <span class="statute-tag">Hardware Encryption</span>
        </div>
        <p>Under modern <strong>File-Based Encryption (FBE)</strong>, every file is encrypted with an independent AES-256 key. These keys are derived from: (1) The user's screen lock PIN/passcode, AND (2) A hardware secret permanently fused inside the silicon of the <strong>SoC's Secure Enclave / Titan M2 chip</strong>. When the NAND chip is physically desoldered and read in an external programmer, the hardware cryptographic chip is separated. Without the SoC's hardware key, the extracted <code>.bin</code> file consists entirely of high-entropy pseudorandom noise.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Hardware & Low-Level Acquisitions (Q31–Q40)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (EDL Mode Device Name):</strong> Qualcomm Emergency Download mode enumerates as <code>Qualcomm HS-USB QDLoader 9008</code> (Q31).<br>
        ⚠️ <strong>Trap 2 (Qualcomm Protocols):</strong> Sahara handles initial programmer injection; Firehose handles the actual XML-based partition read/write operations (Q32).<br>
        ⚠️ <strong>Trap 3 (JTAG Pinouts):</strong> The five standard JTAG boundary-scan signals are TDI, TDO, TCK, TMS, and TRST (Q34).<br>
        ⚠️ <strong>Trap 4 (ISP vs Chip-Off):</strong> ISP taps into memory bus traces without removing the chip; Chip-Off physically desolders the BGA chip (Q36, Q37).<br>
        ⚠️ <strong>Trap 5 (Chip-Off Decryption):</strong> Chip-off on an FBE-encrypted smartphone cannot be decrypted offline because the hardware master key is locked inside the Application Processor's secure coprocessor (Q38).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 4: Hardware &amp; Low-Level Acquisitions?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q31–Q40).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="3" onclick="window.openMCQForSpread(3)">
        Practice Topic 4 Quiz (Q31–Q40) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 5: ROOTING & SYSTEM PRIVILEGES (Spreads 8 & 9, Pages 17–20, Q41–Q50)
  // =========================================================================
  // Spread 8: Part 1 - Root Architecture, Su Binary vs Systemless Magisk (Pages 17–18)
  {
    spreadId: 8,
    left: {
      pageNumber: 17,
      runningHead: 'CH. 5 • ROOTING: PRIVILEGES & MECHANISMS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 5 • Topic 5: Rooting & System Privileges (Part 1)</span>
      <h2>Android Privilege Escalation: Root UID 0 & Magisk</h2>
    </div>

    <div class="intro-abstract">
      <p>Under standard operational parameters, Android's security model strictly restricts applications to unprivileged sandboxes. <strong>Rooting</strong> is the deliberate process of escalating user privileges to the Linux superuser account (UID 0), granting unrestricted access to file systems, memory spaces, and hardware controllers.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Android Security Architecture: The Sandbox & UID Isolation (Q41)</span>
      <p>In standard desktop Linux, multiple users share common software binaries. In Android, the architecture is inverted: each installed application is assigned a unique, dedicated Linux User Identifier (UID, typically <code>u0_a100</code> to <code>u0_a999</code>). Under Android's application sandbox:</p>
      <ul class="forensic-list">
        <li><strong>Sandbox Isolation:</strong> Application A (UID 10045) cannot read, write, or inspect Application B's private directory (<code>/data/data/com.whatsapp/</code>, UID 10082).</li>
        <li><strong>Superuser (Root - UID 0) (Q41):</strong> In the POSIX standard, User ID 0 (root) bypasses all discretionary file system access controls (DAC). Root can read every app directory, dump live RAM, and extract encrypted database keys.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. Evolution of Rooting Mechanisms: Su Binary vs Systemless Magisk (Q42, Q43)</span>
      <p>How root privileges are obtained has evolved dramatically due to Google's cryptographic verification defenses:</p>
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">Legacy Root: Su Binary Injection (Q42)</span>
            <span class="statute-tag">System Partition Edit</span>
          </div>
          <p>• <strong>Method:</strong> Remounting <code>/system</code> as read-write and copying a setuid superuser binary (<code>su</code>) into <code>/system/bin/</code> or <code>/system/xbin/</code>.<br>
          • <strong>Forensic Detection:</strong> Easily detected by checking for the existence of the <code>su</code> binary or querying <code>which su</code> via ADB.<br>
          • <strong>Fatal Weakness:</strong> Breaks Google SafetyNet / Play Integrity and trips Android Verified Boot (AVB).</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Modern Root: Systemless Magisk (Q43)</span>
            <span class="statute-tag">Boot Image Patching</span>
          </div>
          <p>• <strong>Method:</strong> Leaves the read-only <code>/system</code> partition completely untouched! Instead, it patches the <code>boot.img</code> (ramdisk) to inject an init daemon.<br>
          • <strong>OverlayFS & Magic Mount:</strong> Injects modified files using bind-mounts in RAM.<br>
          • <strong>Zygisk:</strong> Runs code directly inside the Android Zygote process, allowing modules to intercept system calls while hiding root from banking apps.</p>
        </div>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 18,
      runningHead: 'CH. 5 • VERIFIED BOOT & DM-VERITY INTEGRITY',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 5 (Part 1 Continued) • Cryptographic Defenses</span>
      <h2>Android Verified Boot (AVB) & dm-verity</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Android Verified Boot (AVB 2.0) & dm-verity (Q44)</span>
      <p>To defend against unauthorized rooting and persistent malware, Android incorporates <strong>dm-verity (device-mapper verity)</strong>, a transparent kernel integrity subsystem:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">The Cryptographic Merkle Hash Tree (Q44)</span>
          <span class="statute-tag">Integrity Check</span>
        </div>
        <p>• <strong>Structure:</strong> Every 4096-byte block of the <code>/system</code> and <code>/vendor</code> partitions is hashed using SHA-256 into a hierarchical <strong>Merkle tree</strong>.<br>
        • <strong>Root Hash Validation:</strong> The apex root hash of the tree is signed with the OEM's private key and verified by the bootloader during boot.<br>
        • <strong>Runtime Verification:</strong> When the kernel reads any block from flash, it computes the block hash on-the-fly and compares it against the Merkle tree. <em>If an investigator or hacker modifies even a single byte on the system partition, dm-verity detects the mismatch, causing an immediate kernel panic and boot loop!</em></p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Bootloader States: Locked vs Unlocked (Q45)</span>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>State</th>
            <th>Digital Signature Check</th>
            <th>Forensic Boot Capability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Locked Bootloader</strong></td>
            <td>Strictly enforced. Rejects custom recovery images (TWRP) and modified kernels.</td>
            <td>Zero custom code execution. Extractions restricted to standard logical backups or zero-day bootloader exploits.</td>
          </tr>
          <tr>
            <td><strong>Unlocked Bootloader</strong></td>
            <td>Disabled. Accepts custom boot images (<code>fastboot boot recovery.img</code>).</td>
            <td>Allows tether-booting a forensic live recovery image without touching system flash memory.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 5 (Part 1/2) Complete.</strong> Turn page for Samsung Knox eFuse, Wiping Risks &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="4" onclick="window.openMCQForSpread(4)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q41–Q50) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 9: Part 2 - Samsung Knox eFuse, Factory Wipe Risks & Evidence Admissibility (Pages 19–20)
  {
    spreadId: 9,
    left: {
      pageNumber: 19,
      runningHead: 'CH. 5 • KNOX EFUSE & BOOTLOADER WIPE POLICIES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 5 • Topic 5: Rooting & System Privileges (Part 2)</span>
      <h2>Hardware eFuses & Mandatory Userdata Wiping</h2>
    </div>

    <div class="intro-abstract">
      <p>Attempting to root an evidentiary smartphone in an active criminal investigation introduces catastrophic legal and physical risks. Unlocking bootloaders and tripping hardware security fuses can instantly destroy digital evidence.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Mandatory Cryptographic Wipe on Bootloader Unlock (Q46)</span>
      <p>A fatal trap for inexperienced digital forensic examiners is attempting to execute <code>fastboot oem unlock</code> or <code>fastboot flashing unlock</code> on an evidence phone:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">The Mandatory Factory Reset Mechanism (Q46)</span>
          <span class="statute-tag">Data Destruction</span>
        </div>
        <p>By Android security compliance rules, executing a bootloader unlock command automatically and irreversibly commands the storage controller to <strong>wipe the entire <code>/data</code> (userdata) partition</strong>! The device immediately performs a cryptographic erase of master File-Based Encryption keys. <em>Executing this command permanently obliterates all user evidence, completely destroying the forensic case!</em></p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Samsung Knox Warranty Bit: The Irreversible eFuse (Q47)</span>
      <p>Samsung devices incorporate physical hardware microscopic fuses called <strong>eFuses</strong> integrated directly onto the Application Processor die:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Knox Warranty Bit: Status 0x0 vs 0x1 (Q47)</span>
          <span class="statute-tag">Physical Hardware Fuse</span>
        </div>
        <p>• <strong>Factory State:</strong> The Knox bit is unblown: <code>0x0</code>.<br>
        • <strong>Tripped State:</strong> If a non-Samsung bootloader or unauthorized kernel image is flashed, the processor physically burns the eFuse via an electrical micro-overvoltage, permanently setting the flag to <code>0x1</code>.<br>
        • <strong>Irreversible Consequence:</strong> The eFuse is physical silicon; it <em>cannot be reset by software</em>. Tripping Knox irrevocably disables Samsung Knox Vault, Secure Folder, and Samsung Pay forever, permanently locking any enterprise or hidden evidence contained inside.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 20,
      runningHead: 'CH. 5 • EVIDENTIARY INTEGRITY & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 5 (Part 2 Continued) • Legal Chain of Custody</span>
      <h2>Evidentiary Admissibility: Live Rooting vs Forensic Integrity</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Chain of Custody & Court Admissibility Risks (Q48)</span>
      <p>Under Indian Evidence Act Sec 65B and Bharatiya Sakshya Adhiniyam (BSA 2024) Sec 63, the defense will fiercely challenge digital evidence if forensic examiners actively rooted the device:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">The Forensic Contamination Dilemma (Q48)</span>
          <span class="statute-tag">Court Defense</span>
        </div>
        <p>• Rooting an active device modifies system binaries, injects files into RAM and flash, and alters file modification timestamps.<br>
        • Defense attorneys can argue that the root exploit altered the integrity of SQLite chat databases or planted fabricated evidence.<br>
        • <strong>Forensic Best Practice:</strong> Never apply persistent public roots (like Magisk or KingoRoot) to evidentiary phones. Modern forensic workstations (Cellebrite, Oxygen) use <strong>proprietary in-memory extraction agents</strong> that run temporarily in volatile RAM without flashing system partitions.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Rooting & Privileges (Q41–Q50)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Root UID):</strong> The root superuser in Android/Linux is strictly User ID 0 (UID 0) (Q41).<br>
        ⚠️ <strong>Trap 2 (Magisk Mechanism):</strong> Magisk does NOT modify <code>/system</code>; it modifies the boot ramdisk (<code>boot.img</code>) and injects files via Magic Mount (OverlayFS) (Q43).<br>
        ⚠️ <strong>Trap 3 (dm-verity):</strong> Modifying even 1 byte of the system partition triggers a kernel panic caused by dm-verity's cryptographic Merkle tree (Q44).<br>
        ⚠️ <strong>Trap 4 (Fastboot Unlock):</strong> Running <code>fastboot oem unlock</code> wipes the entire userdata partition; it does not preserve evidence (Q46).<br>
        ⚠️ <strong>Trap 5 (Samsung Knox Bit):</strong> The Samsung Knox Warranty Bit is a physical hardware eFuse (changing from <code>0x0</code> to <code>0x1</code>) that cannot be reversed by software (Q47).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 5: Rooting &amp; System Privileges?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q41–Q50).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="4" onclick="window.openMCQForSpread(4)">
        Practice Topic 5 Quiz (Q41–Q50) &rarr;
      </button>
    </div>
      `
    }
  }
];

