// Spreads Part 3: Spreads 11 to 15 (Pages 21 to 30)
module.exports = [
  // SPREAD 11 (Pages 21–22): Topic 7A: Digital Signatures — Architecture, Algorithms & Non-Repudiation
  {
    spreadId: 10,
    left: {
      pageNumber: 21,
      runningHead: "CH. 11 • DIGITAL SIGNATURE ARCHITECTURE",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 11 • Digital Signatures & Accountability</span>
      <h2>Digital Signature Architecture, Key Operations & Non-Repudiation</h2>
    </div>
    <p>A <strong>Digital Signature</strong> is the mathematical analogue of a notarized handwritten signature, simultaneously establishing three critical security pillars: <strong>Signer Authentication</strong>, <strong>Data Integrity</strong>, and <strong>Non-Repudiation</strong> (<strong>Q101</strong>).</p>

    <div class="section-block">
      <span class="section-label">1. The Two Cryptographic Operations in Digital Signatures (Q102, Q103, Q108)</span>
      <div class="statutory-grid">
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Signing Operation (Sender) (Q102)</span>
            <span class="statute-tag">Sender's Private Key</span>
          </div>
          <p>1. The sender calculates the cryptographic hash (digest) of the document.<br>
          2. The sender encrypts the digest with their own <strong>PRIVATE KEY</strong>: <code>Signature = Encrypt(Digest, Sender_Private_Key)</code>.<br>
          3. The signature is appended to the message.</p>
        </div>

        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Verification Operation (Recipient) (Q103)</span>
            <span class="statute-tag">Sender's Public Key</span>
          </div>
          <p>1. The recipient decrypts the signature using the <strong>SENDER'S PUBLIC KEY</strong> to recover the signed digest.<br>
          2. The recipient independently hashes the received document.<br>
          3. If the recovered digest matches the computed hash, the signature is 100% authentic!</p>
        </div>
      </div>
      <p class="caption"><strong>Why Sign the Hash, Not Raw Data? (Q108):</strong> Asymmetric math is slow and restricted to small key blocks. Hashing arbitrary-length files into a 256-bit digest ensures high performance and prevents algebraic structural attacks.</p>
    </div>

    <div class="section-block">
      <span class="section-label">2. Non-Repudiation & The Shared Key Problem (Q104)</span>
      <p>Symmetric MACs (like HMAC) cannot provide legal Non-Repudiation because both parties share the exact same key. If a dispute arises, the recipient could have generated the MAC tag themselves! Non-repudiation strictly requires asymmetric signatures where <strong>only the sender holds the private signing key</strong>.</p>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q101–Q104):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Triad of Services (Q101):</strong> Signer Authentication, Data Integrity, and Non-Repudiation.</li>
        <li><strong>Signing Key (Q102):</strong> The sender signs the digest with their <strong>Private Key</strong>.</li>
        <li><strong>Verification Key (Q103):</strong> The recipient verifies the signature with the sender's <strong>Public Key</strong>.</li>
        <li><strong>Symmetric Limitation (Q104):</strong> Shared keys allow either party to forge data, destroying non-repudiation.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 22,
      runningHead: "CH. 11 • SIGNATURE ALGORITHMS & IT ACT",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Algorithms & Statutory Frameworks</span>
      <h2>RSA-PSS, DSA, ECDSA, Ed25519 & The Indian IT Act 2000</h2>
    </div>
    <p>Exploring modern signature algorithms and their statutory recognition in cyber forensics and commercial law:</p>

    <div class="section-block">
      <span class="section-label">1. Modern Digital Signature Algorithms (Q105, Q106, Q107, Q109)</span>
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Mathematical Foundation</th>
              <th>Key Strengths & Standards</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>RSA-PSS (Q105)</strong></td>
              <td>Prime Factorization (PKCS#1 v2.1)</td>
              <td>Probabilistic Signature Scheme; incorporates random salt to provide provable security against forgeries.</td>
            </tr>
            <tr>
              <td><strong>DSA (FIPS 186) (Q106)</strong></td>
              <td>Modular Discrete Logarithms</td>
              <td>NIST standalone signature standard; signatures only (no encryption).</td>
            </tr>
            <tr>
              <td><strong>ECDSA (Q107)</strong></td>
              <td>Elliptic Curve Discrete Logs</td>
              <td>Dramatically smaller key sizes (256-bit ECDSA &asymp; 3072-bit RSA) with high mobile efficiency.</td>
            </tr>
            <tr>
              <td><strong>Ed25519 (Q109)</strong></td>
              <td>Curve25519 Edwards Curve</td>
              <td>Constant-time signature generation, completely immune to side-channel cache-timing attacks (RFC 8032).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Statutory Framework: Indian IT Act 2000 (Q110)</span>
      <div class="alert-box">
        <strong>Section 3 & Section 2(1)(p) of IT Act 2000 (Q110):</strong>
        <p>Under the Indian Information Technology Act 2000, an electronic record is legally authenticated as a <strong>Digital Signature</strong> strictly when it is generated using an <strong>asymmetric crypto-system and a cryptographic hash function</strong>, where the public key is certified by a licensed Certifying Authority (CA).</p>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q105–Q110):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>RSA-PSS (Q105):</strong> Probabilistic signature scheme with random salts for provable security.</li>
        <li><strong>DSA Standard (Q106):</strong> NIST FIPS 186 standard based on modular sub-group discrete logarithms.</li>
        <li><strong>ECDSA (Q107):</strong> Elliptic curve signatures providing 256-bit key equivalence to 3072-bit RSA.</li>
        <li><strong>Digest Signing (Q108):</strong> Signing the hash digest guarantees high speed and fits asymmetric block bounds.</li>
        <li><strong>Ed25519 (Q109):</strong> High-speed constant-time signature algorithm over Curve25519.</li>
        <li><strong>IT Act 2000 (Q110):</strong> Section 3 mandates asymmetric cryptosystems and hash functions for digital signatures.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 11 (Q101–Q110)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on Digital Signature Mechanics, RSA-PSS, ECDSA, Ed25519 & IT Act 2000.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(10)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q101–Q110) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 12 (Pages 23–24): Topic 7B: Digital Certificates, Certifying Authorities & PKI
  {
    spreadId: 11,
    left: {
      pageNumber: 23,
      runningHead: "CH. 12 • DIGITAL CERTIFICATES & X.509",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 12 • Public Key Infrastructure (PKI)</span>
      <h2>Digital Certificates, ITU-T X.509 v3 Standard & Trust Chains</h2>
    </div>
    <p>How do you know a public key belongs to google.com and not a malicious interceptor? <strong>Public Key Infrastructure (PKI)</strong> solves this identity crisis through <strong>Digital Certificates</strong> and trusted <strong>Certifying Authorities (CAs)</strong> (<strong>Q111</strong>).</p>

    <div class="section-block">
      <span class="section-label">1. The ITU-T X.509 v3 Standard (Q112, Q113, Q114)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">X.509 Standard (Q112)</span>
            <span class="statute-tag">RFC 5280 Format</span>
          </div>
          <p>The universal international format for public-key certificates. Cryptographically binds an entity's identity to their public key, digitally signed by a trusted CA.</p>
          <p><strong>Standard Fields (Q113):</strong> Serial Number, Subject (Owner), Issuer (CA), Validity Dates, Subject Public Key Info, and CA Signature. <em>(Private keys are NEVER included!)</em></p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">SAN Extension (Q114)</span>
            <span class="statute-tag">X.509 v3 Multi-Domain</span>
          </div>
          <p>The <strong>Subject Alternative Name (SAN)</strong> extension in X.509 v3 allows a single digital certificate to secure multiple distinct domains, subdomains, and IP addresses (e.g., <code>example.com</code>, <code>api.example.com</code>, <code>mail.example.com</code>).</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. PKI Hierarchy & The Chain of Trust (Q115)</span>
      <p>PKI establishes trust through a hierarchical chain:</p>
      <ul>
        <li><strong>Root CA:</strong> Top-level authority with a self-signed certificate pre-installed in operating system and browser trust stores (Trust Anchor). Kept locked in offline HSM vaults.</li>
        <li><strong>Intermediate CA:</strong> Subordinate CAs signed by the Root CA that handle day-to-day certificate issuance. If compromised, only the intermediate is revoked, protecting the Root CA.</li>
        <li><strong>End-Entity Certificate:</strong> The leaf certificate installed on the web server or client device.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q111–Q115):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Digital Certificate (Q111):</strong> Binds an entity's verified identity to their public key via CA signature.</li>
        <li><strong>X.509 Standard (Q112):</strong> Universal ITU-T/IETF schema defining digital certificate structure.</li>
        <li><strong>Exclusion Rule (Q113):</strong> Digital certificates contain ONLY public keys; private keys are strictly excluded.</li>
        <li><strong>SAN Extension (Q114):</strong> X.509 v3 extension allowing one certificate to secure multiple domains.</li>
        <li><strong>Chain of Trust (Q115):</strong> Hierarchical verification from end-entity through intermediate CAs to a Root CA.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 24,
      runningHead: "CH. 12 • CERTIFICATE REVOCATION & LOGS",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Certificate Lifecycle & Web Defense</span>
      <h2>Revocation (CRL vs. OCSP), Certificate Transparency & DNS CAA</h2>
    </div>
    <p>When a server's private key is leaked, the certificate must be revoked immediately before its expiration date:</p>

    <div class="section-block">
      <span class="section-label">1. Certificate Revocation: CRL vs. OCSP (Q116, Q117, Q118)</span>
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr>
              <th>Revocation Method</th>
              <th>How It Operates</th>
              <th>Forensic Advantages & Trade-offs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>CRL (Revocation List) (Q116)</strong></td>
              <td>A periodically published, CA-signed file listing revoked certificate <strong>serial numbers</strong>.</td>
              <td>High latency! CRL files can grow to hundreds of megabytes; clients only check them periodically.</td>
            </tr>
            <tr>
              <td><strong>OCSP (Real-Time Query) (Q117)</strong></td>
              <td>Lightweight RFC 6960 protocol querying the CA in real time: <em>"Is certificate #123 good?"</em></td>
              <td>Instant real-time status check. Eliminates large CRL file downloads.</td>
            </tr>
            <tr>
              <td><strong>OCSP Stapling (Q118)</strong></td>
              <td>The web server itself caches the CA-signed OCSP response and attaches ("staples") it to the TLS handshake.</td>
              <td>Vastly faster handshake speeds; stops the CA from tracking user browsing habits (privacy protection).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. PKI Transparency & Ecosystem Protections (Q119, Q120)</span>
      <ul>
        <li><strong>Certificate Transparency (CT - RFC 6962) (Q119):</strong> Mandatory security framework requiring all CAs to log newly issued certificates into publicly auditable, append-only Merkle tree logs. Allows domain owners to immediately spot rogue or fraudulent certificates.</li>
        <li><strong>DNS CAA Records (Q120):</strong> A DNS Resource Record (<strong>Certification Authority Authorization</strong>) that explicitly declares which specific CAs are permitted to issue certificates for a domain (e.g. <code>example.com. CAA 0 issue "letsencrypt.org"</code>), preventing unauthorized issuance.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q116–Q120):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>CRL (Q116):</strong> Periodically published signed list of revoked certificate serial numbers.</li>
        <li><strong>OCSP (Q117):</strong> Lightweight RFC 6960 protocol for checking revocation status in real time.</li>
        <li><strong>OCSP Stapling (Q118):</strong> Web server attaches cached CA-signed OCSP response to TLS handshake.</li>
        <li><strong>Certificate Transparency (Q119):</strong> Mandatory append-only public cryptographic audit logs for all CAs.</li>
        <li><strong>DNS CAA Record (Q120):</strong> Declares which specific CAs are authorized to issue certificates for a domain.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 12 (Q111–Q120)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on X.509 Certificates, SAN Extensions, CRL vs OCSP & Certificate Transparency.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(11)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q111–Q120) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 13 (Pages 25–26): Topic 8: Steganalysis and its Challenges
  {
    spreadId: 12,
    left: {
      pageNumber: 25,
      runningHead: "CH. 13 • STEGANALYSIS & BIT-PLANES",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 13 • Forensic Steganalysis</span>
      <h2>Steganalysis Principles, Visual Attacks & Statistical Chi-Square</h2>
    </div>
    <p><strong>Steganalysis</strong> is the forensic science of discovering, detecting, extracting, or destroying concealed data hidden inside carrier files without knowing the stego-key (<strong>Q121</strong>).</p>

    <div class="section-block">
      <span class="section-label">1. Steganalysis Methodologies & Visual Attacks (Q122, Q123)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Targeted vs. Blind (Q122)</span>
            <span class="statute-tag">Methodology</span>
          </div>
          <p><strong>Targeted Steganalysis:</strong> Exploits known mathematical quirks of a specific tool (e.g. Jsteg).<br>
          <strong>Blind (Universal) Steganalysis:</strong> Evaluates generalized statistical features and uses machine learning to detect unknown algorithms.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Bit-Plane Slicing (Q123)</span>
            <span class="statute-tag">Visual Attack</span>
          </div>
          <p>Isolates the least significant bit (0th bit) of all pixels. In clean images, the LSB plane looks like random organic noise. When structured data is embedded sequentially, visible artificial outlines appear!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Statistical Steganalysis & Tools (Q124, Q125, Q126)</span>
      <ul>
        <li><strong>Chi-Square (&chi;<sup>2</sup>) Attack (Q124):</strong> Developed by Westfeld and Pfitzmann. LSB substitution swaps adjacent pixel values (Pairs of Values - PoVs, e.g. 2k and 2k+1), unnaturally equalizing their frequency. A Chi-Square statistical test detects this balance!</li>
        <li><strong>Sample Pair Analysis (SPA) (Q125):</strong> Analyzes spatial correlations between adjacent pixels to estimate the exact embedded payload length with high mathematical precision.</li>
        <li><strong>Forensic Tools (Q126):</strong> <strong>Stegsolve</strong> (Java GUI for bit-plane browsing) and <strong>zsteg</strong> (CLI tool detecting LSB payloads in PNG/BMP).</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q121–Q126):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Steganalysis (Q121):</strong> Detecting, extracting, or neutralizing hidden data inside carrier files.</li>
        <li><strong>Targeted vs Blind (Q122):</strong> Targeted exploits specific tool quirks; Blind detects generalized anomalies.</li>
        <li><strong>Bit-Plane Slicing (Q123):</strong> Isolates the LSB plane to visually reveal artificial data structures.</li>
        <li><strong>Chi-Square Attack (Q124):</strong> Detects LSB replacement by analyzing frequency equalization of Pairs of Values.</li>
        <li><strong>Sample Pair Analysis (Q125):</strong> Calculates embedded message length via adjacent pixel correlation.</li>
        <li><strong>Stegsolve & zsteg (Q126):</strong> Premier forensic utilities for LSB extraction from PNG and BMP files.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 26,
      runningHead: "CH. 13 • CHALLENGES & DESTRUCTIVE DEFENSE",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Forensic Bottlenecks & Sanitization</span>
      <h2>Core Steganalysis Challenges & Destructive Sanitization</h2>
    </div>
    <p>Real-world forensic investigations face severe physical and mathematical hurdles when screening for covert communications:</p>

    <div class="section-block">
      <span class="section-label">1. The 3 Major Challenges in Steganalysis (Q127, Q128, Q129)</span>
      <div class="statutory-grid">
        <div class="statute-card card-penalty">
          <div class="statute-header">
            <span class="statute-section">1. Lossy Compression (Q127)</span>
            <span class="statute-tag badge-penalty">Artifact Distortion</span>
          </div>
          <p>Recompressing images into JPEG or audio into MP3 applies lossy quantization that mathematically discards high-frequency details (including modified LSBs), destroying the payload and confusing detection tools.</p>
        </div>

        <div class="statute-card card-penalty">
          <div class="statute-header">
            <span class="statute-section">2. Pre-Encryption (Q128)</span>
            <span class="statute-tag badge-penalty">Max Entropy Noise</span>
          </div>
          <p>When an attacker encrypts data before embedding, the ciphertext has maximum entropy (flat byte distribution), blending seamlessly into natural camera sensor noise.</p>
        </div>

        <div class="statute-card card-penalty">
          <div class="statute-header">
            <span class="statute-section">3. High False Positives (Q129)</span>
            <span class="statute-tag badge-penalty">Triage Overhead</span>
          </div>
          <p>Complex textures, high-ISO camera photos, or stylized graphic filters trigger false alarms in automated forensic triage across millions of corporate files.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Destructive Steganalysis (Active Warden Defense) (Q130)</span>
      <div class="alert-box">
        <strong>Active Warden Sanitization (Q130):</strong>
        <p>In high-security enterprise perimeters, defenders do not waste cycles extracting hidden data. Instead, they deploy <strong>Destructive Steganalysis</strong>: automatically recompressing JPEGs, re-encoding MP3s, or adding microscopic gaussian noise to all inbound/outbound multimedia. This scrambles any fragile embedded bits, neutralizing the threat while preserving visual quality!</p>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q127–Q130):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Lossy Compression Challenge (Q127):</strong> JPEG/MP3 quantization discards subtle spatial LSB modifications.</li>
        <li><strong>Pre-Encryption Challenge (Q128):</strong> Encrypted payloads mimic natural camera sensor noise.</li>
        <li><strong>High False Positives (Q129):</strong> The greatest practical barrier when screening millions of enterprise files.</li>
        <li><strong>Destructive Steganalysis (Q130):</strong> Sanitizing files (recompressing, resizing) to destroy hidden bits.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 13 (Q121–Q130)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on Steganalysis, Chi-Square Attacks, Stegsolve & Forensic Challenges.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(12)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q121–Q130) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 14 (Pages 27–28): Topic 9 & 10: VAPT Fundamentals & Vulnerability v/s Weakness
  {
    spreadId: 13,
    left: {
      pageNumber: 27,
      runningHead: "CH. 14 • VAPT TESTING & ENGAGEMENT MODELS",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 14 • Vulnerability Management Foundations</span>
      <h2>Vulnerability Assessment vs. Penetration Testing (VAPT) Frameworks</h2>
    </div>
    <p>Organizations deploy <strong>Vulnerability Assessment and Penetration Testing (VAPT)</strong> to systematically identify security flaws before malicious adversaries exploit them (<strong>Q131</strong>).</p>

    <div class="section-block">
      <span class="section-label">1. Vulnerability Assessment (VA) vs. Penetration Testing (PT) (Q131)</span>
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Vulnerability Assessment (VA)</th>
              <th>Penetration Testing (PT)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Primary Objective</strong></td>
              <td>Identify, catalog, and rank all known vulnerabilities across network assets.</td>
              <td>Actively exploit vulnerabilities to prove real business impact and bypass defenses.</td>
            </tr>
            <tr>
              <td><strong>Methodology</strong></td>
              <td>Automated scanning (Nessus, OpenVAS, Qualys); wide surface breadth.</td>
              <td>Manual human exploitation (Burp Suite, Metasploit); targeted attack depth.</td>
            </tr>
            <tr>
              <td><strong>Active Exploitation?</strong></td>
              <td><strong>NO active exploitation</strong>; verifies banner responses and versions.</td>
              <td><strong>YES</strong>; launches exploits, elevates privileges, and pivots across subnets.</td>
            </tr>
            <tr>
              <td><strong>Deliverable</strong></td>
              <td>Prioritized inventory list of missing patches and CVE ratings.</td>
              <td>Proof-of-concept exploit steps, business risk analysis, and patch guidance.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The 3 Testing Engagement Models (Q132, Q133)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Black Box (Q132)</span>
            <span class="statute-tag">Zero Knowledge</span>
          </div>
          <p>Tester is given <strong>zero prior knowledge</strong> of internal networks, source code, or credentials. Simulates an external opportunist or nation-state adversary.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">White Box (Q133)</span>
            <span class="statute-tag">Full Knowledge</span>
          </div>
          <p>Tester receives <strong>complete access</strong> to source code, architecture diagrams, configurations, and administrative accounts. Simulates a malicious insider or rogue developer.</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">Grey Box</span>
            <span class="statute-tag">Partial Knowledge</span>
          </div>
          <p>Tester receives partial access (e.g. low-privilege employee credentials). Simulates a compromised workstation or authenticated user attempting privilege escalation.</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q131–Q133):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>VA vs PT (Q131):</strong> VA identifies and catalogs flaws without exploiting; PT actively exploits them to prove impact.</li>
        <li><strong>Black Box Testing (Q132):</strong> Tester has zero prior knowledge of internal networks or architecture.</li>
        <li><strong>White Box Testing (Q133):</strong> Tester has complete access to source code, network diagrams, and admin logins.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 28,
      runningHead: "CH. 14 • VULNERABILITY VS WEAKNESS",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Definitions & Risk Metrics</span>
      <h2>Vulnerability vs. Weakness (CWE vs. CVE), Exploits & Rules of Engagement</h2>
    </div>
    <p>Precise terminology is essential for accurate risk management and compliance auditing:</p>

    <div class="section-block">
      <span class="section-label">1. Core Terminology Definitions (Q134, Q135, Q136)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Weakness (CWE) (Q134)</span>
            <span class="statute-tag">Flaw Type</span>
          </div>
          <p>A conceptual software bug, architectural flaw, or design mistake in code (e.g. <strong>CWE-89</strong> is SQL Injection, <strong>CWE-79</strong> is XSS).</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Vulnerability (CVE) (Q134)</span>
            <span class="statute-tag">Real-World Instance</span>
          </div>
          <p>A specific, instantiated occurrence of a weakness inside a concrete software product and version (e.g. <strong>CVE-2021-44228</strong> in Log4j).</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">Exploit & Exposure (Q135, Q136)</span>
            <span class="statute-tag">Weapon & Config</span>
          </div>
          <p><strong>Exploit (Q135):</strong> Code or script that takes advantage of a vulnerability to compromise a system.<br>
          <strong>Exposure (Q136):</strong> A configuration mistake (e.g. default credentials, open admin ports) increasing attack risk.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Risk Formula, Legal ROE & Attack Surface (Q137, Q138, Q139, Q140)</span>
      <ul>
        <li><strong>Fundamental Risk Formula (Q137):</strong> <code>Risk = Threat &times; Vulnerability &times; Impact</code>. Eliminating vulnerabilities reduces risk to zero!</li>
        <li><strong>Rules of Engagement (ROE) (Q138):</strong> Mandatory legal document signed prior to testing specifying target IP ranges, permitted hours, forbidden exploits, and emergency contacts.</li>
        <li><strong>Attack Surface Reduction (ASR) (Q139):</strong> Hardening systems by disabling unneeded services, closing idle ports, and uninstalling redundant software.</li>
        <li><strong>False Positives vs. Negatives (Q140):</strong> False Positives incorrectly flag flaws where none exist; False Negatives dangerously fail to detect real existing flaws.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q134–Q140):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Weakness vs Vulnerability (Q134):</strong> CWE defines flaw types; CVE catalogs specific real-world flaws.</li>
        <li><strong>Exploit (Q135):</strong> Script or code taking advantage of a vulnerability to cause compromise.</li>
        <li><strong>Exposure (Q136):</strong> Configuration error (default passwords, open Telnet) enabling compromise.</li>
        <li><strong>Risk Equation (Q137):</strong> Risk = Threat &times; Vulnerability &times; Impact.</li>
        <li><strong>Rules of Engagement (Q138):</strong> Legal agreement defining penetration test scope and authorization.</li>
        <li><strong>Attack Surface Reduction (Q139):</strong> Closing unused ports and services to minimize entry points.</li>
        <li><strong>False Negatives (Q140):</strong> Failing to detect a real, dangerous vulnerability that exists.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 14 (Q131–Q140)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on VA vs PT, Black/White Box Models, CVE vs CWE & Rules of Engagement.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(13)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q131–Q140) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 15 (Pages 29–30): Topic 11A: Types of Vulnerabilities — Software & Memory Flaws
  {
    spreadId: 14,
    left: {
      pageNumber: 29,
      runningHead: "CH. 15 • INPUT VALIDATION VULNERABILITIES",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 15 • Software Implementation Flaws</span>
      <h2>Input Validation Vulnerabilities: SQLi, XSS, Command Injection & Path Traversal</h2>
    </div>
    <p>Input validation vulnerabilities occur whenever an application processes untrusted user input without proper validation, sanitization, or parameterization (<strong>Q141</strong>).</p>

    <div class="section-block">
      <span class="section-label">1. SQL Injection (SQLi) & Prepared Statements (Q142, Q143)</span>
      <div class="statutory-grid">
        <div class="statute-card card-penalty">
          <div class="statute-header">
            <span class="statute-section">SQL Injection (CWE-89) (Q142)</span>
            <span class="statute-tag badge-penalty">Critical Risk</span>
          </div>
          <p>Occurs when untrusted user input is directly concatenated into a dynamic SQL query. The database parser interprets input as code, enabling authentication bypass (<code>' OR '1'='1</code>), full database dumping, or remote command execution.</p>
        </div>

        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Prepared Statements (Q143)</span>
            <span class="statute-tag">Primary Defense</span>
          </div>
          <p><strong>Parameterized Queries (Prepared Statements)</strong> separate SQL query structure from user parameters. The database treats input purely as literal data values, making code injection impossible!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Cross-Site Scripting, Command Injection & Path Traversal (Q144, Q145, Q146, Q147)</span>
      <ul>
        <li><strong>Cross-Site Scripting (XSS - CWE-79) (Q144):</strong> Injects malicious client-side JavaScript into web pages viewed by other users, stealing session cookies and tokens.
          <br><strong>Stored XSS (Q145):</strong> The malicious script is permanently saved into a database (e.g. comment forum) and executed automatically whenever any user views the page.
        </li>
        <li><strong>OS Command Injection (CWE-78) (Q146):</strong> Occurs when user input is concatenated directly into system shell calls (<code>system()</code>, <code>exec()</code>), allowing attackers to append shell metacharacters (<code>; id</code>, <code>| whoami</code>) to run arbitrary OS commands.</li>
        <li><strong>Path Traversal (CWE-22) (Q147):</strong> Using dot-dot-slash (<code>../</code>) sequences (e.g. <code>../../../../etc/passwd</code>) to escape the web root and view sensitive operating system files.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q141–Q147):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Input Validation (Q141):</strong> Failure to sanitize external input causes the most pervasive software flaws.</li>
        <li><strong>SQL Injection (Q142):</strong> CWE-89 flaw concatenating untrusted input into database query strings.</li>
        <li><strong>Prepared Statements (Q143):</strong> Primary defense against SQLi; separates query logic from data parameters.</li>
        <li><strong>XSS (Q144):</strong> CWE-79 flaw executing malicious client-side JavaScript in victims' browsers.</li>
        <li><strong>Stored XSS (Q145):</strong> Persistent payload stored in the database; runs for all visiting users.</li>
        <li><strong>OS Command Injection (Q146):</strong> Executing unauthorized system shell commands via unvalidated input.</li>
        <li><strong>Path Traversal (Q147):</strong> Using <code>../</code> sequences to access files outside the intended web root.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 30,
      runningHead: "CH. 15 • MEMORY CORRUPTION & MITIGATIONS",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Low-Level Memory Vulnerabilities</span>
      <h2>Buffer Overflows, Stack/Heap Corruption & Memory Mitigations (ASLR)</h2>
    </div>
    <p>Memory corruption flaws occur in low-level languages (C/C++) that lack automatic memory management:</p>

    <div class="section-block">
      <span class="section-label">1. Buffer Overflows & Memory Corruption (Q148)</span>
      <div class="statutory-grid">
        <div class="statute-card card-penalty">
          <div class="statute-header">
            <span class="statute-section">Buffer Overflow (CWE-120) (Q148)</span>
            <span class="statute-tag badge-penalty">Control Flow Hijack</span>
          </div>
          <p>Occurs when an application writes more data into a fixed-size memory buffer than it was allocated to hold. The excess data spills into adjacent memory, overwriting the saved stack frame <strong>Return Address</strong> to hijack program execution flow!</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Stack vs. Heap Overflows</span>
            <span class="statute-tag">Memory Segments</span>
          </div>
          <p><strong>Stack Overflow:</strong> Overwrites local variables and the saved return pointer (EIP/RIP).<br>
          <strong>Heap Overflow:</strong> Corrupts dynamically allocated memory chunks (malloc) and function pointers.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Modern Memory Mitigations: Canaries & ASLR (Q149, Q150)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Stack Canaries (Q149)</span>
            <span class="statute-tag">Stack Cookies</span>
          </div>
          <p>A random integer placed on the stack frame immediately before the return address. Before returning, the function verifies the canary; if it was overwritten by an overflow, the program terminates immediately!</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">ASLR (Q150)</span>
            <span class="statute-tag">Address Randomization</span>
          </div>
          <p><strong>Address Space Layout Randomization (ASLR):</strong> Randomizes the base memory addresses of the stack, heap, and loaded libraries on every execution, making hardcoded exploit return targets impossible!</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q148–Q150):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Buffer Overflow (Q148):</strong> Writing past memory buffer boundaries (CWE-120) to hijack execution.</li>
        <li><strong>Stack Canary (Q149):</strong> Random value placed before return address to detect stack corruption.</li>
        <li><strong>ASLR (Q150):</strong> Randomizes virtual memory addresses of stack, heap, and libraries on every boot.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 15 (Q141–Q150)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on SQLi, XSS, Command Injection, Buffer Overflows & ASLR Mitigations.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(14)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q141–Q150) &rarr;
      </button>
    </div>`
    }
  }
];

