const fs = require('fs');
const path = require('path');

// ==========================================
// SPREAD 6 (Pages 11 & 12)
// Topic: Risk Formula, Vulnerability vs Weakness (CVE vs CWE) & CVSS v3.1
// Questions: Q51 to Q60
// ==========================================

const spread6Left = `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 6 • Vulnerability Management & Standards</span>
      <h2>Vulnerability vs. Weakness (CVE vs. CWE), Risk Formulas & Assessment Models</h2>
    </div>
    <p>Effective information security governance requires precise terminology. Conflating threats, weaknesses, and vulnerabilities leads to flawed defensive architectures and failed compliance audits.</p>

    <div class="section-block">
      <span class="section-label">1. The Fundamental Mathematical Risk Equation (Q51)</span>
      <p>In risk management (NIST SP 800-30 / ISO 27005), <strong>Risk</strong> is defined as the probable frequency and probable magnitude of future loss:</p>
      
      <div class="alert-box">
        <strong>The Core Risk Formula (Q51):</strong>
        <p style="text-align: center; font-size: 1.15rem; font-weight: 700; color: #1e3a8a; margin: 8px 0;">
          Risk = Threat &times; Vulnerability &times; Impact
        </p>
        <p style="text-align: center; font-size: 0.88rem; color: #475569;"><em>(Also evaluated mathematically as: Risk = Likelihood &times; Impact)</em></p>
        <ul>
          <li><strong>Threat:</strong> Any circumstance, capability, or adversary event with the potential to cause harm (e.g., a nation-state hacking group, ransomware gang, or earthquake). Threats exist independently of whether you are secure.</li>
          <li><strong>Vulnerability:</strong> A security flaw, software bug, or architectural weakness that provides an opening for a threat to compromise a system.</li>
          <li><strong>Impact:</strong> The total magnitude of damage (financial theft, legal liability, data loss, downtime) resulting from successful exploitation.</li>
        </ul>
        <p class="caption"><em>Exam Rule:</em> If Vulnerability = 0 (or Threat = 0), then <strong>Risk = 0</strong>! You cannot eliminate all threats, but vulnerability management drives risk toward zero by eliminating vulnerabilities.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Vulnerability vs. Weakness: CVE vs. CWE (Q52, Q53)</span>
      <p>Under global cybersecurity standards maintained by MITRE and the US National Vulnerability Database (NVD):</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Weakness (CWE) (Q52)</span>
            <span class="statute-tag">Common Weakness Enumeration</span>
          </div>
          <p><strong>Core Concept:</strong> A conceptual type of software flaw, coding error, or architectural bug in design (the <em>disease</em>).</p>
          <p><strong>Characteristics:</strong> Abstract, language-agnostic catalog of flaws.</p>
          <p><strong>Standard Examples:</strong> <strong>CWE-89</strong> (SQL Injection), <strong>CWE-79</strong> (Cross-Site Scripting), <strong>CWE-787</strong> (Out-of-bounds Write).</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Vulnerability (CVE) (Q52, Q53)</span>
            <span class="statute-tag">Common Vulnerabilities & Exposures</span>
          </div>
          <p><strong>Core Concept:</strong> A specific, instantiated occurrence of a weakness inside a concrete, released software product or binary version (the <em>patient diagnosed with the disease</em>).</p>
          <p><strong>Naming Standard (Q53):</strong> Strictly follows the format <code>CVE-YYYY-NNNNN</code> (e.g., <strong>CVE-2021-44228</strong> for Log4Shell, <strong>CVE-2017-0144</strong> for EternalBlue).</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. Vulnerability Assessment (VA) vs. Penetration Testing (PT) (Q58, Q59, Q60)</span>
      <p>Organizations deploy two distinct testing models to evaluate security posture:</p>
      
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr>
              <th>Evaluation Parameter</th>
              <th>Vulnerability Assessment (VA) (Q58)</th>
              <th>Penetration Testing (PT) (Q59)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Primary Objective</strong></td>
              <td>Identify, catalog, and rank all known flaws across network assets.</td>
              <td>Actively exploit discovered flaws to prove business impact and bypass defenses.</td>
            </tr>
            <tr>
              <td><strong>Tooling & Scope</strong></td>
              <td>Automated scanners (Nessus, OpenVAS, Qualys) covering wide breadth.</td>
              <td>Manual human exploitation (Burp Suite, Metasploit, custom payloads).</td>
            </tr>
            <tr>
              <td><strong>Active Exploitation?</strong></td>
              <td><strong>NO active exploitation</strong>; verifies version signatures and banner responses.</td>
              <td><strong>YES</strong>; launches exploits, elevates privileges, and pivots across subnets.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><strong>Black Box Testing (Q60):</strong> An engagement model where the tester has <strong>zero prior knowledge</strong> of internal network topology, source code, or credentials, perfectly simulating an external hacker!</p>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q51–Q53, Q58–Q60):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Risk Formula (Q51):</strong> <strong>Risk = Threat &times; Vulnerability &times; Impact</strong> (or Likelihood &times; Impact).</li>
        <li><strong>Vulnerability vs. Weakness (Q52):</strong> A weakness (<strong>CWE</strong>) is an architectural flaw category; a vulnerability (<strong>CVE</strong>) is an instantiated flaw in a specific software version.</li>
        <li><strong>CVE Naming Format (Q53):</strong> Standardized by MITRE as <strong>CVE-YYYY-NNNNN</strong> (e.g., CVE-2021-44228).</li>
        <li><strong>Vulnerability Assessment (VA) (Q58):</strong> Catalogs and ranks vulnerabilities using automated tools <strong>WITHOUT actively exploiting them</strong>.</li>
        <li><strong>Penetration Testing (PT) (Q59):</strong> Actively exploits flaws to prove real impact, simulate attacks, and bypass security controls.</li>
        <li><strong>Black Box Testing (Q60):</strong> Provides the tester with <strong>zero prior knowledge</strong> of internal networks or credentials.</li>
      </ul>
    </div>`;

