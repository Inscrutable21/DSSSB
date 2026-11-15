// Part 3: Topics 11–15 (Spreads 20–29, Pages 41–60)
// 4 Pages per Topic: Total 10 Spreads = 20 Pages

module.exports = [
  // =========================================================================
  // TOPIC 11: DIGITAL SIGNATURES: ARCHITECTURE, SCHEMES & IT ACT 2000 (Pages 41–44, Spreads 20 & 21, Q101–Q110)
  // =========================================================================
  // Spread 20: Part 1 - Digital Signature Architecture & Security Services (Pages 41–42)
  {
    spreadId: 20,
    left: {
      pageNumber: 41,
      runningHead: 'CH. 11 • DIGITAL SIGNATURE ARCHITECTURE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 11 • Topic 11: Digital Signatures & Legal Recognition (Part 1)</span>
      <h2>Digital Signature Foundations & Dual Operations</h2>
    </div>

    <div class="intro-abstract">
      <p>A <strong>Digital Signature</strong> is a mathematical mechanism that binds an electronic document to the identity of its signer. It provides the digital equivalent of a handwritten signature and stamped wax seal, but with far greater mathematical security. Digital signatures are the bedrock of e-governance, digital forensic evidence, and legal contracts.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Two Distinct Operations: Signing vs. Verifying (Q101, Q102, Q103)</span>
      <p>A digital signature scheme consists of two separate cryptographic operations executed by two different entities using opposite keys:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Operation 1: Signing (Q102)</span>
            <span class="statute-tag">Sender's Role</span>
          </div>
          <p>1. The sender generates a cryptographic hash of the document: $H = \text{SHA-256}(M)$.<br>
          2. The sender encrypts the hash digest using their secret, unshared <strong>Private Key ($K_{priv}$)</strong>: $S = E_{Kpriv}(H)$.<br>
          3. The signature $S$ is attached to the document.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Operation 2: Verifying (Q103)</span>
            <span class="statute-tag">Recipient's Role</span>
          </div>
          <p>1. The recipient decrypts the signature using the sender's openly published <strong>Public Key ($K_{pub}$)</strong> to recover the original hash digest: $H_{original} = D_{Kpub}(S)$.<br>
          2. The recipient independently hashes the received document: $H_{computed} = \text{SHA-256}(M)$.<br>
          3. If $H_{original} == H_{computed}$, the signature is mathematically valid!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Why We Sign the Hash Instead of the Full Document (Q104)</span>
      <p>Asymmetric cryptography is computationally expensive. Signing a 1-gigabyte forensic disk image or PDF document directly with an RSA private key would require hours of heavy modular exponentiation and bloat data size. Hashing compresses any document into a small 256-bit digest in milliseconds, allowing rapid, lightweight signature generation!</p>
    </div>
      `
    },
    right: {
      pageNumber: 42,
      runningHead: 'CH. 11 • SIGNATURE SERVICES: TRIAD OF TRUST',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 11 • Topic 11: Digital Signatures & Legal Recognition (Part 2)</span>
      <h2>The Triad of Security Services & Forensic Proof</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The 3 Security Services Provided Simultaneously (Q101, Q105)</span>
      <p>A valid digital signature simultaneously guarantees three foundational security pillars:</p>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Security Service</th>
            <th>How the Digital Signature Guarantees It (Q101, Q105)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Authentication (Origin Authenticity)</strong></td>
            <td>Because the signature can only be decrypted/verified using the sender's public key, it mathematically proves the document was signed by someone who possessed the corresponding unique private key.</td>
          </tr>
          <tr>
            <td><strong>2. Data Integrity (Tamper Evidence)</strong></td>
            <td>If an attacker modifies a single comma, bit, or dollar amount in the document, the recipient's independently computed hash will completely fail to match the decrypted signature hash. Tampering is instantly exposed!</td>
          </tr>
          <tr>
            <td><strong>3. Non-Repudiation (Legal Accountability)</strong></td>
            <td>The signer cannot falsely claim: <em>"I never signed this contract"</em> or <em>"Someone else created this report."</em> Because the private key is held strictly by the owner, authorship is legally and mathematically undisputed.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">4. Digital Signatures vs. Handwritten Signatures</span>
      <p>A handwritten signature is static; it looks the same on every page and can be easily traced or photocopied onto fraudulent documents. In stark contrast, a <strong>Digital Signature is mathematically bound to the exact content of the document</strong>. Taking a valid signature from Document A and copying it onto Document B instantly causes verification to fail!</p>
    </div>
      `
    }
  },

  // Spread 21: Part 2 - Schemes, Algorithms & Indian IT Act 2000 (Pages 43–44)
  {
    spreadId: 21,
    left: {
      pageNumber: 43,
      runningHead: 'CH. 11 • SIGNATURE SCHEMES: RSA-PSS, DSA & ECDSA',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 11 • Topic 11: Digital Signatures & Legal Recognition (Part 3)</span>
      <h2>Signature Schemes: RSA-PSS, DSA, ECDSA & Ed25519</h2>
    </div>

    <div class="section-block">
      <span class="section-label">5. Modern Digital Signature Standards (Q106, Q107)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">RSA-PSS (PKCS#1 v2.1)</span>
            <span class="statute-tag">Probabilistic Signature</span>
          </div>
          <p>Replaces obsolete deterministic PKCS#1 v1.5 padding. Uses the <strong>Probabilistic Signature Scheme (PSS)</strong> with random salt. Mathematically proven secure against chosen-message attacks in the Random Oracle Model.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">DSA (Digital Signature Algorithm) (Q106)</span>
            <span class="statute-tag">NIST FIPS 186 Standard</span>
          </div>
          <p>Designed by the NSA and standardized by NIST in 1991. Based on the modular subgroup Discrete Logarithm Problem. Produces smaller signatures than RSA. <em>Crucial Note: DSA can ONLY be used for signing, NOT encryption!</em></p>
        </div>
      </div>

      <div class="statutory-grid" style="margin-top: 10px;">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">ECDSA (Elliptic Curve DSA) (Q107)</span>
            <span class="statute-tag">High Efficiency</span>
          </div>
          <p>Adapts DSA to elliptic curves. Uses 256-bit keys (e.g., NIST P-256) to produce compact 64-byte signatures. Used in Bitcoin and Apple Pay. <strong>Fatal Hazard:</strong> Requires a unique cryptographically random per-signature nonce $k$; reusing $k$ instantly reveals the signer's private key (cracked Sony PS3 security!).</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Ed25519 (Edwards-curve DSA)</span>
            <span class="statute-tag">Deterministic & Immune</span>
          </div>
          <p>Derives the nonce deterministically from the private key and message hash ($k = H(\text{key} + M)$), making nonce reuse mathematically impossible. Immune to side-channel and cache-timing attacks.</p>
        </div>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 44,
      runningHead: 'CH. 11 • INDIAN IT ACT 2000 & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 11 • Topic 11: Digital Signatures & Legal Recognition (Part 4)</span>
      <h2>Indian IT Act 2000 (Section 3) & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">6. Legal Recognition under the Indian IT Act, 2000 (Q108, Q109)</span>
      <p>In India, digital signatures possess statutory legal status equivalent to physical ink signatures:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Section 3 of the IT Act, 2000 (Q108)</span>
          <span class="statute-tag">Authentication of Electronic Records</span>
        </div>
        <p>• Any subscriber may authenticate an electronic record by affixing their Digital Signature.<br>
        • Authentication must be effected by the use of an <strong>Asymmetric Crypto-system and Hash function</strong>.<br>
        • <strong>Section 3A (2008 Amendment):</strong> Introduced broader "Electronic Signatures", including Aadhaar eSign and reliable electronic techniques.<br>
        • <strong>Controller of Certifying Authorities (CCA):</strong> Appointed under Section 17 to regulate and license all Certifying Authorities (CAs) in India (e.g., eMudhra, (n)Code, NIC).</p>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 11 (Q101–Q110):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q101:</strong> Digital signatures simultaneously provide Authentication, Integrity, and Non-repudiation.</li>
        <li><strong>Q102:</strong> A digital signature is created by encrypting the message digest with the sender's <strong>Private Key</strong>.</li>
        <li><strong>Q103:</strong> A digital signature is verified by decrypting it with the sender's <strong>Public Key</strong>.</li>
        <li><strong>Q104:</strong> Signing the hash rather than the full message optimizes computational speed and bandwidth.</li>
        <li><strong>Q106:</strong> DSA is a NIST FIPS standard strictly for digital signatures, not for confidential encryption.</li>
        <li><strong>Q107:</strong> Reusing a nonce $k$ in ECDSA completely exposes the private key.</li>
        <li><strong>Q108:</strong> Section 3 of the Indian Information Technology Act, 2000 legally authenticates electronic records via asymmetric cryptosystems.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 11</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q101–Q110) on Digital Signatures, DSA/ECDSA & IT Act Section 3.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="10" onclick="window.openMCQForSpread(10)">
          Start Quiz (Q101–Q110) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 12: DIGITAL CERTIFICATES, CERTIFYING AUTHORITIES (CA) & PKI (Pages 45–48, Spreads 22 & 23, Q111–Q120)
  // =========================================================================
  // Spread 22: Part 1 - X.509 Architecture & CA Trust Hierarchy (Pages 45–46)
  {
    spreadId: 22,
    left: {
      pageNumber: 45,
      runningHead: 'CH. 12 • DIGITAL CERTIFICATES & ITU-T X.509 V3',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 12 • Topic 12: Digital Certificates & PKI (Part 1)</span>
      <h2>Public Key Infrastructure (PKI) & Digital Certificates</h2>
    </div>

    <div class="intro-abstract">
      <p>Asymmetric cryptography introduces a dangerous trust vulnerability: <em>The Public Key Impersonation Problem</em>. If an attacker publishes a fake public key claiming to belong to your bank, how can a web browser verify that a public key genuinely belongs to the legitimate owner? The solution is <strong>Public Key Infrastructure (PKI)</strong> and <strong>Digital Certificates</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. What is a Digital Certificate? (Q111)</span>
      <p>A <strong>Digital Certificate</strong> is a cryptographically signed electronic credential that legally and mathematically binds an entity's identity (e.g., domain name <code>bank.com</code>, corporate name, or email) to its verified <strong>Public Key</strong>. It acts as a digital passport issued by a trusted third party.</p>
    </div>

    <div class="section-block">
      <span class="section-label">2. The ITU-T X.509 v3 Standard Certificate Structure (Q112, Q113)</span>
      <p>Standardized internationally by the ITU-T and IETF (RFC 5280), an <strong>X.509 v3</strong> certificate contains the following mandatory fields:</p>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>X.509 Field</th>
            <th>Description & Purpose (Q112, Q113)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Version</strong></td>
            <td>Version number (strictly <code>v3</code> in modern implementations to support extensions).</td>
          </tr>
          <tr>
            <td><strong>Serial Number</strong></td>
            <td>A unique positive integer assigned by the issuing CA to identify the certificate.</td>
          </tr>
          <tr>
            <td><strong>Signature Algorithm</strong></td>
            <td>Cryptographic algorithm used by the CA to sign the certificate (e.g., <code>sha256WithRSAEncryption</code>, <code>ecdsa-with-SHA384</code>).</td>
          </tr>
          <tr>
            <td><strong>Issuer</strong></td>
            <td>Distinguished Name (DN) of the Certifying Authority that verified and signed the certificate.</td>
          </tr>
          <tr>
            <td><strong>Validity Period</strong></td>
            <td>Strict <code>Not Before</code> and <code>Not After</code> dates. Expired certificates trigger browser security blocks.</td>
          </tr>
          <tr>
            <td><strong>Subject</strong></td>
            <td>Name of the certified entity (e.g., Common Name <code>CN=www.example.com</code>).</td>
          </tr>
          <tr>
            <td><strong>Subject Public Key Info (Q112)</strong></td>
            <td>The certified public key itself, along with algorithm identifier (e.g., RSA 2048 bits).</td>
          </tr>
          <tr>
            <td><strong>Extensions (v3) (Q113)</strong></td>
            <td><strong>Subject Alternative Name (SAN):</strong> Allows a single certificate to secure multiple domain names and IP addresses.<br>
            • <strong>Key Usage:</strong> Defines authorized uses (Digital Signature, Key Encipherment).<br>
            • <strong>Basic Constraints:</strong> Indicates whether the certificate belongs to an end-entity or is a CA (<code>CA:TRUE</code> vs <code>CA:FALSE</code>).</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 46,
      runningHead: 'CH. 12 • CERTIFYING AUTHORITIES & TRUST CHAINS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 12 • Topic 12: Digital Certificates & PKI (Part 2)</span>
      <h2>Certifying Authorities (CAs) & The Chain of Trust</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The PKI Ecosystem Components (Q114)</span>
      <ul class="forensic-list">
        <li><strong>Certifying Authority (CA) (Q114):</strong> The trusted third-party organization responsible for issuing, signing, managing, and revoking digital certificates (e.g., DigiCert, Let's Encrypt, NIC).</li>
        <li><strong>Registration Authority (RA):</strong> Acts as the verifier on behalf of the CA. Verifies the applicant's real-world identity, company registration documents, or domain control before requesting the CA to sign the certificate. The RA never signs certificates itself!</li>
        <li><strong>Certificate Repository:</strong> Public directory publishing active certificates and revocation lists.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">4. The Hierarchical Chain of Trust (Q115, Q116)</span>
      <p>How does a browser validate a web server's certificate? By walking up the cryptographic trust chain:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">The 3-Tier Trust Chain (Q115, Q116)</span>
          <span class="statute-tag">Hierarchical PKI</span>
        </div>
        <p>1. <strong>Root CA (Trust Anchor) (Q115):</strong> Sits at the apex of the hierarchy. Its certificate is <strong>Self-Signed</strong> ($Issuer == Subject$). Root CA private keys are kept strictly offline in air-gapped hardware security modules (HSMs) protected inside biometric vaults! Root CA public certificates are pre-installed directly into operating systems and web browsers (Windows Certificate Store, Mozilla NSS).<br>
        2. <strong>Intermediate CA (Subordinate CA) (Q116):</strong> Signed directly by the Root CA. Intermediate CAs conduct day-to-day operations and issue certificates to end entities. If an intermediate key is compromised, only that branch is revoked; the Root CA remains secure!<br>
        3. <strong>End-Entity / Leaf Certificate:</strong> The server certificate presented by <code>google.com</code> or <code>sbi.co.in</code>. Cannot issue or sign other certificates (<code>Basic Constraints: CA:FALSE</code>).</p>
      </div>
    </div>
      `
    }
  },

  // Spread 23: Part 2 - Revocation (CRL/OCSP), CT Logs & Exam Traps (Pages 47–48)
  {
    spreadId: 23,
    left: {
      pageNumber: 47,
      runningHead: 'CH. 12 • CERTIFICATE REVOCATION: CRL VS OCSP',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 12 • Topic 12: Digital Certificates & PKI (Part 3)</span>
      <h2>Certificate Revocation: CRL, OCSP & OCSP Stapling</h2>
    </div>

    <div class="section-block">
      <span class="section-label">5. Why Certificates Must Be Revoked (Q117)</span>
      <p>Certificates are issued with fixed validity (typically 1 year). However, a certificate must be revoked <em>immediately before its expiration date</em> if: (1) The private key is compromised or stolen; (2) The domain name ownership changes; or (3) The CA was tricked into issuing a fraudulent certificate.</p>
    </div>

    <div class="section-block">
      <span class="section-label">6. Revocation Mechanisms: CRL vs. OCSP (Q117, Q118)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Certificate Revocation List (CRL) (Q117)</th>
            <th>Online Certificate Status Protocol (OCSP) (Q118)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Operational Model</strong></td>
            <td><strong>Batch File Download:</strong> A CA-signed list containing the serial numbers of all revoked certificates.</td>
            <td><strong>Real-Time Query:</strong> The browser sends a real-time HTTP request asking: <em>"Is certificate #12345 valid?"</em>. The OCSP responder replies with <code>Good</code>, <code>Revoked</code>, or <code>Unknown</code>.</td>
          </tr>
          <tr>
            <td><strong>Latency & Bandwidth</strong></td>
            <td>High bandwidth consumption. CRL files can grow to tens of megabytes, delaying page loads.</td>
            <td>Ultra-low bandwidth; returns a tiny signed binary response.</td>
          </tr>
          <tr>
            <td><strong>Freshness & Latency</strong></td>
            <td>Stale data window: CRLs are published periodically (e.g., every 24 hours). A compromised key remains valid until the next CRL is generated!</td>
            <td>Real-time freshness; revocation is recognized instantly.</td>
          </tr>
          <tr>
            <td><strong>Privacy & Uptime Flaw</strong></td>
            <td>No privacy leak (everyone downloads same list).</td>
            <td><strong>Privacy Leak:</strong> The CA responder learns which websites every user visits! If the OCSP responder goes offline, browsers suffer connection stalls.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">7. The Modern Solution: OCSP Stapling (RFC 6066) (Q118)</span>
      <p>In <strong>OCSP Stapling</strong>, the web server (not the client browser) periodically queries the CA for a signed, time-stamped OCSP status token. The web server "staples" this signed token directly into the initial TLS Handshake to the client. This eliminates client latency, protects user privacy, and guarantees high availability!</p>
    </div>
      `
    },
    right: {
      pageNumber: 48,
      runningHead: 'CH. 12 • CERTIFICATE TRANSPARENCY & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 12 • Topic 12: Digital Certificates & PKI (Part 4)</span>
      <h2>Certificate Transparency (CT Logs) & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">8. Certificate Transparency (CT) Logs (RFC 6962) (Q119)</span>
      <p>In 2011, Iranian state hackers breached Dutch CA <em>DigiNotar</em> and issued fraudulent wild-card certificates for <code>*.google.com</code>, intercepting Gmail traffic for 300,000 citizens. Because the CA was trusted by browsers, the attack was invisible!</p>
      
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Append-Only Merkle Tree Audit Logs (Q119)</span>
          <span class="statute-tag">Modern Web Standard</span>
        </div>
        <p>Google introduced <strong>Certificate Transparency (CT)</strong>: An open, publicly auditable framework of append-only, cryptographic Merkle Tree logs. Today, web browsers (Chrome, Edge, Safari) <strong>strictly reject</strong> any SSL/TLS certificate unless it contains cryptographic proof (Signed Certificate Timestamps - SCTs) proving it was publicly published in CT logs! Domain owners monitor CT logs in real-time to detect fraudulent certificates within minutes.</p>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 12 (Q111–Q120):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q111:</strong> A Digital Certificate cryptographically binds a verified public key to the identity of its owner.</li>
        <li><strong>Q112:</strong> The ITU-T X.509 v3 standard defines the global format for public-key certificates.</li>
        <li><strong>Q113:</strong> The Subject Alternative Name (SAN) extension allows a single certificate to protect multiple domains.</li>
        <li><strong>Q114:</strong> The Certifying Authority (CA) issues and signs certificates; the Registration Authority (RA) verifies applicant identity.</li>
        <li><strong>Q115:</strong> Root CA certificates are self-signed and stored in OS trust anchors.</li>
        <li><strong>Q116:</strong> Intermediate CAs protect Root CAs from day-to-day exposure.</li>
        <li><strong>Q117:</strong> A CRL is a periodic batch list of revoked certificate serial numbers.</li>
        <li><strong>Q118:</strong> OCSP provides real-time revocation checking; OCSP Stapling eliminates privacy leaks and latency.</li>
        <li><strong>Q119:</strong> Certificate Transparency (CT) requires public logging in append-only cryptographic audit logs.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 12</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q111–Q120) on X.509 Certificates, PKI, CRL/OCSP & CT Logs.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="11" onclick="window.openMCQForSpread(11)">
          Start Quiz (Q111–Q120) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 13: STEGANALYSIS AND ITS CHALLENGES (Pages 49–52, Spreads 24 & 25, Q121–Q130)
  // =========================================================================
  // Spread 24: Part 1 - Steganalysis Foundations & Visual Bit-Planes (Pages 49–50)
  {
    spreadId: 24,
    left: {
      pageNumber: 49,
      runningHead: 'CH. 13 • STEGANALYSIS FOUNDATIONS & GOALS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 13 • Topic 13: Steganalysis & Challenges (Part 1)</span>
      <h2>Steganalysis Foundations & Forensic Goals</h2>
    </div>

    <div class="intro-abstract">
      <p>While steganography conceals the existence of secret communications, <strong>Steganalysis</strong> is the counter-science of detecting, extracting, identifying, and neutralizing data hidden inside digital media. In law enforcement and digital forensics, steganalysis is vital for uncovering covert terrorist communications, industrial espionage, and hidden malware payloads (stegware).</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The 3 Forensic Goals of Steganalysis (Q121)</span>
      <ul class="forensic-list">
        <li><strong>Goal 1: Detection (Primary Goal) (Q121):</strong> Determining whether a target digital file contains a hidden payload or is pristine carrier media. In legal evidence, detection alone is often sufficient to justify seizure or prove intent.</li>
        <li><strong>Goal 2: Extraction:</strong> Recovering the hidden payload bits from the carrier object and decrypting them to expose the underlying message.</li>
        <li><strong>Goal 3: Destruction / Sanitization:</strong> In defensive gateway environments, altering carrier files (e.g., lossy re-encoding, bit-flipping) to scramble and neutralize any hidden payload without necessarily decrypting it.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. Targeted vs. Universal (Blind) Steganalysis (Q122)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Targeted (Specific) Steganalysis (Q122)</span>
            <span class="statute-tag">Known Algorithm</span>
          </div>
          <p>Designed to exploit the known mathematical signature, statistical anomalies, or framing markers of a <em>specific steganography tool</em> (e.g., Steghide, OutGuess, OpenStego). Highly accurate with near-zero false positives when the tool matches.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Universal (Blind) Steganalysis (Q122)</span>
            <span class="statute-tag">Tool-Agnostic</span>
          </div>
          <p>Operates without prior knowledge of the steganography algorithm. Extracts high-dimensional statistical image features (wavelet moments, pixel adjacency distributions) and classifies anomalies using machine learning models (Support Vector Machines, deep neural networks).</p>
        </div>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 50,
      runningHead: 'CH. 13 • STRUCTURAL & VISUAL BIT-PLANE ANALYSIS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 13 • Topic 13: Steganalysis & Challenges (Part 2)</span>
      <h2>Structural, File-Level & Bit-Plane Slicing</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. File-Level Anomalies & Structural Attacks (Q123)</span>
      <p>Before launching complex mathematical attacks, forensic investigators check for crude implementation flaws:</p>
      <ul class="forensic-list">
        <li><strong>EOF Append Injection (Overlay Data):</strong> Crude tools append secret data after the official End-of-File marker (e.g., after <code>FF D9</code> in JPEG, or <code>IEND</code> in PNG). Image viewers ignore overlay data, but forensic tools flag the abnormal file size.</li>
        <li><strong>Metadata Tampering:</strong> Hidden payloads crammed into EXIF tags (e.g., Camera Model, Artist, GPS metadata) or IPTC fields.</li>
        <li><strong>Palette Table Alterations:</strong> Duplicated or re-ordered color palettes in 8-bit GIF/BMP images.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">4. Visual Steganalysis: Bit-Plane Slicing (Q124)</span>
      <p>In standard 8-bit grayscale images, the image is composed of 8 binary bit-planes (from Plane 0 [LSB] to Plane 7 [MSB]):</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">The Bit-Plane Anomaly (Q124)</span>
          <span class="statute-tag">Visual Stegsolve Inspection</span>
        </div>
        <p>• <strong>Pristine Natural Images:</strong> The Least Significant Bit plane (Bit 0) exhibits correlated continuous spatial textures, subtle shading gradients, and structural contours of the physical scene.<br>
        • <strong>Stego-Images (Tampered):</strong> Encrypted secret payloads have near-maximum entropy ($\approx 8.0$). When injected into LSBs, the natural image contours vanish completely, replaced by a pure, uniform television static/white noise pattern! Forensic investigators use tools like <strong>Stegsolve</strong> or <strong>zsteg</strong> to visually expose this abrupt degradation.</p>
      </div>
    </div>
      `
    }
  },

  // Spread 25: Part 2 - Statistical Attacks & Major Challenges (Pages 51–52)
  {
    spreadId: 25,
    left: {
      pageNumber: 51,
      runningHead: 'CH. 13 • STATISTICAL STEGANALYSIS & CHI-SQUARE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 13 • Topic 13: Steganalysis & Challenges (Part 3)</span>
      <h2>Statistical Steganalysis: Chi-Square & Sample Pair Analysis</h2>
    </div>

    <div class="section-block">
      <span class="section-label">5. Westfeld's Chi-Square ($\chi^2$) Attack on Pairs of Values (Q125)</span>
      <p>Published by Andreas Westfeld in 1999, the <strong>Chi-Square Attack</strong> is the classic mathematical technique used to detect sequential LSB embedding:</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Pairs of Values (PoVs) Equalization (Q125)</span>
          <span class="statute-tag">Mathematical Proof</span>
        </div>
        <p>In digital images, adjacent pixel byte values that differ only in the LSB form <strong>Pairs of Values (PoVs)</strong>: $(2k, 2k+1)$, such as $(0,1), (2,3), (4,5) \dots (254,255)$.</p>
        <p>• In natural images, the histogram frequencies of $2k$ and $2k+1$ are usually unequal due to natural lighting and textures.<br>
        • When an encrypted payload (containing equal 0s and 1s) is embedded into the LSB, flipping bits between $2k$ and $2k+1$ equalizes their frequencies!<br>
        • A Pearson $\chi^2$ statistical test compares theoretical vs observed frequencies. A probability $p \approx 1.0$ mathematically proves LSB tampering!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">6. Sample Pair Analysis (SPA) & RS Steganalysis (Q126)</span>
      <p>More sophisticated modern statistical attacks detect random, non-sequential LSB embedding:</p>
      <ul class="forensic-list">
        <li><strong>Sample Pair Analysis (SPA):</strong> Analyzes finite state transitions between adjacent pixel pairs to estimate the exact hidden message length with $< 1\%$ margin of error!</li>
        <li><strong>RS Steganalysis (Fridrich et al.):</strong> Divides images into small pixel groups and applies invertible flipping operations, classifying groups into Regular ($R$) and Singular ($S$). In pristine images, $R_M \approx R_{-M}$; LSB embedding disrupts this symmetry.</li>
      </ul>
    </div>
      `
    },
    right: {
      pageNumber: 52,
      runningHead: 'CH. 13 • STEGANALYSIS CHALLENGES & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 13 • Topic 13: Steganalysis & Challenges (Part 4)</span>
      <h2>Major Steganalysis Challenges & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">7. The Core Technical Challenges in Real-World Steganalysis (Q127, Q128, Q129)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Steganalysis Challenge</th>
            <th>Operational Roadblock in Forensic Practice (Q127, Q128, Q129)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Lossy Re-compression & Quantization (Q127)</strong></td>
            <td>Social media platforms (WhatsApp, Instagram, Twitter) automatically re-compress all uploaded images into lossy JPEG. Quantization tables completely discard delicate spatial LSB modifications, destroying the payload before forensics can inspect it.</td>
          </tr>
          <tr>
            <td><strong>2. Pre-Encryption of Payload (Q128)</strong></td>
            <td>When an attacker encrypts a payload with AES-256 before embedding, the payload exhibits maximum theoretical entropy ($\approx 8.0$). It possesses zero linguistic patterns or magic headers, making blind extraction indistinguishable from random noise.</td>
          </tr>
          <tr>
            <td><strong>3. Cover-Source Mismatch (CSM) (Q129)</strong></td>
            <td>Machine learning steganalysis models trained on images from one camera sensor (e.g., Canon DSLR) produce massive false positive and false negative error rates when tested on images from a different sensor or ISO setting!</td>
          </tr>
          <tr>
            <td><strong>4. Adaptive Steganography</strong></td>
            <td>Modern tools (HUGO, S-UNIWARD) avoid flat regions entirely, hiding bits strictly inside complex noisy textures and sharp image edges where statistical detection is exceptionally difficult.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 13 (Q121–Q130):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q121:</strong> The primary objective of steganalysis is detecting the presence of hidden communications.</li>
        <li><strong>Q122:</strong> Targeted steganalysis targets known algorithms; Universal (blind) steganalysis is tool-agnostic.</li>
        <li><strong>Q123:</strong> Overlay injection appends data after the file's natural EOF marker (e.g., JPEG <code>FF D9</code>).</li>
        <li><strong>Q124:</strong> Bit-plane slicing reveals LSB tampering by exposing abnormal white noise replacing natural textures.</li>
        <li><strong>Q125:</strong> Westfeld's Chi-Square attack detects sequential LSB embedding by tracking Pair of Values (PoV) equalization.</li>
        <li><strong>Q127:</strong> Lossy compression (JPEG) poses a major operational challenge by discarding spatial LSB bits.</li>
        <li><strong>Q128:</strong> Pre-encrypting payloads ensures maximum entropy, frustrating automated extraction without the key.</li>
        <li><strong>Q129:</strong> Cover-Source Mismatch occurs when classifier training data diverges from test carrier sensor sources.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 13</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q121–Q130) on Steganalysis, Bit-Planes, Chi-Square & Challenges.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="12" onclick="window.openMCQForSpread(12)">
          Start Quiz (Q121–Q130) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 14: VAPT FUNDAMENTALS & VULNERABILITY V/S WEAKNESS (Pages 53–56, Spreads 26 & 27, Q131–Q140)
  // =========================================================================
  // Spread 26: Part 1 - VA vs PT Detailed Comparison (Pages 53–54)
  {
    spreadId: 26,
    left: {
      pageNumber: 53,
      runningHead: 'CH. 14 • VAPT FOUNDATIONS: VA VS PT',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 14 • Topic 14: VAPT & Vulnerability vs Weakness (Part 1)</span>
      <h2>Vulnerability Assessment vs. Penetration Testing</h2>
    </div>

    <div class="intro-abstract">
      <p>Securing enterprise infrastructure requires proactive offensive security evaluations. The industry-standard methodology for discovering and eliminating security flaws before adversaries exploit them is <strong>VAPT: Vulnerability Assessment and Penetration Testing</strong>. While frequently spoken of as a single discipline, VA and PT are two distinct, complementary operations.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Vulnerability Assessment (VA) vs. Penetration Testing (PT) (Q131, Q132)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Security Dimension</th>
            <th>Vulnerability Assessment (VA) (Q131)</th>
            <th>Penetration Testing (PT) (Q132)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Primary Objective</strong></td>
            <td><strong>Breadth-Oriented:</strong> Comprehensive identification, cataloging, and ranking of all known vulnerabilities across the enterprise.</td>
            <td><strong>Depth-Oriented:</strong> Actively proving real-world exploitability; chaining flaws to breach perimeter defenses and gain domain control.</td>
          </tr>
          <tr>
            <td><strong>Operational Approach</strong></td>
            <td>Largely automated scanning using network vulnerability scanners (Nessus, OpenVAS, Qualys).</td>
            <td>Deep manual exploitation and lateral movement conducted by skilled ethical hackers (Burp Suite, Metasploit).</td>
          </tr>
          <tr>
            <td><strong>Exploitation Phase</strong></td>
            <td><strong>NO EXPLOITATION!</strong> The scanner identifies that a vulnerability likely exists, but never triggers payloads or crashes systems.</td>
            <td><strong>ACTIVE EXPLOITATION!</strong> Vulnerabilities are weaponized with real exploits to demonstrate tangible business risk.</td>
          </tr>
          <tr>
            <td><strong>Frequency & Cadence</strong></td>
            <td>Continuous or scheduled frequently (e.g., weekly or monthly scans after every patch cycle).</td>
            <td>Periodic engagement (e.g., annual audit, major architectural change, or compliance mandate).</td>
          </tr>
          <tr>
            <td><strong>Primary Deliverable</strong></td>
            <td>Prioritized asset inventory list of CVEs with CVSS scores and vendor remediation links.</td>
            <td>Detailed Narrative Report demonstrating complete attack paths, evidence screenshots, and architectural fixes.</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 54,
      runningHead: 'CH. 14 • VULNERABILITY V/S WEAKNESS DEEP DIVE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 14 • Topic 14: VAPT & Vulnerability vs Weakness (Part 2)</span>
      <h2>Vulnerability vs. Weakness vs. Exposure</h2>
    </div>

    <div class="section-block">
      <span class="section-label">2. Vulnerability vs. Weakness: The MITRE Distinction (Q133, Q134)</span>
      <p>Candidates in cybersecurity examinations must understand the strict hierarchical distinction standardized by MITRE:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Weakness (CWE) (Q133)</span>
            <span class="statute-tag">Abstract Flaw Type</span>
          </div>
          <p>A <strong>Weakness</strong> is a type of flaw, bug, fault, or operational misconfiguration in software architecture, design, or code that <em>could under specific circumstances</em> lead to a security issue.</p>
          <p>• Standardized as <strong>Common Weakness Enumeration (CWE)</strong>.<br>
          • <strong>Examples:</strong> CWE-89 (Improper Neutralization of Special Elements used in an SQL Command), CWE-120 (Buffer Copy without Checking Size of Input), CWE-79 (Cross-Site Scripting).</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Vulnerability (CVE) (Q134)</span>
            <span class="statute-tag">Concrete Exploitable Instance</span>
          </div>
          <p>A <strong>Vulnerability</strong> is a specific, concrete instance of a weakness occurring within a deployed software product that can be <em>directly exploited by an attacker</em> to violate system security policy.</p>
          <p>• Standardized as <strong>Common Vulnerabilities and Exposures (CVE)</strong>.<br>
          • <strong>Examples:</strong> CVE-2021-44228 (Log4Shell in Apache Log4j), CVE-2017-0144 (EternalBlue in Microsoft SMBv1).</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. Exposure: The Unintended Information Leak</span>
      <p>An <strong>Exposure</strong> is a system configuration issue or mistake that exposes sensitive information or enables an attacker to gather reconnaissance data without necessarily executing code (e.g., an open directory listing, public AWS S3 bucket, or verbose database error banners).</p>
    </div>
      `
    }
  },

  // Spread 27: Part 2 - Testing Models, ROE & Risk Equations (Pages 55–56)
  {
    spreadId: 27,
    left: {
      pageNumber: 55,
      runningHead: 'CH. 14 • TESTING MODELS: BLACK, WHITE & GREY BOX',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 14 • Topic 14: VAPT & Vulnerability vs Weakness (Part 3)</span>
      <h2>Penetration Testing Engagement Models</h2>
    </div>

    <div class="section-block">
      <span class="section-label">4. The 3 Penetration Testing Models (Q135)</span>
      <p>Penetration tests are classified by the level of preliminary architectural knowledge provided to the assessment team:</p>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Testing Model</th>
            <th>Knowledge Provided to Tester</th>
            <th>Simulation Realism & Primary Value (Q135)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Black-Box Testing (Zero-Knowledge)</strong></td>
            <td>Zero internal information! The tester is given only a target company name or IP range.</td>
            <td>Simulates an authentic external adversary or script kiddie. Must spend substantial time on passive OSINT and discovery. May miss deep internal logic flaws.</td>
          </tr>
          <tr>
            <td><strong>White-Box Testing (Full-Knowledge / Crystal-Box)</strong></td>
            <td>Complete access! Source code repositories, network architecture diagrams, API schemas, and administrative credentials.</td>
            <td>Most thorough and comprehensive assessment model. Allows testers to combine static code analysis (SAST) with dynamic runtime penetration testing.</td>
          </tr>
          <tr>
            <td><strong>Grey-Box Testing (Partial-Knowledge) (Q135)</strong></td>
            <td>Limited access! Typically provided standard user-level credentials and high-level architectural overview.</td>
            <td><strong>Industry Standard:</strong> Simulates a realistic malicious insider, compromised employee account, or privileged contractor. Maximizes ROI by focusing time on high-risk application logic.</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 56,
      runningHead: 'CH. 14 • RULES OF ENGAGEMENT & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 14 • Topic 14: VAPT & Vulnerability vs Weakness (Part 4)</span>
      <h2>Rules of Engagement (ROE) & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">5. Rules of Engagement (ROE) & Authorization (Q136)</span>
      <p>Without explicit, legally binding written authorization, any penetration testing activity constitutes an illegal cyber offence under Section 43/66 of the Indian Information Technology Act (punishable by 3 years imprisonment)!</p>
      
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">The "Get Out of Jail Free" Card: ROE Essentials (Q136)</span>
          <span class="statute-tag">Legal Protection</span>
        </div>
        <p>• <strong>Scope Specification:</strong> Explicit list of in-scope IP addresses, domain names, and applications. Third-party cloud providers (AWS, Azure) require prior authorization notifications.<br>
        • <strong>Out-of-Scope Systems:</strong> Strictly forbidden assets (e.g., live production transaction databases, hospital patient equipment, third-party payment gateways).<br>
        • <strong>Testing Windows:</strong> Designated time slots (e.g., weekends 02:00–06:00 AM) to prevent disruption of business operations.<br>
        • <strong>Forbidden Techniques:</strong> Banning destructive DoS/DDoS attacks, social engineering, or physical building entry unless explicitly commissioned.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">6. The Formal Risk Equation Revisited (Q137)</span>
      <p style="text-align: center; font-weight: 700; color: var(--navy-primary); font-size: 0.95rem;">
        $\text{Risk} = \text{Threat} \times \text{Vulnerability} \times \text{Impact}$
      </p>
      <p>If a severe vulnerability exists (e.g., Log4Shell) but the system is air-gapped with zero threat exposure ($\text{Threat} = 0$), the overall Risk is mathematically negligible!</p>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 14 (Q131–Q140):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q131:</strong> Vulnerability Assessment is a broad, automated scanning process that does NOT exploit vulnerabilities.</li>
        <li><strong>Q132:</strong> Penetration Testing actively exploits vulnerabilities to prove real-world business impact.</li>
        <li><strong>Q133:</strong> A Weakness (CWE) is a conceptual flaw in software design or implementation.</li>
        <li><strong>Q134:</strong> A Vulnerability (CVE) is a concrete, exploitable instance of a weakness in deployed software.</li>
        <li><strong>Q135:</strong> Grey-box testing provides partial internal knowledge (e.g., user credentials) and is the most popular corporate model.</li>
        <li><strong>Q136:</strong> Rules of Engagement (ROE) define the strict legal boundaries, testing windows, and authorized IP scopes.</li>
        <li><strong>Q137:</strong> Risk is strictly the product of Threat, Vulnerability, and Impact.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 14</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q131–Q140) on VAPT, Weakness vs Vulnerability & ROE.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="13" onclick="window.openMCQForSpread(13)">
          Start Quiz (Q131–Q140) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 15: TYPES OF VULNERABILITIES: INJECTION & MEMORY CORRUPTION (Pages 57–60, Spreads 28 & 29, Q141–Q150)
  // =========================================================================
  // Spread 28: Part 1 - Input Validation & Injection Flaws (SQLi, XSS, Cmd) (Pages 57–58)
  {
    spreadId: 28,
    left: {
      pageNumber: 57,
      runningHead: 'CH. 15 • INPUT VALIDATION VULNERABILITIES: SQLI',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 15 • Topic 15: Vulnerability Classes (Part 1)</span>
      <h2>Input Validation Vulnerabilities: SQL Injection</h2>
    </div>

    <div class="intro-abstract">
      <p>Software flaws emerge when developers fail to enforce strict boundaries between <strong>Code</strong> (the commands executed by an interpreter or CPU) and <strong>Data</strong> (the untrusted input supplied by a user). The most dangerous and prevalent manifestation of this failure is the <strong>Injection Flaw (CWE-74)</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. SQL Injection (SQLi / CWE-89) (Q141, Q142)</span>
      <p>SQL Injection occurs when untrusted user input is directly concatenated into a dynamic SQL database query string without proper sanitization or parameterization:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">The Anatomy of an SQLi Attack (Q141)</span>
          <span class="statute-tag">Classic Vulnerability</span>
        </div>
        <p>Vulnerable Code: <code>SELECT * FROM users WHERE user = '" + input + "' AND pass = '" + pass + "'";</code><br>
        Attacker Input: <code>admin' OR '1'='1' --</code><br>
        Resulting Executed Query: <code>SELECT * FROM users WHERE user = 'admin' OR '1'='1' --' AND pass = '...';</code><br>
        Because <code>'1'='1'</code> is permanently TRUE and <code>--</code> comments out the password check, the attacker bypasses authentication and logs in as administrator!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The 3 Broad Categories of SQL Injection (Q142)</span>
      <ul class="forensic-list">
        <li><strong>In-band SQLi (Classic):</strong> The attacker uses the same communication channel to launch the exploit and retrieve the stolen database results (e.g., Error-based SQLi, UNION-based SQLi).</li>
        <li><strong>Inferential SQLi (Blind):</strong> No data is visible on the webpage. The attacker reconstructs the database character-by-character by asking TRUE/FALSE questions: (1) <em>Boolean Blind:</em> Observing differences in page responses; (2) <em>Time-based Blind:</em> Forcing the database to sleep (<code>pg_sleep(10)</code>) and measuring response delay.</li>
        <li><strong>Out-of-band SQLi (OOB):</strong> The attacker triggers DNS or HTTP requests from the database server to an external server controlled by the attacker (e.g., <code>xp_dirtree</code> in MS SQL).</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Definitive Defense: Parameterized Queries (Prepared Statements) (Q143)</span>
      <p>Blacklisting bad characters (like single quotes) is brittle. The only definitive defense is <strong>Prepared Statements with Parameterized Queries</strong>: The database engine compiles the SQL query structure <em>first</em>, treating all subsequent user inputs strictly as literal data variables, making code execution impossible!</p>
    </div>
      `
    },
    right: {
      pageNumber: 58,
      runningHead: 'CH. 15 • XSS & OS COMMAND INJECTION',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 15 • Topic 15: Vulnerability Classes (Part 2)</span>
      <h2>Cross-Site Scripting (XSS) & Command Injection</h2>
    </div>

    <div class="section-block">
      <span class="section-label">4. Cross-Site Scripting (XSS / CWE-79) (Q144)</span>
      <p>XSS occurs when an application includes untrusted user data in a web page without proper output encoding, allowing malicious JavaScript to execute inside a victim's web browser:</p>
      
      <table class="statutory-table">
        <thead>
          <tr>
            <th>XSS Variant</th>
            <th>Execution Mechanism & Persistence</th>
            <th>Primary Impact (Q144)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Stored (Persistent) XSS</strong></td>
            <td>The malicious script is permanently stored in the application's database (e.g., comment section, profile bio). Every user viewing that page automatically executes the payload!</td>
            <td>Session hijacking, mass credential theft, worm propagation across social networks.</td>
          </tr>
          <tr>
            <td><strong>Reflected (Non-Persistent) XSS</strong></td>
            <td>The payload is carried inside an HTTP request (e.g., search query parameter: <code>search.php?q=&lt;script&gt;...&lt;/script&gt;</code>) and immediately reflected back in the HTTP response.</td>
            <td>Requires tricking victims into clicking a phishing link.</td>
          </tr>
          <tr>
            <td><strong>DOM-based XSS</strong></td>
            <td>Executes purely client-side! Malicious data is read from a DOM source (e.g., <code>window.location</code>) and written to an unsafe DOM sink (e.g., <code>document.write</code>, <code>innerHTML</code>).</td>
            <td>Server never sees the payload; completely bypasses server-side WAF filters!</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">5. OS Command Injection (CWE-78) (Q145)</span>
      <p>Occurs when an application passes unsanitized input to a system shell (e.g., <code>system("ping " + ip)</code>). Attackers append shell command separators (<code>;</code>, <code>&amp;&amp;</code>, <code>|</code>) to execute arbitrary operating system commands: <code>8.8.8.8 ; cat /etc/passwd</code>!</p>
    </div>
      `
    }
  },

  // Spread 29: Part 2 - Memory Corruption Flaws & Defenses (Pages 59–60)
  {
    spreadId: 29,
    left: {
      pageNumber: 59,
      runningHead: 'CH. 15 • MEMORY CORRUPTION: BUFFER OVERFLOWS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 15 • Topic 15: Vulnerability Classes (Part 3)</span>
      <h2>Memory Corruption: Buffer Overflows (CWE-120)</h2>
    </div>

    <div class="section-block">
      <span class="section-label">6. Memory Architecture: The Call Stack Frame (Q146)</span>
      <p>Programs written in low-level memory-unsafe languages (C/C++) manage memory manually. When a function executes, a <strong>Stack Frame</strong> is pushed onto the call stack containing:</p>
      <div class="statute-card card-teal" style="font-family: monospace; font-size: 0.84rem;">
        [ Higher Addresses ]<br>
        &nbsp;&nbsp;&nbsp;&nbsp;Function Arguments (Parameters passed to function)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>Return Address (EIP / RIP)</strong> &larr; <em>Target of Attacker!</em><br>
        &nbsp;&nbsp;&nbsp;&nbsp;Saved Base Pointer (EBP / RBP)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;Local Buffer Variables (e.g., char buffer[64])<br>
        [ Lower Addresses &larr; Stack Grows Downward! ]
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">7. Classic Stack-Based Buffer Overflow Mechanics (Q146, Q147)</span>
      <p>Vulnerable C library functions (<code>strcpy</code>, <code>gets</code>, <code>scanf</code>, <code>sprintf</code>) copy data into buffers without verifying boundary limits:</p>
      <div class="statute-card card-amber">
        <p>1. A local buffer is allocated 64 bytes on the stack.<br>
        2. The attacker inputs 80 bytes of crafted data.<br>
        3. The excess 16 bytes overflow the buffer boundaries, smashing the Saved Base Pointer (EBP) and overwriting the <strong>Return Address (EIP)</strong>!<br>
        4. When the function finishes, the CPU pops the overwritten return address into the instruction pointer (EIP), diverting program execution directly into the attacker's injected <strong>Shellcode</strong>!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 60,
      runningHead: 'CH. 15 • MEMORY DEFENSES: CANARIES, ASLR, DEP',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 15 • Topic 15: Vulnerability Classes (Part 4)</span>
      <h2>Modern Memory Defenses & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">8. Modern Operating System Memory Mitigations (Q148, Q149)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Mitigation Mechanism</th>
            <th>How It Defeats Memory Exploits (Q148, Q149)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Stack Canaries (Compiler Cookies) (Q148)</strong></td>
            <td>The compiler inserts a random 32/64-bit secret integer (a "canary") immediately between local buffers and the saved return address. Before returning, the function checks if the canary has changed. If an overflow altered the canary, the program immediately aborts before EIP is hijacked!</td>
          </tr>
          <tr>
            <td><strong>2. ASLR (Address Space Layout Randomization) (Q149)</strong></td>
            <td>Randomizes the memory offsets of the Stack, Heap, and shared libraries (libc) every time the program launches. Attackers cannot hardcode memory jump addresses; jumping to a hardcoded address causes an instant segmentation fault crash.</td>
          </tr>
          <tr>
            <td><strong>3. DEP / NX-Bit (Data Execution Prevention)</strong></td>
            <td>Enforces the <code>W^X</code> (Write XOR Execute) rule: Memory regions marked as writable (Stack, Heap) cannot be executed as code! Prevents CPU from executing shellcode stored on the stack. (Bypassed via Return-Oriented Programming [ROP] chains).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 15 (Q141–Q150):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q141:</strong> SQL Injection occurs when untrusted input is concatenated directly into SQL queries.</li>
        <li><strong>Q142:</strong> The 3 SQLi classes are In-band (Error/UNION), Inferential (Boolean/Time Blind), and Out-of-band.</li>
        <li><strong>Q143:</strong> Parameterized queries (prepared statements) are the primary definitive defense against SQLi.</li>
        <li><strong>Q144:</strong> Stored XSS permanently stores malicious JavaScript in databases, executing for all visiting victims.</li>
        <li><strong>Q145:</strong> OS Command Injection appends shell separators (<code>;</code>, <code>|</code>) to execute OS binaries.</li>
        <li><strong>Q146:</strong> Buffer overflow (CWE-120) overwrites the saved Return Address (EIP/RIP) on the call stack.</li>
        <li><strong>Q148:</strong> Stack canaries detect stack buffer overflows by placing a secret value before the return address.</li>
        <li><strong>Q149:</strong> ASLR randomizes stack, heap, and library memory addresses to prevent predictable jumps.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 15</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q141–Q150) on Injection Flaws, Buffer Overflows & ASLR/Canaries.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="14" onclick="window.openMCQForSpread(14)">
          Start Quiz (Q141–Q150) &rarr;
        </button>
      </div>
    </div>
      `
    }
  }
];

