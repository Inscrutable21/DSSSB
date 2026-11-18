// Part 4: Topics 16–20 (Spreads 30–39, Pages 61–80)
// Intermediate Level: DSSSB Exam Focused, Clear, No Bloated Math

function makeHeader(topicNum, mainTitle, subTitle, partNum) {
  return `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC ${topicNum} • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">${mainTitle}</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: ${subTitle} (Part ${partNum}/4)</h3>
    </div>`;
}

function makeContinuation(topicNum, topicName, nextPartTitle, topicIdx) {
  return `
    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border: 1px dashed rgba(14, 165, 233, 0.4); border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic ${topicNum} (Part 1/2) Complete.</strong> Turn page for ${nextPartTitle} &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="${topicIdx}" onclick="window.openMCQForSpread(${topicIdx})" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q${topicIdx * 10 + 1}–Q${topicIdx * 10 + 10}) &rarr;
      </button>
    </div>`;
}

function makeQuizCTA(topicNum, topicName, topicIdx) {
  const qStart = topicIdx * 10 + 1;
  const qEnd = topicIdx * 10 + 10;
  return `
    <div class="spread-quiz-cta-banner">
      <div class="cta-banner-content">
        <div class="cta-banner-icon">🎯</div>
        <div class="cta-banner-text">
          <strong>Mastered Topic ${topicNum}: ${topicName}?</strong>
          <span>Test your knowledge with 10 high-yield DSSSB pattern questions (Q${qStart}–Q${qEnd}).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="${topicIdx}" onclick="window.openMCQForSpread(${topicIdx})">
        Practice Topic ${topicNum} Quiz (Q${qStart}–Q${qEnd}) &rarr;
      </button>
    </div>`;
}

