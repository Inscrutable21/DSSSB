const fs = require('fs');
const path = require('path');

// ==========================================
// SPREAD 4 (Pages 7 & 8)
// Topic: Asymmetric Key Exchange (ECC/ECDHE) & Hashing Algorithm Foundations
// Questions: Q31 to Q40
// ==========================================

const spread4Left = `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 4 • Asymmetric Key Exchange & Elliptic Curves</span>
      <h2>Diffie-Hellman Key Exchange, Perfect Forward Secrecy & ECC Architecture</h2>
    </div>
    <p>While RSA solves encryption and signatures via prime factorization, modern high-speed secure communications (such as TLS 1.3, Signal, and SSH) rely on <strong>Elliptic Curve Cryptography (ECC)</strong> and <strong>Ephemeral Diffie-Hellman</strong> for key exchange.</p>

    <div class="section-block">
      <span class="section-label">1. Ephemeral Diffie-Hellman & Perfect Forward Secrecy (PFS) (Q31)</span>
      <p>In traditional static key exchanges, if a server's private master key is compromised years later, an eavesdropper who recorded past encrypted network traffic can decrypt <em>every single historical session</em>!</p>
      
      <div class="alert-box">
        <strong>The Solution — Perfect Forward Secrecy (PFS) (Q31):</strong>
        <p><strong>Ephemeral Diffie-Hellman (DHE / ECDHE)</strong> generates a fresh, temporary (ephemeral) key pair for <em>every single individual session</em>. Once the session ends, the ephemeral private keys are permanently erased from memory.</p>
        <p><strong>Core Exam Rule (Q31):</strong> Even if an adversary compromises the server's long-term private master key in the future, past recorded sessions <strong>CANNOT be decrypted</strong> because the ephemeral session keys were destroyed!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Elliptic Curve Cryptography (ECC) Architecture (Q32, Q33)</span>
      <p>Standardized by NIST and Certicom, ECC is based on the mathematics of algebraic elliptic curves over finite fields:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">The Hard Math Problem (Q32)</span>
            <span class="statute-tag">ECDLP</span>
          </div>
          <p>ECC is established upon the algebraic structure of elliptic curves over finite fields: <code>y<sup>2</sup> = x<sup>3</sup> + ax + b</code>.</p>
          <p>Its security relies on the computational hardness of the <strong>Elliptic Curve Discrete Logarithm Problem (ECDLP)</strong>: Given curve point <em>P</em> and point <em>Q = k &times; P</em>, it is practically impossible to calculate the private scalar integer <em>k</em>!</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">The Security Advantage (Q33)</span>
            <span class="statute-tag">Smaller Keys & Speed</span>
          </div>
          <p>Because no sub-exponential algorithm exists to solve ECDLP (unlike RSA's Number Field Sieve), ECC delivers equivalent security with <strong>drastically smaller key sizes</strong>:</p>
          <ul style="margin: 4px 0 0 16px; padding: 0;">
            <li><strong>256-bit ECC</strong> &asymp; <strong>3,072-bit RSA</strong></li>
            <li><strong>384-bit ECC</strong> &asymp; <strong>7,680-bit RSA</strong></li>
          </ul>
          <p>Smaller keys consume vastly less CPU power, memory, and battery—ideal for mobile devices and smart cards!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. High-Speed Modern ECC: Ed25519 & Curve25519 (Q34)</span>
      <p>Designed by Daniel J. Bernstein (djb), <strong>Curve25519</strong> is a Montgomery curve providing 128-bit security strength:</p>
      <ul>
        <li><strong>Ed25519 (Q34):</strong> A high-speed, modern Edwards-curve Digital Signature Algorithm (EdDSA) implemented over Curve25519.</li>
        <li><strong>Why it dominates modern protocols:</strong> Widely adopted in <strong>TLS 1.3, OpenSSH, Signal, and Tor</strong> because its operations run in strict constant time, completely eliminating side-channel cache-timing attacks!</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q31–Q34):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Perfect Forward Secrecy (PFS) (Q31):</strong> Provided by Ephemeral Diffie-Hellman (DHE / ECDHE); compromise of long-term server key does NOT compromise past recorded sessions.</li>
        <li><strong>ECC Mathematical Hard Problem (Q32):</strong> Based on the <strong>Elliptic Curve Discrete Logarithm Problem (ECDLP)</strong> over finite fields.</li>
        <li><strong>ECC Key Size Advantage (Q33):</strong> Provides equivalent security with vastly smaller keys (<strong>256-bit ECC &asymp; 3,072-bit RSA</strong>).</li>
        <li><strong>Ed25519 (Q34):</strong> Modern high-speed signature algorithm over Curve25519 used in TLS 1.3, SSH, and Signal.</li>
      </ul>
    </div>`;

