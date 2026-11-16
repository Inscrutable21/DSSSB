// Book 3 Spreads Part 4: Topics 16–20 (Spreads 30–39, Pages 61–80)
// High-yield DSSSB Cyber Forensic notes: RAM & Memory Forensics

module.exports = [
  // =========================================================================
  // TOPIC 16: NETWORK SOCKETS IN MEMORY & C2 CONNECTION HUNTING (Spreads 30 & 31, Pages 61–64, Q151–Q160)
  // =========================================================================
  // Spread 30: Part 1 - In-Memory Network Artifacts & windows.netscan (Pages 61–62)
  {
    spreadId: 30,
    left: {
      pageNumber: 61,
      runningHead: 'CH. 16 • NETWORK SOCKETS IN MEMORY',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 16 • Topic 16: Network Sockets in RAM (Part 1)</span>
      <h2>In-Memory Network Forensics & Pool Tag Scanning</h2>
    </div>

    <div class="intro-abstract">
      <p>While disk forensics provides limited historical network artifacts, physical RAM preserves the operating system's live TCP/IP network stack. Memory analysis extracts active and closed network connections, listening ports, remote command-and-control (C2) servers, and binds every network socket to its originating process ID.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Why In-Memory Network Analysis Dominates Live netstat (Q151)</span>
      <p>Why do forensic examiners extract network connections from a RAM dump rather than typing <code>netstat -ano</code> on the live suspect machine?</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">The Rootkit Blinding Flaw</span>
            <span class="statute-tag">User-Space Evasion</span>
          </div>
          <p>Running <code>netstat</code> executes user-mode queries via <code>iphlpapi.dll</code>. Modern rootkits hook Winsock APIs or filter TCP/IP drivers (<code>tcpip.sys</code>) to conceal malicious network connections from administrative tools.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">The Power of windows.netscan (Q151)</span>
            <span class="statute-tag">Direct Pool Tag Scanning</span>
          </div>
          <p>• Scans physical memory for TCP endpoint and UDP listener structures.<br>
          • <strong>Uncovers Concealed Sockets:</strong> Directly reads kernel socket objects, bypassing user-space and kernel API hooks entirely!<br>
          • <strong>Recovers Closed Connections:</strong> Extracts sockets that were closed or terminated minutes before acquisition whose memory pages have not yet been reused.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Kernel Network Pool Tags & Structures (Q152, Q153)</span>
      <p>In modern Windows (Vista through Windows 11), the TCP/IP stack (<code>tcpip.sys</code>) allocates network objects from the NonPagedPool using distinct pool tags:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Pool Tag</th>
            <th>Kernel Object Structure</th>
            <th>Protocol & Forensic Evidentiary Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><code>TcpE</code> (Q152)</strong></td>
            <td><code>_TCP_ENDPOINT</code></td>
            <td>Active and closed <strong>TCP connections</strong>. Contains Local/Remote IP, Local/Remote Port, Connection State, and owning PID.</td>
          </tr>
          <tr>
            <td><strong><code>TcpL</code> (Q152)</strong></td>
            <td><code>_TCP_LISTENER</code></td>
            <td>Listening TCP ports (services awaiting incoming connections, e.g. web servers, backdoors).</td>
          </tr>
          <tr>
            <td><strong><code>UdpA</code> (Q152)</strong></td>
            <td><code>_UDP_ENDPOINT</code></td>
            <td>Active <strong>UDP listeners</strong> (DNS, DHCP, streaming protocols).</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 62,
      runningHead: 'CH. 16 • TCP STATE MACHINES & REVERSE SHELLS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 16 (Part 1 Continued) • TCP State Tracking</span>
      <h2>TCP State Machines & Reverse Shell Detection</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Interpreting TCP Connection States in RAM (Q154)</span>
      <p>Volatility's <code>windows.netscan</code> displays the exact TCP state machine status for every endpoint:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">High-Yield Forensic TCP States (Q154)</span>
          <span class="statute-tag">Protocol State</span>
        </div>
        <p>• <strong>LISTENING:</strong> Process is waiting for an incoming connection request on a local port (e.g., backdoor bind shell).<br>
        • <strong>SYN_SENT:</strong> Handset sent a connection request (SYN) and is awaiting ACK. If recurring, indicates outbound C2 beaconing or network port scanning!<br>
        • <strong>ESTABLISHED:</strong> Active two-way communication session currently transmitting data.<br>
        • <strong>TIME_WAIT / CLOSE_WAIT:</strong> Connection recently closed. The socket remains in kernel memory for 30–120 seconds, allowing examiners to prove historical communication!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Detecting Reverse Shells in Memory (Q155, Q156)</span>
      <p>A <strong>Reverse Shell</strong> is the classic attack vector where a target machine initiates an outbound TCP connection to an attacker's listening C2 server (bypassing inbound firewalls):</p>
      <div class="statute-card card-purple">
        <p>• <strong>The Signature in netscan:</strong> A command shell (<code>cmd.exe</code> or <code>powershell.exe</code>) has an active <code>ESTABLISHED</code> TCP socket connection pointing to an external public IP address on an unusual port (e.g. 4444, 8080, 1337).<br>
        • <strong>Process-to-Socket Binding:</strong> Under normal conditions, <code>cmd.exe</code> NEVER opens network sockets! Finding a network socket owned by a shell PID is undeniable proof of a reverse shell compromise.</p>
      </div>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 16 (Part 1/2) Complete.</strong> Turn page for C2 Hunting, Beaconing &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="15" onclick="window.openMCQForSpread(15)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q151–Q160) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 31: Part 2 - C2 IP Correlation, Process-to-Socket Binding & Exam Traps (Pages 63–64)
  {
    spreadId: 31,
    left: {
      pageNumber: 63,
      runningHead: 'CH. 16 • C2 CORRELATION & SOCKET BINDING',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 16 • Topic 16: Network Sockets in RAM (Part 2)</span>
      <h2>C2 IP Correlation & Process-to-Socket Binding</h2>
    </div>

    <div class="intro-abstract">
      <p>Extracting network connections from memory is only half the battle. Digital forensic investigators must correlate socket handles against process trees, DNS caches, and external threat intelligence feeds to unmask multi-stage adversary operations.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Process-to-Socket Binding: The PID Link (Q157, Q158)</span>
      <p>Every <code>_TCP_ENDPOINT</code> structure contains an offset storing the <strong>PID (Process ID)</strong> of the owning process:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Owning Process Cross-Check (Q157)</span>
            <span class="statute-tag">Correlation Pipeline</span>
          </div>
          <p>• Volatility takes the PID from the socket and checks if that PID exists in <code>ActiveProcessLinks</code>.<br>
          • If the PID does NOT exist in <code>pslist</code> but exists in <code>psscan</code>, the socket belongs to a <strong>hidden, unlinked rootkit process</strong>!<br>
          • If the PID belongs to <code>svchost.exe</code>, examiners cross-reference the thread IDs against <code>windows.dlllist</code> to determine which specific Windows service is communicating.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">In-Memory DNS Cache Carving (Q158)</span>
            <span class="statute-tag">Domain Name Resolution</span>
          </div>
          <p>The Windows DNS Client service (<code>dnscache</code>) maintains resolved domain-to-IP mappings in RAM. Carving these structures reveals what malicious domain names the suspect host looked up prior to establishing raw TCP sockets!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Detecting Process Injection via Network Sockets (Q159)</span>
      <p>When malware injects into a legitimate binary (e.g. injecting Cobalt Strike into <code>spoolsv.exe</code> or <code>notepad.exe</code>), the resulting network connection is registered under the innocent binary's PID. Finding <code>notepad.exe</code> connected to an external Russian or Chinese IP address is an immediate indicator of process injection!</p>
    </div>
      `
    },
    right: {
      pageNumber: 64,
      runningHead: 'CH. 16 • NETWORK FORENSIC EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 16 (Part 2 Continued) • Network Traps & Best Practices</span>
      <h2>In-Memory Network Forensics & Topic 16 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Summary of Network Extraction Workflows</span>
      <p>1. Run <code>windows.netscan</code> to dump all TCP/UDP endpoints, states, and owning PIDs.<br>
      2. Filter for external non-RFC1918 IP addresses (ignoring <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code>, <code>192.168.0.0/16</code>).<br>
      3. Cross-reference owning PIDs against <code>windows.pstree</code> to check for shell binaries (<code>cmd</code>, <code>powershell</code>).<br>
      4. Correlate with in-memory DNS cache entries to identify C2 domains.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Network Sockets in RAM (Q151–Q160)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (netscan Mechanism):</strong> <code>windows.netscan</code> uses pool tag scanning to extract sockets from kernel memory, bypassing user-mode API rootkits (Q151).<br>
        ⚠️ <strong>Trap 2 (Network Pool Tags):</strong> The pool tag for TCP endpoints is <strong>TcpE</strong>, for TCP listeners is <strong>TcpL</strong>, and for UDP endpoints is <strong>UdpA</strong> (Q152).<br>
        ⚠️ <strong>Trap 3 (Closed Connections):</strong> <code>netscan</code> can recover <strong>recently closed connections</strong> whose memory pages have not yet been overwritten (Q151, Q154).<br>
        ⚠️ <strong>Trap 4 (Reverse Shell Signature):</strong> A reverse shell is characterized by a shell process (<code>cmd.exe</code>) owning an outbound <strong>ESTABLISHED</strong> socket to an external IP (Q155).<br>
        ⚠️ <strong>Trap 5 (Service Disambiguation):</strong> Sockets owned by <code>svchost.exe</code> require thread-level DLL inspection to identify the specific communicating service (Q157).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 16: Network Sockets in Memory?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q151–Q160).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="15" onclick="window.openMCQForSpread(15)">
        Practice Topic 16 Quiz (Q151–Q160) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 17: EXTRACTION OF ENCRYPTION KEYS FROM MEMORY (Spreads 32 & 33, Pages 65–68, Q161–Q170)
  // =========================================================================
  // Spread 32: Part 1 - BitLocker FVEK & AES Key Schedules in RAM (Pages 65–66)
  {
    spreadId: 32,
    left: {
      pageNumber: 65,
      runningHead: 'CH. 17 • EXTRACTION OF ENCRYPTION KEYS: BITLOCKER',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 17 • Topic 17: Extraction of Encryption Keys (Part 1)</span>
      <h2>BitLocker Full Volume Encryption Keys in RAM</h2>
    </div>

    <div class="intro-abstract">
      <p>Full Volume Encryption (FVE) protects data at rest by encrypting every physical sector of a storage volume. However, while a volume is actively mounted and unlocked, the master symmetric encryption key must reside in volatile memory for the CPU and storage driver to perform on-the-fly encryption and decryption.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. BitLocker Key Architecture: VMK vs FVEK (Q161, Q162)</span>
      <p>Understanding the cryptographic key hierarchy of Microsoft BitLocker:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Volume Master Key (VMK) (Q161)</span>
            <span class="statute-tag">Key Encrypting Key</span>
          </div>
          <p>• Protected by key protectors: TPM chip, user recovery password, or startup USB key.<br>
          • Used solely to encrypt and protect the Full Volume Encryption Key.<br>
          • Never used to encrypt raw hard drive sectors directly.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Full Volume Encryption Key (FVEK) (Q161, Q162)</span>
            <span class="statute-tag">Direct Data Encryption</span>
          </div>
          <p>• The actual symmetric <strong>AES-128 or AES-256</strong> (in XTS or CBC mode) key that encrypts physical sectors.<br>
          • <strong>Resident in RAM:</strong> While the BitLocker drive is mounted, the FVEK is held inside the kernel memory space of the storage filter driver (<strong><code>fvevol.sys</code></strong>)!<br>
          • <strong>Forensic Result:</strong> Dumping physical RAM allows immediate extraction of the plaintext FVEK, unlocking the seized drive offline without needing the TPM or recovery password!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Extracting BitLocker Keys with Volatility 3 (Q163)</span>
      <p>Examiners run the dedicated plugin: <code>vol -f mem.raw windows.bitlocker</code>:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Plugin Extraction Output (Q163)</span>
          <span class="statute-tag">Forensic Artifact</span>
        </div>
        <p>• Scans NonPagedPool memory for BitLocker metadata headers.<br>
        • Outputs: Target Volume GUID, Cipher Algorithm (e.g. <code>XTS-AES 256</code>), and the raw 32-byte hexadecimal <strong>FVEK key</strong>.<br>
        • The extracted FVEK key is fed directly into open-source disk decryption tools (e.g. <code>dislocker</code> on Linux) to mount and decrypt the physical BitLocker image!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 66,
      runningHead: 'CH. 17 • AES KEY SCHEDULE CARVING IN RAM',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 17 (Part 1 Continued) • Cryptographic Key Hunting</span>
      <h2>AES Key Schedules & Mathematical Key Carving</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Mathematical Carving of AES Key Schedules (Find-AES) (Q164, Q165)</span>
      <p>How do forensic tools discover AES encryption keys in a multi-gigabyte memory dump without knowing what software created them?</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">The AES Key Expansion Property (Q164)</span>
          <span class="statute-tag">Algebraic Determinism</span>
        </div>
        <p>• When software performs AES encryption, it executes the <strong>AES Key Expansion algorithm</strong>, transforming the master key into multiple <strong>Round Keys</strong> (10 rounds for AES-128, 14 rounds for AES-256) cached in RAM.<br>
        • The mathematical relationship between consecutive round keys is completely deterministic (governed by the Rijndael S-Box and Rcon constants).<br>
        • <strong>Tools (findaes, aeskeyfind) (Q165):</strong> Scan physical memory for byte sequences that satisfy the strict mathematical invariants of the AES key schedule. When found, the algorithms reverse the expansion to reconstruct the original master symmetric key in seconds!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. TrueCrypt and VeraCrypt In-Memory Keys (Q166)</span>
      <p>Like BitLocker, open-source disk encryption tools (TrueCrypt, VeraCrypt) hold their master volume encryption keys in non-paged kernel pool memory. Volatility's <code>windows.truecrypt</code> and <code>windows.veracrypt</code> plugins locate the volume headers and dump the 64-byte plaintext keys.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 17 (Part 1/2) Complete.</strong> Turn page for Cold Boot Mitigation, Hash Verification &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="16" onclick="window.openMCQForSpread(16)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q161–Q170) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 33: Part 2 - Cold Boot Defenses, Hash Verification & Exam Traps (Pages 67–68)
  {
    spreadId: 33,
    left: {
      pageNumber: 67,
      runningHead: 'CH. 17 • COLD BOOT DEFENSES & HASH INTEGRITY',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 17 • Topic 17: Extraction of Encryption Keys (Part 2)</span>
      <h2>Anti-Key-Carving Defenses & Memory Hash Integrity</h2>
    </div>

    <div class="intro-abstract">
      <p>Modern security architectures implement defensive countermeasures to prevent encryption keys from lingering in physical memory. Simultaneously, evidentiary admissibility mandates strict cryptographic hashing of memory dumps.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Defending Keys in Memory: TPM Key Purging & TRESOR (Q167, Q168)</span>
      <p>How security architects attempt to block memory key extraction:</p>
      <div class="statutory-grid">
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">CPU Register Key Storage (TRESOR) (Q167)</span>
            <span class="statute-tag">RAM-Free Crypto</span>
          </div>
          <p>• Research patches (e.g. TRESOR) store the master AES key exclusively inside <strong>CPU debug registers (DR0–DR7)</strong> or hardware AVX/SSE registers.<br>
          • The key NEVER touches physical DRAM! Dumping RAM yields zero key material, completely neutralizing Cold Boot attacks and DMA dumping.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Modern Standby Key Purging (Q168)</span>
            <span class="statute-tag">Windows Hardening</span>
          </div>
          <p>In modern Windows Connected Standby, the OS purges master volume keys from RAM when entering sleep mode, requiring user authentication upon wake to reload keys from the TPM.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Cryptographic Hash Verification of Memory Images (Q169)</span>
      <p>Under Indian Evidence Act Sec 65B and BSA Sec 63, the forensic integrity of a memory dump is proven using cryptographic digests (<strong>SHA-256</strong>). The acquisition tool calculates the hash during capture. Any post-acquisition modification of a single bit invalidates the hash and taints courtroom admissibility.</p>
    </div>
      `
    },
    right: {
      pageNumber: 68,
      runningHead: 'CH. 17 • ENCRYPTION KEY EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 17 (Part 2 Continued) • Key Extraction Traps</span>
      <h2>Key Extraction & Topic 17 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Summary of Key Extraction Strategies</span>
      <p>• <strong>BitLocker:</strong> Extract FVEK from <code>fvevol.sys</code> kernel memory using <code>windows.bitlocker</code>.<br>
      • <strong>Mathematical Carving:</strong> Use <code>findaes</code> / <code>aeskeyfind</code> to detect AES key schedules.<br>
      • <strong>TrueCrypt / VeraCrypt:</strong> Extract plaintext volume keys from NonPagedPool.<br>
      • <strong>TRESOR Defense:</strong> Keeps AES keys inside CPU debug registers, avoiding DRAM entirely.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Extraction of Encryption Keys (Q161–Q170)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (FVEK vs VMK):</strong> The key that directly encrypts disk sectors and resides in RAM is the <strong>Full Volume Encryption Key (FVEK)</strong>, not the VMK (Q161, Q162).<br>
        ⚠️ <strong>Trap 2 (BitLocker Volatility Plugin):</strong> The Volatility 3 plugin for extracting BitLocker keys is <strong>windows.bitlocker</strong> (Q163).<br>
        ⚠️ <strong>Trap 3 (AES Schedule Math):</strong> AES key carvers (findaes) work by detecting the <strong>mathematical relationship of AES Round Keys</strong> created by key expansion (Q164).<br>
        ⚠️ <strong>Trap 4 (TRESOR Security):</strong> TRESOR avoids RAM extraction by storing AES keys in <strong>CPU debug registers</strong> (Q167).<br>
        ⚠️ <strong>Trap 5 (Kernel Driver Host):</strong> In Windows, BitLocker keys reside in the memory space of the <strong>fvevol.sys</strong> storage filter driver (Q162).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 17: Extraction of Encryption Keys from Memory?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q161–Q170).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="16" onclick="window.openMCQForSpread(16)">
        Practice Topic 17 Quiz (Q161–Q170) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 18: LIVE MEMORY DEBUGGING WITH WINDBG & CRASH DUMPS (Spreads 34 & 35, Pages 69–72, Q171–Q180)
  // =========================================================================
  // Spread 34: Part 1 - WinDbg Kernel Debugging Commands (!process, !peb, !pool) (Pages 69–70)
  {
    spreadId: 34,
    left: {
      pageNumber: 69,
      runningHead: 'CH. 18 • LIVE MEMORY DEBUGGING: WINDBG',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 18 • Topic 18: Live Debugging & WinDbg (Part 1)</span>
      <h2>Kernel Debugging with WinDbg & Crash Analysis</h2>
    </div>

    <div class="intro-abstract">
      <p>While Volatility is the premier post-mortem Python analysis framework, Microsoft's official <strong>WinDbg</strong> kernel debugger is the native authority on Windows internal structures. Digital forensic examiners use WinDbg to parse crash dumps, inspect kernel pools, and evaluate live systems over debugging interfaces.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Core WinDbg Forensic Commands (Q171, Q172)</span>
      <p>Essential WinDbg extension commands for memory forensic investigations:</p>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>WinDbg Command</th>
            <th>Target Subsystem</th>
            <th>Forensic Operation & Evidentiary Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><code>!process 0 0</code> (Q171)</strong></td>
            <td>Kernel Process List</td>
            <td>Dumps a high-level summary of all active processes: <code>_EPROCESS</code> base address, CID (PID/PPID), CR3 DirectoryBase, ImageFileName.</td>
          </tr>
          <tr>
            <td><strong><code>!process &lt;Addr&gt; 7</code> (Q171)</strong></td>
            <td>Deep Process Analysis</td>
            <td>Dumps exhaustive detail: thread list, call stacks, VAD root, environment variables, loaded DLLs, and token privileges.</td>
          </tr>
          <tr>
            <td><strong><code>!peb &lt;Address&gt;</code> (Q172)</strong></td>
            <td>Process Environment</td>
            <td>Evaluates the user-mode PEB: <code>BeingDebugged</code> flag, full CommandLine, loaded module lists, and environment block strings.</td>
          </tr>
          <tr>
            <td><strong><code>!poolfind &lt;Tag&gt;</code> (Q173)</strong></td>
            <td>Kernel Pool Memory</td>
            <td>Scans physical and virtual memory for specific 4-byte pool tags (e.g. <code>!poolfind Proc</code> or <code>!poolfind TcpE</code>).</td>
          </tr>
          <tr>
            <td><strong><code>!pte &lt;VirtualAddress&gt;</code></strong></td>
            <td>Page Table Management</td>
            <td>Evaluates the hardware Page Table Entry (PTE) for a given address, displaying Valid bit, Dirty bit, and physical Page Frame Number (PFN).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. WinDbg Symbol Configuration: The Microsoft Symbol Server (Q174)</span>
      <p>To accurately parse kernel structures, WinDbg must load debugging symbols (PDB files) matching the target operating system build:<br>
      <code>.sympath srv*C:\\Symbols*https://msdl.microsoft.com/download/symbols</code><br>
      Without valid symbols, structure evaluation commands (<code>dt _EPROCESS</code>) fail to resolve field offsets.</p>
    </div>
      `
    },
    right: {
      pageNumber: 70,
      runningHead: 'CH. 18 • CRASH DUMP FORMATS & CONVERSIONS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 18 (Part 1 Continued) • Crash Dump Formats</span>
      <h2>Windows Crash Dump Formats & VM Conversion</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Three Windows Crash Dump Tiers (Q175, Q176)</span>
      <p>When a Windows system experiences a BugCheck (BSOD) or manual crash dump, it writes memory to disk according to configured tiers:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Crash Dump Format</th>
            <th>Memory Captured</th>
            <th>Forensic Utility & Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Complete Memory Dump (Q175)</strong></td>
            <td><strong>100% of Physical RAM.</strong> Exact equivalent of a raw physical DD image!</td>
            <td>Highest forensic value. Contains all user processes, kernel structures, network sockets, and encryption keys.</td>
          </tr>
          <tr>
            <td><strong>Kernel Memory Dump (Q175)</strong></td>
            <td>Captures only <strong>Kernel-Mode memory</strong> (skips user-mode process address spaces).</td>
            <td>Smaller file size (~300 MB to 2 GB). Preserves drivers, network tables, and kernel rootkits, but omits user browser/app data.</td>
          </tr>
          <tr>
            <td><strong>Small Memory Dump (Minidump) (Q176)</strong></td>
            <td>Fixed tiny size (typically <strong>256 KB to 1 MB</strong>).</td>
            <td>Captures only the faulting thread stack, loaded module list, and processor context. Low value for general forensics, but proves crash root cause.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">4. Converting Virtual Machine Dumps: vmss2core (Q177)</span>
      <p>When analyzing VMware snapshots, examiners use VMware's official utility <strong><code>vmss2core</code></strong>:<br>
      <code>vmss2core -W snapshot.vmsn snapshot.vmem</code><br>
      Converts VMware proprietary snapshot memory into a standard Microsoft Crash Dump (<code>memory.dmp</code>) or raw DD image for seamless ingestion into WinDbg and Volatility.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 18 (Part 1/2) Complete.</strong> Turn page for Live Kernel Triage, Symbols &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="17" onclick="window.openMCQForSpread(17)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q171–Q180) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 35: Part 2 - Live Kernel Debugging & Exam Traps (Pages 71–72)
  {
    spreadId: 35,
    left: {
      pageNumber: 71,
      runningHead: 'CH. 18 • LIVE KERNEL DEBUGGING & DT COMMANDS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 18 • Topic 18: Live Debugging & WinDbg (Part 2)</span>
      <h2>Structure Display (dt) & Live Kernel Triage</h2>
    </div>

    <div class="intro-abstract">
      <p>WinDbg's Display Type (<code>dt</code>) command is the fundamental mechanism for inspecting structural offsets, evaluating pointers, and uncovering DKOM tampering directly within memory images.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Mastering the dt (Display Type) Command (Q178, Q179)</span>
      <p>How forensic reverse engineers inspect structure layouts in WinDbg:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">dt Syntax & Usage (Q178)</span>
            <span class="statute-tag">Type Dissection</span>
          </div>
          <p>• <code>dt nt!_EPROCESS</code>: Dumps the entire layout, member types, and byte offsets of the <code>_EPROCESS</code> structure for that kernel version.<br>
          • <code>dt nt!_EPROCESS &lt;Address&gt; UniqueProcessId ActiveProcessLinks</code>: Evaluates specific fields for a concrete process running at a given memory address.<br>
          • <code>dt -r nt!_PEB &lt;Address&gt;</code>: Recursively expands sub-structures (such as <code>ProcessParameters</code>).</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Live Kernel Debugging Flags (Q179)</span>
            <span class="statute-tag">Local Debugging</span>
          </div>
          <p>• <strong>LiveKD:</strong> Mark Russinovich's tool allows running WinDbg on a live system without putting the machine into kernel debug boot mode.<br>
          • <strong>bcdedit /debug on:</strong> Configures Windows to boot with kernel debugging enabled over network (KDNET), USB 3.0, or COM serial cable.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Forcing a Manual Crash Dump via Keystrokes (Q180)</span>
      <p>In emergency incident response, if a server is unresponsive or locked by malware, examiners force an instantaneous Complete Memory Dump by configuring the registry key <code>CrashOnCtrlScroll</code> and pressing: <strong>Right Ctrl + Scroll Lock pressed twice</strong>.</p>
    </div>
      `
    },
    right: {
      pageNumber: 72,
      runningHead: 'CH. 18 • WINDBG FORENSIC EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 18 (Part 2 Continued) • Debugging Traps & Best Practices</span>
      <h2>WinDbg Debugging & Topic 18 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Summary of Crash Dump Analysis</span>
      <p>• <strong>Complete Dump:</strong> Contains full physical RAM (forensic gold standard).<br>
      • <strong>Kernel Dump:</strong> Contains only kernel space memory.<br>
      • <strong>Minidump:</strong> Tiny 256 KB–1 MB crash record.<br>
      • <strong>vmss2core:</strong> Converts VMware <code>.vmem</code> to Microsoft <code>memory.dmp</code>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: WinDbg & Crash Dumps (Q171–Q180)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (WinDbg Process Command):</strong> The command to dump all active processes in WinDbg is <strong>!process 0 0</strong> (Q171).<br>
        ⚠️ <strong>Trap 2 (PEB Command):</strong> The command to evaluate the Process Environment Block is <strong>!peb</strong> (Q172).<br>
        ⚠️ <strong>Trap 3 (Pool Tag Searching):</strong> Searching kernel pool memory for tags in WinDbg uses <strong>!poolfind</strong> (Q173).<br>
        ⚠️ <strong>Trap 4 (Complete Dump Scope):</strong> A Complete Memory Dump contains <strong>100% of physical RAM</strong> (Q175).<br>
        ⚠️ <strong>Trap 5 (vmss2core Role):</strong> VMware snapshot memory files are converted to raw/dmp using the <strong>vmss2core</strong> utility (Q177).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 18: Live Memory Debugging &amp; WinDbg?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q171–Q180).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="17" onclick="window.openMCQForSpread(17)">
        Practice Topic 18 Quiz (Q171–Q180) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 19: HARDWARE MEMORY ARCHITECTURES & VIRTUAL MACHINE SNAPSHOTS (Spreads 36 & 37, Pages 73–76, Q181–Q190)
  // =========================================================================
  // Spread 36: Part 1 - NUMA, ECC Memory & Hardware Memory Organization (Pages 73–74)
  {
    spreadId: 36,
    left: {
      pageNumber: 73,
      runningHead: 'CH. 19 • HARDWARE ARCHITECTURES: NUMA & ECC',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 19 • Topic 19: Hardware & VM Snapshots (Part 1)</span>
      <h2>Hardware Architectures: NUMA & Error-Correcting Code</h2>
    </div>

    <div class="intro-abstract">
      <p>Enterprise servers and cloud hypervisors do not operate on simple uniform memory controllers. Understanding <strong>Non-Uniform Memory Access (NUMA)</strong>, <strong>Error-Correcting Code (ECC)</strong> memory, and hypervisor memory virtualization structures is critical when acquiring large-scale enterprise memory dumps.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Non-Uniform Memory Access (NUMA) Architecture (Q181, Q182)</span>
      <p>In multi-socket enterprise servers (e.g. dual Intel Xeon or AMD EPYC servers), memory controllers are partitioned across physical CPU sockets:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">NUMA Nodes & Latency (Q181)</span>
            <span class="statute-tag">Distributed Memory</span>
          </div>
          <p>• Physical RAM is partitioned into multiple <strong>NUMA Nodes</strong>, each wired directly to a dedicated CPU socket.<br>
          • <strong>Local Access:</strong> Fast memory access to DRAM wired to the executing core.<br>
          • <strong>Remote Access:</strong> Slower access across CPU interconnects (Intel UPI / AMD Infinity Fabric).<br>
          • <strong>Forensic Impact:</strong> Physical memory addresses span disjoint hardware nodes. Live acquisition tools must traverse all NUMA node memory controllers to capture a complete image.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Error-Correcting Code (ECC) RAM (Q182)</span>
            <span class="statute-tag">Parity Chips</span>
          </div>
          <p>• Incorporates an extra memory chip per bank providing parity bits.<br>
          • Uses Hamming codes to <strong>detect and correct single-bit errors</strong> in real time and detect multi-bit corruptions.<br>
          • <strong>Forensic Significance:</strong> ECC prevents random bit decay and renders server hardware highly resistant to electrical Rowhammer disturbance attacks!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Hypervisor Memory Virtualization: EPT & NPT (Q183)</span>
      <p>How do hypervisors (ESXi, Hyper-V, KVM) virtualize memory for dozens of guest operating systems running simultaneously? They use <strong>Second Level Address Translation (SLAT)</strong>:</p>
      <div class="statute-card card-amber">
        <p>• <strong>Intel EPT (Extended Page Tables) / AMD NPT (Nested Page Tables):</strong> The CPU hardware maintains two distinct translation layers: (1) Guest Virtual Address (GVA) to Guest Physical Address (GPA), and (2) GPA to Host Physical Address (HPA).<br>
        • A memory dump taken from the hypervisor host contains all guest VMs interspersed in host memory!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 74,
      runningHead: 'CH. 19 • VM SNAPSHOT STRUCTURES & FORENSICS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 19 (Part 1 Continued) • Virtual Machine Dumps</span>
      <h2>Virtual Machine Snapshots: VMware, Hyper-V & VirtualBox</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Anatomy of Virtual Machine Snapshot Files (Q184, Q185)</span>
      <p>In virtualized environments, investigators do not need to install live acquisition tools inside the guest OS. Pausing or snapshotting the VM creates instantaneous, non-invasive memory dumps:</p>
      
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Hypervisor Platform</th>
            <th>Memory Snapshot File Extensions</th>
            <th>Forensic Structure & Extraction Method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>VMware Workstation / ESXi (Q184)</strong></td>
            <td><strong><code>.vmem</code></strong> (Raw RAM) & <strong><code>.vmss</code> / <code>.vmsn</code></strong> (Metadata)</td>
            <td>The <code>.vmem</code> file is a raw, uncompressed physical memory dump! Can be analyzed directly in Volatility by specifying the OS symbol table.</td>
          </tr>
          <tr>
            <td><strong>Microsoft Hyper-V (Q185)</strong></td>
            <td><strong><code>.bin</code></strong> (Saved Memory) & <strong><code>.vsv</code></strong> (Virtual Saved State)</td>
            <td>Stored under the VM's Virtual Machines directory. Converted to raw DD or Microsoft Crash Dump using tools like <code>vm2dmp</code>.</td>
          </tr>
          <tr>
            <td><strong>Oracle VirtualBox</strong></td>
            <td><strong><code>.sav</code></strong> (Saved State Archive)</td>
            <td>Contains the compressed guest RAM and CPU register state. Can be dumped to raw memory using VirtualBox debugging CLI (<code>VBoxManage debugvm dumpvmcore</code>).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">4. Forensic Superiority of VM Snapshots</span>
      <p>Snapshotting a VM from the host hypervisor achieves <strong>zero Heisenberg observer effect</strong>: zero guest memory footprint, zero altered kernel timestamps, and zero alert triggers on guest EDR agents!</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 19 (Part 1/2) Complete.</strong> Turn page for Memory Overcommit, Ballooning &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="18" onclick="window.openMCQForSpread(18)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q181–Q190) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 37: Part 2 - Memory Overcommit, Memory Ballooning & Exam Traps (Pages 75–76)
  {
    spreadId: 37,
    left: {
      pageNumber: 75,
      runningHead: 'CH. 19 • MEMORY BALLOONING & OVERCOMMIT',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 19 • Topic 19: Hardware & VM Snapshots (Part 2)</span>
      <h2>Memory Ballooning, Page Sharing & Artifacts</h2>
    </div>

    <div class="intro-abstract">
      <p>Hypervisors maximize host resource utilization through memory overcommit mechanisms. Understanding memory ballooning and Transparent Page Sharing (TPS) is crucial when evaluating discrepancies in virtualized memory images.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Memory Ballooning Drivers: vmmemctl (Q186, Q187)</span>
      <p>How hypervisors reclaim physical RAM from idle virtual machines:</p>
      <div class="statutory-grid">
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">The Ballooning Mechanism (Q186)</span>
            <span class="statute-tag">Dynamic RAM Reclaim</span>
          </div>
          <p>• The hypervisor instructs a guest balloon driver (e.g. <code>vmmemctl.sys</code>) to inflate.<br>
          • The driver allocates guest physical pages, forcing the guest OS kernel to page inactive application data out to its virtual disk (<code>pagefile.sys</code>).<br>
          • <strong>Forensic Impact:</strong> An examiner analyzing a memory snapshot of a ballooned VM will find that evidence has been swapped to the virtual disk, requiring dual analysis of <code>.vmem</code> and the <code>.vmdk</code> disk image!</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Transparent Page Sharing (TPS) (Q187)</span>
            <span class="statute-tag">Deduplication</span>
          </div>
          <p>• The hypervisor hashes memory pages across different VMs.<br>
          • Identical pages (e.g. identical Windows DLLs) are consolidated into a single read-only host physical page with Copy-on-Write semantics.<br>
          • Draining or isolating a VM snapshot restores private copies of all pages.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. User Activity Timeline in RAM: Connected Devices & Timeline Data (Q188)</span>
      <p>Windows 10/11 maintains user interaction timelines in volatile memory and local databases. Activity history, recently opened documents, and USB peripheral connections linger in memory heaps.</p>
    </div>
      `
    },
    right: {
      pageNumber: 76,
      runningHead: 'CH. 19 • VM SNAPSHOT EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 19 (Part 2 Continued) • VM Traps & Best Practices</span>
      <h2>Virtual Memory Forensics & Topic 19 Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Summary of VM Snapshot Analysis</span>
      <p>• <strong>VMware .vmem:</strong> Raw uncompressed physical memory dump.<br>
      • <strong>Hyper-V .bin:</strong> Virtual saved state memory file.<br>
      • <strong>Zero Heisenberg Footprint:</strong> Hypervisor snapshots leave zero forensic footprint in the guest OS.<br>
      • <strong>Ballooning Awareness:</strong> Check if memory ballooning forced artifacts into <code>pagefile.sys</code>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB Exam Traps: Hardware & VM Snapshots (Q181–Q190)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (NUMA Architecture):</strong> NUMA partitions memory across multiple CPU sockets, creating non-uniform access latencies (Q181).<br>
        ⚠️ <strong>Trap 2 (ECC Parity Function):</strong> ECC RAM incorporates parity chips capable of <strong>detecting and correcting single-bit errors</strong> (Q182).<br>
        ⚠️ <strong>Trap 3 (VMware Memory File):</strong> The VMware file containing raw physical guest memory is <strong>.vmem</strong> (Q184).<br>
        ⚠️ <strong>Trap 4 (Hyper-V Memory File):</strong> The Hyper-V saved state memory file is <strong>.bin</strong> (Q185).<br>
        ⚠️ <strong>Trap 5 (Balloon Driver Role):</strong> Memory ballooning drivers (<code>vmmemctl</code>) force the guest kernel to swap inactive pages to disk, reclaiming physical RAM for the hypervisor (Q186).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 19: Hardware &amp; VM Snapshots?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q181–Q190).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="18" onclick="window.openMCQForSpread(18)">
        Practice Topic 19 Quiz (Q181–Q190) &rarr;
      </button>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 20: INCIDENT RESPONSE, IN-MEMORY YARA & LEGAL CONSIDERATIONS (Spreads 38 & 39, Pages 77–80, Q191–Q200)
  // =========================================================================
  // Spread 38: Part 1 - In-Memory Web Shells, Session 0 & Threat Hunting (Pages 77–78)
  {
    spreadId: 38,
    left: {
      pageNumber: 77,
      runningHead: 'CH. 20 • INCIDENT RESPONSE: WEB SHELLS & HUNTING',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 20 • Topic 20: Incident Response & Legal (Part 1)</span>
      <h2>In-Memory Threat Hunting: Web Shells & Session 0</h2>
    </div>

    <div class="intro-abstract">
      <p>Modern incident response operations integrate memory forensics into enterprise threat hunting workflows. Detecting fileless web shells, memory-resident Java execution, and process isolation violations enables rapid containment before data exfiltration occurs.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Hunting Web Shells in Memory: w3wp.exe & Java Heaps (Q191, Q192)</span>
      <p>Web servers (IIS, Apache Tomcat, Nginx) are frequent initial access targets:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">IIS Worker Process (w3wp.exe) (Q191)</span>
            <span class="statute-tag">Process Ancestry</span>
          </div>
          <p>• <code>w3wp.exe</code> should only spawn child compiler processes (<code>csc.exe</code>) or worker threads.<br>
          • <strong>The Golden Indicator:</strong> If <code>w3wp.exe</code> spawns <code>cmd.exe</code>, <code>powershell.exe</code>, or <code>whoami.exe</code>, it is undeniable proof of a <strong>web shell compromise</strong>!<br>
          • Volatility's <code>windows.pstree</code> immediately exposes these rogue child lineages.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Java Memory-Resident Shells (Q191)</span>
            <span class="statute-tag">Tomcat / WebLogic</span>
          </div>
          <p>• Attackers inject malicious servlet filters or Java Bytecode directly into the JVM heap without creating an on-disk <code>.jsp</code> file.<br>
          • Volatility scans the Java process VADs to carve executed class definitions and malicious HTTP request parameters.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Session 0 Isolation Violations (Q193)</span>
      <p>Introduced in Windows Vista, <strong>Session 0 Isolation</strong> separates core system services from interactive user desktops:</p>
      <div class="statute-card card-amber">
        <p>• <strong>Session 0:</strong> Exclusively hosts non-interactive system services (<code>services.exe</code>, <code>lsass.exe</code>, <code>svchost.exe</code>). Zero user applications can run in Session 0.<br>
        • <strong>Session 1, 2, ...:</strong> Dedicated to logged-in interactive desktop users.<br>
        • <strong>Forensic Anomaly (Q193):</strong> If a user desktop application (like <code>calc.exe</code> or interactive <code>cmd.exe</code>) is found executing in Session 0, it indicates privilege escalation or a service backdoor!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 78,
      runningHead: 'CH. 20 • ENTERPRISE HUNTING & VADYARASCAN',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 20 (Part 1 Continued) • Memory YARA Scanning</span>
      <h2>Enterprise Threat Hunting with windows.vadyarascan</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Enterprise YARA Hunting at Scale (Q194, Q195)</span>
      <p>Rather than searching for known MD5 file hashes on disk, enterprise incident responders deploy <strong>In-Memory YARA rules</strong> across memory dumps:</p>
      
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">windows.vadyarascan Operations (Q194)</span>
          <span class="statute-tag">YARA Scanning</span>
        </div>
        <p>• Traverses the VAD tree of every running process in physical memory.<br>
        • Matches byte sequences, string patterns, regular expressions, and PE header logic.<br>
        • <strong>High-Yield Hunt Targets:</strong><br>
        &nbsp;&nbsp;• Carving Cobalt Strike Beacon configurations and sleep masks.<br>
        &nbsp;&nbsp;• Identifying injected Meterpreter payloads (<code>ReflectiveLoader</code> strings).<br>
        &nbsp;&nbsp;• Flagging ransomware crypto routines (e.g. ChaCha20 / AES constants).</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Automated Memory Triage: Velociraptor & Rekall (Q196)</span>
      <p>Enterprise Incident Response platforms (Velociraptor, GRR) use remote live memory querying to execute VQL (Velociraptor Query Language) scripts across thousands of endpoints simultaneously, scanning for memory injection without requiring manual gigabyte dump transfers.</p>
    </div>

    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic 20 (Part 1/2) Complete.</strong> Turn page for Chain of Custody, Section 65B &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="19" onclick="window.openMCQForSpread(19)" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q191–Q200) &rarr;
      </button>
    </div>
      `
    }
  },

  // Spread 39: Part 2 - Chain of Custody, Section 65B/BSA 63 & Courtroom Admissibility (Pages 79–80)
  {
    spreadId: 39,
    left: {
      pageNumber: 79,
      runningHead: 'CH. 20 • LEGAL RULES: RFC 3227 & SECTION 65B',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 20 • Topic 20: Incident Response & Legal (Part 2)</span>
      <h2>Legal Considerations & Courtroom Admissibility</h2>
    </div>

    <div class="intro-abstract">
      <p>Because live memory acquisition inherently alters a small fraction of volatile state, defense attorneys frequently challenge RAM evidence in judicial proceedings. Establishing unbroken chain of custody, standard operating procedures, and statutory certification is mandatory for legal admissibility.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Defending the Heisenberg Footprint in Court (Q197, Q198)</span>
      <p>How an expert witness defends volatile memory evidence under cross-examination:</p>
      <div class="statutory-grid">
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">The Justification of Volatility (Q197)</span>
            <span class="statute-tag">Court Testimony</span>
          </div>
          <p>• <strong>RFC 3227 & ISO/IEC 27037 Compliance:</strong> International standards dictate capturing volatile memory before powering off an energized machine.<br>
          • <strong>Forensic Footprint Documentation:</strong> The examiner must document the exact tool used, its known memory footprint (e.g. WinPmem allocating ~10 MB of RAM), the exact command line executed, and prove that the tool did NOT alter the targeted evidentiary process space.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Chain of Custody Logs (Q200)</span>
            <span class="statute-tag">Unbroken Record</span>
          </div>
          <p>Every transfer, analysis session, and storage movement must be documented in a physical and digital <strong>Chain of Custody</strong> log: timestamp of capture, tool version, acquisition hash (SHA-256), verification hash, and the identifying details of the forensic practitioner.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Indian Legal Framework: Section 65B (IEA) / Section 63 (BSA 2024) (Q199)</span>
      <p>Under Indian evidence law, memory images are classified as electronic records:</p>
      <div class="statute-card card-amber">
        <p>• Under the Supreme Court ruling in <em>Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020)</em>, secondary electronic evidence is <strong>strictly inadmissible without a valid Section 65B Certificate</strong> (now Section 63 under the Bharatiya Sakshya Adhiniyam, BSA 2024).<br>
        • The certificate must be executed by the authorized forensic examiner certifying that the computer systems were operating lawfully, that the memory capture tool produced an exact bitstream replica, and that the SHA-256 cryptographic hashes matched unbroken throughout analysis.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 80,
      runningHead: 'CH. 20 • MEMORY FORENSIC MASTER EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Topic 20 (Part 2 Continued) • Legal Traps & Best Practices</span>
      <h2>Master Exam Traps: RAM & Memory Forensics</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Master Exam Traps: Incident Response & Legal (Q191–Q200)</span>
      <div class="statute-card card-cyan">
        <p>⚠️ <strong>Trap 1 (Web Shell Indicator):</strong> <code>w3wp.exe</code> spawning <code>cmd.exe</code> or <code>powershell.exe</code> is direct evidence of a web shell compromise (Q191).<br>
        ⚠️ <strong>Trap 2 (Session 0 Isolation):</strong> Session 0 is reserved strictly for non-interactive system services; interactive user applications should never execute in Session 0 (Q193).<br>
        ⚠️ <strong>Trap 3 (In-Memory YARA Plugin):</strong> Volatility 3 scans process memory using YARA rules via <strong>windows.vadyarascan</strong> (Q194).<br>
        ⚠️ <strong>Trap 4 (Heisenberg Footprint Defense):</strong> An examiner justifies memory alteration by citing international standards (RFC 3227) and documenting tool footprint (Q197).<br>
        ⚠️ <strong>Trap 5 (Statutory Certificate):</strong> In India, memory dump evidence mandates a certificate under <strong>Section 65B (IEA 1872) / Section 63 (BSA 2024)</strong> to be admissible in court (Q199, Q200).</p>
      </div>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic 20: Incident Response, In-Memory YARA &amp; Legal Rules?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q191–Q200).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="19" onclick="window.openMCQForSpread(19)">
        Practice Topic 20 Quiz (Q191–Q200) &rarr;
      </button>
    </div>
      `
    }
  }
];
