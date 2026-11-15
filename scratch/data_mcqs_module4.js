// Module 4: Spreads 16 to 20 (MCQs Q151 to Q200 & Spreads Data)
module.exports = {
  mcqs: [
    // Spread 16: Types of Vulnerabilities: Web, API, Auth & Architecture (Q151–Q160)
    {
      id: 151,
      question: "What web/API vulnerability occurs when an application exposes a direct reference to an internal database object (e.g. /api/user/1004) without verifying that the requesting user owns that object?",
      options: [
        "Insecure Direct Object Reference (IDOR / BOLA - Broken Object Level Authorization)",
        "SQL Injection",
        "Cross-Site Scripting",
        "Buffer Overflow"
      ],
      answer: 0,
      explanation: "IDOR (or BOLA, ranked #1 in OWASP API Top 10) allows an attacker to change an ID parameter in an API request and access other users' private accounts without authorization."
    },
    {
      id: 152,
      question: "What category of vulnerabilities encompasses flaws in credential management, such as permitting weak passwords, failing to invalidate session tokens on logout, or lacking rate-limiting on login forms?",
      options: [
        "Broken Authentication and Session Management",
        "Hardware Power Glitching",
        "Memory Leaks",
        "Physical Cable Sniffing"
      ],
      answer: 0,
      explanation: "Broken Authentication allows attackers to compromise passwords, session tokens, or keys to assume the identities of other users (leading to credential stuffing and account takeover)."
    },
    {
      id: 153,
      question: "What attack (CWE-352) tricks an authenticated victim's browser into executing unwanted actions (e.g. changing an email or transferring funds) on a vulnerable trusted web application?",
      options: [
        "Cross-Site Request Forgery (CSRF)",
        "SQL Injection",
        "Buffer Overflow",
        "Server-Side Request Forgery"
      ],
      answer: 0,
      explanation: "CSRF exploits the browser's automatic inclusion of session cookies with cross-site requests. Mitigated using Anti-CSRF synchronizer tokens and SameSite cookie attributes (SameSite=Strict/Lax)."
    },
    {
      id: 154,
      question: "What vulnerability (CWE-918) occurs when a web application takes a user-supplied URL and makes a backend server-side request to that URL without validation, allowing attackers to access internal cloud metadata (169.254.169.254)?",
      options: [
        "Server-Side Request Forgery (SSRF)",
        "Cross-Site Scripting",
        "Path Traversal",
        "Command Injection"
      ],
      answer: 0,
      explanation: "SSRF tricks the backend server into acting as a proxy to probe internal private networks or steal cloud credentials from instance metadata endpoints (169.254.169.254)."
    },
    {
      id: 155,
      question: "Which of the following is a classic example of a 'Security Misconfiguration' vulnerability under the OWASP Top 10?",
      options: [
        "Leaving default administrative passwords enabled, keeping unnecessary debug features active, or exposing directory listings",
        "Using AES-256 for database encryption",
        "Enforcing Multi-Factor Authentication",
        "Applying security patches within 24 hours"
      ],
      answer: 0,
      explanation: "Security Misconfiguration happens when systems are deployed with default accounts, unneeded sample files, open administrative ports, or verbose error messages showing stack traces."
    },
    {
      id: 156,
      question: "What vulnerability occurs when an application transmits sensitive data (such as passwords or credit cards) in cleartext over unencrypted protocols (e.g. HTTP, Telnet, FTP)?",
      options: [
        "Cryptographic Failure / Sensitive Data Exposure",
        "Buffer Overflow",
        "Cross-Site Scripting",
        "SQL Injection"
      ],
      answer: 0,
      explanation: "Transmitting sensitive data in cleartext exposes it to interception via Wi-Fi sniffing or Man-in-the-Middle attacks. Enforcing TLS 1.3 and HSTS prevents this."
    },
    {
      id: 157,
      question: "What concurrency flaw (CWE-367), known as a Time-of-Check to Time-of-Use (TOCTOU) vulnerability, occurs when a system's state changes between the time a permission is verified and the time the action is executed?",
      options: ["Race Condition Vulnerability", "SQL Injection", "Buffer Overflow", "Format String Bug"],
      answer: 0,
      explanation: "A Race Condition occurs when multiple threads or processes access shared resources concurrently. In a TOCTOU flaw, an attacker changes the file or state between the check and use operations."
    },
    {
      id: 158,
      question: "What web vulnerability tricks a user into clicking transparent or hidden buttons positioned over an innocent-looking website, and how is it defended against in HTTP headers?",
      options: [
        "Clickjacking (UI Redressing); defended using X-Frame-Options: DENY and Content-Security-Policy (CSP) frame-ancestors",
        "SQL Injection; defended using firewalls",
        "Buffer Overflow; defended using ASLR",
        "ARP Spoofing; defended using HTTPS"
      ],
      answer: 0,
      explanation: "Clickjacking loads the target website in an invisible iframe over an attacker's page. The HTTP header X-Frame-Options: DENY (or CSP frame-ancestors 'none') stops framing entirely."
    },
    {
      id: 159,
      question: "What vulnerability (CWE-434) occurs when a web application allows users to upload executable files (e.g. .php, .jsp, .aspx web shells) directly into a publicly accessible web root without type validation?",
      options: [
        "Unrestricted File Upload",
        "SQL Injection",
        "Cross-Site Scripting",
        "Clickjacking"
      ],
      answer: 0,
      explanation: "Unrestricted File Upload allows an attacker to upload an executable server script (web shell) and navigate to its URL, achieving immediate Remote Code Execution (RCE) on the server."
    },
    {
      id: 160,
      question: "What API vulnerability occurs when an application endpoint automatically binds user-supplied JSON or form parameters directly to backend database model fields without an explicit whitelist, allowing users to escalate to admin?",
      options: [
        "Mass Assignment (Auto-Binding Vulnerability)",
        "Buffer Overflow",
        "Path Traversal",
        "Memory Corruption"
      ],
      answer: 0,
      explanation: "Mass Assignment occurs when modern web frameworks bind request parameters directly to object properties, allowing attackers to inject unauthorized fields like {\"is_admin\": true}."
    },

    // Spread 17: CVEs & CVSS Scoring System (Q161–Q170)
    {
      id: 161,
      question: "What is the primary role of the Common Vulnerabilities and Exposures (CVE) program maintained by MITRE?",
      options: [
        "To provide a standardized, publicly accessible reference identifier and dictionary for known cybersecurity vulnerabilities",
        "To sell commercial antivirus licenses",
        "To prosecute international cyber criminals",
        "To manufacture encryption hardware"
      ],
      answer: 0,
      explanation: "The CVE system provides a standard identifier (e.g. CVE-2021-44228) so security researchers, vendors, and IT teams worldwide can discuss the exact same vulnerability without confusion."
    },
    {
      id: 162,
      question: "What is the standard naming format utilized by MITRE to catalog public cybersecurity vulnerabilities?",
      options: [
        "CVE-YYYY-NNNNN (e.g. CVE-2021-44228)",
        "BUG-XXXX-YYYY",
        "EXPLOIT-NNNNN",
        "VULN-YYYY-MM-DD"
      ],
      answer: 0,
      explanation: "CVE identifiers follow the format CVE-YYYY-NNNNN, where YYYY is the year of assignment and NNNNN is an arbitrary 4+ digit sequence number."
    },
    {
      id: 163,
      question: "What organizations are authorized by MITRE to assign official CVE identifiers to newly discovered software vulnerabilities in their own products?",
      options: [
        "CVE Numbering Authorities (CNAs)",
        "Root Certificate Authorities",
        "Regional Internet Registries (RIRs)",
        "Domain Name Registrars"
      ],
      answer: 0,
      explanation: "CNAs (CVE Numbering Authorities) are vendors (like Microsoft, Google, Red Hat) and research institutions authorized to assign CVE numbers directly to flaws."
    },
    {
      id: 164,
      question: "What is the Common Vulnerability Scoring System (CVSS v3.1), and what score range does it produce?",
      options: [
        "An open industry standard for assessing the severity of security vulnerabilities on a decimal scale from 0.0 to 10.0",
        "A scale from 1 to 100 for internet connection speed",
        "A test score for cybersecurity job applicants",
        "A hardware rating for server cooling units"
      ],
      answer: 0,
      explanation: "Maintained by FIRST, CVSS v3.1 evaluates vulnerability characteristics across Base, Temporal, and Environmental metric groups, producing a severity score from 0.0 to 10.0."
    },
    {
      id: 165,
      question: "Which of the following is an Exploitability Metric within the CVSS v3.1 Base Score group?",
      options: [
        "Attack Vector (AV)",
        "Remediation Level (RL)",
        "Exploit Code Maturity (E)",
        "Modified Base Metrics (M)"
      ],
      answer: 0,
      explanation: "The CVSS Base Exploitability metrics are Attack Vector (AV), Attack Complexity (AC), Privileges Required (PR), and User Interaction (UI)."
    },
    {
      id: 166,
      question: "In a CVSS v3.1 vector string, what does an Attack Vector value of 'AV:N' represent?",
      options: [
        "Network (the vulnerability is remotely exploitable across the public Internet)",
        "Adjacent (requires local Wi-Fi or subnet access)",
        "Local (requires local shell access)",
        "Physical (requires physical access to the device)"
      ],
      answer: 0,
      explanation: "AV:N (Network) carries the highest severity weight: the attacker can exploit the vulnerability remotely over the Internet without physical or local subnet proximity."
    },
    {
      id: 167,
      question: "In a CVSS v3.1 vector string, what does 'UI:R' represent?",
      options: [
        "User Interaction: Required (a human victim must perform an action like clicking a link or downloading a file)",
        "User Interface: Responsive",
        "Universal Identity: Registered",
        "User Isolation: Redundant"
      ],
      answer: 0,
      explanation: "UI:R indicates that exploitation cannot succeed autonomously; a human user must be tricked into participating (e.g., clicking a phishing link in an XSS attack)."
    },
    {
      id: 168,
      question: "In CVSS v3.1, what does the 'Scope' (S) metric evaluate?",
      options: [
        "Whether a vulnerability exploited in one software authority impacts resources governed by a DIFFERENT security authority (Scope Changed - S:C)",
        "The number of lines of code in the program",
        "The file size of the patch",
        "The duration of the penetration test"
      ],
      answer: 0,
      explanation: "Scope Changed (S:C) occurs when an exploit breaks out of its security boundary (e.g. a Virtual Machine escape escaping the guest OS to compromise the host hypervisor)."
    },
    {
      id: 169,
      question: "Under the qualitative severity rating scale of CVSS v3.1, what score range corresponds to a 'Critical' severity rating?",
      options: ["9.0 to 10.0", "7.0 to 8.9", "4.0 to 6.9", "0.1 to 3.9"],
      answer: 0,
      explanation: "CVSS ratings are: None (0.0), Low (0.1–3.9), Medium (4.0–6.9), High (7.0–8.9), and Critical (9.0–10.0). Critical vulnerabilities require emergency patching."
    },
    {
      id: 170,
      question: "What U.S. government database maintained by NIST provides CVSS scoring, CWE classification, and fix information for all published CVEs?",
      options: [
        "The National Vulnerability Database (NVD)",
        "The NSA Threat Library",
        "The CIA Factbook",
        "The FBI Internet Crime Complaint Center"
      ],
      answer: 0,
      explanation: "The National Vulnerability Database (NVD, nvd.nist.gov) synchronizes with MITRE CVEs and provides detailed CVSS scoring, impacted software CPE strings, and fix advisory links."
    },

    // Spread 18: Vulnerability Assessment Tools and Techniques (Q171–Q180)
    {
      id: 171,
      question: "What is the standard sequential workflow of an enterprise Vulnerability Assessment life cycle?",
      options: [
        "Asset Discovery -> Service Enumeration -> Vulnerability Scanning -> Analysis & Verification -> Reporting & Remediation",
        "Exploitation -> Privilege Escalation -> Looting -> Disconnection",
        "Purchasing Software -> Running Scans -> Disabling Firewalls",
        "Deleting Logs -> Formatting Disks -> Reporting"
      ],
      answer: 0,
      explanation: "A structured VA lifecycle systematically discovers alive hosts, enumerates open ports/services, executes vulnerability scanning plugins, analyzes findings, and produces remediation reports."
    },
    {
      id: 172,
      question: "What is the difference between a Credentialed (Authenticated) scan and a Non-Credentialed (Unauthenticated) scan?",
      options: [
        "A Credentialed scan logs into target endpoints with admin credentials to inspect local software versions and registry keys; an Unauthenticated scan probes only exposed network ports from the outside",
        "A Credentialed scan is illegal; an Unauthenticated scan is legal",
        "A Credentialed scan uses wireless; an Unauthenticated scan uses ethernet",
        "A Credentialed scan is only for web servers"
      ],
      answer: 0,
      explanation: "Credentialed scans provide deep inside-out visibility (detecting missing OS patches and insecure local configurations) with near-zero network overhead and minimal false positives."
    },
    {
      id: 173,
      question: "Why do enterprise security auditors strongly prefer Credentialed vulnerability scans over unauthenticated network scans for compliance audits?",
      options: [
        "They detect missing internal patches, inspect registry settings, and produce significantly fewer False Positives",
        "They bypass the need for a scanner license",
        "They run 1,000 times faster",
        "They automatically patch the computer during the scan"
      ],
      answer: 0,
      explanation: "Unauthenticated scans guess software versions from external banner strings (which are often modified or masked), whereas credentialed scans verify exact file versions on disk."
    },
    {
      id: 174,
      question: "What industry-leading enterprise vulnerability scanner, developed by Tenable, uses a proprietary modular plugin architecture written in NASL?",
      options: ["Nessus", "Wireshark", "Burp Suite", "John the Ripper"],
      answer: 0,
      explanation: "Nessus is the worldwide standard vulnerability scanner, executing over 150,000 modular vulnerability check plugins written in the Nessus Attack Scripting Language (NASL)."
    },
    {
      id: 175,
      question: "What popular open-source enterprise vulnerability scanner was originally forked from Nessus when Nessus transitioned to a closed-source proprietary model in 2005?",
      options: [
        "OpenVAS (Greenbone Vulnerability Management)",
        "Nmap",
        "Nikto",
        "Metasploit"
      ],
      answer: 0,
      explanation: "OpenVAS (Open Vulnerability Assessment System), maintained by Greenbone, is the premier open-source vulnerability scanner providing daily-updated Network Vulnerability Tests (NVTs)."
    },
    {
      id: 176,
      question: "What cloud-based vulnerability management and compliance platform deploys lightweight Cloud Agents directly onto endpoints to provide continuous real-time vulnerability tracking?",
      options: ["Qualys (QualysGuard)", "Cain and Abel", "Hydra", "Aircrack-ng"],
      answer: 0,
      explanation: "Qualys is a leading enterprise SaaS platform that gathers telemetry from lightweight agents installed on endpoints, eliminating the need for bulky scheduled network scans."
    },
    {
      id: 177,
      question: "What open-source command-line web server vulnerability scanner, written in Perl by Chris Sullo, scans for over 6,700 dangerous CGIs, outdated server software, and configuration files?",
      options: ["Nikto", "Nessus", "Wireshark", "Burp Intruder"],
      answer: 0,
      explanation: "Nikto is a renowned open-source web server scanner that rapidly identifies dangerous files, outdated server banners, insecure HTTP headers, and default installation files."
    },
    {
      id: 178,
      question: "What open-source suite provides automated vulnerability auditing against NIST Security Content Automation Protocol (SCAP) security compliance baselines on Linux?",
      options: ["OpenSCAP", "OpenSSH", "OpenSSL", "OpenVPN"],
      answer: 0,
      explanation: "OpenSCAP evaluates Linux system configurations against standardized security baselines (such as DISA STIGs and CIS Benchmarks) using automated SCAP policy XML documents."
    },
    {
      id: 179,
      question: "What is 'Passive Vulnerability Assessment' in sensitive operational environments (such as hospital medical devices or SCADA/ICS power grids)?",
      options: [
        "Monitoring network traffic passively via SPAN/TAP ports without injecting active probe packets that could crash fragile industrial systems",
        "Running scans while the server is powered off",
        "Asking system administrators for verbal confirmation",
        "Reading the hardware instruction manual"
      ],
      answer: 0,
      explanation: "In SCADA and healthcare networks, active scanning can crash sensitive controllers. Passive scanners (like Tenable NNM) inspect mirrored network packets to detect flaws safely."
    },
    {
      id: 180,
      question: "What U.S. government catalog, maintained by CISA, is utilized by modern vulnerability management teams to prioritize patching based on real-world active exploitation in the wild?",
      options: [
        "The Known Exploited Vulnerabilities (KEV) Catalog",
        "The Top Secret CIA Library",
        "The FBI Cyber Most Wanted",
        "The NSA Cyber Advisory List"
      ],
      answer: 0,
      explanation: "CISA's Known Exploited Vulnerabilities (KEV) catalog lists CVEs that are confirmed to be actively weaponized in real-world attacks, establishing mandatory remediation deadlines."
    },

    // Spread 19: Penetration Testing Methods & Reconnaissance (Nmap) (Q181–Q190)
    {
      id: 181,
      question: "What penetration testing framework standardizes the engagement lifecycle into 7 sequential phases: Pre-engagement, Intelligence Gathering, Threat Modeling, Vulnerability Analysis, Exploitation, Post-Exploitation, and Reporting?",
      options: [
        "PTES (Penetration Testing Execution Standard)",
        "ITIL Framework",
        "COBIT",
        "PCI-DSS"
      ],
      answer: 0,
      explanation: "The PTES standard defines the complete lifecycle of a professional penetration test, ensuring thoroughness, ethical compliance, and high technical quality."
    },
    {
      id: 182,
      question: "In penetration testing intelligence gathering, what is the distinction between 'Passive Reconnaissance' and 'Active Reconnaissance'?",
      options: [
        "Passive reconnaissance gathers data without sending any traffic directly to target systems (e.g. WHOIS, OSINT); Active reconnaissance sends probe packets directly to target assets",
        "Passive reconnaissance is illegal; Active reconnaissance is legal",
        "Passive reconnaissance requires passwords; Active reconnaissance requires no passwords",
        "Passive reconnaissance tests employees; Active reconnaissance tests hardware"
      ],
      answer: 0,
      explanation: "Passive recon gathers intelligence invisibly (via search engines, DNS records, and social media). Active recon probes ports directly, generating traffic logged by firewalls."
    },
    {
      id: 183,
      question: "What renowned network exploration and port scanning tool was created by Gordon Lyon (Fyodor) and is considered the premier reconnaissance utility worldwide?",
      options: ["Nmap (Network Mapper)", "Nessus", "Metasploit", "Burp Suite"],
      answer: 0,
      explanation: "Nmap is the open-source industry standard utility for network discovery, port scanning, OS fingerprinting, and vulnerability scanning."
    },
    {
      id: 184,
      question: "In Nmap port scanning, what command-line flag executes a 'TCP SYN Stealth Scan' (Half-Open Scan)?",
      options: ["-sS", "-sT", "-sU", "-sA"],
      answer: 0,
      explanation: "-sS executes a SYN stealth scan: it sends a SYN packet, waits for SYN/ACK, and immediately responds with an RST to tear down the connection without completing the 3-way handshake."
    },
    {
      id: 185,
      question: "In Nmap, what command-line flag executes a full 'TCP Connect Scan' utilizing the operating system's native network socket API?",
      options: ["-sT", "-sS", "-sN", "-sX"],
      answer: 0,
      explanation: "-sT completes the full 3-way handshake (SYN -> SYN/ACK -> ACK). It is used when an unprivileged user cannot craft raw network packets on the local operating system."
    },
    {
      id: 186,
      question: "What Nmap flag instructs the scanner to determine the exact application name and version string running on open ports (e.g. Apache 2.4.49, OpenSSH 8.2p1)?",
      options: ["-sV", "-sP", "-sO", "-v"],
      answer: 0,
      explanation: "-sV executes Service Version detection, querying listening ports with custom protocol probes to extract application banners and version numbers."
    },
    {
      id: 187,
      question: "What Nmap flag instructs the scanner to execute standard, safe vulnerability enumeration scripts from the Nmap Scripting Engine (NSE)?",
      options: ["-sC (or --script=default)", "-sA", "-sL", "-sn"],
      answer: 0,
      explanation: "-sC runs the default category of NSE scripts, checking for common misconfigurations, default credentials, and information disclosure."
    },
    {
      id: 188,
      question: "What Nmap command-line flag disables ICMP ping host discovery, forcing Nmap to scan target ports even if the host blocks or ignores ping requests?",
      options: ["-Pn", "-p-", "-T4", "-n"],
      answer: 0,
      explanation: "-Pn (Treat all hosts as online) skips host discovery. If a target Windows host drops ICMP pings via its local firewall, -Pn ensures Nmap still probes its ports."
    },
    {
      id: 189,
      question: "In Nmap scan output, what does a port status of 'Filtered' indicate to a penetration tester?",
      options: [
        "A firewall, packet filter, or router ACL is dropping probes, preventing Nmap from determining if the port is open or closed",
        "The port is actively running a database",
        "The port is completely open to the Internet",
        "The target host is powered off"
      ],
      answer: 0,
      explanation: "A 'Filtered' state means Nmap received no response (or received an ICMP unreachable error), indicating that a firewall or packet filter is intercepting the traffic."
    },
    {
      id: 190,
      question: "What exotic Nmap scan type sets the FIN, PSH, and URG flags simultaneously, illuminating the TCP packet 'like a Christmas tree' to evade stateless packet filters?",
      options: ["-sX (TCP Xmas Scan)", "-sN (Null Scan)", "-sF (FIN Scan)", "-sI (Idle Scan)"],
      answer: 0,
      explanation: "-sX sets FIN, PSH, and URG flags. According to RFC 793, closed ports must reply with RST, while open ports silently drop the packet, allowing testers to detect open ports stealthily."
    },

    // Spread 20: Penetration Testing Exploitation Tools & Reporting (Q191–Q200)
    {
      id: 191,
      question: "What open-source penetration testing framework, created by H.D. Moore in 2003, is the most widely adopted platform for developing and executing exploit code against remote targets?",
      options: ["The Metasploit Framework", "Nmap", "Wireshark", "OpenVAS"],
      answer: 0,
      explanation: "Metasploit provides a vast library of public exploits, auxiliary scanners, and modular payloads for automating the exploitation phase of penetration tests."
    },
    {
      id: 192,
      question: "In the Metasploit Framework architecture, what is the role of an 'Exploit' module versus a 'Payload' module?",
      options: [
        "An Exploit delivers and triggers the vulnerability on the target; a Payload is the actual malicious code (e.g. command shell, reverse shell) executed after successful compromise",
        "An Exploit is a firewall; a Payload is an antivirus",
        "An Exploit scans ports; a Payload generates passwords",
        "An Exploit is legal; a Payload is illegal"
      ],
      answer: 0,
      explanation: "The Exploit takes advantage of the vulnerability to gain execution; the Payload is the software payload (such as Meterpreter) deposited on the target to give the attacker control."
    },
    {
      id: 193,
      question: "In Metasploit payload terminology, what is the difference between a 'Staged' payload and a 'Single' (Inline) payload?",
      options: [
        "A Staged payload injects a tiny 'stager' that connects back to download the full payload; a Single payload is completely self-contained in one file",
        "A Staged payload is for Linux; a Single payload is for Windows",
        "A Staged payload is encrypted; a Single payload is plaintext",
        "A Staged payload never requires an IP address"
      ],
      answer: 0,
      explanation: "Staged payloads (e.g. windows/meterpreter/reverse_tcp) are tiny, fitting inside small memory buffers; they fetch the rest of Meterpreter once connected. Singles (windows/meterpreter_reverse_tcp) contain everything in one binary."
    },
    {
      id: 194,
      question: "What advanced post-exploitation payload within Metasploit executes entirely in the target computer's volatile memory (RAM) via Reflective DLL Injection without touching the physical hard drive?",
      options: ["Meterpreter", "Netcat", "Telnet", "Command Prompt"],
      answer: 0,
      explanation: "Meterpreter resides entirely in memory and uses encrypted TLS communications, evading traditional endpoint antivirus disk scanners and leaving minimal forensic artifacts."
    },
    {
      id: 195,
      question: "What leading web application penetration testing platform (developed by PortSwigger) acts as an intercepting HTTP/S proxy between the browser and target web server?",
      options: ["Burp Suite", "Nmap", "Nessus", "John the Ripper"],
      answer: 0,
      explanation: "Burp Suite captures, intercepts, inspects, and modifies web traffic in real time, making it the essential platform for web application penetration testing."
    },
    {
      id: 196,
      question: "In Burp Suite, what tool allows a penetration tester to manually modify individual HTTP requests and repeatedly reissue them to observe fine-grained server responses?",
      options: ["Burp Repeater", "Burp Sequencer", "Burp Decoder", "Burp Comparer"],
      answer: 0,
      explanation: "Burp Repeater allows testers to tweak headers, parameters, and payloads one at a time and resend requests instantly to analyze server reactions."
    },
    {
      id: 197,
      question: "What automated tool within Burp Suite is designed for performing customized attacks against web applications, such as dictionary credential brute-forcing and parameter fuzzing?",
      options: ["Burp Intruder", "Burp Repeater", "Burp Proxy", "Burp Spider"],
      answer: 0,
      explanation: "Burp Intruder automates high-speed parameter fuzzing and credential testing across attack positions using configurable payload lists."
    },
    {
      id: 198,
      question: "What open-source password cracking utility is renowned as the world's fastest GPU-accelerated rule-based password recovery tool, supporting hundreds of hash formats?",
      options: ["Hashcat", "Nmap", "Wireshark", "Burp Suite"],
      answer: 0,
      explanation: "Hashcat harnesses the massively parallel computing power of modern GPUs to crack password hashes at billions of combinations per second."
    },
    {
      id: 199,
      question: "What are the two essential, mandatory deliverables that must be included in an accredited Penetration Testing Final Report?",
      options: [
        "An Executive Summary (high-level business risk for C-level leadership) and a Technical Remediation Report (detailed proof-of-concept steps, CVSS ratings, and developer fix guidance)",
        "A list of employee salaries and marketing brochures",
        "A receipt for hardware purchases and software licenses",
        "A copy of the operating system source code"
      ],
      answer: 0,
      explanation: "A professional report provides an Executive Summary explaining business impact in non-technical terms, accompanied by a Detailed Technical Report with reproducible POCs and remediation guidance."
    },
    {
      id: 200,
      question: "Following the completion of an authorized penetration test, what is the tester's final ethical and contractual obligation during the Post-Engagement phase?",
      options: [
        "Thoroughly clean up and remove all deployed test accounts, web shells, and artifacts, followed by a formal re-test to verify remediation",
        "Publish the customer's passwords on social media",
        "Leave backdoors open for future tests",
        "Format the customer's production database"
      ],
      answer: 0,
      explanation: "Testers must sanitize the environment, remove all testing artifacts and temporary credentials, and perform a re-test after patches are deployed to confirm vulnerabilities are resolved."
    }
  ]
};

