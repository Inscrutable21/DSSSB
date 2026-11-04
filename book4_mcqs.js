var book4MCQs = [
  {
    "id": 1,
    "question": "Why must an active mobile smartphone seized at a crime scene be immediately shielded in a Faraday bag or container?",
    "options": [
      "To isolate the mobile radio hardware from cellular, Wi-Fi, Bluetooth, and satellite signals, preventing remote wiping or synchronization",
      "To discharge the internal capacitive touch screen controllers and prevent inadvertent screen lockouts",
      "To accelerate the internal flash memory wear leveling background garbage collection cycles",
      "To prevent magnetic flux lines from corrupting the master boot record partition table"
    ],
    "answer": 0,
    "explanation": "A Faraday enclosure blocks incoming radio frequency (RF) transmissions, preventing suspects or remote triggers from issuing remote wipe (erase) commands via 'Find My' or Google 'Find My Device'."
  },
  {
    "id": 2,
    "question": "Why is connecting a portable power bank to a seized smartphone inside a Faraday enclosure critically recommended during transit?",
    "options": [
      "To ensure that the mobile device automatically establishes an encrypted Bluetooth connection to police radio",
      "To prevent battery exhaustion which forces an AFU (After First Unlock) device to power down into BFU (Before First Unlock) state",
      "To continuously regenerate cryptographic SHA-256 integrity digests across the NAND flash storage bus",
      "To force the smartphone operating system to unlock its bootloader without wiping user partition data"
    ],
    "answer": 1,
    "explanation": "If an unlocked or AFU smartphone loses battery power, it reboots into BFU mode, purging sensitive decryption keys from RAM and Secure Enclave, making data extraction drastically more difficult or impossible."
  },
  {
    "id": 3,
    "question": "In mobile device forensics, what defines the 'Before First Unlock' (BFU) device security state?",
    "options": [
      "The device has been unlocked at least once and Class C encryption keys remain resident in volatile memory",
      "The device has had its bootloader officially unlocked by an authorized manufacturer development tool",
      "The device has booted but the user passcode has never been entered; encryption keys for user data remain purged from RAM",
      "The device has been placed into low-level Qualcomm Emergency Download Mode (EDL 9008)"
    ],
    "answer": 2,
    "explanation": "In BFU state (after power-on or reboot before passcode entry), sensitive file system encryption keys have not been derived or loaded into memory. Only minimal system services and emergency dialer functions are active."
  },
  {
    "id": 4,
    "question": "In mobile device forensics, what defines the 'After First Unlock' (AFU) device security state?",
    "options": [
      "The device has undergone a permanent factory hardware reset with all user data partitions zeroed",
      "The device is executing in unauthenticated bootloader recovery mode awaiting signed firmware flashing",
      "The device has completed automated cellular tower registration across all local base station controllers",
      "The user has entered the correct passcode once since boot; Class C encryption keys remain derived and resident in memory"
    ],
    "answer": 3,
    "explanation": "In AFU state, the device was unlocked with the passcode at least once. Even if currently locked, Class C (CompleteUntilFirstUserAuthentication) keys remain resident in RAM/SEP, enabling forensic tools to extract substantial data."
  },
  {
    "id": 5,
    "question": "What hardware-level physical acquisition technique involves desoldering the eMMC, eMCP, or UFS NAND flash memory chip from the smartphone motherboard?",
    "options": [
      "Chip-Off Extraction",
      "JTAG (Joint Test Action Group) Boundary Scan",
      "ISP (In-System Programming) Wire Tap",
      "EDL (Qualcomm Emergency Download) Acquisition"
    ],
    "answer": 0,
    "explanation": "Chip-off involves physically removing (desoldering) the flash storage chip from the circuit board and placing it into an external specialized socket/reader to read raw flash blocks directly."
  },
  {
    "id": 6,
    "question": "What hardware extraction method connects microscopic wires directly to circuit board test points (CLK, CMD, DAT0, VCC, GND) without desoldering the flash chip?",
    "options": [
      "Chip-Off Extraction",
      "In-System Programming (ISP)",
      "Qualcomm Emergency Download Mode (EDL)",
      "DFU (Device Firmware Upgrade) Mode"
    ],
    "answer": 1,
    "explanation": "ISP (In-System Programming) attaches fine jumper wires to eMMC/UFS test points on the circuit board, reading data directly from the flash chip while it remains mounted on the motherboard."
  },
  {
    "id": 7,
    "question": "What hardware debugging standard governed by IEEE 1149.1 utilizes specific circuit board test pins (TDI, TDO, TCK, TMS, TRST) to communicate directly with the processor?",
    "options": [
      "ISP (In-System Programming)",
      "UART (Universal Asynchronous Receiver-Transmitter)",
      "JTAG (Joint Test Action Group)",
      "I2C (Inter-Integrated Circuit)"
    ],
    "answer": 2,
    "explanation": "JTAG (IEEE 1149.1 boundary-scan) taps into test pins on the PCB to instruct the processor to dump raw flash memory contents without running the device's operating system."
  },
  {
    "id": 8,
    "question": "What proprietary low-level boot mode implemented in Qualcomm Snapdragon chipsets allows examiners to bypass bootloader locks using programmer firehose loaders (MBN/ELF)?",
    "options": [
      "Fastboot Recovery Download Mode",
      "MediaTek BootROM (BROM) Mode",
      "Samsung Odin Download Mode",
      "Emergency Download Mode"
    ],
    "answer": 3,
    "explanation": "Qualcomm EDL (Emergency Download Mode, presenting as Qualcomm HS-USB QDLoader 9008) is a primary bootloader recovery mode that allows raw sector reading/writing when authenticated with a chip-specific Firehose programmer. (EDL / Qualcomm HS-USB QDLoader 9008)"
  },
  {
    "id": 9,
    "question": "What low-level hardware vulnerability on Apple devices (A5 through A11 Bionic chipsets) allows unpatchable physical acquisition via DFU mode?",
    "options": [
      "checkm8 (SecureROM BootROM exploit)",
      "EternalBlue (SMBv1 buffer overflow)",
      "Stagefright (libstagefright media parser exploit)",
      "Baton Drop (UEFI boot manager revocation bypass)"
    ],
    "answer": 0,
    "explanation": "checkm8 is an unpatchable, read-only BootROM (SecureROM) exploit affecting Apple devices from iPhone 4S to iPhone X (A5-A11 chips). It executes arbitrary code in DFU mode, enabling physical memory and keychain dumping."
  },
  {
    "id": 10,
    "question": "What is the operational distinction between 'Logical Acquisition' and 'Physical Acquisition' in mobile device forensics?",
    "options": [
      "Logical extraction extracts encrypted hardware master keys; physical extraction captures only unencrypted text documents",
      "Logical extraction queries device APIs to extract active files and records; physical extraction copies raw bit-for-bit flash memory sectors including unallocated space",
      "Logical extraction requires desoldering flash memory chips; physical extraction is performed strictly over wireless Wi-Fi",
      "Logical extraction permanently alters device firmware; physical extraction operates in complete hardware read-only isolation"
    ],
    "answer": 1,
    "explanation": "Logical extraction extracts visible data (contacts, SMS, call logs) by interacting with the OS API or backup services. Physical extraction dumps the raw flash partitions (bit-by-bit), enabling carving of deleted databases and records."
  },
  {
    "id": 11,
    "question": "What is 'Advanced Logical' (or File System) extraction in mobile device forensics?",
    "options": [
      "Performing a chip-off hardware desoldering pass using high-temperature infrared rework stations",
      "Extracting SIM card subscriber data using an external smart card reader",
      "Extracting the full accessible directory tree, active application databases, system logs, and shared preferences, but without raw unallocated flash sectors",
      "Capturing cellular tower signaling data over the air using software-defined radio receivers"
    ],
    "answer": 2,
    "explanation": "File System (Advanced Logical) acquisition extracts all accessible files and directories from the phone's file systems (including SQLite databases, plist files, logs, and caches), providing far more depth than standard logical backup."
  },
  {
    "id": 12,
    "question": "What standard command-line utility in the Android SDK provides administrative communication with an Android device over USB when USB Debugging is enabled?",
    "options": [
      "Fastboot CLI Utility",
      "Odin Download Tool",
      "TWRP Recovery Daemon",
      "ADB (Android Debug Bridge)"
    ],
    "answer": 3,
    "explanation": "ADB (Android Debug Bridge) is the client-server utility used to communicate with Android devices, execute shell commands, pull/push files, and initiate backups over USB when Developer Options and USB Debugging are active."
  },
  {
    "id": 13,
    "question": "What file is generated on a host PC and transferred to an Android device when a user authorizes 'Allow USB Debugging' with an RSA fingerprint prompt?",
    "options": [
      "adbkey.pub",
      "super_user.pem",
      "android_root.crt",
      "fastboot_auth.bin"
    ],
    "answer": 0,
    "explanation": "Android requires cryptographic authentication for ADB. The host computer generates an RSA key pair; when the user taps 'Allow', the host's public key ('adbkey.pub') is added to the device's '/data/misc/adb/adb_keys'. (stored in %USERPROFILE%\\.android\\ on Windows)"
  },
  {
    "id": 14,
    "question": "What ADB command creates a full device application backup archive on modern Android devices without requiring root access?",
    "options": [
      "adb dump-memory --full /evidence/ram.bin",
      "adb backup -apk -shared -all -f backup.ab",
      "adb pull /data/data/ /evidence/all_data/",
      "adb shell dd if=/dev/block/bootdevice/by-name/userdata"
    ],
    "answer": 1,
    "explanation": "'adb backup -apk -shared -all -f backup.ab' generates an encrypted or uncompressed Android Backup archive (.ab) containing app data and shared storage, subject to individual app 'allowBackup' manifest flags."
  },
  {
    "id": 15,
    "question": "What is the file format of an uncompressed Android Backup archive (.ab) created via ADB?",
    "options": [
      "A standard Microsoft Windows Virtual Hard Disk (VHDX) dynamic image",
      "A compressed Apple Property List binary container (bplist)",
      "A TAR archive prefixed with a 24-byte proprietary Android backup header (with optional zlib or AES encryption)",
      "An unformatted raw bitstream dump identical to Unix dd images"
    ],
    "answer": 2,
    "explanation": "Android backup files (.ab) consist of a 24-byte header (e.g. 'ANDROID BACKUP\\n1\\n...'), followed by zlib-compressed tar stream data containing application folders, shared preferences, and databases."
  },
  {
    "id": 16,
    "question": "Why do modern Android applications frequently exclude their databases from 'adb backup' extractions?",
    "options": [
      "Android SELinux permanently revokes read permissions for all third-party software",
      "Google Play Protect dynamically overwrites SQLite databases with pseudo-random characters",
      "The device hardware encryption engine wipes application data whenever ADB is connected",
      "The application manifest explicitly specifies 'android:allowBackup=\"false\"' in AndroidManifest.xml"
    ],
    "answer": 3,
    "explanation": "Developers set 'android:allowBackup=\"false\"' in their AndroidManifest.xml to protect sensitive user data. When set, ADB backup completely skips the app's internal database directory ('/data/data/<package>/')."
  },
  {
    "id": 17,
    "question": "What Android fastboot command is executed to unlock the device bootloader, and what immediate forensic consequence occurs?",
    "options": [
      "fastboot flashing unlock (or fastboot oem unlock); it forces an automated factory reset that wipes the /data partition",
      "fastboot format cache; it preserves all deleted chat databases in unallocated space",
      "fastboot reboot recovery; it extracts all Class A encryption keys directly to host memory",
      "fastboot flash boot boot.img; it converts the device file system to unencrypted FAT32"
    ],
    "answer": 0,
    "explanation": "Unlocking the bootloader via 'fastboot flashing unlock' is a hardware security mechanism that automatically triggers a full cryptographic erasure/factory wipe of the user data partition ('/data') to prevent data theft."
  },
  {
    "id": 18,
    "question": "In Android architecture, what is the role of 'dm-verity' (Device Mapper Verity)?",
    "options": [
      "Encrypting the user data partition using the suspect's lock screen PIN code",
      "Providing transparent cryptographic hash tree verification of the read-only /system and /vendor partitions to prevent unauthorized modifications",
      "Translating Dalvik bytecode instructions into native ARM assembly instructions",
      "Logging incoming and outgoing voice calls directly to cellular tower base stations"
    ],
    "answer": 1,
    "explanation": "dm-verity uses a kernel cryptographic hash tree to ensure that block devices (like /system, /vendor) have not been modified or corrupted. Modifying the system partition causes dm-verity to halt boot."
  },
  {
    "id": 19,
    "question": "What runtime environment was introduced in Android 5.0 (Lollipop) to replace the legacy Dalvik Virtual Machine, using Ahead-of-Time (AOT) and Just-in-Time (JIT) compilation?",
    "options": [
      "JVM (Java Virtual Machine)",
      "CLR (Common Language Runtime)",
      "ART (Android Runtime)",
      "LLVM (Low Level Virtual Machine)"
    ],
    "answer": 2,
    "explanation": "ART (Android Runtime) replaced Dalvik. It compiles bytecode (.dex) into native machine instructions (.oat/.vdex) using Ahead-of-Time (AOT) compilation during installation and profile-guided JIT compilation at runtime."
  },
  {
    "id": 20,
    "question": "In Android application sandboxing, how does the operating system isolate applications from one another?",
    "options": [
      "All applications share a single administrative root UID and access permissions are controlled via browser cookies",
      "Applications are stored in separate virtual machines running on distinct physical processor cores",
      "The cellular modem hardware grants execution tokens based on SIM card IMSI authentication",
      "Each application is assigned a unique Linux User Identifier (UID, e.g. u0_a123) and runs in its own isolated process sandbox"
    ],
    "answer": 3,
    "explanation": "Android builds upon Linux multi-user security: each installed app is assigned a unique User ID (UID). Linux kernel file permissions prevent an app with UID 10123 from reading the data directory of UID 10124."
  },
  {
    "id": 21,
    "question": "What security architecture framework implemented in Android operates in 'Enforcing' mode to restrict even the root account using mandatory access controls?",
    "options": [
      "SELinux (Security-Enhanced Linux)",
      "AppArmor",
      "Windows Defender Application Control",
      "POSIX Discretionary Access Control"
    ],
    "answer": 0,
    "explanation": "SELinux (Security-Enhanced Linux) enforces Mandatory Access Control (MAC). Even if a process obtains root (UID 0), SELinux policy domains and types dictate what files, sockets, and capabilities it can access."
  },
  {
    "id": 22,
    "question": "Where is application private user data physically located on an Android file system?",
    "options": [
      "/system/app/<package_name>/",
      "/data/data/<package_name>/",
      "/sdcard/Android/media/<package_name>/",
      "/vendor/etc/<package_name>/"
    ],
    "answer": 1,
    "explanation": "An app's private files, SQLite databases, shared preferences, and caches are located in '/data/data/<package_name>/' (symlinked to '/data/user/0/<package_name>/' for multi-user user 0). (or /data/user/0/<package_name>/)"
  },
  {
    "id": 23,
    "question": "In modern Android (Android 10+), what encryption model replaced Full Disk Encryption (FDE), providing Credential Encrypted (CE) and Device Encrypted (DE) storage?",
    "options": [
      "BitLocker Volume Encryption (BVE)",
      "Apple Data Protection (ADP)",
      "File-Based Encryption (FBE)",
      "LUKS2 Container Encryption"
    ],
    "answer": 2,
    "explanation": "File-Based Encryption (FBE) encrypts individual files with unique keys. It splits storage into: Credential Encrypted (CE, unlocked only after passcode entry) and Device Encrypted (DE, accessible during BFU for alarms/phone)."
  },
  {
    "id": 24,
    "question": "In File-Based Encryption (FBE), what occurs to Credential Encrypted (CE) storage when an Android phone reboots into BFU state?",
    "options": [
      "The CE files are automatically exported into uncompressed TAR archives in shared storage",
      "The device operating system re-encrypts the files using the cellular provider's IMSI key",
      "The device grants emergency read-only root access across all user directories",
      "The CE encryption keys derived from the user passcode are purged from memory, making CE files completely unreadable"
    ],
    "answer": 3,
    "explanation": "CE storage holds user app data (chats, photos, messages). In BFU state, the CE master key has not been derived from the user passcode; the kernel cannot read CE files until the user enters their passcode."
  },
  {
    "id": 25,
    "question": "What systemless rooting framework for Android modifies the boot image (boot.img) without altering the read-only /system partition?",
    "options": [
      "Magisk",
      "SuperSU (legacy)",
      "KingRoot",
      "CyanogenMod"
    ],
    "answer": 0,
    "explanation": "Magisk is the premier systemless rooting solution. It patches the boot image (boot.img/initramfs) to inject root daemons and mounts overlays at boot without modifying physical /system files, bypassing dm-verity and SafetyNet."
  },
  {
    "id": 26,
    "question": "What primary SQLite database stores saved contacts, display names, and phone numbers on Android devices?",
    "options": [
      "addressbook.db (in /data/system/users/0/)",
      "contacts2.db (in /data/data/com.android.providers.contacts/databases/)",
      "dialer_cache.sqlite (in /data/misc/telephony/)",
      "sim_contacts.db (in /system/etc/telephony/)"
    ],
    "answer": 1,
    "explanation": "Android stores contacts in 'contacts2.db' under the contacts content provider ('com.android.providers.contacts/databases/'). Key tables include 'raw_contacts', 'contacts', and 'data' (holding phone numbers and emails)."
  },
  {
    "id": 27,
    "question": "What SQLite database stores SMS and MMS text messages on standard Android devices?",
    "options": [
      "sms_messages.sqlite (in /data/user/0/com.android.mms/)",
      "telephony_log.db (in /data/system/telephony/)",
      "mmssms.db (in /data/data/com.android.providers.telephony/databases/)",
      "messaging_store.db (in /data/misc/sms/)"
    ],
    "answer": 2,
    "explanation": "SMS and MMS records are managed by the telephony provider in 'mmssms.db' (under 'com.android.providers.telephony/databases/'). The 'sms' table records thread_id, address (sender/recipient), date, and body."
  },
  {
    "id": 28,
    "question": "What SQLite database records dialed, received, and missed phone calls on modern Android devices?",
    "options": [
      "call_history.storedata (in /private/var/mobile/)",
      "cellular_calls.sqlite (in /data/misc/dialer/)",
      "telecom_cdr.db (in /data/system/telephony/)",
      "calllog.db (in /data/data/com.android.providers.contacts/databases/ or dialer provider)"
    ],
    "answer": 3,
    "explanation": "Android call logs are recorded in 'calllog.db'. The 'calls' table contains columns: 'number', 'date' (epoch timestamp), 'duration' (seconds), and 'type' (1=Incoming, 2=Outgoing, 3=Missed, 4=Voicemail, 5=Rejected, 6=Blocked)."
  },
  {
    "id": 29,
    "question": "When analyzing Android call logs in 'calllog.db', what does a call 'type' value of 3 indicate?",
    "options": [
      "Missed Call",
      "Incoming Received Call (type 1)",
      "Outgoing Dialed Call (type 2)",
      "Rejected Call (type 5)"
    ],
    "answer": 0,
    "explanation": "In the Android 'calls' table: Type 1 = Incoming (Received), Type 2 = Outgoing, Type 3 = Missed, Type 4 = Voicemail, Type 5 = Rejected, Type 6 = Blocked."
  },
  {
    "id": 30,
    "question": "What primary SQLite database stores chat messages in WhatsApp on Android devices?",
    "options": [
      "wa.db",
      "msgstore.db",
      "chat_storage.sqlite",
      "whatsapp_messages.db"
    ],
    "answer": 1,
    "explanation": "WhatsApp stores all chats, messages, and timestamps in 'msgstore.db' (in '/data/data/com.whatsapp/databases/'). 'wa.db' stores the contact list and phone numbers. (or encrypted backups msgstore.db.crypt14 / crypt15)"
  },
  {
    "id": 31,
    "question": "Where is the unencrypted symmetric AES cryptographic key required to decrypt WhatsApp backup databases (msgstore.db.crypt14) stored on a rooted Android device?",
    "options": [
      "/data/system/whatsapp.keystore",
      "/sdcard/WhatsApp/Databases/key.pem",
      "/data/data/com.whatsapp/files/key",
      "/data/misc/keystore/user_0/wa_key"
    ],
    "answer": 2,
    "explanation": "WhatsApp stores the 158-byte symmetric decryption key file at '/data/data/com.whatsapp/files/key'. Examiners with root access extract this key to decrypt crypt12/crypt14/crypt15 backups offline."
  },
  {
    "id": 32,
    "question": "What configuration file on Android devices stores configured Wi-Fi network SSIDs and plaintext Pre-Shared Keys (PSKs)?",
    "options": [
      "/system/etc/wifi/network_profiles.conf",
      "/data/system/users/0/wifi_keys.xml",
      "/vendor/wifi/firmware/wpa_keys.dat",
      "/data/misc/wifi/WifiConfigStore.xml (or legacy wpa_supplicant.conf)"
    ],
    "answer": 3,
    "explanation": "Saved Wi-Fi networks and passwords are saved in '/data/misc/wifi/WifiConfigStore.xml' (in modern Android) or '/data/misc/wifi/wpa_supplicant.conf' (in legacy Android). It lists SSIDs, BSSIDs, PSKs, and connection timestamps."
  },
  {
    "id": 33,
    "question": "What system service and log file records application crashes, system events, and diagnostic messages in Android?",
    "options": [
      "Logcat",
      "dmesg systemd journal",
      "AndroidEventViewer.evtx",
      "DiagnosticReport.plist"
    ],
    "answer": 0,
    "explanation": "Logcat is Android's centralized logging system. It manages four log buffers (main, system, radio, events), capturing app execution, errors, Bluetooth syncs, and cellular tower handovers. (accessible via 'adb logcat -d' or kernel ring buffer)"
  },
  {
    "id": 34,
    "question": "What log buffer in Android Logcat captures cellular network signaling, telephony states, and SMS routing events?",
    "options": [
      "main buffer",
      "radio buffer (accessed via 'adb logcat -b radio')",
      "system buffer",
      "events buffer"
    ],
    "answer": 1,
    "explanation": "The 'radio' buffer (accessed with 'adb logcat -b radio') captures low-level telephony, radio interface layer (RIL) commands, GSM registration, cell tower handovers, and SMS transmissions."
  },
  {
    "id": 35,
    "question": "In Android forensics, what is the significance of the 'usagestats' directory located in '/data/system/usagestats/'?",
    "options": [
      "It maintains encrypted backups of user biometric fingerprint templates",
      "It stores the cellular tower Cell Global Identity logs provided by base station controllers",
      "It records daily, weekly, and monthly XML/protobuf records documenting which applications were opened and their exact foreground usage duration",
      "It holds the Master Boot Record partition table backup descriptors"
    ],
    "answer": 2,
    "explanation": "The 'usagestats' service (in '/data/system/usagestats/0/daily/') records application foreground launch events, total time in foreground, and last time used, proving deliberate user app interactions."
  },
  {
    "id": 36,
    "question": "In Android forensic examinations, what does 'Package Name' signify (e.g. 'com.google.android.youtube')?",
    "options": [
      "The hardware MAC address of the device Wi-Fi radio interface",
      "The cellular operator's Mobile Network Code published in SIM profiles",
      "The cryptographic SHA-256 integrity hash of the compiled boot image",
      "A globally unique reverse-domain identifier defined by the developer in the application manifest to identify the application within the OS"
    ],
    "answer": 3,
    "explanation": "Android identifies apps by their unique Java-style package name (e.g., 'com.whatsapp', 'org.telegram.messenger') defined in AndroidManifest.xml and used for permissions, data directories, and sandboxing."
  },
  {
    "id": 37,
    "question": "What Android system file located in '/data/system/packages.xml' provides rich forensic intelligence about installed applications?",
    "options": [
      "It details every installed package, its assigned UID, installation timestamp, update timestamp, granted permissions, and code paths",
      "It contains the decrypted plaintext passwords for all local user accounts",
      "It maintains the Master File Table allocation bitmap for internal flash storage",
      "It logs all outbound GPS coordinates transmitted to external advertising networks"
    ],
    "answer": 0,
    "explanation": "The '/data/system/packages.xml' file is a goldmine for forensic examiners: it documents every installed package name, assigned Linux UID, firstInstallTime, lastUpdateTime, signatures, and granular granted permissions."
  },
  {
    "id": 38,
    "question": "What user authentication artifact on older Android devices stored the salted SHA-1 hash of the user lock screen pattern?",
    "options": [
      "password.key",
      "gesture.key (in /data/system/gesture.key)",
      "locksettings.db",
      "pattern_hash.bin"
    ],
    "answer": 1,
    "explanation": "In older Android versions (Android 5 and below), the lock pattern was stored as an unsalted or simple SHA-1 hash of the 0-8 grid node byte sequence in '/data/system/gesture.key'."
  },
  {
    "id": 39,
    "question": "What database on modern Android devices stores lock screen metadata and Gatekeeper challenge configurations?",
    "options": [
      "security_pin.sqlite",
      "auth_tokens.db",
      "locksettings.db (in /data/system/locksettings.db)",
      "credential_manager.db"
    ],
    "answer": 2,
    "explanation": "Modern Android manages lock screen settings in '/data/system/locksettings.db'. The actual cryptographic verification is handled by Gatekeeper inside the hardware TrustZone (TEE)."
  },
  {
    "id": 40,
    "question": "What is the role of the hardware 'TrustZone' (ARM TrustZone / TEE) in modern Android smartphone security?",
    "options": [
      "A secondary battery controller that regulates wireless inductive charging circuits",
      "An external satellite receiver that synchronizes UTC time across base stations",
      "A high-speed graphics coprocessor dedicated to real-time image rendering",
      "A secure hardware execution environment that isolates biometric verification, keystore keys, and passcode verification from the main Android OS"
    ],
    "answer": 3,
    "explanation": "ARM TrustZone divides the processor into Secure World (TEE) and Normal World (Android OS). Sensitive operations\u2014Gatekeeper (passcode checking), Keymaster/Keymint (encryption keys), and fingerprint matching\u2014run inside the secure world."
  },
  {
    "id": 41,
    "question": "What operating system kernel powers Apple iOS, iPadOS, macOS, watchOS, and tvOS?",
    "options": [
      "XNU",
      "Linux Monolithic Kernel",
      "Windows NT Microkernel",
      "QNX Real-Time Microkernel"
    ],
    "answer": 0,
    "explanation": "Apple's operating systems are powered by XNU ('X is Not Unix'), a hybrid kernel combining the Mach 3.0 microkernel architecture, FreeBSD POSIX subsystems, and the I/O Kit driver framework. (X is Not Unix - a hybrid kernel combining Mach microkernel and BSD subsystems)"
  },
  {
    "id": 42,
    "question": "What is the default file system used across modern Apple iOS devices (iOS 10.3 and newer)?",
    "options": [
      "HFS+ (Hierarchical File System Extended)",
      "APFS (Apple File System)",
      "Ext4 (Fourth Extended Filesystem)",
      "FAT32 (File Allocation Table 32)"
    ],
    "answer": 1,
    "explanation": "Apple introduced APFS (Apple File System) in iOS 10.3, replacing legacy HFS+. APFS features 64-bit architecture, Copy-on-Write, space sharing, cloning, native multi-key encryption, and snapshots."
  },
  {
    "id": 43,
    "question": "How is the physical flash storage divided into partitions on an Apple iOS device?",
    "options": [
      "A single unpartitioned raw volume managing dynamic storage through virtual swap files",
      "Four primary MBR partitions: Boot, Kernel, Cache, and Recovery",
      "Two primary partitions: System (OS partition mounted read-only) and Data (User partition mounted read-write at /private/var/)",
      "Three partitions: BIOS Reserved, EFI System Partition, and Master File Table"
    ],
    "answer": 2,
    "explanation": "iOS devices divide storage into two main volumes: the System partition (mounted read-only, signed system volume SSV in modern iOS) and the Data partition (mounted read-write at '/private/var/' holding all user data)."
  },
  {
    "id": 44,
    "question": "What dedicated hardware security coprocessor on Apple devices manages cryptographic operations, Touch ID, Face ID, and Data Protection keys?",
    "options": [
      "Trusted Platform Module (TPM)",
      "Baseband Modem Processor",
      "Apple Neural Engine (ANE)",
      "Secure Enclave Processor (SEP)"
    ],
    "answer": 3,
    "explanation": "The Secure Enclave Processor (SEP) is an isolated hardware coprocessor running its own microkernel (sepd). It contains a hardware AES engine, true random number generator (TRNG), and the hardware UID fused into silicon."
  },
  {
    "id": 45,
    "question": "What is the unique cryptographic hardware key embedded into the Secure Enclave during chip manufacturing that cannot be read by software or Apple?",
    "options": [
      "UID (Unique ID) key",
      "GID (Group ID) key",
      "Apple Root CA Private Key",
      "Baseband IMEI Authentication Key"
    ],
    "answer": 0,
    "explanation": "The UID is a 256-bit AES key fused into the Secure Enclave silicon during manufacturing. It cannot be extracted by software or firmware; all file encryption keys are derived through the hardware AES engine using this UID."
  },
  {
    "id": 46,
    "question": "In Apple Data Protection architecture, what defines 'Class A' (NSFileProtectionComplete) protection?",
    "options": [
      "The file is completely unencrypted and accessible over standard USB debugging interfaces",
      "The file is encrypted with a key derived from the user passcode + hardware UID; the key is purged from memory whenever the device is locked",
      "The file is encrypted with an asymmetric key stored on Apple iCloud backup servers",
      "The file key remains resident in memory indefinitely until a factory firmware reset"
    ],
    "answer": 1,
    "explanation": "Class A (Complete Protection) offers the highest security: file keys are destroyed in RAM within seconds of the user locking the screen. The file cannot be read until the user enters their passcode to derive the key."
  },
  {
    "id": 47,
    "question": "In Apple Data Protection architecture, what defines 'Class C' (NSFileProtectionCompleteUntilFirstUserAuthentication) protection?",
    "options": [
      "The file is re-encrypted every 60 seconds using a randomized pseudorandom seed",
      "The file can be accessed exclusively while the device is connected to an authorized Wi-Fi network",
      "The file encryption key is derived upon the first unlock after boot and remains in RAM even when the device is subsequently locked",
      "The file key is stored in cleartext inside the Master Boot Record partition table"
    ],
    "answer": 2,
    "explanation": "Class C is the default for most app data. The key is derived when the user unlocks the device for the first time after boot and remains resident in memory until the device powers off or reboots."
  },
  {
    "id": 48,
    "question": "In Apple Data Protection architecture, what defines 'Class D' (NSFileProtectionNone) protection?",
    "options": [
      "The file is stored unencrypted in unallocated flash cluster slack space",
      "The file is encrypted with a 48-digit BitLocker full volume encryption recovery key",
      "The file is transmitted directly to law enforcement monitoring servers upon creation",
      "The file is encrypted using a key derived solely from the hardware UID, making it accessible even in BFU state before any passcode is entered"
    ],
    "answer": 3,
    "explanation": "Class D files are protected only with a key tied to the hardware UID (not the user passcode). These files (like boot assets, emergency dialer data) are readable as soon as the kernel mounts the disk in BFU state."
  },
  {
    "id": 49,
    "question": "What secure SQLite database on iOS devices stores saved website passwords, Wi-Fi credentials, credit card tokens, and application secrets?",
    "options": [
      "keychain-2.db (in /private/var/Keychains/)",
      "passwords.sqlite (in /System/Library/Security/)",
      "safari_tokens.db (in /private/var/mobile/Library/)",
      "vault.storedata (in /private/var/preferences/)"
    ],
    "answer": 0,
    "explanation": "The iOS Keychain is stored in 'keychain-2.db'. Keychain records are encrypted with keys tied to the device UID and passcode. Extracting the decrypted keychain reveals saved passwords and authentication tokens."
  },
  {
    "id": 50,
    "question": "What primary SQLite database stores iMessage and SMS text conversations on Apple iOS devices?",
    "options": [
      "messages.sqlite (in /System/Library/Messages/)",
      "sms.db (in /private/var/mobile/Library/SMS/)",
      "imessage_store.db (in /private/var/root/SMS/)",
      "chat_storage.sqlite (in /private/var/mobile/Data/)"
    ],
    "answer": 1,
    "explanation": "iOS stores SMS and iMessage records in 'sms.db' (in '/private/var/mobile/Library/SMS/'). Key tables include 'message' (text, date, handle_id), 'chat' (threads), and 'attachment' (multimedia)."
  },
  {
    "id": 51,
    "question": "How are date-time values stored in the 'sms.db' database on iOS 11 and later versions?",
    "options": [
      "Seconds elapsed since January 1, 1970 UTC (Unix Epoch)",
      "Microseconds elapsed since January 1, 1601 UTC (WebKit Epoch)",
      "Nanoseconds elapsed since January 1, 2001 UTC (Apple Mac/Cocoa Core Data Epoch)",
      "Julian calendar days elapsed since 4713 BCE"
    ],
    "answer": 2,
    "explanation": "Modern iOS (iOS 11+) stores timestamps in 'sms.db' as nanoseconds since Apple Core Data epoch (January 1, 2001 UTC). Earlier versions stored seconds or microseconds since 2001."
  },
  {
    "id": 52,
    "question": "What database stores call history records (voice calls, FaceTime, WhatsApp audio) on Apple iOS devices?",
    "options": [
      "calllog.db (in /private/var/telephony/)",
      "cellular_calls.sqlite (in /System/Library/Calls/)",
      "voip_history.db (in /private/var/mobile/Library/VOIP/)",
      "CallHistory.storedata (in /private/var/mobile/Library/CallHistoryDB/)"
    ],
    "answer": 3,
    "explanation": "Call history on iOS is stored in 'CallHistory.storedata' (an SQLite database). The 'ZCALLRECORD' table holds phone numbers, call duration, timestamp (ZDATE), call type (ZCALLTYPE), and service provider (FaceTime, cellular)."
  },
  {
    "id": 53,
    "question": "What SQLite database on iOS devices tracks detailed application usage, screen status, battery levels, and user habits?",
    "options": [
      "knowledgeC.db (in /private/var/mobile/Library/CoreDuet/Knowledge/)",
      "user_analytics.sqlite (in /System/Library/Analytics/)",
      "device_habits.db (in /private/var/preferences/)",
      "sysdiagnose.storedata (in /private/var/logs/)"
    ],
    "answer": 0,
    "explanation": "The 'knowledgeC.db' database (CoreDuet framework) is a premier forensic artifact. It tracks app in-focus events, battery charging, device locks/unlocks, plugged accessories, and user activity patterns with millisecond precision."
  },
  {
    "id": 54,
    "question": "What property list file in iOS stores the registered device name, international mobile equipment identity (IMEI), and serial number?",
    "options": [
      "/System/Library/CoreServices/SystemVersion.plist",
      "/private/var/preferences/SystemConfiguration/preferences.plist",
      "/private/var/mobile/Library/Preferences/com.apple.carrier.plist",
      "/private/var/root/Library/DeviceIdentity.plist"
    ],
    "answer": 1,
    "explanation": "'preferences.plist' (under SystemConfiguration) stores system-wide network configuration, device computer name, Wi-Fi parameters, and hardware identification profiles."
  },
  {
    "id": 55,
    "question": "In Apple iOS forensics, what is an 'iTunes / Finder Backup' (MobileSync Backup)?",
    "options": [
      "A bit-for-bit physical acquisition of the raw flash storage memory chips",
      "A raw volatile RAM memory dump captured via the checkm8 bootloader exploit",
      "A standardized logical backup format where files are renamed to SHA-1 hashes of their domain and path, indexed by Manifest.db",
      "An uncompressed TAR archive containing the read-only /system partition"
    ],
    "answer": 2,
    "explanation": "An iTunes backup stores files in folders named after the first 2 characters of their SHA-1 hash (e.g. '0a/0a1b2c...'). The SQLite database 'Manifest.db' maps these SHA-1 filenames back to real paths and domains."
  },
  {
    "id": 56,
    "question": "What is the significant advantage of an 'Encrypted iTunes Backup' over an unencrypted backup during iOS forensic acquisition?",
    "options": [
      "Encrypted backups bypass the requirement for the device lock screen passcode",
      "Encrypted backups automatically flash custom recovery ramdisks into the Secure Enclave",
      "Encrypted backups format the target host workstation drive using Apple APFS file systems",
      "Encrypted backups include sensitive data like the full Keychain, Wi-Fi passwords, Health data, and Call History that are omitted from unencrypted backups"
    ],
    "answer": 3,
    "explanation": "Unencrypted backups omit the Keychain, Health data, and saved Wi-Fi keys for security. If the examiner sets or knows the backup password, the backup includes the complete Keychain and private sensitive databases."
  },
  {
    "id": 57,
    "question": "What is 'Jailbreaking' in Apple iOS forensics and incident analysis?",
    "options": [
      "Privilege escalation that circumvents Apple iOS security restrictions (bypassing code signing, sandbox, and read-only root) to grant root access",
      "Remotely erasing an iPhone using the Apple Find My application interface",
      "Replacing the physical liquid crystal display with an aftermarket third-party component",
      "Permanently removing the SIM card slot to convert the device into an eSIM-only model"
    ],
    "answer": 0,
    "explanation": "Jailbreaking exploits kernel or bootrom vulnerabilities to disable kernel code signing enforcement (AMFI), escape app sandboxing, and grant full root privileges, allowing physical and file system acquisition."
  },
  {
    "id": 58,
    "question": "What type of jailbreak requires a computer connection via USB every time the device is rebooted because the exploit executes in volatile memory or BootROM?",
    "options": [
      "Untethered Jailbreak",
      "Tethered Jailbreak",
      "Semi-Untethered Jailbreak",
      "Cloud Jailbreak"
    ],
    "answer": 1,
    "explanation": "A tethered or semi-tethered jailbreak (like checkra1n) cannot re-jailbreak itself on device reboot. If the device powers off, it boots into standard jailed mode (or halts) until re-connected to a computer executing the exploit. (or Semi-Tethered like checkra1n)"
  },
  {
    "id": 59,
    "question": "What type of jailbreak persists across device reboots without requiring any computer connection or re-running an app?",
    "options": [
      "Tethered Jailbreak",
      "Semi-Tethered Jailbreak",
      "Untethered Jailbreak",
      "Rootless Jailbreak"
    ],
    "answer": 2,
    "explanation": "An untethered jailbreak patches the boot sequence permanently, surviving device reboots without needing a computer or app re-execution. Modern iOS mitigations make untethered jailbreaks exceptionally rare."
  },
  {
    "id": 60,
    "question": "What is a 'Rootless Jailbreak' (e.g. Dopamine) on modern iOS versions?",
    "options": [
      "A jailbreak that completely removes the root user account from the /etc/passwd file",
      "A hardware exploit that desolders the Secure Enclave chip from the motherboard",
      "A technique that executes applications strictly in an external cloud virtual machine",
      "A jailbreak that avoids modifying the read-only signed system volume (/system) and installs binaries exclusively under /var/jb to bypass SSV security"
    ],
    "answer": 3,
    "explanation": "With iOS 15+, Apple enforces the Signed System Volume (SSV). Rootless jailbreaks do not modify /system (which would break SSV seals); instead, they redirect jailbreak binaries and tweaks into '/var/jb'."
  },
  {
    "id": 61,
    "question": "What is the International Mobile Equipment Identity (IMEI) number structure and total digit length?",
    "options": [
      "15 decimal digits (8-digit Type Allocation Code / TAC + 6-digit Serial Number + 1-digit Luhn Check Digit)",
      "16 decimal digits (divided into four 4-digit blocks)",
      "12 hexadecimal characters representing the physical MAC address",
      "10 decimal digits representing the national mobile subscriber phone number"
    ],
    "answer": 0,
    "explanation": "The IMEI is a 15-digit unique hardware identifier: TAC (Type Allocation Code, 8 digits identifying manufacturer and model) + Serial Number (6 digits) + Check Digit (1 digit calculated via Luhn algorithm)."
  },
  {
    "id": 62,
    "question": "What USSD code is universally entered on the keypad of any GSM/UMTS/LTE mobile phone to display its IMEI number?",
    "options": [
      "*#21#",
      "*#06#",
      "*#9900#",
      "##778#"
    ],
    "answer": 1,
    "explanation": "Dialing the standard USSD code '*#06#' immediately displays the unique IMEI number (or both IMEIs for dual-SIM devices) on the screen of any mobile phone."
  },
  {
    "id": 63,
    "question": "How many unique IMEI numbers are assigned to a smartphone capable of Dual SIM Dual Standby (DSDS) operation?",
    "options": [
      "Only one single IMEI shared across both SIM cards",
      "Four distinct IMEIs representing uplink and downlink channels",
      "Exactly two distinct IMEI numbers (one unique IMEI per physical radio transceiver / SIM slot)",
      "Zero, because dual-SIM smartphones use MAC addresses instead of IMEIs"
    ],
    "answer": 2,
    "explanation": "Dual-SIM devices have two distinct cellular baseband transceiver channels, and therefore must possess two distinct, unique IMEI numbers (IMEI 1 and IMEI 2) registered with telecom regulatory bodies."
  },
  {
    "id": 64,
    "question": "What is the International Mobile Subscriber Identity (IMSI) and where is it stored?",
    "options": [
      "A 48-bit hardware serial number printed on the smartphone circuit board",
      "A dynamic IP address assigned by the Carrier-Grade NAT router",
      "A cryptographic public key stored inside the Secure Enclave Processor",
      "A 15-digit subscriber identifier stored inside the SIM card (EF_IMSI file) that uniquely identifies the subscriber on the cellular network"
    ],
    "answer": 3,
    "explanation": "The IMSI uniquely identifies a cellular subscriber globally. It is stored on the SIM card chip in the EF_IMSI elementary file. It consists of: Mobile Country Code (MCC) + Mobile Network Code (MNC) + Mobile Subscriber Identification Number (MSIN)."
  },
  {
    "id": 65,
    "question": "What are the three components that compose a standard 15-digit International Mobile Subscriber Identity (IMSI)?",
    "options": [
      "MCC (Mobile Country Code, 3 digits) + MNC (Mobile Network Code, 2-3 digits) + MSIN (Mobile Subscriber Identification Number)",
      "TAC (Type Allocation Code) + FAC (Final Assembly Code) + SNR (Serial Number)",
      "CGI (Cell Global Identity) + LAC (Location Area Code) + CID (Cell ID)",
      "SSID (Service Set Identifier) + BSSID (Basic Service Set ID) + RSSI (Signal Strength)"
    ],
    "answer": 0,
    "explanation": "IMSI = MCC (3 digits e.g. 404/405 for India) + MNC (2 or 3 digits e.g. 10 for Airtel) + MSIN (remaining digits up to 10 digits identifying the specific subscriber account)."
  },
  {
    "id": 66,
    "question": "What is the Mobile Station International Subscriber Directory Number (MSISDN)?",
    "options": [
      "The physical serial number of the SIM card chip printed on plastic",
      "The full international telephone number dialed to reach the mobile subscriber (e.g. +91 9876543210)",
      "The internal IP address assigned to the mobile handset by GGSN/PGW",
      "The base transceiver station sector antenna azimuth direction angle"
    ],
    "answer": 1,
    "explanation": "MSISDN is the actual telephone number dialed to place a call: Country Code (CC) + National Destination Code (NDC) + Subscriber Number (SN). It is mapped to the IMSI in the Home Location Register (HLR)."
  },
  {
    "id": 67,
    "question": "What is the Integrated Circuit Card Identifier (ICCID) in cellular forensics?",
    "options": [
      "The radio frequency channel number used during 5G New Radio synchronization",
      "The temporary session token generated during mobile Wi-Fi tethering sessions",
      "The 19- or 20-digit unique serial number physically laser-etched onto the SIM card chip and stored in EF_ICCID",
      "The electronic serial number assigned to the smartphone display touchscreen"
    ],
    "answer": 2,
    "explanation": "The ICCID is the globally unique serial number of the SIM card itself (stored in EF_ICCID and printed on the plastic SIM). It identifies the issuer, country, network, and chip serial number."
  },
  {
    "id": 68,
    "question": "What cellular network database maintains the master, permanent subscriber registry (including IMSI, MSISDN, subscribed services, and encryption keys)?",
    "options": [
      "VLR (Visitor Location Register)",
      "EIR (Equipment Identity Register)",
      "AUC (Authentication Center)",
      "HLR"
    ],
    "answer": 3,
    "explanation": "The Home Location Register (HLR, evolved to HSS in LTE/EPC) is the central database that permanently stores subscriber details: IMSI, MSISDN, service subscriptions, and current VLR/MME location routing pointers. (Home Location Register) / HSS (Home Subscriber Server in LTE/5G)"
  },
  {
    "id": 69,
    "question": "What cellular network database maintains temporary subscriber profile data while a mobile device is roaming within a specific switching service area?",
    "options": [
      "VLR (Visitor Location Register)",
      "HLR (Home Location Register)",
      "EIR (Equipment Identity Register)",
      "AUC (Authentication Center)"
    ],
    "answer": 0,
    "explanation": "The Visitor Location Register (VLR) is a local, temporary database paired with the MSC. When a subscriber enters a cell area, the VLR copies essential subscriber data from the HLR to route local calls without querying the remote HLR repeatedly."
  },
  {
    "id": 70,
    "question": "What cellular network database categorizes mobile handsets into White, Grey, and Black lists based on their IMEI to block stolen devices?",
    "options": [
      "HLR (Home Location Register)",
      "EIR (Equipment Identity Register)",
      "VLR (Visitor Location Register)",
      "SMSC (Short Message Service Center)"
    ],
    "answer": 1,
    "explanation": "The Equipment Identity Register (EIR) tracks IMEIs: White list (valid, approved devices), Grey list (monitored/suspicious devices), and Black list (stolen, barred from accessing the network)."
  },
  {
    "id": 71,
    "question": "What is the full formula for the Cell Global Identity (CGI) that uniquely identifies a cellular antenna sector worldwide?",
    "options": [
      "CGI = IMEI (Equipment Identity) + IMSI (Subscriber Identity) + MSISDN (Phone Number)",
      "CGI = TAC (Tracking Area Code) + RSRP (Signal Power) + RSRQ (Signal Quality)",
      "CGI = MCC (Mobile Country Code) + MNC (Mobile Network Code) + LAC (Location Area Code) + CID (Cell ID)",
      "CGI = BSSID (Base Station ID) + SSID (Network Name) + Channel Frequency"
    ],
    "answer": 2,
    "explanation": "Cell Global Identity (CGI) uniquely identifies a cell worldwide: MCC (Country) + MNC (Network) + LAC (Location Area Code, 16-bit) + CID (Cell Identity, 16-bit)."
  },
  {
    "id": 72,
    "question": "In cellular tower engineering, into how many 120-degree sectors is a standard 3-sector cell site typically divided?",
    "options": [
      "4 sectors (North, South, East, West covering 90\u00b0 each)",
      "2 sectors (Uplink and Downlink covering 180\u00b0 each)",
      "6 sectors (Hexagonal arrays covering 60\u00b0 each)",
      "3 sectors (Alpha covering ~0\u00b0-120\u00b0, Beta covering ~120\u00b0-240\u00b0, Gamma covering ~240\u00b0-360\u00b0)"
    ],
    "answer": 3,
    "explanation": "Most cellular base stations use 3 directional antennas mounted 120 degrees apart: Sector 1 (Alpha e.g. 0\u00b0-120\u00b0), Sector 2 (Beta e.g. 120\u00b0-240\u00b0), and Sector 3 (Gamma e.g. 240\u00b0-360\u00b0), each having a unique Cell ID."
  },
  {
    "id": 73,
    "question": "What does the 'Azimuth' angle in a cellular tower specification table represent to a CDR investigator?",
    "options": [
      "The compass direction (in degrees from true North, 0\u00b0-360\u00b0) toward which the directional sector antenna is pointed",
      "The elevation height of the tower in meters above sea level",
      "The vertical tilt angle of the antenna toward the ground",
      "The transmission frequency bandwidth in Megahertz (MHz)"
    ],
    "answer": 0,
    "explanation": "Azimuth is the compass bearing (0\u00b0 to 359\u00b0 from true North) indicating the central direction in which a sector antenna radiates its radio energy. Knowing azimuth defines the pie-shaped wedge where the suspect's phone was located."
  },
  {
    "id": 74,
    "question": "What parameter in GSM cellular signaling measures the round-trip radio propagation delay to calculate the distance between a phone and the cell tower?",
    "options": [
      "Received Signal Strength Indicator (RSSI)",
      "Timing Advance (TA)",
      "Reference Signal Received Power (RSRP)",
      "Carrier-to-Noise Ratio (CNR)"
    ],
    "answer": 1,
    "explanation": "Timing Advance (TA) is used in GSM/LTE to advance transmission time so bursts arrive at the tower in the correct time slot. Because radio waves travel at the speed of light, TA directly measures distance from the tower."
  },
  {
    "id": 75,
    "question": "In GSM cellular networks, what approximate physical distance does each step (quantum) of Timing Advance (TA) represent?",
    "options": [
      "Approximately 50 meters",
      "Approximately 2.5 kilometers",
      "Approximately 550 meters (0.55 km per TA unit)",
      "Approximately 10 kilometers"
    ],
    "answer": 2,
    "explanation": "In GSM, one bit period is ~3.69 microseconds. A one-unit increment of Timing Advance (TA = 0 to 63) corresponds to a round-trip distance of ~1,100 meters, which equates to a one-way distance step of ~550 meters."
  },
  {
    "id": 76,
    "question": "What is the fundamental difference between a Call Detail Record (CDR) and an Internet Protocol Detail Record (IPDR)?",
    "options": [
      "CDR is recorded exclusively by the mobile handset; IPDR is recorded exclusively by foreign satellite receivers",
      "CDR contains full audio recordings of telephone calls; IPDR contains plaintext copies of web browsing history",
      "CDR requires a court warrant to generate; IPDR is broadcast publicly over unencrypted radio frequencies",
      "CDR tracks circuit-switched voice calls and SMS events; IPDR tracks packet-switched data sessions, IP addresses, ports, and bytes transferred"
    ],
    "answer": 3,
    "explanation": "CDR logs telephony transactions: Calling/Called party, start time, duration, call type, start/end CGI. IPDR logs mobile data connections: Source IP, Source Port, Destination IP, Destination Port, timestamps, and data volume."
  },
  {
    "id": 77,
    "question": "In cellular CDR terminology, what does 'MOC' signify?",
    "options": [
      "Mobile Originating Call (outgoing call initiated by the subscriber)",
      "Mobile Terminating Call (incoming call received by the subscriber)",
      "Master Operating Center (central cellular network switch)",
      "Media Optimization Controller (audio transcoding gateway)"
    ],
    "answer": 0,
    "explanation": "In CDR logs: MOC stands for Mobile Originating Call (outgoing call made by the target number); MTC stands for Mobile Terminating Call (incoming call received by the target number)."
  },
  {
    "id": 78,
    "question": "In cellular CDR terminology, what does 'MTC' signify?",
    "options": [
      "Mobile Originating Call (outgoing call made by the subscriber)",
      "Mobile Terminating Call (incoming call received by the subscriber)",
      "Message Transfer Carrier (short message routing service)",
      "Multi-Tenant Controller (virtual base station manager)"
    ],
    "answer": 1,
    "explanation": "MTC stands for Mobile Terminating Call, representing an incoming voice call answered or routed to the subscriber's phone."
  },
  {
    "id": 79,
    "question": "Why does a single voice call entry in a CDR often list two distinct Cell Global Identities (First CGI and Last CGI)?",
    "options": [
      "The cellular carrier uses dual-SIM transceivers to duplicate all audio calls for redundancy",
      "The call failed due to network congestion and was redirected to an emergency satellite channel",
      "The mobile user moved during the call and handed over from the originating cell tower to a different terminating cell tower",
      "The calling party and called party were connected to the exact same base transceiver station"
    ],
    "answer": 2,
    "explanation": "Mobile networks support handovers during calls. If a suspect initiates a call while driving and moves out of sector range, the call transfers to a new tower; the CDR records the First CGI (start) and Last CGI (end)."
  },
  {
    "id": 80,
    "question": "In IPDR (Internet Protocol Detail Record) investigations, what IP address range is reserved under RFC 6598 for Carrier-Grade NAT (CGNAT)?",
    "options": [
      "192.168.0.0/16 (Private Class C network)",
      "10.0.0.0/8 (Private Class A network)",
      "172.16.0.0/12 (Private Class B network)",
      "100.64.0.0/10 (100.64.0.0 to 100.127.255.255)"
    ],
    "answer": 3,
    "explanation": "RFC 6598 reserves the '100.64.0.0/10' shared address space specifically for Carrier-Grade NAT (CGNAT). Cellular carriers assign these private IPv4 addresses to mobile phones, translating them to public IPs at the PGW/GGSN."
  },
  {
    "id": 81,
    "question": "Why is it mathematically impossible to identify a specific cybercriminal using ONLY a public IP address and date-time stamp when the ISP uses Carrier-Grade NAT (CGNAT)?",
    "options": [
      "Hundreds or thousands of different mobile subscribers share the exact same public IPv4 address simultaneously via port translation",
      "Carrier-Grade NAT encrypts all packet payloads using military-grade AES-256 ciphers",
      "The cellular carrier automatically deletes all NAT translation logs every ten seconds to conserve disk space",
      "The public IP address belongs exclusively to foreign satellite communications constellations"
    ],
    "answer": 0,
    "explanation": "Under CGNAT, thousands of mobile devices share a pool of public IPv4 addresses. To pinpoint the exact subscriber, law enforcement MUST provide the destination server's connection log showing the Source Port number along with timestamp and public IP."
  },
  {
    "id": 82,
    "question": "What critical technical parameter MUST an investigator obtain from target server logs (e.g. web server, bank portal) to identify a suspect behind CGNAT?",
    "options": [
      "Destination MAC Address of the carrier's gateway router",
      "Source Port (Source Port Number used by the client connection)",
      "The suspect's cellular phone battery charge percentage",
      "The serial number of the web server's SSL certificate"
    ],
    "answer": 1,
    "explanation": "Because CGNAT maps unique combinations of (Private IP + Private Port) <-> (Public IP + Public Source Port), the ISP's NAT translation logs require the Public IP, the exact Source Port, and timestamp to identify the specific subscriber."
  },
  {
    "id": 83,
    "question": "What document maintained by telecommunications service providers contains the physical Subscriber Application Form (CAF), identity proof, and address proof?",
    "options": [
      "CDR (Call Detail Record)",
      "IPDR (Internet Protocol Detail Record)",
      "SDR",
      "VLR (Visitor Location Register)"
    ],
    "answer": 2,
    "explanation": "The SDR/CAF contains the subscriber's legal identity documents: full name, physical residential address, alternate contact number, government ID proof (Aadhaar/Passport/Voter ID), and customer photograph submitted during SIM registration. (Subscriber Detail Record) / CAF (Customer Application Form)"
  },
  {
    "id": 84,
    "question": "What forensic intelligence is extracted from the Subscriber Identity Module (SIM) card using a specialized SIM smart card reader?",
    "options": [
      "The user's complete Google Chrome private browsing search history",
      "High-resolution photographic pictures stored in internal flash memory",
      "Decrypted AES master volume keys for Apple File System APFS containers",
      "ICCID, IMSI, SMS messages stored in EF_SMS, dialed numbers in EF_FDN/EF_LND, and last registered Location Information (EF_LOCI)"
    ],
    "answer": 3,
    "explanation": "SIM cards contain Elementary Files (EFs): EF_ICCID, EF_IMSI, EF_SMS (messages stored on SIM), EF_ADN/FDN (contacts), and EF_LOCI (Location Information storing TMSI, LAC, and MCC/MNC of the last connected tower)."
  },
  {
    "id": 85,
    "question": "What security protection mechanism on a SIM card locks the card after 3 consecutive incorrect PIN attempts, requiring an 8-digit unlock code from the carrier?",
    "options": [
      "PUK (Personal Unblocking Key)",
      "PIN2 (Secondary PIN)",
      "IMEI Lock",
      "MSISDN Auth"
    ],
    "answer": 0,
    "explanation": "If a user enters an incorrect SIM PIN three times, the SIM card locks. It can only be unlocked by entering the 8-digit PUK (Personal Unblocking Key / PIN Unlock Key) obtained from the cellular service provider. 10 failed PUK attempts permanently destroys the SIM."
  },
  {
    "id": 86,
    "question": "What occurs if an investigator or suspect enters an incorrect PUK (Personal Unblocking Key) code 10 consecutive times on a locked SIM card?",
    "options": [
      "The SIM card automatically transmits its stored SMS messages to the nearest police station",
      "The SIM card permanently and irreversibly disables its internal microchip, rendering the SIM completely unusable",
      "The SIM card resets its internal PIN code back to the default factory code '0000'",
      "The smartphone operating system initiates an automated physical disk formatting cycle"
    ],
    "answer": 1,
    "explanation": "After 10 consecutive incorrect PUK entries, the SIM card enters a permanent blocked state (bricked). The internal EEPROM locks permanently, and no data can ever be read from that chip again."
  },
  {
    "id": 87,
    "question": "What legacy radio communication protocol is used by one-way numeric and alphanumeric Pagers (Beeper devices)?",
    "options": [
      "GSM (Global System for Mobile Communications)",
      "CDMA2000 (Code Division Multiple Access)",
      "POCSAG (Post Office Code Standardisation Advisory Group) or FLEX protocol",
      "Bluetooth Low Energy (BLE 5.0)"
    ],
    "answer": 2,
    "explanation": "Traditional pagers operate on POCSAG (512, 1200, or 2400 bps) or Motorola's FLEX protocol over VHF/UHF frequencies. Because communication is unencrypted broadcast radio, pagers can be intercepted over the air using software-defined radio (SDR)."
  },
  {
    "id": 88,
    "question": "Why are traditional one-way pager communications inherently vulnerable to eavesdropping and interception by forensic investigators?",
    "options": [
      "Pagers automatically upload their message history to commercial cloud backup services",
      "Pager hardware controllers contain hardcoded Wi-Fi passwords published by manufacturers",
      "Pagers operate exclusively across public unencrypted satellite microwave frequencies",
      "Pager messages are broadcast over the air in cleartext without encryption, allowing any radio receiver tuned to the channel to decode all messages"
    ],
    "answer": 3,
    "explanation": "One-way pagers do not transmit; they only listen. Transmitters broadcast cleartext messages across entire cities over VHF/UHF channels. Anyone with an RTL-SDR dongle and decoding software (e.g. multimon-ng) can capture all pager traffic in range."
  },
  {
    "id": 89,
    "question": "What rich forensic data can be extracted from smart wearable devices (e.g. Apple Watch, Garmin, Fitbit) during a physical assault or murder investigation?",
    "options": [
      "Continuous heart rate logs, step counts, GPS location tracks, accelerometer motion spikes, and sleep/wake transition timestamps",
      "Decrypted BitLocker volume encryption master passwords from corporate servers",
      "Raw bitstream images of the suspect's home personal computer hard drive",
      "The serial numbers of all passing vehicles detected by highway traffic cameras"
    ],
    "answer": 0,
    "explanation": "Smartwatches record continuous biometric and movement telemetry: sudden heart rate spikes, cessation of pulse (establishing time of death), step counts, and precise GPS trails, providing critical circumstantial evidence."
  },
  {
    "id": 90,
    "question": "Where is health and biometric sensor data synchronized from an Apple Watch stored on an associated paired iPhone?",
    "options": [
      "biometrics.storedata (in /System/Library/HealthKit/)",
      "healthdb_secure.sqlite (in /private/var/mobile/Library/Health/)",
      "watch_sensor.db (in /private/var/mobile/Devices/)",
      "apple_fitness.sqlite (in /private/var/preferences/)"
    ],
    "answer": 1,
    "explanation": "Apple Watch health data synchronizes to the paired iPhone, stored in 'healthdb_secure.sqlite' (protected under Class A Data Protection). It records heart rate, ECG, step count, elevation, and workouts with timestamps."
  },
  {
    "id": 91,
    "question": "What forensic artifact is recovered from the internal flash memory of an IoT Smart Home speaker (e.g. Amazon Echo, Google Nest)?",
    "options": [
      "Physical video surveillance tapes recorded over analog coaxial cables",
      "The Master File Table allocation bitmap for internal magnetic hard drives",
      "Audio recording cache files, voice recognition transcriptions, Wi-Fi configuration credentials, and paired Bluetooth device MAC addresses",
      "The private cryptographic keys used by telecom operators to sign SIM card ICCIDs"
    ],
    "answer": 2,
    "explanation": "Smart speakers cache recent audio snippets, voice intent transcriptions, paired client MAC addresses, and network connection logs in internal flash (eMMC/NAND), recoverable via chip-off or UART serial debugging."
  },
  {
    "id": 92,
    "question": "What communication protocol commonly used by IoT smart home devices (smart bulbs, door locks, sensors) operates on 2.4 GHz IEEE 802.15.4 mesh networks?",
    "options": [
      "NFC (Near Field Communication)",
      "LTE-Advanced Carrier Aggregation",
      "DOCSIS 3.1 Cable Protocol",
      "Zigbee (or Z-Wave operating on sub-GHz ISM bands)"
    ],
    "answer": 3,
    "explanation": "Smart home sensors commonly communicate via Zigbee (IEEE 802.15.4, 2.4 GHz) or Z-Wave (sub-GHz proprietary mesh). Examiners intercept or capture packet captures of these networks to reconstruct door lock or sensor trigger events."
  },
  {
    "id": 93,
    "question": "What forensic artifact extracted from a modern connected car's In-Vehicle Infotainment (IVI) system provides evidence of a driver's presence?",
    "options": [
      "Paired mobile phone contacts, call logs, SMS history, GPS navigation route history, and door open/seatbelt buckle event logs",
      "The serial number of the optical fiber cable connecting the local electrical substation",
      "Decrypted Kerberos Ticket Granting Tickets issued to the vehicle's engine control module",
      "The Master Boot Record partition table of the vehicle's hydraulic brake booster pump"
    ],
    "answer": 0,
    "explanation": "Modern vehicle IVI systems (e.g. Berla iVe supported systems) pair with smartphones and store contacts, call logs, SMS messages, precise vehicle GPS tracks, door opening events, and gear shift timestamps."
  },
  {
    "id": 94,
    "question": "What is the function of the Controller Area Network (CAN bus) in vehicle forensics and accident reconstruction?",
    "options": [
      "A satellite communication link used to transmit real-time video surveillance to police headquarters",
      "A vehicle bus standard allowing microcontrollers and electronic control units (ECUs) to communicate without a host computer, logging speed, braking, and steering data",
      "A high-speed fiber optic ring connecting traffic light controllers across municipal highways",
      "An encrypted virtual private network tunnel used exclusively by commercial ride-sharing drivers"
    ],
    "answer": 1,
    "explanation": "The CAN bus interconnects vehicle ECUs (engine, brakes, steering, airbags). Event Data Recorders (EDR) record CAN bus telemetry (vehicle speed, throttle position, brake application, seatbelt status) during crash events."
  },
  {
    "id": 95,
    "question": "What is an Event Data Recorder (EDR) or 'Black Box' in automotive crash forensics?",
    "options": [
      "A streaming dash camera that uploads high-definition video directly to public cloud servers",
      "A radar detector that warns motorists of police speed enforcement checkpoints",
      "A tamper-resistant module (often integrated into the Airbag Control Module) that records vehicle dynamics data immediately prior to, during, and after a collision",
      "A radio transceiver that automatically pays highway electronic toll charges"
    ],
    "answer": 2,
    "explanation": "Automotive EDRs record vehicle parameters (speed, brake switch status, engine RPM, steering angle, lateral acceleration, airbag deployment time) in non-volatile memory during crash or near-crash events."
  },
  {
    "id": 96,
    "question": "In mobile forensic report presentation, what is 'Tower Dump Analysis'?",
    "options": [
      "Physically demolishing a telecommunication tower to extract its internal hard disk storage drives",
      "Formatting the internal NAND flash memory of all mobile phones seized within a city district",
      "Broadcasting emergency evacuation alerts across all mobile subscribers within a municipal region",
      "Analyzing CDR records from all base station sectors covering a crime scene to identify mobile devices present at the location and time of the crime"
    ],
    "answer": 3,
    "explanation": "A Tower Dump provides CDR data for all calls, SMS, and data sessions that connected to specific cell towers covering a crime scene during a specific time window, enabling investigators to spot common suspect numbers."
  },
  {
    "id": 97,
    "question": "What analytical technique compares multiple Tower Dumps from different crime scenes to identify suspect numbers appearing across all locations?",
    "options": [
      "Common Cell / Intersection Analysis",
      "Single-Tower Triangulation",
      "IMEI Luhn Check Analysis",
      "Baseband Firmware Dissasembly"
    ],
    "answer": 0,
    "explanation": "Intersection Analysis cross-references CDR tower dumps from multiple distinct crime scenes committed by the same perpetrator. Numbers appearing in the intersection of all dumps become prime suspects."
  },
  {
    "id": 98,
    "question": "In telecom forensics, what is the role of an 'IMSI Catcher' (e.g. StingRay)?",
    "options": [
      "A commercial forensic software suite used to crack encrypted Apple iTunes backups",
      "A rogue, false base station (BTS) that forces nearby mobile devices to connect to it by transmitting high signal power, capturing their IMSI and location",
      "A hardware tool used to desolder eMMC flash memory chips from smartphone motherboards",
      "A digital certificate authority that validates cellular operator roaming agreements"
    ],
    "answer": 1,
    "explanation": "An IMSI-catcher masquerades as a legitimate cell tower with stronger signal, compelling mobile handsets in the vicinity to connect. It harvests their IMSIs and can eavesdrop or track locations without carrier assistance."
  },
  {
    "id": 99,
    "question": "What legal document or statutory authority under Indian law empowers law enforcement officers to request Call Detail Records (CDRs) from telecom service providers?",
    "options": [
      "Section 66 of the Information Technology Act, 2000",
      "Section 43 of the Indian Evidence Act, 1872",
      "Section 91 of the Code of Criminal Procedure, 1973 (now Section 94 of Bharatiya Nagarik Suraksha Sanhita, 2023)",
      "Section 144 of the Negotiable Instruments Act, 1881"
    ],
    "answer": 2,
    "explanation": "Under Indian criminal law, police officers issue a formal notice under Section 91 CrPC (now Section 94 BNSS 2023) to telecom service providers (Airtel, Jio, Vi, BSNL) demanding the production of CDRs, SDRs, and IPDRs for investigation."
  },
  {
    "id": 100,
    "question": "Why must an electronic Call Detail Record (CDR) printout submitted as evidence in an Indian court be accompanied by a statutory certificate?",
    "options": [
      "The International Telecommunication Union mandates that all CDR files be encrypted using SHA-512",
      "The Indian Penal Code requires that all computer printouts be signed by the state governor",
      "The Ministry of Electronics and Information Technology must certify all hardware SIM card readers",
      "Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of IEA 1872) mandates a certificate signed by the authorized nodal officer of the telecom service provider"
    ],
    "answer": 3,
    "explanation": "Under Section 63 BSA 2023 (formerly Section 65B IEA), electronic records like CDR spreadsheets are inadmissible secondary evidence unless accompanied by a certificate signed by the telecom nodal officer authenticating the computer output."
  },
  {
    "id": 101,
    "question": "Why is placing a seized iPhone into 'Airplane Mode' alone considered insufficient for forensic isolation compared to a Faraday enclosure?",
    "options": [
      "Lock screen shortcuts or Control Center can re-enable Wi-Fi and Bluetooth, and incoming calls or remote wipes may occur if Airplane Mode is accidentally toggled off",
      "Airplane Mode automatically initiates an automated secure erasure of all APFS data protection keys",
      "Airplane Mode forces the Secure Enclave to enter Before First Unlock (BFU) mode permanently",
      "Airplane Mode transmits an automated emergency distress beacon across satellite emergency frequencies"
    ],
    "answer": 0,
    "explanation": "Airplane mode can be bypassed if the user has Wi-Fi or Bluetooth set to stay active in Airplane mode, or if the screen is touched, or if a physical SIM card is removed/reinserted. Physical Faraday shielding is mandatory."
  },
  {
    "id": 102,
    "question": "In Apple iOS, what user action immediately disables Touch ID / Face ID biometrics and forces passcode-only entry?",
    "options": [
      "Placing the device flat on a metallic surface for ten consecutive seconds",
      "Pressing and holding the side power button and either volume button simultaneously (or rapidly pressing the power button 5 times)",
      "Disconnecting the device from an authorized Lightning or USB-C charging cable",
      "Connecting a Bluetooth Low Energy peripheral while the screen is locked"
    ],
    "answer": 1,
    "explanation": "Pressing and holding the Side button + Volume button triggers the SOS slider screen, which immediately purges biometric keys from the Secure Enclave, requiring the full alphanumeric passcode to unlock."
  },
  {
    "id": 103,
    "question": "In Apple Secure Enclave architecture, what hardware component prevents offline brute-forcing of user passcodes by enforcing exponential time delays?",
    "options": [
      "Translation Lookaside Buffer (TLB)",
      "Direct Memory Access (DMA) Bus Controller",
      "Weaver (anti-replay hardware engine with dedicated non-volatile memory)",
      "Apple Neural Engine (ANE)"
    ],
    "answer": 2,
    "explanation": "Weaver is a dedicated hardware module inside the Secure Enclave. It stores iteration counts and anti-replay counters in tamper-resistant non-volatile memory, enforcing mandatory delays (1 min, 5 min, 15 min, 1 hour) between failed passcode attempts."
  },
  {
    "id": 104,
    "question": "What occurs by default on an iOS device if the 'Erase Data' security setting is enabled and an incorrect passcode is entered 10 consecutive times?",
    "options": [
      "The device operating system re-flashes itself using factory firmware downloaded from iCloud",
      "The device transmits a full encrypted bitstream image of the user partition to local law enforcement",
      "The device converts all APFS file system containers to unencrypted FAT32 format",
      "The Secure Enclave permanently destroys the hardware storage encryption keys, rendering all user data cryptographically irrecoverable"
    ],
    "answer": 3,
    "explanation": "If 'Erase Data' is active, 10 consecutive failed passcode attempts instructs the Secure Enclave to discard the Effaceable Storage keys. Without these keys, the AES-encrypted data on flash storage is permanently undecryptable."
  },
  {
    "id": 105,
    "question": "What is 'Effaceable Storage' in Apple iOS device security architecture?",
    "options": [
      "A dedicated region of non-volatile NAND flash memory that can be securely erased instantly to destroy file system master keys",
      "A temporary RAM buffer allocated to cache high-resolution video streams from the camera",
      "An unallocated disk cluster region reserved for deleted SMS text messages",
      "A cloud storage container where device diagnostic logs are mirrored daily"
    ],
    "answer": 0,
    "explanation": "Effaceable Storage is a specialized non-volatile flash area holding cryptographic keys (such as the DKey and file system master keys). Erasing this small hardware block provides instant, cryptographic sanitization of the entire device."
  },
  {
    "id": 106,
    "question": "In Android application packages (.apk), which compiled file contains all Java/Kotlin source code compiled into Dalvik bytecode?",
    "options": [
      "AndroidManifest.xml",
      "classes.dex (Dalvik Executable)",
      "resources.arsc",
      "CERT.RSA"
    ],
    "answer": 1,
    "explanation": "Android apps are compiled into Dalvik Executable (.dex) bytecode files named 'classes.dex' (and classes2.dex, etc. in multidex apps), which are executed by the Android Runtime (ART)."
  },
  {
    "id": 107,
    "question": "What file inside an Android APK package contains the human-readable string resources, IDs, and compiled binary XML values?",
    "options": [
      "classes.dex",
      "AndroidManifest.xml",
      "resources.arsc",
      "build.prop"
    ],
    "answer": 2,
    "explanation": "'resources.arsc' is the pre-compiled binary resource table of the APK. It holds strings, colors, styles, layouts, and resource IDs referenced by the application's compiled bytecode."
  },
  {
    "id": 108,
    "question": "What directory inside an Android APK contains digital signature files (e.g. CERT.RSA, CERT.SF, MANIFEST.MF) under APK Signature Scheme v1?",
    "options": [
      "res/",
      "assets/",
      "lib/",
      "META-INF/"
    ],
    "answer": 3,
    "explanation": "Under APK Signature Scheme v1 (JAR signing), the 'META-INF/' directory contains MANIFEST.MF (SHA-256 hashes of all files), CERT.SF (signature file), and CERT.RSA (the developer's public key certificate and cryptographic signature)."
  },
  {
    "id": 109,
    "question": "What critical security advantage does Android APK Signature Scheme v2 (and v3) provide over legacy JAR signing (v1)?",
    "options": [
      "It cryptographically protects the entire APK archive as a whole, detecting any alteration to ZIP central directory headers or metadata",
      "It permanently prevents users from uninstalling the application from their smartphone",
      "It forces the application to execute exclusively inside ARM TrustZone secure world",
      "It encrypts the APK file on disk using the cellular carrier's IMSI authentication key"
    ],
    "answer": 0,
    "explanation": "v1 only signed individual files inside the ZIP, allowing central directory tampering (e.g. Janus vulnerability). Scheme v2 hashes the entire binary archive before the ZIP central directory, guaranteeing whole-file integrity."
  },
  {
    "id": 110,
    "question": "In Android security architecture, what is a 'Dangerous Permission' (Runtime Permission)?",
    "options": [
      "A permission that allows an application to reboot the physical hardware without warning",
      "A permission that grants access to sensitive private user data (e.g. CAMERA, READ_CONTACTS, ACCESS_FINE_LOCATION) requiring explicit user approval at runtime",
      "A permission that permanently wipes the cellular carrier's SIM card credentials",
      "A permission that grants the application permission to write to the read-only /system partition"
    ],
    "answer": 1,
    "explanation": "Android classifies permissions into Protection Levels: Normal (granted automatically at install) and Dangerous (runtime permissions: Camera, Contacts, Location, Microphone, SMS, Storage) which require explicit user consent."
  },
  {
    "id": 111,
    "question": "What SQLite database file stores the Google Chrome web browsing history, typed URLs, and downloads on an Android device?",
    "options": [
      "/data/system/users/0/chrome_history.sqlite",
      "/data/misc/chrome/webcache.db",
      "/data/data/com.android.chrome/app_chrome/Default/History",
      "/sdcard/Android/data/com.android.chrome/browser.db"
    ],
    "answer": 2,
    "explanation": "Google Chrome stores its browsing history, visited URLs, and file downloads in an SQLite database named 'History' located in the app's private directory: '/data/data/com.android.chrome/app_chrome/Default/History'."
  },
  {
    "id": 112,
    "question": "What configuration file in Android contains fundamental system properties, OS build version, manufacturer, and hardware model specifications?",
    "options": [
      "/data/system/device_specs.conf",
      "/etc/android_version.xml",
      "/boot/hardware_profile.prop",
      "/system/build.prop (or /vendor/build.prop)"
    ],
    "answer": 3,
    "explanation": "'build.prop' (in /system or /vendor) defines system properties: 'ro.build.version.release' (Android version), 'ro.product.model' (handset model), 'ro.product.brand', 'ro.build.date', and security patch level."
  },
  {
    "id": 113,
    "question": "What Android artifact directory stores thumbnails of image and video files browsed by the user in shared storage?",
    "options": [
      "/sdcard/DCIM/.thumbnails/",
      "/system/media/previews/",
      "/data/misc/camera/cache/",
      "/data/system/thumbnails/"
    ],
    "answer": 0,
    "explanation": "Android caches image thumbnails in '/sdcard/DCIM/.thumbnails/' (or '.thumbdata' files). Examiners can recover thumbnails of photos that the suspect deleted from the main camera folder."
  },
  {
    "id": 114,
    "question": "What primary SQLite database stores the complete photo library, albums, metadata, and face recognition data on Apple iOS devices?",
    "options": [
      "camera_roll.db (in /System/Library/Media/)",
      "Photos.sqlite (in /private/var/mobile/Media/PhotoData/) ",
      "photos_metadata.storedata (in /private/var/preferences/)",
      "gallery.sqlite (in /private/var/mobile/Library/)"
    ],
    "answer": 1,
    "explanation": "'Photos.sqlite' manages the entire iOS photo library. It records original capture timestamps, latitude/longitude GPS coordinates, camera model, lens settings, and face recognition groupings."
  },
  {
    "id": 115,
    "question": "What occurs when a user deletes a photograph from an iPhone running modern iOS?",
    "options": [
      "The photo file sectors on flash memory are immediately overwritten with randomized pseudorandom hex characters",
      "The photo is instantly converted into an uncompressed TIFF file in unallocated cluster slack",
      "The photo is moved to the 'Recently Deleted' album in Photos.sqlite, where it is retained for 30 days before permanent purging",
      "The photo is automatically transmitted to Apple iCloud servers as an immutable diagnostic archive"
    ],
    "answer": 2,
    "explanation": "iOS does not immediately delete photos. It sets 'ZTRASHEDSTATE = 1' and 'ZTRASHEDDATE' in Photos.sqlite, moving the photo to 'Recently Deleted' where it remains fully carvable and viewable for 30 days."
  },
  {
    "id": 116,
    "question": "What SQLite database stores Safari web browsing history, page titles, and visit timestamps on iOS devices?",
    "options": [
      "safari_cache.sqlite (in /private/var/mobile/Containers/)",
      "web_history.storedata (in /System/Library/Safari/)",
      "places.sqlite (in /private/var/preferences/)",
      "History.db (in /private/var/mobile/Library/Safari/)"
    ],
    "answer": 3,
    "explanation": "Safari stores browsing history on iOS in 'History.db'. The 'history_items' table tracks visited URLs, and 'history_visits' records timestamps (in Apple Cocoa Core Data epoch), visit count, and page titles."
  },
  {
    "id": 117,
    "question": "In Apple iOS forensics, what is the 'routined' daemon and what artifact database does it maintain?",
    "options": [
      "It maintains 'Cache.sqlite' (Significant Locations) tracking frequently visited places, arrival/departure times, and transit habits",
      "It manages Bluetooth Low Energy synchronization with third-party fitness trackers",
      "It executes automated system reboots whenever battery temperature exceeds 45 degrees Celsius",
      "It compresses application log files into encrypted ZIP archives in unallocated storage"
    ],
    "answer": 0,
    "explanation": "'routined' is the iOS daemon responsible for CoreRoutine (Significant Locations). It maintains 'Cache.sqlite' (in '/private/var/mobile/Library/Caches/com.apple.routined/'), logging frequently visited GPS coordinates and visit durations."
  },
  {
    "id": 118,
    "question": "In Apple iOS diagnostics, what is a 'sysdiagnose' file and why is it exceptionally valuable in incident investigations?",
    "options": [
      "A full physical bitstream copy of the Secure Enclave hardware silicon chip",
      "A comprehensive diagnostic TAR archive generated by pressing Volume + Power buttons, capturing system logs, active tasks, Wi-Fi networks, and crash reports",
      "A hardware debugging protocol used to flash factory firmware onto NAND flash chips",
      "An unencrypted backup of the Apple Watch biometric heart rate database"
    ],
    "answer": 1,
    "explanation": "Triggering sysdiagnose (holding Volume Up + Volume Down + Power) generates a large archive (.tar.gz) containing system state: Wi-Fi logs, mobile_installation logs, thermal state, running processes, and power history."
  },
  {
    "id": 119,
    "question": "In cellular network architecture, what is a 'Femtocell' or 'Microcell'?",
    "options": [
      "A high-power regional transmission antenna with a coverage radius exceeding 100 kilometers",
      "A specialized satellite transceiver mounted on commercial passenger aircraft",
      "A low-power cellular base station typically deployed indoors or in high-density areas with a coverage radius under 100 meters to 2 kilometers",
      "An underground submarine fiber optic repeater station connecting international networks"
    ],
    "answer": 2,
    "explanation": "Femtocells and microcells provide small-footprint coverage (10m to 2km) in offices, homes, or shopping malls, allowing examiners to pinpoint suspect locations with far greater precision than macrocells."
  },
  {
    "id": 120,
    "question": "What is the maximum theoretical coverage radius of a standard GSM macrocell base transceiver station (BTS)?",
    "options": [
      "Approximately 500 meters",
      "Approximately 150 kilometers",
      "Approximately 500 kilometers",
      "Approximately 35 kilometers"
    ],
    "answer": 3,
    "explanation": "In standard GSM, the Timing Advance parameter has 64 steps (0 to 63), each representing ~550 meters: 64 * 550m = 35.2 km, setting the theoretical maximum cell radius to ~35 km without extended range configurations. (limited by GSM Timing Advance range of 0 to 63)"
  },
  {
    "id": 121,
    "question": "In Call Detail Record (CDR) analysis, what is 'Horizontal Beamwidth' of a directional cellular sector antenna?",
    "options": [
      "The angular width (typically 65 degrees) across which the antenna radiates the majority of its radio signal power",
      "The physical height of the steel telecommunication tower above ground level",
      "The vertical tilt angle applied to direct radio waves toward the horizon",
      "The speed in megabits per second at which mobile packet data is transmitted"
    ],
    "answer": 0,
    "explanation": "Cellular sector antennas typically have a horizontal beamwidth of 60\u00b0 to 65\u00b0 (measured at -3dB half-power points). While covering a 120\u00b0 sector nominal wedge, signal is strongest within this 65\u00b0 beam."
  },
  {
    "id": 122,
    "question": "In cellular tower engineering, what is 'Mechanical Downtilt' versus 'Electrical Downtilt'?",
    "options": [
      "Mechanical tilt is controlled by the user's mobile smartphone; electrical tilt is controlled by satellite operators",
      "Mechanical tilt physically angles the antenna bracket downward; electrical tilt alters phase shifts across antenna elements to tilt the beam without moving the bracket",
      "Mechanical tilt increases the cell coverage area; electrical tilt shuts down the radio transceiver",
      "Mechanical tilt rotates the antenna 360 degrees continuously; electrical tilt locks the antenna North"
    ],
    "answer": 1,
    "explanation": "Downtilt confines cell coverage to a target area. Mechanical tilt physically tilts the hardware. Electrical tilt changes the relative phase of the radio frequency feed, altering the radiation pattern electronically."
  },
  {
    "id": 123,
    "question": "In forensic CDR analysis, what is the 'Planimetric Travel Speed Test'?",
    "options": [
      "Measuring the electrical resistance of the SIM card chip contacts using a digital multimeter",
      "Determining the data transfer rate in gigabytes per hour during active 4G video streaming",
      "Calculating the distance between two cell towers and the elapsed time between consecutive calls to determine if suspect movement was physically plausible",
      "Calculating the battery drain percentage of the smartphone per kilometer traveled"
    ],
    "answer": 2,
    "explanation": "If a suspect phone connects to Tower A in Delhi at 10:00 AM and Tower B in Mumbai at 10:15 AM, the implied speed (>4,000 km/h) is physically impossible, proving that two different phones or SIM-swap clones were active."
  },
  {
    "id": 124,
    "question": "What is 'SIM Swapping' (SIM Jacking) fraud in telecom cybercrime?",
    "options": [
      "Physically exchanging SIM cards between two smartphones during a physical robbery",
      "Soldering two distinct SIM chips onto a single printed circuit board adapter",
      "Modifying the IMEI number of a mobile handset using cracked service software",
      "Fraudulently convincing a mobile carrier to reassign a victim's phone number to a new SIM card in the attacker's possession to intercept 2FA OTP codes"
    ],
    "answer": 3,
    "explanation": "SIM swapping is a social engineering attack where an adversary dupes the carrier into activating a new SIM card linked to the victim's MSISDN, instantly intercepting SMS-based two-factor authentication (OTP) codes."
  },
  {
    "id": 125,
    "question": "What is 'IMEI Cloning' (or IMEI Spoofing) and why do criminals engage in it?",
    "options": [
      "Reprogramming a stolen phone's IMEI to match a legitimate, unblacklisted device to bypass Equipment Identity Register (EIR) network blocks",
      "Duplicating a SIM card's IMSI number across multiple physical microchips",
      "Converting a single-SIM smartphone into a dual-SIM smartphone via software update",
      "Altering the MAC address of an external wireless Wi-Fi router"
    ],
    "answer": 0,
    "explanation": "Stolen phones are blacklisted on the EIR by their IMEI. Criminals use specialized flashing boxes to overwrite the IMEI with an arbitrary or valid IMEI from a cheap handset, allowing the blacklisted phone back onto networks."
  },
  {
    "id": 126,
    "question": "In telecommunications, what is a 'Call Forwarding' (CF) artifact in a CDR?",
    "options": [
      "A call that was initiated using a commercial VoIP application like Skype or WhatsApp",
      "A record showing that an incoming call was redirected automatically to another phone number (due to unconditional, busy, or unreachable forwarding)",
      "A voice call that crossed international sovereign borders via undersea cables",
      "A conference call involving three or more subscribers simultaneously"
    ],
    "answer": 1,
    "explanation": "Call forwarding records in CDRs show the original called number, the forwarding flag (CFU - unconditional, CFB - busy, CFNRY - no reply), and the forwarded-to number, critical for tracing deceptive redirection."
  },
  {
    "id": 127,
    "question": "What is the Short Message Service Center (SMSC) number recorded in SMS CDR logs?",
    "options": [
      "The hardware serial number of the receiving subscriber's mobile handset",
      "The geographic latitude and longitude coordinates of the destination cell tower",
      "The telephone number of the carrier's central message switching server responsible for storing, routing, and delivering the SMS message",
      "The cryptographic SHA-256 integrity hash of the 160-character text payload"
    ],
    "answer": 2,
    "explanation": "When an SMS is sent, it is routed to the carrier's SMSC (e.g. +91 9810051914 for Airtel Delhi). The CDR records this SMSC address, confirming which carrier handled the message transmission."
  },
  {
    "id": 128,
    "question": "What is the maximum payload size of a single standard GSM SMS text message in 7-bit default alphabet encoding?",
    "options": [
      "256 characters",
      "70 characters (which applies to 16-bit UCS-2 Unicode)",
      "500 characters",
      "160 characters (140 bytes / 1,120 bits)"
    ],
    "answer": 3,
    "explanation": "A standard SMS is limited to 140 octets (bytes) = 1,120 bits. In standard GSM 7-bit encoding: 1120 / 7 = 160 characters. In 16-bit UCS-2 Unicode (e.g. Hindi, emojis), the limit is 140 / 2 = 70 characters."
  },
  {
    "id": 129,
    "question": "What occurs when an SMS message exceeds 160 characters in standard GSM 7-bit encoding?",
    "options": [
      "It is split into multiple concatenated SMS parts, each holding 153 characters with a 7-byte User Data Header (UDH) for reassembly",
      "The message is converted into a voice call and delivered as synthesized speech",
      "The carrier automatically truncates and discards all text beyond the 160th character",
      "The message is permanently encrypted using 256-bit Advanced Encryption Standard keys"
    ],
    "answer": 0,
    "explanation": "Long messages use Concatenated SMS (Multipart SMS). A 6- or 7-byte User Data Header (UDH) inside each part tells the receiving phone how to reassemble the segments, reducing available text to 153 characters per part."
  },
  {
    "id": 130,
    "question": "What forensic artifact format is commonly used by Garmin GPS navigation and fitness devices to store track logs, waypoints, and heart rate data?",
    "options": [
      "GPX (GPS Exchange Format XML)",
      "FIT",
      "KML (Keyhole Markup Language)",
      "CSV (Comma-Separated Values)"
    ],
    "answer": 1,
    "explanation": "Garmin devices store location tracks, sensor data, and timestamps in proprietary binary '.FIT' files. Forensic tools decode FIT files to extract precise latitude, longitude, altitude, speed, and biometric telemetry. (Flexible and Interoperable Data Transfer) binary format (.fit)"
  },
  {
    "id": 131,
    "question": "In Unmanned Aerial Vehicle (UAV / Drone) forensics, what critical flight data is recovered from the drone's internal flash memory (e.g. DJI DAT files)?",
    "options": [
      "Decrypted corporate email archives synchronized from the pilot's laptop",
      "The private cryptographic keys of all commercial passenger aircraft in the flight corridor",
      "GPS flight trajectories, takeoff home points, pilot controller coordinates, altitude, motor RPM, and battery telemetry",
      "The Master Boot Record partition table of the local air traffic control radar system"
    ],
    "answer": 2,
    "explanation": "Drone flight logs (e.g. DJI .DAT or .txt logs) record rich forensic evidence: exact Home Point (where the pilot stood at takeoff), flight path coordinates, altitude, throttle inputs, pitch/roll, and serial numbers."
  },
  {
    "id": 132,
    "question": "What is the 'Home Point' in drone forensics and why is it legally significant in locating a rogue drone operator?",
    "options": [
      "The geographic address of the manufacturer's corporate headquarters",
      "The primary international airport designated for emergency landings",
      "The central telecommunication switching office routing cellular data",
      "The GPS coordinate recorded by the drone at motor arming/takeoff, frequently identifying the physical location of the pilot"
    ],
    "answer": 3,
    "explanation": "When a drone takes off, its GPS establishes a 'Home Point' for automated Return-to-Home (RTH). Extracting the Home Point from flight logs reveals where the pilot was standing when the flight commenced."
  },
  {
    "id": 133,
    "question": "What wireless protocol is predominantly used for short-range communication between mobile smartphones and smart wearable accessories?",
    "options": [
      "Bluetooth Low Energy (BLE / Bluetooth Smart)",
      "NFC (Near Field Communication)",
      "Zigbee (IEEE 802.15.4)",
      "Wi-Fi Direct (P2P)"
    ],
    "answer": 0,
    "explanation": "Smartwatches and fitness trackers use Bluetooth Low Energy (BLE) to communicate with paired phones. BLE provides low-power telemetry streaming, and pairing artifacts persist in mobile system settings."
  },
  {
    "id": 134,
    "question": "Where are paired Bluetooth device MAC addresses and connection timestamps stored on an Android smartphone?",
    "options": [
      "/system/etc/bluetooth/devices.xml",
      "/data/misc/bluedroid/bt_config.conf (or /data/misc/bluetooth/)",
      "/data/system/users/0/paired_bt.db",
      "/vendor/bluetooth/firmware/bonding.conf"
    ],
    "answer": 1,
    "explanation": "Android stores paired Bluetooth device details in 'bt_config.conf' (or associated XML/database files in modern Android), documenting device MAC address, device name, link keys, and last connection timestamps."
  },
  {
    "id": 135,
    "question": "What information is recorded in the 'Location Information' (EF_LOCI) elementary file on a SIM card?",
    "options": [
      "The user's complete Google Maps offline navigation map caches",
      "The physical street address of the retail shop where the SIM was purchased",
      "TMSI (Temporary Mobile Subscriber Identity), Location Area Code (LAC), and Mobile Country/Network Code (MCC/MNC) of the last registered cell",
      "The private Wi-Fi network passwords of all connected wireless routers"
    ],
    "answer": 2,
    "explanation": "EF_LOCI on a SIM card records the last location area where the phone was active: Temporary Mobile Subscriber Identity (TMSI), Location Area Code (LAC), and Routing Area status."
  },
  {
    "id": 136,
    "question": "What is 'Cell Phone Triangulation' using multiple cell towers in forensic geolocation?",
    "options": [
      "Connecting three physical jumper wires to the smartphone circuit board test points",
      "Rotating the mobile device through three 90-degree angles inside a Faraday box",
      "Calculating the mathematical average of three distinct SHA-256 acquisition digests",
      "Estimating a phone's position by calculating the intersection of distance circles (using Timing Advance and signal delay) from three or more base stations"
    ],
    "answer": 3,
    "explanation": "True triangulation (or trilateration) requires data from at least 3 distinct cell towers. By calculating the signal propagation delay / Timing Advance from each tower, the phone's location is narrowed to the intersection area."
  },
  {
    "id": 137,
    "question": "Why does a single cell tower CDR record provide a 'sector area' rather than an exact pinpoint GPS coordinate?",
    "options": [
      "A cell sector antenna covers a 120-degree wedge spanning several kilometers, meaning the phone could be anywhere within that radio coverage zone",
      "Cellular carriers deliberately scramble tower coordinates to protect national security secrets",
      "The cellular radio frequency signal is reflected by the Earth's ionosphere",
      "Cellular phones disable their internal GPS hardware whenever a voice call is active"
    ],
    "answer": 0,
    "explanation": "A standard CDR only indicates that a phone connected to a specific tower antenna. Because a sector antenna radiates in an arc (e.g. 120\u00b0 azimuth) across several square kilometers, CDR data proves presence within an area, not a pinpoint point."
  },
  {
    "id": 138,
    "question": "What telecom artifact combines base station geographic coordinates with sector azimuth angles to map CDR tower locations into GIS mapping software?",
    "options": [
      "Customer Application Form (CAF)",
      "Cell Site Database (Cell Tower Dump / Master Tower List provided by telecom operators)",
      "Subscriber Detail Record (SDR)",
      "International Mobile Equipment Identity registry"
    ],
    "answer": 1,
    "explanation": "The Cell Site Database (master cell list) provides the physical ground coordinates (Latitude/Longitude), Azimuth (compass direction), Antenna Height, and Beamwidth for every Cell ID, enabling GIS visualization."
  },
  {
    "id": 139,
    "question": "What is 'Drive Testing' in telecommunications and forensic cellular coverage verification?",
    "options": [
      "Testing the crash resistance of a mobile smartphone inside a motor vehicle collision simulator",
      "Accelerating a hard disk drive to 7200 RPM to verify read head stability",
      "Physically driving a route with specialized RF scanning equipment to measure real-world signal strength and verify which cell tower actually serves a specific location",
      "Simulating vehicle speed using an automated software emulator in a forensic laboratory"
    ],
    "answer": 2,
    "explanation": "Because terrain and buildings cause signal reflections and shadowing, mathematical coverage maps can be misleading. Drive testing uses specialized RF receivers to measure actual radio coverage and confirm tower connectivity on the ground."
  },
  {
    "id": 140,
    "question": "What is the designated legal retention period for Call Detail Records (CDRs) and IPDRs mandated for telecom service providers by the Department of Telecommunications (DoT) in India?",
    "options": [
      "6 months",
      "10 years",
      "90 days",
      "2 years"
    ],
    "answer": 3,
    "explanation": "In December 2021, the Department of Telecommunications (DoT), Government of India, amended the Unified License agreement, mandating that all telecom and internet service providers preserve CDRs and IPDRs for a minimum of 2 years. (extended from 1 year by DoT amendment in December 2021)"
  },
  {
    "id": 141,
    "question": "What commercial mobile forensic hardware and software suite developed by Cellebrite is widely used for physical and logical smartphone extraction?",
    "options": [
      "Cellebrite UFED",
      "EnCase Forensic Workstation",
      "Wireshark Network Suite",
      "Ghidra Reverse Engineering Core"
    ],
    "answer": 0,
    "explanation": "Cellebrite UFED is the global standard commercial hardware and software suite for mobile device extraction, supporting physical, file system, and logical extractions across thousands of Android and iOS devices. (Universal Forensic Extraction Device)"
  },
  {
    "id": 142,
    "question": "What specialized mobile forensic hardware device developed by Magnet Forensics / Grayshift specializes in passcode brute-forcing and full file system extraction of iPhones?",
    "options": [
      "Tableau T8u",
      "GrayKey",
      "UltraBlock Hardware",
      "Atola Insight"
    ],
    "answer": 1,
    "explanation": "GrayKey (developed by Grayshift, now Magnet Forensics) is a specialized hardware appliance that interfaces with modern locked iPhones via Lightning/USB-C to perform advanced passcode recovery and full file system/AFU/BFU extractions."
  },
  {
    "id": 143,
    "question": "In Android application reverse engineering, what open-source tool decompiles compiled Dalvik bytecode (.dex) directly into readable Java source code?",
    "options": [
      "apktool",
      "Wireshark",
      "jadx (or jadx-gui)",
      "Volatility"
    ],
    "answer": 2,
    "explanation": "jadx (and jadx-gui) decompiles Android DEX, APK, and AAR files into clean, readable Java source code, enabling forensic examiners to inspect application code and hardcoded secrets."
  },
  {
    "id": 144,
    "question": "What open-source tool is standard for disassembling Android APK packages into Smali assembly code and decoding binary XML resources?",
    "options": [
      "jadx",
      "binwalk",
      "ddrescue",
      "apktool"
    ],
    "answer": 3,
    "explanation": "apktool decodes binary AndroidManifest.xml and resource tables (.arsc) into human-readable XML and disassembles Dalvik bytecode into Smali assembly files for modification and analysis."
  },
  {
    "id": 145,
    "question": "In Android forensics, what is the role of 'StrongBox Keymaster' implemented in hardware security chips (e.g. Titan M)?",
    "options": [
      "A dedicated hardware security chip with its own CPU, memory, and secure storage providing tamper-resistant cryptographic key generation",
      "A secondary cellular radio transceiver used to connect to 5G mmWave networks",
      "An automated battery cooling controller that prevents thermal throttling",
      "A software virtual machine running Dalvik bytecode under root privileges"
    ],
    "answer": 0,
    "explanation": "StrongBox Keymaster (introduced in Android 9) executes on dedicated, physically isolated tamper-resistant hardware (like Google Titan M) separate from the main processor, protecting cryptographic keys against physical probing."
  },
  {
    "id": 146,
    "question": "How can an examiner query an Android Content Provider directly from the command line using ADB?",
    "options": [
      "adb pull /provider/content/<path>",
      "adb shell content query --uri content://<authority>/<path>",
      "adb execute-sql --database=<db_name>",
      "adb query-provider --target=<authority>"
    ],
    "answer": 1,
    "explanation": "The 'content' command in Android shell ('content query --uri content://...') allows examiners to query content providers over ADB, retrieving contacts, call logs, and SMS messages without directly pulling database files."
  },
  {
    "id": 147,
    "question": "Where are Android application Shared Preferences stored on the internal file system?",
    "options": [
      "/data/system/preferences/<package_name>.dat",
      "/sdcard/Android/data/<package_name>/prefs.json",
      "/data/data/<package_name>/shared_prefs/<name>.xml",
      "/system/etc/preferences/<package_name>.xml"
    ],
    "answer": 2,
    "explanation": "Shared Preferences are stored as plain XML files in '/data/data/<package_name>/shared_prefs/'. They store configuration parameters, user login tokens, last sync timestamps, and session flags."
  },
  {
    "id": 148,
    "question": "What custom recovery environment for Android is widely utilized in forensics to dump physical partitions without booting the main operating system?",
    "options": [
      "Odin Download Engine",
      "Fastboot OEM Flasher",
      "Android Stock Recovery",
      "TWRP (Team Win Recovery Project)"
    ],
    "answer": 3,
    "explanation": "TWRP (Team Win Recovery Project) is a custom touch-based recovery. Flashing or booting a temporary TWRP image allows examiners to execute root commands, dump block partitions via ADB, and mount encrypted partitions."
  },
  {
    "id": 149,
    "question": "In Android partition architecture, what is the purpose of the 'frp' (Factory Reset Protection) partition?",
    "options": [
      "Storing persistent Google account authentication flags to prevent unauthorized use after an untrusted recovery factory reset",
      "Holding the kernel image and initial RAM disk used during system boot",
      "Managing the radio frequency calibration parameters for cellular transceivers",
      "Caching high-resolution image thumbnails browsed in gallery applications"
    ],
    "answer": 0,
    "explanation": "The 'frp' partition (or persistent partition) stores Google account verification tokens. If a thief resets the phone via recovery, FRP blocks access at setup wizard until the original owner's Google credentials are entered."
  },
  {
    "id": 150,
    "question": "What is the operational difference between Apple iOS 'Recovery Mode' and 'DFU (Device Firmware Upgrade) Mode'?",
    "options": [
      "Recovery Mode bypasses the user passcode; DFU Mode executes an automated factory reset",
      "Recovery Mode loads iBoot and displays a graphical connect-to-computer icon; DFU Mode communicates directly with SecureROM with a completely black screen",
      "Recovery Mode is accessible exclusively on iPads; DFU Mode is restricted to Apple Watches",
      "Recovery Mode operates over Wi-Fi; DFU Mode requires an optical fiber connection"
    ],
    "answer": 1,
    "explanation": "Recovery Mode runs iBoot (second-stage bootloader), presenting a USB graphic on screen. DFU mode is executed by the hardware BootROM (SecureROM) before iBoot loads; the screen stays pitch black, allowing low-level exploit execution."
  },
  {
    "id": 151,
    "question": "What is the USB Product ID (PID) presented by an Apple device when connected in DFU Mode?",
    "options": [
      "0x1281 (Recovery Mode PID)",
      "0x12A8 (Normal iOS USB PID)",
      "0x1227",
      "0x8086"
    ],
    "answer": 2,
    "explanation": "In USB enumeration, Apple devices in DFU Mode present the Product ID (PID) '0x1227'. In Recovery Mode, they present PID '0x1281'. In standard booted mode, they present PID '0x12A8' (or similar)."
  },
  {
    "id": 152,
    "question": "In Apple APFS file system encryption, what is a 'Keybag'?",
    "options": [
      "A physical Faraday pouch used to transport seized iPhones to the laboratory",
      "An uncompressed tar archive containing system diagnostic crash dumps",
      "A registry hive storing paired Bluetooth accessory serial numbers",
      "A data structure containing a collection of class encryption keys wrapped with higher-level master keys derived from user passcodes and hardware UID"
    ],
    "answer": 3,
    "explanation": "A Keybag is a cryptographic container holding Data Protection class keys. iOS maintains the System Keybag (unlocked at boot with hardware keys) and the User Keybag (unwrapped only when the user enters their passcode)."
  },
  {
    "id": 153,
    "question": "In Apple iTunes / Finder backup forensic analysis, what file functions as the master index mapping hashed filenames to their original paths?",
    "options": [
      "Manifest.db (SQLite 3 relational database)",
      "Manifest.plist (Property List file)",
      "Status.plist",
      "Info.plist"
    ],
    "answer": 0,
    "explanation": "In an iOS local backup, 'Manifest.db' is an SQLite database containing the 'Files' table, mapping each 40-character SHA-1 hashed filename (e.g., '3d0d7e5fb2ce288813306e4d4636395e047a3d28') back to its relative path and domain."
  },
  {
    "id": 154,
    "question": "What cryptographic algorithm and iteration count are utilized to derive the key that encrypts an Apple iOS local backup when 'Encrypt iPhone Backup' is enabled?",
    "options": [
      "MD5 single-pass hashing algorithm",
      "PBKDF2 with HMAC-SHA1 or HMAC-SHA256 using up to 10,000,000 iterative rounds",
      "Argon2id with 1 Megabyte memory cost",
      "DES 56-bit symmetric block cipher"
    ],
    "answer": 1,
    "explanation": "Apple uses PBKDF2 with extremely high iteration counts (often 10 million rounds in modern iOS) to derive the key from the backup password, making brute-force dictionary attacks computationally expensive without GPU clusters."
  },
  {
    "id": 155,
    "question": "What SQLite database file stores historical Push Notifications delivered to an Apple iOS device?",
    "options": [
      "/System/Library/PushNotifications/cache.db",
      "/private/var/preferences/notifications.plist",
      "/private/var/mobile/Library/UserNotifications/ (delivers.db or PushStore databases)",
      "/private/var/root/Library/Alerts.db"
    ],
    "answer": 2,
    "explanation": "iOS stores delivered push notifications in SQLite databases under '/private/var/mobile/Library/UserNotifications/'. Notifications frequently contain snippets of incoming WhatsApp, Signal, or bank messages received while locked."
  },
  {
    "id": 156,
    "question": "In Apple iOS forensics, what is 'Apple Unified Logging' and what file format stores its log traces?",
    "options": [
      "A plain text log file located in /var/log/messages.txt",
      "A Windows Event Log container format (.evtx) adapted for iOS",
      "An uncompressed HTML report generated by the Safari web browser",
      "A high-performance system logging system storing binary trace data in '.tracev3' files in '/private/var/db/diagnostics/'"
    ],
    "answer": 3,
    "explanation": "Unified Logging (introduced in iOS 10) records high-volume kernel and user-space telemetry into compressed binary files with the '.tracev3' extension, detailing app launches, network connections, and security events."
  },
  {
    "id": 157,
    "question": "In cellular telecommunications roaming architecture, what is the 'HPLMN'?",
    "options": [
      "Home Public Land Mobile Network (the subscriber's native home cellular network)",
      "Visited Public Land Mobile Network (the roaming partner network)",
      "Hardware Packet Link Mobile Node (the base station controller)",
      "High Power Low Modulated Network (the emergency broadcast system)"
    ],
    "answer": 0,
    "explanation": "HPLMN (Home PLMN) is the network where the subscriber's SIM card profile is permanently registered (identified by the MCC and MNC of the IMSI). When abroad, the phone roams on a VPLMN (Visited PLMN)."
  },
  {
    "id": 158,
    "question": "In cellular telecommunications roaming architecture, what is the 'VPLMN'?",
    "options": [
      "Home Public Land Mobile Network (the native cellular carrier)",
      "Visited Public Land Mobile Network (the foreign or guest network where a roaming subscriber connects)",
      "Virtual Packet Logical Mobile Node (the gateway router)",
      "Verified Private Land Mobile Network (the law enforcement radio band)"
    ],
    "answer": 1,
    "explanation": "VPLMN (Visited PLMN) is the guest network that a mobile user connects to while roaming outside their home carrier's territory. The VPLMN coordinates with the subscriber's HPLMN for authentication and billing."
  },
  {
    "id": 159,
    "question": "What international standard file format is used by cellular operators to exchange international roaming billing and call records?",
    "options": [
      "PCAPNG (Packet Capture Next Generation)",
      "JSON (JavaScript Object Notation)",
      "TAP3 (Transferred Account Procedure version 3 / CIBER format)",
      "MBOX (Mailbox Container Format)"
    ],
    "answer": 2,
    "explanation": "TAP3 (Transferred Account Procedure version 3) is the standard format defined by the GSMA for exchanging roaming call detail records between cellular operators worldwide for settlement."
  },
  {
    "id": 160,
    "question": "What technology enables high-definition voice telephone calls over 4G LTE packet-switched data networks instead of legacy 2G/3G circuit-switched networks?",
    "options": [
      "GPRS (General Packet Radio Service)",
      "EDGE (Enhanced Data rates for GSM Evolution)",
      "CSFB (Circuit-Switched Fallback)",
      "VoLTE (Voice over Long-Term Evolution) utilizing IP Multimedia Subsystem (IMS)"
    ],
    "answer": 3,
    "explanation": "VoLTE routes voice calls as packetized data streams over LTE using the IP Multimedia Subsystem (IMS) and Session Initiation Protocol (SIP), replacing legacy circuit-switched fallbacks and providing HD audio."
  },
  {
    "id": 161,
    "question": "In telecommunications forensics, what is 'VoWiFi' (Voice over Wi-Fi)?",
    "options": [
      "Making cellular voice calls and sending SMS over an unencrypted or encrypted Wi-Fi network using IMS tunneling back to the carrier's core",
      "Broadcasting FM radio signals across local household wireless routers",
      "Executing Bluetooth audio streaming to external automobile speakers",
      "Transferring contacts between two smartphones using near-field communication"
    ],
    "answer": 0,
    "explanation": "VoWiFi (Voice over Wi-Fi / Wi-Fi Calling) tunnels cellular voice and SMS over standard residential or public Wi-Fi connections via an IPsec tunnel to the carrier's ePDG gateway, meaning calls generate IPDRs instead of traditional cell tower CGI records."
  },
  {
    "id": 162,
    "question": "What forensic challenge occurs when a suspect places a voice call using VoWiFi (Wi-Fi Calling)?",
    "options": [
      "The call recording will automatically be deleted from the recipient's smartphone memory",
      "The CDR will lack a cellular tower Cell Global Identity (CGI), showing an ePDG IP or Wi-Fi gateway indicator instead",
      "The caller's IMEI number will permanently change to all zeros",
      "The carrier's Equipment Identity Register will permanently blacklist the SIM card"
    ],
    "answer": 1,
    "explanation": "Because VoWiFi calls route through the internet via Wi-Fi rather than cellular base stations, the CDR does not record a physical BTS cell tower CGI. Investigators must rely on carrier IPDR logs and ISP IP allocation to locate the Wi-Fi router."
  },
  {
    "id": 163,
    "question": "In cellular tower coverage modeling, what is an 'Omnidirectional Antenna' versus a 'Directional Sector Antenna'?",
    "options": [
      "An omnidirectional antenna communicates exclusively with satellites; a directional antenna connects to underground cables",
      "An omnidirectional antenna requires high-voltage electrical power; a directional antenna is completely passive",
      "An omnidirectional antenna radiates 360 degrees equally in all horizontal directions; a directional antenna concentrates radiation in a specific sector wedge",
      "An omnidirectional antenna operates only during nighttime; a directional antenna functions during daylight"
    ],
    "answer": 2,
    "explanation": "Omnidirectional antennas radiate equally in 360\u00b0 (common in rural sites or microcells). Directional sector antennas concentrate power in specific angular azimuths (e.g. 120\u00b0 or 65\u00b0), providing angular sectorization for forensic mapping."
  },
  {
    "id": 164,
    "question": "In cellular CDR mapping, what does 'Antenna Downtilt' do to the coverage radius on the ground?",
    "options": [
      "Increasing downtilt expands the coverage radius to over 100 kilometers",
      "Increasing downtilt rotates the antenna azimuth 180 degrees counter-clockwise",
      "Increasing downtilt converts the cellular signal from 4G LTE to analog 1G",
      "Increasing downtilt pulls the radio beam closer to the tower, shrinking the coverage footprint and reducing interference with neighboring cells"
    ],
    "answer": 3,
    "explanation": "Tilting an antenna downward (downtilt) directs the main lobe toward the ground closer to the base station, reducing cell radius and preventing signal overshoot into adjacent cell sites."
  },
  {
    "id": 165,
    "question": "What telecom analysis method evaluates overlapping cell tower radii and Timing Advance arcs to establish a suspect's probable presence within a narrow geographic boundary?",
    "options": [
      "RF Propagation & Cell Intersection Geofencing",
      "IMEI Parity Check Analysis",
      "SIM Application Toolkit Simulation",
      "Baseband Hex Dump Carving"
    ],
    "answer": 0,
    "explanation": "By modeling the known coverage contours (azimuth, beamwidth, power) and Timing Advance distance rings of multiple cell towers recorded in a CDR, forensic examiners identify the intersection zone where the suspect's phone was operated."
  },
  {
    "id": 166,
    "question": "In SIM card file system architecture (ISO/IEC 7816), what is the root directory designated as?",
    "options": [
      "DF (Dedicated File)",
      "MF (Master File - designated by file ID 0x3F00)",
      "EF (Elementary File)",
      "ADF (Application Dedicated File)"
    ],
    "answer": 1,
    "explanation": "Under ISO/IEC 7816 smart card standards, the root directory of a SIM card is the Master File (MF), identified by the hexadecimal ID '3F00'. Subdirectories are Dedicated Files (DFs), and data files are Elementary Files (EFs)."
  },
  {
    "id": 167,
    "question": "In SIM card file system architecture, what is a 'Dedicated File' (DF)?",
    "options": [
      "A raw physical partition storing the SIM operating system kernel",
      "An individual data file storing subscriber text messages",
      "A functional directory or folder subordinate to the Master File (e.g. DF_GSM 0x7F20, DF_TELECOM 0x7F10)",
      "A temporary cryptographic certificate issued by the base station controller"
    ],
    "answer": 2,
    "explanation": "A Dedicated File (DF) functions as a directory within the smart card file system, grouping related Elementary Files (e.g., DF_TELECOM holds phonebooks and SMS; DF_GSM holds cellular authentication data)."
  },
  {
    "id": 168,
    "question": "In SIM card file system architecture, what is an 'Elementary File' (EF)?",
    "options": [
      "The central processing unit embedded within the silicon microchip",
      "The external radio frequency antenna printed on the plastic carrier",
      "The power regulation circuit connecting the SIM card to the smartphone battery",
      "A leaf file containing actual subscriber data, structured as Transparent (binary), Linear Fixed, or Cyclic"
    ],
    "answer": 3,
    "explanation": "Elementary Files (EFs) are the actual data files on a smart card. They store data like IMSI (EF_IMSI), SMS (EF_SMS), contacts (EF_ADN), and location info (EF_LOCI)."
  },
  {
    "id": 169,
    "question": "In SIM card forensics, what file structure type is used for 'EF_SMS' (Short Messages)?",
    "options": [
      "Linear Fixed (consisting of fixed-length records, each holding one SMS message slot)",
      "Transparent (a flat linear stream of unformatted binary bytes)",
      "Cyclic (a circular ring buffer where new entries overwrite the oldest entry)",
      "Hierarchical B-Tree database table"
    ],
    "answer": 0,
    "explanation": "EF_SMS is structured as a Linear Fixed file, divided into a fixed number of records (typically 176 bytes each). Each record holds the status byte, SMSC address, sender/recipient number, timestamp, and message text."
  },
  {
    "id": 170,
    "question": "In SIM card forensics, what file structure type is used for 'EF_LND' (Last Number Dialed)?",
    "options": [
      "Transparent (a flat unstructured binary byte stream)",
      "Cyclic (a circular buffer where new dialed numbers overwrite the oldest entry)",
      "Linear Fixed (fixed slots that reject new entries when full)",
      "Relational SQLite container file"
    ],
    "answer": 1,
    "explanation": "EF_LND (Last Number Dialed) is structured as a Cyclic file. When a user dials a new call, it is written to the top record, and the oldest record rolls off the end, maintaining a fixed history of recent outbound calls."
  },
  {
    "id": 171,
    "question": "What technology replaces physical removable plastic SIM cards with a programmable, permanently soldered chip inside the smartphone?",
    "options": [
      "Micro-SD Flash Card",
      "Smart Media Card",
      "eSIM",
      "Memory Stick Duo"
    ],
    "answer": 2,
    "explanation": "An eSIM (eUICC) is a hardware chip soldered directly onto the device motherboard. It supports Remote SIM Provisioning (RSP), allowing users to download and switch carrier profiles without handling a physical SIM card. (Embedded SIM / eUICC - Embedded Universal Integrated Circuit Card)"
  },
  {
    "id": 172,
    "question": "In eSIM (eUICC) architecture, what entity securely packages and downloads mobile network operator profiles onto subscriber devices?",
    "options": [
      "HLR (Home Location Register)",
      "MSC (Mobile Switching Center)",
      "EIR (Equipment Identity Register)",
      "SM-DP+ (Subscription Manager Data Preparation +)"
    ],
    "answer": 3,
    "explanation": "SM-DP+ (Subscription Manager Data Preparation +) is the secure server in GSMA Remote SIM Provisioning architecture that prepares, encrypts, and downloads eSIM profile packages to the Local Profile Assistant (LPA) on the device."
  },
  {
    "id": 173,
    "question": "How does a mobile forensic investigator extract eSIM profiles and ICCID identifiers from a modern smartphone?",
    "options": [
      "Via logical/file system extraction querying telephony system settings or carrier profile property lists and databases",
      "By physically desoldering the eSIM chip and inserting it into a standard SIM card reader",
      "By scanning the device with a low-frequency handheld metal detector",
      "By exposing the device to high-intensity ultraviolet radiation"
    ],
    "answer": 0,
    "explanation": "Because eSIM chips are permanently soldered microchips, examiners extract eSIM profile metadata (ICCID, carrier profile name, state) logically through mobile forensic tools querying telephony databases and system settings."
  },
  {
    "id": 174,
    "question": "What rich forensic evidence is extracted from the internal storage of a modern Body-Worn Camera (BWC) used by law enforcement or security personnel?",
    "options": [
      "Decrypted BitLocker volume encryption recovery passwords",
      "Continuous timestamped video/audio streams, GPS location coordinates, buffer pre-event recordings, and device serial numbers",
      "The private RSA keys of the municipal electrical power grid",
      "The Master File Table allocation bitmap of all nearby domestic routers"
    ],
    "answer": 1,
    "explanation": "Body-worn cameras store tamper-resistant video recordings with synchronized watermarked UTC timestamps, GPS tracks, accelerometer activations, buffering history (pre-event buffer), and officer ID metadata."
  },
  {
    "id": 175,
    "question": "What artifact recovered from modern Smart TV flash memory can prove a suspect was awake and present inside a residence at the time of a crime?",
    "options": [
      "The serial number of the electrical wiring inside the living room walls",
      "The physical fingerprints of all individuals who watched the television broadcast",
      "Application launch logs (Netflix, YouTube), video streaming timestamps, connected Wi-Fi networks, and voice remote command histories",
      "The Master Boot Record partition table of the local municipal water pump"
    ],
    "answer": 2,
    "explanation": "Smart TVs run operating systems (Android TV, webOS, Tizen) that record app launch logs, streaming watch histories with timestamps, paired Bluetooth accessories, and voice assistant command recordings."
  },
  {
    "id": 176,
    "question": "In digital home assistant forensics (e.g. Amazon Alexa), where are complete voice recording audio clips and transcribed text primarily stored?",
    "options": [
      "In the internal physical RAM of the speaker, persisting permanently across power outages",
      "On the plastic casing of the device using micro-engraved optical barcodes",
      "On the local residential Wi-Fi router's dynamic routing table",
      "In the user's Amazon Cloud account database (accessible via cloud forensic extraction or legal preservation request)"
    ],
    "answer": 3,
    "explanation": "While smart speakers retain short temporary audio caches in local flash memory, the permanent voice clips, full audio recordings, and text transcripts are stored on cloud servers, accessible via cloud forensics or search warrants."
  },
  {
    "id": 177,
    "question": "What communication technology utilized in Apple AirTags and Samsung SmartTags allows them to be geolocated by nearby stranger smartphones?",
    "options": [
      "Bluetooth Low Energy (BLE) rotating public keys broadcast to crowdsourced 'Find My' mesh networks",
      "Active high-power 5G cellular modems transmitting directly to telecom towers",
      "High-frequency ultrasonic chirps that resonate through building walls",
      "Direct satellite uplink transmissions to low-earth orbit constellations"
    ],
    "answer": 0,
    "explanation": "AirTags emit BLE advertisement beacons with cryptographically rotating public keys. Any passing iPhone in the worldwide 'Find My' mesh network detects the beacon, encrypts its own GPS location, and uploads it to Apple's cloud."
  },
  {
    "id": 178,
    "question": "What forensic evidence can be extracted from a suspect's smartphone that was paired with an Apple AirTag?",
    "options": [
      "The physical battery voltage curve of the remote AirTag coin cell battery",
      "The paired AirTag serial number, assigned name, registration date, paired Apple ID, and historical location alerts stored in local property lists",
      "The names and phone numbers of all stranger iPhone owners who passed near the AirTag",
      "The cryptographic private keys of all Apple corporate server data centers"
    ],
    "answer": 1,
    "explanation": "A paired iPhone stores the AirTag's serial number, custom name, pairing timestamp, and local tracking alerts in '/private/var/mobile/Library/TrackingAvoidance/' and Find My caches, linking the suspect directly to the tracker."
  },
  {
    "id": 179,
    "question": "What forensic intelligence is obtained by analyzing 'Unwanted Tracking Alerts' on a victim's smartphone (e.g. stalking via AirTag or SmartTag)?",
    "options": [
      "The complete internet search history of the person who manufactured the tracking tag",
      "The bank account details of the retail store where the tracking tag was originally purchased",
      "The timeline and map of geographic route points where the unrecognized tracking tag was detected traveling with the victim",
      "The physical home address of all engineers who designed the tracking tag's Bluetooth firmware"
    ],
    "answer": 2,
    "explanation": "When an iPhone or modern Android detects an unknown tracker traveling with the user, it logs an alert containing a map of locations and timestamps where the tracker was seen traveling with the victim, proving stalking patterns."
  },
  {
    "id": 180,
    "question": "What forensic data can be extracted from modern Smart Doorbell cameras (e.g. Ring, Nest)?",
    "options": [
      "The private cryptographic keys of the municipal police department radio network",
      "The physical weight of all vehicles that drove past the residential property",
      "The Master Boot Record partition table of the home electrical smart meter",
      "Motion activation timestamps, doorbell button press events, cloud-stored video/audio clips, visitor facial snapshots, and Wi-Fi connection logs"
    ],
    "answer": 3,
    "explanation": "Smart doorbells record motion detection events, doorbell ring events, live-view requests, and video/audio clips with precise timestamps, providing crucial alibi validation or entry/exit timelines."
  },
  {
    "id": 181,
    "question": "In automotive digital forensics, what standardized physical port located under the dashboard provides access to onboard vehicle diagnostics and ECU data?",
    "options": [
      "OBD-II (On-Board Diagnostics II) 16-pin connector port",
      "USB-C SuperSpeed Diagnostic Port",
      "RS-232 Serial DB9 Port",
      "Ethernet RJ45 Twisted Pair Port"
    ],
    "answer": 0,
    "explanation": "The OBD-II port (mandatory in passenger cars since 1996 in US, 2001 in EU/India) provides direct diagnostic access to vehicle electronic control units (ECUs), trouble codes, and real-time sensor parameters."
  },
  {
    "id": 182,
    "question": "What commercial forensic software and hardware suite developed by Berla Corporation is the worldwide industry standard for vehicle infotainment and telematics extraction?",
    "options": [
      "Cellebrite UFED for Vehicles",
      "iVe Vehicle Forensic System",
      "Magnet AXIOM Auto",
      "FTK Automotive Suite"
    ],
    "answer": 1,
    "explanation": "Berla iVe is the specialized forensic tool for extracting and analyzing data from vehicle infotainment (IVI) and telematics control units (TCU), recovering GPS tracks, connected mobile devices, door events, and voice calls."
  },
  {
    "id": 183,
    "question": "What forensic artifact extracted from a vehicle telematics system proves that a vehicle door was opened or closed at a specific timestamp?",
    "options": [
      "The engine coolant temperature gauge needle position recorded on analog dials",
      "The friction wear pattern observed across physical disc brake pads",
      "Door opening/closing event records logged by the Body Control Module (BCM) over the CAN bus",
      "The tire pressure monitor radio frequency transmission frequency"
    ],
    "answer": 2,
    "explanation": "Modern vehicle Body Control Modules (BCMs) log events when doors, hoods, or trunks are opened, closed, locked, or unlocked, complete with timestamps, proving when a suspect entered or exited a vehicle."
  },
  {
    "id": 184,
    "question": "In drone crash forensics, what physical storage component inside a drone or its camera gimbal holds captured aerial photographic and video evidence?",
    "options": [
      "Magnetic spinning hard disk drive rotating at 5400 RPM",
      "Dynamic RAM memory buffer that clears upon motor shutdown",
      "An optical DVD-R disc burned in real-time during flight",
      "Micro-SD card (or internal eMMC/UFS storage) formatted in FAT32 or exFAT"
    ],
    "answer": 3,
    "explanation": "Drones store high-resolution aerial video and images on removable Micro-SD cards or internal eMMC flash storage (formatted in FAT32 or exFAT), containing standard MP4/MOV files and embedded EXIF/subrip telemetry."
  },
  {
    "id": 185,
    "question": "What is 'Geofencing' in consumer drone firmware (e.g. DJI GEO system) and how is it forensically relevant?",
    "options": [
      "Restricting flight within designated no-fly zones (airports, prisons, national borders); forensic logs record warnings or authorization unlocks if breached",
      "Preventing the drone from taking off unless connected to a home Wi-Fi network",
      "Limiting drone camera resolution to standard definition within residential areas",
      "Automatically returning the drone to the manufacturer whenever maintenance is due"
    ],
    "answer": 0,
    "explanation": "Drone firmware enforces GEO geofencing around restricted airspace. Flight logs record geofence warnings, forced landings, or administrative unlock certificates, establishing whether a suspect intentionally flew in restricted zones."
  },
  {
    "id": 186,
    "question": "What legal doctrine in Indian jurisprudence mandates that digital evidence like CDRs or mobile extractions must be preserved in an unaltered state?",
    "options": [
      "Doctrine of Sovereign Immunity",
      "Principle of Evidentiary Integrity & Custody",
      "Principle of Estoppel",
      "Doctrine of Severability"
    ],
    "answer": 1,
    "explanation": "Evidentiary integrity requires that mobile evidence remain unaltered from seizure through analysis. Any unauthorized modification can lead to exclusion under Indian evidentiary standards. (under BSA 2023 / CrPC 1973)"
  },
  {
    "id": 187,
    "question": "In criminal trials involving mobile phone seizures in India, what official police document records the physical inventory, serial numbers, and condition of seized items at the scene?",
    "options": [
      "First Information Report (FIR registered under Section 154 CrPC)",
      "Charge Sheet / Final Police Report (under Section 173 CrPC)",
      "Seizure Memo / Panchnama (executed in the presence of independent witnesses)",
      "General Diary / Station Daily Diary (entry recorded at police station)"
    ],
    "answer": 2,
    "explanation": "The Seizure Memo / Panchnama is the foundational legal document executed at the scene. It details the exact make, model, IMEI, physical condition, SIM details, and sealing process in the presence of independent witnesses."
  },
  {
    "id": 188,
    "question": "What is the role of 'Independent Witnesses' (Panchas) during the seizure and sealing of mobile devices at a crime scene under Indian law?",
    "options": [
      "Performing the technical forensic extraction of WhatsApp chat databases",
      "Deciding the legal guilt or innocence of the accused suspect",
      "Authorizing the telecom service provider to issue Call Detail Records",
      "Attesting that the physical evidence was recovered from the suspect or scene and sealed in their presence without tampering"
    ],
    "answer": 3,
    "explanation": "Panch witnesses provide independent corroboration to the court that the seizure, inventory, and sealing of electronic evidence occurred as claimed by police, refuting claims of police planting or evidence tampering."
  },
  {
    "id": 189,
    "question": "Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, who is legally competent to sign the electronic evidence certificate for a mobile phone extraction report?",
    "options": [
      "The qualified digital forensics examiner or person in lawful management/operation of the forensic workstation computer",
      "The defense counsel representing the accused in the criminal trial",
      "The physical manufacturer of the smartphone battery",
      "Any member of the general public who witnessed the criminal act"
    ],
    "answer": 0,
    "explanation": "Section 63(4) BSA 2023 requires that the certificate be signed by a person occupying a responsible official position in relation to the operation of the relevant device or the management of the relevant activities (i.e., the forensic examiner)."
  },
  {
    "id": 190,
    "question": "What is the evidentiary status of mobile text messages (SMS/WhatsApp) without accompanying certificate under Section 63 BSA 2023 / 65B IEA 1872 in Indian courts (Arjun Panditrao v. Kailash Kushanrao)?",
    "options": [
      "They are automatically accepted as absolute proof of criminal guilt",
      "They are legally inadmissible as secondary electronic evidence unless the mandatory statutory certificate is produced",
      "They are admissible only if the recipient has physically memorized the text messages",
      "They are admissible only in civil lawsuits and strictly barred from criminal trials"
    ],
    "answer": 1,
    "explanation": "The Supreme Court of India in Arjun Panditrao (2020) ruled that the production of a Section 65B (now Section 63 BSA 2023) certificate is mandatory as a condition precedent to the admissibility of secondary electronic evidence."
  },
  {
    "id": 191,
    "question": "What is a 'Faraday Box' with integrated RF-shielded viewing window and conductive gloves used for during mobile forensic triage?",
    "options": [
      "Bypassing the device's hardware biometric Face ID facial recognition cameras",
      "Desoldering the flash memory chips using integrated robotic soldering irons",
      "Allowing examiners to manually operate a seized phone's touchscreen in real time while maintaining complete radio frequency isolation",
      "Recharging the smartphone battery using wireless electromagnetic induction"
    ],
    "answer": 2,
    "explanation": "A Faraday box with a shielded viewing window and internal conductive gloves allows an examiner to navigate the phone manually (e.g. enable Airplane mode, check OS version) while completely shielded from external RF signals."
  },
  {
    "id": 192,
    "question": "What is 'Mobile Device Triage' in digital forensic investigations?",
    "options": [
      "The permanent physical destruction of obsolete mobile phone hardware components",
      "The recycling of precious metals extracted from smartphone circuit boards",
      "The automated factory reset of all seized mobile smartphones before analysis",
      "A rapid preliminary examination at the scene or lab to preview critical evidence (e.g. active chats, recent calls) to guide immediate tactical decisions"
    ],
    "answer": 3,
    "explanation": "Forensic triage is the rapid, prioritized inspection of seized devices to find urgent leads (e.g., kidnapping victim location, ongoing threats) before conducting the exhaustive full forensic acquisition and analysis."
  },
  {
    "id": 193,
    "question": "In mobile forensics, what is the 'Clean Workstation Principle'?",
    "options": [
      "Ensuring the forensic analysis computer is free from unauthorized software, properly calibrated, updated, and validated to prevent evidence cross-contamination",
      "Wiping the exterior plastic case of the mobile phone with antibacterial sanitizer wipes",
      "Only conducting examinations in rooms that have certified high-efficiency air filters",
      "Restricting digital forensic examinations strictly to newly purchased desktop computers"
    ],
    "answer": 0,
    "explanation": "The clean workstation principle mandates that the examiner's workstation be properly maintained, free of extraneous test cases, isolated from malware contamination, and running validated, accredited forensic software."
  },
  {
    "id": 194,
    "question": "What is 'Tool Validation' in accredited digital forensics laboratories under ISO/IEC 17025?",
    "options": [
      "Checking that the forensic software product license key has been renewed annually",
      "Empirically testing forensic hardware and software tools against known datasets to verify that they produce accurate, reliable, and repeatable results",
      "Ensuring that the forensic software graphical user interface matches corporate branding guidelines",
      "Verifying that the software vendor is listed on international commercial stock exchanges"
    ],
    "answer": 1,
    "explanation": "Tool validation (mandated by ISO/IEC 17025 and Daubert standards) requires labs to test tools against mock ground-truth datasets, verifying that the tool accurately extracts data without altering, dropping, or fabricating records."
  },
  {
    "id": 195,
    "question": "In mobile forensic report writing, why must an examiner document the exact software version number of the extraction tool utilized?",
    "options": [
      "To assist the software vendor in auditing commercial licensing compliance",
      "To satisfy standard graphic design requirements for government publication printing",
      "To ensure scientific reproducibility, allowing other examiners to replicate the examination and evaluate known bugs or parsing behavior of that specific version",
      "To determine the retail market resale price of the forensic equipment"
    ],
    "answer": 2,
    "explanation": "Scientific validity requires repeatability. Documenting exact software versions (e.g. Cellebrite UFED v7.65.0.12) ensures that findings can be verified or re-tested by independent experts, accounting for version-specific parsing rules."
  },
  {
    "id": 196,
    "question": "What is the final, comprehensive repository where an examiner documents all mobile extraction steps, tool outputs, hash values, and forensic findings?",
    "options": [
      "First Information Report (FIR)",
      "Police Station Daily Diary",
      "Telecommunication Service Provider Service Level Agreement",
      "Digital Forensic Examination Report (Expert Witness Report)"
    ],
    "answer": 3,
    "explanation": "The Digital Forensic Examination Report is the formal, legally binding document presented to the court. It details case background, evidence receipt, tool validation, extraction methodology, hash integrity, findings, and expert opinions."
  },
  {
    "id": 197,
    "question": "What is the significance of the Luhn Algorithm (Mod 10 algorithm) in mobile phone hardware identification?",
    "options": [
      "It computes the final 15th validation check digit of an International Mobile Equipment Identity (IMEI) number",
      "It encrypts the subscriber's voice calls over 3G UMTS radio frequency channels",
      "It generates the cryptographic public key used in Apple Secure Enclave boot validation",
      "It formats the internal flash memory chips of Android smartphones during factory resets"
    ],
    "answer": 0,
    "explanation": "The 15th digit of an IMEI is a check digit calculated using the Luhn formula (mod 10). Forensic software validates this digit to verify that a typed or extracted IMEI is mathematically valid."
  },
  {
    "id": 198,
    "question": "In mobile cellular positioning, what is the 'Angle of Arrival' (AoA) technique?",
    "options": [
      "Calculating the vertical elevation of a drone above ground level using barometric sensors",
      "Measuring the specific directional angle at which a mobile handset's radio signal arrives at multiple antenna arrays on cell towers to pinpoint its location",
      "Measuring the battery temperature increase during rapid wireless charging cycles",
      "Determining the optical refraction angle of laser scanners during chip-off desoldering"
    ],
    "answer": 1,
    "explanation": "Angle of Arrival (AoA) uses multi-element antenna arrays at base stations to calculate the exact direction from which the mobile phone's uplink radio signal arrives, providing precise bearing lines for triangulation."
  },
  {
    "id": 199,
    "question": "What artifact is created in an Android smartphone's internal storage when an application encounters an unhandled exception or crash?",
    "options": [
      "Encrypted BitLocker full volume header backups in unallocated cluster slack",
      "A full physical bitstream copy of the external SIM card elementary files",
      "ANR (Application Not Responding) traces and tombstone crash dumps in '/data/anr/' and '/data/tombstones/'",
      "An automatic SMS message transmitted directly to local police dispatchers"
    ],
    "answer": 2,
    "explanation": "When apps crash or hang, Android generates ANR traces in '/data/anr/traces.txt' and native crash dumps in '/data/tombstones/', capturing process state, memory stack frames, loaded libraries, and timestamps."
  },
  {
    "id": 200,
    "question": "In digital forensics evidence presentation, why must an examiner distinguish between 'Device Time' and 'Network Time' (UTC/NTP)?",
    "options": [
      "Device time is legally barred from being presented in criminal court proceedings",
      "Network time is calculated using the internal rotational speed of the hard drive platters",
      "Device time changes automatically whenever an external USB cable is attached",
      "User devices may have altered, drifted, or incorrect local clocks, whereas cellular carrier CDR timestamps reflect synchronized network UTC time"
    ],
    "answer": 3,
    "explanation": "Suspects often deliberately change their phone clock (or the battery drains causing time drift). Forensic examiners must correlate device-local timestamps with authoritative, UTC-synchronized network CDR timestamps."
  }
];

if (typeof window !== 'undefined') {
  window.book4MCQs = book4MCQs;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = book4MCQs;
}
