// Spreads Part 4: Spreads 16 to 20 (Pages 31 to 40)
module.exports = [
  // SPREAD 16 (Pages 31–32): Topic 11B: Types of Vulnerabilities: Web, API, Auth & Architecture
  {
    spreadId: 15,
    left: {
      pageNumber: 31,
      runningHead: "CH. 16 • BROKEN ACCESS CONTROL & CSRF",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 16 • Web, API & Architectural Flaws</span>
      <h2>Broken Access Control (IDOR), Broken Auth & Cross-Site Request Forgery (CSRF)</h2>
    </div>
    <p>Beyond input validation, modern applications suffer from architectural flaws in access control and identity management:</p>

    <div class="section-block">
      <span class="section-label">1. Broken Access Control & IDOR / BOLA (Q151, Q152)</span>
      <div class="statutory-grid">
        <div class="statute-card card-penalty">
          <div class="statute-header">
            <span class="statute-section">IDOR / BOLA (Q151)</span>
            <span class="statute-tag badge-penalty">OWASP API #1</span>
          </div>
          <p><strong>Insecure Direct Object Reference:</strong> Occurs when an application accepts a direct reference to an internal database object (e.g. <code>/api/account/1004</code>) without verifying if the requesting user has permission to access that specific record.</p>
        </div>

        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Broken Auth (Q152)</span>
            <span class="statute-tag">Session Flaws</span>
          </div>
          <p>Encompasses weak credential governance: permitting default passwords, lacking rate-limiting on login forms (enabling credential stuffing), session fixation, or failing to invalidate session tokens on logout.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Cross-Site Request Forgery (CSRF - CWE-352) (Q153)</span>
      <p><strong>How CSRF Works:</strong> An attacker tricks an authenticated victim's browser into submitting an unauthorized state-changing request (e.g. changing an email address or transferring bank funds) to a vulnerable target web application.</p>
      <ul>
        <li><strong>Why it succeeds:</strong> Web browsers automatically include session cookies with cross-site requests.</li>
        <li><strong>Defenses:</strong> Anti-CSRF synchronizer tokens (unpredictable token validated on POST) and the <code>SameSite=Strict</code> or <code>SameSite=Lax</code> cookie attribute.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q151–Q153):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>IDOR / BOLA (Q151):</strong> Direct reference to internal database objects without authorization verification.</li>
        <li><strong>Broken Authentication (Q152):</strong> Flaws in credential handling, session lifetime, or missing rate-limiting.</li>
        <li><strong>CSRF (Q153):</strong> CWE-352 flaw tricking authenticated browsers into executing forged requests; defended via Anti-CSRF tokens and SameSite cookies.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 32,
      runningHead: "CH. 16 • SSRF, CLICKJACKING & MISCONFIGS",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Advanced Application Flaws</span>
      <h2>SSRF, Cloud Metadata (169.254.169.254), Clickjacking & Misconfigurations</h2>
    </div>
    <p>Exploring high-severity architectural vulnerabilities across cloud backends and web frontends:</p>

    <div class="section-block">
      <span class="section-label">1. Server-Side Request Forgery & Cloud Metadata (Q154)</span>
      <div class="alert-box">
        <strong>Server-Side Request Forgery (SSRF - CWE-918) (Q154):</strong>
        <p>Occurs when a web application accepts a user-supplied URL and fetches data from that URL on the backend server without validation. Attackers supply internal loopback or private IP addresses (e.g. <code>http://169.254.169.254/latest/meta-data/</code>) to trick the server into dumping internal cloud IAM credentials and private network endpoints!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Misconfigurations, Race Conditions & Clickjacking (Q155, Q156, Q157, Q158, Q159, Q160)</span>
      <ul>
        <li><strong>Security Misconfiguration (Q155):</strong> Default administrative credentials, debug mode left active, open directory listings, or verbose error messages showing stack traces.</li>
        <li><strong>Sensitive Data Exposure (Q156):</strong> Transmitting credentials or credit cards in cleartext over unencrypted protocols (HTTP, Telnet) or using weak deprecated ciphers (RC4, DES).</li>
        <li><strong>Race Condition / TOCTOU (CWE-367) (Q157):</strong> Time-of-Check to Time-of-Use flaw where resource state changes between verification and execution (e.g. double spending).</li>
        <li><strong>Clickjacking (UI Redressing) (Q158):</strong> Tricking users into clicking transparent overlay buttons. Defended via <code>X-Frame-Options: DENY</code> and CSP <code>frame-ancestors 'none'</code>.</li>
        <li><strong>Unrestricted File Upload (CWE-434) (Q159):</strong> Uploading executable server scripts (e.g. <code>.php</code>, <code>.jsp</code> web shells) into web-accessible directories, achieving instant Remote Code Execution (RCE).</li>
        <li><strong>Mass Assignment (Q160):</strong> Auto-binding request parameters directly into database model fields, allowing attackers to overwrite unauthorized properties like <code>{"is_admin": true}</code>.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q154–Q160):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>SSRF (Q154):</strong> Tricking backend servers into querying internal cloud metadata (169.254.169.254).</li>
        <li><strong>Security Misconfiguration (Q155):</strong> Default accounts, open directory listings, and debug mode active.</li>
        <li><strong>Sensitive Data Exposure (Q156):</strong> Transmitting credentials in cleartext over unencrypted channels.</li>
        <li><strong>Race Condition (Q157):</strong> Time-of-Check to Time-of-Use (TOCTOU) concurrency vulnerability.</li>
        <li><strong>Clickjacking (Q158):</strong> Transparent UI overlay trick; mitigated via <strong>X-Frame-Options: DENY</strong>.</li>
        <li><strong>Unrestricted File Upload (Q159):</strong> Uploading executable web shells directly to the web root.</li>
        <li><strong>Mass Assignment (Q160):</strong> Auto-binding parameters overwriting internal fields like <em>is_admin</em>.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 16 (Q151–Q160)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on IDOR/BOLA, CSRF, SSRF Cloud Metadata, Clickjacking & File Uploads.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(15)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q151–Q160) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 17 (Pages 33–34): Topic 12 & 13: Common Vulnerabilities and Exposures (CVEs) & CVSS Scoring System
  {
    spreadId: 16,
    left: {
      pageNumber: 33,
      runningHead: "CH. 17 • THE CVE STANDARDIZATION SYSTEM",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 17 • Vulnerability Standardization & Scoring</span>
      <h2>Common Vulnerabilities and Exposures (CVEs) & The NVD Database</h2>
    </div>
    <p>The <strong>Common Vulnerabilities and Exposures (CVE)</strong> system provides a standardized, publicly accessible reference identifier and dictionary for known cybersecurity flaws (<strong>Q161</strong>).</p>

    <div class="section-block">
      <span class="section-label">1. MITRE CVE Naming Standard & CNAs (Q162, Q163)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">CVE Naming Format (Q162)</span>
            <span class="statute-tag">MITRE Identifier</span>
          </div>
          <p>Follows the strict standard: <code>CVE-YYYY-NNNNN</code> (e.g. <strong>CVE-2021-44228</strong> for Log4Shell, <strong>CVE-2017-0144</strong> for EternalBlue).</p>
          <p>Where <code>YYYY</code> is the year the CVE was assigned, and <code>NNNNN</code> is an arbitrary 4+ digit sequence number.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">CNAs & The NVD (Q163, Q170)</span>
            <span class="statute-tag">Assignment Authorities</span>
          </div>
          <p><strong>CVE Numbering Authorities (CNAs) (Q163):</strong> Authorized vendors (Microsoft, Apple, Google, Red Hat) and research bodies authorized by MITRE to assign official CVE numbers.</p>
          <p><strong>National Vulnerability Database (NVD) (Q170):</strong> NIST database that synchronizes with CVE, providing official CVSS scoring and remediation links.</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q161–Q163):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>CVE Purpose (Q161):</strong> Standardized public dictionary for known cybersecurity vulnerabilities.</li>
        <li><strong>CVE Naming Format (Q162):</strong> Standardized as <strong>CVE-YYYY-NNNNN</strong> (e.g. CVE-2021-44228).</li>
        <li><strong>CNAs (Q163):</strong> CVE Numbering Authorities authorized to assign official CVE identifiers.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 34,
      runningHead: "CH. 17 • CVSS V3.1 SCORING ARCHITECTURE",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Vulnerability Severity Scoring</span>
      <h2>Common Vulnerability Scoring System (CVSS v3.1) Base Metrics</h2>
    </div>
    <p>Maintained by FIRST, <strong>CVSS v3.1</strong> evaluates vulnerability severity on a decimal scale from <strong>0.0 to 10.0</strong> (<strong>Q164</strong>):</p>

    <div class="section-block">
      <span class="section-label">1. Base Metric Group: Exploitability & Scope (Q165, Q166, Q167, Q168)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Exploitability Metrics (Q165)</span>
            <span class="statute-tag">Ease of Compromise</span>
          </div>
          <ul style="margin: 4px 0 0 16px; padding: 0;">
            <li><strong>Attack Vector (AV) (Q166):</strong> <em>Network (AV:N)</em> [remotely exploitable across public Internet], <em>Adjacent (AV:A)</em> [local Wi-Fi], <em>Local (AV:L)</em>, <em>Physical (AV:P)</em>.</li>
            <li><strong>Attack Complexity (AC):</strong> <em>Low (L)</em> or <em>High (H)</em>.</li>
            <li><strong>Privileges Required (PR):</strong> <em>None (N)</em>, <em>Low (L)</em>, or <em>High (H)</em>.</li>
            <li><strong>User Interaction (UI) (Q167):</strong> <em>None (N)</em> or <em>Required (R)</em> (e.g. clicking a link).</li>
          </ul>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Scope Metric (S) (Q168)</span>
            <span class="statute-tag">Security Boundary</span>
          </div>
          <p><strong>Scope Changed (S:C):</strong> The vulnerability affects resources managed by a <em>different security authority</em> (e.g., <strong>Virtual Machine Escape</strong> escaping guest OS to host hypervisor, or Cross-Site Scripting).</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Qualitative Severity Ratings & SLAs (Q169)</span>
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr><th>CVSS v3.1 Score</th><th>Severity Rating (Q169)</th><th>Enterprise Action</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>0.0</strong></td><td>None</td><td>Informational only</td></tr>
            <tr><td><strong>0.1 – 3.9</strong></td><td>Low</td><td>Next maintenance cycle</td></tr>
            <tr><td><strong>4.0 – 6.9</strong></td><td>Medium</td><td>Remediate within 30 to 60 days</td></tr>
            <tr><td><strong>7.0 – 8.9</strong></td><td>High</td><td>Remediate within 7 to 14 days</td></tr>
            <tr><td><strong>9.0 – 10.0</strong></td><td><strong>Critical (Q169)</strong></td><td><strong>Immediate emergency patch (24–48 hours)</strong></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q164–Q170):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>CVSS Scale (Q164):</strong> Standard measuring vulnerability severity on a decimal scale from 0.0 to 10.0.</li>
        <li><strong>Attack Vector (AV:N) (Q166):</strong> Network vector (remotely exploitable across public Internet).</li>
        <li><strong>User Interaction (UI:R) (Q167):</strong> Requires victim participation to execute exploit.</li>
        <li><strong>Scope Changed (S:C) (Q168):</strong> Flaw compromises resources beyond its initial security boundary.</li>
        <li><strong>Critical Severity (Q169):</strong> CVSS v3.1 scores from <strong>9.0 to 10.0</strong> represent Critical severity.</li>
        <li><strong>NVD Database (Q170):</strong> NIST National Vulnerability Database provides official CVSS scoring.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 17 (Q161–Q170)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on MITRE CVEs, CNAs, CVSS v3.1 Base Metrics & Critical Severity Bands.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(16)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q161–Q170) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 18 (Pages 35–36): Topic 14: Vulnerability Assessment Tools and Techniques
  {
    spreadId: 17,
    left: {
      pageNumber: 35,
      runningHead: "CH. 18 • VULNERABILITY ASSESSMENT WORKFLOW",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 18 • Vulnerability Assessment Operations</span>
      <h2>The Vulnerability Assessment Lifecycle & Credentialed Scanning</h2>
    </div>
    <p>A structured <strong>Vulnerability Assessment</strong> systematically catalogs and evaluates risks across enterprise IT infrastructure (<strong>Q171</strong>).</p>

    <div class="section-block">
      <span class="section-label">1. The 5-Phase Vulnerability Assessment Lifecycle (Q171)</span>
      <ol style="margin: 6px 0 0 18px; padding: 0; line-height: 1.6;">
        <li><strong>Asset Discovery:</strong> Ping sweeps and ARP scans to discover all active devices on the network.</li>
        <li><strong>Service Enumeration:</strong> Port scanning to map listening TCP/UDP ports, operating systems, and services.</li>
        <li><strong>Vulnerability Scanning:</strong> Running automated vulnerability check plugins against discovered services.</li>
        <li><strong>Analysis & Verification:</strong> Filtering out false positives, evaluating CVSS scores, and correlating assets.</li>
        <li><strong>Reporting & Remediation:</strong> Generating patch priority roadmaps and verifying fixes via re-scans.</li>
      </ol>
    </div>

    <div class="section-block">
      <span class="section-label">2. Credentialed vs. Non-Credentialed Scanning (Q172, Q173)</span>
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr><th>Scanning Type</th><th>How It Works</th><th>Forensic Strengths & Limitations</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Non-Credentialed (Unauthenticated)</strong></td>
              <td>Probes exposed network ports from the outside without credentials.</td>
              <td>Simulates an external attacker. High false positives; cannot see internal patches or registry keys.</td>
            </tr>
            <tr>
              <td><strong>Credentialed (Authenticated) (Q172, Q173)</strong></td>
              <td>Logs directly into target OS via SSH/SMB using local admin credentials.</td>
              <td><strong>Preferred for compliance audits</strong>: verifies exact software versions on disk and missing OS patches with near-zero network noise and minimal false positives!</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q171–Q173):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>VA Lifecycle (Q171):</strong> Asset Discovery &rarr; Service Enumeration &rarr; Vulnerability Scanning &rarr; Analysis &rarr; Reporting.</li>
        <li><strong>Credentialed Scan (Q172):</strong> Authenticated scan logging in with credentials to inspect internal OS files.</li>
        <li><strong>Audit Preference (Q173):</strong> Credentialed scans detect missing internal patches with minimal false positives.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 36,
      runningHead: "CH. 18 • VULNERABILITY ASSESSMENT TOOLS",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Assessment Tooling & SCADA Defense</span>
      <h2>Nessus, OpenVAS, Qualys, Nikto & The CISA KEV Catalog</h2>
    </div>
    <p>Exploring the premier automated vulnerability assessment tools used across enterprise and critical infrastructure:</p>

    <div class="section-block">
      <span class="section-label">1. Enterprise Vulnerability Assessment Tools (Q174, Q175, Q176, Q177, Q178)</span>
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr><th>Tool Name</th><th>Architecture & Origin</th><th>Core Specialty</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nessus (Q174)</strong></td>
              <td>Tenable (Proprietary)</td>
              <td>Global standard scanner utilizing modular plugins written in <strong>NASL</strong> (Nessus Attack Scripting Language).</td>
            </tr>
            <tr>
              <td><strong>OpenVAS (Q175)</strong></td>
              <td>Greenbone (Open Source)</td>
              <td>Premier open-source vulnerability scanner; originally forked from Nessus when it went closed-source in 2005.</td>
            </tr>
            <tr>
              <td><strong>Qualys (Q176)</strong></td>
              <td>Cloud SaaS Platform</td>
              <td>Deploys lightweight Cloud Agents directly onto endpoints for continuous real-time vulnerability tracking.</td>
            </tr>
            <tr>
              <td><strong>Nikto (Q177)</strong></td>
              <td>Perl Command-Line</td>
              <td>Specialized web server scanner detecting over 6,700 dangerous CGIs, outdated software, and misconfigs.</td>
            </tr>
            <tr>
              <td><strong>OpenSCAP (Q178)</strong></td>
              <td>NIST SCAP Framework</td>
              <td>Automated auditing against security compliance baselines (DISA STIGs, CIS Benchmarks) on Linux.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Passive Scanning & The CISA KEV Catalog (Q179, Q180)</span>
      <ul>
        <li><strong>Passive Vulnerability Assessment (Q179):</strong> Monitoring mirrored network traffic via SPAN/TAP ports without injecting probe packets. Essential in sensitive SCADA/ICS power grids and healthcare networks where active probes could crash fragile controllers!</li>
        <li><strong>CISA KEV Catalog (Q180):</strong> The <strong>Known Exploited Vulnerabilities</strong> catalog maintained by CISA lists flaws actively weaponized by adversaries in the wild, establishing mandatory enterprise remediation deadlines.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q174–Q180):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Nessus (Q174):</strong> Industry-standard scanner using modular NASL plugins.</li>
        <li><strong>OpenVAS (Q175):</strong> Leading open-source vulnerability scanner forked from Nessus.</li>
        <li><strong>Qualys (Q176):</strong> Cloud SaaS vulnerability platform using lightweight endpoint agents.</li>
        <li><strong>Nikto (Q177):</strong> Open-source web server scanner written in Perl for dangerous CGIs and misconfigs.</li>
        <li><strong>OpenSCAP (Q178):</strong> Automated auditing against NIST SCAP compliance baselines.</li>
        <li><strong>Passive Scanning (Q179):</strong> Safe monitoring via SPAN ports for sensitive SCADA/medical networks.</li>
        <li><strong>CISA KEV (Q180):</strong> Catalog of vulnerabilities actively exploited in the wild.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 18 (Q171–Q180)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on Vulnerability Assessment Lifecycles, Nessus, OpenVAS, Qualys & CISA KEV.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(17)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q171–Q180) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 19 (Pages 37–38): Topic 15A: Penetration Testing Methods & Reconnaissance (Nmap Mastery)
  {
    spreadId: 18,
    left: {
      pageNumber: 37,
      runningHead: "CH. 19 • PTES STANDARD & RECONNAISSANCE",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 19 • Penetration Testing Execution Standard</span>
      <h2>PTES 7-Phase Methodology & Passive vs. Active Reconnaissance</h2>
    </div>
    <p>Professional penetration testing follows structured frameworks to ensure ethical, legal, and technical rigor (<strong>Q181</strong>).</p>

    <div class="section-block">
      <span class="section-label">1. The PTES 7-Phase Penetration Testing Methodology (Q181)</span>
      <ol style="margin: 6px 0 0 18px; padding: 0; line-height: 1.6;">
        <li><strong>1. Pre-engagement Interactions:</strong> Establishing legal authorization, Rules of Engagement (ROE), and IP scoping.</li>
        <li><strong>2. Intelligence Gathering:</strong> OSINT, DNS harvesting, and footprinting to map target architecture.</li>
        <li><strong>3. Threat Modeling:</strong> Identifying high-value assets and mapping realistic attacker pathways.</li>
        <li><strong>4. Vulnerability Analysis:</strong> Uncovering security flaws, configuration errors, and missing patches.</li>
        <li><strong>5. Exploitation:</strong> Actively penetrating security barriers to prove system access.</li>
        <li><strong>6. Post-Exploitation:</strong> Privilege escalation, credential harvesting, lateral movement, and data value analysis.</li>
        <li><strong>7. Reporting:</strong> Compiling executive risk summaries and technical remediation guidance.</li>
      </ol>
    </div>

    <div class="section-block">
      <span class="section-label">2. Passive vs. Active Reconnaissance (Q182)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Passive Recon (Q182)</span>
            <span class="statute-tag">Invisible Footprinting</span>
          </div>
          <p>Gathers intelligence <strong>WITHOUT sending any traffic directly</strong> to the target systems. Completely undetectable by the victim's intrusion detection systems (e.g. WHOIS queries, search engines, Shodan, DNS harvesting).</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Active Recon (Q182)</span>
            <span class="statute-tag">Direct Probing</span>
          </div>
          <p>Sends packets directly to probe target systems, firewalls, and server ports (e.g. port scanning, service banner grabbing). Yields rich data but gets logged by firewalls.</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q181–Q183):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>PTES Standard (Q181):</strong> 7 sequential phases: Pre-engagement, Intel Gathering, Threat Modeling, Vuln Analysis, Exploitation, Post-Exploitation, Reporting.</li>
        <li><strong>Passive Recon (Q182):</strong> Gathers intelligence without sending packets to target systems.</li>
        <li><strong>Active Recon (Q182):</strong> Sends direct probe packets to discover ports and services.</li>
        <li><strong>Nmap Creator (Q183):</strong> Network exploration tool developed by Gordon Lyon (Fyodor).</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 38,
      runningHead: "CH. 19 • NMAP PORT SCANNING MASTERY",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Active Network Discovery</span>
      <h2>Network Mapping with Nmap: Command Flags & Port States</h2>
    </div>
    <p>Gordon Lyon's <strong>Nmap (Network Mapper)</strong> is the worldwide standard utility for port scanning and network reconnaissance (<strong>Q183</strong>):</p>

    <div class="section-block">
      <span class="section-label">1. Essential Nmap Command Flags (Q184, Q185, Q186, Q187, Q188, Q190)</span>
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr><th>Nmap Flag</th><th>Scan Name & Mechanics</th><th>Operational Purpose</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><code>-sS</code> (Q184)</td>
              <td><strong>TCP SYN Stealth Scan</strong> (Half-Open)</td>
              <td>Sends SYN. If SYN/ACK is returned, responds with <strong>RST</strong> (never completes handshake). Default root scan; not logged by basic app connection logs!</td>
            </tr>
            <tr>
              <td><code>-sT</code> (Q185)</td>
              <td><strong>TCP Connect Scan</strong></td>
              <td>Completes the full 3-way handshake (SYN &rarr; SYN/ACK &rarr; ACK) using OS socket API. Used when the user lacks raw packet crafting privileges.</td>
            </tr>
            <tr>
              <td><code>-sV</code> (Q186)</td>
              <td><strong>Version Detection</strong></td>
              <td>Probes open ports to extract application banners and software versions (e.g. <code>Apache 2.4.49</code>).</td>
            </tr>
            <tr>
              <td><code>-sC</code> (Q187)</td>
              <td><strong>Default Script Scan</strong></td>
              <td>Executes standard vulnerability and enumeration scripts from the <strong>Nmap Scripting Engine (NSE)</strong>.</td>
            </tr>
            <tr>
              <td><code>-Pn</code> (Q188)</td>
              <td><strong>Disable Ping</strong></td>
              <td>Treats all targets as online, forcing Nmap to scan ports even if the host drops ICMP ping requests!</td>
            </tr>
            <tr>
              <td><code>-sX</code> (Q190)</td>
              <td><strong>TCP Xmas Scan</strong></td>
              <td>Sets <strong>FIN, PSH, and URG flags simultaneously</strong> ("lights up packet like a Christmas tree") to evade stateless packet filters.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Nmap Port States: Open, Closed & Filtered (Q189)</span>
      <ul>
        <li><strong>Open:</strong> An application is actively accepting TCP connections or UDP packets (received SYN/ACK).</li>
        <li><strong>Closed:</strong> The port is accessible (received an RST packet), but no application is listening.</li>
        <li><strong>Filtered (Q189):</strong> Nmap cannot determine if the port is open or closed because <strong>a firewall, packet filter, or router ACL is dropping probes</strong> without returning any response!</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q184–Q190):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>-sS (Q184):</strong> TCP SYN Stealth Scan (half-open scan; sends RST before completing 3-way handshake).</li>
        <li><strong>-sT (Q185):</strong> TCP Connect Scan (completes full 3-way handshake via OS socket API).</li>
        <li><strong>-sV (Q186):</strong> Service version detection probing open ports.</li>
        <li><strong>-sC (Q187):</strong> Executes default Nmap Scripting Engine (NSE) scripts.</li>
        <li><strong>-Pn (Q188):</strong> Disables ICMP ping host discovery; scans hosts that drop ping.</li>
        <li><strong>Filtered Port (Q189):</strong> Signifies a firewall or packet filter is dropping probes.</li>
        <li><strong>-sX Xmas Scan (Q190):</strong> Sets FIN, PSH, and URG flags simultaneously.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 19 (Q181–Q190)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on PTES 7 Phases, Passive vs Active Recon, Nmap Flags (-sS, -sV, -Pn) & Port States.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(18)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q181–Q190) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 20 (Pages 39–40): Topic 15B: Penetration Testing Exploitation Tools, Methods & Final Reporting
  {
    spreadId: 19,
    left: {
      pageNumber: 39,
      runningHead: "CH. 20 • METASPLOIT & BURP SUITE",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 20 • Exploitation Frameworks & Tooling</span>
      <h2>The Metasploit Framework, Meterpreter & Web Application Proxies</h2>
    </div>
    <p>Exploitation frameworks and web proxies allow penetration testers to verify vulnerability exploitability and demonstrate business impact (<strong>Q191</strong>).</p>

    <div class="section-block">
      <span class="section-label">1. The Metasploit Framework Architecture (Q191, Q192, Q193, Q194)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Metasploit Modules (Q191, Q192)</span>
            <span class="statute-tag">H.D. Moore (2003)</span>
          </div>
          <p><strong>Exploit:</strong> The software module that takes advantage of a flaw to bypass defenses and gain entry.<br>
          <strong>Payload (Q192):</strong> The actual code deposited and executed on the target after compromise (e.g. command shell, Meterpreter).<br>
          <strong>Auxiliary:</strong> Port scanners, sniffers, and fuzzers.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Meterpreter (Q193, Q194)</span>
            <span class="statute-tag">In-Memory Payload</span>
          </div>
          <p>An advanced post-exploitation payload that executes entirely in the target computer's <strong>volatile memory (RAM)</strong> via Reflective DLL Injection without touching disk, evading traditional endpoint antivirus scanners!</p>
          <p><strong>Staged vs Single (Q193):</strong> Staged payloads inject a tiny stager to download Meterpreter; Singles are self-contained.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Web Application Pentesting: Burp Suite & ZAP (Q195, Q196, Q197, Q198)</span>
      <ul>
        <li><strong>Burp Suite (Q195):</strong> PortSwigger's industry-standard intercepting HTTP/S proxy positioned between the browser and target server.
          <ul>
            <li><strong>Burp Repeater (Q196):</strong> Allows testers to manually modify and repeatedly reissue individual HTTP requests to observe fine-grained server responses.</li>
            <li><strong>Burp Intruder (Q197):</strong> Automates customized attacks, parameter fuzzing, and credential brute-forcing.</li>
          </ul>
        </li>
        <li><strong>OWASP ZAP (Q197):</strong> Leading free, open-source web application security scanner and proxy maintained by OWASP.</li>
        <li><strong>Hashcat (Q198):</strong> The world's fastest GPU-accelerated rule-based password cracking utility, supporting hundreds of hash formats.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q191–Q198):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Metasploit (Q191):</strong> Premier exploitation framework created by H.D. Moore.</li>
        <li><strong>Exploit vs Payload (Q192):</strong> Exploit triggers the flaw; Payload is the code executed on target.</li>
        <li><strong>Staged Payloads (Q193):</strong> Tiny stager downloads the larger stage over a network connection.</li>
        <li><strong>Meterpreter (Q194):</strong> In-memory post-exploitation payload that avoids touching the physical hard drive.</li>
        <li><strong>Burp Suite (Q195):</strong> Intercepting web proxy for inspecting and modifying HTTP/S traffic.</li>
        <li><strong>Burp Repeater (Q196):</strong> Manually modifies and replays individual HTTP requests.</li>
        <li><strong>Burp Intruder (Q197):</strong> Automates parameter fuzzing and credential testing.</li>
        <li><strong>Hashcat (Q198):</strong> High-speed GPU-accelerated password recovery utility.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 40,
      runningHead: "CH. 20 • FINAL DELIVERABLES & CLEANUP",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Reporting & Post-Engagement Cleanup</span>
      <h2>Penetration Testing Final Deliverables & Ethical Remediation</h2>
    </div>
    <p>A penetration test is only as valuable as the final report and remediation guidance it delivers to the organization (<strong>Q199</strong>).</p>

    <div class="section-block">
      <span class="section-label">1. The Two Mandatory Components of a Pentest Report (Q199)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Executive Summary (Q199)</span>
            <span class="statute-tag">C-Suite & Board</span>
          </div>
          <p>Written in clear, non-technical business language. Summarizes the overall organizational security posture, business risks, potential financial/compliance impacts, and strategic roadmaps for executive leadership.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Technical Report (Q199)</span>
            <span class="statute-tag">Developers & Sysadmins</span>
          </div>
          <p>Detailed technical documentation containing exact, reproducible Proof-of-Concept (PoC) steps, affected assets, CVSS v3.1 severity scores, root cause code analysis, and actionable remediation/patching guidelines.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Post-Engagement Cleanup & Re-Testing (Q200)</span>
      <div class="alert-box">
        <strong>Ethical & Contractual Obligations (Q200):</strong>
        <p>Following the active testing window, testers must thoroughly sanitize the environment: removing all test user accounts, deleting uploaded web shells and temporary files, restoring system configurations, and conducting formal <strong>Re-Testing</strong> after client developers deploy patches to verify vulnerabilities are completely resolved!</p>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q199–Q200):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Mandatory Deliverables (Q199):</strong> <strong>Executive Summary</strong> (business risk for leadership) and <strong>Technical Report</strong> (reproducible POCs and patch steps for engineers).</li>
        <li><strong>Post-Engagement Cleanup (Q200):</strong> Removing all test accounts, web shells, and artifacts, followed by verification re-testing.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 20 (Q191–Q200)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on Metasploit, Meterpreter, Burp Suite, Hashcat & Pentest Final Reports.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(19)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q191–Q200) &rarr;
      </button>
    </div>`
    }
  }
];

