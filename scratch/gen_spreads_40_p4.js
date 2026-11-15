// Part 4: Topics 16–20 (Spreads 30–39, Pages 61–80)
// 4 Pages per Topic: Total 10 Spreads = 20 Pages

module.exports = [
  // =========================================================================
  // TOPIC 16: TYPES OF VULNERABILITIES: WEB, AUTH & SYSTEMS (Pages 61–64, Spreads 30 & 31, Q151–Q160)
  // =========================================================================
  // Spread 30: Part 1 - Broken Access Control, IDOR & CSRF (Pages 61–62)
  {
    spreadId: 30,
    left: {
      pageNumber: 61,
      runningHead: 'CH. 16 • BROKEN ACCESS CONTROL & IDOR',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 16 • Topic 16: Web, Auth & Systems (Part 1)</span>
      <h2>Broken Access Control & Insecure Direct Object References</h2>
    </div>

    <div class="intro-abstract">
      <p>Ranked #1 on the OWASP Top 10, <strong>Broken Access Control</strong> flaws occur when an application fails to enforce authorization restrictions, allowing authenticated users to act outside their intended permissions. Attackers view sensitive records belonging to other users, modify administrative configurations, or take over accounts.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Insecure Direct Object References (IDOR / BOLA) (Q151)</span>
      <p><strong>IDOR</strong> (also known as Broken Object-Level Authorization) occurs when an application exposes a reference to an internal database object (such as a database record key or account number) in an HTTP request, and fails to verify that the requesting user owns that object:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">The Anatomy of an IDOR Attack (Q151)</span>
          <span class="statute-tag">Classic Web Flaw</span>
        </div>
        <p>1. User Alice logs into her banking portal. Her browser requests: <code>GET /api/statement?account_id=10042</code>.<br>
        2. Alice inspects the request and notices the sequential account number. She changes the URL parameter to: <code>GET /api/statement?account_id=10043</code>.<br>
        3. <strong>Vulnerability:</strong> The backend API executes <code>SELECT * FROM statements WHERE account_id = 10043</code> WITHOUT checking whether the session token belongs to account 10043! Alice instantly downloads Bob's confidential bank statement.</p>
        <p>• <strong>Defenses:</strong> Enforce strict server-side authorization checks on every request (<code>WHERE account_id = :id AND owner_id = :session_user</code>); replace predictable sequential integers with cryptographically random UUIDv4 identifiers.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 62,
      runningHead: 'CH. 16 • CROSS-SITE REQUEST FORGERY (CSRF)',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 16 • Topic 16: Web, Auth & Systems (Part 2)</span>
      <h2>Cross-Site Request Forgery (CSRF / CWE-352)</h2>
    </div>

    <div class="section-block">
      <span class="section-label">2. Cross-Site Request Forgery (CSRF) Mechanics (Q152, Q153)</span>
      <p><strong>CSRF</strong> tricks an authenticated victim's web browser into executing unwanted, forged actions on a trusted web application where the victim is currently logged in:</p>
      
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">How Browsers Enable CSRF (Q152)</span>
          <span class="statute-tag">Automatic Cookie Attachment</span>
        </div>
        <p>By default, web browsers automatically attach session authentication cookies to cross-origin HTTP requests! If Alice is logged into <code>bank.com</code> and visits a malicious website, the attacker's page triggers a hidden form:</p>
        <p style="font-family: monospace; font-size: 0.8rem; background: rgba(0,0,0,0.04); padding: 6px; border-radius: 4px;">
          &lt;form action="https://bank.com/transfer" method="POST"&gt;<br>
          &nbsp;&nbsp;&lt;input type="hidden" name="to" value="attacker" /&gt;<br>
          &nbsp;&nbsp;&lt;input type="hidden" name="amount" value="5000" /&gt;<br>
          &lt;/form&gt;&lt;script&gt;document.forms[0].submit();&lt;/script&gt;
        </p>
        <p>The browser automatically includes Alice's valid session cookie! The bank processes the transfer as authentic.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. The 2 Core Defenses Against CSRF (Q153)</span>
      <ul class="forensic-list">
        <li><strong>Anti-CSRF Synchronizer Tokens:</strong> The server generates a unique, cryptographically random, unpredictable token embedded in forms. The server strictly validates this token on submission; an external malicious origin cannot read this token due to the Same-Origin Policy (SOP).</li>
        <li><strong>SameSite Cookie Attribute:</strong> Modern browser defense: <code>SameSite=Strict</code> prevents cookies from ever being sent in cross-site requests; <code>SameSite=Lax</code> permits cookies only on top-level safe GET navigations.</li>
      </ul>
    </div>
      `
    }
  },

  // Spread 31: Part 2 - SSRF, Clickjacking & Security Misconfigs (Pages 63–64)
  {
    spreadId: 31,
    left: {
      pageNumber: 63,
      runningHead: 'CH. 16 • SSRF & CLOUD METADATA EXPLOITATION',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 16 • Topic 16: Web, Auth & Systems (Part 3)</span>
      <h2>Server-Side Request Forgery (SSRF / CWE-918)</h2>
    </div>

    <div class="section-block">
      <span class="section-label">4. Server-Side Request Forgery (SSRF) Mechanics (Q154)</span>
      <p><strong>SSRF</strong> occurs when a web application accepts a user-supplied URL (e.g., to import an avatar, generate a PDF preview, or fetch a webhook) and fetches the remote resource <em>without validating the destination address</em>:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Cloud Metadata Target: 169.254.169.254 (Q154)</span>
          <span class="statute-tag">Capital One Breach Vector</span>
        </div>
        <p>Because the web server resides <em>inside</em> the corporate network, it has access to private internal IP subnets (<code>10.0.0.0/8</code>, <code>192.168.0.0/16</code>) and internal loopback services (<code>127.0.0.1</code>) that external attackers cannot reach directly!</p>
        <p>• <strong>The Cloud Metadata Endpoint:</strong> In AWS, GCP, and Azure, internal virtual machines query a non-routable link-local IP: <code>http://169.254.169.254/latest/meta-data/</code>. If an attacker inputs this URL, the server fetches and returns its own temporary IAM cloud credentials, allowing complete cloud infrastructure takeover!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">5. Clickjacking (UI Redressing / CWE-1021)</span>
      <p>An attacker loads a legitimate target website (e.g., banking portal) inside a transparent, invisible <code>&lt;iframe&gt;</code> overlaid directly over an enticing decoy button (e.g., "Click here to claim $1000!"). When the user clicks the decoy button, they unwittingly click the invisible "Transfer Funds" button underneath! <strong>Defense:</strong> Set HTTP headers <code>X-Frame-Options: DENY</code> and CSP <code>frame-ancestors 'none'</code>.</p>
    </div>
      `
    },
    right: {
      pageNumber: 64,
      runningHead: 'CH. 16 • SECURITY MISCONFIGURATIONS & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 16 • Topic 16: Web, Auth & Systems (Part 4)</span>
      <h2>Security Misconfigurations, File Uploads & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">6. Unrestricted File Upload & Security Misconfiguration (Q155, Q156)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Vulnerability Class</th>
            <th>Exploitation Mechanism & Forensic Impact (Q155, Q156)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Unrestricted File Upload (CWE-434)</strong></td>
            <td>Allowing users to upload files without validating extension, MIME type, or file magic bytes. An attacker uploads a PHP/JSP web shell (<code>shell.php</code>) disguised as an avatar, browses to <code>/uploads/shell.php</code>, and achieves instant Remote Code Execution (RCE) on the server!</td>
          </tr>
          <tr>
            <td><strong>Security Misconfiguration (Q155)</strong></td>
            <td>Leaving default vendor usernames and passwords (<code>admin/admin</code>, <code>root/toor</code>) unchanged, leaving debug mode / verbose stack traces enabled, or enabling open directory indexing (Apache <code>Options +Indexes</code>) exposing confidential source files.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 16 (Q151–Q160):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q151:</strong> IDOR occurs when an application exposes internal object references without verifying user ownership.</li>
        <li><strong>Q152:</strong> CSRF exploits browsers automatically attaching session cookies to unauthorized cross-origin requests.</li>
        <li><strong>Q153:</strong> Anti-CSRF synchronizer tokens and <code>SameSite=Strict</code> cookie attributes are the primary defenses against CSRF.</li>
        <li><strong>Q154:</strong> SSRF tricks a backend server into making requests to internal services or cloud metadata (<code>169.254.169.254</code>).</li>
        <li><strong>Q155:</strong> Security misconfiguration includes default passwords, enabled debug mode, and open directory indexing.</li>
        <li><strong>Q156:</strong> Clickjacking is prevented using the <code>X-Frame-Options: DENY</code> header or CSP <code>frame-ancestors</code> directive.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 16</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q151–Q160) on Broken Access Control, IDOR, CSRF & SSRF.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="15" onclick="window.openMCQForSpread(15)">
          Start Quiz (Q151–Q160) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 17: COMMON VULNERABILITIES AND EXPOSURES (CVES) & CVSS V3.1 SCORING (Pages 65–68, Spreads 32 & 33, Q161–Q170)
  // =========================================================================
  // Spread 32: Part 1 - The CVE Standardization Program (Pages 65–66)
  {
    spreadId: 32,
    left: {
      pageNumber: 65,
      runningHead: 'CH. 17 • THE CVE STANDARDIZATION SYSTEM',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 17 • Topic 17: CVEs & CVSS Scoring (Part 1)</span>
      <h2>The Common Vulnerabilities and Exposures (CVE) System</h2>
    </div>

    <div class="intro-abstract">
      <p>Prior to 1999, every security vendor used disparate, proprietary naming conventions for security bugs. One vendor called a flaw "Buffer Overflow in RPC", while another called it "DCOM Service Exploit". This caused chaos in security incident response. The <strong>Common Vulnerabilities and Exposures (CVE)</strong> system established a universal, standardized dictionary of publicly known cybersecurity vulnerabilities.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Origins & Governance of the CVE Program (Q161)</span>
      <p>Launched in September 1999, the CVE program is sponsored by the <strong>U.S. Cybersecurity and Infrastructure Security Agency (CISA)</strong> and managed operationally by the <strong>MITRE Corporation</strong>. It provides a free, open, international standard for tracking software flaws.</p>
    </div>

    <div class="section-block">
      <span class="section-label">2. The CVE Identifier Naming Syntax (Q162)</span>
      <p>Every standardized vulnerability is assigned a unique, immutable alphanumeric identifier:</p>
      <div class="statute-card card-teal">
        <p style="text-align: center; font-weight: 700; font-size: 1.1rem; color: var(--navy-primary);">
          CVE - YYYY - NNNNN...
        </p>
        <p>• <strong>Prefix (<code>CVE</code>):</strong> Fixed standard identifier.<br>
        • <strong>Year (<code>YYYY</code>):</strong> The year the CVE was formally assigned or publicly disclosed (not necessarily the year the bug was coded!).<br>
        • <strong>Sequence Number (<code>NNNNN...</code>):</strong> A minimum 4-digit sequential integer. (In 2014, MITRE eliminated the 4-digit cap, allowing 5, 6, or 7 digits to accommodate over 10,000 CVEs per year, e.g., <code>CVE-2021-44228</code>).</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 66,
      runningHead: 'CH. 17 • CNAS & THE NATIONAL VULNERABILITY DATABASE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 17 • Topic 17: CVEs & CVSS Scoring (Part 2)</span>
      <h2>CVE Numbering Authorities (CNAs) & NVD</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. CVE Numbering Authorities (CNAs) (Q163)</span>
      <p>MITRE does not assign all CVEs directly. Authority is federated globally across hundreds of <strong>CVE Numbering Authorities (CNAs)</strong>:</p>
      <ul class="forensic-list">
        <li><strong>Vendor CNAs:</strong> Major software vendors (Microsoft, Apple, Google, Red Hat, Oracle) assign CVEs directly to their own products during vulnerability patching.</li>
        <li><strong>Coordination Center CNAs:</strong> Organizations like CERT/CC and JPCERT/CC assign CVEs for third-party researchers and uncoordinated vendors.</li>
        <li><strong>Bug Bounty CNAs:</strong> Platforms like HackerOne assign CVEs to disclosed findings.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">4. The National Vulnerability Database (NVD) Ecosystem (Q164)</span>
      <p>Managed by NIST, the <strong>National Vulnerability Database (NVD)</strong> is fully synchronized with MITRE's CVE dictionary, enriching raw CVE records with:</p>
      <div class="statute-card card-purple">
        <p>• <strong>CWE Mapping:</strong> Categorizing the underlying design/code weakness (e.g., CWE-89).<br>
        • <strong>CPE Dictionary:</strong> <strong>Common Platform Enumeration (CPE)</strong>: A structured URI format identifying vulnerable operating systems and application versions (e.g., <code>cpe:2.3:a:apache:log4j:2.14.1:*:*:*:*:*:*:*</code>).<br>
        • <strong>CVSS Scores:</strong> Official severity calculations across Base metrics.</p>
      </div>
    </div>
      `
    }
  },

  // Spread 33: Part 2 - CVSS v3.1 Scoring & Severity Ratings (Pages 67–68)
  {
    spreadId: 33,
    left: {
      pageNumber: 67,
      runningHead: 'CH. 17 • COMMON VULNERABILITY SCORING SYSTEM',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 17 • Topic 17: CVEs & CVSS Scoring (Part 3)</span>
      <h2>Common Vulnerability Scoring System (CVSS v3.1)</h2>
    </div>

    <div class="section-block">
      <span class="section-label">5. The 3 CVSS Metric Groups (Q165)</span>
      <p>Maintained by FIRST (Forum of Incident Response and Security Teams), the <strong>Common Vulnerability Scoring System (CVSS v3.1)</strong> provides an open, vendor-neutral numerical score ranging from <strong>0.0 to 10.0</strong>:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Base Metric Group (Q165)</span>
            <span class="statute-tag">Mandatory / Constant</span>
          </div>
          <p>Represents intrinsic qualities of a vulnerability that are constant over time and across different user environments.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. Temporal Metric Group</span>
            <span class="statute-tag">Changes Over Time</span>
          </div>
          <p>Tracks evolving factors over time: Exploit Code Maturity (Unproven, POC, Functional, High), Remediation Level (Official Fix, Workaround), Report Confidence.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">6. CVSS v3.1 Base Metrics Breakdown (Q166, Q167)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Base Metric</th>
            <th>Evaluation Scale (Q166, Q167)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Attack Vector (AV)</strong></td>
            <td>Network (N) &gt; Adjacent (A) &gt; Local (L) &gt; Physical (P). Network exploitable remotely yields highest score.</td>
          </tr>
          <tr>
            <td><strong>Attack Complexity (AC)</strong></td>
            <td>Low (L) &gt; High (H). Low complexity (no specialized conditions required) yields higher score.</td>
          </tr>
          <tr>
            <td><strong>Privileges Required (PR)</strong></td>
            <td>None (N) &gt; Low (L) &gt; High (H). Unauthenticated access yields highest score.</td>
          </tr>
          <tr>
            <td><strong>User Interaction (UI)</strong></td>
            <td>None (N) &gt; Required (R). Exploits requiring zero human interaction (wormable) score highest.</td>
          </tr>
          <tr>
            <td><strong>Scope (S) (Q167)</strong></td>
            <td><strong>Unchanged (U) vs. Changed (C):</strong> Indicates whether a vulnerability in one component impacts resources beyond its security authority (e.g., hypervisor escape, container breakout)! <em>Scope Changed dramatically inflates the score!</em></td>
          </tr>
          <tr>
            <td><strong>Impact Metrics (C, I, A)</strong></td>
            <td>Evaluated independently for <strong>Confidentiality (C)</strong>, <strong>Integrity (I)</strong>, and <strong>Availability (A)</strong>: High (H) &gt; Low (L) &gt; None (N).</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 68,
      runningHead: 'CH. 17 • CVSS SEVERITY RATINGS & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 17 • Topic 17: CVEs & CVSS Scoring (Part 4)</span>
      <h2>CVSS Severity Ratings, Vector Strings & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">7. Official CVSS v3.1 Qualitative Severity Ratings (Q168)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Severity Rating</th>
            <th>Base Score Range (Q168)</th>
            <th>Enterprise Remediation SLA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>None</strong></td>
            <td>0.0</td>
            <td>No action required.</td>
          </tr>
          <tr>
            <td><strong>Low</strong></td>
            <td>0.1 – 3.9</td>
            <td>Remediate during scheduled quarterly maintenance.</td>
          </tr>
          <tr>
            <td><strong>Medium</strong></td>
            <td>4.0 – 6.9</td>
            <td>Remediate within 30 to 60 days.</td>
          </tr>
          <tr>
            <td><strong>High</strong></td>
            <td>7.0 – 8.9</td>
            <td>Remediate within 7 to 14 days.</td>
          </tr>
          <tr>
            <td><strong>Critical (Q168)</strong></td>
            <td><strong>9.0 – 10.0</strong></td>
            <td><strong>EMERGENCY SLA:</strong> Patch or mitigate within 24 to 48 hours! (e.g., Log4Shell = 10.0).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">8. Deconstructing the CVSS Vector String (Q169)</span>
      <div class="statute-card card-teal" style="font-family: monospace; font-size: 0.8rem;">
        CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H &nbsp;&larr; <strong>Score: 10.0 Critical!</strong><br><br>
        • AV:N (Network) • AC:L (Low complexity) • PR:N (No privileges) • UI:N (No user interaction)<br>
        • S:C (Scope Changed) • C:H (High confidentiality impact) • I:H (High integrity impact) • A:H (High availability impact)
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 17 (Q161–Q170):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q161:</strong> The CVE program is maintained by the MITRE Corporation and sponsored by CISA.</li>
        <li><strong>Q162:</strong> The CVE format is <code>CVE-YYYY-NNNNN...</code> (minimum 4 digits since 2014).</li>
        <li><strong>Q163:</strong> CVE Numbering Authorities (CNAs) federate vulnerability assignment worldwide.</li>
        <li><strong>Q165:</strong> CVSS consists of Base, Temporal, and Environmental metric groups.</li>
        <li><strong>Q167:</strong> Scope Changed (S:C) occurs when a flaw breaches component security boundaries (e.g., VM escape).</li>
        <li><strong>Q168:</strong> CVSS Critical severity strictly corresponds to scores from 9.0 to 10.0.</li>
        <li><strong>Q169:</strong> A remote unauthenticated exploit with maximum impact yields a perfect 10.0 CVSS score.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 17</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q161–Q170) on CVE Standards, CNAs & CVSS v3.1 Scoring.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="16" onclick="window.openMCQForSpread(16)">
          Start Quiz (Q161–Q170) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 18: VULNERABILITY ASSESSMENT TOOLS AND TECHNIQUES (Pages 69–72, Spreads 34 & 35, Q171–Q180)
  // =========================================================================
  // Spread 34: Part 1 - VA 5-Phase Lifecycle & Scanning Techniques (Pages 69–70)
  {
    spreadId: 34,
    left: {
      pageNumber: 69,
      runningHead: 'CH. 18 • THE ENTERPRISE VA LIFECYCLE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 18 • Topic 18: VA Tools & Techniques (Part 1)</span>
      <h2>The 5-Phase Vulnerability Assessment Lifecycle</h2>
    </div>

    <div class="intro-abstract">
      <p>Vulnerability Assessment is not a one-time scan; it is a continuous, structured risk management lifecycle. Enterprise networks add new cloud assets, deploy software updates, and face zero-day disclosures daily. Conducting regular vulnerability assessments ensures weaknesses are discovered and triaged before external threat actors exploit them.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The 5 Sequential Phases of Vulnerability Assessment (Q171)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Phase</th>
            <th>Name</th>
            <th>Key Operational Activities & Objectives (Q171)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Phase 1</strong></td>
            <td><strong>Scoping & Planning</strong></td>
            <td>Defining assessment goals, identifying asset boundaries, obtaining written legal approval, establishing scan scheduling windows to avoid network congestion.</td>
          </tr>
          <tr>
            <td><strong>Phase 2</strong></td>
            <td><strong>Asset Discovery & Enumeration</strong></td>
            <td>Discovering live hosts, mapping active IP ranges, identifying listening TCP/UDP ports, detecting OS fingerprints and running service versions.</td>
          </tr>
          <tr>
            <td><strong>Phase 3</strong></td>
            <td><strong>Vulnerability Scanning</strong></td>
            <td>Launching automated vulnerability probes against identified services, matching banner signatures and software versions against vulnerability databases.</td>
          </tr>
          <tr>
            <td><strong>Phase 4</strong></td>
            <td><strong>Analysis & Prioritization</strong></td>
            <td>Filtering out false positives, evaluating CVSS scores, cross-referencing threat intelligence (CISA KEV) to determine real-world risk.</td>
          </tr>
          <tr>
            <td><strong>Phase 5</strong></td>
            <td><strong>Remediation & Rescanning</strong></td>
            <td>Deploying vendor patches, applying configuration workarounds, and executing a verification rescan to prove vulnerabilities are resolved.</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 70,
      runningHead: 'CH. 18 • SCANNING TECHNIQUES: CREDENTIALED VS NON-CREDENTIALED',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 18 • Topic 18: VA Tools & Techniques (Part 2)</span>
      <h2>Credentialed vs. Non-Credentialed Scanning Techniques</h2>
    </div>

    <div class="section-block">
      <span class="section-label">2. Active vs. Passive Vulnerability Assessment (Q172)</span>
      <ul class="forensic-list">
        <li><strong>Active Scanning:</strong> The scanner sends crafted packets directly to network endpoints, inspecting responses. High accuracy, but generates network traffic and risks crashing fragile legacy services.</li>
        <li><strong>Passive Scanning:</strong> The tool monitors network traffic silently via a SPAN/mirror port or network TAP, extracting software versions from unencrypted packet headers. Zero disruption risk, but cannot detect inactive vulnerabilities.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">3. Credentialed (Authenticated) vs. Non-Credentialed Scanning (Q173)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Scan Parameter</th>
            <th>Non-Credentialed (Unauthenticated)</th>
            <th>Credentialed (Authenticated / Agent-based) (Q173)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Scan Perspective</strong></td>
            <td>External / Hacker perspective. The scanner sits outside the firewall with zero system logins.</td>
            <td>Internal / Administrator perspective. The scanner logs in via SSH or Windows SMB/WMI (or uses local agents).</td>
          </tr>
          <tr>
            <td><strong>Visibility & Depth</strong></td>
            <td>Inspects open network ports and public service banners. <em>Blind to internal software!</em></td>
            <td>Inspects the entire local system: Installed package registries, kernel patch levels, file permissions, and registry keys.</td>
          </tr>
          <tr>
            <td><strong>Accuracy</strong></td>
            <td>High <strong>False Positive</strong> rate (assumes banner matches mean vulnerable software).</td>
            <td>Near-zero false positives. Verifies whether specific backported patch DLLs are physically installed.</td>
          </tr>
          <tr>
            <td><strong>Intrusiveness</strong></td>
            <td>Can trigger IDS/IPS firewall alerts and IP blocks.</td>
            <td>Zero firewall interference; low network overhead.</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    }
  },

  // Spread 35: Part 2 - Enterprise Tools (Nessus, OpenVAS, Qualys) & KEV (Pages 71–72)
  {
    spreadId: 35,
    left: {
      pageNumber: 71,
      runningHead: 'CH. 18 • ENTERPRISE VA TOOLS: NESSUS & OPENVAS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 18 • Topic 18: VA Tools & Techniques (Part 3)</span>
      <h2>Enterprise Vulnerability Scanners & Architecture</h2>
    </div>

    <div class="section-block">
      <span class="section-label">4. Industry-Standard Vulnerability Assessment Tools (Q174, Q175, Q176)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Nessus (Tenable) (Q174)</span>
            <span class="statute-tag">Global Commercial Standard</span>
          </div>
          <p>Created by Renaud Deraison in 1998 (open source until 2005). Powered by over 170,000 modular vulnerability testing scripts written in <strong>NASL (Nessus Attack Scripting Language)</strong>. Supports compliance auditing (CIS benchmarks) and credentialed scans.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">OpenVAS / Greenbone (Q175)</span>
            <span class="statute-tag">Open-Source Framework</span>
          </div>
          <p>The open-source fork of Nessus established when Nessus went proprietary. Part of the <strong>Greenbone Vulnerability Management (GVM)</strong> architecture. Powered by the open Greenbone Community Feed of Network Vulnerability Tests (NVTs).</p>
        </div>
      </div>

      <div class="statutory-grid" style="margin-top: 10px;">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">Qualys VMDR (Q176)</span>
            <span class="statute-tag">Cloud-Native Platform</span>
          </div>
          <p>Cloud-based vulnerability management and compliance suite utilizing persistent lightweight endpoint agents for continuous real-time inventory and threat detection.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Nikto Web Scanner</span>
            <span class="statute-tag">Web Server Scanner</span>
          </div>
          <p>Open-source command-line tool designed to test web servers for dangerous files, outdated server software, insecure HTTP headers, and CGI vulnerabilities.</p>
        </div>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 72,
      runningHead: 'CH. 18 • VULNERABILITY PRIORITIZATION & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 18 • Topic 18: VA Tools & Techniques (Part 4)</span>
      <h2>Vulnerability Prioritization, CISA KEV & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">5. Prioritization: CISA Known Exploited Vulnerabilities (KEV) (Q177)</span>
      <p>Enterprises discover thousands of vulnerabilities annually; patching all of them simultaneously is impossible. Security teams prioritize remediation using threat intelligence:</p>
      
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">The CISA KEV Catalog (Q177)</span>
          <span class="statute-tag">Authoritative Exploit List</span>
        </div>
        <p>Managed by CISA, the <strong>Known Exploited Vulnerabilities (KEV) Catalog</strong> is the authoritative public list of CVEs that have been <em>actively weaponized in the wild by cybercriminals and APT groups</em>.</p>
        <p>Under Binding Operational Directive (BOD 22-01), federal and critical infrastructure organizations are mandated to remediate KEV vulnerabilities within strict timelines (typically 14 days), regardless of CVSS score!</p>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 18 (Q171–Q180):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q171:</strong> The 5 VA phases are: Scoping, Asset Discovery, Vulnerability Scanning, Analysis & Prioritization, and Remediation.</li>
        <li><strong>Q172:</strong> Passive scanning monitors traffic silently via mirror ports; active scanning sends probes directly.</li>
        <li><strong>Q173:</strong> Credentialed scans provide deep administrative visibility with minimal false positives.</li>
        <li><strong>Q174:</strong> Nessus uses modular attack scripts written in NASL (Nessus Attack Scripting Language).</li>
        <li><strong>Q175:</strong> OpenVAS was created as an open-source community fork when Nessus went proprietary.</li>
        <li><strong>Q177:</strong> The CISA KEV catalog identifies vulnerabilities confirmed to be actively exploited in the wild.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 18</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q171–Q180) on VA Lifecycle, Nessus, OpenVAS & Credentialed Scans.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="17" onclick="window.openMCQForSpread(17)">
          Start Quiz (Q171–Q180) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 19: PENETRATION TESTING METHODS & NETWORK RECONNAISSANCE (NMAP) (Pages 73–76, Spreads 36 & 37, Q181–Q190)
  // =========================================================================
  // Spread 36: Part 1 - PTES Standard & Reconnaissance (Pages 73–74)
  {
    spreadId: 36,
    left: {
      pageNumber: 73,
      runningHead: 'CH. 19 • PENETRATION TESTING METHODOLOGIES: PTES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 19 • Topic 19: Pentest Methods & Nmap (Part 1)</span>
      <h2>Penetration Testing Frameworks: The PTES Standard</h2>
    </div>

    <div class="intro-abstract">
      <p>A successful penetration test is not chaotic, unstructured hacking; it is a rigorous, repeatable scientific methodology. Standardizing testing phases ensures consistency, thoroughness, and legal safety. The most widely adopted technical benchmark in cybersecurity is the <strong>Penetration Testing Execution Standard (PTES)</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The 7 Phases of the PTES Standard (Q181)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Phase</th>
            <th>PTES Phase Name</th>
            <th>Primary Objective & Deliverables (Q181)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1</strong></td>
            <td><strong>Pre-engagement Interactions</strong></td>
            <td>Scoping, NDAs, Rules of Engagement (ROE), legal authorization, and communication channels.</td>
          </tr>
          <tr>
            <td><strong>2</strong></td>
            <td><strong>Intelligence Gathering</strong></td>
            <td>Passive and active reconnaissance to map external assets and infrastructure.</td>
          </tr>
          <tr>
            <td><strong>3</strong></td>
            <td><strong>Threat Modeling</strong></td>
            <td>Identifying organizational assets, business processes, and primary threat adversary profiles.</td>
          </tr>
          <tr>
            <td><strong>4</strong></td>
            <td><strong>Vulnerability Analysis</strong></td>
            <td>Discovering flaws and determining which vulnerabilities can be successfully exploited.</td>
          </tr>
          <tr>
            <td><strong>5</strong></td>
            <td><strong>Exploitation</strong></td>
            <td>Actively penetrating the perimeter to bypass security controls and establish an initial foothold.</td>
          </tr>
          <tr>
            <td><strong>6</strong></td>
            <td><strong>Post-Exploitation</strong></td>
            <td>Determining asset value, privilege escalation, lateral movement, and assessing business impact.</td>
          </tr>
          <tr>
            <td><strong>7</strong></td>
            <td><strong>Reporting</strong></td>
            <td>Delivering the Executive Summary and Comprehensive Technical Remediation Report.</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 74,
      runningHead: 'CH. 19 • RECONNAISSANCE: PASSIVE VS ACTIVE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 19 • Topic 19: Pentest Methods & Nmap (Part 2)</span>
      <h2>Intelligence Gathering: Passive vs. Active Reconnaissance</h2>
    </div>

    <div class="section-block">
      <span class="section-label">2. Passive Reconnaissance (OSINT) (Q182)</span>
      <p><strong>Passive Reconnaissance</strong> gathers intelligence without ever sending a single packet directly to the target organization's servers. The target has zero logs or awareness of the investigation:</p>
      <div class="statute-card card-teal">
        <p>• <strong>OSINT (Open-Source Intelligence):</strong> Scraping public search engines (Google Dorking), corporate LinkedIn pages (discovering internal tech stacks and employee names).<br>
        • <strong>DNS Enumeration:</strong> Querying public DNS records (<code>whois</code>, Certificate Transparency logs, crt.sh) to discover subdomains.<br>
        • <strong>Internet Scanners (Shodan / Censys):</strong> Querying pre-indexed databases of internet-connected IoT devices, exposed SCADA systems, and server banners without contacting the target directly.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. Active Reconnaissance: Direct Probing (Q183)</span>
      <p><strong>Active Reconnaissance</strong> involves transmitting packets directly to the target's IP addresses and firewalls. Highly revealing, but immediately generates security alerts in target firewalls and SIEM sensors:</p>
      <ul class="forensic-list">
        <li><strong>Port Scanning & Service Fingerprinting:</strong> Probing listening TCP/UDP ports with Nmap.</li>
        <li><strong>Web Directory Fuzzing:</strong> Bruteforcing hidden web directories using tools like Gobuster and ffuf.</li>
        <li><strong>Banner Grabbing:</strong> Connecting via netcat or telnet to capture service banners (e.g., <code>SSH-2.0-OpenSSH_7.4p1</code>).</li>
      </ul>
    </div>
      `
    }
  },

  // Spread 37: Part 2 - Nmap Port Scanning Mastery (Pages 75–76)
  {
    spreadId: 37,
    left: {
      pageNumber: 75,
      runningHead: 'CH. 19 • NMAP PORT SCANNING MASTERY',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 19 • Topic 19: Pentest Methods & Nmap (Part 3)</span>
      <h2>Network Port Scanning with Nmap</h2>
    </div>

    <div class="section-block">
      <span class="section-label">4. The Core Nmap Scanning Flags (Q184, Q185, Q186)</span>
      <p>Created by Gordon Lyon (Fyodor) in 1997, <strong>Nmap ("Network Mapper")</strong> is the global standard for network exploration and port scanning:</p>
      
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Nmap Flag</th>
            <th>Scan Type</th>
            <th>TCP Handshake Mechanics & Characteristics (Q184, Q185, Q186)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><code>-sS</code> (Q184)</strong></td>
            <td><strong>SYN Stealth Scan<br>(Half-Open)</strong></td>
            <td><strong>Default & Most Popular:</strong> Sends a TCP SYN packet. If the target responds with <code>SYN-ACK</code> (open), Nmap immediately responds with a <code>RST</code> packet, tearing down the connection before the 3-way handshake completes! Avoids application logging. Requires root/admin privileges.</td>
          </tr>
          <tr>
            <td><strong><code>-sT</code> (Q185)</strong></td>
            <td><strong>TCP Connect Scan</strong></td>
            <td>Completes the full 3-way handshake (<code>SYN &rarr; SYN-ACK &rarr; ACK</code>) using the OS system <code>connect()</code> call. Used when the tester lacks root privileges. Highly visible in server application logs.</td>
          </tr>
          <tr>
            <td><strong><code>-sU</code></strong></td>
            <td><strong>UDP Scan</strong></td>
            <td>Scans UDP ports (DNS 53, SNMP 161). Slower because open UDP ports rarely respond, while closed ports return ICMP Port Unreachable.</td>
          </tr>
          <tr>
            <td><strong><code>-sV</code> (Q186)</strong></td>
            <td><strong>Version Detection</strong></td>
            <td>Interrogates open ports with probing payloads to determine exact application versions (e.g., Apache 2.4.49).</td>
          </tr>
          <tr>
            <td><strong><code>-Pn</code></strong></td>
            <td><strong>Skip Ping Discovery</strong></td>
            <td>Treats all target hosts as online, completely bypassing initial ICMP echo ping probes (vital when targets block ICMP!).</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 76,
      runningHead: 'CH. 19 • NMAP PORT STATES & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 19 • Topic 19: Pentest Methods & Nmap (Part 4)</span>
      <h2>Nmap Port States & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">5. Nmap's 6 Official Port States (Q187, Q188)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Port State</th>
            <th>Target Response Packet (Q187, Q188)</th>
            <th>Forensic Interpretation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Open (Q187)</strong></td>
            <td>Responds with <strong><code>SYN-ACK</code></strong> (TCP) or application response (UDP).</td>
            <td>An application is actively listening and accepting connections on this port.</td>
          </tr>
          <tr>
            <td><strong>Closed (Q187)</strong></td>
            <td>Responds with <strong><code>RST</code> (Reset)</strong> packet.</td>
            <td>The host is online and received the probe, but no application is listening on that port.</td>
          </tr>
          <tr>
            <td><strong>Filtered (Q188)</strong></td>
            <td><strong>Zero response (Timeout)</strong> OR responds with <code>ICMP Type 3 (Destination Unreachable)</code>.</td>
            <td>A firewall, packet filter, or network router is blocking probes from reaching the port.</td>
          </tr>
          <tr>
            <td><strong>Unfiltered</strong></td>
            <td>Responds to ACK scan probes with <code>RST</code>.</td>
            <td>The port is accessible, but Nmap cannot determine if it is open or closed.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 19 (Q181–Q190):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q181:</strong> The PTES standard defines 7 phases from Pre-engagement to Reporting.</li>
        <li><strong>Q182:</strong> Passive reconnaissance gathers OSINT without sending packets to target servers.</li>
        <li><strong>Q183:</strong> Active reconnaissance involves direct port scanning and banner grabbing.</li>
        <li><strong>Q184:</strong> Nmap <code>-sS</code> (SYN Stealth) sends a <code>RST</code> after receiving <code>SYN-ACK</code> to avoid completing the connection.</li>
        <li><strong>Q185:</strong> Nmap <code>-sT</code> executes the complete 3-way TCP handshake using standard OS API calls.</li>
        <li><strong>Q186:</strong> Nmap <code>-sV</code> determines exact application version names and build numbers.</li>
        <li><strong>Q187:</strong> An Open port returns <code>SYN-ACK</code>; a Closed port returns <code>RST</code>.</li>
        <li><strong>Q188:</strong> A Filtered port indicates a firewall dropped the packet or returned ICMP unreachable.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 19</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q181–Q190) on PTES Standard, Reconnaissance & Nmap Flags.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="18" onclick="window.openMCQForSpread(18)">
          Start Quiz (Q181–Q190) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 20: PENETRATION TESTING EXPLOITATION TOOLS & REPORTING (Pages 77–80, Spreads 38 & 39, Q191–Q200)
  // =========================================================================
  // Spread 38: Part 1 - Metasploit Architecture & Meterpreter (Pages 77–78)
  {
    spreadId: 38,
    left: {
      pageNumber: 77,
      runningHead: 'CH. 20 • METASPLOIT FRAMEWORK ARCHITECTURE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 20 • Topic 20: Exploitation Tools & Reporting (Part 1)</span>
      <h2>The Metasploit Framework (MSF) Architecture</h2>
    </div>

    <div class="intro-abstract">
      <p>Created in 2003 by H.D. Moore (and maintained by Rapid7), the <strong>Metasploit Framework</strong> is the premier open-source exploitation platform. It modularizes the exploitation process, allowing ethical hackers and penetration testers to reliably weaponize known vulnerabilities against target endpoints.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Core Metasploit Terminology (Q191, Q192)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Exploit Module (Q191)</span>
            <span class="statute-tag">Breach Delivery</span>
          </div>
          <p>The software code that takes advantage of a specific vulnerability (e.g., buffer overflow, logic bug) to bypass defenses and gain entry into a target computer system.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Payload Module (Q192)</span>
            <span class="statute-tag">Post-Exploit Code</span>
          </div>
          <p>The code that executes on the victim system <em>after</em> the exploit successfully breaches the defense (e.g., spawning an interactive command shell, creating an administrator user, launching Meterpreter).</p>
        </div>
      </div>

      <div class="statutory-grid" style="margin-top: 10px;">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">Auxiliary Module</span>
            <span class="statute-tag">Scanning & Probing</span>
          </div>
          <p>Modules that perform port scanning, banner grabbing, service fuzzing, and denial-of-service verification without delivering a payload.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Encoder & NOP Sleds</span>
            <span class="statute-tag">Evasion Tools</span>
          </div>
          <p><strong>Encoders</strong> (e.g., <code>shikata_ga_nai</code>) obfuscate shellcode to eliminate bad characters (like null bytes <code>\x00</code>) and evade antivirus signatures.</p>
        </div>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 78,
      runningHead: 'CH. 20 • METERPRETER IN-MEMORY PAYLOAD',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 20 • Topic 20: Exploitation Tools & Reporting (Part 2)</span>
      <h2>The Advanced Meterpreter In-Memory Payload</h2>
    </div>

    <div class="section-block">
      <span class="section-label">2. Payloads: Singles vs. Stagers (Q193)</span>
      <ul class="forensic-list">
        <li><strong>Singles (Inline):</strong> Standalone, self-contained payloads executed in one step (e.g., <code>windows/shell_bind_tcp</code>).</li>
        <li><strong>Stagers / Stages (Q193):</strong> A two-stage attack. A tiny <em>Stager</em> payload is injected to fit in small memory buffers. The stager calls back to the attacker's listener to download the full, complex <em>Stage</em> payload (e.g., <code>windows/meterpreter/reverse_tcp</code>).</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">3. Why Meterpreter is the Gold Standard Payload (Q194)</span>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">In-Memory DLL Injection (Q194)</span>
          <span class="statute-tag">Forensic Stealth</span>
        </div>
        <p>• <strong>Resides Purely in RAM:</strong> Meterpreter uses Reflective DLL Injection to execute completely in-memory. It <strong>NEVER writes a file to the victim's hard drive</strong>, making detection by traditional file-based antivirus scanners extremely difficult!<br>
        • <strong>Process Migration:</strong> Automatically migrates its execution thread into legitimate Windows processes (like <code>explorer.exe</code> or <code>svchost.exe</code>). If the compromised process terminates, the session survives.<br>
        • <strong>Feature-Rich Post-Exploitation:</strong> Built-in commands to dump password hashes (<code>hashdump</code>), capture keystrokes (<code>keyscan_start</code>), route network traffic into internal subnets (pivoting), and capture webcams.</p>
      </div>
    </div>
      `
    }
  },

  // Spread 39: Part 2 - Burp Suite, Hashcat, Reporting & Exam Traps (Pages 79–80)
  {
    spreadId: 39,
    left: {
      pageNumber: 79,
      runningHead: 'CH. 20 • BURP SUITE & PASSWORD AUDITING',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 20 • Topic 20: Exploitation Tools & Reporting (Part 3)</span>
      <h2>Burp Suite & GPU-Accelerated Password Auditing</h2>
    </div>

    <div class="section-block">
      <span class="section-label">4. Burp Suite: The Web Pentesting Standard (Q195, Q196)</span>
      <p>Developed by PortSwigger, <strong>Burp Suite</strong> is the industry-standard framework for web application penetration testing, operating as an <strong>Intercepting HTTP Proxy</strong>:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Burp Proxy (Q195)</span>
            <span class="statute-tag">Man-in-the-Middle</span>
          </div>
          <p>Sits between the tester's browser and the target web server. Intercepts HTTP/S requests and responses in real-time, allowing testers to view and modify parameters before forwarding them.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Burp Repeater (Q196)</span>
            <span class="statute-tag">Manual Parameter Testing</span>
          </div>
          <p>Allows testers to manually modify and resend individual HTTP requests repeatedly, analyzing how server responses change with different attack payloads.</p>
        </div>
      </div>

      <div class="statute-card card-amber" style="margin-top: 10px;">
        <div class="statute-header">
          <span class="statute-section">Burp Intruder Attack Modes</span>
          <span class="statute-tag">Automated Fuzzing</span>
        </div>
        <p>• <strong>Sniper:</strong> Single payload list applied to one position at a time.<br>
        • <strong>Battering Ram:</strong> Places the same payload across all positions simultaneously.<br>
        • <strong>Pitchfork:</strong> Multiple payload sets iterated in parallel locks.<br>
        • <strong>Cluster Bomb:</strong> Exhaustive combinatorial testing across multiple parameters.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">5. Password Auditing: Hashcat vs. John the Ripper (Q197)</span>
      <p><strong>Hashcat</strong> is the world's fastest GPU-accelerated password recovery utility, leveraging OpenCL and CUDA to calculate billions of NTLM, MD5, and SHA-256 hashes per second. <strong>John the Ripper (JtR)</strong> is a versatile CPU-focused multi-platform password cracker supporting hundreds of legacy and modern hash formats.</p>
    </div>
      `
    },
    right: {
      pageNumber: 80,
      runningHead: 'CH. 20 • REPORTING, CLEANUP & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 20 • Topic 20: Exploitation Tools & Reporting (Part 4)</span>
      <h2>Deliverables, Post-Engagement Cleanup & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">6. Penetration Testing Reporting Deliverables (Q198, Q199)</span>
      <p>A penetration test is only as valuable as the quality of its final report. The deliverable is divided into two mandatory sections:</p>
      
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Report Section</th>
            <th>Target Audience</th>
            <th>Content & Strategic Purpose (Q198, Q199)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Executive Summary (Q198)</strong></td>
            <td>C-Suite Executives, Board of Directors, CIO / CISO.</td>
            <td>High-level non-technical summary. Focuses on <strong>Business Risk</strong>, financial exposure, regulatory compliance (GDPR, PCI-DSS), and strategic security posture. Avoids technical exploit jargon.</td>
          </tr>
          <tr>
            <td><strong>Technical Findings Report (Q199)</strong></td>
            <td>System Administrators, Developers, Security Engineers.</td>
            <td>Exhaustive technical documentation: Detailed attack narratives, reproducible step-by-step proof-of-concept (POC) commands, CVSS scores, root-cause code analysis, and actionable remediation guidance.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">7. Post-Engagement Cleanup (Q200)</span>
      <p>Before concluding an engagement, testers must restore systems to their original pristine state: Removing all uploaded web shells and backdoor accounts, terminating Meterpreter listener daemons, and securely purging sensitive client data.</p>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 20 (Q191–Q200):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q191:</strong> In Metasploit, an Exploit is the software code that breaches a security flaw.</li>
        <li><strong>Q192:</strong> In Metasploit, a Payload is the code that executes after a successful breach.</li>
        <li><strong>Q193:</strong> Stagers download full stages in multi-stage Metasploit attacks.</li>
        <li><strong>Q194:</strong> Meterpreter resides purely in RAM (in-memory injection), never touching physical disk storage.</li>
        <li><strong>Q195:</strong> Burp Suite operates as an intercepting proxy between browser and server.</li>
        <li><strong>Q196:</strong> Burp Repeater allows manual modification and resending of individual HTTP requests.</li>
        <li><strong>Q197:</strong> Hashcat is the premier GPU-accelerated password recovery tool.</li>
        <li><strong>Q198:</strong> The Executive Summary communicates high-level business risks to C-suite leadership.</li>
        <li><strong>Q199:</strong> The Technical Report provides step-by-step reproducible proof-of-concept steps and fixes.</li>
        <li><strong>Q200:</strong> Post-engagement cleanup requires removing all test artifacts, accounts, and shells.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 20</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q191–Q200) on Metasploit, Meterpreter, Burp Suite & Reporting.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="19" onclick="window.openMCQForSpread(19)">
          Start Quiz (Q191–Q200) &rarr;
        </button>
      </div>
    </div>
      `
    }
  }
];