const spread6Right = `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 6 • Vulnerability Scoring Standards</span>
      <h2>Common Vulnerability Scoring System (CVSS v3.1) Architecture & Metrics</h2>
    </div>
    <p>Maintained by the Forum of Incident Response and Security Teams (FIRST), <strong>CVSS v3.1</strong> provides an open framework for standardizing the severity rating of software vulnerabilities on a decimal scale from <strong>0.0 to 10.0</strong>.</p>

    <div class="section-block">
      <span class="section-label">1. CVSS v3.1 Base Metric Group Architecture (Q55, Q56, Q57)</span>
      <p>The <strong>Base Score</strong> reflects intrinsic qualities of a vulnerability that do not change over time or across different user environments:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Exploitability Metrics (Q55, Q56)</span>
            <span class="statute-tag">Ease of Exploitation</span>
          </div>
          <ul style="margin: 4px 0 0 16px; padding: 0;">
            <li><strong>Attack Vector (AV) (Q55):</strong> The context by which exploitation is possible: <em>Network (N)</em> [remote Internet, highest severity], <em>Adjacent (A)</em> [local Wi-Fi/subnet], <em>Local (L)</em> [local shell], <em>Physical (P)</em> [physical touch].</li>
            <li><strong>Attack Complexity (AC):</strong> Conditions beyond attacker control: <em>Low (L)</em> or <em>High (H)</em>.</li>
            <li><strong>Privileges Required (PR):</strong> Level of access needed before exploit: <em>None (N)</em>, <em>Low (L)</em>, or <em>High (H)</em>.</li>
            <li><strong>User Interaction (UI) (Q56):</strong> Whether a human victim must participate: <em>None (N)</em> or <em>Required (R)</em> (e.g. clicking a phishing link).</li>
          </ul>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Scope Metric (S) (Q57)</span>
            <span class="statute-tag">Security Boundary</span>
          </div>
          <p><strong>What Scope Evaluates (Q57):</strong> Evaluates whether a vulnerability in one software component impacts resources governed by a <em>different security authority</em>.</p>
          <ul style="margin: 4px 0 0 16px; padding: 0;">
            <li><strong>Scope Unchanged (U):</strong> Impact is confined within the vulnerable software.</li>
            <li><strong>Scope Changed (C):</strong> Attacker breaks out of the vulnerable boundary to compromise external environments (e.g., <strong>Virtual Machine Escape</strong> from guest to host hypervisor, or Cross-Site Scripting executing in user browser session).</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. CVSS v3.1 Qualitative Severity Ratings & SLAs (Q54)</span>
      <p>CVSS maps numeric scores (0.0 to 10.0) into standardized industry severity ratings:</p>
      
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr>
              <th>CVSS v3.1 Score</th>
              <th>Qualitative Severity (Q54)</th>
              <th>Typical Vector Characteristics</th>
              <th>Enterprise Remediation SLA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>0.0</strong></td>
              <td><strong>None</strong></td>
              <td>No vulnerability present</td>
              <td>Informational</td>
            </tr>
            <tr>
              <td><strong>0.1 – 3.9</strong></td>
              <td><strong>Low</strong></td>
              <td>Local access, high privileges required</td>
              <td>Next routine maintenance cycle</td>
            </tr>
            <tr>
              <td><strong>4.0 – 6.9</strong></td>
              <td><strong>Medium</strong></td>
              <td>User interaction required, moderate impact</td>
              <td>30 to 60 days</td>
            </tr>
            <tr>
              <td><strong>7.0 – 8.9</strong></td>
              <td><strong>High</strong></td>
              <td>Remote network vector, low privileges needed</td>
              <td>7 to 14 days</td>
            </tr>
            <tr>
              <td><strong>9.0 – 10.0</strong></td>
              <td><strong>Critical (Q54)</strong></td>
              <td>Remote Unauthenticated RCE (AV:N/AC:L/PR:N/UI:N)</td>
              <td><strong>Immediate emergency patch (24–48 hours)</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="caption"><em>Exam Golden Rule:</em> Any vulnerability with a CVSS score of <strong>9.0 to 10.0</strong> is classified as <strong>Critical</strong> (e.g., Log4Shell had a perfect CVSS 10.0!).</p>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q54–Q57):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Critical Severity Range (Q54):</strong> CVSS v3.1 scores from <strong>9.0 to 10.0</strong> represent <strong>Critical</strong> severity.</li>
        <li><strong>Attack Vector Metric (AV) (Q55):</strong> Evaluates exploit context: <strong>Network (AV:N)</strong>, Adjacent (AV:A), Local (AV:L), Physical (AV:P).</li>
        <li><strong>User Interaction (UI) (Q56):</strong> <strong>UI:R</strong> signifies that user interaction (e.g., clicking a link) is <strong>Required</strong> for successful exploitation.</li>
        <li><strong>Scope Metric (S) (Q57):</strong> <strong>Scope Changed (S:C)</strong> indicates the vulnerability affects resources managed by a different authority (e.g., hypervisor escapes, XSS).</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 6 (Q51–Q60)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 high-yield questions on Risk Formula, CVE vs CWE, CVSS v3.1 Metrics & VA vs PT.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(5)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q51–Q60) &rarr;
      </button>
    </div>`;

