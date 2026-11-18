// Part 3: Topics 11–15 (Spreads 20–29, Pages 41–60)
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
  // TOPIC 11: DIGITAL SIGNATURE
  // =========================================================================
  // Spread 20: Pages 41 & 42
  {
    spreadId: 20,
    left: {
      pageNumber: 41,
      runningHead: 'TOPIC 11 • DIGITAL SIGNATURE ARCHITECTURE',
      content: `
    ${makeHeader(11, 'Digital Signature', 'Digital Signature Architecture & Signing Mechanics', 1)}

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
    </div>`
    },
    right: {
      pageNumber: 42,
      runningHead: 'TOPIC 11 • THREE SERVICES OF DIGITAL SIGNATURES',
      content: `
    ${makeHeader(11, 'Digital Signature', 'The Triad of Security Services & Standards', 2)}

    <div class="section-block">
      <span class="section-label">2. The 3 Security Services Provided (Q102)</span>
      <p>A digital signature simultaneously provides three critical security guarantees:</p>
      <ul class="forensic-list">
        <li><strong>1. Sender Authentication:</strong> Proves who signed it. Only Alice holds her private key.</li>
        <li><strong>2. Message Integrity:</strong> Proves the document was not altered. Modifying a single character alters the hash, breaking verification!</li>
        <li><strong>3. Non-repudiation:</strong> Alice cannot legally deny having signed the document.</li>
      </ul>
      <p><em>Note:</em> A digital signature alone does NOT provide confidentiality (the document itself is not encrypted unless combined with hybrid encryption).</p>
    </div>

    <div class="section-block">
      <span class="section-label">3. Standard Digital Signature Algorithms</span>
      <p>• <strong>RSA Signatures (RSA-PSS):</strong> Most widely used standard.<br>
      • <strong>DSA (Digital Signature Algorithm):</strong> NIST standard based on discrete logarithms.<br>
      • <strong>ECDSA (Elliptic Curve DSA):</strong> High speed, smaller keys; used in Bitcoin and mobile banking.</p>
    </div>

    ${makeContinuation(11, 'Digital Signature', 'Legal Validity & DSSSB Exam Traps', 10)}`
    }
  },

  // Spread 21: Pages 43 & 44
  {
    spreadId: 21,
    left: {
      pageNumber: 43,
      runningHead: 'TOPIC 11 • LEGAL STATUS & INDIAN IT ACT',
      content: `
    ${makeHeader(11, 'Digital Signature', 'Legal Status under Indian IT Act 2000', 3)}

    <div class="section-block">
      <span class="section-label">4. Digital Signatures under Indian Law (Q103)</span>
      <p>Under the <strong>Indian Information Technology Act, 2000</strong>, digital signatures are formally recognized as legally binding:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Section 3: Authentication</span>
            <span class="statute-tag">IT Act 2000</span>
          </div>
          <p>Specifies that electronic records shall be authenticated by means of a digital signature created using asymmetric cryptosystems and hash functions.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Section 3A: Electronic Signatures</span>
            <span class="statute-tag">Aadhaar eSign</span>
          </div>
          <p>Introduced in 2008 amendments to recognize modern electronic signature techniques (like Aadhaar eSign via OTP) alongside asymmetric digital signatures.</p>
        </div>
      </div>
    </div>`
    },
    right: {
      pageNumber: 44,
      runningHead: 'TOPIC 11 • SIGNATURE EXAM TRAPS',
      content: `
    ${makeHeader(11, 'Digital Signature', 'Signature Comparison & DSSSB High-Yield Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">5. Encryption vs Digital Signature (Crucial Comparison)</span>
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
      <span class="section-label">6. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Signing Key (Q101):</strong> Always the <strong>Sender's Private Key</strong>.<br>
        • <strong>Verification Key:</strong> Always the <strong>Sender's Public Key</strong>.<br>
        • <strong>Services (Q102):</strong> Authentication, Integrity, Non-repudiation (NOT confidentiality!).<br>
        • <strong>Legal Section:</strong> Section 3 of the Indian Information Technology Act, 2000.</p>
      </div>
    </div>

    ${makeQuizCTA(11, 'Digital Signature', 10)}`
    }
  },

  // =========================================================================
  // TOPIC 12: DIGITAL CERTIFICATE & CERTIFYING AUTHORITIES (CA)
  // =========================================================================
  // Spread 22: Pages 45 & 46
  {
    spreadId: 22,
    left: {
      pageNumber: 45,
      runningHead: 'TOPIC 12 • DIGITAL CERTIFICATES & X.509',
      content: `
    ${makeHeader(12, 'Digital Certificate & Certifying Authorities (CA)', 'The ITU-T X.509 v3 Digital Certificate Standard', 1)}

    <div class="intro-abstract">
      <p>Anyone can generate a public-private key pair and claim to be a bank. A <strong>Digital Certificate</strong> solves this identity problem by cryptographically binding a Public Key to a real-world identity (individual, organization, or website domain), signed by a trusted third party called a <strong>Certifying Authority (CA)</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. What is an X.509 Digital Certificate? (Q111)</span>
      <p>Standardized by the ITU-T as <strong>X.509 version 3</strong>, it is the universal passport of the internet (powering HTTPS / SSL / TLS locks in web browsers).</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Essential X.509 Fields</span>
            <span class="statute-tag">Standard Fields</span>
          </div>
          <p>• <strong>Subject:</strong> Identity of certificate owner (e.g., <code>CN=www.google.com</code>).<br>
          • <strong>Public Key:</strong> The owner's public key (RSA/ECC) and algorithm.<br>
          • <strong>Issuer:</strong> Name of the Certifying Authority that signed it.<br>
          • <strong>Validity Period:</strong> <code>Not Before</code> and <code>Not After</code> dates.<br>
          • <strong>Serial Number:</strong> Unique identifier assigned by the CA.<br>
          • <strong>Digital Signature:</strong> CA's cryptographic signature over all above fields!</p>
        </div>
      </div>
    </div>`
    },
    right: {
      pageNumber: 46,
      runningHead: 'TOPIC 12 • CERTIFYING AUTHORITIES & CHAIN OF TRUST',
      content: `
    ${makeHeader(12, 'Digital Certificate & Certifying Authorities (CA)', 'Certifying Authorities (CAs) & The Chain of Trust', 2)}

    <div class="section-block">
      <span class="section-label">2. The Hierarchical PKI Chain of Trust (Q112)</span>
      <p>How does your computer know whether to trust a website certificate?</p>
      <ul class="forensic-list">
        <li><strong>Root CA (Anchor of Trust):</strong> The master authority. Its certificate is <strong>self-signed</strong> and pre-installed directly inside operating systems (Windows, macOS) and web browsers (Chrome, Firefox).</li>
        <li><strong>Intermediate CA:</strong> Subordinate CAs signed by the Root CA. They issue certificates to daily websites and servers. This keeps the valuable Root CA securely locked in an offline vault!</li>
        <li><strong>End-Entity (Leaf) Certificate:</strong> Issued to the actual website (e.g., <code>bank.com</code>).</li>
      </ul>
      <p>Your browser validates the leaf certificate against the intermediate CA, and the intermediate against the pre-installed Root CA!</p>
    </div>

    <div class="section-block">
      <span class="section-label">3. CAs in India (CCA Authority)</span>
      <p>In India, under Section 17 of the IT Act 2000, the <strong>Controller of Certifying Authorities (CCA)</strong> licenses and supervises CAs (e.g., eMudhra, (n)Code Solutions, Capricorn, SafeScrypt).</p>
    </div>

    ${makeContinuation(12, 'Digital Certificates & CAs', 'Certificate Revocation: CRL vs OCSP & Exam Traps', 11)}`
    }
  },

  // Spread 23: Pages 47 & 48
  {
    spreadId: 23,
    left: {
      pageNumber: 47,
      runningHead: 'TOPIC 12 • CERTIFICATE REVOCATION (CRL & OCSP)',
      content: `
    ${makeHeader(12, 'Digital Certificate & Certifying Authorities (CA)', 'Certificate Revocation Mechanisms: CRL vs. OCSP', 3)}

    <div class="section-block">
      <span class="section-label">4. Why Certificates Must Be Revoked (Q113)</span>
      <p>If a website's private key is stolen by hackers before its expiration date, the CA must revoke the certificate so visitors are warned.</p>
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">1. Certificate Revocation List (CRL)</span>
            <span class="statute-tag">Periodic List</span>
          </div>
          <p>• A time-stamped, CA-signed list of revoked certificate serial numbers.<br>
          • <em>Drawback:</em> Files become huge; clients only download it periodically, causing security delays.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">2. OCSP (Online Certificate Status)</span>
            <span class="statute-tag">Real-Time Query</span>
          </div>
          <p>• Browser queries the CA directly in real-time: <em>"Is certificate #1234 still good?"</em><br>
          • CA answers immediately: <code>Good</code>, <code>Revoked</code>, or <code>Unknown</code>.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">5. OCSP Stapling (Modern Standard)</span>
      <p>To avoid browser delays and protect privacy, the web server queries the CA periodically, caches the signed OCSP response, and "staples" it to the initial TLS handshake for visitors.</p>
    </div>`
    },
    right: {
      pageNumber: 48,
      runningHead: 'TOPIC 12 • CERTIFICATE EXAM TRAPS',
      content: `
    ${makeHeader(12, 'Digital Certificate & Certifying Authorities (CA)', 'Certificate Architecture & DSSSB High-Yield Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">6. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Primary Purpose (Q111):</strong> Binds a Public Key to an authenticated identity, signed by a CA.<br>
        • <strong>Global Standard:</strong> ITU-T <strong>X.509 version 3</strong>.<br>
        • <strong>Root CA Trust:</strong> Root certificates are <strong>self-signed</strong> and pre-installed in OS trust stores.<br>
        • <strong>Revocation Checking (Q113):</strong> CRL (downloaded list) vs. OCSP (real-time query).<br>
        • <strong>Indian Authority:</strong> The <strong>Controller of Certifying Authorities (CCA)</strong> licenses CAs under Section 17 of the IT Act, 2000.</p>
      </div>
    </div>

    ${makeQuizCTA(12, 'Digital Certificates & CAs', 11)}`
    }
  },

  // =========================================================================
  // TOPIC 13: STEGANALYSIS AND ITS CHALLENGES
  // =========================================================================
  // Spread 24: Pages 49 & 50
  {
    spreadId: 24,
    left: {
      pageNumber: 49,
      runningHead: 'TOPIC 13 • STEGANALYSIS FOUNDATIONS',
      content: `
    ${makeHeader(13, 'Steganalysis and its challenges', 'Steganalysis Foundations & Forensic Goals', 1)}

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
          <p>Determining whether a suspicious image, audio, or video file contains an embedded secret payload.</p>
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
        <p>Modifying the carrier file (e.g., re-compressing, adding light noise) so any hidden message is destroyed without ruining the visible picture.</p>
      </div>
    </div>`
    },
    right: {
      pageNumber: 50,
      runningHead: 'TOPIC 13 • STEGANALYSIS DETECTION TECHNIQUES',
      content: `
    ${makeHeader(13, 'Steganalysis and its challenges', 'Structural, Visual & Bit-Plane Slicing Steganalysis', 2)}

    <div class="section-block">
      <span class="section-label">2. Visual & Structural Steganalysis (Q122)</span>
      <ul class="forensic-list">
        <li><strong>Visual Inspection:</strong> Looking for unusual visual artifacts, noise patterns, or color banding in flat image areas.</li>
        <li><strong>EOF (End-of-File) File Append Analysis:</strong> Naive tools simply append secret files past the JPEG end-of-file marker (<code>FF D9</code>). Forensics tools detect this immediately because the file size on disk is larger than the image dimensions require!</li>
        <li><strong>Bit-Plane Slicing:</strong> Separates an image into 8 binary layers. The Least Significant Bit (Bit 0) plane is inspected. In normal images, it looks like random camera noise; if structured data or text is embedded, unnatural patterns appear!</li>
      </ul>
    </div>

    ${makeContinuation(13, 'Steganalysis & Challenges', 'Statistical Steganalysis (Chi-Square) & Major Roadblocks', 12)}`
    }
  },

  // Spread 25: Pages 51 & 52
  {
    spreadId: 25,
    left: {
      pageNumber: 51,
      runningHead: 'TOPIC 13 • STATISTICAL STEGANALYSIS',
      content: `
    ${makeHeader(13, 'Steganalysis and its challenges', 'Statistical Steganalysis: The Chi-Square Attack', 3)}

    <div class="section-block">
      <span class="section-label">3. The Chi-Square (&chi;&sup2;) Statistical Attack (Q123)</span>
      <p>Developed by Andreas Westfeld and Andreas Pfitzmann, the <strong>Chi-Square Attack</strong> is the classic mathematical method for detecting LSB replacement steganography:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Pairs of Values (PoV) Theory</span>
          <span class="statute-tag">Statistical Equalization</span>
        </div>
        <p>• In normal images, adjacent pixel color values (like 200 and 201) have naturally different frequencies.<br>
        • When secret random bits are embedded using LSB replacement, the counts of even and odd values (200 &harr; 201) <strong>equalize statistically</strong>!<br>
        • The Chi-square test mathematically measures this equalization. If the frequencies are artificially balanced, LSB steganography is detected with near-100% certainty!</p>
      </div>
    </div>`
    },
    right: {
      pageNumber: 52,
      runningHead: 'TOPIC 13 • STEGANALYSIS CHALLENGES & TRAPS',
      content: `
    ${makeHeader(13, 'Steganalysis and its challenges', 'Major Steganalysis Challenges & DSSSB Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">4. The Big Challenges in Modern Steganalysis</span>
      <ul class="forensic-list">
        <li><strong>No Original Cover Image:</strong> Forensic examiners rarely have the original untainted image to compare against (Stego-Only Attack).</li>
        <li><strong>Adaptive Steganography:</strong> Modern malware uses advanced algorithms (HUGO, WOW, S-UNIWARD) that hide data exclusively in complex textures and noisy foliage, where statistical tests cannot detect it.</li>
        <li><strong>Encryption Before Embedding:</strong> Attackers encrypt the payload before embedding it. Even if carved out, it looks like pure random noise!</li>
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
  // Spread 26: Pages 53 & 54
  {
    spreadId: 26,
    left: {
      pageNumber: 53,
      runningHead: 'TOPIC 14 • VAPT FOUNDATIONS & COMPARISON',
      content: `
    ${makeHeader(14, 'Vulnerability Assessment and Penetration Testing (VAPT)', 'Vulnerability Assessment vs. Penetration Testing', 1)}

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
            <td>NO active exploitation (safe, passive)</td>
            <td>YES; actively exploits flaws to simulate hackers</td>
          </tr>
          <tr>
            <td><strong>Frequency</strong></td>
            <td>Continuous or frequent (weekly/monthly)</td>
            <td>Periodic (annual or after major app updates)</td>
          </tr>
          <tr>
            <td><strong>Deliverable</strong></td>
            <td>Prioritized list of known vulnerabilities</td>
            <td>Proof-of-Concept (PoC) showing compromised data</td>
          </tr>
        </tbody>
      </table>
    </div>`
    },
    right: {
      pageNumber: 54,
      runningHead: 'TOPIC 14 • PENTEST TESTING MODELS',
      content: `
    ${makeHeader(14, 'Vulnerability Assessment and Penetration Testing (VAPT)', 'Penetration Testing Engagement Models: Black/White/Grey Box', 2)}

    <div class="section-block">
      <span class="section-label">2. The Three Penetration Testing Models (Q132)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Black-Box Testing</span>
            <span class="statute-tag">Zero Knowledge</span>
          </div>
          <p>• Tester is given <strong>no prior information</strong> about internal architecture, source code, or network diagrams.<br>
          • Simulates an external hacker on the public internet.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. White-Box Testing</span>
            <span class="statute-tag">Full Knowledge</span>
          </div>
          <p>• Tester is provided <strong>full access</strong> to source code, network diagrams, admin credentials, and documentation.<br>
          • Extremely thorough; identifies deep logic and architectural bugs.</p>
        </div>
      </div>
      <div class="statute-card card-amber" style="margin-top: 10px;">
        <div class="statute-header">
          <span class="statute-section">3. Grey-Box Testing (Most Common)</span>
          <span class="statute-tag">Partial Knowledge</span>
        </div>
        <p>• Tester is given partial information (e.g., normal low-privilege user credentials and basic architecture).<br>
        • Simulates an insider threat, disgruntled employee, or compromised customer account.</p>
      </div>
    </div>

    ${makeContinuation(14, 'VAPT Fundamentals', 'Rules of Engagement & DSSSB Exam Traps', 13)}`
    }
  },

  // Spread 27: Pages 55 & 56
  {
    spreadId: 27,
    left: {
      pageNumber: 55,
      runningHead: 'TOPIC 14 • RULES OF ENGAGEMENT & SCOPING',
      content: `
    ${makeHeader(14, 'Vulnerability Assessment and Penetration Testing (VAPT)', 'Rules of Engagement (ROE) & Legal Scoping', 3)}

    <div class="section-block">
      <span class="section-label">3. The Legal Requirement: Rules of Engagement (ROE)</span>
      <p>Penetration testing without explicit written authorization is a <strong>criminal cyber crime</strong> under Section 43 and Section 66 of the Indian Information Technology Act, 2000! Professional testing mandates:</p>
      <ul class="forensic-list">
        <li><strong>Scoping:</strong> Explicit list of in-scope IP addresses, web domains, and APIs.</li>
        <li><strong>Exclusions:</strong> Production servers or critical systems that must NOT be tested (e.g., DoS attacks and third-party payment gateways excluded).</li>
        <li><strong>Testing Windows:</strong> Agreed maintenance hours (e.g., midnight to 4 AM) to prevent business disruption.</li>
        <li><strong>Written Authorization:</strong> Formal signed liability release from corporate executive leadership.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 56,
      runningHead: 'TOPIC 14 • VAPT EXAM TRAPS & TAKEAWAYS',
      content: `
    ${makeHeader(14, 'Vulnerability Assessment and Penetration Testing (VAPT)', 'VAPT Summary & DSSSB High-Yield Exam Traps', 4)}

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
  // Spread 28: Pages 57 & 58
  {
    spreadId: 28,
    left: {
      pageNumber: 57,
      runningHead: 'TOPIC 15 • VULNERABILITY VS WEAKNESS (CVE VS CWE)',
      content: `
    ${makeHeader(15, 'Vulnerability v/s Weakness & Types of Vulnerabilities (Input Validation)', 'Vulnerability vs. Weakness: Formal Definitions & CWE vs. CVE', 1)}

    <div class="intro-abstract">
      <p>In cybersecurity, the terms "weakness" and "vulnerability" are frequently used interchangeably in conversation, but they have precise, distinct definitions standardized by MITRE and NIST.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Vulnerability vs. Weakness Distinction (Q141)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Weakness (CWE)</span>
            <span class="statute-tag">The Underlying Flaw</span>
          </div>
          <p>• A flaw, bug, or design mistake in code or architecture that <em>could</em> lead to a security problem under the right conditions.<br>
          • <em>Analogy:</em> A weak, hollow wooden door.<br>
          • <em>Standard:</em> <strong>Common Weakness Enumeration (CWE)</strong> (e.g., CWE-89: SQL Injection, CWE-79: Cross-Site Scripting).</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Vulnerability (CVE)</span>
            <span class="statute-tag">The Exploitable Bug</span>
          </div>
          <p>• A specific mistake in an actual software product that can be directly exploited by an attacker to violate security.<br>
          • <em>Analogy:</em> A burglar kicking open the hollow door to steal money.<br>
          • <em>Standard:</em> <strong>Common Vulnerabilities and Exposures (CVE)</strong> (e.g., CVE-2021-44228: Log4Shell).</p>
        </div>
      </div>
    </div>`
    },
    right: {
      pageNumber: 58,
      runningHead: 'TOPIC 15 • SQL INJECTION (SQLi / CWE-89)',
      content: `
    ${makeHeader(15, 'Vulnerability v/s Weakness & Types of Vulnerabilities (Input Validation)', 'SQL Injection (SQLi / CWE-89) & Parameterized Defenses', 2)}

    <div class="section-block">
      <span class="section-label">2. What is SQL Injection (SQLi)? (Q142)</span>
      <p>Occurs when untrusted user input is directly concatenated into dynamic database SQL queries without validation or escaping:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Classic SQLi Example</span>
          <span class="statute-tag">Authentication Bypass</span>
        </div>
        <p>• Application Query: <code>SELECT * FROM users WHERE user = 'USER_INPUT' AND pass = 'PASS';</code><br>
        • Attacker Inputs: <code>admin' OR '1'='1</code><br>
        • Resulting Query: <code>SELECT * FROM users WHERE user = 'admin' OR '1'='1' AND pass = '';</code><br>
        • <em>Impact:</em> The condition <code>'1'='1'</code> is always TRUE! The attacker logs in as administrator without knowing the password!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Primary Defense Against SQLi</span>
      <p>The definitive defense against SQL injection is **Parameterized Queries (Prepared Statements)**. The database treats user input strictly as harmless data literals, never as executable code!</p>
    </div>

    ${makeContinuation(15, 'Vulnerability vs Weakness & SQLi', 'Cross-Site Scripting (XSS) & Command Injection', 14)}`
    }
  },

  // Spread 29: Pages 59 & 60
  {
    spreadId: 29,
    left: {
      pageNumber: 59,
      runningHead: 'TOPIC 15 • CROSS-SITE SCRIPTING (XSS / CWE-79)',
      content: `
    ${makeHeader(15, 'Vulnerability v/s Weakness & Types of Vulnerabilities (Input Validation)', 'Cross-Site Scripting (XSS / CWE-79) Types & Defenses', 3)}

    <div class="section-block">
      <span class="section-label">4. What is Cross-Site Scripting (XSS)? (Q143)</span>
      <p>Occurs when a web application takes untrusted input and sends it to the web browser without proper encoding. The attacker's malicious JavaScript executes directly inside the victim's browser session!</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Stored (Persistent) XSS</span>
            <span class="statute-tag">Most Dangerous</span>
          </div>
          <p>Payload is permanently saved in the database (e.g., in a blog comment or profile name). Every user who visits the page executes the malicious script!</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. Reflected (Non-Persistent) XSS</span>
            <span class="statute-tag">Link Phishing</span>
          </div>
          <p>Payload is embedded in a malicious URL link. When the victim clicks the link, the server reflects the script back into the error or search page.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">5. Defenses Against XSS</span>
      <p>• <strong>Context-aware output HTML encoding:</strong> Converting <code>&lt;</code> to <code>&amp;lt;</code>.<br>
      • <strong>HttpOnly Cookie Flag:</strong> Prevents JavaScript from reading session cookies via <code>document.cookie</code>.<br>
      • <strong>Content Security Policy (CSP):</strong> Restricts where scripts can be loaded from.</p>
    </div>`
    },
    right: {
      pageNumber: 60,
      runningHead: 'TOPIC 15 • INJECTION EXAM TRAPS & TAKEAWAYS',
      content: `
    ${makeHeader(15, 'Vulnerability v/s Weakness & Types of Vulnerabilities (Input Validation)', 'Input Validation Vulnerabilities Summary & DSSSB Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">6. Command Injection & Path Traversal</span>
      <ul class="forensic-list">
        <li><strong>Command Injection (CWE-78):</strong> Attacker appends shell characters (e.g., <code>; cat /etc/passwd</code>) to execute arbitrary operating system commands.</li>
        <li><strong>Path Traversal (CWE-22 / Directory Traversal):</strong> Attacker uses dot-dot-slash (<code>../../../../etc/passwd</code>) to escape the web root folder and read sensitive operating system files.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">7. DSSSB High-Yield Exam Traps</span>
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
  }
];
