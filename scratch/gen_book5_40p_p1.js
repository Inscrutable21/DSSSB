// Part 1: Topics 1–10 (Spreads 0–9, Pages 1–20)
// Exactly 2 Pages per Topic (1 Spread per Topic) = 40 Pages Total Architecture
// Intermediate Level: DSSSB Exam Focused, Clear, No Bloated Math

function makeHeader(topicNum, mainTitle, subTitle) {
  return `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC ${topicNum} • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">${mainTitle}</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: ${subTitle}</h3>
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
    ${makeHeader(1, 'Confidentiality, Integrity, and Availability (CIA) Triad', 'Core Definitions & The Three Pillars')}

    <div class="intro-abstract">
      <p><strong>Information Security (InfoSec)</strong> is the systematic practice of protecting digital information and computing systems from unauthorized access, modification, disruption, or destruction. All cybersecurity controls and forensic investigations are anchored in the foundational <strong>CIA Triad</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Three Pillars of the CIA Triad</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Confidentiality (Secrecy) (Q1)</span>
            <span class="statute-tag">Privacy</span>
          </div>
          <p>• <strong>Objective:</strong> Ensuring data is accessible <em>only</em> to authorized users, processes, and systems.<br>
          • <strong>Threats:</strong> Eavesdropping, packet sniffing, data exfiltration, shoulder surfing.<br>
          • <strong>Controls:</strong> Strong encryption (AES), Access Control Lists (ACLs), Multi-Factor Authentication.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. Integrity (Accuracy) (Q2)</span>
            <span class="statute-tag">Trustworthiness</span>
          </div>
          <p>• <strong>Objective:</strong> Protecting data from unauthorized modification, deletion, or tampering.<br>
          • <strong>Threats:</strong> File tampering, database modification, man-in-the-middle attacks.<br>
          • <strong>Controls:</strong> Cryptographic hashes (SHA-256), digital signatures, Message Authentication Codes (HMAC).</p>
        </div>
      </div>
      <div class="statute-card card-amber" style="margin-top: 10px;">
        <div class="statute-header">
          <span class="statute-section">3. Availability (Uptime) (Q3)</span>
          <span class="statute-tag">Reliable Access</span>
        </div>
        <p>• <strong>Objective:</strong> Ensuring timely, reliable access to systems, networks, and data for authorized users whenever needed.<br>
        • <strong>Threats:</strong> Denial of Service (DoS/DDoS) attacks, ransomware holding files hostage, hardware failures, power cuts.<br>
        • <strong>Controls:</strong> Hardware redundancy (RAID), load balancers, UPS backups, failover clusters, off-site backups.</p>
      </div>
    </div>`
    },
    right: {
      pageNumber: 2,
      runningHead: 'TOPIC 1 • CONTROLS, KERCKHOFFS & EXAM TRAPS',
      content: `
    ${makeHeader(1, 'Confidentiality, Integrity, and Availability (CIA) Triad', 'Security Controls, Kerckhoffs Principle & DSSSB Exam Traps')}

    <div class="section-block">
      <span class="section-label">2. Security Controls Classification Matrix</span>
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
            <td>Stops an attack before it happens</td>
            <td>Firewalls, encryption, biometrics, strong passwords</td>
          </tr>
          <tr>
            <td><strong>Detective</strong></td>
            <td>Identifies and alerts on an attack in progress</td>
            <td>CCTV cameras, IDS, audit logs, file integrity monitors</td>
          </tr>
          <tr>
            <td><strong>Corrective</strong></td>
            <td>Repairs damage and restores normal operations</td>
            <td>Data backups, antivirus quarantine, security patches</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">3. Kerckhoffs's Principle & Zero Trust</span>
      <p>• <strong>Kerckhoffs's Principle (1883):</strong> A cryptosystem must remain secure even if everything about the design is public—<strong>only the secret key must remain secret!</strong> Security through obscurity always fails.<br>
      • <strong>Zero Trust Architecture:</strong> <em>"Never trust, always verify."</em> Every user and device must be authenticated for every single access request.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Confidentiality (Q1):</strong> Secrecy; enforced by encryption and access lists.<br>
        • <strong>Integrity (Q2):</strong> Accuracy; enforced by hashing and digital signatures.<br>
        • <strong>Availability (Q3):</strong> Uptime; violated by DoS/DDoS and ransomware attacks.<br>
        • <strong>Forensic Rule:</strong> Evidence integrity is proven in court using cryptographic hash verification!</p>
      </div>
    </div>

    ${makeQuizCTA(1, 'CIA Triad', 0)}`
    }
  },

  // =========================================================================
  // TOPIC 2: AUTHENTICATION, AUTHORIZATION & NON-REPUDIATION
  // =========================================================================
  // Spread 1: Pages 3 & 4
  {
    spreadId: 1,
    left: {
      pageNumber: 3,
      runningHead: 'TOPIC 2 • AAA FRAMEWORK & MFA FACTORS',
      content: `
    ${makeHeader(2, 'Authentication, Authorization & Non-repudiation', 'The AAA Framework & Multi-Factor Authentication (MFA)')}

    <div class="intro-abstract">
      <p>Controlling access to information systems requires three sequential steps known as the <strong>AAA Framework</strong>: Authentication, Authorization, and Accounting. Together with <strong>Non-repudiation</strong>, they provide complete user accountability.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The AAA Framework (Q11)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Authentication</span>
            <span class="statute-tag">Who are you?</span>
          </div>
          <p>Verifying the claimed identity of a user (e.g., entering username and password, or scanning a fingerprint).</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. Authorization</span>
            <span class="statute-tag">What can you do?</span>
          </div>
          <p>Determining what files or resources an authenticated user is permitted to access. <em>Always happens after authentication!</em></p>
        </div>
      </div>
      <div class="statute-card card-amber" style="margin-top: 10px;">
        <div class="statute-header">
          <span class="statute-section">3. Accounting (Auditing)</span>
          <span class="statute-tag">What did you do?</span>
        </div>
        <p>Logging and tracking every user action with timestamps, files viewed, and commands run for forensic review.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Three Classic MFA Factors (Q12)</span>
      <p>True MFA requires at least <strong>two factors from different categories</strong> (two passwords is NOT MFA!):</p>
      <ul class="forensic-list">
        <li><strong>Something You Know:</strong> Passwords, PINs, secret security questions, passphrases.</li>
        <li><strong>Something You Have:</strong> Smart cards, SMS OTP, Authenticator app tokens, YubiKey hardware tokens.</li>
        <li><strong>Something You Are:</strong> Biometrics (fingerprint, iris scan, retina scan, facial recognition).</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 4,
      runningHead: 'TOPIC 2 • AUTHORIZATION MODELS & NON-REPUDIATION',
      content: `
    ${makeHeader(2, 'Authentication, Authorization & Non-repudiation', 'Access Control Models, Non-repudiation & DSSSB Exam Traps')}

    <div class="section-block">
      <span class="section-label">3. Four Standard Authorization Models</span>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Decision Authority</th>
            <th>Typical Environment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>DAC (Discretionary)</strong></td>
            <td>The resource owner decides who gets access</td>
            <td>Windows folder permissions, Linux chmod</td>
          </tr>
          <tr>
            <td><strong>MAC (Mandatory)</strong></td>
            <td>Operating system enforces strict classification labels</td>
            <td>Military & intelligence (Top Secret, Secret)</td>
          </tr>
          <tr>
            <td><strong>RBAC (Role-Based)</strong></td>
            <td>Permissions assigned to job roles (Doctor, Clerk)</td>
            <td>Enterprise networks and corporate systems</td>
          </tr>
          <tr>
            <td><strong>ABAC (Attribute-Based)</strong></td>
            <td>Dynamic policies based on user, time, and location</td>
            <td>Modern cloud and zero trust environments</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">4. What is Non-repudiation? (Q13)</span>
      <p><strong>Non-repudiation</strong> provides undeniable cryptographic proof that an action took place, ensuring that the sender cannot falsely deny sending a message.</p>
      <div class="legal-quote-box">
        <p><strong>Golden Rule:</strong> Symmetric encryption CANNOT provide non-repudiation because both parties share the exact same key. Non-repudiation requires <strong>Asymmetric Cryptography</strong> with a <strong>Digital Signature</strong>!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">5. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Sequence:</strong> Authentication (identity check) happens FIRST; Authorization (permission check) follows.<br>
        • <strong>MFA Requirement (Q12):</strong> Must combine at least 2 distinct factor categories (e.g., Password + OTP).<br>
        • <strong>Non-repudiation (Q13):</strong> Sender signs with their <em>Private Key</em>; verified using their <em>Public Key</em>.<br>
        • <strong>Indian IT Act:</strong> Digital signatures carry full legal evidentiary weight under Section 3 of the IT Act, 2000.</p>
      </div>
    </div>

    ${makeQuizCTA(2, 'Authentication & Authorization', 1)}`
    }
  },

  // =========================================================================
  // TOPIC 3: CONCEPTS OF CRYPTOGRAPHY & STEGANOGRAPHY
  // =========================================================================
  // Spread 2: Pages 5 & 6
  {
    spreadId: 2,
    left: {
      pageNumber: 5,
      runningHead: 'TOPIC 3 • CRYPTO VS STEGANOGRAPHY',
      content: `
    ${makeHeader(3, 'Concepts of Cryptography & Steganography', 'Concealing Content vs. Concealing Existence')}

    <div class="intro-abstract">
      <p>Both cryptography and steganography protect sensitive communications, but they operate on completely different principles. Understanding their core distinction is a favorite topic in DSSSB cyber forensic examinations.</p>
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
            <td><strong>Primary Goal</strong></td>
            <td>Hides the <strong>meaning</strong> of the message (Confidentiality)</td>
            <td>Hides the <strong>existence</strong> of the communication</td>
          </tr>
          <tr>
            <td><strong>Output Appearance</strong></td>
            <td>Produces scrambled ciphertext (obviously secret)</td>
            <td>Produces normal-looking innocent cover file (photo, audio)</td>
          </tr>
          <tr>
            <td><strong>Attacker Awareness</strong></td>
            <td>Attacker knows data is encrypted and tries to crack it</td>
            <td>Attacker does not suspect any secret data is present!</td>
          </tr>
          <tr>
            <td><strong>Common Methods</strong></td>
            <td>AES, RSA, DES, ChaCha20</td>
            <td>Least Significant Bit (LSB), DCT frequency embedding</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. Key Steganography Terms</span>
      <ul class="forensic-list">
        <li><strong>Cover Medium:</strong> The original innocent file (photo, MP3, video) used to hide data.</li>
        <li><strong>Stego-Object:</strong> The resulting file after secret data has been embedded inside it.</li>
        <li><strong>Payload:</strong> The hidden secret text, document, or executable.</li>
        <li><strong>Stego-Key:</strong> An optional password or secret key used to scramble the hidden bits.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 6,
      runningHead: 'TOPIC 3 • LSB STEGO, WATERMARKING & EXAM TRAPS',
      content: `
    ${makeHeader(3, 'Concepts of Cryptography & Steganography', 'LSB Embedding, Digital Watermarking & DSSSB Exam Traps')}

    <div class="section-block">
      <span class="section-label">3. LSB (Least Significant Bit) Embedding (Q22)</span>
      <p>In 24-bit RGB images, each pixel has 3 color bytes (Red, Green, Blue) from 0 to 255. In binary, the rightmost bit is the <strong>Least Significant Bit (LSB)</strong>, which carries a value of only 1.</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">LSB Example</span>
          <span class="statute-tag">Color Value Shift: 1 unit</span>
        </div>
        <p>• Original Pixel Byte: <code>1100100<strong>0</strong></code> (Color value: 200)<br>
        • Secret Bit to Hide: <code><strong>1</strong></code><br>
        • Modified Pixel Byte: <code>1100100<strong>1</strong></code> (Color value: 201)<br>
        • Changing the color by 1 unit out of 255 is completely undetectable to human eyes!</p>
      </div>
      <p>• <strong>Capacity Formula:</strong> Maximum Hidden Capacity (Bytes) = (Width &times; Height &times; Color Channels) / 8.<br>
      A 1920 &times; 1080 RGB image can secretly hide <strong>777.6 Kilobytes</strong> of data!</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. Digital Watermarking</span>
      <p>• <strong>Robust Watermark:</strong> Survives compression and resizing (used for copyright protection).<br>
      • <strong>Fragile Watermark:</strong> Destroys itself if a single pixel is altered (used to prove digital evidence tampering in legal proceedings).</p>
    </div>

    <div class="section-block">
      <span class="section-label">5. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Crypto vs Stego (Q21):</strong> Cryptography hides the <em>meaning</em>; Steganography hides the <em>existence</em>.<br>
        • <strong>LSB Method (Q22):</strong> Replaces Bit 0; maximum visual color change is only 1 out of 255.<br>
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
  // Spread 3: Pages 7 & 8
  {
    spreadId: 3,
    left: {
      pageNumber: 7,
      runningHead: 'TOPIC 4 • STREAM VS BLOCK CIPHERS & SHANNON',
      content: `
    ${makeHeader(4, 'Symmetric and Asymmetric algorithms: Symmetric (Stream vs Block & DES)', 'Stream vs. Block Ciphers & Shannon Principles')}

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
            <td>Fixed-size blocks (64 or 128 bits)</td>
          </tr>
          <tr>
            <td><strong>Basic Operation</strong></td>
            <td>Bitwise XOR with pseudorandom keystream</td>
            <td>Rounds of substitution (S-boxes) and permutation</td>
          </tr>
          <tr>
            <td><strong>Latency & Buffering</strong></td>
            <td>Near zero latency; no data buffering</td>
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
      <span class="section-label">2. Claude Shannon's Twin Pillars</span>
      <p>• <strong>Confusion:</strong> Obscures the relationship between the key and the ciphertext using non-linear <strong>Substitution Boxes (S-Boxes)</strong>.<br>
      • <strong>Diffusion:</strong> Spreads the statistical influence of a single plaintext bit across many ciphertext bits using <strong>Permutations (P-Boxes)</strong>.</p>
    </div>`
    },
    right: {
      pageNumber: 8,
      runningHead: 'TOPIC 4 • DES, 2DES MITM & 3DES EXAM TRAPS',
      content: `
    ${makeHeader(4, 'Symmetric and Asymmetric algorithms: Symmetric (Stream vs Block & DES)', 'DES Architecture, 2DES Flaw & Triple DES (3DES)')}

    <div class="section-block">
      <span class="section-label">3. Data Encryption Standard (DES / FIPS 46) (Q32, Q33)</span>
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
          <p>Raw key is 64 bits, but <strong>8 bits are discarded as parity check bits</strong>. Effective key length is strictly <strong>56 bits</strong>!</p>
        </div>
      </div>
      <p style="margin-top: 8px;">• <strong>Feistel Network (16 Rounds) (Q33):</strong> Splits 64-bit block into two 32-bit halves. Contains 8 S-Boxes (each takes <strong>6 input bits</strong> and outputs <strong>4 bits</strong>).</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. Double DES Meet-in-the-Middle & Triple DES (3DES) (Q34)</span>
      <p>• <strong>Double DES (2DES) Flaw:</strong> Broken in only <strong>2^57 operations</strong> by the Meet-in-the-Middle attack (NOT 2^112)! Double DES is insecure.<br>
      • <strong>Triple DES (3DES):</strong> Uses Encrypt-Decrypt-Encrypt (<strong>EDE</strong>) sequence: <code>C = E(K1, D(K2, E(K3, P)))</code>. Decrypt in the middle provides backward compatibility with single DES (when K1 = K2 = K3).</p>
    </div>

    <div class="section-block">
      <span class="section-label">5. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Stream Cipher (Q31):</strong> Operates bit-by-bit or byte-by-byte via XOR (e.g., ChaCha20).<br>
        • <strong>DES Key Length (Q32):</strong> Exactly <strong>56 bits</strong> effective (64 raw minus 8 parity bits).<br>
        • <strong>DES Architecture (Q33):</strong> 16 Feistel rounds with 8 S-boxes (6 bits in &rarr; 4 bits out).<br>
        • <strong>Double DES (Q34):</strong> Broken by Meet-in-the-Middle in 2^57 steps, NOT 2^112!<br>
        • <strong>Symmetric Key Formula:</strong> Total keys for N users = [N &times; (N - 1)] / 2.</p>
      </div>
    </div>

    ${makeQuizCTA(4, 'Symmetric Ciphers & DES', 3)}`
    }
  },

  // =========================================================================
  // TOPIC 5: SYMMETRIC ALGORITHMS: AES & MODES OF OPERATION
  // =========================================================================
  // Spread 4: Pages 9 & 10
  {
    spreadId: 4,
    left: {
      pageNumber: 9,
      runningHead: 'TOPIC 5 • ADVANCED ENCRYPTION STANDARD (AES)',
      content: `
    ${makeHeader(5, 'Symmetric and Asymmetric algorithms: Symmetric (AES & Modes of Operation)', 'Advanced Encryption Standard (AES / FIPS 197) Architecture')}

    <div class="intro-abstract">
      <p>Selected by NIST in 2001 to replace DES, the <strong>Advanced Encryption Standard (AES)</strong> was created by Belgian cryptographers Joan Daemen and Vincent Rijmen (Rijndael). Unlike DES, AES is a <strong>Substitution-Permutation Network (SPN)</strong>, not a Feistel cipher.</p>
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
            <td>Global Enterprise Standard</td>
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
      <div class="statute-card card-teal" style="margin-top: 10px;">
        <div class="statute-header">
          <span class="statute-section">Fixed Block Size: 128 Bits (Q41)</span>
          <span class="statute-tag">4x4 State Array</span>
        </div>
        <p>In all versions of AES, the block size is <strong>ALWAYS 128 bits (16 bytes)</strong> organized as a 4&times;4 matrix of bytes called the <strong>State Array</strong>! Only key length and round count change.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The 4 Round Transformations in AES (Q43)</span>
      <p>1. <strong>SubBytes:</strong> Byte substitution using an S-Box (non-linear <strong>Confusion</strong>).<br>
      2. <strong>ShiftRows:</strong> Circular row shifts (0, 1, 2, 3 bytes) (linear <strong>Diffusion</strong>).<br>
      3. <strong>MixColumns:</strong> Matrix multiplication on columns (<strong>Diffusion</strong>). <em>Omitted in final round!</em><br>
      4. <strong>AddRoundKey:</strong> XORs State Array with the 128-bit round subkey.</p>
    </div>`
    },
    right: {
      pageNumber: 10,
      runningHead: 'TOPIC 5 • BLOCK CIPHER MODES & EXAM TRAPS',
      content: `
    ${makeHeader(5, 'Symmetric and Asymmetric algorithms: Symmetric (AES & Modes of Operation)', 'Block Cipher Operational Modes & DSSSB Exam Traps')}

    <div class="section-block">
      <span class="section-label">3. Operational Modes Comparison (Q44)</span>
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">ECB (Electronic Codebook)</span>
            <span class="statute-tag">INSECURE / BANNED</span>
          </div>
          <p>• Each block is encrypted independently.<br>
          • <strong>Fatal Flaw:</strong> Identical plaintext blocks produce <em>identical ciphertext blocks</em>! Leaks image patterns (Linux Tux penguin). Never use for multi-block data!</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">CBC (Cipher Block Chaining)</span>
            <span class="statute-tag">Chained with IV</span>
          </div>
          <p>• Plaintext is XORed with previous ciphertext block before encryption.<br>
          • Requires a random <strong>Initialization Vector (IV)</strong> for Block 1.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Modern Stream & Authenticated Modes</span>
      <p>• <strong>CTR (Counter Mode):</strong> Converts block cipher into a stream cipher by encrypting counter values. Enables fast parallel processing and random read/write access.<br>
      • <strong>GCM (Galois/Counter Mode):</strong> The premier standard for <strong>Authenticated Encryption with Associated Data (AEAD)</strong>. Combines CTR confidentiality with GHASH integrity tags.</p>
    </div>

    <div class="section-block">
      <span class="section-label">5. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>AES Block Size (Q41):</strong> Always exactly <strong>128 bits</strong> (16 bytes) across all variants!<br>
        • <strong>AES Rounds (Q42):</strong> AES-128 = 10 rounds; AES-192 = 12 rounds; AES-256 = 14 rounds.<br>
        • <strong>Skipped Step:</strong> <strong>MixColumns</strong> is skipped in the final round.<br>
        • <strong>ECB Flaw (Q44):</strong> Identical plaintext blocks produce identical ciphertext blocks; leaks structural patterns.<br>
        • <strong>GCM Mode:</strong> Provides both confidentiality AND message integrity (AEAD).</p>
      </div>
    </div>

    ${makeQuizCTA(5, 'AES & Cipher Modes', 4)}`
    }
  },

  // =========================================================================
  // TOPIC 6: ASYMMETRIC ALGORITHMS: PUBLIC-KEY & RSA
  // =========================================================================
  // Spread 5: Pages 11 & 12
  {
    spreadId: 5,
    left: {
      pageNumber: 11,
      runningHead: 'TOPIC 6 • ASYMMETRIC CRYPTOGRAPHY & RSA',
      content: `
    ${makeHeader(6, 'Symmetric and Asymmetric algorithms: Asymmetric (Public-Key & RSA)', 'Public Key Foundations & The RSA Algorithm')}

    <div class="intro-abstract">
      <p>While symmetric cryptography uses one shared secret key, <strong>Asymmetric (Public Key) Cryptography</strong> uses a mathematically linked <strong>pair of keys</strong>: a Public Key (open to the world) and a Private Key (kept strictly secret by the owner).</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. How Asymmetric Keys Work (Q51)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Public Key (Open to World)</span>
            <span class="statute-tag">Lock</span>
          </div>
          <p>• Used by anyone to <strong>encrypt</strong> a message sent to the owner.<br>
          • Used by anyone to <strong>verify</strong> the owner's digital signature.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Private Key (Secret)</span>
            <span class="statute-tag">Key</span>
          </div>
          <p>• Kept strictly secret by the owner.<br>
          • Used by the owner to <strong>decrypt</strong> incoming messages.<br>
          • Used by the owner to <strong>create</strong> digital signatures.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The RSA Algorithm (1977) (Q52, Q53)</span>
      <p>Created by Ron Rivest, Adi Shamir, and Leonard Adleman. Its security is based on the <strong>computational difficulty of factoring large composite prime numbers</strong> ($n = p \times q$).</p>
      <ul class="forensic-list">
        <li>Pick two large primes: <code>p</code> and <code>q</code>. Compute modulus: <code>n = p &times; q</code>.</li>
        <li>Compute Euler's totient: <code>&phi;(n) = (p - 1) &times; (q - 1)</code>.</li>
        <li>Select public exponent <code>e</code> (standard is <code>65537</code>). Compute private exponent <code>d</code>.</li>
        <li><strong>Public Key:</strong> <code>(e, n)</code> | <strong>Private Key:</strong> <code>(d, n)</code>.</li>
        <li><strong>Encryption:</strong> <code>Ciphertext = (Message)^e mod n</code> | <strong>Decryption:</strong> <code>Message = (Ciphertext)^d mod n</code>.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 12,
      runningHead: 'TOPIC 6 • HYBRID CRYPTOGRAPHY & EXAM TRAPS',
      content: `
    ${makeHeader(6, 'Symmetric and Asymmetric algorithms: Asymmetric (Public-Key & RSA)', 'Hybrid Cryptography & DSSSB High-Yield Exam Traps')}

    <div class="section-block">
      <span class="section-label">3. Why Hybrid Cryptography is Used (Q54)</span>
      <p>Asymmetric algorithms like RSA are roughly <strong>1,000 times slower</strong> than symmetric ciphers like AES. Production protocols (HTTPS/TLS, SSH, PGP) therefore use a <strong>Hybrid Cryptosystem</strong>:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Hybrid Encryption Sequence</span>
          <span class="statute-tag">Speed + Safe Key Exchange</span>
        </div>
        <p>1. Sender generates a temporary random symmetric key (called a <strong>Session Key</strong>, e.g., AES-256).<br>
        2. The large file or message is encrypted using the fast AES session key.<br>
        3. The small 256-bit AES key is encrypted using the recipient's public RSA key.<br>
        4. Recipient decrypts the AES key using their private RSA key, then decrypts the data with AES!</p>
      </div>
      <p style="margin-top: 8px;">• <strong>Asymmetric Key Count:</strong> For $N$ users, asymmetric cryptography requires only <strong>$N$ key pairs ($2N$ keys)</strong>, completely solving the symmetric key distribution crisis!</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>RSA Hardness (Q52):</strong> Difficulty of <strong>factoring large prime numbers</strong> ($n = p \times q$).<br>
        • <strong>Encryption Rule (Q51):</strong> Encrypt with recipient's <em>Public Key</em>; Decrypt with recipient's <em>Private Key</em>.<br>
        • <strong>Digital Signature Rule:</strong> Sign with sender's <em>Private Key</em>; Verify with sender's <em>Public Key</em>.<br>
        • <strong>Hybrid Cryptosystem (Q54):</strong> Uses asymmetric keys to exchange an AES session key, and AES to encrypt bulk data.<br>
        • <strong>Modern Key Length:</strong> Minimum 2048-bit RSA key required (1024-bit is broken!).</p>
      </div>
    </div>

    ${makeQuizCTA(6, 'Asymmetric Ciphers & RSA', 5)}`
    }
  },

  // =========================================================================
  // TOPIC 7: ASYMMETRIC ALGORITHMS: DIFFIE-HELLMAN & ECC
  // =========================================================================
  // Spread 6: Pages 13 & 14
  {
    spreadId: 6,
    left: {
      pageNumber: 13,
      runningHead: 'TOPIC 7 • DIFFIE-HELLMAN KEY EXCHANGE',
      content: `
    ${makeHeader(7, 'Symmetric and Asymmetric algorithms: Asymmetric (Diffie-Hellman & ECC)', 'The Diffie-Hellman Key Exchange Protocol & PFS')}

    <div class="intro-abstract">
      <p>Published in 1976 by Whitfield Diffie and Martin Hellman, the <strong>Diffie-Hellman (DH) protocol</strong> was the first practical method allowing two parties to establish a shared secret key across an insecure public channel without transmitting the key itself!</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. How Diffie-Hellman Works & Hardness (Q61)</span>
      <p>Alice and Bob agree on public parameters: a prime <code>p</code> and a base <code>g</code>:</p>
      <ul class="forensic-list">
        <li>Alice picks private secret <code>a</code>; sends public <code>A = g^a mod p</code> to Bob.</li>
        <li>Bob picks private secret <code>b</code>; sends public <code>B = g^b mod p</code> to Alice.</li>
        <li>Both compute the shared secret: <code>K = g^(ab) mod p</code>! An eavesdropper seeing only <code>A</code> and <code>B</code> cannot calculate <code>K</code>.</li>
      </ul>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Discrete Logarithm Problem (DLP)</span>
          <span class="statute-tag">Mathematical Hardness</span>
        </div>
        <p>Computing <code>g^a mod p</code> is fast and easy. However, given only the result, finding the secret exponent <code>a</code> is computationally impossible over large prime fields! This is the <strong>Discrete Logarithm Problem</strong>.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Perfect Forward Secrecy (PFS) (Q62)</span>
      <p>With <strong>Ephemeral Diffie-Hellman (DHE / ECDHE)</strong>, a fresh disposable key pair is generated for every single session. Even if the server's master private key is stolen in the future, past recorded sessions <strong>can never be decrypted</strong>!</p>
    </div>`
    },
    right: {
      pageNumber: 14,
      runningHead: 'TOPIC 7 • ELLIPTIC CURVE CRYPTOGRAPHY & TRAPS',
      content: `
    ${makeHeader(7, 'Symmetric and Asymmetric algorithms: Asymmetric (Diffie-Hellman & ECC)', 'Elliptic Curve Cryptography (ECC) & DSSSB Exam Traps')}

    <div class="section-block">
      <span class="section-label">3. Elliptic Curve Cryptography (ECC) (Q63, Q64)</span>
      <p>ECC uses the mathematics of elliptic curves over finite fields (<code>y^2 = x^3 + ax + b</code>). Its security rests on the <strong>Elliptic Curve Discrete Logarithm Problem (ECDLP)</strong>.</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">The Key Size Advantage of ECC (Q64)</span>
          <span class="statute-tag">High Efficiency</span>
        </div>
        <p>Because ECDLP is so computationally difficult, ECC provides identical security to RSA with <strong>vastly smaller keys</strong>, saving CPU, battery, and bandwidth (ideal for mobile phones and smart cards):<br>
        • <strong>256-bit ECC key &asymp; 3072-bit RSA key</strong> (12&times; smaller key size!)<br>
        • <strong>521-bit ECC key &asymp; 15,360-bit RSA key</strong> (Top Secret grade!)</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Core ECC Protocols</span>
      <p>• <strong>ECDH:</strong> Elliptic curve key exchange used in TLS 1.3 handshakes.<br>
      • <strong>ECDSA:</strong> Elliptic curve digital signatures used in Bitcoin, Ethereum, and e-passports.<br>
      • <strong>Ed25519:</strong> Fast, modern signature scheme immune to timing attacks (used in SSH).</p>
    </div>

    <div class="section-block">
      <span class="section-label">5. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Diffie-Hellman Goal (Q61):</strong> Key exchange / agreement. It is NOT used for encrypting bulk data files!<br>
        • <strong>DH Hardness:</strong> Based on the <strong>Discrete Logarithm Problem (DLP)</strong>.<br>
        • <strong>PFS (Q62):</strong> Provided by Ephemeral DH (DHE / ECDHE). Protects past sessions.<br>
        • <strong>ECC Equivalence (Q64):</strong> A <strong>256-bit ECC key</strong> equals the security of a <strong>3072-bit RSA key</strong>!</p>
      </div>
    </div>

    ${makeQuizCTA(7, 'Diffie-Hellman & ECC', 6)}`
    }
  },

  // =========================================================================
  // TOPIC 8: HASHING ALGORITHMS: PROPERTIES & CLASSICAL FUNCTIONS
  // =========================================================================
  // Spread 7: Pages 15 & 16
  {
    spreadId: 7,
    left: {
      pageNumber: 15,
      runningHead: 'TOPIC 8 • CRYPTOGRAPHIC HASH PROPERTIES',
      content: `
    ${makeHeader(8, 'Hashing Algorithms: Properties, Avalanche & Collision Resistances', 'Cryptographic Hash Foundations & Core Axioms')}

    <div class="intro-abstract">
      <p>A <strong>Cryptographic Hash Function</strong> maps arbitrary-length input data into a deterministic, fixed-length fingerprint called a <strong>Hash Digest</strong>. Hashing is strictly a <strong>one-way function</strong> (you cannot decrypt a hash!).</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Three Essential Cryptographic Hash Axioms (Q71)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Pre-image Resistance</span>
            <span class="statute-tag">One-Way Property</span>
          </div>
          <p>Given any hash value <code>h</code>, it is practically impossible to reverse the function to find the original input <code>x</code>.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. Second Pre-image Resistance</span>
            <span class="statute-tag">Targeted Collision</span>
          </div>
          <p>Given a specific input <code>x1</code>, it is practically impossible to find a different input <code>x2</code> with the identical hash: <code>Hash(x1) = Hash(x2)</code>.</p>
        </div>
      </div>
      <div class="statute-card card-amber" style="margin-top: 10px;">
        <div class="statute-header">
          <span class="statute-section">3. Collision Resistance (Strongest Property)</span>
          <span class="statute-tag">No Two Duplicates</span>
        </div>
        <p>It must be computationally impossible to find <em>any two completely random different inputs</em> that produce the identical hash output.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Avalanche Effect (Q72)</span>
      <p>Changing even **1 single bit of input data** causes approximately **50% of the output hash bits to flip**! This ensures that similar plaintexts produce completely uncorrelated hash digests.</p>
    </div>`
    },
    right: {
      pageNumber: 16,
      runningHead: 'TOPIC 8 • BIRTHDAY PARADOX & BROKEN HASHES',
      content: `
    ${makeHeader(8, 'Hashing Algorithms: Properties, Avalanche & Collision Resistances', 'The Birthday Paradox, Broken MD5 & SHA-1')}

    <div class="section-block">
      <span class="section-label">3. The Birthday Paradox & Legacy Hashes (Q73, Q74)</span>
      <p>• <strong>The Birthday Attack (Q73):</strong> Due to the Birthday Paradox, finding a collision in an $N$-bit hash does NOT require $2^N$ trials; it requires only approximately <strong>$2^{N/2}$ trials</strong>!<br>
      • <strong>MD5 (1991):</strong> Digest size is <strong>128 bits</strong> (32 hex characters). Severely broken by collision attacks; completely banned for security.<br>
      • <strong>SHA-1 (1995):</strong> Digest size is <strong>160 bits</strong> (40 hex characters). Broken by Google's SHAttered attack in 2017; banned by NIST.</p>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>Hash Algorithm</th>
            <th>Output Digest Size</th>
            <th>Hex Characters</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>MD5</strong></td>
            <td>128 bits</td>
            <td>32 hex chars</td>
            <td>Broken (Forbidden)</td>
          </tr>
          <tr>
            <td><strong>SHA-1</strong></td>
            <td>160 bits</td>
            <td>40 hex chars</td>
            <td>Broken (Banned by NIST)</td>
          </tr>
          <tr>
            <td><strong>SHA-256</strong></td>
            <td>256 bits</td>
            <td>64 hex chars</td>
            <td>Secure (Global Gold Standard)</td>
          </tr>
          <tr>
            <td><strong>SHA-512</strong></td>
            <td>512 bits</td>
            <td>128 hex chars</td>
            <td>Secure (High-Security)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>One-Way Property (Q71):</strong> Hashing cannot be decrypted; it is irreversible.<br>
        • <strong>Avalanche Effect (Q72):</strong> A 1-bit input change alters roughly 50% of output hash bits.<br>
        • <strong>Birthday Attack (Q73):</strong> Reduces collision search complexity from 2^N down to 2^(N/2).<br>
        • <strong>MD5 Output:</strong> Exactly <strong>128 bits</strong> (32 hex characters).<br>
        • <strong>SHA-1 Output:</strong> Exactly <strong>160 bits</strong> (40 hex characters).<br>
        • <strong>Forensic Law:</strong> Section 65B Indian Evidence Act / Section 63 BSA 2024 requires hash verification for evidence admissibility!</p>
      </div>
    </div>

    ${makeQuizCTA(8, 'Hashing Properties & Hashes', 7)}`
    }
  },

  // =========================================================================
  // TOPIC 9: HASHING ALGORITHMS: MODERN FAMILIES (SHA-2, SHA-3) & HMAC
  // =========================================================================
  // Spread 8: Pages 17 & 18
  {
    spreadId: 8,
    left: {
      pageNumber: 17,
      runningHead: 'TOPIC 9 • SHA-2, SHA-3 & HMAC',
      content: `
    ${makeHeader(9, 'Hashing Algorithms: Modern Families (SHA-2, SHA-3) & HMAC', 'The SHA-2 Family, SHA-3 Sponge & HMAC')}

    <div class="intro-abstract">
      <p>Following the deprecation of MD5 and SHA-1, modern cybersecurity relies on the <strong>SHA-2</strong> and <strong>SHA-3</strong> families for digital signatures, blockchain ledgers, and secure authentication.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The SHA-2 Family (FIPS 180-4) (Q81)</span>
      <p>Published by NIST in 2001 using the Merkle-Damgård construction:</p>
      <ul class="forensic-list">
        <li><strong>SHA-256:</strong> Processes 512-bit message blocks using 64 rounds; outputs a <strong>256-bit digest</strong> (64 hex characters). Global gold standard for TLS/SSL, IPsec, and Bitcoin.</li>
        <li><strong>SHA-512:</strong> Processes 1024-bit message blocks using 80 rounds of 64-bit words; outputs a <strong>512-bit digest</strong> (128 hex characters).</li>
        <li><em>Length Extension Vulnerability:</em> Because Merkle-Damgård hashes expose their internal state, naive schemes like <code>Hash(Key + Message)</code> are insecure!</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. SHA-3 (Keccak / FIPS 202) (Q82)</span>
      <p>Standardized by NIST in 2015 using the <strong>Sponge Construction</strong>:</p>
      <p>• <em>Absorbing Phase:</em> Input blocks are XORed into internal state.<br>
      • <em>Squeezing Phase:</em> Output digest bits are squeezed out.<br>
      • <em>Advantage:</em> Completely immune to Length Extension Attacks by design!</p>
    </div>`
    },
    right: {
      pageNumber: 18,
      runningHead: 'TOPIC 9 • HMAC & PASSWORD STORAGE TRAPS',
      content: `
    ${makeHeader(9, 'Hashing Algorithms: Modern Families (SHA-2, SHA-3) & HMAC', 'Hash-based Message Authentication Codes (HMAC) & Passwords')}

    <div class="section-block">
      <span class="section-label">3. What is HMAC (RFC 2104)? (Q83)</span>
      <p>A standard hash (like SHA-256) proves a file wasn't corrupted, but does not prove who sent it! <strong>HMAC (Hash-based Message Authentication Code)</strong> combines a hash with a <strong>shared secret key</strong>:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">HMAC Dual Guarantee</span>
          <span class="statute-tag">Integrity + Authentication</span>
        </div>
        <p>• Provides both <strong>Data Integrity</strong> AND <strong>Data Origin Authentication</strong>.<br>
        • Uses nested two-pass hashing: <code>Hash((Key XOR opad) || Hash((Key XOR ipad) || Message))</code>.<br>
        • <em>Inner Pad (ipad):</em> Constant byte <code>0x36</code> | <em>Outer Pad (opad):</em> Constant byte <code>0x5C</code>.<br>
        • Completely immune to Length Extension Attacks!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Secure Password Storage</span>
      <p>• Fast hashes (MD5, SHA-256) must NEVER store passwords directly (vulnerable to GPU Rainbow Tables!).<br>
      • Passwords require a <strong>Salt</strong> (random string defeating Rainbow Tables) and slow Key Derivation Functions like <strong>bcrypt, PBKDF2, or Argon2</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">5. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>SHA-2 Family (Q81):</strong> Standard includes SHA-224, SHA-256, SHA-384, SHA-512.<br>
        • <strong>SHA-3 Architecture (Q82):</strong> Uses the <strong>Sponge Construction</strong> (Keccak); immune to Length Extension Attacks.<br>
        • <strong>HMAC Purpose (Q83):</strong> Combines a hash with a <em>secret key</em> to guarantee message integrity AND authenticity.<br>
        • <strong>Password Storage:</strong> Salt defeats Rainbow Tables; Argon2/bcrypt defeat GPU brute-force.</p>
      </div>
    </div>

    ${makeQuizCTA(9, 'SHA-2, SHA-3 & HMAC', 8)}`
    }
  },

  // =========================================================================
  // TOPIC 10: CRYPTANALYSIS: GOALS & CLASSICAL ATTACK MODELS
  // =========================================================================
  // Spread 9: Pages 19 & 20
  {
    spreadId: 9,
    left: {
      pageNumber: 19,
      runningHead: 'TOPIC 10 • CRYPTANALYSIS GOALS & ATTACKS',
      content: `
    ${makeHeader(10, 'Cryptanalysis: Goals, Classical Attack Models & Cryptanalytic Methods', 'Cryptanalysis Foundations & Classical Attack Models')}

    <div class="intro-abstract">
      <p><strong>Cryptanalysis</strong> is the science of deciphering ciphertext or breaking cryptographic systems without possessing the secret key. Together, cryptography and cryptanalysis form the broader discipline of <strong>Cryptology</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Four Goals of Cryptanalysis (Q91)</span>
      <p>1. <strong>Total Break:</strong> Deducing the secret encryption key itself (complete compromise).<br>
      2. <strong>Global Deduction:</strong> Finding an alternate algorithm that decrypts any ciphertext without finding the key.<br>
      3. <strong>Instance Deduction:</strong> Decrypting a single intercepted ciphertext message.<br>
      4. <strong>Information Deduction:</strong> Gaining partial clues about the plaintext or secret key bits.</p>
    </div>

    <div class="section-block">
      <span class="section-label">2. The 4 Classical Attack Models (Q92, Q93)</span>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>Attack Model</th>
            <th>Attacker Has Access To</th>
            <th>How It Works</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Ciphertext-Only (COA)</strong></td>
            <td>Only the intercepted <strong>Ciphertext (C)</strong></td>
            <td>Hardest attack. Relies on letter frequencies or statistical analysis.</td>
          </tr>
          <tr>
            <td><strong>2. Known-Plaintext (KPA)</strong></td>
            <td>Pairs of known <strong>Plaintext (P) and Ciphertext (C)</strong></td>
            <td>Attacker knows common file headers (e.g., standard email headers, PNG magic bytes) and analyzes key transformations.</td>
          </tr>
          <tr>
            <td><strong>3. Chosen-Plaintext (CPA)</strong></td>
            <td>Can choose <strong>Plaintext (P)</strong> and get resulting <strong>Ciphertext (C)</strong></td>
            <td>Attacker feeds chosen texts into encryption device to analyze S-box responses (e.g., differential cryptanalysis).</td>
          </tr>
          <tr>
            <td><strong>4. Chosen-Ciphertext (CCA)</strong></td>
            <td>Can choose <strong>Ciphertext (C)</strong> and get decrypted <strong>Plaintext (P)</strong></td>
            <td>Strongest attack model. Attacker probes decryption oracle (e.g., padding oracle attacks).</td>
          </tr>
        </tbody>
      </table>
    </div>`
    },
    right: {
      pageNumber: 20,
      runningHead: 'TOPIC 10 • BRUTE-FORCE, SIDE-CHANNELS & TRAPS',
      content: `
    ${makeHeader(10, 'Cryptanalysis: Goals, Classical Attack Models & Cryptanalytic Methods', 'Brute-Force Realities, Side-Channels & DSSSB Exam Traps')}

    <div class="section-block">
      <span class="section-label">3. Advanced Analytical & Side-Channel Attacks</span>
      <ul class="forensic-list">
        <li><strong>Differential Cryptanalysis:</strong> Analyzes how differences between pairs of plaintexts affect the differences in resulting ciphertexts (Biham & Shamir).</li>
        <li><strong>Linear Cryptanalysis:</strong> Uses linear mathematical approximations of S-boxes (Matsui).</li>
        <li><strong>Side-Channel Attacks:</strong> Exploits physical hardware leakage during encryption:
          <ul>
            <li><em>Timing Attacks:</em> Measuring micro-variations in CPU processing time.</li>
            <li><em>Power Analysis:</em> Measuring electrical power fluctuations of smart cards.</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">4. Brute-Force Key Exhaustion</span>
      <p>• <strong>56-bit DES:</strong> 2^56 keys &rarr; Broken in 22 hours by EFF Deep Crack in 1999!<br>
      • <strong>128-bit AES:</strong> 2^128 keys &rarr; Billions of years required by supercomputers to crack.</p>
    </div>

    <div class="section-block">
      <span class="section-label">5. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Ciphertext-Only (COA):</strong> Attacker has ONLY ciphertext (hardest attack).<br>
        • <strong>Known-Plaintext (KPA):</strong> Attacker knows matching plaintext-ciphertext pairs.<br>
        • <strong>Chosen-Plaintext (CPA):</strong> Attacker chooses plaintext and gets ciphertext.<br>
        • <strong>Chosen-Ciphertext (CCA):</strong> Attacker chooses ciphertext and gets decrypted plaintext (strongest attack).<br>
        • <strong>Side-Channel Attacks:</strong> Exploit physical timing or power consumption, NOT mathematical algorithm flaws.</p>
      </div>
    </div>

    ${makeQuizCTA(10, 'Cryptanalysis & Attack Models', 9)}`
    }
  }
];
