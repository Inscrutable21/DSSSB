const spreads = [];

// ============================================================================
// TOPIC 1: Confidentiality, Integrity, and Availability (CIA) Triad
// Spread 0: Pages 1 & 2 | Questions Q1–Q10
// ============================================================================
spreads.push({
  spreadId: "b5-s0",
  left: {
    pageNumber: 1,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 1: CIA Triad",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 1 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">Confidentiality, Integrity, and Availability (CIA) Triad</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: Kyun Zaroori Hai & The 3 Core Pillars</h3>
    </div>

    <div class="inter-card">
      <h4>1. Introduction: CIA Triad Kyun Zaroori Hai? (Why It Matters)</h4>
      <p>Cyber Security me koi bhi system secure hai ya nahi, ye check karne ke liye <strong>CIA Triad</strong> sabse basic benchmark hai. Agar kisi organization ka sensitive data leak ho jaye, koi usme chhedchhad (tamper) kar de, ya system crash hokar band ho jaye—to poori security fail ho jati hai. DSSSB exam me CIA Triad ke definitions aur violation attacks par direct questions aate hain.</p>
    </div>

    <div class="inter-card">
      <h4>2. Teen Mukhya Pillars (The Three Pillars)</h4>
      <ul>
        <li><strong>Confidentiality (Gopneeyata):</strong> Data sirf unhi authorized logon ko dikhna chahiye jinke paas permission ho.
          <br><em>Real-world Example:</em> Bank account balance sirf account holder dekh sake, koi third party nahi.
          <br><em>Defense:</em> Symmetric/Asymmetric Encryption (AES-256), Strong Access Control Lists (ACL).
          <br><em>Violation Attacks:</em> Network Eavesdropping, Packet Sniffing, Unauthorized Data Exfiltration.</li>
        <li><strong>Integrity (Akhandata / Pavitrata):</strong> Data transmission ya storage ke dauran kisi bhi tarah se modify, alter ya delete nahi hona chahiye.
          <br><em>Real-world Example:</em> Agar bank se ₹500 transfer kiye, to raste me badal kar ₹50,000 na ho jaye.
          <br><em>Defense:</em> Cryptographic Hashes (SHA-256), Digital Signatures, Checksums.
          <br><em>Violation Attacks:</em> Man-in-the-Middle (MitM) Tampering, Unauthorized Database Injection.</li>
        <li><strong>Availability (Uplabdhta):</strong> Jab bhi kisi authorized user ko data ya service chahiye, wo bina rukawat accessible honi chahiye.
          <br><em>Real-world Example:</em> Tatkal ticket booking ke waqt IRCTC portal ka active aur responsive rehna.
          <br><em>Defense:</em> Redundant Servers, Failover Clustering, Load Balancers, Cloudflare DDoS Protection.
          <br><em>Violation Attacks:</em> DoS/DDoS Attacks, Ransomware Encryption, Physical Cable Destruction.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 2,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 1: CIA Triad",
    content: `
    <div class="inter-card">
      <h4>3. Security Controls Matrix & Kerckhoffs's Principle</h4>
      <p>System ko protect karne ke liye teen tarah ke controls lagaye jate hain:</p>
      <ul>
        <li><strong>Preventive Controls:</strong> Attack ko hone se pehle hi rokna (e.g., Firewalls, MFA, Encryption).</li>
        <li><strong>Detective Controls:</strong> Agar koi ghus jaye to turant pakadna (e.g., IDS/IPS, Audit Logging, SIEM).</li>
        <li><strong>Corrective Controls:</strong> Attack ke baad system ko wapas normal karna (e.g., Backup Restore, Incident Patching).</li>
      </ul>
      <div class="callout-box">
        <strong>Kerckhoffs's Principle (Golden Rule of Security):</strong>
        <p>Ek cryptosystem secure rehna chahiye chahe attacker ko algorithm ka poora internal design pata ho! Security sirf aur sirf <strong>Key ki secrecy</strong> par depend karni chahiye. "Security through obscurity" (algorithm chupana) hamesha fail hota hai.</p>
      </div>
    </div>

    <div class="inter-card">
      <h4>4. DSSSB Exam Traps & High-Yield Summary</h4>
      <table class="inter-table">
        <thead>
          <tr>
            <th>Security Pillar</th>
            <th>Mukhya Target</th>
            <th>Primary Defense Tool</th>
            <th>DSSSB Favorite Attack</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Confidentiality</strong></td>
            <td>Data Chupana (Privacy)</td>
            <td>AES Encryption, Access Control</td>
            <td>Sniffing, Data Leakage</td>
          </tr>
          <tr>
            <td><strong>Integrity</strong></td>
            <td>Chhedchhad Rokna (Authenticity)</td>
            <td>SHA-256 Hashes, Digital Signatures</td>
            <td>MitM, Message Alteration</td>
          </tr>
          <tr>
            <td><strong>Availability</strong></td>
            <td>24/7 Access Dena (Uptime)</td>
            <td>Redundancy, Load Balancers</td>
            <td>SYN Flood DDoS, Ransomware</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 1: Q1–Q10) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 1 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 1: CIA Triad?</strong>
          <span>Apni taiyari test karein 10 high-yield DSSSB pattern questions ke saath (Q1–Q10).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="0" onclick="window.openMCQForSpread(0)">
        Practice Topic 1 Quiz (Q1–Q10) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 2: Authentication, Authorization & Non-repudiation
// Spread 1: Pages 3 & 4 | Questions Q11–Q20
// ============================================================================
spreads.push({
  spreadId: "b5-s1",
  left: {
    pageNumber: 3,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 2: AAA & Non-repudiation",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 2 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">Authentication, Authorization, Non-repudiation</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: AAA Framework & 3 MFA Factors</h3>
    </div>

    <div class="inter-card">
      <h4>1. Introduction: AAA Framework Kyun Zaroori Hai?</h4>
      <p>Security me sirf password dalna kaafi nahi hota. Kis user ko kya permission milni chahiye aur usne system me kya kaam kiya—iska complete audit trail hona zaroori hai. Iske liye <strong>AAA Framework</strong> use hota hai:</p>
      <ul>
        <li><strong>Authentication (Pahchan):</strong> "Aap kaun hain?" User apni identity prove karta hai (e.g., Username/Password).</li>
        <li><strong>Authorization (Adhikar):</strong> "Aapko kya karne ki permission hai?" Role aur privilege check hota hai (e.g., Admin vs Read-only user).</li>
        <li><strong>Accounting (Audit Trail):</strong> "Aapne kab aur kya kiya?" Har action log file me record hota hai forensic analysis ke liye.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>2. Multi-Factor Authentication (MFA) ke 3 Classic Factors</h4>
      <p>Security tab strong mani jati hai jab kam se kam <strong>do alag categories</strong> ke factors combine hon:</p>
      <ol>
        <li><strong>Something You Know:</strong> User ko jo yaad ho (e.g., Password, PIN, Secret Question answer).</li>
        <li><strong>Something You Have:</strong> User ke paas jo physical device/token ho (e.g., OTP on Smartphone, Hardware YubiKey, Smart Card).</li>
        <li><strong>Something You Are:</strong> User ke biological traits (e.g., Fingerprint, Retina scan, Face recognition).</li>
      </ol>
      <div class="callout-box">
        <strong>DSSSB Exam Trap:</strong> Password + PIN do factors NAHI hain! Dono ek hi category ("Something You Know") me aate hain. Asli 2FA ke liye Password + OTP ya Password + Fingerprint hona chahiye.
      </div>
    </div>
    `
  },
  right: {
    pageNumber: 4,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 2: AAA & Non-repudiation",
    content: `
    <div class="inter-card">
      <h4>3. Access Control Models (DAC, MAC, RBAC, ABAC)</h4>
      <ul>
        <li><strong>DAC (Discretionary Access Control):</strong> Resource ka owner khud tay karta hai ki kisko access dena hai (e.g., Windows file sharing permissions).</li>
        <li><strong>MAC (Mandatory Access Control):</strong> Operating System security labels aur clearance level ke base par access enforce karta hai. User ise override nahi kar sakta (e.g., Military Bell-LaPadula model, SELinux).</li>
        <li><strong>RBAC (Role-Based Access Control):</strong> User ke job role ke hisab se permissions assign hoti hain (e.g., Doctor, Nurse, Billing Clerk). Corporate me sabse common.</li>
        <li><strong>ABAC (Attribute-Based Access Control):</strong> Contextual attributes ke base par dynamic decision (e.g., User location = Office IP, Time = 9 AM to 5 PM).</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Non-repudiation & Indian IT Act 2000</h4>
      <p><strong>Non-repudiation</strong> ka matlab hai ki sender ye jhooth nahi bol sakta ki <em>"Maine ye transaction ya message nahi bheja!"</em></p>
      <ul>
        <li><strong>Technical Mechanism:</strong> Sender apne <strong>Private Key</strong> se digital signature generate karta hai. Kyunki private key sirf sender ke paas thi, isliye wahi sole author prove hota hai.</li>
        <li><strong>Legal Mandate (IT Act Section 3 & 3A):</strong> Indian Information Technology Act me Digital Signature aur Electronic Signature ko legal validity di gayi hai, jisse court me non-repudiation legally binding hota hai.</li>
      </ul>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 2: Q11–Q20) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 2 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 2: AAA & Non-repudiation?</strong>
          <span>Apne concepts lock karein 10 high-yield DSSSB pattern questions ke saath (Q11–Q20).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="1" onclick="window.openMCQForSpread(1)">
        Practice Topic 2 Quiz (Q11–Q20) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 3: Concepts of Cryptography & Steganography
// Spread 2: Pages 5 & 6 | Questions Q21–Q30
// ============================================================================
spreads.push({
  spreadId: "b5-s2",
  left: {
    pageNumber: 5,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 3: Crypto vs Stego",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 3 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">concepts of Cryptography & Steganography</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: Fundamental Differences & LSB Mechanism</h3>
    </div>

    <div class="inter-card">
      <h4>1. Fundamental Difference: Chhupane Ka Tareeqa</h4>
      <p>Donon techniques secret communication ke liye use hoti hain, lekin dono ka approach bilkul alag hai:</p>
      <ul>
        <li><strong>Cryptography (Art of Secret Writing):</strong> Message ka <strong>Meaning (Arth)</strong> chhupata hai. Plaintext ko scrambled ciphertext me badla jata hai. Sabko pata hota hai ki koi secret message ja raha hai, par bina key ke padh nahi sakte.</li>
        <li><strong>Steganography (Covert Communication):</strong> Message ka <strong>Existence (Astitva)</strong> hi chhupa deta hai! Secret data ko kisi normal cover media (image, audio, video) ke andar embed kar diya jata hai, taaki kisi ko shaq hi na ho.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>2. Spatial Domain: LSB (Least Significant Bit) Insertion</h4>
      <p>Image steganography me sabse popular aur basic method <strong>LSB substitution</strong> hai:</p>
      <ul>
        <li>Image ke har pixel me color values hoti hain (Red, Green, Blue bytes: 0 se 255).</li>
        <li>Byte ke sabse aakhri bit (Bit 0) ko <em>Least Significant Bit</em> kehte hain. Iski numerical value sirf 1 hoti hai.</li>
        <li>Agar hum LSB ko secret data bit se replace kar dein, to color me itna minor change aata hai ki <strong>Human Visual System (HVS)</strong> use pakad hi nahi pata.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 6,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 3: Crypto vs Stego",
    content: `
    <div class="inter-card">
      <h4>3. LSB Capacity Formula & Transform Domain</h4>
      <p><strong>DSSSB Numerical Formula:</strong> Kisi 24-bit RGB image me 1-bit LSB steganography ki maximum theoretical capacity:</p>
      <div class="callout-box">
        <strong>Capacity (Bytes) = (Width &times; Height &times; 3) / 8</strong>
        <p><em>Example:</em> 1920 &times; 1080 Full HD Image me:
        <br>Total color bytes = 1920 &times; 1080 &times; 3 = 6,220,800 bytes.
        <br>Max hidden payload = 6,220,800 bits = <strong>777,600 Bytes (~777.6 KB)</strong>!</p>
      </div>
      <p><strong>Transform Domain (DCT/DWT):</strong> LSB method image compression (JPEG compression) survive nahi kar pata. Isliye advanced steganography me frequency domain jaise <strong>Discrete Cosine Transform (DCT)</strong> use hota hai jo image ke middle-frequency coefficients me data embed karta hai.</p>
    </div>

    <div class="inter-card">
      <h4>4. Digital Watermarking: Robust vs Fragile</h4>
      <table class="inter-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Robust Watermark</th>
            <th>Fragile Watermark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Main Purpose</strong></td>
            <td>Copyright & Ownership claim karna</td>
            <td>Tamper detection & Data Integrity</td>
          </tr>
          <tr>
            <td><strong>Image Editing Par</strong></td>
            <td>Crop, resize ya filter ke baad bhi rehta hai</td>
            <td>Thoda sa bhi badlaav aane par destroy ho jata hai</td>
          </tr>
          <tr>
            <td><strong>Forensic Role</strong></td>
            <td>Origin track karna (Who owns it?)</td>
            <td>Evidence integrity prove karna (Is it altered?)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 3: Q21–Q30) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 3 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 3: Crypto & Steganography?</strong>
          <span>Apne knowledge ko verify karein 10 high-yield DSSSB pattern questions ke saath (Q21–Q30).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="2" onclick="window.openMCQForSpread(2)">
        Practice Topic 3 Quiz (Q21–Q30) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 4: Symmetric: Stream vs Block & DES
// Spread 3: Pages 7 & 8 | Questions Q31–Q40
// ============================================================================
spreads.push({
  spreadId: "b5-s3",
  left: {
    pageNumber: 7,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 4: Symmetric & DES",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 4 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">Symmetric and Asymmetric algorithms: Symmetric (Stream vs Block & DES)</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: Stream vs Block & Feistel Structure</h3>
    </div>

    <div class="inter-card">
      <h4>1. Symmetric Encryption: Single Secret Key</h4>
      <p>Symmetric encryption me sender aur receiver <strong>dono exact same secret key</strong> use karte hain. Iska sabse bada fayda ye hai ki ye bahut fast hota hai aur hardware/software dono me efficiently implement ho jata hai.</p>
    </div>

    <div class="inter-card">
      <h4>2. Stream Ciphers vs Block Ciphers</h4>
      <ul>
        <li><strong>Stream Ciphers:</strong> Plaintext ko ek-ek bit ya ek-ek byte karke continuous stream me encrypt karte hain using pseudo-random keystream (Bitwise XOR).
          <br><em>Fayda:</em> Zero latency, low memory footprint.
          <br><em>Examples:</em> RC4, ChaCha20, GSM A5/1. Use in real-time audio/video streaming.</li>
        <li><strong>Block Ciphers:</strong> Plaintext ko fixed-size blocks me baant kar encrypt karte hain.
          <br><em>Examples:</em> DES (64-bit block), AES (128-bit block). Storage aur file encryption ke liye best.</li>
      </ul>
      <div class="callout-box">
        <strong>Shannon ke 2 Fundamental Principles:</strong>
        <br>&bull; <strong>Confusion:</strong> Ciphertext aur Key ke beech ka relation itna complex banana ki key guess na ho sake (achieved by Substitution).
        <br>&bull; <strong>Diffusion:</strong> Agar plaintext ka 1 bit bhi change ho, to pura ciphertext statistically scatter ho jaye (achieved by Permutation/Transposition).
      </div>
    </div>
    `
  },
  right: {
    pageNumber: 8,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 4: Symmetric & DES",
    content: `
    <div class="inter-card">
      <h4>3. DES (Data Encryption Standard) Architecture</h4>
      <p>DES ko IBM aur NSA ne 1977 me standard banaya tha. Iski internal working DSSSB me bar-bar aati hai:</p>
      <ul>
        <li><strong>Block Size:</strong> 64 bits.</li>
        <li><strong>Key Size Trap:</strong> Total key 64 bits ki hoti hai, par har 8th bit parity check hoti hai. Isliye <strong>effective key length sirf 56 bits</strong> hoti hai!</li>
        <li><strong>Feistel Network:</strong> 64-bit block ko Left (32-bit) aur Right (32-bit) me divide karke <strong>16 rounds</strong> chalaye jate hain.</li>
        <li><strong>S-Boxes (Substitution Boxes):</strong> DES me 8 S-boxes hote hain jo 6-bit input ko 4-bit output me convert karte hain. Ye DES ka ek-matra non-linear component hai jo actual security deta hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Double-DES Meet-in-the-Middle & Triple-DES</h4>
      <ul>
        <li><strong>Double-DES Flaw:</strong> Agar hum do 56-bit keys se do baar DES karein ($2^{112}$ security expect karke), to <strong>Meet-in-the-Middle Attack</strong> lagakar attacker ise sirf <strong>2<sup>57</sup> operations</strong> me tod sakta hai! Isliye Double-DES kabhi use nahi hota.</li>
        <li><strong>Triple-DES (3DES):</strong> EDE mode (Encrypt-Decrypt-Encrypt) use karta hai. Iska effective key length 112 ya 168 bits hota hai. Lekin 64-bit small block size ki wajah se ise NIST ne 2023 me retire kar diya hai.</li>
      </ul>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 4: Q31–Q40) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 4 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 4: Stream vs Block & DES?</strong>
          <span>10 high-yield DSSSB pattern questions ke saath practice karein (Q31–Q40).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="3" onclick="window.openMCQForSpread(3)">
        Practice Topic 4 Quiz (Q31–Q40) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 5: Symmetric: AES & Modes of Operation
// Spread 4: Pages 9 & 10 | Questions Q41–Q50
// ============================================================================
spreads.push({
  spreadId: "b5-s4",
  left: {
    pageNumber: 9,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 5: AES & Modes",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 5 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">Symmetric and Asymmetric algorithms: Symmetric (AES & Modes of Operation)</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: AES (Rijndael) & The 4 Transformations</h3>
    </div>

    <div class="inter-card">
      <h4>1. AES (Advanced Encryption Standard) Basics</h4>
      <p>NIST ne 2001 me DES ko replace karne ke liye <strong>Rijndael</strong> algorithm ko AES banaya. Ye aaj ka global gold standard hai:</p>
      <ul>
        <li><strong>Architecture:</strong> Ye Feistel network NAHI hai; ye <strong>Substitution-Permutation Network (SPN)</strong> hai. Data ko 4&times;4 State Matrix (16 bytes = 128 bits) me process kiya jata hai.</li>
        <li><strong>Block Size:</strong> Fixed <strong>128 bits</strong> (hamesha!).</li>
        <li><strong>Key Sizes & Rounds (DSSSB Memorize!):</strong>
          <br>&bull; AES-128: 128-bit key &rarr; <strong>10 rounds</strong>.
          <br>&bull; AES-192: 192-bit key &rarr; <strong>12 rounds</strong>.
          <br>&bull; AES-256: 256-bit key &rarr; <strong>14 rounds</strong>.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>2. Har Round ke 4 Step Transformations</h4>
      <ol>
        <li><strong>SubBytes:</strong> Rijndael S-box se har byte ko non-linearly replace karna (Confusion).</li>
        <li><strong>ShiftRows:</strong> Rows ko cyclically left shift karna (Row 0: 0 byte, Row 1: 1 byte, Row 2: 2 bytes, Row 3: 3 bytes).</li>
        <li><strong>MixColumns:</strong> Columns ko Galois Field $GF(2^8)$ matrix multiplication se mix karna (Diffusion).</li>
        <li><strong>AddRoundKey:</strong> State matrix ko round subkey ke saath bitwise XOR karna.</li>
      </ol>
      <div class="callout-box">
        <strong>Examiner's Favorite Trap:</strong> AES ke <strong>aakhri round (final round) me MixColumns step OMIT (hata) diya jata hai!</strong> Aakhri round me sirf SubBytes, ShiftRows, aur AddRoundKey hote hain.
      </div>
    </div>
    `
  },
  right: {
    pageNumber: 10,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 5: AES & Modes",
    content: `
    <div class="inter-card">
      <h4>3. Block Cipher Modes of Operation</h4>
      <p>Block cipher sirf 128 bits ko encrypt karta hai. Badi files encrypt karne ke liye modes use hote hain:</p>
      <ul>
        <li><strong>ECB (Electronic Codebook):</strong> Har block ko akele encrypt karta hai.
          <br><em>Dangerous Flaw:</em> Identical plaintext blocks hamesha identical ciphertext blocks banate hain. Pattern leak ho jata hai (ECB Penguin image flaw)! Security me banned hai.</li>
        <li><strong>CBC (Cipher Block Chaining):</strong> Har block previous block ke ciphertext ke saath XOR hota hai pehle. First block ke liye random <strong>IV (Initialization Vector)</strong> zaroori hota hai. Serial hota hai, parallel nahi chal sakta.</li>
        <li><strong>CTR (Counter Mode):</strong> Incrementing counter ko encrypt karke plaintext se XOR karta hai. Block cipher ko stream cipher me badal deta hai. High speed parallel encryption support karta hai.</li>
        <li><strong>GCM (Galois/Counter Mode):</strong> AEAD (Authenticated Encryption with Associated Data). Ye Confidentiality ke saath-saath built-in Integrity (Auth Tag) bhi deta hai. TLS 1.3 me standard hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Summary Table: Modes Comparison</h4>
      <table class="inter-table">
        <thead>
          <tr>
            <th>Mode</th>
            <th>IV Zaroori?</th>
            <th>Parallel Encryption?</th>
            <th>Security Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>ECB</strong></td>
            <td>Nahi</td>
            <td>Haan</td>
            <td>Insecure (Pattern Leak)</td>
          </tr>
          <tr>
            <td><strong>CBC</strong></td>
            <td>Haan (Unpredictable)</td>
            <td>Nahi (Sequential)</td>
            <td>Moderate (Vulnerable to Padding Oracle)</td>
          </tr>
          <tr>
            <td><strong>CTR</strong></td>
            <td>Haan (Nonce + Counter)</td>
            <td>Haan (Fastest)</td>
            <td>High (Stream-like)</td>
          </tr>
          <tr>
            <td><strong>GCM</strong></td>
            <td>Haan (Unique Nonce)</td>
            <td>Haan (High-speed)</td>
            <td>Industry Standard (AEAD)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 5: Q41–Q50) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 5 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 5: AES & Cipher Modes?</strong>
          <span>Check your understanding with 10 high-yield DSSSB questions (Q41–Q50).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="4" onclick="window.openMCQForSpread(4)">
        Practice Topic 5 Quiz (Q41–Q50) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 6: Asymmetric: Public-Key & RSA
// Spread 5: Pages 11 & 12 | Questions Q51–Q60
// ============================================================================
spreads.push({
  spreadId: "b5-s5",
  left: {
    pageNumber: 11,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 6: Asymmetric & RSA",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 6 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">Symmetric and Asymmetric algorithms: Asymmetric (Public-Key & RSA)</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: Public-Key Cryptography & RSA Mathematics</h3>
    </div>

    <div class="inter-card">
      <h4>1. Asymmetric Encryption Kyun Chahiye? (The Key Distribution Problem)</h4>
      <p>Symmetric ciphers fast hote hain, par sabse bada issue ye tha: <em>"Secret key receiver tak bina intercept huye kaise pahunchayein?"</em> Is problem ko solve karne ke liye <strong>Public-Key Cryptography</strong> invent hui.</p>
      <ul>
        <li>Har user ke paas mathematically linked <strong>Key Pair</strong> hota hai:
          <br>&bull; <strong>Public Key:</strong> Sabke saath open share ki ja sakti hai (Phonebook ki tarah).
          <br>&bull; <strong>Private Key:</strong> Sirf user apne paas secret rakhta hai.</li>
        <li><strong>Golden Rule:</strong> Agar message ko Public Key se encrypt kiya, to wo sirf aur sirf matching Private Key se hi decrypt ho sakta hai!</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>2. RSA Algorithm (Rivest, Shamir, Adleman - 1977)</h4>
      <p>RSA ki security <strong>Prime Factorization</strong> ki hardness par depend karti hai:</p>
      <ul>
        <li>Do bade prime numbers $p$ aur $q$ ko multiply karke $n = p \times q$ banana bahut aasan hai.</li>
        <li>Lekin sirf $n$ dekh kar wapas $p$ aur $q$ nikalna computers ke liye mathematically infeasible hai!</li>
        <li><strong>Euler's Totient Function:</strong> $\phi(n) = (p - 1)(q - 1)$.</li>
        <li>Public Exponent $e$ aisa chuna jata hai ki $\gcd(e, \phi(n)) = 1$ (commonly $e = 65537$).</li>
        <li>Private Exponent $d$ calculate hota hai: $d \times e \equiv 1 \pmod{\phi(n)}$.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 12,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 6: Asymmetric & RSA",
    content: `
    <div class="inter-card">
      <h4>3. RSA Formulas & Hybrid Cryptography</h4>
      <div class="callout-box">
        <strong>RSA Core Formulas:</strong>
        <br>&bull; <strong>Encryption:</strong> Ciphertext $C = M^e \pmod n$ (using Public Key $(e, n)$).
        <br>&bull; <strong>Decryption:</strong> Plaintext $M = C^d \pmod n$ (using Private Key $(d, n)$).
      </div>
      <h4>Hybrid Cryptography (Real-World Implementation):</h4>
      <p>RSA mathematically heavy aur slow hota hai. Isliye real internet protocols (HTTPS, SSH) me pure RSA se data encrypt nahi hota! Balki <strong>Hybrid approach</strong> use hoti hai:</p>
      <ol>
        <li>Actual data (web page, file) ko fast <strong>AES-256 Symmetric Key</strong> se encrypt kiya jata hai.</li>
        <li>Us short AES key ko <strong>RSA Public Key</strong> se encrypt karke receiver ko bhej diya jata hai.</li>
        <li>Receiver apni RSA Private Key se pehle AES key nikalta hai, fir data decrypt kar leta hai!</li>
      </ol>
    </div>

    <div class="inter-card">
      <h4>4. DSSSB Exam Quick Revision Points</h4>
      <ul>
        <li><strong>Security Foundation:</strong> Factoring large integers into primes.</li>
        <li><strong>Minimum Recommended Key Size:</strong> Aaj ke time kam se kam <strong>2048 bits</strong> (1024 bits ab breakable hai).</li>
        <li><strong>Padding Mandate:</strong> Textbook RSA deterministic hota hai; attacks se bachne ke liye <strong>OAEP (Optimal Asymmetric Encryption Padding)</strong> lagana compulsory hai.</li>
      </ul>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 6: Q51–Q60) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 6 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 6: Public-Key & RSA?</strong>
          <span>Practice 10 high-yield DSSSB pattern questions (Q51–Q60).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="5" onclick="window.openMCQForSpread(5)">
        Practice Topic 6 Quiz (Q51–Q60) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 7: Asymmetric: Diffie-Hellman & ECC
// Spread 6: Pages 13 & 14 | Questions Q61–Q70
// ============================================================================
spreads.push({
  spreadId: "b5-s6",
  left: {
    pageNumber: 13,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 7: DH & ECC",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 7 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">Symmetric and Asymmetric algorithms: Asymmetric (Diffie-Hellman & ECC)</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: DH Key Exchange & Discrete Log Problem</h3>
    </div>

    <div class="inter-card">
      <h4>1. Diffie-Hellman (DH) Key Exchange (1976)</h4>
      <p><strong>Crucial Fact:</strong> Diffie-Hellman koi data encryption algorithm NAHI hai! Ye ek <strong>Key Agreement Protocol</strong> hai jisse do parties insecure public network par baith kar bina koi secret bataye ek common shared secret key generate kar leti hain.</p>
      <ul>
        <li><strong>Underlying Hard Problem:</strong> <strong>Discrete Logarithm Problem (DLP)</strong> in modular arithmetic. $g^a \pmod p$ calculate karna aasan hai, par result dekh kar $a$ nikalna impossible hai.</li>
        <li><strong>Working:</strong>
          <br>&bull; Alice private secret $a$ chunti hai aur public $A = g^a \pmod p$ bhejti hai.
          <br>&bull; Bob private secret $b$ chunta hai aur public $B = g^b \pmod p$ bhejta hai.
          <br>&bull; Shared Secret = $K = B^a \pmod p = A^b \pmod p = g^{ab} \pmod p$.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>2. MitM Attack & Perfect Forward Secrecy (PFS)</h4>
      <ul>
        <li><strong>MitM Vulnerability:</strong> DH me authentication nahi hota! Bich me attacker (Eve) baith kar Alice aur Bob dono ke saath alag-alag DH key bana sakti hai. <em>Mitigation:</em> DH public keys ko Digital Certificate se sign karna.</li>
        <li><strong>PFS (Perfect Forward Secrecy):</strong> Agar <strong>Ephemeral DH (DHE ya ECDHE)</strong> use ho, to har session ke liye fresh temporary keys banti hain. Agar 5 saal baad server ki main private key leak bhi ho jaye, to bhi purana traffic decrypt nahi kiya ja sakta!</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 14,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 7: DH & ECC",
    content: `
    <div class="inter-card">
      <h4>3. Elliptic Curve Cryptography (ECC)</h4>
      <p>RSA ki sabse badi kami ye hai ki high security ke liye keys bahut badi (3072 ya 4096 bits) karni padti hain, jisse mobile aur smart cards slow ho jate hain. Iska modern solution <strong>ECC</strong> hai:</p>
      <ul>
        <li><strong>Math Foundation:</strong> Elliptic curve equation: <strong>y<sup>2</sup> = x<sup>3</sup> + ax + b (mod p)</strong>.</li>
        <li><strong>Hard Problem:</strong> <em>Elliptic Curve Discrete Logarithm Problem (ECDLP)</em> - Point multiplication $Q = d \times P$ aasan hai, par $Q$ aur $P$ se scalar $d$ nikalna impossible hai.</li>
        <li><strong>Efficiency Advantage:</strong> Chhoti key size me RSA jaisi same security! Isliye mobile devices, Bitcoin, WhatsApp, aur TLS 1.3 me ECC chhayi hui hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Key Size Equivalence Table (DSSSB Favorite)</h4>
      <table class="inter-table">
        <thead>
          <tr>
            <th>Security Level (Bits)</th>
            <th>Symmetric Key (AES)</th>
            <th>RSA Key Size</th>
            <th>ECC Key Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>80 bits (Legacy)</td>
            <td>2-Key 3DES</td>
            <td>1024 bits (Broken)</td>
            <td>160 bits</td>
          </tr>
          <tr>
            <td><strong>112 bits</strong></td>
            <td>3DES</td>
            <td><strong>2048 bits</strong></td>
            <td><strong>224 bits</strong></td>
          </tr>
          <tr>
            <td><strong>128 bits (Standard)</strong></td>
            <td><strong>AES-128</strong></td>
            <td><strong>3072 bits</strong></td>
            <td><strong>256 bits (P-256)</strong></td>
          </tr>
          <tr>
            <td><strong>256 bits (Top Secret)</strong></td>
            <td><strong>AES-256</strong></td>
            <td><strong>15360 bits</strong></td>
            <td><strong>521 bits</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 7: Q61–Q70) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 7 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 7: Diffie-Hellman & ECC?</strong>
          <span>Lock your score with 10 high-yield DSSSB pattern questions (Q61–Q70).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="6" onclick="window.openMCQForSpread(6)">
        Practice Topic 7 Quiz (Q61–Q70) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 8: Hashing Algorithms: Properties & Collision
// Spread 7: Pages 15 & 16 | Questions Q71–Q80
// ============================================================================
spreads.push({
  spreadId: "b5-s7",
  left: {
    pageNumber: 15,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 8: Hashing & Collisions",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 8 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">Hashing Algorithms: Properties, Avalanche & Collision Resistances</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: The 3 Core Axioms & Avalanche Effect</h3>
    </div>

    <div class="inter-card">
      <h4>1. Cryptographic Hash Function: Digital Fingerprint</h4>
      <p>Hash function kisi bhi arbitrary size ke data ko ek <strong>fixed-length unique string (digest)</strong> me convert karta hai. Hash functions one-way hote hain (inhe decrypt nahi kiya ja sakta).</p>
    </div>

    <div class="inter-card">
      <h4>2. Hash Function ke 3 Fundamental Axioms</h4>
      <ol>
        <li><strong>Pre-image Resistance (One-Way Property):</strong> Agar aapke paas hash output $H$ hai, to reverse engineering karke original message $M$ dhoondhna mathematically impossible hona chahiye: $h(M) = H$.</li>
        <li><strong>Second Pre-image Resistance (Weak Collision Resistance):</strong> Agar ek specific message $M_1$ pata hai, to koi doosra different message $M_2$ dhoondhna impossible ho jiska hash exact same ho: $h(M_1) = h(M_2)$.</li>
        <li><strong>Collision Resistance (Strong Collision Resistance):</strong> Poori duniya me koi bhi aise do alag-alag messages $M_1 \neq M_2$ dhoondhna impossible ho jinka hash digest match kar jaye.</li>
      </ol>
      <div class="callout-box">
        <strong>Avalanche Effect (Strict Avalanche Criterion):</strong>
        <p>Agar input file me sirf <strong>ek single bit</strong> bhi change kiya jaye, to output hash digest ke <strong>kam se kam 50% bits randomly flip</strong> ho jane chahiye! Isse kisi ko pattern ka andaza nahi lagta.</p>
      </div>
    </div>
    `
  },
  right: {
    pageNumber: 16,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 8: Hashing & Collisions",
    content: `
    <div class="inter-card">
      <h4>3. Birthday Paradox & Mathematical Collision Search</h4>
      <p>Probability theory ke hisab se 23 logon ke group me 50% chance hota hai ki do logon ka birthday same din pade. Isi tarah:</p>
      <ul>
        <li>Kisi $N$-bit hash function me pre-image todne ke liye $2^N$ operations lagte hain.</li>
        <li>Lekin <strong>Collision dhoondhne ke liye sirf 2<sup>N/2</sup> operations</strong> lagte hain!</li>
        <li>Isliye agar MD5 128-bit ka hai, to usme collision dhoondhne ke liye sirf $2^{64}$ operations chahiye the, jiske chalte MD5 2004 me cryptographically break ho gaya.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Forensic Evidence & Broken Hashes</h4>
      <ul>
        <li><strong>MD5 (128 bits):</strong> Collision resistance broken. Digital signature me strictly banned hai. Sirf non-cryptographic checksums me chal sakta hai.</li>
        <li><strong>SHA-1 (160 bits):</strong> Google ne 2017 me SHAttered attack se collision dikha diya. Deprecated.</li>
        <li><strong>Forensic Best Practice (Indian Evidence Act / BSA):</strong> Crime scene se hard drive image banate waqt dual-hash (e.g., <strong>MD5 + SHA-256</strong> ek saath) calculate karke chain of custody log me likha jata hai taaki court me tampering prove na ho sake.</li>
      </ul>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 8: Q71–Q80) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 8 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 8: Hashing & Avalanche?</strong>
          <span>Test your skills with 10 high-yield DSSSB pattern questions (Q71–Q80).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="7" onclick="window.openMCQForSpread(7)">
        Practice Topic 8 Quiz (Q71–Q80) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 9: Modern Hashes: SHA-2, SHA-3 & HMAC
// Spread 8: Pages 17 & 18 | Questions Q81–Q90
// ============================================================================
spreads.push({
  spreadId: "b5-s8",
  left: {
    pageNumber: 17,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 9: Modern Hashes & HMAC",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 9 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">Hashing Algorithms: Modern Families (SHA-2, SHA-3) & HMAC</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: SHA-2 Merkle-Damgård vs SHA-3 Sponge</h3>
    </div>

    <div class="inter-card">
      <h4>1. SHA-2 Family (NIST Standard)</h4>
      <p>MD5 aur SHA-1 ke fail hone ke baad NSA ne <strong>SHA-2</strong> design kiya. Ye traditional <em>Merkle-Damgård construction</em> par based hai:</p>
      <ul>
        <li><strong>SHA-256:</strong> 512-bit message blocks, 32-bit words, <strong>64 rounds</strong>. Output size: 256 bits.</li>
        <li><strong>SHA-512:</strong> 1024-bit message blocks, 64-bit words, <strong>80 rounds</strong>. Output size: 512 bits.</li>
        <li><em>Weakness:</em> Merkle-Damgård structure ki wajah se ye <strong>Length-Extension Attacks</strong> ke liye vulnerable hota hai agar seedha secret prefix hashing ($H(K \parallel M)$) me use kiya jaye.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>2. SHA-3 (Keccak) & The Sponge Construction</h4>
      <p>NIST ne 2015 me <strong>Keccak</strong> ko SHA-3 chuna. Iski sabse badi khoobi ye hai ki ye Merkle-Damgård use nahi karta, balki <strong>Sponge Construction</strong> use karta hai:</p>
      <ul>
        <li><strong>Absorbing Phase:</strong> Input data blocks ko internal state (1600 bits) ke rate part me XOR karke absorb kiya jata hai.</li>
        <li><strong>Squeezing Phase:</strong> Internal state se desired length ka hash digest nichod kar (squeeze) nikal liya jata hai.</li>
        <li><em>Advantage:</em> SHA-2 se bilkul alag internal math hone ke karan ye Length-Extension attacks se immune hai.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 18,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 9: Modern Hashes & HMAC",
    content: `
    <div class="inter-card">
      <h4>3. HMAC (Hash-based Message Authentication Code)</h4>
      <p>Plain hash sirf Integrity deta hai, ye nahi batata ki message kisne bheja. <strong>HMAC</strong> ek shared secret key use karke <strong>Integrity + Origin Authentication</strong> dono provide karta hai:</p>
      <div class="callout-box">
        <strong>HMAC Formula:</strong>
        <p><strong>HMAC(K, M) = H((K &oplus; opad) &parallel; H((K &oplus; ipad) &parallel; M))</strong></p>
        <p>Yahan <em>ipad</em> (inner pad = 0x36) aur <em>opad</em> (outer pad = 0x5C) do fixed constants hain. Nested hashing ki wajah se Length-Extension attacks poori tarah block ho jate hain.</p>
      </div>
    </div>

    <div class="inter-card">
      <h4>4. Password Storage: Salting & Slow KDFs</h4>
      <ul>
        <li><strong>The Salt:</strong> Har user ke password ke saath ek unique random string (Salt) jodna compulsory hai. Isse pre-computed <strong>Rainbow Table Attacks</strong> fail ho jate hain.</li>
        <li><strong>Slow KDFs (Key Derivation Functions):</strong> Passwords ko kabhi fast hashes (MD5, SHA-256) se hash nahi karna chahiye! Kyunki GPU per second billions of hashes try kar sakti hai. Hamesha memory-hard, slow algorithms use karein: <strong>bcrypt, PBKDF2, Argon2</strong> (Password Hashing Competition winner).</li>
      </ul>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 9: Q81–Q90) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 9 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 9: SHA-2, SHA-3 & HMAC?</strong>
          <span>Solve 10 high-yield DSSSB pattern questions (Q81–Q90).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="8" onclick="window.openMCQForSpread(8)">
        Practice Topic 9 Quiz (Q81–Q90) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 10: Cryptanalysis: Goals & Attack Models
// Spread 9: Pages 19 & 20 | Questions Q91–Q100
// ============================================================================
spreads.push({
  spreadId: "b5-s9",
  left: {
    pageNumber: 19,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 10: Cryptanalysis",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 10 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">Cryptanalysis: Goals, Classical Attack Models & Cryptanalytic Methods</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: Cryptanalysis Goals & The 4 Attack Models</h3>
    </div>

    <div class="inter-card">
      <h4>1. Cryptanalysis ke Goals (DSSSB Hierarchy)</h4>
      <p>Cryptanalysis ka maksad kisi cryptosystem ki kamzori dhoondh kar secret recover karna hota hai:</p>
      <ol>
        <li><strong>Total Break (Sabse Bada Loss):</strong> Attacker ne secret key recover kar li. Ab wo sab kuch decrypt kar sakta hai.</li>
        <li><strong>Universal Deduction:</strong> Attacker ne ek equivalent algorithm dhundh liya jo bina key ke kisi bhi ciphertext ko decrypt kar de.</li>
        <li><strong>Selective Deduction:</strong> Attacker ne kisi specific target ciphertext ko decrypt kar liya.</li>
        <li><strong>Information Deduction:</strong> Attacker ne plaintext ke baare me kuch partial information nikal li (e.g., message length, patterns).</li>
      </ol>
    </div>

    <div class="inter-card">
      <h4>2. 4 Classical Attack Models (Examiner's Absolute Favorite)</h4>
      <ul>
        <li><strong>COA (Ciphertext-Only Attack):</strong> Attacker ke paas sirf intercept kiya hua ciphertext hota hai. Plaintext ka koi idea nahi hota (Sabse mushkil attack).</li>
        <li><strong>KPA (Known-Plaintext Attack):</strong> Attacker ke paas kuch plaintext aur unke matching ciphertext pehle se pata hote hain (e.g., standard file header jaise PDF ya ZIP header).</li>
        <li><strong>CPA (Chosen-Plaintext Attack):</strong> Attacker apni marzi ka koi bhi plaintext chun kar encryptor oracle se uska ciphertext prapt kar sakta hai (Asymmetric ciphers me public key open hone ki wajah se CPA hamesha possible hota hai).</li>
        <li><strong>CCA (Chosen-Ciphertext Attack):</strong> Attacker arbitrary ciphertext chun kar decryption oracle se uska decrypted plaintext nikal sakta hai (Sabse powerful model).</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 20,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 10: Cryptanalysis",
    content: `
    <div class="inter-card">
      <h4>3. Brute-Force Feasibility & Mathematical Cryptanalysis</h4>
      <ul>
        <li><strong>Brute-Force Search:</strong> Saari possible keys ek-ek karke try karna.
          <br>&bull; 56-bit DES: $2^{56} \approx 7.2 \times 10^{16}$ keys &rarr; Modern GPUs kuch hi ghanto me crack kar deti hain.
          <br>&bull; 128-bit AES: $2^{128} \approx 3.4 \times 10^{38}$ keys &rarr; Poori universe ke saare supercomputers mil kar bhi karodon saal me crack nahi kar sakte!</li>
        <li><strong>Linear Cryptanalysis:</strong> High probability linear equations banakar key bits nikalna (Known-Plaintext attack).</li>
        <li><strong>Differential Cryptanalysis:</strong> Plaintext pairs me specific differences dalkar ciphertext differences observe karna (Chosen-Plaintext attack).</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Side-Channel Attacks (Hardware-Level Traps)</h4>
      <p>Ye math ko crack karne ke bajaye hardware implementation ki physical properties se key nikalte hain:</p>
      <ul>
        <li><strong>Timing Attacks:</strong> Decryption me kitna time lag raha hai, us difference se key bits guess karna.</li>
        <li><strong>Power Analysis (DPA/SPA):</strong> CPU ya smart card crypto operation ke waqt kitna current le raha hai, use oscilloscope se measure karna.</li>
        <li><strong>Acoustic / EM Attacks:</strong> Chip se nikalne wale electromagnetic radiation ya sound waves ko capture karna.</li>
      </ul>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 10: Q91–Q100) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 10 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 10: Cryptanalysis?</strong>
          <span>Lock your concepts with 10 high-yield DSSSB pattern questions (Q91–Q100).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="9" onclick="window.openMCQForSpread(9)">
        Practice Topic 10 Quiz (Q91–Q100) &rarr;
      </button>
    </div>
    `
  }
});

module.exports = spreads;
