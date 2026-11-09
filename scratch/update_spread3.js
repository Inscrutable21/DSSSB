const fs = require('fs');
const path = require('path');

const leftContent = `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 3 • Cipher Modes & AEAD</span>
      <h2>Block Cipher Modes, Padding Oracles & Authenticated Encryption (GCM / XTS)</h2>
    </div>
    <p>A block cipher (like AES) can only encrypt a single 128-bit block at a time. To securely encrypt files, emails, or network traffic of arbitrary length, block ciphers require a <strong>Mode of Operation</strong>.</p>

    <div class="section-block">
      <span class="section-label">1. CBC Mode & The Padding Oracle Attack (Q21)</span>
      <p>In <strong>Cipher Block Chaining (CBC)</strong>, each block of plaintext is XORed with the preceding ciphertext block before encryption. Because CBC requires input to be a strict multiple of 16 bytes (128 bits), it appends <strong>PKCS#7 padding</strong> to fill the final block.</p>
      
      <div class="alert-box">
        <strong>The Exploit — Padding Oracle Attack (Q21):</strong>
        <p><strong>Everyday Analogy:</strong> Imagine a warehouse guard who doesn't tell you what is inside a locked safe, but if you guess the combination incorrectly, he says: <em>"Wrong box dimensions"</em> vs <em>"Wrong security code"</em>. By observing that subtle difference, you can systematically deduce the contents!</p>
        <p><strong>How it works:</strong> If a web server returns different error messages or timings for invalid padding versus valid padding (a "Padding Oracle"), an attacker manipulates the ciphertext bytes and sends them to the server. By observing the error codes, the attacker can decrypt the entire ciphertext <strong>byte-by-byte without ever knowing the secret key</strong>!</p>
        <p><strong>Famous Real-World Exploits:</strong> Demonstrated by Juliano Rizzo and Thai Duong in <strong>BEAST</strong>, and by Google security researchers in the famous <strong>POODLE</strong> exploit against SSLv3/TLS.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. CTR (Counter Mode) & Multi-Threaded Parallelism (Q22)</span>
      <p><strong>Everyday Analogy:</strong> A multi-lane highway where 8 toll booths process cars simultaneously instead of making everyone wait in a single line.</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">How CTR Works</span>
            <span class="statute-tag">Block to Stream</span>
          </div>
          <p>Converts a block cipher into a stream cipher. Instead of encrypting the plaintext directly, the cipher encrypts an incrementing counter value: <code>Keystream = Encrypt(Nonce + Counter)</code>. The keystream is then XORed with the plaintext.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Superpower: Parallelism (Q22)</span>
            <span class="statute-tag">Multi-Core Fast</span>
          </div>
          <p>Because Counter 1, Counter 2, and Counter 3 do not depend on each other, modern multi-core CPUs can encrypt and decrypt <strong>all blocks simultaneously in parallel</strong>! It also allows instant random-access read/write without decrypting earlier blocks.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. AEAD & Galois/Counter Mode (AES-GCM) (Q23, Q24)</span>
      <p>Standard encryption only provides <em>confidentiality</em> (eavesdroppers can't read it), but it does <strong>not</strong> prevent an active attacker from flipping bits in transit (tampering)!</p>
      <ul>
        <li><strong>What is AEAD? (Q23):</strong> <strong>Authenticated Encryption with Associated Data (AEAD)</strong> provides <strong>Confidentiality, Integrity, AND Authenticity</strong> verification in a single cryptographic pass (e.g., AES-GCM, ChaCha20-Poly1305).
          <br><em>Associated Data (AAD):</em> Unencrypted headers (like packet IP addresses) are verified for integrity without being encrypted.
        </li>
        <li><strong>AES-GCM Architecture (Q24):</strong> Combines <strong>CTR mode encryption</strong> with universal polynomial hashing over Galois Field GF(2<sup>128</sup>) called <strong>GHASH</strong>. It produces a 128-bit <strong>Authentication Tag</strong>. If even 1 bit of the message or header is modified in transit, tag verification immediately fails and the message is rejected!
        </li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">4. XTS-AES for Disk Storage Encryption (Q25)</span>
      <p>Standardized under <strong>IEEE 1619</strong>, <strong>XTS-AES</strong> is the worldwide standard specifically designed for sector-level <strong>Full Disk Encryption (FDE)</strong> (used in <strong>BitLocker, macOS FileVault, and Linux LUKS</strong>).</p>
      <ul>
        <li><strong>Dual-Key Tweak Architecture:</strong> Uses two distinct 128-bit or 256-bit AES keys. Key 2 computes a "tweak" value from the disk sector's Logical Block Address (LBA), and Key 1 performs the block encryption.</li>
        <li><strong>Why this matters:</strong> If you write an identical file of all zeros to Sector 10 and Sector 500, they will encrypt to completely different, unrecognizable ciphertexts.</li>
        <li><strong>Ciphertext Stealing (CTS):</strong> Encrypts partial sectors without adding padding or inflating data size, preserving exact 512-byte or 4096-byte disk sector boundaries.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q21–Q25):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Padding Oracle Attack (Q21):</strong> Exploits CBC-mode PKCS#7 error responses (used in <strong>BEAST and POODLE</strong>) to decrypt ciphertexts byte-by-byte without the key.</li>
        <li><strong>CTR Mode (Q22):</strong> Encrypts sequential counter values; converts block cipher to stream cipher; enables <strong>multi-threaded parallel processing</strong>.</li>
        <li><strong>AEAD Definition (Q23):</strong> Cryptographic mode providing <strong>Confidentiality, Integrity, AND Authenticity</strong> in a single pass while authenticating unencrypted headers.</li>
        <li><strong>AES-GCM (Q24):</strong> Combines CTR mode with <strong>GHASH</strong> over GF(2<sup>128</sup>) to generate a 128-bit authentication tag.</li>
        <li><strong>XTS-AES (Q25):</strong> Standardized by <strong>IEEE 1619</strong> for disk storage (BitLocker, FileVault, LUKS) using sector tweak values and ciphertext stealing.</li>
      </ul>
    </div>`;