const spread4Right = `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 5 • Hashing Algorithms & Collision Attacks</span>
      <h2>Hashing Foundations, Collision Resistance, The Birthday Paradox & SHA-3</h2>
    </div>
    <p>A <strong>Cryptographic Hash Function</strong> takes an arbitrary-length input (file, password, message) and mathematically maps it into a fixed-length output string called a <strong>Hash Digest</strong>. Unlike encryption, hashing is strictly a <strong>one-way function</strong> (no keys, cannot be decrypted).</p>

    <div class="section-block">
      <span class="section-label">1. The 3 Mandatory Properties of Cryptographic Hash Functions (Q35, Q36, Q37)</span>
      <p>For a hash algorithm to be secure in digital forensics and cryptography, it must satisfy three mathematical rules:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Pre-image Resistance (Q36)</span>
            <span class="statute-tag">One-Way Property</span>
          </div>
          <p>Given any hash digest <em>h</em>, it is computationally infeasible to reverse-engineer or find the original message <em>x</em> such that <code>H(x) = h</code>.</p>
          <p><strong>Why it matters:</strong> Ensures stored password hashes cannot be turned back into plain passwords.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. Second Pre-image Resistance (Q37)</span>
            <span class="statute-tag">Weak Collision Resistance</span>
          </div>
          <p>Given a specific, fixed message <em>x</em>, it is computationally infeasible to find a <em>different message y (y &ne; x)</em> such that <code>H(x) = H(y)</code>.</p>
          <p><strong>Why it matters:</strong> Prevents an attacker from forging a fake contract that produces the exact same hash as an existing legitimate contract.</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">3. Collision Resistance (Q35)</span>
            <span class="statute-tag">Strong Collision Resistance</span>
          </div>
          <p>It is computationally infeasible to find <strong>ANY two arbitrary distinct messages</strong> <em>x</em> and <em>y (x &ne; y)</em> such that <code>H(x) = H(y)</code>.</p>
          <p><strong>Why it matters:</strong> The cornerstone of digital signatures and forensic integrity proofs!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Birthday Paradox & Hash Collisions (Q38, Q39)</span>
      <p>How hard is it to find a collision? Intuition suggests you need 2<sup>n</sup> attempts for an <em>n</em>-bit hash. Probability theory proves otherwise!</p>
      
      <div class="alert-box">
        <strong>The Birthday Paradox in Cryptography (Q38):</strong>
        <p>In a room of just 23 people, there is a &gt;50% chance that two people share the exact same birthday! Similarly, an attacker searching for <em>any</em> two messages that collide does not have to match a specific target hash.</p>
        <p><strong>The Square-Root Bound:</strong> Finding a collision in an <em>n</em>-bit hash function requires only approximately <strong>2<sup>n/2</sup> operations</strong> (NOT 2<sup>n</sup>!).</p>
        <ul>
          <li>For MD5 (128 bits): Collisions require only 2<sup>64</sup> operations &rarr; <em>Completely broken!</em></li>
          <li>For SHA-1 (160 bits): Collisions require only 2<sup>80</sup> operations.</li>
          <li><strong>Google's SHAttered Attack (2017) (Q39):</strong> CWI Amsterdam and Google researchers generated the <strong>world's first real SHA-1 collision</strong> (two distinct PDF documents with identical SHA-1 hashes), proving SHA-1 unsafe for digital certificates and forensic evidence!</li>
        </ul>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. Modern Hashing Architecture: SHA-2 vs. SHA-3 Sponge Construction (Q40)</span>
      <p>While MD5, SHA-1, and SHA-2 use the classic <strong>Merkle-Damgård construction</strong> (iteratively compressing fixed blocks), <strong>SHA-3 (FIPS 202)</strong> uses a revolutionary design:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">The Sponge Construction (Q40)</span>
            <span class="statute-tag">Keccak / SHA-3</span>
          </div>
          <p>Selected by NIST as the SHA-3 winner, the <strong>Keccak Sponge Construction</strong> operates in two continuous phases on a 1600-bit internal state array:</p>
          <ol style="margin: 4px 0 0 16px; padding: 0;">
            <li><strong>Absorbing Phase:</strong> Input message blocks are XORed into the state, followed by iterative state permutations.</li>
            <li><strong>Squeezing Phase:</strong> Output hash bits are read ("squeezed") from the state until the desired digest length is reached.</li>
          </ol>
          <p><strong>Key Advantage:</strong> Naturally immune to length extension attacks without needing HMAC nesting!</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q35–Q40):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Collision Resistance (Q35):</strong> Infeasible to find ANY two distinct inputs <em>x</em> and <em>y</em> such that <em>H(x) = H(y)</em>.</li>
        <li><strong>Pre-image Resistance (Q36):</strong> Given hash digest <em>h</em>, infeasible to find original input <em>x</em> such that <em>H(x) = h</em> (One-Way property).</li>
        <li><strong>Second Pre-image Resistance (Q37):</strong> Given specific input <em>x</em>, infeasible to find a different input <em>y</em> such that <em>H(x) = H(y)</em>.</li>
        <li><strong>Birthday Paradox (Q38):</strong> Finding arbitrary hash collisions requires only approximately <strong>2<sup>n/2</sup> operations</strong> instead of 2<sup>n</sup>.</li>
        <li><strong>SHAttered Attack (Q39):</strong> Google and CWI Amsterdam produced the first practical collision against <strong>SHA-1</strong> in 2017.</li>
        <li><strong>SHA-3 Keccak (Q40):</strong> Standardizes the <strong>Sponge Construction</strong> (Absorbing and Squeezing phases), fundamentally different from Merkle-Damgård.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 4 (Q31–Q40)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 high-yield questions on PFS, ECC, Hash Properties, Birthday Paradox & SHA-3.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(3)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q31–Q40) &rarr;
      </button>
    </div>`;

