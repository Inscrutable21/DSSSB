// Book 4 MCQs Part 3: Topics 11–15 (Q101–Q150)
// High-yield DSSSB Cyber Forensic questions

module.exports = [
  // =========================================================================
  // TOPIC 11: ANDROID ARTEFACTS PART 2 - THIRD-PARTY APPS & MEDIA (Q101–Q110)
  // =========================================================================
  {
    id: 101,
    topic: "WhatsApp Database Encryption",
    question: "In Android WhatsApp forensics, what cryptographic mechanism protects the chat database file `msgstore.db.crypt14` or `msgstore.db.crypt15` stored in external shared storage?",
    options: [
      "AES-256 in GCM or CBC mode using a 32-byte symmetric key stored securely in the app's private sandbox directory (`/data/data/com.whatsapp/files/key`)",
      "DES-56 encryption using the user's phone number as the plaintext password",
      "RSA-4096 asymmetric encryption where WhatsApp holds the only private key on their cloud servers",
      "Plain unencrypted SQLite storage with an obfuscated `.crypt` file extension"
    ],
    answer: 0,
    explanation: "WhatsApp backup databases in external storage (`msgstore.db.crypt14/15`) are encrypted using AES-256. To decrypt these backups offline, the examiner must extract the 32-byte encryption key from WhatsApp's protected private directory (`/data/data/com.whatsapp/files/key`), requiring root or physical/agent extraction."
  },
  {
    id: 102,
    topic: "Telegram Forensic Artefacts",
    question: "Where does Telegram store its local user accounts, contact lists, and cached non-secret chat history on an Android device?",
    options: [
      "In `/data/data/org.telegram.messenger/databases/` primarily within `cache4.db`",
      "In `/system/etc/telegram/messages.xml`",
      "In `/sdcard/Download/telegram_chats.txt`",
      "In the SIM card's elementary file EF_SMS"
    ],
    answer: 0,
    explanation: "Telegram stores user session details, contacts, messages, and metadata in SQLite databases within its private sandbox directory `/data/data/org.telegram.messenger/databases/`, with the main database named `cache4.db`."
  },
  {
    id: 103,
    topic: "Signal Messenger Forensics",
    question: "Why is the local SQLite database of Signal Messenger (`signal.db`) inaccessible to standard SQLite browsing tools even after extracting the raw file from `/data/data/org.thoughtcrime.securesms/`?",
    options: [
      "Signal utilizes SQLCipher full-database 256-bit AES encryption, requiring the dynamic passphrase derived from the device's Keystore or app preferences",
      "Signal converts all database tables into proprietary binary video blobs",
      "Signal does not use SQLite and writes directly to raw NAND sectors",
      "Signal automatically deletes its database every 5 minutes"
    ],
    answer: 0,
    explanation: "Signal uses SQLCipher, an open-source extension providing transparent 256-bit AES encryption of entire SQLite database files. The database passphrase is generated at installation and stored in protected app shared preferences or Android Keystore."
  },
  {
    id: 104,
    topic: "Android Browser Forensics (Chrome)",
    question: "In Android Google Chrome forensics, which SQLite database located in `/data/data/com.android.chrome/app_chrome/Default/` stores the user's web browsing history and downloaded file records?",
    options: [
      "History",
      "WebData.db",
      "Bookmarks.xml",
      "NetworkActionPredictor.log"
    ],
    answer: 0,
    explanation: "Google Chrome on Android utilizes the Chromium directory layout. The database named `History` (a SQLite file) contains the `urls` table (visited URLs, visit counts, last visit times) and the `downloads` table."
  },
  {
    id: 105,
    topic: "Chrome Timestamp Interpretation",
    question: "Timestamps recorded in Google Chrome's `History` SQLite database (in the `visits` and `urls` tables) are formatted using which epoch time standard?",
    options: [
      "WebKit / Chrome epoch: microseconds elapsed since January 1, 1601 UTC",
      "Unix epoch: seconds elapsed since January 1, 1970 UTC",
      "Mac OS X epoch: seconds elapsed since January 1, 2001 UTC",
      "Windows FILETIME: milliseconds elapsed since January 1, 1900 UTC"
    ],
    answer: 0,
    explanation: "Google Chrome and Chromium-based browsers record timestamps as microseconds since January 1, 1601 UTC (the WebKit/Chrome timestamp). To convert to Unix epoch seconds, subtract 11,644,473,600 and divide by 1,000,000."
  },
  {
    id: 106,
    topic: "Android MediaStore Architecture",
    question: "What is the primary role of the Android MediaStore database (`external.db`) located in `/data/data/com.android.providers.media/`?",
    options: [
      "It serves as the central indexed catalog of all audio, video, and image files stored on internal and external storage, indexing file paths, file sizes, MIME types, and date added/modified",
      "It contains the AES-256 decryption keys for streaming media applications like Spotify and Netflix",
      "It acts as a firewall blocking malicious audio files from reaching the baseband processor",
      "It records the hardware serial numbers of connected Bluetooth headphones"
    ],
    answer: 0,
    explanation: "The Android MediaStore provider indexes all media files across storage volumes in `external.db`. It contains tables such as `images`, `video`, `audio`, and `files`, allowing forensic examiners to discover media metadata even if the actual media files were deleted or moved."
  },
  {
    id: 107,
    topic: "EXIF Metadata Forensics",
    question: "Which EXIF metadata tags embedded in smartphone JPEG photos provide high-value evidentiary proof of a suspect's physical presence at a crime scene?",
    options: [
      "`GPSLatitude`, `GPSLongitude`, `GPSAltitude`, `GPSTimeStamp`, and `Make`/`Model`",
      "`NetworkSubnetMask` and `DHCPLeaseTime`",
      "`ICCID` and `BasebandFirmwareRevision`",
      "`BatteryTemperature` and `ChargingCycles`"
    ],
    answer: 0,
    explanation: "Exchangeable Image File Format (EXIF) metadata embedded in smartphone camera images can store GPS coordinates (`GPSLatitude`, `GPSLongitude`), altitude, UTC timestamp of image capture, camera make/model, aperture, and focal length."
  },
  {
    id: 108,
    topic: "Android Keystore System",
    question: "What is the primary security advantage of storing cryptographic keys inside the hardware-backed Android Keystore system?",
    options: [
      "Key material is bound to a Hardware Security Module (HSM), Trusted Execution Environment (TEE), or StrongBox chip, preventing keys from being extracted into application memory or exposed to root users",
      "It increases the storage speed of SQLite databases by 500%",
      "It automatically transmits backup copies of keys to the mobile network operator",
      "It allows keys to be shared across all installed third-party apps without authentication"
    ],
    answer: 0,
    explanation: "The Android Keystore system protects cryptographic keys by performing cryptographic operations inside a hardware-backed environment (TEE or StrongBox Keymaster/Keystore). Key material never enters the host Android OS memory, preventing extraction even on a rooted device."
  },
  {
    id: 109,
    topic: "Cloud Synced App Artefacts",
    question: "When examining an Android phone where a messaging application's local database has been wiped, what secondary local forensic artefact can reveal incoming messages sent via Firebase Cloud Messaging (FCM)?",
    options: [
      "Google Play Services FCM notification logs, SQLite notification caches, and Android notification database (`notification_log.db` or notification dumpsys)",
      "The baseband modem NVRAM partition",
      "The recovery kernel log `/dev/urandom`",
      "The SIM card elementary file EF_ARR"
    ],
    answer: 0,
    explanation: "Push notifications delivered through Firebase Cloud Messaging (FCM) are handled by Google Play Services and the Android Notification Manager. Notification text, senders, and timestamps are often cached in notification databases or logged in `dumpsys notification`."
  },
  {
    id: 110,
    topic: "Chrome Cookies Forensics",
    question: "In Android Chrome, how are session authentication tokens and tracking cookies stored in the `Cookies` SQLite database in modern Android releases?",
    options: [
      "The cookie `value` column is encrypted using AES-128/256 with an encryption key protected by the Android Keystore system",
      "They are stored in unencrypted Base64 plaintext accessible to any app",
      "They are stored in pure binary executable assembly code",
      "They are stored on the SIM card's secure element"
    ],
    answer: 0,
    explanation: "Modern Chromium/Chrome implementations encrypt sensitive cookie values stored in the `Cookies` database using an encryption key protected by the system's keystore/credential manager, preventing unauthorized local reading of session tokens."
  },

  // =========================================================================
  // TOPIC 12: TOOLS & TECHNOLOGIES FOR ANDROID FORENSICS (Q111–Q120)
  // =========================================================================
  {
    id: 111,
    topic: "Android Debug Bridge (ADB)",
    question: "Which Android Debug Bridge (ADB) command creates an archive of application data and shared storage without requiring device rooting, provided apps allow backup?",
    options: [
      "`adb backup -apk -shared -all -f backup.ab`",
      "`adb dump --raw-memory /dev/block/bootdevice`",
      "`adb extract-all --force-decryption`",
      "`adb pull /data/system/packages.list`"
    ],
    answer: 0,
    explanation: "The command `adb backup -apk -shared -all -f backup.ab` initiates a logical backup of APK files, application data (for apps where `android:allowBackup=\"true\"`), and shared storage, producing an Android Backup (`.ab`) file."
  },
  {
    id: 112,
    topic: "Android Backup Extraction",
    question: "What tool or utility is commonly used by digital forensic examiners to convert an Android Backup file (`.ab`) into a standard `.tar` archive for inspection?",
    options: [
      "Android Backup Extractor (ABE)",
      "Wireshark Protocol Analyzer",
      "Volatility Memory Framework",
      "Autopsy Sleuthkit Carving Module"
    ],
    answer: 0,
    explanation: "Android Backup Extractor (ABE) is a specialized Java utility that unpacks encrypted or unencrypted Android `.ab` backup archives into standard uncompressed `.tar` archives by removing the 24-byte backup header and decompressing the zlib stream."
  },
  {
    id: 113,
    topic: "Fastboot Mode Forensics",
    question: "In Android device triage, what is Fastboot mode and how is it used forensically?",
    options: [
      "A diagnostic bootloader protocol communicating over USB that allows reading hardware partition tables, OEM status, and booting custom forensic recovery images (`fastboot boot recovery.img`) without flashing NAND",
      "A high-speed cellular data protocol used to stream call recordings to carrier headquarters",
      "An in-app debugger for JavaScript code running in Google Chrome",
      "A power-saving mode that disables RAM refresh cycles to preserve battery life"
    ],
    answer: 0,
    explanation: "Fastboot is a bootloader-level protocol executed when the phone boots into the bootloader. Forensic examiners can use Fastboot on devices with unlocked (or temporarily vulnerable) bootloaders to query device variables (`fastboot getvar all`) or tether-boot a forensic recovery kernel without modifying NAND storage."
  },
  {
    id: 114,
    topic: "Andriller Forensic Suite",
    question: "What is Andriller in mobile forensic investigations?",
    options: [
      "A specialized open-source/commercial utility designed for Android smartphone collection, decoding communication databases, cracking lock screen patterns/PINs, and parsing WhatsApp/browser data",
      "A hardware flasher box used exclusively for iPhone A15 Bionic chip desoldering",
      "A network sniffer tool for intercepting 5G New Radio air-interface frames",
      "An automated password cracker for PDF document permissions"
    ],
    answer: 0,
    explanation: "Andriller is a dedicated utility for Android forensic investigations. It performs read-only acquisitions, extracts communication databases, parses app data, and performs automated pattern/PIN decoding on supported Android devices."
  },
  {
    id: 115,
    topic: "Cellebrite Physical Analyzer",
    question: "In mobile forensic laboratory operations, what is the specific role of Cellebrite Physical Analyzer?",
    options: [
      "Decoding, parsing, reconstructing, and reporting digital evidence from raw binary extractions, file system dumps, and logical backups collected by UFED hardware",
      "Transmitting over-the-air firmware updates to locked mobile devices",
      "Manufacture of Faraday bags and RF shielding enclosures",
      "Physical chemical desoldering of NAND flash memory chips"
    ],
    answer: 0,
    explanation: "While Cellebrite UFED devices extract the raw data from mobile devices, Cellebrite Physical Analyzer is the workstation software that decodes the extraction, parsing SQLite databases, reconstructing timelines, carving deleted files, and generating comprehensive forensic reports."
  },
  {
    id: 116,
    topic: "Magnet AXIOM Mobile",
    question: "What notable capability does Magnet AXIOM Mobile provide when analyzing extractions from modern Android devices?",
    options: [
      "Artifact-first parsing that simultaneously ingests mobile extractions, cloud tokens, and warrant returns, correlating cross-app communication, geolocation, and media",
      "Immediate hardware decryption of Qualcomm Titan M2 processors without any user passcode",
      "Over-the-air remote execution of live malware onto target devices",
      "Re-flashing target devices with stock OEM firmware during extraction"
    ],
    answer: 0,
    explanation: "Magnet AXIOM Mobile focuses on artifact-centric evidence processing, analyzing hundreds of mobile apps, cloud tokens, system artefacts, and warrant returns simultaneously to build unified forensic timelines."
  },
  {
    id: 117,
    topic: "MSAB XRY Extraction Types",
    question: "The MSAB XRY mobile forensics suite classifies extractions into which three primary operational levels?",
    options: [
      "Logical, File System (Advanced Logical), and Physical",
      "Passive, Aggressive, and Destructive",
      "Volatile, Semi-Volatile, and Non-Volatile",
      "Network, Cloud, and Satellite"
    ],
    answer: 0,
    explanation: "MSAB XRY structures its extractions into: (1) Logical (standard backup/API query), (2) File System / Extended Logical (full live directory tree extraction), and (3) Physical (bit-by-bit raw flash partition image)."
  },
  {
    id: 118,
    topic: "Oxygen Forensic Detective",
    question: "Which specialized capability is a hallmark feature of Oxygen Forensic Detective in mobile examinations?",
    options: [
      "Extensive parsing of encrypted cloud services, IoT companion apps, drone logs, and mobile lockscreen bypasses using proprietary bootloader exploits",
      "Exclusive restriction to desktop Windows Registry analysis with zero mobile support",
      "Manual hex-editing of raw NAND flash sectors without software decoding",
      "Direct satellite interception of ongoing cellular phone calls"
    ],
    answer: 0,
    explanation: "Oxygen Forensic Detective is known for deep mobile app decoding, cloud extraction (Oxygen Forensic Cloud Extractor), parsing IoT and smartwatch companion data, and low-level physical acquisition via bootloader/EDL exploits."
  },
  {
    id: 119,
    topic: "ADB Content Provider Queries",
    question: "An examiner with authorized ADB shell access uses the command `content query --uri content://telephony/carriers`. What forensic data is returned?",
    options: [
      "Configured Access Point Name (APN) settings, carrier proxy servers, and MMSC endpoints",
      "Live GPS coordinates of the mobile device",
      "Decrypted WhatsApp chat conversations",
      "The user's Google account password"
    ],
    answer: 0,
    explanation: "The command `content query --uri content://telephony/carriers` queries Android's telephony content provider, returning APN configuration records, carrier proxy settings, port numbers, and multimedia messaging endpoints."
  },
  {
    id: 120,
    topic: "Autopsy Android Module",
    question: "What is the primary function of the Android Analyzer module in the open-source Autopsy forensic platform?",
    options: [
      "Parsing common Android SQLite databases including Call Logs, SMS/MMS messages, Contacts, Tango, and Web History from an extracted Android disk image or folder structure",
      "Bypassing hardware FRP (Factory Reset Protection) on Samsung Exynos devices",
      "Generating deep-fake video evidence for courtroom demonstrations",
      "Writing exploit payloads directly into the device's Baseband Processor"
    ],
    answer: 0,
    explanation: "The Android Analyzer add-on module in Autopsy automatically ingests an Android file system or image, locates standard database files (such as `contacts2.db`, `telephony.db`, browser history), decodes records, and populates Autopsy's Blackboard evidence tree."
  },

  // =========================================================================
  // TOPIC 13: CHALLENGES & LIMITATIONS OF ANDROID FORENSICS (Q121–Q130)
  // =========================================================================
  {
    id: 121,
    topic: "FDE vs FBE in Android",
    question: "What is the critical architectural difference between legacy Full Disk Encryption (FDE) and modern File-Based Encryption (FBE) introduced in Android 7.0 and mandated in Android 10+?",
    options: [
      "FDE encrypts the entire userdata partition with a single key tied to the user password, whereas FBE encrypts individual files with different keys, separating storage into Device Encrypted (DE) and Credential Encrypted (CE) areas",
      "FDE encrypts only system apps while FBE encrypts only third-party apps",
      "FDE uses AES-56 while FBE uses 4096-bit RSA keys for every sector",
      "FDE requires internet access during boot while FBE operates completely offline"
    ],
    answer: 0,
    explanation: "In legacy Full Disk Encryption (FDE), a single key protected the entire userdata partition. In File-Based Encryption (FBE), different files are encrypted with different keys. This allows Direct Boot: the phone boots into Device Encrypted (DE) storage without user password entry, while Credential Encrypted (CE) storage remains locked until the user enters their PIN/pattern."
  },
  {
    id: 122,
    topic: "Direct Boot: DE vs CE Storage",
    question: "In an Android device operating in the Direct Boot state (powered on, booted, but before the user enters their lockscreen PIN for the first time), what data can be accessed?",
    options: [
      "Only Device Encrypted (DE) storage data, such as alarms, incoming call services, and accessibility settings; Credential Encrypted (CE) data remains completely encrypted",
      "All user WhatsApp chats and downloaded photos",
      "The entire unallocated space of the NAND flash memory",
      "All saved Google Chrome passwords and cookies"
    ],
    answer: 0,
    explanation: "Before the user unlocks the screen for the first time after a reboot, the device is in Direct Boot mode. Only Device Encrypted (DE) keys are available in memory (allowing basic phone functions like receiving calls, alarm clock). Credential Encrypted (CE) keys are unlocked only when the user inputs their screen lock credential."
  },
  {
    id: 123,
    topic: "Hardware Security Chips (Titan M2 / Knox)",
    question: "What role do dedicated hardware security coprocessors such as Google's Titan M2, Apple's Secure Enclave, or Samsung's Knox Vault play in thwarting forensic acquisition?",
    options: [
      "They enforce passcode rate-limiting, exponential backoff delays, and cryptographic key generation entirely off the main Application Processor, rendering brute-force attacks mathematically infeasible",
      "They physically discharge a high-voltage spark to incinerate the flash memory if an investigator touches the USB port",
      "They disable cellular baseband communications whenever a Faraday bag is detected",
      "They broadcast the device location via high-frequency audio tones to police servers"
    ],
    answer: 0,
    explanation: "Dedicated security chips (Google Titan M2, Apple Secure Enclave, Samsung Knox Vault) execute independent isolated microcode. They manage PIN verification, implement hardware rate-limiting (e.g. 30-second delays, max attempt lockouts), and protect the root master keys, preventing brute-force attacks on the main CPU."
  },
  {
    id: 124,
    topic: "OEM Bootloader Unlocking Wipe Policy",
    question: "What major forensic obstacle occurs when an investigator attempts to unlock an Android device's bootloader via the standard `fastboot oem unlock` or `fastboot flashing unlock` command?",
    options: [
      "The bootloader automatically triggers a mandatory cryptographic wipe / factory reset of the `/data` (userdata) partition",
      "The smartphone's battery is permanently disabled",
      "The device transforms into an iPhone operating system",
      "The IMEI number is permanently deleted from the baseband transceiver"
    ],
    answer: 0,
    explanation: "By Android security specification, executing bootloader unlock commands triggers an automatic, mandatory wipe of the userdata partition (`/data`) to prevent an unauthorized possessor from unlocking the bootloader to read the previous owner's encrypted files."
  },
  {
    id: 125,
    topic: "USB Debugging RSA Key Authorization",
    question: "Why can an examiner not simply connect a locked modern Android phone to a computer and execute `adb shell` or `adb pull`?",
    options: [
      "ADB requires the device to be unlocked and the user to explicitly accept the computer's RSA host key fingerprint via a physical confirmation pop-up on the touchscreen",
      "ADB only works over Bluetooth and does not support USB cables",
      "ADB was completely removed from Android starting in Android 8.0",
      "ADB commands can only be issued by the cellular network operator"
    ],
    answer: 0,
    explanation: "Android enforces RSA host authorization for ADB. Even if USB debugging is turned on, when connected to a new forensic workstation, the device presents a dialog asking the user to verify the computer's RSA key fingerprint, which requires an unlocked screen to accept."
  },
  {
    id: 126,
    topic: "Samsung Knox Warranty Bit (eFuse)",
    question: "What is the forensic consequence of tripping the Samsung Knox Warranty Bit (changing from `0x0` to `0x1`) during an unauthorized flashing attempt?",
    options: [
      "Hardware eFuses are blown permanently, irreversibly disabling Knox Vault, Secure Folder, Samsung Pay, and terminating enterprise data protection access",
      "The phone is rendered completely unbootable permanently (hard-bricked)",
      "The baseband modem changes its IMEI number to all zeros",
      "The display resolution is permanently reduced to 480p"
    ],
    answer: 0,
    explanation: "Samsung devices incorporate a physical hardware eFuse called the Knox Warranty Bit. Flashing non-OEM recovery or root images blows this fuse permanently (setting status to `0x1`). This irrevocably revokes access to Knox-protected containers like Secure Folder."
  },
  {
    id: 127,
    topic: "Qualcomm Snapdragon SPU",
    question: "What is the Qualcomm Secure Processing Unit (SPU) found in modern Snapdragon System-on-Chips (SoCs)?",
    options: [
      "An on-die hardware-isolated secure subsystem with its own dedicated CPU, crypto engines, and RAM, designed to protect biometric templates, banking credentials, and cryptographic keys",
      "A software application downloaded from the Google Play Store to optimize mobile gaming frame rates",
      "A peripheral sound processing unit responsible exclusively for Dolby Atmos audio",
      "An external microSD card reader with built-in Wi-Fi"
    ],
    answer: 0,
    explanation: "The Qualcomm Secure Processing Unit (SPU) is an integrated hardware-isolated enclave on modern Snapdragon SoCs. It features its own secure processor, cryptographic accelerators, and secure memory, isolating critical operations from the main Android OS."
  },
  {
    id: 128,
    topic: "Physical Acquisition Limitations on Modern UFS",
    question: "Why is a raw chip-off physical extraction of a modern Android device running Android 11+ using UFS storage often of zero evidentiary value without the device's hardware keys?",
    options: [
      "Because File-Based Encryption (FBE) encrypts every file payload with per-file keys that are derived from the user's passcode and hardware-bound keys inside the SoC's secure enclave",
      "Because UFS memory chips disintegrate when exposed to air",
      "Because raw UFS flash chips cannot be physically placed in memory chip readers",
      "Because UFS storage only retains data when continuously powered by a battery"
    ],
    answer: 0,
    explanation: "With modern hardware-backed File-Based Encryption (FBE), the raw flash memory dump obtained via chip-off contains only high-entropy encrypted ciphertext. Decryption requires both the user's passcode and the device-unique hardware secret embedded inside the original SoC's secure element."
  },
  {
    id: 129,
    topic: "Factory Reset Protection (FRP)",
    question: "What is Android Factory Reset Protection (FRP) and how does it affect device reactivation?",
    options: [
      "A security feature that prevents a device from being setup and used after an untrusted factory reset unless the credentials of the previously registered Google Account are entered",
      "A hardware switch inside the battery compartment that disables flash memory",
      "An automated backup system that uploads all files to Google Drive prior to reset",
      "A law enforcement backdoor allowing immediate root access on any Android device"
    ],
    answer: 0,
    explanation: "Factory Reset Protection (FRP) is designed to deter theft. If a device is factory reset via recovery mode or untrusted methods, the device requires the previous Google Account username and password during the initial setup wizard before granting access."
  },
  {
    id: 130,
    topic: "Ephemeral Evidence & Wear-Leveling",
    question: "Why is traditional data carving in unallocated space increasingly unreliable on modern mobile solid-state storage (NAND/UFS)?",
    options: [
      "Because Flash Translation Layer (FTL) garbage collection and the TRIM/discard command proactively erase and unmap deleted blocks to maintain write performance",
      "Because solid-state drives store data as analog audio waves",
      "Because Android deletes unallocated space every 60 seconds",
      "Because mobile flash memory does not have unallocated space"
    ],
    answer: 0,
    explanation: "The Flash Translation Layer (FTL) uses background garbage collection and TRIM/UNMAP commands to clear blocks that are no longer referenced by the file system. Once TRIM runs, the storage controller returns zeros or random data for unallocated blocks, preventing traditional data carving."
  },

  // =========================================================================
  // TOPIC 14: IOS ARCHITECTURE & SECURITY (Q131–Q140)
  // =========================================================================
  {
    id: 131,
    topic: "iOS Kernel Architecture",
    question: "The core operating system kernel of Apple's iOS is derived from which hybrid kernel architecture?",
    options: [
      "Darwin / XNU (X is Not Unix), combining the Mach microkernel, BSD subsystem, and I/O Kit object-oriented driver framework",
      "Pure Linux monolithic kernel with SELinux extensions",
      "Windows NT microkernel architecture with Win32 subsystem",
      "FreeBSD monolithic kernel without any microkernel components"
    ],
    answer: 0,
    explanation: "Apple's iOS (as well as macOS, watchOS, tvOS) is built on the Darwin operating system, whose XNU hybrid kernel combines the Mach 3.0 microkernel (thread scheduling, IPC, memory management), FreeBSD subsystem (POSIX APIs, user credentials, networking), and I/O Kit (C++ device driver framework)."
  },
  {
    id: 132,
    topic: "Secure Enclave Processor (SEP)",
    question: "What is the Secure Enclave Processor (SEP) in Apple iPhone architecture?",
    options: [
      "A dedicated hardware security coprocessor running its own isolated microkernel (sepOS), managing biometric data (Face ID / Touch ID), cryptographic keys, and passcode verification",
      "The primary multi-core graphics processing unit (GPU) responsible for rendering the home screen",
      "The baseband transceiver chip communicating with 4G/5G cellular towers",
      "A cloud server operated by Apple that verifies user logins remotely"
    ],
    answer: 0,
    explanation: "The Secure Enclave is a dedicated security coprocessor fabricated directly into Apple A-series and M-series chips. It runs sepOS, features its own secure memory, random number generator, and hardware AES engine, and is responsible for passcode authentication and biometric matching."
  },
  {
    id: 133,
    topic: "Hardware AES Engine & UID/GID",
    question: "Which unique, factory-fused cryptographic key embedded in Apple SoCs is inaccessible to software and known not even to Apple?",
    options: [
      "The Unique ID (UID) key fused into the Application Processor during silicon fabrication",
      "The Group ID (GID) key shared across all processors of a specific model family",
      "The Apple Developer Signing Certificate private key",
      "The International Mobile Station Equipment Identity (IMEI) key"
    ],
    answer: 0,
    explanation: "The Device Unique ID (UID) is a 256-bit AES key burned into the Application Processor during manufacturing. No software or firmware can read the raw UID key directly; only the hardware AES engine can use it for cryptographic operations, binding encryption directly to the physical silicon chip."
  },
  {
    id: 134,
    topic: "Apple Secure Boot Chain",
    question: "What is the chronological sequence of the Apple iOS Secure Boot chain?",
    options: [
      "Boot ROM (SecureROM) -> Low-Level Bootloader (LLB) -> iBoot -> iOS Kernel -> User Space",
      "iOS Kernel -> Boot ROM -> iBoot -> SpringBoard",
      "iBoot -> Boot ROM -> Low-Level Bootloader -> Secure Enclave",
      "Baseband Processor -> SecureROM -> SpringBoard -> iOS Kernel"
    ],
    answer: 0,
    explanation: "The iOS Secure Boot Chain begins at hardware fabrication: Boot ROM (SecureROM, immutable hardware code) verifies the Low-Level Bootloader (LLB), which verifies iBoot, which in turn verifies the iOS Kernel (XNU), ensuring that only cryptographically signed Apple firmware can execute."
  },
  {
    id: 135,
    topic: "Apple Data Protection Classes: Class A",
    question: "Under iOS Data Protection architecture, how does Complete Protection (Class A / `NSFileProtectionComplete`) protect files?",
    options: [
      "The file encryption key is erased from memory immediately when the device is locked, making the file inaccessible until the user unlocks the device with their passcode",
      "The file is encrypted with a public key and can only be opened when connected to Wi-Fi",
      "The file is readable at all times, even when the device is locked",
      "The file is stored exclusively on iCloud servers and never written to flash memory"
    ],
    answer: 0,
    explanation: "Class A (Complete Protection) provides the highest security: file encryption keys are derived from the user's passcode and the device UID, and are wiped from memory as soon as the screen is locked. Data is completely unreadable until the user unlocks the device."
  },
  {
    id: 136,
    topic: "Apple Data Protection Classes: Class C",
    question: "Which Apple Data Protection class protects files that must remain accessible after the device has been unlocked once following a boot, even while the screen is locked?",
    options: [
      "Protected Until First User Authentication (Class C / `NSFileProtectionCompleteUntilFirstUserAuthentication`)",
      "Complete Protection (Class A / `NSFileProtectionComplete`)",
      "Protected Unless Open (Class B / `NSFileProtectionCompleteUnlessOpen`)",
      "No Protection (Class D / `NSFileProtectionNone`)"
    ],
    answer: 0,
    explanation: "Class C (CompleteUntilFirstUserAuthentication) is the default class for most third-party app data. The file key remains in RAM after the first unlock following a boot. This enables background processes (like incoming emails or background sync) to write and read data even when the phone screen is subsequently locked."
  },
  {
    id: 137,
    topic: "Apple Data Protection Classes: Class B",
    question: "What characterizes Apple Data Protection Class B (`NSFileProtectionCompleteUnlessOpen`)?",
    options: [
      "A file can be created or opened while the device is unlocked, and remains accessible via asymmetric ephemeral key wrapping even if the device is subsequently locked while the file is open",
      "The file has zero encryption and is stored in cleartext",
      "The file can only be decrypted if an Apple Genius Bar technician approves it",
      "The file key is permanently destroyed after 10 minutes of inactivity"
    ],
    answer: 0,
    explanation: "Class B uses asymmetric cryptography: a file can be opened while the device is unlocked, and if the device is locked while the file is still open, the app can continue writing to it using an ephemeral public key pair without exposing the main private key."
  },
  {
    id: 138,
    topic: "Apple Data Protection Classes: Class D",
    question: "What is the security posture of Apple Data Protection Class D (`NSFileProtectionNone`)?",
    options: [
      "The file is encrypted only with the device hardware UID key; it is accessible at all times, even before the first passcode unlock after boot",
      "The file is completely unencrypted on disk with zero AES protection",
      "The file is deleted automatically upon locking the screen",
      "The file is protected by a 64-character master administrator password"
    ],
    answer: 0,
    explanation: "Class D files are protected only with a key derived from the hardware UID. Because this key does not depend on the user's passcode, Class D data is accessible whenever the device is booted, even in the BFU (Before First Unlock) state."
  },
  {
    id: 139,
    topic: "iOS Mandatory Access Control (MAC)",
    question: "Which security framework in the iOS Darwin kernel enforces Mandatory Access Control (MAC) rules restricting system calls and inter-process interactions?",
    options: [
      "TrustedBSD MAC framework combined with Apple Sandbox (`Seatbelt`) profile engine",
      "Linux AppArmor profile engine",
      "Windows Defender Security Center",
      "NetFilter iptables packet filter"
    ],
    answer: 0,
    explanation: "iOS security relies on the TrustedBSD Mandatory Access Control (MAC) framework integrated into the XNU kernel. The Apple Sandbox (internally called 'Seatbelt') enforces strict sandbox profiles (`.sb` files) on every third-party app and daemon."
  },
  {
    id: 140,
    topic: "Address Space Layout Randomization (ASLR)",
    question: "How does Kernel Address Space Layout Randomization (KASLR) enhance iOS defensive architecture?",
    options: [
      "It randomizes the memory locations of the iOS kernel code, stack, and heap at every boot, preventing attackers from using hardcoded memory offsets in Return-Oriented Programming (ROP) exploits",
      "It randomizes the physical pin locations on the Lightning/USB-C charging port",
      "It randomly changes the cellular IMEI number every 24 hours",
      "It compresses file system blocks to save flash storage space"
    ],
    answer: 0,
    explanation: "KASLR randomizes the base memory address of the kernel and executable binaries at boot time. An attacker cannot use fixed memory addresses to execute shellcode or ROP chains, requiring a separate memory leak vulnerability to bypass."
  },

  // =========================================================================
  // TOPIC 15: IOS FILE SYSTEM ARCHITECTURE & APP CONTAINERS (Q141–Q150)
  // =========================================================================
  {
    id: 141,
    topic: "APFS File System Architecture",
    question: "Introduced in iOS 10.3 to replace legacy HFS+, what modern 64-bit file system is standard across all contemporary Apple devices?",
    options: [
      "Apple File System (APFS)",
      "Extended File System 4 (EXT4)",
      "New Technology File System (NTFS)",
      "ZFS (Zettabyte File System)"
    ],
    answer: 0,
    explanation: "Apple File System (APFS) replaced HFS+ in iOS 10.3 (and macOS 10.13). Designed specifically for solid-state flash storage, APFS features 64-bit inode numbers, nanosecond timestamp precision, copy-on-write cloning, native multi-key encryption, and space sharing."
  },
  {
    id: 142,
    topic: "APFS Timestamp Precision",
    question: "What is the timestamp resolution provided by the Apple File System (APFS), and why is this critical for forensic timeline reconstruction?",
    options: [
      "Nanosecond (1 billionth of a second) precision, enabling precise sequence correlation of file creation, modification, and access events",
      "1-second precision identical to FAT32",
      "2-second precision identical to MS-DOS FAT16",
      "Millisecond precision identical to standard Unix epoch"
    ],
    answer: 0,
    explanation: "APFS supports nanosecond-level timestamp precision (compared to 1-second precision in legacy HFS+). This extreme granularity enables forensic investigators to determine the exact millisecond/microsecond sub-sequence of events during incident reconstruction."
  },
  {
    id: 143,
    topic: "iOS Partition Layout",
    question: "What are the two primary partitions on an iOS storage device, and how are they mounted?",
    options: [
      "System Partition (mounted read-only at `/`) and Data Partition (mounted read-write at `/private/var`)",
      "C: Drive (read-write) and D: Recovery Drive (read-only)",
      "EFI System Partition and Linux Swap Partition",
      "Boot Partition (mounted read-write) and Cache Partition (mounted read-only)"
    ],
    answer: 0,
    explanation: "iOS flash storage is split into two primary partitions: the System partition (containing the iOS operating system and native system binaries, mounted read-only at `/` to prevent tampering) and the Data partition (mounted read-write at `/private/var`, containing all user data, apps, and logs)."
  },
  {
    id: 144,
    topic: "iOS App Sandbox Container Layout",
    question: "Where are third-party iOS applications and their associated user data stored in the iOS file system?",
    options: [
      "Application binaries reside in `/private/var/containers/Bundle/Application/<UUID>/` while user data resides in `/private/var/containers/Data/Application/<UUID>/`",
      "All binaries and data reside in a single flat directory `/Applications/<AppName>/`",
      "In `/system/app/<AppName>/`",
      "In `/usr/bin/mobile/apps/`"
    ],
    answer: 0,
    explanation: "iOS separates app code and data into distinct container directories assigned unique 128-bit Universally Unique Identifiers (UUIDs): the Bundle Container (`/private/var/containers/Bundle/Application/<UUID>/`) holds the read-only `.app` bundle, while the Data Container (`/private/var/containers/Data/Application/<UUID>/`) holds user data."
  },
  {
    id: 145,
    topic: "App Data Container: Documents Directory",
    question: "Within an iOS app's Data Container (`/private/var/containers/Data/Application/<UUID>/`), what is the purpose of the `Documents/` sub-directory?",
    options: [
      "It stores critical user-generated content, documents, and databases that are automatically included in standard iTunes/iCloud backups",
      "It contains temporary scratch files that are wiped upon every device reboot",
      "It contains the compiled Mach-O executable code of the application",
      "It holds the application's icon images and localization strings"
    ],
    answer: 0,
    explanation: "The `Documents/` directory is intended for user-generated content, communication databases, and documents. By default, its contents are backed up during iTunes and iCloud backup operations, making it a primary target for forensic extraction."
  },
  {
    id: 146,
    topic: "App Data Container: Library Sub-Directories",
    question: "Where does an iOS application store its configuration preferences (`.plist` files) and cached network data within its Data Container?",
    options: [
      "Preferences in `Library/Preferences/` and cached data in `Library/Caches/`",
      "Preferences in `tmp/` and cached data in `System/`",
      "Preferences in `Documents/` and cached data in `Bundle/`",
      "Preferences in `/etc/` and cached data in `/var/log/`"
    ],
    answer: 0,
    explanation: "Inside the `Library/` directory of an app's container: `Library/Preferences/` stores user settings as property lists (`[BundleID].plist`), while `Library/Caches/` stores cached web data, images, and network responses (which are excluded from iTunes/iCloud backups)."
  },
  {
    id: 147,
    topic: "App Data Container: tmp Directory",
    question: "What is the forensic significance of the `tmp/` directory within an iOS application container?",
    options: [
      "It holds temporary data that the app does not need across app launches; the system may purge these files when the app is not running, but unpurged files may yield transient evidentiary data",
      "It stores the user's permanent cryptographic private keys",
      "It contains the operating system's kernel symbol table",
      "It is a read-only directory that cannot be modified by the app"
    ],
    answer: 0,
    explanation: "The `tmp/` directory is used for transient data that is not needed across multiple app invocations. While the operating system can purge this directory when storage is low or when the app is inactive, residual files, partial downloads, and temp databases frequently persist."
  },
  {
    id: 148,
    topic: "Shared App Groups Container",
    question: "When multiple apps from the same developer or app extensions need to share databases (e.g. WhatsApp and its notification extension), where is this shared data stored?",
    options: [
      "In the App Group Shared Container located at `/private/var/mobile/Containers/Shared/AppGroup/<UUID>/`",
      "In the root system directory `/private/var/root/`",
      "In the device's shared Bluetooth NVRAM",
      "Directly on the external SIM card"
    ],
    answer: 0,
    explanation: "Apps belonging to the same developer team that declare an App Group entitlement share a common container directory located at `/private/var/mobile/Containers/Shared/AppGroup/<UUID>/`. For example, WhatsApp stores its central chat database `ChatStorage.sqlite` in this shared container."
  },
  {
    id: 149,
    topic: "APFS Copy-on-Write Snapshots",
    question: "How do APFS snapshots function in iOS, and what is their forensic value?",
    options: [
      "They are read-only point-in-time frozen images of the file system; examiners can inspect previous states of the operating system or user data before an update or wiping event occurred",
      "They are photographs taken automatically by the front-facing camera when the wrong PIN is entered",
      "They are hardware memory dumps saved directly to the battery controller",
      "They are compressed ZIP archives automatically transmitted to law enforcement"
    ],
    answer: 0,
    explanation: "APFS snapshots create instantaneous, read-only point-in-time copies of a file system volume using copy-on-write pointers. In modern iOS versions (starting with Signed System Volume in iOS 14+), the OS boots from an immutable, sealed APFS snapshot of the System volume."
  },
  {
    id: 150,
    topic: "iOS Property Lists (.plist)",
    question: "What file format is ubiquitous throughout the iOS file system for storing configuration settings, application metadata, and system state?",
    options: [
      "Property Lists (`.plist`), encoded either as human-readable XML or optimized binary format (BPList00)",
      "Windows INI configuration files",
      "YAML files strictly formatted with 4-space indentation",
      "Comma-Separated Value (CSV) spreadsheets"
    ],
    answer: 0,
    explanation: "Apple systems use Property List (`.plist`) files extensively. While they can be formatted in XML, Apple compiles most system property lists into binary format (starting with the magic bytes `bplist00`). Forensic tools convert binary plists to JSON/XML for inspection."
  }
];

