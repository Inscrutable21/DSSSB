// Part 1: Topics 1–5 (Spreads 0–9, Pages 1–20)
// 4 Pages per Topic: Total 10 Spreads = 20 Pages

module.exports = [
  // =========================================================================
  // TOPIC 1: CIA TRIAD & CORE INFOSEC PRINCIPLES (Pages 1–4, Spreads 0 & 1, Q1–Q10)
  // =========================================================================
  // Spread 0: Part 1 - Foundations & Architectural Pillars (Pages 1–2)
  {
    spreadId: 0,
    left: {
      pageNumber: 1,
      runningHead: 'CH. 1 • CIA TRIAD: CONFIDENTIALITY & INTEGRITY',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 1 • Topic 1: CIA Triad & Core Principles (Part 1)</span>
      <h2>Information Security Foundations & The CIA Triad</h2>
    </div>

    <div class="intro-abstract">
      <p><strong>Information Security (InfoSec)</strong> is the systematic practice of protecting data, networks, and computing infrastructure from unauthorized access, disruption, tampering, or destruction. Whether dealing with digital evidence in a forensic investigation, banking transactions, or government communications, every security decision is anchored in the foundational <strong>Confidentiality, Integrity, and Availability (CIA) Triad</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Why Information Security Exists: The Cost of Digital Insecurity</span>
      <p>In modern digital ecosystems, data is the most valuable and targeted asset. Without security controls, adversaries exploit vulnerabilities to commit financial fraud, exfiltrate sovereign secrets, plant ransomware, or falsify forensic records. A security model must systematically address three fundamental risks:</p>
      <ul class="forensic-list">
        <li><strong>Eavesdropping & Interception:</strong> Unauthorized parties intercepting private messages (Violation of Confidentiality).</li>
        <li><strong>Falsification & Tampering:</strong> Unauthorized modification of financial ledgers or digital evidence (Violation of Integrity).</li>
        <li><strong>Denial & Outages:</strong> Preventing legitimate authorized users from accessing critical health, banking, or law enforcement services (Violation of Availability).</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. Pillar 1: Confidentiality — Privacy & Secrecy (Q1)</span>
      <p><strong>Confidentiality</strong> guarantees that sensitive information is inaccessible and undisclosed to unauthorized individuals, entities, or automated processes.</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Core Definition (Q1)</span>
            <span class="statute-tag">Secrecy</span>
          </div>
          <p>Preserving authorized restrictions on information access and disclosure, including means for protecting personal privacy and proprietary data.</p>
          <p><strong>Real-World Analogy:</strong> A sealed, wax-stamped envelope carried by an armed courier that only the named recipient can unseal.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Enforcement Mechanisms</span>
            <span class="statute-tag">Defense Tools</span>
          </div>
          <p>• <strong>Encryption:</strong> Symmetric (AES-256) and Asymmetric (RSA-3072) algorithms rendering data unreadable without the secret key.<br>
          • <strong>Access Control Lists (ACLs):</strong> Restricting file system and network permissions.<br>
          • <strong>Data Masking & Tokenization:</strong> Masking credit card PANs and PII.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. Pillar 2: Integrity — Accuracy & Tamper Prevention (Q2)</span>
      <p><strong>Integrity</strong> guarantees that data has not been modified, altered, deleted, or fabricated in an unauthorized or undetected manner throughout its entire lifecycle (at rest, in transit, and in use).</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Integrity in Digital Forensics (Q2)</span>
          <span class="statute-tag">Evidence Chain</span>
        </div>
        <p>In digital forensics, integrity is sacred. If an investigator modifies a single bit of a seized hard drive, the evidence is contaminated and inadmissible in court under Indian Evidence Act / BSA. Integrity is established mathematically using cryptographic hashes (SHA-256) and Digital Signatures.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 2,
      runningHead: 'CH. 1 • CIA TRIAD: AVAILABILITY & TRADEOFFS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 1 • Topic 1: CIA Triad & Core Principles (Part 2)</span>
      <h2>Availability, Security Tradeoffs & Real-World Breaches</h2>
    </div>

    <div class="section-block">
      <span class="section-label">4. Pillar 3: Availability — Timely & Reliable Access (Q3)</span>
      <p><strong>Availability</strong> guarantees that authorized systems, communication networks, and data are reliably accessible to authorized users exactly when required for legitimate operations.</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Threats to Availability</span>
            <span class="statute-tag">Denial of Service</span>
          </div>
          <p>• <strong>Distributed Denial of Service (DDoS):</strong> Botnets flooding networks with SYN floods or DNS amplification.<br>
          • <strong>Ransomware:</strong> Locking critical systems (e.g., hospital EHRs) with extortion encryption.<br>
          • <strong>Physical & Hardware Failure:</strong> Power grid failures, server disk crashes, and severed undersea cables.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Architectural Countermeasures</span>
            <span class="statute-tag">High Availability</span>
          </div>
          <p>• <strong>Redundancy & Failover:</strong> RAID disk arrays, hot standby servers, multi-cloud clusters.<br>
          • <strong>Disaster Recovery (DR):</strong> Off-site immutable backups (3-2-1 backup rule).<br>
          • <strong>DDoS Mitigation:</strong> Anycast routing, Cloudflare/Akamai scrubbing centers.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">5. The Security Trilemma: The Balancing Act</span>
      <p>Security is never absolute; it involves unavoidable engineering tradeoffs. Maximizing one pillar often exerts tension on the others:</p>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Security Configuration</th>
            <th>Benefit Achieved</th>
            <th>Tradeoff / Friction Introduced</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Aggressive Encryption & MFA</strong></td>
            <td>Maximizes Confidentiality & Integrity</td>
            <td>Adds computational latency; potential lockout reduces Availability.</td>
          </tr>
          <tr>
            <td><strong>Unrestricted Public Mirroring</strong></td>
            <td>Maximizes Availability (instant download)</td>
            <td>Zero Confidentiality; anyone can view or intercept data.</td>
          </tr>
          <tr>
            <td><strong>Strict Tamper Locks / Read-Only</strong></td>
            <td>Maximizes Integrity (no modifications)</td>
            <td>Prevents real-time dynamic database updates.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">6. Real-World Breach Case Studies</span>
      <ul class="forensic-list">
        <li><strong>Equifax Breach (2017) — Confidentiality Catastrophe:</strong> Failure to patch a known Apache Struts vulnerability (CVE-2017-5638) allowed attackers to exfiltrate private financial data of 147 million consumers.</li>
        <li><strong>Stuxnet (2010) — Integrity Sabotage:</strong> Altered PLC ladder logic code governing nuclear centrifuge speeds while reporting false "normal" telemetry to operators.</li>
        <li><strong>Dyn DNS DDoS (2016) — Availability Outage:</strong> Mirai IoT botnet overwhelmed Dyn's DNS infrastructure with 1.2 Tbps of traffic, taking down Twitter, Netflix, and GitHub.</li>
      </ul>
    </div>
      `
    }
  },

  // Spread 1: Part 2 - Defense-in-Depth, Kerckhoffs, Risk & Exam Traps (Pages 3–4)
  {
    spreadId: 1,
    left: {
      pageNumber: 3,
      runningHead: 'CH. 1 • DEFENSE-IN-DEPTH & KERCKHOFFS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 1 • Topic 1: CIA Triad & Core Principles (Part 3)</span>
      <h2>Defense-in-Depth, Kerckhoffs's Principle & Zero Trust</h2>
    </div>

    <div class="section-block">
      <span class="section-label">7. Defense-in-Depth (Layered Defense Architecture) (Q5)</span>
      <p><strong>Defense-in-Depth</strong> is the strategic deployment of multiple, diverse, redundant layers of security controls throughout an IT infrastructure. The core philosophy is simple: <em>never rely on a single defensive perimeter</em>.</p>
      <p>If an adversary breaches the outer perimeter (e.g., firewall bypass), subsequent internal defensive layers (e.g., endpoint detection, network micro-segmentation, database encryption, and behavioral analytics) delay, detect, and neutralize the intruder before sensitive assets can be compromised.</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Concentric Rings of Defense</span>
            <span class="statute-tag">Multi-Layer</span>
          </div>
          <p>1. <strong>Perimeter:</strong> Next-Gen Firewalls, WAF, DDoS scrubbing.<br>
          2. <strong>Network:</strong> VLANs, Zero Trust Network Access (ZTNA).<br>
          3. <strong>Host/Endpoint:</strong> EDR, Host-based firewalls, OS hardening.<br>
          4. <strong>Application:</strong> Input sanitization, WAF rules, secure code.<br>
          5. <strong>Data:</strong> AES-256 encryption at rest, tokenization, DLP.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Zero Trust Architecture (NIST SP 800-207)</span>
            <span class="statute-tag">Modern Tenet</span>
          </div>
          <p>Zero Trust replaces the outdated "castle-and-moat" perimeter model with the golden rule: <strong>"Never trust, always verify."</strong> Every request, whether originating inside or outside the corporate intranet, must be explicitly authenticated, authorized, and encrypted before access is granted.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">8. Kerckhoffs's Principle vs. Security through Obscurity (Q8, Q9)</span>
      <p>Formulated in 1883 by Dutch cryptographer Auguste Kerckhoffs (and restated by Claude Shannon as <em>"The enemy knows the system"</em>):</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Kerckhoffs's Golden Law (Q8, Q9)</span>
          <span class="statute-tag">Universal Axiom</span>
        </div>
        <p><strong>A cryptographic system must remain secure even if everything about the system, except the secret key, is public knowledge!</strong></p>
        <p>• <strong>Open Design:</strong> Public algorithms (AES, RSA, SHA-256) withstand decades of rigorous global peer review by top cryptanalysts.<br>
        • <strong>Security through Obscurity:</strong> Relying on keeping the algorithm, source code, or hardware design secret. This approach is fatally flawed; reverse engineering, disassembly, and insider leaks inevitably reveal the design, causing catastrophic total system collapse.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 4,
      runningHead: 'CH. 1 • CONTROLS, RISK EQUATION & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 1 • Topic 1: CIA Triad & Core Principles (Part 4)</span>
      <h2>Security Controls Matrix, Risk Management & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">9. Security Controls Functional Classification (Q6)</span>
      <p>Security controls are countermeasures deployed to eliminate vulnerabilities, deter threats, or minimize damage. They are classified into three operational categories:</p>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Control Type</th>
            <th>Primary Objective</th>
            <th>Practical Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Preventive Controls</strong></td>
            <td>Stop security incidents from occurring before they happen.</td>
            <td>Firewalls, biometric door locks, input parameter validation, disk encryption, employee security awareness training.</td>
          </tr>
          <tr>
            <td><strong>Detective Controls</strong></td>
            <td>Identify and alert on active security violations or intrusions.</td>
            <td>Intrusion Detection Systems (IDS), SIEM log monitors, CCTV cameras, file integrity monitoring (FIM), forensic audits.</td>
          </tr>
          <tr>
            <td><strong>Corrective Controls</strong></td>
            <td>Restore systems and reverse damage after an incident occurs.</td>
            <td>Automated snapshot rollback, incident response playbooks, restoring from immutable tape backups, applying patches.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">10. The Information Security Risk Equation (Q7)</span>
      <p>In risk governance (ISO 27005, NIST SP 800-30), cybersecurity risk is mathematically modeled as:</p>
      <div class="statute-card card-teal" style="text-align: center;">
        <span style="font-size: 1.05rem; font-weight: 700; color: var(--navy-primary);">
          Risk = Threat &times; Vulnerability &times; Impact
        </span>
        <p style="margin-top: 6px; font-size: 0.82rem; text-align: left;">
          • <strong>Threat:</strong> A potential cause of an unwanted incident (e.g., sophisticated state-sponsored APT, malicious insider).<br>
          • <strong>Vulnerability:</strong> A flaw or weakness in software, hardware, or operational process (e.g., unpatched buffer overflow).<br>
          • <strong>Impact:</strong> The magnitude of financial, operational, or legal harm suffered if the threat exploits the vulnerability.
        </p>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 1 (Q1–Q10):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q1:</strong> Confidentiality guarantees access is restricted solely to authorized entities.</li>
        <li><strong>Q2:</strong> Integrity guarantees data is accurate, complete, and uncorrupted by unauthorized modification.</li>
        <li><strong>Q3:</strong> Availability guarantees timely and reliable operational access to authorized users.</li>
        <li><strong>Q5:</strong> Defense-in-depth deploys multiple concentric layers of security so no single point of failure exists.</li>
        <li><strong>Q6:</strong> Preventive controls block attacks (firewalls), Detective identify them (IDS/logs), Corrective repair them (backups).</li>
        <li><strong>Q7:</strong> Risk is strictly the product of Threat, Vulnerability, and Impact.</li>
        <li><strong>Q8, Q9:</strong> Kerckhoffs's Principle dictates security must reside solely in the secrecy of the key, never the algorithm.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 1</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q1–Q10) on CIA Triad, Defense-in-Depth & Kerckhoffs.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="0" onclick="window.openMCQForSpread(0)">
          Start Quiz (Q1–Q10) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 2: AUTHENTICATION, AUTHORIZATION & NON-REPUDIATION (Pages 5–8, Spreads 2 & 3, Q11–Q20)
  // =========================================================================
  // Spread 2: Part 1 - The AAA Architecture & Multi-Factor Authentication (Pages 5–6)
  {
    spreadId: 2,
    left: {
      pageNumber: 5,
      runningHead: 'CH. 2 • THE AAA ARCHITECTURE & IDENTIFICATION',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 2 • Topic 2: AAA & Non-Repudiation (Part 1)</span>
      <h2>The AAA Security Framework & Identity Foundations</h2>
    </div>

    <div class="intro-abstract">
      <p>Before a subject (user, program, or hardware device) can interact with an object (file, server, or API), a structured identity management lifecycle must take place. The enterprise security benchmark governing this lifecycle is the <strong>AAA Security Architecture</strong>: <strong>Authentication, Authorization, and Accounting</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Identification vs. Authentication: The Critical Difference (Q11)</span>
      <p>Candidates frequently confuse identification with authentication. In digital security and forensics, they represent two strictly sequential steps:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Step 1: Identification</span>
            <span class="statute-tag">Claiming Identity</span>
          </div>
          <p>The subject makes an unverified claim of who they are to the system. No proof is offered yet.</p>
          <p><strong>Examples:</strong> Typing a username, entering an employee ID, scanning an unverified RFID badge, or presenting an email address.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Step 2: Authentication (Q11)</span>
            <span class="statute-tag">Proving Identity</span>
          </div>
          <p>The process of mathematically or cryptographically verifying the identity claim through valid authentication factors.</p>
          <p><strong>Examples:</strong> Submitting a valid password, presenting a cryptographic private key signature, or scanning a biometric fingerprint.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The AAA Framework Operational Breakdown (Q11, Q19)</span>
      <ul class="forensic-list">
        <li><strong>Authentication (AuthN):</strong> <em>"Who are you, and can you prove it?"</em> Confirms the true identity of the requester.</li>
        <li><strong>Authorization (AuthZ):</strong> <em>"What specific actions are you permitted to perform?"</em> Determines whether an authenticated identity has rights to read, write, execute, or delete a resource.</li>
        <li><strong>Accounting / Auditing (AuthA):</strong> <em>"What did you do, and when did you do it?"</em> The immutable tracking and logging of user actions (login time, IP address, files accessed, privilege escalations) for non-repudiation and forensic investigations.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">3. Password Vulnerabilities & Modern Storage</span>
      <p>Passwords remain the weakest link in cybersecurity. Storing passwords in plaintext or using raw MD5/SHA-1 hashes leads to devastating database dumps. Passwords must always be securely salted and hashed using adaptive, memory-hard algorithms (Argon2id, bcrypt, PBKDF2).</p>
    </div>
      `
    },
    right: {
      pageNumber: 6,
      runningHead: 'CH. 2 • MULTI-FACTOR AUTHENTICATION (MFA)',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 2 • Topic 2: AAA & Non-Repudiation (Part 2)</span>
      <h2>Multi-Factor Authentication (MFA) Paradigms</h2>
    </div>

    <div class="section-block">
      <span class="section-label">4. The Three Classic Authentication Factors (Q12)</span>
      <p>True Multi-Factor Authentication (MFA) requires presenting credentials from <strong>two or more fundamentally distinct categories</strong>. Presenting two credentials from the <em>same</em> category (e.g., password + PIN) is merely Two-Step Verification, NOT true multi-factor authentication!</p>
      
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Authentication Factor Category</th>
            <th>Security Nature</th>
            <th>Real-World Implementations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Something You Know (Q12)</strong><br><em>(Knowledge Factor)</em></td>
            <td>Secret information stored in the human mind. Most susceptible to phishing, brute-force, and shoulder surfing.</td>
            <td>Passwords, alphanumeric passphrases, PINs, mother's maiden name security questions.</td>
          </tr>
          <tr>
            <td><strong>2. Something You Have (Q12)</strong><br><em>(Possession Factor)</em></td>
            <td>A physical or digital token that only the legitimate owner possesses.</td>
            <td>Hardware security keys (YubiKey FIDO2), smart cards, USB cryptographic dongles, TOTP software tokens (Google Authenticator).</td>
          </tr>
          <tr>
            <td><strong>3. Something You Are (Q12)</strong><br><em>(Inherence / Biometrics)</em></td>
            <td>Intrinsic biological or physiological traits unique to the individual.</td>
            <td>Fingerprint scans, retinal/iris patterns, facial recognition geometry, voice biometrics.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">5. Contextual Factors: "Somewhere You Are" & "Something You Do"</span>
      <p>Modern risk-based adaptive authentication incorporates contextual environmental telemetry:</p>
      <ul class="forensic-list">
        <li><strong>Somewhere You Are (Location Factor):</strong> Geolocation derived from GPS coordinates, verified corporate IP subnets, or cellular tower triangulation. Unreasonable velocity (e.g., login from Delhi and New York within 10 minutes) triggers an immediate security lock.</li>
        <li><strong>Something You Do (Behavioral Biometrics):</strong> Typing cadence, mouse stroke acceleration, touchscreen swipe dynamics, and gait analysis.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">6. MFA Attack Vectors & The FIDO2 / WebAuthn Solution</span>
      <p>Traditional SMS OTPs and email verification codes are vulnerable to <strong>SIM-swapping</strong>, SS7 network interception, and real-time reverse proxy phishing kits (Evilginx). The gold standard for phishing-resistant MFA is <strong>FIDO2 / WebAuthn</strong>, which uses asymmetric public-key cryptography bound to the specific browser domain origin.</p>
    </div>
      `
    }
  },

  // Spread 3: Part 2 - Authorization Models & Non-Repudiation (Pages 7–8)
  {
    spreadId: 3,
    left: {
      pageNumber: 7,
      runningHead: 'CH. 2 • AUTHORIZATION PARADIGMS: RBAC, ABAC & MAC',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 2 • Topic 2: AAA & Non-Repudiation (Part 3)</span>
      <h2>Authorization Models: RBAC, ABAC, MAC & DAC</h2>
    </div>

    <div class="section-block">
      <span class="section-label">7. The Principle of Least Privilege (PoLP) (Q14)</span>
      <p>The foundational law of access control dictates: <strong>Every user, application, and service account must operate using only the minimal set of privileges strictly necessary to complete its authorized job duties, and for no longer than required.</strong> Eliminating excess administrator privileges radically reduces the attack surface and prevents lateral movement.</p>
    </div>

    <div class="section-block">
      <span class="section-label">8. Deep Dive into the 4 Core Authorization Models (Q13)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">RBAC (Role-Based Access Control) (Q13)</span>
            <span class="statute-tag">Enterprise Standard</span>
          </div>
          <p>Permissions are assigned directly to defined organizational <em>Roles</em> (e.g., "Financial Auditor", "Lab Examiner", "HR Manager"). Users are assigned to roles. When an employee switches departments, removing them from the old role instantly revokes all associated permissions, preventing <em>privilege creep</em>.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">ABAC (Attribute-Based Access Control) (Q13)</span>
            <span class="statute-tag">Context-Aware</span>
          </div>
          <p>The most fine-grained model. Access decisions evaluate dynamic attributes across 4 dimensions: <strong>Subject</strong> (role, clearance), <strong>Resource</strong> (confidentiality tier), <strong>Action</strong> (read, write), and <strong>Environment</strong> (time of day, device health, corporate IP).</p>
        </div>
      </div>

      <div class="statutory-grid" style="margin-top: 10px;">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">MAC (Mandatory Access Control) (Q13)</span>
            <span class="statute-tag">Military / High Security</span>
          </div>
          <p>Access is governed by a centralized security authority via fixed security labels (e.g., Unclassified, Secret, Top Secret). Resource owners CANNOT modify permissions or share files at their discretion. Implemented via SE-Linux and military mainframes.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">DAC (Discretionary Access Control) (Q13)</span>
            <span class="statute-tag">Owner Discretion</span>
          </div>
          <p>The data creator/owner has full personal discretion over granting access to others. Standard UNIX/Linux file permissions (<code>chmod 777</code>) and Windows NTFS ACLs are classic DAC systems.</p>
        </div>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 8,
      runningHead: 'CH. 2 • NON-REPUDIATION & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 2 • Topic 2: AAA & Non-Repudiation (Part 4)</span>
      <h2>Non-Repudiation Architecture & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">9. Non-Repudiation: The Legal Guarantee (Q15)</span>
      <p><strong>Non-Repudiation</strong> is the security assurance that the author or sender of a message, transaction, or forensic report cannot falsely deny having created, sent, or signed it.</p>
      
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Why Symmetric Encryption CANNOT Provide Non-Repudiation (Q15)</span>
          <span class="statute-tag">Crucial Exam Concept</span>
        </div>
        <p>In symmetric encryption (AES, DES), Alice and Bob share the exact same secret key ($K$). If a message arrives encrypted with $K$, Bob could have created it himself or Alice could have created it! Because the key is identical on both ends, either party can plausibly blame the other in court.</p>
        <p><strong>The Solution: Asymmetric Digital Signatures!</strong> A sender signs data using their secret, unshared <strong>Private Key</strong>. Because only Alice possesses her private key, she cannot deny authorship when the signature verifies with her public key.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">10. Immutable Audit Trails & Accounting Requirements (Q16, Q19)</span>
      <p>To defend against insider repudiation, digital forensic systems enforce immutable logging:</p>
      <ul class="forensic-list">
        <li><strong>NTP Time Synchronization:</strong> Synchronizing all server clocks using Network Time Protocol (NTP) to establish an undisputed, legally defensible timeline of events.</li>
        <li><strong>WORM Storage:</strong> Write Once, Read Many media ensuring log files cannot be deleted or altered by a compromised administrator account.</li>
        <li><strong>Cryptographic Log Chaining:</strong> Forward-secure hashing (similar to blockchain) where altering any past log entry invalidates all subsequent hash headers.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 2 (Q11–Q20):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q11:</strong> The AAA architecture represents Authentication, Authorization, and Accounting.</li>
        <li><strong>Q12:</strong> The 3 classic MFA factors are: Something you know (password), Something you have (token/smartcard), and Something you are (biometrics).</li>
        <li><strong>Q13:</strong> RBAC assigns access based on job roles; ABAC uses dynamic context attributes; MAC uses non-negotiable security clearance labels.</li>
        <li><strong>Q14:</strong> Principle of Least Privilege grants only the minimum necessary rights required to complete authorized tasks.</li>
        <li><strong>Q15:</strong> Non-repudiation prevents a sender from falsely denying sending a message; achieved strictly via Digital Signatures and PKI.</li>
        <li><strong>Q19:</strong> Accounting provides the historical forensic audit trail proving who executed which action at what exact timestamp.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 2</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q11–Q20) on AAA Architecture, MFA, RBAC & Non-Repudiation.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="1" onclick="window.openMCQForSpread(1)">
          Start Quiz (Q11–Q20) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 3: CONCEPTS OF CRYPTOGRAPHY & STEGANOGRAPHY (Pages 9–12, Spreads 4 & 5, Q21–Q30)
  // =========================================================================
  // Spread 4: Part 1 - Cryptography vs Steganography & Spatial LSB (Pages 9–10)
  {
    spreadId: 4,
    left: {
      pageNumber: 9,
      runningHead: 'CH. 3 • CRYPTOGRAPHY VS STEGANOGRAPHY',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 3 • Topic 3: Crypto vs Steganography (Part 1)</span>
      <h2>Core Concepts: Concealing Content vs. Concealing Existence</h2>
    </div>

    <div class="intro-abstract">
      <p>Securing sensitive communications involves two distinct scientific disciplines that date back millennia: <strong>Cryptography</strong> (the art of secret writing) and <strong>Steganography</strong> (the art of covered writing). While both protect confidential messages, their strategic approaches and threat models are fundamentally different.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Cryptography vs. Steganography: The Core Paradigm Shift (Q21)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Security Attribute</th>
            <th>Cryptography</th>
            <th>Steganography</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Primary Objective (Q21)</strong></td>
            <td><strong>Conceals the MEANING</strong> of the message. The communication itself is completely obvious to anyone watching.</td>
            <td><strong>Conceals the VERY EXISTENCE</strong> of the communication. Observers have no idea a message is even present!</td>
          </tr>
          <tr>
            <td><strong>Output Appearance</strong></td>
            <td>Indecipherable random ciphertext strings (e.g., <code>7f8a9b2c...</code>). Highly suspicious to censors.</td>
            <td>Innocuous digital media: a family JPEG photograph, an MP3 song, or a normal TCP network stream.</td>
          </tr>
          <tr>
            <td><strong>Adversary's Reaction</strong></td>
            <td>Adversary knows data exists; attempts cryptanalysis or tortures the sender for the secret key.</td>
            <td>Adversary passes the carrier file unnoticed because nothing appears unusual or suspicious.</td>
          </tr>
          <tr>
            <td><strong>Primary Failure Mode</strong></td>
            <td>Mathematical breakdown of cipher or compromised secret key.</td>
            <td>Statistical detection by a steganalyst proving the file has been tampered with.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. Steganographic Terminology & Components (Q22)</span>
      <ul class="forensic-list">
        <li><strong>Cover Object / Carrier Media:</strong> The innocent underlying digital file (image, audio track, video clip, or PDF) used as the vehicle to conceal the secret data.</li>
        <li><strong>Payload / Secret Message:</strong> The private text, document, or encrypted binary embedded into the carrier.</li>
        <li><strong>Stego-Object:</strong> The resulting output file containing the embedded secret payload. Visually and audibly indistinguishable from the cover object.</li>
        <li><strong>Stego-Key:</strong> An optional secret password or cryptographic key used to randomize the embedding sequence or encrypt the payload prior to embedding.</li>
      </ul>
    </div>
      `
    },
    right: {
      pageNumber: 10,
      runningHead: 'CH. 3 • SPATIAL DOMAIN: LSB EMBEDDING',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 3 • Topic 3: Crypto vs Steganography (Part 2)</span>
      <h2>Spatial Domain Steganography: Least Significant Bit (LSB)</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Least Significant Bit (LSB) Embedding Fundamentals (Q23)</span>
      <p>The simplest and most pervasive form of spatial domain steganography is <strong>Least Significant Bit (LSB) substitution</strong>. Digital images represent colors using binary bytes. In standard 24-bit TrueColor RGB images, each pixel consists of 3 bytes (Red, Green, Blue), where each byte ranges from 0 to 255 (8 bits: $b_7 b_6 b_5 b_4 b_3 b_2 b_1 b_0$).</p>
      
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">The 8th Bit Physics (Q23)</span>
          <span class="statute-tag">Visual Threshold</span>
        </div>
        <p>The Most Significant Bit (MSB, $b_7$) contributes a value of 128 to color intensity. The <strong>Least Significant Bit (LSB, $b_0$)</strong> contributes only a value of <strong>1</strong>!</p>
        <p>Because the human eye cannot discern a 1/256th variation in color luminance (known as the Just Noticeable Difference threshold), replacing the LSB of pixel color bytes with secret payload bits leaves the image visually identical!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Step-by-Step LSB Embedding Example (Q23)</span>
      <p>Suppose an investigator wants to embed the letter <strong>'A'</strong> (ASCII 65 = binary <code>01000001</code>) into 3 pixels (9 color bytes: 3 bytes per pixel):</p>
      <div class="statute-card card-purple" style="font-family: monospace; font-size: 0.82rem;">
        Original Pixel Bytes:<br>
        R: 1101001<strong>0</strong> &nbsp; G: 0110110<strong>1</strong> &nbsp; B: 1011000<strong>0</strong><br>
        R: 1001101<strong>1</strong> &nbsp; G: 1100101<strong>0</strong> &nbsp; B: 0010111<strong>1</strong><br>
        R: 0101100<strong>0</strong> &nbsp; G: 1011010<strong>1</strong><br><br>
        Secret Bits of 'A': 0, 1, 0, 0, 0, 0, 0, 1<br><br>
        Stego Pixel Bytes (after LSB replacement):<br>
        R: 1101001<strong>0</strong> &nbsp; G: 0110110<strong>1</strong> &nbsp; B: 1011000<strong>0</strong><br>
        R: 1001101<strong>0</strong> &nbsp; G: 1100101<strong>0</strong> &nbsp; B: 0010111<strong>0</strong><br>
        R: 0101100<strong>0</strong> &nbsp; G: 1011010<strong>1</strong>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">5. LSB Storage Capacity Calculation (Q24)</span>
      <p>How much data can be hidden in an image using standard 1-bit LSB replacement?</p>
      <div class="statute-card card-amber">
        <p><strong>Formula:</strong> $\text{Maximum Capacity (bytes)} = \frac{\text{Width} \times \text{Height} \times \text{Channels}}{8}$</p>
        <p>For a standard $1920 \times 1080$ RGB image (3 channels):<br>
        Total Color Bytes = $1920 \times 1080 \times 3 = 6,220,800\text{ bytes}$.<br>
        1 LSB bit per byte = $6,220,800\text{ bits} = \mathbf{777,600\text{ bytes (roughly 777 KB!)}}$ of hidden data!</p>
      </div>
    </div>
      `
    }
  },

  // Spread 5: Part 2 - Transform Domain, Trilemma & Exam Traps (Pages 11–12)
  {
    spreadId: 5,
    left: {
      pageNumber: 11,
      runningHead: 'CH. 3 • TRANSFORM DOMAIN & NETWORK STEGO',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 3 • Topic 3: Crypto vs Steganography (Part 3)</span>
      <h2>Transform Domain (DCT/DWT) & Network Steganography</h2>
    </div>

    <div class="section-block">
      <span class="section-label">6. Spatial vs. Transform Domain Steganography (Q25)</span>
      <p>While spatial LSB is simple, it suffers from a fatal flaw: <strong>fragility</strong>. Converting an uncompressed BMP/PNG into a JPEG or uploading it to WhatsApp immediately destroys the spatial LSBs through lossy compression!</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Spatial Domain (LSB)</span>
            <span class="statute-tag">Raw Pixels</span>
          </div>
          <p>• Operates directly on raw pixel values.<br>
          • Extremely high embedding capacity.<br>
          • <strong>Fatal Flaw:</strong> Destroyed by cropping, resizing, or lossy re-encoding.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Transform Domain (DCT / DWT) (Q25)</span>
            <span class="statute-tag">Frequency Domain</span>
          </div>
          <p>• Hides data inside mathematical frequency coefficients (e.g., Discrete Cosine Transform in JPEG, Discrete Wavelet Transform in JPEG 2000).<br>
          • Embeds payload in intermediate AC frequency coefficients.<br>
          • <strong>Massive Advantage:</strong> Survives JPEG lossy compression, cropping, and contrast filtering!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">7. Network & Protocol Steganography (Covert Channels) (Q26)</span>
      <p>Steganography is not limited to multimedia images. Attackers embed covert messages inside standard network protocols to bypass perimeter enterprise firewalls and DLP sensors:</p>
      <ul class="forensic-list">
        <li><strong>TCP Header Steganography:</strong> Hiding data inside unused TCP flag fields, reserved bits, or manipulating the Initial Sequence Numbers (ISNs).</li>
        <li><strong>IP Header Steganography:</strong> Modifying the 16-bit Identification (IP ID) field or manipulating the Type of Service (ToS) byte.</li>
        <li><strong>DNS Tunneling:</strong> Encoding base64 payloads into DNS query subdomains (e.g., <code>exfiltrated-data.attacker-c2.com</code>) to leak corporate data through recursive resolvers that never block port 53 UDP.</li>
      </ul>
    </div>
      `
    },
    right: {
      pageNumber: 12,
      runningHead: 'CH. 3 • WATERMARKING, TRILEMMA & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 3 • Topic 3: Crypto vs Steganography (Part 4)</span>
      <h2>Digital Watermarking, Stego Trilemma & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">8. Steganography vs. Digital Watermarking: The Legal Distinction (Q27)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Characteristic</th>
            <th>Digital Watermarking</th>
            <th>Steganography</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Primary Purpose (Q27)</strong></td>
            <td><strong>Copyright Protection & Provenance.</strong> Asserts intellectual property ownership or detects counterfeiting.</td>
            <td><strong>Covert Point-to-Point Communication.</strong> Secretly moving data between two conspirators.</td>
          </tr>
          <tr>
            <td><strong>Robustness Requirement</strong></td>
            <td><strong>High Robustness:</strong> Must survive malicious removal attempts, lossy transcoding, cropping, and re-compression.</td>
            <td>High imperceptibility; robustness is secondary to avoiding statistical detection.</td>
          </tr>
          <tr>
            <td><strong>Payload Nature</strong></td>
            <td>Small, repetitive ownership watermark (e.g., photographer's ID, digital rights management hash).</td>
            <td>Arbitrary secret payload (text, database dumps, malicious shellcode).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">9. The Steganographic Trilemma & Prisoners' Problem (Q29, Q30)</span>
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">The Steganographic Trilemma (Q29)</span>
            <span class="statute-tag">Engineering Tradeoff</span>
          </div>
          <p>You cannot maximize all three simultaneously:<br>
          1. <strong>Capacity:</strong> Volume of hidden payload.<br>
          2. <strong>Invisibility (Undetectability):</strong> Freedom from visual and statistical distortion.<br>
          3. <strong>Robustness:</strong> Ability to survive re-compression and filtering.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Simmons's Prisoners' Problem (Q30)</span>
            <span class="statute-tag">Theoretical Model</span>
          </div>
          <p>Formulated by Gustavus Simmons in 1983: Alice and Bob are imprisoned in separate cells, overseen by a watchful warden (Wendy). If Wendy detects any secret or encrypted communications, she throws them in solitary confinement. To coordinate an escape, they must use steganography to conceal the very existence of their escape messages inside innocent letters!</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 3 (Q21–Q30):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q21:</strong> Cryptography conceals the MEANING of data; Steganography conceals the VERY EXISTENCE of communication.</li>
        <li><strong>Q22:</strong> Cover object is the innocent carrier; Stego-object is the carrier containing the hidden payload.</li>
        <li><strong>Q23:</strong> Spatial LSB modifies the least significant bit (bit 0) of pixel bytes, exploiting human visual limits.</li>
        <li><strong>Q25:</strong> Transform domain steganography (DCT/DWT) embeds data in frequency coefficients to survive JPEG lossy compression.</li>
        <li><strong>Q27:</strong> Digital watermarking is designed for copyright protection and must be highly robust against tampering.</li>
        <li><strong>Q29:</strong> The Steganographic Trilemma balances Capacity, Invisibility, and Robustness.</li>
        <li><strong>Q30:</strong> Simmons's Prisoners' Problem establishes the formal mathematical model for evaluating steganographic systems.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 3</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q21–Q30) on Cryptography vs Steganography, LSB & DCT.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="2" onclick="window.openMCQForSpread(2)">
          Start Quiz (Q21–Q30) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 4: SYMMETRIC ENCRYPTION: STREAM VS BLOCK & DES/3DES (Pages 13–16, Spreads 6 & 7, Q31–Q40)
  // =========================================================================
  // Spread 6: Part 1 - Stream vs Block & Shannon's Pillars (Pages 13–14)
  {
    spreadId: 6,
    left: {
      pageNumber: 13,
      runningHead: 'CH. 4 • SYMMETRIC CIPHERS: STREAM VS BLOCK',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 4 • Topic 4: Symmetric Ciphers & DES/3DES (Part 1)</span>
      <h2>Symmetric Foundations: Stream vs. Block Ciphers</h2>
    </div>

    <div class="intro-abstract">
      <p><strong>Symmetric Cryptography</strong> (also known as Secret-Key or Shared-Key Cryptography) is the foundational engine of modern high-speed data encryption. Both the sender (for encryption) and receiver (for decryption) employ the <strong>exact same secret key</strong>. Symmetric ciphers fall into two distinct operational paradigms: <strong>Stream Ciphers</strong> and <strong>Block Ciphers</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Stream Ciphers vs. Block Ciphers: The Operational Divide (Q31, Q32)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Architectural Metric</th>
            <th>Stream Ciphers (Q31)</th>
            <th>Block Ciphers (Q32)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Processing Unit</strong></td>
            <td>Continuous bit-by-bit or byte-by-byte processing in a steady flow.</td>
            <td>Fixed-size discrete blocks (e.g., 64-bit blocks in DES, 128-bit blocks in AES).</td>
          </tr>
          <tr>
            <td><strong>Mathematical Engine</strong></td>
            <td>Plaintext bits are combined with a pseudorandom keystream using simple <strong>XOR</strong> operations: <code>Ciphertext = Plaintext XOR Keystream</code>.</td>
            <td>Complex iterative rounds of substitution (S-Boxes) and permutation (P-Boxes) networks.</td>
          </tr>
          <tr>
            <td><strong>Latency & Buffering</strong></td>
            <td>Extremely low latency; zero buffering required. Ideal for real-time video/audio streams and GSM cellular networks.</td>
            <td>Requires accumulating an entire block before encryption can execute. Needs padding if plaintext does not fit block size.</td>
          </tr>
          <tr>
            <td><strong>Standard Algorithms</strong></td>
            <td>ChaCha20 (RFC 8439), Salsa20, RC4 (broken due to keystream bias).</td>
            <td>AES (FIPS 197), DES (FIPS 46), 3DES, Blowfish, Twofish.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Stream Cipher XOR Mechanism (Q31)</span>
      <p>In a stream cipher, decryption is completely identical and symmetric to encryption because XOR is self-inverting:</p>
      <div class="statute-card card-teal">
        <p>• <strong>Encryption:</strong> $\text{Ciphertext Bit} = \text{Plaintext Bit} \oplus \text{Keystream Bit}$<br>
        • <strong>Decryption:</strong> $\text{Plaintext Bit} = \text{Ciphertext Bit} \oplus \text{Keystream Bit}$</p>
        <p><strong>Fatal Rule:</strong> A keystream must NEVER be reused with the same key and nonce! Reusing a keystream allows attackers to XOR two ciphertexts together, completely eliminating the key and exposing the underlying plaintexts!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 14,
      runningHead: 'CH. 4 • SHANNON\'S PILLARS: CONFUSION & DIFFUSION',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 4 • Topic 4: Symmetric Ciphers & DES/3DES (Part 2)</span>
      <h2>Shannon\'s Twin Pillars: Confusion and Diffusion</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Claude Shannon\'s Criteria for Secure Ciphers (Q33)</span>
      <p>In his seminal 1949 paper <em>"Communication Theory of Secrecy Systems"</em>, Claude Shannon proved that any secure block cipher must rigorously satisfy two fundamental properties to defeat statistical cryptanalysis:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">1. Confusion (Q33)</span>
            <span class="statute-tag">Obscuring the Key</span>
          </div>
          <p><strong>Goal:</strong> Makes the mathematical and statistical relationship between the secret key and the resulting ciphertext as complex, non-linear, and obscured as possible.</p>
          <p><strong>Implementation:</strong> Achieved through <strong>Substitution Boxes (S-Boxes)</strong>. S-Boxes perform non-linear mapping of input bits to output bits, frustrating linear and algebraic equations.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">2. Diffusion (Q33)</span>
            <span class="statute-tag">Spreading the Bits</span>
          </div>
          <p><strong>Goal:</strong> Spreads the statistical influence of a single plaintext bit across the entire ciphertext block.</p>
          <p><strong>Implementation:</strong> Achieved through <strong>Permutations (P-Boxes)</strong> and linear transformations (ShiftRows, MixColumns). If a single plaintext bit is flipped, approximately 50% of the output ciphertext bits should change randomly (the <strong>Avalanche Effect</strong>).</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. The Feistel Network Architecture (Q34)</span>
      <p>Invented by IBM cryptographer Horst Feistel, the <strong>Feistel Cipher Architecture</strong> is a symmetric structure used in DES, Blowfish, and CAST-128:</p>
      <div class="statute-card card-amber">
        <p>• The input block of size $2w$ bits is split into two equal halves: <strong>Left ($L$)</strong> and <strong>Right ($R$)</strong>.<br>
        • For each round $i$ from 1 to 16:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;$L_i = R_{i-1}$<br>
        &nbsp;&nbsp;&nbsp;&nbsp;$R_i = L_{i-1} \oplus F(R_{i-1}, K_i)$<br>
        • <strong>Major Architectural Advantage:</strong> The round function $F$ does NOT need to be mathematically reversible! Decryption uses the exact same hardware and code, simply feeding the round subkeys in reverse order ($K_{16}$ down to $K_1$).</p>
      </div>
    </div>
      `
    }
  },

  // Spread 7: Part 2 - DES Architecture, 2DES MitM & 3DES (Pages 15–16)
  {
    spreadId: 7,
    left: {
      pageNumber: 15,
      runningHead: 'CH. 4 • DATA ENCRYPTION STANDARD (DES) DEEP DIVE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 4 • Topic 4: Symmetric Ciphers & DES/3DES (Part 3)</span>
      <h2>The Data Encryption Standard (DES / FIPS 46)</h2>
    </div>

    <div class="section-block">
      <span class="section-label">5. DES Architectural Specifications (Q35, Q36)</span>
      <p>Adopted by the National Bureau of Standards (NBS / NIST) in 1977 as FIPS PUB 46 (derived from IBM's Lucifer cipher):</p>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Architectural Parameter</th>
            <th>Standard Specification</th>
            <th>Forensic & Cryptographic Significance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Block Size</strong></td>
            <td><strong>64 bits</strong></td>
            <td>Processes data in fixed 8-byte chunks. Vulnerable to Birthday collisions on massive data transfers (Sweet32 attack).</td>
          </tr>
          <tr>
            <td><strong>Key Length (Q35)</strong></td>
            <td><strong>56 bits effective</strong><br>(64 bits raw input)</td>
            <td>Every 8th bit (bits 8, 16, 24, 32, 40, 48, 56, 64) is discarded as a <em>parity check bit</em>! Only 56 bits are used for encryption.</td>
          </tr>
          <tr>
            <td><strong>Number of Rounds (Q36)</strong></td>
            <td><strong>16 rounds</strong></td>
            <td>Iterative Feistel rounds ensuring full confusion and diffusion across all 64 bits.</td>
          </tr>
          <tr>
            <td><strong>Key Space Size</strong></td>
            <td>$2^{56} \approx 7.2 \times 10^{16}$ keys</td>
            <td>Easily broken by modern hardware brute-force. Cracked by the EFF "Deep Crack" machine in 22 hours in 1999!</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">6. Inside the DES Round Function (F)</span>
      <p>In each round, the 32-bit right half ($R$) passes through 4 sequential operations:</p>
      <ul class="forensic-list">
        <li><strong>Expansion Permutation (E-Box):</strong> Expands 32 bits into 48 bits by duplicating 16 bits.</li>
        <li><strong>Subkey XOR:</strong> XORs the 48-bit expanded block with the 48-bit round subkey derived from the key schedule.</li>
        <li><strong>Substitution (8 S-Boxes):</strong> Compresses 48 bits back down to 32 bits! Each of the 8 S-Boxes takes 6 input bits and produces 4 output bits (bits 1 and 6 select the row 0–3, bits 2–5 select the column 0–15). <em>This is the sole non-linear step in DES!</em></li>
        <li><strong>Straight Permutation (P-Box):</strong> Shuffles the 32 output bits to disperse confusion across the entire block.</li>
      </ul>
    </div>
      `
    },
    right: {
      pageNumber: 16,
      runningHead: 'CH. 4 • 2DES MEET-IN-THE-MIDDLE & 3DES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 4 • Topic 4: Symmetric Ciphers & DES/3DES (Part 4)</span>
      <h2>Double-DES Meet-in-the-Middle Attack & Triple-DES (3DES)</h2>
    </div>

    <div class="section-block">
      <span class="section-label">7. Why Double-DES Fails: Meet-in-the-Middle Attack (Q37, Q38)</span>
      <p>When 56-bit DES became vulnerable to brute-force, developers naively tried encrypting data twice with two independent 56-bit keys ($K_1, K_2$): $C = E_{K2}(E_{K1}(P))$. They assumed security would double from $2^{56}$ to $2^{112}$.</p>
      
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Diffie & Hellman's Meet-in-the-Middle Discovery (Q37, Q38)</span>
          <span class="statute-tag">Fatal Flaw</span>
        </div>
        <p>Diffie and Hellman proved Double-DES provides only <strong>$2^{57}$ security</strong> (scarcely better than single DES's $2^{56}$!) using a space-time tradeoff attack:</p>
        <p>• <strong>Phase 1 (Forward):</strong> Compute $M = E_{K1}(P)$ for all $2^{56}$ possible values of $K_1$. Store all pairs $(M, K_1)$ in a sorted lookup table.<br>
        • <strong>Phase 2 (Backward):</strong> Compute $M' = D_{K2}(C)$ for all $2^{56}$ possible values of $K_2$. Search for a match in the lookup table ($M = M'$). A match reveals candidate keys $(K_1, K_2)$ in only $2^{56} + 2^{56} = 2^{57}$ operations!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">8. Triple DES (3DES / TDEA): Encrypt-Decrypt-Encrypt (Q39, Q40)</span>
      <p>To resist Meet-in-the-Middle attacks, <strong>Triple DES (3DES)</strong> applies three sequential operations using three keys ($K_1, K_2, K_3$):</p>
      <div class="statute-card card-teal">
        <p style="text-align: center; font-weight: 700; font-size: 0.95rem;">
          $C = E_{K1}(D_{K2}(E_{K3}(P)))$ &nbsp;&nbsp;&nbsp; (Encrypt &rarr; Decrypt &rarr; Encrypt)
        </p>
        <p><strong>Why Decrypt in the Middle? Backward Compatibility!</strong> If $K_1 = K_2 = K_3$, the middle decryption cancels the first encryption ($D_{K}(E_{K}(P)) = P$), reducing 3DES to standard single DES so legacy equipment can communicate seamlessly!</p>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 4 (Q31–Q40):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q31:</strong> Stream ciphers encrypt continuously bit-by-bit using XOR with a pseudorandom keystream.</li>
        <li><strong>Q32:</strong> Block ciphers process data in fixed discrete chunks (64-bit in DES, 128-bit in AES).</li>
        <li><strong>Q33:</strong> Confusion obscures the link between key and ciphertext (S-Boxes); Diffusion spreads plaintext bits across ciphertext (P-Boxes).</li>
        <li><strong>Q35:</strong> DES uses a 64-bit raw key, but effective key length is strictly 56 bits (8 parity bits discarded).</li>
        <li><strong>Q36:</strong> DES utilizes 16 Feistel rounds.</li>
        <li><strong>Q37, Q38:</strong> Double DES is broken by the Meet-in-the-Middle attack in $2^{57}$ operations instead of $2^{112}$.</li>
        <li><strong>Q39:</strong> Triple DES uses Encrypt-Decrypt-Encrypt (EDE) for backward compatibility with single DES.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 4</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q31–Q40) on Stream/Block Ciphers, Shannon's Pillars & DES/3DES.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="3" onclick="window.openMCQForSpread(3)">
          Start Quiz (Q31–Q40) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 5: SYMMETRIC ENCRYPTION: AES ARCHITECTURE & CIPHER MODES (Pages 17–20, Spreads 8 & 9, Q41–Q50)
  // =========================================================================
  // Spread 8: Part 1 - AES Architecture & The 4 Round Transformations (Pages 17–18)
  {
    spreadId: 8,
    left: {
      pageNumber: 17,
      runningHead: 'CH. 5 • ADVANCED ENCRYPTION STANDARD (AES) DEEP DIVE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 5 • Topic 5: AES Architecture & Cipher Modes (Part 1)</span>
      <h2>Advanced Encryption Standard (AES / FIPS 197)</h2>
    </div>

    <div class="intro-abstract">
      <p>Following a multi-year global public competition, NIST standardized the <strong>Advanced Encryption Standard (AES / FIPS 197)</strong> in 2001, replacing obsolete DES. Designed by Belgian cryptographers Joan Daemen and Vincent Rijmen (under the name <em>Rijndael</em>), AES is a non-Feistel <strong>Substitution-Permutation Network (SPN)</strong> that protects government classified data and global e-commerce.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Core Architectural Parameters (Q41, Q42, Q43)</span>
      <p>Unlike DES, AES operates on a fixed 128-bit block size and supports three standardized key lengths:</p>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>AES Variant</th>
            <th>Key Length (Q42)</th>
            <th>Block Size (Q41)</th>
            <th>Number of Rounds (Q43)</th>
            <th>Security Strength</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>AES-128</strong></td>
            <td>128 bits (16 bytes)</td>
            <td>128 bits (16 bytes)</td>
            <td><strong>10 rounds</strong></td>
            <td>Standard commercial security; resistant to brute-force.</td>
          </tr>
          <tr>
            <td><strong>AES-192</strong></td>
            <td>192 bits (24 bytes)</td>
            <td>128 bits (16 bytes)</td>
            <td><strong>12 rounds</strong></td>
            <td>U.S. Government Classified Secret clearance level.</td>
          </tr>
          <tr>
            <td><strong>AES-256</strong></td>
            <td>256 bits (32 bytes)</td>
            <td>128 bits (16 bytes)</td>
            <td><strong>14 rounds</strong></td>
            <td>Top Secret classification; post-quantum security margin.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. The 4x4 State Array Representation</span>
      <p>In AES, the 128-bit block (16 bytes) is arranged into a two-dimensional $4 \times 4$ matrix called the <strong>State Array</strong>, processed column-by-column:</p>
      <div class="statute-card card-teal" style="text-align: center; font-family: monospace; font-size: 0.88rem;">
        [ b0 &nbsp; b4 &nbsp; b8 &nbsp; b12 ]<br>
        [ b1 &nbsp; b5 &nbsp; b9 &nbsp; b13 ]<br>
        [ b2 &nbsp; b6 &nbsp; b10 &nbsp; b14 ]<br>
        [ b3 &nbsp; b7 &nbsp; b11 &nbsp; b15 ]
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 18,
      runningHead: 'CH. 5 • THE 4 ROUND TRANSFORMATIONS IN AES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 5 • Topic 5: AES Architecture & Cipher Modes (Part 2)</span>
      <h2>The 4 Transformations in Each AES Round</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The 4 Modular Transformations (Q44, Q45)</span>
      <p>Every standard AES round consists of four distinct byte-level algebraic operations:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">1. SubBytes (Q44)</span>
            <span class="statute-tag">Non-linear Confusion</span>
          </div>
          <p>Each byte in the state is replaced with a substitute byte using an 8-bit non-linear substitution box (S-Box) calculated over the finite Galois Field GF($2^8$). Defeats differential cryptanalysis.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">2. ShiftRows (Q44)</span>
            <span class="statute-tag">Row Diffusion</span>
          </div>
          <p>Cyclically shifts the bytes in each row to the left:<br>
          • Row 0: No shift.<br>
          • Row 1: Shift 1 byte left.<br>
          • Row 2: Shift 2 bytes left.<br>
          • Row 3: Shift 3 bytes left.</p>
        </div>
      </div>

      <div class="statutory-grid" style="margin-top: 10px;">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">3. MixColumns (Q44, Q45)</span>
            <span class="statute-tag">Column Diffusion</span>
          </div>
          <p>Each column of 4 bytes is multiplied by a fixed matrix over GF($2^8$). Spreads the influence of each byte across all 4 bytes of the column.<br>
          <strong>Critical Exam Rule (Q45):</strong> MixColumns is completely <strong>OMITTED</strong> in the final round!</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">4. AddRoundKey (Q44)</span>
            <span class="statute-tag">Key Injection</span>
          </div>
          <p>XORs the 128-bit state array with the 128-bit round subkey derived from the master key via the Rijndael Key Schedule. <em>This is the only transformation where the secret key is injected!</em></p>
        </div>
      </div>
    </div>
      `
    }
  },

  // Spread 9: Part 2 - Modes of Operation, Padding Oracle & AEAD (Pages 19–20)
  {
    spreadId: 9,
    left: {
      pageNumber: 19,
      runningHead: 'CH. 5 • BLOCK CIPHER MODES OF OPERATION',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 5 • Topic 5: AES Architecture & Cipher Modes (Part 3)</span>
      <h2>Block Cipher Modes: ECB vs. CBC & Padding Oracles</h2>
    </div>

    <div class="section-block">
      <span class="section-label">4. Why Modes of Operation are Necessary (Q46)</span>
      <p>A block cipher encrypts strictly a single fixed-size block (128 bits). Real-world messages (emails, disk files, TLS sessions) are thousands or millions of bytes. <strong>Modes of Operation</strong> dictate the mathematical rules for processing multi-block data streams.</p>
    </div>

    <div class="section-block">
      <span class="section-label">5. Electronic Codebook (ECB) — The Insecure Legacy Mode (Q46)</span>
      <p>In ECB mode, each plaintext block is encrypted entirely independently using the same secret key ($C_i = E_K(P_i)$):</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">The Fatal ECB Flaw (Q46)</span>
          <span class="statute-tag">Never Use in Production!</span>
        </div>
        <p><strong>Identical plaintext blocks produce 100% identical ciphertext blocks!</strong></p>
        <p>This completely preserves underlying structural patterns and data distributions (demonstrated by the famous <em>ECB Penguin</em> where Tux's silhouette remains clearly visible after encryption!). ECB is strictly forbidden in secure modern protocols.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">6. Cipher Block Chaining (CBC) & The Initialization Vector (IV) (Q47)</span>
      <p>To eliminate pattern preservation, CBC introduces cryptographic chaining:</p>
      <div class="statute-card card-teal">
        <p>• <strong>Block 1:</strong> $C_1 = E_K(P_1 \oplus \text{IV})$<br>
        • <strong>Subsequent Blocks:</strong> $C_i = E_K(P_i \oplus C_{i-1})$</p>
        <p>Each plaintext block is XORed with the preceding ciphertext block before encryption. The first block is XORed with a random <strong>Initialization Vector (IV)</strong>. The IV must be unpredictable and cryptographically random!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">7. Padding Oracle Attacks (POODLE & BEAST) (Q48)</span>
      <p>CBC requires plaintexts to align to 16-byte block boundaries using <strong>PKCS#7 padding</strong>. If a server leaks whether decrypted padding was valid or invalid (a <em>Padding Oracle</em>), attackers can decrypt ciphertexts byte-by-byte without the key!</p>
    </div>
      `
    },
    right: {
      pageNumber: 20,
      runningHead: 'CH. 5 • CTR MODE, GCM (AEAD) & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 5 • Topic 5: AES Architecture & Cipher Modes (Part 4)</span>
      <h2>CTR Mode, Authenticated Encryption (GCM) & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">8. Counter (CTR) Mode: Block Cipher into Stream Cipher (Q49)</span>
      <p>CTR mode converts a block cipher into a high-speed stream cipher:</p>
      <div class="statute-card card-purple">
        <p>Instead of encrypting plaintext blocks, CTR encrypts successive counter values: $C_i = P_i \oplus E_K(\text{Nonce} \mathbin{\Vert} \text{Counter}_i)$.</p>
        <p>• <strong>Parallelizable:</strong> Both encryption and decryption blocks can be processed concurrently across multi-core CPUs and GPUs.<br>
        • <strong>Random Access:</strong> Any block in a multi-gigabyte file can be decrypted directly without processing prior blocks!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">9. Galois/Counter Mode (GCM) — The AEAD Gold Standard (Q50)</span>
      <p>Traditional encryption provides confidentiality but does NOT protect against tampering (ciphertext malleability). <strong>Authenticated Encryption with Associated Data (AEAD)</strong> solves this by providing confidentiality, integrity, and authenticity simultaneously!</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">GCM Architecture (Q50)</span>
          <span class="statute-tag">TLS 1.3 Standard</span>
        </div>
        <p>AES-GCM combines CTR mode encryption (for high-speed confidentiality) with a universal hash function over GF($2^{128}$) called <strong>GHASH</strong> to produce a 128-bit Authentication Tag ($T$). If an attacker tampers with even a single bit of ciphertext or metadata, the tag verification fails and the entire message is safely rejected!</p>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 5 (Q41–Q50):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q41:</strong> AES operates on a fixed block size of strictly 128 bits (16 bytes).</li>
        <li><strong>Q42:</strong> AES key sizes are 128, 192, and 256 bits.</li>
        <li><strong>Q43:</strong> AES rounds are 10 (AES-128), 12 (AES-192), and 14 (AES-256).</li>
        <li><strong>Q44:</strong> The 4 round transformations are SubBytes (confusion), ShiftRows (diffusion), MixColumns (diffusion), and AddRoundKey (key injection).</li>
        <li><strong>Q45:</strong> MixColumns is skipped in the final round of AES.</li>
        <li><strong>Q46:</strong> ECB mode encrypts blocks independently, leaking data patterns; never use it.</li>
        <li><strong>Q47:</strong> CBC mode chains blocks using an Initialization Vector (IV).</li>
        <li><strong>Q48:</strong> CBC is vulnerable to Padding Oracle attacks (POODLE, BEAST).</li>
        <li><strong>Q49:</strong> CTR mode enables parallel encryption and random access read/write.</li>
        <li><strong>Q50:</strong> AES-GCM is the premier AEAD standard, generating an authentication tag via GHASH.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 5</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q41–Q50) on AES Architecture, Round Transformations & Cipher Modes.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="4" onclick="window.openMCQForSpread(4)">
          Start Quiz (Q41–Q50) &rarr;
        </button>
      </div>
    </div>
      `
    }
  }
];

