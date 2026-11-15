// Spreads Part 1: Spreads 1 to 5 (Pages 1 to 10)
module.exports = [
  // SPREAD 1 (Pages 1–2): Topic 1: CIA Triad & Core InfoSec Principles
  {
    spreadId: 0,
    left: {
      pageNumber: 1,
      runningHead: "CH. 1 • CIA TRIAD & SECURITY PRINCIPLES",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 1 • Information Security Foundations</span>
      <h2>The Confidentiality, Integrity & Availability (CIA) Triad</h2>
    </div>
    <p>Information security is the discipline of protecting data and information systems from unauthorized access, disruption, modification, or destruction. All international cybersecurity frameworks (ISO 27001, NIST SP 800-53) are built upon the <strong>CIA Triad</strong>:</p>

    <div class="section-block">
      <span class="section-label">1. The Three Pillars of the CIA Triad (Q1, Q2, Q3)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Confidentiality (Q1)</span>
            <span class="statute-tag">Privacy & Secrecy</span>
          </div>
          <p><strong>Core Concept:</strong> Guarantees that sensitive data is accessible and readable <em>strictly by authorized entities</em> and protected from unauthorized disclosure.</p>
          <p><strong>Analogy:</strong> A locked bank safe deposit box or sealed registered letter.</p>
          <p><strong>Enforcement Controls:</strong> Symmetric encryption (AES-256), Asymmetric cryptography (RSA), Access Control Lists (ACLs), data classification.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Integrity (Q2)</span>
            <span class="statute-tag">Accuracy & Wholeness</span>
          </div>
          <p><strong>Core Concept:</strong> Guarantees that information has <em>not been altered, tampered with, corrupted, or fabricated</em> during transit or storage.</p>
          <p><strong>Analogy:</strong> A tamper-evident holographic seal on a pharmaceutical bottle.</p>
          <p><strong>Enforcement Controls:</strong> Cryptographic hash functions (SHA-256, SHA-3), HMAC message authentication codes, digital signatures.</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">Availability (Q3)</span>
            <span class="statute-tag">Reliable Access</span>
          </div>
          <p><strong>Core Concept:</strong> Guarantees that computing systems, network infrastructure, and data remain <em>fully operable and reachable</em> by authorized users on demand.</p>
          <p><strong>Analogy:</strong> An emergency uninterruptible power generator in a hospital ICU.</p>
          <p><strong>Enforcement Controls:</strong> Hardware redundancy (RAID), high-availability load balancers, regular off-site backups, robust DDoS defense.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Security Control Classifications (Q4)</span>
      <p>Security mechanisms are deployed across three functional categories:</p>
      <ul>
        <li><strong>Preventive Controls (Q4):</strong> Actively stop a security incident from occurring (e.g. firewalls, encryption, biometric locks, IPS).</li>
        <li><strong>Detective Controls:</strong> Discover, identify, and alert on an ongoing incident or violation (e.g. IDS, security audits, CCTV, motion sensors).</li>
        <li><strong>Corrective Controls:</strong> Restore systems and mitigate damage after an incident occurs (e.g. disaster recovery backups, incident response patches).</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q1–Q4):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Confidentiality (Q1):</strong> Guarding against unauthorized disclosure of data.</li>
        <li><strong>Integrity (Q2):</strong> Guarding against unauthorized modification, tampering, or deletion of data.</li>
        <li><strong>Availability (Q3):</strong> Ensuring authorized users have timely, reliable access to assets on request.</li>
        <li><strong>Preventive Controls (Q4):</strong> Security controls (firewalls, IPS) designed to block attacks before they succeed.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 2,
      runningHead: "CH. 1 • DEFENSE-IN-DEPTH & KERCKHOFFS",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Core Architectural Principles</span>
      <h2>Defense-in-Depth, Kerckhoffs's Principle & Risk Foundations</h2>
    </div>
    <p>Securing enterprise architecture requires adopting proven architectural tenets rather than relying on brittle, isolated security tools.</p>

    <div class="section-block">
      <span class="section-label">1. Defense-in-Depth & Architectural Principles (Q5, Q8, Q9)</span>
      <ul>
        <li><strong>Defense-in-Depth (Layered Security) (Q5):</strong> Never rely on a single defensive barrier! Multiple concentric layers of overlapping controls (perimeter firewall &rarr; network segmentation &rarr; endpoint EDR &rarr; database encryption) ensure that if one layer fails, subsequent layers prevent breach.</li>
        <li><strong>Principle of Least Privilege (PoLP) (Q8):</strong> Users and software processes must only be granted the absolute minimum privileges necessary to perform authorized duties. Eliminates unnecessary root/administrator access.</li>
        <li><strong>Separation of Duties (Dual Control) (Q9):</strong> Divides critical, high-risk responsibilities between multiple people (e.g., two authorized officers required to execute a $10M wire transfer) to eliminate single points of fraud or sabotage.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. Kerckhoffs's Principle & Shannon's Maxim (Q6)</span>
      <div class="alert-box">
        <strong>Kerckhoffs's Principle (1883) (Q6):</strong>
        <p style="font-weight: 600; color: #1e3a8a; margin: 4px 0;">"A cryptographic system must remain secure even if everything about the design, algorithm, and mathematical implementation is public knowledge—security must depend exclusively on the secrecy of the cryptographic key!"</p>
        <p>In 1949, Claude Shannon rephrased this as <strong>Shannon's Maxim</strong>: <em>"The enemy knows the system."</em> Proprietary secret algorithms ("Security through Obscurity") always fail once reverse-engineered. Open, public standards (AES, RSA, SHA-3) undergo decades of global peer review.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. Fundamental Risk Equation & Social Engineering (Q7, Q10)</span>
      <ul>
        <li><strong>Risk Equation (Q7):</strong> <code>Risk = Threat &times; Vulnerability &times; Impact</code> (or <code>Likelihood &times; Impact</code>). If Vulnerability is patched to zero, Risk becomes zero!</li>
        <li><strong>Phishing (Q10):</strong> A social engineering attack where adversaries use deceptive emails and forged domains to trick victims into revealing sensitive credentials or executing unauthorized actions.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q5–Q10):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Defense-in-Depth (Q5):</strong> Implementing multiple concentric layers of defensive controls.</li>
        <li><strong>Kerckhoffs's Principle (Q6):</strong> System security must rely strictly on the key, not on keeping the algorithm secret.</li>
        <li><strong>Risk Equation (Q7):</strong> Risk = Threat &times; Vulnerability &times; Impact.</li>
        <li><strong>Principle of Least Privilege (Q8):</strong> Granting only the bare minimum permissions necessary for legitimate work.</li>
        <li><strong>Separation of Duties (Q9):</strong> Splitting critical tasks among multiple individuals to prevent fraud.</li>
        <li><strong>Phishing (Q10):</strong> Social engineering attack using deceptive emails to steal credentials.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 1 (Q1–Q10)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on the CIA Triad, Kerckhoffs's Principle & Core InfoSec Foundations.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(0)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q1–Q10) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 2 (Pages 3–4): Topic 2: Authentication, Authorization & Non-Repudiation (AAA Framework)
  {
    spreadId: 1,
    left: {
      pageNumber: 3,
      runningHead: "CH. 2 • THE AAA SECURITY ARCHITECTURE",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 2 • Identity & Access Governance</span>
      <h2>The AAA Framework: Authentication, Authorization & Accounting</h2>
    </div>
    <p>Identity governance dictates who can enter a system and what actions they can perform. The <strong>AAA Framework</strong> provides the structural foundation for modern access control:</p>

    <div class="section-block">
      <span class="section-label">1. The Three Elements of AAA (Q11)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Authentication (AuthN)</span>
            <span class="statute-tag">"Who are you?"</span>
          </div>
          <p>Verifies the claimed identity of a user, process, or device before granting system entry (e.g. passwords, smart cards, fingerprints).</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Authorization (AuthZ)</span>
            <span class="statute-tag">"What can you do?"</span>
          </div>
          <p>Determines what resources, files, and commands an authenticated identity is permitted to access based on security policies (e.g. RBAC, ACLs).</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">Accounting / Auditing</span>
            <span class="statute-tag">"What did you do?"</span>
          </div>
          <p>Tracks and records user activity, login times, file changes, and resource consumption into tamper-evident audit logs for digital forensic review.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Authentication Factors & Multi-Factor Authentication (MFA) (Q12, Q13)</span>
      <p>Authentication credentials belong to four distinct factor categories:</p>
      <ul>
        <li><strong>Something You Know (Knowledge):</strong> Passwords, PINs, secret passphrases.</li>
        <li><strong>Something You Have (Possession):</strong> Hardware TOTP tokens (YubiKey), smart cards, mobile authenticator apps.</li>
        <li><strong>Something You Are (Inherence) (Q12):</strong> Biometric identifiers—fingerprints, retina/iris scans, facial geometry, voice recognition.</li>
        <li><strong>Somewhere You Are (Location):</strong> GPS coordinates, corporate IP geofencing.</li>
      </ul>
      <div class="alert-box">
        <strong>The Golden Rule of MFA (Q13):</strong>
        <p>True <strong>Multi-Factor Authentication (MFA)</strong> mandates using two or more <strong>DIFFERENT factor categories</strong> (e.g. a password + a hardware token). Entering a password and a PIN is only <em>two instances of something you know</em> and does NOT qualify as MFA!</p>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q11–Q13):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>AAA Initials (Q11):</strong> Authentication, Authorization, and Accounting (or Auditing).</li>
        <li><strong>Biometrics Factor (Q12):</strong> Fingerprints and facial recognition represent <strong>Something you are (Inherence)</strong>.</li>
        <li><strong>MFA Requirement (Q13):</strong> Must combine two or more independent factors from <strong>different categories</strong>.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 4,
      runningHead: "CH. 2 • AUTHORIZATION & NON-REPUDIATION",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Access Control Models & Legal Accountability</span>
      <h2>Authorization Models, Non-Repudiation & Audit Forensics</h2>
    </div>
    <p>Once identity is proven, access control models enforce system permissions, while non-repudiation guarantees legal and technical accountability.</p>

    <div class="section-block">
      <span class="section-label">1. Enterprise Authorization Models (Q14, Q15, Q16)</span>
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr>
              <th>Model Name</th>
              <th>How Access is Granted</th>
              <th>Primary Use Case & Characteristics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>RBAC (Role-Based) (Q14)</strong></td>
              <td>Permissions are assigned to <strong>job roles</strong> (e.g., "Doctor", "Auditor"), not users.</td>
              <td>Commercial enterprise standard; vastly simplifies access administration.</td>
            </tr>
            <tr>
              <td><strong>MAC (Mandatory) (Q15)</strong></td>
              <td>Enforced strictly by OS via <strong>security classification labels</strong> (Top Secret, Secret).</td>
              <td>Military & intelligence; resource owners cannot modify or grant permissions.</td>
            </tr>
            <tr>
              <td><strong>DAC (Discretionary)</strong></td>
              <td>The creator/owner of a file has full discretion to grant permissions to others.</td>
              <td>Standard UNIX/Windows file permissions (chmod, NTFS ACLs).</td>
            </tr>
            <tr>
              <td><strong>ABAC (Attribute-Based) (Q16)</strong></td>
              <td>Evaluates fine-grained dynamic attributes (user role, time, IP, device) via XACML.</td>
              <td>Next-generation cloud security; e.g. allow access only during working hours from corporate laptops.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Non-Repudiation & The Role of Asymmetric Signatures (Q17, Q18, Q19)</span>
      <ul>
        <li><strong>Non-Repudiation (Q17):</strong> The security service that provides indisputable mathematical proof that a sender sent a specific message or executed an action, preventing them from falsely denying it.</li>
        <li><strong>Why Symmetric Ciphers Fail (Q18):</strong> In symmetric cryptography, both Alice and Bob share the exact same key. If a message arrives, Alice can claim Bob created it! Symmetric keys CANNOT provide non-repudiation.</li>
        <li><strong>Asymmetric Digital Signatures (Q19):</strong> Because only the sender possesses their unique <strong>Private Signing Key</strong>, an asymmetric digital signature provides legally enforceable non-repudiation in courts of law.</li>
        <li><strong>Audit Logging in Forensics (Q20):</strong> Audit logs must be forwarded in real time to an immutable, centralized SIEM with <strong>NTP (Network Time Protocol) synchronization</strong> to ensure chronological timeline accuracy and prevent local root attackers from deleting evidence.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q14–Q20):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>RBAC (Q14):</strong> Assigns access permissions to organizational job roles rather than individuals.</li>
        <li><strong>MAC (Q15):</strong> Uses security clearances and labels; data owners cannot override central policy.</li>
        <li><strong>ABAC (Q16):</strong> Uses dynamic context policies (time, location, device health) via XACML.</li>
        <li><strong>Non-Repudiation (Q17):</strong> Guarantees a sender cannot deny having sent a message.</li>
        <li><strong>Symmetric Limitation (Q18):</strong> Shared keys mean either party could have created the data, eliminating non-repudiation.</li>
        <li><strong>Digital Signatures (Q19):</strong> Asymmetric signatures provide legal and technical non-repudiation.</li>
        <li><strong>NTP Centralized Logs (Q20):</strong> Ensures synchronized timestamps and prevents attackers from wiping evidence.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 2 (Q11–Q20)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on the AAA Framework, MFA Factors, Authorization Models & Non-Repudiation.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(1)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q11–Q20) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 3 (Pages 5–6): Topic 3: Concepts of Cryptography & Steganography
  {
    spreadId: 2,
    left: {
      pageNumber: 5,
      runningHead: "CH. 3 • CRYPTO VS STEGANOGRAPHY",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 3 • Data Concealment Concepts</span>
      <h2>Concepts of Cryptography vs. Steganography & Digital Watermarking</h2>
    </div>
    <p>Securing digital communications involves two distinct disciplines: obscuring the message content (<strong>Cryptography</strong>) versus concealing the existence of the communication channel itself (<strong>Steganography</strong>).</p>

    <div class="section-block">
      <span class="section-label">1. Cryptography vs. Steganography vs. Watermarking (Q21, Q22)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Cryptography (Q21)</span>
            <span class="statute-tag">"Secret Writing"</span>
          </div>
          <p>Scrambles plaintext into unintelligible ciphertext using mathematical algorithms and secret keys. The communication is obvious to observers, but unreadable without the key.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Steganography (Q21)</span>
            <span class="statute-tag">"Covered Writing"</span>
          </div>
          <p>Conceals the <em>very existence</em> of a secret payload inside an innocent-looking carrier medium (cover file). An eavesdropper sees only an ordinary picture or audio track.</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">Digital Watermarking (Q22)</span>
            <span class="statute-tag">Copyright & Integrity</span>
          </div>
          <p>Embeds an indelible ownership identifier directly into media (images, audio, video). Unlike steganography, watermarking prioritizes extreme robustness against removal or compression rather than covert data capacity.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Steganography Terminology & The Carrier Medium (Q23)</span>
      <ul>
        <li><strong>Cover Object (Carrier Medium) (Q23):</strong> The original innocent file (e.g., photo, MP3, WAV audio, video, or TCP packet) used to carry the concealed payload.</li>
        <li><strong>Embedded Message (Payload):</strong> The secret text or binary file to be hidden.</li>
        <li><strong>Stego-Object:</strong> The resulting file containing the hidden payload (looks identical to the cover object).</li>
        <li><strong>Stego-Key (Q28):</strong> A secret key or password that seeds a pseudorandom algorithm to scatter payload bits across non-sequential carrier locations, preventing unauthorized extraction.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q21–Q23):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Cryptography vs Steganography (Q21):</strong> Cryptography hides the meaning of a message; Steganography hides its very existence.</li>
        <li><strong>Digital Watermarking (Q22):</strong> Designed to prove copyright and ownership; must be robust against removal.</li>
        <li><strong>Cover Object (Q23):</strong> The innocent host file (carrier medium) holding the hidden secret data.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 6,
      runningHead: "CH. 3 • LSB EMBEDDING & CARRIER CHANNELS",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Data Hiding Mechanisms</span>
      <h2>Spatial LSB Insertion, Frequency Domain & Network Steganography</h2>
    </div>
    <p>Payload embedding modifies digital carrier representations in spatial, frequency, or network protocol domains.</p>

    <div class="section-block">
      <span class="section-label">1. Spatial Domain: Least Significant Bit (LSB) Insertion (Q24, Q25)</span>
      <p>In uncompressed raster images (BMP, lossless PNG), each pixel color is represented by byte values from 0 to 255:</p>
      <ul>
        <li><strong>LSB Substitution (Q24):</strong> Replaces the lowest-order bit (0th bit) of color bytes with a payload bit.</li>
        <li><strong>Human Visual System (HVS) Imperceptibility (Q25):</strong> Changing the LSB alters pixel intensity by at most 1/255th (less than 0.4%), making the alteration completely invisible to the human eye!</li>
        <li><strong>Capacity in 24-Bit RGB (Q25):</strong> Each pixel contains 3 bytes (Red, Green, Blue). Embedding 1 bit per color byte allows hiding <strong>3 bits of secret data per pixel</strong>. A 1920&times;1080 image can hide up to ~777 KB of data!</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. Frequency Domain (DCT) & Network Protocols (Q26, Q27)</span>
      <ul>
        <li><strong>Frequency Domain DCT (JPEG) (Q26):</strong> Lossy JPEG compression discards spatial LSBs. JPEG steganography (Jsteg, F5) embeds secret bits into the quantized <strong>Discrete Cosine Transform (DCT) coefficients</strong> of 8&times;8 pixel blocks, surviving compression.</li>
        <li><strong>Network Steganography (Q27):</strong> Hides covert data inside protocol headers: the <strong>TCP Initial Sequence Number (ISN)</strong>, <strong>IP Identification (IP ID)</strong>, or <strong>TCP Urgent Pointer</strong> fields.</li>
        <li><strong>The Steganographic Triangle (Q29):</strong> All steganography is governed by trade-offs between <strong>Payload Capacity</strong>, <strong>Invisibility (Imperceptibility)</strong>, and <strong>Robustness</strong> against distortion.</li>
        <li><strong>The Prisoners' Problem (Q30):</strong> Formulated by Gustavus Simmons in 1983, mathematically modeling steganography between two inmates communicating covertly under a watchful warden.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q24–Q30):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>LSB Insertion (Q24):</strong> Overwrites the least significant bit of color bytes in spatial images.</li>
        <li><strong>24-bit RGB Capacity (Q25):</strong> Hides <strong>3 bits per pixel</strong> (1 in R, 1 in G, 1 in B).</li>
        <li><strong>JPEG Frequency Steganography (Q26):</strong> Embeds secret bits into quantized <strong>DCT coefficients</strong>.</li>
        <li><strong>Network Steganography (Q27):</strong> Encodes data in <strong>TCP ISN</strong>, IP ID, or Urgent Pointer header fields.</li>
        <li><strong>Stego-Key (Q28):</strong> Password that pseudorandomly determines bit embedding positions.</li>
        <li><strong>Steganographic Trilemma (Q29):</strong> Capacity vs Invisibility vs Robustness.</li>
        <li><strong>Prisoners' Problem (Q30):</strong> Simmons's theoretical model of steganography.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 3 (Q21–Q30)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on Cryptography vs Steganography, LSB Insertion & Network Covert Channels.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(2)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q21–Q30) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 4 (Pages 7–8): Topic 4A: Symmetric Encryption: Stream vs Block & DES/3DES
  {
    spreadId: 3,
    left: {
      pageNumber: 7,
      runningHead: "CH. 4 • SYMMETRIC STREAM VS BLOCK CIPHERS",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 4 • Symmetric Cryptography</span>
      <h2>Stream Ciphers vs. Block Ciphers & Shannon's Principles</h2>
    </div>
    <p>In symmetric cryptography, both the sender and receiver share the exact same secret key to encrypt and decrypt data (<strong>Q31</strong>). Symmetric ciphers are divided into two fundamental architectures:</p>

    <div class="section-block">
      <span class="section-label">1. Stream Ciphers vs. Block Ciphers (Q32, Q33)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Stream Ciphers (Q32)</span>
            <span class="statute-tag">Continuous Stream</span>
          </div>
          <p><strong>Operation:</strong> Encrypts plaintext continuous <em>bit-by-bit</em> or <em>byte-by-byte</em> by XORing plaintext with a pseudorandom keystream generator: <code>Ciphertext = Plaintext XOR Keystream</code>.</p>
          <p><strong>Strengths:</strong> Near-zero latency, zero buffering required. Ideal for real-time audio/video calls.</p>
          <p><strong>Modern Standard (Q33):</strong> <strong>ChaCha20 (RFC 8439)</strong> uses 256-bit keys and Add-Rotate-XOR (ARX) operations, completely resistant to cache-timing attacks (replaces broken RC4).</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Block Ciphers (Q32)</span>
            <span class="statute-tag">Fixed Chunks</span>
          </div>
          <p><strong>Operation:</strong> Encrypts data in fixed-size blocks (e.g., 64-bit or 128-bit blocks) through iterative rounds of substitution and permutation.</p>
          <p><strong>Strengths:</strong> High diffusion; ideal for encrypting static files, databases, and disk storage.</p>
          <p><strong>Standards:</strong> <strong>DES</strong> (64-bit block), <strong>3DES</strong> (64-bit block), and <strong>AES</strong> (128-bit block).</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Claude Shannon's Twin Pillars: Confusion & Diffusion (Q35)</span>
      <ul>
        <li><strong>Confusion:</strong> Obscures the mathematical relationship between the secret key and ciphertext (implemented via non-linear <strong>Substitution Boxes or S-Boxes</strong>).</li>
        <li><strong>Diffusion:</strong> Spreads the statistical influence of a single plaintext bit across many ciphertext bits (the <strong>Avalanche Effect</strong>, implemented via Permutations and bit shifting).</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q31–Q35):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Symmetric Key (Q31):</strong> Uses a single shared secret key for encryption and decryption.</li>
        <li><strong>Stream vs Block (Q32):</strong> Stream encrypts bit-by-bit via XOR keystream; Block encrypts fixed-size chunks.</li>
        <li><strong>ChaCha20 (Q33):</strong> Modern ARX stream cipher immune to cache-timing attacks (RFC 8439).</li>
        <li><strong>Confusion & Diffusion (Q35):</strong> Confusion hides key relation via S-Boxes; Diffusion spreads bits via permutations.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 8,
      runningHead: "CH. 4 • DES, FEISTEL NETWORKS & 3DES",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Legacy Block Ciphers</span>
      <h2>Data Encryption Standard (DES), Feistel Networks & 3DES</h2>
    </div>
    <p>Standardized in 1977 as FIPS PUB 46, DES served as the global encryption standard for over two decades.</p>

    <div class="section-block">
      <span class="section-label">1. DES Architecture & Feistel Networks (Q34, Q36, Q37)</span>
      <ul>
        <li><strong>Block Size (Q34):</strong> Operates on strictly <strong>64-bit blocks</strong> of plaintext.</li>
        <li><strong>Effective Key Length (Q34):</strong> Raw key input is 64 bits, but <strong>8 bits are discarded as parity check bits</strong> (bits 8, 16, 24, 32, 40, 48, 56, 64), leaving an effective key length of strictly <strong>56 bits</strong> (2<sup>56</sup> keys).</li>
        <li><strong>Feistel Network (Q36, Q37):</strong> DES executes exactly <strong>16 Feistel rounds</strong>. The 64-bit block splits into Left (L) and Right (R) 32-bit halves. Decryption uses the <em>exact same hardware circuit</em>, simply reversing round subkey order (Key 16 down to Key 1)!</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. Double DES & The Meet-in-the-Middle Trap (Q38)</span>
      <div class="alert-box">
        <strong>Meet-in-the-Middle Attack (Q38):</strong>
        <p>Encrypting twice with two 56-bit keys (2DES) does NOT provide 2<sup>112</sup> security! Diffie and Hellman proved that precomputing forward encryption from plaintext and backward decryption from ciphertext reduces effective security to only <strong>2<sup>57</sup> operations</strong>, rendering Double DES completely broken!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. Triple DES (3DES) & The Sweet32 Flaw (Q39, Q40)</span>
      <ul>
        <li><strong>Encrypt-Decrypt-Encrypt (EDE) (Q39):</strong> Uses <code>C = E(K3, D(K2, E(K1, P)))</code>. Decrypting in the middle provides backward compatibility: when K1 = K2 = K3, middle Decrypt cancels first Encrypt, behaving as single DES.</li>
        <li><strong>Sweet32 Retirement (Q40):</strong> Because 3DES uses a tiny 64-bit block, Birthday collisions occur after encrypting 2<sup>32</sup> blocks (32 GB) in CBC mode (Sweet32 attack). NIST officially retired 3DES in 2023.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q36–Q40):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>DES Specifications (Q34):</strong> 64-bit block size and 56-bit effective key length (8 parity bits).</li>
        <li><strong>DES Architecture (Q36, Q37):</strong> Exactly 16 Feistel rounds; identical hardware for encryption and decryption.</li>
        <li><strong>Meet-in-the-Middle (Q38):</strong> Breaks 2DES in only <strong>2<sup>57</sup> operations</strong> instead of 2<sup>112</sup>.</li>
        <li><strong>3DES Operation (Q39):</strong> Encrypt-Decrypt-Encrypt (EDE) mode for backward compatibility.</li>
        <li><strong>Sweet32 Attack (Q40):</strong> 64-bit block collision vulnerability leading to 3DES retirement.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 4 (Q31–Q40)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on Symmetric Stream vs Block Ciphers, DES Feistel Architecture & 3DES.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(3)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q31–Q40) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 5 (Pages 9–10): Topic 4B: Symmetric Encryption: AES Architecture & Cipher Modes
  {
    spreadId: 4,
    left: {
      pageNumber: 9,
      runningHead: "CH. 5 • AES ARCHITECTURE & ROUNDS",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 5 • Advanced Block Ciphers</span>
      <h2>Advanced Encryption Standard (AES / FIPS 197) Architecture</h2>
    </div>
    <p>Selected by NIST in 2001 (designed by Joan Daemen and Vincent Rijmen as Rijndael), the <strong>Advanced Encryption Standard (AES)</strong> is a Substitution-Permutation Network operating on a 4&times;4 byte grid.</p>

    <div class="section-block">
      <span class="section-label">1. Block Size, Key Lengths & Transformation Rounds (Q41, Q42)</span>
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr>
              <th>AES Variant</th>
              <th>Block Size (Q41)</th>
              <th>Key Length</th>
              <th>Number of Rounds (Q42)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>AES-128</strong></td>
              <td><strong>128 bits (16 bytes)</strong></td>
              <td>128 bits (16 bytes)</td>
              <td><strong>10 rounds</strong></td>
            </tr>
            <tr>
              <td><strong>AES-192</strong></td>
              <td><strong>128 bits (16 bytes)</strong></td>
              <td>192 bits (24 bytes)</td>
              <td><strong>12 rounds</strong></td>
            </tr>
            <tr>
              <td><strong>AES-256</strong></td>
              <td><strong>128 bits (16 bytes)</strong></td>
              <td>256 bits (32 bytes)</td>
              <td><strong>14 rounds</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="caption"><em>Golden Rule (Q41):</em> In AES, the block size is ALWAYS 128 bits regardless of key length! Each additional 64 bits of key adds exactly 2 rounds.</p>
    </div>

    <div class="section-block">
      <span class="section-label">2. The 4 Round Transformations in AES (Q43, Q44)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">SubBytes (Q43)</span>
            <span class="statute-tag">Non-Linear Confusion</span>
          </div>
          <p>Replaces each byte using an 8-bit invertible S-Box constructed from multiplicative inverses over Galois Field GF(2<sup>8</sup>). <strong>The sole non-linear step in AES!</strong></p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">ShiftRows</span>
            <span class="statute-tag">Permutation</span>
          </div>
          <p>Cyclically shifts rows left: Row 0 shifts 0, Row 1 shifts 1, Row 2 shifts 2, Row 3 shifts 3 bytes.</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">MixColumns (Q44)</span>
            <span class="statute-tag">Linear Diffusion</span>
          </div>
          <p>Multiplies 4-byte columns by a fixed matrix over GF(2<sup>8</sup>). <strong>CRITICAL EXAM TRICK: OMITTED in the final round!</strong></p>
        </div>

        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">AddRoundKey</span>
            <span class="statute-tag">Key Mixing</span>
          </div>
          <p>Bitwise XORs the 128-bit state array with the derived 128-bit round subkey.</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q41–Q44):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>AES Block Size (Q41):</strong> Strictly 128 bits (16 bytes).</li>
        <li><strong>AES Rounds (Q42):</strong> AES-128 = 10 rounds; AES-192 = 12 rounds; AES-256 = 14 rounds.</li>
        <li><strong>SubBytes (Q43):</strong> Sole non-linear transformation in AES providing Confusion via S-box.</li>
        <li><strong>MixColumns (Q44):</strong> Linear diffusion over GF(2<sup>8</sup>); <strong>omitted in the final round</strong>.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 10,
      runningHead: "CH. 5 • BLOCK CIPHER MODES OF OPERATION",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Block Cipher Operational Modes</span>
      <h2>ECB, CBC, CTR & Authenticated Encryption (GCM)</h2>
    </div>
    <p>Block cipher modes govern how multi-block messages are securely processed:</p>

    <div class="section-block">
      <span class="section-label">1. ECB vs. CBC Operational Modes (Q45, Q46, Q47)</span>
      <div class="statutory-grid">
        <div class="statute-card card-penalty">
          <div class="statute-header">
            <span class="statute-section">ECB Mode (Q45)</span>
            <span class="statute-tag badge-penalty">Insecure Pattern Leaker</span>
          </div>
          <p>Encrypts each 128-bit block independently with the key, with <strong>NO Initialization Vector (IV)</strong>. Identical plaintext blocks produce identical ciphertext blocks, visibly leaking data patterns (e.g., the ECB Penguin).</p>
        </div>

        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">CBC Mode (Q46, Q47)</span>
            <span class="statute-tag badge-teal">Chained with IV</span>
          </div>
          <p>First block is XORed with a random <strong>Initialization Vector (IV)</strong> (Q46); each subsequent block is XORed with the previous ciphertext block. Vulnerable to <strong>Padding Oracle Attacks (Q47)</strong> (POODLE, BEAST) if PKCS#7 error messages leak.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Modern High-Speed Modes: CTR & GCM (AEAD) (Q48, Q49, Q50)</span>
      <ul>
        <li><strong>CTR (Counter Mode) (Q48):</strong> Converts a block cipher into a stream cipher by encrypting sequential counters (Nonce + Counter). Enables <strong>multi-threaded parallel processing</strong> and random-access read/write!</li>
        <li><strong>AEAD Concept (Q49):</strong> Authenticated Encryption with Associated Data provides <strong>Confidentiality, Integrity, AND Authenticity</strong> in a single cryptographic pass.</li>
        <li><strong>AES-GCM (Galois/Counter Mode) (Q50):</strong> Combines CTR mode encryption with universal hashing over Galois Field GF(2<sup>128</sup>) called <strong>GHASH</strong>, generating a 128-bit authentication tag. Standard in TLS 1.3.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q45–Q50):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>ECB Flaw (Q45):</strong> Independent block encryption without IV leaks structural patterns.</li>
        <li><strong>CBC Randomization (Q46):</strong> First block XORed with an unpredictable Initialization Vector (IV).</li>
        <li><strong>Padding Oracle Attack (Q47):</strong> Decrypts CBC byte-by-byte via PKCS#7 padding error leakage.</li>
        <li><strong>CTR Mode (Q48):</strong> Encrypts counters; converts block cipher to stream; multi-threaded parallel.</li>
        <li><strong>AEAD Definition (Q49):</strong> Confidentiality, Integrity, and Authenticity in a single pass.</li>
        <li><strong>AES-GCM (Q50):</strong> Pairs CTR mode with GHASH (GF(2<sup>128</sup>)) to generate a 128-bit tag.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 5 (Q41–Q50)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on AES Rounds & Transformations, ECB Flaws, CBC & AES-GCM (AEAD).</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(4)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q41–Q50) &rarr;
      </button>
    </div>`
    }
  }
];

