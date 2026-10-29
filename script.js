/**
 * DSSSB Junior Scientific Assistant (Cyber Forensic)
 * 3D Interactive Digital Textbook Controller
 * Fully paginated: 40 pages (20 spreads) with in-depth statutory coverage,
 * landmark Indian court jurisprudence, real-world Indian cyber crime situations,
 * laboratory photographs/diagrams, and built-in Web Speech Audio Narration.
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const leftPageEl = document.getElementById('leftPage');
  const rightPageEl = document.getElementById('rightPage');
  const textbook = document.getElementById('textbook');
  const turningLeaf = document.getElementById('turningLeaf');
  const leafFront = document.getElementById('leafFront');
  const leafBack = document.getElementById('leafBack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const firstPageBtn = document.getElementById('firstPageBtn');
  const lastPageBtn = document.getElementById('lastPageBtn');
  const autoFlipBtn = document.getElementById('autoFlipBtn');
  const pageRange = document.getElementById('pageRange');
  const pageIndicator = document.getElementById('pageIndicator');
  const tocToggleBtn = document.getElementById('tocToggleBtn');
  const tocDrawer = document.getElementById('tocDrawer');
  const closeTocBtn = document.getElementById('closeTocBtn');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const tocList = document.getElementById('tocList');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const searchResultsDropdown = document.getElementById('searchResultsDropdown');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const fontSizeIncBtn = document.getElementById('fontSizeIncBtn');
  const fontSizeDecBtn = document.getElementById('fontSizeDecBtn');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const viewModeToggleBtn = document.getElementById('viewModeToggleBtn');
  const audioNarrationBtn = document.getElementById('audioNarrationBtn');
  const bottomAudioBtn = document.getElementById('bottomAudioBtn');
  const audioStatusText = document.getElementById('audioStatusText');

  // App State
  let isSinglePage = (window.innerWidth <= 768);
  let currentSpread = 0;
  let currentPageIndex = 0;
  let isFlipping = false;
  let isAutoFlip = false;
  let autoFlipInterval = null;
  let isSpeaking = false;
  let currentUtterance = null;
  let currentThemeIndex = 0;
  const themes = ['theme-parchment', 'theme-white', 'theme-dark'];
  let currentFontSizePercent = 100;

  // =========================================================================
  // 20 SPREADS (40 PAGES) IN-DEPTH MULTIMEDIA TEXTBOOK DATABASE
  // =========================================================================
  const spreads = [
    // Spread 0: Front Cover & Frontispiece (Pages 1 & 2)
    {
      spreadId: 0,
      left: {
        pageNumber: 1,
        runningHead: "Official Examination Frontispiece",
        content: `
          <div class="cover-border-box">
            <div>
              <div class="cover-title-badge">Government of NCT of Delhi</div>
              <div style="font-family: var(--font-title); font-size: 0.92rem; font-weight: 700; color: var(--text-heading); margin-bottom: 6px;">
                Delhi Subordinate Services Selection Board
              </div>
              <div style="margin: 6px 0;">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="color: var(--accent-gold); display: inline-block;"><path d="M12 2v20M5 7l7-3 7 3M2 13l3-6 3 6a3 3 0 0 1-6 0zm14 0l3-6 3 6a3 3 0 0 1-6 0zM5 22h14"></path></svg>
              </div>
              <h2 style="font-family: var(--font-title); font-size: 1.15rem; color: var(--accent-color); margin-bottom: 2px;">
                Junior Scientific Assistant
              </h2>
              <div style="font-size: 0.88rem; font-weight: 700; color: var(--text-heading); margin-bottom: 6px;">
                (Cyber Forensic Discipline)
              </div>
            </div>

            <ul class="cover-features-list">
              <li><strong>In-Depth Technical Mastery:</strong> Memory volatility, hex carving, write-blockers, SHA-256 validation.</li>
              <li><strong>Landmark Indian Jurisprudence:</strong> *Suhas Katti*, *Shreya Singhal*, *Puttaswamy*, *Arjun Panditrao*.</li>
              <li><strong>Real-Life Incident Forensics:</strong> Cosmos Bank switch heist, AIIMS Delhi ransomware crisis.</li>
              <li><strong>Bharatiya Sakshya Adhiniyam 2023:</strong> Section 61, 62, 63 electronic evidence protocols.</li>
              <li><strong>Multimedia Learning:</strong> Laboratory photographs, network schematics & audio narration.</li>
            </ul>

            <div style="font-size: 0.74rem; color: var(--text-muted); border-top: 1px solid var(--ui-border); padding-top: 5px;">
              Department of Forensic Science Services • Crime Branch Reference<br>
              <strong>2026 Academic Forensic Edition</strong>
            </div>
          </div>
        `
      },
      right: {
        pageNumber: 2,
        runningHead: "DSSSB Official Textbook Title Page",
        content: `
          <div class="cover-border-box">
            <div>
              <span class="badge-exam">DSSSB Theory Study Guide</span>
              <h1 class="cover-h1">
                CYBER CRIMES AND RELATED OFFENCES & PENALTIES
              </h1>
              <div style="font-size: 0.86rem; color: var(--text-muted); font-style: italic; margin-bottom: 8px;">
                Authoritative Treatise, Statutory Analysis & Real-World Forensic Case Studies
              </div>
              <div style="height: 2px; width: 50px; background: var(--accent-gold); margin: 0 auto 10px;"></div>
            </div>

            <div class="book-callout" style="text-align: left; margin: 0 0 8px 0; font-size: 0.8rem;">
              <strong>Pedagogical Standard:</strong> Structured for aspiring forensic scientists and cyber investigators. Move beyond baseline definitions into technical forensic workflows, actual Indian courtroom rulings, hardware acquisition procedures, and real-life banking cyber incidents.
            </div>

            <div style="background: var(--page-bg-subtle); padding: 6px 10px; border-radius: 6px; border: 1px solid var(--ui-border); font-size: 0.76rem; text-align: left; line-height: 1.35;">
              <strong>Features:</strong> 10 Comprehensive Chapters • 8 Landmark Court Briefs • 3 Real-Life Situational Case Studies • Built-in Audio Read-Aloud • Evidence Hardware Photographs.
            </div>

            <div>
              <button class="cover-btn-start" onclick="document.getElementById('nextBtn').click();">
                Open Book & Begin Chapter 1 &rarr;
              </button>
            </div>
          </div>
        `
      }
    },

    // Spread 1: Syllabus Roadmap & Chapter 1 Overview (Pages 3 & 4)
    {
      spreadId: 1,
      left: {
        pageNumber: 3,
        runningHead: "Syllabus Roadmap & Architecture",
        content: `
          <h1>Complete Syllabus Roadmap</h1>
          <p>The syllabus is divided into 10 interconnected chapters for progressive conceptual and forensic mastery:</p>
          
          <ul style="font-size: 0.8rem; line-height: 1.36; list-style-type: none; margin-left: 0;">
            <li style="margin-bottom: 4px;"><strong style="color: var(--accent-color);">01. Introduction to Cybercrime:</strong> Meaning, characteristics, history, hardware roles and digital evidence basics.</li>
            <li style="margin-bottom: 4px;"><strong style="color: var(--accent-color);">02. Classification & Motivations:</strong> Cyber-dependent vs cyber-enabled, victim classification, mens rea and offender profiling.</li>
            <li style="margin-bottom: 4px;"><strong style="color: var(--accent-color);">03. Crimes Against Individuals:</strong> Cyberstalking (*Suhas Katti*), online obscenity, deepfakes, phishing and banking fraud.</li>
            <li style="margin-bottom: 4px;"><strong style="color: var(--accent-color);">04. Crimes Against Property & Systems:</strong> IPR, source code tampering (*Syed Asifuddin*), ransomware (*AIIMS Delhi*) and DDoS.</li>
            <li style="margin-bottom: 4px;"><strong style="color: var(--accent-color);">05. Cyberterrorism & Society:</strong> Section 66F, speech & defamation (*Shreya Singhal*), and Right to Privacy (*Puttaswamy*).</li>
            <li style="margin-bottom: 4px;"><strong style="color: var(--accent-color);">06. Indian Cyber Law Framework:</strong> UNCITRAL Model Law, IT Act 2000 structure, and Section 75 extra-territorial jurisdiction.</li>
            <li style="margin-bottom: 4px;"><strong style="color: var(--accent-color);">07. IT Act Offences & Penalties:</strong> Master statutory table (§43 to §74), civil adjudication vs criminal prosecution, and safe harbour (*Baazee.com*).</li>
            <li style="margin-bottom: 4px;"><strong style="color: var(--accent-color);">08. Digital Signatures & PKI:</strong> Asymmetric cryptography, RSA key pairs, SHA-256 hash algorithms and Certifying Authorities.</li>
            <li style="margin-bottom: 4px;"><strong style="color: var(--accent-color);">09. Authorities & Investigation Powers:</strong> CCA, CERT-In, Police Inspector search powers (§78/§80), and chain of custody.</li>
            <li style="margin-bottom: 4px;"><strong style="color: var(--accent-color);">10. BNS 2023 & Electronic Evidence:</strong> BNS penal mapping, Section 63 BSA 2023 certificate, and *Arjun Panditrao* doctrine.</li>
          </ul>
        `
      },
      right: {
        pageNumber: 4,
        runningHead: "Chapter 1: What is Cybercrime?",
        content: `
          <h1>Chapter 1: Introduction to Cybercrime</h1>
          <h3>1.1 The Technical Concept of Cybercrime</h3>
          <p>Traditional criminal law (IPC / BNS) originated to protect tangible physical property, bodily integrity, and territorial spaces. A physical theft requires an offender to physically take movable property out of a person's possession.</p>
          <p>In digital crimes, the asset stolen is intangible electronic data, bits, cryptographic keys, or account access tokens. The victim does not necessarily lose possession of the original bytes—the perpetrator makes an exact duplicate copy, often operating thousands of kilometres away across multiple router hops.</p>
          
          <div class="book-callout">
            <strong>Legal Definition:</strong> Cybercrime is an umbrella term encompassing any unlawful activity where computers, communication devices, or electronic networks serve as the <strong>target</strong> of the intrusion, the <strong>instrument</strong> of commission, or the <strong>environment/facilitator</strong> of the offence.
          </div>

          <p>Under Indian jurisprudence, cybercrime is not codified as a single standalone crime. It is addressed through specific statutory provisions in the <strong>Information Technology Act, 2000</strong> and substantive offences under the <strong>Bharatiya Nyaya Sanhita, 2023</strong>.</p>
        `
      }
    },

    // Spread 2: Fundamental Roles of Computer & Characteristics Part I (Pages 5 & 6)
    {
      spreadId: 2,
      left: {
        pageNumber: 5,
        runningHead: "Chapter 1: Roles of a Computer",
        content: `
          <h2>1.2 Three Fundamental Roles of a Computer</h2>
          <p>Forensic examination begins by determining the precise operational role played by the computer system:</p>

          <div style="background: var(--page-bg-subtle); padding: 7px 11px; border-left: 3px solid var(--accent-color); margin-bottom: 8px; border-radius: 0 4px 4px 0; font-size: 0.81rem;">
            <strong style="color: var(--accent-color);">1. Computer as a Target:</strong><br>
            The hardware, operating system, or stored database is the intended victim. Objectives include compromising confidentiality, corrupting databases, or sabotaging service availability.<br>
            <em>Forensic Focus:</em> Kernel rootkit analysis, event log tampering, memory shellcode extraction, crash dump analysis.
          </div>

          <div style="background: var(--page-bg-subtle); padding: 7px 11px; border-left: 3px solid var(--accent-gold); margin-bottom: 8px; border-radius: 0 4px 4px 0; font-size: 0.81rem;">
            <strong style="color: var(--accent-gold);">2. Computer as an Instrument:</strong><br>
            A device or communication network is utilized as a weapon or tool to execute an offence against a remote victim.<br>
            <em>Forensic Focus:</em> Browser cache extraction, outgoing SMTP email headers, MAC spoofing logs, keystroke injector logs.
          </div>

          <div style="background: var(--page-bg-subtle); padding: 7px 11px; border-left: 3px solid #15803d; border-radius: 0 4px 4px 0; font-size: 0.81rem;">
            <strong style="color: #15803d;">3. Computer as an Environment / Facilitator:</strong><br>
            Online platforms provide the virtual venue or repository for illegal operations, illicit markets, or conspiracy.<br>
            <em>Forensic Focus:</em> Tor dark web node analysis, cryptocurrency blockchain ledger tracing, encrypted messaging database parsing.
          </div>
        `
      },
      right: {
        pageNumber: 6,
        runningHead: "Chapter 1: Characteristics (Part I)",
        content: `
          <h2>1.3 Important Characteristics of Cybercrime</h2>
          <p>Cybercrime exhibits distinctive characteristics that differentiate it from physical crimes:</p>
          
          <h3>A. Borderless Nature & Sovereignty Conflicts</h3>
          <p>The TCP/IP internet protocol has no concept of political borders. A cybercriminal in Russia may bounce command-and-control packets through a compromised VPN proxy in Germany to breach a critical power grid server in New Delhi.</p>
          <p>The crime simultaneously involves three sovereign nations. Obtaining ISP logs requires formal <strong>Mutual Legal Assistance Treaties (MLAT)</strong> or Letters Rogatory. India's IT Act addresses extraterritorial acts under <strong>Section 75</strong> provided the target computer system is located in India.</p>

          <h3>B. Speed, Automation & Attack Multipliers</h3>
          <p>Physical burglaries require physical travel, reconnaissance, and manual effort. A cybercriminal uses automated scripts, credential-stuffing tools, and distributed botnets to scan millions of open ports and distribute hundreds of thousands of phishing links within seconds.</p>

          <h3>C. Digital Concealment & Anti-Forensics</h3>
          <p>Perpetrators deploy TOR onion routing, proxy chains, burner SIMs, and anti-forensic wiper utilities. Forensic analysts counter this via IPDR analysis, packet header correlation, and timeline sequencing.</p>
        `
      }
    },

    // Spread 3: Characteristics Part II & Historical Timeline (Pages 7 & 8)
    {
      spreadId: 3,
      left: {
        pageNumber: 7,
        runningHead: "Chapter 1: Digital Evidence & Hardware Imaging",
        content: `
          <h3>D. Digital & Electronic Evidence in Practice</h3>
          <p>Unlike physical evidence (fingerprints, blood spatter), digital evidence is intangible, fragile, and easily altered by simple system boot sequences:</p>

          <div class="book-figure">
            <img src="assets/evidence_hardware.jpg" alt="Physical Write-Blocker Setup">
            <div class="book-figure-caption">
              <span>Figure 1.1: Physical Write-Blocker & Forensic Bridge</span>
              <span>Bit-Stream Duplicate Acquisition</span>
            </div>
          </div>

          <div style="font-size: 0.8rem; line-height: 1.35; margin-top: 4px;">
            <strong>The Forensic Golden Rules of Digital Seizure:</strong><br>
            • <em>Volatile Memory First:</em> If a system is running, capture volatile RAM (passwords, decryption keys, running malware) before cutting power.<br>
            • <em>Hardware Write-Blocking:</em> Connect suspect drives via a certified hardware write-blocker (Figure 1.1) which intercepts and drops all ATA/SATA write commands while permitting bit-for-bit read access.<br>
            • <em>Cryptographic Hashing:</em> Immediately compute MD5 and SHA-256 hashes of the master physical drive and verify they match the forensic clone (E01/DD image).
          </div>
        `
      },
      right: {
        pageNumber: 8,
        runningHead: "Chapter 1: Historical Timeline",
        content: `
          <h2>1.4 Historical Development of Cybercrime</h2>
          <p>Cybercrime evolved directly alongside computing architecture and telecommunications:</p>

          <table class="book-table">
            <thead>
              <tr><th>Period</th><th>Dominant Threats & Historical Milestones</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1960s–1970s</strong></td><td>Phone phreaking (John Draper / Captain Crunch), mainframe terminal unauthorized time-sharing misuse.</td></tr>
              <tr><td><strong>1980s</strong></td><td>Personal computer malware (Brain virus 1986, Morris Worm 1988), early federal computer fraud statutes.</td></tr>
              <tr><td><strong>1990s</strong></td><td>Expansion of the World Wide Web, commercial defacements, Nigerian 419 advance-fee frauds, email spoofing.</td></tr>
              <tr><td><strong>2000s</strong></td><td>Organized cyber syndicates, banking trojans (Zeus), automated credit card skimming, enactment of India's IT Act 2000.</td></tr>
              <tr><td><strong>2010s</strong></td><td>Ransomware-as-a-Service (WannaCry 2017), state-sponsored APT espionage, mobile payment fraud, dark web cryptocurrency.</td></tr>
              <tr><td><strong>2020s</strong></td><td>AI deepfake audio/video clones, critical infrastructure cyber-sabotage, supply-chain attacks, BNS 2023 legal integration.</td></tr>
            </tbody>
          </table>

          <div class="book-callout">
            <strong>Historical Insight:</strong> The shift from solitary thrill-seeking hackers in the 1980s to transnational state-sponsored cyber syndicates in the 2020s prompted India to enact Section 66F (Cyberterrorism) in the 2008 IT Amendment.
          </div>
        `
      }
    },

    // Spread 4: Core Disciplines & The CIA Triad (Pages 9 & 10)
    {
      spreadId: 4,
      left: {
        pageNumber: 9,
        runningHead: "Chapter 1: Cybercrime vs Cybersecurity vs Forensics",
        content: `
          <h2>1.5 Cybercrime vs Cybersecurity vs Forensics</h2>
          <p>These four disciplines form the foundation of modern cyber enforcement:</p>

          <table class="book-table">
            <thead>
              <tr><th>Discipline</th><th>Core Objective</th><th>Practical Action</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Cybercrime</strong></td><td>Describes unlawful digital conduct</td><td>Stealing bank credentials, ransomware deployment</td></tr>
              <tr><td><strong>Cybersecurity</strong></td><td>Protects systems, networks, and data</td><td>Implementing MFA, firewalls, threat patching</td></tr>
              <tr><td><strong>Cyber Forensics</strong></td><td>Preserves, extracts & analyzes evidence</td><td>Acquiring bit-stream images, RAM parsing</td></tr>
              <tr><td><strong>Cyber Law</strong></td><td>Defines offences, rights & penalties</td><td>Prosecution under IT Act §66C, §66D & BNS</td></tr>
            </tbody>
          </table>

          <div class="book-figure">
            <img src="assets/forensic_lab.jpg" alt="Cyber Forensic Science Laboratory">
            <div class="book-figure-caption">
              <span>Figure 1.2: Digital Forensic Examination Lab</span>
              <span>Hex Inspection & Memory Analysis</span>
            </div>
          </div>

          <div style="font-size: 0.78rem; line-height: 1.34; margin-top: 4px;">
            <strong>5 Golden Stages of Forensic Examination:</strong><br>
            1. <em>Identification</em> (Locating potential evidence) &bull; 2. <em>Preservation</em> (Chain of custody & write-blockers) &bull; 3. <em>Extraction</em> (Bit-stream cloning) &bull; 4. <em>Analysis</em> (Artifact parsing) &bull; 5. <em>Presentation</em> (Court-admissible Section 63 BSA certificate).
          </div>
        `
      },
      right: {
        pageNumber: 10,
        runningHead: "Chapter 1: The CIA Triad in Information Security",
        content: `
          <h2>1.6 The CIA Triad in Information Security</h2>
          <p>The foundational security model used by courts and forensic investigators to evaluate digital harms:</p>

          <div style="display: flex; flex-direction: column; gap: 6px; margin: 8px 0;">
            <div style="padding: 6px 10px; background: var(--page-bg-subtle); border-left: 3px solid #b91c1c; border-radius: 4px; font-size: 0.8rem;">
              <strong style="color: #b91c1c;">1. Confidentiality:</strong> Preventing unauthorized disclosure of sensitive data.<br>
              <em>Breach Scenarios:</em> Data leaks, corporate espionage, packet sniffing, credential theft.<br>
              <em>Safeguards:</em> End-to-end encryption, role-based access control (RBAC).
            </div>
            <div style="padding: 6px 10px; background: var(--page-bg-subtle); border-left: 3px solid #1d4ed8; border-radius: 4px; font-size: 0.8rem;">
              <strong style="color: #1d4ed8;">2. Integrity:</strong> Maintaining the accuracy, completeness, and authenticity of data.<br>
              <em>Breach Scenarios:</em> Database tampering, message interception, electronic forgery.<br>
              <em>Safeguards:</em> Cryptographic checksums (SHA-256), digital signatures, audit logs.
            </div>
            <div style="padding: 6px 10px; background: var(--page-bg-subtle); border-left: 3px solid #15803d; border-radius: 4px; font-size: 0.8rem;">
              <strong style="color: #15803d;">3. Availability:</strong> Ensuring authorized users have timely, reliable access to resources.<br>
              <em>Breach Scenarios:</em> Distributed Denial-of-Service (DDoS) attacks, ransomware lockouts.<br>
              <em>Safeguards:</em> Redundant servers, automated failovers, offline immutable backups.
            </div>
          </div>

          <div class="book-callout case">
            <strong>Multi-Pillar Compromise:</strong> Modern ransomware violates Availability by encrypting production files and violates Confidentiality by threatening to publish stolen proprietary databases on the dark web.
          </div>
        `
      }
    },

    // Spread 5: Classification by Victim (Pages 11 & 12)
    {
      spreadId: 5,
      left: {
        pageNumber: 11,
        runningHead: "Chapter 2: Classification by Victim (Part I)",
        content: `
          <h1>Chapter 2: Classification of Cybercrimes</h1>
          <p>Two frameworks are essential for DSSSB: classification by victim or protected interest, and classification by the role of technology.</p>

          <h3>2.1 Classification According to Victim</h3>
          
          <h3>A. Cybercrimes Against Individuals</h3>
          <p>These target an individual person's money, reputation, personal safety, privacy, or electronic identity.</p>
          <p>Examples include cyberstalking, identity theft, phishing, online impersonation, digital harassment, fraudulent payment requests, and non-consensual distribution of intimate images.</p>

          <h3>B. Cybercrimes Against Property</h3>
          <p>These target valuable assets such as electronic data, financial instruments, intellectual property, or computer resources.</p>
          <p>Examples include proprietary source-code theft, ransomware extortion, copyright infringement, malicious database deletion, and unauthorized access to confidential trade secrets.</p>

          <div class="book-callout">
            <strong>Digital Property Distinction:</strong> Copying electronic data does not remove the original file. Unauthorized copying and intellectual property infringement raise fundamentally different legal considerations from physical theft under conventional criminal law.
          </div>
        `
      },
      right: {
        pageNumber: 12,
        runningHead: "Chapter 2: Classification by Victim (Part II)",
        content: `
          <h3>C. Cybercrimes Against Organizations</h3>
          <p>Businesses, hospitals, universities, banks, and government agencies can be victims. Examples include corporate espionage, Business Email Compromise (BEC), ransomware against hospitals, customer data leaks, and Distributed Denial-of-Service attacks.</p>

          <h3>D. Cybercrimes Against Society</h3>
          <p>Activities that harm broader public and social interests: large-scale online fraud networks, child sexual abuse material (CSAM), unlawful hate speech, and organized online criminal operations.</p>

          <h3>E. Crimes Against Government & National Security</h3>
          <p>Attacks targeting government databases, defence networks, or critical infrastructure.</p>

          <div class="book-callout case">
            <span class="sec-badge it-act">IT Act §66F</span>
            <strong>Cyberterrorism:</strong> An attack on a government portal is not automatically cyberterrorism. Section 66F requires intent to threaten the unity, integrity, security or sovereignty of India, or strike terror, carrying punishment up to <strong>imprisonment for life</strong>.
          </div>
        `
      }
    },

    // Spread 6: Cyber-Dependent vs Conventional Crime (Pages 13 & 14)
    {
      spreadId: 6,
      left: {
        pageNumber: 13,
        runningHead: "Chapter 2: Cyber-Dependent vs Cyber-Enabled",
        content: `
          <h2>2.2 Cyber-Dependent vs Cyber-Enabled Crimes</h2>
          <p>International and Indian forensic practice classifies offences based on technological reliance:</p>

          <div style="background: var(--page-bg-subtle); padding: 10px 12px; border-left: 3px solid var(--accent-color); margin-bottom: 12px; border-radius: 0 4px 4px 0;">
            <strong style="color: var(--accent-color);">1. Cyber-Dependent Crimes:</strong><br>
            These offences can <em>only</em> be committed through the use of digital technology and computer networks. The technology is both the instrument and the target.<br>
            <em>Examples:</em> Developing and spreading ransomware, unauthorized penetration into secure databases, and launching Distributed Denial of Service (DDoS) attacks.
          </div>

          <div style="background: var(--page-bg-subtle); padding: 10px 12px; border-left: 3px solid var(--accent-gold); margin-bottom: 12px; border-radius: 0 4px 4px 0;">
            <strong style="color: var(--accent-gold);">2. Cyber-Enabled Crimes:</strong><br>
            Conventional offences that can exist without computers, but where digital tools and the internet vastly amplify their scale, reach, speed, and anonymity.<br>
            <em>Examples:</em> Online financial cheating, cyberstalking, digital extortion, phishing fraud, and online defamation.
          </div>

          <div class="book-callout">
            <strong>Forensic Relevance:</strong> Cyber-dependent crimes require low-level artifact analysis (packet traces, memory dumps, exploit shellcode), whereas cyber-enabled crimes often focus on communication logs and transactional records.
          </div>
        `
      },
      right: {
        pageNumber: 14,
        runningHead: "Chapter 2: Conventional vs Cybercrime",
        content: `
          <h2>2.3 Cybercrime versus Conventional Crime</h2>
          <table class="book-table">
            <thead>
              <tr><th>Basis</th><th>Conventional Crime</th><th>Cybercrime</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Location</strong></td><td>Physically identifiable</td><td>May span multiple countries</td></tr>
              <tr><td><strong>Contact</strong></td><td>Often physical presence</td><td>Frequently remote / anonymous</td></tr>
              <tr><td><strong>Evidence</strong></td><td>Physical & eyewitnesses</td><td>Digital logs, packets, hashes</td></tr>
              <tr><td><strong>Identification</strong></td><td>Physical description, traces</td><td>IPs, accounts, metadata trails</td></tr>
              <tr><td><strong>Scale</strong></td><td>Limited by physical effort</td><td>Rapidly scalable via automation</td></tr>
              <tr><td><strong>Automation</strong></td><td>Usually minor role</td><td>Central to mass operations</td></tr>
              <tr><td><strong>Investigation</strong></td><td>Physical field methods</td><td>Specialized digital forensics</td></tr>
              <tr><td><strong>Jurisdiction</strong></td><td>Geographically clear</td><td>Multi-jurisdictional complexity</td></tr>
            </tbody>
          </table>

          <div class="book-callout">
            These distinctions represent tendencies rather than absolute rules. Conventional fraud can have international aspects, and cybercrime can occur entirely within a single room.
          </div>
        `
      }
    },

    // Spread 7: Offender Motives & Cyberstalking (Pages 15 & 16)
    {
      spreadId: 7,
      left: {
        pageNumber: 15,
        runningHead: "Chapter 2: Offender Motives & Intent",
        content: `
          <h2>2.4 Reasons for Committing Cybercrime</h2>
          <p>Understanding motives helps forensic investigators profile threats and establish culpability:</p>
          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li><strong>Financial Gain:</strong> The primary driver behind ransomware, credential theft, payment fraud, and corporate extortion.</li>
            <li><strong>Revenge & Personal Disputes:</strong> Disgruntled former employees or domestic disputes misusing credentials to damage systems or reputations.</li>
            <li><strong>Ideological or Political Goals:</strong> Hacktivism to promote causes or disrupt operations. Conduct must be evaluated against statutory terrorism criteria.</li>
            <li><strong>Espionage:</strong> State-sponsored or corporate espionage targeting intellectual property, defence research, and strategic secrets.</li>
            <li><strong>Challenge & Recognition:</strong> Thrill-seekers defeating security controls for notoriety. Curiosity does not make unauthorized conduct lawful.</li>
            <li><strong>Sexual Exploitation & Harassment:</strong> Coercion, stalking, and non-consensual image distribution.</li>
          </ul>

          <div class="book-callout">
            <strong>Motivation, Intention, and Authorization are NOT the Same:</strong><br>
            Under the IT Act, <span class="sec-badge it-act">Section 43</span> handles civil compensation for unauthorized access, while <span class="sec-badge it-act">Section 66</span> criminalizes those same acts when done <em>dishonestly or fraudulently</em>.
          </div>
        `
      },
      right: {
        pageNumber: 16,
        runningHead: "Chapter 3: Crimes Against Individuals - Stalking",
        content: `
          <h1>Chapter 3: Crimes Against Individuals</h1>
          <h3>3.1 Cyberstalking & Online Harassment</h3>
          <p>Cyberstalking is the repeated use of electronic communications, mobile messaging, or internet platforms to monitor, pursue, harass, or intimidate an individual.</p>

          <div class="case-card">
            <div class="case-card-header">
              <span>BNS §78 (Formerly IPC §354D)</span>
              <span class="case-card-badge">Statute</span>
            </div>
            <strong>Statutory Stalking Elements:</strong> Any man who monitors the use by a woman of the internet, email or other electronic communication commits the offence of stalking.<br>
            <strong>Statutory Punishment:</strong> 1st Conviction: Up to <strong>3 years + fine</strong>; Subsequent: Up to <strong>5 years + fine</strong>.
          </div>

          <h3>Technical Manifestations of Stalking:</h3>
          <ul style="font-size: 0.8rem; line-height: 1.34;">
            <li><strong>Stalkerware / Spyware Apps:</strong> Covertly installed Android APKs capturing screen, SMS, GPS, and microphone feeds.</li>
            <li><strong>Doxxing:</strong> Maliciously publishing private home addresses, phone numbers, and identity cards to encourage harassment.</li>
            <li><strong>Social Media Impersonation:</strong> Creating duplicate profiles to deceive family members or defame the victim.</li>
          </ul>

          <p style="font-size: 0.78rem; color: var(--text-muted);">
            <em>Forensic Investigation:</em> Investigators seize the victim's device, extract APK package names using ADB commands, inspect persistent services, and obtain preservation orders (under Section 91 CrPC / BNSS) from telecom service providers for IPDR correlation.
          </p>
        `
      }
    },

    // Spread 8: Sexual Content, Deepfakes & Forgery (Pages 17 & 18)
    {
      spreadId: 8,
      left: {
        pageNumber: 17,
        runningHead: "Chapter 3: Suhas Katti Landmark Case & Obscenity",
        content: `
          <h3>3.2 Unlawful Sexual Content & Landmark Precedent</h3>
          <p>Indian law draws strict statutory boundaries across electronic sexual offences:</p>

          <ul style="font-size: 0.8rem; line-height: 1.34;">
            <li><span class="sec-badge it-act">IT Act §67</span>: Transmitting <strong>obscene</strong> material (1st: 3 yrs + ₹5L; Sub: 5 yrs + ₹10L).</li>
            <li><span class="sec-badge it-act">IT Act §67A</span>: <strong>Sexually explicit acts</strong> (1st: 5 yrs + ₹10L; Sub: 7 yrs + ₹10L).</li>
            <li><span class="sec-badge it-act">IT Act §67B</span>: <strong>Child Sexual Abuse Material (CSAM)</strong> (1st: 5 yrs + ₹10L; Sub: 7 yrs + ₹10L, read with POCSO Act).</li>
            <li><span class="sec-badge bns">BNS §77</span> <strong>Voyeurism:</strong> Non-consensual dissemination of private images.</li>
          </ul>

          <div class="case-card">
            <div class="case-card-header">
              <span>State of Tamil Nadu v. Suhas Katti (2004)</span>
              <span class="case-card-badge">Landmark Ruling</span>
            </div>
            <strong>Court:</strong> ACMM Court, Egmore, Chennai (C.C. No. 4680/2004).<br>
            <strong>Facts:</strong> Accused posted obscene messages about a divorced woman in a Yahoo Group along with her mobile phone number, leading to abusive calls.<br>
            <strong>Forensic Evidence:</strong> Chennai Cyber Crime Police traced the originating IP address via Yahoo Inc. and VSNL gateway logs to a cyber café where the accused was physically identified.<br>
            <strong>Ratio:</strong> India's <strong>first conviction under Section 67 IT Act</strong>. Held that server logs corroborating timestamp and subscriber identity form conclusive legal proof of transmission.
          </div>
        `
      },
      right: {
        pageNumber: 18,
        runningHead: "Chapter 3: Syed Asifuddin Landmark Case & Forgery",
        content: `
          <h3>3.3 Cyber Forgery & Source Code Tampering</h3>
          <p>Electronic forgery involves fabricating or altering digital records with fraudulent intent under <strong>BNS Section 336</strong>.</p>

          <div class="case-card">
            <div class="case-card-header">
              <span>Syed Asifuddin v. State of Andhra Pradesh (2005)</span>
              <span class="case-card-badge">Landmark Ruling</span>
            </div>
            <strong>Court:</strong> High Court of Andhra Pradesh (2005 CriLJ 4314).<br>
            <strong>Facts:</strong> Tata Indicom CDMA handsets were locked to their network with exclusive Electronic Serial Numbers (ESN). The accused used specialized software to reprogram and alter the ESN chips, enabling handsets to operate on Reliance Infocomm networks.<br>
            <strong>Legal Question:</strong> Does machine-readable firmware inside an integrated circuit chip constitute "computer source code" under Section 65 IT Act?<br>
            <strong>Ratio Decidendi:</strong> The High Court held that "source code" is not limited to high-level human-readable code. Machine-readable binary code, firmware, and ESN numbers burned into ROM chips fall under <strong>Section 65 IT Act</strong>. Tampering with embedded firmware is a punishable criminal offence.
          </div>

          <div class="book-callout">
            <strong>Forensic Impact:</strong> <em>Syed Asifuddin</em> established that jailbreaking, unlocking, or altering hardware firmware without authorization constitutes illegal tampering with computer source code under Indian criminal law.
          </div>
        `
      }
    },

    // Spread 9: Fraud, Impersonation & Real-World Case Study (Pages 19 & 20)
    {
      spreadId: 9,
      left: {
        pageNumber: 19,
        runningHead: "Chapter 3: Cyber Fraud & Impersonation",
        content: `
          <h3>3.4 Cyber Fraud & Personation</h3>
          <p>Using digital deception to obtain money, property, or confidential credentials:</p>
          
          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li><span class="sec-badge it-act">IT Act §66C</span>: <strong>Identity Theft:</strong> Fraudulently using another person's electronic signature, password, or unique identification feature (imprisonment up to 3 years and fine up to ₹1 lakh).</li>
            <li><span class="sec-badge it-act">IT Act §66D</span>: <strong>Cheating by Personation:</strong> Cheating by impersonating someone using any communication device or computer resource (imprisonment up to 3 years and fine up to ₹1 lakh).</li>
            <li><span class="sec-badge bns">BNS §318</span>: <strong>Cheating:</strong> General criminal cheating provisions applicable to fraud schemes.</li>
          </ul>

          <div class="scenario-card">
            <div class="scenario-title">Real-Life Investigation: SIM-Swap & Reverse-Charge UPI Fraud</div>
            <strong>Modus Operandi:</strong> Fraudsters bribe telecom retail staff to issue a duplicate SIM card using forged Aadhaar KYC documents. The victim's original SIM loses network connectivity. The criminals immediately install UPI banking apps, intercept dynamic OTP verification codes, and drain savings accounts via rapid peer-to-peer transfers.<br>
            <strong>Forensic Trail:</strong> Analysts cross-verify Telecom Point of Sale (PoS) agent logs, IMEI change timestamps, IPDR connections, and mule bank account transaction hops.
          </div>
        `
      },
      right: {
        pageNumber: 20,
        runningHead: "Chapter 3: Cosmos Bank Cyber Heist Case Study",
        content: `
          <h3>3.5 Real-Life Case Study: Cosmos Bank Cyber Heist</h3>
          <p>The largest cyber banking theft in Indian financial history occurred in Pune in August 2018:</p>

          <div class="book-figure">
            <img src="assets/banking_cyber_heist.jpg" alt="Cosmos Bank ATM Switch Compromise Analysis">
            <div class="book-figure-caption">
              <span>Figure 3.1: ATM Switch Proxy Compromise</span>
              <span>ISO 8583 Malicious Packet Injection</span>
            </div>
          </div>

          <div class="scenario-card" style="margin-top: 4px;">
            <div class="scenario-title">The Pune Cosmos Bank Incident (₹94 Crores Lost)</div>
            <strong>Attack Vector:</strong> Threat actors infiltrated the cooperative bank's network via spear-phishing and installed malware on a server connecting the ATM Switch to the Central Payment Gateway. They created a rogue proxy switch.<br>
            <strong>Mechanism:</strong> The malware severed communication between the ATM switch and the Core Banking Server (CBS). When cloned debit cards were swiped across 28 countries, the rogue proxy generated fake "00 - Approved" ISO 8583 authorization responses, bypassing balance checks completely.<br>
            <strong>Forensic Takeaway:</strong> Banking networks require hardware segregation, mutual TLS authentication between switches, and real-time reconciliation between switch transactions and core ledger balances.
          </div>
        `
      }
    },

    // Spread 10: IPR in Cyberspace & Malware Ecosystem (Pages 21 & 22)
    {
      spreadId: 10,
      left: {
        pageNumber: 21,
        runningHead: "Chapter 4: Intellectual Property in Cyberspace",
        content: `
          <h1>Chapter 4: Crimes Against Property & Systems</h1>
          <h3>4.1 Intellectual Property Rights in Cyberspace</h3>
          <p>Digital technology enables frictionless, exact duplication of intellectual assets, creating distinct legal and forensic challenges:</p>

          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li><strong>Software Piracy:</strong> Unauthorized copying, distributing, or cracking proprietary commercial software.</li>
            <li><strong>Copyright Infringement:</strong> Illicit mass dissemination of digital books, media, databases, and creative assets.</li>
            <li><strong>Trade Secret & Source Code Theft:</strong> Exfiltrating proprietary algorithms or system designs.</li>
          </ul>

          <div class="book-callout">
            <span class="sec-badge it-act">IT Act §65</span>
            <strong>Tampering with Computer Source Documents:</strong> Concealing, destroying, or altering computer source code required to be maintained by law is punishable with imprisonment up to <strong>3 years, or fine up to ₹2 lakh, or both</strong>.
          </div>

          <p style="font-size: 0.82rem; color: var(--text-muted);">
            Section 65 is frequently invoked in corporate espionage and source-code sabotage cases where developers unlawfully delete or tamper with institutional repositories before departing.
          </p>
        `
      },
      right: {
        pageNumber: 22,
        runningHead: "Chapter 4: Malicious Software Ecosystem",
        content: `
          <h3>4.2 Malicious Software (Malware) Ecosystem</h3>
          <p>Software designed with malicious intent to disrupt operations, gather intelligence, or gain unauthorized control:</p>

          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li><strong>Computer Virus:</strong> Attaches to legitimate executable host files and replicates when executed.</li>
            <li><strong>Computer Worm:</strong> Standalone malicious program that self-replicates across networks without human intervention.</li>
            <li><strong>Trojan Horse:</strong> Disguises itself as legitimate software while executing covert malicious routines.</li>
            <li><strong>Spyware & Keyloggers:</strong> Silently monitors keystrokes, screen captures, and exfiltrates credentials.</li>
            <li><strong>Rootkits:</strong> Operates at kernel level to conceal unauthorized administrative access.</li>
            <li><strong>Botnets:</strong> Networks of compromised zombie devices controlled by command-and-control (C2) servers.</li>
          </ul>

          <div class="book-callout">
            <span class="sec-badge it-act">IT Act §43(c) & §66</span> Introducing computer contaminants or viruses triggers civil damages under §43 and criminal liability under §66.
          </div>
        `
      }
    },

    // Spread 11: Ransomware & Denial of Service (Pages 23 & 24)
    {
      spreadId: 11,
      left: {
        pageNumber: 23,
        runningHead: "Chapter 4: AIIMS Delhi Ransomware Case Study",
        content: `
          <h3>4.3 Ransomware & Critical Infrastructure Attacks</h3>
          <p>Ransomware encrypts critical databases using hybrid cryptography (RSA + AES), demanding cryptocurrency ransom for decryption keys.</p>

          <div class="scenario-card">
            <div class="scenario-title">Real-Life Incident: AIIMS New Delhi Ransomware Attack (Nov 2022)</div>
            <strong>Context:</strong> India's premier public medical institution suffered a catastrophic ransomware breach that crippled its e-Hospital servers, patient registration, billing, lab reports, and appointment portals for nearly two weeks.<br>
            <strong>Technical Findings:</strong> Attackers gained unauthorized access via misconfigured remote access protocols and lateral movement. Approximately 5 physical servers hosting critical patient databases were encrypted. Threat actors demanded an estimated ₹200 crore ransom in cryptocurrency.<br>
            <strong>Forensic Incident Response:</strong><br>
            1. CERT-In and Delhi Police Cyber Cell immediately isolated the infected VLAN.<br>
            2. Volatile RAM dumps and disk images were acquired before remediation.<br>
            3. Restored systems from clean, offline immutable tape backups without paying ransom.<br>
            <strong>Statutory Charges:</strong> Invoked <span class="sec-badge it-act">IT Act §66F</span> (Cyberterrorism on Critical Information Infrastructure) and extortion under criminal law.
          </div>
        `
      },
      right: {
        pageNumber: 24,
        runningHead: "Chapter 4: Denial of Service (DoS & DDoS)",
        content: `
          <h3>4.4 Denial of Service (DoS) & Distributed DoS</h3>
          <p>An attack designed to overwhelm computing resources or bandwidth, making services unavailable to legitimate users.</p>

          <h3>Key Distinctions:</h3>
          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li><strong>DoS (Single Source):</strong> Flooding traffic originates from a single machine or connection. Easily blocked via IP filtering.</li>
            <li><strong>DDoS (Distributed):</strong> Traffic is generated simultaneously by thousands of compromised botnet nodes across the globe.</li>
            <li><strong>Volumetric Attacks:</strong> Saturation of internet bandwidth using UDP floods or NTP/DNS amplification.</li>
            <li><strong>Application Layer Attacks:</strong> Targeting specific web endpoints (e.g., HTTP GET/POST floods) that exhaust database connection pools.</li>
          </ul>

          <div class="book-callout">
            <span class="sec-badge it-act">IT Act §43(f) & §66</span> Denying access to authorized persons is a civil wrong under Section 43(f) and punishable criminally under Section 66.
          </div>
        `
      }
    },

    // Spread 12: Vandalism, Hacking & Cyberterrorism (Pages 25 & 26)
    {
      spreadId: 12,
      left: {
        pageNumber: 25,
        runningHead: "Chapter 4: Vandalism, Hacking & Defacement",
        content: `
          <h3>4.5 Computer Vandalism & Hacking</h3>
          <p>Vandalism in cyberspace involves the deliberate destruction, alteration, or defacement of digital property without financial motive:</p>

          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li><strong>Website Defacement:</strong> Replacing legitimate web page content with political slogans, logos, or insults.</li>
            <li><strong>Data Wiping:</strong> Overwriting master boot records (MBR) or critical system databases to cause irreparable outage.</li>
            <li><strong>Logic Bombs:</strong> Malicious code embedded into software scheduled to execute upon a specific trigger (e.g., employee termination).</li>
          </ul>

          <div class="book-callout">
            <strong>Civil vs Criminal Liability under IT Act:</strong><br>
            <span class="sec-badge it-act">Section 43</span> imposes compensation up to ₹1 crore (handled by Adjudicating Officers).<br>
            <span class="sec-badge it-act">Section 66</span> imposes up to <strong>3 years imprisonment and/or fine up to ₹5 lakh</strong> if Section 43 acts are committed <em>dishonestly or fraudulently</em>.
          </div>
        `
      },
      right: {
        pageNumber: 26,
        runningHead: "Chapter 5: Cyberterrorism under Section 66F",
        content: `
          <h1>Chapter 5: Cyberterrorism, Defamation & Society</h1>
          <h3>5.1 Cyberterrorism</h3>
          <p>The convergence of cyberspace and terrorism to commit acts that threaten national security or strike terror in the public.</p>

          <div class="book-callout case">
            <span class="sec-badge it-act">IT Act §66F</span> <strong>Statutory Elements of Cyberterrorism:</strong><br>
            Punishes anyone who, with intent to threaten the unity, integrity, security or sovereignty of India, or strike terror in people:<br>
            1. Denies access to authorized persons, or attempts to penetrate or access computer resources without authorization.<br>
            2. Introduces computer contaminants resulting in death, destruction of property, or damage to critical infrastructure.<br>
            3. Knowingly accesses restricted data affecting foreign relations, public order, or state secrets.<br>
            <strong>Statutory Penalty:</strong> Punishable with <strong>imprisonment for life</strong>.
          </div>

          <p style="font-size: 0.8rem; color: var(--text-muted);">
            Section 66F is one of the most severe penal provisions in the IT Act, requiring specific mens rea beyond simple unauthorized hacking.
          </p>
        `
      }
    },

    // Spread 13: Speech, Defamation & Privacy (Pages 27 & 28)
    {
      spreadId: 13,
      left: {
        pageNumber: 27,
        runningHead: "Chapter 5: Shreya Singhal Landmark Ruling",
        content: `
          <h3>5.2 Cyber Defamation & Section 66A Invalidation</h3>
          <p>Online speech balances individual reputation against constitutional free expression:</p>

          <div class="case-card">
            <div class="case-card-header">
              <span>Shreya Singhal v. Union of India (2015)</span>
              <span class="case-card-badge">Supreme Court</span>
            </div>
            <strong>Bench:</strong> J. Chelameswar & Rohinton F. Nariman, JJ. (AIR 2015 SC 1523).<br>
            <strong>Background:</strong> Two young women were arrested under Section 66A IT Act for posting comments on Facebook questioning the total shutdown of Mumbai following a politician's demise.<br>
            <strong>Ratio Decidendi:</strong> The Supreme Court <strong>struck down Section 66A in its entirety as unconstitutional</strong>. The Court held:<br>
            1. The section suffered from <em>overbreadth and vagueness</em>—terms like "grossly offensive" or "annoyance" had no statutory definition.<br>
            2. It produced an unconstitutional <em>chilling effect</em> on legitimate speech under Article 19(1)(a).<br>
            3. Section 69A (website blocking) was upheld with mandatory procedural safeguards.
          </div>

          <div class="case-card" style="margin-top: 4px;">
            <div class="case-card-header">
              <span>SMC Pneumatics (India) Pvt. Ltd. v. Jogesh Kwatra (2001)</span>
              <span class="case-card-badge">Delhi High Court</span>
            </div>
            <strong>Significance:</strong> India's <strong>first case of cyber defamation</strong>. The Delhi High Court granted an ex-parte injunction restraining a disgruntled employee from transmitting defamatory, derogatory emails about the company and its managing director.
          </div>
        `
      },
      right: {
        pageNumber: 28,
        runningHead: "Chapter 5: Puttaswamy Landmark Privacy Ruling",
        content: `
          <h3>5.3 Privacy & Digital Surveillance Jurisprudence</h3>
          <p>Digital privacy is the constitutional shield against arbitrary electronic surveillance and algorithmic overreach:</p>

          <div class="case-card">
            <div class="case-card-header">
              <span>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</span>
              <span class="case-card-badge">9-Judge Bench</span>
            </div>
            <strong>Citation:</strong> (2017) 10 SCC 1.<br>
            <strong>Ratio Decidendi:</strong> A unanimous 9-judge Constitution Bench declared that the <strong>Right to Privacy is a Fundamental Right</strong> intrinsically guaranteed under Article 21 (Life & Personal Liberty) and Part III of the Constitution.<br>
            <strong>The Three-Fold Proportionality Test:</strong> Any state intrusion, interception, or electronic surveillance must satisfy:<br>
            1. <em>Legality:</em> Authorized by an enacted statutory law (not executive discretion).<br>
            2. <em>Legitimate Aim:</em> Must pursue a recognized state objective (e.g. national security, crime prevention).<br>
            3. <em>Proportionality:</em> The measure must be strictly proportional to the object and use the least intrusive technique.
          </div>

          <div class="book-callout">
            <strong>Legislative Consequence:</strong> <em>Puttaswamy</em> led directly to the enactment of the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>, mandating data fiduciary accountability and consent architectures.
          </div>
        `
      }
    },

    // Spread 14: IT Act 2000 Origins & Scope (Pages 29 & 30)
    {
      spreadId: 14,
      left: {
        pageNumber: 29,
        runningHead: "Chapter 6: Genesis & Objectives of IT Act",
        content: `
          <h1>Chapter 6: Indian Cyber Law Framework</h1>
          <h3>6.1 Genesis & UNCITRAL Model Law</h3>
          <p>Prior to 2000, Indian criminal and commercial statutes assumed paper-based transactions, physical signatures, and geographic boundaries.</p>

          <div class="book-callout">
            <strong>International Foundation:</strong> The IT Act, 2000 was drafted based on the <strong>UNCITRAL Model Law on Electronic Commerce (1996)</strong> adopted by the UN General Assembly. India was among the early nations to enact comprehensive e-commerce legislation.
          </div>

          <h3>Primary Objectives of the IT Act:</h3>
          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li>Grant legal recognition to transactions carried out by electronic data interchange.</li>
            <li>Provide legal recognition to digital signatures for authentication of information.</li>
            <li>Facilitate electronic filing of documents with government agencies (e-governance).</li>
            <li>Amend the Indian Penal Code, Indian Evidence Act, and Bankers' Books Evidence Act to accommodate electronic evidence.</li>
          </ul>
        `
      },
      right: {
        pageNumber: 30,
        runningHead: "Chapter 6: Scope & Extra-Territorial Jurisdiction",
        content: `
          <h3>6.2 Extent, Application & Extra-Territoriality</h3>
          <p>Understanding the statutory jurisdiction of the Information Technology Act, 2000:</p>

          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li><span class="sec-badge it-act">Section 1(2)</span>: Extends to the <strong>whole of India</strong> and applies also to any offence or contravention committed outside India by any person.</li>
            <li><span class="sec-badge it-act">Section 75</span>: <strong>Extra-Territorial Jurisdiction:</strong> Applies to offences committed outside India if the act or conduct involves a <em>computer, computer system, or computer network located in India</em>.</li>
          </ul>

          <div class="book-callout">
            <strong>Exclusions under the First Schedule:</strong><br>
            The IT Act does NOT apply to certain legal instruments (which still require traditional paper formats):<br>
            1. Negotiable instruments (other than cheques).<br>
            2. Powers-of-attorney.<br>
            3. Trusts.<br>
            4. Wills and testamentary dispositions.<br>
            5. Contracts for the sale or conveyance of immovable property.
          </div>
        `
      }
    },

    // Spread 15: IT Act Master Penalties Table (Part 1) (Pages 31 & 32)
    {
      spreadId: 15,
      left: {
        pageNumber: 31,
        runningHead: "Chapter 7: IT Act Master Penalties (Part 1)",
        content: `
          <h1>Chapter 7: Master Table of Key Penalties</h1>
          <p>High-priority statutory sections frequently tested in DSSSB examinations:</p>

          <table class="book-table">
            <thead>
              <tr><th>Section</th><th>Offence / Subject</th><th>Statutory Punishment</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="sec-badge it-act">§43</span></td>
                <td>Damage to computer system without permission</td>
                <td>Compensation up to ₹1 crore (Civil Adjudication)</td>
              </tr>
              <tr>
                <td><span class="sec-badge it-act">§65</span></td>
                <td>Tampering with computer source documents</td>
                <td>Imprisonment up to 3 years and/or fine up to ₹2 lakh</td>
              </tr>
              <tr>
                <td><span class="sec-badge it-act">§66</span></td>
                <td>Computer related offences (Dishonest §43)</td>
                <td>Imprisonment up to 3 years and/or fine up to ₹5 lakh</td>
              </tr>
              <tr>
                <td><span class="sec-badge it-act">§66B</span></td>
                <td>Receiving stolen computer resource</td>
                <td>Imprisonment up to 3 years and/or fine up to ₹1 lakh</td>
              </tr>
              <tr>
                <td><span class="sec-badge it-act">§66C</span></td>
                <td>Identity theft (passwords/signatures)</td>
                <td>Imprisonment up to 3 years and/or fine up to ₹1 lakh</td>
              </tr>
              <tr>
                <td><span class="sec-badge it-act">§66D</span></td>
                <td>Cheating by personation using computer</td>
                <td>Imprisonment up to 3 years and/or fine up to ₹1 lakh</td>
              </tr>
              <tr>
                <td><span class="sec-badge it-act">§66E</span></td>
                <td>Violation of bodily privacy</td>
                <td>Imprisonment up to 3 years and/or fine up to ₹2 lakh</td>
              </tr>
            </tbody>
          </table>
        `
      },
      right: {
        pageNumber: 32,
        runningHead: "Chapter 7: IT Act Master Penalties (Part 2)",
        content: `
          <h2>7.1 Master Table of Key Penalties (Continued)</h2>
          
          <table class="book-table">
            <thead>
              <tr><th>Section</th><th>Offence / Subject</th><th>Statutory Punishment</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="sec-badge it-act">§66F</span></td>
                <td>Cyberterrorism</td>
                <td><strong>Imprisonment for Life</strong></td>
              </tr>
              <tr>
                <td><span class="sec-badge it-act">§67</span></td>
                <td>Publishing/transmitting obscene content</td>
                <td>1st: 3 yrs + ₹5L; Sub: 5 yrs + ₹10L</td>
              </tr>
              <tr>
                <td><span class="sec-badge it-act">§67A</span></td>
                <td>Sexually explicit acts transmission</td>
                <td>1st: 5 yrs + ₹10L; Sub: 7 yrs + ₹10L</td>
              </tr>
              <tr>
                <td><span class="sec-badge it-act">§67B</span></td>
                <td>Child sexual abuse material (CSAM)</td>
                <td>1st: 5 yrs + ₹10L; Sub: 7 yrs + ₹10L</td>
              </tr>
              <tr>
                <td><span class="sec-badge it-act">§70</span></td>
                <td>Unauthorized access to Protected System</td>
                <td>Imprisonment up to 10 years and fine</td>
              </tr>
              <tr>
                <td><span class="sec-badge it-act">§72</span></td>
                <td>Breach of confidentiality and privacy</td>
                <td>Imprisonment up to 2 years and/or fine up to ₹1 lakh</td>
              </tr>
              <tr>
                <td><span class="sec-badge it-act">§72A</span></td>
                <td>Disclosure of info in breach of contract</td>
                <td>Imprisonment up to 3 years and/or fine up to ₹5 lakh</td>
              </tr>
            </tbody>
          </table>

          <div class="book-callout">
            <strong>Exam Note:</strong> Notice how Section 70 (Protected Systems) and Section 66F (Cyberterrorism) carry the highest statutory prison terms in the Act.
          </div>
        `
      }
    },

    // Spread 16: Intermediary Liability & Digital Signatures (Pages 33 & 34)
    {
      spreadId: 16,
      left: {
        pageNumber: 33,
        runningHead: "Chapter 7: Baazee.com Case & Section 79",
        content: `
          <h3>7.2 Intermediary Safe Harbour & Landmark Precedent</h3>
          <p>An intermediary includes telecom service providers, ISPs, search engines, and e-commerce platforms.</p>

          <div class="case-card">
            <div class="case-card-header">
              <span>Avnish Bajaj v. State (N.C.T.) of Delhi (2005)</span>
              <span class="case-card-badge">Landmark Ruling</span>
            </div>
            <strong>Context:</strong> Baazee.com (eBay India) MMS pornography listing case (2005 3 CompLJ 364 Del).<br>
            <strong>Facts:</strong> An independent user listed an obscene MMS video for sale on Baazee.com. Police arrested CEO Avnish Bajaj under Section 67 IT Act and Section 292 IPC.<br>
            <strong>Ratio:</strong> The Delhi High Court quashed the criminal case against the CEO, noting that IPC did not recognize corporate criminal liability without express statutory mens rea. The Court held that an intermediary cannot be criminally prosecuted solely because an unauthorized user posted illicit content without the platform's knowledge.<br>
            <strong>Catalyst:</strong> This ruling forced Parliament to enact the comprehensive <strong>Section 79 Safe Harbour amendment in 2008</strong>.
          </div>

          <div class="book-callout" style="margin-top: 4px;">
            <span class="sec-badge it-act">IT Act §79</span> <strong>Safe Harbour Conditions:</strong> Platform is immune if its role is limited to transmission and it exercises statutory <strong>due diligence</strong> (takedown within 24–36 hrs upon court order).
          </div>
        `
      },
      right: {
        pageNumber: 34,
        runningHead: "Chapter 8: Digital & Electronic Signatures",
        content: `
          <h1>Chapter 8: Digital Signatures & PKI</h1>
          <h3>8.1 Electronic vs Digital Signatures</h3>
          <p>Indian law recognizes both, but digital signatures use specific mathematical cryptographic techniques:</p>

          <div style="background: var(--page-bg-subtle); padding: 8px 12px; border-left: 3px solid var(--accent-color); margin-bottom: 8px; border-radius: 0 4px 4px 0; font-size: 0.82rem;">
            <strong>Electronic Signature (Section 3A):</strong> Any technological authentication method recognized in the Second Schedule (technology-neutral).
          </div>

          <div style="background: var(--page-bg-subtle); padding: 8px 12px; border-left: 3px solid var(--accent-gold); margin-bottom: 8px; border-radius: 0 4px 4px 0; font-size: 0.82rem;">
            <strong>Digital Signature (Section 3):</strong> Authentication using an <strong>asymmetric cryptosystem</strong> and <strong>hash function</strong>.
          </div>

          <h3>How Asymmetric Cryptography Works:</h3>
          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li><strong>Private Key:</strong> Kept strictly confidential by the signer; used to generate the digital signature.</li>
            <li><strong>Public Key:</strong> Publicly distributed via a digital certificate; used by any verifier to validate the signature and document integrity.</li>
          </ul>
        `
      }
    },

    // Spread 17: PKI Offences & Statutory Authorities (Pages 35 & 36)
    {
      spreadId: 17,
      left: {
        pageNumber: 35,
        runningHead: "Chapter 8: Digital Signature Offences",
        content: `
          <h3>8.2 Digital Signature Certificates & Penalties</h3>
          <p>Statutory offences concerning electronic authentication under the IT Act:</p>

          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li><span class="sec-badge it-act">Section 71</span>: <strong>Misrepresentation:</strong> Making misrepresentations or suppressing material facts to obtain a licence or Digital Signature Certificate (imprisonment up to 2 years and/or fine up to ₹1 lakh).</li>
            <li><span class="sec-badge it-act">Section 73</span>: <strong>False Digital Signature Certificate:</strong> Publishing a certificate with knowledge that the CA did not issue it or subscriber has not accepted it (imprisonment up to 2 years and/or fine up to ₹1 lakh).</li>
            <li><span class="sec-badge it-act">Section 74</span>: <strong>Fraudulent Purpose:</strong> Creating or publishing a certificate for fraudulent or unlawful purposes (imprisonment up to 2 years and/or fine up to ₹1 lakh).</li>
          </ul>

          <div class="book-callout">
            <strong>Revocation Conditions:</strong> A Certifying Authority can revoke a certificate if the subscriber requests, dies, dissolves, or if private key compromise is confirmed.
          </div>
        `
      },
      right: {
        pageNumber: 36,
        runningHead: "Chapter 9: Regulatory & Statutory Authorities",
        content: `
          <h1>Chapter 9: Authorities & Investigation Powers</h1>
          <h3>9.1 Regulatory Authorities under the IT Act</h3>
          
          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li><strong>Controller of Certifying Authorities (CCA):</strong> Appointed under <span class="sec-badge it-act">Section 17</span> to license, regulate, and supervise Certifying Authorities (CAs).</li>
            <li><strong>Indian Computer Emergency Response Team (CERT-In):</strong> Designated under <span class="sec-badge it-act">Section 70B</span> as the national agency for cybersecurity incident response, vulnerability coordination, and issuing cybersecurity emergency directions.</li>
            <li><strong>Adjudicating Officer:</strong> Appointed under <span class="sec-badge it-act">Section 46</span> (must be of Director rank or above) to adjudicate civil contraventions under Chapter IX. Holds powers of a civil court.</li>
            <li><strong>Appellate Tribunal:</strong> Telecom Disputes Settlement and Appellate Tribunal (TDSAT) hears appeals from Adjudicating Officers and CCA.</li>
          </ul>
        `
      }
    },

    // Spread 18: Police Powers & BNS Master Table (Pages 37 & 38)
    {
      spreadId: 18,
      left: {
        pageNumber: 37,
        runningHead: "Chapter 9: Police Powers & Search/Seizure",
        content: `
          <h3>9.2 Police Investigation Powers</h3>
          <p>Statutory provisions regulating investigation officers in cyber offences:</p>

          <div class="book-callout">
            <span class="sec-badge it-act">Section 78</span> <strong>Power to Investigate:</strong><br>
            Notwithstanding anything in the CrPC/BNSS, no police officer below the rank of <strong>Inspector</strong> shall investigate any offence under the IT Act.
          </div>

          <div class="book-callout">
            <span class="sec-badge it-act">Section 80</span> <strong>Power of Entry & Search:</strong><br>
            Any police officer not below the rank of <strong>Inspector</strong> may enter any public place and search and arrest without warrant any person who is reasonably suspected of committing an IT Act offence.
          </div>

          <p style="font-size: 0.82rem; color: var(--text-muted);">
            <em>Forensic Protocol:</em> During search and seizure under Section 80, the investigator must maintain an uninterrupted chain of custody, apply write-blockers before media duplication, and document hashing immediately.
          </p>
        `
      },
      right: {
        pageNumber: 38,
        runningHead: "Chapter 10: Cybercrimes under BNS 2023",
        content: `
          <h1>Chapter 10: Cybercrimes under BNS 2023</h1>
          <p>Bharatiya Nyaya Sanhita (BNS) 2023 penal provisions mapping to cyber offences:</p>

          <table class="book-table">
            <thead>
              <tr><th>BNS Provision</th><th>Cyber Offence Mapping</th><th>Max Penalty</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="sec-badge bns">§77</span> Voyeurism</td>
                <td>Capturing or transmitting non-consensual private images</td>
                <td>1st: 3 yrs; Sub: 7 yrs + fine</td>
              </tr>
              <tr>
                <td><span class="sec-badge bns">§78</span> Stalking</td>
                <td>Monitoring woman's internet/email/electronic comms</td>
                <td>1st: 3 yrs; Sub: 5 yrs + fine</td>
              </tr>
              <tr>
                <td><span class="sec-badge bns">§308</span> Extortion</td>
                <td>Digital blackmail, ransomware extortion threats</td>
                <td>Up to 7 years + fine</td>
              </tr>
              <tr>
                <td><span class="sec-badge bns">§318</span> Cheating</td>
                <td>Online fraud, investment scams, crypto fraud</td>
                <td>Up to 7 years + fine</td>
              </tr>
              <tr>
                <td><span class="sec-badge bns">§336</span> Forgery</td>
                <td>Falsifying electronic documents, altered PDFs</td>
                <td>Up to 7 years + fine</td>
              </tr>
              <tr>
                <td><span class="sec-badge bns">§351</span> Intimidation</td>
                <td>Threatening emails, social media abuse</td>
                <td>Up to 7 years + fine</td>
              </tr>
            </tbody>
          </table>
        `
      }
    },

    // Spread 19: Electronic Evidence (BSA) & Revision Checklist (Pages 39 & 40)
    {
      spreadId: 19,
      left: {
        pageNumber: 39,
        runningHead: "Chapter 10: Arjun Panditrao & Section 63 BSA",
        content: `
          <h2>10.2 Electronic Evidence & Landmark Admissibility</h2>
          <p>The Bharatiya Sakshya Adhiniyam (BSA), 2023 fundamentally governs electronic records:</p>

          <div class="case-card">
            <div class="case-card-header">
              <span>Arjun Panditrao Khotkar v. Kailash Gorantyal (2020)</span>
              <span class="case-card-badge">Supreme Court</span>
            </div>
            <strong>Bench:</strong> 3-Judge Bench (2020 7 SCC 1).<br>
            <strong>Ratio Decidendi:</strong> The Supreme Court authoritatively settled the electronic evidence controversy (affirming *Anvar P.V.* and overruling *Shafhi Mohammad*):<br>
            1. Producing the statutory certificate (formerly Section 65B(4) IEA, now <strong>Section 63 BSA 2023</strong>) is a <strong>mandatory condition precedent</strong> for admitting secondary electronic evidence (printouts, CDs, hard drive clones, CCTV files).<br>
            2. If the original primary device cannot be produced in court, secondary evidence is strictly inadmissible without this statutory certificate.<br>
            3. If a custodian refuses to provide the certificate, trial courts must exercise powers under Section 91 CrPC/BNSS to compel production.
          </div>

          <div class="book-callout" style="margin-top: 4px;">
            <strong>Section 63 BSA Mandatory Requirements:</strong> Certificate must identify the record, describe production manner, certify proper computer operation, and be signed by an authorized custodian or cyber forensic expert.
          </div>
        `
      },
      right: {
        pageNumber: 40,
        runningHead: "Chapter 11: DSSSB Quick Revision Checklist",
        content: `
          <h1>Chapter 11: Comprehensive Revision Notes</h1>
          <p>High-yield exam checklist for DSSSB Junior Scientific Assistant (Cyber Forensic):</p>

          <div style="background: var(--page-bg-subtle); padding: 8px 12px; border-radius: 6px; border: 1px solid var(--ui-border); font-size: 0.8rem; line-height: 1.4; margin-bottom: 8px;">
            <strong>Essential Statutory Numbers to Remember:</strong><br>
            • Civil compensation for unauthorized access: <span class="sec-badge it-act">§43</span><br>
            • Dishonest / fraudulent computer offences: <span class="sec-badge it-act">§66</span><br>
            • Identity theft: <span class="sec-badge it-act">§66C</span> • Cheating by personation: <span class="sec-badge it-act">§66D</span><br>
            • Cyberterrorism: <span class="sec-badge it-act">§66F</span> (Life Imprisonment)<br>
            • Stalking: <span class="sec-badge bns">BNS §78</span> • Voyeurism: <span class="sec-badge bns">BNS §77</span><br>
            • Minimum Police Investigating Rank: <strong>Inspector (§78)</strong><br>
            • Electronic Evidence Certificate: <strong>Section 63 BSA</strong>
          </div>

          <div class="book-callout">
            <strong>Landmark Decisions Master Summary:</strong><br>
            • <em>Suhas Katti (2004):</em> First Section 67 IT Act conviction (Yahoo groups).<br>
            • <em>Syed Asifuddin (2005):</em> Firmware ESN tampering is §65 source code tampering.<br>
            • <em>Shreya Singhal (2015):</em> Section 66A struck down as unconstitutional.<br>
            • <em>Puttaswamy (2017):</em> Privacy is Fundamental Right (Art. 21) & 3-fold test.<br>
            • <em>Baazee.com (2005):</em> Intermediary safe harbour catalyst (§79).<br>
            • <em>Arjun Panditrao (2020):</em> Mandatory certificate for secondary e-evidence.
          </div>
        `
      }
    }
  ];

  // Table of Contents Mapping (All 20 Spreads)
  const tocData = [
    { chapter: "Cover", title: "Front Cover & Examination Directives", spreadIndex: 0, page: "1–2" },
    { chapter: "Intro", title: "Syllabus Roadmap & What is Cybercrime", spreadIndex: 1, page: "3–4" },
    { chapter: "Ch 01", title: "Roles of Computer & Cybercrime Characteristics", spreadIndex: 2, page: "5–6" },
    { chapter: "Ch 01", title: "Digital Evidence Standards & Historical Timeline", spreadIndex: 3, page: "7–8" },
    { chapter: "Ch 01", title: "Cybercrime vs Forensics & The CIA Triad", spreadIndex: 4, page: "9–10" },
    { chapter: "Ch 02", title: "Classification of Cybercrimes by Victim", spreadIndex: 5, page: "11–12" },
    { chapter: "Ch 02", title: "Cyber-Dependent vs Conventional Crime", spreadIndex: 6, page: "13–14" },
    { chapter: "Ch 02/03", title: "Offender Motives & Cyberstalking (§78 BNS)", spreadIndex: 7, page: "15–16" },
    { chapter: "Ch 03", title: "Suhas Katti Ruling & Syed Asifuddin Case", spreadIndex: 8, page: "17–18" },
    { chapter: "Ch 03", title: "Cyber Fraud & Cosmos Bank Heist Study", spreadIndex: 9, page: "19–20" },
    { chapter: "Ch 04", title: "IPR in Cyberspace (§65) & Malware Ecosystem", spreadIndex: 10, page: "21–22" },
    { chapter: "Ch 04", title: "AIIMS Delhi Incident Study & Denial of Service", spreadIndex: 11, page: "23–24" },
    { chapter: "Ch 04/05", title: "Hacking (§43/66) & Cyberterrorism (§66F)", spreadIndex: 12, page: "25–26" },
    { chapter: "Ch 05", title: "Shreya Singhal (§66A) & Puttaswamy (Privacy)", spreadIndex: 13, page: "27–28" },
    { chapter: "Ch 06", title: "IT Act 2000 Origins, Scope & Jurisdiction (§75)", spreadIndex: 14, page: "29–30" },
    { chapter: "Ch 07", title: "IT Act Master Penalties Table (Sections 43–66E)", spreadIndex: 15, page: "31–32" },
    { chapter: "Ch 07/08", title: "Baazee.com Precedent & Intermediary Liability (§79)", spreadIndex: 16, page: "33–34" },
    { chapter: "Ch 08/09", title: "Digital Signatures, PKI & Authorities (CCA/CERT)", spreadIndex: 17, page: "35–36" },
    { chapter: "Ch 09/10", title: "Police Powers (§78/80) & BNS 2023 Penal Mapping", spreadIndex: 18, page: "37–38" },
    { chapter: "Ch 10/11", title: "Arjun Panditrao Ruling & Master Exam Checklist", spreadIndex: 19, page: "39–40" }
  ];

  // Flat list of individual pages for single-page mode (40 pages)
  const pages = [];
  spreads.forEach((spread, sIdx) => {
    pages.push({ ...spread.left, spreadIndex: sIdx, side: 'left' });
    pages.push({ ...spread.right, spreadIndex: sIdx, side: 'right' });
  });

  // =========================================================================
  // AUDIO NARRATION CONTROLLER (Web Speech API)
  // =========================================================================
  function stopAudioNarration() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    isSpeaking = false;
    if (audioNarrationBtn) {
      audioNarrationBtn.classList.remove('active');
      if (audioStatusText) audioStatusText.textContent = 'Listen';
    }
    if (bottomAudioBtn) {
      bottomAudioBtn.classList.remove('btn-primary');
      bottomAudioBtn.textContent = 'Audio 🔊';
    }
    document.querySelectorAll('.page-body').forEach(el => el.classList.remove('audio-reading-active'));
  }

  function toggleAudioNarration() {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in this browser.');
      return;
    }

    if (isSpeaking) {
      stopAudioNarration();
      return;
    }

    let activeBody = null;
    if (isSinglePage) {
      activeBody = rightPageEl.querySelector('.page-body');
    } else {
      activeBody = leftPageEl.querySelector('.page-body') || rightPageEl.querySelector('.page-body');
    }

    if (!activeBody) return;

    const textToRead = activeBody.innerText || activeBody.textContent;
    if (!textToRead || textToRead.trim().length === 0) return;

    window.speechSynthesis.cancel();
    currentUtterance = new SpeechSynthesisUtterance(textToRead);
    currentUtterance.rate = 0.95;
    currentUtterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('David')));
    if (naturalVoice) {
      currentUtterance.voice = naturalVoice;
    }

    currentUtterance.onstart = () => {
      isSpeaking = true;
      if (audioNarrationBtn) {
        audioNarrationBtn.classList.add('active');
        if (audioStatusText) audioStatusText.textContent = 'Stop';
      }
      if (bottomAudioBtn) {
        bottomAudioBtn.classList.add('btn-primary');
        bottomAudioBtn.textContent = 'Stop ⏹';
      }
      activeBody.classList.add('audio-reading-active');
    };

    currentUtterance.onend = () => {
      stopAudioNarration();
    };

    currentUtterance.onerror = () => {
      stopAudioNarration();
    };

    window.speechSynthesis.speak(currentUtterance);
  }

  // =========================================================================
  // RENDER CONTROLLER (Supports both Two-Page Spread & Single-Page View)
  // =========================================================================
  function renderPageContent(pageData, isLeft) {
    return `
      <div class="page-content">
        <div class="page-running-head">
          <span>${isLeft ? pageData.runningHead : 'P. ' + pageData.pageNumber}</span>
          <span>${isLeft ? 'P. ' + pageData.pageNumber : pageData.runningHead}</span>
        </div>
        <div class="page-body">
          ${pageData.content}
        </div>
        <div class="page-footer">
          <span>DSSSB Forensic Guide</span>
          <span>Page ${pageData.pageNumber}</span>
        </div>
      </div>
    `;
  }

  function renderCurrentView() {
    stopAudioNarration();

    if (isSinglePage) {
      document.body.classList.add('single-page-mode');
      if (viewModeToggleBtn) viewModeToggleBtn.textContent = '2-Page';

      rightPageEl.innerHTML = renderPageContent(pages[currentPageIndex], false);

      pageRange.min = 0;
      pageRange.max = pages.length - 1;
      pageRange.value = currentPageIndex;

      const pNum = pages[currentPageIndex].pageNumber;
      pageIndicator.textContent = `Page ${pNum} of ${pages.length}`;

      prevBtn.disabled = (currentPageIndex === 0);
      firstPageBtn.disabled = (currentPageIndex === 0);
      nextBtn.disabled = (currentPageIndex === pages.length - 1);
      lastPageBtn.disabled = (currentPageIndex === pages.length - 1);

      document.querySelectorAll('.toc-item').forEach((el, idx) => {
        el.classList.toggle('active', idx === Math.floor(currentPageIndex / 2));
      });
    } else {
      document.body.classList.remove('single-page-mode');
      if (viewModeToggleBtn) viewModeToggleBtn.textContent = '1-Page';

      currentSpread = Math.floor(currentPageIndex / 2);
      const spread = spreads[currentSpread];
      leftPageEl.innerHTML = renderPageContent(spread.left, true);
      rightPageEl.innerHTML = renderPageContent(spread.right, false);

      pageRange.min = 0;
      pageRange.max = spreads.length - 1;
      pageRange.value = currentSpread;

      const pLeft = spread.left.pageNumber;
      const pRight = spread.right.pageNumber;
      pageIndicator.textContent = `Spread ${currentSpread + 1} of ${spreads.length} (Pages ${pLeft}–${pRight})`;

      prevBtn.disabled = (currentSpread === 0);
      firstPageBtn.disabled = (currentSpread === 0);
      nextBtn.disabled = (currentSpread === spreads.length - 1);
      lastPageBtn.disabled = (currentSpread === spreads.length - 1);

      document.querySelectorAll('.toc-item').forEach((el, idx) => {
        el.classList.toggle('active', idx === currentSpread);
      });
    }
  }

  function turnToPage(newIndex) {
    if (isFlipping || newIndex === currentPageIndex || newIndex < 0 || newIndex >= pages.length) {
      return;
    }

    stopAudioNarration();

    if (Math.abs(newIndex - currentPageIndex) > 1) {
      currentPageIndex = newIndex;
      currentSpread = Math.floor(currentPageIndex / 2);
      renderCurrentView();
      return;
    }

    isFlipping = true;
    const isForward = newIndex > currentPageIndex;
    const currentPageData = pages[currentPageIndex];
    const targetPageData = pages[newIndex];

    if (isForward) {
      leafFront.innerHTML = renderPageContent(currentPageData, false);
      leafBack.innerHTML = renderPageContent(targetPageData, false);
      rightPageEl.innerHTML = renderPageContent(targetPageData, false);
      turningLeaf.className = 'turning-leaf active turn-forward';
    } else {
      leafBack.innerHTML = renderPageContent(currentPageData, false);
      leafFront.innerHTML = renderPageContent(targetPageData, false);
      rightPageEl.innerHTML = renderPageContent(targetPageData, false);
      turningLeaf.className = 'turning-leaf active turn-backward';
    }

    setTimeout(() => {
      currentPageIndex = newIndex;
      currentSpread = Math.floor(currentPageIndex / 2);
      turningLeaf.className = 'turning-leaf';
      renderCurrentView();
      isFlipping = false;
    }, 550);
  }

  function turnToSpread(newIndex) {
    if (isFlipping || newIndex === currentSpread || newIndex < 0 || newIndex >= spreads.length) {
      return;
    }

    stopAudioNarration();

    if (Math.abs(newIndex - currentSpread) > 1) {
      currentSpread = newIndex;
      currentPageIndex = currentSpread * 2;
      renderCurrentView();
      return;
    }

    isFlipping = true;
    const isForward = newIndex > currentSpread;
    const currentSpreadData = spreads[currentSpread];
    const targetSpreadData = spreads[newIndex];

    if (isForward) {
      leafFront.innerHTML = renderPageContent(currentSpreadData.right, false);
      leafBack.innerHTML = renderPageContent(targetSpreadData.left, true);
      rightPageEl.innerHTML = renderPageContent(targetSpreadData.right, false);
      turningLeaf.className = 'turning-leaf active turn-forward';

      setTimeout(() => {
        leftPageEl.innerHTML = renderPageContent(targetSpreadData.left, true);
        turningLeaf.className = 'turning-leaf';
        currentSpread = newIndex;
        currentPageIndex = currentSpread * 2;
        renderCurrentView();
        isFlipping = false;
      }, 700);
    } else {
      leafBack.innerHTML = renderPageContent(currentSpreadData.left, true);
      leafFront.innerHTML = renderPageContent(targetSpreadData.right, false);
      leftPageEl.innerHTML = renderPageContent(targetSpreadData.left, true);
      turningLeaf.className = 'turning-leaf active turn-backward';

      setTimeout(() => {
        rightPageEl.innerHTML = renderPageContent(targetSpreadData.right, false);
        turningLeaf.className = 'turning-leaf';
        currentSpread = newIndex;
        currentPageIndex = currentSpread * 2;
        renderCurrentView();
        isFlipping = false;
      }, 700);
    }
  }

  function nextPage() {
    if (isSinglePage) {
      if (currentPageIndex < pages.length - 1) {
        turnToPage(currentPageIndex + 1);
      }
    } else {
      if (currentSpread < spreads.length - 1) {
        turnToSpread(currentSpread + 1);
      }
    }
  }

  function prevPage() {
    if (isSinglePage) {
      if (currentPageIndex > 0) {
        turnToPage(currentPageIndex - 1);
      }
    } else {
      if (currentSpread > 0) {
        turnToSpread(currentSpread - 1);
      }
    }
  }

  // =========================================================================
  // AUTO-PAGE TURN
  // =========================================================================
  function toggleAutoFlip() {
    isAutoFlip = !isAutoFlip;
    if (isAutoFlip) {
      autoFlipBtn.textContent = 'Auto-Turn: ON';
      autoFlipBtn.style.backgroundColor = '#15803d';
      autoFlipBtn.style.color = '#fff';
      autoFlipInterval = setInterval(() => {
        if (!isFlipping) {
          if (isSinglePage) {
            if (currentPageIndex < pages.length - 1) nextPage();
            else turnToPage(0);
          } else {
            if (currentSpread < spreads.length - 1) nextPage();
            else turnToSpread(0);
          }
        }
      }, 5000);
    } else {
      autoFlipBtn.textContent = 'Auto-Turn: OFF';
      autoFlipBtn.style.backgroundColor = '';
      autoFlipBtn.style.color = '';
      if (autoFlipInterval) {
        clearInterval(autoFlipInterval);
        autoFlipInterval = null;
      }
    }
  }

  // =========================================================================
  // TABLE OF CONTENTS INITIALIZATION
  // =========================================================================
  function initTOC() {
    tocList.innerHTML = '';
    tocData.forEach((item, idx) => {
      const li = document.createElement('li');
      li.className = `toc-item ${idx === 0 ? 'active' : ''}`;
      li.innerHTML = `
        <span class="toc-ch-num">${item.chapter}</span>
        <span class="toc-ch-title">${item.title}</span>
        <span class="toc-page-num">${item.page}</span>
      `;
      li.addEventListener('click', () => {
        if (isSinglePage) {
          turnToPage(item.spreadIndex * 2);
        } else {
          turnToSpread(item.spreadIndex);
        }
        closeTOC();
      });
      tocList.appendChild(li);
    });
  }

  function openTOC() {
    tocDrawer.classList.remove('hidden');
    drawerOverlay.classList.remove('hidden');
  }

  function closeTOC() {
    tocDrawer.classList.add('hidden');
    drawerOverlay.classList.add('hidden');
  }

  // =========================================================================
  // INSTANT SEARCH ENGINE
  // =========================================================================
  function performSearch(query) {
    if (!query || query.trim().length < 2) {
      searchResultsDropdown.classList.add('hidden');
      searchResultsDropdown.innerHTML = '';
      return;
    }

    const q = query.toLowerCase().trim();
    const results = [];

    spreads.forEach((spread, spreadIdx) => {
      // Search left page
      const leftText = spread.left.content.replace(/<[^>]+>/g, ' ');
      if (leftText.toLowerCase().includes(q)) {
        results.push({
          spreadIndex: spreadIdx,
          pageNumber: spread.left.pageNumber,
          title: spread.left.runningHead,
          snippet: extractSnippet(leftText, q)
        });
      }

      // Search right page
      const rightText = spread.right.content.replace(/<[^>]+>/g, ' ');
      if (rightText.toLowerCase().includes(q)) {
        results.push({
          spreadIndex: spreadIdx,
          pageNumber: spread.right.pageNumber,
          title: spread.right.runningHead,
          snippet: extractSnippet(rightText, q)
        });
      }
    });

    renderSearchResults(results);
  }

  function extractSnippet(text, query) {
    const idx = text.toLowerCase().indexOf(query);
    const start = Math.max(0, idx - 40);
    const end = Math.min(text.length, idx + query.length + 50);
    let snippet = text.substring(start, end).trim();
    if (start > 0) snippet = '...' + snippet;
    if (end < text.length) snippet += '...';
    return snippet;
  }

  function renderSearchResults(results) {
    if (results.length === 0) {
      searchResultsDropdown.innerHTML = '<div class="search-item" style="color: var(--text-muted);">No matching sections or terms found.</div>';
      searchResultsDropdown.classList.remove('hidden');
      return;
    }

    searchResultsDropdown.innerHTML = '';
    results.slice(0, 8).forEach(res => {
      const item = document.createElement('div');
      item.className = 'search-item';
      item.innerHTML = `
        <div class="search-item-title">
          <span>${res.title}</span>
          <span style="font-size: 0.75rem; color: var(--accent-color);">Page ${res.pageNumber}</span>
        </div>
        <div class="search-item-snippet">${res.snippet}</div>
      `;
      item.addEventListener('click', () => {
        if (isSinglePage) {
          turnToPage(res.pageNumber - 1);
        } else {
          turnToSpread(res.spreadIndex);
        }
        searchResultsDropdown.classList.add('hidden');
      });
      searchResultsDropdown.appendChild(item);
    });

    searchResultsDropdown.classList.remove('hidden');
  }

  // =========================================================================
  // THEME SWITCHING & FONT CONTROLS
  // =========================================================================
  function cycleTheme() {
    document.body.classList.remove(themes[currentThemeIndex]);
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.body.classList.add(themes[currentThemeIndex]);
  }

  function adjustFontSize(delta) {
    currentFontSizePercent = Math.min(115, Math.max(85, currentFontSizePercent + delta));
    document.querySelectorAll('.page-body').forEach(el => {
      el.style.fontSize = `${currentFontSizePercent}%`;
    });
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  // =========================================================================
  // EVENT LISTENERS & GESTURES
  // =========================================================================
  nextBtn.addEventListener('click', nextPage);
  prevBtn.addEventListener('click', prevPage);
  firstPageBtn.addEventListener('click', () => {
    if (isSinglePage) turnToPage(0);
    else turnToSpread(0);
  });
  lastPageBtn.addEventListener('click', () => {
    if (isSinglePage) turnToPage(pages.length - 1);
    else turnToSpread(spreads.length - 1);
  });
  autoFlipBtn.addEventListener('click', toggleAutoFlip);

  // Audio Narration Listeners
  if (audioNarrationBtn) {
    audioNarrationBtn.addEventListener('click', toggleAudioNarration);
  }
  if (bottomAudioBtn) {
    bottomAudioBtn.addEventListener('click', toggleAudioNarration);
  }

  pageRange.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    if (isSinglePage) {
      turnToPage(val);
    } else {
      turnToSpread(val);
    }
  });

  // View Mode Toggle (Single Page vs Two-Page Spread)
  if (viewModeToggleBtn) {
    viewModeToggleBtn.addEventListener('click', () => {
      isSinglePage = !isSinglePage;
      renderCurrentView();
    });
  }

  // Responsive Resize Listener
  window.addEventListener('resize', () => {
    const autoSingle = (window.innerWidth <= 768);
    if (autoSingle !== isSinglePage) {
      isSinglePage = autoSingle;
      renderCurrentView();
    }
  });

  // Touch Swipe Gesture for Mobile Reading
  let touchStartX = 0;
  let touchStartY = 0;

  textbook.addEventListener('touchstart', (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  textbook.addEventListener('touchend', (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const dx = touchEndX - touchStartX;
    const dy = touchEndY - touchStartY;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 35) {
      if (dx < 0) {
        nextPage();
      } else {
        prevPage();
      }
    }
  }, { passive: true });

  // Click on book to turn
  textbook.addEventListener('click', (e) => {
    const selection = window.getSelection().toString();
    if (selection.length > 0) return;
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;

    const rect = textbook.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX < rect.width / 2) {
      prevPage();
    } else {
      nextPage();
    }
  });

  // Drawer Controls
  tocToggleBtn.addEventListener('click', openTOC);
  closeTocBtn.addEventListener('click', closeTOC);
  drawerOverlay.addEventListener('click', closeTOC);

  // Search Controls
  searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    clearSearchBtn.classList.toggle('hidden', val.length === 0);
    performSearch(val);
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.classList.add('hidden');
    searchResultsDropdown.classList.add('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResultsDropdown.contains(e.target)) {
      searchResultsDropdown.classList.add('hidden');
    }
  });

  // Tools Controls
  themeToggleBtn.addEventListener('click', cycleTheme);
  fontSizeIncBtn.addEventListener('click', () => adjustFontSize(4));
  fontSizeDecBtn.addEventListener('click', () => adjustFontSize(-4));
  fullscreenBtn.addEventListener('click', toggleFullscreen);

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.target === searchInput) return;

    if (e.key === 'ArrowRight') {
      nextPage();
    } else if (e.key === 'ArrowLeft') {
      prevPage();
    } else if (e.code === 'Space') {
      e.preventDefault();
      toggleAutoFlip();
    } else if (e.key === 'Home') {
      if (isSinglePage) turnToPage(0);
      else turnToSpread(0);
    } else if (e.key === 'End') {
      if (isSinglePage) turnToPage(pages.length - 1);
      else turnToSpread(spreads.length - 1);
    } else if (e.key === 'Escape') {
      closeTOC();
      searchResultsDropdown.classList.add('hidden');
    } else if (e.altKey && e.key.toLowerCase() === 't') {
      tocDrawer.classList.contains('hidden') ? openTOC() : closeTOC();
    }
  });

  // Initialize App
  initTOC();
  renderCurrentView();
});
