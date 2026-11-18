// Part 2: Topics 11–20 (Spreads 10–19, Pages 21–40)
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
  // TOPIC 11: DIGITAL SIGNATURE
  // =========================================================================
  // Spread 10: Pages 21 & 22
  {
    spreadId: 10,
    left: {
      pageNumber: 21,
      runningHead: 'TOPIC 11 • DIGITAL SIGNATURE ARCHITECTURE',
      content: `
    ${makeHeader(11, 'Digital Signature', 'Digital Signature Architecture & Signing Mechanics')}

    <div class="intro-abstract">
      <p>A <strong>Digital Signature</strong> is a mathematical scheme for verifying the authenticity and integrity of digital messages or documents. It is the electronic equivalent of a handwritten signature, but offers far stronger cryptographic security.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. How a Digital Signature is Created and Verified (Q101)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Step 1: Signing (By Sender - Alice)</span>
            <span class="statute-tag">Private Key</span>
          </div>
          <p>• Alice computes the cryptographic hash of the document: <code>h = SHA256(Document)</code>.<br>
          • Alice encrypts the hash <code>h</code> using her <strong>Private Key</strong>.<br>
          • The resulting encrypted hash is the <strong>Digital Signature</strong>!</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Step 2: Verification (By Receiver - Bob)</span>
            <span class="statute-tag">Public Key</span>
          </div>
          <p>• Bob decrypts the signature using Alice's <strong>Public Key</strong> to recover hash <code>h1</code>.<br>
          • Bob computes his own hash of the received document: <code>h2 = SHA256(Document)</code>.<br>
          • <em>Check:</em> If <code>h1 == h2</code>, the signature is 100% valid!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The 3 Security Services Provided (Q102)</span>
      <ul class="forensic-list">
        <li><strong>1. Sender Authentication:</strong> Proves who signed it. Only Alice holds her private key.</li>
        <li><strong>2. Message Integrity:</strong> Proves the document was not altered. Changing even a comma breaks verification!</li>
        <li><strong>3. Non-repudiation:</strong> Alice cannot legally deny having signed the document.</li>
      </ul>
      <p><em>Note:</em> A digital signature alone does NOT encrypt the document (no confidentiality).</p>
    </div>`
    },
    right: {
      pageNumber: 22,
      runningHead: 'TOPIC 11 • SIGNATURE STANDARDS & EXAM TRAPS',
      content: `
    ${makeHeader(11, 'Digital Signature', 'Legal Validity, Encryption Comparison & DSSSB Exam Traps')}

    <div class="section-block">
      <span class="section-label">3. Digital Signatures under Indian Law (Q103)</span>
      <p>Under the <strong>Indian Information Technology Act, 2000</strong>, digital signatures have full legal validity:</p>
      <p>• <strong>Section 3:</strong> Recognizes digital signatures created using asymmetric cryptosystems and hash functions.<br>
      • <strong>Section 3A:</strong> Recognizes electronic signatures (like Aadhaar eSign via OTP) alongside digital signatures.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. Encryption vs Digital Signature (Crucial Comparison)</span>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>Operation</th>
            <th>Whose Key is Used?</th>
            <th>Primary Goal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Public Key Encryption</strong></td>
            <td>Encrypt with <strong>Recipient's Public Key</strong></td>
            <td>Confidentiality (Only recipient can read it)</td>
          </tr>
          <tr>
            <td><strong>Digital Signature</strong></td>
            <td>Sign with <strong>Sender's Private Key</strong></td>
            <td>Authentication & Non-repudiation (Anyone can verify)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">5. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Signing Key (Q101):</strong> Always the <strong>Sender's Private Key</strong>.<br>
        • <strong>Verification Key:</strong> Always the <strong>Sender's Public Key</strong>.<br>
        • <strong>Services (Q102):</strong> Authentication, Integrity, Non-repudiation (NOT confidentiality!).<br>
        • <strong>Legal Section (Q103):</strong> Section 3 of the Indian Information Technology Act, 2000.<br>
        • <strong>Standards:</strong> RSA-PSS, DSA, ECDSA (used in Bitcoin), Ed25519.</p>
      </div>
    </div>

    ${makeQuizCTA(11, 'Digital Signature', 10)}`
    }
  },

  // =========================================================================
  // TOPIC 12: DIGITAL CERTIFICATE & CERTIFYING AUTHORITIES (CA)
  // =========================================================================
  // Spread 11: Pages 23 & 24
  {
    spreadId: 11,
    left: {
      pageNumber: 23,
      runningHead: 'TOPIC 12 • DIGITAL CERTIFICATES & X.509',
      content: `
    ${makeHeader(12, 'Digital Certificate & Certifying Authorities (CA)', 'The X.509 Standard & PKI Chain of Trust')}

    <div class="intro-abstract">
      <p>Anyone can generate a key pair and claim to be a bank. A <strong>Digital Certificate</strong> solves this identity problem by cryptographically binding a Public Key to a real-world identity, signed by a trusted third party called a <strong>Certifying Authority (CA)</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. What is an X.509 Digital Certificate? (Q111)</span>
      <p>Standardized by the ITU-T as <strong>X.509 version 3</strong>, it is the electronic passport of the internet (powering HTTPS / SSL / TLS locks in web browsers):</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Essential X.509 Fields</span>
          <span class="statute-tag">Standard Metadata</span>
        </div>
        <p>• <strong>Subject:</strong> Identity of certificate owner (e.g., <code>CN=www.google.com</code>).<br>
        • <strong>Public Key:</strong> The owner's public key (RSA/ECC) and algorithm.<br>
        • <strong>Issuer:</strong> Name of the Certifying Authority that signed it.<br>
        • <strong>Validity Dates:</strong> <code>Not Before</code> and <code>Not After</code> timestamps.<br>
        • <strong>Serial Number:</strong> Unique identifier assigned by the CA.<br>
        • <strong>CA Signature:</strong> CA's digital signature over all above fields!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The PKI Chain of Trust (Q112)</span>
      <p>• <strong>Root CA:</strong> Master trust anchor. Its certificate is <strong>self-signed</strong> and pre-installed directly inside operating systems and web browsers.<br>
      • <strong>Intermediate CA:</strong> Subordinate CAs signed by the Root CA; they issue everyday website certificates, keeping the Root CA safely offline.</p>
    </div>`
    },
    right: {
      pageNumber: 24,
      runningHead: 'TOPIC 12 • CERTIFICATE REVOCATION & EXAM TRAPS',
      content: `
    ${makeHeader(12, 'Digital Certificate & Certifying Authorities (CA)', 'Certificate Revocation: CRL vs. OCSP & DSSSB Exam Traps')}

    <div class="section-block">
      <span class="section-label">3. Certificate Revocation Mechanisms (Q113)</span>
      <p>If a private key is compromised, the CA must revoke the certificate immediately:</p>
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">1. CRL (Revocation List)</span>
            <span class="statute-tag">Periodic List</span>
          </div>
          <p>• A time-stamped, CA-signed list of revoked certificate serial numbers.<br>
          • <em>Drawback:</em> Files become large; clients only download periodically.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">2. OCSP (Online Status)</span>
            <span class="statute-tag">Real-Time Query</span>
          </div>
          <p>• Browser queries the CA directly in real-time: <em>"Is certificate #1234 still good?"</em><br>
          • CA answers immediately: <code>Good</code>, <code>Revoked</code>, or <code>Unknown</code>.</p>
        </div>
      </div>
      <p style="margin-top: 8px;">• <strong>OCSP Stapling:</strong> The web server queries the CA, caches the signed response, and "staples" it to the initial TLS handshake for fast, private verification.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Primary Purpose (Q111):</strong> Binds a Public Key to an authenticated identity, signed by a CA.<br>
        • <strong>Global Standard:</strong> ITU-T <strong>X.509 version 3</strong>.<br>
        • <strong>Root CA Trust (Q112):</strong> Root certificates are <strong>self-signed</strong> and pre-installed in OS trust stores.<br>
        • <strong>Revocation Checking (Q113):</strong> CRL (downloaded list) vs. OCSP (real-time query).<br>
        • <strong>Indian Authority:</strong> The <strong>Controller of Certifying Authorities (CCA)</strong> under Section 17 of the IT Act, 2000 licenses all Indian CAs.</p>
      </div>
    </div>

    ${makeQuizCTA(12, 'Digital Certificates & CAs', 11)}`
    }
  },

  // =========================================================================
  // TOPIC 13: STEGANALYSIS AND ITS CHALLENGES
  // =========================================================================
  // Spread 12: Pages 25 & 26
  {
    spreadId: 12,
    left: {
      pageNumber: 25,
      runningHead: 'TOPIC 13 • STEGANALYSIS GOALS & TECHNIQUES',
      content: `
    ${makeHeader(13, 'Steganalysis and its challenges', 'Steganalysis Foundations & Detection Methods')}

    <div class="intro-abstract">
      <p><strong>Steganalysis</strong> is the forensic art and science of detecting, extracting, or destroying hidden messages concealed within carrier media using steganography. It is the defensive counterpart of steganography.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Three Primary Goals of Steganalysis (Q121)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Detection (Primary)</span>
            <span class="statute-tag">Is something hidden?</span>
          </div>
          <p>Determining whether a suspicious file contains an embedded secret payload.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. Extraction</span>
            <span class="statute-tag">Recover Payload</span>
          </div>
          <p>Extracting the hidden secret message and cracking its stego-key to read the plaintext.</p>
        </div>
      </div>
      <div class="statute-card card-amber" style="margin-top: 10px;">
        <div class="statute-header">
          <span class="statute-section">3. Destruction / Sanitization</span>
          <span class="statute-tag">Neutralize</span>
        </div>
        <p>Modifying the carrier file (e.g., re-compressing, adding light noise) to destroy secret messages without ruining the visible picture.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Visual & Structural Steganalysis (Q122)</span>
      <p>• <strong>EOF (End-of-File) File Append Analysis:</strong> Naive tools append secret files past the JPEG end marker (<code>FF D9</code>). Detected immediately because physical file size exceeds image pixel requirements!<br>
      • <strong>Bit-Plane Slicing:</strong> Separates an image into 8 binary layers. Inspecting Bit-plane 0 (LSB) reveals abnormal statistical patterns if secret data is embedded.</p>
    </div>`
    },
    right: {
      pageNumber: 26,
      runningHead: 'TOPIC 13 • CHI-SQUARE ATTACK & EXAM TRAPS',
      content: `
    ${makeHeader(13, 'Steganalysis and its challenges', 'Statistical Steganalysis (Chi-Square) & DSSSB Exam Traps')}

    <div class="section-block">
      <span class="section-label">3. The Chi-Square (&chi;&sup2;) Statistical Attack (Q123)</span>
      <p>Developed by Westfeld and Pfitzmann, the <strong>Chi-Square Attack</strong> is the classic mathematical method for detecting LSB replacement steganography:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Pairs of Values (PoV) Theory</span>
          <span class="statute-tag">Statistical Equalization</span>
        </div>
        <p>• In normal images, adjacent pixel color values (like 200 and 201) have naturally different frequencies.<br>
        • When secret random bits are embedded using LSB replacement, the counts of even and odd values (200 &harr; 201) <strong>equalize statistically</strong>!<br>
        • The Chi-square test mathematically measures this equalization to detect LSB steganography with near-100% certainty!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Major Steganalysis Challenges</span>
      <ul class="forensic-list">
        <li><strong>No Original Cover Image:</strong> Forensic examiners rarely have the original untainted image to compare against (Stego-Only Attack).</li>
        <li><strong>Adaptive Steganography:</strong> Modern malware uses advanced algorithms (HUGO, WOW) that hide data exclusively in noisy textures where statistical tests fail.</li>
        <li><strong>Encryption Before Embedding:</strong> Hidden payload is encrypted; even if extracted, it looks like harmless random noise!</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">5. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Primary Goal (Q121):</strong> Detect whether a secret message exists in a carrier medium.<br>
        • <strong>EOF Appending:</strong> Hiding data past the JPEG <code>FF D9</code> marker is the easiest to detect via file size discrepancy.<br>
        • <strong>Chi-Square Attack (Q123):</strong> Exploits the statistical equalization of <strong>Pairs of Values (PoVs)</strong> in LSB steganography.<br>
        • <strong>Steganalysis Tools:</strong> StegExpose, Stegsolve, OpenStego, zsteg.</p>
      </div>
    </div>

    ${makeQuizCTA(13, 'Steganalysis & Challenges', 12)}`
    }
  },

  // =========================================================================
  // TOPIC 14: VULNERABILITY ASSESSMENT AND PENETRATION TESTING (VAPT)
  // =========================================================================
  // Spread 13: Pages 27 & 28
  {
    spreadId: 13,
    left: {
      pageNumber: 27,
      runningHead: 'TOPIC 14 • VAPT COMPARISON & TESTING MODELS',
      content: `
    ${makeHeader(14, 'Vulnerability Assessment and Penetration Testing (VAPT)', 'Vulnerability Assessment vs. Penetration Testing & Models')}

    <div class="intro-abstract">
      <p>While frequently combined as <strong>VAPT</strong>, Vulnerability Assessment and Penetration Testing are two distinct security auditing methodologies that serve different purposes in organizational risk management.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. VA vs. Penetration Testing Comparison (Q131)</span>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Vulnerability Assessment (VA)</th>
            <th>Penetration Testing (PT)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Focus & Approach</strong></td>
            <td><strong>Breadth</strong> (Scans entire network for all flaws)</td>
            <td><strong>Depth</strong> (Exploits specific flaws to prove impact)</td>
          </tr>
          <tr>
            <td><strong>Execution Method</strong></td>
            <td>Automated scanning tools (Nessus, OpenVAS)</td>
            <td>Manual exploitation augmented by tools (Metasploit)</td>
          </tr>
          <tr>
            <td><strong>Exploitation</strong></td>
            <td>NO active exploitation (safe, non-intrusive)</td>
            <td>YES; actively exploits flaws to simulate hackers</td>
          </tr>
          <tr>
            <td><strong>Frequency</strong></td>
            <td>Continuous or frequent (weekly/monthly)</td>
            <td>Periodic (annual or after major app updates)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Three Penetration Testing Models (Q132)</span>
      <ul class="forensic-list">
        <li><strong>Black-Box:</strong> Zero prior knowledge; simulates an external hacker on the internet.</li>
        <li><strong>White-Box:</strong> Full knowledge; tester has source code, network diagrams, and admin logins.</li>
        <li><strong>Grey-Box:</strong> Partial knowledge (e.g., standard employee credentials); simulates an insider threat.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 28,
      runningHead: 'TOPIC 14 • RULES OF ENGAGEMENT & EXAM TRAPS',
      content: `
    ${makeHeader(14, 'Vulnerability Assessment and Penetration Testing (VAPT)', 'Rules of Engagement (ROE) & DSSSB Exam Traps')}

    <div class="section-block">
      <span class="section-label">3. The Legal Requirement: Rules of Engagement (ROE)</span>
      <p>Penetration testing without explicit written authorization is a <strong>criminal cyber crime</strong> under Section 43 and Section 66 of the Indian Information Technology Act, 2000! Professional testing mandates:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Rules of Engagement (ROE) Checklist</span>
          <span class="statute-tag">Legal Scoping</span>
        </div>
        <p>• <strong>Scope:</strong> Explicit list of in-scope IP addresses, web domains, and APIs.<br>
        • <strong>Exclusions:</strong> Production databases or critical servers that must NOT be tested (DoS attacks excluded).<br>
        • <strong>Testing Windows:</strong> Agreed maintenance hours (e.g., midnight to 4 AM) to avoid business disruption.<br>
        • <strong>Signed Authorization:</strong> Formal liability release signed by C-level executive leadership.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>VA vs PT (Q131):</strong> VA is <em>breadth-oriented</em> (identifies flaws without exploiting); PT is <em>depth-oriented</em> (actively exploits flaws to prove real impact).<br>
        • <strong>Black-Box (Q132):</strong> Zero prior knowledge; simulates external attacker.<br>
        • <strong>White-Box:</strong> Full access to source code and network diagrams.<br>
        • <strong>Grey-Box:</strong> Partial knowledge (e.g., regular user login).<br>
        • <strong>Legal Authorization:</strong> Mandatory before any testing under Section 43/66 of the Indian IT Act, 2000.</p>
      </div>
    </div>

    ${makeQuizCTA(14, 'VAPT Fundamentals', 13)}`
    }
  },

  // =========================================================================
  // TOPIC 15: VULNERABILITY V/S WEAKNESS & TYPES OF VULNERABILITIES (INPUT VALIDATION)
  // =========================================================================
  // Spread 14: Pages 29 & 30
  {
    spreadId: 14,
    left: {
      pageNumber: 29,
      runningHead: 'TOPIC 15 • VULNERABILITY VS WEAKNESS & SQLi',
      content: `
    ${makeHeader(15, 'Vulnerability v/s Weakness & Types of Vulnerabilities (Input Validation)', 'Vulnerability vs. Weakness & SQL Injection (SQLi)')}

    <div class="intro-abstract">
      <p>Understanding the precise distinction between "weakness" (CWE) and "vulnerability" (CVE) is a cornerstone of vulnerability management and a frequent DSSSB question.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Vulnerability vs. Weakness (CVE vs. CWE) (Q141)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Weakness (CWE)</span>
            <span class="statute-tag">The Flaw Category</span>
          </div>
          <p>• A flaw, bug, or design mistake in code that <em>could</em> lead to a security problem.<br>
          • <em>Standard:</em> <strong>Common Weakness Enumeration (CWE)</strong> (e.g., CWE-89: SQL Injection, CWE-79: Cross-Site Scripting).</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Vulnerability (CVE)</span>
            <span class="statute-tag">The Exploitable Bug</span>
          </div>
          <p>• A specific mistake in an actual software product that can be directly exploited by an attacker.<br>
          • <em>Standard:</em> <strong>Common Vulnerabilities and Exposures (CVE)</strong> (e.g., CVE-2021-44228: Log4Shell).</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. SQL Injection (SQLi / CWE-89) (Q142)</span>
      <p>Occurs when untrusted user input is directly concatenated into dynamic SQL queries without validation. Inputting <code>admin' OR '1'='1</code> bypasses login screens because <code>'1'='1'</code> is always true!</p>
      <p>• <strong>Definitive Defense:</strong> <strong>Parameterized Queries (Prepared Statements)</strong>. The database treats input strictly as harmless data, never as executable SQL code!</p>
    </div>`
    },
    right: {
      pageNumber: 30,
      runningHead: 'TOPIC 15 • XSS & INJECTION EXAM TRAPS',
      content: `
    ${makeHeader(15, 'Vulnerability v/s Weakness & Types of Vulnerabilities (Input Validation)', 'Cross-Site Scripting (XSS / CWE-79) & DSSSB Exam Traps')}

    <div class="section-block">
      <span class="section-label">3. Cross-Site Scripting (XSS / CWE-79) (Q143)</span>
      <p>Occurs when an application reflects untrusted input to a browser without proper encoding, executing malicious JavaScript inside the victim's browser session:</p>
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">1. Stored (Persistent) XSS</span>
            <span class="statute-tag">Most Dangerous</span>
          </div>
          <p>Script is permanently saved in the database (e.g., in a blog comment); executes for every user who visits the page.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">2. Reflected (Non-Persistent)</span>
            <span class="statute-tag">Phishing Links</span>
          </div>
          <p>Script is embedded in a malicious URL and reflected back in an immediate error or search page.</p>
        </div>
      </div>
      <p style="margin-top: 8px;">• <strong>Key Defenses:</strong> Context-aware HTML output encoding, Content Security Policy (CSP), and the <strong>HttpOnly cookie flag</strong> (prevents JavaScript from stealing session cookies via <code>document.cookie</code>).</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Weakness vs Vulnerability (Q141):</strong> Weakness = flaw type (CWE); Vulnerability = exploitable instance (CVE).<br>
        • <strong>SQL Injection Defense (Q142):</strong> <strong>Parameterized Queries (Prepared Statements)</strong>.<br>
        • <strong>XSS Execution (Q143):</strong> Executes malicious JavaScript on the <em>client browser</em>, stealing session cookies.<br>
        • <strong>Cookie Protection:</strong> <code>HttpOnly</code> prevents JavaScript from stealing session cookies via XSS.</p>
      </div>
    </div>

    ${makeQuizCTA(15, 'Vulnerability vs Weakness & SQLi', 14)}`
    }
  },

  // =========================================================================
  // TOPIC 16: TYPES OF VULNERABILITIES: MEMORY CORRUPTION & ACCESS CONTROL
  // =========================================================================
  // Spread 15: Pages 31 & 32
  {
    spreadId: 15,
    left: {
      pageNumber: 31,
      runningHead: 'TOPIC 16 • BUFFER OVERFLOWS & MEMORY DEFENSES',
      content: `
    ${makeHeader(16, 'Types of Vulnerabilities: Memory Corruption, Access Control & Web Flaws', 'Stack Buffer Overflows (CWE-120) & Exploit Mitigations')}

    <div class="intro-abstract">
      <p>Beyond input validation bugs like SQLi, vulnerabilities exist at the operating system memory layer and in application access control logic. These allow attackers to take full control of host systems.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Stack Buffer Overflow (CWE-120) (Q151)</span>
      <p>In low-level languages like C and C++, the compiler does not check if an input array fits into memory. Functions like <code>strcpy()</code> and <code>gets()</code> allow copying unlimited data into a fixed-size stack buffer:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">How the Attack Hijacks Execution</span>
          <span class="statute-tag">Return Address Overwrite</span>
        </div>
        <p>1. Program allocates a 64-byte buffer on the stack.<br>
        2. Attacker inputs 100 bytes of data.<br>
        3. Excessive data overflows the buffer and overwrites the <strong>Saved Return Address (EIP / RIP)</strong> on the stack.<br>
        4. When the function returns, the CPU jumps to the attacker's shellcode instead of normal code!</p>
      </div>
      <p>• <strong>NOP Sled:</strong> A sequence of No-Operation machine instructions (opcode <code>0x90</code> on x86) placed before shellcode so the CPU harmlessly slides down into the exploit.</p>
    </div>

    <div class="section-block">
      <span class="section-label">2. Modern Memory Defenses (Q152)</span>
      <p>• <strong>DEP / NX:</strong> Marks stack and heap non-executable (stops shellcode execution).<br>
      • <strong>ASLR:</strong> Randomizes memory base addresses at every boot.<br>
      • <strong>Stack Canaries:</strong> Random numbers before the return address; if modified, the program aborts.</p>
    </div>`
    },
    right: {
      pageNumber: 32,
      runningHead: 'TOPIC 16 • ACCESS CONTROL FLAWS & EXAM TRAPS',
      content: `
    ${makeHeader(16, 'Types of Vulnerabilities: Memory Corruption, Access Control & Web Flaws', 'Access Control Flaws (IDOR, CSRF, SSRF) & DSSSB Exam Traps')}

    <div class="section-block">
      <span class="section-label">3. Insecure Direct Object References (IDOR / CWE-639) (Q153)</span>
      <p>Occurs when an application exposes a reference to an internal database object in a URL without verifying ownership:</p>
      <p>• <em>Example:</em> Changing URL parameter from <code>account_id=1001</code> to <code>1002</code> reveals another user's private banking statement because the server didn't verify user rights!</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. CSRF & SSRF Web Vulnerabilities</span>
      <p>• <strong>CSRF (Cross-Site Request Forgery / CWE-352):</strong> Tricking an authenticated victim's browser into submitting unwanted actions (e.g., money transfer). Defended using unique, unpredictable <strong>Anti-CSRF Tokens</strong>.<br>
      • <strong>SSRF (Server-Side Request Forgery / CWE-918) (Q154):</strong> Forcing the backend server to make unauthorized requests to internal network assets or cloud metadata (<code>http://169.254.169.254/</code>).</p>
    </div>

    <div class="section-block">
      <span class="section-label">5. DSSSB High-Yield Exam Traps</span>
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
  // Spread 16: Pages 33 & 34
  {
    spreadId: 16,
    left: {
      pageNumber: 33,
      runningHead: 'TOPIC 17 • THE MITRE CVE SYSTEM & CNAS',
      content: `
    ${makeHeader(17, 'Common Vulnerabilities and Exposures (CVEs)', 'The Common Vulnerabilities and Exposures (CVE) System')}

    <div class="intro-abstract">
      <p>Created in 1999 by the <strong>MITRE Corporation</strong>, the <strong>Common Vulnerabilities and Exposures (CVE)</strong> system provides a standardized, globally unique identification number for publicly disclosed cybersecurity vulnerabilities.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Why CVE Exists & Syntax (Q161, Q162)</span>
      <p>Before CVE, different scanner companies gave completely different names to the same software bug. CVE acts as the universal dictionary so all security professionals speak the exact same language.</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Syntax: CVE-YYYY-NNNN</span>
          <span class="statute-tag">Standard Naming</span>
        </div>
        <p>• <strong>CVE:</strong> Fixed prefix identifying it as a CVE record.<br>
        • <strong>YYYY:</strong> The year the CVE was assigned or publicly disclosed (4 digits).<br>
        • <strong>NNNN...:</strong> Sequential identification number (minimum 4 digits; can expand to 7+ digits).<br>
        • <em>Example:</em> <code>CVE-2021-44228</code> (The Log4Shell critical vulnerability disclosed in 2021).</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. CVE Numbering Authorities (CNAs) (Q163)</span>
      <p>MITRE delegates assignment authority to vetted organizations called <strong>CVE Numbering Authorities (CNAs)</strong>, including major vendors (Microsoft, Apple, Google, Red Hat) and national CERTs (CERT-In in India, CISA in USA).</p>
    </div>`
    },
    right: {
      pageNumber: 34,
      runningHead: 'TOPIC 17 • NVD INTEGRATION & EXAM TRAPS',
      content: `
    ${makeHeader(17, 'Common Vulnerabilities and Exposures (CVEs)', 'National Vulnerability Database (NVD) & DSSSB Exam Traps')}

    <div class="section-block">
      <span class="section-label">3. The National Vulnerability Database (NVD)</span>
      <p>Maintained by the US <strong>NIST (National Institute of Standards and Technology)</strong>, the NVD ingests all CVEs from MITRE and enriches them with technical analysis, <strong>CVSS severity scores</strong>, and Common Platform Enumeration (CPE) product identifiers.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. The 4 States of a CVE Record</span>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>CVE State</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Reserved</strong></td>
            <td>ID allocated to a vendor/researcher, but details kept secret while patches are built.</td>
          </tr>
          <tr>
            <td><strong>Published</strong></td>
            <td>Vulnerability details, affected versions, and security patches officially released.</td>
          </tr>
          <tr>
            <td><strong>Disputed</strong></td>
            <td>Vendor contests the finding, claiming it is an intended feature or poses no risk.</td>
          </tr>
          <tr>
            <td><strong>Rejected</strong></td>
            <td>Record cancelled because it was a duplicate or not a valid security flaw.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">5. DSSSB High-Yield Exam Traps</span>
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
  // Spread 17: Pages 35 & 36
  {
    spreadId: 17,
    left: {
      pageNumber: 35,
      runningHead: 'TOPIC 18 • CVSS V3.1 SCORING SYSTEM',
      content: `
    ${makeHeader(18, 'Common Vulnerability Scoring System (CVSS)', 'CVSS v3.1 Framework & Severity Scale')}

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
            <th>Action Required</th>
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
    </div>

    <div class="section-block">
      <span class="section-label">2. The 3 CVSS Metric Groups (Q172)</span>
      <p>• <strong>Base Metrics:</strong> Intrinsic qualities of the flaw that do not change over time.<br>
      • <strong>Temporal Metrics:</strong> Factors that change over time (exploit code availability, official patches).<br>
      • <strong>Environmental Metrics:</strong> Customizes the score based on an organization's specific defenses.</p>
    </div>`
    },
    right: {
      pageNumber: 36,
      runningHead: 'TOPIC 18 • CVSS VECTOR STRINGS & EXAM TRAPS',
      content: `
    ${makeHeader(18, 'Common Vulnerability Scoring System (CVSS)', 'CVSS Base Metrics, Vector Strings & DSSSB Exam Traps')}

    <div class="section-block">
      <span class="section-label">3. Base Exploitability & Vector Strings (Q173)</span>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Example Vector: Log4Shell (CVSS 10.0 Critical)</span>
          <span class="statute-tag">CVSS:3.1 Vector</span>
        </div>
        <p><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H</code></p>
        <p>• <strong>Attack Vector (AV):</strong> <strong>Network [N]</strong> (highest severity; reachable over internet), Adjacent [A], Local [L], Physical [P].<br>
        • <strong>Attack Complexity (AC):</strong> Low [L], High [H].<br>
        • <strong>Privileges Required (PR):</strong> None [N], Low [L], High [H].<br>
        • <strong>User Interaction (UI):</strong> None [N], Required [R].<br>
        • <strong>Scope (S):</strong> Unchanged [U], Changed [C].<br>
        • <strong>Impact Metrics:</strong> Confidentiality [C], Integrity [I], Availability [A] (None, Low, High).</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Score Range (Q171):</strong> <strong>0.0 to 10.0</strong>.<br>
        • <strong>Critical Rating:</strong> <strong>9.0 to 10.0</strong>.<br>
        • <strong>High Rating:</strong> <strong>7.0 to 8.9</strong>.<br>
        • <strong>Medium Rating:</strong> <strong>4.0 to 6.9</strong>.<br>
        • <strong>Custodian:</strong> Maintained by <strong>FIRST.Org</strong>.<br>
        • <strong>Highest Attack Vector (Q173):</strong> <strong>Network (AV:N)</strong> carries the highest score because anyone on the internet can reach it.</p>
      </div>
    </div>

    ${makeQuizCTA(18, 'CVSS Metrics & Scoring', 17)}`
    }
  },

  // =========================================================================
  // TOPIC 19: VULNERABILITY ASSESSMENT TOOLS AND TECHNIQUES
  // =========================================================================
  // Spread 18: Pages 37 & 38
  {
    spreadId: 18,
    left: {
      pageNumber: 37,
      runningHead: 'TOPIC 19 • 5-PHASE VA LIFECYCLE',
      content: `
    ${makeHeader(19, 'Vulnerability Assessment Tools and Techniques', 'The 5-Phase Vulnerability Assessment Lifecycle')}

    <div class="intro-abstract">
      <p>A <strong>Vulnerability Assessment (VA)</strong> is the systematic review of security weaknesses in an information system. It evaluates if the system is susceptible to any known vulnerabilities and assigns severity levels to those vulnerabilities.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The 5-Phase VA Lifecycle (Q181)</span>
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
      <p style="margin-top: 8px;">• <strong>Phase 5 (Reporting & Remediation):</strong> Deliver remediation roadmaps to admins, patch flaws, and perform re-scans to verify fixes.</p>
    </div>`
    },
    right: {
      pageNumber: 38,
      runningHead: 'TOPIC 19 • VA SCANNERS & EXAM TRAPS',
      content: `
    ${makeHeader(19, 'Vulnerability Assessment Tools and Techniques', 'Credentialed Scans, Scanners & DSSSB Exam Traps')}

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
            <td>Open ports, service banners, protocols</td>
            <td>Installed packages, registry, patches, permissions</td>
          </tr>
          <tr>
            <td><strong>Accuracy</strong></td>
            <td>Higher false positives (guesses by banner)</td>
            <td><strong>High accuracy; near-zero false positives!</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">3. Leading VA Tools & CISA KEV (Q183)</span>
      <p>• <strong>Tenable Nessus:</strong> Market leader; uses proprietary <strong>NASL (Nessus Attack Scripting Language)</strong> plugins.<br>
      • <strong>Greenbone OpenVAS:</strong> Premier open-source full-featured vulnerability scanner.<br>
      • <strong>CISA KEV Catalog:</strong> Federal database of bugs actively exploited in the real world.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>5-Phase Lifecycle (Q181):</strong> Planning &rarr; Discovery &rarr; Scanning &rarr; Analysis &rarr; Remediation.<br>
        • <strong>Credentialed Scan (Q182):</strong> Logs into target with admin credentials; reads registry and software packages; lowest false positives.<br>
        • <strong>Nessus Plugin Language (Q183):</strong> Uses <strong>NASL</strong>.<br>
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
  // Spread 19: Pages 39 & 40
  {
    spreadId: 19,
    left: {
      pageNumber: 39,
      runningHead: 'TOPIC 20 • PTES STANDARD & NMAP SCANS',
      content: `
    ${makeHeader(20, 'Penetration Testing and Its Methods/Tools', 'Penetration Testing Frameworks (PTES) & Nmap Scanning')}

    <div class="intro-abstract">
      <p><strong>Penetration Testing (Ethical Hacking)</strong> is the authorized, simulated cyberattack against an IT system to evaluate security. It actively exploits vulnerabilities to prove real-world business risk.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The PTES 7 Phases (Q191)</span>
      <p>The <strong>Penetration Testing Execution Standard (PTES)</strong> defines 7 sequential phases:</p>
      <p>1. Pre-engagement &rarr; 2. Intelligence Gathering (OSINT) &rarr; 3. Threat Modeling &rarr; 4. Vulnerability Analysis &rarr; 5. Exploitation &rarr; 6. Post-Exploitation &rarr; 7. Reporting.</p>
    </div>

    <div class="section-block">
      <span class="section-label">2. Essential Nmap Port Scanning Commands (Q192)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">nmap -sS (SYN Stealth Scan)</span>
            <span class="statute-tag">Half-Open Scan</span>
          </div>
          <p>• Sends SYN; receives SYN-ACK; immediately sends RST to tear down connection.<br>
          • Never completes full 3-way handshake; evades naive logging. Requires root!</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">nmap -sT (TCP Connect Scan)</span>
            <span class="statute-tag">Full 3-Way Handshake</span>
          </div>
          <p>• Completes full 3-way handshake (SYN &rarr; SYN-ACK &rarr; ACK).<br>
          • Used when tester lacks root/administrator privileges.</p>
        </div>
      </div>
      <p style="margin-top: 8px;">• <strong>Core Port States:</strong> <strong>Open</strong> (service listening), <strong>Closed</strong> (host returned RST), <strong>Filtered</strong> (firewall dropped probe).</p>
    </div>`
    },
    right: {
      pageNumber: 40,
      runningHead: 'TOPIC 20 • METASPLOIT, BURP SUITE & EXAM TRAPS',
      content: `
    ${makeHeader(20, 'Penetration Testing and Its Methods/Tools', 'Exploitation Tools: Metasploit, Meterpreter & Burp Suite')}

    <div class="section-block">
      <span class="section-label">3. The Metasploit Framework & Meterpreter (Q193)</span>
      <p>Created by H.D. Moore, Metasploit is the world's most widely used exploitation framework:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">The Meterpreter Advantage (Forensic Stealth)</span>
          <span class="statute-tag">In-Memory DLL Injection</span>
        </div>
        <p>Meterpreter runs <strong>entirely in volatile RAM</strong> using Reflective DLL injection. It never writes an executable file to the hard drive, completely evading traditional disk-based antivirus scanners!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Burp Suite (Web Application Testing)</span>
      <p>Acts as an <strong>Interception Proxy</strong> between the browser and target web server, allowing testers to view and tamper with HTTP requests in real-time (Proxy, Repeater, Intruder).</p>
    </div>

    <div class="section-block">
      <span class="section-label">5. DSSSB High-Yield Exam Traps</span>
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