// ==========================================
// SPREAD 5 (Pages 9 & 10)
// Topic: Hashing Integrity, Digital Signatures, Digital Certificates & PKI
// Questions: Q41 to Q50
// ==========================================

const spread5Left = `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 5 • Hash Flaws & Digital Signatures</span>
      <h2>Length Extension Attacks, HMAC Architecture & Digital Signature Schemes</h2>
    </div>
    <p>Hashing alone verifies that data has not changed accidentally, but it cannot authenticate <em>who</em> sent the data. To achieve authentication and non-repudiation, cryptography employs <strong>HMAC</strong> and <strong>Digital Signatures</strong>.</p>

    <div class="section-block">
      <span class="section-label">1. Merkle-Damgård Flaw: Length Extension Attacks (Q41)</span>
      <p>Developers often attempt to create a Message Authentication Code (MAC) naively by prefixing a secret key: <code>MAC = Hash(Secret_Key || Message)</code>.</p>
      
      <div class="alert-box">
        <strong>The Exploit — Length Extension Attack (Q41):</strong>
        <p>In the <strong>Merkle-Damgård construction</strong> (used in MD5, SHA-1, SHA-256), the final hash output is simply the internal state of the last block! Because the state is known, an attacker can append malicious data to the message and continue the hashing computation to produce a 100% valid hash <strong>without ever knowing the secret key</strong>!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Solution: HMAC (RFC 2104) (Q42)</span>
      <p>Standardized by NIST and RFC 2104, <strong>HMAC (Hash-based Message Authentication Code)</strong> is mathematically proven immune to length extension attacks.</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">HMAC Nested Architecture (Q42)</span>
            <span class="statute-tag">Inner & Outer Padding</span>
          </div>
          <p>HMAC prevents length extension by performing a two-pass nested hash with two fixed constant pads:</p>
          <p style="text-align: center; font-family: monospace; font-size: 0.88rem; background: rgba(0,0,0,0.04); padding: 8px; border-radius: 4px; margin: 6px 0;">
            HMAC(K, M) = Hash((K &oplus; opad) || Hash((K &oplus; ipad) || M))
          </p>
          <ul style="margin: 4px 0 0 16px; padding: 0;">
            <li><strong>ipad (inner pad):</strong> 0x36 repeated across the block.</li>
            <li><strong>opad (outer pad):</strong> 0x5C repeated across the block.</li>
          </ul>
          <p>Because the inner hash is digested a second time by the outer hash, an attacker cannot extend the inner message!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. Digital Signatures: Architecture & Non-Repudiation (Q43)</span>
      <p>A <strong>Digital Signature</strong> is the electronic equivalent of a notarized handwritten signature, providing <strong>Authentication, Data Integrity, and Non-Repudiation</strong>.</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Signing Step (Sender)</span>
            <span class="statute-tag">Private Key</span>
          </div>
          <p>1. The sender hashes the document into a digest using SHA-256.<br>
          2. The sender encrypts the digest with their <strong>PRIVATE KEY</strong>: <code>Signature = Encrypt(Digest, Sender_Private_Key)</code>.<br>
          3. The signature is attached to the document.</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">Verifying Step (Recipient) (Q43)</span>
            <span class="statute-tag">Public Key</span>
          </div>
          <p>1. The recipient decrypts the signature using the <strong>SENDER'S PUBLIC KEY</strong> to retrieve the original digest.<br>
          2. The recipient independently calculates the SHA-256 hash of the received document.<br>
          3. If both digests match, the signature is 100% valid!</p>
        </div>
      </div>
      <p class="caption"><strong>🔥 GOLDEN EXAM RULE (Q43):</strong> The sender signs with their <strong>PRIVATE KEY</strong>; anyone in the world verifies with the sender's <strong>PUBLIC KEY</strong>!</p>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q41–Q43):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Length Extension Attack (Q41):</strong> Plagues Merkle-Damgård hashes (MD5, SHA-1, SHA-256) when naively computing <em>MAC = Hash(Key || Message)</em>.</li>
        <li><strong>HMAC Defense (Q42):</strong> Computes nested hashes using inner (<em>ipad</em>) and outer (<em>opad</em>) padding keys to eliminate length extension attacks.</li>
        <li><strong>Digital Signature Key Roles (Q43):</strong> The sender signs the digest with their <strong>Private Key</strong>; the recipient verifies with the sender's <strong>Public Key</strong>.</li>
      </ul>
    </div>`;