// ==========================================
// SPREAD 7 (Pages 13 & 14)
// Topic: VAPT Frameworks, Testing Models, Nmap Scanning Mastery & OWASP Top 10
// Questions: Q61 to Q70
// ==========================================

const spread7Left = `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 7 • Penetration Testing Methodologies</span>
      <h2>Penetration Testing Models (Black/White/Grey Box) & The PTES 7-Phase Standard</h2>
    </div>
    <p>Penetration testing is an authorized, simulated cyberattack against an organization's computer systems, networks, and applications to evaluate security. To be legally and technically sound, testing must follow accredited methodologies.</p>

    <div class="section-block">
      <span class="section-label">1. The 3 Penetration Testing Engagement Models (Q60, Q61)</span>
      <p>The level of information provided to the testing team dictates the engagement model:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Black Box Testing (Q60)</span>
            <span class="statute-tag">Zero Knowledge</span>
          </div>
          <p><strong>Information Provided:</strong> Absolutely zero prior knowledge; tester is given only the company name or root domain.</p>
          <p><strong>Simulation:</strong> Accurately simulates an external opportunistic hacker or adversary.</p>
          <p><strong>Disadvantage:</strong> High reconnaissance overhead; may miss deeply hidden internal vulnerabilities.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">White Box Testing (Q61)</span>
            <span class="statute-tag">Full Knowledge</span>
          </div>
          <p><strong>Information Provided:</strong> Complete access to application source code, network diagrams, system configurations, and administrative accounts.</p>
          <p><strong>Simulation:</strong> Simulates a malicious insider, disgruntled developer, or advanced persistent threat (APT) with deep internal access.</p>
          <p><strong>Advantage:</strong> Maximum thoroughness; enables code auditing and architecture review.</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">Grey Box Testing</span>
            <span class="statute-tag">Partial Knowledge</span>
          </div>
          <p><strong>Information Provided:</strong> Partial internal access (e.g., standard employee credentials, network architecture map).</p>
          <p><strong>Simulation:</strong> Simulates an attacker who has compromised a low-privilege employee workstation and seeks to elevate privileges.</p>
          <p><strong>Advantage:</strong> Balances speed, cost, and depth of coverage.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Penetration Testing Execution Standard (PTES) 7 Phases (Q62)</span>
      <p>Standardized by security leaders, <strong>PTES</strong> structures every penetration test into <strong>7 mandatory sequential phases</strong>:</p>
      <ol style="margin: 6px 0 0 18px; padding: 0; line-height: 1.6;">
        <li><strong>1. Pre-engagement Interactions:</strong> Define scope, Rules of Engagement (ROE), legal authorization letters, and emergency contact procedures.</li>
        <li><strong>2. Intelligence Gathering (Reconnaissance):</strong> OSINT, DNS interrogation, social media scraping, and footprinting.</li>
        <li><strong>3. Threat Modeling:</strong> Identify high-value business assets and map realistic attacker attack vectors.</li>
        <li><strong>4. Vulnerability Analysis:</strong> Discover security flaws, misconfigurations, and vulnerable service versions.</li>
        <li><strong>5. Exploitation:</strong> Actively exploit vulnerabilities to bypass security defenses and establish initial access.</li>
        <li><strong>6. Post-Exploitation:</strong> Evaluate the true business impact: privilege escalation, lateral movement, data exfiltration, and persistence.</li>
        <li><strong>7. Reporting:</strong> Deliver executive summaries, technical risk analysis, and actionable remediation roadmaps.</li>
      </ol>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q61–Q62):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>White Box Testing (Q61):</strong> Engagement model providing complete access to source code, architecture, and admin credentials.</li>
        <li><strong>PTES Standard (Q62):</strong> Penetration Testing Execution Standard structures engagements into <strong>7 phases</strong>: Pre-engagement, Intelligence Gathering, Threat Modeling, Vulnerability Analysis, Exploitation, Post Exploitation, and Reporting.</li>
      </ul>
    </div>`;

