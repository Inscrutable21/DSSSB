const fs = require('fs');
const path = require('path');

const leftContent = `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 1 • Core Information Security Concepts</span>
      <h2>The CIA Triad, AAA Framework & Concepts of Cryptography vs. Steganography</h2>
    </div>
    <p>Information security is the practice of protecting information and information systems from unauthorized access, use, disclosure, disruption, modification, or destruction. Every security protocol, forensic analysis, and defensive architecture rests on the foundational concepts outlined below.</p>

    <div class="section-block">
      <span class="section-label">1. The Confidentiality, Integrity & Availability (CIA) Triad (Q1, Q2, Q3)</span>
      <p>The <strong>CIA Triad</strong> is the universally accepted benchmark model for evaluating information security risk and establishing organizational defenses:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Confidentiality (Q1)</span>
            <span class="statute-tag">Privacy & Secrecy</span>
          </div>
          <p><strong>Core Definition:</strong> Guarantees that sensitive data is accessible and readable <em>strictly by authorized entities</em> and protected from unauthorized disclosure or eavesdropping.</p>
          <p><strong>Everyday Analogy:</strong> A bank safe deposit box or sealed registered letter.</p>
          <p><strong>Enforcement Controls:</strong> Symmetric encryption (AES-256), Asymmetric encryption (RSA), Role-Based Access Control (RBAC), and strict data classification policies.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Integrity (Q2)</span>
            <span class="statute-tag">Accuracy & Completeness</span>
          </div>
          <p><strong>Core Definition:</strong> Guarantees that information has <em>not been altered, tampered with, corrupted, or fabricated</em> by an unauthorized party during transit or storage.</p>
          <p><strong>Everyday Analogy:</strong> A tamper-evident holographic seal on a medicine bottle.</p>
          <p><strong>Enforcement Controls:</strong> Cryptographic Hash Functions (SHA-256, SHA-3), Message Authentication Codes (HMAC), digital signatures, and write-once-read-many (WORM) storage.</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">Availability (Q3)</span>
            <span class="statute-tag">Access on Demand</span>
          </div>
          <p><strong>Core Definition:</strong> Guarantees that computing services, network resources, and systems remain <em>fully operable and accessible</em> to authorized users whenever requested.</p>
          <p><strong>Everyday Analogy:</strong> An emergency power backup generator in a hospital intensive care unit.</p>
          <p><strong>Enforcement Controls:</strong> Hardware redundancy (RAID), high-availability load balancers, off-site disaster recovery backups, UPS power, and robust DDoS mitigation.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Authentication, Authorization & Non-Repudiation (AAA Framework) (Q4, Q5)</span>
      <p>While the CIA Triad sets the security objectives, identity governance relies on the <strong>AAA Architecture</strong> and <strong>Non-Repudiation</strong>:</p>
      
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr>
              <th>Security Component</th>
              <th>Fundamental Question Answered</th>
              <th>How It Is Enforced</th>
              <th>Real-World Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Authentication (AuthN) (Q5)</strong></td>
              <td><em>"Who are you?"</em> (Proof of Identity)</td>
              <td>Passwords, TOTP Authenticator apps, FIDO2 hardware keys, Biometrics</td>
              <td>Entering your PIN and scanning your fingerprint at an ATM</td>
            </tr>
            <tr>
              <td><strong>Authorization (AuthZ) (Q5)</strong></td>
              <td><em>"What are you permitted to do?"</em> (Permissions)</td>
              <td>Access Control Lists (ACLs), Role-Based Access Control (RBAC), sudoers</td>
              <td>A teller can view account balance, but cannot authorize a $100K wire transfer</td>
            </tr>
            <tr>
              <td><strong>Accounting / Auditing (Q5)</strong></td>
              <td><em>"What did you do, and when?"</em> (Traceability)</td>
              <td>Timestamped audit logs, SIEM syslog forwarders, tamper-evident logs</td>
              <td>Security logs recording the exact second an administrator modified a file</td>
            </tr>
            <tr>
              <td><strong>Non-Repudiation (Q4)</strong></td>
              <td><em>"Can you deny doing this?"</em> (Accountability)</td>
              <td>Asymmetric Digital Signatures (RSA / ECDSA) linked to verified identities</td>
              <td>Signing an official digitally signed legal contract using a private key</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="caption"><em>Exam Note on Non-Repudiation (Q4):</em> Symmetric ciphers CANNOT provide non-repudiation because both parties share the exact same key. Non-repudiation strictly requires <strong>Asymmetric Digital Signatures</strong>, where only one party possesses the private signing key!</p>
    </div>

    <div class="section-block">
      <span class="section-label">3. Concepts of Cryptography vs. Steganography</span>
      <p>Both disciplines aim to protect sensitive communications, but through entirely different security paradigms:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Cryptography</span>
            <span class="statute-tag">Secret Writing</span>
          </div>
          <p><strong>Core Concept:</strong> Scrambles the <em>meaning</em> of the message into unreadable ciphertext using mathematical keys.</p>
          <p><strong>Visibility:</strong> An eavesdropper clearly sees that an encrypted communication is occurring, but cannot read the contents without the key.</p>
          <p><strong>Forensic Goal:</strong> Cryptanalysis (breaking the cipher or recovering the key).</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Steganography</span>
            <span class="statute-tag">Covered Writing</span>
          </div>
          <p><strong>Core Concept:</strong> Hides the <em>very existence</em> of the secret message inside an innocent-looking carrier medium (image, audio, video, or TCP packet).</p>
          <p><strong>Visibility:</strong> An observer sees only an ordinary picture or audio track, completely unaware that a secret payload is hidden inside.</p>
          <p><strong>Forensic Goal:</strong> Steganalysis (detecting the presence of hidden data).</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q1–Q5):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Confidentiality (Q1):</strong> Guarantees data is accessible strictly to authorized entities; prevents unauthorized disclosure.</li>
        <li><strong>Integrity (Q2):</strong> Guarantees data is not altered, tampered with, or fabricated during transit or storage.</li>
        <li><strong>Availability (Q3):</strong> Guarantees computing services and networks remain operable and accessible to authorized users upon request.</li>
        <li><strong>Non-Repudiation (Q4):</strong> Ensures a party to a communication cannot falsely deny sending a message or executing an action (achieved via asymmetric digital signatures).</li>
        <li><strong>AAA Framework (Q5):</strong> Stands for <strong>Authentication, Authorization, and Accounting (or Auditing)</strong>.</li>
      </ul>
    </div>`;

