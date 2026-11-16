// Book 3 Spreads Part 2: Topics 6–10 (Spreads 10–19, Pages 21–40)
// High-yield DSSSB Cyber Forensic notes: RAM & Memory Forensics

module.exports = [
  // =========================================================================
  // TOPIC 6: VOLATILITY 3 CORE PROCESS PLUGINS (Spreads 10 & 11, Pages 21–24, Q51–Q60)
  // =========================================================================
  // Spread 10: Part 1 - pslist vs psscan vs pstree Traversal (Pages 21–22)
  {
    spreadId: 10,
    left: {
      pageNumber: 21,
      runningHead: 'CH. 6 • VOLATILITY 3: CORE PROCESS PLUGINS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 6 • Topic 6: Volatility 3 Process Plugins (Part 1)</span>
      <h2>Volatility 3 Process Enumeration: pslist, psscan & pstree</h2>
    </div>

    <div class="intro-abstract">
      <p><strong>Volatility 3</strong> is the premier open-source memory analysis framework, rewritten entirely in Python 3. It utilizes automated symbol table generation (Intermediate Symbol Format - ISF) to parse raw physical memory without requiring manual OS profile creation. Process triaging begins by cross-referencing three distinct process enumeration plugins.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Triad of Process Discovery Plugins (Q51–Q53)</span>
      <p>How do forensic examiners detect hidden and terminated processes in physical RAM?</p>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Plugin Name</th>
            <th>Underlying Enumeration Mechanism</th>
            <th>Strengths & Vulnerability to Evasion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>windows.pslist (Q51)</strong></td>
            <td>Traverses the kernel's doubly linked list (<code>ActiveProcessLinks</code>) starting at <code>PsActiveProcessHead</code>.</td>
            <td>Fast and shows active execution order. <strong>Blind to DKOM:</strong> Completely misses processes unlinked by rootkits!</td>
          </tr>
          <tr>
            <td><strong>windows.psscan (Q52)</strong></td>
            <td>Performs signature-based pool tag scanning across the entire physical memory dump for <code>_EPROCESS</code> pool tags (<code>Proc</code>).</td>
            <td><strong>Uncovers Hidden Artifacts:</strong> Discovers DKOM-unlinked rootkits and previously terminated/exited processes whose memory structures linger in unallocated RAM.</td>
          </tr>
          <tr>
            <td><strong>windows.pstree (Q53)</strong></td>
            <td>Reconstructs the hierarchical parent-child process tree based on PID and PPID relationships, displaying indented graphical trees.</td>
            <td>Instantly highlights abnormal parentage (e.g., <code>powershell.exe</code> spawned by <code>sqlservr.exe</code> or orphan processes whose parent exited).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Discrepancy Matrix: Hunting Rootkits via Discrepancies (Q54)</span>
      <p>Comparing the output of <code>pslist</code> against <code>psscan</code> is the classic rootkit detection technique:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Discrepancy Analysis (Q54)</span>
          <span class="statute-tag">Rootkit Indicator</span>
        </div>
        <p>• If a process appears in <code>psscan</code> with <strong>ExitTime = N/A</strong> (indicating it is still active), but is <strong>COMPLETELY ABSENT from pslist</strong>, it is a confirmed <strong>DKOM unlinked hidden process</strong>!<br>
        • If a process appears in <code>psscan</code> with a valid <code>ExitTime</code> timestamp, it represents a terminated process, allowing examiners to reconstruct historical malware execution that terminated minutes prior to RAM capture.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 22,
      runningHead: 'CH. 6 • DLLS, HANDLES & PRIVILEGES PLUGINS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 6 (Part 1 Continued) • Process Inspection</span>
      <h2>Loaded Modules, Handles & Process Privileges</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Deep Process Auditing: dlllist, handles & privileges (Q55–Q57)</span>
      <p>Once a suspicious PID is identified, secondary Volatility 3 plugins extract its granular operational footprint:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">windows.dlllist (Q55)</span>
            <span class="statute-tag">Loaded Modules</span>
          </div>
          <p>• Traverses the <code>PEB_LDR_DATA</code> module lists inside the process address space.<br>
          • Outputs: Base Address, Size, Load Path, and Module Name.<br>
          • <strong>Red Flags:</strong> DLLs loaded from <code>C:\\Users\\AppData\\Local\\Temp\\</code>, DLLs without on-disk file descriptions, or known malicious DLL names.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">windows.handles (Q56)</span>
            <span class="statute-tag">Kernel Object Handles</span>
          </div>
          <p>• Traverses the process Handle Table.<br>
          • Enumerates open Files, Directory locks, Mutant/Mutex objects, Registry keys, and Named Pipes.<br>
          • <strong>Malware Mutexes:</strong> Attackers create hardcoded Mutex objects (e.g. <code>Global\\qazwsx123</code>) to prevent multiple instances from running simultaneously.</p>
        </div>
      </div>

      <div class="statute-card card-amber" style="margin-top: 10px;">
        <div class="statute-header">
          <span class="statute-section">windows.privileges (Q57)</span>
          <span class="statute-tag">Security Token Privileges</span>
        </div>
        <p>• Dumps the token privilege array (Present, Enabled, EnabledByDefault).<br>
        • <strong>High-Risk Privileges:</strong> <code>SeDebugPrivilege</code> (allows attaching and reading memory of other processes), <code>SeImpersonatePrivilege</code> (token impersonation), <code>SeLoadDriverPrivilege</code> (loading kernel rootkits).</p>
      </div>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 6 (Part 1/2) Complete.</strong> Turn page for Command-Lines, Callbacks &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="5" onclick="window.openMCQForSpread(5)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q51–Q60) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 11: Part 2 - Kernel Callbacks, Driver Scanning & Exam Traps (Pages 23–24)
  {
    spreadId: 11,
    left: {
      pageNumber: 23,
      runningHead: 'CH. 6 • KERNEL NOTIFICATION CALLBACKS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 6 • Topic 6: Volatility 3 Process Plugins (Part 2)</span>
      <h2>Kernel Callbacks & Driver Enumeration</h2>
    </div>

    <div class="intro-abstract">
      <p>Modern kernel-mode malware and endpoint detection agents hook into Windows kernel notification routines rather than modifying legacy system call tables. Volatility 3 inspects these callback arrays to expose advanced rootkit hooks.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Kernel Notification Callbacks: windows.callbacks (Q58, Q59)</span>
      <p>Windows provides official kernel APIs allowing drivers to register callback functions that execute whenever key system events occur:</p>
      <div class="statutory-grid">
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Monitored Callbacks (Q58)</span>
            <span class="statute-tag">System Routines</span>
          </div>
          <p>• <code>PspCreateProcessNotifyRoutine</code>: Invoked whenever any process is created or terminated.<br>
          • <code>PspCreateThreadNotifyRoutine</code>: Invoked upon every thread spawn.<br>
          • <code>ObRegisterCallbacks</code>: Intercepts process handle duplication (used by antivirus to protect LSASS).</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Rootkit Abuse of Callbacks (Q59)</span>
            <span class="statute-tag">Driver Evasion</span>
          </div>
          <p>Rootkits register callbacks to strip handle permissions from security tools or terminate forensic processes on sight. <code>windows.callbacks</code> lists all registered pointers and identifies whether the pointer resolves into a legitimate signed driver or an unmapped memory region.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Kernel Drivers: windows.modules & windows.driverscan (Q60)</span>
      <p>To inspect loaded Ring 0 code, <code>windows.modules</code> traverses the <code>PsLoadedModuleList</code>, while <code>windows.driverscan</code> scans physical memory for <code>_DRIVER_OBJECT</code> structures, detecting hidden rootkit drivers unlinked from the system module list.</p>
    </div>
      `
    },
    right: {
      pageNumber: 24,
      runningHead: 'CH. 6 • VOLATILITY 3 EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 6 (Part 2 Continued) • Forensic Traps & Best Practices</span>
      <h2>Volatility 3 Process Plugins Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Synthesis of Process Investigation Workflows</span>
      <p>Standardized sequence for triaging suspicious processes in Volatility 3:</p>
      <div class="statute-card card-amber">
        <p>1. Run <code>windows.pstree</code> to identify abnormal parentage.<br>
        2. Run <code>windows.psscan</code> and diff with <code>windows.pslist</code> to uncover unlinked DKOM processes.<br>
        3. Run <code>windows.cmdline --pid &lt;PID&gt;</code> to extract the full launch command string.<br>
        4. Run <code>windows.handles --pid &lt;PID&gt;</code> to check for C2 named pipes, files, and mutants.<br>
        5. Run <code>windows.malfind --pid &lt;PID&gt;</code> to test for in-memory code injection!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Volatility 3 Process Plugins (Q51–Q60)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (pslist Vulnerability):</strong> <code>windows.pslist</code> relies entirely on <code>ActiveProcessLinks</code>; if a process is unlinked via DKOM, pslist cannot see it (Q51).<br>
        ⚠️ <strong>Trap 2 (psscan Capability):</strong> <code>windows.psscan</code> scans physical memory for <code>Proc</code> pool tags, discovering both unlinked and terminated processes (Q52).<br>
        ⚠️ <strong>Trap 3 (pstree Display):</strong> <code>windows.pstree</code> visualizes parent-child lineages based on PID/PPID (Q53).<br>
        ⚠️ <strong>Trap 4 (Handle Inspection):</strong> Mutexes and named pipes are extracted using <strong>windows.handles</strong> (Q56).<br>
        ⚠️ <strong>Trap 5 (Callback Plugin):</strong> Kernel process and thread creation hooks are audited using <strong>windows.callbacks</strong> (Q58).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 6: Volatility 3 Core Process Plugins?</strong>
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
  // TOPIC 7: VIRTUAL ADDRESS DESCRIPTORS (VAD TREES) & MALFIND (Spreads 12 & 13, Pages 25–28, Q61–Q70)
  // =========================================================================
  // Spread 12: Part 1 - VAD AVL Binary Trees & Protection Masks (Pages 25–26)
  {
    spreadId: 12,
    left: {
      pageNumber: 25,
      runningHead: 'CH. 7 • VAD TREES: ARCHITECTURE & ALLOCATIONS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 7 • Topic 7: VAD Trees & Malfind (Part 1)</span>
      <h2>Virtual Address Descriptors (VAD) & AVL Trees</h2>
    </div>

    <div class="intro-abstract">
      <p>The Windows memory manager allocates user-mode virtual memory dynamically using <strong>Virtual Address Descriptors (VADs)</strong> organized in a self-balancing binary search tree. In memory forensics, inspecting the VAD tree is the single most definitive technique for identifying injected shellcode and fileless malware.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Why VAD Trees Exist: Self-Balancing AVL Trees (Q61, Q62)</span>
      <p>When a process calls <code>VirtualAlloc</code> to reserve or commit memory, the kernel does not create an entire page table entry immediately. Instead, it creates an <code>_MMVAD</code> structure:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">The VAD AVL Binary Tree (Q61)</span>
            <span class="statute-tag">Fast O(log n) Lookup</span>
          </div>
          <p>• Root of the tree is referenced by <code>_EPROCESS.VadRoot</code>.<br>
          • Organized as an <strong>Adelson-Velsky and Landis (AVL) self-balancing binary tree</strong>.<br>
          • Each node describes a contiguous virtual address range (<code>StartingVpn</code> to <code>EndingVpn</code>), its allocation type, and protection flags.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">VAD Types: Mapped vs Private (Q62)</span>
            <span class="statute-tag">File Backing</span>
          </div>
          <p>• <strong>File-Backed / Mapped (VadImageMap):</strong> Linked directly to a physical file on disk via <code>_CONTROL_AREA</code> and <code>_FILE_OBJECT</code> (e.g. loaded DLLs, executables).<br>
          • <strong>Private / Unmapped (Vad):</strong> Dynamic memory allocated for stacks, heaps, or buffers. <em>Has ZERO corresponding file on disk!</em></p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Memory Protection Masks: The W^X Security Principle (Q63)</span>
      <p>Operating systems enforce the <strong>W^X (Write XOR Execute)</strong> principle: memory should be writable OR executable, but NEVER both simultaneously:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Protection Constant</th>
            <th>Hex Value</th>
            <th>Permissions & Normal Forensic Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>PAGE_READONLY</code></td>
            <td><code>0x02</code></td>
            <td>Read only. Constants, read-only program data (.rdata).</td>
          </tr>
          <tr>
            <td><code>PAGE_READWRITE</code></td>
            <td><code>0x04</code></td>
            <td>Read and Write. Normal data variables, heaps, thread stacks (.data).</td>
          </tr>
          <tr>
            <td><code>PAGE_EXECUTE_READ</code></td>
            <td><code>0x20</code></td>
            <td>Execute and Read. Legitimate compiled binary code (.text section).</td>
          </tr>
          <tr>
            <td><strong>PAGE_EXECUTE_READWRITE (Q63)</strong></td>
            <td><strong>0x40</strong></td>
            <td><strong>Execute, Read, and Write (RWX)!</strong> Extremely rare in legitimate software (except JIT compilers). The primary fingerprint of code injection!</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 26,
      runningHead: 'CH. 7 • MALFIND HEURISTICS & SHELLCODE HUNTING',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 7 (Part 1 Continued) • Injection Detection</span>
      <h2>Volatility 3 Malfind: The Three Golden Heuristics</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. How windows.malfind Detects Injected Code (Q64, Q65)</span>
      <p>The <code>windows.malfind</code> plugin is legendary in digital forensics. It flags memory regions that satisfy <strong>three specific criteria</strong>:</p>
      
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">The 3 Malfind Heuristic Flags (Q64)</span>
          <span class="statute-tag">Heuristic Rules</span>
        </div>
        <p>1. <strong>Executable Protection:</strong> The VAD memory range has executable permissions (specifically <code>PAGE_EXECUTE_READWRITE</code> or <code>PAGE_EXECUTE_READ</code>).<br>
        2. <strong>Unmapped / Private Memory (Vad):</strong> The memory allocation is <strong>NOT backed by any file on disk</strong> (i.e., not a legitimate DLL mapped from <code>System32</code>).<br>
        3. <strong>Committed Code:</strong> The initial bytes contain active assembly instructions or a reconstructed executable header (e.g. <code>MZ</code> / <code>PE</code> header or shellcode NOP sleds: <code>0x90 0x90</code>).</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Dumping Injected VAD Payloads (Q66)</span>
      <p>When malfind flags a suspicious injection, examiners execute:<br>
      <code>vol -f mem.raw windows.vaddump --pid &lt;PID&gt; --base &lt;BaseAddress&gt;</code><br>
      This dumps the raw binary memory pages to disk as a <code>.dmp</code> file for static analysis, reverse engineering in Ghidra/IDA, and hashing.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 7 (Part 1/2) Complete.</strong> Turn page for Shellcode Extraction, False Positives &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="6" onclick="window.openMCQForSpread(6)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q61–Q70) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 13: Part 2 - Shellcode Extraction, JIT False Positives & Exam Traps (Pages 27–28)
  {
    spreadId: 13,
    left: {
      pageNumber: 27,
      runningHead: 'CH. 7 • JIT FALSE POSITIVES & SHELLCODE CARVING',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 7 • Topic 7: VAD Trees & Malfind (Part 2)</span>
      <h2>Shellcode Analysis & JIT Compiler False Positives</h2>
    </div>

    <div class="intro-abstract">
      <p>Not every <code>PAGE_EXECUTE_READWRITE</code> memory region is malicious. Forensic examiners must differentiate between malicious shellcode payloads and legitimate Just-In-Time (JIT) compilers used by modern web browsers and language runtimes.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Just-In-Time (JIT) False Positives in Malfind (Q67)</span>
      <p>Why do Google Chrome, Microsoft Edge, and .NET applications trigger alerts in <code>malfind</code>?</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">JIT Compiler Mechanics (Q67)</span>
          <span class="statute-tag">Legitimate RWX Memory</span>
        </div>
        <p>• Modern JavaScript engines (V8 in Chrome, SpiderMonkey in Firefox) compile high-level JavaScript into native machine code in real time.<br>
        • The browser engine allocates private memory pages with <code>PAGE_EXECUTE_READWRITE</code> permissions, writes compiled machine code into them, and executes them immediately.<br>
        • <strong>Forensic Dissection:</strong> Examiners inspect the disassembly in malfind output. JIT compiler code exhibits standard JavaScript object prototypes and frequent garbage-collection pointers, whereas malware displays shellcode loops, API hashing loops (ROR13), or injected PE headers (<code>MZ</code> / <code>0x4D 0x5A</code>).</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Carving and Reconstructing Injected PE Binaries (Q68)</span>
      <p>When an attacker performs reflective DLL injection or process hollowing, the entire portable executable binary resides in the private VAD allocation:</p>
      <ul class="forensic-list">
        <li><strong>PE Header Inspection:</strong> Checking offset 0 for <code>MZ</code> (<code>0x5A4D</code>) and offset <code>e_lfanew</code> for <code>PE\0\0</code> (<code>0x00004550</code>).</li>
        <li><strong>Section Realignment:</strong> In memory, PE sections are aligned to page boundaries (SectionAlignment = 4096 bytes), whereas on disk they are aligned to 512 bytes (FileAlignment). Tools like PE-bear or Volatility's reconstruction modules realign the dump so it can be executed in an isolated sandbox.</li>
      </ul>
    </div>
      `
    },
    right: {
      pageNumber: 28,
      runningHead: 'CH. 7 • VAD FORENSIC EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 7 (Part 2 Continued) • VAD Traps & Best Practices</span>
      <h2>VAD Forensics & Topic 7 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. vadinfo vs vaddump</span>
      <p>• <strong>windows.vadinfo:</strong> Prints detailed metadata for every VAD node: Starting/Ending addresses, Protection flags, Private Memory commits, and Tag strings (e.g. <code>Vad</code>, <code>VadS</code>, <code>VadF</code>).<br>
      • <strong>windows.vaddump:</strong> Extracts the raw page bytes of each VAD node into separate binary files on the investigator's drive.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: VAD Trees & Malfind (Q61–Q70)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (VAD Tree Topology):</strong> The VAD structure is organized as a self-balancing <strong>AVL binary tree</strong>, not a hash table or B-tree (Q61).<br>
        ⚠️ <strong>Trap 2 (Root Pointer):</strong> The root of a process's VAD tree is stored at <strong>_EPROCESS.VadRoot</strong> (Q61).<br>
        ⚠️ <strong>Trap 3 (RWX Constant):</strong> The protection constant representing Read-Write-Execute permissions is <strong>PAGE_EXECUTE_READWRITE (0x40)</strong> (Q63).<br>
        ⚠️ <strong>Trap 4 (Malfind Criteria):</strong> Malfind detects memory that is <strong>executable</strong>, <strong>unmapped/private (no file backing)</strong>, and contains <strong>committed code</strong> (Q64).<br>
        ⚠️ <strong>Trap 5 (JIT False Positives):</strong> Web browser processes (Chrome, Edge) trigger malfind false positives due to JIT JavaScript compilers allocating private RWX pages (Q67).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 7: VAD Trees &amp; Malfind Analysis?</strong>
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
  // TOPIC 8: IN-MEMORY REGISTRY ANALYSIS & CREDENTIAL HARVESTING (Spreads 14 & 15, Pages 29–32, Q71–Q80)
  // =========================================================================
  // Spread 14: Part 1 - In-Memory Registry Hives & Hashdump (Pages 29–30)
  {
    spreadId: 14,
    left: {
      pageNumber: 29,
      runningHead: 'CH. 8 • IN-MEMORY REGISTRY & HASHDUMP',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 8 • Topic 8: Registry & Credentials (Part 1)</span>
      <h2>In-Memory Registry Analysis & SAM Password Hashes</h2>
    </div>

    <div class="intro-abstract">
      <p>The Windows Registry is not merely a collection of disk files; active hives are loaded directly into volatile memory as complex kernel structures (<code>_CMHIVE</code>). Forensic memory analysis allows instant extraction of SAM password hashes, system configuration keys, and persistence mechanisms without needing access to locked disk files.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. In-Memory Registry Architecture: The CMHIVE Structure (Q71, Q72)</span>
      <p>How the Windows Configuration Manager manages the registry in physical RAM:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">CMHIVE Kernel Objects (Q71)</span>
            <span class="statute-tag">Memory Pools</span>
          </div>
          <p>• When Windows boots, the kernel loads registry hives into memory pools, wrapped in an internal <code>_CMHIVE</code> structure.<br>
          • <strong>Virtual vs Physical Offset:</strong> The hive exists at a virtual memory address, but spans disjoint physical page frames.<br>
          • <strong>Volatility Plugin (windows.registry.hivelist):</strong> Scans memory for <code>CMHIVE</code> signatures (pool tag <code>CM10</code>), printing hive names and base offsets (e.g., <code>SYSTEM</code>, <code>SAM</code>, <code>SOFTWARE</code>, <code>NTUSER.DAT</code>).</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">windows.hashdump (Q72)</span>
            <span class="statute-tag">Local Account Extraction</span>
          </div>
          <p>• Locates the in-memory virtual addresses of the <strong>SYSTEM</strong> hive and the <strong>SAM</strong> (Security Account Manager) hive.<br>
          • Extracts the Syskey / BootKey from the SYSTEM hive to decrypt the SAM database.<br>
          • Outputs local user account RIDs, usernames, LM hashes, and <strong>NTLM password hashes</strong>!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Registry Persistence Hunting in Memory (Q73)</span>
      <p>Examiners query in-memory registry hives using <code>windows.registry.printkey</code> to identify active malware persistence keys:</p>
      <ul class="forensic-list">
        <li><strong>Run & RunOnce Keys:</strong> <code>HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run</code>.</li>
        <li><strong>User Shell Folders:</strong> <code>HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\User Shell Folders</code>.</li>
        <li><strong>Service Configurations:</strong> <code>HKLM\\SYSTEM\\CurrentControlSet\\Services\\</code> (detects newly registered driver services).</li>
      </ul>
    </div>
      `
    },
    right: {
      pageNumber: 30,
      runningHead: 'CH. 8 • LSASS CREDENTIAL HARVESTING & MIMIKATZ',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 8 (Part 1 Continued) • Credential Extraction</span>
      <h2>LSASS Process Internals & Credential Harvesting</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Local Security Authority Subsystem Service (LSASS) (Q74, Q75)</span>
      <p>The <strong>LSASS process (<code>lsass.exe</code>)</strong> is the crown jewel of operating system credentials. It enforces local security policies and stores active authentication tokens:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">What Lives Inside LSASS Process Memory (Q74)</span>
          <span class="statute-tag">Credential Goldmine</span>
        </div>
        <p>• <strong>WDigest Provider:</strong> In Windows 7/8 (and Windows 10 prior to hardening), WDigest cached the user's <strong>plaintext cleartext password in RAM</strong> to support HTTP digest authentication!<br>
        • <strong>Kerberos Tickets:</strong> Ticket Granting Tickets (TGT) and Ticket Granting Service (TGS) tickets, along with Kerberos session keys.<br>
        • <strong>NTLM Hashes:</strong> Active user and domain account NTLM hashes.<br>
        • <strong>Mimikatz Mechanics (Q75):</strong> Benjamin Delpy's tool injects into LSASS, locates the <code>LogonSessionList</code> doubly linked list, and decrypts credentials using the internal LSA master 3DES/AES key.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Modern Defenses: Credential Guard & Virtualization-Based Security (Q76)</span>
      <p>Introduced in Windows 10 Enterprise, <strong>Windows Defender Credential Guard</strong> neutralizes LSASS memory dumping using Virtualization-Based Security (VBS):</p>
      <div class="statute-card card-teal">
        <p>• Uses the Hyper-V hypervisor to partition memory into two isolated virtual trust levels: <strong>VTL 0 (Normal World)</strong> and <strong>VTL 1 (Secure World)</strong>.<br>
        • The actual credential secrets are moved into an isolated micro-process called <strong>LSAIso (LSA Isolated)</strong> executing inside VTL 1.<br>
        • The standard <code>lsass.exe</code> process running in VTL 0 holds only non-sensitive RPC proxy handles. <em>Even an attacker with full SYSTEM privileges or kernel rootkits running in VTL 0 cannot read VTL 1 memory!</em></p>
      </div>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 8 (Part 1/2) Complete.</strong> Turn page for DPAPI Secrets, Kerberos &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="7" onclick="window.openMCQForSpread(7)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q71–Q80) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 15: Part 2 - DPAPI Master Keys, LSA Secrets & Exam Traps (Pages 31–32)
  {
    spreadId: 15,
    left: {
      pageNumber: 31,
      runningHead: 'CH. 8 • DPAPI MASTER KEYS & LSA SECRETS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 8 • Topic 8: Registry & Credentials (Part 2)</span>
      <h2>DPAPI System Secrets & LSA Secret Extraction</h2>
    </div>

    <div class="intro-abstract">
      <p>Beyond NTLM hashes, Windows protects passwords, VPN configurations, and browser credentials using the Data Protection API (DPAPI). Memory forensics provides the master cryptographic keys needed to unlock all user DPAPI blobs.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Windows Data Protection API (DPAPI) in RAM (Q77, Q78)</span>
      <p>The Data Protection API provides symmetric encryption for sensitive user-mode applications (Google Chrome passwords, Outlook mail credentials, RDP saved logins):</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">DPAPI Master Keys (Q77)</span>
            <span class="statute-tag">Cryptographic Hierarchy</span>
          </div>
          <p>• Stored on disk in <code>%APPDATA%\\Microsoft\\Protect\\[User_SID]\\[GUID]</code>.<br>
          • <strong>Extraction from RAM:</strong> The DPAPI master keys and the DPAPI system backup key (<code>$DPAPI_SYSTEM</code>) reside inside LSASS process memory. Extracting them enables bulk automated decryption of all saved Chrome passwords and Wi-Fi pre-shared keys!</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">LSA Secrets: windows.lsadump (Q78)</span>
            <span class="statute-tag">System Secrets</span>
          </div>
          <p>• Stored inside the <code>SECURITY</code> registry hive.<br>
          • Houses service account passwords, auto-logon credentials, BitLocker recovery PINs, and computer domain machine account passwords (<code>$MACHINE.ACC</code>).</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Detecting In-Memory LSASS Dumping Attacks (Q79)</span>
      <p>Attackers commonly dump LSASS memory using legitimate Windows binaries (LOLBins) like <code>procdump.exe -ma lsass.exe</code> or PowerShell scripts. Forensic memory dumps reveal handle requests to LSASS with <code>PROCESS_VM_READ</code> (<code>0x0010</code>) and <code>PROCESS_QUERY_INFORMATION</code> (<code>0x0400</code>) permissions.</p>
    </div>
      `
    },
    right: {
      pageNumber: 32,
      runningHead: 'CH. 8 • REGISTRY & CREDENTIAL EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 8 (Part 2 Continued) • Credential Traps & Best Practices</span>
      <h2>Credential Harvesting & Topic 8 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Summary of Credential Extraction Plugins</span>
      <p>• <strong>windows.hashdump:</strong> Decrypts local user account NTLM hashes from the SAM and SYSTEM hives.<br>
      • <strong>windows.lsadump:</strong> Extracts LSA secrets and domain cached credentials.<br>
      • <strong>windows.cachedump:</strong> Decrypts MSCache v2 domain credentials (used for offline domain logins).</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Registry & Credentials (Q71–Q80)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (CMHIVE Structure):</strong> Active in-memory registry hives are wrapped inside kernel <strong>_CMHIVE</strong> structures (Q71).<br>
        ⚠️ <strong>Trap 2 (hashdump Dependencies):</strong> Extracting local password hashes via <code>hashdump</code> requires both the <strong>SYSTEM</strong> and <strong>SAM</strong> registry hives (Q72).<br>
        ⚠️ <strong>Trap 3 (LSASS Process Role):</strong> Active logon credentials, Kerberos tickets, and NTLM hashes reside in the memory space of <strong>lsass.exe</strong> (Q74).<br>
        ⚠️ <strong>Trap 4 (Credential Guard Isolation):</strong> Credential Guard isolates credential secrets inside <strong>LSAIso.exe</strong> in VTL 1 (Virtualization-Based Security), blocking LSASS memory dumping (Q76).<br>
        ⚠️ <strong>Trap 5 (DPAPI Keys):</strong> Decrypting Chrome and Outlook credentials offline requires the <strong>DPAPI Master Key</strong> extracted from LSASS memory (Q77).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 8: In-Memory Registry &amp; Credential Harvesting?</strong>
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
  // TOPIC 9: ADVANCED CODE INJECTION TECHNIQUES (Spreads 16 & 17, Pages 33–36, Q81–Q90)
  // =========================================================================
  // Spread 16: Part 1 - Classic DLL Injection, Reflective Injection & Process Hollowing (Pages 33–34)
  {
    spreadId: 16,
    left: {
      pageNumber: 33,
      runningHead: 'CH. 9 • CODE INJECTION: HOLLOWING & REFLECTIVE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 9 • Topic 9: Code Injection Techniques (Part 1)</span>
      <h2>Code Injection Archetypes: Hollowing & Reflective DLLs</h2>
    </div>

    <div class="intro-abstract">
      <p><strong>Code Injection</strong> is the evasion technique where malware executes arbitrary machine code within the virtual address space of a separate, legitimate operating system process. This bypasses host-based firewalls, blends malicious traffic into trusted processes (e.g. <code>svchost.exe</code>), and evades disk-based scanners.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Classic DLL Injection: CreateRemoteThread & LoadLibrary (Q81)</span>
      <p>The historical standard for process injection involves five sequential Windows API calls:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">The 5-Step Injection Sequence (Q81)</span>
          <span class="statute-tag">API Progression</span>
        </div>
        <p>1. <code>OpenProcess</code>: Obtains a handle to the target process with <code>PROCESS_ALL_ACCESS</code>.<br>
        2. <code>VirtualAllocEx</code>: Allocates a buffer in the target process with <code>PAGE_READWRITE</code> permissions.<br>
        3. <code>WriteProcessMemory</code>: Writes the absolute path of the malicious DLL (e.g. <code>C:\\Temp\\evil.dll</code>) into the allocated buffer.<br>
        4. <code>CreateRemoteThread</code>: Spawns a new execution thread in the target process, specifying the address of <code>kernel32!LoadLibraryA</code> as the thread start address, passing the buffer as the argument!<br>
        5. <strong>Limitation:</strong> Leaves an on-disk DLL artifact and links the module in <code>PEB_LDR_DATA</code>.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Reflective DLL Injection: Pure In-Memory Loading (Q82)</span>
      <p>Pioneered by Stephen Fewer, <strong>Reflective DLL Injection</strong> completely eliminates on-disk artifacts:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">In-Memory Linker Mechanics (Q82)</span>
          <span class="statute-tag">Fileless Execution</span>
        </div>
        <p>• The DLL binary incorporates its own custom implementation of the Windows PE loader (<code>ReflectiveLoader</code> function).<br>
        • The raw DLL bytes are written into an unmapped private RWX memory buffer via <code>VirtualAllocEx</code>.<br>
        • When executed, the <code>ReflectiveLoader</code> parses its own PE headers, resolves import addresses dynamically via <code>GetProcAddress</code>, applies base relocations, and invokes <code>DllMain</code>.<br>
        • <strong>Forensic Result:</strong> The injected DLL does NOT register with the OS loader and is <strong>completely invisible to windows.dlllist</strong>! Only VAD tree scanning (<code>windows.malfind</code>) detects it!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 34,
      runningHead: 'CH. 9 • PROCESS HOLLOWING & DOPPELGÄNGING',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 9 (Part 1 Continued) • Process Replacement</span>
      <h2>Process Hollowing & Process Doppelgänging</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Process Hollowing (RunPE Technique) (Q83, Q84)</span>
      <p>Process Hollowing spawns a legitimate process in a suspended state and hollows out its internal organs:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">The 6-Step Hollowing Sequence (Q83)</span>
          <span class="statute-tag">Process Replacement</span>
        </div>
        <p>1. <code>CreateProcess</code>: Launches a legitimate system binary (e.g. <code>svchost.exe</code>) with the <code>CREATE_SUSPENDED</code> flag (<code>0x00000004</code>).<br>
        2. <code>NtUnmapViewOfSection</code>: Unmaps the legitimate executable code from the process base address.<br>
        3. <code>VirtualAllocEx</code>: Re-allocates virtual memory at the hollowed base address with <code>PAGE_EXECUTE_READWRITE</code> permissions.<br>
        4. <code>WriteProcessMemory</code>: Writes the malicious payload's PE headers and sections into the target space.<br>
        5. <code>SetThreadContext</code>: Modifies the suspended thread's <code>EAX / RCX / RIP</code> register to point to the Entry Point of the newly injected malicious payload!<br>
        6. <code>ResumeThread</code>: Resumes execution. <em>To Task Manager and pslist, the process looks like legitimate svchost.exe, but it is running pure malware!</em></p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Process Doppelgänging: Abusing NTFS Transactions (Q85)</span>
      <p>Unlike Process Hollowing which uses suspicious unmapping APIs (<code>NtUnmapViewOfSection</code>), <strong>Process Doppelgänging</strong> abuses Transactional NTFS (TxF):</p>
      <div class="statute-card card-teal">
        <p>• The attacker creates a transacted file (an invisible temporary transaction on a legitimate binary like <code>svchost.exe</code>).<br>
        • Overwrites the transacted file with malware code and creates a section object (<code>NtCreateSection</code>) from it.<br>
        • Rolls back the transaction (so the disk file is never modified and remains completely clean!).<br>
        • Creates a process from the malicious in-memory section object (<code>NtCreateProcessEx</code>). Bypasses both disk antivirus and standard memory unmapping heuristics!</p>
      </div>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 9 (Part 1/2) Complete.</strong> Turn page for AtomBombing, Hooking &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="8" onclick="window.openMCQForSpread(8)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q81–Q90) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 17: Part 2 - AtomBombing, Ghosting & Code Injection Detection (Pages 35–36)
  {
    spreadId: 17,
    left: {
      pageNumber: 35,
      runningHead: 'CH. 9 • ATOMBOMBING & ADVANCED INJECTION',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 9 • Topic 9: Code Injection Techniques (Part 2)</span>
      <h2>AtomBombing, Process Herpaderping & Detection</h2>
    </div>

    <div class="intro-abstract">
      <p>As modern EDR agents monitor suspicious memory allocation APIs like <code>WriteProcessMemory</code> and <code>CreateRemoteThread</code>, advanced attackers invent novel execution mechanisms using legitimate Windows features like Global Atom Tables and Asynchronous Procedure Calls (APC).</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. AtomBombing: Abusing Windows Atom Tables (Q86)</span>
      <p>AtomBombing writes data into another process's address space without ever calling <code>WriteProcessMemory</code>:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">The Atom Table Abuse Mechanism (Q86)</span>
          <span class="statute-tag">EDR Bypass</span>
        </div>
        <p>• <strong>Global Atom Table:</strong> A shared system table storing strings and corresponding 16-bit integers (atoms).<br>
        • The malware calls <code>GlobalAddAtom</code> to store shellcode into the global atom table.<br>
        • It queues an Asynchronous Procedure Call (APC) via <code>NtQueueApcThread</code> to force a thread in the target process to execute <code>GlobalGetAtomName</code>.<br>
        • When the target thread enters an alertable state, it executes <code>GlobalGetAtomName</code>, pulling the shellcode from the atom table and writing it into its own memory space! Zero cross-process memory writing API alerts are generated!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Process Herpaderping vs Process Ghosting (Q87)</span>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Technique</th>
            <th>Exploitation Mechanism & EDR Evasion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Process Ghosting (Q87)</strong></td>
            <td>Creates a file &rarr; marks it for deletion (<code>FILE_DELETE_ON_CLOSE</code>) &rarr; writes payload &rarr; creates section object &rarr; deletes file &rarr; spawns process from delete-pending section. Antivirus cannot scan the file because it is deleted!</td>
          </tr>
          <tr>
            <td><strong>Process Herpaderping</strong></td>
            <td>Creates a file &rarr; writes payload &rarr; creates section &rarr; overwrites file on disk with benign bytes (e.g. <code>calc.exe</code>) &rarr; spawns process. When EDR inspects the on-disk binary, it sees benign code while memory executes malware!</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 36,
      runningHead: 'CH. 9 • CODE INJECTION EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 9 (Part 2 Continued) • Detection & Exam Traps</span>
      <h2>Code Injection Forensics & Topic 9 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Forensic Detection Checklist for Injected Processes</span>
      <p>• <strong>Memory Protection Anomalies:</strong> VAD regions with <code>PAGE_EXECUTE_READWRITE</code> permissions.<br>
      • <strong>Missing File Backing:</strong> Executable VADs mapped to anonymous physical pages (<code>Vad</code> tag) instead of disk files.<br>
      • <strong>PE Header Mismatch:</strong> Injected code contains <code>MZ</code> header at the base of an unmapped memory region.<br>
      • <strong>Thread Start Address Anomalies:</strong> A thread's <code>Win32StartAddress</code> pointing into unmapped private heap memory.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Code Injection Techniques (Q81–Q90)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Classic DLL Injection API):</strong> Classic DLL injection uses <code>VirtualAllocEx</code>, <code>WriteProcessMemory</code>, and <code>CreateRemoteThread</code> calling <code>LoadLibraryA</code> (Q81).<br>
        ⚠️ <strong>Trap 2 (Reflective Injection):</strong> Reflective DLL injection builds a custom PE loader inside the DLL, executing in memory without touching disk or registering in <code>PEB_LDR_DATA</code> (Q82).<br>
        ⚠️ <strong>Trap 3 (Process Hollowing Unmap):</strong> Process Hollowing unmaps the legitimate code using <strong>NtUnmapViewOfSection</strong> before writing malicious PE bytes (Q83).<br>
        ⚠️ <strong>Trap 4 (Doppelgänging Mechanism):</strong> Process Doppelgänging abuses <strong>Transactional NTFS (TxF)</strong> to execute payloads without modifying disk files (Q85).<br>
        ⚠️ <strong>Trap 5 (AtomBombing Mechanism):</strong> AtomBombing abuses <strong>Global Atom Tables</strong> and Asynchronous Procedure Calls (APC) to inject data without <code>WriteProcessMemory</code> (Q86).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 9: Advanced Code Injection Techniques?</strong>
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
  // TOPIC 10: LINUX MEMORY FORENSICS (Spreads 18 & 19, Pages 37–40, Q91–Q100)
  // =========================================================================
  // Spread 18: Part 1 - task_struct, mm_struct & LiME Acquisition (Pages 37–38)
  {
    spreadId: 18,
    left: {
      pageNumber: 37,
      runningHead: 'CH. 10 • LINUX MEMORY FORENSICS: TASK_STRUCT',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 10 • Topic 10: Linux Memory Forensics (Part 1)</span>
      <h2>Linux Kernel Internals: task_struct & mm_struct</h2>
    </div>

    <div class="intro-abstract">
      <p>Linux powers the majority of cloud servers, supercomputers, Android devices, and enterprise infrastructure. While Windows uses <code>_EPROCESS</code>, Linux represents executing processes using the <strong><code>task_struct</code></strong> structure. Forensic memory analysis in Linux requires navigating kernel task lists, memory descriptors, and virtual memory areas.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Linux Process Record: task_struct (Q91, Q92)</span>
      <p>In the Linux kernel, every process and thread is represented by a large <code>task_struct</code> structure defined in <code>&lt;linux/sched.h&gt;</code>:</p>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Structure Field</th>
            <th>Type</th>
            <th>Forensic Meaning & Evidentiary Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>tasks (Q91)</strong></td>
            <td><code>struct list_head</code></td>
            <td>Circular doubly linked list linking all processes in the system. The Linux equivalent of Windows <code>ActiveProcessLinks</code>!</td>
          </tr>
          <tr>
            <td><strong>pid (Q92)</strong></td>
            <td><code>pid_t</code></td>
            <td>Process ID (or Thread ID in multi-threaded processes).</td>
          </tr>
          <tr>
            <td><strong>comm (Q92)</strong></td>
            <td><code>char[16]</code></td>
            <td>Executable name truncated to <strong>15 characters</strong> plus null terminator (e.g. <code>apache2</code>, <code>bash</code>).</td>
          </tr>
          <tr>
            <td><strong>mm (Q93)</strong></td>
            <td><code>struct mm_struct*</code></td>
            <td>Points to the process's memory descriptor. Contains <code>pgd</code> (Page Global Directory - the CR3 base!).</td>
          </tr>
          <tr>
            <td><strong>cred</strong></td>
            <td><code>const struct cred*</code></td>
            <td>Real and effective UIDs/GIDs (UID 0 = root). Modified by kernel privilege escalation exploits.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. Virtual Memory Descriptor: mm_struct & vm_area_struct (Q93, Q94)</span>
      <p>Inside <code>task_struct</code>, the <code>mm</code> pointer references <code>mm_struct</code>, which manages user virtual address space:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Virtual Memory Areas (VMA) (Q94)</span>
          <span class="statute-tag">vm_area_struct</span>
        </div>
        <p>• Every contiguous range of virtual memory is described by a <code>vm_area_struct</code> structure (the Linux equivalent of Windows VAD!).<br>
        • Organized as both a doubly linked list and a red-black tree (<code>mm_rb</code>).<br>
        • <strong>Volatility Plugin:</strong> <code>linux.proc.Maps</code> dumps these VMAs, revealing mapped shared libraries (<code>.so</code>), dynamic heaps, thread stacks, and injected memory regions.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 38,
      runningHead: 'CH. 10 • LIME ACQUISITION & SYMBOL MAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 10 (Part 1 Continued) • Linux Acquisition & Profiles</span>
      <h2>LiME Acquisition & Volatility 3 Symbol Tables</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Live Linux Memory Acquisition: LiME (Linux Memory Extractor) (Q95)</span>
      <p>Capturing volatile memory on live Linux systems is complicated by memory protections and the absence of standardized APIs:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">LiME Kernel Module Mechanics (Q95)</span>
          <span class="statute-tag">LKM Compilation</span>
        </div>
        <p>• <strong>Kernel Module Compilation:</strong> Must be compiled as a Loadable Kernel Module (<code>lime.ko</code>) matching the exact kernel version (<code>uname -r</code>) of the target machine.<br>
        • <strong>Network Streaming Mode:</strong> By executing <code>insmod lime.ko "path=tcp:4444 format=lime"</code>, LiME listens on port 4444. The forensic workstation connects via netcat (<code>nc target_ip 4444 &gt; ram.lime</code>) to stream memory over the network, leaving <strong>zero bytes written to the suspect hard disk</strong>!<br>
        • <strong>Lime Format:</strong> Includes fixed 32-byte headers specifying physical start and end addresses for each memory block, skipping physical memory holes.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Volatility 3 Linux Symbol Generation (Q96)</span>
      <p>While Volatility 2 required compiling complex ZIP profiles with System.map and module dwarf files, <strong>Volatility 3 uses JSON-based Intermediate Symbol Format (ISF)</strong> tables generated from kernel DWARF debug symbols (<code>vmlinux</code>), automatically matching Linux kernel banners.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 10 (Part 1/2) Complete.</strong> Turn page for Syscall Hooking, LKM Rootkits &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="9" onclick="window.openMCQForSpread(9)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q91–Q100) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 19: Part 2 - Syscall Table Hooking, LKM Rootkits & Exam Traps (Pages 39–40)
  {
    spreadId: 19,
    left: {
      pageNumber: 39,
      runningHead: 'CH. 10 • SYSCALL HOOKS & LKM ROOTKITS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 10 • Topic 10: Linux Memory Forensics (Part 2)</span>
      <h2>Syscall Table Hooking & Linux Rootkit Detection</h2>
    </div>

    <div class="intro-abstract">
      <p>Sophisticated Linux malware operates in kernel space using Loadable Kernel Modules (LKM). By modifying the system call dispatch table or function pointer arrays, rootkits intercept administrative commands like <code>ls</code>, <code>ps</code>, and <code>netstat</code>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. System Call Table Hooking: sys_call_table (Q97, Q98)</span>
      <p>Whenever user programs invoke a system call (e.g. <code>read</code>, <code>open</code>, <code>getdents64</code>), execution routes through the kernel's <strong><code>sys_call_table</code></strong> array:</p>
      <div class="statutory-grid">
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">The Hooking Mechanism (Q97)</span>
            <span class="statute-tag">Pointer Overwrite</span>
          </div>
          <p>• The kernel-mode rootkit disables the CPU Write-Protect (WP) bit in the <code>CR0</code> control register.<br>
          • It replaces the pointer to <code>sys_getdents64</code> (directory reading) with a pointer to its own malicious function.<br>
          • When a system administrator types <code>ls</code>, the hooked syscall filters out files matching the rootkit's prefix (e.g. <code>evil_*</code>), rendering files invisible on disk!</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Detection via Volatility (Q98)</span>
            <span class="statute-tag">linux.check_syscall</span>
          </div>
          <p>• <code>linux.check_syscall</code> evaluates every pointer in the <code>sys_call_table</code>.<br>
          • Compares each address against the system's official <code>System.map</code> or kernel symbol table.<br>
          • Any syscall pointer that resolves into an unregistered memory range or an unlinked LKM driver is flagged immediately!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Detecting Hidden Linux Kernel Modules (Q99)</span>
      <p>LKM rootkits unlink themselves from the kernel's <code>modules</code> linked list (so <code>lsmod</code> reports nothing). Volatility's <code>linux.check_modules</code> scans physical memory for module structures, exposing unlinked kernel drivers.</p>
    </div>
      `
    },
    right: {
      pageNumber: 40,
      runningHead: 'CH. 10 • LINUX FORENSIC EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 10 (Part 2 Continued) • Linux Traps & Best Practices</span>
      <h2>Linux Memory Forensics & Topic 10 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Core Volatility 3 Linux Plugins Reference</span>
      <p>• <strong>linux.pslist:</strong> Traverses the <code>task_struct-&gt;tasks</code> circular doubly linked list.<br>
      • <strong>linux.psaux:</strong> Displays full command-line arguments and environment variables.<br>
      • <strong>linux.sockstat:</strong> Extracts active TCP/UDP network sockets from kernel memory.<br>
      • <strong>linux.check_syscall:</strong> Discovers hooked system call table pointers.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Linux Memory Forensics (Q91–Q100)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Linux Process Structure):</strong> A running Linux process is represented in the kernel by <strong>task_struct</strong> (Q91).<br>
        ⚠️ <strong>Trap 2 (Executable Name Length):</strong> In Linux, <code>comm</code> inside <code>task_struct</code> is strictly limited to <strong>15 characters</strong> plus null terminator (Q92).<br>
        ⚠️ <strong>Trap 3 (VMA Structure):</strong> Contiguous virtual address ranges in Linux processes are described by <strong>vm_area_struct</strong> (Q94).<br>
        ⚠️ <strong>Trap 4 (LiME Network Feature):</strong> LiME can stream raw physical memory directly across a network socket over TCP to avoid writing to the evidence disk (Q95).<br>
        ⚠️ <strong>Trap 5 (Syscall Hooking Check):</strong> Syscall table modifications are detected in Volatility using <strong>linux.check_syscall</strong> (Q98).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 10: Linux Memory Forensics?</strong>
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
