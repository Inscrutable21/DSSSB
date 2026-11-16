// Book 3 Spreads Part 1: Topics 1–5 (Spreads 0–9, Pages 1–20)
// High-yield DSSSB Cyber Forensic notes: RAM & Memory Forensics

module.exports = [
  // =========================================================================
  // TOPIC 1: RAM VOLATILITY, HARDWARE FOUNDATIONS & ADDRESS SPACES (Spreads 0 & 1, Pages 1–4, Q1–Q10)
  // =========================================================================
  // Spread 0: Part 1 - Physical RAM Volatility & The Order of Volatility (Pages 1–2)
  {
    spreadId: 0,
    left: {
      pageNumber: 1,
      runningHead: 'CH. 1 • RAM FORENSICS: VOLATILITY & CRITICALITY',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 1 • Topic 1: RAM Volatility & Architecture (Part 1)</span>
      <h2>The Ephemeral Nature of Volatile Memory</h2>
    </div>

    <div class="intro-abstract">
      <p><strong>Memory Forensics (RAM Analysis)</strong> is the specialized discipline of capturing and analyzing the volatile physical memory of an energized computing system. Unlike post-mortem hard drive forensics where data resides permanently on magnetic or flash media, physical Random Access Memory (RAM) represents a dynamic, fleeting snapshot of active system execution.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Why Memory Forensics Exists: What Lives Exclusively in RAM (Q1)</span>
      <p>Modern advanced persistent threats (APTs), ransomware operators, and cybercriminals actively avoid touching the physical hard disk to evade traditional signature-based antivirus scanners. Critical evidence exists solely in volatile memory:</p>
      <ul class="forensic-list">
        <li><strong>Full Volume Encryption Keys (Q1):</strong> Plaintext AES-256 keys for BitLocker (FVEK), FileVault 2, TrueCrypt, and VeraCrypt reside in kernel pool memory while volumes are mounted.</li>
        <li><strong>Fileless & Injected Malware:</strong> Reflective DLLs, Process Hollowing payloads, and Cobalt Strike beacons executing entirely in unmapped memory pages without an on-disk binary.</li>
        <li><strong>Ephemeral Network Sockets:</strong> Active TCP/UDP connections, listening ports, remote command-and-control (C2) IP addresses, and reverse shells.</li>
        <li><strong>Unencrypted Communications:</strong> Plaintext user messages from Signal, WhatsApp Web, and Telegram, along with in-memory browser session cookies and passwords.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Physical Mechanics of Dynamic RAM (DRAM) (Q1)</span>
      <p>Modern computers utilize <strong>Dynamic RAM (DRAM)</strong> cells, where each bit of data is stored as an electrical charge in a microscopic capacitor paired with a field-effect transistor (MOSFET):</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Capacitor Leakage Physics</span>
            <span class="statute-tag">Hardware Reality</span>
          </div>
          <p>DRAM capacitors leak their electrical charge rapidly (within <strong>milliseconds</strong>). The memory controller must continuously issue <strong>refresh cycles</strong> (typically every 64 milliseconds) to recharge the capacitors. <em>The moment system power is cut or the plug is pulled, refresh cycles terminate immediately, and stored electrical charges dissipate into entropy!</em></p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">The Cold Boot Attack Phenomenon (Q2)</span>
            <span class="statute-tag">Physical Phenomenon</span>
          </div>
          <p>Discovered by Halderman et al. (2008): Capacitor charge leakage is temperature-dependent. If DRAM chips are rapidly chilled using inverted compressed air or liquid nitrogen (-50°C), data decay slows dramatically, retaining readable data for several minutes after power removal, allowing physical chip transplanting to extract keys.</p>
        </div>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 2,
      runningHead: 'CH. 1 • ORDER OF VOLATILITY & RFC 3227',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 1 (Part 1 Continued) • Standards & Triage Principles</span>
      <h2>RFC 3227: The Sacred Order of Volatility</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The RFC 3227 Order of Volatility Hierarchy (Q3)</span>
      <p>When an incident responder arrives at a live, running compromised system, evidence collection must proceed in strict order from the <strong>most volatile to the least volatile</strong> component:</p>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Evidentiary Subsystem</th>
            <th>Lifespan & Evidentiary Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1 (Highest)</strong></td>
            <td><strong>CPU Registers & Cache (L1, L2, L3) (Q3)</strong></td>
            <td>Nanoseconds to microseconds. Instruction pointers (EIP/RIP), call stacks, active CPU flags.</td>
          </tr>
          <tr>
            <td><strong>2</strong></td>
            <td><strong>Routing Tables, ARP Cache, Process Tables, Kernel Memory</strong></td>
            <td>Milliseconds to seconds. Live network sockets, active TCP state machines, kernel data structures.</td>
          </tr>
          <tr>
            <td><strong>3</strong></td>
            <td><strong>Physical Memory (RAM) (Q3)</strong></td>
            <td>Milliseconds without power. Entire active operating system state, encryption keys, decrypted credentials.</td>
          </tr>
          <tr>
            <td><strong>4</strong></td>
            <td><strong>Temporary File Systems / Swap Space</strong></td>
            <td>Minutes to hours. Virtual memory paging files (<code>pagefile.sys</code>), hibernation dumps (<code>hiberfil.sys</code>).</td>
          </tr>
          <tr>
            <td><strong>5</strong></td>
            <td><strong>Non-Volatile Hard Disks / Solid State Drives (SSDs)</strong></td>
            <td>Days to years. File systems (NTFS, EXT4, APFS), master file tables, unallocated space.</td>
          </tr>
          <tr>
            <td><strong>6 (Lowest)</strong></td>
            <td><strong>Remote Logging Data & Physical Archival Media</strong></td>
            <td>Months to decades. SIEM event streams, backup magnetic tapes, optical disks.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">4. The Golden Rule of Live Triage</span>
      <div class="statute-card card-amber">
        <p>⚠️ <strong>Never Pull the Power Cord on an Encrypted System:</strong> Powering off a BitLocker or VeraCrypt-encrypted laptop instantly flushes the master AES keys from DRAM! The drive locks immediately, rendering offline disk acquisition completely unreadable.</p>
      </div>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 1 (Part 1/2) Complete.</strong> Turn page for Physical vs Virtual Memory, MMU &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="0" onclick="window.openMCQForSpread(0)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q1–Q10) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 1: Part 2 - Physical vs Virtual Address Space & Paging Foundations (Pages 3–4)
  {
    spreadId: 1,
    left: {
      pageNumber: 3,
      runningHead: 'CH. 1 • PHYSICAL VS VIRTUAL MEMORY SPACES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 1 • Topic 1: RAM Volatility & Architecture (Part 2)</span>
      <h2>Physical RAM vs Virtual Address Spaces</h2>
    </div>

    <div class="intro-abstract">
      <p>Modern microprocessors enforce a strict separation between raw physical hardware memory and the virtual address spaces exposed to applications. Understanding address translation is the bedrock of memory analysis.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Why Virtual Memory Exists: Isolation & Contiguity (Q4)</span>
      <p>In early computing (MS-DOS), applications accessed physical memory directly. If program A crashed or wrote to an invalid address, it corrupted program B or the operating system kernel. Modern operating systems implement <strong>Virtual Memory</strong>:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Physical Address Space</span>
            <span class="statute-tag">Hardware Silicon</span>
          </div>
          <p>• The real, physical electrical addresses wired to the DRAM memory controller pins.<br>
          • Addressed linearly from <code>0x00000000</code> to the maximum capacity of installed RAM modules.<br>
          • <strong>Forensic Target:</strong> Raw memory acquisitions (DD, WinPmem) capture this physical address space.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Virtual Address Space (VAS) (Q4)</span>
            <span class="statute-tag">Process Sandbox</span>
          </div>
          <p>• Every process receives an independent, isolated, private virtual memory layout.<br>
          • <strong>32-Bit Windows:</strong> 4 GB total space (2 GB User Mode / 2 GB Kernel Mode).<br>
          • <strong>64-Bit Windows (x64):</strong> 16 Terabytes (or 128 TB / 256 TB on modern architectures) partitioned equally between User Mode and Kernel Mode.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Memory Management Unit (MMU) & Paging Mechanics (Q5, Q6)</span>
      <p>How does the CPU translate a virtual pointer into a real physical memory block?</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Paging & The Directory Table Base (CR3) (Q5)</span>
          <span class="statute-tag">Hardware Translation</span>
        </div>
        <p>• Memory is partitioned into fixed-size chunks called <strong>Pages</strong> (typically <strong>4 Kilobytes = 4,096 bytes</strong>).<br>
        • The <strong>Memory Management Unit (MMU)</strong> on the CPU chip automatically translates virtual addresses to physical page frames using multi-level hierarchical <strong>Page Tables</strong>.<br>
        • <strong>The CR3 Control Register:</strong> The CPU's physical <code>CR3</code> register holds the physical base address of the top-level page directory for the currently executing process. In memory forensics, identifying a process's <code>CR3</code> (Directory Table Base) is mandatory to reconstruct its private virtual memory space!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 4,
      runningHead: 'CH. 1 • DIRECT MEMORY ACCESS & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 1 (Part 2 Continued) • DMA Architecture & Traps</span>
      <h2>Direct Memory Access (DMA) & Topic 1 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Direct Memory Access (DMA) & Hardware Interception (Q7, Q8)</span>
      <p>High-speed expansion buses (PCI Express, Thunderbolt, FireWire) use <strong>Direct Memory Access (DMA)</strong> to read and write directly to physical DRAM without involving the CPU:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Forensic Double-Edged Sword (Q7, Q8)</span>
          <span class="statute-tag">Hardware Tapping</span>
        </div>
        <p>• <strong>Forensic Utility:</strong> Hardware devices (e.g. PCILeech) plug into PCIe or Thunderbolt ports and dump raw physical memory without running any software on the target OS, achieving zero software footprint.<br>
        • <strong>Malicious Threat:</strong> Attackers plug malicious Thunderbolt dongles into a locked corporate laptop, reading physical memory to steal BitLocker keys.<br>
        • <strong>Modern Defense:</strong> <strong>IOMMU (Input-Output MMU) / Kernel DMA Protection</strong> blocks unauthorized external PCIe devices from reading arbitrary physical memory ranges.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: RAM Volatility & Architecture (Q1–Q10)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (RFC 3227 Order):</strong> CPU Registers/Cache are the most volatile (Rank 1), followed by Network State/Routing tables (Rank 2), and Physical RAM (Rank 3) (Q3).<br>
        ⚠️ <strong>Trap 2 (CR3 Register Role):</strong> The CPU register storing the physical base address of the process page directory is <strong>CR3</strong> (DirectoryTableBase) (Q5).<br>
        ⚠️ <strong>Trap 3 (Standard Page Size):</strong> Standard virtual memory pages in x86/x64 architectures are strictly <strong>4 KB (4,096 bytes)</strong> (Q6).<br>
        ⚠️ <strong>Trap 4 (Cold Boot Physics):</strong> Cold boot attacks work because DRAM capacitors leak charge slowly over seconds/minutes when cooled, not because data is permanently saved to flash (Q2).<br>
        ⚠️ <strong>Trap 5 (Virtual Memory Bounds):</strong> User mode processes cannot read kernel memory directly because the CPU enforces privilege levels via page table permission bits (U/S bit) (Q4).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 1: RAM Volatility &amp; CPU Architecture?</strong>
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
  // TOPIC 2: ACQUISITION OF VOLATILE MEMORY (RAM): HARDWARE, DRIVERS & FORMATS (Spreads 2 & 3, Pages 5–8, Q11–Q20)
  // =========================================================================
  // Spread 2: Part 1 - Kernel-Mode Drivers & The Deprecation of \Device\PhysicalMemory (Pages 5–6)
  {
    spreadId: 2,
    left: {
      pageNumber: 5,
      runningHead: 'CH. 2 • MEMORY ACQUISITION: DRIVERS & MECHANISMS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 2 • Topic 2: Memory Acquisition Tools & Drivers (Part 1)</span>
      <h2>Live Memory Acquisition Mechanics & Kernel Drivers</h2>
    </div>

    <div class="intro-abstract">
      <p>Capturing volatile memory requires communicating directly with operating system kernel memory controllers. The acquisition process must adhere strictly to forensic principles: minimizing software footprint, preventing evidence contamination, and verifying cryptographic integrity.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Death of \\Device\\PhysicalMemory (Q11)</span>
      <p>In legacy Windows versions (Windows NT, 2000, XP SP1), user-mode applications running with administrator privileges could open a direct handle to a kernel object named <code>\\Device\\PhysicalMemory</code>:</p>
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">The Legacy Flaw</span>
            <span class="statute-tag">User-Mode Access</span>
          </div>
          <p>User-mode tools simply issued <code>CreateFile("\\\\.\\PhysicalMemory")</code> and read RAM like an ordinary file. However, malware abused this handle to overwrite kernel memory and inject rootkits directly from user space.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Windows Security Hardening (Q11)</span>
            <span class="statute-tag">Windows Server 2003 SP1+</span>
          </div>
          <p>Microsoft stripped user-mode write and read access to <code>\\Device\\PhysicalMemory</code>. <em>On all modern Windows operating systems, acquiring physical memory requires loading a signed, custom kernel-mode device driver (.sys) operating at Ring 0!</em></p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Modern Software Acquisition Tools & Kernel Drivers (Q12)</span>
      <p>Forensic examiners deploy specialized live acquisition tools that load transient kernel drivers:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Tool Name</th>
            <th>Underlying Kernel Driver / Architecture</th>
            <th>Forensic Capabilities & Output</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>WinPmem (Rekall / Velociraptor) (Q12)</strong></td>
            <td>Open-source signed kernel driver (<code>winpmem.sys</code>).</td>
            <td>Supports raw DD, AFF4 streams, and crash dump formats. Exposes physical memory via multiple acquisition modes (MMAP, PTE manipulation).</td>
          </tr>
          <tr>
            <td><strong>DumpIt (Comae Technologies / Magnet) (Q12)</strong></td>
            <td>Lightweight executable bundling an embedded signed driver.</td>
            <td>Generates raw <code>.raw</code> images or Microsoft Crash Dump formats with a single click. Ideal for rapid emergency incident triage.</td>
          </tr>
          <tr>
            <td><strong>FTK Imager (Live Memory) (Q12)</strong></td>
            <td>Commercial proprietary driver.</td>
            <td>Dumps physical RAM and optionally captures the active pagefile (<code>pagefile.sys</code>) in a single acquisition session.</td>
          </tr>
          <tr>
            <td><strong>LiME (Linux Memory Extractor) (Q10)</strong></td>
            <td>Loadable Kernel Module (LKM - <code>lime.ko</code>).</td>
            <td>The undisputed gold standard for Linux/Android memory acquisition. Can stream raw memory across the network over TCP to avoid writing to disk!</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 6,
      runningHead: 'CH. 2 • MEMORY FOOTPRINT & HEISENBERG EFFECT',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 2 (Part 1 Continued) • Evidence Integrity & Footprint</span>
      <h2>Forensic Footprint & The Observer Effect</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Heisenberg Principle in Memory Forensics (Q13)</span>
      <p>In physical hard drive forensics, using a hardware write-blocker guarantees that zero bits are altered on the suspect disk. <strong>In live memory forensics, zero contamination is physically impossible!</strong></p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">The Observer Effect / Memory Footprint (Q13)</span>
          <span class="statute-tag">Contamination Triage</span>
        </div>
        <p>• To acquire memory, the examiner must run an acquisition executable.<br>
        • Running the tool allocates new memory pages, loads DLLs, alters the CPU register states, creates new processes in <code>_EPROCESS</code>, and modifies kernel cache lines.<br>
        • <strong>Forensic Mandate:</strong> The examiner must minimize the tool's <strong>footprint</strong>: run portable command-line tools directly from a forensic USB drive, avoid launching graphical desktop interfaces, and never save the memory dump to the evidence system's local hard drive!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Acquisition Output Targets</span>
      <p>The raw memory dump must ALWAYS be written to:</p>
      <ul class="forensic-list">
        <li><strong>External Dedicated Storage:</strong> A fast external SSD or forensic storage drive connected via USB 3.0 or Type-C.</li>
        <li><strong>Network Socket Stream:</strong> Streaming over netcat or LiME TCP directly to an investigator workstation, leaving zero bytes written to disk.</li>
      </ul>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 2 (Part 1/2) Complete.</strong> Turn page for AFF4 vs Raw DD, Hibernation Files &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="1" onclick="window.openMCQForSpread(1)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q11–Q20) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 3: Part 2 - AFF4 Container Format, Hibernation Files & Exam Traps (Pages 7–8)
  {
    spreadId: 3,
    left: {
      pageNumber: 7,
      runningHead: 'CH. 2 • ACQUISITION FORMATS & HIBERNATION',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 2 • Topic 2: Memory Acquisition Tools & Drivers (Part 2)</span>
      <h2>Forensic Containers: Raw DD, AFF4 & Crash Dumps</h2>
    </div>

    <div class="intro-abstract">
      <p>Acquiring memory is not limited to flat raw binary images. Advanced forensic container formats preserve crucial hardware memory mapping ranges, physical memory gaps, and acquisition metadata.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Comparing Memory Image Formats (Q14, Q15)</span>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Format</th>
            <th>File Structure & Technical Features</th>
            <th>Forensic Limitations & Strengths</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Raw DD (.raw / .dd / .dmp)</strong></td>
            <td>Flat, uncompressed bitstream copy of physical memory addresses.</td>
            <td>Universal compatibility across all forensic frameworks (Volatility, Rekall). Does not store memory hole maps or compression.</td>
          </tr>
          <tr>
            <td><strong>Advanced Forensic Format 4 (AFF4) (Q14)</strong></td>
            <td>Standardized open container (ZIP-based) supporting block-level hashing, multi-stream storage, and transparent LZ4/snappy compression.</td>
            <td>Stores physical memory maps, sparse memory hole ranges, acquisition logs, and hardware serial numbers in a single verifiable file.</td>
          </tr>
          <tr>
            <td><strong>Microsoft Crash Dump (.dmp)</strong></td>
            <td>Native Windows kernel crash structure generated by Blue Screen of Death (BSOD) or manual keystroke crash (<code>Ctrl+ScrollLock</code>).</td>
            <td>Contains header records with <code>DirectoryTableBase</code> (CR3), active process listings, and CPU contexts directly accessible via WinDbg.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. Dead-Box Memory Goldmines: hiberfil.sys & pagefile.sys (Q16)</span>
      <p>If an investigator arrives at a crime scene where the computer is already powered off, can memory evidence still be recovered?</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Hibernation File: hiberfil.sys (Q16)</span>
            <span class="statute-tag">Compressed RAM on Disk</span>
          </div>
          <p>• When Windows enters hibernation, the kernel writes the entire active physical RAM into <code>C:\\hiberfil.sys</code> and powers off.<br>
          • Compressed using proprietary algorithms (LZNT1 or Xpress).<br>
          • Volatility 3 can parse <code>hiberfil.sys</code> directly or decompress it into a raw memory image using tools like <code>volatility imagecopy</code>!</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Paging File: pagefile.sys (Q16)</span>
            <span class="statute-tag">Paged Virtual Memory</span>
          </div>
          <p>• Holds inactive virtual memory pages swapped out from RAM to free physical DRAM space.<br>
          • Contains historical remnants of closed applications, passwords, web searches, and injected scripts that executed hours before seizure.</p>
        </div>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 8,
      runningHead: 'CH. 2 • HARDWARE MEMORY RANGES & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 2 (Part 2 Continued) • Hardware Mapping & Traps</span>
      <h2>Physical Memory Holes & Topic 2 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Physical Memory Holes & MMIO Space (Q17, Q18)</span>
      <p>In physical hardware architecture, installed RAM is not a single contiguous block of addresses. Motherboard chipsets reserve address ranges for <strong>Memory-Mapped I/O (MMIO)</strong>, PCI configuration registers, and firmware ROMs (e.g., the famous 3.5 GB to 4.0 GB PCI hole in 32-bit systems). Advanced tools query the Windows API <code>ZwQuerySystemInformation</code> (Class <code>SystemMemoryListInformation</code>) to map valid RAM ranges and skip non-RAM hardware holes.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Memory Acquisition (Q11–Q20)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Kernel Driver Requirement):</strong> On modern Windows, live RAM acquisition cannot be done via user-mode APIs; it strictly requires a signed <strong>Ring 0 kernel-mode driver (.sys)</strong> (Q11).<br>
        ⚠️ <strong>Trap 2 (AFF4 Format):</strong> Advanced Forensic Format 4 (AFF4) is an open container supporting compression, sparse physical memory holes, and multi-stream storage (Q14).<br>
        ⚠️ <strong>Trap 3 (Linux Acquisition):</strong> The primary Loadable Kernel Module (LKM) for live Linux RAM acquisition is <strong>LiME (lime.ko)</strong> (Q10).<br>
        ⚠️ <strong>Trap 4 (Footprint Rule):</strong> An examiner must minimize memory footprint by never saving the RAM dump to the local hard drive under examination (Q13).<br>
        ⚠️ <strong>Trap 5 (Dead Memory Sources):</strong> Physical RAM contents can be recovered from powered-off disks by extracting and decompressing <strong>hiberfil.sys</strong> (Q16).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 2: Memory Acquisition Tools &amp; Drivers?</strong>
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
  // TOPIC 3: OVERVIEW OF MEMORY STRUCTURES: PAGING & WINDOWS _EPROCESS BLOCK (Spreads 4 & 5, Pages 9–12, Q21–Q30)
  // =========================================================================
  // Spread 4: Part 1 - Multi-Level Paging (x86 vs x64 PML4) & Page Faults (Pages 9–10)
  {
    spreadId: 4,
    left: {
      pageNumber: 9,
      runningHead: 'CH. 3 • MEMORY STRUCTURES: MULTI-LEVEL PAGING',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 3 • Topic 3: Paging & _EPROCESS Structures (Part 1)</span>
      <h2>Multi-Level Paging & Virtual Address Translation</h2>
    </div>

    <div class="intro-abstract">
      <p>To analyze a memory dump, a forensic tool cannot treat the image as a random stream of bytes. It must emulate the CPU's internal Memory Management Unit (MMU) to traverse multi-level page tables and resolve virtual pointers into concrete data structures.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Virtual Address Translation: x86 vs x64 Architecture (Q21, Q22)</span>
      <p>How the CPU translates a 64-bit virtual memory address into a physical memory address:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">The 4-Level x64 Translation Hierarchy (PML4) (Q22)</span>
          <span class="statute-tag">48-Bit Canonical Addressing</span>
        </div>
        <p>In 64-bit Windows, virtual addresses use 48 bits (bits 48–63 are sign-extended). The 48 bits are partitioned into five discrete offset indexes:</p>
        <p>1. <strong>CR3 Register:</strong> Points to the physical base of the <strong>PML4 (Page Map Level 4)</strong> table (holds 512 entries).<br>
        2. <strong>Bits 47–39 (9 bits):</strong> Index into the <strong>PML4</strong> table &rarr; points to Page Directory Pointer Table (PDPT).<br>
        3. <strong>Bits 38–30 (9 bits):</strong> Index into the <strong>PDPT</strong> &rarr; points to Page Directory (PD).<br>
        4. <strong>Bits 29–21 (9 bits):</strong> Index into the <strong>Page Directory</strong> &rarr; points to Page Table (PT).<br>
        5. <strong>Bits 20–12 (9 bits):</strong> Index into the <strong>Page Table</strong> &rarr; points to the physical <strong>Page Frame</strong>.<br>
        6. <strong>Bits 11–0 (12 bits):</strong> Physical byte offset within the 4,096-byte (4 KB) page frame!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Page Faults: Hard vs Soft Faults (Q23)</span>
      <p>When an executing thread references a virtual address whose Page Table Entry (PTE) has its <strong>Valid bit set to 0</strong>, the CPU generates an interrupt known as a <strong>Page Fault (Interrupt 14)</strong>:</p>
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">Soft Page Fault (Minor Fault)</span>
            <span class="statute-tag">In-RAM Resolution</span>
          </div>
          <p>The requested page is already present in physical RAM (e.g. in the standby list, modified list, or shared memory), requiring only page table linkage without disk I/O.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Hard Page Fault (Major Fault) (Q23)</span>
            <span class="statute-tag">Disk I/O Required</span>
          </div>
          <p>The page has been swapped out to disk (<code>pagefile.sys</code>) or resides in an unmapped file on the file system. The kernel must read the data from disk into RAM.</p>
        </div>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 10,
      runningHead: 'CH. 3 • THE EXECUTIVE PROCESS BLOCK (_EPROCESS)',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 3 (Part 1 Continued) • Windows Kernel Internals</span>
      <h2>The Windows Executive Process Block (_EPROCESS)</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Anatomy of _EPROCESS: The Master Process Record (Q24, Q25)</span>
      <p>In Windows operating system internals, every running process is represented in kernel space by an opaque, complex data structure called the <strong>Executive Process Block (<code>_EPROCESS</code>)</strong>:</p>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Structure Member</th>
            <th>Type</th>
            <th>Forensic Meaning & Evidentiary Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>UniqueProcessId (Q24)</strong></td>
            <td><code>HANDLE</code></td>
            <td>The unique numerical Process Identifier (PID) assigned to the process.</td>
          </tr>
          <tr>
            <td><strong>InheritedFromUniqueProcessId (Q24)</strong></td>
            <td><code>HANDLE</code></td>
            <td>The Parent Process Identifier (PPID). Proves what process spawned this program.</td>
          </tr>
          <tr>
            <td><strong>ActiveProcessLinks (Q25)</strong></td>
            <td><code>LIST_ENTRY</code></td>
            <td>Circular doubly linked list linking all active processes in kernel memory. Parsed by <code>windows.pslist</code>!</td>
          </tr>
          <tr>
            <td><strong>DirectoryTableBase (Q25)</strong></td>
            <td><code>ULONG_PTR</code></td>
            <td>Holds the physical base address of the process's page directory (the process's <code>CR3</code> value).</td>
          </tr>
          <tr>
            <td><strong>ImageFileName (Q26)</strong></td>
            <td><code>UCHAR[15]</code></td>
            <td>Short ASCII executable name truncated to <strong>14 characters</strong> plus null terminator (e.g. <code>svchost.exe</code>).</td>
          </tr>
          <tr>
            <td><strong>CreateTime / ExitTime</strong></td>
            <td><code>LARGE_INTEGER</code></td>
            <td>64-bit FILETIME timestamps (100-nanosecond intervals since Jan 1, 1601). Proves exact process launch time.</td>
          </tr>
          <tr>
            <td><strong>Token (Q40)</strong></td>
            <td><code>EX_FAST_REF</code></td>
            <td>Pointer to the access token defining the security context (SYSTEM, Administrator, Standard User).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 3 (Part 1/2) Complete.</strong> Turn page for Doubly Linked Lists, DKOM &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="2" onclick="window.openMCQForSpread(2)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q21–Q30) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 5: Part 2 - Circular Doubly Linked Lists & Direct Kernel Object Manipulation (Pages 11–12)
  {
    spreadId: 5,
    left: {
      pageNumber: 11,
      runningHead: 'CH. 3 • ACTIVEPROCESSLINKS & PROCESS LISTS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 3 • Topic 3: Paging & _EPROCESS Structures (Part 2)</span>
      <h2>ActiveProcessLinks & Doubly Linked List Traversal</h2>
    </div>

    <div class="intro-abstract">
      <p>The Windows kernel tracks active processes using doubly linked list pointers embedded within each <code>_EPROCESS</code> structure. Forensic analysis tools traverse this chain to enumerate active programs.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Mechanics of the LIST_ENTRY Structure (Q27)</span>
      <p>The <code>ActiveProcessLinks</code> member inside <code>_EPROCESS</code> is a standard Windows <code>LIST_ENTRY</code> structure:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">LIST_ENTRY Pointers (Q27)</span>
            <span class="statute-tag">Forward & Backward</span>
          </div>
          <p>• <strong>Flink (Forward Link):</strong> Points to the <code>ActiveProcessLinks</code> structure of the next process in the list.<br>
          • <strong>Blink (Backward Link):</strong> Points to the <code>ActiveProcessLinks</code> structure of the previous process.<br>
          • <strong>Circular Topology:</strong> The list is circular, terminating at the head pointer maintained by the kernel variable <code>PsActiveProcessHead</code>.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">CONTAINING_RECORD Macro</span>
            <span class="statute-tag">Pointer Offset Math</span>
          </div>
          <p>Because <code>Flink</code> points to the <code>ActiveProcessLinks</code> field within the next <code>_EPROCESS</code>, the kernel subtracts the byte offset of <code>ActiveProcessLinks</code> (e.g., offset <code>0x448</code> in Windows 10 x64) to locate the base address of the next <code>_EPROCESS</code> structure.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Fatal Weakness: Direct Kernel Object Manipulation (DKOM) (Q28, Q29)</span>
      <p>Why can rootkits hide processes from Windows Task Manager and <code>windows.pslist</code>?</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Process Unlinking Attack (DKOM) (Q28)</span>
          <span class="statute-tag">Rootkit Evasion</span>
        </div>
        <p>• A kernel-mode rootkit modifies the <code>Flink</code> of the preceding process to point directly to the succeeding process, and adjusts the <code>Blink</code> accordingly.<br>
        • The malicious process is now <strong>unlinked from ActiveProcessLinks</strong>!<br>
        • <strong>The Result:</strong> Standard administrative tools and <code>pslist</code> (which traverse the linked list) never see the hidden process.<br>
        • <strong>Crucial Forensic Reality (Q29):</strong> The unlinked process continues executing normally! The CPU scheduler uses separate thread scheduling queues (<code>_KTHREAD</code>), ignoring <code>ActiveProcessLinks</code> completely!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 12,
      runningHead: 'CH. 3 • POOL TAG SCANNING & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 3 (Part 2 Continued) • Rootkit Detection & Exam Traps</span>
      <h2>Unlinked Process Detection & Topic 3 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. How Forensic Tools Defeat DKOM: Pool Tag Scanning (Q30)</span>
      <p>To detect unlinked rootkit processes, advanced forensic tools (Volatility's <code>windows.psscan</code>) bypass the linked list entirely:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Heuristic Pool Tag Scanning (psscan) (Q30)</span>
          <span class="statute-tag">Signature Searching</span>
        </div>
        <p>When the Windows kernel allocates memory for an <code>_EPROCESS</code> block from kernel pool memory, it prepends a 4-byte pool tag identifier (typically <strong><code>Proc</code></strong> or <code>Pro\x00</code>). <code>psscan</code> scans the entire physical memory dump for this tag, discovering unlinked processes and dead, terminated processes whose memory has not yet been reused!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Memory Structures & _EPROCESS (Q21–Q30)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (4-Level Translation):</strong> 64-bit Windows uses 4-level paging: PML4 &rarr; PDPT &rarr; PD &rarr; PT (Q22).<br>
        ⚠️ <strong>Trap 2 (ImageFileName Truncation):</strong> The <code>ImageFileName</code> in <code>_EPROCESS</code> is strictly limited to <strong>14 characters</strong> plus null terminator (Q26).<br>
        ⚠️ <strong>Trap 3 (DKOM Execution):</strong> Unlinking a process from <code>ActiveProcessLinks</code> hides it from <code>pslist</code>, but it <strong>continues executing</strong> because the Windows scheduler schedules threads via dispatcher queues (Q28, Q29).<br>
        ⚠️ <strong>Trap 4 (pslist vs psscan):</strong> <code>pslist</code> traverses the doubly linked list and misses unlinked processes; <code>psscan</code> scans physical memory for <code>Proc</code> pool tags to uncover unlinked and terminated processes (Q30).<br>
        ⚠️ <strong>Trap 5 (Hard Fault Definition):</strong> A hard page fault occurs when a requested page must be retrieved from disk storage (<code>pagefile.sys</code>) (Q23).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 3: Paging &amp; _EPROCESS Structures?</strong>
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
  // TOPIC 4: PROCESS ENVIRONMENT BLOCK (PEB), TEB & THREAD STRUCTURES (Spreads 6 & 7, Pages 13–16, Q31–Q40)
  // =========================================================================
  // Spread 6: Part 1 - User-Mode Memory Structures: PEB & Segment Registers (Pages 13–14)
  {
    spreadId: 6,
    left: {
      pageNumber: 13,
      runningHead: 'CH. 4 • USER-MODE STRUCTURES: PEB & TEB',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 4 • Topic 4: PEB, TEB & Thread Structures (Part 1)</span>
      <h2>User-Mode Memory Structures: The PEB and TEB</h2>
    </div>

    <div class="intro-abstract">
      <p>While the kernel-mode <code>_EPROCESS</code> structure is inaccessible to user-space code, Windows maintains mirrored user-mode structures: the <strong>Process Environment Block (PEB)</strong> and the <strong>Thread Environment Block (TEB)</strong>. In digital forensics, the PEB contains full command-line arguments, loaded DLLs, and anti-debugging flags.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Segment Registers & Locating the TEB / PEB (Q31, Q32)</span>
      <p>How does a program or malware find its own environment block without asking the kernel?</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">32-Bit x86 Systems (FS Register) (Q31)</span>
            <span class="statute-tag">fs:[0x30]</span>
          </div>
          <p>• The CPU segment register <strong><code>FS</code></strong> points to the Thread Environment Block (TEB).<br>
          • At offset <code>FS:[0x18]</code> is the self-pointer to TEB.<br>
          • At offset <strong><code>FS:[0x30]</code></strong> is the pointer directly to the <strong>Process Environment Block (PEB)</strong>!</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">64-Bit x64 Systems (GS Register) (Q32)</span>
            <span class="statute-tag">gs:[0x60]</span>
          </div>
          <p>• The CPU segment register <strong><code>GS</code></strong> points to the TEB.<br>
          • At offset <code>GS:[0x30]</code> is the self-pointer to TEB.<br>
          • At offset <strong><code>GS:[0x60]</code></strong> is the pointer directly to the <strong>64-bit PEB</strong>!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Critical Forensic Fields Inside the PEB (Q33, Q34)</span>
      <p>The PEB is located in user-space virtual memory and contains high-value investigative artifacts:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>PEB Field</th>
            <th>Type</th>
            <th>Evidentiary Meaning & Forensic Analysis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>BeingDebugged (Q33)</strong></td>
            <td><code>UCHAR</code></td>
            <td>A 1-byte flag set to <code>1</code> if the process is attached to an active debugger. Heavily inspected by malware for anti-analysis.</td>
          </tr>
          <tr>
            <td><strong>ProcessParameters (Q34)</strong></td>
            <td><code>PVOID</code></td>
            <td>Points to <code>RTL_USER_PROCESS_PARAMETERS</code>. Holds the <strong>full un-truncated CommandLine</strong>, ImagePathName, and environment variables!</td>
          </tr>
          <tr>
            <td><strong>Ldr (PEB_LDR_DATA) (Q35)</strong></td>
            <td><code>PVOID</code></td>
            <td>Points to loaded module lists enumerating every dynamic-link library (DLL) loaded into the process address space.</td>
          </tr>
          <tr>
            <td><strong>NtGlobalFlag</strong></td>
            <td><code>ULONG</code></td>
            <td>Offset <code>0xBC</code> (x64). Contains debugging heap flags (e.g. <code>0x70</code>: FLG_HEAP_ENABLE_TAIL_CHECK).</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 14,
      runningHead: 'CH. 4 • PROCESS PARAMETERS & COMMAND-LINES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 4 (Part 1 Continued) • Command Lines & Arguments</span>
      <h2>Command-Line Forensics & ProcessParameters</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Recovering Full Command-Line Arguments (Q34)</span>
      <p>While the <code>_EPROCESS.ImageFileName</code> truncates executable names to 14 characters (e.g., <code>powershell.exe</code> becomes <code>powershell.ex</code>), the PEB stores the complete, full string:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">RTL_USER_PROCESS_PARAMETERS Internals (Q34)</span>
          <span class="statute-tag">Full String Recovery</span>
        </div>
        <p>• <strong>ImagePathName:</strong> The absolute path to the binary on disk (e.g., <code>C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe</code>).<br>
        • <strong>CommandLine:</strong> Contains the entire string typed by the attacker, including obfuscated Base64-encoded scripts: <code>powershell.exe -NoP -NonI -W Hidden -Enc SQBFAFgA...</code>.<br>
        • <strong>Volatility Plugin:</strong> <code>windows.cmdline</code> extracts this structure from the PEB for every active process!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. The Threat of Command-Line Spoofing</span>
      <p>Because the PEB resides in user-mode writable memory, an attacker with code execution inside a process can overwrite the <code>CommandLine</code> string after launching. Forensic tools compare PEB parameters against the kernel-level <code>EPROCESS</code> creation telemetry to identify command-line spoofing.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 4 (Part 1/2) Complete.</strong> Turn page for PEB_LDR_DATA, Threads &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="3" onclick="window.openMCQForSpread(3)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q31–Q40) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 7: Part 2 - PEB_LDR_DATA Module Lists, _ETHREAD & Exam Traps (Pages 15–16)
  {
    spreadId: 7,
    left: {
      pageNumber: 15,
      runningHead: 'CH. 4 • PEB_LDR_DATA & THREAD STRUCTURES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 4 • Topic 4: PEB, TEB & Thread Structures (Part 2)</span>
      <h2>PEB_LDR_DATA & Kernel Thread Structures</h2>
    </div>

    <div class="intro-abstract">
      <p>Investigating injected DLLs and hidden execution threads requires understanding how the Windows loader links modules inside user memory and how the kernel tracks executing threads via <code>_ETHREAD</code>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Three Doubly Linked Lists of PEB_LDR_DATA (Q35, Q36)</span>
      <p>Inside the PEB, the <code>Ldr</code> pointer references <code>PEB_LDR_DATA</code>, which maintains three distinct doubly linked lists of <code>LDR_DATA_TABLE_ENTRY</code> structures:</p>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Module List Name</th>
            <th>Ordering Logic</th>
            <th>Forensic Role in DLL Injection</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>InLoadOrderModuleList (Q35)</strong></td>
            <td>Chronological order in which DLLs were loaded into memory.</td>
            <td>First entry is always the main executable itself, followed by <code>ntdll.dll</code> and <code>kernel32.dll</code>.</td>
          </tr>
          <tr>
            <td><strong>InMemoryOrderModuleList (Q35)</strong></td>
            <td>Sorted by the base virtual memory addresses of the DLLs.</td>
            <td>Used by malware to rapidly locate APIs via RVA walking.</td>
          </tr>
          <tr>
            <td><strong>InInitializationOrderModuleList</strong></td>
            <td>Order in which the DLLs' initialization functions (<code>DllMain</code>) were executed.</td>
            <td>Helps determine dependency execution order during forensic reverse engineering.</td>
          </tr>
        </tbody>
      </table>
      <p style="margin-top: 8px;"><strong>Unlinking DLLs from PEB:</strong> Stealthy rootkits unlink their injected DLL from all three lists. Standard tools relying on <code>windows.dlllist</code> fail to report the unlinked DLL, necessitating VAD tree scanning!</p>
    </div>

    <div class="section-block">
      <span class="section-label">2. Thread Structures: _ETHREAD & _KTHREAD (Q37, Q38)</span>
      <p>Processes do not execute code; <strong>threads execute code</strong> within the process virtual address space:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Executive Thread Block (_ETHREAD) (Q37)</span>
          <span class="statute-tag">Kernel Thread Object</span>
        </div>
        <p>• Contains <code>Cid.UniqueThread</code> (TID) and <code>Cid.UniqueProcess</code> (PID).<br>
        • <strong>StartAddress & Win32StartAddress (Q38):</strong> Points to the memory address where the thread began executing. If a thread's start address points into a dynamic heap/stack allocation or unmapped memory (rather than a legitimate on-disk DLL like <code>kernel32!BaseThreadInitThunk</code>), it is an absolute indicator of <strong>injected shellcode execution</strong>!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 16,
      runningHead: 'CH. 4 • THREAD TOKENS & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 4 (Part 2 Continued) • Thread Impersonation & Traps</span>
      <h2>Thread Impersonation Tokens & Topic 4 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Impersonation Tokens: Client vs Thread Security (Q39, Q40)</span>
      <p>While an <code>_EPROCESS</code> structure possesses a <strong>Primary Security Token</strong>, individual threads can hold an independent <strong>Impersonation Token</strong>. A thread running inside a standard user process can impersonate the high-privileged <code>NT AUTHORITY\\SYSTEM</code> token (e.g., via Potato privilege escalation exploits), allowing an unprivileged process to perform administrative actions!</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: PEB, TEB & Threads (Q31–Q40)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (PEB Pointer Offsets):</strong> On 32-bit x86, the PEB is located at <strong>fs:[0x30]</strong>; on 64-bit x64, the PEB is located at <strong>gs:[0x60]</strong> (Q31, Q32).<br>
        ⚠️ <strong>Trap 2 (BeingDebugged Flag):</strong> The <code>BeingDebugged</code> byte flag in the PEB is set to <code>1</code> when attached to a debugger (Q33).<br>
        ⚠️ <strong>Trap 3 (Full Command Line):</strong> Full, un-truncated command-line arguments are stored inside <code>ProcessParameters</code> in the PEB, not in <code>_EPROCESS</code> (Q34).<br>
        ⚠️ <strong>Trap 4 (PEB_LDR_DATA Lists):</strong> The three module lists inside <code>PEB_LDR_DATA</code> are InLoadOrder, InMemoryOrder, and InInitializationOrder (Q35).<br>
        ⚠️ <strong>Trap 5 (Malicious Thread Start):</strong> A thread whose <code>Win32StartAddress</code> points outside legitimate loaded DLL memory ranges indicates injected code execution (Q38).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 4: PEB, TEB &amp; Thread Structures?</strong>
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
  // TOPIC 5: PROCESS HIERARCHY, DKOM & TOKEN STEALING (Spreads 8 & 9, Pages 17–20, Q41–Q50)
  // =========================================================================
  // Spread 8: Part 1 - Token Stealing Privilege Escalation & DKOM Mechanics (Pages 17–18)
  {
    spreadId: 8,
    left: {
      pageNumber: 17,
      runningHead: 'CH. 5 • PRIVILEGE ESCALATION & TOKEN STEALING',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 5 • Topic 5: Process Hierarchy & Token Stealing (Part 1)</span>
      <h2>Token Stealing Privilege Escalation & DKOM</h2>
    </div>

    <div class="intro-abstract">
      <p>Direct Kernel Object Manipulation (DKOM) allows attackers with kernel read/write access (e.g. via vulnerable signed drivers / BYOVD) to manipulate internal kernel objects directly in RAM, bypassing operating system security controls without creating disk artifacts.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Token Stealing: Elevating to SYSTEM in RAM (Q41, Q42)</span>
      <p>How do kernel exploits elevate an unprivileged command prompt to the omnipotent <code>NT AUTHORITY\\SYSTEM</code> without touching disk accounts?</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">The Primary Token Pointer (Q41)</span>
            <span class="statute-tag">Kernel Structure</span>
          </div>
          <p>Every process has an <code>_EPROCESS</code> structure containing a member named <code>Token</code> (an <code>EX_FAST_REF</code> pointer) referencing its primary security token, which holds SIDs, integrity levels, and enabled privileges.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">The Token Swap Algorithm (Q41, Q42)</span>
            <span class="statute-tag">Memory Exploitation</span>
          </div>
          <p>1. The exploit traverses <code>ActiveProcessLinks</code> to find the <code>_EPROCESS</code> of <strong>PID 4 (System)</strong>.<br>
          2. It reads the <code>Token</code> pointer value of the System process (which carries SYSTEM privileges).<br>
          3. It locates the attacker's own process (e.g., <code>cmd.exe</code>) in kernel memory.<br>
          4. It overwrites the attacker's <code>Token</code> pointer with the System process's Token pointer!<br>
          5. <strong>Result:</strong> Instantaneous elevation to <code>NT AUTHORITY\\SYSTEM</code>!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Detecting Token Stealing Forensically (Q43)</span>
      <p>How do forensic examiners detect token stealing in memory? Volatility's <code>windows.privileges</code> and <code>windows.getsids</code> inspect process tokens:</p>
      <div class="statute-card card-amber">
        <p>• An anomalous user-mode process (like <code>cmd.exe</code> launched from an unprivileged user desktop) suddenly possesses <strong>SeDebugPrivilege</strong>, <strong>SeTcbPrivilege</strong>, and the <code>S-1-5-18</code> (Local System) SID.<br>
        • Multiple processes with completely different parentage share the identical 64-bit Token virtual memory address, proving the pointer was copied directly from PID 4!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 18,
      runningHead: 'CH. 5 • NORMAL WINDOWS PROCESS HIERARCHY',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 5 (Part 1 Continued) • Process Tree Baselines</span>
      <h2>The Standard Windows Process Hierarchy Baseline</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Legitimate Windows Boot Tree (Q44–Q46)</span>
      <p>Hunting stealthy processes requires knowing what a clean, legitimate Windows process tree looks like from boot to desktop initialization:</p>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Process Name</th>
            <th>Expected PID / Parent (PPID)</th>
            <th>Expected Path & Normal Instance Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>System (Q44)</strong></td>
            <td>PID <strong>4</strong> / PPID 0</td>
            <td>Kernel execution (no on-disk path). Exactly 1 instance. Hosts kernel threads.</td>
          </tr>
          <tr>
            <td><strong>smss.exe (Q45)</strong></td>
            <td>PPID 4 (System)</td>
            <td><code>\\System32\\smss.exe</code>. Session Manager Subsystem. Exactly 1 master instance in Session 0.</td>
          </tr>
          <tr>
            <td><strong>csrss.exe</strong></td>
            <td>Spawned by smss.exe</td>
            <td><code>\\System32\\csrss.exe</code>. Client/Server Runtime Subsystem. 1 instance per session (Session 0, Session 1, etc.).</td>
          </tr>
          <tr>
            <td><strong>wininit.exe (Q46)</strong></td>
            <td>Spawned by smss.exe</td>
            <td><code>\\System32\\wininit.exe</code>. Windows Initialization. Exactly 1 instance in Session 0.</td>
          </tr>
          <tr>
            <td><strong>services.exe (Q47)</strong></td>
            <td>PPID is wininit.exe</td>
            <td><code>\\System32\\services.exe</code>. Service Control Manager (SCM). Exactly 1 instance in Session 0.</td>
          </tr>
          <tr>
            <td><strong>lsass.exe (Q48)</strong></td>
            <td>PPID is wininit.exe</td>
            <td><code>\\System32\\lsass.exe</code>. Local Security Authority Subsystem Service. Exactly 1 instance in Session 0.</td>
          </tr>
          <tr>
            <td><strong>svchost.exe (Q49)</strong></td>
            <td>PPID is services.exe</td>
            <td><code>\\System32\\svchost.exe</code>. Generic host process for services running from DLLs. Always launched with <code>-k</code> parameter!</td>
          </tr>
          <tr>
            <td><strong>explorer.exe (Q50)</strong></td>
            <td>PPID is userinit.exe</td>
            <td><code>C:\\Windows\\explorer.exe</code>. User desktop shell. 1 instance per logged-in interactive user session.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 5 (Part 1/2) Complete.</strong> Turn page for PPID Spoofing, Evasion &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="4" onclick="window.openMCQForSpread(4)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q41–Q50) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 9: Part 2 - Parent Process ID (PPID) Spoofing & Threat Hunting (Pages 19–20)
  {
    spreadId: 9,
    left: {
      pageNumber: 19,
      runningHead: 'CH. 5 • PPID SPOOFING & PROCESS ANOMALIES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 5 • Topic 5: Process Hierarchy & Token Stealing (Part 2)</span>
      <h2>Parent Process ID (PPID) Spoofing & Anomalies</h2>
    </div>

    <div class="intro-abstract">
      <p>Because security tools and EDR agents monitor process creation events to detect suspicious parent-child relationships (e.g., <code>winword.exe</code> spawning <code>cmd.exe</code>), attackers deploy Parent Process ID (PPID) spoofing to falsify forensic lineages.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Mechanics of PPID Spoofing (Q47, Q48)</span>
      <p>Introduced in Windows Vista, the <code>InitializeProcThreadAttributeList</code> and <code>UpdateProcThreadAttribute</code> APIs allow a process to set the attribute <code>PROC_THREAD_ATTRIBUTE_PARENT_PROCESS</code> when creating a new process:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">The Evasion Technique</span>
          <span class="statute-tag">API Manipulation</span>
        </div>
        <p>• Malware executing from Microsoft Word opens a handle to a legitimate process (like <code>explorer.exe</code> or <code>services.exe</code>).<br>
        • It calls <code>CreateProcess</code> specifying <code>explorer.exe</code> as the explicit parent.<br>
        • <strong>Forensic Result:</strong> The newly spawned malicious <code>cmd.exe</code> or <code>powershell.exe</code> records its Parent Process ID as <code>explorer.exe</code> instead of <code>winword.exe</code>, evading simple parentage detection rules!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Detecting Process Tree Anomalies in Memory (Q49, Q50)</span>
      <p>Forensic examiners detect process masquerading and spoofing by identifying red flags:</p>
      <ul class="forensic-list">
        <li><strong>Path Anomalies:</strong> <code>svchost.exe</code> executing from <code>C:\\Temp\\</code> or <code>C:\\Users\\Public\\</code> instead of <code>C:\\Windows\\System32\\</code>.</li>
        <li><strong>Spelling Masquerading (Typosquatting):</strong> <code>scvhost.exe</code>, <code>lsas.exe</code>, <code>csrs.exe</code>.</li>
        <li><strong>Command-Line Mismatch:</strong> <code>svchost.exe</code> executing without the mandatory <code>-k</code> service grouping parameter.</li>
        <li><strong>Instance Multiplicity:</strong> More than one instance of <code>lsass.exe</code>, <code>services.exe</code>, or <code>wininit.exe</code> running simultaneously.</li>
      </ul>
    </div>
      `
    },
    right: {
      pageNumber: 20,
      runningHead: 'CH. 5 • PROCESS HUNTING & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 5 (Part 2 Continued) • Hunting & Exam Traps</span>
      <h2>Process Tree Forensics & Topic 5 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Power of pstree</span>
      <p>Volatility 3's <code>windows.pstree</code> plugin reconstructs the hierarchical parent-child relationships, indenting child processes under their parents. When an examiner spots an anomalous child (e.g. <code>cmd.exe</code> child of <code>sqlservr.exe</code> or <code>spoolsv.exe</code>), it signals immediate post-exploitation activity.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Process Hierarchy & Tokens (Q41–Q50)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (System Process PID):</strong> The Windows System process is always strictly <strong>PID 4</strong> (Q44).<br>
        ⚠️ <strong>Trap 2 (smss.exe Role):</strong> <code>smss.exe</code> is the Session Manager Subsystem; it launches <code>csrss.exe</code> and <code>wininit.exe</code> (Q45).<br>
        ⚠️ <strong>Trap 3 (services & lsass Parent):</strong> Both <code>services.exe</code> and <code>lsass.exe</code> must have <strong>wininit.exe</strong> as their parent (Q46, Q47, Q48).<br>
        ⚠️ <strong>Trap 4 (svchost.exe Flags):</strong> Legitimate <code>svchost.exe</code> processes are always spawned by <code>services.exe</code> and always include the <code>-k</code> switch (Q49).<br>
        ⚠️ <strong>Trap 5 (Token Stealing Method):</strong> Token stealing overwrites the target process's <code>Token</code> pointer with the Token pointer of PID 4 (System) in kernel memory (Q41).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 5: Process Hierarchy &amp; Token Stealing?</strong>
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