const rightContent = `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 4 • Public-Key Cryptography</span>
      <h2>Asymmetric Cryptography: RSA Architecture, Padding (OAEP) & Diffie-Hellman DLP</h2>
    </div>
    <p>Unlike symmetric cryptography where both parties share one secret key, <strong>Asymmetric (Public-Key) Cryptography</strong> uses a mathematically linked <strong>Key Pair</strong>: a <strong>Public Key</strong> (freely shared with the world to encrypt messages) and a <strong>Private Key</strong> (kept strictly secret to decrypt messages).</p>

    <div class="section-block">
      <span class="section-label">1. The RSA Cryptosystem & Prime Factorization Problem (Q26)</span>
      <p>Invented in 1977 by Ron Rivest, Adi Shamir, and Leonard Adleman, RSA is the most widely deployed public-key algorithm in history.</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">The Core Foundation (Q26)</span>
            <span class="statute-tag">One-Way Trapdoor</span>
          </div>
          <p>RSA's security is fundamentally based on the <strong>computational difficulty of factoring the product of two large prime numbers (Prime Factorization Problem)</strong>.</p>
          <p>Multiplying two 1024-bit primes (<code>n = p &times; q</code>) takes a computer mere microseconds. But finding <code>p</code> and <code>q</code> from <code>n</code> would take billions of years using the fastest supercomputers!</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Euler's Totient &phi;(n) (Q27)</span>
            <span class="statute-tag">Key Math</span>
          </div>
          <p>To compute the private key, RSA calculates Euler's Totient Function:</p>
          <p style="text-align: center; font-size: 1.05rem; font-weight: 700; color: #1e3a8a; margin: 8px 0;">&phi;(n) = (p - 1)(q - 1)</p>
          <p>This counts how many positive integers less than <code>n</code> share no common factors with <code>n</code>. Without knowing <code>p</code> and <code>q</code>, computing &phi;(n) is mathematically impossible!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Why the Standard Public Exponent is e = 65,537 (Q28)</span>
      <p>In modern RSA key generation, the public exponent is universally chosen as <strong>e = 65,537</strong> (known as the Fermat prime <strong>F<sub>4</sub> = 2<sup>16</sup> + 1</strong>, hex: <code>0x10001</code>).</p>
      <ul>
        <li><strong>Low Hamming Weight:</strong> In binary, 65,537 is <code>10000000000000001</code>. It contains only <strong>two 1-bits</strong>!</li>
        <li><strong>High Speed:</strong> Modular exponentiation takes only 17 multiplications and squarings, making encryption and signature verification blazing fast.</li>
        <li><strong>Immunity to Attacks:</strong> Unlike tiny exponents like <code>e = 3</code> (which are vulnerable to Coppersmith's small-exponent attack), 65,537 is large enough to resist all known mathematical shortcut attacks.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">3. RSA-OAEP Padding Scheme (Q29)</span>
      <p><strong>Never use "textbook" RSA without padding!</strong> Because raw RSA is deterministic, encrypting the word "YES" always yields the exact same ciphertext, making it vulnerable to chosen-ciphertext attacks.</p>
      <div class="alert-box">
        <strong>Mandatory Standard — RSA-OAEP (Q29):</strong>
        <p><strong>Optimal Asymmetric Encryption Padding (OAEP)</strong> is a Feistel-based padding scheme that introduces cryptographic randomness and an all-or-nothing transform before encryption.</p>
        <p>OAEP makes RSA <strong>probabilistically secure</strong>, completely neutralizing Bleichenbacher's and Coppersmith's chosen-ciphertext attacks.</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Diffie-Hellman Key Exchange & The DLP Problem (Q30)</span>
      <p>Published in 1976 by Whitfield Diffie and Martin Hellman, this groundbreaking protocol allows two parties (Alice and Bob) to establish a shared secret key over an insecure, public Wi-Fi or Internet connection without any prior secrets.</p>
      <ul>
        <li><strong>The Mathematical Hard Problem (Q30):</strong> Classic Diffie-Hellman relies on the computational difficulty of the <strong>Discrete Logarithm Problem (DLP) over a finite prime field</strong>.</li>
        <li><strong>How it works:</strong> Given a base generator <code>g</code>, prime <code>p</code>, and public value <code>A = g<sup>a</sup> mod p</code>, an attacker listening on the wire cannot calculate Alice's secret exponent <code>a</code> in reasonable time!</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q26–Q30):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>RSA Hard Problem (Q26):</strong> Security is based on the <strong>Prime Factorization Problem</strong> (factoring product of two large prime numbers).</li>
        <li><strong>Euler's Totient (Q27):</strong> For two primes <em>p</em> and <em>q</em>, <strong>&phi;(n) = (p - 1)(q - 1)</strong>.</li>
        <li><strong>Public Exponent e (Q28):</strong> Universally chosen as <strong>65,537</strong> (Fermat prime F<sub>4</sub> = 2<sup>16</sup> + 1); low Hamming weight yields fast encryption without small-exponent flaws.</li>
        <li><strong>RSA-OAEP Padding (Q29):</strong> <strong>Optimal Asymmetric Encryption Padding</strong> is mandatory in modern RSA to prevent chosen-ciphertext attacks.</li>
        <li><strong>Diffie-Hellman DLP (Q30):</strong> Based on the <strong>Discrete Logarithm Problem (DLP)</strong> over a finite prime field.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 3 (Q21–Q30)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 high-yield questions on Padding Oracle, CTR/GCM, XTS-AES, RSA & Diffie-Hellman DLP.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(2)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q21–Q30) &rarr;
      </button>
    </div>`;

// Update book5_data.js
const bookPath = path.resolve(__dirname, '../book5_data.js');
global.window = {};
require(bookPath);

// Spread index 2 is Spread 3 (Pages 5 and 6)
window.book5Data.spreads[2].left.content = leftContent;
window.book5Data.spreads[2].right.content = rightContent;
window.book5Data.spreads[2].left.runningHead = "CH. 3 • CIPHER MODES, AEAD & STORAGE ENCRYPTION";
window.book5Data.spreads[2].right.runningHead = "CH. 4 • PUBLIC KEY CRYPTO, RSA & DIFFIE-HELLMAN";

const updatedJs = '// Book 5 Data: Information Security, Applied Cryptography & VAPT\nwindow.book5Data = ' + JSON.stringify(window.book5Data, null, 2) + ';\n';
fs.writeFileSync(bookPath, updatedJs, 'utf8');
console.log('Successfully updated book5_data.js spread 2 (Pages 5 & 6)!');