const spread7Right = `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 7 • Port Scanning & Web Flaws</span>
      <h2>Network Scanning with Nmap (Flags & Port States) & The OWASP Top 10</h2>
    </div>
    <p>Network port scanning is the foundation of active reconnaissance. Gordon Lyon's <strong>Nmap (Network Mapper)</strong> is the global standard tool for network inventory, host discovery, and vulnerability enumeration.</p>

    <div class="section-block">
      <span class="section-label">1. Core Nmap Scanning Command Flags (Q63, Q64, Q65, Q66, Q67)</span>
      <p>Every penetration tester and cyber forensic investigator must master Nmap's essential CLI switches:</p>
      
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr>
              <th>Nmap Flag</th>
              <th>Scan Name & Mechanics</th>
              <th>Forensic & Security Implication</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>-sS</code> (Q63)</td>
              <td><strong>TCP SYN Stealth Scan</strong> (Half-Open Scan)</td>
              <td>Sends SYN packet. If SYN/ACK is received, responds with <strong>RST</strong> (never completes 3-way handshake). Does NOT get logged by basic OS connection logs! <em>(Default root scan)</em></td>
            </tr>
            <tr>
              <td><code>-sT</code> (Q64)</td>
              <td><strong>TCP Connect Scan</strong></td>
              <td>Completes the full 3-way handshake (SYN &rarr; SYN/ACK &rarr; ACK) using OS socket API. Used when the user lacks raw socket privileges. Easily detected in server access logs!</td>
            </tr>
            <tr>
              <td><code>-sV</code> (Q65)</td>
              <td><strong>Service Version Detection</strong></td>
              <td>Probes open ports to interrogate banners and determine the exact software application and version (e.g., <code>Apache 2.4.49</code>).</td>
            </tr>
            <tr>
              <td><code>-sC</code> (Q66)</td>
              <td><strong>Default Script Scan</strong> (<code>--script=default</code>)</td>
              <td>Executes safe, standard vulnerability enumeration scripts from the <strong>Nmap Scripting Engine (NSE)</strong>.</td>
            </tr>
            <tr>
              <td><code>-Pn</code> (Q67)</td>
              <td><strong>Disable Ping Host Discovery</strong></td>
              <td>Treats all target hosts as online, forcing Nmap to scan ports even if the host drops ICMP ping requests!</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Nmap Port States: Open, Closed & Filtered (Q68)</span>
      <p>Nmap categorizes scanned ports into distinct states based on packet responses:</p>
      <ul>
        <li><strong>Open:</strong> An application is actively accepting TCP connections or UDP packets (received SYN/ACK).</li>
        <li><strong>Closed:</strong> The port is accessible (receives an RST packet), but no application is listening.</li>
        <li><strong>Filtered (Q68):</strong> Nmap cannot determine if the port is open or closed because <strong>a firewall, packet filter, or router ACL is dropping probes</strong> without returning any response!</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">3. Web Application Security & OWASP Top 10 (Q69, Q70)</span>
      <p>Web applications represent the largest external attack surface in modern enterprises:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">The OWASP Project (Q69)</span>
            <span class="statute-tag">Industry Consensus</span>
          </div>
          <p>The <strong>Open Worldwide Application Security Project (OWASP)</strong> is a global non-profit that periodically publishes the consensus list of the <strong>ten most critical web application security risks</strong>.</p>
        </div>

        <div class="statute-card card-penalty">
          <div class="statute-header">
            <span class="statute-section">SQL Injection (SQLi) (Q70)</span>
            <span class="statute-tag badge-penalty">CWE-89</span>
          </div>
          <p>Occurs when <strong>untrusted user input is concatenated directly into a database query string</strong> without validation or sanitization.</p>
          <p>Allows attackers to bypass authentication (<code>' OR '1'='1</code>), dump databases, or execute remote commands via <code>xp_cmdshell</code>.</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q63–Q70):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>-sS (Q63):</strong> Nmap <strong>TCP SYN Stealth Scan</strong> (half-open scan; sends RST before completing handshake).</li>
        <li><strong>-sT (Q64):</strong> Nmap <strong>TCP Connect Scan</strong> (completes full 3-way handshake using OS sockets).</li>
        <li><strong>-sV (Q65):</strong> Determines service and version information on open ports.</li>
        <li><strong>-sC (Q66):</strong> Executes standard/default <strong>Nmap Scripting Engine (NSE)</strong> scripts.</li>
        <li><strong>-Pn (Q67):</strong> Disables ICMP ping host discovery; scans target even if it doesn't respond to ping.</li>
        <li><strong>Filtered Port State (Q68):</strong> Signifies a <strong>firewall, packet filter, or router ACL is dropping probes</strong>.</li>
        <li><strong>OWASP (Q69):</strong> Open Worldwide Application Security Project publishes the Top 10 critical web security risks.</li>
        <li><strong>SQL Injection (Q70):</strong> Flaw (CWE-89) occurring when untrusted input is concatenated directly into SQL queries.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 7 (Q61–Q70)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 high-yield questions on White Box Testing, PTES Standards, Nmap Flags (-sS, -sT, -sV, -Pn) & SQLi.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(6)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q61–Q70) &rarr;
      </button>
    </div>`;