const spread5Right = `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 5 • Digital Certificates & PKI Infrastructure</span>
      <h2>Digital Certificates (X.509), Certifying Authorities (CA), CRL & OCSP</h2>
    </div>
    <p>How do you know a public key genuinely belongs to Google and not an imposter? <strong>Public Key Infrastructure (PKI)</strong> solves this identity crisis through trusted third-party <strong>Certifying Authorities (CAs)</strong> and standard <strong>Digital Certificates</strong>.</p>

    <div class="section-block">
      <span class="section-label">1. The ITU-T X.509 Standard & SAN Extension (Q44, Q45)</span>
      <p>Standardized by the International Telecommunication Union, <strong>X.509</strong> is the worldwide format for public-key digital certificates (used in HTTPS, SSL/TLS, VPNs, and S/MIME email):</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">X.509 Structure (Q44)</span>
            <span class="statute-tag">Digital Identity Card</span>
          </div>
          <p>An X.509 certificate cryptographically binds a public key to an entity's identity, digitally signed by a trusted Root CA.</p>
          <p><strong>Core Fields:</strong> Serial Number, Subject (Owner), Issuer (CA), Validity Period (Not Before / Not After), Subject Public Key Info, and CA Signature Algorithm.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">SAN Extension (Q45)</span>
            <span class="statute-tag">X.509 v3 Multi-Domain</span>
          </div>
          <p>In early X.509 v1, the <em>Common Name (CN)</em> field only supported one domain. Modern browsers deprecate CN in favor of the <strong>Subject Alternative Name (SAN)</strong> extension in X.509 v3.</p>
          <p><strong>Exam Rule (Q45):</strong> The SAN extension allows a single certificate to secure multiple distinct domains and subdomains (e.g., <code>example.com</code>, <code>api.example.com</code>, <code>mail.example.com</code>).</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Certificate Revocation: CRL vs. OCSP (Q46, Q47)</span>
      <p>When a server's private key is stolen, the certificate must be revoked immediately before its expiration date:</p>
      
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr>
              <th>Revocation Method</th>
              <th>How It Operates</th>
              <th>Key Strengths & Weaknesses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>CRL (Certificate Revocation List) (Q47)</strong></td>
              <td>A periodically published, digitally signed file listing all revoked certificate <strong>serial numbers</strong>.</td>
              <td><em>Flaw:</em> High latency! Files can grow to hundreds of megabytes, and clients only update them periodically.</td>
            </tr>
            <tr>
              <td><strong>OCSP (Online Certificate Status Protocol) (Q46)</strong></td>
              <td>RFC 6960 protocol allowing browsers to send a lightweight real-time query to the CA: <em>"Is certificate #12345 good?"</em></td>
              <td><em>Strength:</em> Instant real-time status check. <em>Enhancement:</em> <strong>OCSP Stapling</strong> allows the web server itself to cache the signed OCSP response to prevent privacy tracking.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. PKI Transparency & Web Protection: CT, CAA & HSTS (Q48, Q49, Q50)</span>
      <p>Modern browser ecosystems enforce three critical defense standards:</p>
      <ul>
        <li><strong>Certificate Transparency (CT - RFC 6962) (Q48):</strong> Requires all CAs to append every newly issued certificate to publicly auditable, tamper-evident cryptographic log servers. Prevents rogue CAs from secretly issuing fraudulent certificates!</li>
        <li><strong>DNS CAA Records (Q49):</strong> A DNS Resource Record (<strong>Certification Authority Authorization</strong>) that allows domain owners to declare which specific CAs are permitted to issue certificates for their domain (e.g., <code>example.com. CAA 0 issue "letsencrypt.org"</code>).</li>
        <li><strong>HSTS Header (Strict-Transport-Security) (Q50):</strong> An HTTP response header sent by servers that forces browsers to interact with the site <strong>strictly over encrypted HTTPS</strong>, completely defeating SSL stripping and Man-in-the-Middle downgrades!</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q44–Q50):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>X.509 Standard (Q44):</strong> ITU-T international standard defining public key digital certificates.</li>
        <li><strong>SAN Extension (Q45):</strong> Subject Alternative Name in X.509 v3 allows securing multiple domains with one certificate.</li>
        <li><strong>OCSP (Q46):</strong> RFC 6960 protocol for checking certificate revocation status in real time.</li>
        <li><strong>CRL (Q47):</strong> Periodically published signed list of revoked certificate serial numbers.</li>
        <li><strong>Certificate Transparency (Q48):</strong> Requires CAs to publish all certificates to publicly auditable logs.</li>
        <li><strong>DNS CAA Record (Q49):</strong> Declares which specific CAs are authorized to issue certificates for a domain.</li>
        <li><strong>HSTS Header (Q50):</strong> Forces browsers to connect exclusively over HTTPS, preventing SSL stripping.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 5 (Q41–Q50)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 high-yield questions on HMAC, Digital Signatures, X.509 Certificates, CRL/OCSP & HSTS.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(4)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q41–Q50) &rarr;
      </button>
    </div>`;

