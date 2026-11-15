// Book 4 MCQs Part 1: Topics 1–5 (Q1–Q50)
// High-yield DSSSB Cyber Forensic questions

module.exports = [
  // =========================================================================
  // TOPIC 1: BASICS OF MOBILE DEVICES & MOBILE COMMUNICATIONS (Q1–Q10)
  // =========================================================================
  {
    id: 1,
    topic: "Basics of Mobile Devices",
    question: "In mobile smartphone architecture, what is the primary operational distinction between the Application Processor (AP) and the Baseband Processor (BP)?",
    options: [
      "The AP executes the mobile operating system (Android/iOS) and user apps, while the BP operates an independent Real-Time Operating System (RTOS) managing cellular radio communications",
      "The AP manages cellular tower handovers while the BP executes the Linux kernel and user interface",
      "The AP is responsible strictly for battery charging power management, while the BP handles all internal flash storage",
      "The AP and BP share identical instruction sets and execute the same unified operating system kernel simultaneously"
    ],
    answer: 0,
    explanation: "Modern smartphones use a dual-processor architecture: The Application Processor (AP) runs the user OS (Android/iOS) and applications, while the Baseband Processor (BP) runs a proprietary Real-Time Operating System (RTOS) controlling radio transceivers, SIM interactions, and cellular protocols."
  },
  {
    id: 2,
    topic: "Mobile Hardware Architecture",
    question: "Which high-speed non-volatile flash storage standard, featuring full-duplex serial data lanes, has largely replaced legacy eMMC in modern flagship mobile devices?",
    options: [
      "Universal Flash Storage (UFS)",
      "CompactFlash Type II",
      "Serial ATA (SATA III)",
      "Parallel NAND IDE"
    ],
    answer: 0,
    explanation: "Universal Flash Storage (UFS 2.x, 3.x, 4.0) has superseded embedded MultiMediaCard (eMMC). Unlike half-duplex parallel eMMC, UFS uses full-duplex differential serial signaling with command queuing (SCSI architecture), significantly increasing read/write throughput."
  },
  {
    id: 3,
    topic: "Mobile Cellular Identifiers",
    question: "What does the 15-digit International Mobile Equipment Identity (IMEI) uniquely identify in cellular telecommunications?",
    options: [
      "The physical mobile hardware device transceiver itself, independent of the subscriber or SIM card",
      "The cellular network subscriber identity account issued by the mobile carrier",
      "The ICCID serial number printed on the physical SIM card chip",
      "The temporary localized encryption session key established with the serving cell tower"
    ],
    answer: 0,
    explanation: "The IMEI uniquely identifies the physical mobile device hardware (the radio transceiver). It remains with the handset regardless of which SIM card is inserted or which subscriber uses it."
  },
  {
    id: 4,
    topic: "Mobile Cellular Identifiers",
    question: "In the 15-digit IMEI structure (AA-BBBBBB-CCCCCC-D), what do the first 8 digits (Type Allocation Code - TAC) represent?",
    options: [
      "The specific device manufacturer, brand, and exact marketing hardware model",
      "The individual manufacturing serial number assigned to that single unit",
      "The country code and mobile network operator of the subscriber",
      "The Luhn checksum algorithm verification check digit"
    ],
    answer: 0,
    explanation: "The first 8 digits of the IMEI constitute the Type Allocation Code (TAC), which identifies the specific device manufacturer, brand, and exact hardware model approved by the GSMA."
  },
  {
    id: 5,
    topic: "Mobile Cellular Identifiers",
    question: "What is the primary operational function of the International Mobile Subscriber Identity (IMSI) stored on a SIM card?",
    options: [
      "Uniquely identifying an individual cellular network subscriber within the carrier's core network registers (HLR/HSS)",
      "Identifying the physical hardware manufacturing serial number of the handset transceiver",
      "Providing the dialable telephone number dialed by external callers",
      "Storing the geographical coordinates of the user's home location"
    ],
    answer: 0,
    explanation: "The IMSI (typically 15 digits) uniquely identifies the subscriber account in the mobile network. It is stored on the SIM and referenced in the Home Location Register (HLR) / Home Subscriber Server (HSS)."
  },
  {
    id: 6,
    topic: "Mobile Cellular Identifiers",
    question: "The IMSI consists of three distinct standardized components. What are they?",
    options: [
      "Mobile Country Code (MCC), Mobile Network Code (MNC), and Mobile Subscriber Identification Number (MSIN)",
      "Type Allocation Code (TAC), Serial Number (SNR), and Check Digit (CD)",
      "Country Code (CC), National Destination Code (NDC), and Subscriber Number (SN)",
      "Issuer Identification Number (IIN), Individual Account ID, and Parity Bit"
    ],
    answer: 0,
    explanation: "An IMSI comprises: (1) MCC (Mobile Country Code, 3 digits, e.g., 404/405 for India); (2) MNC (Mobile Network Code, 2–3 digits, identifying carrier); and (3) MSIN (Mobile Subscriber Identification Number, identifying subscriber)."
  },
  {
    id: 7,
    topic: "Mobile Cellular Identifiers",
    question: "What is the MSISDN in cellular telecommunications forensics?",
    options: [
      "The actual public telephone directory number (Mobile Station International Subscriber Directory Number) used to route incoming calls",
      "The internal hardware serial number of the baseband modem chip",
      "The cryptographic challenge-response key used for SIM authentication",
      "The cell tower azimuth bearing recorded in telecom switches"
    ],
    answer: 0,
    explanation: "MSISDN (Mobile Station International Subscriber Directory Number) is the actual telephone number dialed to reach a mobile user (e.g., +91 98XXXXXXXX). It is mapped to the internal IMSI in the HLR."
  },
  {
    id: 8,
    topic: "SIM Card Architecture",
    question: "What is the Integrated Circuit Card Identifier (ICCID) in mobile forensics?",
    options: [
      "The globally unique 19-to-20 digit serial number engraved on and stored inside the physical SIM card chip",
      "The 4-digit user PIN code required to unlock the SIM card upon reboot",
      "The carrier network identifier used to calculate roaming tariffs",
      "The electronic IMEI equivalent used strictly in dual-SIM handsets"
    ],
    answer: 0,
    explanation: "The ICCID is the globally unique 19-to-20 digit physical serial number of the SIM card chip itself (starting with 89 for telecommunications), etched on the plastic card and read during forensic triage."
  },
  {
    id: 9,
    topic: "Cellular Network Generations",
    question: "Which cellular generation first replaced circuit-switched voice cores entirely with an all-IP packet-switched network architecture?",
    options: [
      "4G (LTE - Long Term Evolution)",
      "2G (GSM)",
      "3G (UMTS / WCDMA)",
      "2.5G (GPRS)"
    ],
    answer: 0,
    explanation: "4G LTE eliminated legacy circuit-switched telephony entirely, migrating to an all-IP packet-switched architecture called the Evolved Packet Core (EPC), routing voice via Voice over LTE (VoLTE)."
  },
  {
    id: 10,
    topic: "Cellular Location Updates",
    question: "In cellular network architecture, what centralized database stores permanent subscriber profile information, subscribed services, and current general location area?",
    options: [
      "Home Location Register (HLR) / Home Subscriber Server (HSS)",
      "Visitor Location Register (VLR)",
      "Equipment Identity Register (EIR)",
      "Base Transceiver Station (BTS)"
    ],
    answer: 0,
    explanation: "The Home Location Register (HLR in 2G/3G) or Home Subscriber Server (HSS in 4G) is the master administrative database holding permanent subscriber identities, credentials, service profiles, and current VLR location pointers."
  },

  // =========================================================================
  // TOPIC 2: CHALLENGES & RESOURCE CONSTRAINTS (Q11–Q20)
  // =========================================================================
  {
    id: 11,
    topic: "Mobile Forensic Challenges",
    question: "Why does powering down a modern smartphone seized at a crime scene pose a severe forensic risk to the investigator?",
    options: [
      "The device transitions from an After-First-Unlock (AFU) state to a Before-First-Unlock (BFU) state, evicting cryptographic keys from RAM and preventing extraction without the user passcode",
      "Powering down a smartphone permanently erases all flash memory partitions through hardware TRIM commands",
      "Smartphone batteries instantly discharge when powered off, destroying internal real-time clock oscillators",
      "Cellular carriers automatically send a remote wipe command when a registered device loses connection to the network"
    ],
    answer: 0,
    explanation: "Powering off an encrypted device transitions it from AFU (where Class C keys remain decrypted in RAM) to BFU (where all encryption keys are purged). Without the passcode, forensic tools cannot decrypt the file system."
  },
  {
    id: 12,
    topic: "Mobile Evidence Preservation",
    question: "What is the primary operational hazard of relying solely on 'Airplane Mode' to isolate a seized mobile smartphone?",
    options: [
      "Airplane mode leaves Wi-Fi and Bluetooth capable of being re-enabled automatically or by nearby trusted beacons, permitting remote wipe signals",
      "Airplane mode permanently locks the baseband processor, preventing subsequent forensic extraction",
      "Airplane mode alters the file system timestamps of all incoming SMS messages",
      "Airplane mode causes the device to rapidly overheat and trigger hardware thermal shutdown"
    ],
    answer: 0,
    explanation: "In modern operating systems (iOS and Android), toggling Airplane Mode may leave Wi-Fi, Bluetooth, or GPS active, or automatically reconnect when near known networks, allowing remote wipe commands (Find My) to execute."
  },
  {
    id: 13,
    topic: "Faraday Shielding",
    question: "What physical forensic tool is used to isolate a mobile device from external radio frequency signals (Cellular, Wi-Fi, Bluetooth, GPS)?",
    options: [
      "A Faraday bag or RF-shielded enclosure",
      "An anti-static ESD grounding wrist strap",
      "A lead-lined X-ray inspection container",
      "A write-blocking USB hardware bridge"
    ],
    answer: 0,
    explanation: "A Faraday bag (or RF-shielded box) uses conductive metallic mesh shielding to block all incoming and outgoing electromagnetic signals, preventing remote wipe, geofencing triggers, or incoming calls."
  },
  {
    id: 14,
    topic: "Mobile Forensic Challenges",
    question: "In solid-state mobile storage (eMMC/UFS), how does the background TRIM command impact digital forensic data recovery?",
    options: [
      "It proactively wipes and zeroes out blocks marked as deleted in the flash translation layer (FTL), making deleted file recovery from unallocated space nearly impossible",
      "It encrypts all deleted database records using a disposable hardware AES key",
      "It automatically uploads copies of deleted records to the manufacturer's cloud backup",
      "It forces deleted files to be permanently appended to the system logcat buffer"
    ],
    answer: 0,
    explanation: "TRIM informs the flash storage controller that deleted blocks are no longer needed. The Flash Translation Layer (FTL) garbage collection zeroes or reclaims those blocks, eliminating unallocated space recovery."
  },
  {
    id: 15,
    topic: "Mobile Resource Constraints",
    question: "During on-scene mobile triage, what critical hardware constraint must be mitigated immediately to prevent abrupt device shutdown and extraction corruption?",
    options: [
      "Battery power depletion, mitigated by immediately connecting a certified portable external power bank inside the RF shield",
      "Internal flash memory overheating, mitigated by submerging the device in liquid nitrogen",
      "Baseband modem buffer exhaustion, mitigated by disconnecting the front display assembly",
      "SIM card cache overflow, mitigated by dialing emergency service numbers"
    ],
    answer: 0,
    explanation: "Mobile devices consume significant battery power during extraction. If the battery dies during acquisition, the device enters BFU lock, memory is lost, and partial extraction images may be corrupted. External power must be maintained."
  },
  {
    id: 16,
    topic: "Remote Wipe Mechanisms",
    question: "What communication channel allows enterprise administrators or users to trigger a remote wipe even if Wi-Fi and standard data are disabled, provided cellular signal exists?",
    options: [
      "Over-the-Air (OTA) binary SMS (Silent SMS / WAP Push messages)",
      "Unencrypted Bluetooth Low Energy beacon broadcasting",
      "NFC peer-to-peer radio frequency resonance",
      "High-frequency acoustic ultrasonic audio signals"
    ],
    answer: 0,
    explanation: "Mobile Device Management (MDM) platforms and carrier protocols can transmit binary WAP Push / Silent SMS over cellular signaling channels that execute remote wipe commands even when data traffic is throttled."
  },
  {
    id: 17,
    topic: "Anti-Forensics in Mobile",
    question: "What anti-forensic feature in modern encrypted messaging applications (Signal, WhatsApp, Telegram) poses the greatest challenge to historical chat reconstruction?",
    options: [
      "Disappearing / Ephemeral Messages with automated cryptographic deletion timers",
      "Mandatory end-to-end encryption without client-side database caching",
      "Real-time audio steganography embedding chats in ringtones",
      "Converting chat logs into unreadable base64 ASCII strings"
    ],
    answer: 0,
    explanation: "Disappearing messages automatically delete messages from both sender and recipient SQLite databases after a preconfigured countdown timer (e.g., 24 hours), overwriting rows and destroying chat records."
  },
  {
    id: 18,
    topic: "Mobile Hardware Diversity",
    question: "Why is the Android ecosystem considered significantly more fragmented and challenging for forensic tool development than iOS?",
    options: [
      "Because thousands of distinct hardware models use different SoCs (Qualcomm, MediaTek, Exynos, Unisoc), custom OEM kernels, and proprietary bootloaders",
      "Because Android prohibits the use of USB cables for data transfer",
      "Because Android devices change their internal operating system code every 24 hours",
      "Because Google prohibits forensic tool vendors from analyzing open-source AOSP code"
    ],
    answer: 0,
    explanation: "Android fragmentation involves thousands of manufacturers (Samsung, Xiaomi, Vivo, Oppo) using different chipsets, custom Android skins (MIUI, OneUI), proprietary bootloaders, and varying patch levels."
  },
  {
    id: 19,
    topic: "Thermal Constraints",
    question: "What physical phenomenon can occur during intensive physical extraction or passcode brute-forcing of a smartphone inside an enclosed forensic box?",
    options: [
      "Thermal throttling or automatic thermal shutdown due to lack of airflow, halting the forensic acquisition",
      "Permanent demagnetization of the internal solid-state flash memory cells",
      "Spontaneous inversion of the NAND flash floating gate charges",
      "Automatic activation of the factory recovery reset partition"
    ],
    answer: 0,
    explanation: "High-intensity operations (brute-forcing, hashing gigabytes of raw flash) generate significant heat. Inside a sealed Faraday box without airflow, smartphones reach thermal limits and shut down to protect hardware."
  },
  {
    id: 20,
    topic: "Forensic Evidence Triage",
    question: "If a seized smartphone is found submerged in water at a crime scene, what is the correct forensic handling protocol?",
    options: [
      "Keep the device submerged in the same source water inside an airtight container and transport it immediately to the lab without attempting to power it on",
      "Place the smartphone in a microwave oven on low power for 30 seconds to evaporate moisture",
      "Connect the device to a fast charger immediately to test whether the display illuminates",
      "Force-reboot the device repeatedly into Recovery mode using hardware button combinations"
    ],
    answer: 0,
    explanation: "Submerged devices must remain in the same liquid to prevent rapid corrosion caused by exposure to oxygen. In the lab, forensic specialists disassemble, ultrasonic-clean with pure isopropanol, and dry before attempting extraction."
  },

  // =========================================================================
  // TOPIC 3: TYPES OF ACQUISITIONS (LOGICAL, FILE SYSTEM, PHYSICAL) (Q21–Q30)
  // =========================================================================
  {
    id: 21,
    topic: "Mobile Acquisition Types",
    question: "What is a 'Manual Acquisition' in mobile device forensics?",
    options: [
      "Navigating through the user interface directly on the device touchscreen and documenting findings via photography or video recording",
      "Manually micro-soldering copper jumper wires to motherboard test points",
      "Typing raw AT modem commands into a serial terminal to extract SMS messages",
      "Manually entering SQL queries directly into the SQLite database console"
    ],
    answer: 0,
    explanation: "Manual acquisition involves using the device's own touchscreen or keypad to view data directly on the screen, capturing evidence using high-resolution cameras or specialized camera stands."
  },
  {
    id: 22,
    topic: "Mobile Acquisition Types",
    question: "What data is typically acquired during a standard 'Logical Extraction' of a smartphone?",
    options: [
      "Active files, databases, and application records accessible via the OS APIs or standard backup routines, without unallocated space",
      "A complete bit-stream raw image of all physical NAND flash memory sectors including unallocated space",
      "The volatile contents of RAM memory registers and CPU cache lines only",
      "The compiled firmware code stored in the read-only BootROM microchip"
    ],
    answer: 0,
    explanation: "Logical extraction queries the mobile operating system using APIs, AT commands, or backup protocols (ADB backup, iTunes backup) to retrieve live, structured files. It does NOT acquire unallocated space or raw deleted data."
  },
  {
    id: 23,
    topic: "Mobile Acquisition Types",
    question: "How does a 'File System Extraction' (Advanced Logical) differ from a basic Logical Extraction?",
    options: [
      "It extracts the full accessible hierarchical directory structure and system files (including logs, plists, and sandboxed app data), rather than just API-exported contacts and SMS",
      "It desolders the flash chip from the motherboard to read raw binary sectors",
      "It ignores the file system entirely and reads unallocated space only",
      "It modifies the operating system kernel to disable file permissions permanently"
    ],
    answer: 0,
    explanation: "File system extraction captures the complete directory structure (including system files, application databases, cache directories, and log files). It provides far more context than a simple logical backup extraction."
  },
  {
    id: 24,
    topic: "Mobile Acquisition Types",
    question: "What is a 'Physical Extraction' in mobile device forensics?",
    options: [
      "A bit-by-bit (bit-stream) binary image copy of the entire physical flash memory, capturing allocated files, unallocated space, and deleted data",
      "Weighing and physically measuring the external dimensions of the mobile smartphone",
      "Disassembling the external plastic housing to inspect internal antenna wiring",
      "Using a stylus to manually navigate the device settings menu"
    ],
    answer: 0,
    explanation: "Physical extraction produces an exact bit-by-bit copy of the physical flash memory. It captures everything, including deleted files, unallocated space, file system metadata, and hidden partitions."
  },
  {
    id: 25,
    topic: "Acquisition Comparison",
    question: "Which acquisition type provides the highest likelihood of recovering deleted WhatsApp messages and deleted call logs from SQLite freelists?",
    options: [
      "Physical Extraction (or Full File System with WAL parsing)",
      "Standard Logical Extraction",
      "Manual Screen Capture",
      "SIM Card Logical Extraction"
    ],
    answer: 0,
    explanation: "Physical extraction (and full file system extraction) captures SQLite Write-Ahead Logs (`-wal`), rollback journals, and unallocated database freelists where deleted records reside before being vacuumed or overwritten."
  },
  {
    id: 26,
    topic: "Mobile Forensic Integrity",
    question: "Why does any logical or file-system acquisition of a live smartphone inevitably cause minor metadata changes on the target device?",
    options: [
      "Because the running mobile OS must update system logs, battery stats, and communication sockets to execute the extraction agent",
      "Because forensic extraction cables reverse the electrical polarity of the NAND flash memory",
      "Because cellular carriers detect extractions and automatically rewrite the partition table",
      "Because SQLite databases automatically delete all records when connected to a computer"
    ],
    answer: 0,
    explanation: "Unlike dead-box computer hard drives attached to hardware write-blockers, a live smartphone is actively running an operating system. Running extraction agents or ADB commands inevitably writes tiny temporary log entries into RAM and storage."
  },
  {
    id: 27,
    topic: "USB Debugging Protocol",
    question: "What developer feature on Android devices must typically be enabled to permit logical and file system extraction via the Android Debug Bridge (ADB)?",
    options: [
      "USB Debugging (Developer Options)",
      "Fastboot OEM Lock",
      "Factory Recovery Mode",
      "Emergency Download (EDL)"
    ],
    answer: 0,
    explanation: "USB Debugging establishes an ADB connection between the computer and Android's `adbd` background daemon, permitting shell command execution, application backup pulling, and forensic extraction."
  },
  {
    id: 28,
    topic: "iOS Trust Handshake",
    question: "When connecting an iPhone to a forensic computer for logical acquisition, what prompt must be accepted on the iPhone screen to allow data communication?",
    options: [
      "'Trust This Computer?' dialog accompanied by entering the device passcode",
      "'Enable Root Access?' confirmation dialog",
      "'Format External Storage?' system prompt",
      "'Download Firmware Update?' Apple ID prompt"
    ],
    answer: 0,
    explanation: "Apple iOS requires explicit user authorization via the 'Trust This Computer?' prompt, requiring the device passcode. This creates cryptographic pairing lockdown records exchange (`pairing_records.plist`)."
  },
  {
    id: 29,
    topic: "Mobile Forensic Verification",
    question: "What mathematical process is executed immediately after completing a mobile physical extraction to prove evidence integrity in a court of law?",
    options: [
      "Computing cryptographic hashes (MD5 / SHA-256) of the acquired image file and logging them in the chain of custody",
      "Uploading the extraction image directly to the vendor's cloud server for approval",
      "Re-encrypting the forensic image using a disposable AES-128 key",
      "Compressing the extraction file into an unverified RAR archive"
    ],
    answer: 0,
    explanation: "Computing cryptographic hash values (SHA-256/MD5) verifies that the forensic bit-stream image has not been altered or tampered with since the moment of acquisition, establishing legal admissibility under Section 65B BSA."
  },
  {
    id: 30,
    topic: "SIM Extraction Scope",
    question: "What specific categories of evidence can be recovered from an isolated extraction of a physical SIM card alone?",
    options: [
      "ICCID, IMSI, service provider name, SMS messages stored on SIM (EF_SMS), and fixed dialing contacts (EF_ADN)",
      "Full encrypted WhatsApp chat databases and downloaded media files",
      "Saved Wi-Fi WPA2 network passwords and browser search history",
      "High-resolution camera photos and GPS location coordinates"
    ],
    answer: 0,
    explanation: "SIM cards have minimal memory (64–128 KB). They store telecom identifiers (ICCID, IMSI), carrier service profile data, a small number of 2G-era text messages (EF_SMS), and basic contacts (EF_ADN)."
  },

  // =========================================================================
  // TOPIC 4: HARDWARE & LOW-LEVEL ACQUISITIONS (EDL, JTAG, ISP, CHIP-OFF) (Q31–Q40)
  // =========================================================================
  {
    id: 31,
    topic: "Qualcomm EDL Mode",
    question: "What is Emergency Download Mode (EDL) in Qualcomm-powered Android smartphones?",
    options: [
      "A low-level BootROM diagnostic state that communicates over USB via the Qualcomm HS-USB QDLoader 9008 protocol, bypassing the OS and lock screen to dump raw flash partitions",
      "A user-accessible Android recovery menu option used to clear application cache",
      "A satellite emergency SOS mode used to broadcast distress beacons",
      "An automated factory reset procedure triggered when battery voltage drops below 5%"
    ],
    answer: 0,
    explanation: "Qualcomm EDL mode (Qualcomm HS-USB QDLoader 9008) is an unbrick/diagnostic state hardcoded in the Primary BootLoader (PBL) inside the SoC BootROM. It allows sending specialized programmer loaders (Firehose) to dump physical flash partitions directly."
  },
  {
    id: 32,
    topic: "Qualcomm EDL Extraction",
    question: "In Qualcomm EDL forensic extraction, what proprietary binary file must be delivered to the device to initialize memory read operations?",
    options: [
      "A Firehose programmer file (ELF / MBN binary signed for that chipset)",
      "A standard Windows DLL driver file",
      "An uncompiled Java source code file",
      "A generic Android APK installer file"
    ],
    answer: 0,
    explanation: "The Firehose programmer (an ELF/MBN binary tailored to that specific Qualcomm SoC) is uploaded into device RAM over USB in EDL mode. It communicates via XML commands to read raw flash blocks."
  },
  {
    id: 33,
    topic: "MediaTek BROM Mode",
    question: "What is the equivalent low-level BootROM hardware acquisition mode used on MediaTek (MTK) chipset devices?",
    options: [
      "MediaTek BootROM (BROM) / Preloader mode",
      "Samsung Odin Download mode",
      "Apple DFU (Device Firmware Upgrade) mode",
      "Intel Fastboot tethered mode"
    ],
    answer: 0,
    explanation: "MediaTek devices possess an embedded BootROM (BROM) mode. Forensic tools exploit BROM vulnerabilities (e.g., SLA/DA bypass) to load custom Download Agents (DA) and read physical flash memory without authentication."
  },
  {
    id: 34,
    topic: "JTAG Forensics",
    question: "What is JTAG (Joint Test Action Group) forensics in mobile hardware analysis?",
    options: [
      "Connecting specialized hardware probes to standardized IEEE 1149.1 boundary-scan test points on the phone's circuit board to read flash memory via the CPU",
      "Disassembling the touch screen to read optical light patterns emitted by OLED pixels",
      "Using a wireless infrared camera to measure thermal radiation from the battery",
      "Transmitting acoustic pulses through the speaker to measure memory resistance"
    ],
    answer: 0,
    explanation: "JTAG (IEEE 1149.1) utilizes hardware test access ports (TDI, TDO, TCK, TMS, TRST) on the motherboard. Forensic tools instruct the CPU to execute boundary-scan instructions and stream raw memory contents directly to an extraction box."
  },
  {
    id: 35,
    topic: "JTAG Architecture",
    question: "Which standardized hardware signal pins are required to establish a functional JTAG boundary-scan forensic connection?",
    options: [
      "TDI (Test Data In), TDO (Test Data Out), TCK (Test Clock), TMS (Test Mode Select), and GND",
      "TXD (Transmit), RXD (Receive), CTS (Clear to Send), and RTS (Request to Send)",
      "SDA (Serial Data), SCL (Serial Clock), VCC, and MOSI",
      "D+ (Data Positive), D- (Data Negative), VBUS, and ID"
    ],
    answer: 0,
    explanation: "Standard JTAG requires: TDI (Test Data Input), TDO (Test Data Output), TCK (Test Clock), TMS (Test Mode Select), TRST (optional Test Reset), and GND."
  },
  {
    id: 36,
    topic: "In-System Programming (ISP)",
    question: "How does In-System Programming (ISP) forensics differ fundamentally from JTAG forensics?",
    options: [
      "ISP micro-solders directly to the eMMC/UFS memory chip bus lines (DAT0, CMD, CLK), reading memory directly without involving the phone's CPU",
      "ISP relies on standard Bluetooth wireless connections without physical soldering",
      "ISP requires completely desoldering the flash chip from the motherboard",
      "ISP uses the phone's front camera to scan internal QR codes"
    ],
    answer: 0,
    explanation: "In-System Programming (ISP) bypasses the processor entirely by micro-soldering fine jumper wires directly to the eMMC/UFS memory communication lines (DAT0, CMD, CLK, VCC, VCCQ, GND), reading the flash memory chip directly on the board."
  },
  {
    id: 37,
    topic: "ISP Hardware Pinouts",
    question: "Which bus line in an eMMC In-System Programming (ISP) pinout carries the actual binary data payload during 1-bit extraction mode?",
    options: [
      "DAT0 (Data Line 0)",
      "CLK (Clock)",
      "CMD (Command)",
      "VCCQ (I/O Voltage)"
    ],
    answer: 0,
    explanation: "In 1-bit ISP extraction mode, DAT0 carries the serialized binary data output from the eMMC flash chip. CMD sends commands, CLK synchronizes clock pulses, and VCC/VCCQ provide power."
  },
  {
    id: 38,
    topic: "Chip-Off Forensics",
    question: "What physical procedure defines 'Chip-Off' forensics in mobile device hardware analysis?",
    options: [
      "Physically desoldering the Ball Grid Array (BGA) flash memory chip from the motherboard using precision heat, and reading it in a dedicated hardware programmer socket",
      "Using a sharp chisel to physically cut the phone's aluminum chassis open",
      "Removing the plastic SIM card tray using an ejection pin tool",
      "Peeling off the tempered glass screen protector to view underlying fingerprints"
    ],
    answer: 0,
    explanation: "Chip-Off is an invasive, destructive method where the BGA memory chip (eMMC/UFS) is desoldered from the PCB using an infrared/hot-air rework station, cleaned, and inserted into a dedicated chip programmer reader."
  },
  {
    id: 39,
    topic: "Chip-Off Limitations",
    question: "Why is Chip-Off forensics largely ineffective against modern smartphones (Android 10+ and modern iPhones) even if the flash chip is desoldered successfully?",
    options: [
      "Because File-Based Encryption (FBE) and hardware-bound keys inside the SoC's secure enclave mean the raw dumped NAND flash is completely encrypted and unreadable without the original processor",
      "Because modern flash chips immediately erase themselves when exposed to room temperature air",
      "Because BGA solder balls cannot be re-melted using standard lead-free solder alloys",
      "Because modern memory sockets are illegal under international telecommunication treaties"
    ],
    answer: 0,
    explanation: "Modern devices use hardware-backed File-Based Encryption (FBE). The master cryptographic keys are derived from hardware fuses (UID) inside the SoC processor / Secure Enclave. Extracting the flash chip yields only raw AES-encrypted ciphertext!"
  },
  {
    id: 40,
    topic: "Chip-Off Packaging",
    question: "What standardized Ball Grid Array (BGA) package type is commonly encountered on legacy and budget Android eMMC flash memory chips?",
    options: [
      "BGA-153 / BGA-169 and BGA-221",
      "DIP-8 and SOIC-16",
      "TO-220 and SOT-23",
      "PGA-370 and LGA-1151"
    ],
    answer: 0,
    explanation: "Mobile eMMC flash storage chips are packaged as Ball Grid Arrays, most commonly BGA-153, BGA-169, and BGA-221 (incorporating eMCP RAM+NAND). Modern UFS chips use BGA-254."
  },

  // =========================================================================
  // TOPIC 5: ROOTING & SYSTEM PRIVILEGES (Q41–Q50)
  // =========================================================================
  {
    id: 41,
    topic: "Android Rooting Fundamentals",
    question: "What is the technical objective of 'Rooting' an Android mobile smartphone?",
    options: [
      "Gaining superuser privileges (UID 0 / root) to bypass the standard Linux application sandbox and security restrictions",
      "Permanently disabling the cellular baseband radio transceiver",
      "Replacing the physical battery with a higher voltage power cell",
      "Converting the internal storage from ext4/F2FS into Microsoft NTFS format"
    ],
    answer: 0,
    explanation: "Rooting grants superuser access (`root`, UID 0). By default, Android sandboxes every app under its own unprivileged UID (`u0_aXXX`). Root allows total access to all application directories, system partitions, and raw block devices."
  },
  {
    id: 42,
    topic: "Rooting Execution Mechanism",
    question: "Traditionally, how did root management utilities (like SuperSU) grant elevated privileges to requesting applications?",
    options: [
      "By placing a setuid-root 'su' binary into system executable directories (e.g., /system/xbin/su)",
      "By rewriting the physical silicon circuitry of the Qualcomm Snapdragon CPU",
      "By registering a fake cellular tower profile in the baseband modem",
      "By generating a self-signed SSL certificate in Google Chrome"
    ],
    answer: 0,
    explanation: "Legacy rooting installed a modified `su` (substitute user) binary with the setuid bit enabled into `/system/bin` or `/system/xbin`. When an app requested root, the `su` daemon prompted the user and spawned a root shell."
  },
  {
    id: 43,
    topic: "Systemless Rooting",
    question: "Why do modern root solutions (such as Magisk) employ 'Systemless Rooting' rather than modifying the `/system` partition directly?",
    options: [
      "To avoid modifying the read-only /system partition, preventing cryptographic verification failures in Android Verified Boot (dm-verity) and passing Google Play Integrity checks",
      "Because the /system partition does not exist in versions of Android past version 4.4",
      "Because modifying /system causes the lithium-ion battery to rapidly discharge",
      "Because systemless rooting allows root access without requiring an unlocked bootloader"
    ],
    answer: 0,
    explanation: "Modern Android enforces `dm-verity` (cryptographic kernel verification of the `/system` block device). Modifying `/system` causes boot loops. Magisk modifies `boot.img` and overlays files in memory via tmpfs, leaving the physical system partition untouched."
  },
  {
    id: 44,
    topic: "Android Verified Boot",
    question: "What security mechanism in Android uses cryptographic hash trees to ensure the integrity of the operating system partitions (/system, /vendor) during boot?",
    options: [
      "dm-verity (Device Mapper Verity / Android Verified Boot)",
      "SELinux Enforcing Mode",
      "SafetyNet Attestation API",
      "Zygote Process Cloning"
    ],
    answer: 0,
    explanation: "`dm-verity` (a Linux kernel feature used in Android Verified Boot) uses a Merkle hash tree to verify block-by-block integrity of read-only partitions. If even a single byte is modified, the signature check fails and the device halts boot."
  },
  {
    id: 45,
    topic: "Hardware Security Flags",
    question: "In Samsung Galaxy smartphones, what hardware-level security mechanism permanently records an irreversible bit flip when a custom recovery or root kernel is flashed?",
    options: [
      "The Samsung Knox Warranty Bit (eFuse 0x1 permanent hardware burn)",
      "The Qualcomm EDL hardware jumper fuse",
      "The MediaTek preloader signature register",
      "The Google Titan M2 firmware revocation flag"
    ],
    answer: 0,
    explanation: "Samsung Knox incorporates an electronic hardware fuse (eFuse). Flashing unauthorized software blows the microscopic physical fuse, permanently flipping the Knox Warranty Bit from `0x0` to `0x1`, permanently disabling Knox Vault, Samsung Pay, and Secure Folder."
  },
  {
    id: 46,
    topic: "Bootloader Security",
    question: "What is the primary forensic consequence of 'Unlocking the Bootloader' on modern Android devices (e.g., via `fastboot oem unlock` or `fastboot flashing unlock`)?",
    options: [
      "The device automatically triggers a complete factory reset, securely wiping all user data (/data partition) to prevent data theft",
      "The device hardware clock permanently stops running",
      "The SIM card is permanently locked with PUK code",
      "The cellular modem baseband firmware is permanently erased"
    ],
    answer: 0,
    explanation: "For user privacy, unlocking the bootloader triggers an automated cryptographic factory reset of the `/data` (userdata) partition. An investigator cannot simply unlock a locked suspect's bootloader without destroying the evidence!"
  },
  {
    id: 47,
    topic: "Forensic Value of Rooting",
    question: "From an investigative perspective, why is temporary root access (temp-root) highly desirable during live Android forensic acquisition?",
    options: [
      "It allows the forensic tool to bypass SELinux restrictions and read raw block devices (`/dev/block/bootdevice/by-name/userdata`) for full physical extraction",
      "It permanently prevents the suspect from changing their Google account password",
      "It allows the forensic workstation to charge the smartphone twice as fast",
      "It automatically decrypts WhatsApp end-to-end encrypted voice calls in real time"
    ],
    answer: 0,
    explanation: "Without root, forensic tools are restricted by the application sandbox and cannot access private `/data/data/` app directories or raw storage block devices. Root allows dumping raw partition images directly over ADB."
  },
  {
    id: 48,
    topic: "Forensic Integrity of Rooting",
    question: "What is the primary legal and evidentiary challenge of rooting a suspect's smartphone to achieve extraction?",
    options: [
      "Defense attorneys may argue that flashing root tools altered the system file system, potentially compromising evidence integrity and chain of custody",
      "Indian Evidence Act / BSA strictly bars any evidence acquired using open-source tools",
      "Rooting a device automatically deletes all existing call history records",
      "Rooted smartphones cannot be physically photographed inside a courtroom"
    ],
    answer: 0,
    explanation: "Rooting modifies device memory or partitions. In court, defense counsel may argue evidence spoliation—that the forensic examiner's root exploit injected files, altered timestamps, or modified the target file system."
  },
  {
    id: 49,
    topic: "Custom Recoveries",
    question: "What third-party custom recovery environment is frequently used by forensic examiners to execute physical extractions on unlocked Android devices?",
    options: [
      "TWRP (Team Win Recovery Project)",
      "GNU GRUB2 Bootloader",
      "Windows Recovery Environment (WinRE)",
      "Apple DFU Diagnostic Shell"
    ],
    answer: 0,
    explanation: "TWRP is an open-source custom recovery that boots into an unconstrained Linux environment with a touchscreen UI, built-in ADB server running as root, and partition mounting utilities."
  },
  {
    id: 50,
    topic: "SELinux Enforcement",
    question: "What Mandatory Access Control (MAC) system, originally created by the NSA, enforces strict security policies on all Android processes even if an attacker gains root (UID 0)?",
    options: [
      "Security-Enhanced Linux (SELinux in Enforcing Mode)",
      "AppArmor Profiles",
      "Linux Pluggable Authentication Modules (PAM)",
      "Discretionary Access Control (DAC) file modes"
    ],
    answer: 0,
    explanation: "SELinux (Security-Enhanced Linux) enforces Mandatory Access Control (MAC). Even if a process escalates to `root` (UID 0), SELinux policy rules restrict what domains it can transition to and which block devices it can access."
  }
];

