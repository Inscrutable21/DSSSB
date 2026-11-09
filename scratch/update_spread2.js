const fs = require('fs');

const leftContent = `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 2 • Symmetric Cryptography</span>
      <h2>Stream vs. Block Ciphers, Feistel Networks & DES/3DES Deep-Dive</h2>
    </div>
    <p>In symmetric cryptography, both the sender and the receiver share the exact same secret key to encrypt (lock) and decrypt (unlock) messages. Symmetric ciphers come in two major designs: <strong>Stream Ciphers</strong> and <strong>Block Ciphers</strong>.</p>

    <div class="section-block">
      <span class="section-label">1. Stream Ciphers vs. Block Ciphers (Q11)</span>
      <p>How data flows through the encryption engine defines the cipher family:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Stream Ciphers</span>
            <span class="statute-tag">Bit-by-Bit Flow</span>
          </div>
          <p><strong>Everyday Analogy:</strong> A continuous stream of water from a garden hose.</p>
          <p><strong>How it Works:</strong> Encrypts plaintext <em>bit-by-bit</em> (or byte-by-byte) in real time by XORing each bit with a continuous pseudorandom keystream generator: <code>Ciphertext = Plaintext XOR Keystream</code>.</p>
          <p><strong>Key Advantages:</strong> Ultra-low latency, zero buffering needed. Perfect for live voice calls, video streaming, and low-memory chips.</p>
          <p><strong>Famous Examples:</strong> <strong>RC4</strong> (now obsolete due to statistical biases) and <strong>ChaCha20</strong> (RFC 8439, fast and timing-attack resistant).</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Block Ciphers</span>
            <span class="statute-tag">Fixed Chunks</span>
          </div>
          <p><strong>Everyday Analogy:</strong> Packing cargo into standard shipping containers.</p>
          <p><strong>How it Works:</strong> Groups plaintext into <em>fixed-size blocks</em> (e.g., 64-bit or 128-bit blocks) and scrambles each entire chunk through multiple repetitive mathematical rounds.</p>
          <p><strong>Key Advantages:</strong> High diffusion, ideal for encrypting static files, databases, network packets, and disk volumes.</p>
          <p><strong>Famous Examples:</strong> <strong>DES</strong> (64-bit blocks), <strong>3DES</strong> (64-bit blocks), and <strong>AES</strong> (128-bit blocks).</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">Shannon's Two Core Principles of Cipher Design</span>
      <p>Every secure block cipher relies on Claude Shannon's twin pillars:</p>
      <ul>
        <li><strong>Confusion:</strong> Hides the relationship between the secret key and the ciphertext (accomplished using non-linear Substitution Boxes or <em>S-Boxes</em>). An attacker cannot guess the key even if they inspect millions of ciphertext bits.</li>
        <li><strong>Diffusion:</strong> Spreads the influence of a single plaintext bit across many ciphertext bits (the <em>Avalanche Effect</em>). Changing just 1 bit in plaintext should flip roughly 50% of the ciphertext bits.</li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">2. Data Encryption Standard (DES) Architecture (Q12, Q13)</span>
      <p>Adopted by the US Government in 1977 as FIPS PUB 46 (based on IBM's Lucifer cipher):</p>
      <ul>
        <li><strong>Fixed Block Size (Q12):</strong> Operates on strictly <strong>64-bit blocks</strong> of plaintext.</li>
        <li><strong>Effective Key Length (Q12):</strong> You input a 64-bit key, but <strong>8 bits are discarded as parity check bits</strong> (bits 8, 16, 24, 32, 40, 48, 56, 64). The actual effective key length is strictly <strong>56 bits</strong> (2<sup>56</sup> or ~72 quadrillion keys).</li>
        <li><strong>Why DES is Obsolete:</strong> In 1999, the EFF built the custom "Deep Crack" machine that cracked a 56-bit DES key in just 22 hours using brute force.</li>
        <li><strong>Feistel Network Architecture (Q13):</strong> DES executes exactly <strong>16 Feistel rounds</strong>.
          <br><em>How it works:</em> The 64-bit block is split into two 32-bit halves: Left (L) and Right (R). In each round, the right half is transformed through a round function (expanded from 32 to 48 bits, XORed with a round subkey, compressed through 8 S-boxes from 48 to 32 bits, and permuted) and XORed into the left half, then swapped.
          <br><em>Major Benefit:</em> Decryption uses the <em>exact same hardware circuit</em>—you simply apply the 16 round keys in reverse order (Key 16 down to Key 1)!
        </li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">3. Double DES (2DES) & The Meet-in-the-Middle Trap (Q14)</span>
      <p>When 56-bit DES became vulnerable, engineers attempted to encrypt data twice with two separate 56-bit keys: <code>Ciphertext = Encrypt(K2, Encrypt(K1, Plaintext))</code>.</p>
      <div class="alert-box">
        <strong>The Exam Trap:</strong> Engineers expected 2DES to double the security exponent to 2<sup>112</sup>. But in 1977, Diffie and Hellman proved Double DES is broken by the <strong>Meet-in-the-Middle Attack</strong>:
        <ul>
          <li><strong>Step 1 (Forward):</strong> The attacker encrypts Plaintext forward with all 2<sup>56</sup> possible values of K1 and saves the results in a lookup table.</li>
          <li><strong>Step 2 (Backward):</strong> The attacker decrypts Ciphertext backward with all 2<sup>56</sup> possible values of K2 and checks if any result matches the forward lookup table.</li>
          <li><strong>Result:</strong> When forward encryption matches backward decryption, the attacker has cracked both keys simultaneously!</li>
          <li><strong>Total Effort Required (Q14):</strong> Only <code>2<sup>56</sup> + 2<sup>56</sup> = 2<sup>57</sup> operations</code> (NOT 2<sup>112</sup>!). This drops effective security from 112 bits down to only <strong>57 bits</strong>, rendering Double DES completely unsafe!</li>
        </ul>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">4. Triple DES (3DES / TDEA)</span>
      <p>To overcome the Meet-in-the-Middle attack, 3DES uses <strong>EDE (Encrypt-Decrypt-Encrypt)</strong> with 3 keys:</p>
      <p><code>Ciphertext = Encrypt(K3, Decrypt(K2, Encrypt(K1, Plaintext)))</code></p>
      <ul>
        <li><strong>Why Decrypt in the Middle?</strong> Backward compatibility! If an old system sets <code>K1 = K2 = K3</code>, the middle decryption cancels the first encryption, behaving exactly like standard single DES.</li>
        <li><strong>3-Key 3DES:</strong> Uses 3 distinct keys (168-bit total key size) providing <strong>112 bits of effective security</strong> against meet-in-the-middle.</li>
        <li><strong>Sweet32 Flaw (CVE-2016-2183):</strong> Because 3DES still uses a tiny 64-bit block size, after encrypting 2<sup>32</sup> blocks (32 GB), Birthday Paradox block collisions occur in CBC mode. NIST officially retired 3DES in 2023.</li>
      </ul>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q11–Q14):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Stream vs. Block (Q11):</strong> Stream encrypts continuous bit-by-bit/byte-by-byte via XOR keystream generator. Block encrypts fixed-size discrete chunks.</li>
        <li><strong>DES Specifications (Q12):</strong> Fixed <strong>64-bit block size</strong> and <strong>56-bit effective key length</strong> (64 input bits minus 8 parity check bits).</li>
        <li><strong>DES Architecture (Q13):</strong> Exactly <strong>16 Feistel rounds</strong> using 8 S-Boxes (6 bits input &rarr; 4 bits output).</li>
        <li><strong>Meet-in-the-Middle Attack (Q14):</strong> Encrypts forward from plaintext and decrypts backward from ciphertext simultaneously; breaks Double DES in <strong>2<sup>57</sup> operations</strong> (reducing 112 bits down to 57 bits).</li>
      </ul>
    </div>`;

