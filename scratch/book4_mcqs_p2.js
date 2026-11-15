// Book 4 MCQs Part 2: Topics 6–10 (Q51–Q100)
// High-yield DSSSB Cyber Forensic questions

module.exports = [
  // =========================================================================
  // TOPIC 6: APP PERMISSIONS (ANDROID & IOS TCC) (Q51–Q60)
  // =========================================================================
  {
    id: 51,
    topic: "Android Permission Architecture",
    question: "In the Android operating system, how does the kernel enforce basic application isolation and security sandboxing?",
    options: [
      "By assigning every installed app a unique, distinct Linux User ID (UID like u0_a145) at install time, restricting access to its own private directory (/data/data/<package>)",
      "By placing each application inside an encrypted hardware virtual machine container",
      "By executing all third-party applications inside a temporary Google Chrome browser tab",
      "By requiring every application binary to be signed with the cellular carrier's private key"
    ],
    answer: 0,
    explanation: "Android relies on standard Linux multi-user separation: each installed app is assigned a unique Linux User ID (e.g., `u0_a145`). Standard UNIX file permissions prevent one app from reading another app's directory."
  },
  {
    id: 52,
    topic: "Android Permission Classes",
    question: "Under Android's permission model (Android 6.0 Marshmallow and newer), what defines a 'Dangerous' (or Runtime) permission?",
    options: [
      "Permissions that access sensitive user private data (Camera, Microphone, Location, Contacts, SMS) and must be explicitly approved by the user at runtime via an interactive dialog",
      "Permissions that allow an application to increase CPU clock speed above factory limits",
      "Permissions that allow an application to completely delete the operating system recovery image",
      "Permissions granted exclusively to pre-installed system apps signed with the platform key"
    ],
    answer: 0,
    explanation: "Dangerous (Runtime) permissions access private user data or control device hardware (e.g., READ_CONTACTS, ACCESS_FINE_LOCATION, RECORD_AUDIO). The OS prompts the user with an explicit approval dialog at first use."
  },
  {
    id: 53,
    topic: "Android Normal Permissions",
    question: "How are 'Normal' permissions (e.g., ACCESS_NETWORK_STATE, SET_WALLPAPER) handled during Android app installation?",
    options: [
      "They are granted automatically by the system upon installation without prompting the user, as they pose minimal risk to user privacy",
      "They require entering the user's Google account password during installation",
      "They are permanently blocked unless the device is rooted",
      "They must be manually enabled by the user in Settings > Developer Options"
    ],
    answer: 0,
    explanation: "Normal permissions cover areas where the app needs to access data or resources outside its sandbox, but where there is very little risk to the user's privacy (e.g., accessing the internet). They are granted automatically."
  },
  {
    id: 54,
    topic: "Android Permission Auditing",
    question: "In an Android forensic investigation, which XML file located in `/data/system/` records the complete list of installed packages, assigned UIDs, and granted runtime permissions?",
    options: [
      "packages.xml",
      "AndroidManifest.xml",
      "settings.xml",
      "build.prop"
    ],
    answer: 0,
    explanation: "`/data/system/packages.xml` is a master forensic artifact recording all installed packages, their allocated Linux UIDs, installation/update timestamps, code paths, and the exact set of permissions granted by the user."
  },
  {
    id: 55,
    topic: "Android Manifest File",
    question: "What essential configuration file inside an Android APK package statically declares all permissions that the application may ever request?",
    options: [
      "AndroidManifest.xml",
      "classes.dex",
      "resources.arsc",
      "META-INF/CERT.RSA"
    ],
    answer: 0,
    explanation: "Every Android APK must include `AndroidManifest.xml` at its root. It declares the app's package name, components (Activities, Services, Receivers), and all `<uses-permission>` tags requested."
  },
  {
    id: 56,
    topic: "iOS TCC Framework",
    question: "In Apple iOS, what privacy framework controls and logs user permissions for sensitive resources (Camera, Microphone, Photos, Contacts, Health)?",
    options: [
      "Transparency, Consent, and Control (TCC) Framework",
      "iOS Sandboxed User Privilege Manager (SUPM)",
      "Secure Enclave Runtime Authorization (SERA)",
      "Apple FairPlay DRM Controller"
    ],
    answer: 0,
    explanation: "Apple's TCC (Transparency, Consent, and Control) subsystem governs access to sensitive hardware and user privacy data, maintaining access control lists and prompts across iOS and macOS."
  },
  {
    id: 57,
    topic: "iOS TCC Database Artefact",
    question: "Where is the primary SQLite database storing user-granted app permissions located in an extracted iOS file system?",
    options: [
      "/private/var/mobile/Library/TCC/TCC.db",
      "/System/Library/CoreServices/permissions.sqlite",
      "/private/var/root/Preferences/privacy.plist",
      "/var/log/tcc_permissions.log"
    ],
    answer: 0,
    explanation: "`TCC.db` (located at `/private/var/mobile/Library/TCC/TCC.db`) is a critical forensic SQLite database storing bundle IDs, requested services (e.g., `kTCCServiceCamera`), user authorization states, and grant timestamps."
  },
  {
    id: 58,
    topic: "iOS Privacy Descriptions",
    question: "In iOS application development, what must developers include in `Info.plist` to explain to users why the app needs access to a protected resource (e.g., Camera)?",
    options: [
      "A Usage Description string (e.g., NSCameraUsageDescription)",
      "A raw hexadecimal public key certificate",
      "A compiled C++ kernel driver extension",
      "A hardcoded root password hash"
    ],
    answer: 0,
    explanation: "Apple mandates Purpose Strings in `Info.plist` (e.g., `NSCameraUsageDescription`, `NSLocationWhenInUseUsageDescription`). If an app attempts to access a protected API without this string, iOS instantly crashes the app."
  },
  {
    id: 59,
    topic: "Android Special Access",
    question: "What specialized high-privilege Android permission, introduced in Android 11 (API 30), grants an app broad access to shared storage outside its scoped storage sandbox?",
    options: [
      "MANAGE_EXTERNAL_STORAGE (All Files Access)",
      "READ_PRIVILEGED_PHONE_STATE",
      "BIND_ACCESSIBILITY_SERVICE",
      "INSTALL_SHORTCUT"
    ],
    answer: 0,
    explanation: "`MANAGE_EXTERNAL_STORAGE` grants an application broad management access to shared storage outside Scoped Storage directories, commonly requested by file managers, backup tools, and mobile malware."
  },
  {
    id: 60,
    topic: "Permission Forensics",
    question: "Why is analyzing granted app permissions forensic critical in mobile malware investigations?",
    options: [
      "To identify permission abuse: detecting apps requesting anomalous combinations (e.g., a simple Calculator app requesting READ_SMS, RECORD_AUDIO, and RECEIVE_BOOT_COMPLETED)",
      "To measure the battery consumption rate of the device display",
      "To decrypt the SSL encryption keys of all incoming internet traffic",
      "To verify whether the SIM card is registered to a prepaid or postpaid plan"
    ],
    answer: 0,
    explanation: "Permission auditing is central to mobile malware analysis. Malicious spyware disguises itself as benign utilities (flashlights, calculators) while requesting sensitive permissions like READ_SMS (OTP theft) and RECORD_AUDIO."
  },

  // =========================================================================
  // TOPIC 7: JAIL-BREAKING (IOS) (Q61–Q70)
  // =========================================================================
  {
    id: 61,
    topic: "iOS Jailbreaking Fundamentals",
    question: "What is the technical objective of 'Jailbreaking' an Apple iOS mobile device?",
    options: [
      "Privilege escalation to superuser (root UID 0), disabling mandatory code-signing checks (amfid), and bypassing the sandbox to access the root file system",
      "Physically unlocking the device so it accepts SIM cards from different cellular carriers",
      "Replacing the Apple A-Series processor with an open-source ARM CPU",
      "Flashing an open-source Android operating system onto the iPhone hardware"
    ],
    answer: 0,
    explanation: "Jailbreaking exploits software or hardware vulnerabilities in iOS to obtain superuser (`root`, UID 0) privileges, patches Apple Mobile File Integrity daemon (`amfid`) to bypass code signing, and removes the sandbox."
  },
  {
    id: 62,
    topic: "SIM Unlock vs Jailbreak",
    question: "How does a 'Carrier Unlock' (SIM-unlock) differ from an 'iOS Jailbreak'?",
    options: [
      "Carrier unlocking permits using any network SIM card without modifying OS privilege boundaries, whereas jailbreaking modifies OS kernel security to grant root access",
      "Carrier unlocking requires replacing the internal battery; jailbreaking is done over the air",
      "Carrier unlocking grants root access; jailbreaking only changes the network operator APN",
      "Carrier unlocking and jailbreaking are identical legal terms for the same procedure"
    ],
    answer: 0,
    explanation: "Carrier unlock (network unlock) simply updates the baseband activation policy to allow SIM cards from other network operators. It does NOT modify system privileges or jailbreak the operating system."
  },
  {
    id: 63,
    topic: "Jailbreak Types",
    question: "What defines an 'Untethered' iOS jailbreak?",
    options: [
      "The jailbreak exploit persists across device reboots; the device boots directly into a jailbroken state without needing a computer or app re-execution",
      "The device requires connecting to a computer with specialized software every single time it boots, or it will not boot at all",
      "The device boots normally into stock unjailbroken mode, requiring a sideloaded app to be re-run on the device to restore root",
      "The jailbreak functions only when an active Wi-Fi tethering hotspot is enabled"
    ],
    answer: 0,
    explanation: "An Untethered jailbreak patches the boot chain permanently. The device can be rebooted indefinitely and remains fully jailbroken with kernel patches applied automatically at boot."
  },
  {
    id: 64,
    topic: "Jailbreak Types",
    question: "What defines a 'Tethered' iOS jailbreak?",
    options: [
      "The device cannot complete a boot sequence independently; it must be connected to a computer running exploit tools every time it is powered on",
      "The jailbreak requires an active physical ethernet cable attached to the Lightning port",
      "The jailbreak permanently disables all cellular voice calling capabilities",
      "The jailbreak survives factory resets without re-installation"
    ],
    answer: 0,
    explanation: "A Tethered jailbreak cannot boot into an operational state on its own. If powered off, the device hangs at the Apple logo or in DFU mode until booted with a computer-assisted tethered boot exploit."
  },
  {
    id: 65,
    topic: "Jailbreak Types",
    question: "What defines a 'Semi-Untethered' iOS jailbreak (the most prevalent modern format, e.g., unc0ver, Taurine, Dopamine)?",
    options: [
      "The device boots normally into an unjailbroken stock iOS state if rebooted, and the user re-enables the jailbreak simply by running a sideloaded app directly on the phone",
      "The jailbreak is permanent and cannot be removed even by an iTunes DFU restore",
      "The jailbreak requires soldering hardware jumper wires across the logic board",
      "The device must remain plugged into a wall outlet charger at all times"
    ],
    answer: 0,
    explanation: "Modern jailbreaks are semi-untethered: on reboot, the phone boots safely into stock, unjailbroken iOS. The user simply opens a sideloaded app (signed via AltStore/TrollStore) on the screen to re-inject kernel patches."
  },
  {
    id: 66,
    topic: "BootROM Exploit checkm8",
    question: "What is 'checkm8' in Apple iOS hardware forensics?",
    options: [
      "An unpatchable, permanent hardware vulnerability in the BootROM (SecureROM) of Apple A5 through A11 devices (iPhone 4S through iPhone X) that allows executing unsigned code via USB DFU mode",
      "A software trojan horse delivered via malicious iMessage attachments",
      "A zero-day web vulnerability affecting Apple Safari on iOS 17",
      "A proprietary forensic hardware box manufactured exclusively by Cellebrite"
    ],
    answer: 0,
    explanation: "`checkm8` (discovered by axi0mX in 2019) is a permanent, read-only BootROM vulnerability (use-after-free in USB DFU protocol) affecting Apple devices with A5–A11 chips. Because BootROM is burned in silicon, Apple cannot patch it via software updates."
  },
  {
    id: 67,
    topic: "Forensic Utility of checkm8",
    question: "Why is checkm8-based extraction (used in tools like checkra1n and forensic suites) considered a revolution in iOS forensics?",
    options: [
      "It allows examiners to boot a custom ramdisk into memory to perform full file system and keychain extractions on supported A5–A11 devices even without jailbreak persistence",
      "It automatically decrypts Apple IDs and reveals the suspect's iCloud master password",
      "It allows downgrading the physical hardware processor to an older generation",
      "It instantly bypasses the alphanumeric passcode without requiring brute-force"
    ],
    answer: 0,
    explanation: "checkm8 allows examiners to inject a temporary, custom forensic ramdisk over USB in DFU mode, gaining root execution in volatile RAM to extract the full file system and keychain without modifying the NAND data partition."
  },
  {
    id: 68,
    topic: "Apple Code Signing",
    question: "What iOS background security daemon enforces mandatory cryptographic code-signing on all running executables and is typically patched during a jailbreak?",
    options: [
      "amfid (Apple Mobile File Integrity Daemon)",
      "launchd",
      "cfprefsd",
      "commcenter"
    ],
    answer: 0,
    explanation: "`amfid` (Apple Mobile File Integrity daemon) enforces that every binary and dynamic library executed on iOS has a valid cryptographic signature from Apple or a trusted provisioning profile. Jailbreaks patch `amfid` to permit unsigned binaries."
  },
  {
    id: 69,
    topic: "Package Managers",
    question: "What graphical package management interface is traditionally installed on a jailbroken iPhone to manage third-party tools and command-line forensic utilities?",
    options: [
      "Cydia (or Sileo / Zebra)",
      "Google Play Store",
      "Microsoft Store",
      "RPM Package Manager"
    ],
    answer: 0,
    explanation: "Cydia (developed by Jay Freeman / saurik), along with modern alternatives Sileo and Zebra, serves as the APT-based package manager GUI on jailbroken iOS devices for installing tweaks and forensic command-line tools."
  },
  {
    id: 70,
    topic: "Jailbreak Evidence Risks",
    question: "What is the primary risk of using a public community jailbreak tool (such as unc0ver or palera1n) on a seized suspect iPhone in a criminal case?",
    options: [
      "The jailbreak modifies system files, writes persistent binaries to the data partition, and risks evidence spoliation challenges under forensic evidence rules",
      "The jailbreak automatically notifies Apple Inc. and triggers remote data destruction",
      "The jailbreak permanently disables the iPhone's NAND flash memory cells",
      "The jailbreak prevents the device from ever connecting to a forensic computer"
    ],
    answer: 0,
    explanation: "Community jailbreak tools are designed for end users, not forensics; they write Cydia binaries, modify system configurations, and alter timestamps. Forensics requires dedicated read-only ramdisk methods (like Cellebrite/GrayKey) to avoid altering evidence."
  },

  // =========================================================================
  // TOPIC 8: ANDROID OS ARCHITECTURE (Q71–Q80)
  // =========================================================================
  {
    id: 71,
    topic: "Android Architectural Layers",
    question: "What is the correct hierarchical order of the 5 core layers of the Android Operating System Architecture, from bottom (hardware) to top (user)?",
    options: [
      "Linux Kernel &rarr; Hardware Abstraction Layer (HAL) &rarr; Native Libraries & Android Runtime (ART) &rarr; Java API Framework &rarr; System & User Apps",
      "Hardware Abstraction Layer (HAL) &rarr; Linux Kernel &rarr; Java API Framework &rarr; Android Runtime (ART) &rarr; Apps",
      "Android Runtime (ART) &rarr; Linux Kernel &rarr; System Apps &rarr; Native Libraries &rarr; Hardware Abstraction Layer",
      "Java API Framework &rarr; System Apps &rarr; Linux Kernel &rarr; Native Libraries &rarr; Android Runtime (ART)"
    ],
    answer: 0,
    explanation: "The official AOSP architecture comprises: 1. Linux Kernel (base); 2. Hardware Abstraction Layer (HAL); 3. Native C/C++ Libraries & Android Runtime (ART); 4. Java API Framework; and 5. System and User Applications (top)."
  },
  {
    id: 72,
    topic: "Android Linux Kernel",
    question: "What core low-level operating system functions are handled by the modified Linux Kernel at the base of the Android OS stack?",
    options: [
      "Hardware device drivers (camera, display, Wi-Fi), memory management, process isolation, power management (Wakelocks), and SELinux mandatory access controls",
      "Rendering the Java UI buttons and handling touch screen animation frames",
      "Translating DEX bytecode into Dalvik register instructions",
      "Parsing JSON responses returned from Google Cloud APIs"
    ],
    answer: 0,
    explanation: "The Linux kernel forms the foundation of Android, providing hardware abstraction, device drivers, low-level process scheduling, virtual memory management, network stacks, and core security (SELinux)."
  },
  {
    id: 73,
    topic: "Hardware Abstraction Layer",
    question: "What is the primary role of the Hardware Abstraction Layer (HAL) in Android architecture?",
    options: [
      "Providing standardized interfaces (HIDL/AIDL) that expose device hardware capabilities to the higher-level Java framework without modifying framework code for each hardware vendor",
      "Encrypting all user passwords before saving them into the SQLite database",
      "Managing the cellular baseband radio frequency modulation",
      "Simulating an Apple iOS environment for cross-platform applications"
    ],
    answer: 0,
    explanation: "The HAL consists of multiple library modules that implement standardized interfaces for specific hardware components (Camera HAL, Audio HAL, Sensors HAL), decoupling upper Java frameworks from proprietary hardware drivers."
  },
  {
    id: 74,
    topic: "Android Runtime (ART)",
    question: "How does the modern Android Runtime (ART, introduced in Android 5.0) improve upon the legacy Dalvik Virtual Machine?",
    options: [
      "ART utilizes Ahead-of-Time (AOT) and profile-guided Just-in-Time (JIT) compilation, compiling DEX bytecode into native machine code for faster execution and improved battery life",
      "ART completely removes the Linux kernel and replaces it with Windows NT",
      "ART executes Java code directly inside the baseband cellular modem",
      "ART prohibits applications from storing SQLite databases on internal flash"
    ],
    answer: 0,
    explanation: "Legacy Dalvik interpreted bytecode with pure JIT compilation on every launch. ART uses Ahead-of-Time (AOT) compilation during installation and profile-guided JIT at runtime, executing native ELF machine code directly on the CPU."
  },
  {
    id: 75,
    topic: "DEX Bytecode",
    question: "In Android application compilation, what file format contains the compiled bytecode executed by the Android Runtime (ART)?",
    options: [
      "DEX (Dalvik Executable) format (`classes.dex`)",
      "Standard Java JAR archive format",
      "PE32 Windows executable format",
      "Mach-O 64-bit binary format"
    ],
    answer: 0,
    explanation: "Java/Kotlin source code is compiled into `.class` files, which the D8/R8 compiler optimizes and converts into Dalvik Executable (`classes.dex`) format, optimized for minimal memory footprint on mobile devices."
  },
  {
    id: 76,
    topic: "Java API Framework",
    question: "Which component of the Android Java API Framework manages the lifecycle of applications and maintains the activity navigation backstack?",
    options: [
      "Activity Manager (ActivityManagerService)",
      "Window Manager (WindowManagerService)",
      "Package Manager (PackageManagerService)",
      "Content Provider Framework"
    ],
    answer: 0,
    explanation: "`ActivityManagerService` (AMS) manages application lifecycles (create, pause, resume, destroy), process creation, task navigation, and activity backstacks."
  },
  {
    id: 77,
    topic: "Android Partitions",
    question: "In an Android flash memory partition scheme, which partition contains the user's personal files, downloaded apps, SQLite databases, and user settings?",
    options: [
      "/data (userdata partition)",
      "/system partition",
      "/boot partition",
      "/recovery partition"
    ],
    answer: 0,
    explanation: "The `/data` partition (userdata) is the primary target in digital forensics; it stores all user-installed applications, private app databases (`/data/data/`), personal photos, contacts, and configuration settings."
  },
  {
    id: 78,
    topic: "Android System Partition",
    question: "In modern Android devices (Android 10 and newer), why is the `/system` partition mounted as read-only and sealed cryptographically?",
    options: [
      "It is implemented as a 'System-as-Root' Dynamic Partition (super partition) protected by dm-verity, preventing unauthorized modification by malware or rootkits",
      "It uses optical write-once memory cells that physically prevent overwriting",
      "It is stored entirely in volatile RAM and re-downloaded from Google upon every reboot",
      "It contains proprietary carrier billing algorithms protected by telecom law"
    ],
    answer: 0,
    explanation: "Modern Android incorporates Dynamic Partitions inside a single `super` partition. System-as-Root mounts `/system` as read-only, cryptographically verified by `dm-verity` to guarantee platform integrity."
  },
  {
    id: 79,
    topic: "Android Recovery Partition",
    question: "What is the purpose of the `/recovery` partition in standard Android architecture?",
    options: [
      "It contains an independent minimal Linux environment with a dedicated kernel used to apply Over-The-Air (OTA) system updates and execute factory data resets",
      "It stores real-time backups of all user WhatsApp messages every 24 hours",
      "It stores the hardware encryption master keys inside a tamper-proof file",
      "It logs all incoming cellular telephone calls for 365 days"
    ],
    answer: 0,
    explanation: "The `/recovery` partition holds an alternate boot environment containing its own minimal kernel and recovery binary, allowing the device to perform factory wipes or install signed OTA update zip packages."
  },
  {
    id: 80,
    topic: "Zygote Process",
    question: "In Android OS startup, what is the role of the 'Zygote' daemon process?",
    options: [
      "An init-spawned parent process that preloads all common Java core classes and resources, spawning new application processes rapidly via Linux fork()",
      "The cryptographic encryption manager that decrypts flash storage during boot",
      "The network firewall daemon that inspects incoming cellular IP packets",
      "The recovery bootloader that displays the OEM manufacturer splash screen"
    ],
    answer: 0,
    explanation: "`app_process` (Zygote) is launched by `init`. It preloads common framework classes and system resources into memory. When a user launches an app, Zygote forks itself, instantly creating a new process sharing preloaded code."
  },

  // =========================================================================
  // TOPIC 9: FILE LOGGING MECHANISM IN ANDROID-PHONE (LOGCAT, DUMPSYS) (Q81–Q90)
  // =========================================================================
  {
    id: 81,
    topic: "Android Logging Subsystem",
    question: "What command-line tool and subsystem in Android provides access to the real-time system and application message logging buffers?",
    options: [
      "logcat",
      "syslog-ng",
      "eventviewer",
      "journalctl"
    ],
    answer: 0,
    explanation: "`logcat` is Android's built-in command-line tool that interfaces with the kernel `logger` driver and `logd` daemon to display and filter circular ring buffer messages generated across the system."
  },
  {
    id: 82,
    topic: "Logcat Buffers",
    question: "Android's logging architecture is split into multiple independent circular ring buffers. What is the primary role of the 'radio' log buffer (`logcat -b radio`)?",
    options: [
      "Capturing low-level cellular telephony events, baseband modem communication, SIM interactions, and signal strength changes",
      "Streaming FM radio broadcasts over the headphone jack",
      "Logging Bluetooth Low Energy audio streaming packets only",
      "Recording Wi-Fi access point beacon frames"
    ],
    answer: 0,
    explanation: "The `radio` buffer (`logcat -b radio`) captures all events originating from the telephony and radio layer (Radio Interface Layer - RIL), including AT commands, cellular tower registrations, call states, and SMS routing."
  },
  {
    id: 83,
    topic: "Logcat Buffers",
    question: "Which `logcat` buffer captures binary-encoded system event logs, such as activity life-cycle changes and battery status changes?",
    options: [
      "events (`logcat -b events`)",
      "main (`logcat -b main`)",
      "system (`logcat -b system`)",
      "crash (`logcat -b crash`)"
    ],
    answer: 0,
    explanation: "The `events` buffer (`logcat -b events`) holds binary-formatted system event messages (e.g., `am_proc_start`, `am_create_activity`, `screen_toggled`), which are crucial for timeline reconstruction in forensics."
  },
  {
    id: 84,
    topic: "Logcat Buffers",
    question: "What does the `crash` log buffer in modern Android store?",
    options: [
      "Uncaught fatal Java exceptions, application stack traces, and native C/C++ segmentation fault crash signals",
      "Records of physical vehicular accidents detected by accelerometer sensors",
      "Hardware battery over-voltage warnings",
      "Corrupted SQLite database tables"
    ],
    answer: 0,
    explanation: "The `crash` buffer (`logcat -b crash`) exclusively records fatal application crashes, uncaught Java exceptions, and native SIGSEGV/SIGABRT tombstone backtraces."
  },
  {
    id: 85,
    topic: "Dumpsys Diagnostic Tool",
    question: "In Android forensics, what is the operational purpose of executing the command `adb shell dumpsys`?",
    options: [
      "Dumping the comprehensive, real-time diagnostic state and active memory tables of all registered system services (battery, Wi-Fi, activity, accounts)",
      "Formatting the internal userdata partition and reinstalling Android",
      "Extracting raw audio recordings captured by the microphone",
      "Writing random binary data across all unallocated flash storage"
    ],
    answer: 0,
    explanation: "`dumpsys` is an invaluable live triage tool that queries the Android Service Manager, dumping the internal operational state of all active system services (e.g., `dumpsys batterystats`, `dumpsys wifi`, `dumpsys usagestats`)."
  },
  {
    id: 86,
    topic: "UsageStatsManager Forensics",
    question: "What forensic intelligence is recovered from parsing `dumpsys usagestats` (UsageStatsManager)?",
    options: [
      "Historical records of which applications were launched, exact launch timestamps, foreground duration, and last-time-used timestamps",
      "The full plain text passwords of all Google accounts registered on the device",
      "The GPS latitude and longitude of every photograph taken by the camera",
      "The private encryption keys protecting the WhatsApp message database"
    ],
    answer: 0,
    explanation: "`UsageStatsManager` logs application activity. Forensic examiners extract `dumpsys usagestats` to prove whether a suspect actively used a specific app (e.g., browser, crypto-wallet) at an exact crime timestamp."
  },
  {
    id: 87,
    topic: "Battery Historian Analysis",
    question: "What forensic data can be extracted from `dumpsys batterystats` or analyzed using Google's Battery Historian tool?",
    options: [
      "Detailed timelines of screen on/off events, app power draw, Wi-Fi connectivity intervals, GPS sensor activation, and device charging history",
      "The manufacturing serial number of the chemical lithium-ion battery cells",
      "A complete history of all incoming and outgoing encrypted phone calls",
      "The private keys stored inside the Android Keystore system"
    ],
    answer: 0,
    explanation: "Battery Historian parses `batterystats`, providing second-by-second historical timelines showing when the screen was turned on, when GPS was activated by specific apps, and when the device was plugged into power."
  },
  {
    id: 88,
    topic: "Android Bugreports",
    question: "What comprehensive diagnostic archive is generated when executing the command `adb bugreport` on an Android device?",
    options: [
      "A complete ZIP archive containing full dumpsys outputs, logcat ring buffers, kernel dmesg, tombstones, network statistics, and build configurations",
      "A raw bit-stream physical image of the userdata flash memory partition",
      "A backup file containing all user photos and videos in full resolution",
      "A compiled software patch that updates Android to the latest security level"
    ],
    answer: 0,
    explanation: "`adb bugreport` captures a comprehensive diagnostic snapshot (packaged as a ZIP file) containing `dumpsys`, all `logcat` buffers, kernel ring buffers (`dmesg`), network interface states, and memory maps."
  },
  {
    id: 89,
    topic: "Android Native Tombstones",
    question: "Where does Android store persistent crash dump files ('tombstones') generated when native C/C++ processes crash?",
    options: [
      "/data/tombstones/",
      "/system/etc/crashes/",
      "/boot/log/tombstones.bin",
      "/cache/recovery/last_crash"
    ],
    answer: 0,
    explanation: "When a native binary crashes due to memory corruption or fatal signals, the `debuggerd` daemon writes a detailed crash log (register states, stack memory, memory maps) into `/data/tombstones/tombstone_XX`."
  },
  {
    id: 90,
    topic: "Ephemeral Nature of Logcat",
    question: "What is a major forensic limitation regarding `logcat` ring buffers in digital investigations?",
    options: [
      "They reside in volatile RAM and operate as circular ring buffers; older log entries are rapidly overwritten as new messages arrive or when the device reboots",
      "They can only record messages written in pure Java, ignoring C/C++ and Kotlin",
      "They are encrypted with a private key known only to the cellular network provider",
      "They cannot be viewed unless the device has an active 5G internet connection"
    ],
    answer: 0,
    explanation: "Logcat buffers are circular in-memory ring buffers (typically 256 KB to 4 MB). High system activity overwrites older entries in minutes or hours, and all logcat data is permanently lost upon device reboot."
  },

  // =========================================================================
  // TOPIC 10: TYPES OF ARTEFACTS (ANDROID PART 1: SYSTEM & COMM) (Q91–Q100)
  // =========================================================================
  {
    id: 91,
    topic: "Android SQLite Architecture",
    question: "What database engine format is universally utilized by Android for storing application data, messages, contacts, and browser history?",
    options: [
      "SQLite 3 format",
      "Microsoft Access MDB format",
      "MySQL InnoDB raw tablespaces",
      "Oracle Berkeley DB B-trees"
    ],
    answer: 0,
    explanation: "Android relies universally on the open-source, serverless SQLite 3 relational database format for almost all system and third-party application storage."
  },
  {
    id: 92,
    topic: "SQLite Write-Ahead Logging",
    question: "In SQLite databases operating in Write-Ahead Logging (WAL) mode, what is the forensic significance of the companion `-wal` and `-shm` files?",
    options: [
      "Transactions and newly modified records are written to the `-wal` file before being checkpointed to the main database; examiners must parse both files to recover recent and deleted data",
      "The `-wal` file contains the secret encryption key used to lock the database",
      "The `-shm` file contains high-resolution video thumbnails of all database rows",
      "These files are temporary artifacts that can be safely deleted without any data loss"
    ],
    answer: 0,
    explanation: "In WAL mode, updates write to `<database>.db-wal` (Write-Ahead Log) first. Recent messages and modified records reside in the `-wal` file until a checkpoint occurs. The `-shm` file manages shared memory indexes."
  },
  {
    id: 93,
    topic: "SMS & MMS Artefacts",
    question: "What standard SQLite database file in Android stores SMS and MMS text messages, recipient phone numbers, and message bodies?",
    options: [
      "telephony.db or mmssms.db (located in `/data/data/com.android.providers.telephony/databases/`)",
      "sms_store.sqlite located in `/system/media/`",
      "messages.xml located in `/data/system/`",
      "cellular_chat.db located in `/cache/telephony/`"
    ],
    answer: 0,
    explanation: "`mmssms.db` (or `telephony.db`) under the telephony provider directory stores all native SMS/MMS messages. The `sms` table records sender/recipient, timestamp (Unix epoch ms), message type, and text body."
  },
  {
    id: 94,
    topic: "Android Timestamps",
    question: "In standard Android SQLite databases (such as `mmssms.db` or `contacts2.db`), how are date and time values typically stored?",
    options: [
      "Unix Epoch timestamps measured in milliseconds (number of milliseconds since January 1, 1970 UTC)",
      "Mac Absolute time (seconds elapsed since January 1, 2001 UTC)",
      "Windows FILETIME 64-bit intervals of 100-nanoseconds since 1601",
      "Julian day calendar strings formatted in reverse alphanumeric order"
    ],
    answer: 0,
    explanation: "Android natively stores timestamps as Unix Epoch time in milliseconds (13-digit integers like `1731668400000`), representing the milliseconds elapsed since midnight UTC on January 1, 1970."
  },
  {
    id: 95,
    topic: "Contacts & Call History Artefacts",
    question: "Which database stores address book contacts, call logs, phone numbers, call durations, and call types (incoming, outgoing, missed)?",
    options: [
      "contacts2.db (located in `/data/data/com.android.providers.contacts/databases/`)",
      "addressbook.sqlite in `/system/app/`",
      "dialer_cache.bin in `/cache/telephony/`",
      "callhistory.plist in `/data/system/users/`"
    ],
    answer: 0,
    explanation: "`contacts2.db` stores all contacts, email addresses, and phone numbers. Its `calls` table records every call event: phone number, timestamp, duration (in seconds), call type (1=Incoming, 2=Outgoing, 3=Missed), and geocoded location."
  },
  {
    id: 96,
    topic: "Android Shared Preferences",
    question: "What file format and directory path does Android use for 'Shared Preferences' (storing app settings, user tokens, and flags)?",
    options: [
      "XML files located in `/data/data/<package_name>/shared_prefs/`",
      "Binary plist files located in `/data/system/preferences/`",
      "JSON documents located in `/cache/preferences/`",
      "Plain text CSV files located in `/storage/emulated/0/`"
    ],
    answer: 0,
    explanation: "Shared Preferences store key-value pairs (login tokens, username, configuration settings) in standard XML format under `/data/data/<package_name>/shared_prefs/<preference_name>.xml`."
  },
  {
    id: 97,
    topic: "User Account Artefacts",
    question: "Where does the Android operating system store registered user account identities (Google, Exchange, WhatsApp sync accounts)?",
    options: [
      "accounts.db (located in `/data/system_de/0/` or `/data/system/users/0/`)",
      "user_profiles.xml in `/system/etc/`",
      "identities.sqlite in `/boot/config/`",
      "cloud_logins.bin in `/cache/recovery/`"
    ],
    answer: 0,
    explanation: "`accounts.db` maintains all user accounts registered with the AccountManager, linking accounts to package authenticators, sync schedules, and user email identities."
  },
  {
    id: 98,
    topic: "Wi-Fi Artefacts",
    question: "Where are saved Wi-Fi network SSIDs, pre-shared keys (WPA2 passwords), and BSSID MAC addresses stored on Android devices?",
    options: [
      "WifiConfigStore.xml (located in `/data/misc/wifi/` or `/data/misc/apexdata/com.android.wifi/`)",
      "wpa_supplicant.conf in `/system/media/`",
      "network_history.sqlite in `/boot/wifi/`",
      "wireless_passwords.txt in `/storage/emulated/0/`"
    ],
    answer: 0,
    explanation: "`WifiConfigStore.xml` (or legacy `wpa_supplicant.conf`) stores all configured Wi-Fi networks, including SSID names, WPA2/WPA3 Pre-Shared Keys in plaintext, and network connection priorities."
  },
  {
    id: 99,
    topic: "Cellular & Location Caching",
    question: "What forensic database maintained by Google Play Services caches cell tower identifications and Wi-Fi access points to accelerate geolocation?",
    options: [
      "gservices.db / geolocation caches maintained in `/data/data/com.google.android.gms/`",
      "gps_raw_stream.bin in `/boot/`",
      "carrier_cell.sqlite in `/system/telephony/`",
      "satellites.xml in `/cache/location/`"
    ],
    answer: 0,
    explanation: "Google Play Services (`com.google.android.gms`) maintains local location databases and caches of recently seen Wi-Fi BSSIDs and cell towers, frequently recording historical location fixes."
  },
  {
    id: 100,
    topic: "Android Freelist Parsing",
    question: "How can forensic examiners recover deleted SMS messages or deleted chat messages that have been deleted from an active SQLite database table?",
    options: [
      "By carving unallocated SQLite database pages and parsing deleted record payloads remaining in the database 'freelist' before a VACUUM command executes",
      "By requesting the phone's CPU to reverse its internal instruction registers",
      "By placing the smartphone inside a high-strength magnetic degausser",
      "By sending a special AT command to the cellular baseband processor"
    ],
    answer: 0,
    explanation: "When a row is deleted in SQLite, the engine marks the leaf cell as free and links it to a 'freelist' rather than overwriting it immediately. Forensic tools parse freelists and unallocated space to recover deleted record payloads until a `VACUUM` command reorganizes the file."
  }
];