// Update book5_data.js
const bookPath = path.resolve(__dirname, '../book5_data.js');
global.window = {};
require(bookPath);

// Spread index 3 is Spread 4 (Pages 7 and 8)
window.book5Data.spreads[3].left.content = spread4Left;
window.book5Data.spreads[3].right.content = spread4Right;
window.book5Data.spreads[3].left.runningHead = "CH. 4 • ASYMMETRIC KEY EXCHANGE & ECC";
window.book5Data.spreads[3].right.runningHead = "CH. 5 • HASHING FOUNDATIONS & SHA-3";

// Spread index 4 is Spread 5 (Pages 9 and 10)
window.book5Data.spreads[4].left.content = spread5Left;
window.book5Data.spreads[4].right.content = spread5Right;
window.book5Data.spreads[4].left.runningHead = "CH. 5 • HMAC & DIGITAL SIGNATURES";
window.book5Data.spreads[4].right.runningHead = "CH. 5 • X.509 DIGITAL CERTIFICATES & PKI";

const updatedJs = '// Book 5 Data: Information Security, Applied Cryptography & VAPT\nwindow.book5Data = ' + JSON.stringify(window.book5Data, null, 2) + ';\n';
fs.writeFileSync(bookPath, updatedJs, 'utf8');
console.log('Successfully updated book5_data.js spreads 4 & 5 (Pages 7 to 10)!');

