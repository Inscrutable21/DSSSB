// Part 2: Topics 6–10 (Spreads 10–19, Pages 21–40)
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
  // TOPIC 6: ASYMMETRIC ALGORITHMS: PUBLIC-KEY & RSA
  // =========================================================================
  // Spread 10: Pages 21 & 22
  {
    spreadId: 10,
    left: {
      pageNumber: 21,
      runningHead: 'TOPIC 6 • ASYMMETRIC CRYPTOGRAPHY FOUNDATIONS',
      content: `
    ${makeHeader(6, 'Symmetric and Asymmetric algorithms: Asymmetric (Public-Key & RSA)', 'Public Key Cryptography Foundations & Key Pairs', 1)}

    <div class="intro-abstract">
      <p>While symmetric cryptography uses one shared secret key, <strong>Asymmetric (Public Key) Cryptography</strong> uses a mathematically linked <strong>pair of keys</strong>: a Public Key (which anyone can see) and a Private Key (kept strictly secret by the owner).</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. How Public Key Cryptography Works (Q51)</span>
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
      <span class="section-label">2. Trapdoor One-Way Functions</span>
      <p>Asymmetric algorithms rely on <strong>Trapdoor One-Way Functions</strong>: mathematical operations that are easy to calculate in the forward direction, but practically impossible to reverse unless you know a special secret "trapdoor" (the private key).</p>
    </div>`
    },
    right: {
      pageNumber: 22,
      runningHead: 'TOPIC 6 • THE RSA ALGORITHM & PRIME FACTORIZATION',
      content: `
    ${makeHeader(6, 'Symmetric and Asymmetric algorithms: Asymmetric (Public-Key & RSA)', 'The RSA Mathematical Foundation: Prime Factorization', 2)}

    <div class="section-block">
      <span class="section-label">3. The RSA Algorithm (Rivest, Shamir, Adleman - 1977) (Q52, Q53)</span>
      <p>RSA is the most widely deployed public-key cryptosystem in the world. Its security is based on the <strong>computational difficulty of factoring the product of two very large prime numbers</strong>.</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">RSA Key Setup (Simple Steps)</span>
            <span class="statute-tag">Key Generation</span>
          </div>
          <p>1. Pick two large distinct prime numbers: <code>p</code> and <code>q</code>.<br>
          2. Calculate modulus: <code>n = p &times; q</code>.<br>
          3. Calculate Euler's totient: <code>&phi;(n) = (p - 1) &times; (q - 1)</code>.<br>
          4. Choose public exponent <code>e</code> (standard value is <code>65537</code>).<br>
          5. Calculate private exponent <code>d</code> such that <code>(d &times; e) mod &phi;(n) = 1</code>.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">RSA Keys & Formulas (Q53)</span>
            <span class="statute-tag">Encryption / Decryption</span>
          </div>
          <p>• <strong>Public Key:</strong> <code>(e, n)</code><br>
          • <strong>Private Key:</strong> <code>(d, n)</code><br>
          • <strong>Encryption:</strong> <code>Ciphertext = (Message)^e mod n</code><br>
          • <strong>Decryption:</strong> <code>Message = (Ciphertext)^d mod n</code></p>
        </div>
      </div>
    </div>

    ${makeContinuation(6, 'Asymmetric Algorithms & RSA', 'Hybrid Cryptography & DSSSB Exam Traps', 5)}`
    }
  },

  // Spread 11: Pages 23 & 24
  {
    spreadId: 11,
    left: {
      pageNumber: 23,
      runningHead: 'TOPIC 6 • HYBRID CRYPTOGRAPHY ARCHITECTURE',
      content: `
    ${makeHeader(6, 'Symmetric and Asymmetric algorithms: Asymmetric (Public-Key & RSA)', 'Hybrid Cryptography Architecture', 3)}

    <div class="section-block">
      <span class="section-label">4. Why Hybrid Cryptography is Used (Q54)</span>
      <p>Asymmetric algorithms like RSA involve heavy modular exponentiation and are roughly <strong>1,000 times slower</strong> than symmetric ciphers like AES. Therefore, real-world protocols (HTTPS/TLS, SSH, PGP) use a <strong>Hybrid Cryptosystem</strong>:</p>
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">Hybrid Encryption Steps (Best of Both Worlds)</span>
          <span class="statute-tag">Speed + Key Distribution</span>
        </div>
        <p>• <strong>Step 1:</strong> The sender generates a temporary, random symmetric key (called a <strong>Session Key</strong>, e.g., AES-256).<br>
        • <strong>Step 2:</strong> The large document or video is encrypted with the fast AES session key.<br>
        • <strong>Step 3:</strong> The tiny 256-bit AES key is encrypted using the recipient's public RSA key (Key Encapsulation).<br>
        • <strong>Step 4:</strong> The recipient uses their private RSA key to recover the AES key, then decrypts the bulk data with AES!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">5. Recommended RSA Key Length</span>
      <p>Due to advances in computing power, 1024-bit RSA keys are broken. NIST requires a minimum of <strong>2048-bit RSA keys</strong> for modern enterprise security (3072-bit or 4096-bit recommended for long-term data).</p>
    </div>`
    },
    right: {
      pageNumber: 24,
      runningHead: 'TOPIC 6 • RSA EXAM TRAPS & TAKEAWAYS',
      content: `
    ${makeHeader(6, 'Symmetric and Asymmetric algorithms: Asymmetric (Public-Key & RSA)', 'RSA Summary & DSSSB High-Yield Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">6. Asymmetric Key Count Formula</span>
      <p>For $N$ users communicating with asymmetric cryptography:</p>
      <div class="legal-quote-box">
        <p><strong>Total Asymmetric Key Pairs Required = N (Each user has 1 Public + 1 Private Key = 2N total keys)</strong></p>
      </div>
      <p>Compare this with symmetric cryptography, which required $[N \times (N-1)]/2$ keys! For 1,000 users, asymmetric cryptography requires only <strong>1,000 key pairs</strong> instead of 499,500 symmetric keys!</p>
    </div>

    <div class="section-block">
      <span class="section-label">7. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>RSA Hardness (Q52):</strong> Based on the difficulty of <strong>factoring large prime numbers</strong>.<br>
        • <strong>Encryption Rule (Q51):</strong> Encrypt with recipient's <em>Public Key</em>; Decrypt with recipient's <em>Private Key</em>.<br>
        • <strong>Digital Signature Rule:</strong> Sign with sender's <em>Private Key</em>; Verify with sender's <em>Public Key</em>.<br>
        • <strong>Hybrid Cryptosystem (Q54):</strong> Uses asymmetric keys to exchange an AES session key, and symmetric AES to encrypt the actual bulk message.</p>
      </div>
    </div>

    ${makeQuizCTA(6, 'Asymmetric Ciphers & RSA', 5)}`
    }
  },

  // =========================================================================
  // TOPIC 7: ASYMMETRIC ALGORITHMS: DIFFIE-HELLMAN & ECC
  // =========================================================================
  // Spread 12: Pages 25 & 26
  {
    spreadId: 12,
    left: {
      pageNumber: 25,
      runningHead: 'TOPIC 7 • DIFFIE-HELLMAN KEY EXCHANGE',
      content: `
    ${makeHeader(7, 'Symmetric and Asymmetric algorithms: Asymmetric (Diffie-Hellman & ECC)', 'The Diffie-Hellman Key Exchange Protocol', 1)}

    <div class="intro-abstract">
      <p>Published in 1976 by Whitfield Diffie and Martin Hellman, the <strong>Diffie-Hellman (DH) protocol</strong> was the first practical method enabling two parties to establish a shared secret key across an insecure public channel without sending the key itself!</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. How Diffie-Hellman Works (The Paint Analogy)</span>
      <p>Imagine Alice and Bob want to agree on a secret color without an eavesdropper knowing:</p>
      <ul class="forensic-list">
        <li>Alice and Bob start with a common public color (e.g., Yellow).</li>
        <li>Alice chooses a private secret color (e.g., Red) and mixes it with Yellow &rarr; sends the mixture to Bob.</li>
        <li>Bob chooses a private secret color (e.g., Blue) and mixes it with Yellow &rarr; sends the mixture to Alice.</li>
        <li>Alice adds her secret Red to Bob's mixture; Bob adds his secret Blue to Alice's mixture.</li>
        <li>Both now hold the <strong>exact same final color</strong>! An eavesdropper seeing only the mixtures cannot separate the private colors.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. Mathematical Hardness of Diffie-Hellman (Q61)</span>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Discrete Logarithm Problem (DLP)</span>
          <span class="statute-tag">Mathematical Hardness</span>
        </div>
        <p>Calculating <code>g^a mod p</code> is fast and easy (modular exponentiation). However, given only the result, finding the secret exponent <code>a</code> is computationally infeasible over large prime fields! This is the <strong>Discrete Logarithm Problem</strong>.</p>
      </div>
    </div>`
    },
    right: {
      pageNumber: 26,
      runningHead: 'TOPIC 7 • PERFECT FORWARD SECRECY (PFS)',
      content: `
    ${makeHeader(7, 'Symmetric and Asymmetric algorithms: Asymmetric (Diffie-Hellman & ECC)', 'Perfect Forward Secrecy & Man-in-the-Middle Attacks', 2)}

    <div class="section-block">
      <span class="section-label">3. Man-in-the-Middle (MitM) Flaw in Pure DH</span>
      <p>Classic Diffie-Hellman does not authenticate the parties. An attacker sitting in the middle can intercept the public values, negotiate separate keys with Alice and Bob, and read all traffic. Therefore, DH keys must be authenticated using <strong>Digital Certificates</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">4. What is Perfect Forward Secrecy (PFS)? (Q62)</span>
      <p>In traditional static encryption, if an attacker records encrypted network traffic for months and later steals the server's private key, they can decrypt <em>all past recorded sessions</em>.</p>
      <div class="statute-card card-purple">
        <div class="statute-header">
          <span class="statute-section">Ephemeral Diffie-Hellman (DHE / ECDHE)</span>
          <span class="statute-tag">Session Isolation</span>
        </div>
        <p>• With <strong>Perfect Forward Secrecy (PFS)</strong>, a brand-new, disposable Diffie-Hellman key pair is generated for every single session.<br>
        • Once the session ends, the keys are wiped from RAM.<br>
        • Even if the server's master private key is stolen in the future, past recorded sessions <strong>can never be decrypted</strong>!</p>
      </div>
    </div>

    ${makeContinuation(7, 'Diffie-Hellman & ECC', 'Elliptic Curve Cryptography (ECC) Architecture', 6)}`
    }
  },

  // Spread 13: Pages 27 & 28
  {
    spreadId: 13,
    left: {
      pageNumber: 27,
      runningHead: 'TOPIC 7 • ELLIPTIC CURVE CRYPTOGRAPHY (ECC)',
      content: `
    ${makeHeader(7, 'Symmetric and Asymmetric algorithms: Asymmetric (Diffie-Hellman & ECC)', 'Elliptic Curve Cryptography (ECC) Architecture', 3)}

    <div class="section-block">
      <span class="section-label">5. What is Elliptic Curve Cryptography (ECC)? (Q63)</span>
      <p>Standardized by Neal Koblitz and Victor Miller, ECC is a modern form of public-key cryptography that uses the algebraic geometry of <strong>elliptic curves over finite fields</strong> (smooth looping curves following equations like <code>y^2 = x^3 + ax + b</code>).</p>
      <p>Its security rests on the <strong>Elliptic Curve Discrete Logarithm Problem (ECDLP)</strong>, which is vastly harder to break than standard RSA integer factorization.</p>
    </div>

    <div class="section-block">
      <span class="section-label">6. The Key Size Advantage of ECC (Q64)</span>
      <p>Because ECDLP is so computationally difficult, ECC provides identical security to RSA with <strong>much smaller keys</strong>, consuming less CPU power, battery, and memory (ideal for smartphones and smart cards):</p>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>Security Strength</th>
            <th>RSA Key Size</th>
            <th>Equivalent ECC Key Size</th>
            <th>Efficiency Ratio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard Enterprise</td>
            <td>2048 bits</td>
            <td><strong>224 bits</strong></td>
            <td>9&times; smaller</td>
          </tr>
          <tr>
            <td>Modern Industry Standard</td>
            <td><strong>3072 bits</strong></td>
            <td><strong>256 bits (Curve25519)</strong></td>
            <td><strong>12&times; smaller!</strong></td>
          </tr>
          <tr>
            <td>Military / Top Secret</td>
            <td>15,360 bits</td>
            <td><strong>521 bits</strong></td>
            <td>30&times; smaller</td>
          </tr>
        </tbody>
      </table>
    </div>`
    },
    right: {
      pageNumber: 28,
      runningHead: 'TOPIC 7 • DH & ECC EXAM TRAPS',
      content: `
    ${makeHeader(7, 'Symmetric and Asymmetric algorithms: Asymmetric (Diffie-Hellman & ECC)', 'ECC Protocols & DSSSB High-Yield Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">7. Key Protocols Powered by ECC</span>
      <ul class="forensic-list">
        <li><strong>ECDH (Elliptic Curve Diffie-Hellman):</strong> Used in modern TLS 1.3 handshakes for lightning-fast, PFS-protected key exchange.</li>
        <li><strong>ECDSA (Elliptic Curve Digital Signature Algorithm):</strong> Used for digital signatures in Bitcoin, Ethereum, and modern e-passports.</li>
        <li><strong>Ed25519 (Edwards-curve DSA):</strong> High-speed, immune to timing side-channel attacks; widely used in OpenSSH and WireGuard VPN.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">8. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Diffie-Hellman Goal (Q61):</strong> Key exchange / agreement over an insecure channel. It is NOT used for encrypting bulk data files!<br>
        • <strong>DH Hardness:</strong> Based on the <strong>Discrete Logarithm Problem (DLP)</strong>.<br>
        • <strong>Perfect Forward Secrecy (Q62):</strong> Provided by Ephemeral DH (DHE / ECDHE). Compromising a server key does NOT compromise past sessions.<br>
        • <strong>ECC Key Size Equivalence (Q64):</strong> A <strong>256-bit ECC key</strong> offers the exact same cryptographic strength as a <strong>3072-bit RSA key</strong>!</p>
      </div>
    </div>

    ${makeQuizCTA(7, 'Diffie-Hellman & ECC', 6)}`
    }
  },

  // =========================================================================
  // TOPIC 8: HASHING ALGORITHMS: PROPERTIES & CLASSICAL FUNCTIONS
  // =========================================================================
  // Spread 14: Pages 29 & 30
  {
    spreadId: 14,
    left: {
      pageNumber: 29,
      runningHead: 'TOPIC 8 • CRYPTOGRAPHIC HASH PROPERTIES',
      content: `
    ${makeHeader(8, 'Hashing Algorithms: Properties, Avalanche & Collision Resistances', 'Cryptographic Hash Foundations & Core Axioms', 1)}

    <div class="intro-abstract">
      <p>A <strong>Cryptographic Hash Function</strong> takes an arbitrary amount of data (from a single word to an entire 10-terabyte hard drive) and produces a fixed-size mathematical fingerprint called a <strong>Hash Digest</strong>. Hashing is strictly a <strong>one-way function</strong> (you cannot decrypt a hash!).</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Three Essential Cryptographic Hash Axioms (Q71)</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Pre-image Resistance (One-Way)</span>
            <span class="statute-tag">Cannot Reverse</span>
          </div>
          <p>Given any hash value <code>h</code>, it is practically impossible to find the original input <code>x</code> such that <code>Hash(x) = h</code>.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. Second Pre-image Resistance</span>
            <span class="statute-tag">Cannot Duplicate Target</span>
          </div>
          <p>Given a specific known input <code>x1</code>, it is practically impossible to find a different input <code>x2</code> that produces the exact same hash: <code>Hash(x1) = Hash(x2)</code>.</p>
        </div>
      </div>
      <div class="statute-card card-amber" style="margin-top: 10px;">
        <div class="statute-header">
          <span class="statute-section">3. Collision Resistance (Strongest Property)</span>
          <span class="statute-tag">No Two Duplicates</span>
        </div>
        <p>It must be computationally impossible to find <em>any two completely random, different inputs</em> that produce the identical hash output.</p>
      </div>
    </div>`
    },
    right: {
      pageNumber: 30,
      runningHead: 'TOPIC 8 • THE AVALANCHE EFFECT',
      content: `
    ${makeHeader(8, 'Hashing Algorithms: Properties, Avalanche & Collision Resistances', 'The Avalanche Effect & Forensic Evidence Verification', 2)}

    <div class="section-block">
      <span class="section-label">2. The Avalanche Effect (Q72)</span>
      <p>A vital property of every secure cryptographic hash function is the <strong>Avalanche Effect</strong>: changing even a single bit of input data causes approximately <strong>50% of the output hash bits to flip</strong>!</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">Real Avalanche Example (SHA-256)</span>
          <span class="statute-tag">Input Sensitivity</span>
        </div>
        <p>• Hash of "<code>hello</code>":<br>
        <code>2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824</code><br>
        • Hash of "<code>Hello</code>" (Capital H - 1 bit difference!):<br>
        <code>185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969</code><br>
        • <em>Result:</em> The output digest completely changes; no similarity exists!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. Forensic Chain of Custody (Section 65B Indian Evidence Act)</span>
      <p>When forensic officers seize a suspect computer, they calculate the SHA-256 hash immediately. In court, defense attorneys inspect whether the hash of the evidence matches the seizure memo. If a single byte was altered, the hash mismatch proves tampering!</p>
    </div>

    ${makeContinuation(8, 'Hashing Properties & Hashes', 'The Birthday Paradox, MD5 & SHA-1 Vulnerabilities', 7)}`
    }
  },

  // Spread 15: Pages 31 & 32
  {
    spreadId: 15,
    left: {
      pageNumber: 31,
      runningHead: 'TOPIC 8 • BIRTHDAY ATTACK & BROKEN HASHES',
      content: `
    ${makeHeader(8, 'Hashing Algorithms: Properties, Avalanche & Collision Resistances', 'The Birthday Paradox, Broken MD5 & SHA-1', 3)}

    <div class="section-block">
      <span class="section-label">4. The Birthday Paradox & Collision Probability (Q73)</span>
      <p>In a room of only 23 people, there is a greater than 50% probability that two people share the exact same birthday (out of 365 days).</p>
      <p>• <strong>Cryptographic Consequence:</strong> To find a collision in an $N$-bit hash function, an attacker does NOT need to test $2^N$ items; they only need to test approximately <strong>$2^{N/2}$ items</strong>!<br>
      • For a 128-bit hash, collision security is only $2^{64}$ operations (well within reach of modern computers!).</p>
    </div>

    <div class="section-block">
      <span class="section-label">5. Legacy Hashes: MD5 & SHA-1 (Both Broken!) (Q74)</span>
      <div class="statutory-grid">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">MD5 (Message Digest 5 - 1991)</span>
            <span class="statute-tag">128-bit Digest (Broken)</span>
          </div>
          <p>• Designed by Ron Rivest. Digest size: <strong>128 bits</strong> (32 hex characters).<br>
          • <strong>Status:</strong> Severely broken! Practical collision attacks can generate two different PDFs with the identical MD5 in seconds. Banned for security!</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">SHA-1 (FIPS 180-1 - 1995)</span>
            <span class="statute-tag">160-bit Digest (Broken)</span>
          </div>
          <p>• Designed by NSA. Digest size: <strong>160 bits</strong> (40 hex characters).<br>
          • <strong>Status:</strong> Formally broken in 2017 by Google (the "SHAttered" attack). Banned by NIST for digital signatures and certificates.</p>
        </div>
      </div>
    </div>`
    },
    right: {
      pageNumber: 32,
      runningHead: 'TOPIC 8 • HASHING EXAM TRAPS & SIZES',
      content: `
    ${makeHeader(8, 'Hashing Algorithms: Properties, Avalanche & Collision Resistances', 'Hash Digest Sizes & DSSSB High-Yield Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">6. Common Hash Digest Length Reference Table</span>
      <table class="forensic-table">
        <thead>
          <tr>
            <th>Hash Algorithm</th>
            <th>Digest Output Size (Bits)</th>
            <th>Output Length (Hex Characters)</th>
            <th>Security Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>MD5</strong></td>
            <td>128 bits</td>
            <td>32 hex characters</td>
            <td>Broken (Forbidden for security)</td>
          </tr>
          <tr>
            <td><strong>SHA-1</strong></td>
            <td>160 bits</td>
            <td>40 hex characters</td>
            <td>Broken (Banned by NIST)</td>
          </tr>
          <tr>
            <td><strong>SHA-256</strong></td>
            <td>256 bits</td>
            <td>64 hex characters</td>
            <td>Secure (Global Gold Standard)</td>
          </tr>
          <tr>
            <td><strong>SHA-512</strong></td>
            <td>512 bits</td>
            <td>128 hex characters</td>
            <td>Secure (High-Security Standard)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section-block">
      <span class="section-label">7. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>One-Way Property (Q71):</strong> Hashing cannot be decrypted; it is irreversible.<br>
        • <strong>Avalanche Effect (Q72):</strong> A 1-bit input change alters roughly 50% of output hash bits.<br>
        • <strong>Birthday Attack (Q73):</strong> Reduces collision search complexity from $2^N$ down to $2^{N/2}$.<br>
        • <strong>MD5 Output:</strong> Exactly <strong>128 bits</strong> (32 hex characters).<br>
        • <strong>SHA-1 Output:</strong> Exactly <strong>160 bits</strong> (40 hex characters).</p>
      </div>
    </div>

    ${makeQuizCTA(8, 'Hashing Properties & Hashes', 7)}`
    }
  },

  // =========================================================================
  // TOPIC 9: HASHING ALGORITHMS: MODERN FAMILIES (SHA-2, SHA-3) & HMAC
  // =========================================================================
  // Spread 16: Pages 33 & 34
  {
    spreadId: 16,
    left: {
      pageNumber: 33,
      runningHead: 'TOPIC 9 • SHA-2 FAMILY & MERKLE-DAMGARD',
      content: `
    ${makeHeader(9, 'Hashing Algorithms: Modern Families (SHA-2, SHA-3) & HMAC', 'The SHA-2 Family & Merkle-Damgård Construction', 1)}

    <div class="intro-abstract">
      <p>Following the deprecation of MD5 and SHA-1, modern cybersecurity relies on the <strong>SHA-2</strong> and <strong>SHA-3</strong> families for digital signatures, blockchain ledgers, and secure authentication.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The SHA-2 Family (FIPS 180-4) (Q81)</span>
      <p>Published by NIST in 2001, SHA-2 uses the <strong>Merkle-Damgård construction</strong>. It processes messages in fixed-size blocks through iterative compression rounds:</p>
      <ul class="forensic-list">
        <li><strong>SHA-256:</strong> Operates on 512-bit message blocks using 64 rounds; outputs a <strong>256-bit digest</strong>. Global standard for TLS, SSL, IPsec, and Bitcoin.</li>
        <li><strong>SHA-512:</strong> Operates on 1024-bit message blocks using 80 rounds of 64-bit words; outputs a <strong>512-bit digest</strong>.</li>
        <li><em>Truncated Variants:</em> SHA-224 (derived from SHA-256) and SHA-384 (derived from SHA-512).</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. Length Extension Attacks</span>
      <p>Because Merkle-Damgård hashes output their internal state as the final digest, an attacker knowing <code>Hash(Secret || Data)</code> can append malicious data to the end without knowing the Secret. This is why naive hashing schemes like <code>Hash(Key + Message)</code> are dangerous!</p>
    </div>`
    },
    right: {
      pageNumber: 34,
      runningHead: 'TOPIC 9 • SHA-3 SPONGE CONSTRUCTION',
      content: `
    ${makeHeader(9, 'Hashing Algorithms: Modern Families (SHA-2, SHA-3) & HMAC', 'SHA-3 (Keccak) Sponge Construction Architecture', 2)}

    <div class="section-block">
      <span class="section-label">3. The SHA-3 Standard (Keccak / FIPS 202) (Q82)</span>
      <p>Selected by NIST in 2015 after an open international competition. SHA-3 was designed using a completely different mathematical architecture called the <strong>Sponge Construction</strong>, ensuring it does NOT share the vulnerabilities of Merkle-Damgård hashes.</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Absorbing Phase</span>
            <span class="statute-tag">Input Ingestion</span>
          </div>
          <p>Message blocks are XORed into the state array and transformed through repeated permutations.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. Squeezing Phase</span>
            <span class="statute-tag">Output Generation</span>
          </div>
          <p>The output digest bits are "squeezed" out of the state array. Completely immune to Length Extension Attacks by design!</p>
        </div>
      </div>
    </div>

    ${makeContinuation(9, 'SHA-2, SHA-3 & HMAC', 'Hash-based Message Authentication Codes (HMAC)', 8)}`
    }
  },

  // Spread 17: Pages 35 & 36
  {
    spreadId: 17,
    left: {
      pageNumber: 35,
      runningHead: 'TOPIC 9 • HASH-BASED MAC (HMAC)',
      content: `
    ${makeHeader(9, 'Hashing Algorithms: Modern Families (SHA-2, SHA-3) & HMAC', 'Hash-based Message Authentication Codes (HMAC)', 3)}

    <div class="section-block">
      <span class="section-label">4. What is HMAC (RFC 2104)? (Q83)</span>
      <p>A standard hash function (like SHA-256) verifies that a file has not been accidentally corrupted. However, it does not prove who sent it! An attacker could modify the message and recompute a new valid hash.</p>
      <p><strong>HMAC (Hash-based Message Authentication Code)</strong> combines a cryptographic hash function with a <strong>shared secret key</strong>, providing both <strong>Data Integrity</strong> and <strong>Data Origin Authentication</strong>!</p>
      <div class="statute-card card-teal">
        <div class="statute-header">
          <span class="statute-section">HMAC Nested Hashing Design</span>
          <span class="statute-tag">Two-Pass Hashing</span>
        </div>
        <p>• HMAC uses a two-pass nested formula: <code>Hash((Key XOR opad) || Hash((Key XOR ipad) || Message))</code>.<br>
        • <em>Inner Pad (ipad):</em> Constant byte <code>0x36</code> repeated.<br>
        • <em>Outer Pad (opad):</em> Constant byte <code>0x5C</code> repeated.<br>
        • This nested design completely defeats Length Extension Attacks!</p>
      </div>
    </div>`
    },
    right: {
      pageNumber: 36,
      runningHead: 'TOPIC 9 • MODERN HASH EXAM TRAPS',
      content: `
    ${makeHeader(9, 'Hashing Algorithms: Modern Families (SHA-2, SHA-3) & HMAC', 'Password Hashing & DSSSB High-Yield Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">5. Password Storage & Salting</span>
      <p>Fast hashes like SHA-256 must NEVER be used bare for passwords because modern GPUs can compute billions of SHA-256 hashes per second (Rainbow Table attack!). Secure password storage requires:</p>
      <ul class="forensic-list">
        <li><strong>Salt:</strong> A random string added to the password before hashing to defeat precomputed Rainbow Tables.</li>
        <li><strong>Slow Key Derivation Functions (KDFs):</strong> Algorithms deliberately designed to be slow and memory-intensive (e.g., <strong>bcrypt, PBKDF2, Argon2</strong>).</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">6. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>SHA-2 Family (Q81):</strong> Standard includes SHA-224, SHA-256, SHA-384, SHA-512 (Merkle-Damgård design).<br>
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
  // Spread 18: Pages 37 & 38
  {
    spreadId: 18,
    left: {
      pageNumber: 37,
      runningHead: 'TOPIC 10 • CRYPTANALYSIS FOUNDATIONS & GOALS',
      content: `
    ${makeHeader(10, 'Cryptanalysis: Goals, Classical Attack Models & Cryptanalytic Methods', 'Cryptanalysis Foundations & Analytical Goals', 1)}

    <div class="intro-abstract">
      <p><strong>Cryptanalysis</strong> is the science of deciphering ciphertext or breaking cryptographic systems without possessing the secret key. Together, cryptography and cryptanalysis form the broader field of <strong>Cryptology</strong>.</p>
    </div>

    <div class="section-block">
      <span class="section-label">1. The Four Goals of Cryptanalysis (Q91)</span>
      <p>A cryptanalyst attempts to achieve one of four levels of success (from strongest to weakest):</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. Total Break (Complete)</span>
            <span class="statute-tag">Recover Key</span>
          </div>
          <p>The cryptanalyst deduces the secret encryption key, allowing decryption of all past and future communications.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. Global Deduction</span>
            <span class="statute-tag">Equivalent Algorithm</span>
          </div>
          <p>Finds an alternate algorithm that decrypts any ciphertext without ever learning the actual secret key.</p>
        </div>
      </div>
      <div class="statutory-grid" style="margin-top: 10px;">
        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">3. Instance Deduction</span>
            <span class="statute-tag">Single Message</span>
          </div>
          <p>Recovers the plaintext of a single intercepted ciphertext without breaking the master key or other messages.</p>
        </div>
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">4. Information Deduction</span>
            <span class="statute-tag">Partial Clues</span>
          </div>
          <p>Gains partial information or statistical clues about the plaintext or secret key bits.</p>
        </div>
      </div>
    </div>`
    },
    right: {
      pageNumber: 38,
      runningHead: 'TOPIC 10 • THE 4 CLASSICAL ATTACK MODELS',
      content: `
    ${makeHeader(10, 'Cryptanalysis: Goals, Classical Attack Models & Cryptanalytic Methods', 'The 4 Classical Cryptanalytic Attack Models', 2)}

    <div class="section-block">
      <span class="section-label">2. The 4 Attack Models (Memorize for Exam!) (Q92, Q93)</span>
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
            <td><strong>1. Ciphertext-Only Attack (COA)</strong></td>
            <td>Only the intercepted <strong>Ciphertext (C)</strong></td>
            <td>Hardest attack. Attacker uses letter frequency analysis or statistical patterns.</td>
          </tr>
          <tr>
            <td><strong>2. Known-Plaintext Attack (KPA)</strong></td>
            <td>Pairs of known <strong>Plaintext (P) and Ciphertext (C)</strong></td>
            <td>Attacker knows common header strings (e.g., standard email greeting, PNG file headers) and analyzes how they transform.</td>
          </tr>
          <tr>
            <td><strong>3. Chosen-Plaintext Attack (CPA)</strong></td>
            <td>Ability to choose <strong>Plaintext (P)</strong> and get its <strong>Ciphertext (C)</strong></td>
            <td>Attacker feeds chosen text into the encryption device to see how S-boxes and permutations respond (e.g., differential cryptanalysis).</td>
          </tr>
          <tr>
            <td><strong>4. Chosen-Ciphertext Attack (CCA)</strong></td>
            <td>Ability to choose <strong>Ciphertext (C)</strong> and get its decrypted <strong>Plaintext (P)</strong></td>
            <td>Strongest attack model. Attacker probes decryption oracle (e.g., Bleichenbacher attack on RSA, Padding Oracle on CBC).</td>
          </tr>
        </tbody>
      </table>
    </div>

    ${makeContinuation(10, 'Cryptanalysis & Attack Models', 'Mathematical & Side-Channel Attacks', 9)}`
    }
  },

  // Spread 19: Pages 39 & 40
  {
    spreadId: 19,
    left: {
      pageNumber: 39,
      runningHead: 'TOPIC 10 • MATHEMATICAL & SIDE-CHANNEL ATTACKS',
      content: `
    ${makeHeader(10, 'Cryptanalysis: Goals, Classical Attack Models & Cryptanalytic Methods', 'Modern Cryptanalytic Techniques & Side-Channels', 3)}

    <div class="section-block">
      <span class="section-label">3. Advanced Analytical Techniques</span>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Differential Cryptanalysis</span>
            <span class="statute-tag">Biham & Shamir</span>
          </div>
          <p>Analyzes how differences between pairs of plaintexts affect the differences in resulting ciphertexts, revealing S-box behavior.</p>
        </div>
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Linear Cryptanalysis</span>
            <span class="statute-tag">Mitsuru Matsui</span>
          </div>
          <p>Constructs linear mathematical approximations of non-linear cipher operations to recover secret key parity bits.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Side-Channel Attacks (Physical Leakage)</span>
      <p>Instead of attacking the mathematical equations, side-channel attacks measure physical artifacts produced by hardware during encryption:</p>
      <ul class="forensic-list">
        <li><strong>Timing Attacks:</strong> Measuring slight differences in CPU execution time (e.g., string comparison returning early when a character fails).</li>
        <li><strong>Power Analysis:</strong> Measuring micro-fluctuations in electrical current consumed by a smart card chip.</li>
        <li><strong>Electromagnetic / Acoustic:</strong> Capturing radio emissions or ultrasonic sound from CPU capacitors.</li>
      </ul>
    </div>`
    },
    right: {
      pageNumber: 40,
      runningHead: 'TOPIC 10 • CRYPTANALYSIS EXAM TRAPS',
      content: `
    ${makeHeader(10, 'Cryptanalysis: Goals, Classical Attack Models & Cryptanalytic Methods', 'Brute-Force Realities & DSSSB Exam Traps', 4)}

    <div class="section-block">
      <span class="section-label">5. Brute-Force Key Search Reality</span>
      <p>A brute-force attack attempts every possible key until the correct plaintext emerges. Keyspace size doubles with each additional bit:</p>
      <ul class="forensic-list">
        <li><strong>56-bit DES:</strong> $2^{56} \approx 72 \text{ quadrillion keys}$ &rarr; Broken in 22 hours by EFF Deep Crack in 1999!</li>
        <li><strong>128-bit AES:</strong> $2^{128} \approx 3.4 \times 10^{38} \text{ keys}$ &rarr; Would take all the world's supercomputers billions of years to exhaust!</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">6. DSSSB High-Yield Exam Traps</span>
      <div class="exam-trap-card">
        <div class="trap-header">⚡ MUST-REMEMBER EXAM TAKEAWAYS</div>
        <p>• <strong>Ciphertext-Only Attack (COA):</strong> Attacker has ONLY ciphertext (hardest attack).<br>
        • <strong>Known-Plaintext Attack (KPA):</strong> Attacker knows matching plaintext-ciphertext pairs.<br>
        • <strong>Chosen-Plaintext Attack (CPA):</strong> Attacker chooses plaintext and gets ciphertext.<br>
        • <strong>Chosen-Ciphertext Attack (CCA):</strong> Attacker chooses ciphertext and gets decrypted plaintext (e.g., padding oracle).<br>
        • <strong>Side-Channel Attacks:</strong> Exploit physical execution time or power consumption, NOT mathematical flaws.</p>
      </div>
    </div>

    ${makeQuizCTA(10, 'Cryptanalysis & Attack Models', 9)}`
    }
  }
];
