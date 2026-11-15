// Part 2: Topics 6–10 (Spreads 10–19, Pages 21–40)
// 4 Pages per Topic: Total 10 Spreads = 20 Pages

module.exports = [
  // =========================================================================
  // TOPIC 6: ASYMMETRIC ALGORITHMS: RSA ARCHITECTURE & FORMULAS (Pages 21–24, Spreads 10 & 11, Q51–Q60)
  // =========================================================================
  // Spread 10: Part 1 - Asymmetric Foundations & RSA Math (Pages 21–22)
  {
    spreadId: 10,
    left: {
      pageNumber: 21,
      runningHead: 'CH. 6 • ASYMMETRIC CRYPTOGRAPHY FOUNDATIONS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 6 • Topic 6: Asymmetric Algorithms & RSA (Part 1)</span>
      <h2>Public Key Cryptography Foundations & Key Pairs</h2>
    </div>

    <div class="intro-abstract">
      <p>Symmetric cryptography suffers from a fundamental logistical bottleneck: <em>The Key Distribution Problem</em>. How can two parties who have never met securely agree on a shared secret key across an insecure, intercepted internet? <strong>Asymmetric Cryptography</strong> (Public-Key Cryptography) solved this dilemma by introducing mathematically linked, distinct <strong>Key Pairs</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Symmetric vs. Asymmetric Cryptography: The Core Comparison (Q51)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Cryptographic Metric</th>
            <th>Symmetric Key Cryptography</th>
            <th>Asymmetric (Public Key) Cryptography (Q51)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Keys Required</strong></td>
            <td>A single shared secret key ($K$) used for both encryption and decryption.</td>
            <td>A mathematically linked <strong>Key Pair</strong>: One <strong>Public Key</strong> (published openly) and one <strong>Private Key</strong> (kept strictly secret).</td>
          </tr>
          <tr>
            <td><strong>Key Management Complexity</strong></td>
            <td>Explodes quadratically: For $N$ participants, $\frac{N(N-1)}{2}$ shared keys are required! Infeasible for global networks.</td>
            <td>Scales linearly: Each user requires only 1 key pair ($2N$ keys total for $N$ users).</td>
          </tr>
          <tr>
            <td><strong>Computational Speed</strong></td>
            <td>Extremely fast; hardware-accelerated (AES instructions on modern CPUs encrypt gigabytes per second).</td>
            <td>Computationally heavy; 100 to 1,000 times slower due to massive multi-precision modular arithmetic (exponentiation).</td>
          </tr>
          <tr>
            <td><strong>Core Operational Roles</strong></td>
            <td>Bulk data encryption (disk files, streaming media, database records).</td>
            <td>Key exchange (Diffie-Hellman), digital signatures, and establishing hybrid TLS sessions.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. Trapdoor One-Way Functions (Q52)</span>
      <p>Asymmetric algorithms rely on <strong>Trapdoor One-Way Functions</strong>: A mathematical operation that is easy to compute in the forward direction, but computationally infeasible to invert <em>unless you possess a secret piece of auxiliary information called the trapdoor</em>.</p>
    </div>
      `
    },
    right: {
      pageNumber: 22,
      runningHead: 'CH. 6 • RSA MATHEMATICAL FOUNDATIONS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 6 • Topic 6: Asymmetric Algorithms & RSA (Part 2)</span>
      <h2>The RSA Mathematical Foundation: Prime Factorization</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The RSA Cryptosystem Origins (Q53)</span>
      <p>Invented in 1977 at MIT by Ron <strong>R</strong>ivest, Adi <strong>S</strong>hamir, and Leonard <strong>A</strong>dleman, <strong>RSA</strong> was the first practical public-key cryptosystem capable of both confidential encryption and digital signatures. Its security relies entirely on the computational hardness of the <strong>Prime Factorization Problem</strong>.</p>
      
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">The Factorization Trapdoor (Q53)</span>
          <span class="statute-tag">Mathematical Hardness</span>
        </div>
        <p>• <strong>Forward Direction (Easy):</strong> Multiplying two massive 1024-bit prime numbers $p$ and $q$ takes a fraction of a millisecond on any computer: $n = p \times q$.<br>
        • <strong>Reverse Direction (Infeasible):</strong> Given only the 2048-bit modulus $n$, finding the original prime factors $p$ and $q$ requires trillions of computing years using the fastest known General Number Field Sieve (GNFS) algorithms!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Step-by-Step RSA Key Generation (Q54, Q55)</span>
      <p>Generating an RSA key pair follows four sequential mathematical steps:</p>
      <ul class="forensic-list">
        <li><strong>Step 1: Choose Two Distinct Primes:</strong> Select two large independent prime numbers, $p$ and $q$.</li>
        <li><strong>Step 2: Calculate Modulus $n$:</strong> Compute $n = p \times q$. The bit-length of $n$ defines the key length (e.g., 2048 bits).</li>
        <li><strong>Step 3: Calculate Euler's Totient $\phi(n)$ (Q54):</strong> Compute the number of integers coprime to $n$:<br>
        <span style="font-weight: 700; color: var(--navy-primary); display: block; margin: 4px 0;">
          Euler's Totient: &phi;(n) = (p - 1) &times; (q - 1)
        </span>
        Knowledge of $\phi(n)$ is the master trapdoor secret!</li>
        <li><strong>Step 4: Select Public Exponent $e$ (Q55):</strong> Choose an integer $e$ coprime to $\phi(n)$ ($1 < e < \phi(n)$ and $\gcd(e, \phi(n)) = 1$). In global standards (RFC 8017), <strong>$e = 65537$ ($2^{16} + 1$)</strong> is chosen because its binary representation (<code>10000000000000001</code>) enables ultra-fast modular exponentiation with only 17 squaring steps and 1 multiplication.</li>
      </ul>
    </div>
      `
    }
  },

  // Spread 11: Part 2 - RSA Formulas, OAEP Padding & Exam Traps (Pages 23–24)
  {
    spreadId: 11,
    left: {
      pageNumber: 23,
      runningHead: 'CH. 6 • RSA ENCRYPTION, DECRYPTION & PADDING',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 6 • Topic 6: Asymmetric Algorithms & RSA (Part 3)</span>
      <h2>RSA Formulas, Key Derivation & OAEP Padding</h2>
    </div>

    <div class="section-block">
      <span class="section-label">5. Deriving the Private Exponent $d$ (Q56)</span>
      <p>The private decryption exponent $d$ is the modular multiplicative inverse of $e$ modulo $\phi(n)$:</p>
      <div class="statute-card card-purple">
        <p style="text-align: center; font-weight: 700; font-size: 0.95rem;">
          $d \equiv e^{-1} \pmod{\phi(n)} \iff (d \times e) \pmod{\phi(n)} = 1$
        </p>
        <p>Computed efficiently using the <strong>Extended Euclidean Algorithm</strong>. Only someone who knows $p$ and $q$ can calculate $\phi(n)$ to derive $d$. Once $d$ is generated, $p$, $q$, and $\phi(n)$ are securely destroyed!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">6. RSA Encryption and Decryption in Plain English (Q57)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Operation</th>
            <th>Formula</th>
            <th>Key Used</th>
            <th>Plain English Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Encryption (Q57)</strong></td>
            <td><code>Ciphertext = (Message<sup>e</sup>) mod n</code></td>
            <td>Recipient's <strong>Public Key</strong> ($e, n$)</td>
            <td>Take the numerical message $M$, raise it to the public exponent $e$, and take the remainder after dividing by modulus $n$.</td>
          </tr>
          <tr>
            <td><strong>Decryption (Q57)</strong></td>
            <td><code>Message = (Ciphertext<sup>d</sup>) mod n</code></td>
            <td>Recipient's <strong>Private Key</strong> ($d, n$)</td>
            <td>Take the ciphertext $C$, raise it to the secret private exponent $d$, and take the remainder after dividing by modulus $n$. By Euler's Theorem, this mathematically restores the exact original message $M$!</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">7. Why Textbook RSA Fails: OAEP Padding (Q58)</span>
      <p>Raw ("textbook") RSA is fatally deterministic and malleable: $E(M_1) \times E(M_2) \pmod n = E(M_1 \times M_2 \pmod n)$.</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Optimal Asymmetric Encryption Padding (OAEP) (Q58)</span>
          <span class="statute-tag">PKCS#1 v2.1 Standard</span>
        </div>
        <p>Before modular exponentiation, the message is passed through a two-round Feistel-like randomized network using cryptographic hash functions. OAEP injects true randomness, preventing chosen-ciphertext attacks (Bleichenbacher padding oracle) and ensuring identical plaintexts produce completely different ciphertexts.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 24,
      runningHead: 'CH. 6 • HYBRID ENCRYPTION & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 6 • Topic 6: Asymmetric Algorithms & RSA (Part 4)</span>
      <h2>Hybrid Cryptography Architecture & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">8. Hybrid Cryptography: Combining the Best of Both Worlds (Q59)</span>
      <p>Because asymmetric RSA is thousands of times slower than symmetric AES, real-world protocols (TLS/HTTPS, SSH, PGP/GPG) never encrypt large files directly with RSA. Instead, they use <strong>Hybrid Cryptography</strong>:</p>
      <div class="statute-card card-teal">
        <p>1. <strong>Asymmetric Phase:</strong> The sender generates a random, single-use 256-bit symmetric session key ($K_{session}$). The sender encrypts this small 32-byte session key using the recipient's RSA public key.<br>
        2. <strong>Symmetric Phase:</strong> The sender encrypts the massive multi-gigabyte data payload using ultra-fast AES-256-GCM powered by $K_{session}$.<br>
        3. <strong>Decryption Phase:</strong> The recipient uses their RSA private key to recover $K_{session}$, then decrypts the bulk payload with AES.</p>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 6 (Q51–Q60):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q51:</strong> Asymmetric cryptography uses mathematically linked public and private key pairs.</li>
        <li><strong>Q52:</strong> Asymmetric security is grounded in Trapdoor One-Way Functions.</li>
        <li><strong>Q53:</strong> RSA security is based on the computational difficulty of factoring the product of two large prime numbers.</li>
        <li><strong>Q54:</strong> Euler's Totient for modulus $n = pq$ is strictly $\phi(n) = (p - 1)(q - 1)$.</li>
        <li><strong>Q55:</strong> The standardized public exponent $e$ in modern RSA is 65537 ($2^{16} + 1$).</li>
        <li><strong>Q56:</strong> Private exponent $d$ is derived as the modular multiplicative inverse of $e$ modulo $\phi(n)$.</li>
        <li><strong>Q57:</strong> RSA Encryption: $C = M^e \pmod n$; RSA Decryption: $M = C^d \pmod n$.</li>
        <li><strong>Q58:</strong> OAEP padding is required to protect RSA against chosen-ciphertext and padding oracle attacks.</li>
        <li><strong>Q59:</strong> Hybrid encryption combines public-key key exchange with high-speed symmetric payload encryption.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 6</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q51–Q60) on Asymmetric Crypto, RSA Math, Euler's Totient & OAEP.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="5" onclick="window.openMCQForSpread(5)">
          Start Quiz (Q51–Q60) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 7: ASYMMETRIC ALGORITHMS: DIFFIE-HELLMAN KEY EXCHANGE & ECC (Pages 25–28, Spreads 12 & 13, Q61–Q70)
  // =========================================================================
  // Spread 12: Part 1 - Diffie-Hellman Key Exchange & PFS (Pages 25–26)
  {
    spreadId: 12,
    left: {
      pageNumber: 25,
      runningHead: 'CH. 7 • DIFFIE-HELLMAN KEY EXCHANGE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 7 • Topic 7: Diffie-Hellman & ECC (Part 1)</span>
      <h2>The Diffie-Hellman Key Exchange Protocol</h2>
    </div>

    <div class="intro-abstract">
      <p>Published in 1976 by Whitfield Diffie and Martin Hellman, the <strong>Diffie-Hellman (DH) Key Exchange</strong> was the revolutionary breakthrough that ignited modern public-key cryptography. It allows two parties (Alice and Bob) with zero prior shared secrets to establish a shared symmetric encryption key across a completely untrusted, monitored network.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Intuitive Color-Mixing Analogy (Q61)</span>
      <p>Diffie-Hellman is best understood using paint mixing:</p>
      <div class="statute-card card-teal">
        <p>1. <strong>Public Agreement:</strong> Alice and Bob publicly agree on a common base color: <strong>Yellow</strong>. The eavesdropper (Eve) also sees yellow.<br>
        2. <strong>Private Secrets:</strong> Alice privately picks a secret color (<strong>Red</strong>); Bob privately picks a secret color (<strong>Blue-Green</strong>). Eve does not know these.<br>
        3. <strong>Public Exchange:</strong> Alice mixes Yellow + Red = <strong>Orange</strong> and sends it to Bob. Bob mixes Yellow + Blue-Green = <strong>Aqua</strong> and sends it to Alice.<br>
        4. <strong>Shared Secret Derivation:</strong> Alice takes Bob's Aqua and adds her secret Red = <strong>Brown</strong>. Bob takes Alice's Orange and adds his secret Blue-Green = <strong>Brown</strong>!<br>
        Both arrive at the identical secret color (Brown), while Eve cannot separate the colors to recover the secret!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Mathematical Foundation: Discrete Logarithm Problem (DLP) (Q62)</span>
      <p>DH operates over a finite cyclic group modulo a large prime $p$ with generator $g$:</p>
      <ul class="forensic-list">
        <li>Alice picks private random integer $a$; computes public $A = g^a \pmod p$.</li>
        <li>Bob picks private random integer $b$; computes public $B = g^b \pmod p$.</li>
        <li>They exchange public values $A$ and $B$.</li>
        <li>Alice computes shared secret: $K = B^a \pmod p = (g^b)^a = g^{ab} \pmod p$.</li>
        <li>Bob computes shared secret: $K = A^b \pmod p = (g^a)^b = g^{ab} \pmod p$.</li>
      </ul>
      <p>An eavesdropper seeing $g, p, A, B$ must solve the <strong>Discrete Logarithm Problem (DLP)</strong>: finding $a$ given $g^a \pmod p$, which is computationally infeasible for large primes (2048+ bits).</p>
    </div>
      `
    },
    right: {
      pageNumber: 26,
      runningHead: 'CH. 7 • PERFECT FORWARD SECRECY & MITM RISKS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 7 • Topic 7: Diffie-Hellman & ECC (Part 2)</span>
      <h2>Perfect Forward Secrecy (PFS) & Man-in-the-Middle Attacks</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. Perfect Forward Secrecy (PFS) (Q63)</span>
      <p>In legacy TLS 1.2, servers used static RSA keys to encrypt session keys. If an attacker recorded years of encrypted internet traffic and eventually compromised or subpoenaed the server's RSA private key 5 years later, they could retroactively decrypt <em>all past recorded sessions</em>!</p>
      
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Ephemeral Diffie-Hellman (DHE / ECDHE) (Q63)</span>
          <span class="statute-tag">Modern Standard</span>
        </div>
        <p><strong>Perfect Forward Secrecy (PFS)</strong> guarantees that compromise of long-term server private keys does NOT compromise past session keys!</p>
        <p>Achieved using <strong>Ephemeral Diffie-Hellman</strong>: A unique, disposable DH key pair is generated freshly for each individual session and discarded immediately after session key derivation. Even if the server's master key is compromised tomorrow, past traffic remains permanently undecryptable. TLS 1.3 mandates ephemeral key exchange exclusively!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. The Unauthenticated DH Vulnerability: Man-in-the-Middle (MitM) (Q64)</span>
      <p>Classic Diffie-Hellman provides confidentiality, but <strong>NO AUTHENTICATION</strong>. An active attacker (Mallory) sitting on the network intercepts Alice's public value $A$ and Bob's public value $B$. Mallory performs two independent DH exchanges: one with Alice and one with Bob.</p>
      <p>Mallory decrypts, inspects, and re-encrypts all traffic invisibly! To defeat MitM attacks, DH public keys must always be cryptographically signed using Digital Certificates (PKI).</p>
    </div>
      `
    }
  },

  // Spread 13: Part 2 - Elliptic Curve Cryptography (ECC) & Exam Traps (Pages 27–28)
  {
    spreadId: 13,
    left: {
      pageNumber: 27,
      runningHead: 'CH. 7 • ELLIPTIC CURVE CRYPTOGRAPHY (ECC)',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 7 • Topic 7: Diffie-Hellman & ECC (Part 3)</span>
      <h2>Elliptic Curve Cryptography (ECC) Architecture</h2>
    </div>

    <div class="section-block">
      <span class="section-label">5. Why ECC Was Invented: The RSA Key Bloat Problem (Q65, Q66)</span>
      <p>As computational power grew, RSA key lengths had to expand exponentially to resist sub-exponential sieve algorithms. Today, 2048-bit RSA is the bare minimum, and 3072-bit or 4096-bit keys are required for long-term security. These gigantic keys consume immense CPU power, memory, and battery life on mobile devices and IoT sensors.</p>
      <p>Introduced by Neal Koblitz and Victor Miller in 1985, <strong>Elliptic Curve Cryptography (ECC)</strong> delivers equivalent cryptographic security with radically smaller key sizes!</p>
    </div>

    <div class="section-block">
      <span class="section-label">6. Mathematical Foundation: Weierstrass Curves & Point Addition (Q65)</span>
      <p>ECC operates on cubic equations over finite fields GF($p$):</p>
      <div class="statute-card card-teal">
        <p style="text-align: center; font-weight: 700; font-size: 0.95rem;">
          $y^2 = x^3 + ax + b \pmod p$ &nbsp;&nbsp;&nbsp; (where $4a^3 + 27b^2 \neq 0$)
        </p>
        <p>• <strong>Geometric Group Law:</strong> A straight line intersecting two points on the curve intersects a third point; reflecting that point across the x-axis defines <em>Point Addition</em> ($P + Q = R$).<br>
        • <strong>Scalar Multiplication (One-Way):</strong> Adding a base generator point $G$ to itself $d$ times yields public point $Q = d \times G$.<br>
        • <strong>Elliptic Curve Discrete Logarithm Problem (ECDLP) (Q65):</strong> Given $G$ and public point $Q$, finding the private integer $d$ is exponentially hard! No sub-exponential index-calculus algorithms exist for general elliptic curves.</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 28,
      runningHead: 'CH. 7 • ECC COMPARISON, CURVES & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 7 • Topic 7: Diffie-Hellman & ECC (Part 4)</span>
      <h2>ECC Key Comparison, Modern Curves & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">7. NIST Security Equivalence Comparison (Q66)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Security Strength (Bits)</th>
            <th>Legacy RSA Key Length</th>
            <th>Modern ECC Key Length (Q66)</th>
            <th>Key Size Savings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>80 bits (Obsolete)</td>
            <td>1024 bits</td>
            <td>160 bits</td>
            <td>6x smaller</td>
          </tr>
          <tr>
            <td><strong>128 bits (Standard)</strong></td>
            <td><strong>3072 bits</strong></td>
            <td><strong>256 bits (Q66)</strong></td>
            <td><strong>12x smaller!</strong></td>
          </tr>
          <tr>
            <td>192 bits (Top Secret)</td>
            <td>7680 bits</td>
            <td>384 bits</td>
            <td>20x smaller!</td>
          </tr>
          <tr>
            <td>256 bits (Maximum)</td>
            <td>15360 bits</td>
            <td>521 bits</td>
            <td>30x smaller!</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">8. Modern Curves & Protocols: ECDH, ECDSA & Ed25519 (Q67, Q68)</span>
      <ul class="forensic-list">
        <li><strong>ECDH:</strong> Elliptic Curve Diffie-Hellman for high-speed ephemeral key exchange.</li>
        <li><strong>ECDSA (FIPS 186):</strong> Elliptic Curve Digital Signature Algorithm used in Bitcoin and TLS certificates. Requires a cryptographically random nonce $k$; nonce reuse leaks the private key!</li>
        <li><strong>Curve25519 / Ed25519 (Q68):</strong> Designed by Daniel J. Bernstein (DJB). A Montgomery/Edwards curve immune to timing attacks, cache attacks, and faulty random number generators. Standardized in SSH and Signal.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 7 (Q61–Q70):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q61:</strong> Diffie-Hellman allows two parties to establish a shared secret over an untrusted channel.</li>
        <li><strong>Q62:</strong> Classic Diffie-Hellman security is based on the Discrete Logarithm Problem (DLP).</li>
        <li><strong>Q63:</strong> Perfect Forward Secrecy (PFS) ensures past sessions cannot be decrypted if the master key is compromised later.</li>
        <li><strong>Q64:</strong> Classic DH is vulnerable to Man-in-the-Middle attacks without digital certificate authentication.</li>
        <li><strong>Q65:</strong> ECC security relies on the Elliptic Curve Discrete Logarithm Problem (ECDLP).</li>
        <li><strong>Q66:</strong> A 256-bit ECC key provides equivalent security strength to a 3072-bit RSA key!</li>
        <li><strong>Q68:</strong> Ed25519 is a high-speed Edwards curve signature scheme immune to cache-timing attacks.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 7</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q61–Q70) on Diffie-Hellman, PFS, Elliptic Curves & ECDSA.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="6" onclick="window.openMCQForSpread(6)">
          Start Quiz (Q61–Q70) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 8: HASHING ALGORITHMS: CORE PROPERTIES & LEGACY HASHES (MD5, SHA-1) (Pages 29–32, Spreads 14 & 15, Q71–Q80)
  // =========================================================================
  // Spread 14: Part 1 - Hash Properties, Avalanche & One-Wayness (Pages 29–30)
  {
    spreadId: 14,
    left: {
      pageNumber: 29,
      runningHead: 'CH. 8 • HASHING FOUNDATIONS & PROPERTIES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 8 • Topic 8: Hashing Foundations & MD5/SHA-1 (Part 1)</span>
      <h2>Cryptographic Hash Foundations & Core Axioms</h2>
    </div>

    <div class="intro-abstract">
      <p>A <strong>Cryptographic Hash Function</strong> is a mathematical algorithm that compresses an arbitrary, variable-length block of digital data into a unique, fixed-size string of bits called a <strong>Hash Digest</strong> (or digital fingerprint). Unlike encryption, hashing is strictly a <strong>one-way function</strong>: there is no key, and the original input can never be mathematically "decrypted" from the digest.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The 4 Essential Mathematical Properties (Q71, Q72)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Formal Mathematical Requirement</th>
            <th>Operational Significance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Deterministic (Q71)</strong></td>
            <td>$H(M) = H(M)$ every single time.</td>
            <td>The exact same input data will ALWAYS produce the exact same cryptographic hash digest.</td>
          </tr>
          <tr>
            <td><strong>2. Fixed Output Length</strong></td>
            <td>Output size is strictly invariant regardless of input size.</td>
            <td>Hashing a single character ('a') or a 2-terabyte forensic disk image produces exactly 256 bits in SHA-256 (64 hex characters).</td>
          </tr>
          <tr>
            <td><strong>3. High Efficiency</strong></td>
            <td>Computing $H(M)$ requires negligible time and memory.</td>
            <td>Enables real-time verification of multi-gigabyte network transfers and forensic bit-stream disk images.</td>
          </tr>
          <tr>
            <td><strong>4. Avalanche Effect (Q72)</strong></td>
            <td>Flipping a single input bit changes $\approx 50\%$ of the output digest bits.</td>
            <td>Strictly non-linear; prevents attackers from deducing how input modifications affect the output digest.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Avalanche Effect in Action (Q72)</span>
      <p>Notice how changing a single character completely randomizes the entire SHA-256 output:</p>
      <div class="statute-card card-teal" style="font-family: monospace; font-size: 0.8rem;">
        SHA-256("The quick brown fox jumps over the lazy dog") =<br>
        <strong>d7a8fbb307d7809469ca9abb6b60a4f5db91f1633dc0d73105ea18821a152565</strong><br><br>
        SHA-256("The quick brown fox jumps over the lazy do<strong>e</strong>") =<br>
        <strong>2b449b9d3009d17947117466735a23ac36f3d5656ab4814f9bbc6ac0abc10e42</strong>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 30,
      runningHead: 'CH. 8 • THE 3 SECURITY PILLARS OF HASHING',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 8 • Topic 8: Hashing Foundations & MD5/SHA-1 (Part 2)</span>
      <h2>Pre-image, Second Pre-image & Collision Resistance</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Three Pillars of Hash Function Security (Q73, Q74, Q75)</span>
      <p>For a hash function to be cryptographically secure, it must satisfy three distinct resistance criteria:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Pre-image Resistance (Q73)</span>
            <span class="statute-tag">One-Wayness</span>
          </div>
          <p><strong>Condition:</strong> Given only a digest $h$, it is computationally infeasible to find ANY original message $m$ such that $H(m) = h$.<br>
          <strong>Brute-Force Complexity:</strong> $\mathcal{O}(2^n)$ operations for an $n$-bit hash.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. Second Pre-image Resistance (Q74)</span>
            <span class="statute-tag">Weak Collision Resistance</span>
          </div>
          <p><strong>Condition:</strong> Given a specific message $m_1$, it is computationally infeasible to find a DIFFERENT message $m_2$ ($m_1 \neq m_2$) such that $H(m_1) = H(m_2)$.<br>
          <strong>Brute-Force Complexity:</strong> $\mathcal{O}(2^n)$ operations.</p>
        </div>
      </div>

      <div class="statute-card card-amber" style="margin-top: 10px;">
        <div class="statute-header">
          <span class="statute-section">3. Collision Resistance (Q75)</span>
          <span class="statute-tag">Strong Collision Resistance</span>
        </div>
        <p><strong>Condition:</strong> It is computationally infeasible to find ANY TWO arbitrary, distinct messages $m_1$ and $m_2$ ($m_1 \neq m_2$) such that $H(m_1) = H(m_2)$.<br>
        <strong>Brute-Force Complexity:</strong> Due to the <strong>Birthday Paradox</strong>, finding an arbitrary collision requires ONLY $\mathbf{\mathcal{O}(2^{n/2})}$ operations!</p>
      </div>
    </div>
      `
    }
  },

  // Spread 15: Part 2 - Birthday Paradox, Broken Hashes & Forensics (Pages 31–32)
  {
    spreadId: 15,
    left: {
      pageNumber: 31,
      runningHead: 'CH. 8 • THE BIRTHDAY PARADOX & BROKEN HASHES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 8 • Topic 8: Hashing Foundations & MD5/SHA-1 (Part 3)</span>
      <h2>The Birthday Attack, Broken MD5 & Broken SHA-1</h2>
    </div>

    <div class="section-block">
      <span class="section-label">4. The Birthday Paradox & Birthday Attacks (Q76)</span>
      <p>Why is collision resistance ($\mathcal{O}(2^{n/2})$) so much easier to break than pre-image resistance ($\mathcal{O}(2^n)$)?</p>
      <div class="statute-card card-teal">
        <p>In a room of just <strong>23 people</strong>, there is a greater than <strong>50% probability</strong> that two people share the exact same birthday! This is because we are comparing all possible pairs of people ($\frac{23 \times 22}{2} = 253$ pairs), not matching against one specific birthday.</p>
        <p>In cryptography, an attacker does not care <em>which</em> two messages collide; any collision breaks digital signature non-repudiation. For an $n$-bit hash, a collision occurs with 50% probability after generating only $\sqrt{2^n} = 2^{n/2}$ digests!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">5. Broken Legacy Hash Algorithms: MD5 & SHA-1 (Q77, Q78)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Algorithm</th>
            <th>Digest Length</th>
            <th>Historical Context & Breach Details (Q77, Q78)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>MD5 (Message Digest 5) (Q77)</strong></td>
            <td><strong>128 bits</strong><br>(16 bytes / 32 hex chars)</td>
            <td>Designed by Ron Rivest in 1991. Completely shattered by Xiaoyun Wang in 2004. Attackers generate practical collisions in milliseconds! Weaponized in the wild by the <strong>Flame malware (2012)</strong> to forge Microsoft Windows Update code-signing certificates. <em>Strictly banned for security!</em></td>
          </tr>
          <tr>
            <td><strong>SHA-1 (Secure Hash Algorithm 1) (Q78)</strong></td>
            <td><strong>160 bits</strong><br>(20 bytes / 40 hex chars)</td>
            <td>Designed by the NSA in 1995. Shattered in 2017 by Google and CWI Amsterdam in the <strong>SHAttered attack</strong>: created two distinct PDF documents with identical SHA-1 hashes in $2^{63}$ computations. <em>Deprecated globally across all web browsers and operating systems.</em></td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    },
    right: {
      pageNumber: 32,
      runningHead: 'CH. 8 • FORENSIC INTEGRITY & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 8 • Topic 8: Hashing Foundations & MD5/SHA-1 (Part 4)</span>
      <h2>Forensic Chain of Custody & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">6. Digital Forensic Integrity & Chain of Custody (Q79, Q80)</span>
      <p>Under international forensic standards (ISO/IEC 27037) and Section 65B of the Indian Evidence Act (BSA), digital evidence is only admissible if investigators can prove beyond reasonable doubt that it has not been modified since acquisition.</p>
      
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">The Forensic Dual-Hashing Workflow (Q79)</span>
          <span class="statute-tag">Legal Standard</span>
        </div>
        <p>1. <strong>Acquisition:</strong> The forensic write-blocker creates a raw bit-stream disk image (e.g., E01/raw) of the suspect device.<br>
        2. <strong>Hashing:</strong> The acquisition tool computes cryptographic hashes of the physical drive AND the image file simultaneously.<br>
        3. <strong>Dual-Hashing:</strong> Best practice mandates generating <strong>two distinct algorithms simultaneously (SHA-256 + MD5)</strong>. While MD5 is broken for security against active attackers, finding a dual collision across both SHA-256 and MD5 simultaneously is mathematically impossible!<br>
        4. <strong>Verification:</strong> If the verification hash matches the acquisition hash, evidence integrity is legally established.</p>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 8 (Q71–Q80):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q71:</strong> Cryptographic hash functions are deterministic (same input always gives exact same output).</li>
        <li><strong>Q72:</strong> The Avalanche Effect requires changing 1 input bit to alter roughly 50% of the output bits.</li>
        <li><strong>Q73:</strong> Pre-image resistance means you cannot reverse a hash to find the original input.</li>
        <li><strong>Q74:</strong> Second pre-image resistance means given message $m_1$, you cannot find a different $m_2$ with the same hash.</li>
        <li><strong>Q75, Q76:</strong> Collision resistance complexity is $\mathcal{O}(2^{n/2})$ due to the Birthday Paradox.</li>
        <li><strong>Q77:</strong> MD5 produces a 128-bit digest and is completely broken.</li>
        <li><strong>Q78:</strong> SHA-1 produces a 160-bit digest and was broken in 2017 (SHAttered attack).</li>
        <li><strong>Q79:</strong> Forensic disk imaging relies on hash comparison to prove bit-level integrity in a court of law.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 8</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q71–Q80) on Hash Properties, Avalanche, Collision Resistance & MD5/SHA-1.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="7" onclick="window.openMCQForSpread(7)">
          Start Quiz (Q71–Q80) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 9: HASHING ALGORITHMS: SHA-2, SHA-3 SPONGE & HMAC (Pages 33–36, Spreads 16 & 17, Q81–Q90)
  // =========================================================================
  // Spread 16: Part 1 - SHA-2 & Length Extension Attacks (Pages 33–34)
  {
    spreadId: 16,
    left: {
      pageNumber: 33,
      runningHead: 'CH. 9 • SHA-2 FAMILY & MERKLE-DAMGÅRD ARCHITECTURE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 9 • Topic 9: SHA-2, SHA-3 & HMAC (Part 1)</span>
      <h2>The SHA-2 Family & Merkle-Damgård Construction</h2>
    </div>

    <div class="intro-abstract">
      <p>Following the theoretical breakdown of SHA-1, NIST standardized the <strong>SHA-2 (Secure Hash Algorithm 2 / FIPS 180-4)</strong> family. Designed by the NSA, SHA-2 represents the global backbone of internet security, securing TLS/HTTPS certificates, blockchain networks (Bitcoin), and digital forensic archives.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The SHA-2 Algorithm Family Specifications (Q81)</span>
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Algorithm</th>
            <th>Output Digest Size</th>
            <th>Internal Word Size</th>
            <th>Block Size</th>
            <th>Number of Rounds</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>SHA-224</strong></td>
            <td>224 bits (28 bytes)</td>
            <td>32 bits</td>
            <td>512 bits (64 bytes)</td>
            <td>64 rounds</td>
          </tr>
          <tr>
            <td><strong>SHA-256 (Q81)</strong></td>
            <td><strong>256 bits (32 bytes)</strong></td>
            <td><strong>32 bits</strong></td>
            <td><strong>512 bits (64 bytes)</strong></td>
            <td><strong>64 rounds</strong></td>
          </tr>
          <tr>
            <td><strong>SHA-384</strong></td>
            <td>384 bits (48 bytes)</td>
            <td>64 bits</td>
            <td>1024 bits (128 bytes)</td>
            <td>80 rounds</td>
          </tr>
          <tr>
            <td><strong>SHA-512</strong></td>
            <td>512 bits (64 bytes)</td>
            <td>64 bits</td>
            <td>1024 bits (128 bytes)</td>
            <td>80 rounds</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">2. The Merkle-Damgård Construction</span>
      <p>SHA-1 and SHA-2 are built upon the <strong>Merkle-Damgård construction</strong>: A variable-length message is padded and split into fixed-size blocks (512 bits). An internal compression function $f$ iteratively updates an internal state vector $H_i = f(H_{i-1}, M_i)$, starting from a fixed Initial Vector ($IV$). The final state vector is the output hash digest.</p>
    </div>
      `
    },
    right: {
      pageNumber: 34,
      runningHead: 'CH. 9 • LENGTH EXTENSION ATTACKS EXPLAINED',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 9 • Topic 9: SHA-2, SHA-3 & HMAC (Part 2)</span>
      <h2>Length Extension Attacks on Raw Hashes</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The Fatal Vulnerability of Raw Secret Prefixes (Q82)</span>
      <p>Software developers frequently attempt to create message authentication codes naively by prepending a secret key: <code>Signature = Hash(Secret_Key + Message)</code>.</p>
      
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">The Length Extension Attack (Q82)</span>
          <span class="statute-tag">Merkle-Damgård Flaw</span>
        </div>
        <p>Because the output of a Merkle-Damgård hash represents the complete internal state of the algorithm after processing the last block, an attacker who intercepts <code>Hash(Secret_Key + Message)</code> and knows the length of the secret key can:</p>
        <p>1. Initialize the hash engine directly using the intercepted hash as the internal state vector ($IV$).<br>
        2. Append their own malicious extension data (e.g., <code>&admin=true</code>) onto the original message.<br>
        3. Compute a valid cryptographic hash for the extended message <strong>WITHOUT EVER KNOWING THE SECRET KEY!</strong></p>
        <p>This completely breaks API authentication. SHA-1, SHA-256, and SHA-512 are all mathematically vulnerable to Length Extension!</p>
      </div>
    </div>
      `
    }
  },

  // Spread 17: Part 2 - HMAC, SHA-3 Sponge & Password KDFs (Pages 35–36)
  {
    spreadId: 17,
    left: {
      pageNumber: 35,
      runningHead: 'CH. 9 • HMAC & SHA-3 SPONGE ARCHITECTURE',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 9 • Topic 9: SHA-2, SHA-3 & HMAC (Part 3)</span>
      <h2>HMAC (RFC 2104) & SHA-3 Sponge Construction</h2>
    </div>

    <div class="section-block">
      <span class="section-label">4. The Solution: HMAC (Hash-based MAC) (Q83, Q84)</span>
      <p>Standardized by NIST and RFC 2104, <strong>HMAC</strong> mathematically prevents length extension attacks using a two-pass nested hashing architecture:</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">HMAC Formula & Inner/Outer Pads (Q83, Q84)</span>
          <span class="statute-tag">Nested Hashing</span>
        </div>
        <p style="text-align: center; font-weight: 700; font-size: 0.9rem; background: rgba(0,0,0,0.04); padding: 8px; border-radius: 4px;">
          Outer-Hash( (Key XOR opad) + Inner-Hash( (Key XOR ipad) + Message ) )
        </p>
        <p>• <strong>Inner Pad (<code>ipad = 0x36</code>):</strong> The secret key is XORed with a repeating byte of 0x36 and prepended to the message, then hashed.<br>
        • <strong>Outer Pad (<code>opad = 0x5C</code>):</strong> The secret key is XORed with a repeating byte of 0x5C and prepended to the inner hash output, then hashed again.<br>
        • <strong>Dual Security Service:</strong> Simultaneously guarantees <strong>Data Integrity</strong> AND <strong>Data Origin Authenticity</strong>!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">5. SHA-3 (Keccak) & The Sponge Construction (Q85, Q86)</span>
      <p>Standardized as FIPS 202 in 2015, <strong>SHA-3</strong> was created to guard against a catastrophic failure of Merkle-Damgård hashes. Designed by Guido Bertoni, Joan Daemen, Michaël Peeters, and Gilles Van Assche, SHA-3 uses the revolutionary <strong>Sponge Construction</strong>:</p>
      <div class="statute-card card-purple">
        <p>• <strong>State Width ($b = r + c$):</strong> Operates on a massive 1600-bit internal state divided into <strong>Bitrate ($r$)</strong> and <strong>Capacity ($c$)</strong>.<br>
        • <strong>Absorbing Phase:</strong> Input message blocks are iteratively XORed into the bitrate part of the state, interleaved with non-linear permutations ($f$).<br>
        • <strong>Squeezing Phase:</strong> Output digest bits are extracted ("squeezed") from the bitrate portion.<br>
        • <strong>Immunity:</strong> Completely immune to length extension attacks because the capacity portion ($c$) is never exposed in the output!</p>
      </div>
    </div>
      `
    },
    right: {
      pageNumber: 36,
      runningHead: 'CH. 9 • PASSWORD KDFS & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 9 • Topic 9: SHA-2, SHA-3 & HMAC (Part 4)</span>
      <h2>Password Hashing, Salts & Key Derivation (KDFs)</h2>
    </div>

    <div class="section-block">
      <span class="section-label">6. Why Fast Hashes Fail for Passwords: The GPU Threat (Q87)</span>
      <p>Standard cryptographic hashes (SHA-256) are engineered to be <em>ultra-fast</em>. An enterprise GPU cluster can compute over <strong>100 billion SHA-256 hashes per second</strong>! If passwords are saved using raw SHA-256, an attacker cracking a leaked database cracks 8-character passwords in minutes.</p>
    </div>

    <div class="section-block">
      <span class="section-label">7. Modern Password Defense: Salts & Memory-Hard KDFs (Q88, Q89)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Cryptographic Salt (Q88)</span>
            <span class="statute-tag">Rainbow Table Killer</span>
          </div>
          <p>A unique, cryptographically random string (at least 16 bytes) generated freshly for each user and concatenated with the password before hashing. Defeats precomputed <strong>Rainbow Tables</strong> and prevents two users with identical passwords from sharing the same digest.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Memory-Hard KDFs: Argon2id (Q89)</span>
            <span class="statute-tag">Password Hash Winner</span>
          </div>
          <p>Winner of the Password Hashing Competition (PHC). <strong>Argon2id</strong> forces the algorithm to fill massive amounts of RAM (e.g., 64 MB per hash), neutralizing GPU and ASIC parallel cracking arrays.</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 9 (Q81–Q90):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q81:</strong> SHA-256 outputs a 256-bit digest (32 bytes) operating across 64 rounds.</li>
        <li><strong>Q82:</strong> Length extension attacks allow attackers to append data to Merkle-Damgård hashes without knowing the key.</li>
        <li><strong>Q83:</strong> HMAC uses two-pass nested hashing with inner pad (0x36) and outer pad (0x5C).</li>
        <li><strong>Q84:</strong> HMAC guarantees both data integrity and origin authentication.</li>
        <li><strong>Q85, Q86:</strong> SHA-3 uses the Keccak Sponge Construction (Absorbing and Squeezing phases) over a 1600-bit state.</li>
        <li><strong>Q88:</strong> Salts must be unique per user to defeat precomputed rainbow tables.</li>
        <li><strong>Q89:</strong> Argon2id is the gold standard memory-hard algorithm for password storage.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 9</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q81–Q90) on SHA-2, Length Extension, HMAC & SHA-3 Sponge.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="8" onclick="window.openMCQForSpread(8)">
          Start Quiz (Q81–Q90) &rarr;
        </button>
      </div>
    </div>
      `
    }
  },

  // =========================================================================
  // TOPIC 10: CRYPTANALYSIS: ATTACK MODELS, CLASSICAL & MODERN TECHNIQUES (Pages 37–40, Spreads 18 & 19, Q91–Q100)
  // =========================================================================
  // Spread 18: Part 1 - Cryptanalysis Foundations & Attack Models (Pages 37–38)
  {
    spreadId: 18,
    left: {
      pageNumber: 37,
      runningHead: 'CH. 10 • CRYPTANALYSIS FOUNDATIONS & ATTACK MODELS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 10 • Topic 10: Cryptanalysis & Cipher Breakers (Part 1)</span>
      <h2>Cryptanalysis Foundations & Attacker Objectives</h2>
    </div>

    <div class="intro-abstract">
      <p>While cryptography is the science of building secure mathematical ciphers, <strong>Cryptanalysis</strong> is the science and art of breaking them. Cryptanalysts evaluate systems to find mathematical weaknesses, implementation bugs, statistical biases, or physical side-channel leakages that allow recovering plaintext or secret keys <em>without possessing the authorized key</em>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. Levels of Cryptanalytic Success (Q91)</span>
      <p>In academic cryptanalysis, "breaking" a cipher does not necessarily mean instant decryption of every message. Success is measured in four hierarchical tiers:</p>
      <ul class="forensic-list">
        <li><strong>Total Break (Catastrophic):</strong> The cryptanalyst deduces the master secret key, allowing immediate decryption of all past and future communications.</li>
        <li><strong>Universal Deduction:</strong> Finding an efficient alternate algorithm that decrypts any ciphertext without discovering the actual secret key.</li>
        <li><strong>Instance Deduction (Partial Break):</strong> Deducing the plaintext of a specific intercepted ciphertext.</li>
        <li><strong>Distinguishing Attack:</strong> The cryptanalyst can distinguish the cipher's output from a truly random bit generator with probability greater than 50%. (Proves the cipher has mathematical flaws!).</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. Kerckhoffs's Assumption in Cryptanalysis</span>
      <p>Every legitimate cryptanalytic evaluation assumes Claude Shannon's maxim: <em>"The enemy knows the system."</em> The attacker has full access to the source code, hardware schematics, and protocol specifications.</p>
    </div>
      `
    },
    right: {
      pageNumber: 38,
      runningHead: 'CH. 10 • THE 4 CLASSIC ATTACK MODELS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 10 • Topic 10: Cryptanalysis & Cipher Breakers (Part 2)</span>
      <h2>The 4 Classical Cryptanalytic Attack Models</h2>
    </div>

    <div class="section-block">
      <span class="section-label">3. The 4 Attack Models: Access & Capabilities (Q92, Q93, Q94, Q95)</span>
      <p>Cryptanalytic attacks are categorized by the degree of access the adversary possesses over plaintexts and ciphertexts:</p>
      
      <table class="statutory-table">
        <thead>
          <tr>
            <th>Attack Model</th>
            <th>Adversary's Available Data</th>
            <th>Adversary's Active Capabilities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Ciphertext-Only Attack (COA) (Q92)</strong></td>
            <td>Only one or more intercepted <strong>Ciphertext blocks</strong>.</td>
            <td>Weakest attack model. The adversary has zero access to corresponding plaintexts. Relies on statistical distributions, language frequencies, or known header formats.</td>
          </tr>
          <tr>
            <td><strong>2. Known-Plaintext Attack (KPA) (Q93)</strong></td>
            <td>One or more pairs of <strong>Ciphertext AND its corresponding Plaintext</strong>.</td>
            <td>The adversary possesses known plaintext samples (e.g., standard protocol headers like <code>HTTP/1.1 200 OK</code> or <code>&lt;!DOCTYPE html&gt;</code>) and attempts to deduce the secret key.</td>
          </tr>
          <tr>
            <td><strong>3. Chosen-Plaintext Attack (CPA) (Q94)</strong></td>
            <td>The adversary can feed <strong>arbitrary plaintexts</strong> into the encryption oracle.</td>
            <td>The attacker chooses custom plaintext inputs and observes the resulting ciphertexts. Standard security requirement: all modern ciphers must be IND-CPA secure!</td>
          </tr>
          <tr>
            <td><strong>4. Chosen-Ciphertext Attack (CCA) (Q95)</strong></td>
            <td>The adversary can feed <strong>arbitrary ciphertexts</strong> into the decryption oracle.</td>
            <td>Strongest attack model. The attacker chooses custom ciphertexts and analyzes the decrypted output or error messages (e.g., Bleichenbacher RSA attack, CBC Padding Oracles).</td>
          </tr>
        </tbody>
      </table>
    </div>
      `
    }
  },

  // Spread 19: Part 2 - Classical Cryptanalysis, Side-Channels & Exam Traps (Pages 39–40)
  {
    spreadId: 19,
    left: {
      pageNumber: 39,
      runningHead: 'CH. 10 • CLASSICAL & MODERN CRYPTANALYSIS TECHNIQUES',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 10 • Topic 10: Cryptanalysis & Cipher Breakers (Part 3)</span>
      <h2>Classical & Modern Cryptanalysis Techniques</h2>
    </div>

    <div class="section-block">
      <span class="section-label">4. Classical Cryptanalysis: Frequency Analysis (Q96)</span>
      <p>In monoalphabetic substitution ciphers (Caesar cipher, simple substitution), each plaintext letter is replaced with a fixed ciphertext letter. In natural languages, letters occur with predictable statistical frequencies (in English: <strong>'E' $\approx 12.7\%$</strong>, <strong>'T' $\approx 9.1\%$</strong>, <strong>'A' $\approx 8.2\%$</strong>, while 'Z' and 'Q' are $< 0.1\%$). An analyst calculates letter frequencies in the ciphertext to map the most frequent symbols to 'E' and 'T', breaking the cipher in seconds!</p>
    </div>

    <div class="section-block">
      <span class="section-label">5. Kasiski Examination for Polyalphabetic Ciphers (Q97)</span>
      <p>Invented in 1863 by Friedrich Kasiski to break the Vigenère cipher: Repeated strings in the ciphertext reveal the key length. By measuring the distance between repeated character sequences and finding their greatest common divisor (GCD), the analyst deduces the keyword length $L$, converting the polyalphabetic cipher into $L$ separate monoalphabetic ciphers solvable via frequency analysis.</p>
    </div>

    <div class="section-block">
      <span class="section-label">6. Modern Cryptanalysis: Differential & Linear</span>
      <ul class="forensic-list">
        <li><strong>Differential Cryptanalysis (Biham & Shamir, 1990):</strong> Tracks how specific differences in plaintext pairs propagate through the rounds to find high-probability differentials revealing subkeys. DES was designed to resist differential cryptanalysis.</li>
        <li><strong>Linear Cryptanalysis (Matsui, 1993):</strong> Constructs linear affine approximations of non-linear S-Boxes. Successfully broke 16-round DES in $2^{43}$ operations.</li>
      </ul>
    </div>
      `
    },
    right: {
      pageNumber: 40,
      runningHead: 'CH. 10 • SIDE-CHANNEL ATTACKS & EXAM TRAPS',
      content: `
    <div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 10 • Topic 10: Cryptanalysis & Cipher Breakers (Part 4)</span>
      <h2>Side-Channel Attacks, Physical Leakage & Exam Traps</h2>
    </div>

    <div class="section-block">
      <span class="section-label">7. Side-Channel Attacks: Attacking the Physical Implementation (Q98)</span>
      <p>Side-channel attacks do NOT attack the underlying mathematical algorithm; they attack the physical hardware implementation running the cipher:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Timing Attacks (Q98)</span>
            <span class="statute-tag">Execution Duration</span>
          </div>
          <p>Measures variations in CPU clock cycles or execution time when processing different keys. If an algorithm takes longer to compute when a key bit is '1' vs '0', attackers recover the key. <strong>Defense: Constant-time code execution!</strong></p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Power Analysis (DPA) (Q98)</span>
            <span class="statute-tag">Electrical Current</span>
          </div>
          <p><strong>Differential Power Analysis (DPA)</strong> measures microsecond electrical current fluctuations in cryptographic smart cards to extract RSA and AES keys.</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB High-Yield Exam Traps — Topic 10 (Q91–Q100):</strong>
      <ul style="margin: 4px 0 0 16px; padding: 0;">
        <li><strong>Q91:</strong> Cryptanalysis is the science of breaking ciphers and recovering plaintext without possessing the authorized key.</li>
        <li><strong>Q92:</strong> Ciphertext-Only Attack (COA): Attacker has access strictly to ciphertexts.</li>
        <li><strong>Q93:</strong> Known-Plaintext Attack (KPA): Attacker possesses matching pairs of plaintext and ciphertext.</li>
        <li><strong>Q94:</strong> Chosen-Plaintext Attack (CPA): Attacker can choose custom plaintexts and obtain their ciphertexts.</li>
        <li><strong>Q95:</strong> Chosen-Ciphertext Attack (CCA): Attacker chooses ciphertexts and analyzes decrypted outputs or error codes.</li>
        <li><strong>Q96:</strong> Frequency analysis exploits natural language letter distributions to break monoalphabetic ciphers.</li>
        <li><strong>Q97:</strong> The Kasiski examination deduces the key length of polyalphabetic ciphers by measuring distances between repeated patterns.</li>
        <li><strong>Q98:</strong> Side-channel attacks exploit physical leakage (timing, power consumption, EM emissions) rather than mathematical flaws.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-inner">
        <div class="spread-quiz-cta-icon">🎯</div>
        <div class="spread-quiz-cta-text">
          <div class="spread-quiz-title">Test Your Mastery on Topic 10</div>
          <div class="spread-quiz-desc">Practice all 10 targeted DSSSB exam questions (Q91–Q100) on Cryptanalysis Models, Frequency Analysis & Side-Channels.</div>
        </div>
        <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="9" onclick="window.openMCQForSpread(9)">
          Start Quiz (Q91–Q100) &rarr;
        </button>
      </div>
    </div>
      `
    }
  }
];

