var book2MCQs = [
  {
    "id": 1,
    "question": "According to RFC 3227, which digital evidence source exhibits the highest volatility and must be collected first?",
    "options": [
      "CPU registers and on-chip processor caches",
      "Routing tables, ARP caches, and process tables",
      "Main physical volatile memory (RAM)",
      "Temporary filesystem swap space and pagefiles"
    ],
    "answer": 0,
    "explanation": "RFC 3227 establishes the order of volatility: CPU registers and caches are volatile down to nanoseconds and must be gathered first if hardware debugging allows."
  },
  {
    "id": 2,
    "question": "In the RFC 3227 order of volatility hierarchy, where does temporary swap file space reside relative to physical RAM and fixed disk drives?",
    "options": [
      "Immediately preceding routing tables and active network connection state tables",
      "Directly after physical RAM and kernel memory, preceding fixed hard disks",
      "Directly following remote network logging streams and audit daemon archives",
      "At the lowest tier of the hierarchy below physical archival backup tapes"
    ],
    "answer": 1,
    "explanation": "RFC 3227 order: Registers/Cache -> Routing table/ARP/Process table/Kernel memory -> RAM -> Temporary file systems/swap -> Disk -> Remote logs -> Physical topology -> Archival media."
  },
  {
    "id": 3,
    "question": "When preserving evidence from an active live workstation, which action directly violates forensic live response protocols?",
    "options": [
      "Extracting volatile system memory using an external hardware PCIe DMA device",
      "Capturing volatile RAM contents prior to unmounting non-volatile disk partitions",
      "Performing a clean graceful operating system shutdown via the Start menu",
      "Recording active network socket states and established connections locally"
    ],
    "answer": 2,
    "explanation": "A graceful shutdown executes termination scripts, deletes temporary files, flushes RAM buffers, updates registry hives, and destroys volatile evidence."
  },
  {
    "id": 4,
    "question": "Which Windows registry key configuration enforces a hardware-independent software write-block across attached USB mass storage devices?",
    "options": [
      "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Storage -> ReadOnlyMode set to 1",
      "HKCU\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR -> Start configuration set to 4",
      "HKLM\\SYSTEM\\MountedDevices\\Policies\\MassStorage -> AccessControl set to 0",
      "HKLM\\SYSTEM\\CurrentControlSet\\Control\\StorageDevicePolicies -> WriteProtect set to 1"
    ],
    "answer": 3,
    "explanation": "Setting DWORD 'WriteProtect' to 1 under HKLM\\SYSTEM\\CurrentControlSet\\Control\\StorageDevicePolicies instructs the Windows USBSTOR driver to block all write requests to connected USB drives."
  },
  {
    "id": 5,
    "question": "What fundamental operational advantage does a hardware write-blocker offer over software-based write-blocking?",
    "options": [
      "It intercepts and drops ATA/SCSI write command opcodes at the hardware bus level before reaching device firmware",
      "It mathematically modifies disk partition tables in volatile memory without altering physical flash blocks",
      "It dynamically generates real-time SHA-256 integrity checksums for each logical block address read",
      "It permits bidirectional SCSI commands while decrypting Full Disk Encryption (FDE) containers on the fly"
    ],
    "answer": 0,
    "explanation": "Hardware write-blockers intercept low-level ATA/SCSI write primitives at the physical controller level, guaranteeing no write signals reach the drive platters or NAND chips."
  },
  {
    "id": 6,
    "question": "Which forensic disk imaging format encapsulates raw bitstream data alongside internal metadata, acquisition hashes, and block-level checksums?",
    "options": [
      "Raw Bitstream Image Format (DD / RAW)",
      "Expert Witness Format (E01 / EnCase)",
      "Virtual Hard Disk Container Format (VHDX)",
      "Advanced Forensic Framework Level 1 (AFF1)"
    ],
    "answer": 1,
    "explanation": "E01 encapsulates raw sector chunks (typically 64 sectors) alongside Adler-32/CRC32 checksums, acquisition date, examiner notes, and stored MD5/SHA-1 hashes."
  },
  {
    "id": 7,
    "question": "When verifying the integrity of a forensic duplicate image against the source media, what does cryptographic hash equality confirm?",
    "options": [
      "Verification that all deleted files within unallocated clusters have been successfully recovered",
      "Confirmation that the physical storage media contains no bad sectors or damaged magnetic domains",
      "Bit-level identical correspondence confirming that the acquisition process introduced zero data alterations",
      "Legal compliance proving that the acquisition was executed under a valid Section 91 CrPC warrant"
    ],
    "answer": 2,
    "explanation": "Matching cryptographic digests (e.g., SHA-256) prove mathematical identity: not a single bit was modified, added, or dropped during imaging."
  },
  {
    "id": 8,
    "question": "What are the digest output bit-lengths produced by the MD5, SHA-1, and SHA-256 cryptographic hashing algorithms respectively?",
    "options": [
      "64 bits, 128 bits, and 256 bits",
      "128 bits, 192 bits, and 512 bits",
      "160 bits, 256 bits, and 512 bits",
      "128 bits, 160 bits, and 256 bits"
    ],
    "answer": 3,
    "explanation": "MD5 generates a 128-bit digest (32 hex chars); SHA-1 generates 160 bits (40 hex chars); SHA-256 produces 256 bits (64 hex chars)."
  },
  {
    "id": 9,
    "question": "Why is relying solely on MD5 hashes legally risky in high-stakes modern digital forensics proceedings?",
    "options": [
      "Practical cryptographic hash collision attacks exist where two distinct files produce identical MD5 digests",
      "MD5 hash computation consumes excessive CPU clock cycles compared to SHA-512 in memory analysis",
      "MD5 digest strings cannot be mathematically represented in standard ASCII hexadecimal characters",
      "MD5 algorithms fail when computing hashes over drive capacities exceeding two terabytes (2TB)"
    ],
    "answer": 0,
    "explanation": "Due to collision vulnerabilities demonstrated by Wang et al., MD5 alone is insufficient to prove unique identity in court; modern guidelines mandate SHA-256 dual hashing."
  },
  {
    "id": 10,
    "question": "What specific disk region remains uncaptured when an examiner performs a logical acquisition instead of a physical bit-stream acquisition?",
    "options": [
      "Active user directory paths, system registry hives, and installed application binaries",
      "Unallocated space, slack space, file system metadata structures, and deleted cluster contents",
      "File allocation tables, Master Boot Record signatures, and root directory folder trees",
      "Mounted network shares, temporary internet files, and volatile spooler print queues"
    ],
    "answer": 1,
    "explanation": "Logical acquisition captures only files and folders accessible through the OS filesystem API, omitting unallocated clusters, slack space, deleted files, and low-level structures."
  },
  {
    "id": 11,
    "question": "What constitutes 'RAM Slack' (Sector Slack) in legacy 512-byte magnetic disk sectors?",
    "options": [
      "The unused cluster blocks between the end of an allocated sector and the full cluster cluster boundary",
      "The volatile RAM buffer allocated by the OS kernel to cache pending asynchronous write operations",
      "The data gap between the end of logical file data and the end of that specific 512-byte sector",
      "The reserved unpartitioned disk sectors located between Master Boot Record sector 0 and sector 63"
    ],
    "answer": 2,
    "explanation": "Sector/RAM slack is the space from the logical end of a file to the end of that 512-byte sector. Older operating systems padded this gap with memory buffer remnants."
  },
  {
    "id": 12,
    "question": "What constitutes 'File Slack' (Cluster Slack) in modern file systems like NTFS or FAT32?",
    "options": [
      "The unused bytes located between the partition boot sector and the primary volume descriptor table",
      "The unallocated sectors residing between the primary MBR partition table and extended logical drives",
      "The reserved overhead padding bytes inside a Master File Table (MFT) record following attribute headers",
      "The remaining unused physical sectors between the last written sector of a file and the end of the cluster allocation block"
    ],
    "answer": 3,
    "explanation": "Cluster slack encompasses the sectors spanning from the end of the sector containing file data up to the cluster boundary, frequently harboring residual deleted data."
  },
  {
    "id": 13,
    "question": "What forensic challenge occurs when calculating cryptographic hashes over solid-state drives (SSDs) with active TRIM / NVMe Deallocate?",
    "options": [
      "Deterministic read-zero policies or background garbage collection alter sector contents across successive read passes",
      "NAND flash controllers prohibit hardware write blockers from interfacing with NVMe M.2 form factors",
      "Wear leveling controllers remap physical sector numbers exclusively into volatile Host Protected Areas",
      "Solid-state drives employ hardware-based bit inversion that permanently invalidates SHA-256 calculations"
    ],
    "answer": 0,
    "explanation": "When TRIM is executed, SSD controllers may return zeros for trimmed sectors or garbage collect them in the background, causing subsequent whole-drive hash calculations to differ."
  },
  {
    "id": 14,
    "question": "What is the operational function of a Faraday isolation bag during mobile device seizure?",
    "options": [
      "Dissipating electrostatic discharge charges that could short-circuit volatile flash memory NAND gates",
      "Shielding mobile radios from external RF signals (cellular, Wi-Fi, Bluetooth) to prevent remote data wiping",
      "Supplying continuous inductive electromagnetic current to sustain volatile static RAM contents",
      "Bypassing hardware biometric lockouts via Near Field Communication electromagnetic pulses"
    ],
    "answer": 1,
    "explanation": "Faraday bags act as electromagnetic shields that block all incoming radio-frequency communications, preventing remote wipe commands or incoming syncs from modifying evidence."
  },
  {
    "id": 15,
    "question": "What critical risk arises if an iPhone in an 'After First Unlock' (AFU) state is allowed to completely power down?",
    "options": [
      "The operating system initiates an automated factory reset sequence under Apple Secure Boot standards",
      "The NAND flash flash translation layer corrupts all APFS container allocation bitmap structures",
      "The device reboots into 'Before First Unlock' (BFU) state, purging Class A and C encryption keys from volatile memory",
      "The device permanently locks its hardware bus, requiring factory re-flashing via DFU mode"
    ],
    "answer": 2,
    "explanation": "In AFU state, file protection keys remain in memory. Once powered off, the device drops to BFU mode; keys are purged and user data is completely encrypted until passcode entry."
  },
  {
    "id": 16,
    "question": "Which live forensic memory acquisition tool functions as an open-source Linux kernel module capable of dumping physical memory (/dev/fmem bypass)?",
    "options": [
      "DumpIt for Enterprise Linux",
      "Belkasoft Live RAM Capturer",
      "Volatility Memory Dumper v3",
      "LiME (Linux Memory Extractor)"
    ],
    "answer": 3,
    "explanation": "LiME (Linux Memory Extractor) compiles as a Loadable Kernel Module (LKM) allowing volatile physical memory dumps from Linux and Android kernels with minimal footprint."
  },
  {
    "id": 17,
    "question": "What hidden disk storage regions are accessible via ATA commands like SET MAX ADDRESS and IDENTIFY DEVICE?",
    "options": [
      "Host Protected Area (HPA) and Device Configuration Overlay (DCO)",
      "BitLocker Volume Metadata Sectors and Partition Reserved Blocks",
      "Volume Shadow Copy Header Stores and NTFS Transaction Logs",
      "Dynamic Disk Private Region and Master Boot Record Bootstrap Arrays"
    ],
    "answer": 0,
    "explanation": "HPA and DCO are hidden hardware-level disk sectors configured via low-level ATA commands, completely invisible to standard OS read calls without forensic tools."
  },
  {
    "id": 18,
    "question": "Which command line utility native to Unix/Linux systems is standard for bit-for-bit physical disk cloning with error skipping?",
    "options": [
      "fdisk -l /dev/sdb --output-raw-image /evidence/image.dd",
      "dd if=/dev/sdb of=/evidence/image.raw bs=4096 conv=noerror,sync",
      "mkfs.ext4 -b 4096 -c /dev/sdb /evidence/image.raw",
      "rsync -avz --inplace /dev/sdb /evidence/image.raw"
    ],
    "answer": 1,
    "explanation": "'dd if=/dev/sdb of=... bs=4096 conv=noerror,sync' performs bitstream copy, padding bad sectors with nulls (sync) and continuing past read errors (noerror)."
  },
  {
    "id": 19,
    "question": "What fundamental forensic tenet mandates that an investigator must never conduct analysis directly on original seized storage media?",
    "options": [
      "Daubert Standard: Examinations must only be conducted within an accredited ASCLD/LAB cleanroom facility",
      "Locard's Exchange Principle: Digital artifacts cannot be extracted without modifying underlying magnetic tracks",
      "Principle of Evidence Preservation: All examinations must be conducted exclusively on verified forensic duplicate images",
      "Best Evidence Rule: Secondary copies are strictly barred from being presented in criminal court proceedings"
    ],
    "answer": 2,
    "explanation": "Forensic integrity dictates preserving original evidence in an unaltered state; all searching, carving, and analysis must occur on verified forensic images."
  },
  {
    "id": 20,
    "question": "What is the primary function of a Chain of Custody document in a digital forensics investigation?",
    "options": [
      "Listing all operating system software licenses utilized by the forensic laboratory workstations during analysis",
      "Documenting the specific cryptographic public keys required to decrypt seized ransomware databases",
      "Certifying that the forensic investigator holds official government certification under ISO/IEC 17025",
      "Meticulously recording every individual who collected, accessed, transferred, analyzed, and secured the physical evidence across time"
    ],
    "answer": 3,
    "explanation": "Chain of Custody is a contemporaneous log proving who handled the evidence, when, why, and where it was stored, establishing authenticity and legal admissibility."
  },
  {
    "id": 21,
    "question": "What live system artifact is extracted by executing the Windows command 'nbtstat -c'?",
    "options": [
      "Recently resolved NetBIOS computer names mapped to their corresponding IP addresses",
      "Active TCP connections established with remote Samba file storage network shares",
      "Dynamic host configuration protocol (DHCP) lease renewal timestamps and default gateways",
      "All registered domain controllers currently authenticated across the active directory forest"
    ],
    "answer": 0,
    "explanation": "'nbtstat -c' dumps the NetBIOS name cache, showing names of remote machines and resolved IP addresses, useful in detecting lateral movement across a local subnet."
  },
  {
    "id": 22,
    "question": "In network forensics, what is the key operational distinction between a Hardware TAP and a Switch SPAN mirror port?",
    "options": [
      "SPAN mirror ports capture encrypted TLS handshakes while hardware TAPs are restricted to cleartext protocols",
      "Hardware TAPs reproduce full-duplex traffic without dropping frames under saturated line rates",
      "Hardware TAPs actively inject RST packets to terminate malicious command-and-control communication sessions",
      "SPAN mirror ports operate exclusively on Layer 2 switches whereas hardware TAPs require Layer 3 IP routing"
    ],
    "answer": 1,
    "explanation": "SPAN ports are switch software features that drop packets during high CPU or buffer congestion. Hardware TAPs physically split the signal, guaranteeing zero frame loss."
  },
  {
    "id": 23,
    "question": "What TLS packet parameter does the JA3 fingerprinting algorithm hash to identify client malware without decrypting payload traffic?",
    "options": [
      "SHA-256 hash of the Server Certificate Serial Number, Issuer Distinguished Name, and Subject Public Key Info",
      "Base64 encoded representation of the Application-Layer Protocol Negotiation (ALPN) extension and Server Name Indication (SNI)",
      "MD5 hash of SSL Version, Accepted Ciphers, List of Extensions, Elliptic Curves, and Point Formats in Client Hello",
      "HMAC-SHA1 authentication tag extracted from the TLS Finished handshake control verification frame"
    ],
    "answer": 2,
    "explanation": "JA3 gathers 5 fields from the TLS Client Hello: SSL/TLS Version, Accepted Ciphers, Extensions, Elliptic Curves, and Elliptic Curve Point Formats, concatenated with commas and MD5-hashed."
  },
  {
    "id": 24,
    "question": "Which file header magic signature confirms that a carved binary represents a compiled Microsoft Windows Portable Executable (PE) file?",
    "options": [
      "7F 45 4C 46 (\\x7FELF) located at offset 0x00, followed by machine architecture flags at offset 0x04",
      "CA FE BA BE (Mach-O fat binary) located at offset 0x00, followed by CPU architecture headers",
      "25 50 44 46 2D (%PDF-) located at offset 0x00, followed by document object catalog descriptors",
      "4D 5A (MZ) located at offset 0x00, followed by 50 45 00 00 (PE\\0\\0) at the offset indicated in e_lfanew"
    ],
    "answer": 3,
    "explanation": "PE files start with DOS signature '4D 5A' (MZ). At offset 0x3C (e_lfanew), a 4-byte pointer gives the address of the PE signature '50 45 00 00' ('PE\\0\\0')."
  },
  {
    "id": 25,
    "question": "What hex bytes designate the beginning-of-file (SOI) and end-of-file (EOI) markers for JPEG image files during file carving?",
    "options": [
      "Start of Image: FF D8 FF; End of Image: FF D9",
      "Start of Image: 89 50 4E 47; End of Image: 49 45 4E 44",
      "Start of Image: 47 49 46 38; End of Image: 00 3B 00 00",
      "Start of Image: 25 50 44 46; End of Image: 25 25 45 4F"
    ],
    "answer": 0,
    "explanation": "JPEG images always initiate with Start of Image (SOI) marker 0xFF 0xD8 0xFF and terminate with End of Image (EOI) marker 0xFF 0xD9."
  },
  {
    "id": 26,
    "question": "What is the maximum individual file size permissible on a standard FAT32 file system volume?",
    "options": [
      "2 Terabytes minus 512 bytes (2,199,023,255,040 bytes)",
      "4 Gigabytes minus 1 byte (4,294,967,295 bytes)",
      "16 Exabytes minus 4096 bytes (18,446,744,073,709,551,615 bytes)",
      "32 Gigabytes total addressable cluster allocation boundary"
    ],
    "answer": 1,
    "explanation": "FAT32 stores file size in a 32-bit field within the directory entry, setting the theoretical maximum file size to 2^32 - 1 bytes, which is 4 GB minus 1 byte."
  },
  {
    "id": 27,
    "question": "In the FAT32 directory entry structure (32 bytes), what special hex value in the first byte (offset 0x00) signifies that a file has been deleted?",
    "options": [
      "0x00 (Signifying that the entry has never been allocated)",
      "0x20 (Signifying that the archive file attribute flag is set)",
      "0xE5 (Sigma character in CP437, indicating deleted entry)",
      "0xFF (Signifying that bad disk sector remap has occurred)"
    ],
    "answer": 2,
    "explanation": "When a file is deleted in FAT file systems, the OS replaces the first character of the filename (offset 0x00 in the 32-byte directory entry) with 0xE5. The cluster chain in the FAT is unlinked."
  },
  {
    "id": 28,
    "question": "What is the fixed record size allocated for each individual entry inside the NTFS Master File Table ($MFT)?",
    "options": [
      "512 bytes (1 Sector)",
      "4096 bytes (1 Default Cluster)",
      "2048 bytes (2 Sectors)",
      "1024 bytes (1 Kilobyte)"
    ],
    "answer": 3,
    "explanation": "Each MFT record in NTFS has a fixed size of 1024 bytes (1 KB), regardless of cluster size. It stores attribute headers and small resident attributes."
  },
  {
    "id": 29,
    "question": "Which 4-byte ASCII magic string is located at the very start (offset 0x00) of an active, valid NTFS MFT record header?",
    "options": [
      "FILE (0x46 0x49 0x4C 0x45)",
      "INDX (0x49 0x4E 0x44 0x58)",
      "NTFS (0x4E 0x54 0x46 0x53)",
      "BAAD (0x42 0x41 0x41 0x44)"
    ],
    "answer": 0,
    "explanation": "A valid MFT record begins with the 4-byte signature 'FILE' (0x46 0x49 0x4C 0x45). If corruption occurs or fixup array validation fails, it may read 'BAAD'."
  },
  {
    "id": 30,
    "question": "In NTFS Master File Table terminology, what is a 'Resident' file attribute?",
    "options": [
      "An attribute permanently locked in physical RAM buffer memory by the Windows operating system kernel",
      "An attribute whose entire data content is sufficiently compact to reside directly inside the 1024-byte MFT record itself",
      "An attribute pointing exclusively to non-contiguous data runs stored across unallocated disk clusters",
      "An attribute stored inside the hidden system file $Secure rather than on standard volume clusters"
    ],
    "answer": 1,
    "explanation": "If a file's content is small enough (typically < 700-800 bytes depending on other attributes), NTFS stores the file data directly inside the $DATA attribute (0x80) inside the 1024-byte MFT record, termed a Resident file."
  },
  {
    "id": 31,
    "question": "Which standard NTFS attribute identifier is represented by the hexadecimal type code 0x10?",
    "options": [
      "$FILE_NAME",
      "$DATA",
      "$STANDARD_INFORMATION",
      "$SECURITY_DESCRIPTOR"
    ],
    "answer": 2,
    "explanation": "In NTFS: 0x10 is $STANDARD_INFORMATION; 0x20 is $ATTRIBUTE_LIST; 0x30 is $FILE_NAME; 0x40 is $OBJECT_ID; 0x50 is $SECURITY_DESCRIPTOR; 0x60 is $VOLUME_NAME; 0x80 is $DATA; 0x90 is $INDEX_ROOT; 0xA0 is $INDEX_ALLOCATION."
  },
  {
    "id": 32,
    "question": "Which standard NTFS attribute identifier is represented by the hexadecimal type code 0x30?",
    "options": [
      "$STANDARD_INFORMATION",
      "$OBJECT_ID",
      "$DATA",
      "$FILE_NAME"
    ],
    "answer": 3,
    "explanation": "NTFS attribute type code 0x30 represents $FILE_NAME, which holds the file name in UTF-16, namespace flags, parent directory MFT record reference, and file timestamps."
  },
  {
    "id": 33,
    "question": "Which standard NTFS attribute identifier is represented by the hexadecimal type code 0x80?",
    "options": [
      "$DATA",
      "$INDEX_ALLOCATION",
      "$BITMAP",
      "$STANDARD_INFORMATION"
    ],
    "answer": 0,
    "explanation": "Attribute type code 0x80 represents the $DATA attribute in NTFS, which holds the actual file contents (either resident within the record or pointing to non-resident cluster runs)."
  },
  {
    "id": 34,
    "question": "What specific timestamp set is stored inside the NTFS $STANDARD_INFORMATION (0x10) attribute?",
    "options": [
      "Uniform Resource Identifier last request, response, and acknowledge times",
      "Modified, Accessed, Created (MFT Created), and Entry Modified (MACB timestamps)",
      "User authentication, password expiration, and session termination times",
      "Hardware BIOS real-time clock synchronization and battery status dates"
    ],
    "answer": 1,
    "explanation": "NTFS stores four primary timestamps for files, abbreviated MACB: Modified (Last Written), Accessed (Last Read), Created (File Birth), and Entry Modified (MFT Record Changed)."
  },
  {
    "id": 35,
    "question": "How does an anti-forensics 'timestomping' attack manifest when an investigator compares $STANDARD_INFORMATION (0x10) and $FILE_NAME (0x30) attributes?",
    "options": [
      "Timestamps in $FILE_NAME are wiped to all zeros while $STANDARD_INFORMATION timestamps increment by 24 hours",
      "$STANDARD_INFORMATION timestamps update automatically to UTC while $FILE_NAME timestamps convert to local epoch",
      "Malware alters timestamps in $STANDARD_INFORMATION via Win32 APIs, but fails to alter timestamps in $FILE_NAME which require kernel/raw disk access",
      "Both attributes synchronize their nano-second fractions to match the Master Boot Record creation timestamp"
    ],
    "answer": 2,
    "explanation": "Standard Windows user-mode APIs (such as SetFileTime) modify timestamps in $STANDARD_INFORMATION. They do not update $FILE_NAME timestamps, creating a visible discrepancy that forensic examiners detect."
  },
  {
    "id": 36,
    "question": "What NTFS data structure tracks real-time metadata changes (such as file creation, deletion, renaming, and truncation) to provide transaction durability?",
    "options": [
      "$Boot (Volume boot sector code and parameters)",
      "$BadClust (Tracking defective disk sector addresses)",
      "$UpCase (Unicode character case conversion table)",
      "$UsnJrnl ($J data stream inside Update Sequence Number Journal)"
    ],
    "answer": 3,
    "explanation": "$UsnJrnl (specifically the $J alternate data stream) records changes made to files and directories on the volume, providing timestamped records of creations, deletions, renames, and modifications."
  },
  {
    "id": 37,
    "question": "What NTFS hidden system file records transaction logging redo and undo operations used for file system recovery during unexpected power loss?",
    "options": [
      "$LogFile",
      "$Volume",
      "$MFTMirr",
      "$Bitmap"
    ],
    "answer": 0,
    "explanation": "$LogFile is a circular transaction logging file used by NTFS to record undo and redo operational records, ensuring filesystem consistency across system crashes."
  },
  {
    "id": 38,
    "question": "In NTFS, how is an Alternate Data Stream (ADS) accessed or created from the standard Windows command line?",
    "options": [
      "attrib +s +h C:\\folder\\evidence.txt /stream:hidden_payload.exe",
      "notepad.exe C:\\folder\\evidence.txt:hidden_payload.exe",
      "fsutil ads create C:\\folder\\evidence.txt hidden_payload.exe",
      "mountvol C:\\folder\\evidence.txt /link:hidden_payload.exe"
    ],
    "answer": 1,
    "explanation": "NTFS Alternate Data Streams use the colon delimiter syntax: '<filename>:<streamname>'. E.g., 'notepad.exe evidence.txt:hidden.exe' accesses the named stream 'hidden.exe' attached to 'evidence.txt'."
  },
  {
    "id": 39,
    "question": "What security-critical Alternate Data Stream is automatically appended to files downloaded from the internet via web browsers on Windows NTFS volumes?",
    "options": [
      "SmartScreen.Hash (holding Authenticode digital signature)",
      "MarkOfTheWeb.Integrity (holding SHA-256 binary digest)",
      "Zone.Identifier (holding ZoneId=3 for Internet Zone)",
      "WindowsDefender.Scan (holding antimalware verdict flags)"
    ],
    "answer": 2,
    "explanation": "Internet browsers attach the 'Zone.Identifier' ADS to downloaded files. ZoneId=3 indicates the Internet zone, which triggers SmartScreen and 'Mark of the Web' security warnings."
  },
  {
    "id": 40,
    "question": "In the Ext4 file system, what fundamental data structure replaces traditional indirect block pointers to dramatically enhance allocation efficiency and reduce fragmentation?",
    "options": [
      "B-Trees (dynamically rebalancing directory pointer leaves)",
      "Master Block Allocators (centralizing virtual cluster nodes)",
      "Hash Bucket Tables (indexing raw sector clusters)",
      "Extents (representing continuous physical blocks via extent trees)"
    ],
    "answer": 3,
    "explanation": "Ext4 introduced extents, replacing the indirect block mapping of ext2/ext3. A single extent can represent up to 128 MB of contiguous disk space with a single descriptor struct."
  },
  {
    "id": 41,
    "question": "In Linux Ext2/Ext3/Ext4 file systems, what critical metadata attribute is NOT stored within an inode structure?",
    "options": [
      "The file name and its relative directory path string",
      "The file size in bytes and number of allocated blocks",
      "The file owner User ID (UID) and Group ID (GID)",
      "The POSIX permissions (read, write, execute flags)"
    ],
    "answer": 0,
    "explanation": "In Linux filesystems, inodes do NOT store file names! Directory data blocks map file names to inode numbers; the inode itself stores file metadata, sizes, permissions, timestamps, and data pointers."
  },
  {
    "id": 42,
    "question": "When a file is deleted in the Linux Ext4 file system, what occurs to its inode data block pointers, complicating traditional unallocated space carving?",
    "options": [
      "The inode data blocks are immediately overwritten with randomized pseudorandom hex characters",
      "The inode's extent tree pointers are zeroed out while the inode is marked as free in the inode allocation bitmap",
      "The inode file size is set to negative one (-1) and appended to the directory lost+found index",
      "The inode structure is physically moved into the journal superblock transaction buffer"
    ],
    "answer": 1,
    "explanation": "Ext4 unlinks deleted inodes and zeros out their direct/extent block pointers, preventing simple traversal to recover data blocks and necessitating signature-based carving."
  },
  {
    "id": 43,
    "question": "What is the function of the Superblock in Linux Ext-based (Ext2/Ext3/Ext4) file systems?",
    "options": [
      "It holds the root directory folder names and top-level user authentication credentials",
      "It maps external network mounting points to virtual memory swap partition addresses",
      "It stores fundamental filesystem geometry including total block count, free block count, block size, and mount counts",
      "It contains the cryptographic public keys used for kernel-level disk partition verification"
    ],
    "answer": 2,
    "explanation": "The Superblock holds core filesystem configuration parameters: total block/inode counts, block size, free blocks/inodes, volume label, and filesystem state. Redundant copies exist across block groups."
  },
  {
    "id": 44,
    "question": "Which Apple file system was introduced to replace HFS+ across macOS, iOS, iPadOS, watchOS, and tvOS, featuring native 64-bit architecture and Copy-on-Write (CoW)?",
    "options": [
      "Hierarchical File System Extended (HFSX)",
      "New Technology File System (NTFS)",
      "Unix File System Version 2 (UFS2)",
      "Apple File System (APFS)"
    ],
    "answer": 3,
    "explanation": "APFS (Apple File System) is Apple's modern 64-bit filesystem designed for flash/SSD storage, featuring Copy-on-Write, space sharing, cloning, native encryption, and snapshots."
  },
  {
    "id": 45,
    "question": "In Apple's APFS file system, what mechanism allows instant creation of read-only, point-in-time volume images without duplicating storage space?",
    "options": [
      "APFS Snapshots utilizing Copy-on-Write metadata redirection",
      "CoreStorage Logical Volume Mirroring arrays",
      "Time Machine Sparsebundle VHD disk allocation",
      "FileVault Volume Encryption key ring containers"
    ],
    "answer": 0,
    "explanation": "APFS Snapshots create point-in-time read-only instances of a volume instantly using Copy-on-Write. Blocks are shared until altered, requiring zero immediate storage expansion."
  },
  {
    "id": 46,
    "question": "What Apple HFS+ file system structure maintains the hierarchical record of all files and folders, functioning similarly to the NTFS Master File Table?",
    "options": [
      "Extents Overflow File (managing fragmented blocks)",
      "Catalog File (organized as a balanced B-Tree)",
      "Allocation File (tracking volume bitmap states)",
      "Bad Block File (logging physical media flaws)"
    ],
    "answer": 1,
    "explanation": "The Catalog File in HFS+ is a balanced B-Tree that stores records for all files and directories on the volume, detailing their hierarchical relationships and metadata."
  },
  {
    "id": 47,
    "question": "What occurs during an APFS 'Clone' operation when a user duplicates a 10 GB video file on the same APFS volume?",
    "options": [
      "The operating system writes 10 GB of bit-identical data into consecutive unallocated SSD blocks",
      "The storage controller initiates an automated hardware deduplication cycle across background flash pages",
      "The file system creates a second metadata pointer referencing the existing data blocks without duplicating data on disk",
      "The system compresses the duplicate file using LZFSE compression into memory swap cache"
    ],
    "answer": 2,
    "explanation": "APFS cloning allows files to be duplicated instantly with no extra disk space; both file records point to the exact same physical storage blocks until one of them is modified (Copy-on-Write)."
  },
  {
    "id": 48,
    "question": "What is the maximum partition size addressable by a legacy Master Boot Record (MBR) partitioning scheme utilizing standard 512-byte logical sectors?",
    "options": [
      "512 Gigabytes (2^30 sectors * 512 bytes)",
      "16.0 Exabytes (2^64 sectors * 512 bytes)",
      "128.0 Terabytes (2^48 sectors * 512 bytes)",
      "2.19 Terabytes (2^32 sectors * 512 bytes)"
    ],
    "answer": 3,
    "explanation": "MBR uses 32-bit logical block addresses. With standard 512-byte sectors: 2^32 * 512 bytes = 2,199,023,255,040 bytes = 2.19 TB (approx. 2 TB limit)."
  },
  {
    "id": 49,
    "question": "At what byte offset in Master Boot Record (MBR) Sector 0 is the 2-byte boot signature (0x55AA) located?",
    "options": [
      "Offset 510 to 511 (0x01FE - 0x01FF)",
      "Offset 446 to 447 (0x01BE - 0x01BF)",
      "Offset 0 to 1 (0x0000 - 0x0001)",
      "Offset 500 to 501 (0x01F4 - 0x01F5)"
    ],
    "answer": 0,
    "explanation": "MBR Sector 0 spans 512 bytes: bootstrap code occupies bytes 0-445; 4 partition entries (16 bytes each) span bytes 446-509; the end-of-sector boot signature 0x55 0xAA sits at bytes 510-511."
  },
  {
    "id": 50,
    "question": "How many 16-byte primary partition table entries can be accommodated within the 64-byte partition table structure of a standard MBR sector?",
    "options": [
      "8 primary partition entries",
      "4 primary partition entries",
      "2 primary partition entries",
      "16 primary partition entries"
    ],
    "answer": 1,
    "explanation": "The MBR partition table spans 64 bytes (offset 446 to 509). Each entry is 16 bytes, permitting exactly 4 primary partitions (or up to 3 primary partitions and 1 extended partition)."
  },
  {
    "id": 51,
    "question": "In a GUID Partition Table (GPT) scheme, what is the purpose of the 'Protective MBR' located at Logical Block Address zero (LBA 0)?",
    "options": [
      "Authenticating UEFI digital signatures against the Secure Boot firmware keystore",
      "Storing the recovery backup partition array descriptors in the event of primary header corruption",
      "Preventing legacy disk utilities and older operating systems from mistakenly identifying the disk as unpartitioned and overwriting GPT structures",
      "Mapping non-volatile memory controller channels across hybrid drive architectures"
    ],
    "answer": 2,
    "explanation": "LBA 0 contains a Protective MBR with a single partition of type 0xEE spanning the whole disk. Legacy tools that do not understand GPT see it as an allocated volume and do not overwrite it."
  },
  {
    "id": 52,
    "question": "Where is the secondary (backup) GPT header and partition table array physically stored on a GPT-partitioned storage disk?",
    "options": [
      "Directly following the primary GPT partition array at Logical Block Address 34",
      "Inside the Master File Table mirror record located at cluster address zero",
      "Within the non-volatile UEFI motherboard flash firmware chip memory",
      "At the very end of the physical drive on the final logical block addresses (LBAs)"
    ],
    "answer": 3,
    "explanation": "GPT provides redundancy: the primary GPT header is at LBA 1 and partition entries span LBA 2-33; the backup (secondary) GPT partition array and header are located at the very last sectors of the disk."
  },
  {
    "id": 53,
    "question": "What is the 8-byte ASCII magic signature located at offset 0x00 of a valid primary GUID Partition Table (GPT) header at LBA 1?",
    "options": [
      "EFI PART (0x45 0x46 0x49 0x20 0x50 0x41 0x52 0x54)",
      "GPT HEAD (0x47 0x50 0x54 0x20 0x48 0x45 0x41 0x44)",
      "UEFI DISK (0x55 0x45 0x46 0x49 0x20 0x44 0x49 0x53)",
      "MSFT BOOT (0x4D 0x53 0x46 0x54 0x20 0x42 0x4F 0x4F)"
    ],
    "answer": 0,
    "explanation": "The GPT Header at LBA 1 begins with the 8-byte ASCII signature 'EFI PART' (hex: 45 46 49 20 50 41 52 54), followed by GPT version, header size, CRC32 checksum, and LBA pointers."
  },
  {
    "id": 54,
    "question": "In forensic data carving, what is the primary operational limitation of 'header-footer carving' when recovering files from heavily fragmented media?",
    "options": [
      "Carving cannot extract uncompressed text formats such as HTML, XML, and ASCII source code",
      "If the file's clusters are non-contiguous, carved files will include interceding foreign cluster data or truncate prematurely at the first false footer",
      "Operating systems permanently scramble file magic numbers upon unlinking from directory trees",
      "Cryptographic algorithms in firmware alter sector header signatures upon filesystem unmounting"
    ],
    "answer": 1,
    "explanation": "Simple header-footer carving assumes contiguous sector allocation. On fragmented disks, carved files will include clusters belonging to other files, resulting in corrupted or truncated outputs."
  },
  {
    "id": 55,
    "question": "Which file header magic number signature uniquely identifies a Portable Network Graphics (PNG) image file?",
    "options": [
      "FF D8 FF E0 00 10 4A 46",
      "47 49 46 38 39 61 00 00",
      "89 50 4E 47 0D 0A 1A 0A",
      "42 4D 38 00 00 00 00 00"
    ],
    "answer": 2,
    "explanation": "PNG files initiate with the unique 8-byte signature: 0x89 0x50 0x4E 0x47 0x0D 0x0A 0x1A 0x0A ('\\x89PNG\\r\\n\\x1a\\n'). It terminates with the IEND chunk: 49 45 4E 44 AE 42 60 82."
  },
  {
    "id": 56,
    "question": "In Microsoft Windows operating systems, where are the primary system-wide registry hive files physically located on the filesystem?",
    "options": [
      "C:\\Users\\<Username>\\AppData\\Local\\Microsoft\\Windows\\Registry\\",
      "C:\\ProgramData\\Microsoft\\Windows\\SystemConfiguration\\Hives\\",
      "C:\\Windows\\System\\Registry32\\Hives\\DataStore\\",
      "C:\\Windows\\System32\\config\\ (SAM, SECURITY, SOFTWARE, SYSTEM)"
    ],
    "answer": 3,
    "explanation": "The system-wide registry hives (SYSTEM, SOFTWARE, SAM, SECURITY, and DEFAULT) are physically stored in 'C:\\Windows\\System32\\config\\'. User hives reside in user profile folders."
  },
  {
    "id": 57,
    "question": "Where is the user-specific registry hive containing personalized configuration settings, UserAssist data, and personal shell preferences stored?",
    "options": [
      "C:\\Users\\<Username>\\NTUSER.DAT",
      "C:\\Users\\<Username>\\AppData\\Local\\UserRegistry.dat",
      "C:\\Windows\\System32\\config\\Users\\<Username>.hiv",
      "C:\\ProgramData\\Users\\<Username>\\Profile.reg"
    ],
    "answer": 0,
    "explanation": "The user's private configuration hive is stored as a hidden file named 'NTUSER.DAT' directly in their user profile root directory: 'C:\\Users\\<Username>\\NTUSER.DAT'."
  },
  {
    "id": 58,
    "question": "What specific type of user forensic activity does the Windows 'UserAssist' registry key track?",
    "options": [
      "Network shares accessed via Server Message Block (SMB) protocols and shared folder paths",
      "GUI applications launched by the user via Windows Explorer, along with run count and last execution timestamp",
      "Removable USB thumb drives attached to the computer with device serial numbers",
      "User login failures and administrative privilege escalation events in Kerberos"
    ],
    "answer": 1,
    "explanation": "UserAssist keys (in NTUSER.DAT\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\UserAssist) track GUI programs launched via Windows Explorer, recording execution count and last execution timestamp (encoded in ROT13)."
  },
  {
    "id": 59,
    "question": "Why does Microsoft Windows encode execution path strings within the UserAssist registry subkeys using ROT13 cipher?",
    "options": [
      "To comply with federal FIPS 140-2 encryption standards for system configuration data",
      "To compress file system paths and conserve disk storage inside NTUSER.DAT registry hives",
      "To obfuscate string readings from accidental manual user modification, not for cryptographic security",
      "To prevent non-administrative users from dumping Windows event security log records"
    ],
    "answer": 2,
    "explanation": "ROT13 is a simple Caesar cipher (13-character rotation). Windows uses it in UserAssist as a casual obfuscation layer to prevent casual tampering, not as a security or encryption mechanism."
  },
  {
    "id": 60,
    "question": "What critical evidentiary information can an investigator extract from Windows 'Shimcache' (Application Compatibility Cache)?",
    "options": [
      "The full standard input (stdin) text arguments passed to console command line utilities",
      "The specific cryptographic hash of all deleted web browser history database caches",
      "The precise user account Security Identifier (SID) that launched the target executable",
      "File full path, file size, last modified timestamp, and whether the binary was executed on the host"
    ],
    "answer": 3,
    "explanation": "Shimcache (AppCompatCache in SYSTEM hive) tracks executables to resolve compatibility issues. It records full file path, file size, last modified time, and an execution flag (in Win 7/8/10)."
  },
  {
    "id": 61,
    "question": "Where is the Windows 'Amcache.hve' registry hive physically located on a Windows 10/11 system?",
    "options": [
      "C:\\Windows\\AppCompat\\Programs\\Amcache.hve",
      "C:\\Windows\\System32\\config\\Amcache.hve",
      "C:\\ProgramData\\Microsoft\\Compatibility\\Amcache.hve",
      "C:\\Users\\Default\\AppData\\Local\\Amcache.hve"
    ],
    "answer": 0,
    "explanation": "Amcache is stored at 'C:\\Windows\\AppCompat\\Programs\\Amcache.hve'. It records executed programs, their full paths, installation timestamps, PE header checksums, and crucially, SHA-1 file hashes."
  },
  {
    "id": 62,
    "question": "Why is 'Amcache.hve' exceptionally valuable during malware and intrusion investigations compared to Shimcache?",
    "options": [
      "It captures full-memory runtime stack frames and heap dumps of crashing background services",
      "It records the cryptographic SHA-1 hash of executed binaries, enabling retrospective malware identification",
      "It logs all encrypted TLS session keys used by web browsers during user HTTPS navigation",
      "It maintains active real-time disk block write logs for unallocated sector monitoring"
    ],
    "answer": 1,
    "explanation": "Unlike Shimcache (which records path, size, and date), Amcache records the SHA-1 hash of the executable binary. Even if malware deletes itself from disk, its SHA-1 hash can be extracted and checked on VirusTotal."
  },
  {
    "id": 63,
    "question": "What user interaction artifact is uncovered through the forensic analysis of Windows 'Shellbags'?",
    "options": [
      "Command-line arguments entered into PowerShell and CMD consoles during administrative sessions",
      "Database queries executed against local Microsoft SQL Server Express installations",
      "User browsing preferences, folder view settings, and folder directory traversal\u2014even for deleted folders or removed USB drives",
      "Outbound email message recipients and attachment filenames transferred over SMTP"
    ],
    "answer": 2,
    "explanation": "Shellbags (in USRCLASS.DAT and NTUSER.DAT) store folder display settings (view, icon size, sort). Forensic examiners use them to prove a suspect browsed specific folders, even across external USBs or folders long since deleted."
  },
  {
    "id": 64,
    "question": "In Windows forensic examinations, what is the significance of Windows 'Prefetch' files (.pf) located in 'C:\\Windows\\Prefetch'?",
    "options": [
      "They provide temporary disk swap sectors utilized by virtual memory memory management engines",
      "They hold encrypted backups of user passwords cached during offline domain controller logins",
      "They contain deleted file restoration copies similar to the Windows Recycle Bin container",
      "They document application execution, recording program name, run count, last 8 execution timestamps, and loaded DLLs"
    ],
    "answer": 3,
    "explanation": "Prefetch files (.pf) are created to speed up app loading. Forensically, they confirm execution of an app, run count, execution timestamps (up to 8 in Win 10+), volume info, and dependent DLLs/files loaded during first 10 seconds."
  },
  {
    "id": 65,
    "question": "In Windows 10 and 11, what compression algorithm is utilized to compress Windows Prefetch files, identified by the 4-byte header 'MAM' (0x4D414D04)?",
    "options": [
      "XPRESS Huffman Compression (LZXPRESS)",
      "DEFLATE GZIP RFC 1951 Compression",
      "LZMA2 7-Zip Multi-threaded Compression",
      "Brotli Dictionary Compression Algorithm"
    ],
    "answer": 0,
    "explanation": "Windows 10/11 prefetch files are compressed using Microsoft's XPRESS Huffman algorithm, denoted by the signature 'MAM' (hex: 4D 41 4D 04). They must be decompressed before parsing."
  },
  {
    "id": 66,
    "question": "What information is preserved within Windows Shortcut files (.LNK) that makes them exceptionally powerful in forensic timeline reconstructions?",
    "options": [
      "Complete raw hexadecimal sector blocks representing deleted user documents in unallocated clusters",
      "Target file path, creation/access/modification dates of target, drive type, volume serial number, and host MAC address",
      "The private cryptographic keys used to encrypt BitLocker volume header descriptors",
      "User biometric fingerprint minutiae templates used to authenticate local workstation access"
    ],
    "answer": 1,
    "explanation": "LNK files record rich metadata: original target path, target file timestamps, volume type (fixed/removable), volume serial number, target file size, and the NetBIOS name / MAC address of the host machine."
  },
  {
    "id": 67,
    "question": "Where are Windows 'Jump Lists' (AutomaticDestinations and CustomDestinations) stored on Windows 10/11 systems?",
    "options": [
      "C:\\Windows\\System32\\winevt\\Logs\\JumpLists\\Destinations\\",
      "C:\\Users\\<Username>\\AppData\\Local\\Microsoft\\Windows\\Explorer\\JumpLists\\",
      "C:\\Users\\<Username>\\AppData\\Roaming\\Microsoft\\Windows\\Recent\\AutomaticDestinations\\",
      "C:\\ProgramData\\Microsoft\\Windows\\Taskbar\\JumpDestinations\\"
    ],
    "answer": 2,
    "explanation": "Jump Lists are stored in: 'C:\\Users\\<Username>\\AppData\\Roaming\\Microsoft\\Windows\\Recent\\AutomaticDestinations' (MS-SHLLINK OLE files) and 'CustomDestinations', tracking recently and frequently accessed files per application."
  },
  {
    "id": 68,
    "question": "In modern Windows Event Log forensics, which Windows Security Event ID signifies a 'Successful Logon'?",
    "options": [
      "Event ID 4625",
      "Event ID 4688",
      "Event ID 4720",
      "Event ID 4624"
    ],
    "answer": 3,
    "explanation": "Windows Security Event ID 4624 documents a successful logon. Event ID 4625 records a failed logon attempt."
  },
  {
    "id": 69,
    "question": "When analyzing Windows Event ID 4624 (Successful Logon), what does a 'Logon Type 10' signify?",
    "options": [
      "Remote Interactive Logon (via Remote Desktop Protocol / RDP or Terminal Services)",
      "Interactive Console Logon (user typed password directly at physical keyboard/screen)",
      "Network Logon (connection to a network share or SMB resource from remote system)",
      "Unlock Workstation (user unlocked a previously locked desktop session)"
    ],
    "answer": 0,
    "explanation": "Logon Types for Event ID 4624: Type 2 = Interactive (local keyboard); Type 3 = Network (SMB/file share); Type 7 = Unlock; Type 10 = RemoteInteractive (Remote Desktop Protocol / RDP); Type 4 = Batch; Type 5 = Service."
  },
  {
    "id": 70,
    "question": "When analyzing Windows Event ID 4624, what does a 'Logon Type 2' signify?",
    "options": [
      "Network Logon (authentication across SMB, RPC, or HTTP without interactive desktop)",
      "Interactive Logon (user authenticated locally at the physical workstation console)",
      "NetworkCleartext (logon credentials sent unencrypted over legacy protocols)",
      "CachedInteractive (workstation validated credentials against cached domain hashes)"
    ],
    "answer": 1,
    "explanation": "Logon Type 2 indicates an Interactive logon, where the user physically authenticated at the machine's keyboard and monitor (or virtual console)."
  },
  {
    "id": 71,
    "question": "When analyzing Windows Event ID 4624, what does a 'Logon Type 3' signify?",
    "options": [
      "Service Logon (background Windows Service startup under Service Account)",
      "Remote Desktop Protocol session established over TCP port 3389",
      "Network Logon (remote connection to shared folder, printer, or IIS web server)",
      "NewCredentials (RunAs command executed with alternate user credentials)"
    ],
    "answer": 2,
    "explanation": "Logon Type 3 indicates a Network logon, where a remote system accesses a local resource such as a shared folder (SMB), printer, or network service."
  },
  {
    "id": 72,
    "question": "Which Windows Security Event ID explicitly records when an administrative audit log was cleared by an attacker attempting anti-forensics?",
    "options": [
      "Event ID 7045 (A service was installed in the system)",
      "Event ID 4726 (A user account was deleted from domain)",
      "Event ID 4672 (Special privileges assigned to new logon)",
      "Event ID 1102 (The audit log was cleared in Security log)"
    ],
    "answer": 3,
    "explanation": "Event ID 1102 in the Security log (or Event ID 104 in the System log) records that the audit log was deliberately cleared, logging the user account and domain responsible."
  },
  {
    "id": 73,
    "question": "Which Windows Security Event ID tracks new process creation, essential for tracking malware process execution and command lines?",
    "options": [
      "Event ID 4688",
      "Event ID 4625",
      "Event ID 4738",
      "Event ID 7036"
    ],
    "answer": 0,
    "explanation": "Event ID 4688 tracks process creation (Process Creation). When 'Include command line in process creation events' policy is enabled, it records the exact command line executed."
  },
  {
    "id": 74,
    "question": "Which Windows System Event ID records the installation of a new system service, a common persistence mechanism used by malware?",
    "options": [
      "Event ID 4624 (An account was successfully logged on)",
      "Event ID 7045 (A service was installed in the system)",
      "Event ID 1000 (Application crash exception logged)",
      "Event ID 6005 (The Event log service was started)"
    ],
    "answer": 1,
    "explanation": "System Event ID 7045 ('A service was installed in the system') logs service name, image path (binary path), service type, and start type whenever a new service is installed."
  },
  {
    "id": 75,
    "question": "In Windows Recycle Bin forensics, what is the role of the metadata file starting with '$I' (e.g., $I123456.ext)?",
    "options": [
      "It contains the actual bitstream content of the deleted file renamed with a random identifier",
      "It maintains an encrypted hash table of user recycle bin retention quotas and volume thresholds",
      "It stores original file deletion metadata, including original full file path, original file size, and deletion timestamp",
      "It acts as a symbolic link redirecting file access requests back into unallocated cluster slack"
    ],
    "answer": 2,
    "explanation": "In Vista and later, deleting a file creates two artifacts in '$Recycle.Bin': '$R<random>.<ext>' (holds the actual file content) and '$I<random>.<ext>' (holds original file path, file size, and deletion timestamp)."
  },
  {
    "id": 76,
    "question": "What information is stored inside the '$R' file inside the modern Windows Recycle Bin ($Recycle.Bin)?",
    "options": [
      "The 64-bit NTFS file record segment number inside the Master File Table",
      "The cryptographic SHA-256 integrity hash calculated at the moment of file deletion",
      "The full list of network shares that previously mirrored the deleted document",
      "The actual recovered data content of the deleted file, identical in payload to the original file"
    ],
    "answer": 3,
    "explanation": "The '$R' file contains the complete raw content of the deleted file. Renaming '$R<random>.docx' back to its original name fully recovers the document."
  },
  {
    "id": 77,
    "question": "Which Windows registry key tracks all USB removable storage devices ever connected to the operating system, including Vendor ID, Product ID, and Serial Number?",
    "options": [
      "HKLM\\SYSTEM\\CurrentControlSet\\Enum\\USBSTOR",
      "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\MountedUSB",
      "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\RemovableDrives",
      "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Disk\\StorageParameters"
    ],
    "answer": 0,
    "explanation": "The 'USBSTOR' key (HKLM\\SYSTEM\\CurrentControlSet\\Enum\\USBSTOR) enumerates all USB mass storage devices ever plugged into the machine, detailing Device Class, Vendor, Product, Revision, and Unique Serial Number."
  },
  {
    "id": 78,
    "question": "How does an examiner determine the specific drive letter assigned to a connected USB device on Windows?",
    "options": [
      "Querying the local Security Account Manager (SAM) hive for device mount credentials",
      "Cross-referencing the USB serial number in 'MountedDevices' key (HKLM\\SYSTEM\\MountedDevices) with the volume GUID",
      "Inspecting the active TCP port listener table via Netstat for drive letter routing",
      "Checking the Windows Firewall domain profile logging configuration registry hive"
    ],
    "answer": 1,
    "explanation": "By matching the volume GUID found in 'MountedDevices' (HKLM\\SYSTEM\\MountedDevices) or 'USBSTOR' with 'MountPoints2' in the user's NTUSER.DAT, examiners correlate USB serial numbers with specific assigned drive letters (e.g. E:)."
  },
  {
    "id": 79,
    "question": "What browser artifact database format is universally utilized across modern Google Chrome, Mozilla Firefox, and Microsoft Edge browsers?",
    "options": [
      "Microsoft Extensible Storage Engine database format (.edb)",
      "Flat comma-separated value ASCII text format (.csv)",
      "SQLite 3 relational database format (.sqlite / .db)",
      "Hierarchical Binary XML Document container format (.bxml)"
    ],
    "answer": 2,
    "explanation": "All modern Chromium browsers (Chrome, Edge, Brave, Opera) and Mozilla Firefox store browsing history, cookies, autofill data, and downloads in SQLite 3 databases (e.g., 'History', 'Cookies', 'places.sqlite')."
  },
  {
    "id": 80,
    "question": "In Google Chrome forensic analysis, what does a timestamp value stored in the SQLite 'History' database represent?",
    "options": [
      "Seconds elapsed since January 1, 1970 UTC (Unix Epoch)",
      "Milliseconds elapsed since January 1, 1900 UTC (NTP Epoch)",
      "Nanoseconds elapsed since system boot recorded by CPU clock counters",
      "Microseconds elapsed since January 1, 1601 UTC (WebKit / Chrome epoch)"
    ],
    "answer": 3,
    "explanation": "Google Chrome uses WebKit timestamps (Windows FILETIME epoch), which count microseconds since January 1, 1601 UTC. Unix epoch counts seconds since January 1, 1970."
  },
  {
    "id": 81,
    "question": "Which file header magic signature uniquely confirms the presence of an Adobe Portable Document Format (PDF) file?",
    "options": [
      "25 50 44 46 (ASCII: %PDF)",
      "D0 CF 11 E0 (Composite Document File V2)",
      "50 4B 03 04 (Zip File Archive Header)",
      "7F 45 4C 46 (Executable and Linkable Format)"
    ],
    "answer": 0,
    "explanation": "PDF files invariably begin with the 4-byte ASCII signature '%PDF' (hex: 25 50 44 46), followed by the version specification (e.g., '-1.7')."
  },
  {
    "id": 82,
    "question": "Which 4-byte file header magic signature initiates ZIP archives, Microsoft Office OpenXML files (DOCX, XLSX, PPTX), and Android APK packages?",
    "options": [
      "52 61 72 21 (ASCII: Rar!, Eugene Roshal RAR archive)",
      "50 4B 03 04 (ASCII: PK\\x03\\x04, Phil Katz ZIP header)",
      "37 7A BC AF (7-Zip compressed container signature)",
      "1F 8B 08 00 (GZIP compressed stream file header)"
    ],
    "answer": 1,
    "explanation": "ZIP archives begin with '50 4B 03 04' ('PK' for Phil Katz). Modern Office formats (.docx, .xlsx, .pptx) and Android .apk files are ZIP containers and share this exact header."
  },
  {
    "id": 83,
    "question": "What file header magic signature designates a legacy Microsoft Office 97-2003 Compound File Binary format (.doc, .xls, .ppt)?",
    "options": [
      "50 4B 03 04 14 00 06 00 (OpenXML package header)",
      "25 21 50 53 2D 41 64 6F (PostScript document header)",
      "D0 CF 11 E0 A1 B1 1A E1 (OLECF file header)",
      "4D 53 43 46 00 00 00 00 (Microsoft Cabinet archive)"
    ],
    "answer": 2,
    "explanation": "Legacy Microsoft Office documents (Word .doc, Excel .xls) utilize the Object Linking and Embedding Compound File (OLECF) format, starting with the 8-byte hex signature 'D0 CF 11 E0 A1 B1 1A E1'."
  },
  {
    "id": 84,
    "question": "What specific type of steganography hides secret messages within the least significant bits of image pixel color bytes?",
    "options": [
      "Frequency Domain Discrete Cosine Transform (DCT) Steganography",
      "Spread Spectrum Cryptographic Steganography",
      "Palette Permutation Structural Steganography",
      "Spatial Domain LSB (Least Significant Bit) Steganography"
    ],
    "answer": 3,
    "explanation": "LSB steganography replaces the least significant bit (the 8th bit) of pixel RGB bytes with payload bits. Because altering the lowest bit causes imperceptible color changes, it hides data effectively in spatial domain images."
  },
  {
    "id": 85,
    "question": "In image steganography, what does 'Steganalysis' fundamentally seek to achieve?",
    "options": [
      "Detecting the presence of hidden covert communication and estimating payload characteristics within carrier media",
      "Accelerating image rendering speeds across graphics processing unit pipelines",
      "Generating public-private keypairs for asymmetric image signing",
      "Compressing high-resolution raw image files into lossy JPEG formats"
    ],
    "answer": 0,
    "explanation": "Steganalysis is the science of detecting covert data embedded inside digital carriers (images, audio, video) and uncovering the hiding algorithm, secret key, or payload."
  },
  {
    "id": 86,
    "question": "What statistical steganalysis technique evaluates pairs of values (PoVs) in pixel histograms to detect LSB replacement embedding?",
    "options": [
      "Fast Fourier Transform (FFT) Analysis",
      "Chi-Square (\u03c7\u00b2) Analysis",
      "Linear Discriminant Kernel Analysis",
      "Markov Decision Process Modelling"
    ],
    "answer": 1,
    "explanation": "Chi-square (\u03c7\u00b2) steganalysis analyzes Pairs of Values (e.g. 2k and 2k+1). In natural images, frequencies differ; sequential LSB replacement equalizes adjacent pairs, creating a detectable statistical signature."
  },
  {
    "id": 87,
    "question": "Under NIST Special Publication 800-88 Revision 1 (Guidelines for Media Sanitization), what are the three recognized levels of media sanitization?",
    "options": [
      "Format, Partition, and Reinstall",
      "Encrypt, Overwrite, and Archive",
      "Clear, Purge, and Destroy",
      "Wipe, Shred, and Incinerate"
    ],
    "answer": 2,
    "explanation": "NIST SP 800-88 Rev 1 defines three levels: 'Clear' (overwriting using standard read/write commands), 'Purge' (executing low-level device sanitize/ATA Secure Erase or degaussing), and 'Destroy' (physical disintegration/shredding)."
  },
  {
    "id": 88,
    "question": "What is the operational standard for the US Department of Defense (DoD) 5220.22-M magnetic media sanitization protocol?",
    "options": [
      "Applying an alternating electromagnetic pulse of 10,000 Gauss across drive platters for 30 seconds",
      "Executing an instant cryptographic key erasure via on-board hardware controller chips",
      "Writing 35 distinct pseudo-random passes across magnetic media as defined by Peter Gutmann",
      "Overwriting all addressable locations with a fixed byte, its complement, and then a random byte, followed by verification"
    ],
    "answer": 3,
    "explanation": "DoD 5220.22-M specifies a 3-pass overwrite: Pass 1 writes a fixed character; Pass 2 writes its bitwise complement; Pass 3 writes a random character; followed by a read verification pass."
  },
  {
    "id": 89,
    "question": "Why does magnetic degaussing permanently ruin magnetic hard drives while failing to sanitize Solid State Drives (SSDs)?",
    "options": [
      "Degaussing disrupts magnetic platter domains and servo track alignment, but has zero effect on non-magnetic silicon NAND flash memory cells",
      "Degaussing generates intense heat that melts aluminum platters but solid state chips have ceramic insulation",
      "SSDs maintain backup battery capacitors that automatically reconstruct deleted flash voltage registers",
      "Degaussing commands cannot penetrate SATA interface controllers without root BIOS authentication"
    ],
    "answer": 0,
    "explanation": "Degaussing uses powerful magnetic fields to demagnetize magnetic media (destroying platter data and factory servo tracks). SSDs store data using electrical charges in floating gate transistors, which are unaffected by magnetic fields."
  },
  {
    "id": 90,
    "question": "What anti-forensic technique deliberately modifies file MAC (Modified, Accessed, Created) timestamps to match legitimate system binaries to deceive chronological timeline analysis?",
    "options": [
      "Code Morphing",
      "Timestomping",
      "DLL Sideloading",
      "Process Hollowing"
    ],
    "answer": 1,
    "explanation": "Timestomping is an anti-forensic technique where attackers alter file creation, modification, and access timestamps (e.g. using tools like timestomp or PowerShell) to blend malicious files with legitimate operating system files."
  },
  {
    "id": 91,
    "question": "What open-source file carving tool utilizes configuration files containing header/footer patterns to carve files from raw disk images without requiring file system metadata?",
    "options": [
      "FTK Imager Lite",
      "EnCase Forensic v8",
      "Foremost / Scalpel",
      "Autopsy Ingest Core"
    ],
    "answer": 2,
    "explanation": "Foremost and Scalpel are classic open-source file carvers. They read user-defined configuration files (foremost.conf / scalpel.conf) specifying file extensions, header hex signatures, footer signatures, and maximum file sizes."
  },
  {
    "id": 92,
    "question": "Which digital image artifact format contains embedded camera metadata, GPS coordinates, shutter speed, camera model, and capture timestamps?",
    "options": [
      "ID3v2 metadata container tag frame",
      "Resource Interchange File Format chunk header",
      "Adobe XMP Extensible Metadata packet buffer",
      "Exif (Exchangeable Image File Format) metadata segment"
    ],
    "answer": 3,
    "explanation": "Exif metadata is embedded in JPEG and TIFF headers (APP1 marker 0xFFE1). It records device model, camera settings, exposure, focal length, timestamps, and often GPS latitude/longitude coordinates."
  },
  {
    "id": 93,
    "question": "In email forensics, which RFC standard defines the internet message format and header architecture for electronic mail?",
    "options": [
      "RFC 5322 (obsoleting RFC 2822 and RFC 822)",
      "RFC 793 (defining Transmission Control Protocol)",
      "RFC 2616 (defining Hypertext Transfer Protocol)",
      "RFC 1035 (defining Domain Name System protocols)"
    ],
    "answer": 0,
    "explanation": "RFC 5322 is the Internet Standard specifying the technical format of internet email messages, including mandatory and optional email headers (From, To, Date, Subject, Received, Message-ID)."
  },
  {
    "id": 94,
    "question": "When investigating forged emails (phishing/spoofing), why must an examiner parse 'Received:' headers from the bottom up?",
    "options": [
      "The top-most 'Received:' header is cryptographically protected against tampering by intermediate relays",
      "The bottom-most 'Received:' header represents the initial hop recorded by the true originating Mail Submission Agent (MSA)",
      "Intermediate SMTP servers strip previous 'Received:' headers to conserve TCP transmission bandwidth",
      "The bottom-most header is validated by Domain Name System Certificate Authority Authorization (CAA) records"
    ],
    "answer": 1,
    "explanation": "Each SMTP server that handles an email prepends a 'Received:' header to the top. Therefore, reading from bottom to top reconstructs the email's chronological path, with the lowest header revealing the true originating IP."
  },
  {
    "id": 95,
    "question": "What email authentication framework uses DNS TXT records to publish a list of authorized IP addresses permitted to send mail on behalf of a specific domain?",
    "options": [
      "DKIM (DomainKeys Identified Mail)",
      "DMARC (Domain-based Message Authentication)",
      "SPF (Sender Policy Framework)",
      "S/MIME (Secure/Multipurpose Internet Mail Extensions)"
    ],
    "answer": 2,
    "explanation": "SPF (Sender Policy Framework, RFC 7208) allows domain owners to publish a DNS TXT record listing IP addresses authorized to send emails from their domain, enabling receiving servers to reject spoofed senders."
  },
  {
    "id": 96,
    "question": "What does a valid DKIM (DomainKeys Identified Mail) signature in an email header prove to an investigator?",
    "options": [
      "The sender's client machine was scanned and verified free of malware by the originating mail server",
      "The recipient mailbox successfully decrypted the message payload using symmetric AES encryption",
      "The message route traversed exclusively through encrypted TLS tunnels across all intermediate hops",
      "The email body and designated headers were not modified in transit and were authorized by the domain holding the private signing key"
    ],
    "answer": 3,
    "explanation": "DKIM (RFC 6376) uses public-key cryptography. The sending domain signs the email with its private key; the receiving server verifies the signature against the sender's public key in DNS, proving integrity and non-tampering."
  },
  {
    "id": 97,
    "question": "What email security protocol unifies SPF and DKIM, allowing domain owners to specify enforcement policies (none, quarantine, reject) for failing messages?",
    "options": [
      "DMARC (Domain-based Message Authentication, Reporting, and Conformance)",
      "STARTTLS (Opportunistic Transport Layer Security)",
      "DNSSEC (Domain Name System Security Extensions)",
      "PGP/MIME (Pretty Good Privacy Mail Security)"
    ],
    "answer": 0,
    "explanation": "DMARC (RFC 7489) leverages SPF and DKIM. It enables domain owners to specify policies ('p=none', 'p=quarantine', 'p=reject') instructs receiving mail servers on how to handle emails that fail SPF/DKIM alignment."
  },
  {
    "id": 98,
    "question": "What standard desktop email storage format stores multiple email messages concatenated sequentially within a single plain text file?",
    "options": [
      "PST format",
      "MBOX format",
      "OST format",
      "EML format"
    ],
    "answer": 1,
    "explanation": "MBOX format stores all messages in a mailbox folder sequentially in a single plain text file, separated by a line starting with 'From ' followed by the sender's address and timestamp."
  },
  {
    "id": 99,
    "question": "Which proprietary file format is utilized by Microsoft Outlook to store cached local offline copies of Microsoft Exchange or Office 365 mailboxes?",
    "options": [
      "PST (Personal Storage Table)",
      "EDB (Exchange Database)",
      "OST (Offline Storage Table)",
      "MSG (Outlook Individual Message)"
    ],
    "answer": 2,
    "explanation": "OST (Offline Storage Table) stores synchronized offline copies of mailbox items from an Exchange or Office 365 server. PST (Personal Storage Table) is used for local pop3 archives and exports."
  },
  {
    "id": 100,
    "question": "What is the function of the Message-ID header in an RFC 5322 compliant email message?",
    "options": [
      "A random session token used by the mail user agent to authenticate IMAP folder synchronization",
      "A digital signature confirming the sender's physical GPS coordinates at time of dispatch",
      "A temporary cryptographic key exchanged between SMTP servers during STARTTLS negotiation",
      "A globally unique identifier assigned by the originating mail system to uniquely identify that specific email instance"
    ],
    "answer": 3,
    "explanation": "The Message-ID header (e.g. '<unique_string@domain.com>') is a globally unique string assigned by the generating mail server to identify the specific message, invaluable for correlating logs across mail relays."
  },
  {
    "id": 101,
    "question": "In Cloud Computing Forensics, what model dictates that the customer is responsible for guest OS security, data, and application logs while the cloud provider manages physical hardware?",
    "options": [
      "Shared Responsibility Model in Infrastructure as a Service (IaaS)",
      "Total Delegation Model in Software as a Service (SaaS)",
      "Hardware Abstraction Layer in Platform as a Service (PaaS)",
      "Autonomous Cloud Framework in Functions as a Service (FaaS)"
    ],
    "answer": 0,
    "explanation": "In IaaS (e.g. AWS EC2, Azure VM), the Cloud Service Provider manages physical infrastructure/hypervisor, while the customer is responsible for guest OS, applications, user access, and data security."
  },
  {
    "id": 102,
    "question": "Which Amazon Web Services (AWS) service generates immutable JSON-formatted audit logs capturing all API activity, user logins, and resource modifications across an AWS tenant?",
    "options": [
      "Amazon CloudWatch Logs",
      "AWS CloudTrail",
      "AWS GuardDuty",
      "AWS Config"
    ],
    "answer": 1,
    "explanation": "AWS CloudTrail records AWS API calls, identity logins, console actions, and resource modifications as JSON event logs, providing the primary audit trail for cloud security and forensic investigations."
  },
  {
    "id": 103,
    "question": "How does a cloud forensic investigator acquire an immutable forensic bit-stream copy of an AWS Elastic Compute Cloud (EC2) instance's storage volume?",
    "options": [
      "Using SSH to connect to the live instance and running 'dd' directly to an external S3 bucket",
      "Suspending the hypervisor virtual CPU thread and downloading the instance's .vmdk file via web console",
      "Creating an Amazon Elastic Block Store (EBS) snapshot and sharing or copying it to an isolated forensic analysis AWS account",
      "Extracting memory crash dumps using the AWS CloudFormation template automation engine"
    ],
    "answer": 2,
    "explanation": "The cloud-native forensic acquisition standard for EC2 involves taking a point-in-time EBS snapshot of the target volume, creating a forensic volume from it, and attaching it read-only to an isolated examiner VM."
  },
  {
    "id": 104,
    "question": "What critical forensic challenge is presented by 'ephemeral containers' in cloud environments (e.g., Docker, Kubernetes)?",
    "options": [
      "Container namespaces prevent Linux kernel system calls from being logged by auditd",
      "Container images cannot be inspected with antivirus scanners due to overlayfs encryption",
      "Containers alter the hardware CPU serial numbers, invalidating legal chain of custody documentation",
      "When a container terminates or is destroyed, all its non-persistent local filesystem layers and volatile memory evaporate instantly"
    ],
    "answer": 3,
    "explanation": "Containers are ephemeral; when a container pod crashes or terminates, its writable layer and memory vanish, making centralized real-time log streaming (e.g. to SIEM/CloudWatch) critical for evidence preservation."
  },
  {
    "id": 105,
    "question": "What database artifact stores every transaction (insert, update, delete) before it commits to the main data file, allowing recovery of fraudulent modifications in SQL Server forensics?",
    "options": [
      "Transaction Log (.LDF file / Write-Ahead Logging)",
      "Primary Data File (.MDF container)",
      "Secondary Data File (.NDF storage)",
      "SQL Server Profiler Trace (.TRC)"
    ],
    "answer": 0,
    "explanation": "SQL Server uses Write-Ahead Logging (WAL) via its transaction log (.LDF). Changes are written to the .LDF file before being committed to the database (.MDF), preserving before-and-after values, user SIDs, and timestamps."
  },
  {
    "id": 106,
    "question": "In SQLite database forensics (used across iOS and Android apps), which auxiliary file holds uncommitted write transactions in Write-Ahead Logging mode?",
    "options": [
      "Rollback Journal (-journal suffix e.g., contacts.db-journal)",
      "WAL file (-wal suffix e.g., contacts.db-wal)",
      "Shared Memory file (-shm suffix e.g., contacts.db-shm)",
      "Temporary B-Tree file (-tmp suffix e.g., contacts.db-tmp)"
    ],
    "answer": 1,
    "explanation": "When SQLite runs in WAL mode, transactions are appended to the '-wal' file before checkpointing back to the main '.db' file. Crucial uncommitted or deleted records reside here."
  },
  {
    "id": 107,
    "question": "What is a 'Freelist' inside an SQLite database file?",
    "options": [
      "An access control list specifying user permissions for SQL table queries",
      "A registry of open network sockets connected to external database servers",
      "A linked list of unused or deleted database B-Tree pages that frequently retain residual deleted records",
      "A memory buffer caching compiled SQL query execution plans"
    ],
    "answer": 2,
    "explanation": "When records or tables are deleted in SQLite without VACUUM, the pages are moved to the database 'freelist'. Forensic tools parse freelist pages to carve deleted chat messages and records."
  },
  {
    "id": 108,
    "question": "What forensic command-line tool written by Eric Zimmerman parses Windows Event Log (.evtx) files rapidly, reconstructing XML structures?",
    "options": [
      "MFTECmd",
      "JLECmd",
      "LECmd",
      "EvtxECmd"
    ],
    "answer": 3,
    "explanation": "EvtxECmd (by Eric Zimmerman) is a specialized tool for parsing Windows Event Log (.evtx) files, reconstructing XML records, handling corrupted chunks, and exporting CSV timelines."
  },
  {
    "id": 109,
    "question": "What is the memory acquisition technique that forces an ACPI-compatible Windows system to crash and generate a full memory crash dump (MEMORY.DMP)?",
    "options": [
      "Crash on Ctrl+ScrollLock via keyboard driver registry configuration",
      "Executing the user-mode command 'taskkill /F /IM ntoskrnl.exe'",
      "Injecting shellcode into the Windows Subsystem for Linux (WSL) daemon",
      "Triggering a hardware short-circuit across the motherboard CMOS battery jumper"
    ],
    "answer": 0,
    "explanation": "Configuring the registry (CrashOnCtrlScroll under kbdhid/i8042prt) allows investigators to trigger a deliberate BugCheck (BSOD 0xE2: MANUALLY_INITIATED_CRASH) to generate a complete MEMORY.DMP."
  },
  {
    "id": 110,
    "question": "Where is the full physical memory dump (MEMORY.DMP) written by default on a Windows system following a crash or forced BugCheck?",
    "options": [
      "C:\\ProgramData\\Microsoft\\Windows\\WER\\SystemCrash.dmp",
      "%SystemRoot%\\MEMORY.DMP (typically C:\\Windows\\MEMORY.DMP)",
      "C:\\Windows\\System32\\config\\CrashDump.bin",
      "C:\\Users\\Default\\AppData\\Local\\CrashReport.dmp"
    ],
    "answer": 1,
    "explanation": "Windows writes complete or kernel crash dumps by default to '%SystemRoot%\\MEMORY.DMP' (usually 'C:\\Windows\\MEMORY.DMP'), populated from the paging file (pagefile.sys) during reboot."
  },
  {
    "id": 111,
    "question": "In Microsoft Windows forensics, what artifact records the search queries typed into the Windows Search bar by a user?",
    "options": [
      "SearchHistory.reg (Stored in HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Search)",
      "CortanaQueries.sqlite (Stored in C:\\Windows\\SystemApps\\Cortana\\)",
      "Windows.edb (Extensible Storage Engine database in C:\\ProgramData\\Microsoft\\Search\\Data\\Applications\\Windows\\)",
      "ExplorerIndex.xml (Stored in C:\\Users\\<Username>\\AppData\\Local\\Index\\)"
    ],
    "answer": 2,
    "explanation": "Windows Search indexes files, emails, and user queries in 'Windows.edb' (an ESE database in ProgramData\\Microsoft\\Search). It stores indexed document text, file paths, and historical user search terms."
  },
  {
    "id": 112,
    "question": "What open-source framework is considered the industry standard for analyzing volatile physical memory (RAM) dumps across Windows, Linux, and macOS?",
    "options": [
      "Autopsy Forensic Browser",
      "Sleuth Kit (TSK)",
      "Ghidra Software Reverse Engineering",
      "Volatility Framework"
    ],
    "answer": 3,
    "explanation": "Volatility (Volatility 2 / Volatility 3) is the premier open-source memory forensics framework for extracting processes, network sockets, injected DLLs, and kernel artifacts from volatile RAM dumps."
  },
  {
    "id": 113,
    "question": "What is the primary function of the Sleuth Kit (TSK) command line tool 'fls'?",
    "options": [
      "Listing file and directory names in an image, including pointers to deleted files",
      "Displaying the details and cluster run allocation of an individual inode/MFT record",
      "Calculating MD5 and SHA-256 cryptographic hashes for each sector of a raw disk image",
      "Extracting Alternate Data Streams from Master File Table records into separate text files"
    ],
    "answer": 0,
    "explanation": "'fls' in The Sleuth Kit (TSK) lists directory entries and file names inside a file system image, displaying '*' next to deleted entries that still retain directory index references."
  },
  {
    "id": 114,
    "question": "What is the primary function of the Sleuth Kit (TSK) command line tool 'icat'?",
    "options": [
      "Listing the general file system information and layout including block count and cluster size",
      "Extracting and displaying the data contents of a file by specifying its inode or MFT record number",
      "Creating a chronological timeline file from filesystem MACB metadata timestamps",
      "Searching unallocated clusters for regular expression patterns and hex string signatures"
    ],
    "answer": 1,
    "explanation": "'icat' extracts the data content of a file directly using its metadata address (inode number in Linux or MFT entry number in NTFS), bypassing the directory tree."
  },
  {
    "id": 115,
    "question": "What is the primary function of the Sleuth Kit (TSK) command line tool 'mactime'?",
    "options": [
      "Synchronizing the system hardware BIOS clock with international atomic NTP servers",
      "Converting WebKit microsecond timestamps into standard ISO 8601 UTC date formats",
      "Parsing metadata files generated by fls/ils to create an ASCII chronological timeline of file activities",
      "Modifying file timestamps within $STANDARD_INFORMATION to simulate timestomping attacks"
    ],
    "answer": 2,
    "explanation": "'mactime' takes 'body' files generated by fls/ils and organizes them into a human-readable, chronological timeline showing Modified, Accessed, Created, and Changed (MACB) file events."
  },
  {
    "id": 116,
    "question": "What is the designated purpose of the Sleuth Kit tool 'fsstat'?",
    "options": [
      "Recovering unallocated clusters containing deleted multimedia files via signature carving",
      "Mounting raw forensic bitstream images as virtual read-only physical disks",
      "Scanning network interface controllers for promiscuous packet sniffing modes",
      "Displaying high-level file system metadata, including cluster size, block size, volume serial number, and inode ranges"
    ],
    "answer": 3,
    "explanation": "'fsstat' displays general details of a file system (file system type, volume name, block size, total blocks, free blocks, inode/MFT range, and layout details)."
  },
  {
    "id": 117,
    "question": "In live network forensics, what does promiscuous mode on a Network Interface Card (NIC) enable?",
    "options": [
      "It allows the NIC to capture all network frames passing on the physical segment, regardless of destination MAC address",
      "It enables the NIC to bypass local 802.1X enterprise network port security controls",
      "It forces the NIC to assign dynamic IPv6 link-local addresses across all virtual VLANs",
      "It instructs the network controller to reject unencrypted broadcast and multicast traffic"
    ],
    "answer": 0,
    "explanation": "In normal mode, a NIC drops packets not addressed to its MAC address. In promiscuous mode, the NIC passes all physical frames traversing the network wire to the OS/packet sniffer."
  },
  {
    "id": 118,
    "question": "What international standard provides guidelines for the handling, identification, collection, acquisition, and preservation of digital evidence?",
    "options": [
      "ISO/IEC 27001",
      "ISO/IEC 27037",
      "ISO/IEC 17025",
      "ISO/IEC 9001"
    ],
    "answer": 1,
    "explanation": "ISO/IEC 27037 specifies the standards and best practices for Digital Evidence Handling (Identification, Collection, Acquisition, and Preservation)."
  },
  {
    "id": 119,
    "question": "What international standard specifies the general requirements for the competence, calibration, and testing quality management of digital forensic laboratories?",
    "options": [
      "ISO/IEC 27037",
      "ISO/IEC 27002",
      "ISO/IEC 17025",
      "ISO/IEC 31000"
    ],
    "answer": 2,
    "explanation": "ISO/IEC 17025 is the international accreditation standard for calibration and testing laboratories, ensuring rigorous quality assurance, validation of tools, and competence of forensic labs."
  },
  {
    "id": 120,
    "question": "In legal jurisprudence governing scientific evidence, what does the 'Daubert Standard' establish regarding digital forensic tool outputs?",
    "options": [
      "Evidence is admissible only if verified by an original equipment manufacturer corporate affidavit",
      "All software source code utilized during forensic examination must be public-domain open-source",
      "Forensic examiners must hold a minimum of ten years of sworn law enforcement agency credentials",
      "Scientific methodology must be empirically testable, peer-reviewed, possess a known error rate, and maintain general acceptance"
    ],
    "answer": 3,
    "explanation": "The Daubert Standard (Daubert v. Merrell Dow Pharmaceuticals) requires that expert testimony/tools be tested, subjected to peer review, have known error rates, adhere to standards, and enjoy general acceptance."
  },
  {
    "id": 121,
    "question": "What is the fundamental difference between an Expert Witness and a Fact (Lay) Witness in a court of law?",
    "options": [
      "An expert witness may offer professional opinions and inferences based on specialized technical training and scientific data",
      "An expert witness is permitted to cross-examine opposing counsel regarding digital chain of custody logs",
      "A fact witness is legally required to hold certifications under ISO/IEC 17025 before testifying",
      "A fact witness is authorized to deliver final sentencing recommendations to the presiding trial judge"
    ],
    "answer": 0,
    "explanation": "Fact witnesses can only testify to facts they directly observed. Expert witnesses, under Section 45 Indian Evidence Act / Section 39 BSA 2023, are permitted to render professional opinions and interpretations."
  },
  {
    "id": 122,
    "question": "What is 'GNU ddrescue' and why is it preferred over standard 'dd' when cloning physically failing hard disk drives?",
    "options": [
      "It automatically recalculates cryptographic hashes of bad sectors using Reed-Solomon parity ECC",
      "It intelligently maps read errors and skips damaged sectors first, returning later to scrape failing sectors without exhausting drive heads",
      "It operates in kernel space without mounting standard ATA interface hardware controllers",
      "It decrypts firmware-locked drive controller passwords via high-frequency SCSI commands"
    ],
    "answer": 1,
    "explanation": "ddrescue uses an intelligent algorithm with a mapfile: it quickly rescues readable parts first, then splits and scrapes failing sectors, preventing premature total head failure on failing disks."
  },
  {
    "id": 123,
    "question": "What is the significance of the 32-bit 'Volume Serial Number' generated during volume formatting in FAT and NTFS file systems?",
    "options": [
      "It represents the hardware MAC address of the motherboard controller that initialized the volume",
      "It holds the Master File Table root cluster offset address on physical disk platters",
      "It provides a unique identifier generated from date and time during format, useful for correlating USB drive insertion with registry MountPoints",
      "It acts as the BitLocker recovery key identifier for full disk encryption containers"
    ],
    "answer": 2,
    "explanation": "The Volume Serial Number (e.g. 78A2-34B1) is generated at format time from system clock values. Windows records it in LNK files and registry MountPoints2, allowing examiners to prove a specific volume was accessed."
  },
  {
    "id": 124,
    "question": "What open-source command-line tool written in Perl by Phil Harvey is globally recognized as the gold standard for reading and parsing EXIF and media metadata?",
    "options": [
      "MediaInfo CLI",
      "FFmpeg Metadata Core",
      "Bulk_Extractor",
      "ExifTool"
    ],
    "answer": 3,
    "explanation": "ExifTool by Phil Harvey is the leading cross-platform application for reading, writing, and editing meta information in image, audio, video, and PDF files."
  },
  {
    "id": 125,
    "question": "In Microsoft Windows registry analysis, what information is revealed by the 'TypedURLs' subkey located in the user's NTUSER.DAT hive?",
    "options": [
      "URLs manually typed directly into the address bar of Microsoft Internet Explorer or Edge by the user",
      "All URLs downloaded as background advertisement tracking beacons across Chromium browsers",
      "Network addresses of remote Active Directory domain controllers authenticated over Kerberos",
      "File shares mounted over SMB that required explicit administrative credential input"
    ],
    "answer": 0,
    "explanation": "TypedURLs (in Software\\Microsoft\\Internet Explorer\\TypedURLs) records the exact web addresses manually typed into the browser address bar by the user, proving deliberate user intent."
  },
  {
    "id": 126,
    "question": "What forensic capability is provided by 'Volume Shadow Copy' (VSS) analysis in Windows environments?",
    "options": [
      "Examiners can decrypt BitLocker volumes without needing the 48-digit recovery password",
      "Examiners can inspect historical differential disk snapshots, recovering prior versions of files, registries, and databases",
      "Examiners can extract plaintext RAM contents that were cached during hibernation cycles",
      "Examiners can bypass Secure Boot integrity checks across UEFI motherboard firmware chips"
    ],
    "answer": 1,
    "explanation": "Volume Shadow Copies (VSS) create differential block-level snapshots of volumes over time. Examining VSS allows forensic examiners to 'travel back in time' and extract deleted files or older registry hives."
  },
  {
    "id": 127,
    "question": "What is the difference in Recycle Bin metadata structure between legacy Windows XP (INFO2) and modern Windows 10/11 ($I)?",
    "options": [
      "Windows XP stored deleted files in plaintext unallocated clusters; modern Windows encrypts all deleted data using DPAPI",
      "Windows XP retained deleted files indefinitely; modern Windows purges all Recycle Bin contents automatically every 60 seconds",
      "Windows XP maintained a single centralized INFO2 database; modern Windows creates individual $I metadata files for each deleted file",
      "Windows XP stored deleted file paths in Unicode UTF-16; modern Windows records deleted file metadata in ASCII 7-bit text"
    ],
    "answer": 2,
    "explanation": "Windows XP maintained a single binary file named 'INFO2' inside the C:\\RECYCLER directory. Windows Vista and later create individual '$I' metadata and '$R' payload pairs per deleted file in C:\\$Recycle.Bin."
  },
  {
    "id": 128,
    "question": "Why must a forensic examiner compute and record the cryptographic hash of BOTH the source media AND the resulting image file?",
    "options": [
      "To determine the file system allocation block size and master boot record cluster offsets",
      "To satisfy the hardware write-blocker firmware calibration requirement under ISO/IEC 9001",
      "To ensure that unallocated space clusters are permanently sanitized prior to judicial presentation",
      "To prove that the source drive was not altered during acquisition and that the resulting image file is a bit-level identical copy"
    ],
    "answer": 3,
    "explanation": "Computing the hash before and after imaging proves the source drive was unchanged (write-blocking worked) and that the disk image file is a bit-perfect duplicate."
  },
  {
    "id": 129,
    "question": "In digital forensics evidence handling, what constitutes 'Evidence Contamination'?",
    "options": [
      "The inadvertent or unauthorized introduction of alterations, metadata modifications, or extraneous data into evidence media",
      "The natural magnetic charge decay that occurs across solid state drive floating gate transistors over time",
      "The conversion of proprietary E01 disk images into raw bitstream DD images during forensic analysis",
      "The execution of cryptographic hashing algorithms across damaged sectors on physical disk platters"
    ],
    "answer": 0,
    "explanation": "Evidence contamination occurs when an examiner or first responder alters evidence\u2014such as booting a suspect machine, modifying timestamps, or writing temp files\u2014undermining its evidentiary reliability."
  },
  {
    "id": 130,
    "question": "What is the standard cluster size for a default NTFS volume formatted on Windows for volumes up to 16 Terabytes?",
    "options": [
      "512 bytes (1 Sector / 0.5 Kilobytes)",
      "4 Kilobytes (4,096 bytes / 8 sectors of 512 bytes)",
      "64 Kilobytes (65,536 bytes / 128 sectors)",
      "1 Kilobyte (1,024 bytes / 2 sectors)"
    ],
    "answer": 1,
    "explanation": "The default cluster size for standard NTFS volumes up to 16 TB is 4 KB (4,096 bytes, or 8 consecutive 512-byte sectors)."
  },
  {
    "id": 131,
    "question": "What is the specific forensic role of the NTFS system file '$Bitmap'?",
    "options": [
      "It stores bitmap thumbnail previews of image files browsed in Windows File Explorer folders",
      "It records graphical desktop wallpaper images configured across local user accounts",
      "It tracks the allocation status (allocated vs unallocated) of every cluster on the volume using a single bit per cluster",
      "It indexes the cryptographic public keys used to encrypt BitLocker protected partitions"
    ],
    "answer": 2,
    "explanation": "$Bitmap contains a bit array where each bit represents a cluster on the volume: bit=1 means allocated; bit=0 means unallocated/free space. Examiners parse it to identify unallocated areas."
  },
  {
    "id": 132,
    "question": "Which NTFS system file contains the list of defective sectors marked as unusable on the storage volume?",
    "options": [
      "$Repair",
      "$Defect",
      "$Volume",
      "$BadClust"
    ],
    "answer": 3,
    "explanation": "The '$BadClust' file tracks bad sectors on the NTFS volume, preventing the OS from writing data to damaged physical locations."
  },
  {
    "id": 133,
    "question": "What is the primary architectural function of the NTFS system file '$MFTMirr'?",
    "options": [
      "It stores a redundant backup duplicate of the first four records of the Master File Table ($MFT, $MFTMirr, $LogFile, $Volume)",
      "It maintains a real-time secondary mirror of the entire storage volume across dynamic disk stripes",
      "It mirrors active volatile RAM buffers directly into the virtual memory pagefile during sleep mode",
      "It holds the secondary GPT partition array descriptors located at the end of the physical disk"
    ],
    "answer": 0,
    "explanation": "$MFTMirr duplicates the critical first four records of the Master File Table ($MFT, $MFTMirr, $LogFile, and $Volume) to aid recovery if sector 0 of the MFT is damaged."
  },
  {
    "id": 134,
    "question": "In NTFS directory indexing, what is the role of attributes '$INDEX_ROOT' (0x90) and '$INDEX_ALLOCATION' (0xA0)?",
    "options": [
      "They map logical block addresses into physical NAND flash flash translation layer channels",
      "They organize directory entries into a balanced B-Tree structure for rapid filename lookups within folders",
      "They index Alternate Data Streams attached to encrypted executable binary headers",
      "They record user security descriptors and access control entries across active directory forests"
    ],
    "answer": 1,
    "explanation": "Directories in NTFS use B-Trees for fast lookups. Small directories fit inside the resident '$INDEX_ROOT' (0x90); larger directories allocate non-resident external B-Tree nodes via '$INDEX_ALLOCATION' (0xA0)."
  },
  {
    "id": 135,
    "question": "What is the operational distinction between a Quick Format and a Full Format in modern Windows 10/11?",
    "options": [
      "Quick Format performs a single-pass DoD overwrite; Full Format executes a Gutmann 35-pass sanitization",
      "Quick Format formats only the Master Boot Record; Full Format converts MBR disks into GUID Partition Tables",
      "Quick Format only overwrites filesystem metadata tables; Full Format additionally writes zeros across the entire volume partition",
      "Quick Format preserves user directory structures; Full Format permanently destroys flash memory NAND gates"
    ],
    "answer": 2,
    "explanation": "In Windows Vista and later, Full Format writes zeros across every sector of the partition (sanitizing data), while Quick Format merely overwrites file system structures ($MFT, FAT), leaving underlying data carvable."
  },
  {
    "id": 136,
    "question": "In Windows security architecture, which built-in Well-Known Security Identifier (SID) represents the 'Local System' account?",
    "options": [
      "S-1-5-19",
      "S-1-5-20",
      "S-1-5-32-544",
      "S-1-5-18"
    ],
    "answer": 3,
    "explanation": "S-1-5-18 represents the Local System (NT AUTHORITY\\SYSTEM) account. S-1-5-19 is Local Service; S-1-5-20 is Network Service; S-1-5-32-544 is the Administrators group."
  },
  {
    "id": 137,
    "question": "In Windows Security Identifiers (SIDs), which built-in user account Relative Identifier (RID) always designates the default Administrator account?",
    "options": [
      "RID 500 (e.g., S-1-5-21-...-500)",
      "RID 501 (e.g., S-1-5-21-...-501)",
      "RID 502 (e.g., S-1-5-21-...-502)",
      "RID 1000 (e.g., S-1-5-21-...-1000)"
    ],
    "answer": 0,
    "explanation": "In Windows, RID 500 is reserved for the built-in Administrator account. RID 501 is the Guest account; RID 502 is KRBTGT; human user accounts created on the system begin at RID 1000 (or 1001 in newer versions)."
  },
  {
    "id": 138,
    "question": "In Windows Security Identifiers (SIDs), which built-in user account Relative Identifier (RID) always designates the built-in Guest account?",
    "options": [
      "RID 500",
      "RID 501",
      "RID 512",
      "RID 1000"
    ],
    "answer": 1,
    "explanation": "RID 501 is reserved for the built-in Guest account in Windows security domain and local SAM databases."
  },
  {
    "id": 139,
    "question": "At what Relative Identifier (RID) number do newly created custom human user accounts start on a Windows workstation?",
    "options": [
      "RID 500",
      "RID 100",
      "RID 1000 (or RID 1001 on modern Windows releases)",
      "RID 65535"
    ],
    "answer": 2,
    "explanation": "Built-in administrative and service accounts occupy RIDs below 1000. Custom user accounts created by administrators begin allocating RIDs sequentially starting at 1000 (or 1001)."
  },
  {
    "id": 140,
    "question": "What forensic information is extracted from the Windows Security Account Manager (SAM) registry hive?",
    "options": [
      "Domain-wide Kerberos Golden Tickets and Active Directory forest trust relationship certificates",
      "Full standard input command histories entered into administrative PowerShell console windows",
      "Cryptographic SSL/TLS master secrets negotiated during active web browser browsing sessions",
      "Local user accounts, user SIDs, account creation dates, login counts, password reset dates, and NTLM password hashes"
    ],
    "answer": 3,
    "explanation": "The SAM hive (C:\\Windows\\System32\\config\\SAM) holds local user accounts, user SIDs, login counts, last logon times, account flags, and obfuscated LM/NTLM password hashes (encrypted with Syskey/PEK)."
  },
  {
    "id": 141,
    "question": "Which widely known credential-dumping tool is utilized to extract cleartext passwords, NTLM hashes, and Kerberos tickets from LSASS process memory?",
    "options": [
      "Mimikatz",
      "Wireshark",
      "Autopsy",
      "John the Ripper"
    ],
    "answer": 0,
    "explanation": "Benjamin Delpy's 'Mimikatz' is the leading tool for extracting plaintext passwords, NTLM password hashes, Kerberos tickets, and DPAPI keys directly from the Windows Local Security Authority Subsystem Service (lsass.exe) memory."
  },
  {
    "id": 142,
    "question": "What is an 'NTLM Hash' in Windows security architecture?",
    "options": [
      "SHA-256 hash of the user's password concatenated with the system volume serial number",
      "MD4 hash of the user's password represented as a little-endian UTF-16 Unicode byte array",
      "Argon2id salted and peppered cryptographic password digest using 64 Megabyte memory cost",
      "PBKDF2 HMAC-SHA1 digest computed over 100,000 iterative hashing rounds"
    ],
    "answer": 1,
    "explanation": "An NTLM (NT) hash is simply the MD4 hash of the password encoded in UTF-16LE. It is unsalted, making it vulnerable to precomputed rainbow table attacks and Pass-the-Hash exploits."
  },
  {
    "id": 143,
    "question": "What is a 'Pass-the-Hash' (PtH) attack in Windows network forensics?",
    "options": [
      "An attack where an attacker decrypts BitLocker containers by brute-forcing intermediate SHA-256 digests",
      "An attack where an adversary intercepts cleartext passwords by sniffing unencrypted HTTP basic auth traffic",
      "An attack where an adversary authenticates to remote services using an extracted NTLM hash directly without ever knowing the plaintext password",
      "An attack where an adversary bypasses MFA by replaying expired TOTP authenticator tokens"
    ],
    "answer": 2,
    "explanation": "Because NTLM authentication uses the hash itself as the secret key in challenge-response handshakes, an attacker possessing the NTLM hash can authenticate directly to remote SMB/RPC services without cracking the password."
  },
  {
    "id": 144,
    "question": "Where is the exact Windows installation timestamp stored in the Windows registry?",
    "options": [
      "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Windows -> OSLaunchTime (Windows FILETIME format)",
      "HKLM\\SAM\\Domains\\Builtin\\Installation -> DateOfCreation (ASCII ISO 8601 string)",
      "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer -> SetupTimestamp (Hex format)",
      "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion -> InstallDate (Unix epoch format)"
    ],
    "answer": 3,
    "explanation": "The Windows installation timestamp is stored as a 32-bit Unix epoch integer in 'InstallDate' under 'HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion'. Modern Windows 10/11 also adds 'InstallTime' as a 64-bit FILETIME value."
  },
  {
    "id": 145,
    "question": "What does 'MRU' stand for in Windows registry forensic terminology?",
    "options": [
      "Most Recently Used",
      "Master Record Unit",
      "Memory Resident Utility",
      "Maximum Retention Update"
    ],
    "answer": 0,
    "explanation": "MRU stands for 'Most Recently Used'. Windows creates MRU registry lists (e.g. RecentDocs, RunMRU, OpenSavePidlMRU) tracking items recently opened, executed, or searched by the user."
  },
  {
    "id": 146,
    "question": "What forensic evidence is provided by the Windows registry key 'OpenSavePidlMRU'?",
    "options": [
      "Removable USB storage drives mounted with read-write permissions during administrative sessions",
      "Files that a user recently opened or saved through standard Windows common file dialog boxes within applications",
      "Outbound network connections opened by background Windows services over SMB ports",
      "Command line strings typed into the Windows 'Run' dialog window (Win + R)"
    ],
    "answer": 1,
    "explanation": "OpenSavePidlMRU (in NTUSER.DAT\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\ComDlg32\\OpenSavePidlMRU) tracks files opened or saved using the standard Open/Save file dialog in any program."
  },
  {
    "id": 147,
    "question": "What forensic evidence is provided by the Windows registry key 'LastVisitedPidlMRU'?",
    "options": [
      "The last ten URLs visited across Google Chrome, Firefox, and Edge private browsing sessions",
      "The last wireless Wi-Fi Access Points (SSIDs) connected to by the host network interface card",
      "The specific application used to open a file dialog and the last folder directory accessed by that specific executable",
      "The last active Remote Desktop Protocol sessions terminated by remote domain administrators"
    ],
    "answer": 2,
    "explanation": "LastVisitedPidlMRU tracks the executable application name (e.g. chrome.exe) and the specific folder directory path that program last navigated to in an Open/Save dialog."
  },
  {
    "id": 148,
    "question": "What is the forensic purpose of the log file 'C:\\Windows\\INF\\setupapi.dev.log'?",
    "options": [
      "It logs all software application installations executed via Microsoft Windows Installer (.msi packages)",
      "It records system kernel BugCheck crashes and generates minidump stack backtraces",
      "It tracks Windows Defender signature updates and quarantine file quarantine actions",
      "It documents hardware device installations, recording the exact timestamp when any USB device was first connected to the system"
    ],
    "answer": 3,
    "explanation": "Setupapi.dev.log is a rich forensic artifact: it records device driver installations, detailing the exact vendor, product ID, serial number, and timestamp when a USB device was first plugged into the computer."
  },
  {
    "id": 149,
    "question": "What is the forensic utility of analyzing Windows 'Thumbcache' databases (thumbcache_*.db located in Explorer folder)?",
    "options": [
      "Recovering thumbnail image previews of graphic files, PDFs, and documents that may have since been deleted from disk",
      "Extracting encrypted user password hashes from volatile desktop memory graphics buffers",
      "Reconstructing unallocated swap space cluster runs for executable binary reconstruction",
      "Parsing internet browser cookie expiration dates across third-party advertising networks"
    ],
    "answer": 0,
    "explanation": "Windows caches folder thumbnails in 'thumbcache_*.db' files. Forensic tools extract these thumbnails, allowing examiners to prove a file (e.g., child exploitation material, stolen diagram) once existed, even if deleted."
  },
  {
    "id": 150,
    "question": "What forensic artifact is stored inside the Windows Extensible Storage Engine database 'WebCacheV01.dat'?",
    "options": [
      "PowerShell console command histories and transcription session keystrokes",
      "Internet Explorer and Microsoft Edge browsing history, download records, DOM storage, and cached internet files",
      "Active Directory Kerberos ticket granting tickets and domain controller replication lists",
      "Windows Firewall stateful packet filtering rule exceptions and dropped socket connection logs"
    ],
    "answer": 1,
    "explanation": "WebCacheV01.dat (in AppData\\Local\\Microsoft\\Windows\\WebCache) is an ESE database that manages IE and modern Edge browser history, cache containers, cookies, and download histories."
  },
  {
    "id": 151,
    "question": "What does a web browser's 'Favicons' database reveal to a digital forensic investigator?",
    "options": [
      "Cryptographic public keys used by remote web servers to establish TLS session tunnels",
      "The exact geographic GPS latitude and longitude coordinates of the remote web server hosting the website",
      "Website icons associated with visited pages, proving website visits even if browsing history was partially cleared",
      "The user's saved plaintext credentials and autofill passwords stored in the browser profile"
    ],
    "answer": 2,
    "explanation": "The Favicons database stores website icon graphics and associated URLs. When suspects clear browser history, they often overlook the Favicons database, leaving behind evidence of visited sites."
  },
  {
    "id": 152,
    "question": "What traces of user activity remain on a system after a user browses the web in 'Private Browsing' (Incognito Mode)?",
    "options": [
      "All browsing history is permanently saved into an encrypted SQLite database in the root user directory",
      "The browser writes all downloaded files exclusively into unallocated disk cluster slack space",
      "Private browsing deletes all operating system Event Logs created during the active browsing session",
      "Volatile RAM remnants, DNS resolver cache entries, and potential disk artifacts in pagefile/hiberfil"
    ],
    "answer": 3,
    "explanation": "Private browsing suppresses writing history and cookies to normal disk databases, but domain lookups persist in the OS DNS cache, and pages/searches remain resident in volatile RAM and pagefile until overwritten."
  },
  {
    "id": 153,
    "question": "What Windows command line command displays currently cached DNS domain lookups resolved by the operating system?",
    "options": [
      "ipconfig /displaydns",
      "netsh dns show cache",
      "nslookup -type=cache",
      "route print -dns"
    ],
    "answer": 0,
    "explanation": "'ipconfig /displaydns' displays the contents of the local DNS client resolver cache, revealing domain names recently resolved by applications or browsers on the machine."
  },
  {
    "id": 154,
    "question": "What Windows command line command flushes and purges the local DNS client resolver cache (frequently run by intruders to cover tracks)?",
    "options": [
      "ipconfig /release",
      "ipconfig /flushdns",
      "net stop dnscache",
      "route -f"
    ],
    "answer": 1,
    "explanation": "'ipconfig /flushdns' flushes and resets the contents of the DNS client resolver cache, purging recently resolved domain names from system memory."
  },
  {
    "id": 155,
    "question": "What is the structure and bit-length of a standard Ethernet Network Interface Card (NIC) Media Access Control (MAC) address?",
    "options": [
      "32 bits (4 octets represented in decimal, e.g., 192.168.1.1)",
      "64 bits (8 octets represented in hexadecimal, e.g., FE80::1)",
      "48 bits (6 octets represented in hexadecimal, e.g., 00:1A:2B:3C:4D:5E)",
      "128 bits (16 octets represented in colon-separated blocks)"
    ],
    "answer": 2,
    "explanation": "A standard MAC address (EUI-48) is 48 bits (6 bytes) long, typically written as six hexadecimal octets. The first 3 bytes represent the Organizationally Unique Identifier (OUI/vendor); the last 3 bytes are device-unique."
  },
  {
    "id": 156,
    "question": "What is the function of the Address Resolution Protocol (ARP) table on a computer or router?",
    "options": [
      "Translating domain names into globally routable public IPv4 and IPv6 addresses",
      "Assigning dynamic IP addresses and default subnet masks to newly attached host adapters",
      "Encrypting point-to-point Layer 2 Tunneling Protocol payloads across wide area networks",
      "Mapping Layer 3 IPv4 addresses to their corresponding Layer 2 physical MAC addresses on the local subnet"
    ],
    "answer": 3,
    "explanation": "The ARP table caches mappings between Layer 3 IP addresses and Layer 2 physical MAC addresses, allowing local network frames to reach the appropriate physical network interface."
  },
  {
    "id": 157,
    "question": "In email architecture, what is the role of a Mail Submission Agent / Mail User Agent (MUA)?",
    "options": [
      "The client software application (e.g., Outlook, Thunderbird) used by an end user to compose, send, and read email messages",
      "The central corporate router that filters inbound spam and blocks zero-day phishing attachments",
      "The authoritative DNS name server that hosts SPF, DKIM, and DMARC verification records",
      "The server-side database engine that indexes Exchange message stores into ESE containers"
    ],
    "answer": 0,
    "explanation": "A Mail User Agent (MUA) is the client email program (such as Outlook, Thunderbird, Apple Mail, or webmail) that an end user interacts with to create, send, and receive email."
  },
  {
    "id": 158,
    "question": "In email architecture, what is the role of a Mail Transfer Agent (MTA)?",
    "options": [
      "A cryptographic smart card used by email administrators to digitally sign outbound TLS certificates",
      "Software on a mail server (e.g., Postfix, Sendmail, Exchange) that routes and transfers email messages between servers using SMTP",
      "An endpoint antivirus scanner that inspects compressed email attachments for macro malware",
      "A client-side browser plugin that translates foreign language text in incoming email bodies"
    ],
    "answer": 1,
    "explanation": "A Mail Transfer Agent (MTA) is server software (e.g. Postfix, Exim, Microsoft Exchange) responsible for receiving email messages and routing them across networks to their destination mail server via SMTP."
  },
  {
    "id": 159,
    "question": "Which network protocol is utilized by an email client (MUA) to transmit outbound email messages to a mail server?",
    "options": [
      "POP3 (Post Office Protocol version 3 - TCP ports 110 or 995)",
      "IMAP4 (Internet Message Access Protocol version 4 - TCP ports 143 or 993)",
      "SMTP (Simple Mail Transfer Protocol - TCP ports 25, 465, or 587)",
      "SNMP (Simple Network Management Protocol - UDP port 161)"
    ],
    "answer": 2,
    "explanation": "SMTP (Simple Mail Transfer Protocol) is the standard protocol used to send outbound emails from client to server, and between intermediate mail servers (ports 25, 587 for submission, 465 for SMTPS)."
  },
  {
    "id": 160,
    "question": "Which email retrieval protocol downloads messages from the mail server to the local client and typically deletes them from the server?",
    "options": [
      "IMAP4 (Internet Message Access Protocol version 4)",
      "SMTP (Simple Mail Transfer Protocol)",
      "LDAP (Lightweight Directory Access Protocol)",
      "POP3 (Post Office Protocol version 3)"
    ],
    "answer": 3,
    "explanation": "POP3 is a store-and-forward protocol designed to download emails from the server to a single local device, by default deleting them from the remote server."
  },
  {
    "id": 161,
    "question": "Which email retrieval protocol enables bidirectional synchronization, allowing users to organize folders and flags directly on the central mail server across multiple devices?",
    "options": [
      "IMAP4 (Internet Message Access Protocol version 4)",
      "POP3 (Post Office Protocol version 3)",
      "SMTP (Simple Mail Transfer Protocol)",
      "NNTP (Network News Transfer Protocol)"
    ],
    "answer": 0,
    "explanation": "IMAP4 keeps emails on the mail server, allowing multiple client devices (phone, laptop, webmail) to synchronize folder structures, read/unread states, and messages in real time."
  },
  {
    "id": 162,
    "question": "In Windows forensics, what user activity is recorded by the Background Activity Moderator (BAM) registry key located in the SYSTEM hive?",
    "options": [
      "The names of files copied to external USB thumb drives during active sessions",
      "The full path and last execution timestamp of applications run by each user account",
      "The battery consumption and CPU temperature throttling statistics across hardware threads",
      "The wireless SSID names and BSSID MAC addresses negotiated by the network card"
    ],
    "answer": 1,
    "explanation": "BAM (HKLM\\SYSTEM\\CurrentControlSet\\Services\\bam\\State\\UserSettings\\<SID>) records the full executable path and 64-bit FILETIME timestamp of when an executable was run by a specific user."
  },
  {
    "id": 163,
    "question": "What forensic artifact is tracked inside the Windows System Resource Usage Monitor (SRUM) database 'C:\\Windows\\System32\\sru\\SRUDB.dat'?",
    "options": [
      "Administrative audit log clearances and local user group membership escalations",
      "Full decrypted TLS session master secrets generated during private browsing",
      "Historical CPU execution duration, bytes sent/received over network interfaces, and energy usage per application executable",
      "Unallocated sector cluster allocation runs containing deleted Office documents"
    ],
    "answer": 2,
    "explanation": "SRUM (SRUDB.dat) is an ESE database that logs 30 to 60 days of per-application resource metrics: execution time, network data sent/received, and background activity per executable path."
  },
  {
    "id": 164,
    "question": "Where is the modern Windows 10/11 'ActivitiesCache.db' (Windows Timeline) database physically located?",
    "options": [
      "C:\\Windows\\System32\\winevt\\Logs\\ActivitiesCache.db",
      "C:\\ProgramData\\Microsoft\\Windows\\Timeline\\ActivitiesCache.db",
      "C:\\Users\\<Username>\\AppData\\Roaming\\Microsoft\\Windows\\Recent\\ActivitiesCache.db",
      "C:\\Users\\<Username>\\AppData\\Local\\ConnectedDevicesPlatform\\<ProfileID>\\ActivitiesCache.db"
    ],
    "answer": 3,
    "explanation": "ActivitiesCache.db is an SQLite database in 'AppData\\Local\\ConnectedDevicesPlatform\\<folder>\\'. It stores Windows Timeline records: files opened, websites browsed, app interactions, and device IDs."
  },
  {
    "id": 165,
    "question": "In Microsoft BitLocker forensics, how many numerical digits compose a standard BitLocker Recovery Key?",
    "options": [
      "48 digits (divided into eight 6-digit groups separated by hyphens)",
      "24 digits (divided into four 6-digit groups separated by colons)",
      "64 digits (represented as a 256-bit hexadecimal cryptographic string)",
      "32 digits (divided into four 8-digit groups separated by slashes)"
    ],
    "answer": 0,
    "explanation": "A standard BitLocker recovery key is exactly 48 decimal digits long, formatted as eight groups of 6 digits (e.g. 123456-789012-...)."
  },
  {
    "id": 166,
    "question": "What is the role of the Trusted Platform Module (TPM) Platform Configuration Registers (PCRs) in BitLocker security?",
    "options": [
      "Providing volatile cache storage for decrypted Master File Table cluster runs",
      "Storing cryptographic measurements of the bootloader, firmware, and OS kernel to seal encryption keys against tampering",
      "Logging user logon and logoff attempts into an immutable hardware flash ring buffer",
      "Accelerating AES-XTS full disk encryption throughput across multi-core processors"
    ],
    "answer": 1,
    "explanation": "TPM PCRs measure the integrity of the platform (UEFI, boot code, partition table). If firmware or bootloader files are altered, PCR values change, and TPM refuses to unseal the BitLocker volume encryption key."
  },
  {
    "id": 167,
    "question": "Which Windows Event ID records when a new user account is successfully created on a local machine or Active Directory domain?",
    "options": [
      "Event ID 4624 (An account was successfully logged on)",
      "Event ID 4672 (Special privileges assigned to new logon)",
      "Event ID 4720 (A user account was created)",
      "Event ID 7045 (A new service was installed in the system)"
    ],
    "answer": 2,
    "explanation": "Windows Security Event ID 4720 documents user account creation, recording the creator's username, the new account name, and its newly assigned Security Identifier (SID)."
  },
  {
    "id": 168,
    "question": "Which Windows Security Event ID records when a user account is added to a privileged security group (e.g. Domain Admins)?",
    "options": [
      "Event ID 4720 (A user account was created on the local system)",
      "Event ID 4625 (An account failed to log on with invalid credentials)",
      "Event ID 1102 (The audit log was cleared in Security log)",
      "Event ID 4728 (A member was added to a security-enabled global group)"
    ],
    "answer": 3,
    "explanation": "Event ID 4728 (for global groups) and Event ID 4732 (for local groups) record the addition of a member to a privileged security group, critical for spotting privilege escalation."
  },
  {
    "id": 169,
    "question": "What Windows built-in command-line utility enables examiners to query and enumerate existing Volume Shadow Copies on a target volume?",
    "options": [
      "vssadmin list shadows /for=C:",
      "fsutil shadow list C:",
      "bdehdcfg -showvolume C:",
      "wbadmin get status -vss"
    ],
    "answer": 0,
    "explanation": "'vssadmin list shadows' queries the Volume Shadow Copy Service to list all existing shadow snapshots on the specified volume with their creation dates and snapshot IDs."
  },
  {
    "id": 170,
    "question": "What file signature (Magic Number) confirms the presence of an SQLite version 3 relational database container?",
    "options": [
      "4D 53 43 46 00 00 00 00 00 00 00 00 00 00 00 00 (Microsoft Cabinet archive)",
      "53 51 4C 69 74 65 20 66 6F 72 6D 61 74 20 33 00 (ASCII: SQLite format 3\\0)",
      "25 50 44 46 2D 31 2E 37 0D 0A 25 25 45 4F 46 00 (Adobe Portable Document)",
      "D0 CF 11 E0 A1 B1 1A E1 00 00 00 00 00 00 00 00 (Composite Document OLECF)"
    ],
    "answer": 1,
    "explanation": "SQLite 3 database files always begin with the exact 16-byte ASCII string 'SQLite format 3\\0' at byte offset 0x00, followed by page size and file change counter fields."
  },
  {
    "id": 171,
    "question": "In SQLite database internals, which byte value at offset 0 of a B-Tree page denotes a 'Leaf Table B-Tree Page' containing row data and payloads?",
    "options": [
      "0x05 (Interior Table B-Tree Page)",
      "0x0A (Leaf Index B-Tree Page)",
      "0x0D (Leaf Table B-Tree Page)",
      "0x02 (Interior Index B-Tree Page)"
    ],
    "answer": 2,
    "explanation": "In SQLite: 0x0D indicates a Table Leaf page (holds actual table records/payloads); 0x05 is an Interior Table page (navigation keys); 0x0A is an Index Leaf page; 0x02 is an Interior Index page."
  },
  {
    "id": 172,
    "question": "What is the primary function of the Data Protection API (DPAPI) in Microsoft Windows operating systems?",
    "options": [
      "Hashing kernel driver digital certificates against the Microsoft Authenticode Root CA",
      "Preventing unauthorized user-mode processes from attaching debuggers to Windows Defender",
      "Encrypting entire physical disk partition sectors at the ATA storage controller bus level",
      "Symmetrically encrypting sensitive user credentials, browser passwords, and private keys using keys derived from the user's login password"
    ],
    "answer": 3,
    "explanation": "DPAPI provides symmetric encryption services for user data (Chrome passwords, Wi-Fi credentials, EFS keys) using master keys protected by the user's password hash or domain backup keys."
  },
  {
    "id": 173,
    "question": "Where are user DPAPI MasterKeys physically stored on a Windows machine?",
    "options": [
      "C:\\Users\\<Username>\\AppData\\Roaming\\Microsoft\\Protect\\<UserSID>\\",
      "C:\\Windows\\System32\\config\\Protect\\MasterKeys\\",
      "C:\\ProgramData\\Microsoft\\Crypto\\RSA\\MachineKeys\\",
      "C:\\Users\\<Username>\\AppData\\Local\\Microsoft\\Vault\\"
    ],
    "answer": 0,
    "explanation": "User DPAPI MasterKeys reside inside GUID-named files in 'C:\\Users\\<Username>\\AppData\\Roaming\\Microsoft\\Protect\\<UserSID>\\'. They are encrypted with a key derived from the user's password."
  },
  {
    "id": 174,
    "question": "In memory forensics, what technique modifies active kernel linked lists (such as unlinking a process from ActiveProcessLinks) to hide malware from task managers?",
    "options": [
      "Process Environment Block Hollowing",
      "Direct Kernel Object Manipulation (DKOM)",
      "Asynchronous Procedure Call Injection",
      "Structured Exception Handler Overwrite"
    ],
    "answer": 1,
    "explanation": "DKOM (Direct Kernel Object Manipulation) involves modifying kernel data structures directly in memory\u2014such as unlinking an _EPROCESS block from ActiveProcessLinks\u2014to hide a running process without terminating it."
  },
  {
    "id": 175,
    "question": "What open-source software tool written by Brian Carrier is widely used as a graphical forensic analysis interface built on top of The Sleuth Kit (TSK)?",
    "options": [
      "FTK Imager",
      "Guymager",
      "Autopsy",
      "X-Ways Forensics"
    ],
    "answer": 2,
    "explanation": "Autopsy is a premier open-source digital forensic platform that provides an extensible graphical interface to The Sleuth Kit (TSK) library, featuring hash lookups, keyword searching, and web artifact parsing."
  },
  {
    "id": 176,
    "question": "What Linux GUI forensic acquisition tool is renowned for its speed, stability, and support for raw and E01 image acquisition across suspect drives?",
    "options": [
      "PhotoRec",
      "Foremost",
      "GParted",
      "Guymager"
    ],
    "answer": 3,
    "explanation": "Guymager is an efficient, open-source, multi-threaded disk cloning and imaging tool for Linux with a Qt user interface, natively supporting raw (dd) and E01 (Expert Witness) formats."
  },
  {
    "id": 177,
    "question": "In live memory forensics, what is the 'Pagefile.sys' and why is it forensically valuable when physical RAM is insufficient or cleared?",
    "options": [
      "A hidden system file where the OS swaps memory pages from RAM to disk, retaining remnants of active processes and decrypted strings",
      "A volatile hardware register storing CPU virtual memory page table base addresses (CR3)",
      "A temporary cache storing Master File Table attribute records during unexpected reboots",
      "An encrypted journal where Windows Defender caches active memory malware signatures"
    ],
    "answer": 0,
    "explanation": "Pagefile.sys acts as virtual memory swap space. When physical RAM is pressured, memory pages are written to pagefile.sys, preserving sensitive process memory, passwords, and chat messages on disk."
  },
  {
    "id": 178,
    "question": "What is the forensic significance of the Windows hibernation file 'hiberfil.sys'?",
    "options": [
      "It stores the Volume Shadow Copy differential delta blocks created during idle CPU cycles",
      "It holds a compressed physical memory image of the machine recorded by the kernel when entering hibernation (S4 power state)",
      "It logs all administrative commands entered into the Windows Recovery Environment (WinRE)",
      "It indexes the cryptographic hash values of all compiled system executable binaries"
    ],
    "answer": 1,
    "explanation": "When Windows hibernates (S4), the kernel writes the active state of physical RAM into 'hiberfil.sys' (compressed with Xpress). Examiners decompress it using Volatility or VolUtility to analyze complete RAM state."
  },
  {
    "id": 179,
    "question": "Which command line tool in The Sleuth Kit (TSK) extracts and parses details of a specific Inode or MFT record without needing the full path?",
    "options": [
      "ils",
      "fls",
      "istat",
      "mmstat"
    ],
    "answer": 2,
    "explanation": "'istat' displays the uid, gid, mode, size, link count, allocation status, and all MACB timestamps of a specific metadata structure (inode in Linux, MFT entry in NTFS)."
  },
  {
    "id": 180,
    "question": "Which command line tool in The Sleuth Kit (TSK) displays the partition layout and scheme of an image (e.g. MBR or GPT table)?",
    "options": [
      "fsstat",
      "fls",
      "img_stat",
      "mmls"
    ],
    "answer": 3,
    "explanation": "'mmls' displays the layout of the partition system (Master Boot Record, GUID Partition Table, Sun slice table), detailing starting and ending sector offsets and allocation status."
  },
  {
    "id": 181,
    "question": "Which command line tool in The Sleuth Kit (TSK) displays the contents of a specific disk data unit (block or cluster) in raw hexadecimal and ASCII format?",
    "options": [
      "blkcat (or dcat)",
      "istat",
      "icat",
      "ils"
    ],
    "answer": 0,
    "explanation": "'blkcat' (formerly dcat) extracts and displays the data content of a specific disk data unit (block/cluster) from a file system, invaluable for examining slack space or unallocated clusters."
  },
  {
    "id": 182,
    "question": "In network traffic analysis, what is the three-way handshake sequence required to establish a reliable Transmission Control Protocol (TCP) connection?",
    "options": [
      "ACK -> SYN-ACK -> FIN",
      "SYN -> SYN-ACK -> ACK",
      "SYN -> ACK -> RST",
      "RST -> SYN -> SYN-ACK"
    ],
    "answer": 1,
    "explanation": "TCP establishes connections via a 3-way handshake: Client sends SYN -> Server responds with SYN-ACK -> Client replies with ACK, transitioning the socket into the ESTABLISHED state."
  },
  {
    "id": 183,
    "question": "In network packet forensics, what does a TCP RST (Reset) packet indicate?",
    "options": [
      "A graceful teardown acknowledging that both endpoints have completed transmitting data payloads",
      "A request to renegotiate cipher suites during an active Transport Layer Security handshake",
      "An immediate and abrupt termination of the TCP connection, sent when a port is closed or connection is refused",
      "A flow-control notification indicating that the receiving socket buffer is completely exhausted"
    ],
    "answer": 2,
    "explanation": "A TCP RST flag abruptly terminates a connection, sent when a packet arrives for a closed port, an invalid sequence number is received, or a firewall/IDS terminates a session."
  },
  {
    "id": 184,
    "question": "What Wireshark display filter isolates all DNS queries and responses originating from or addressed to a specific IP address (e.g., 192.168.1.50)?",
    "options": [
      "udp.port == 53 || arp.src == 192.168.1.50",
      "http.request && ip.host == 192.168.1.50",
      "tcp.flags.syn == 1 && ip.dst == 192.168.1.50",
      "dns && ip.addr == 192.168.1.50"
    ],
    "answer": 3,
    "explanation": "In Wireshark: 'dns && ip.addr == 192.168.1.50' filters packets where the protocol is DNS and either the source or destination IP address matches 192.168.1.50."
  },
  {
    "id": 185,
    "question": "In Wireshark, what does the 'Follow TCP Stream' feature accomplish during traffic analysis?",
    "options": [
      "Reassembles fragmented TCP segments and displays the application-layer payload data in human-readable conversational order",
      "Calculates SHA-256 cryptographic hashes for each raw physical layer Ethernet frame",
      "Traces the physical path of fiber optic cables using Internet Control Message Protocol (ICMP)",
      "Automatically cracks encrypted WPA3 enterprise Wi-Fi passwords using dictionary attacks"
    ],
    "answer": 0,
    "explanation": "'Follow TCP Stream' reconstructs the bidirectional application-layer conversation between client and server, stripping protocol headers and showing payloads in chronological order."
  },
  {
    "id": 186,
    "question": "What is the Wireshark display filter expression used to detect potential SYN flood Denial of Service attacks?",
    "options": [
      "tcp.flags.reset == 1 && tcp.port == 80",
      "tcp.flags.syn == 1 && tcp.flags.ack == 0",
      "icmp.type == 8 && ip.ttl < 32",
      "udp.length > 1460 && dns.flags.response == 1"
    ],
    "answer": 1,
    "explanation": "A SYN flood sends a flood of SYN packets without completing handshakes. Filtering by 'tcp.flags.syn == 1 && tcp.flags.ack == 0' isolates raw connection initialization requests."
  },
  {
    "id": 187,
    "question": "What is the network protocol capture file format that succeeded the classic libpcap format, supporting multiple interfaces and packet metadata?",
    "options": [
      "Network Capture Object (NCO)",
      "Extended Network Stream (ENS)",
      "PCAP Next Generation (PCAPNG)",
      "Ethernet Frame Archive (EFA)"
    ],
    "answer": 2,
    "explanation": "PCAPNG (PCAP Next Generation) replaced legacy PCAP (.pcap). It supports capturing from multiple interfaces simultaneously, packet comments, interface statistics, and custom metadata."
  },
  {
    "id": 188,
    "question": "What open-source command-line tool is standard for capturing network packets on Linux/Unix systems directly from a network interface?",
    "options": [
      "netcat",
      "nmap",
      "traceroute",
      "tcpdump"
    ],
    "answer": 3,
    "explanation": "'tcpdump' is the premier Unix command-line packet capture tool based on libpcap, allowing examiners to filter, capture, and write network traffic to PCAP files."
  },
  {
    "id": 189,
    "question": "What command line flag in tcpdump instructs the tool to capture full raw packet payloads without truncating at default snapshot lengths?",
    "options": [
      "-s 0 (or --snapshot-length=0)",
      "-v -v",
      "-n -n",
      "-w raw.cap"
    ],
    "answer": 0,
    "explanation": "In tcpdump, '-s 0' sets the snapshot length to unlimited (or default 65535 / 262144 bytes in modern versions), ensuring the entire payload of each packet is captured."
  },
  {
    "id": 190,
    "question": "What forensic information is extracted from an email's 'Authentication-Results:' header field?",
    "options": [
      "The private cryptographic signing key utilized by the originating Mail Submission Agent",
      "Consolidated verification status of SPF, DKIM, and DMARC checks performed by the receiving Mail Transfer Agent",
      "The complete list of all hidden BCC recipients included in the original email draft",
      "The physical serial number and MAC address of the sender's network interface card"
    ],
    "answer": 1,
    "explanation": "The 'Authentication-Results:' header is added by the receiving mail gateway, summarizing the authentication outcomes (e.g. 'spf=pass', 'dkim=pass', 'dmarc=pass') along with the evaluated domains."
  },
  {
    "id": 191,
    "question": "What does a 'DMARC policy of p=reject' instruct a receiving mail server to do when an email fails both SPF and DKIM alignment?",
    "options": [
      "Deliver the email message directly to the recipient's primary inbox marked with an informational flag",
      "Redirect the email message to the spam or junk quarantine folder without notifying the sender",
      "Completely block and reject the email message at the SMTP gateway, refusing delivery to the recipient mailbox",
      "Strip all email attachments while forwarding the plain text body to the local system administrator"
    ],
    "answer": 2,
    "explanation": "DMARC policies: 'p=none' monitors and reports only; 'p=quarantine' directs failing emails to Spam/Junk; 'p=reject' instructs receiving servers to completely reject delivery at the SMTP transaction level."
  },
  {
    "id": 192,
    "question": "What is the forensic purpose of analyzing the 'X-Originating-IP' or 'X-Sender-IP' header in webmail and enterprise email headers?",
    "options": [
      "Tracing the IP address of the internal database server hosting the recipient's Exchange mailbox",
      "Determining the public gateway IP of the root Domain Name System root name server",
      "Verifying the cryptographic integrity of the Transport Layer Security cipher negotiation",
      "Identifying the true client IP address of the user who composed and submitted the email via web interface or MUA"
    ],
    "answer": 3,
    "explanation": "Many webmail providers and enterprise MTAs inject 'X-Originating-IP' or 'X-Sender-IP' to record the public IP address of the client device that connected to submit the message."
  },
  {
    "id": 193,
    "question": "In digital forensic analysis of Windows PowerShell, where is the console command history persistently stored on disk for each user?",
    "options": [
      "C:\\Users\\<Username>\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadLine\\ConsoleHost_history.txt",
      "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules\\History.log",
      "C:\\ProgramData\\Microsoft\\Windows\\PowerShell\\Transcription\\History.dat",
      "C:\\Users\\<Username>\\AppData\\Local\\Temp\\PowerShellHistory.txt"
    ],
    "answer": 0,
    "explanation": "PSReadLine stores persistent command histories for PowerShell in '%APPDATA%\\Microsoft\\Windows\\PowerShell\\PSReadLine\\ConsoleHost_history.txt', retaining entered scripts and commands across reboots."
  },
  {
    "id": 194,
    "question": "What Windows group policy feature enables recording of full script blocks and executed code, even when obfuscated or dynamic, for PowerShell 5.0+?",
    "options": [
      "Module Logging (Event ID 4103)",
      "Script Block Logging (Event ID 4104)",
      "Transcription Logging (Event ID 4100)",
      "Process Auditing (Event ID 4688)"
    ],
    "answer": 1,
    "explanation": "PowerShell Script Block Logging (Security/Operational Event ID 4104) captures the full content of code blocks as they are executed, capturing de-obfuscated script content before execution."
  },
  {
    "id": 195,
    "question": "What is the forensic significance of the Windows 'WER' (Windows Error Reporting) directory located in AppData or ProgramData?",
    "options": [
      "It holds encrypted BitLocker recovery certificates used during automated system diagnostic recoveries",
      "It records network interface promiscuous mode alerts triggered by local packet inspection engines",
      "It stores crash dumps and metadata (.wer files) created during application crashes, recording process paths and loaded modules",
      "It logs all administrative attempts to modify system clock parameters via Windows Time service"
    ],
    "answer": 2,
    "explanation": "Windows Error Reporting stores crash reports and user-mode memory dumps in WER folders. These files reveal application crashes, malicious binary execution, faulting modules, and loaded libraries."
  },
  {
    "id": 196,
    "question": "In database forensics, what occurs when an SQLite database is subjected to a 'VACUUM' command?",
    "options": [
      "The database encrypts all SQL table columns using 256-bit Advanced Encryption Standard keys",
      "The database exports all table structures and rows into comma-separated value ASCII text files",
      "The database reverts all uncommitted write-ahead logging transactions back into rollback journals",
      "The database reconstructs itself, purging the freelist and permanently erasing recoverable remnants of deleted records"
    ],
    "answer": 3,
    "explanation": "Executing VACUUM repacks the SQLite database to reclaim unused space. It empties the freelist, overwriting unused pages and destroying recoverable deleted records."
  },
  {
    "id": 197,
    "question": "What is 'Anti-Forensics' in digital forensics jurisprudence?",
    "options": [
      "Deliberate technical actions taken to alter, erase, obfuscate, or hinder the identification, collection, and analysis of digital evidence",
      "The legal practice of defending suspects by challenging the educational credentials of law enforcement experts",
      "The automated calibration testing performed on forensic duplicate hardware imaging workstations",
      "The physical decommissioning and recycling of obsolete digital evidence media under ISO 14001"
    ],
    "answer": 0,
    "explanation": "Anti-forensics refers to any method, software tool, or technique designed to thwart forensic examination\u2014including data destruction, timestomping, encryption, steganography, and log clearing."
  },
  {
    "id": 198,
    "question": "What legal doctrine governs the requirement that evidence presented in court must be the original item or an authentic, verified equivalent?",
    "options": [
      "Exclusionary Rule",
      "Best Evidence Rule",
      "Fruit of the Poisonous Tree",
      "Plain View Doctrine"
    ],
    "answer": 1,
    "explanation": "The Best Evidence Rule requires that the original evidence (or an authenticated, bit-stream duplicate with identical hash) be presented in court to prove the content of a document or recording."
  },
  {
    "id": 199,
    "question": "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of Indian Evidence Act, 1872), what must accompany electronic records in court?",
    "options": [
      "A notarized receipt from the manufacturer verifying the hardware serial number of the central processing unit",
      "A certified copy of the commercial software license utilized by the forensic laboratory workstations",
      "A formal certificate signed by a person in official management or lawful control of the device, identifying the hash and confirming device operation",
      "A photographic printout of the server room rack where the primary physical hard drive was seized"
    ],
    "answer": 2,
    "explanation": "Section 63 BSA 2023 mandates a signed certificate describing the manner in which the electronic record was produced, identifying the hash, and confirming the device was operating properly."
  },
  {
    "id": 200,
    "question": "What is the designated evidentiary role of a contemporaneous Forensic Lab Notebook / Case Examination Worksheet during digital forensics operations?",
    "options": [
      "Recording personal financial invoices and billing statements submitted to prosecuting law enforcement agencies",
      "Storing the plain text master passwords for seized commercial password manager databases",
      "Certifying the educational degrees and annual training hours completed by junior lab technicians",
      "Documenting all tools used, software version numbers, command lines executed, date-time stamps, and unexpected observations in real time"
    ],
    "answer": 3,
    "explanation": "A contemporaneous case notebook or worksheet records every step of the examination in real time (tools, version, commands, findings), ensuring reproducibility and defense under cross-examination."
  }
];

if (typeof window !== 'undefined') {
  window.book2MCQs = book2MCQs;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = book2MCQs;
}