module.exports = [
  // =========================================================================
  // TOPIC 16: TYPES OF VULNERABILITIES: MEMORY CORRUPTION & ACCESS CONTROL
  // =========================================================================
  // Spread 30: Pages 61 & 62
  {
    spreadId: 30,
    left: {
      pageNumber: 61,
      runningHead: 'TOPIC 16 • BUFFER OVERFLOW (CWE-120)',
      content: `
    ${makeHeader(16, 'Types of Vulnerabilities: Memory Corruption, Access Control & Web Flaws', 'Memory Corruption: Stack Buffer Overflows & Exploits', 1)}

    <div class="intro-abstract">
      <p>Beyond input validation bugs like SQLi, vulnerabilities exist at the operating system memory layer and in application access control logic. These allow attackers to take full control of host systems.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Stack Buffer Overflow (CWE-120) Explained (Q151)</span>
      <p>In low-level languages like C and C++, the compiler does not check if an input array fits into memory. Functions like <code>strcpy()</code> and <code>gets()</code> allow copying unlimited data into a fixed-size stack buffer:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">How the Attack Hijacks Execution</span>
          <span class="statute-tag">Return Address Overwrite</span>
        </div>
        <p>1. The program allocates a 64-byte buffer on the stack.<br>
        2. The attacker inputs 100 bytes of data.<br>
        3. The excessive data overflows the buffer and overwrites the <strong>Saved Instruction Pointer / Return Address (EIP / RIP)</strong> on the stack.<br>
        4. When the function finishes, the CPU jumps to the attacker's shellcode instead of normal code!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. What is a NOP Sled?</span>
      <p>A sequence of No-Operation machine instructions (opcode <code>0x90</code> on x86) placed before shellcode. If the instruction pointer lands anywhere in the sled, it harmlessly slides down into the exploit payload.</p>
    </div>`
    },
    right: {
      pageNumber: 62,
      runningHead: 'TOPIC 16 • MODERN MEMORY DEFENSES',
      content: `
    ${makeHeader(16, 'Types of Vulnerabilities: Memory Corruption, Access Control & Web Flaws', 'Modern Exploit Defenses: DEP, ASLR & Canaries', 2)}

    <div class="section-block">
      <span class="section-label">3. The 3 Standard Exploit Mitigations (Q152)</span>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>Mitigation Technique</th>
            <th>How It Works</th>
            <th>Primary Benefit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>DEP / NX (Data Execution Prevention)</strong></td>
            <td>Marks stack and heap pages as non-executable (No-Execute bit)</td>
            <td>Stops injected shellcode from executing on stack/heap</td>
          </tr>
          <tr>
            <td><strong>ASLR (Address Space Layout Randomization)</strong></td>
            <td>Randomizes the memory locations of stack, heap, and libraries at every boot</td>
            <td>Attacker cannot predict fixed memory jump addresses</td>
          </tr>
          <tr>
            <td><strong>Stack Canaries (Cookies)</strong></td>
            <td>Places a secret random number before the return address; checked before return</td>
            <td>If buffer is overflowed, canary changes and program instantly aborts</td>
          </tr>
        </tbody>
      </table>
    </div>

    ${makeContinuation(16, 'Buffer Overflows & Web Flaws', 'Access Control Flaws: IDOR, CSRF & SSRF', 15)}`
    }
  },

  // Spread 31: Pages 63 & 64
  {
    spreadId: 31,
    left: {
      pageNumber: 63,
      runningHead: 'TOPIC 16 • ACCESS CONTROL FLAWS (IDOR & CSRF)',
      content: `
    ${makeHeader(16, 'Types of Vulnerabilities: Memory Corruption, Access Control & Web Flaws', 'Broken Access Control, IDOR & CSRF Vulnerabilities', 3)}

    <div class="section-block">
      <span class="section-label">4. Insecure Direct Object References (IDOR / CWE-639) (Q153)</span>
      <p>Occurs when an application exposes a reference to an internal database object in a URL or API without verifying user ownership:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">IDOR Example</span>
          <span class="statute-tag">Parameter Tampering</span>
        </div>
        <p>• Legitimate URL: <code>https://bank.com/statement?account_id=1001</code> (Shows Alice's statement)<br>
        • Alice changes parameter to: <code>account_id=1002</code><br>
        • <em>Vulnerability:</em> Server returns Bob's private bank statement without checking if Alice owns that account!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">5. Cross-Site Request Forgery (CSRF / CWE-352)</span>
      <p>Tricks an authenticated victim's web browser into executing an unwanted action on a trusted website (e.g., transferring money while viewing a malicious forum post). Defended using unique, unpredictable <strong>Anti-CSRF Tokens</strong> and <code>SameSite</code> cookies.</p>
    </div>`
    },
    right: {
      pageNumber: 64,
      runningHead: 'TOPIC 16 • SSRF & EXAM TRAPS',
      content: `
    ${makeHeader(16, 'Types of Vulnerabilities: Memory Corruption, Access Control & Web Flaws', 'Server-Side Request Forgery (SSRF) & DSSSB Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">6. Server-Side Request Forgery (SSRF / CWE-918) (Q154)</span>
      <p>Occurs when an attacker forces the web server to make unauthorized requests to internal network assets or cloud metadata services:</p>
      <p>• <em>Classic Cloud Target:</em> <code>http://169.254.169.254/latest/meta-data/</code> (AWS metadata service that leaks secret IAM cloud credentials!).</p>
    </div>

    <div class="section-block">
      <span class="section-label">7. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Buffer Overflow Root Cause (Q151):</strong> Overwriting the <strong>Saved Return Address (EIP)</strong> on the stack.<br>
        • <strong>DEP / NX (Q152):</strong> Prevents code execution on the stack/heap.<br>
        • <strong>ASLR:</strong> Randomizes memory base addresses to defeat hardcoded exploits.<br>
        • <strong>IDOR (Q153):</strong> Changing URL/API parameters (like <code>user_id=100</code>) to access another user's private data.<br>
        • <strong>CSRF Defense:</strong> Unique per-session <strong>Anti-CSRF Tokens</strong>.</p>
      </div>
    </div>

    ${makeQuizCTA(16, 'Buffer Overflows & Web Flaws', 15)}`
    }
  },

  // =========================================================================
  // TOPIC 17: COMMON VULNERABILITIES AND EXPOSURES (CVES)
  // =========================================================================
  // Spread 32: Pages 65 & 66
  {
    spreadId: 32,
    left: {
      pageNumber: 65,
      runningHead: 'TOPIC 17 • THE MITRE CVE SYSTEM',
      content: `
    ${makeHeader(17, 'Common Vulnerabilities and Exposures (CVEs)', 'The Common Vulnerabilities and Exposures (CVE) System', 1)}

    <div class="intro-abstract">
      <p>Created in 1999 by the <strong>MITRE Corporation</strong>, the <strong>Common Vulnerabilities and Exposures (CVE)</strong> system provides a standardized, globally unique identification number for publicly disclosed cybersecurity vulnerabilities.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Why the CVE System Exists (Q161)</span>
      <p>Before CVE, different antivirus and vulnerability scanner companies gave completely different names to the same software bug, causing massive confusion. CVE acts as the universal dictionary so all security professionals speak the exact same language.</p>
    </div>

    <div class="section-block">
      <span class="section-label">2. The CVE Identifier Syntax (Q162)</span>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Syntax: CVE-YYYY-NNNN</span>
          <span class="statute-tag">Standard Naming</span>
        </div>
        <p>• <strong>CVE:</strong> Fixed prefix identifying it as a CVE record.<br>
        • <strong>YYYY:</strong> The year the CVE was assigned or publicly disclosed (4 digits).<br>
        • <strong>NNNN...:</strong> Sequential identification number (minimum 4 digits; can expand to 7+ digits as needed).<br>
        • <em>Example:</em> <code>CVE-2021-44228</code> (The Log4Shell critical vulnerability disclosed in 2021).</p>
      </div>
    </div>`
    },
    right: {
      pageNumber: 66,
      runningHead: 'TOPIC 17 • CNAS & THE NATIONAL VULNERABILITY DB',
      content: `
    ${makeHeader(17, 'Common Vulnerabilities and Exposures (CVEs)', 'CVE Numbering Authorities (CNAs) & NVD Integration', 2)}

    <div class="section-block">
      <span class="section-label">3. CVE Numbering Authorities (CNAs) (Q163)</span>
      <p>MITRE does not assign all CVEs alone. It delegates assignment authority to vetted organizations called <strong>CVE Numbering Authorities (CNAs)</strong>:</p>
      <ul class="forensic-list">
        <li><strong>Major Technology Vendors:</strong> Microsoft, Apple, Google, Cisco, Red Hat assign CVEs directly for vulnerabilities found in their own products.</li>
        <li><strong>Bug Bounty & Research CNAs:</strong> Organizations like HackerOne, Trend Micro ZDI.</li>
        <li><strong>National CERTs:</strong> CERT-In (India), CISA (USA).</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">4. The National Vulnerability Database (NVD)</span>
      <p>Maintained by the US <strong>NIST (National Institute of Standards and Technology)</strong>, the NVD ingests all CVEs from MITRE and enriches them with technical analysis, <strong>CVSS severity scores</strong>, and Common Platform Enumeration (CPE) product identifiers.</p>
    </div>

    ${makeContinuation(17, 'CVE Architecture', 'CVE Lifecycle & DSSSB Exam Traps', 16)}`
    }
  },

  // Spread 33: Pages 67 & 68
  {
    spreadId: 33,
    left: {
      pageNumber: 67,
      runningHead: 'TOPIC 17 • CVE LIFECYCLE STATES',
      content: `
    ${makeHeader(17, 'Common Vulnerabilities and Exposures (CVEs)', 'CVE Lifecycle States & Responsible Disclosure', 3)}

    <div class="section-block">
      <span class="section-label">5. The 4 States of a CVE Record</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Reserved</span>
            <span class="statute-tag">Pre-Disclosure</span>
          </div>
          <p>The ID is allocated by a CNA to a researcher or vendor, but technical details remain secret while patches are developed.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. Published</span>
            <span class="statute-tag">Public Advisory</span>
          </div>
          <p>The vulnerability details, affected versions, and security patches are officially published to the world.</p>
        </div>
      </div>
      <div class="statutory-grid" style="margin-top: 10px;">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">3. Disputed</span>
            <span class="statute-tag">Contested</span>
          </div>
          <p>The software vendor contests the finding, claiming it is an intended feature or poses no security risk.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">4. Rejected</span>
            <span class="statute-tag">Cancelled</span>
          </div>
          <p>The record is deleted/invalidated because it was a duplicate submission or not a valid security flaw.</p>
        </div>
      </div>
    </div>`
    },
    right: {
      pageNumber: 68,
      runningHead: 'TOPIC 17 • CVE EXAM TRAPS & TAKEAWAYS',
      content: `
    ${makeHeader(17, 'Common Vulnerabilities and Exposures (CVEs)', 'CVE Summary & DSSSB High-Yield Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">6. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>CVE Custodian (Q161):</strong> Maintained by the <strong>MITRE Corporation</strong> (sponsored by US DHS/CISA).<br>
        • <strong>CVE Syntax (Q162):</strong> <code>CVE-YYYY-NNNN</code> (e.g., CVE-2021-44228).<br>
        • <strong>NVD Role:</strong> National Vulnerability Database is maintained by <strong>NIST</strong>; assigns CVSS scores to MITRE CVEs.<br>
        • <strong>CNAs (Q163):</strong> CVE Numbering Authorities authorized by MITRE to issue CVE numbers.</p>
      </div>
    </div>

    ${makeQuizCTA(17, 'CVE Architecture', 16)}`
    }
  },

  // =========================================================================
  // TOPIC 18: COMMON VULNERABILITY SCORING SYSTEM (CVSS)
  // =========================================================================
  // Spread 34: Pages 69 & 70
  {
    spreadId: 34,
    left: {
      pageNumber: 69,
      runningHead: 'TOPIC 18 • CVSS V3.1 SCORING SYSTEM',
      content: `
    ${makeHeader(18, 'Common Vulnerability Scoring System (CVSS)', 'CVSS v3.1 Framework & Quantitative Severity', 1)}

    <div class="intro-abstract">
      <p>The <strong>Common Vulnerability Scoring System (CVSS)</strong>, managed by FIRST.Org, provides an open, vendor-neutral standard for measuring the technical severity of software vulnerabilities on a scale from <strong>0.0 to 10.0</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The CVSS Qualitative Severity Scale (Q171)</span>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>CVSS Base Score</th>
            <th>Qualitative Severity Rating</th>
            <th>Standard Enterprise Remediation Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>0.0</strong></td>
            <td><strong>None</strong></td>
            <td>Informational findings; no risk</td>
          </tr>
          <tr>
            <td><strong>0.1 – 3.9</strong></td>
            <td><strong>Low</strong></td>
            <td>Routine maintenance patching schedule</td>
          </tr>
          <tr>
            <td><strong>4.0 – 6.9</strong></td>
            <td><strong>Medium</strong></td>
            <td>Remediate within 30 to 60 days</td>
          </tr>
          <tr>
            <td><strong>7.0 – 8.9</strong></td>
            <td><strong>High</strong></td>
            <td>Remediate urgently within 7 to 14 days</td>
          </tr>
          <tr>
            <td><strong>9.0 – 10.0</strong></td>
            <td><strong>Critical</strong></td>
            <td><strong>Emergency remediation within 24 to 48 hours!</strong></td>
          </tr>
        </tbody>
      </table>
    </div>`
    },
    right: {
      pageNumber: 70,
      runningHead: 'TOPIC 18 • CVSS BASE METRIC GROUP',
      content: `
    ${makeHeader(18, 'Common Vulnerability Scoring System (CVSS)', 'CVSS Base Metric Group: Exploitability & Impact', 2)}

    <div class="section-block">
      <span class="section-label">2. The 3 CVSS Metric Groups (Q172)</span>
      <ul class="forensic-list">
        <li><strong>Base Metrics (Fixed):</strong> Intrinsic qualities of the flaw that do not change over time (Exploitability and Impact).</li>
        <li><strong>Temporal Metrics (Time-varying):</strong> Factors that change over time (e.g., whether exploit code is public, patch availability).</li>
        <li><strong>Environmental Metrics (Contextual):</strong> Customizes the score based on the organization's unique network defenses.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">3. Base Exploitability & Impact Metrics</span>
      <p>• <strong>Attack Vector (AV):</strong> Network [N] &rarr; Adjacent [A] &rarr; Local [L] &rarr; Physical [P]. Network has highest score!<br>
      • <strong>Impact Metrics:</strong> Evaluates Confidentiality [C], Integrity [I], and Availability [A] impacts as None, Low, or High.</p>
    </div>

    ${makeContinuation(18, 'CVSS Metrics & Scoring', 'Vector Strings & DSSSB Exam Traps', 17)}`
    }
  },

  // Spread 35: Pages 71 & 72
  {
    spreadId: 35,
    left: {
      pageNumber: 71,
      runningHead: 'TOPIC 18 • CVSS VECTOR STRINGS',
      content: `
    ${makeHeader(18, 'Common Vulnerability Scoring System (CVSS)', 'Reading CVSS Vector Strings & Scope Changes', 3)}

    <div class="section-block">
      <span class="section-label">4. Reading a CVSS Vector String (Q173)</span>
      <p>In security advisories, CVSS scores are presented as standardized vector strings:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Example Vector: Log4Shell (CVSS 10.0 Critical)</span>
          <span class="statute-tag">CVSS:3.1 Vector</span>
        </div>
        <p><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H</code></p>
        <p>• <strong>AV:N</strong> &rarr; Attack Vector is Network (exploitable remotely across internet).<br>
        • <strong>AC:L</strong> &rarr; Attack Complexity is Low (trivial to exploit).<br>
        • <strong>PR:N</strong> &rarr; Privileges Required: None (no login needed).<br>
        • <strong>UI:N</strong> &rarr; User Interaction: None (zero victim action required).<br>
        • <strong>S:C</strong> &rarr; Scope: Changed (impacts systems beyond the vulnerable software).<br>
        • <strong>C:H / I:H / A:H</strong> &rarr; High impact across Confidentiality, Integrity, and Availability!</p>
      </div>
    </div>`
    },
    right: {
      pageNumber: 72,
      runningHead: 'TOPIC 18 • CVSS EXAM TRAPS & TAKEAWAYS',
      content: `
    ${makeHeader(18, 'Common Vulnerability Scoring System (CVSS)', 'CVSS Summary & DSSSB High-Yield Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">5. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Score Range (Q171):</strong> <strong>0.0 to 10.0</strong>.<br>
        • <strong>Critical Rating:</strong> <strong>9.0 to 10.0</strong>.<br>
        • <strong>High Rating:</strong> <strong>7.0 to 8.9</strong>.<br>
        • <strong>Medium Rating:</strong> <strong>4.0 to 6.9</strong>.<br>
        • <strong>Custodian:</strong> Maintained by <strong>FIRST.Org</strong> (Forum of Incident Response and Security Teams).<br>
        • <strong>Highest Attack Vector (Q173):</strong> <strong>Network (AV:N)</strong> carries the highest score because anyone on the internet can reach it.</p>
      </div>
    </div>

    ${makeQuizCTA(18, 'CVSS Metrics & Scoring', 17)}`
    }
  },

  // =========================================================================
  // TOPIC 19: VULNERABILITY ASSESSMENT TOOLS AND TECHNIQUES
  // =========================================================================
  // Spread 36: Pages 73 & 74
  {
    spreadId: 36,
    left: {
      pageNumber: 73,
      runningHead: 'TOPIC 19 • 5-PHASE VA LIFECYCLE',
      content: `
    ${makeHeader(19, 'Vulnerability Assessment Tools and Techniques', 'The 5-Phase Vulnerability Assessment Lifecycle', 1)}

    <div class="intro-abstract">
      <p>A <strong>Vulnerability Assessment (VA)</strong> is the systematic review of security weaknesses in an information system. It evaluates if the system is susceptible to any known vulnerabilities and assigns severity levels to those vulnerabilities.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The 5-Phase VA Lifecycle Workflow (Q181)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Planning & Scoping</span>
            <span class="statute-tag">Phase 1</span>
          </div>
          <p>Define target IP ranges, scan windows, contact points, and get formal written approvals.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. Discovery & Inventory</span>
            <span class="statute-tag">Phase 2</span>
          </div>
          <p>Scan network to discover live hosts, open ports, OS versions, and running services.</p>
        </div>
      </div>
      <div class="statutory-grid" style="margin-top: 10px;">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">3. Vulnerability Scanning</span>
            <span class="statute-tag">Phase 3</span>
          </div>
          <p>Run automated vulnerability scanner engines to match banners against CVE databases.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">4. Analysis & Prioritization</span>
            <span class="statute-tag">Phase 4</span>
          </div>
          <p>Filter out false positives; rank vulnerabilities by CVSS score and business risk.</p>
        </div>
      </div>
      <div class="statute-card card-purple" style="margin-top: 10px;">
        <div class="statute-header">
          <span class="statute-section">5. Reporting & Remediation</span>
          <span class="statute-tag">Phase 5</span>
        </div>
        <p>Deliver actionable reports to system administrators, patch flaws, and perform verification re-scans.</p>
      </div>
    </div>`
    },
    right: {
      pageNumber: 74,
      runningHead: 'TOPIC 19 • CREDENTIALED VS NON-CREDENTIALED',
      content: `
    ${makeHeader(19, 'Vulnerability Assessment Tools and Techniques', 'Credentialed vs. Non-Credentialed Scanning Techniques', 2)}

    <div class="section-block">
      <span class="section-label">2. Credentialed vs. Non-Credentialed Scans (Q182)</span>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Non-Credentialed (Unauthenticated)</th>
            <th>Credentialed (Authenticated)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Access Level</strong></td>
            <td>External view; no credentials provided</td>
            <td>Scanner logs in via SSH or Windows SMB/WMI</td>
          </tr>
          <tr>
            <td><strong>What It Inspects</strong></td>
            <td>Only open ports, service banners, and network protocols</td>
            <td>Installed software, OS registry, hotfixes, file permissions</td>
          </tr>
          <tr>
            <td><strong>Accuracy</strong></td>
            <td>Prone to false positives and banner spoofing</td>
            <td><strong>High accuracy; near-zero false positives!</strong></td>
          </tr>
          <tr>
            <td><strong>Simulates</strong></td>
            <td>External hacker outside the firewall</td>
            <td>Insider threat or employee workstation audit</td>
          </tr>
        </tbody>
      </table>
    </div>

    ${makeContinuation(19, 'VA Tools & Techniques', 'Enterprise Scanners (Nessus, OpenVAS) & CISA KEV', 18)}`
    }
  },

  // Spread 37: Pages 75 & 76
  {
    spreadId: 37,
    left: {
      pageNumber: 75,
      runningHead: 'TOPIC 19 • ENTERPRISE SCANNING TOOLS',
      content: `
    ${makeHeader(19, 'Vulnerability Assessment Tools and Techniques', 'Enterprise Vulnerability Scanners & Architecture', 3)}

    <div class="section-block">
      <span class="section-label">3. Leading Vulnerability Scanning Tools (Q183)</span>
      <ul class="forensic-list">
        <li><strong>Tenable Nessus:</strong> The world's most widely deployed vulnerability scanner. Uses proprietary <strong>NASL (Nessus Attack Scripting Language)</strong> plugins updated daily with new CVE signatures.</li>
        <li><strong>Greenbone OpenVAS (Open Vulnerability Assessment System):</strong> The premier open-source vulnerability scanner, utilizing community feeds for threat detection.</li>
        <li><strong>Qualys VMDR:</strong> Cloud-native agent-based enterprise vulnerability management platform.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">4. CISA Known Exploited Vulnerabilities (KEV) Catalog</span>
      <p>A federal catalog curated by US CISA containing vulnerabilities that are <strong>actively being exploited in the wild by hackers</strong>. Security teams prioritize patching KEV vulnerabilities immediately, even above high CVSS scores!</p>
    </div>`
    },
    right: {
      pageNumber: 76,
      runningHead: 'TOPIC 19 • VA TOOLS EXAM TRAPS & TAKEAWAYS',
      content: `
    ${makeHeader(19, 'Vulnerability Assessment Tools and Techniques', 'VA Summary & DSSSB High-Yield Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">5. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>5-Phase Lifecycle (Q181):</strong> Planning &rarr; Discovery &rarr; Scanning &rarr; Analysis &rarr; Remediation.<br>
        • <strong>Credentialed Scan (Q182):</strong> Logs into target with admin credentials; directly reads registry and installed packages; lowest false positives.<br>
        • <strong>Nessus Plugin Language (Q183):</strong> Uses <strong>NASL</strong> (Nessus Attack Scripting Language).<br>
        • <strong>Open-Source Standard:</strong> <strong>OpenVAS</strong> (Greenbone).<br>
        • <strong>CISA KEV:</strong> Catalog of bugs actively exploited in the real world.</p>
      </div>
    </div>

    ${makeQuizCTA(19, 'VA Tools & Techniques', 18)}`
    }
  },

  // =========================================================================
  // TOPIC 20: PENETRATION TESTING AND ITS METHODS/TOOLS
  // =========================================================================
  // Spread 38: Pages 77 & 78
  {
    spreadId: 38,
    left: {
      pageNumber: 77,
      runningHead: 'TOPIC 20 • PTES STANDARD & RECONNAISSANCE',
      content: `
    ${makeHeader(20, 'Penetration Testing and Its Methods/Tools', 'Penetration Testing Frameworks: The PTES Standard', 1)}

    <div class="intro-abstract">
      <p><strong>Penetration Testing (Ethical Hacking)</strong> is the authorized, simulated cyberattack against a computer system, performed to evaluate its real-world security. It goes beyond scanning to actively exploit vulnerabilities and demonstrate business impact.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The PTES Framework (7 Sequential Phases) (Q191)</span>
      <p>The <strong>Penetration Testing Execution Standard (PTES)</strong> outlines the standard 7 phases of every professional pentest:</p>
      <ul class="forensic-list">
        <li><strong>1. Pre-engagement Interactions:</strong> Scoping, signing contracts, ROE, liability release.</li>
        <li><strong>2. Intelligence Gathering:</strong> OSINT reconnaissance, harvesting emails, domain DNS.</li>
        <li><strong>3. Threat Modeling:</strong> Identifying the most lucrative attack paths.</li>
        <li><strong>4. Vulnerability Analysis:</strong> Discovering exploitable weaknesses.</li>
        <li><strong>5. Exploitation:</strong> Breaching the target perimeter to prove vulnerability viability.</li>
        <li><strong>6. Post-Exploitation:</strong> Escalating privileges, dumping credentials, lateral movement.</li>
        <li><strong>7. Reporting:</strong> Detailed technical findings and executive mitigation roadmap.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 78,
      runningHead: 'TOPIC 20 • NMAP SCANNING & PORT STATES',
      content: `
    ${makeHeader(20, 'Penetration Testing and Its Methods/Tools', 'Network Port Scanning with Nmap & Port States', 2)}

    <div class="section-block">
      <span class="section-label">2. Essential Nmap Scan Commands (Q192)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">nmap -sS (SYN Stealth Scan)</span>
            <span class="statute-tag">Half-Open Scan</span>
          </div>
          <p>• Sends SYN; receives SYN-ACK; immediately sends RST to tear down connection.<br>
          • Never completes full 3-way handshake; evades legacy logging. Requires root!</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">nmap -sT (TCP Connect Scan)</span>
            <span class="statute-tag">Full 3-Way Handshake</span>
          </div>
          <p>• Completes full 3-way handshake (SYN &rarr; SYN-ACK &rarr; ACK).<br>
          • Used when user lacks root/administrator privileges.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. The 3 Core Nmap Port States</span>
      <p>• <strong>Open:</strong> An application is actively accepting connections on this port.<br>
      • <strong>Closed:</strong> Target host received probe, but no application is listening (returned RST).<br>
      • <strong>Filtered:</strong> A firewall or packet filter dropped the probe; Nmap cannot determine state.</p>
    </div>

    ${makeContinuation(20, 'Pentest Methods & Tools', 'Exploitation Tools: Metasploit, Meterpreter & Burp Suite', 19)}`
    }
  },

  // Spread 39: Pages 79 & 80
  {
    spreadId: 39,
    left: {
      pageNumber: 79,
      runningHead: 'TOPIC 20 • METASPLOIT & METERPRETER',
      content: `
    ${makeHeader(20, 'Penetration Testing and Its Methods/Tools', 'Exploitation Tools: Metasploit & In-Memory Meterpreter', 3)}

    <div class="section-block">
      <span class="section-label">4. The Metasploit Framework (MSF) (Q193)</span>
      <p>Created by H.D. Moore, Metasploit is the world's most widely used exploitation framework. Its modular design includes:</p>
      <ul class="forensic-list">
        <li><strong>Exploits:</strong> Modules that leverage a specific software flaw (e.g., EternalBlue).</li>
        <li><strong>Payloads:</strong> Code that runs on the target after successful exploit:
          <ul>
            <li><em>Singles:</em> Self-contained small payloads.</li>
            <li><em>Stagers:</em> Establishes a network connection to download the main payload.</li>
            <li><em>Stages:</em> Complex interactive payloads (e.g., <strong>Meterpreter</strong>).</li>
          </ul>
        </li>
      </ul>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">The Meterpreter Advantage (Forensic Stealth)</span>
          <span class="statute-tag">In-Memory DLL Injection</span>
        </div>
        <p>Meterpreter operates <strong>entirely in volatile RAM</strong> using Reflective DLL injection. It never writes an executable file to the hard drive, completely evading traditional disk-based antivirus scanners!</p>
      </div>
    </div>`
    },
    right: {
      pageNumber: 80,
      runningHead: 'TOPIC 20 • BURP SUITE & EXAM TRAPS',
      content: `
    ${makeHeader(20, 'Penetration Testing and Its Methods/Tools', 'Burp Suite & DSSSB High-Yield Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">5. Burp Suite (Web Application Testing)</span>
      <p>The premier tool for web application security auditing. Acts as an <strong>Interception Proxy</strong> between the browser and target web server:</p>
      <p>• <strong>Proxy:</strong> Intercepts and modifies HTTP/HTTPS requests in real-time.<br>
      • <strong>Repeater:</strong> Manually modifies and re-sends individual HTTP requests.<br>
      • <strong>Intruder:</strong> Automates brute-force password testing and fuzzing.</p>
    </div>

    <div class="section-block">
      <span class="section-label">6. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>PTES Phases (Q191):</strong> 7 sequential phases from Pre-engagement to Reporting.<br>
        • <strong>Nmap SYN Stealth Scan (Q192):</strong> <code>nmap -sS</code> (Half-open; sends SYN, receives SYN-ACK, sends RST; requires root).<br>
        • <strong>Meterpreter Stealth (Q193):</strong> Runs <strong>entirely in volatile RAM</strong> without writing files to disk.<br>
        • <strong>Burp Suite Role:</strong> HTTP/HTTPS interception proxy for web application security testing.</p>
      </div>
    </div>

    ${makeQuizCTA(20, 'Pentest Methods & Tools', 19)}`
    }
  }
];