// Update book5_data.js
const bookPath = path.resolve(__dirname, '../book5_data.js');
global.window = {};
require(bookPath);

// Spread index 5 is Spread 6 (Pages 11 and 12)
window.book5Data.spreads[5].left.content = spread6Left;
window.book5Data.spreads[5].right.content = spread6Right;
window.book5Data.spreads[5].left.runningHead = "CH. 6 • RISK FORMULA & CVE VS CWE";
window.book5Data.spreads[5].right.runningHead = "CH. 6 • CVSS V3.1 BASE METRICS & RATINGS";

// Spread index 6 is Spread 7 (Pages 13 and 14)
window.book5Data.spreads[6].left.content = spread7Left;
window.book5Data.spreads[6].right.content = spread7Right;
window.book5Data.spreads[6].left.runningHead = "CH. 7 • BLACK/WHITE/GREY BOX & PTES";
window.book5Data.spreads[6].right.runningHead = "CH. 7 • NMAP SCANNING & OWASP TOP 10";

const updatedJs = '// Book 5 Data: Information Security, Applied Cryptography & VAPT\nwindow.book5Data = ' + JSON.stringify(window.book5Data, null, 2) + ';\n';
fs.writeFileSync(bookPath, updatedJs, 'utf8');
console.log('Successfully updated book5_data.js spreads 6 & 7 (Pages 11 to 14)!');

