// Part 1: Topics 1–5 (Spreads 0–9, Pages 1–20)
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
  // TOPIC 1: CONFIDENTIALITY, INTEGRITY, AND AVAILABILITY (CIA) TRIAD
  // =========================================================================
  // Spread 0: Pages 1 & 2
  {
    spreadId: 0,
    left: {
      pageNumber: 1,
      runningHead: 'TOPIC 1 • CIA TRIAD: CONFIDENTIALITY & INTEGRITY',
      content: `
    ${makeHeader(1, 'Confidentiality, Integrity, and Availability (CIA) Triad', 'Core Definitions & Pillars (Confidentiality & Integrity)', 1)}

    <div class="intro-abstract">
      <p><strong>Information Security (InfoSec)</strong> is the practice of protecting digital information and systems from unauthorized access, modification, disruption, or destruction. In cybersecurity and digital forensics, all security policies and controls are built upon the foundational <strong>CIA Triad</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Three Pillars of the CIA Triad</span>
      <p>The CIA Triad consists of three fundamental security goals:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Confidentiality (Secrecy) (Q1)</span>
            <span class="statute-tag">Privacy</span>
          </div>
          <p>• <strong>Goal:</strong> Ensuring that sensitive data is accessible <em>only</em> to authorized users, processes, or systems.<br>
          • <strong>Threats:</strong> Eavesdropping, shoulder surfing, packet sniffing, data exfiltration.<br>
          • <strong>Controls:</strong> Strong encryption (AES), file permissions (ACLs), multi-factor authentication (MFA).</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. Integrity (Accuracy) (Q2)</span>
            <span class="statute-tag">Trustworthiness</span>
          </div>
          <p>• <strong>Goal:</strong> Ensuring data is accurate, complete, and protected against unauthorized modification or deletion.<br>
          • <strong>Threats:</strong> Unauthorized edits, database tampering, malware altering files, man-in-the-middle attacks.<br>
          • <strong>Controls:</strong> Cryptographic hashes (SHA-256), digital signatures, file integrity monitoring (FIM).</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Real-World Forensic Application</span>
      <p>In digital forensics, <strong>Integrity</strong> is the most critical pillar. When police seize a hard drive or mobile phone, they must immediately compute its cryptographic hash (MD5/SHA-256). If the hash matches before and after analysis, it proves in court that the evidence was never altered!</p>
    </div>`
    },
    right: {
      pageNumber: 2,
      runningHead: 'TOPIC 1 • CIA TRIAD: AVAILABILITY & BREACHES',
      content: `
    ${makeHeader(1, 'Confidentiality, Integrity, and Availability (CIA) Triad', 'Availability, Security Trade-offs & Real-World Breaches', 2)}

    <div class="section-block">
      <span class="section-label">3. Pillar 3: Availability — Reliable Access (Q3)</span>
      <p><strong>Availability</strong> guarantees that authorized users have timely, uninterrupted access to systems, networks, and data whenever needed for legitimate operations.</p>
      <ul class="forensic-list">
        <li><strong>Threats to Availability:</strong> Denial of Service (DoS/DDoS) attacks, ransomware encrypting files, hardware crashes, power outages, and natural disasters.</li>
        <li><strong>Enforcement Controls:</strong> Redundant hardware (RAID), load balancers, uninterruptible power supplies (UPS), failover clusters, and regular off-site backups.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">4. Real-World Breach Examples (Exam Patterns)</span>
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">Confidentiality Breach</span>
            <span class="statute-tag">Data Leak</span>
          </div>
          <p>An attacker intercepts unencrypted Wi-Fi traffic or steals passwords from a database. Data secrecy is violated!</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Availability Breach</span>
            <span class="statute-tag">DoS Outage</span>
          </div>
          <p>A flood of fake packets overwhelms a police portal or hospital server, causing it to crash. Authorized users cannot access it!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">5. The Security vs Usability Trade-off</span>
      <p>Security and usability always exist in balance. Highly secure systems (complex 20-character passwords changing weekly, physical tokens, biometric scans) protect data but slow down users. Effective security finds the practical sweet spot.</p>
    </div>

    ${makeContinuation(1, 'CIA Triad', 'Defense-in-Depth, Kerckhoffs Principle & Controls', 0)}`
    }
  },

  // Spread 1: Pages 3 & 4
  {
    spreadId: 1,
    left: {
      pageNumber: 3,
      runningHead: 'TOPIC 1 • DEFENSE-IN-DEPTH & ZERO TRUST',
      content: `
    ${makeHeader(1, 'Confidentiality, Integrity, and Availability (CIA) Triad', 'Defense-in-Depth, Kerckhoffs Principle & Zero Trust', 3)}

    <div class="section-block">
      <span class="section-label">6. Kerckhoffs's Principle (Core Cryptographic Rule)</span>
      <p>Formulated by Auguste Kerckhoffs in 1883, this principle states:</p>
      <div class="legal-quote-box">
        <p><em>"A cryptographic system should be secure even if everything about the system, except the secret key, is public knowledge."</em></p>
      </div>
      <p>• <strong>Security through Obscurity:</strong> Trying to hide how an algorithm works is bad engineering. Attackers can always reverse-engineer it.<br>
      • <strong>Modern Practice:</strong> Standards like AES and RSA are completely open and published. Security depends 100% on keeping the <strong>secret key</strong> safe!</p>
    </div>

    <div class="section-block">
      <span class="section-label">7. Defense-in-Depth (Layered Defense)</span>
      <p>No single security tool is 100% foolproof. Defense-in-depth uses multiple concentric layers of security so if one fails, the next stops the attacker:</p>
      <ul class="forensic-list">
        <li><strong>Layer 1 (Perimeter):</strong> Firewalls, DDoS protection, edge routers.</li>
        <li><strong>Layer 2 (Network):</strong> VLAN segmentation, Intrusion Detection Systems (IDS/IPS).</li>
        <li><strong>Layer 3 (Endpoint):</strong> Antivirus, Endpoint Detection & Response (EDR), OS patching.</li>
        <li><strong>Layer 4 (Application):</strong> Input validation, Web Application Firewall (WAF).</li>
        <li><strong>Layer 5 (Data):</strong> Strong encryption at rest and in transit.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">8. Zero Trust Architecture</span>
      <p>Traditional networks trusted anyone inside the office. The modern <strong>Zero Trust</strong> model follows one simple rule: <em>"Never trust, always verify."</em> Every user and device must be authenticated and authorized for every single access request.</p>
    </div>`
    },
    right: {
      pageNumber: 4,
      runningHead: 'TOPIC 1 • SECURITY CONTROLS & EXAM TRAPS',
      content: `
    ${makeHeader(1, 'Confidentiality, Integrity, and Availability (CIA) Triad', 'Security Controls Classification & DSSSB Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">9. Security Controls Classification Matrix</span>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>Control Type</th>
            <th>Primary Objective</th>
            <th>Common Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Preventive</strong></td>
            <td>Stops an attack or unauthorized event before it happens</td>
            <td>Firewalls, encryption, strong passwords, biometrics, security guards</td>
          </tr>
          <tr>
            <td><strong>Detective</strong></td>
            <td>Identifies and alerts on an incident while or after it occurs</td>
            <td>CCTV cameras, motion sensors, IDS, audit logs, file integrity checkers</td>
          </tr>
          <tr>
            <td><strong>Corrective</strong></td>
            <td>Fixes the issue, repairs damage, and restores normal state</td>
            <td>Data backups, antivirus quarantine, disaster recovery plans, software patches</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">10. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Confidentiality (Q1):</strong> Focuses on secrecy; prevented by encryption and access lists.<br>
        • <strong>Integrity (Q2):</strong> Focuses on accuracy; prevented by hashing and digital signatures.<br>
        • <strong>Availability (Q3):</strong> Focuses on uptime; disrupted by DoS/DDoS and ransomware.<br>
        • <strong>Kerckhoffs's Principle:</strong> Only the key needs to be secret, not the algorithm!</p>
      </div>
    </div>

    ${makeQuizCTA(1, 'CIA Triad', 0)}`
    }
  },

  // =========================================================================
  // TOPIC 2: AUTHENTICATION, AUTHORIZATION & NON-REPUDIATION
  // =========================================================================
  // Spread 2: Pages 5 & 6
  {
    spreadId: 2,
    left: {
      pageNumber: 5,
      runningHead: 'TOPIC 2 • AAA FRAMEWORK & AUTHENTICATION',
      content: `
    ${makeHeader(2, 'Authentication, Authorization & Non-repudiation', 'The AAA Framework & Authentication Fundamentals', 1)}

    <div class="intro-abstract">
      <p>Controlling access to digital systems requires three sequential steps known as the <strong>AAA Framework</strong>: Authentication, Authorization, and Accounting. Together with <strong>Non-repudiation</strong>, they ensure complete accountability in information systems.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The AAA Framework Explained</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Authentication (Q11)</span>
            <span class="statute-tag">Who are you?</span>
          </div>
          <p>Verifying the claimed identity of a user or device.<br>
          • <em>Example:</em> Entering username and password, or scanning a fingerprint.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. Authorization</span>
            <span class="statute-tag">What can you do?</span>
          </div>
          <p>Determining what resources or actions an authenticated user is allowed to access.<br>
          • <em>Example:</em> A student can view grades, but only the professor can edit them.</p>
        </div>
      </div>
      <div class="statute-card card-amber" style="margin-top: 10px;">
        <div class="statute-header">
          <span class="statute-section">3. Accounting (Auditing)</span>
          <span class="statute-tag">What did you do?</span>
        </div>
        <p>Logging and tracking every action taken by the user, recording timestamps, files opened, commands executed, and session duration for forensic investigation.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Authentication vs Authorization Distinction</span>
      <p>Authentication <strong>always happens first</strong>. Once the system knows who you are, authorization checks your permission list to decide what you can touch.</p>
    </div>`
    },
    right: {
      pageNumber: 6,
      runningHead: 'TOPIC 2 • MULTI-FACTOR AUTHENTICATION (MFA)',
      content: `
    ${makeHeader(2, 'Authentication, Authorization & Non-repudiation', 'Multi-Factor Authentication (MFA) Paradigms', 2)}

    <div class="section-block">
      <span class="section-label">3. The Three Classic Authentication Factors (Q12)</span>
      <p>True Multi-Factor Authentication requires at least two factors from <strong>different categories</strong>. Using two passwords is NOT MFA!</p>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>Factor Category</th>
            <th>Description</th>
            <th>Common Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Something You Know</strong></td>
            <td>Knowledge factor stored in human memory</td>
            <td>Passwords, PINs, secret security questions, passphrases</td>
          </tr>
          <tr>
            <td><strong>Something You Have</strong></td>
            <td>Possession factor (physical or digital item)</td>
            <td>Smart cards, hardware tokens (YubiKey), SMS OTP, authenticator app</td>
          </tr>
          <tr>
            <td><strong>Something You Are</strong></td>
            <td>Inherent biological or biometric factor</td>
            <td>Fingerprint, iris scan, retina scan, facial recognition</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">4. Additional Modern Factors</span>
      <ul class="forensic-list">
        <li><strong>Somewhere You Are (Location):</strong> GPS location, IP geofencing (blocking logins from foreign countries).</li>
        <li><strong>Something You Do (Behavior):</strong> Typing rhythm, mouse movement speed, gait analysis.</li>
      </ul>
    </div>

    ${makeContinuation(2, 'AAA & Non-Repudiation', 'Authorization Models & Non-Repudiation Architecture', 1)}`
    }
  },

  // Spread 3: Pages 7 & 8
  {
    spreadId: 3,
    left: {
      pageNumber: 7,
      runningHead: 'TOPIC 2 • AUTHORIZATION MODELS (RBAC, DAC, MAC)',
      content: `
    ${makeHeader(2, 'Authentication, Authorization & Non-repudiation', 'Access Control Models: DAC, MAC, RBAC & ABAC', 3)}

    <div class="section-block">
      <span class="section-label">5. Four Standard Authorization Models</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. DAC (Discretionary)</span>
            <span class="statute-tag">Owner Decides</span>
          </div>
          <p>• The file owner has full discretion to grant or revoke read/write access to others.<br>
          • <em>Examples:</em> Windows NTFS folder permissions, Linux file permissions (chmod).</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. MAC (Mandatory)</span>
            <span class="statute-tag">Strict Security Labels</span>
          </div>
          <p>• The operating system enforces access based on classification levels (Top Secret, Secret, Confidential).<br>
          • Users cannot share files freely. Used in military and intelligence environments.</p>
        </div>
      </div>
      <div class="statutory-grid" style="margin-top: 10px;">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">3. RBAC (Role-Based)</span>
            <span class="statute-tag">Job Role</span>
          </div>
          <p>• Permissions are assigned to job roles (e.g., Doctor, Nurse, Auditor), not directly to people.<br>
          • Most common model used in modern enterprise networks.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">4. ABAC (Attribute-Based)</span>
            <span class="statute-tag">Dynamic Context</span>
          </div>
          <p>• Evaluates attributes of the user, resource, time, and location dynamically before granting access.</p>
        </div>
      </div>
    </div>`
    },
    right: {
      pageNumber: 8,
      runningHead: 'TOPIC 2 • NON-REPUDIATION & EXAM TRAPS',
      content: `
    ${makeHeader(2, 'Authentication, Authorization & Non-repudiation', 'Non-repudiation Architecture & DSSSB Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">6. What is Non-repudiation? (Q13)</span>
      <p><strong>Non-repudiation</strong> provides undeniable cryptographic proof that an action or communication took place, ensuring that the sender cannot falsely deny having sent the message, and the recipient cannot deny having received it.</p>
      <div class="legal-quote-box">
        <p><strong>Golden Rule:</strong> Symmetric encryption CANNOT provide non-repudiation because both parties share the exact same key. Non-repudiation requires <strong>Asymmetric Public-Key Cryptography</strong> with a <strong>Digital Signature</strong>!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">7. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Authentication vs Authorization:</strong> Authentication confirms identity; Authorization checks permissions.<br>
        • <strong>MFA Requirement (Q12):</strong> Must combine at least 2 distinct factors (e.g., Password + OTP). Two passwords is NOT MFA!<br>
        • <strong>Non-repudiation (Q13):</strong> Sender signs with their <em>Private Key</em>; verified using their <em>Public Key</em>.<br>
        • <strong>Indian IT Act:</strong> Digital signatures have full legal validity under Section 3 of the IT Act, 2000.</p>
      </div>
    </div>

    ${makeQuizCTA(2, 'Authentication & Authorization', 1)}`
    }
  },

  // =========================================================================
  // TOPIC 3: CONCEPTS OF CRYPTOGRAPHY & STEGANOGRAPHY
  // =========================================================================
  // Spread 4: Pages 9 & 10
  {
    spreadId: 4,
    left: {
      pageNumber: 9,
      runningHead: 'TOPIC 3 • CRYPTO VS STEGANOGRAPHY',
      content: `
    ${makeHeader(3, 'Concepts of Cryptography & Steganography', 'Concealing Content vs. Concealing Existence', 1)}

    <div class="intro-abstract">
      <p>Both cryptography and steganography protect sensitive communications, but they operate on completely different principles. Understanding their distinction is a favorite topic in DSSSB cyber forensic examinations.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Core Distinction: Cryptography vs Steganography (Q21)</span>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Cryptography</th>
            <th>Steganography</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Primary Objective</strong></td>
            <td>Hiding the <strong>meaning</strong> of the message (Confidentiality)</td>
            <td>Hiding the <strong>existence</strong> of the communication (Invisibility)</td>
          </tr>
          <tr>
            <td><strong>Appearance</strong></td>
            <td>Produces scrambled ciphertext; obvious that a secret exists</td>
            <td>Produces normal-looking innocent cover media (image, audio, video)</td>
          </tr>
          <tr>
            <td><strong>Attacker Awareness</strong></td>
            <td>Adversary knows data is encrypted and tries to decrypt it</td>
            <td>Adversary does not suspect any secret data is even present!</td>
          </tr>
          <tr>
            <td><strong>Common Standard</strong></td>
            <td>AES, RSA, DES, ChaCha20</td>
            <td>Least Significant Bit (LSB) insertion, DCT embedding</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. Steganography Terminology</span>
      <ul class="forensic-list">
        <li><strong>Cover Medium:</strong> The original innocent file (e.g., photo, MP3 audio, video) used to hide data.</li>
        <li><strong>Stego-Object (Stego-Medium):</strong> The resulting file after the secret data has been embedded inside it.</li>
        <li><strong>Payload:</strong> The hidden secret message or file concealed within the cover.</li>
        <li><strong>Stego-Key:</strong> An optional password or secret key used to scramble or locate the embedded bits.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 10,
      runningHead: 'TOPIC 3 • SPATIAL DOMAIN LSB STEGANOGRAPHY',
      content: `
    ${makeHeader(3, 'Concepts of Cryptography & Steganography', 'Spatial Domain: Least Significant Bit (LSB) Embedding', 2)}

    <div class="section-block">
      <span class="section-label">3. How LSB Steganography Works (Q22)</span>
      <p>In standard 24-bit RGB images, each pixel consists of 3 bytes (Red, Green, Blue), with values from 0 to 255. In binary, the rightmost bit is the <strong>Least Significant Bit (LSB)</strong>, which carries a value of only 1.</p>
      <p>Modifying this bit alters the color shade so slightly that the human eye cannot perceive any difference at all!</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">LSB Example (Embedding 1 Bit)</span>
          <span class="statute-tag">Binary Bit Substitution</span>
        </div>
        <p>• Original Pixel Byte: <code>1100100<strong>0</strong></code> (Color value: 200)<br>
        • Secret Bit to Hide: <code><strong>1</strong></code><br>
        • Modified Pixel Byte: <code>1100100<strong>1</strong></code> (Color value: 201)<br>
        • <em>Visual Difference:</em> Exactly 1 unit out of 255 — completely invisible to human vision!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. LSB Image Capacity Formula (Plain English)</span>
      <div class="legal-quote-box">
        <p><strong>Maximum Hidden Capacity (in Bytes) = (Width &times; Height &times; Color Channels) / 8</strong></p>
      </div>
      <p>• For a 1920 &times; 1080 RGB image (3 channels):<br>
      Total bytes = 1920 &times; 1080 &times; 3 = 6,220,800 bytes.<br>
      1 LSB bit per byte = 6,220,800 bits = <strong>777,600 bytes (roughly 777 KB)</strong> of secret data can be hidden in a single picture!</p>
    </div>

    ${makeContinuation(3, 'Concepts of Crypto & Stego', 'Transform Domain, Digital Watermarking & Trilemma', 2)}`
    }
  },

  // Spread 5: Pages 11 & 12
  {
    spreadId: 5,
    left: {
      pageNumber: 11,
      runningHead: 'TOPIC 3 • TRANSFORM DOMAIN & WATERMARKING',
      content: `
    ${makeHeader(3, 'Concepts of Cryptography & Steganography', 'Transform Domain Steganography & Digital Watermarking', 3)}

    <div class="section-block">
      <span class="section-label">5. Transform Domain Steganography</span>
      <p>While spatial LSB directly edits pixel bytes, <strong>Transform Domain</strong> techniques hide data inside mathematical frequency coefficients. This makes the hidden data survive image compression and resizing:</p>
      <ul class="forensic-list">
        <li><strong>Discrete Cosine Transform (DCT):</strong> Used in JPEG images. Data is embedded into the middle-frequency coefficients.</li>
        <li><strong>Discrete Wavelet Transform (DWT):</strong> Used in modern image formats (JPEG 2000), offering high resistance against cropping and filtering.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">6. Digital Watermarking (Copyright & Tamper Detection)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Robust Watermark</span>
            <span class="statute-tag">Copyright Protection</span>
          </div>
          <p>Designed to survive aggressive image modifications, compression, cropping, and printing. Proves ownership in court.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Fragile Watermark</span>
            <span class="statute-tag">Tamper Evidence</span>
          </div>
          <p>Destroys itself if even a single pixel is altered. Proves in court that digital evidence was modified after collection!</p>
        </div>
      </div>
    </div>`
    },
    right: {
      pageNumber: 12,
      runningHead: 'TOPIC 3 • THE STEGO TRILEMMA & EXAM TRAPS',
      content: `
    ${makeHeader(3, 'Concepts of Cryptography & Steganography', 'The Steganography Trilemma & DSSSB Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">7. The Steganographic Trilemma</span>
      <p>Every steganographic system balances three competing trade-offs:</p>
      <ul class="forensic-list">
        <li><strong>1. Capacity:</strong> How much payload data can be embedded in the file.</li>
        <li><strong>2. Robustness:</strong> Ability of the hidden data to survive compression, editing, or transmission noise.</li>
        <li><strong>3. Invisibility (Undetectability):</strong> Statistical imperceptibility against steganalysis detection tools.</li>
      </ul>
      <p>Increasing capacity degrades invisibility; increasing robustness reduces capacity!</p>
    </div>

    <div class="section-block">
      <span class="section-label">8. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Crypto vs Stego (Q21):</strong> Cryptography hides the <em>meaning</em>; Steganography hides the <em>existence</em>.<br>
        • <strong>LSB Method (Q22):</strong> Changes the least significant bit (Bit 0); maximum color change is only 1 out of 255.<br>
        • <strong>JPEG Steganography:</strong> Uses Discrete Cosine Transform (DCT) frequency coefficients.<br>
        • <strong>Fragile Watermarking:</strong> Used specifically for detecting digital evidence tampering.</p>
      </div>
    </div>

    ${makeQuizCTA(3, 'Crypto & Steganography', 2)}`
    }
  },

  // =========================================================================
  // TOPIC 4: SYMMETRIC ALGORITHMS: STREAM VS BLOCK & DES/3DES
  // =========================================================================
  // Spread 6: Pages 13 & 14
  {
    spreadId: 6,
    left: {
      pageNumber: 13,
      runningHead: 'TOPIC 4 • SYMMETRIC CIPHERS & SHANNON PILLARS',
      content: `
    ${makeHeader(4, 'Symmetric and Asymmetric algorithms: Symmetric (Stream vs Block & DES)', 'Symmetric Foundations: Stream vs. Block Ciphers', 1)}

    <div class="intro-abstract">
      <p><strong>Symmetric Cryptography</strong> relies on a single shared secret key for both encryption and decryption. Both communicating parties must have the exact same key beforehand.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Stream Ciphers vs. Block Ciphers (Q31)</span>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>Characteristic</th>
            <th>Stream Ciphers</th>
            <th>Block Ciphers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Data Processing</strong></td>
            <td>Continuous bit-by-bit or byte-by-byte</td>
            <td>Fixed-size chunks called blocks (64 or 128 bits)</td>
          </tr>
          <tr>
            <td><strong>Basic Operation</strong></td>
            <td>Bitwise XOR with pseudorandom keystream</td>
            <td>Rounds of substitution (S-boxes) and permutation</td>
          </tr>
          <tr>
            <td><strong>Latency & Buffering</strong></td>
            <td>Near zero latency; no data buffering needed</td>
            <td>Must buffer an entire block before encrypting</td>
          </tr>
          <tr>
            <td><strong>Best Use Case</strong></td>
            <td>Real-time streaming (audio, video, VoIP)</td>
            <td>File storage, disk encryption, database records</td>
          </tr>
          <tr>
            <td><strong>Standard Examples</strong></td>
            <td>RC4 (broken), ChaCha20, Salsa20</td>
            <td>DES (64-bit), 3DES (64-bit), AES (128-bit)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. Claude Shannon's Twin Pillars (Confusion & Diffusion)</span>
      <p>In 1949, Claude Shannon established the two fundamental design principles of every secure block cipher:</p>
      <ul class="forensic-list">
        <li><strong>Confusion:</strong> Obscures the relationship between the key and the ciphertext. Implemented using non-linear <strong>Substitution Boxes (S-Boxes)</strong>.</li>
        <li><strong>Diffusion:</strong> Spreads the statistical influence of a single plaintext bit across many ciphertext bits. Implemented using <strong>Permutations (P-Boxes)</strong> or bit transpositions.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 14,
      runningHead: 'TOPIC 4 • DATA ENCRYPTION STANDARD (DES)',
      content: `
    ${makeHeader(4, 'Symmetric and Asymmetric algorithms: Symmetric (Stream vs Block & DES)', 'Data Encryption Standard (DES / FIPS 46) Architecture', 2)}

    <div class="section-block">
      <span class="section-label">3. DES Core Specifications (Q32, Q33)</span>
      <p>Standardized by NIST in 1977 as FIPS PUB 46 (derived from IBM Lucifer):</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Block Size: 64 Bits</span>
            <span class="statute-tag">Data Block</span>
          </div>
          <p>Encrypts exactly 64 bits (8 bytes) of plaintext at a time.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Key Length: 56 Bits (Q32)</span>
            <span class="statute-tag">Effective Key</span>
          </div>
          <p>Raw key input is 64 bits, but <strong>8 bits are discarded as parity bits</strong> (bits 8, 16, 24, 32, 40, 48, 56, 64). Effective key length is strictly <strong>56 bits</strong>!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. The Feistel Network Architecture (16 Rounds) (Q33)</span>
      <p>DES uses a <strong>16-round Feistel Network</strong>. It splits the 64-bit block into two 32-bit halves: Left (L) and Right (R):</p>
      <ul class="forensic-list">
        <li>For each round: Left half takes previous Right half; Right half takes previous Left half XORed with the Round Function output.</li>
        <li><strong>Feistel Decryption Advantage:</strong> Decryption uses the exact same hardware circuit—subkeys are simply fed in reverse order (Key 16 down to Key 1)!</li>
        <li><strong>DES S-Boxes:</strong> Contains 8 S-Boxes. Each S-Box takes <strong>6 input bits</strong> and outputs <strong>4 bits</strong> (compressing 48 bits down to 32 bits).</li>
      </ul>
    </div>

    ${makeContinuation(4, 'Symmetric Ciphers & DES', 'Double-DES Meet-in-the-Middle Attack & Triple-DES', 3)}`
    }
  },

  // Spread 7: Pages 15 & 16
  {
    spreadId: 7,
    left: {
      pageNumber: 15,
      runningHead: 'TOPIC 4 • 2DES MEET-IN-THE-MIDDLE & 3DES',
      content: `
    ${makeHeader(4, 'Symmetric and Asymmetric algorithms: Symmetric (Stream vs Block & DES)', 'Double DES Meet-in-the-Middle & Triple DES (3DES)', 3)}

    <div class="section-block">
      <span class="section-label">5. Double DES & The Meet-in-the-Middle Attack (Q34)</span>
      <p>To resist brute-force attacks, engineers tried encrypting twice with two different 56-bit keys: Ciphertext = Encrypt(Key 2, Encrypt(Key 1, Plaintext)). Developers expected 112 bits of security ($2^{112}$ keys).</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">The Meet-in-the-Middle Flaw (Diffie & Hellman, 1977)</span>
          <span class="statute-tag">Security Reduction</span>
        </div>
        <p>• <strong>Step 1:</strong> Encrypt Plaintext with all $2^{56}$ possible Key 1 values and store intermediate results in a lookup table.<br>
        • <strong>Step 2:</strong> Decrypt Ciphertext with all $2^{56}$ possible Key 2 values and check for a match in the table.<br>
        • <strong>Total Operations:</strong> $2^{56} + 2^{56} = 2^{57}$ operations (NOT $2^{112}$!).<br>
        • <strong>Verdict:</strong> Double DES is insecure and must never be used!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">6. Triple DES (3DES / TDEA)</span>
      <p>To overcome the Meet-in-the-Middle flaw, <strong>Triple DES</strong> uses an <strong>Encrypt-Decrypt-Encrypt (EDE)</strong> sequence:</p>
      <p><code>Ciphertext = Encrypt(Key 1, Decrypt(Key 2, Encrypt(Key 3, Plaintext)))</code></p>
      <p>• <strong>Why Decrypt in the middle?</strong> Backward compatibility! If Key 1 = Key 2 = Key 3, the middle Decrypt cancels the first Encrypt, leaving standard single DES!<br>
      • <strong>Key Lengths:</strong> 3-Key 3DES (168-bit key, 112-bit effective security); 2-Key 3DES (112-bit key, 80-bit effective security). Retired by NIST in 2023.</p>
    </div>`
    },
    right: {
      pageNumber: 16,
      runningHead: 'TOPIC 4 • SYMMETRIC EXAM TRAPS & NUMBERS',
      content: `
    ${makeHeader(4, 'Symmetric and Asymmetric algorithms: Symmetric (Stream vs Block & DES)', 'Key Numbers, Standards & DSSSB Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">7. Symmetric Key Count Formula</span>
      <p>In a network of $N$ users where every pair communicates securely using symmetric encryption:</p>
      <div class="legal-quote-box">
        <p><strong>Total Symmetric Keys Required = [N &times; (N - 1)] / 2</strong></p>
      </div>
      <p>• For 10 users: [10 &times; 9] / 2 = <strong>45 keys</strong>.<br>
      • For 1,000 users: [1,000 &times; 999] / 2 = <strong>499,500 keys</strong>! This is the fundamental "Key Distribution Problem" of symmetric cryptography.</p>
    </div>

    <div class="section-block">
      <span class="section-label">8. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Stream Cipher (Q31):</strong> Operates bit-by-bit or byte-by-byte via XOR (e.g., ChaCha20, RC4).<br>
        • <strong>DES Key Length (Q32):</strong> Exactly <strong>56 bits</strong> effective (64 bits raw minus 8 parity bits).<br>
        • <strong>DES Rounds (Q33):</strong> Exactly <strong>16 Feistel rounds</strong> with 8 S-boxes (6 bits in &rarr; 4 bits out).<br>
        • <strong>Double DES (Q34):</strong> Broken by Meet-in-the-Middle in $2^{57}$ steps, NOT $2^{112}$!<br>
        • <strong>3DES Sequence:</strong> Encrypt &rarr; Decrypt &rarr; Encrypt (EDE).</p>
      </div>
    </div>

    ${makeQuizCTA(4, 'Symmetric Ciphers & DES', 3)}`
    }
  },

  // =========================================================================
  // TOPIC 5: SYMMETRIC ALGORITHMS: AES & MODES OF OPERATION
  // =========================================================================
  // Spread 8: Pages 17 & 18
  {
    spreadId: 8,
    left: {
      pageNumber: 17,
      runningHead: 'TOPIC 5 • ADVANCED ENCRYPTION STANDARD (AES)',
      content: `
    ${makeHeader(5, 'Symmetric and Asymmetric algorithms: Symmetric (AES & Modes of Operation)', 'Advanced Encryption Standard (AES / FIPS 197) Architecture', 1)}

    <div class="intro-abstract">
      <p>Selected by NIST in 2001 to replace the obsolete DES, the <strong>Advanced Encryption Standard (AES)</strong> was created by Belgian cryptographers Joan Daemen and Vincent Rijmen (Rijndael). Unlike DES, AES is a <strong>Substitution-Permutation Network (SPN)</strong>, not a Feistel cipher.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. AES Specifications Table (Q41, Q42)</span>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>AES Variant</th>
            <th>Key Length</th>
            <th>Block Size</th>
            <th>Number of Rounds</th>
            <th>Security Classification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>AES-128</strong></td>
            <td>128 bits (16 bytes)</td>
            <td><strong>128 bits</strong></td>
            <td><strong>10 rounds</strong></td>
            <td>Enterprise Standard / Approved</td>
          </tr>
          <tr>
            <td><strong>AES-192</strong></td>
            <td>192 bits (24 bytes)</td>
            <td><strong>128 bits</strong></td>
            <td><strong>12 rounds</strong></td>
            <td>US Govt Classified SECRET</td>
          </tr>
          <tr>
            <td><strong>AES-256</strong></td>
            <td>256 bits (32 bytes)</td>
            <td><strong>128 bits</strong></td>
            <td><strong>14 rounds</strong></td>
            <td>TOP SECRET / Quantum-Resistant</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. Critical Architectural Fact</span>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Fixed Block Size: 128 Bits (Q41)</span>
          <span class="statute-tag">4x4 State Array</span>
        </div>
        <p>In all versions of AES (AES-128, AES-192, AES-256), the block size is <strong>ALWAYS 128 bits (16 bytes)</strong> organized as a 4&times;4 matrix of bytes called the <strong>State Array</strong>! Only the key length and number of rounds change.</p>
      </div>
    </div>`
    },
    right: {
      pageNumber: 18,
      runningHead: 'TOPIC 5 • THE 4 AES ROUND TRANSFORMATIONS',
      content: `
    ${makeHeader(5, 'Symmetric and Asymmetric algorithms: Symmetric (AES & Modes of Operation)', 'The 4 Round Transformations in AES', 2)}

    <div class="section-block">
      <span class="section-label">3. The 4 Iterative Round Operations (Q43)</span>
      <p>In every round (except the final round), AES transforms the 4&times;4 State Array using four distinct steps:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. SubBytes (Confusion)</span>
            <span class="statute-tag">Non-linear S-Box</span>
          </div>
          <p>Replaces each byte independently with another byte using an 8-bit S-Box. Provides non-linear confusion.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. ShiftRows (Diffusion)</span>
            <span class="statute-tag">Row Shifting</span>
          </div>
          <p>Circularly shifts rows: Row 0 shifts 0 bytes, Row 1 shifts 1 byte, Row 2 shifts 2 bytes, Row 3 shifts 3 bytes.</p>
        </div>
      </div>
      <div class="statutory-grid" style="margin-top: 10px;">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">3. MixColumns (Diffusion)</span>
            <span class="statute-tag">Column Mixing</span>
          </div>
          <p>Multiplies each column by a fixed matrix over Galois Field GF(2^8). <em>Note: MixColumns is omitted in the final round!</em></p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">4. AddRoundKey (Key XOR)</span>
            <span class="statute-tag">Round Subkey</span>
          </div>
          <p>Bitwise XORs each byte of the State Array with a 128-bit round subkey generated from the master key schedule.</p>
        </div>
      </div>
    </div>

    ${makeContinuation(5, 'AES & Operational Modes', 'Block Cipher Modes: ECB vs CBC & Authenticated Modes (GCM)', 4)}`
    }
  },

  // Spread 9: Pages 19 & 20
  {
    spreadId: 9,
    left: {
      pageNumber: 19,
      runningHead: 'TOPIC 5 • BLOCK CIPHER MODES OF OPERATION',
      content: `
    ${makeHeader(5, 'Symmetric and Asymmetric algorithms: Symmetric (AES & Modes of Operation)', 'Block Cipher Operational Modes: ECB vs. CBC', 3)}

    <div class="section-block">
      <span class="section-label">4. Why Block Cipher Modes Exist</span>
      <p>AES encrypts only a single 128-bit block. To encrypt files or network messages larger than 128 bits, a <strong>Mode of Operation</strong> is required.</p>
    </div>

    <div class="section-block">
      <span class="section-label">5. ECB vs. CBC Modes (Q44)</span>
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">ECB (Electronic Codebook)</span>
            <span class="statute-tag">DANGEROUS / INSECURE</span>
          </div>
          <p>• Each block of plaintext is encrypted independently with the key.<br>
          • <strong>Fatal Flaw:</strong> Identical plaintext blocks produce <em>identical ciphertext blocks</em>! Completely preserves image patterns (e.g., Linux Tux penguin silhouette).<br>
          • <strong>Rule:</strong> Never use ECB for messages larger than 1 block!</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">CBC (Cipher Block Chaining)</span>
            <span class="statute-tag">Chained Blocks</span>
          </div>
          <p>• Each plaintext block is XORed with the preceding ciphertext block before encryption.<br>
          • <strong>Initialization Vector (IV):</strong> Block 1 is XORed with a random, unpredictable IV to ensure identical plaintexts produce completely different ciphertexts.<br>
          • <strong>Vulnerability:</strong> Padding Oracle attacks (POODLE).</p>
        </div>
      </div>
    </div>`
    },
    right: {
      pageNumber: 20,
      runningHead: 'TOPIC 5 • STREAM MODES & EXAM TRAPS',
      content: `
    ${makeHeader(5, 'Symmetric and Asymmetric algorithms: Symmetric (AES & Modes of Operation)', 'Modern Modes: CTR, GCM (AEAD) & DSSSB Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">6. Modern Stream & Authenticated Modes</span>
      <ul class="forensic-list">
        <li><strong>CTR (Counter Mode):</strong> Converts a block cipher into a stream cipher. Encrypts successive counter values (Nonce + Counter) and XORs with plaintext. Enables fast parallel processing and random read/write access.</li>
        <li><strong>GCM (Galois/Counter Mode):</strong> Premier standard for <strong>Authenticated Encryption with Associated Data (AEAD)</strong>. Combines CTR mode confidentiality with message integrity authentication using a GHASH tag. Used in TLS 1.3 and IPsec.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">7. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>AES Block Size (Q41):</strong> Always exactly <strong>128 bits</strong> (16 bytes) for all AES variants!<br>
        • <strong>AES Rounds (Q42):</strong> AES-128 = 10 rounds; AES-192 = 12 rounds; AES-256 = 14 rounds.<br>
        • <strong>Round Transformations (Q43):</strong> SubBytes (confusion), ShiftRows (diffusion), MixColumns (diffusion - skipped in last round), AddRoundKey (key XOR).<br>
        • <strong>ECB Mode Flaw (Q44):</strong> Identical plaintext blocks produce identical ciphertext blocks; leaks structural patterns.<br>
        • <strong>GCM Mode:</strong> Provides both confidentiality AND message integrity (AEAD).</p>
      </div>
    </div>

    ${makeQuizCTA(5, 'AES & Cipher Modes', 4)}`
    }
  }
];
