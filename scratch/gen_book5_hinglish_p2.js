const spreads = [];

// ============================================================================
// TOPIC 11: Digital Signature: Architecture, Signing/Verification
// Spread 10: Pages 21 & 22 | Questions Q101–Q110
// ============================================================================
spreads.push({
  spreadId: "b5-s10",
  left: {
    pageNumber: 21,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 11: Digital Signatures",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 11 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">Digital Signature: Architecture, Signing/Verification & Services</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: Signing vs Verification & Security Services</h3>
    </div>

    <div class="inter-card">
      <h4>1. Digital Signature Kyun Zaroori Hai? (Problem & Solution)</h4>
      <p>Physical world me hum documents par pen se sign karte hain. Digital world me paperless transactions ko authenticate karne ke liye <strong>Digital Signature</strong> invent hua. Ye physical signature se laakh guna zyada secure hota hai kyunki physical signature copy ho sakta hai, par digital signature har document ke hash ke saath mathematically judta hai!</p>
    </div>

    <div class="inter-card">
      <h4>2. Architecture: Signing vs Verification (DSSSB Golden Rule!)</h4>
      <ol>
        <li><strong>Signing Phase (Done by SENDER):</strong>
          <br>&bull; Step A: Sender document ka cryptographic hash (e.g., SHA-256) nikalta hai.
          <br>&bull; Step B: Sender us hash ko <strong>apne khud ke PRIVATE KEY</strong> se encrypt karta hai. Ye encrypted hash hi <strong>Digital Signature</strong> kehlata hai.
          <br>&bull; Step C: Original document + Digital Signature receiver ko bhej diya jata hai.</li>
        <li><strong>Verification Phase (Done by RECEIVER):</strong>
          <br>&bull; Step A: Receiver document ka fresh SHA-256 hash calculate karta hai ($H_1$).
          <br>&bull; Step B: Receiver Digital Signature ko <strong>Sender ke PUBLIC KEY</strong> se decrypt karke original signed hash nikalta hai ($H_2$).
          <br>&bull; Step C: Agar $H_1 == H_2$, to signature <strong>VALID</strong> hai!</li>
      </ol>
      <div class="callout-box">
        <strong>Examiner's Most Common Trap:</strong> Encryption me hum <em>Receiver ke Public Key</em> se encrypt karte hain. Lekin Digital Signature me hum <em>Sender ke PRIVATE KEY</em> se sign karte hain! Dono me kabhi confuse na hon.
      </div>
    </div>
    `
  },
  right: {
    pageNumber: 22,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 11: Digital Signatures",
    content: `
    <div class="inter-card">
      <h4>3. Security Services Provided by Digital Signatures</h4>
      <p>Digital signature ek saath teen security pillars ensure karta hai:</p>
      <ul>
        <li><strong>Authentication:</strong> Receiver ko 100% guarantee milti hai ki message genuine sender ne hi bheja hai.</li>
        <li><strong>Integrity:</strong> Agar message me 1 dot ka bhi alteration hua, to hash mismatch ho jayega aur signature invalid ho jayega.</li>
        <li><strong>Non-repudiation:</strong> Sender court me mukar nahi sakta, kyunki private key sirf usi ke paas thi.</li>
        <li><em>Important:</em> Plain digital signature <strong>Confidentiality provide NAHI karta</strong> (kyunki document plaintext me hota hai). Confidentiality ke liye alag se document ko encrypt karna padta hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Common Signature Algorithms & Indian IT Act</h4>
      <ul>
        <li><strong>RSA-PSS:</strong> Probabilistic Signature Scheme (padding ke saath safe).</li>
        <li><strong>DSA (Digital Signature Algorithm):</strong> NIST FIPS 186 standard.</li>
        <li><strong>ECDSA / Ed25519:</strong> Fast, lightweight, elliptic curve based signatures.</li>
        <li><strong>Legal Status (IT Act 2000 Section 3 / 3A):</strong> Indian law ke tehat Asymmetric Crypto system aur Hash function par based digital signature ko written signature ke barabar legal validity prapt hai.</li>
      </ul>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 11: Q101–Q110) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 11 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 11: Digital Signatures?</strong>
          <span>Solve 10 high-yield DSSSB pattern questions (Q101–Q110).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="10" onclick="window.openMCQForSpread(10)">
        Practice Topic 11 Quiz (Q101–Q110) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 12: Digital Certificate & CA: X.509 & PKI Trust
// Spread 11: Pages 23 & 24 | Questions Q111–Q120
// ============================================================================
spreads.push({
  spreadId: "b5-s11",
  left: {
    pageNumber: 23,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 12: Digital Certificates & CA",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 12 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">Digital A Certificate, Certifying Authorities (CA)</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: X.509 Architecture & PKI Hierarchy</h3>
    </div>

    <div class="inter-card">
      <h4>1. Digital Certificate Kyun Chahiye? (The Identity Binding Problem)</h4>
      <p>Agar koi hacker apna public key bhej kar kahe ki <em>"Main State Bank of India hoon"</em>, to aap kaise believe karenge? Is problem ko solve karne ke liye <strong>Digital Certificate</strong> hota hai. Ye ek tarah ka <strong>Digital Passport</strong> hai jo kisi user/organization ki identity ko uske Public Key ke saath legally bind karta hai, aur is par ek trusted <strong>Certifying Authority (CA)</strong> ke digital signature hote hain.</p>
    </div>

    <div class="inter-card">
      <h4>2. ITU-T X.509 v3 Standard Certificate Fields</h4>
      <p>DSSSB me X.509 certificate ke standard fields par sawal aate hain:</p>
      <ul>
        <li><strong>Version:</strong> Current standard Version 3 (v3) hai.</li>
        <li><strong>Serial Number:</strong> CA dwara diya gaya unique tracking ID.</li>
        <li><strong>Signature Algorithm ID:</strong> CA ne sign karne ke liye kaunsa algorithm use kiya (e.g., sha256WithRSAEncryption).</li>
        <li><strong>Issuer:</strong> Certificate issue karne wali CA ka naam (e.g., DigiCert, eMudhra).</li>
        <li><strong>Validity Period:</strong> 'Not Before' date se 'Not After' date tak.</li>
        <li><strong>Subject:</strong> Certificate holder/owner ka naam aur domain (e.g., *.google.com).</li>
        <li><strong>Subject Public Key Info:</strong> Owner ka actual Public Key aur algorithm details.</li>
        <li><strong>Extensions (v3):</strong> Key Usage, Basic Constraints, Subject Alternative Name (SAN).</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 24,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 12: Digital Certificates & CA",
    content: `
    <div class="inter-card">
      <h4>3. PKI Hierarchy & Indian Legal Ecosystem</h4>
      <ul>
        <li><strong>Root CA:</strong> PKI ka supreme trust anchor hota hai. Root CA ka certificate <strong>Self-Signed</strong> hota hai aur ye OS/Browser me pre-installed trust store me rehta hai.</li>
        <li><strong>Intermediate CA:</strong> Root CA apni private key safe offline rakhta hai aur daily certificate issuance ke liye Intermediate CAs ko delegate karta hai.</li>
        <li><strong>Indian Hierarchy (IT Act 2000 Section 17):</strong>
          <br>&bull; Top Authority: <strong>CCA (Controller of Certifying Authorities)</strong>.
          <br>&bull; Licensed Commercial CAs: eMudhra, (n)Code Solutions, Capricorn, IDRBT.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Certificate Revocation: CRL vs OCSP</h4>
      <table class="inter-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>CRL (Certificate Revocation List)</th>
            <th>OCSP (Online Certificate Status Protocol)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Mechanism</strong></td>
            <td>CA dwara publish ki gayi cancelled certificates ki badi file</td>
            <td>Client real-time me ek single certificate ka status poochta hai</td>
          </tr>
          <tr>
            <td><strong>Latency / Bandwidth</strong></td>
            <td>Heavy file download karni padti hai; slow update</td>
            <td>Instant lightweight response ('Good', 'Revoked', 'Unknown')</td>
          </tr>
          <tr>
            <td><strong>Modern Fix</strong></td>
            <td>Outdated</td>
            <td><strong>OCSP Stapling:</strong> Web server khud signed OCSP proof SSL handshake me sath bhejta hai</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 12: Q111–Q120) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 12 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 12: X.509 Certificates & CA?</strong>
          <span>Lock your score with 10 high-yield DSSSB pattern questions (Q111–Q120).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="11" onclick="window.openMCQForSpread(11)">
        Practice Topic 12 Quiz (Q111–Q120) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 13: Steganalysis and Its Challenges
// Spread 12: Pages 25 & 26 | Questions Q121–Q130
// ============================================================================
spreads.push({
  spreadId: "b5-s12",
  left: {
    pageNumber: 25,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 13: Steganalysis",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 13 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">steganalysis and its challenges</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: Steganalysis Goals & Detection Techniques</h3>
    </div>

    <div class="inter-card">
      <h4>1. Steganalysis Kya Hai & Kyun Zaroori Hai?</h4>
      <p>Forensic investigations me criminals ya terrorists confidential data ko pictures ya MP3 files ke andar chhupa kar internet par circulate karte hain. <strong>Steganalysis</strong> wo forensic science hai jiska maksad files ke andar chhupi hui secret information ko <strong>detect karna, extract karna ya neutralize karna</strong> hota hai.</p>
      <ul>
        <li><strong>Detection:</strong> Sirf pata lagana ki file me kuch chhipa hai ya file clean hai.</li>
        <li><strong>Extraction:</strong> Chhupe huye secret message ko nikalna aur padhna.</li>
        <li><strong>Sanitization (Destruction):</strong> Image ko recompress ya filter karke chhupe huye payload ko destroy kar dena (bina message padhe).</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>2. Mukhya Steganalysis Techniques</h4>
      <ul>
        <li><strong>EOF (End-of-File) Injection Detection:</strong> JPG files hamesha <code>FF D9</code> par khatam hoti hain. Agar hex editor me <code>FF D9</code> ke baad bhi extra bytes milte hain, to ye seedha proof hai ki file me data append kiya gaya hai (e.g., using <code>copy /b image.jpg + secret.zip output.jpg</code>).</li>
        <li><strong>Bit-Plane Slicing:</strong> Image ko uske 8 individual bit planes (Bit 0 se Bit 7) me tod kar dekhna. Clean image ka LSB plane random noise lagta hai, par LSB stego hone par usme abnormal visual patterns ya contrast changes dikhte hain.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 26,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 13: Steganalysis",
    content: `
    <div class="inter-card">
      <h4>3. Statistical Steganalysis: Chi-Square Attack</h4>
      <p>Westfeld aur Pfitzmann dwara invent kiya gaya <strong>Chi-Square (&chi;<sup>2</sup>) Attack</strong> LSB steganography ko pakadne ka sabse powerful mathematical tool hai:</p>
      <ul>
        <li>Natural images me adjacent pixel values ke pairs (Pairs of Values - PoVs: jaise 2k aur 2k+1, e.g., 12 aur 13) ki frequencies alag-alag hoti hain.</li>
        <li>Jab koi sequential LSB substitution karta hai, to PoVs ke beech ki frequencies <strong>equalize (barabar)</strong> hone lagti hain!</li>
        <li>Chi-square test is statistical deviation ko measure karke bata deta hai ki kitne percent image me secret data embedded hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Modern Steganalysis Challenges</h4>
      <ul>
        <li><strong>Adaptive Steganography (HUGO, WOW, S-UNIWARD):</strong> Modern tools data ko smooth flat areas me nahi, balki complex noisy textured edges par chhupate hain jahan statistical analysis fail ho jati hai.</li>
        <li><strong>Encrypted Payload:</strong> Agar hidden message ko pehle AES se encrypt karke embed kiya gaya ho, to extraction ke baad bhi forensic analyst bina key ke use padh nahi sakta.</li>
      </ul>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 13: Q121–Q130) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 13 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 13: Steganalysis?</strong>
          <span>Solve 10 high-yield DSSSB pattern questions (Q121–Q130).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="12" onclick="window.openMCQForSpread(12)">
        Practice Topic 13 Quiz (Q121–Q130) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 14: Vulnerability Assessment and Penetration Testing (VAPT)
// Spread 13: Pages 27 & 28 | Questions Q131–Q140
// ============================================================================
spreads.push({
  spreadId: "b5-s13",
  left: {
    pageNumber: 27,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 14: VAPT Fundamentals",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 14 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">Vulnerability Assessment and Penetration Testing (VAPT)</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: VA vs PT & Testing Methodologies</h3>
    </div>

    <div class="inter-card">
      <h4>1. VAPT Kya Hai & Kyun Zaroori Hai?</h4>
      <p>Security me sirf defense lagana kaafi nahi hai, humein apne hi network aur applications ki testing karni padti hai taaki hackers se pehle kamzoriyan dhoondhi ja sakein. Is complete process ko <strong>VAPT</strong> kehte hain.</p>
    </div>

    <div class="inter-card">
      <h4>2. Vulnerability Assessment (VA) vs Penetration Testing (PT)</h4>
      <table class="inter-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Vulnerability Assessment (VA)</th>
            <th>Penetration Testing (PT)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Focus</strong></td>
            <td><strong>Breadth</strong> (Saari possible kamzoriyon ki list banana)</td>
            <td><strong>Depth</strong> (Ek kamzori pakad kar system me ghusna)</td>
          </tr>
          <tr>
            <td><strong>Approach</strong></td>
            <td>Automated, non-invasive scanner scan</td>
            <td>Manual exploitation, active simulation</td>
          </tr>
          <tr>
            <td><strong>Exploitation</strong></td>
            <td><strong>NO</strong> (Flaws ko exploit nahi karta)</td>
            <td><strong>YES</strong> (Flaws ko live exploit karke impact dikhata hai)</td>
          </tr>
          <tr>
            <td><strong>False Positives</strong></td>
            <td>High (Scanner alerts bina verify huye aate hain)</td>
            <td>Low (Tester manually verify karke proof-of-concept deta hai)</td>
          </tr>
        </tbody>
      </table>
    </div>
    `
  },
  right: {
    pageNumber: 28,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 14: VAPT Fundamentals",
    content: `
    <div class="inter-card">
      <h4>3. Testing Perspectives (Black, White, Grey Box)</h4>
      <ul>
        <li><strong>Black-Box Testing:</strong> Tester ko target system ki <strong>zero prior knowledge</strong> hoti hai (na source code, na network diagram, na credentials). Real-world external hacker ki tarah attack karta hai.</li>
        <li><strong>White-Box Testing:</strong> Tester ke paas <strong>full internal visibility</strong> hoti hai (Source code, architecture diagrams, admin credentials). Deep logic review ke liye best hai.</li>
        <li><strong>Grey-Box Testing:</strong> Tester ke paas <strong>partial knowledge</strong> hoti hai (jaise normal logged-in user credentials). Ye check karne ke liye ki internal employee kya damage kar sakta hai. Industry me sabse standard approach.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Rules of Engagement (ROE) & Legal Framework</h4>
      <div class="callout-box">
        <strong>Legal Mandate (Crucial DSSSB Law):</strong>
        <p>Bina client ke written permission ke penetration testing karna <strong>illegal hacking</strong> mani jati hai!</p>
        <p>&bull; <strong>Indian IT Act 2000 Section 43 & 66:</strong> Unauthorized access, data downloading, ya system tampering par 3 saal tak ki jail aur bhari jurmana ho sakta hai. Tester ke paas hamesha signed <strong>Rules of Engagement (ROE)</strong> document hona compulsory hai.</p>
      </div>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 14: Q131–Q140) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 14 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 14: VAPT Fundamentals?</strong>
          <span>Lock your knowledge with 10 high-yield DSSSB pattern questions (Q131–Q140).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="13" onclick="window.openMCQForSpread(13)">
        Practice Topic 14 Quiz (Q131–Q140) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 15: Vulnerability v/s Weakness & Input Validation Flaws
// Spread 14: Pages 29 & 30 | Questions Q141–Q150
// ============================================================================
spreads.push({
  spreadId: "b5-s14",
  left: {
    pageNumber: 29,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 15: Flaw vs Vuln & Web Attacks",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 15 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">vulnerability v/s weakness, types of U, vulnerabilities</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: CWE vs CVE & Input Validation Flaws (SQLi)</h3>
    </div>

    <div class="inter-card">
      <h4>1. Vulnerability vs Weakness (DSSSB Direct Question)</h4>
      <ul>
        <li><strong>Weakness (CWE - Common Weakness Enumeration):</strong> Software code ya design ka ek general flaw ya error type hai (e.g., "Improper Input Validation", "Buffer Copy without Checking Size"). Ye batata hai ki galti kis type ki hai.</li>
        <li><strong>Vulnerability (CVE - Common Vulnerabilities and Exposures):</strong> Kisi specific software version me maujood wo specific flaw jise attack karke exploit kiya ja sakta hai (e.g., CVE-2021-44228 in Log4j v2.14.1).</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>2. SQL Injection (SQLi) - CWE-89</h4>
      <p>Jab application user ke input ko bina validate kiye seedha database SQL query me jod deti hai, to attacker malicious SQL commands inject kar deta hai:</p>
      <ul>
        <li><strong>Classic Auth Bypass:</strong> Login username field me <code>' OR 1=1 --</code> inject karne par database condition hamesha TRUE ho jati hai aur bina password ke admin login ho jata hai.</li>
        <li><strong>SQLi Categories:</strong> In-band (Error-based, UNION-based), Inferential (Blind Boolean, Blind Time-based), Out-of-band.</li>
        <li><strong>Gold Standard Defense:</strong> <strong>Parameterized Queries (Prepared Statements)</strong> use karna! Isse database input ko data manti hai, executable code nahi.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 30,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 15: Flaw vs Vuln & Web Attacks",
    content: `
    <div class="inter-card">
      <h4>3. Cross-Site Scripting (XSS) - CWE-79</h4>
      <p>XSS me attacker victim ke browser me malicious JavaScript inject kar deta hai taaki session cookies aur tokens chura sake:</p>
      <ul>
        <li><strong>Stored (Persistent) XSS:</strong> Malicious script database me permanently save ho jati hai (e.g., blog comment section me). Jo bhi page kholega, uske browser me script chal jayegi (Sabse khatarnak).</li>
        <li><strong>Reflected (Non-persistent) XSS:</strong> Malicious payload phishing URL me link hota hai aur server use response me turant reflect back karta hai.</li>
        <li><strong>DOM-based XSS:</strong> Vulnerability server par nahi, balki client-side JavaScript me hoti hai jo unsafe sources (jaise <code>location.hash</code>) ko <code>innerHTML</code> ya <code>eval()</code> me execute kar deti hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. XSS Defenses & Session Cookie Protection</h4>
      <div class="callout-box">
        <strong>Session Hijacking Defense (DSSSB Favorite):</strong>
        <p>Cookies par <strong>HttpOnly Flag</strong> set karna compulsory hai! Agar HttpOnly flag enabled hai, to attacker ki injected JavaScript <code>document.cookie</code> ko access nahi kar sakti, jisse session steal hona ruk jata hai.</p>
        <p>&bull; <em>Input Sanitization:</em> User input ko render karne se pehle contextual <strong>HTML Entity Encoding</strong> (jaise <code>&lt;</code> ko <code>&amp;lt;</code> banana) apply karna.</p>
      </div>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 15: Q141–Q150) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 15 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 15: SQLi & XSS Flaws?</strong>
          <span>Solve 10 high-yield DSSSB pattern questions (Q141–Q150).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="14" onclick="window.openMCQForSpread(14)">
        Practice Topic 15 Quiz (Q141–Q150) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 16: Memory Corruption & Modern Web Flaws
// Spread 15: Pages 31 & 32 | Questions Q151–Q160
// ============================================================================
spreads.push({
  spreadId: "b5-s15",
  left: {
    pageNumber: 31,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 16: Memory Corruption & Web Flaws",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 16 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">types of vulnerabilities: Memory Corruption, Access Control & Web Flaws</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: Stack Buffer Overflow & Mitigations</h3>
    </div>

    <div class="inter-card">
      <h4>1. Stack-Based Buffer Overflow (CWE-120)</h4>
      <p>C/C++ me unmanaged memory hoti hai. Agar programmer unsafe functions jaise <code>strcpy(), gets(), sprintf()</code> use karta hai jo buffer ki boundary check nahi karte, to buffer overflow create ho jata hai:</p>
      <ul>
        <li><strong>Mechanism:</strong> Stack frame me allocated buffer limit se zyada data bharne par data adjacent memory me spill ho jata hai.</li>
        <li><strong>EIP / RIP Hijack:</strong> Attacker Saved Frame Pointer (EBP) aur Saved Return Address (EIP) ko overwrite kar deta hai.</li>
        <li><strong>Shellcode Execution:</strong> Return address ko apne inject kiye huye shellcode par point kara kar system ka root/admin access chheen leta hai.</li>
        <li><strong>NOP Sled (0x90):</strong> Exploit reliability badhane ke liye shellcode se pehle NOP instructions ka pahiya lagaya jata hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>2. Modern OS Buffer Overflow Defenses (DSSSB Favorites)</h4>
      <ul>
        <li><strong>DEP / NX (Data Execution Prevention / No-Execute):</strong> Stack aur Heap memory regions ko strictly non-executable mark kar dena. Attacker stack par shellcode execute nahi kar sakta.</li>
        <li><strong>ASLR (Address Space Layout Randomization):</strong> Har reboot par stack, heap, aur libraries ke memory base addresses ko randomize kar dena taaki attacker return address predict na kar sake.</li>
        <li><strong>Stack Canaries:</strong> Return address se theek pehle stack me random secret value rakhna. Agar buffer overflow hua, to canary corrupt ho jayegi aur OS program turant abort kar dega.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 32,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 16: Memory Corruption & Web Flaws",
    content: `
    <div class="inter-card">
      <h4>3. Access Control & Web Application Flaws</h4>
      <ul>
        <li><strong>IDOR (Insecure Direct Object Reference - CWE-639):</strong> Jab URL ya parameter me object ID (jaise <code>account_id=105</code>) seedha expose hoti hai aur server authorization check nahi karta. Attacker <code>account_id=106</code> karke doosre user ka private data dekh leta hai.</li>
        <li><strong>CSRF (Cross-Site Request Forgery - CWE-352):</strong> Victim user pehle se bank me logged in hai. Attacker usse malicious link par click karwata hai, aur browser bina user ki marzi ke uske authenticated session cookies ke saath bank ko transfer request bhej deta hai.
          <br><em>Defense:</em> Unpredictable, cryptographically strong <strong>Anti-CSRF Tokens</strong> aur <strong>SameSite Cookie Attribute</strong>.</li>
        <li><strong>SSRF (Server-Side Request Forgery - CWE-918):</strong> Attacker vulnerable web server ko force karta hai ki wo internal protected services ya Cloud Metadata endpoint (<code>http://169.254.169.254/latest/meta-data/</code>) se sensitive credentials nikal kar attacker ko de de.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Summary: Attack & Defense Pairing</h4>
      <table class="inter-table">
        <thead>
          <tr>
            <th>Vulnerability</th>
            <th>CWE ID</th>
            <th>Primary Defense Mechanism</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stack Overflow</td>
            <td>CWE-120</td>
            <td>Safe APIs, Stack Canaries, ASLR, DEP</td>
          </tr>
          <tr>
            <td>IDOR</td>
            <td>CWE-639</td>
            <td>Server-Side Authorization Checks, GUIDs</td>
          </tr>
          <tr>
            <td>CSRF</td>
            <td>CWE-352</td>
            <td>Anti-CSRF Tokens, SameSite=Strict cookies</td>
          </tr>
          <tr>
            <td>SSRF</td>
            <td>CWE-918</td>
            <td>Strict URL Whitelisting, Disable Cloud IMDSv1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 16: Q151–Q160) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 16 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 16: Memory & Web Flaws?</strong>
          <span>Solve 10 high-yield DSSSB pattern questions (Q151–Q160).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="15" onclick="window.openMCQForSpread(15)">
        Practice Topic 16 Quiz (Q151–Q160) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 17: Common Vulnerabilities and Exposures (CVEs)
// Spread 16: Pages 33 & 34 | Questions Q161–Q170
// ============================================================================
spreads.push({
  spreadId: "b5-s16",
  left: {
    pageNumber: 33,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 17: CVEs & MITRE",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 17 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">Common Vulnerabilities and Exposures (CVEs)</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: MITRE CVE Program & Identification Syntax</h3>
    </div>

    <div class="inter-card">
      <h4>1. CVE Program Kyun Banaya Gaya? (Global Standardization)</h4>
      <p>1999 se pehle har security company ek hi vulnerability ko alag-alag naamo se bulati thi, jisse confusion hota tha. MITRE Corporation ne US government ki funding se <strong>CVE (Common Vulnerabilities and Exposures)</strong> system banaya taaki poori duniya me har security flaw ko ek standard universal identifier mil sake.</p>
    </div>

    <div class="inter-card">
      <h4>2. CVE Identifier Syntax & CNA Role</h4>
      <ul>
        <li><strong>Standard Syntax:</strong> <code>CVE-YYYY-NNNN...</code>
          <br>&bull; <code>CVE</code>: Prefix.
          <br>&bull; <code>YYYY</code>: Jis saal ye CVE ID officially assign ya disclose hui (e.g., 2021).
          <br>&bull; <code>NNNN</code>: 4 ya usse zyada digits ka unique arbitrary serial number (e.g., CVE-2021-44228).</li>
        <li><strong>CNAs (CVE Numbering Authorities):</strong> MITRE akele saari CVE assign nahi karta; organizations jaise Microsoft, Google, Red Hat aur CERTs ko CNA banaya gaya hai jo apne products ki vulnerabilities ko khud CVE assign karti hain.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 34,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 17: CVEs & MITRE",
    content: `
    <div class="inter-card">
      <h4>3. MITRE vs NIST NVD (National Vulnerability Database)</h4>
      <p>DSSSB me dono institutions ka role clear hona zaroori hai:</p>
      <ul>
        <li><strong>MITRE Corporation:</strong> CVE list ko maintain karta hai aur unique CVE IDs assign karta hai. Flaw ka basic description provide karta hai.</li>
        <li><strong>NIST NVD (US National Institute of Standards and Technology):</strong> MITRE ki CVE list ko lekar use <strong>enrich (deep analysis)</strong> karta hai:
          <br>&bull; <strong>CVSS Scores</strong> calculate karke severity assign karta hai.
          <br>&bull; <strong>CPE (Common Platform Enumeration):</strong> Standard structured naming deti hai taaki automated scanners identify kar sakein ki kaunsa OS ya software version affected hai.
          <br>&bull; Fixes, patches aur technical advisories link karti hai.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. CVE Lifecycle ke 4 States</h4>
      <ol>
        <li><strong>Reserved:</strong> CNA dwara researcher ko ID allot ki gayi hai par public disclosure nahi hua.</li>
        <li><strong>Published:</strong> Vulnerability publicly disclose ho gayi aur CVE portal par description live hai.</li>
        <li><strong>Modified:</strong> NVD ne analysis complete karke CVSS score aur CPE details update kar di hain.</li>
        <li><strong>Rejected:</strong> Duplicate ya invalid paye jane par CVE ko reject kar diya jata hai.</li>
      </ol>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 17: Q161–Q170) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 17 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 17: CVE Architecture?</strong>
          <span>Test your concepts with 10 high-yield DSSSB pattern questions (Q161–Q170).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="16" onclick="window.openMCQForSpread(16)">
        Practice Topic 17 Quiz (Q161–Q170) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 18: Common Vulnerability Scoring System (CVSS)
// Spread 17: Pages 35 & 36 | Questions Q171–Q180
// ============================================================================
spreads.push({
  spreadId: "b5-s17",
  left: {
    pageNumber: 35,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 18: CVSS Scoring",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 18 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">Common Vulnerability Scoring System (CVSS)</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: CVSS v3.1 Metrics & Severity Ratings</h3>
    </div>

    <div class="inter-card">
      <h4>1. CVSS Kyun Zaroori Hai? (Objective Severity Rating)</h4>
      <p>Agar kisi system me 100 vulnerabilities milti hain, to sabse pehle kise theek karein? Is prioritization ko standard banane ke liye FIRST.org ne <strong>CVSS</strong> develop kiya. Ye <strong>0.0 se 10.0 tak ka quantitative score</strong> deta hai.</p>
    </div>

    <div class="inter-card">
      <h4>2. Qualitative Severity Ratings (DSSSB Must-Memorize Table)</h4>
      <table class="inter-table">
        <thead>
          <tr>
            <th>Severity Rating</th>
            <th>CVSS v3.1 Score Range</th>
            <th>Remediation Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>None</strong></td>
            <td>0.0</td>
            <td>No action required</td>
          </tr>
          <tr>
            <td><strong>Low</strong></td>
            <td>0.1 – 3.9</td>
            <td>Informational / Low risk</td>
          </tr>
          <tr>
            <td><strong>Medium</strong></td>
            <td>4.0 – 6.9</td>
            <td>Routine scheduled patching</td>
          </tr>
          <tr>
            <td><strong>High</strong></td>
            <td>7.0 – 8.9</td>
            <td>Urgent remediation required</td>
          </tr>
          <tr>
            <td><strong>Critical</strong></td>
            <td><strong>9.0 – 10.0</strong></td>
            <td><strong>Immediate emergency patch! (e.g., RCE)</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
    `
  },
  right: {
    pageNumber: 36,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 18: CVSS Scoring",
    content: `
    <div class="inter-card">
      <h4>3. CVSS v3.1 Base Metric Group Structure</h4>
      <p>CVSS Base Score do sub-categories me calculate hota hai:</p>
      <ul>
        <li><strong>Exploitability Metrics (Attacker kitni aasani se ghus sakta hai):</strong>
          <br>&bull; <em>Attack Vector (AV):</em> Network (N - highest weight), Adjacent (A), Local (L), Physical (P).
          <br>&bull; <em>Attack Complexity (AC):</em> Low (L) ya High (H).
          <br>&bull; <em>Privileges Required (PR):</em> None (N), Low (L), High (H).
          <br>&bull; <em>User Interaction (UI):</em> None (N) ya Required (R).
          <br>&bull; <em>Scope (S):</em> Unchanged (U) ya Changed (C - cross-boundary impact).</li>
        <li><strong>Impact Metrics (Kitna damage hoga):</strong>
          <br>&bull; <em>Confidentiality (C), Integrity (I), Availability (A)</em>: None (N), Low (L), High (H).</li>
      </ul>
      <div class="callout-box">
        <strong>Example CVSS Vector String:</strong>
        <br><code>CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</code> &rarr; Remote Network se bina login aur bina user interaction ke complete compromise (Score 9.8 - Critical)!
      </div>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 18: Q171–Q180) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 18 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 18: CVSS Metrics?</strong>
          <span>Lock your concepts with 10 high-yield DSSSB pattern questions (Q171–Q180).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="17" onclick="window.openMCQForSpread(17)">
        Practice Topic 18 Quiz (Q171–Q180) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 19: Vulnerability Assessment Tools and Techniques
// Spread 18: Pages 37 & 38 | Questions Q181–Q190
// ============================================================================
spreads.push({
  spreadId: "b5-s18",
  left: {
    pageNumber: 37,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 19: VA Tools & Lifecycle",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 19 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">vulnerability assessment tools and techniques</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: 5-Phase Lifecycle & Scanning Mechanisms</h3>
    </div>

    <div class="inter-card">
      <h4>1. The 5-Phase Vulnerability Assessment Lifecycle</h4>
      <p>Automated tool chalane se pehle formal lifecycle follow karni hoti hai:</p>
      <ol>
        <li><strong>Planning & Scoping:</strong> Target systems, IP ranges aur testing windows decide karna taaki production impact na ho.</li>
        <li><strong>Asset Discovery:</strong> Network sweep karke active hosts aur running ports ki inventory taiyar karna.</li>
        <li><strong>Vulnerability Scanning:</strong> Automated scanners se misconfigurations aur missing patches scan karna.</li>
        <li><strong>Analysis & Prioritization:</strong> False positives ko filter karna aur CVSS scores ke base par vulnerabilities rank karna.</li>
        <li><strong>Reporting & Remediation:</strong> System administrators ko actionable remediation steps dena.</li>
      </ol>
    </div>

    <div class="inter-card">
      <h4>2. Credentialed vs Non-Credentialed Scans</h4>
      <ul>
        <li><strong>Non-Credentialed (Unauthenticated) Scan:</strong> Scanner bahar se network probes bhejta hai bina target OS me login kiye. Attacker's external view deta hai par false positives zyada aate hain.</li>
        <li><strong>Credentialed (Authenticated) Scan:</strong> Scanner ke paas valid admin/SSH credentials hote hain. Ye internal registry, installed software versions aur patch levels ko seedha check karta hai. Sabse accurate scan hota hai with lowest false positives.</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 38,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 19: VA Tools & Lifecycle",
    content: `
    <div class="inter-card">
      <h4>3. Leading VA Scanners & Detection Techniques</h4>
      <ul>
        <li><strong>Tenable Nessus:</strong> Enterprise gold standard scanner. Iske detection rules <strong>NASL (Nessus Attack Scripting Language)</strong> plugins ke roop me likhe hote hain. Daily plugin feed update hoti hai.</li>
        <li><strong>OpenVAS (Greenbone Community Edition):</strong> Leading open-source vulnerability scanner. Community feed se continuous NVTs (Network Vulnerability Tests) download karta hai.</li>
        <li><strong>Qualys / Rapid7 Nexpose:</strong> Cloud-native continuous vulnerability management solutions.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Remediation Prioritization: CISA KEV Catalog</h4>
      <div class="callout-box">
        <strong>Modern Best Practice:</strong>
        <p>Sirf CVSS 9.0 dekh kar patch nahi kiya jata; balki <strong>CISA KEV (Known Exploited Vulnerabilities)</strong> catalog check kiya jata hai. Agar kisi vulnerability ka in-the-wild active exploit chal raha hai (chahe CVSS score 6.5 hi ho), to use immediate emergency priority par patch karna compulsory hota hai.</p>
      </div>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 19: Q181–Q190) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 19 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 19: VA Tools & Lifecycle?</strong>
          <span>Solve 10 high-yield DSSSB pattern questions (Q181–Q190).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="18" onclick="window.openMCQForSpread(18)">
        Practice Topic 19 Quiz (Q181–Q190) &rarr;
      </button>
    </div>
    `
  }
});

// ============================================================================
// TOPIC 20: Penetration Testing Methods & Tools
// Spread 19: Pages 39 & 40 | Questions Q191–Q200
// ============================================================================
spreads.push({
  spreadId: "b5-s19",
  left: {
    pageNumber: 39,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 20: Pentest Tools & Methods",
    content: `
    <div class="syllabus-header-card">
      <span class="syllabus-pill">SYLLABUS TOPIC 20 • INFORMATION SECURITY</span>
      <h2 class="syllabus-main-title">penetration testing and its methods/tools</h2>
      <h3 class="syllabus-subtopic-title">Subtopic: PTES Methodology & Network Reconnaissance</h3>
    </div>

    <div class="inter-card">
      <h4>1. Penetration Testing Execution Standard (PTES) Phases</h4>
      <p>Professional ethical hacking me 7 sequential phases follow kiye jate hain:</p>
      <ol>
        <li><strong>Pre-engagement Interactions:</strong> Scope, ROE, aur legal agreements sign karna.</li>
        <li><strong>Intelligence Gathering:</strong> OSINT aur passive reconnaissance karna.</li>
        <li><strong>Threat Modeling:</strong> Target environment ke business assets identify karna.</li>
        <li><strong>Vulnerability Analysis:</strong> Weak entry points discover karna.</li>
        <li><strong>Exploitation:</strong> Security defenses ko bypass karke system access lena.</li>
        <li><strong>Post-Exploitation:</strong> Privilege escalation aur lateral movement karna.</li>
        <li><strong>Reporting:</strong> Executive summary aur technical remediation deliver karna.</li>
      </ol>
    </div>

    <div class="inter-card">
      <h4>2. Nmap (Network Mapper) - Port Scanning Gold Standard</h4>
      <p>Gordon Lyon dwara banaya gaya Nmap network reconnaissance ka sabse important tool hai:</p>
      <ul>
        <li><strong>SYN Stealth Scan (<code>-sS</code>):</strong> Half-open scan. Ye 3-way handshake poora nahi karta (SYN bhejta hai, SYN-ACK aane par RST bhej kar connection tod deta hai). Firewall logs me kam detect hota hai. (Requires root/admin).</li>
        <li><strong>TCP Connect Scan (<code>-sT</code>):</strong> Full 3-way handshake poora karta hai. Unprivileged users use karte hain par fully logged hota hai.</li>
        <li><strong>Port States:</strong> <em>Open</em> (Service listening hai), <em>Closed</em> (Host reachable hai par port par RST mila), <em>Filtered</em> (Firewall packets drop kar raha hai, koi response nahi mila).</li>
      </ul>
    </div>
    `
  },
  right: {
    pageNumber: 40,
    runningHead: "Book 5: InfoSec, Crypto & VAPT • Topic 20: Pentest Tools & Methods",
    content: `
    <div class="inter-card">
      <h4>3. Metasploit Framework & Meterpreter Payload</h4>
      <ul>
        <li><strong>Metasploit Architecture:</strong> Exploits, Payloads, Auxiliaries, aur Post modules ka modular open-source framework.</li>
        <li><strong>Meterpreter (Forensic Nightmare):</strong>
          <br>&bull; Ye target machine ke disk par koi <code>.exe</code> file create nahi karta!
          <br>&bull; Ye <strong>Reflective DLL Injection</strong> se memory (RAM) ke andar chalte process me inject ho jata hai. Disk par koi footprint na hone ki wajah se traditional antivirus ise pakad nahi pate.</li>
      </ul>
    </div>

    <div class="inter-card">
      <h4>4. Burp Suite: Web Application Pentesting Hub</h4>
      <ul>
        <li><strong>Interception Proxy:</strong> Browser aur web server ke beech baith kar live HTTP/HTTPS requests aur responses ko capture, inspect aur alter karne ka tool.</li>
        <li><strong>Core Modules:</strong> <em>Proxy</em> (Live request traffic pakadna), <em>Repeater</em> (Modified requests manually bar-bar bhejna), <em>Intruder</em> (Fuzzing aur brute-forcing payloads).</li>
      </ul>
    </div>

    <!-- SPREAD MCQ CTA BANNER (Topic 20: Q191–Q200) -->
    <div class="spread-quiz-cta-banner">
      <div class="spread-quiz-cta-banner-content">
        <span class="mcq-badge">TOPIC 20 PRACTICE QUIZ</span>
        <div class="mcq-text-group">
          <strong>Mastered Topic 20: Penetration Testing Tools?</strong>
          <span>Complete your preparation with 10 high-yield DSSSB questions (Q191–Q200).</span>
        </div>
      </div>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="19" onclick="window.openMCQForSpread(19)">
        Practice Topic 20 Quiz (Q191–Q200) &rarr;
      </button>
    </div>
    `
  }
});

module.exports = spreads;
