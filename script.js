/**
 * DSSSB Junior Scientific Assistant (Cyber Forensic)
 * 3D Interactive Digital Textbook Controller
 * Fully paginated: 40 pages (20 spreads) with natural textbook flow,
 * zero clipping, zero scrollbars, zero emojis, and content-bearing 3D turns.
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

  // App State
  let isSinglePage = (window.innerWidth <= 768);
  let currentSpread = 0;
  let currentPageIndex = 0;
  let isFlipping = false;
  let isAutoFlip = false;
  let autoFlipInterval = null;
  let currentThemeIndex = 0;
  const themes = ['theme-parchment', 'theme-white', 'theme-dark'];
  let currentFontSizePercent = 100;

  // =========================================================================
  // 20 SPREADS (40 PAGES) FULLY PAGINATED TEXTBOOK DATABASE
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
              <div style="font-family: var(--font-title); font-size: 0.92rem; font-weight: 700; color: var(--text-heading); margin-bottom: 8px;">
                Delhi Subordinate Services Selection Board
              </div>
              <div style="margin: 8px 0;">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="color: var(--accent-gold); display: inline-block;"><path d="M12 2v20M5 7l7-3 7 3M2 13l3-6 3 6a3 3 0 0 1-6 0zm14 0l3-6 3 6a3 3 0 0 1-6 0zM5 22h14"></path></svg>
              </div>
              <h2 style="font-family: var(--font-title); font-size: 1.2rem; color: var(--accent-color); margin-bottom: 2px;">
                Junior Scientific Assistant
              </h2>
              <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-heading); margin-bottom: 8px;">
                (Cyber Forensic Discipline)
              </div>
            </div>

            <ul class="cover-features-list">
              <li><strong>Cybersecurity Fundamentals:</strong> Architecture, CIA Triad, threat profiles.</li>
              <li><strong>Indian Cyber Law:</strong> IT Act 2000, Section 43 civil vs Section 66 criminal.</li>
              <li><strong>Bharatiya Nyaya Sanhita 2023:</strong> New criminal code integration.</li>
              <li><strong>Digital Signatures & PKI:</strong> Asymmetric cryptography & authorities.</li>
              <li><strong>Forensics & Evidence:</strong> 5 investigation stages & BSA 2023 standards.</li>
            </ul>

            <div style="font-size: 0.76rem; color: var(--text-muted); border-top: 1px solid var(--ui-border); padding-top: 6px;">
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
              <div style="font-size: 0.88rem; color: var(--text-muted); font-style: italic; margin-bottom: 8px;">
                Complete Theory Textbook, Statutory Analysis & Practical Forensic Guide
              </div>
              <div style="height: 2px; width: 50px; background: var(--accent-gold); margin: 0 auto 10px;"></div>
            </div>

            <div class="book-callout" style="text-align: left; margin: 0 0 8px 0; font-size: 0.82rem;">
              <strong>Pedagogical Approach:</strong> Structured like an academic textbook and analytical journal—not shallow multiple-choice questions. Understand what happens in a cybercrime, why it happens, how technology works, what Indian law dictates, and how offences are forensically investigated.
            </div>

            <div style="background: var(--page-bg-subtle); padding: 6px 10px; border-radius: 6px; border: 1px solid var(--ui-border); font-size: 0.78rem; text-align: left; line-height: 1.35;">
              <strong>Includes:</strong> 10 Core Syllabus Chapters • Statutory Penalties Master Table • Section 66A Invalidation (*Shreya Singhal*) • *Puttaswamy* Privacy Jurisprudence • BNS 2023 Offence Cross-Reference.
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
          <p>The syllabus is divided into 10 interconnected chapters for progressive conceptual mastery:</p>
          
          <ul style="font-size: 0.82rem; line-height: 1.4; list-style-type: none; margin-left: 0;">
            <li style="margin-bottom: 5px;"><strong style="color: var(--accent-color);">01. Introduction to Cybercrime:</strong> Meaning, characteristics, history, scope and key terminology.</li>
            <li style="margin-bottom: 5px;"><strong style="color: var(--accent-color);">02. Classification & Motivations:</strong> Types of cybercrime, conventional vs cybercrime, motives and offenders.</li>
            <li style="margin-bottom: 5px;"><strong style="color: var(--accent-color);">03. Crimes Against Individuals:</strong> Cyberstalking, online sexual offences, phishing, fraud, identity theft and forgery.</li>
            <li style="margin-bottom: 5px;"><strong style="color: var(--accent-color);">04. Crimes Against Property & Systems:</strong> IPR violations, computer vandalism, malware, ransomware, spam and system attacks.</li>
            <li style="margin-bottom: 5px;"><strong style="color: var(--accent-color);">05. Cyberterrorism & Society:</strong> National security, privacy, cyber defamation, hate speech and critical infrastructure.</li>
            <li style="margin-bottom: 5px;"><strong style="color: var(--accent-color);">06. Indian Cyber Law Framework:</strong> Origins, objectives, provisions and critical analysis of the IT Act, 2000.</li>
            <li style="margin-bottom: 5px;"><strong style="color: var(--accent-color);">07. IT Act Offences & Penalties:</strong> Detailed study of statutory offences, punishments, liabilities and exceptions.</li>
            <li style="margin-bottom: 5px;"><strong style="color: var(--accent-color);">08. Digital & Electronic Signatures:</strong> Cryptography, certificates, authentication, legal validity and signature offences.</li>
            <li style="margin-bottom: 5px;"><strong style="color: var(--accent-color);">09. Authorities & Statutory Powers:</strong> CCA, Certifying Authorities, CERT-In, adjudication and institutions.</li>
            <li style="margin-bottom: 5px;"><strong style="color: var(--accent-color);">10. Cybercrimes under BNS 2023:</strong> Bharatiya Nyaya Sanhita criminal provisions, electronic evidence and practical legal application.</li>
          </ul>
        `
      },
      right: {
        pageNumber: 4,
        runningHead: "Chapter 1: What is Cybercrime?",
        content: `
          <h1>Chapter 1: Introduction to Cybercrime</h1>
          <h3>1.1 What is Cybercrime?</h3>
          <p>Imagine that someone steals 50,000 rupees from a person's physical wallet. This is a traditional theft involving physical property and direct contact.</p>
          <p>Now imagine that a criminal sends a fraudulent bank website link, tricks the person into entering online banking credentials, and transfers 50,000 rupees to another account. Both cases involve the unlawful loss of money, but the second involves a computer network, digital deception, and intangible electronic ledger entries.</p>
          
          <div class="book-callout">
            <strong>Legal Definition:</strong> Cybercrime refers broadly to unlawful activities in which computers, digital devices, communication networks or information systems act as the <em>target</em>, <em>instrument</em>, or <em>environment/facilitator</em> of the offence.
          </div>

          <p>Cybercrime is an <strong>umbrella term</strong>, not one single monolithic offence under Indian law. Different acts are punished under different statutory provisions across the IT Act 2000 and the Bharatiya Nyaya Sanhita 2023.</p>
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
          <p>To analyze any digital offence, forensic investigators classify the computer's role into three functional categories:</p>

          <div style="background: var(--page-bg-subtle); padding: 8px 12px; border-left: 3px solid var(--accent-color); margin-bottom: 10px; border-radius: 0 4px 4px 0;">
            <strong style="color: var(--accent-color);">1. Computer as a Target:</strong><br>
            The criminal attacks the system itself. Objectives include breaching confidentiality, corrupting databases, or denying service.<br>
            <em>Examples:</em> Unauthorized server intrusion, database wiping, distributed denial-of-service (DDoS), or ransomware encryption.
          </div>

          <div style="background: var(--page-bg-subtle); padding: 8px 12px; border-left: 3px solid var(--accent-gold); margin-bottom: 10px; border-radius: 0 4px 4px 0;">
            <strong style="color: var(--accent-gold);">2. Computer as an Instrument:</strong><br>
            A device or online communication service is used as a weapon or tool to commit an offence against someone else.<br>
            <em>Examples:</em> Sending phishing emails, creating forged digital contracts, identity theft, or executing online financial frauds.
          </div>

          <div style="background: var(--page-bg-subtle); padding: 8px 12px; border-left: 3px solid #15803d; border-radius: 0 4px 4px 0;">
            <strong style="color: #15803d;">3. Computer as an Environment / Facilitator:</strong><br>
            Digital platforms provide the virtual setting or infrastructure for illegal coordination, storage, or black markets.<br>
            <em>Examples:</em> Dark web marketplaces for illicit contraband, encrypted communication groups for conspiracy.
          </div>
        `
      },
      right: {
        pageNumber: 6,
        runningHead: "Chapter 1: Characteristics (Part I)",
        content: `
          <h2>1.3 Important Characteristics of Cybercrime</h2>
          <p>Cybercrime possesses distinctive attributes that fundamentally differentiate it from conventional physical crimes:</p>
          
          <h3>A. Borderless Nature</h3>
          <p>The internet does not respect municipal or national boundaries. An attacker in Country A initiates an attack via a compromised proxy server in Country B to target a banking system in India.</p>
          <p>The crime involves multiple sovereign jurisdictions. Investigators require international cooperation (MLAT) to obtain server logs, account information, and evidence. India's IT Act addresses offences with foreign connections through <strong>Section 75</strong>.</p>

          <h3>B. Speed and Automation</h3>
          <p>Traditional criminals must approach victims individually. Cybercriminals automate operations and contact thousands of people in seconds. A single phishing script can distribute fraudulent messages to hundreds of thousands of accounts simultaneously.</p>

          <h3>C. Concealment of Identity</h3>
          <p>Offenders attempt to conceal their identities using fake accounts, compromised systems, proxy networks, and VPNs. However, online anonymity is rarely absolute: investigators trace network records, transaction trails, account metadata, and device forensics.</p>
        `
      }
    },

    // Spread 3: Characteristics Part II & Historical Timeline (Pages 7 & 8)
    {
      spreadId: 3,
      left: {
        pageNumber: 7,
        runningHead: "Chapter 1: Characteristics (Part II)",
        content: `
          <h3>D. Digital and Electronic Evidence</h3>
          <p>Traditional crimes leave physical traces like fingerprints or eyewitnesses. Cybercrimes leave electronic evidence:</p>
          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li>IP addresses, network flow records, and firewall logs.</li>
            <li>Browser history, session cache, and tracking cookies.</li>
            <li>Email transmission headers and messaging audit trails.</li>
            <li>File system metadata, timestamps (MAC times), and unallocated space.</li>
            <li>Device storage and deleted-file recovery remnants.</li>
            <li>Financial transaction logs and cryptocurrency ledger records.</li>
            <li>System authentication and access control logs.</li>
          </ul>

          <div class="book-callout">
            <strong>Forensic Evidentiary Standard:</strong> Digital evidence is intangible and fragile. Investigators must prove authenticity, integrity, preservation, and legal admissibility under the Bharatiya Sakshya Adhiniyam, 2023.
          </div>

          <h3>E. Scalability & Attribution Challenges</h3>
          <p>Malicious scripts can infect thousands of systems simultaneously. An IP address identifies a network connection, not necessarily the specific human sitting at the keyboard. Forensics must distinguish between device identification and personal culpability.</p>
        `
      },
      right: {
        pageNumber: 8,
        runningHead: "Chapter 1: Historical Timeline",
        content: `
          <h2>1.4 Historical Development of Cybercrime</h2>
          <p>Cybercrime evolved directly alongside computing and telecommunications:</p>

          <table class="book-table">
            <thead>
              <tr><th>Period</th><th>Major Developments & Evolution</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1960s–1970s</strong></td><td>Mainframe computer misuse, unauthorized terminal access, early telecommunications manipulation (phreaking).</td></tr>
              <tr><td><strong>1980s</strong></td><td>Personal-computer malware (Brain, Morris Worm), software piracy, computer fraud, early computer-crime statutes.</td></tr>
              <tr><td><strong>1990s</strong></td><td>Public internet expansion, email-based attacks, Nigerian 419 advance-fee scams, commercial website defacement.</td></tr>
              <tr><td><strong>2000s</strong></td><td>Botnets, commercialized phishing, automated credit card skimming, identity theft, organized transnational cyber syndicates.</td></tr>
              <tr><td><strong>2010s</strong></td><td>Ransomware cryptoware, massive corporate data breaches, mobile payment fraud, dark web cryptocurrency extortion.</td></tr>
              <tr><td><strong>2020s</strong></td><td>AI-assisted deepfakes, automated social engineering, critical infrastructure sabotage, complex supply-chain intrusions.</td></tr>
            </tbody>
          </table>

          <div class="book-callout">
            <strong>Historical Insight:</strong> These eras overlap significantly. Computer fraud and unauthorized access existed in corporate networks decades before the public World Wide Web emerged.
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
          <p>These core disciplines interact closely but have distinct objectives and methodologies:</p>

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

          <div class="book-callout">
            <strong>The Role of the Cyber Forensic Specialist:</strong><br>
            While cybersecurity focuses on <em>preventing</em> intrusions and cyber law focuses on <em>punishing</em> offenders, Cyber Forensics bridges technology and law. The forensic analyst extracts digital remnants, validates evidence integrity with cryptographic hashes (SHA-256), and constructs court-admissible forensic audit reports.
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
          <h3>3.1 Cyberstalking</h3>
          <p>Cyberstalking is the use of electronic communications or digital networks to repeatedly monitor, contact, threaten, or harass an individual.</p>

          <h3>How Cyberstalking Manifests:</h3>
          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li>Repeated unwanted digital messages across social platforms and email.</li>
            <li>Covertly tracking internet browsing or GPS location data.</li>
            <li>Creating fake profiles to impersonate or approach the victim's contacts.</li>
            <li>Sending intimidating or threatening communications.</li>
          </ul>

          <div class="book-callout">
            <span class="sec-badge bns">BNS §78</span> <strong>Stalking under Indian Law:</strong><br>
            BNS Section 78 specifically covers a man monitoring a woman's use of the internet, email, or other electronic communication without lawful justification.<br>
            <strong>Statutory Punishment:</strong> First conviction up to <strong>3 years imprisonment + fine</strong>; second or subsequent conviction up to <strong>5 years + fine</strong>.
          </div>

          <p style="font-size: 0.8rem; color: var(--text-muted);"><em>Forensic Perspective:</em> Investigators examine chat logs, account creation IPs, device MAC addresses, timestamp correlations, and platform preservation requests.</p>
        `
      }
    },

    // Spread 8: Sexual Content, Deepfakes & Forgery (Pages 17 & 18)
    {
      spreadId: 8,
      left: {
        pageNumber: 17,
        runningHead: "Chapter 3: Unlawful Sexual Content & Deepfakes",
        content: `
          <h3>3.2 Cyber Pornography & Unlawful Sexual Content</h3>
          <p>Indian law draws strict statutory distinctions between different categories of electronic sexual content:</p>

          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li><span class="sec-badge it-act">IT Act §67</span>: Publishing or transmitting <strong>obscene</strong> electronic material (First: 3 yrs + ₹5L; Sub: 5 yrs + ₹10L).</li>
            <li><span class="sec-badge it-act">IT Act §67A</span>: Publishing or transmitting material depicting <strong>sexually explicit acts</strong> (First: 5 yrs + ₹10L; Sub: 7 yrs + ₹10L).</li>
            <li><span class="sec-badge it-act">IT Act §67B</span>: Material depicting <strong>children</strong> in sexually explicit acts (First: 5 yrs + ₹10L; Sub: 7 yrs + ₹10L, read with POCSO Act Sections 13–15).</li>
            <li><span class="sec-badge bns">BNS §77</span> <strong>Voyeurism:</strong> Non-consensual dissemination of private images. Expressly recognizes that consent to capture does NOT imply consent to share.</li>
          </ul>

          <div class="book-callout case">
            <strong>Deepfake-Enabled Abuse:</strong> Synthetic media using AI to fabricate a person's likeness or voice. In August 2026, the Ministry of Electronics & IT (MeitY) reiterated that existing provisions of the IT Act (Sections 66D, 66E, 67, 67A) and BNS apply directly to deepfake harms.
          </div>
        `
      },
      right: {
        pageNumber: 18,
        runningHead: "Chapter 3: Cyber Forgery & Electronic Records",
        content: `
          <h3>3.3 Cyber Forgery</h3>
          <p>Forgery means creating a false document or electronic record with intent to cause damage or commit fraud.</p>
          
          <div class="book-callout">
            <span class="sec-badge bns">BNS §336</span> <strong>Forgery:</strong> Falsifying electronic records (e.g., manipulated digital receipts, fabricated invoices, altered salary certificates). Under Section 336(3), forgery intended for cheating carries up to <strong>7 years imprisonment + fine</strong>.
          </div>

          <p>In electronic environments, forgery encompasses:</p>
          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li>Altering digital signatures or certificate attributes.</li>
            <li>Manipulating PDF metadata, dates, or financial entries.</li>
            <li>Fabricating official email headers to deceive business partners.</li>
            <li>Altering server configuration files to mask illicit activity.</li>
          </ul>

          <p style="font-size: 0.82rem; color: var(--text-muted);">
            <em>Forensic Detection:</em> Analysts verify file structure metadata, check internal PDF creation/modification dates against operating system MAC times, and validate digital cryptographic hashes.
          </p>
        `
      }
    },

    // Spread 9: Fraud, Impersonation & Phishing (Pages 19 & 20)
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

          <div class="book-callout">
            <strong>Key Legal Distinction:</strong> If an offender creates a fake profile using a victim's real photograph and name to borrow money from friends, both Section 66C (identity theft) and Section 66D (cheating by personation) apply simultaneously alongside BNS cheating sections.
          </div>
        `
      },
      right: {
        pageNumber: 20,
        runningHead: "Chapter 3: Phishing & E-Banking Frauds",
        content: `
          <h3>3.5 Phishing and E-Banking Frauds</h3>
          <p>Phishing uses deceptive emails, spoofed portals, or messaging links to manipulate individuals into disclosing sensitive authentication data.</p>

          <h3>Phishing Variants:</h3>
          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li><strong>Spear Phishing:</strong> Highly customized attacks targeting specific executives.</li>
            <li><strong>Whaling:</strong> Attacks directed at senior C-suite leadership.</li>
            <li><strong>Smishing & Vishing:</strong> SMS-based and voice-based telephone fraud.</li>
            <li><strong>Reverse-Charge UPI Frauds:</strong> Tricking victims into clicking "Pay" instead of "Receive".</li>
            <li><strong>SIM Swapping:</strong> Fraudulently reissuing a victim's mobile number to intercept bank OTPs.</li>
          </ul>

          <div class="book-callout case">
            <strong>Statutory Alignment:</strong> Phishing violates multiple provisions: IT Act §43/66 (unauthorized access), §66C (identity credential theft), §66D (personation), and BNS cheating.
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
        runningHead: "Chapter 4: Ransomware & Extortion",
        content: `
          <h3>4.3 Ransomware and Cyber Extortion</h3>
          <p>Ransomware is malicious software that encrypts user files or locks systems, demanding payment (typically in cryptocurrency) for decryption keys.</p>

          <h3>Evolution of Ransomware Tactics:</h3>
          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li><strong>Locker Ransomware:</strong> Locks basic system user-interface access without encrypting underlying files.</li>
            <li><strong>Crypto Ransomware:</strong> Employs strong asymmetric encryption (e.g., RSA-4096 + AES-256) to encrypt files in place.</li>
            <li><strong>Double Extortion:</strong> Exfiltrates sensitive databases before encryption, threatening public disclosure if ransom is unpaid.</li>
            <li><strong>Triple Extortion:</strong> Adds DDoS attacks against the victim's clients or directly contacts customers to force payment.</li>
          </ul>

          <div class="book-callout case">
            <strong>Statutory Offence Profile:</strong> Ransomware triggers <span class="sec-badge it-act">IT Act §43/66</span> (damage to computer systems) and <span class="sec-badge bns">BNS §308</span> (extortion). Indian CERT-In guidelines mandate reporting ransomware incidents within 6 hours.
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
        runningHead: "Chapter 5: Cyber Defamation & Shreya Singhal",
        content: `
          <h3>5.2 Cyber Defamation & Section 66A</h3>
          <p>Publishing false and derogatory statements online to injure a person's reputation:</p>

          <div class="book-callout case">
            <strong>Landmark Ruling: <em>Shreya Singhal v. Union of India (2015)</em>:</strong><br>
            The Supreme Court struck down <strong>Section 66A</strong> of the IT Act in its entirety as unconstitutional.<br>
            <em>Reasoning:</em> The section criminalized sending "offensive" or "annoying" electronic messages without clear definition, violating Article 19(1)(a) freedom of speech. It suffered from overbreadth and vagueness.
          </div>

          <p>Online defamation is currently prosecuted under:</p>
          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li><span class="sec-badge bns">BNS §356</span>: General criminal defamation provisions.</li>
            <li><span class="sec-badge bns">BNS §197</span>: Unlawful statements creating public mischief or communal discord.</li>
          </ul>

          <p style="font-size: 0.82rem; color: var(--text-muted);">
            <em>DSSSB Alert:</em> Police officers cannot register an FIR under Section 66A today; invoking it is a contempt of Supreme Court directives.
          </p>
        `
      },
      right: {
        pageNumber: 28,
        runningHead: "Chapter 5: Right to Privacy in Cyberspace",
        content: `
          <h3>5.3 Privacy, Surveillance & Data Protection</h3>
          <p>Digital privacy balances individual rights against legitimate state surveillance interests.</p>

          <div class="book-callout case">
            <strong>Landmark Ruling: <em>K.S. Puttaswamy v. Union of India (2017)</em>:</strong><br>
            A 9-judge Constitution Bench held that the <strong>Right to Privacy is a Fundamental Right</strong> under Article 21.<br>
            Any state intrusion or digital surveillance must satisfy a 3-fold test:<br>
            1. <strong>Legality:</strong> Must have backing of a valid law.<br>
            2. <strong>Need / Legitimate Aim:</strong> Must serve a recognized state interest.<br>
            3. <strong>Proportionality:</strong> The least intrusive method must be employed.
          </div>

          <p>Digital privacy is safeguarded statutory under:</p>
          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li><span class="sec-badge it-act">IT Act §66E</span>: Violation of bodily privacy (publishing images of private areas).</li>
            <li><span class="sec-badge it-act">IT Act §72 & §72A</span>: Breach of confidentiality and lawful contract disclosure.</li>
            <li>Digital Personal Data Protection (DPDP) Act, 2023.</li>
          </ul>
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
        runningHead: "Chapter 7: Intermediary Liability & Section 79",
        content: `
          <h3>7.2 Intermediary Liability & Safe Harbour</h3>
          <p>An intermediary includes telecom providers, network service providers, internet service providers, search engines, and social media platforms.</p>

          <div class="book-callout">
            <span class="sec-badge it-act">IT Act §79</span> <strong>Safe Harbour Protection:</strong><br>
            An intermediary is not liable for third-party information or communication links hosted by it, provided:<br>
            1. Its function is limited to providing access or transmission.<br>
            2. It does not initiate the transmission, select the receiver, or modify the content.<br>
            3. It observes statutory <strong>due diligence</strong> under central government rules.
          </div>

          <p><strong>Loss of Exemption:</strong> The intermediary loses protection if it conspired in the offence or fails to expeditiously remove unlawful content upon receiving actual knowledge via court order or authorized notification.</p>
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
        runningHead: "Chapter 10: Electronic Evidence under BSA 2023",
        content: `
          <h2>10.2 Digital Evidence under BSA 2023</h2>
          <p>The Bharatiya Sakshya Adhiniyam, 2023 replaces the Indian Evidence Act, 1872:</p>

          <div class="book-callout">
            <strong>From Section 65B (IEA) to Section 63 (BSA):</strong><br>
            Under the BSA, <strong>Section 61</strong> affirms that electronic records have the same legal effect as paper documents. <strong>Section 63</strong> governs the admissibility of electronic records (corresponding to former Section 65B).
          </div>

          <h3>Requirements of Electronic Certificate (Section 63):</h3>
          <ul style="font-size: 0.82rem; line-height: 1.38;">
            <li>Identifying the electronic record and describing the manner of production.</li>
            <li>Giving particulars of the device involved in production.</li>
            <li>Certifying that the computer was operating properly during relevant periods.</li>
            <li>Signed by the person in lawful management or an authorized expert.</li>
          </ul>

          <div class="book-callout case">
            <strong>Key Landmark: <em>Arjun Panditrao Khotkar (2020)</em>:</strong> Producing the statutory certificate is a mandatory condition precedent for the admissibility of secondary electronic evidence.
          </div>
        `
      },
      right: {
        pageNumber: 40,
        runningHead: "Chapter 11: DSSSB Quick Revision Checklist",
        content: `
          <h1>Chapter 11: Comprehensive Revision Notes</h1>
          <p>High-yield exam checklist for DSSSB Junior Scientific Assistant (Cyber Forensic):</p>

          <div style="background: var(--page-bg-subtle); padding: 8px 12px; border-radius: 6px; border: 1px solid var(--ui-border); font-size: 0.8rem; line-height: 1.4; margin-bottom: 10px;">
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
            <strong>Landmark Decisions:</strong><br>
            • <em>Shreya Singhal (2015):</em> §66A struck down.<br>
            • <em>Puttaswamy (2017):</em> Privacy is Fundamental Right (Art. 21).<br>
            • <em>Arjun Panditrao (2020):</em> Mandatory certificate for e-evidence.
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
    { chapter: "Ch 03", title: "Pornography (§67), Deepfakes & Cyber Forgery", spreadIndex: 8, page: "17–18" },
    { chapter: "Ch 03", title: "Cyber Fraud (§66D) & Phishing / Banking Fraud", spreadIndex: 9, page: "19–20" },
    { chapter: "Ch 04", title: "IPR in Cyberspace (§65) & Malware Ecosystem", spreadIndex: 10, page: "21–22" },
    { chapter: "Ch 04", title: "Ransomware Extortion & Denial of Service (DDoS)", spreadIndex: 11, page: "23–24" },
    { chapter: "Ch 04/05", title: "Hacking (§43/66) & Cyberterrorism (§66F)", spreadIndex: 12, page: "25–26" },
    { chapter: "Ch 05", title: "Cyber Defamation (Shreya Singhal) & Privacy", spreadIndex: 13, page: "27–28" },
    { chapter: "Ch 06", title: "IT Act 2000 Origins, Scope & Jurisdiction (§75)", spreadIndex: 14, page: "29–30" },
    { chapter: "Ch 07", title: "IT Act Master Penalties Table (Sections 43–66E)", spreadIndex: 15, page: "31–32" },
    { chapter: "Ch 07/08", title: "Penalties (66F–72A) & Intermediary Liability (§79)", spreadIndex: 16, page: "33–34" },
    { chapter: "Ch 08/09", title: "Digital Signatures, PKI & Authorities (CCA/CERT)", spreadIndex: 17, page: "35–36" },
    { chapter: "Ch 09/10", title: "Police Powers (§78/80) & BNS 2023 Penal Mapping", spreadIndex: 18, page: "37–38" },
    { chapter: "Ch 10/11", title: "BSA 2023 Digital Evidence & Examination Index", spreadIndex: 19, page: "39–40" }
  ];

  // Flat list of individual pages for single-page mode (40 pages)
  const pages = [];
  spreads.forEach((spread, sIdx) => {
    pages.push({ ...spread.left, spreadIndex: sIdx, side: 'left' });
    pages.push({ ...spread.right, spreadIndex: sIdx, side: 'right' });
  });

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
          if (currentSpread < spreads.length - 1) {
            nextPage();
          } else {
            turnToSpread(0);
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
