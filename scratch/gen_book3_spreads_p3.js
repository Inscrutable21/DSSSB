// Book 3 Spreads Part 3: Topics 11–15 (Spreads 20–29, Pages 41–60)
// High-yield DSSSB Cyber Forensic notes: RAM & Memory Forensics

module.exports = [
  // =========================================================================
  // TOPIC 11: MEMORY COMPRESSION, KASLR, POOL TAGS & CONSOLE HISTORY (Spreads 20 & 21, Pages 41–44, Q101–Q110)
  // =========================================================================
  // Spread 20: Part 1 - Windows Memory Compression & KASLR Defenses (Pages 41–42)
  {
    spreadId: 20,
    left: {
      pageNumber: 41,
      runningHead: 'CH. 11 • MEMORY COMPRESSION & KASLR',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 11 • Topic 11: Compression, KASLR & Pool Tags (Part 1)</span>
      <h2>Windows Memory Compression & Kernel Defenses</h2>
    </div>

    <div class="intro-abstract">
      <p>Modern operating systems incorporate complex memory management features to improve responsiveness and defeat exploits. Forensic analysts must understand how the Windows 10/11 <strong>Memory Compression Store</strong> alters physical RAM layouts and how <strong>Kernel ASLR</strong> randomizes memory structures.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Windows 10/11 Memory Compression Store (MemCompression) (Q101)</span>
      <p>In legacy Windows, when physical RAM became full, inactive pages were written to disk in <code>pagefile.sys</code>. Starting in Windows 10, the kernel introduced in-memory compression:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">MemCompression Mechanics (Q101)</span>
            <span class="statute-tag">RAM Optimization</span>
          </div>
          <p>• Inactive pages are compressed using the Xpress algorithm and held inside an in-memory compression store in physical RAM.<br>
          • Managed by the system process named <strong>Memory Compression</strong>.<br>
          • <strong>Forensic Impact:</strong> When a memory dump is captured, strings and evidence belonging to suspended background apps reside in compressed memory chunks! Modern Volatility 3 plugins decompress these stores automatically to expose evidence.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Kernel ASLR (KASLR) (Q102)</span>
            <span class="statute-tag">Exploit Mitigation</span>
          </div>
          <p>• Randomizes the base addresses of the kernel (<code>ntoskrnl.exe</code>), HAL, and driver modules at every system boot.<br>
          • Attackers cannot rely on hardcoded memory addresses to execute Return-Oriented Programming (ROP) exploit chains.<br>
          • <strong>Forensic Challenge:</strong> Forensic tools must locate the dynamic kernel base address by scanning for PE headers or querying hardware registers (MSRs).</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Kernel Pool Allocations: Paged vs Non-Paged Pools (Q103)</span>
      <p>The Windows kernel dynamically allocates memory from two primary system pools:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Pool Type</th>
            <th>Paging Behavior</th>
            <th>Contents & Forensic Significance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>NonPagedPool (Q103)</strong></td>
            <td><strong>Guaranteed never to be paged out</strong> to disk; remains resident in physical RAM at all times.</td>
            <td>Interrupt handlers, spinlocks, network packet buffers, critical driver code. Critical evidence (active network connections, encryption keys) is stored here.</td>
          </tr>
          <tr>
            <td><strong>PagedPool (Q103)</strong></td>
            <td>Can be paged out to <code>pagefile.sys</code> when physical memory is constrained.</td>
            <td>File handles, registry keys, user credentials, security descriptors. May require pagefile analysis if swapped out.</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 42,
      runningHead: 'CH. 11 • CONSOLE HISTORY & POWERSHELL LOGS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 11 (Part 1 Continued) • Command Line History</span>
      <h2>Console Session Forensics & PowerShell Transcripts</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Recovering Interactive Command History (conhost.exe) (Q104, Q105)</span>
      <p>When an attacker opens a command prompt (<code>cmd.exe</code>) or PowerShell session, typed commands are managed by the Console Host process (<code>conhost.exe</code>):</p>
      
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Console Buffer Recovery (Q104)</span>
          <span class="statute-tag">In-Memory Command Line</span>
        </div>
        <p>• <code>conhost.exe</code> allocates private memory heaps maintaining active command-line scrollback buffers and <code>COMMAND_HISTORY</code> arrays.<br>
        • Even if the attacker cleared the screen with <code>cls</code>, the underlying memory buffer retains the executed commands, directory paths, and script arguments!<br>
        • <strong>Volatility Plugin:</strong> <code>windows.cmdline</code> and console string carving extract typed commands directly from the heap of <code>conhost.exe</code>.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Carving In-Memory PowerShell Transcripts (Q106)</span>
      <p>PowerShell execution leaves extensive ephemeral footprints in process memory. Even when Script Block Logging (EID 4104) is disabled on disk, the uncompiled script blocks, Base64 decoded payloads, and variable values persist in the unallocated memory pages of <code>powershell.exe</code> or <code>pwsh.exe</code>.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 11 (Part 1/2) Complete.</strong> Turn page for Pool Tags, SMEP/SMAP &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="10" onclick="window.openMCQForSpread(10)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q101–Q110) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 21: Part 2 - Pool Tag Tracking, SMEP/SMAP Hardware Protections & Exam Traps (Pages 43–44)
  {
    spreadId: 21,
    left: {
      pageNumber: 43,
      runningHead: 'CH. 11 • POOL TAGS & HARDWARE DEFENSES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 11 • Topic 11: Compression, KASLR & Pool Tags (Part 2)</span>
      <h2>Kernel Pool Tags & CPU Hardware Defenses</h2>
    </div>

    <div class="intro-abstract">
      <p>Windows kernel memory allocations are labeled with 4-byte tracking tags. Forensic analysis frameworks leverage these pool tags to scan physical memory for unlinked artifacts and detect kernel corruption.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Role of Pool Tags in Memory Carving (Q107, Q108)</span>
      <p>Every time a kernel driver calls <code>ExAllocatePoolWithTag</code>, it specifies a 4-byte character tag (stored in little-endian order):</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">High-Yield Pool Tags (Q107)</span>
            <span class="statute-tag">Kernel Identifiers</span>
          </div>
          <p>• <strong><code>Proc</code>:</strong> Executive Process Block (<code>_EPROCESS</code>). Used by <code>psscan</code>.<br>
          • <strong><code>Thre</code>:</strong> Executive Thread Block (<code>_ETHREAD</code>). Used by <code>thrdscan</code>.<br>
          • <strong><code>File</code>:</strong> File Objects (<code>_FILE_OBJECT</code>). Used by <code>filescan</code> to discover opened files without disk MFT.<br>
          • <strong><code>Muta</code> / <code>Mutn</code>:</strong> Mutant / Mutex objects. Used by <code>mutantscan</code>.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Big Page Pool Tracking</span>
            <span class="statute-tag">Large Allocations</span>
          </div>
          <p>Allocations exceeding one page (4 KB) are allocated from the <strong>Big Page Pool</strong>. The kernel tracks these in a global hash table referenced by <code>PoolBigPageTable</code>, which Volatility scans to recover raw decompressed network buffers and unpacked malware payloads.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. CPU Hardware Defenses: SMEP & SMAP (Q109)</span>
      <p>Modern Intel and AMD processors enforce silicon-level privilege separation:</p>
      <div class="statute-card card-amber">
        <p>• <strong>SMEP (Supervisor Mode Execution Prevention) (Q109):</strong> Prevents the CPU operating in Ring 0 (kernel mode) from executing code located in user-mode memory pages. Blocks traditional kernel exploits that redirected execution to user-space shellcode!<br>
        • <strong>SMAP (Supervisor Mode Access Prevention):</strong> Prevents Ring 0 from even reading or writing user-mode pages without explicit architectural override flags.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 44,
      runningHead: 'CH. 11 • COMPRESSION & POOL TAG EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 11 (Part 2 Continued) • Traps & Best Practices</span>
      <h2>Compression, KASLR & Pool Tag Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Big Page Pool & Dump Carving</span>
      <p>Volatility's <code>windows.bigpools</code> scans the Big Page Pool table, dumping large in-memory allocations. Malicious tools that unpack large DLLs or store stolen credentials in memory can be carved directly from these large pool tags.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Compression, KASLR & Pool Tags (Q101–Q110)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Memory Compression Process):</strong> Windows 10/11 compresses inactive RAM pages inside the <strong>Memory Compression</strong> process (Q101).<br>
        ⚠️ <strong>Trap 2 (KASLR Defense):</strong> Kernel ASLR randomizes the base load address of the kernel and drivers at every boot (Q102).<br>
        ⚠️ <strong>Trap 3 (NonPagedPool Guarantee):</strong> The NonPagedPool is <strong>guaranteed never to be paged out</strong> to disk (Q103).<br>
        ⚠️ <strong>Trap 4 (SMEP Enforcement):</strong> SMEP blocks the CPU in kernel mode from <strong>executing user-mode memory</strong> (Q109).<br>
        ⚠️ <strong>Trap 5 (Core Pool Tags):</strong> <code>Proc</code> tags identify processes; <code>File</code> tags identify open file objects in memory (Q107).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 11: Compression, KASLR &amp; Pool Tags?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q101–Q110).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="10" onclick="window.openMCQForSpread(10)">
        Practice Topic 11 Quiz (Q101–Q110) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 12: ENTERPRISE MEMORY FORENSICS: KERBEROS & C2 ARTIFACTS (Spreads 22 & 23, Pages 45–48, Q111–Q120)
  // =========================================================================
  // Spread 22: Part 1 - Kerberos Ticket Architecture: Golden vs Silver Tickets (Pages 45–46)
  {
    spreadId: 22,
    left: {
      pageNumber: 45,
      runningHead: 'CH. 12 • ENTERPRISE FORENSICS: KERBEROS TICKETS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 12 • Topic 12: Enterprise Memory & C2 (Part 1)</span>
      <h2>Kerberos Ticket Architecture: Golden vs Silver Tickets</h2>
    </div>

    <div class="intro-abstract">
      <p>Active Directory enterprise domain attacks focus on abusing the Kerberos authentication protocol. Forensic memory analysis of compromised domain controllers and member workstations extracts forged Kerberos tickets directly from the LSASS authentication cache.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Kerberos Authentication Flow in RAM (Q111, Q112)</span>
      <p>When an enterprise user authenticates to Active Directory, authentication tickets are cached in volatile memory within <code>lsass.exe</code>:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Ticket Granting Ticket (TGT) (Q111)</span>
            <span class="statute-tag">Domain Passport</span>
          </div>
          <p>• Issued by the Key Distribution Center (KDC) Authentication Service (AS).<br>
          • Encrypted with the secret key of the domain account <strong><code>krbtgt</code></strong>.<br>
          • Used by the client to request access to specific enterprise network services.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Ticket Granting Service (TGS) (Q111)</span>
            <span class="statute-tag">Service Ticket</span>
          </div>
          <p>• Issued by the KDC Ticket Granting Service.<br>
          • Encrypted with the target service account's password hash (e.g. SQL Server, CIFS).<br>
          • Presented to the target server to access enterprise databases and shared folders.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Forged Kerberos Tickets: Golden vs Silver Tickets (Q112, Q113)</span>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Ticket Attack</th>
            <th>Compromised Secret & Encryption Key</th>
            <th>Scope of Access & Forensic Indicators</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Golden Ticket (Q112)</strong></td>
            <td>Encrypted with the NTLM hash or AES key of the <strong>krbtgt</strong> account.</td>
            <td><strong>Complete Domain Compromise:</strong> Attacker can forge a TGT impersonating ANY domain user (including Domain Admin). <strong>Forensic Indicator:</strong> TGT with abnormal 10-year validity lifetime and fictitious domain user SIDs.</td>
          </tr>
          <tr>
            <td><strong>Silver Ticket (Q113)</strong></td>
            <td>Encrypted with the password hash of a <strong>specific service account</strong> (e.g. CIFS/file server).</td>
            <td><strong>Single Service Compromise:</strong> Attacker forges a TGS ticket directly, completely bypassing the KDC! <strong>Forensic Indicator:</strong> Zero corresponding TGT request events logged on the Domain Controller!</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 46,
      runningHead: 'CH. 12 • COBALT STRIKE BEACON ARTIFACTS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 12 (Part 1 Continued) • C2 In-Memory Artifacts</span>
      <h2>Cobalt Strike Beacon In-Memory Configuration Carving</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Cobalt Strike Beacon Architecture in RAM (Q114, Q115)</span>
      <p>Cobalt Strike is the dominant adversary emulation framework abused by ransomware cartels. Its in-memory agent (Beacon) leaves distinct forensic artifacts:</p>
      
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Beacon Configuration Block (.data section) (Q114)</span>
          <span class="statute-tag">Encrypted Config Block</span>
        </div>
        <p>• The Cobalt Strike configuration block is encrypted in memory using a simple 1-byte XOR key (historically <code>0x2E</code> in CS 3.x or <code>0x69</code> in CS 4.x).<br>
        • <strong>Forensic Information Carved:</strong><br>
        &nbsp;&nbsp;• Remote C2 Server domains and IP addresses.<br>
        &nbsp;&nbsp;• Sleep time (interval between check-ins) and Jitter percentage.<br>
        &nbsp;&nbsp;• Named Pipe names used for lateral movement (e.g. <code>\\\\.\\pipe\\msse-*</code>).<br>
        &nbsp;&nbsp;• HTTP User-Agent strings and malleable C2 profile configurations.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Cobalt Strike In-Memory Named Pipes (Q116)</span>
      <p>Beacons communicate laterally across internal enterprise networks using <strong>SMB Named Pipes</strong> to evade perimeter network firewalls. Volatility's <code>windows.handles</code> identifies open pipe handles matching Cobalt Strike malleable C2 templates.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 12 (Part 1/2) Complete.</strong> Turn page for In-Memory YARA, Sleep Obfuscation &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="11" onclick="window.openMCQForSpread(11)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q111–Q120) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 23: Part 2 - Sleep Obfuscation, In-Memory YARA & Exam Traps (Pages 47–48)
  {
    spreadId: 23,
    left: {
      pageNumber: 47,
      runningHead: 'CH. 12 • SLEEP OBFUSCATION & IN-MEMORY YARA',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 12 • Topic 12: Enterprise Memory & C2 (Part 2)</span>
      <h2>Sleep Obfuscation & In-Memory YARA Hunting</h2>
    </div>

    <div class="intro-abstract">
      <p>Modern C2 implants incorporate sleep obfuscation techniques to encrypt their own memory allocations during idle periods. Forensic analysts use in-memory YARA scanning and call stack inspection to pierce these evasions.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Sleep Obfuscation Mechanics (Ekko, Foliage, Gargoyle) (Q117, Q118)</span>
      <p>Why do static in-memory signature scanners often fail to detect sleeping beacons?</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">The Sleep Encryption Loop (Q117)</span>
          <span class="statute-tag">Memory Encryption</span>
        </div>
        <p>• While waiting for operator commands, the implant calls <code>VirtualProtect</code> to change its memory permissions from <code>PAGE_EXECUTE_READWRITE</code> to <code>PAGE_READWRITE</code>.<br>
        • It encrypts its own memory image using RC4 or XOR, masking all shellcode signatures.<br>
        • Queues a timer (using Windows timers or ROP chains via <code>SystemFunction032</code>) and sleeps.<br>
        • Upon waking, it decrypts itself and restores executable permissions. <em>A memory dump taken while the implant is sleeping reveals an unmapped RW allocation containing high-entropy encrypted ciphertext!</em></p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. In-Memory YARA Scanning: windows.vadyarascan (Q119)</span>
      <p>Volatility 3 integrates the YARA pattern-matching engine to scan process memory:<br>
      <code>vol -f mem.raw windows.vadyarascan --yara-rules "rule_cobaltstrike.yar"</code><br>
      Scans all VAD allocations across all running processes simultaneously, pinpointing C2 beacon configurations, injected meterpreter payloads, and webshell signatures.</p>
    </div>
      `
    },
    right: {
      pageNumber: 48,
      runningHead: 'CH. 12 • ENTERPRISE FORENSIC EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 12 (Part 2 Continued) • Enterprise Traps & Best Practices</span>
      <h2>Enterprise Memory Forensics & Topic 12 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Summary of Kerberos & C2 Artifacts</span>
      <p>• <strong>Golden Ticket:</strong> Uses <code>krbtgt</code> hash to forge complete domain access.<br>
      • <strong>Silver Ticket:</strong> Uses service account hash to access specific service without KDC contact.<br>
      • <strong>Cobalt Strike Config:</strong> Decrypted via XOR <code>0x2E</code> / <code>0x69</code> to extract C2 domains and pipe names.<br>
      • <strong>Sleep Obfuscation:</strong> Converts memory to RW and encrypts payload during sleep periods.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Enterprise Memory & C2 (Q111–Q120)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Golden Ticket Key):</strong> A Golden Ticket is forged using the password hash of the <strong>krbtgt</strong> domain account (Q112).<br>
        ⚠️ <strong>Trap 2 (Silver Ticket Bypass):</strong> A Silver Ticket bypasses the Key Distribution Center (KDC) completely by forging a TGS ticket directly (Q113).<br>
        ⚠️ <strong>Trap 3 (Cobalt Strike Config XOR):</strong> Cobalt Strike Beacon configurations are encrypted in memory with a 1-byte XOR key (historically <strong>0x2E</strong> or <strong>0x69</strong>) (Q114).<br>
        ⚠️ <strong>Trap 4 (Sleep Obfuscation Protection):</strong> Sleep obfuscation changes memory permissions from executable to <strong>PAGE_READWRITE</strong> and encrypts payload during sleep (Q117).<br>
        ⚠️ <strong>Trap 5 (VAD YARA Plugin):</strong> The Volatility 3 plugin for scanning process VAD memory with YARA rules is <strong>windows.vadyarascan</strong> (Q119).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 12: Enterprise Memory &amp; C2 Artifacts?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q111–Q120).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="11" onclick="window.openMCQForSpread(11)">
        Practice Topic 12 Quiz (Q111–Q120) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 13: BROWSER FORENSICS IN MEMORY & UNENCRYPTED COMMUNICATIONS (Spreads 24 & 25, Pages 49–52, Q121–Q130)
  // =========================================================================
  // Spread 24: Part 1 - Incognito Mode RAM Residue & WebSockets (Pages 49–50)
  {
    spreadId: 24,
    left: {
      pageNumber: 49,
      runningHead: 'CH. 13 • BROWSER RAM FORENSICS: INCOGNITO',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 13 • Topic 13: Browser Forensics in RAM (Part 1)</span>
      <h2>Browser Memory Forensics & Incognito Mode Residue</h2>
    </div>

    <div class="intro-abstract">
      <p>Modern web browsers (Google Chrome, Microsoft Edge, Mozilla Firefox) utilize multi-process architectures where rendering, networking, and extension tabs execute in isolated process sandboxes. While 'Incognito' or 'Private' browsing prevents saving history to disk, all visited URLs, web form inputs, and downloaded images exist in plaintext in physical RAM.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Why Incognito Browsing Fails Against Memory Forensics (Q121)</span>
      <p>Criminal suspects mistakenly believe that launching Chrome Incognito Mode or Firefox Private Browsing provides anonymity:</p>
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">The Incognito Fallacy (Q121)</span>
            <span class="statute-tag">Disk vs RAM Reality</span>
          </div>
          <p>• <strong>Disk Policy:</strong> Incognito mode merely instructs the browser not to write cookies, cache files, or browsing history into SQLite database files on disk.<br>
          • <strong>RAM Reality:</strong> To render a webpage, the browser <em>must allocate memory pages in RAM</em>. Visited URLs, HTML DOM trees, JavaScript variables, session authentication cookies, and submitted password credentials exist completely unencrypted in the browser process heap!</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Carving Browser Heaps (Q122)</span>
            <span class="statute-tag">Regular Expressions</span>
          </div>
          <p>Forensic tools scan the memory pages of <code>chrome.exe</code> or <code>msedge.exe</code> using regular expressions:<br>
          • URLs: <code>https?://[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}[^ \\t\\r\\n]*</code>.<br>
          • Form fields: <code>username=.*&amp;password=.*</code>.<br>
          • JSON session tokens: <code>{"access_token": "..."}</code>.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Multi-Process Browser Architecture</span>
      <p>Modern Chromium browsers launch dozens of separate <code>chrome.exe</code> processes: one Broker process, one Network Service process, one GPU process, and separate Renderer processes for each tab. Network session keys and cookies reside inside the <strong>Network Service</strong> process heap.</p>
    </div>
      `
    },
    right: {
      pageNumber: 50,
      runningHead: 'CH. 13 • UNENCRYPTED CHATS & TLS SECRETS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 13 (Part 1 Continued) • Web Messaging & TLS</span>
      <h2>Plaintext Web Messaging & TLS Master Secrets</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Plaintext Web Messaging in RAM: WhatsApp & Telegram (Q123)</span>
      <p>End-to-End Encrypted (E2EE) messaging applications protect data across the internet air-interface. However, <strong>at the endpoint display boundary, data must be decrypted to be read by the human user</strong>:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Endpoint Decryption Reality (Q123)</span>
          <span class="statute-tag">In-Memory Plaintext</span>
        </div>
        <p>• When an investigator dumps RAM while a suspect is actively using <strong>WhatsApp Web, Telegram Desktop, or Signal Desktop</strong>, decrypted conversational chat strings reside in volatile heap memory.<br>
        • Chat text, contact phone numbers, timestamps, and active session tokens can be extracted directly using string carving without breaking the underlying Signal protocol or AES-256 encryption!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. TLS Master Secrets Extraction: Decrypting Encrypted PCAPs (Q124)</span>
      <p>Modern HTTPS network traffic is encrypted via TLS 1.2 / TLS 1.3. How can forensic examiners decrypt captured network packets (PCAP files)?</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">SSLKEYLOGFILE / Master Secret Carving (Q124)</span>
          <span class="statute-tag">TLS Decryption</span>
        </div>
        <p>• During the TLS handshake, the browser derives symmetric session keys called the <strong>TLS Master Secret</strong> and client random strings.<br>
        • These secrets reside in the browser's memory heap.<br>
        • Tools (e.g. Volatility's TLS key extractors) carve these secrets in <code>SSLKEYLOGFILE</code> format. Loading this file into Wireshark allows instantaneous, retroactive decryption of all HTTPS and WebSocket packet streams!</p>
      </div>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 13 (Part 1/2) Complete.</strong> Turn page for WebSockets, Clipboard Caches &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="12" onclick="window.openMCQForSpread(12)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q121–Q130) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 25: Part 2 - WebSocket Streams, Clipboard Caches & Exam Traps (Pages 51–52)
  {
    spreadId: 25,
    left: {
      pageNumber: 51,
      runningHead: 'CH. 13 • WEBSOCKETS & CLIPBOARD IN RAM',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 13 • Topic 13: Browser Forensics in RAM (Part 2)</span>
      <h2>WebSocket Sessions & In-Memory Clipboard Forensics</h2>
    </div>

    <div class="intro-abstract">
      <p>Real-time collaborative applications and cryptocurrency web interfaces maintain persistent bidirectional communications over WebSockets. In-memory forensics recovers live transaction payloads and sensitive clipboard data.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. WebSocket Forensics in Browser Memory (Q125)</span>
      <p>WebSockets maintain continuous TCP channels (<code>ws://</code> and <code>wss://</code>) for real-time messaging, crypto exchanges, and live web shell sessions:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">WebSocket Memory Buffers (Q125)</span>
          <span class="statute-tag">Real-Time Streams</span>
        </div>
        <p>• Data frames exchanged over WebSockets are buffered in the browser's network service memory.<br>
        • Forensic string carving extracts unmasked JSON messages, live trading orders, session tokens, and chat streams that never touched the disk or generated traditional browser cache files.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Windows Clipboard Forensics in Memory (Q126)</span>
      <p>When a user copies passwords from a password manager (KeePass, 1Password, Bitwarden) or text from an encrypted document, the data is stored in the <strong>Windows Clipboard</strong>:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Clipboard Data Objects (Q126)</span>
          <span class="statute-tag">Memory Persistence</span>
        </div>
        <p>• Stored in shared memory buffers managed by the Window Manager (<code>win32k.sys</code>).<br>
        • Holds plaintext strings (<code>CF_TEXT</code> / <code>CF_UNICODETEXT</code>), raw bitmap images, and copied file paths.<br>
        • Even after an application is closed, the copied password persists in physical RAM until overwritten by a subsequent copy operation or system reboot!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 52,
      runningHead: 'CH. 13 • BROWSER MEMORY EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 13 (Part 2 Continued) • Memory Traps & Best Practices</span>
      <h2>Browser Memory Forensics & Topic 13 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Summary of Browser Artifacts in RAM</span>
      <p>• <strong>Incognito History:</strong> Fully recoverable from browser heap pages in physical RAM.<br>
      • <strong>Decrypted E2EE Chats:</strong> Recoverable because plaintext must be rendered on screen.<br>
      • <strong>TLS Master Secrets:</strong> Extracted in SSLKEYLOGFILE format to decrypt captured PCAPs.<br>
      • <strong>Clipboard Caches:</strong> Plaintext copied credentials persist in shared memory buffers.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Browser Forensics in RAM (Q121–Q130)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Incognito Reality):</strong> Incognito mode only prevents saving history to disk; all visited URLs and form entries exist in plaintext in RAM (Q121).<br>
        ⚠️ <strong>Trap 2 (E2EE Endpoint Reality):</strong> Encrypted chats (WhatsApp, Signal) are readable in RAM because the endpoint must decrypt messages before displaying them on screen (Q123).<br>
        ⚠️ <strong>Trap 3 (TLS PCAP Decryption):</strong> Encrypted HTTPS network packets can be decrypted by extracting <strong>TLS Master Secrets</strong> from browser memory (Q124).<br>
        ⚠️ <strong>Trap 4 (Clipboard Persistence):</strong> Copied passwords persist in RAM buffers managed by <code>win32k.sys</code> until replaced by a new copy operation (Q126).<br>
        ⚠️ <strong>Trap 5 (Multi-Process Chrome):</strong> Network session keys and cookies reside in the <strong>Network Service</strong> process, not the main browser UI process.</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 13: Browser Forensics &amp; Comms in RAM?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q121–Q130).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="12" onclick="window.openMCQForSpread(12)">
        Practice Topic 13 Quiz (Q121–Q130) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 14: HARDWARE & HYPERVISOR ATTACKS (Spreads 26 & 27, Pages 53–56, Q131–Q140)
  // =========================================================================
  // Spread 26: Part 1 - Hypervisor Rootkits (Ring -1), SMM (Ring -2) & DMA Attacks (Pages 53–54)
  {
    spreadId: 26,
    left: {
      pageNumber: 53,
      runningHead: 'CH. 14 • HARDWARE & HYPERVISOR ATTACKS: RING -1',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 14 • Topic 14: Hardware & Hypervisor Attacks (Part 1)</span>
      <h2>Sub-OS Execution: Hypervisor Rootkits & SMM</h2>
    </div>

    <div class="intro-abstract">
      <p>Modern microprocessors enforce execution privilege rings. Beyond user-mode (Ring 3) and kernel-mode (Ring 0), advanced hardware architectures introduce subterranean execution tiers: <strong>Hypervisor mode (Ring -1)</strong> and <strong>System Management Mode (Ring -2)</strong>. Rootkits executing at these levels are completely invisible to standard OS security agents.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The CPU Privilege Ring Hierarchy (Q131, Q132)</span>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Privilege Tier</th>
            <th>Operating Context</th>
            <th>Forensic Visibility & Threats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Ring 3 (User Mode)</strong></td>
            <td>Standard user applications, web browsers, user-mode services.</td>
            <td>Full visibility via operating system APIs and Task Manager.</td>
          </tr>
          <tr>
            <td><strong>Ring 0 (Kernel Mode)</strong></td>
            <td>Operating system kernel (<code>ntoskrnl.exe</code> / <code>vmlinux</code>), core device drivers.</td>
            <td>Monitored by kernel callbacks, EDR drivers, and PatchGuard (KPP).</td>
          </tr>
          <tr>
            <td><strong>Ring -1 (Hypervisor / VMX Root) (Q131)</strong></td>
            <td>Hardware virtualization hypervisors (Hyper-V, KVM, ESXi, Xen).</td>
            <td><strong>Sub-OS Execution:</strong> Runs beneath the operating system. Hypervisor rootkits (Blue Pill, SubVirt) virtualize the running OS without its knowledge!</td>
          </tr>
          <tr>
            <td><strong>Ring -2 (System Management Mode - SMM) (Q132)</strong></td>
            <td>Motherboard UEFI/BIOS firmware executing in isolated SMRAM.</td>
            <td>Triggered by System Management Interrupts (SMI). Suspends all OS execution. Completely invisible to OS memory dumps!</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. Hypervisor Rootkits: The Blue Pill Attack (Q131)</span>
      <p>Pioneered by Joanna Rutkowska (2006), the <strong>Blue Pill</strong> attack dynamically moves a live operating system into a hardware virtual machine (VMX non-root mode):</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">The Virtualization Trap (Q131)</span>
          <span class="statute-tag">Hardware Hypervisor Rootkit</span>
        </div>
        <p>• The malware enables hardware virtualization extensions (Intel VT-x / AMD-V) and installs a thin, transparent hypervisor.<br>
        • It traps sensitive CPU instructions (e.g. <code>CPUID</code>, <code>CR3</code> writes) using <strong>VM-Exit handlers</strong>.<br>
        • <strong>Forensic Challenge:</strong> When an acquisition driver dumps physical RAM, the hypervisor can intercept the read and present an unmodified, clean page, completely concealing the rootkit!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 54,
      runningHead: 'CH. 14 • DIRECT MEMORY ACCESS (DMA) ATTACKS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 14 (Part 1 Continued) • Hardware Interception</span>
      <h2>Direct Memory Access (DMA) Attacks & IOMMU Defenses</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Direct Memory Access (DMA) Attacks (Q133, Q134)</span>
      <p>High-speed expansion protocols (PCIe, Thunderbolt, FireWire) bypass the CPU to write directly to physical DRAM:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Thunderbolt DMA Attack Mechanics (Q133)</span>
          <span class="statute-tag">Hardware Exploitation</span>
        </div>
        <p>• An attacker connects a hardware device (e.g. <strong>PCILeech</strong> on a PCIe/Thunderbolt card) into an energized locked laptop.<br>
        • The hardware issues direct PCIe DMA read commands to the DRAM controller.<br>
        • It dumps physical memory without running any software on the target OS, extracting BitLocker keys or patching kernel authentication routines in real time!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Hardware Defense: IOMMU / Kernel DMA Protection (Q134)</span>
      <p>Modern platforms defend against DMA attacks using an <strong>Input-Output Memory Management Unit (IOMMU)</strong> (Intel VT-d / AMD-Vi):</p>
      <div class="statute-card card-teal">
        <p>• The IOMMU translates device virtual addresses to physical addresses and enforces access control tables.<br>
        • <strong>Kernel DMA Protection:</strong> Windows blocks external Thunderbolt/PCIe ports until the user logs in and authenticates, preventing rogue peripherals from accessing physical memory.</p>
      </div>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 14 (Part 1/2) Complete.</strong> Turn page for Rowhammer DRAM Flips &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="13" onclick="window.openMCQForSpread(13)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q131–Q140) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 27: Part 2 - Rowhammer DRAM Disturbance Attacks & Exam Traps (Pages 55–56)
  {
    spreadId: 27,
    left: {
      pageNumber: 55,
      runningHead: 'CH. 14 • ROWHAMMER DRAM DISTURBANCE ATTACKS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 14 • Topic 14: Hardware & Hypervisor Attacks (Part 2)</span>
      <h2>Rowhammer DRAM Disturbance Attacks & Defenses</h2>
    </div>

    <div class="intro-abstract">
      <p>Rowhammer is a hardware silicon flaw where rapidly accessing specific memory rows causes electrical charge leakage into adjacent physical DRAM cells, flipping bits from 0 to 1 without software authorization.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Mechanics of the Rowhammer Attack (Q135, Q136)</span>
      <p>How an unprivileged user-mode application flips bits in kernel memory without any software bug:</p>
      <div class="statutory-grid">
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Electrical Cross-Talk (Q135)</span>
            <span class="statute-tag">Hardware Physics</span>
          </div>
          <p>• DRAM capacitors are packed millions of times closer together in modern micro-chips.<br>
          • <strong>Double-Sided Hammering:</strong> The attacker rapidly activates two 'aggressor' memory rows millions of times per second (using <code>clflush</code> to bypass CPU cache).<br>
          • Electrical voltage fluctuations cause capacitors in the adjacent 'victim' row to leak charge, flipping bits!</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Privilege Escalation via Bit Flips (Q136)</span>
            <span class="statute-tag">Page Table Manipulation</span>
          </div>
          <p>• If the flipped bit lands inside a Page Table Entry (PTE), it changes the PTE's User/Supervisor bit from 0 (Kernel) to 1 (User).<br>
          • The unprivileged process now has full write access to its own page table, allowing it to point pointers to physical kernel memory and achieve complete SYSTEM/root control!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Hardware Defenses Against Rowhammer (Q137)</span>
      <p>• <strong>Target Row Refresh (TRR):</strong> Hardware memory controllers track row activation counts and proactively refresh adjacent rows before charge leaks.<br>
      • <strong>Error-Correcting Code (ECC) RAM:</strong> Parity bits detect and correct single-bit flips, stopping standard Rowhammer attacks in enterprise servers.</p>
    </div>
      `
    },
    right: {
      pageNumber: 56,
      runningHead: 'CH. 14 • HARDWARE ATTACK EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 14 (Part 2 Continued) • Hardware Traps & Best Practices</span>
      <h2>Hardware & Hypervisor Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Summary of Hardware Attack Tiers</span>
      <p>• <strong>Ring -1:</strong> Hypervisor Rootkits (Blue Pill) virtualizing the OS.<br>
      • <strong>Ring -2:</strong> System Management Mode (SMM) executing in isolated SMRAM.<br>
      • <strong>DMA Attacks:</strong> PCIe/Thunderbolt hardware dumping memory without CPU.<br>
      • <strong>Rowhammer:</strong> Electrical disturbance flipping bits in adjacent physical DRAM rows.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Hardware & Hypervisor Attacks (Q131–Q140)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Hypervisor Ring):</strong> Hypervisor rootkits operate at <strong>Ring -1 (VMX root)</strong>, beneath the kernel (Q131).<br>
        ⚠️ <strong>Trap 2 (SMM Ring):</strong> System Management Mode executes at <strong>Ring -2</strong> out of isolated SMRAM (Q132).<br>
        ⚠️ <strong>Trap 3 (DMA Defense):</strong> DMA attacks over Thunderbolt/PCIe are blocked by the <strong>IOMMU (Kernel DMA Protection)</strong> (Q134).<br>
        ⚠️ <strong>Trap 4 (Rowhammer Cause):</strong> Rowhammer is caused by <strong>electrical charge leakage between adjacent physical DRAM rows</strong>, not a software bug (Q135).<br>
        ⚠️ <strong>Trap 5 (Rowhammer Mitigation):</strong> Enterprise servers mitigate Rowhammer using <strong>Target Row Refresh (TRR)</strong> and <strong>ECC RAM</strong> (Q137).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 14: Hardware &amp; Hypervisor Attacks?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q131–Q140).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="13" onclick="window.openMCQForSpread(13)">
        Practice Topic 14 Quiz (Q131–Q140) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 15: REVERSE ENGINEERING IN-MEMORY BINARIES & HEADER RECONSTRUCTION (Spreads 28 & 29, Pages 57–60, Q141–Q150)
  // =========================================================================
  // Spread 28: Part 1 - PE Header Wiping & Section Realignment (Pages 57–58)
  {
    spreadId: 28,
    left: {
      pageNumber: 57,
      runningHead: 'CH. 15 • REVERSE ENGINEERING IN-MEMORY BINARIES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 15 • Topic 15: In-Memory Binaries (Part 1)</span>
      <h2>PE Header Wiping & In-Memory Binary Reconstruction</h2>
    </div>

    <div class="intro-abstract">
      <p>When malware injects into memory, it often intentionally overwrites its own Portable Executable (PE) headers to thwart forensic memory carvers. Reverse engineering in-memory binaries requires reconstructing wiped headers, realigning section offsets, and resolving import address tables.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The PE Header Wiping Anti-Forensic Technique (Q141, Q142)</span>
      <p>Why do malware authors wipe headers after reflective loading?</p>
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">The Header Erasure (Q141)</span>
            <span class="statute-tag">Anti-Carving Evasion</span>
          </div>
          <p>• Once a PE binary is loaded into memory, the OS no longer needs the initial <code>IMAGE_DOS_HEADER</code> or <code>IMAGE_NT_HEADERS</code>.<br>
          • Malware issues <code>memset(base_address, 0, 0x1000)</code>, overwriting the first 4,096 bytes with zeros.<br>
          • <strong>Forensic Impact:</strong> Signature-based carvers searching for the <code>MZ</code> (<code>0x5A4D</code>) magic header skip the memory allocation entirely!</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">VAD-Based Reconstruction (Q142)</span>
            <span class="statute-tag">Header Restoration</span>
          </div>
          <p>• The memory manager's VAD tree maintains the true <code>StartingVpn</code> and <code>EndingVpn</code>.<br>
          • Forensic tools inspect the subsequent code sections (<code>.text</code>), calculate the ImageBase, synthesize a clean dummy DOS/NT header, and repair the binary for disassembly in Ghidra or IDA Pro.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Section Alignment: Disk vs RAM (Q143)</span>
      <p>A binary dumped directly from memory will fail to execute on disk due to alignment differences:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Alignment Attribute</th>
            <th>On-Disk PE File</th>
            <th>In-Memory PE Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Section Alignment (Q143)</strong></td>
            <td><code>FileAlignment</code> (typically 512 bytes). Compacted on disk.</td>
            <td><code>SectionAlignment</code> (strictly <strong>4,096 bytes / 4 KB</strong> page boundaries).</td>
          </tr>
          <tr>
            <td><strong>Section Virtual Addresses</strong></td>
            <td>Contiguous offset in file (RawAddress).</td>
            <td>Virtual Address offset (RVA) mapped to physical page frames.</td>
          </tr>
          <tr>
            <td><strong>Reconstruction Fix</strong></td>
            <td>Must convert Relative Virtual Addresses (RVA) back to Raw Offsets using PE realignment tools.</td>
            <td>Raw memory dumps have uncommitted gaps filled with zeros.</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 58,
      runningHead: 'CH. 15 • OEP FINDING & IMPORT ADDRESS TABLES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 15 (Part 1 Continued) • Unpacking & Import Tables</span>
      <h2>Unpacking, Original Entry Point (OEP) & IAT</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Unpacking & Finding the Original Entry Point (OEP) (Q144)</span>
      <p>Packed malware (UPX, Themida) encapsulates the real payload inside an encrypted layer. When executed in memory, an unpacking stub decrypts the code and jumps to the <strong>Original Entry Point (OEP)</strong>:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">The Tail Jump to OEP (Q144)</span>
          <span class="statute-tag">Unpacking Mechanics</span>
        </div>
        <p>• The unpacking stub executes in one memory range, decrypts the original binary into another range, and executes a <strong>Tail Jump</strong> (e.g. <code>jmp 0x00401234</code>) to transfer control to the real OEP.<br>
        • A memory dump captured <em>after</em> the tail jump contains the fully unpacked, plaintext binary in RAM, completely bypassing complex commercial packers!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Reconstructing the Import Address Table (IAT) (Q145)</span>
      <p>In memory, the Import Address Table (IAT) has already been resolved by the Windows loader with concrete virtual memory addresses pointing to exported DLL functions (e.g. <code>kernel32!VirtualAlloc</code>). Forensic tools match these resolved pointers against loaded DLL export tables to reconstruct the original API names.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 15 (Part 1/2) Complete.</strong> Turn page for API Unhooking, Patching Detection &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="14" onclick="window.openMCQForSpread(14)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q141–Q150) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 29: Part 2 - API Unhooking, Memory Patching & Exam Traps (Pages 59–60)
  {
    spreadId: 29,
    left: {
      pageNumber: 59,
      runningHead: 'CH. 15 • API UNHOOKING & MEMORY PATCHING',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 15 • Topic 15: In-Memory Binaries (Part 2)</span>
      <h2>API Unhooking & In-Memory Patching Detection</h2>
    </div>

    <div class="intro-abstract">
      <p>Endpoint Detection and Response (EDR) software injects user-mode inline hooks into system libraries (<code>ntdll.dll</code>) to monitor malware. In response, modern malware implements in-memory API unhooking and patch detection to blind security defenses.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. In-Line API Hooking vs Unhooking (Q146, Q147)</span>
      <p>How security tools hook APIs and how malware defeats them in memory:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Inline Hooking (JMP Hook) (Q146)</span>
            <span class="statute-tag">EDR Monitoring</span>
          </div>
          <p>• EDR overwrites the first 5 bytes of an API (e.g. <code>ntdll!NtAllocateVirtualMemory</code>) with a <code>JMP &lt;EDR_Hook_Address&gt;</code>.<br>
          • Every time malware invokes the API, control routes to the EDR for behavioral inspection before calling the kernel.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Malware Unhooking: Fresh Copies (Q147)</span>
            <span class="statute-tag">EDR Blinding</span>
          </div>
          <p>• <strong>Perun's Fart / FreshyCalls:</strong> Malware maps a fresh, clean copy of <code>ntdll.dll</code> directly from disk into memory.<br>
          • It copies the unhooked <code>.text</code> section bytes over the hooked <code>ntdll.dll</code> in memory, erasing the EDR's JMP instructions!<br>
          • <strong>Forensic Detection:</strong> Volatility's <code>windows.modscan</code> compares in-memory DLL text sections against clean on-disk copies to highlight patched bytes.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Direct System Calls (Syscalls) in Memory (Q148)</span>
      <p>Rather than calling <code>ntdll.dll</code> APIs, modern malware executes raw assembly <code>syscall</code> instructions directly with hardcoded SSNs (System Service Numbers). Because no hooked DLL function is called, user-mode EDR hooks are completely bypassed!</p>
    </div>
      `
    },
    right: {
      pageNumber: 60,
      runningHead: 'CH. 15 • IN-MEMORY REVERSE ENGINEERING EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 15 (Part 2 Continued) • Traps & Best Practices</span>
      <h2>In-Memory Binaries & Topic 15 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Summary of Binary Reconstruction Steps</span>
      <p>1. Identify unmapped VAD node carrying executable permissions.<br>
      2. Dump memory pages using <code>windows.vaddump</code>.<br>
      3. Reconstruct wiped PE headers if zeroed out.<br>
      4. Convert Virtual Address (RVA) alignment (4 KB) to disk FileAlignment (512 bytes).<br>
      5. Resolve IAT pointers to identify linked DLL functions.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: In-Memory Binaries & Reverse Engineering (Q141–Q150)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (PE Header Wiping):</strong> Malware zeroes out the initial 4 KB (MZ/PE headers) to prevent signature-based memory carving (Q141).<br>
        ⚠️ <strong>Trap 2 (Section Alignment):</strong> In memory, PE sections are aligned to <strong>4,096 bytes (4 KB)</strong> page boundaries, unlike disk files (512 bytes) (Q143).<br>
        ⚠️ <strong>Trap 3 (Tail Jump to OEP):</strong> Packed malware transitions from unpacking stub to payload via a <strong>Tail Jump</strong> to the Original Entry Point (OEP) (Q144).<br>
        ⚠️ <strong>Trap 4 (Inline Hooking Byte Pattern):</strong> EDR inline hooks replace the first 5 bytes of an API with an unconditional <strong>JMP</strong> instruction (Q146).<br>
        ⚠️ <strong>Trap 5 (Unhooking Method):</strong> Malware unhooks APIs by reading a fresh copy of <code>ntdll.dll</code> from disk and overwriting the hooked memory bytes (Q147).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 15: Reverse Engineering In-Memory Binaries?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q141–Q150).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="14" onclick="window.openMCQForSpread(14)">
        Practice Topic 15 Quiz (Q141–Q150) &rarr;
      </button>
    </div>
      `
    }
  }
];
