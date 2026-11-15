// Book 4 MCQs Part 4: Topics 16–20 (Q151–Q200)
// High-yield DSSSB Cyber Forensic questions

module.exports = [
  // =========================================================================
  // TOPIC 16: IOS APP PERMISSIONS & LOGGING IN IOS (Q151–Q160)
  // =========================================================================
  {
    id: 151,
    topic: "iOS Permission Strings (Info.plist)",
    question: "In iOS app development and forensics, where must an application declare its justification strings (e.g. `NSCameraUsageDescription`, `NSLocationWhenInUseUsageDescription`) to request access to privacy-sensitive hardware?",
    options: [
      "In the application's root `Info.plist` file within its bundle container",
      "In the Darwin kernel boot arguments file `/etc/boot.conf`",
      "In the cellular carrier's SIM elementary file",
      "In the system firmware ROM"
    ],
    answer: 0,
    explanation: "Apple mandates that any app accessing sensitive resources (camera, microphone, location, photo library) must declare purpose strings in its bundle's `Info.plist` (e.g., `NSCameraUsageDescription`). If these keys are missing, iOS immediately terminates the app upon requesting access."
  },
  {
    id: 152,
    topic: "iOS TCC Framework & TCC.db",
    question: "Which central operating system framework in iOS manages user privacy consent records, and what database file records these granted permissions?",
    options: [
      "Transparency, Consent, and Control (TCC) framework, stored in SQLite database `TCC.db`",
      "Android Security Manager, stored in `permissions.xml`",
      "Windows User Account Control (UAC), stored in `SAM.hiv`",
      "Linux AppArmor, stored in `audit.log`"
    ],
    answer: 0,
    explanation: "Apple's Transparency, Consent, and Control (TCC) framework regulates access to sensitive privacy subsystems. Granted, denied, and prompted permissions are stored in SQLite databases named `TCC.db` (located at `/private/var/mobile/Library/TCC/TCC.db` and `/Library/Application Support/com.apple.TCC/TCC.db`)."
  },
  {
    id: 153,
    topic: "TCC.db Forensic Value",
    question: "What evidentiary information can a forensic investigator extract from the `access` table within an iOS `TCC.db` database?",
    options: [
      "The app service requested (e.g. `kTCCServiceCamera`), bundle ID, client authorization status (allowed/denied), prompt count, and Unix timestamp of last access",
      "The plaintext credit card numbers entered by the user",
      "The raw decrypted photos taken by the camera",
      "The source code of the application"
    ],
    answer: 0,
    explanation: "The `access` table in `TCC.db` provides an audit trail: which services were requested (camera, microphone, contacts, location), whether the user allowed or denied the request (`allowed` boolean), and timestamps of when permissions were modified or last utilized."
  },
  {
    id: 154,
    topic: "iOS Unified Logging System (tracev3)",
    question: "Since iOS 10, what is the architecture and file format of the Apple Unified Logging System (`os_log`)?",
    options: [
      "High-performance memory buffers that persist compressed binary log files with the `.tracev3` extension located in `/private/var/db/diagnostics/`",
      "Plain human-readable text files stored in `/var/log/syslog`",
      "XML spreadsheets stored in `/System/Library/Logs/`",
      "Encrypted MP3 audio recordings stored in `/tmp/`"
    ],
    answer: 0,
    explanation: "The Apple Unified Logging System (`os_log`) captures system and app diagnostic events into proprietary compressed binary log files with the `.tracev3` extension, stored under `/private/var/db/diagnostics/` and `/private/var/db/uuidtext/`."
  },
  {
    id: 155,
    topic: "Extracting Unified Logs (log collect)",
    question: "Which command or utility is utilized on macOS / jailbroken iOS to collect and archive all Unified Logs into a single inspectable `.logarchive` bundle?",
    options: [
      "`log collect --output <filename.logarchive>`",
      "`cat /dev/klog > syslog.txt`",
      "`dd if=/dev/disk0s1 of=logs.raw`",
      "`tcpdump -i any -w trace.pcap`"
    ],
    answer: 0,
    explanation: "The command `log collect --output <filename.logarchive>` gathers tracev3 files and companion UUID string lookup tables from `/private/var/db/` into a standardized `.logarchive` directory bundle, which can then be parsed using Apple Console or open-source tools."
  },
  {
    id: 156,
    topic: "Apple Sysdiagnose Key Combination",
    question: "On an unlocked, live iPhone, how can an investigator trigger an Apple `sysdiagnose` to generate a comprehensive system state dump without specialized commercial hardware?",
    options: [
      "Simultaneously pressing and holding both Volume Up and Volume Down buttons together with the Power/Side button for 1 to 1.5 seconds until a short vibration is felt",
      "Pressing the Home button 10 times in rapid succession",
      "Dialing `*#06#` on the phone keypad",
      "Placing the phone inside a microwave for 3 seconds"
    ],
    answer: 0,
    explanation: "A `sysdiagnose` captures a massive diagnostic snapshot (process listings, task memory, network state, Wi-Fi logs, disk metrics). On modern iPhones, holding Volume Up + Volume Down + Side Button for 1–1.5 seconds triggers the dump, which is archived under `/private/var/mobile/Library/Logs/CrashReporter/DiagnosticLogs/sysdiagnose/`."
  },
  {
    id: 157,
    topic: "iOS Crash Logs (.ips)",
    question: "What forensic artefacts are recorded in iOS crash reports with the `.ips` extension found in `/private/var/mobile/Library/Logs/CrashReporter/`?",
    options: [
      "Timestamp of crash, crashed process name, bundle identifier, OS version, hardware model, exception codes, and stack traces of all executing threads",
      "The full audio conversation of the user's last phone call",
      "Decrypted passwords stored in Apple Safari",
      "The phone's complete cellular billing records"
    ],
    answer: 0,
    explanation: "Crash reports (`.ips` files) contain JSON metadata and stack backtraces showing the precise application bundle ID, thread state, exception type (e.g., `EXC_BAD_ACCESS`, `SIGSEGV`), memory registers, and timestamp of the incident."
  },
  {
    id: 158,
    topic: "iOS Powerlog Database (CurrentPowerlog.PLSQL)",
    question: "Why is the SQLite database `CurrentPowerlog.PLSQL` (located in `/private/var/mobile/Library/BatteryLife/`) considered an extraordinary 'goldmine' in iOS digital forensics?",
    options: [
      "It logs granular historical timelines of battery charge, screen state (on/off), foreground app usage duration, Wi-Fi connections, and Bluetooth peripheral connections at periodic intervals",
      "It contains the user's Apple ID password and master iCloud recovery key",
      "It provides real-time satellite tracking coordinates regardless of GPS state",
      "It records complete keystroke logs from the virtual keyboard"
    ],
    answer: 0,
    explanation: "`CurrentPowerlog.PLSQL` (and rotated archives) records battery and power telemetry. Forensically, it details device usage: exact timestamps when the screen turned on/off, which apps were in the foreground and for how many seconds, device charging cycles, and network state changes."
  },
  {
    id: 159,
    topic: "KnowledgeC Database (knowledgeC.db)",
    question: "What forensic evidence is maintained in the Apple `knowledgeC.db` database located at `/private/var/mobile/Library/CoreDuet/`?",
    options: [
      "CoreDuet behavioral data tracking user intent, application usage history, lock/unlock events, portrait/landscape orientation, and device plug-in events",
      "Carrier network frequency channel allocations",
      "The binary firmware of the Apple Watch coprocessor",
      "A complete mirror of the suspect's email inbox"
    ],
    answer: 0,
    explanation: "The `knowledgeC.db` database is used by Apple's CoreDuet system to anticipate user behavior. It logs granular timestamped events including app in focus, device lock/unlock states, audio output changes, Siri queries, and battery plug-in events."
  },
  {
    id: 160,
    topic: "iOS State Model Logs",
    question: "When evaluating iOS network logs, what evidence can confirm that an iPhone was connected to a specific Wi-Fi network at a given timestamp?",
    options: [
      "Entries in `com.apple.wifi.plist` (or `com.apple.wifi-networks.plist`) and associated Unified Log records showing SSID, BSSID MAC address, security type, and timestamp of association",
      "The IMEI number of the cellular baseband processor",
      "The battery charge percentage reported in `Settings.plist`",
      "The camera aperture setting in EXIF headers"
    ],
    answer: 0,
    explanation: "Apple records configured and connected Wi-Fi networks in `com.apple.wifi.plist` (or `com.apple.wifi-networks.plist`), detailing SSIDs, BSSID (hardware MAC) of the access point, last joined date, and channel frequencies."
  },

  // =========================================================================
  // TOPIC 17: TOOLS & TECHNOLOGIES FOR IOS FORENSICS (Q161–Q170)
  // =========================================================================
  {
    id: 161,
    topic: "libimobiledevice Suite",
    question: "What is `libimobiledevice` in digital forensic practice?",
    options: [
      "A cross-platform open-source software library and CLI suite that interacts natively with iOS devices over USB using Apple's proprietary protocols without requiring iTunes",
      "A physical hardware machine used to grind silicon chips down to micron levels",
      "A proprietary Apple server used exclusively by Apple Store technicians",
      "A specialized malware strain designed to hijack Android smartphones"
    ],
    answer: 0,
    explanation: "`libimobiledevice` is an open-source library that implements Apple's protocols (lockdownd, afc, backup2, diagnostics). It allows forensic workstations (Linux, macOS, Windows) to interface with iOS devices to pull diagnostics, inspect device metadata, and trigger logical backups."
  },
  {
    id: 162,
    topic: "idevicebackup2 Forensics",
    question: "Which command in the `libimobiledevice` suite triggers a full logical backup of an unlocked, paired iPhone to a local forensic workstation?",
    options: [
      "`idevicebackup2 backup --full <destination_path>`",
      "`idevicecrashreport -k -f`",
      "`ideviceinfo -s`",
      "`idevicediagnostics sleep`"
    ],
    answer: 0,
    explanation: "The command `idevicebackup2 backup --full <destination_path>` initiates an Apple mobile backup over USB via the `com.apple.mobilebackup2` protocol, producing a standard iTunes backup structure containing `Manifest.db`, `Manifest.plist`, `Info.plist`, and hashed file payloads."
  },
  {
    id: 163,
    topic: "Encrypted vs Unencrypted iTunes Backups",
    question: "Why do mobile forensic examiners often prefer creating an ENCRYPTED iTunes backup (with a known temporary password) over an unencrypted backup?",
    options: [
      "Encrypted backups include sensitive forensic artefacts excluded from unencrypted backups, such as saved Wi-Fi passwords, Health data, HomeKit data, and Safari saved credentials",
      "Encrypted backups take 90% less time to extract",
      "Encrypted backups automatically bypass the device's screen passcode",
      "Encrypted backups permanently delete all log files on the iPhone"
    ],
    answer: 0,
    explanation: "By Apple security design, unencrypted iTunes backups exclude sensitive records like Apple Health data, Wi-Fi credentials, and Keychain passwords. Setting a temporary backup password encrypts the backup but causes iOS to include Health databases, HomeKit, and Keychain records."
  },
  {
    id: 164,
    topic: "iTunes Backup Manifest.db",
    question: "In an iOS iTunes backup directory, what is the role of the SQLite database named `Manifest.db`?",
    options: [
      "It maps the 40-character SHA-1 hashed filenames in the backup folder to their original file system paths, domain names (e.g. `AppDomain-com.whatsapp`), file sizes, and metadata flags",
      "It contains the AES-256 decryption key for the entire iPhone",
      "It acts as a temporary cache for incoming phone calls",
      "It stores the user's Apple ID biometric fingerprint template"
    ],
    answer: 0,
    explanation: "In iOS 10+ iTunes backups, files are stored named by the SHA-1 hash of `Domain-RelativePath`. `Manifest.db` is the master SQLite database that indexes these hashed files, mapping each hash back to its original domain, relative path, file properties, and file system permissions."
  },
  {
    id: 165,
    topic: "GrayKey / GrayShift Technology",
    question: "What is GrayKey (developed by Grayshift / Magnet Forensics) in law enforcement digital forensics?",
    options: [
      "A specialized hardware forensic appliance that leverages proprietary low-level vulnerabilities to bypass iOS passcode limits, brute-force passcodes, and perform full file system and keychain extractions",
      "An open-source desktop image viewer for macOS",
      "A cellular baseband sniffer that intercepts SMS over GSM networks",
      "A cloud service for recovering deleted photos from Instagram"
    ],
    answer: 0,
    explanation: "GrayKey is a specialized law enforcement hardware appliance. It connects directly to Lightning or USB-C ports on Apple devices, deploying low-level proprietary bootloader/kernel exploits to bypass passcode attempt counters and perform full file system extractions."
  },
  {
    id: 166,
    topic: "Cellebrite Premium",
    question: "What capability distinguishes Cellebrite Premium from standard Cellebrite UFED hardware?",
    options: [
      "Advanced in-lab capabilities to unlock and perform full file system and physical extractions on modern locked iOS and high-end Android devices using proprietary exploit chains",
      "The ability to conduct remote wiretaps without physical device possession",
      "The inclusion of a thermal imaging camera for motherboard inspection",
      "A feature that translates Hindi voice notes into English in real-time"
    ],
    answer: 0,
    explanation: "Cellebrite Premium (and CAS - Cellebrite Advanced Services) uses proprietary security research exploit chains to unlock locked high-end iOS and Android devices, extracting complete file systems, physical memory, and decrypted Keychains where standard commercial tools fail."
  },
  {
    id: 167,
    topic: "Elcomsoft iOS Forensic Toolkit (EIFT)",
    question: "What dual acquisition methods does the Elcomsoft iOS Forensic Toolkit (EIFT) provide for extracting data from compatible iOS devices?",
    options: [
      "Agent-based extraction (installing a temporary unsigned extraction app via developer signing) and hardware-based checkm8 BootROM exploit extraction",
      "Satellite uplink and microwave radiation extraction",
      "Audio frequency modulation and NFC contactless extraction",
      "SIM card swapping and PIN guessing"
    ],
    answer: 0,
    explanation: "EIFT utilizes two primary advanced acquisition methods: (1) Forensic Agent extraction (sideloading a dedicated extraction agent with an Apple developer certificate to dump file system and keychain without jailbreaking), and (2) checkm8 BootROM exploit extraction for vulnerable devices (A5–A11 chips)."
  },
  {
    id: 168,
    topic: "checkm8 BootROM Exploit",
    question: "Why was the discovery of the `checkm8` exploit by axi0mX considered a watershed moment in iOS forensics?",
    options: [
      "It is an unpatchable, permanent vulnerability in the read-only BootROM (SecureROM) affecting Apple devices from the A5 chip up to the A11 chip (iPhone 4S through iPhone X)",
      "It allowed any user to hack into Apple's corporate servers in Cupertino",
      "It provided a software patch that increased iPhone battery life by 50%",
      "It disabled cellular roaming charges globally"
    ],
    answer: 0,
    explanation: "Because `checkm8` resides in hardware BootROM (which is burned into silicon during manufacturing and read-only), Apple cannot patch it via iOS software updates. It grants full control over the execution chain on A5–A11 devices, enabling forensic RAM acquisition and custom bootloaders."
  },
  {
    id: 169,
    topic: "iOS Keychain Decryption (keychain-2.db)",
    question: "Where are saved passwords, credit card numbers, Wi-Fi credentials, and cryptographic certificates stored in iOS, and what database holds them?",
    options: [
      "In the iOS Keychain, physically stored in the SQLite database `/private/var/Keychains/keychain-2.db`",
      "In a plaintext text file `/etc/passwords.txt`",
      "On the SIM card's elementary file EF_LOCI",
      "Inside the camera sensor's onboard flash"
    ],
    answer: 0,
    explanation: "The iOS Keychain stores high-security credentials in `/private/var/Keychains/keychain-2.db`. Each item in the database has its sensitive payload encrypted with keys protected by the Secure Enclave and Hardware AES engine, categorized by accessibility classes (e.g. `kSecAttrAccessibleWhenUnlocked`)."
  },
  {
    id: 170,
    topic: "Forensic Extraction Agent vs Jailbreak",
    question: "Why do modern forensic suites (Cellebrite, Magnet, Elcomsoft) utilize an 'Extraction Agent' rather than applying a public jailbreak (like unc0ver or Taurine) to an evidentiary iPhone?",
    options: [
      "An extraction agent is signed with a valid developer certificate, operates forensically in-memory without patching system kernels or modifying the read-only system partition, preserving forensic integrity",
      "An extraction agent permanently unlocks all iPhones manufactured in the future",
      "An extraction agent removes the requirement for a search warrant",
      "Public jailbreaks automatically encrypt the phone with ransomware"
    ],
    answer: 0,
    explanation: "Public jailbreaks modify the system partition, inject binaries into `/bin` and `/usr`, and compromise the forensic chain of custody. A dedicated forensic extraction agent runs as an isolated user-space application signed with a developer identity, performing read-only dumps of `/private/var` without altering system files."
  },

  // =========================================================================
  // TOPIC 18: CHALLENGES & LIMITATIONS OF IOS FORENSICS (Q171–Q180)
  // =========================================================================
  {
    id: 171,
    topic: "BFU vs AFU States in iOS",
    question: "What is the primary difference in evidence availability between an iOS device in Before First Unlock (BFU) state versus After First Unlock (AFU) state?",
    options: [
      "In BFU state, file encryption keys are not yet in RAM and almost all user data remains inaccessible; in AFU state, Class C and Class B keys have been derived and reside in RAM, enabling broad file system extraction",
      "In BFU state, the phone can be unlocked with any fingerprint; in AFU state, biometrics are disabled",
      "In BFU state, the device transmits all data to iCloud; in AFU state, cloud sync is permanently disabled",
      "There is zero cryptographic difference between BFU and AFU states in iOS"
    ],
    answer: 0,
    explanation: "When powered on but before the first passcode unlock (BFU), only Class D keys exist in memory; user data (Class A, B, C) cannot be decrypted. After the user unlocks the screen once (AFU), Class C keys remain resident in RAM, allowing forensic extraction tools to recover significant evidence even if the screen is currently locked."
  },
  {
    id: 172,
    topic: "Secure Enclave Throttling & Backoff",
    question: "How does Apple's Secure Enclave enforce hardware rate-limiting against automated passcode brute-force attacks?",
    options: [
      "It enforces exponential time delays: 1 to 4 attempts have no delay; 5 attempts incur a 1-minute delay; 6 incurs 5 minutes; 7 and 8 incur 15 minutes; 9+ incurs a 60-minute delay per attempt",
      "It permanently destroys the phone screen after 3 incorrect attempts",
      "It increases the screen brightness until the battery drains completely",
      "It sends an emergency alert to the local fire department"
    ],
    answer: 0,
    explanation: "The Secure Enclave Processor (SEP) tracks failed attempts in dedicated non-volatile counters. It enforces strict exponential backoff delays (up to 1 hour per attempt after repeated failures), making software brute-forcing of 6-digit or alphanumeric passcodes mathematically impractical without specialized SEP bypass exploits."
  },
  {
    id: 173,
    topic: "10-Attempt Device Erase Policy",
    question: "What critical risk must an investigator mitigate if a suspect enabled the 'Erase Data' security setting on their iPhone?",
    options: [
      "Entering 10 incorrect passcodes causes the Secure Enclave to immediately and permanently obliterate the file system master cryptographic key (Effaceable Storage / DKEK), rendering all user data irrecoverable",
      "Entering 10 incorrect passcodes reformats the workstation computer",
      "Entering 10 incorrect passcodes unlocks the device automatically in test mode",
      "Entering 10 incorrect passcodes dials the international emergency number"
    ],
    answer: 0,
    explanation: "If 'Erase Data after 10 failed attempts' is toggled on in iOS Settings, the 10th failed attempt instructs the Secure Enclave to overwrite the device's Effaceable Storage, permanently destroying the master encryption keys and making cryptographic recovery impossible."
  },
  {
    id: 174,
    topic: "USB Restricted Mode",
    question: "What is Apple's USB Restricted Mode, introduced in iOS 11.4.1/12, and how does it impact forensic triage?",
    options: [
      "If an iPhone has not been unlocked with its passcode for more than one hour, the Lightning/USB-C port disables data communications, allowing only battery charging until unlocked",
      "It restricts USB cables to a maximum length of 1 meter",
      "It limits file download speeds over USB to 56 kbps",
      "It allows USB connections only when connected to Apple-certified Mac computers"
    ],
    answer: 0,
    explanation: "USB Restricted Mode shuts down the USB data lines on the Lightning/Type-C connector if the device has been locked for over one hour. Forensic workstations cannot communicate with or query the device over USB until the passcode is entered, requiring investigators to maintain power and use keep-awake dongles."
  },
  {
    id: 175,
    topic: "Biometric Lockout Timeouts",
    question: "Under which condition does iOS automatically disable Face ID or Touch ID and mandate passcode entry?",
    options: [
      "The device has not been unlocked for more than 48 hours, has been restarted/powered off, or has failed 5 consecutive biometric match attempts",
      "The battery charge drops below 50%",
      "The user changes their cellular carrier SIM card while the screen is on",
      "The device connects to an unencrypted public Wi-Fi hotspot"
    ],
    answer: 0,
    explanation: "iOS security policies lock out biometrics (Face ID / Touch ID) requiring the passcode when: (1) more than 48 hours have elapsed since last unlock, (2) the device has rebooted, (3) 5 consecutive biometric match attempts fail, or (4) the SOS emergency screen is triggered."
  },
  {
    id: 176,
    topic: "Effaceable Storage Obliteration",
    question: "What is Effaceable Storage in Apple mobile devices?",
    options: [
      "A dedicated, hardware-managed region of flash memory that holds master cryptographic keys; it can be securely erased in milliseconds during a remote wipe or factory reset, rendering all user data instantaneously unreadable",
      "A virtual memory swap file stored in RAM",
      "A temporary folder in Safari where deleted browsing cookies are stored",
      "A cloud backup server operated in compliance with European GDPR laws"
    ],
    answer: 0,
    explanation: "Effaceable Storage is a low-level, non-volatile storage region that holds the keys needed to decrypt the File System Key and Class Keys. When a remote wipe or local erase is triggered, this area is immediately overwritten, effectively rendering the entire device storage instantly unreadable (cryptographic wipe)."
  },
  {
    id: 177,
    topic: "Apple Lockdown Mode Forensics",
    question: "What major restrictions does Apple's 'Lockdown Mode' (introduced in iOS 16) enforce that directly impact forensic examination?",
    options: [
      "It blocks incoming message attachments (except certain images), disables complex web browsing technologies (JIT compilers), blocks shared photo albums, and blocks wired connections to computers when locked",
      "It completely disables cellular phone calls and SMS",
      "It turns off the phone's touch screen display permanently",
      "It encrypts the phone using 512-bit RSA keys"
    ],
    answer: 0,
    explanation: "Lockdown Mode is an extreme security posture designed for high-risk targets. It severely restricts message attachment parsing, blocks web JIT compilers, disables incoming FaceTime from unknown callers, and instantly blocks any wired USB connection to computers while the phone is locked."
  },
  {
    id: 178,
    topic: "iCloud End-to-End Encryption (ADP)",
    question: "When a suspect enables Apple's Advanced Data Protection (ADP) for iCloud, what is the forensic limitation for law enforcement serving search warrants directly on Apple?",
    options: [
      "Apple no longer retains the encryption keys for iCloud Backups, Photos, Notes, and Reminders in their data centers; law enforcement cannot obtain decrypted records directly from Apple",
      "Apple can only provide data if requested in person by the suspect",
      "Apple automatically deletes the suspect's entire account within 24 hours",
      "Apple charges a $10,000 administrative processing fee per gigabyte"
    ],
    answer: 0,
    explanation: "With Advanced Data Protection (ADP) enabled, the number of end-to-end encrypted iCloud categories expands from 14 to 23 (including iCloud Backup, Photos, and Notes). Because the keys exist only on the user's trusted devices, Apple cannot decrypt this data in response to government subpoenas."
  },
  {
    id: 179,
    topic: "Signed System Volume (SSV)",
    question: "Introduced in iOS 14 / macOS 11, what is the forensic consequence of Apple's Signed System Volume (SSV) architecture?",
    options: [
      "The read-only System volume is sealed with a cryptographic Merkle tree hash; any bit modification to system binaries causes the kernel to panic and refuse to boot, preventing traditional forensic rooting/jailbreak modification",
      "It requires all apps to be written in Swift instead of Objective-C",
      "It prevents iPhones from connecting to Wi-Fi networks with hidden SSIDs",
      "It limits the number of installed applications to exactly 64"
    ],
    answer: 0,
    explanation: "Signed System Volume (SSV) validates the entire system volume against a cryptographic Merkle tree rooted in an Apple-signed manifest. Any unauthorized byte modification will fail validation during boot, causing the kernel to panic and halt execution."
  },
  {
    id: 180,
    topic: "Forensic Triage of Liquid Damaged iPhones",
    question: "When processing a water-submerged or liquid-damaged iPhone recovered from a crime scene, what is the standard operating procedure before attempting forensic extraction?",
    options: [
      "Do NOT power on or charge the device; disassemble, remove the battery, thoroughly clean corrosion from the logic board using an ultrasonic bath with high-purity isopropyl alcohol (IPA), dry completely, and inspect for motherboard shorts before applying regulated bench power",
      "Immediately plug the device into a rapid fast-charger to see if the screen illuminates",
      "Place the smartphone into a container of white uncooked rice for 30 minutes",
      "Heat the phone with an industrial blowtorch until steam disappears"
    ],
    answer: 0,
    explanation: "Applying power to a wet or corroded logic board causes instant catastrophic electrical shorts that destroy the SoC or PMIC (Power Management IC). Standard forensic procedure requires disassembly, ultrasonic cleaning in pure isopropyl alcohol (99%+ IPA), thorough drying, and bench testing with a regulated DC power supply."
  },

  // =========================================================================
  // TOPIC 19: FORENSIC ANALYSIS OF PAGERS, WEARABLES & SMART GADGETS (Q181–Q190)
  // =========================================================================
  {
    id: 181,
    topic: "Pager Communication Protocols",
    question: "Which legacy telecommunication protocols are standard in radio paging networks for transmitting numeric and alphanumeric messages to pagers (beepers)?",
    options: [
      "POCSAG (Post Office Code Standardisation Advisory Group) and FLEX (Motorola)",
      "GSM and CDMA2000",
      "HTTP/2 and WebSocket",
      "Bluetooth Low Energy and Zigbee"
    ],
    answer: 0,
    explanation: "Radio pagers rely on standardized RF broadcast protocols: POCSAG (standardized by the British Post Office, supporting 512, 1200, and 2400 bps) and Motorola's FLEX protocol (supporting high-capacity transmission up to 6400 bps)."
  },
  {
    id: 182,
    topic: "Pager Capcodes & Broadcast Security",
    question: "What is a 'Capcode' in radio paging systems, and what is the primary cryptographic vulnerability of legacy pager communications?",
    options: [
      "A unique 7-digit radio address assigned to a specific pager receiver; messages are broadcast over the air in cleartext without encryption, allowing passive radio interception via Software-Defined Radios (SDR)",
      "A 256-bit AES symmetric key embedded in the pager antenna",
      "The serial number of the pager's AAA alkaline battery",
      "A digital signature verified by a public key infrastructure"
    ],
    answer: 0,
    explanation: "A Capcode is a unique 7-digit decimal address assigned to a pager. Crucially, paging networks broadcast messages over open radio frequencies in cleartext. Any receiver or Software Defined Radio (SDR) tuned to the frequency can sniff and decode all transmitted messages."
  },
  {
    id: 183,
    topic: "Physical Extraction of Pagers",
    question: "How is digital evidence extracted from a physical pager device seized during a criminal investigation?",
    options: [
      "Manual screen capture and inspection, reading non-volatile serial EEPROM (Electrically Erasable Programmable Read-Only Memory) chips using an external IC programmer, or probing JTAG/serial UART test points on the PCB",
      "Sending an over-the-air 'dump' command from an Android smartphone",
      "Connecting the pager via USB 3.0 to Cellebrite Physical Analyzer",
      "Reading the SIM card embedded inside the pager"
    ],
    answer: 0,
    explanation: "Legacy pagers lack modern operating systems or USB ports. Forensic extraction involves photographing the LCD display messages, probing UART/serial test pads, or desoldering and dumping the onboard serial EEPROM (e.g. 24Cxx / 93Cxx series chips) using a dedicated hardware IC programmer."
  },
  {
    id: 184,
    topic: "Apple Watch (watchOS) Forensics",
    question: "How is an Apple Watch typically examined in digital forensics given the lack of exposed external physical data ports on modern models?",
    options: [
      "Primarily via forensic extraction of the paired host iPhone (which archives synced watch backups, Health data, and companion app state), or by using proprietary adapter pucks on the hidden diagnostic diagnostic port on older models",
      "By connecting standard USB-C cables directly to the Digital Crown",
      "By placing the watch in a high-temperature oven",
      "By asking the watch's voice assistant Siri to read all deleted files aloud"
    ],
    answer: 0,
    explanation: "Apple Watches sync continuous telemetry to their paired host iPhone. An extraction of the paired iPhone yields Apple Watch backups, HealthKit metrics, workout GPS tracks, and paired device metadata. On older models (Series 0–6), a hidden diagnostic 6-pin port inside the band slot was accessible via specialized hardware adapters (iBUS)."
  },
  {
    id: 185,
    topic: "Health & Biometric Wearable Artefacts",
    question: "In Apple iOS and watchOS forensics, which SQLite database stores granular heart rate measurements, step counts, electrocardiogram (ECG) recordings, and sleep analysis?",
    options: [
      "`healthdb.sqlite` (or `healthdb_secure.sqlite`) located in `/private/var/mobile/Library/Health/`",
      "`contacts2.db` in `/data/data/`",
      "`sms.db` in `/private/var/mobile/Library/SMS/`",
      "`photos.sqlite` in `/private/var/mobile/Media/`"
    ],
    answer: 0,
    explanation: "Apple HealthKit data is stored in `healthdb.sqlite` and `healthdb_secure.sqlite`. These databases record timestamped biometric data (heart rate samples, VO2 max, stand hours, step counts, workouts) that can pinpoint a victim's time of death or an attacker's elevated physical exertion."
  },
  {
    id: 186,
    topic: "Wear OS (Android Wear) Acquisition",
    question: "How can an investigator extract forensic data directly from a standalone Wear OS smartwatch?",
    options: [
      "By enabling Developer Options and ADB debugging over Wi-Fi or Bluetooth, allowing ADB commands (`adb pull`, `adb shell`) to acquire logs, installed apps, and system state",
      "By typing commands directly on the watch's physical side button using Morse code",
      "By placing the watch next to an AM radio antenna",
      "By inserting an SD card into the microphone hole"
    ],
    answer: 0,
    explanation: "Wear OS devices run a modified Android kernel. By enabling Developer Options on the watch display, examiners can activate 'ADB debugging over Wi-Fi' (or Bluetooth), connect the forensic PC to the watch's local IP address via `adb connect <IP>:<PORT>`, and extract data using standard ADB commands."
  },
  {
    id: 187,
    topic: "Bluetooth Low Energy (BLE) & GATT Analysis",
    question: "What architecture is used by wearable fitness trackers and IoT devices to communicate with host mobile applications over Bluetooth Low Energy?",
    options: [
      "Generic Attribute Profile (GATT) organized into Services, Characteristics, and Descriptors, which can be sniffed or queried using BLE protocol analyzers",
      "Point-to-Point Protocol over Ethernet (PPPoE)",
      "Simple Network Management Protocol (SNMPv3)",
      "File Transfer Protocol (FTP)"
    ],
    answer: 0,
    explanation: "BLE communication relies on the GATT (Generic Attribute Profile) hierarchy: a device presents Services, which contain Characteristics (data values like live heart rate, battery level) and Descriptors. Sniffers (like Ubertooth One or Wireshark) can capture unencrypted GATT data packets exchanged between the wearable and the smartphone."
  },
  {
    id: 188,
    topic: "Smart Speaker & IoT Forensics (Amazon Echo / Google Nest)",
    question: "When seizing smart home speakers (e.g. Amazon Echo, Google Nest) at a crime scene, where is the most valuable evidentiary content usually located?",
    options: [
      "In the cloud provider's account servers (Amazon Alexa Cloud / Google Assistant activity logs) and the companion mobile apps installed on the suspect's smartphone, rather than the local device RAM",
      "Inside the physical speaker cone's paper membrane",
      "On the AC wall power adapter's internal capacitor",
      "In the smart speaker's removable 3.5mm audio jack"
    ],
    answer: 0,
    explanation: "Smart speakers are low-storage IoT thin clients. Voice audio recordings, command transcriptions, linked smart home action logs (e.g. lights turned on at 2:15 AM), and geolocation exist in the cloud ecosystem and the companion app (Alexa/Google Home) on the user's phone, which should be acquired via cloud warrant returns and phone extractions."
  },
  {
    id: 189,
    topic: "Wearable GPS Track Extraction",
    question: "Fitness smartwatches (Garmin, Polar, Apple Watch) record outdoor runs and cycling routes using which standard geographic data formats?",
    options: [
      "FIT (Flexible and Interoperable Data Transfer), GPX (GPS Exchange Format), and TCX (Training Center XML)",
      "DOCX and PDF",
      "MP4 and AVI",
      "EXE and DLL"
    ],
    answer: 0,
    explanation: "Sports watches record route coordinate points, cadence, elevation, and heart rate into standard files: Garmin's binary `.fit` format, or XML-based `.gpx` and `.tcx` files. These contain latitude/longitude coordinates tied to precise timestamps, establishing a suspect's outdoor route."
  },
  {
    id: 190,
    topic: "Smart Tag / AirTag Forensics",
    question: "How do tracking tags like Apple AirTags operate, and what forensic data can be recovered from an AirTag used in an illicit stalking case?",
    options: [
      "AirTags broadcast rotating BLE advertisements picked up by nearby Apple devices in the 'Find My' mesh network; an AirTag's serial number is engraved on the casing and can be linked to the purchaser's Apple ID by Apple via legal subpoena",
      "AirTags contain a built-in cellular 5G modem that connects directly to telephone towers",
      "AirTags record 24 hours of live audio conversations onto a micro SD card",
      "AirTags are permanently anonymous and can never be traced to any human purchaser"
    ],
    answer: 0,
    explanation: "AirTags emit rotating, cryptographically pseudorandom BLE beacon identifiers. When nearby Apple devices detect them, they report the location to Apple's Find My network. Investigators can read the AirTag's hardware serial number (via NFC tap or printed under the battery) and serve a legal subpoena on Apple to identify the linked Apple ID and purchase payment method."
  },

  // =========================================================================
  // TOPIC 20: CDR (CALL DETAILS RECORD) & CELLULAR NETWORK ANALYSIS (Q191–Q200)
  // =========================================================================
  {
    id: 191,
    topic: "CDR Fundamentals & Core Attributes",
    question: "What is a Call Detail Record (CDR) maintained by cellular telecommunication service providers?",
    options: [
      "A billing and operational log generated by Mobile Switching Centers (MSC) documenting the metadata of cellular transactions (calling/called number, date/time, duration, call type, IMEI, IMSI, and cell tower IDs)",
      "An audio recording of the entire voice conversation stored as a WAV file",
      "A complete mirror of the suspect's WhatsApp messages and photographs",
      "A copy of the suspect's computer browser history"
    ],
    answer: 0,
    explanation: "A Call Detail Record (CDR) is a metadata transaction record generated by cellular switching equipment (MSC). It does NOT record voice audio; it records call metadata: A-party (calling), B-party (called), start time, call duration, call type (Voice/SMS/Data), IMEI of device, IMSI of SIM, and initial/terminating cell site IDs."
  },
  {
    id: 192,
    topic: "Cell Global Identity (CGI) Structure",
    question: "What are the four standardized components that constitute a unique Cell Global Identity (CGI) in cellular networks?",
    options: [
      "MCC (Mobile Country Code), MNC (Mobile Network Code), LAC (Location Area Code), and CI (Cell Identity)",
      "IP Address, MAC Address, Subnet Mask, and Default Gateway",
      "IMEI, IMSI, MSISDN, and ICCID",
      "Latitude, Longitude, Altitude, and Azimuth"
    ],
    answer: 0,
    explanation: "Cell Global Identity (CGI) uniquely identifies every cellular transceiver sector worldwide. It is composed of: (1) MCC (Mobile Country Code, e.g. 404/405 for India), (2) MNC (Mobile Network Code, e.g. Airtel/Jio), (3) LAC (Location Area Code), and (4) CI (Cell Identity)."
  },
  {
    id: 193,
    topic: "Cell Tower Azimuth & Beamwidth",
    question: "In cellular tower coverage analysis, what does the 'Azimuth' angle specify?",
    options: [
      "The compass direction (in degrees, 0° to 359° relative to True North) in which a directional cell tower sector antenna transmits its central radio beam",
      "The vertical height of the tower in meters above sea level",
      "The monthly billing rate charged by the cellular carrier",
      "The total number of simultaneous voice calls handled by the cell site"
    ],
    answer: 0,
    explanation: "Cell towers are typically partitioned into three 120-degree directional sectors (Alpha, Beta, Gamma). The Azimuth is the compass heading (0°–360° from North) of the antenna's main radiation lobe. For example, Azimuth 0° points North, 120° points Southeast, and 240° points Southwest."
  },
  {
    id: 194,
    topic: "Timing Advance (TA) in Cellular Networks",
    question: "How does the Timing Advance (TA) parameter recorded in cellular network logs assist forensic investigators in estimating a device's distance from a tower?",
    options: [
      "Each TA value represents a discrete round-trip radio propagation time increment, allowing calculation of the device's distance from the cell tower in radial bands (e.g. ~550 meters per TA unit in GSM)",
      "It records the local time zone offset of the suspect's wristwatch",
      "It measures the battery degradation rate of the smartphone",
      "It determines how many minutes the suspect was late for a scheduled appointment"
    ],
    answer: 0,
    explanation: "In TDMA/GSM/LTE networks, Timing Advance (TA) compensates for radio propagation delays between the mobile device and the base station. Because radio waves travel at the speed of light, each unit of TA corresponds to a known distance band (e.g., in GSM, 1 TA unit ≈ 550 meters radius), narrowing the suspect's position to a curved radial arc."
  },
  {
    id: 195,
    topic: "Tower Dumps in Criminal Investigations",
    question: "What is a 'Tower Dump' in mobile telecommunications forensics?",
    options: [
      "A forensic extraction obtained from a telecom service provider listing all cellular transactions (every phone number, IMEI, and IMSI) that connected to a specific cell tower sector during a designated time window",
      "Physical demolition of an illegal cell tower by police",
      "A memory dump of the physical base station antenna controller",
      "A technique to disconnect all cellular calls in an entire city"
    ],
    answer: 0,
    explanation: "A Tower Dump is a telecom provider record that captures all cellular connections that occurred on a specific cell tower (or specific sectors) over a specified time timeframe. Investigators cross-reference multiple tower dumps from different crime scenes to identify common phone numbers or IMEIs."
  },
  {
    id: 196,
    topic: "IPDR (Internet Protocol Detail Record)",
    question: "What is an Internet Protocol Detail Record (IPDR) and how does it differ from a traditional voice CDR?",
    options: [
      "An IPDR tracks mobile data/internet usage sessions, recording source/destination IP addresses, destination port numbers, timestamps, volume of bytes transferred, and public NAT allocations",
      "An IPDR records voice calls while a CDR records text messages",
      "An IPDR is generated exclusively by Wi-Fi routers in private homes",
      "An IPDR contains the unencrypted source code of all visited web pages"
    ],
    answer: 0,
    explanation: "While voice CDRs capture telephony and SMS, an Internet Protocol Detail Record (IPDR) captures mobile data traffic. Telecom operators record when a mobile device established an IP session, its private IP, public translated NAT IP, destination IP, port numbers, duration, and bytes uploaded/downloaded."
  },
  {
    id: 197,
    topic: "First Cell ID vs Last Cell ID",
    question: "When a suspect initiates a voice call that lasts 45 minutes while driving on a highway, why do CDR records list a 'First Cell ID' and a 'Last Cell ID'?",
    options: [
      "The First Cell ID identifies the tower sector where the call was initiated, while the Last Cell ID identifies the sector where the call was terminated, demonstrating vehicle movement and direction of travel",
      "The First Cell ID is the suspect's home tower, and the Last Cell ID is the victim's home tower",
      "The First Cell ID is the 4G tower, and the Last Cell ID is the 5G tower",
      "The two IDs are random numbers generated by the billing software to prevent fraud"
    ],
    answer: 0,
    explanation: "During a voice call, handovers occur between adjacent base stations as the mobile subscriber moves. CDRs record the cell site where the call originated (First Cell ID) and where it ended (Last Cell ID). Comparing these locations proves physical movement across geographic terrain during the call."
  },
  {
    id: 198,
    topic: "IMEI-IMSI Pairing Analysis",
    question: "How can telecommunication analysts detect that a criminal is swapping multiple SIM cards inside the same physical smartphone handset?",
    options: [
      "By filtering the carrier's CDR database for a single recurring IMEI number associated with multiple different IMSI numbers across consecutive sessions",
      "By listening to audio recordings of the suspect's voice pitch",
      "By querying the suspect's home Wi-Fi router DNS log",
      "By inspecting the physical color of the smartphone's plastic chassis"
    ],
    answer: 0,
    explanation: "The IMEI identifies the physical handset hardware, while the IMSI identifies the subscriber identity module (SIM card). If a CDR report reveals the same IMEI active with several different IMSI numbers over days or weeks, it proves that different SIM cards were swapped into the same physical phone."
  },
  {
    id: 199,
    topic: "Cellular Triangulation vs Single-Tower Sector",
    question: "What is required to perform true multi-lateration / cell site triangulation of a mobile device, as opposed to single-tower sector mapping?",
    options: [
      "Simultaneous network measurement data (timing and signal strength RSSI/RSRP) from at least three distinct base stations or sectors",
      "A single cell tower sector with an active 5G antenna",
      "A legal wiretap order signed by a magistrate judge",
      "Access to the suspect's WhatsApp profile picture"
    ],
    answer: 0,
    explanation: "Single-tower CDR analysis only places a handset within a broad wedge-shaped sector (e.g. 120° arc up to several kilometers). True triangulation (multilateration) requires simultaneous signal measurements (Time Difference of Arrival - TDOA, or signal strength) from at least three intersecting base station towers."
  },
  {
    id: 200,
    topic: "CDR Evidentiary Admissibility in India",
    question: "Under Indian evidence law (Section 65B of the Indian Evidence Act, 1872 / Section 63 of Bharatiya Sakshya Adhiniyam, BSA 2024), what mandatory document must accompany CDR records produced in court?",
    options: [
      "A Certificate under Section 65B (or BSA Sec 63) signed by an authorized telecom nodal officer certifying the authenticity, lawful origin, and unbroken computer system integrity of the electronic record",
      "A written confession signed by the suspect in police custody",
      "A receipt showing that the suspect paid their monthly telephone bill in cash",
      "An engineering blueprint of the physical cell tower hardware"
    ],
    answer: 0,
    explanation: "Under the landmark Supreme Court ruling in *Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020)* interpreting Section 65B of the Indian Evidence Act (now Section 63 of the BSA 2024), electronic records like CDRs are inadmissible in Indian courts without a mandatory certificate signed by the telecom service provider's authorized nodal officer certifying the integrity and automated generation of the computer logs."
  }
];