const rightContent = `<div class="legal-dispatch-header">
      <span class="badge-primary">Classical Cryptography & Cryptanalysis</span>
      <h2>Kerckhoffs's Principle, One-Time Pad Perfect Secrecy & Cryptanalysis Methods</h2>
    </div>
    <p>Modern cryptography evolved from classical pen-and-paper ciphers. Understanding why classical systems failed and how modern mathematical standards were born is fundamental to cracking the DSSSB examination.</p>

    <div class="section-block">
      <span class="section-label">1. Kerckhoffs's Principle & Shannon's Maxim (Q6)</span>
      <p>In 1883, Dutch cryptographer Auguste Kerckhoffs published his landmark military cryptography treatise. His second principle remains the cornerstone of all modern security standards:</p>
      
      <div class="alert-box">
        <strong>Kerckhoffs's Principle (Q6):</strong>
        <p style="font-size: 0.96rem; font-weight: 600; color: #1e3a8a; margin: 4px 0;">"A cryptographic system must remain secure even if everything about the design, algorithm, and mathematical implementation is public knowledge—security must depend exclusively on the secrecy of the cryptographic key!"</p>
        <p>In 1949, Claude Shannon rephrased this as <strong>Shannon's Maxim</strong>: <em>"The enemy knows the system."</em></p>
        <p><strong>Why Obscurity Fails:</strong> Relying on keeping the algorithm secret ("Security through Obscurity") is dangerous because secret algorithms always leak through reverse-engineering or insider threats. Modern ciphers (AES, RSA, SHA-3) are completely public; they are secure because of their massive key spaces and mathematical hardness!</p>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. The One-Time Pad (OTP) & Shannon's Perfect Secrecy (Q7, Q8)</span>
      <p>Invented by Gilbert Vernam and Joseph Mauborgne in 1917, the <strong>One-Time Pad (Vernam Cipher)</strong> is the only cipher in mathematical history proven to be unbreakable.</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Perfect Secrecy (Q7)</span>
            <span class="statute-tag">Information-Theoretic</span>
          </div>
          <p>Claude Shannon mathematically proved that the One-Time Pad provides <strong>Information-Theoretic Security (Perfect Secrecy)</strong>. An adversary with infinite time and infinite computing power cannot extract any information from the ciphertext, provided three mandatory conditions are met:</p>
          <ol style="margin: 4px 0 0 16px; padding: 0;">
            <li>The key must be <strong>truly random</strong> (hardware/quantum noise).</li>
            <li>The key must be <strong>at least as long as the message</strong>.</li>
            <li>The key must <strong>NEVER be reused</strong>, even partially!</li>
          </ol>
        </div>

        <div class="statute-card card-penalty">
          <div class="statute-header">
            <span class="statute-section">The Practical Flaw (Q8)</span>
            <span class="statute-tag badge-penalty">Key Distribution Problem</span>
          </div>
          <p><strong>Why isn't OTP used on the Internet? (Q8):</strong> The <strong>Key Distribution Problem</strong>!</p>
          <p>If Alice wants to send a 1 GB video file to Bob using an OTP, she must first securely transport a 1 GB truly random key to Bob! If Alice already possessed a secure channel capable of safely delivering a 1 GB key, she could have simply sent the original 1 GB video across that channel without needing encryption in the first place!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. Classical Ciphers & Cryptanalysis (Q9, Q10)</span>
      <p><strong>Cryptanalysis</strong> is the science and art of decoding ciphertexts without access to the secret key, or uncovering flaws in cryptographic protocols.</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">The Vigenère Cipher (Q9)</span>
            <span class="statute-tag">Polyalphabetic Grid</span>
          </div>
          <p>A polyalphabetic substitution cipher that uses a repeating keyword to shift alphabet characters using a 26&times;26 square grid called a <strong>tabula recta</strong>.</p>
          <p>Because the same plaintext letter (e.g., 'E') encrypts to different ciphertext letters depending on the key letter, it flattens standard single-letter frequency spikes, fooling basic Caesar-shift frequency analysis.</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">Kasiski Examination (Q10)</span>
            <span class="statute-tag">Friedrich Kasiski (1863)</span>
          </div>
          <p>Developed by Friedrich Kasiski (and Charles Babbage), this technique breaks repeating-key polyalphabetic ciphers like Vigenère.</p>
          <p><strong>How it Works:</strong> An attacker searches for repeated strings of characters in the ciphertext and measures the distances between them. The <strong>Greatest Common Divisor (GCD)</strong> of these distances reveals the <strong>keyword length</strong>, breaking the cipher down into simple monoalphabetic Caesar ciphers!</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q6–Q10):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Kerckhoffs's Principle (Q6):</strong> System must remain secure even if the algorithm is public knowledge; security relies strictly on the secret key ("The enemy knows the system").</li>
        <li><strong>One-Time Pad Secrecy (Q7):</strong> Mathematically achieves <strong>Perfect Secrecy</strong> (information-theoretic security) if key is truly random, never reused, and equal to message length.</li>
        <li><strong>OTP Commercial Limitation (Q8):</strong> The <strong>Key Distribution Problem</strong> (securely exchanging a key as long as the message requires an equally capable secure channel).</li>
        <li><strong>Vigenère Cipher (Q9):</strong> Polyalphabetic substitution cipher using a repeating keyword and a 26&times;26 <strong>tabula recta</strong> grid.</li>
        <li><strong>Kasiski Examination (Q10):</strong> Breaks polyalphabetic ciphers by calculating the <strong>Greatest Common Divisor (GCD) of distances</strong> between repeated ciphertext sequences to find key length.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 1 (Q1–Q10)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 high-yield questions on CIA Triad, AAA, Kerckhoffs, OTP Secrecy & Kasiski Cryptanalysis.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(0)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q1–Q10) &rarr;
      </button>
    </div>`;

// Update book5_data.js
const bookPath = path.resolve(__dirname, '../book5_data.js');
global.window = {};
require(bookPath);

// Spread index 0 is Spread 1 (Pages 1 and 2)
window.book5Data.spreads[0].left.content = leftContent;
window.book5Data.spreads[0].right.content = rightContent;
window.book5Data.spreads[0].left.runningHead = "CH. 1 • CIA TRIAD, AAA & CRYPTO VS STEGO";
window.book5Data.spreads[0].right.runningHead = "CH. 1 • KERCKHOFFS, OTP & CRYPTANALYSIS";

const updatedJs = '// Book 5 Data: Information Security, Applied Cryptography & VAPT\nwindow.book5Data = ' + JSON.stringify(window.book5Data, null, 2) + ';\n';
fs.writeFileSync(bookPath, updatedJs, 'utf8');
console.log('Successfully updated book5_data.js spread 0 (Pages 1 & 2)!');

