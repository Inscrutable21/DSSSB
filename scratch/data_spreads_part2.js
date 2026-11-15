// Spreads Part 2: Spreads 6 to 10 (Pages 11 to 20)
module.exports = [
  // SPREAD 6 (Pages 11–12): Topic 4C: Asymmetric Algorithms: RSA Cryptosystem Architecture
  {
    spreadId: 5,
    left: {
      pageNumber: 11,
      runningHead: "CH. 6 • ASYMMETRIC CRYPTO & RSA MATH",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 6 • Asymmetric Public-Key Ciphers</span>
      <h2>The RSA Cryptosystem: Mathematical Foundations & Key Generation</h2>
    </div>
    <p>Asymmetric cryptography eliminates the shared-secret problem by utilizing a mathematically linked <strong>Key Pair</strong>: a <strong>Public Key</strong> (freely published to the world for encrypting messages or verifying signatures) and a <strong>Private Key</strong> (kept strictly confidential for decrypting messages or signing) (<strong>Q51</strong>).</p>

    <div class="section-block">
      <span class="section-label">1. Trapdoor One-Way Functions & Prime Factorization (Q52, Q53)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Trapdoor Function (Q52)</span>
            <span class="statute-tag">One-Way Math</span>
          </div>
          <p>A mathematical function that is easy to compute in one direction (e.g. multiplying large primes), but practically impossible to invert unless one possesses a special piece of secret auxiliary data called the <strong>trapdoor</strong>.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Prime Factorization (Q53)</span>
            <span class="statute-tag">RSA Foundation</span>
          </div>
          <p>Invented in 1977 by Ron Rivest, Adi Shamir, and Leonard Adleman, RSA is fundamentally based on the <strong>Prime Factorization Problem</strong>: multiplying two 1024-bit primes <code>n = p &times; q</code> takes microseconds, but factoring <em>n</em> back into <em>p</em> and <em>q</em> is practically impossible on classical supercomputers!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Step-by-Step RSA Key Generation Algorithm (Q54, Q55, Q56)</span>
      <ol style="margin: 6px 0 0 18px; padding: 0; line-height: 1.6;">
        <li>Select two distinct, secret large prime numbers: <code>p</code> and <code>q</code>.</li>
        <li>Compute the modulus: <code>n = p &times; q</code>. (Public modulus length is typically 2048 or 3072 bits).</li>
        <li>Compute Euler's Totient Function (<strong>Q54</strong>): <code>&phi;(n) = (p - 1) &times; (q - 1)</code>.</li>
        <li>Choose a public encryption exponent <code>e</code> (<strong>Q55</strong>): standard value is universally chosen as <strong>e = 65,537</strong> (Fermat prime F<sub>4</sub> = 2<sup>16</sup> + 1). Its low Hamming weight (binary <code>10000000000000001</code>) ensures rapid modular exponentiation and prevents small-exponent attacks.</li>
        <li>Compute the private decryption exponent <code>d</code> (<strong>Q56</strong>): calculated using the Extended Euclidean Algorithm as the modular multiplicative inverse: <code>d &equiv; e<sup>-1</sup> mod &phi;(n)</code>.</li>
      </ol>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q51–Q56):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Asymmetric Key Pair (Q51):</strong> Public key for encrypting/verifying; Private key for decrypting/signing.</li>
        <li><strong>Trapdoor Function (Q52):</strong> Easy to compute forward, impossible to reverse without secret trapdoor.</li>
        <li><strong>RSA Hard Problem (Q53):</strong> Based on the <strong>Prime Factorization Problem</strong> of large composite <em>n</em>.</li>
        <li><strong>Euler's Totient (Q54):</strong> For two primes <em>p</em> and <em>q</em>, <strong>&phi;(n) = (p - 1)(q - 1)</strong>.</li>
        <li><strong>Public Exponent e (Q55):</strong> Standardized as <strong>65,537</strong> (Fermat prime F<sub>4</sub> = 2<sup>16</sup> + 1).</li>
        <li><strong>Private Exponent d (Q56):</strong> <strong>d &equiv; e<sup>-1</sup> mod &phi;(n)</strong> via Extended Euclidean Algorithm.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 12,
      runningHead: "CH. 6 • RSA FORMULAS & OAEP PADDING",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">RSA Operations & Padding</span>
      <h2>RSA Encryption, Decryption & The Necessity of RSA-OAEP Padding</h2>
    </div>
    <p>Understanding how RSA operates in practice and why raw modular arithmetic is vulnerable to chosen-ciphertext attacks:</p>

    <div class="section-block">
      <span class="section-label">1. RSA Encryption & Decryption Formulas (Q57)</span>
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr>
              <th>Operation</th>
              <th>Mathematical Computation</th>
              <th>Key Required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Encryption (Q57)</strong></td>
              <td><code>Ciphertext = (Message<sup>e</sup>) mod n</code></td>
              <td>Recipient's <strong>Public Key</strong> (e, n)</td>
            </tr>
            <tr>
              <td><strong>Decryption (Q57)</strong></td>
              <td><code>Message = (Ciphertext<sup>d</sup>) mod n</code></td>
              <td>Recipient's <strong>Private Key</strong> (d, n)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="caption">Euler's theorem guarantees that: <code>(M<sup>e</sup>)<sup>d</sup> &equiv; M<sup>(e&times;d)</sup> &equiv; M mod n</code>, cleanly restoring the original message.</p>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Danger of Textbook RSA & Mandatory RSA-OAEP Padding (Q58, Q59)</span>
      <ul>
        <li><strong>Why Raw Textbook RSA Fails (Q58):</strong> Unpadded RSA is <em>deterministic</em>. Encrypting the same message with the same public key always outputs identical ciphertext, allowing an eavesdropper to confirm guesses about plaintext contents or forge ciphertexts via homomorphic multiplication.</li>
        <li><strong>Mandatory Standard — RSA-OAEP (Q59):</strong> <strong>Optimal Asymmetric Encryption Padding (RFC 8017)</strong> uses a two-round Feistel-style network and random cryptographic seeds to transform plaintext into a randomized, all-or-nothing block before modular exponentiation. It makes RSA <strong>probabilistically secure</strong>, completely neutralizing chosen-ciphertext attacks (Bleichenbacher / Coppersmith).</li>
        <li><strong>NIST Key Length Standards (Q60):</strong> 1024-bit RSA was formally deprecated in 2013. A minimum of <strong>2048 bits</strong> (or 3072 bits for classified data) is required for modern enterprise security.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q57–Q60):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>RSA Formulas (Q57):</strong> Encryption: <code>C = (M<sup>e</sup>) mod n</code>; Decryption: <code>M = (C<sup>d</sup>) mod n</code>.</li>
        <li><strong>Textbook RSA Flaw (Q58):</strong> Deterministic encryption exposes data to chosen-ciphertext attacks.</li>
        <li><strong>RSA-OAEP Padding (Q59):</strong> Mandatory Feistel padding providing probabilistic chosen-ciphertext security.</li>
        <li><strong>Recommended Key Length (Q60):</strong> Minimum <strong>2048-bit</strong> RSA keys (3072 bits for long-term data).</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 6 (Q51–Q60)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on the RSA Cryptosystem, Totient Functions, Public Exponent e & OAEP Padding.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(5)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q51–Q60) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 7 (Pages 13–14): Topic 4D: Asymmetric Algorithms: Diffie-Hellman & ECC
  {
    spreadId: 6,
    left: {
      pageNumber: 13,
      runningHead: "CH. 7 • DIFFIE-HELLMAN KEY EXCHANGE",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 7 • Key Exchange & Elliptic Curves</span>
      <h2>Diffie-Hellman Key Exchange, DLP & Perfect Forward Secrecy</h2>
    </div>
    <p>Published in 1976 by Whitfield Diffie and Martin Hellman, the <strong>Diffie-Hellman (DH) protocol</strong> solved the secret key exchange problem by allowing two strangers to agree on a shared secret over an untrusted network (<strong>Q61</strong>).</p>

    <div class="section-block">
      <span class="section-label">1. The Discrete Logarithm Problem (DLP) (Q62, Q63)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">The Hard Math Problem (Q62)</span>
            <span class="statute-tag">DLP Foundation</span>
          </div>
          <p>Diffie-Hellman relies on the <strong>Discrete Logarithm Problem (DLP)</strong> over a finite prime field: Given base generator <em>g</em>, prime modulus <em>p</em>, and public value <code>A = (g<sup>a</sup>) mod p</code>, it is practically impossible to calculate the secret private exponent <em>a</em>!</p>
        </div>

        <div class="statute-card card-penalty">
          <div class="statute-header">
            <span class="statute-section">MitM Vulnerability (Q63)</span>
            <span class="statute-tag badge-penalty">No Authentication</span>
          </div>
          <p>Classic unauthenticated Diffie-Hellman is vulnerable to a <strong>Man-in-the-Middle (MitM) Attack</strong>: an attacker (Eve) sitting in the middle intercepts keys and performs two separate DH exchanges unless endpoints authenticate using digital certificates!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Ephemeral DH & Perfect Forward Secrecy (PFS) (Q64)</span>
      <div class="alert-box">
        <strong>Perfect Forward Secrecy (PFS) (Q64):</strong>
        <p>In traditional static key exchanges, if a server's private key is stolen years later, recorded past network traffic can be decrypted! <strong>Ephemeral Diffie-Hellman (DHE / ECDHE)</strong> generates a temporary, single-session key pair for every handshake and erases it immediately after use.</p>
        <p><strong>Core Exam Rule (Q64):</strong> Compromise of the server's long-term private master key does <strong>NOT compromise past recorded sessions</strong>!</p>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q61–Q64):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Diffie-Hellman (Q61):</strong> Protocol enabling two parties to agree on a shared secret over a public wire.</li>
        <li><strong>DH Hard Problem (Q62):</strong> Based on the <strong>Discrete Logarithm Problem (DLP)</strong> over a finite prime field.</li>
        <li><strong>Man-in-the-Middle (Q63):</strong> Threat against unauthenticated Diffie-Hellman key exchanges.</li>
        <li><strong>Perfect Forward Secrecy (PFS) (Q64):</strong> Provided by DHE/ECDHE; long-term key compromise cannot decrypt past traffic.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 14,
      runningHead: "CH. 7 • ELLIPTIC CURVE CRYPTOGRAPHY",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Next-Gen Asymmetric Cryptography</span>
      <h2>Elliptic Curve Cryptography (ECC), Ed25519 & Quantum Impact</h2>
    </div>
    <p>Standardized by NIST and Certicom, ECC delivers equivalent cryptographic security with drastically smaller key sizes.</p>

    <div class="section-block">
      <span class="section-label">1. ECC Architecture & Key Size Efficiency (Q65, Q66, Q69)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">ECDLP Hard Problem (Q65)</span>
            <span class="statute-tag">y^2 = x^3 + ax + b</span>
          </div>
          <p>Based on the algebraic structure of elliptic curves over finite fields. Finding the scalar multiplier <em>k</em> given curve points <em>P</em> and <code>Q = k &times; P</code> is the <strong>Elliptic Curve Discrete Logarithm Problem (ECDLP)</strong>.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Key Efficiency (Q66, Q69)</span>
            <span class="statute-tag">Small Keys, High Speed</span>
          </div>
          <p>Because no sub-exponential attack exists against ECDLP, ECC achieves top security with small keys:</p>
          <ul style="margin: 4px 0 0 16px; padding: 0;">
            <li><strong>256-bit ECC</strong> &asymp; <strong>3,072-bit RSA</strong></li>
            <li><strong>384-bit ECC</strong> &asymp; <strong>7,680-bit RSA</strong></li>
          </ul>
          <p>Vastly less CPU, bandwidth, and battery consumption on mobile and IoT chips (<strong>Q69</strong>)!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Ed25519 & Shor's Quantum Threat (Q67, Q68, Q70)</span>
      <ul>
        <li><strong>Point Multiplication (Q68):</strong> Computed using iterative Point Doubling and Point Addition (the double-and-add algorithm).</li>
        <li><strong>Ed25519 (Q67):</strong> A modern Edwards-curve Digital Signature Algorithm over Curve25519 (used in TLS 1.3, OpenSSH, Signal) that executes in strict <strong>constant time</strong>, preventing cache-timing attacks!</li>
        <li><strong>Shor's Quantum Threat (Q70):</strong> Formulated in 1994, <strong>Shor's Algorithm</strong> running on a large fault-tolerant quantum computer will break BOTH RSA (prime factorization) and ECC/DH (discrete logarithms) in polynomial time O((log n)<sup>3</sup>).</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q65–Q70):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>ECC Mathematical Foundation (Q65):</strong> Elliptic curve discrete logarithm problem (ECDLP).</li>
        <li><strong>ECC Key Equivalence (Q66):</strong> <strong>256-bit ECC &asymp; 3,072-bit RSA</strong> security strength.</li>
        <li><strong>Ed25519 (Q67):</strong> Constant-time, timing-immune signature algorithm over Curve25519.</li>
        <li><strong>Point Doubling & Addition (Q68):</strong> Core geometric operations calculating public points.</li>
        <li><strong>Mobile & IoT Suitability (Q69):</strong> Minimal memory, compute, and battery footprint.</li>
        <li><strong>Shor's Algorithm (Q70):</strong> Quantum algorithm threatening both RSA and ECC.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 7 (Q61–Q70)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on Diffie-Hellman DLP, Perfect Forward Secrecy, ECC Architecture & Ed25519.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(6)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q61–Q70) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 8 (Pages 15–16): Topic 5A: Hashing Algorithms: Core Properties & Classical Hashes
  {
    spreadId: 7,
    left: {
      pageNumber: 15,
      runningHead: "CH. 8 • HASH PROPERTIES & AVALANCHE",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 8 • Cryptographic Hashing Foundations</span>
      <h2>Core Hash Properties, Determinism & The Avalanche Effect</h2>
    </div>
    <p>A <strong>Cryptographic Hash Function</strong> takes an arbitrary-length input message and transforms it into a fixed-length deterministic bitstring called a <strong>Hash Digest</strong> (<strong>Q71</strong>). It is strictly a one-way function.</p>

    <div class="section-block">
      <span class="section-label">1. The 3 Fundamental Mathematical Hash Properties (Q73, Q74, Q75)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Pre-image Resistance (Q73)</span>
            <span class="statute-tag">One-Way Property</span>
          </div>
          <p>Given any hash digest <em>h</em>, it is computationally infeasible to invert or find the original message <em>x</em> such that <code>H(x) = h</code>. Prevents reversing password hashes.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Second Pre-image (Q74)</span>
            <span class="statute-tag">Weak Collision</span>
          </div>
          <p>Given a specific input message <em>x</em>, it is computationally infeasible to find a different message <em>y (y &ne; x)</em> such that <code>H(x) = H(y)</code>. Prevents forging alternative contracts.</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">Collision Resistance (Q75)</span>
            <span class="statute-tag">Strong Collision</span>
          </div>
          <p>It is computationally infeasible to find <strong>ANY two arbitrary distinct messages</strong> <em>x</em> and <em>y (x &ne; y)</em> such that <code>H(x) = H(y)</code>. Essential for digital certificates.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Avalanche Effect (Q72)</span>
      <p>A secure hash algorithm must exhibit the <strong>Avalanche Effect</strong>: changing just a single bit in the input message must cause a cascade of changes that alters roughly <strong>50% of the output digest bits</strong> in an unpredictable, pseudo-random manner!</p>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q71–Q75):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Hash Definition (Q71):</strong> Deterministic one-way function mapping arbitrary inputs to fixed-size digests.</li>
        <li><strong>Avalanche Effect (Q72):</strong> Flipping 1 bit in input alters roughly 50% of output bits.</li>
        <li><strong>Pre-image Resistance (Q73):</strong> Infeasible to find original input <em>x</em> from digest <em>h</em> (One-Way).</li>
        <li><strong>Second Pre-image Resistance (Q74):</strong> Infeasible to find alternative input <em>y</em> matching specific <em>x</em>.</li>
        <li><strong>Collision Resistance (Q75):</strong> Infeasible to find ANY two inputs colliding with identical digests.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 16,
      runningHead: "CH. 8 • BIRTHDAY PARADOX & BROKEN HASHES",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Collision Attacks & Forensic Hashing</span>
      <h2>The Birthday Paradox, MD5/SHA-1 Collisions & Forensic Evidence</h2>
    </div>
    <p>Understanding collision complexity and how cryptographic verification underpins digital forensic investigations:</p>

    <div class="section-block">
      <span class="section-label">1. The Birthday Paradox in Cryptography (Q76)</span>
      <div class="alert-box">
        <strong>The Square-Root Bound (Q76):</strong>
        <p>In a room of 23 people, there is a &gt;50% chance that two share a birthday. Similarly, searching for <em>any</em> colliding pair of messages requires only approximately <strong>2<sup>n/2</sup> operations</strong> (NOT 2<sup>n</sup>!).</p>
        <ul>
          <li>For MD5 (128 bits): Collisions require only 2<sup>64</sup> operations &rarr; <em>Trivially broken!</em></li>
          <li>For SHA-1 (160 bits): Collisions require only 2<sup>80</sup> operations &rarr; <em>Broken!</em></li>
          <li>For SHA-256 (256 bits): Collisions require 2<sup>128</sup> operations &rarr; <em>Physically secure!</em></li>
        </ul>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Broken Legacy Hashes & Forensic Chain of Custody (Q77, Q78, Q79, Q80)</span>
      <ul>
        <li><strong>MD5 (128 bits) (Q77):</strong> Standardized in RFC 1321. Completely broken by collision attacks that generate collisions in seconds; banned in modern security standards.</li>
        <li><strong>SHA-1 & SHAttered (Q78):</strong> In 2017, Google and CWI Amsterdam executed the <strong>SHAttered attack</strong>, producing two distinct PDF documents with the identical SHA-1 hash (160 bits).</li>
        <li><strong>Forensic Chain of Custody (Q79):</strong> Investigators calculate SHA-256 hashes of physical media immediately upon acquisition. Proving the verification hash at trial matches the acquisition hash proves evidence was never modified or tampered with.</li>
        <li><strong>Rainbow Tables & Salts (Q80):</strong> Precomputed chains of plaintext-hash pairs allow instantaneous cracking of unsalted hashes. Storing a cryptographically random, unique <strong>Salt</strong> with each password defeats Rainbow Tables completely!</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q76–Q80):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Birthday Attack (Q76):</strong> Reduces collision search complexity to <strong>2<sup>n/2</sup> operations</strong>.</li>
        <li><strong>MD5 Digest Length (Q77):</strong> Exactly <strong>128 bits</strong> (32 hex characters); cryptographically broken.</li>
        <li><strong>SHAttered Attack (Q78):</strong> Google produced the first practical collision against <strong>SHA-1</strong> in 2017.</li>
        <li><strong>Forensic Integrity (Q79):</strong> Hashing proves digital evidence was not altered (Chain of Custody).</li>
        <li><strong>Rainbow Tables (Q80):</strong> Precomputed hash lookup tables; defeated by adding unique <strong>Salts</strong>.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 8 (Q71–Q80)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on Hash Security Properties, Birthday Paradox, MD5/SHA-1 & Forensic Hashing.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(7)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q71–Q80) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 9 (Pages 17–18): Topic 5B: Hashing Algorithms: SHA-2, SHA-3 Sponge Construction & HMAC
  {
    spreadId: 8,
    left: {
      pageNumber: 17,
      runningHead: "CH. 9 • SHA-2, LENGTH EXTENSION & HMAC",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 9 • Modern Hashing & Integrity Standards</span>
      <h2>SHA-2 Family, Length Extension Attacks & HMAC (RFC 2104)</h2>
    </div>
    <p>Standardized in FIPS 180-4, the <strong>SHA-2</strong> family (SHA-224, SHA-256, SHA-384, SHA-512) serves as the backbone of modern enterprise security (<strong>Q81</strong>).</p>

    <div class="section-block">
      <span class="section-label">1. Merkle-Damgård Flaw: Length Extension Attacks (Q82)</span>
      <div class="alert-box">
        <strong>The Length Extension Exploit (Q82):</strong>
        <p>In Merkle-Damgård hashes (MD5, SHA-1, SHA-256), the final hash output is simply the internal state of the last block. If a developer naively computes a message authentication code as <code>MAC = Hash(Secret || Message)</code>, an attacker who knows the hash and secret length can append extra malicious data and compute the valid hash <strong>without knowing the secret key</strong>!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Solution: HMAC (RFC 2104) (Q83, Q84)</span>
      <p>Standardized by NIST and RFC 2104, <strong>HMAC (Hash-based Message Authentication Code)</strong> is mathematically immune to length extension attacks:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Nested Hashing (Q83)</span>
            <span class="statute-tag">Inner & Outer Pads</span>
          </div>
          <p>HMAC computes a two-pass nested hash:</p>
          <p style="text-align: center; font-family: monospace; font-size: 0.88rem; background: rgba(0,0,0,0.04); padding: 6px; border-radius: 4px;">
            Outer-Hash( (Key XOR opad) + Inner-Hash( (Key XOR ipad) + Message ) )
          </p>
          <p>Where <code>ipad = 0x36</code> and <code>opad = 0x5C</code> repeated across the block. Because the inner hash output is digested a second time, length extension is impossible!</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Dual Security Service (Q84)</span>
            <span class="statute-tag">Integrity & Authenticity</span>
          </div>
          <p>HMAC simultaneously guarantees <strong>Data Integrity</strong> (proves data was not altered) AND <strong>Message Origin Authentication</strong> (proves it was sent by someone possessing the shared secret key).</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q81–Q84):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>SHA-2 Family (Q81):</strong> Standardized in FIPS 180-4; includes SHA-256 and SHA-512.</li>
        <li><strong>Length Extension Attack (Q82):</strong> Plagues Merkle-Damgård hashes when computing <em>MAC = Hash(Secret || Message)</em>.</li>
        <li><strong>HMAC Construction (Q83):</strong> Nested hash with inner (<em>ipad 0x36</em>) and outer (<em>opad 0x5C</em>) padding keys.</li>
        <li><strong>HMAC Dual Goal (Q84):</strong> Provides both <strong>Data Integrity</strong> and <strong>Message Origin Authentication</strong>.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 18,
      runningHead: "CH. 9 • SHA-3 SPONGE & PASSWORD KDFS",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">SHA-3 & Secure Password Storage</span>
      <h2>SHA-3 Keccak Sponge Construction & Memory-Hard KDFs (Argon2)</h2>
    </div>
    <p>Exploring next-generation sponge hashing and how modern systems defend passwords against GPU cracking:</p>

    <div class="section-block">
      <span class="section-label">1. SHA-3 Sponge Construction (Keccak) (Q85, Q86, Q87)</span>
      <p>Standardized in FIPS 202, <strong>SHA-3</strong> completely abandons the Merkle-Damgård model for the <strong>Sponge Construction</strong> operating on a 1600-bit state permutation array:</p>
      <ul>
        <li><strong>Absorbing Phase (Q86):</strong> Input message blocks are iteratively XORed into the state array and permuted by function <em>f</em>.</li>
        <li><strong>Squeezing Phase (Q86):</strong> Output hash bits are read ("squeezed") from the state until the requested digest length is reached.</li>
        <li><strong>Immunity to Length Extension (Q87):</strong> The 1600-bit state contains hidden capacity bits that are never revealed in the output digest, making length extension attacks mathematically impossible!</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. Secure Password Storage: Salting, Peppering & Argon2 (Q88, Q89, Q90)</span>
      <ul>
        <li><strong>Why Fast Hashes Fail (Q88):</strong> Modern GPU clusters compute tens of billions of SHA-256 hashes per second. Fast hashes enable rapid offline brute-force cracking.</li>
        <li><strong>Argon2id (Q89):</strong> Winner of the Password Hashing Competition (PHC). A <strong>memory-hard Key Derivation Function (KDF)</strong> that fills large amounts of RAM, defeating GPU and ASIC parallel cracking hardware.</li>
        <li><strong>Salt vs. Pepper (Q90):</strong>
          <ul>
            <li><strong>Salt:</strong> A unique, random string generated per user and stored openly in the database alongside the hash; defeats precomputed Rainbow Tables.</li>
            <li><strong>Pepper:</strong> A secret key stored outside the database (e.g. in a Hardware Security Module or secure key vault); prevents offline cracking even if the database is leaked!</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q85–Q90):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>SHA-3 Sponge (Q85):</strong> Standardizes the Keccak Sponge Construction over a 1600-bit permutation state.</li>
        <li><strong>Sponge Phases (Q86):</strong> <strong>Absorbing Phase</strong> (absorbing input) and <strong>Squeezing Phase</strong> (extracting digest).</li>
        <li><strong>SHA-3 State Secrecy (Q87):</strong> Hidden capacity bits make SHA-3 naturally immune to length extension.</li>
        <li><strong>Slow Password KDFs (Q88):</strong> Passwords require slow, memory-hard functions, not fast SHA-256.</li>
        <li><strong>Argon2id (Q89):</strong> Memory-hard KDF recommended for modern password storage.</li>
        <li><strong>Salt vs Pepper (Q90):</strong> Salt is unique per user in DB; Pepper is a secret key stored outside DB.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 9 (Q81–Q90)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on Length Extension, HMAC (RFC 2104), SHA-3 Sponge Construction & Argon2 Passwords.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(8)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q81–Q90) &rarr;
      </button>
    </div>`
    }
  },

  // SPREAD 10 (Pages 19–20): Topic 6: Cryptanalysis: Attack Models, Techniques & Cipher Breakers
  {
    spreadId: 9,
    left: {
      pageNumber: 19,
      runningHead: "CH. 10 • CRYPTANALYSIS ATTACK MODELS",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 10 • Cryptanalytic Theory & Attacks</span>
      <h2>Cryptanalysis Fundamentals & The 4 Classic Attack Models</h2>
    </div>
    <p><strong>Cryptanalysis</strong> is the science and art of deciphering ciphertext or breaking cryptographic security without having prior access to the secret key (<strong>Q91</strong>). Cryptanalysts evaluate ciphers under four standard threat models:</p>

    <div class="section-block">
      <span class="section-label">1. The 4 Classic Cryptanalytic Attack Models (Q92, Q93, Q94, Q95)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Ciphertext-Only (COA) (Q92)</span>
            <span class="statute-tag">Most Difficult</span>
          </div>
          <p>The cryptanalyst possesses <em>strictly captured ciphertext strings</em>, with zero knowledge of the underlying plaintext. Relies on statistical language flaws or entropy analysis.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Known-Plaintext (KPA) (Q93)</span>
            <span class="statute-tag">Matching Pairs</span>
          </div>
          <p>The attacker possesses both the ciphertext and its corresponding original plaintext for one or more messages (e.g. standard file headers, known login prompts) to deduce the secret key.</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">Chosen-Plaintext (CPA) (Q94)</span>
            <span class="statute-tag">Encryption Oracle</span>
          </div>
          <p>The attacker can feed arbitrary plaintexts of their choice into an encryption engine and inspect the resulting ciphertexts (used in Differential Cryptanalysis).</p>
        </div>

        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">Chosen-Ciphertext (CCA) (Q95)</span>
            <span class="statute-tag">Decryption Oracle</span>
          </div>
          <p>The attacker submits chosen ciphertexts to a decryption oracle and observes the resulting plaintexts or error messages (exploited in Padding Oracle attacks).</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q91–Q95):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Cryptanalysis (Q91):</strong> Breaking ciphers or recovering plaintexts without knowing the secret key.</li>
        <li><strong>Ciphertext-Only (COA) (Q92):</strong> Attacker has access strictly to intercepted ciphertext.</li>
        <li><strong>Known-Plaintext (KPA) (Q93):</strong> Attacker has matching pairs of plaintext and ciphertext.</li>
        <li><strong>Chosen-Plaintext (CPA) (Q94):</strong> Attacker chooses plaintexts and inspects generated ciphertexts.</li>
        <li><strong>Chosen-Ciphertext (CCA) (Q95):</strong> Attacker submits ciphertexts to a decryption oracle and observes responses.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 20,
      runningHead: "CH. 10 • FREQUENCY ANALYSIS & SIDE CHANNELS",
      content: `<div class="legal-dispatch-header">
      <span class="badge-primary">Cipher Breakers & Physical Leakage</span>
      <h2>Frequency Analysis, The Kasiski Test & Side-Channel Attacks</h2>
    </div>
    <p>Exploring practical mathematical and physical methods used to break cryptographic systems:</p>

    <div class="section-block">
      <span class="section-label">1. Statistical & Brute-Force Techniques (Q96, Q97, Q98)</span>
      <ul>
        <li><strong>Frequency Analysis (Q96):</strong> Breaks simple monoalphabetic substitution ciphers (Caesar) by exploiting non-uniform letter distributions (in English, 'E' represents ~12.7%, followed by 'T', 'A', 'O', 'I', 'N').</li>
        <li><strong>The Kasiski Examination (Q97):</strong> Developed by Friedrich Kasiski in 1863 to break repeating-key polyalphabetic ciphers (Vigenère). Measuring the <strong>Greatest Common Divisor (GCD) of distances</strong> between repeated ciphertext sequences reveals the exact <strong>keyword length</strong>!</li>
        <li><strong>Exhaustive Key Search (Brute Force) (Q98):</strong> Systematically testing every possible key in the 2<sup>k</sup> key space until valid plaintext appears. For 56-bit DES, 2<sup>56</sup> keys were cracked in 22 hours in 1999; for AES-128, 2<sup>128</sup> keys require trillions of years.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. Side-Channel Attacks & Rubber-Hose Cryptanalysis (Q99, Q100)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Side-Channel Attacks (Q99)</span>
            <span class="statute-tag">Physical Emissions</span>
          </div>
          <p>Does NOT attack the underlying math! Instead, measures physical leakage from the hardware chip: execution timing variations, power consumption changes (<strong>Differential Power Analysis - DPA</strong>), acoustic emissions, or electromagnetic radiation.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Rubber-Hose Cryptanalysis (Q100)</span>
            <span class="statute-tag">Human Coercion</span>
          </div>
          <p>Extracting cryptographic keys through physical coercion, bribery, extortion, or legal interrogation of the key holder, proving that human operators are often the easiest point of attack!</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q96–Q100):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Frequency Analysis (Q96):</strong> Exploits natural language letter frequency spikes (e.g. 'E', 'T', 'A').</li>
        <li><strong>Kasiski Test (Q97):</strong> Calculates GCD of distances between repeated ciphertext strings to find key length.</li>
        <li><strong>Brute Force Attack (Q98):</strong> Exhaustively tests every possible key in the key space.</li>
        <li><strong>Side-Channel Attack (Q99):</strong> Extracts keys by measuring physical side effects (power, timing, RF radiation).</li>
        <li><strong>Rubber-Hose Cryptanalysis (Q100):</strong> Obtaining keys via physical coercion, extortion, or interrogation.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 10 (Q91–Q100)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 targeted exam questions on Cryptanalytic Attack Models (COA/KPA/CPA/CCA), Kasiski & Side-Channel Attacks.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(9)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q91–Q100) &rarr;
      </button>
    </div>`
    }
  }
];