const rightContent = `<div class="legal-dispatch-header">
      <span class="badge-primary">FIPS 197 Standard & Operational Modes</span>
      <h2>AES Architecture, Round Steps & Modes of Operation (ECB vs. CBC)</h2>
    </div>
    <p>Selected by NIST in 2001 after an open international competition won by Joan Daemen and Vincent Rijmen (Rijndael), the <strong>Advanced Encryption Standard (AES / FIPS 197)</strong> replaced DES as the global standard. Unlike DES, AES is a <strong>Substitution-Permutation Network (SPN)</strong> operating on a fixed 128-bit block.</p>

    <div class="section-block">
      <span class="section-label">1. AES Key Sizes, Block Size & Number of Rounds (Q15, Q16)</span>
      <p>In AES, the <strong>block size is ALWAYS fixed at 128 bits</strong> (16 bytes arranged in a 4&times;4 square grid of bytes). AES supports three key sizes, and the number of transformation rounds increases with the key length:</p>
      
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr>
              <th>AES Variant</th>
              <th>Key Length (Q15)</th>
              <th>Block Size (Q15)</th>
              <th>Number of Rounds (Q16)</th>
              <th>Exam Memory Tip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>AES-128</strong></td>
              <td>128 bits (16 bytes)</td>
              <td>128 bits</td>
              <td><strong>10 rounds</strong></td>
              <td>Base standard (10 rounds)</td>
            </tr>
            <tr>
              <td><strong>AES-192</strong></td>
              <td>192 bits (24 bytes)</td>
              <td>128 bits</td>
              <td><strong>12 rounds</strong></td>
              <td>Key +64 bits &rarr; +2 rounds</td>
            </tr>
            <tr>
              <td><strong>AES-256</strong></td>
              <td>256 bits (32 bytes)</td>
              <td>128 bits</td>
              <td><strong>14 rounds</strong></td>
              <td>Key +64 bits &rarr; +2 rounds (Top Secret)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="caption"><em>Crucial Rule:</em> Block size NEVER changes in AES—it is always 128 bits. Only the key size (128, 192, 256) and the round count (10, 12, 14) change!</p>
    </div>

    <div class="section-block">
      <span class="section-label">2. The 4 Step Transformations Inside Each AES Round (Q17, Q18)</span>
      <p>Inside each round (except the final round), the 4&times;4 byte grid passes through four distinct steps:</p>
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">1. SubBytes (Q17)</span>
            <span class="statute-tag">Non-Linear Confusion</span>
          </div>
          <p><strong>What it does:</strong> Replaces every individual byte with a corresponding byte from a lookup table called an <strong>S-Box</strong> (derived from multiplicative inverse over Galois Field GF(2<sup>8</sup>)).</p>
          <p><strong>Exam Rule:</strong> SubBytes is the <strong>sole non-linear transformation</strong> in the entire AES algorithm, providing vital <em>Confusion</em>.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">2. ShiftRows</span>
            <span class="statute-tag">Linear Permutation</span>
          </div>
          <p><strong>What it does:</strong> Cyclically shifts bytes to the left in each row: Row 0 shifts 0 bytes, Row 1 shifts 1 byte, Row 2 shifts 2 bytes, Row 3 shifts 3 bytes.</p>
          <p><strong>Role:</strong> Ensures bytes from different columns are scrambled together.</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">3. MixColumns (Q18)</span>
            <span class="statute-tag">Linear Diffusion</span>
          </div>
          <p><strong>What it does:</strong> Multiplies each 4-byte column by a fixed matrix over Galois Field GF(2<sup>8</sup>) so that all 4 bytes in a column are blended together.</p>
          <p><strong>🔥 TOP EXAM TRAP (Q18):</strong> MixColumns provides linear <em>Diffusion</em> across columns and is <strong>SKIPPED (omitted) in the final round</strong> (Round 10, 12, or 14)!</p>
        </div>

        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">4. AddRoundKey</span>
            <span class="statute-tag">Key Mixing</span>
          </div>
          <p><strong>What it does:</strong> Performs a simple bitwise XOR between the 128-bit state array and the current 128-bit Round Subkey generated by the AES Key Schedule.</p>
          <p><strong>Role:</strong> Injects the secret key into the scrambled data.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. Block Cipher Modes of Operation: ECB vs. CBC (Q19, Q20)</span>
      <p>How a block cipher encrypts long messages consisting of multiple blocks is governed by its <strong>Mode of Operation</strong>:</p>

      <div class="statutory-grid">
        <div class="statute-card card-penalty">
          <div class="statute-header">
            <span class="statute-section">ECB (Electronic Codebook) (Q19)</span>
            <span class="statute-tag badge-penalty">Insecure / Pattern Leaker</span>
          </div>
          <p><strong>How it works:</strong> Each 128-bit plaintext block is encrypted <em>independently</em> using the secret key, with <strong>NO Initialization Vector (IV)</strong>.</p>
          <p><strong>The Critical Flaw:</strong> Identical plaintext blocks produce <strong>identical ciphertext blocks</strong>! If you encrypt a bitmap image of the Linux Penguin (Tux), the encrypted ciphertext still clearly displays the penguin's outline because color regions produce repeated identical blocks.</p>
          <p><strong>Exam Rule (Q19):</strong> ECB encrypts each block independently without an IV, leaking underlying data and image patterns. <em>Never use ECB for data larger than one block!</em></p>
        </div>

        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">CBC (Cipher Block Chaining) (Q20)</span>
            <span class="statute-tag badge-teal">Chained & Randomized</span>
          </div>
          <p><strong>How it works:</strong> Introduces dependency (chaining) between blocks:</p>
          <ul>
            <li><strong>First Block (Q20):</strong> Plaintext block 1 is XORed with a random, unpredictable <strong>Initialization Vector (IV)</strong> before being encrypted: <code>C1 = Encrypt(P1 XOR IV)</code>.</li>
            <li><strong>Subsequent Blocks:</strong> Every later plaintext block is XORed with the <em>previous ciphertext block</em> before encryption: <code>C<sub>i</sub> = Encrypt(P<sub>i</sub> XOR C<sub>i-1</sub>)</code>.</li>
          </ul>
          <p><strong>Key Advantage:</strong> Even if two plaintext blocks are 100% identical, their ciphertext blocks look completely random and distinct, completely destroying visual patterns!</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q15–Q20):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>AES Specifications (Q15):</strong> Block size is strictly <strong>128 bits</strong> (16 bytes); supported key sizes are <strong>128, 192, and 256 bits</strong>.</li>
        <li><strong>AES Rounds (Q16):</strong> AES-128 = <strong>10 rounds</strong>; AES-192 = <strong>12 rounds</strong>; AES-256 = <strong>14 rounds</strong>.</li>
        <li><strong>SubBytes Step (Q17):</strong> Sole <strong>non-linear transformation</strong> in AES; replaces each byte using an S-Box lookup table to provide <em>Confusion</em>.</li>
        <li><strong>MixColumns Step (Q18):</strong> Blends 4-byte columns using matrix multiplication over GF(2<sup>8</sup>) for <em>Diffusion</em>; <strong>omitted (skipped) in the final round</strong>.</li>
        <li><strong>ECB Mode Flaw (Q19):</strong> Encrypts each block <strong>independently without an IV</strong>, leaking data and visual patterns.</li>
        <li><strong>CBC Mode Randomization (Q20):</strong> First plaintext block is XORed with a random, unpredictable <strong>Initialization Vector (IV)</strong> before encryption.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 2 (Q11–Q20)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 high-yield questions on DES, 2DES Meet-in-the-Middle, AES-128/192/256 & ECB vs CBC.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(1)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q11–Q20) &rarr;
      </button>
    </div>`;

// Update book5_data.js
const path = require('path');
const bookPath = path.resolve(__dirname, '../book5_data.js');
global.window = {};
require(bookPath);

window.book5Data.spreads[1].left.content = leftContent;
window.book5Data.spreads[1].right.content = rightContent;

const updatedJs = '// Book 5 Data: Information Security, Applied Cryptography & VAPT\nwindow.book5Data = ' + JSON.stringify(window.book5Data, null, 2) + ';\n';
fs.writeFileSync(bookPath, updatedJs, 'utf8');
console.log('Successfully updated book5_data.js spread 1!');
