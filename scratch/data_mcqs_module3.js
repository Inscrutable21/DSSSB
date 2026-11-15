// Module 3: Spreads 11 to 15 (MCQs Q101 to Q150 & Spreads Data)
module.exports = {
  mcqs: [
    // Spread 11: Digital Signatures & Non-Repudiation (Q101–Q110)
    {
      id: 101,
      question: "What core security services are simultaneously established by an Asymmetric Digital Signature?",
      options: [
        "Confidentiality, Traffic Padding, and Speed",
        "Signer Authentication, Data Integrity, and Non-Repudiation",
        "Network Routing and Bandwidth Allocation",
        "Automatic Password Recovery"
      ],
      answer: 1,
      explanation: "A digital signature guarantees who created the message (Authentication), proves the content has not changed (Integrity), and legally prevents the signer from denying it (Non-repudiation)."
    },
    {
      id: 102,
      question: "In a standard Digital Signature scheme, what cryptographic key is used by the SENDER to create the signature?",
      options: [
        "The sender's Private Key",
        "The sender's Public Key",
        "The recipient's Public Key",
        "A shared symmetric secret key"
      ],
      answer: 0,
      explanation: "The sender hashes the document into a digest and encrypts the digest using their own PRIVATE KEY. Because only the sender possesses this private key, only the sender could have signed it."
    },
    {
      id: 103,
      question: "In a Digital Signature scheme, what key is used by the RECIPIENT to verify the validity of the signature?",
      options: [
        "The sender's Public Key",
        "The sender's Private Key",
        "The recipient's Private Key",
        "The Root CA's private key"
      ],
      answer: 0,
      explanation: "Anyone in the world can verify the signature by decrypting it with the sender's PUBLIC KEY and verifying that the resulting digest matches their independently calculated document hash."
    },
    {
      id: 104,
      question: "Why can symmetric Message Authentication Codes (like HMAC) NOT provide legal Non-Repudiation?",
      options: [
        "Because symmetric keys are shared equally between sender and recipient, meaning the recipient could have generated the MAC tag themselves",
        "Because HMAC tags are too short",
        "Because HMAC requires internet access to verify",
        "Because symmetric ciphers are illegal for contracts"
      ],
      answer: 0,
      explanation: "Because both parties hold the exact same secret key in symmetric systems, an arbitrator cannot prove whether Alice sent the message or Bob fabricated it himself."
    },
    {
      id: 105,
      question: "In modern RSA digital signatures, why is RSA-PSS (Probabilistic Signature Scheme / PKCS#1 v2.1) preferred over legacy PKCS#1 v1.5?",
      options: [
        "RSA-PSS incorporates random salts into the signing process, providing provable cryptographic security reductions",
        "RSA-PSS eliminates the need for prime numbers",
        "RSA-PSS is a symmetric cipher",
        "RSA-PSS keys never expire"
      ],
      answer: 0,
      explanation: "RSA-PSS adds randomized salt before hashing, eliminating mathematical structure in the signature and providing provable security against chosen-message forgery attacks."
    },
    {
      id: 106,
      question: "What government cryptographic standard, defined in FIPS 186 by NIST, introduced the standalone Digital Signature Algorithm based on discrete logarithms in modular sub-groups?",
      options: ["DSA (Digital Signature Algorithm)", "DES", "AES", "MD5"],
      answer: 0,
      explanation: "NIST standardized DSA in FIPS 186 in 1991. It provides digital signatures exclusively (cannot be used for encryption), based on the discrete logarithm problem."
    },
    {
      id: 107,
      question: "What digital signature algorithm adapts DSA to elliptic curves, providing high-speed signatures with drastically shorter key lengths?",
      options: ["ECDSA (Elliptic Curve Digital Signature Algorithm)", "RC4", "3DES", "Blowfish"],
      answer: 0,
      explanation: "ECDSA combines the efficiency of elliptic curves with digital signatures. A 256-bit ECDSA key offers equivalent security strength to a 3072-bit legacy RSA key."
    },
    {
      id: 108,
      question: "Why must digital signatures be calculated over the cryptographic HASH of a document rather than encrypting the entire raw document?",
      options: [
        "Asymmetric operations on large files are computationally expensive, and asymmetric algorithms can only encrypt blocks smaller than the modulus n",
        "Because hashing makes the document unreadable",
        "Because private keys can only sign 8 bytes at a time",
        "Because raw documents contain viruses"
      ],
      answer: 0,
      explanation: "Asymmetric math is slow. Hashing compresses arbitrary-length files into a fixed 256-bit digest, which is fast to sign and fits neatly into the asymmetric algorithm's block size."
    },
    {
      id: 109,
      question: "What modern signature algorithm over Curve25519 (EdDSA) is designed to operate in strict constant time, completely preventing side-channel cache-timing attacks?",
      options: ["Ed25519", "RSA-512", "DES-Sign", "MD5-MAC"],
      answer: 0,
      explanation: "Ed25519 (RFC 8032) delivers blindingly fast signature generation and verification while avoiding secret-dependent memory lookups and conditional branches, eliminating timing leaks."
    },
    {
      id: 110,
      question: "Under Section 3 and Section 2(1)(p) of India's Information Technology (IT) Act 2000, how is a legal 'Digital Signature' formally authenticated?",
      options: [
        "By using an asymmetric crypto-system and a hash function that envelops the electronic record",
        "By typing one's name in cursive font at the bottom of an email",
        "By scanning a handwritten paper signature into a JPEG file",
        "By entering a phone number in an online form"
      ],
      answer: 0,
      explanation: "The IT Act 2000 legally defines digital signatures as authentication of electronic records using an asymmetric cryptosystem and hash function, ensuring integrity and identity verification."
    },

    // Spread 12: Digital Certificates, CAs & PKI (Q111–Q120)
    {
      id: 111,
      question: "What is the primary role of a Public Key Digital Certificate in internet communications?",
      options: [
        "To cryptographically bind an entity's identity (domain name or person) to their verified public key, digitally signed by a trusted Certifying Authority",
        "To encrypt hard drive sectors on local computers",
        "To generate passwords for Wi-Fi routers",
        "To act as a license for web design software"
      ],
      answer: 0,
      explanation: "A digital certificate acts as an electronic passport: it proves that a given public key legitimately belongs to the specific domain or organization named in the certificate."
    },
    {
      id: 112,
      question: "What international standard (formulated by the ITU-T and IETF) defines the universal format, fields, and encoding for public-key digital certificates?",
      options: ["ITU-T X.509 Standard (RFC 5280)", "ISO 27001", "IEEE 802.11", "RFC 1918"],
      answer: 0,
      explanation: "The X.509 v3 standard defines the universal schema for certificates used in TLS/HTTPS, S/MIME secure email, IPsec, and code signing."
    },
    {
      id: 113,
      question: "Which of the following is NOT a mandatory standard field found within an ITU-T X.509 v3 digital certificate?",
      options: [
        "The Subject's Private Decryption Key",
        "Serial Number",
        "Issuer (Certifying Authority name)",
        "Validity Period (Not Before / Not After)"
      ],
      answer: 0,
      explanation: "Private keys are NEVER included in a digital certificate. Certificates contain only the Subject's PUBLIC key, identity metadata, and the CA's digital signature."
    },
    {
      id: 114,
      question: "What critical extension in X.509 v3 certificates allows a single certificate to secure multiple distinct domain names and subdomains (e.g. example.com, api.example.com)?",
      options: [
        "Subject Alternative Name (SAN) Extension",
        "Basic Constraints Extension",
        "Key Usage Extension",
        "Extended Key Usage (EKU)"
      ],
      answer: 0,
      explanation: "The SAN extension (RFC 5280) replaces legacy Common Name (CN) matching, allowing multiple Fully Qualified Domain Names (FQDNs) and IP addresses to share one certificate."
    },
    {
      id: 115,
      question: "In Public Key Infrastructure (PKI), what is a 'Chain of Trust' (Certificate Hierarchy)?",
      options: [
        "A hierarchical sequence of certificates from the end-entity certificate through intermediate CAs to a pre-installed, trusted Root CA",
        "A chain of symmetric passwords",
        "A series of firewall rules connecting servers",
        "A blockchain of Bitcoin transactions"
      ],
      answer: 0,
      explanation: "Trust chains allow a browser to verify an end-entity certificate signed by an Intermediate CA whose own certificate is signed by a trusted Root CA stored in the operating system's trust store."
    },
    {
      id: 116,
      question: "What is a 'Certificate Revocation List' (CRL) in PKI management?",
      options: [
        "A periodically published, digitally signed file listing the serial numbers of revoked digital certificates that should no longer be trusted",
        "A list of blocked IP addresses",
        "A directory of expired credit cards",
        "A registry of compromised router MAC addresses"
      ],
      answer: 0,
      explanation: "A CRL is published periodically by a CA. When a private key is leaked or an employee leaves, the certificate serial number is posted on the CRL to alert clients."
    },
    {
      id: 117,
      question: "What lightweight protocol (RFC 6960) allows web browsers to check the revocation status of a specific digital certificate in real time without downloading huge CRL files?",
      options: ["OCSP (Online Certificate Status Protocol)", "DNSSEC", "SNMP", "NTP"],
      answer: 0,
      explanation: "OCSP allows a client to query the CA directly: 'Is certificate #12345 revoked?'. The CA immediately responds with 'good', 'revoked', or 'unknown'."
    },
    {
      id: 118,
      question: "What performance and privacy optimization allows a web server to periodically query the CA and attach the cached, CA-signed OCSP response directly to the TLS handshake?",
      options: ["OCSP Stapling (TLS Certificate Status Request)", "DNS Zone Transfer", "HTTP Strict Transport Security", "Certificate Pinning"],
      answer: 0,
      explanation: "OCSP Stapling eliminates the browser connection to the CA, preventing performance bottlenecks and preventing the CA from monitoring what websites users visit."
    },
    {
      id: 119,
      question: "What security transparency framework (RFC 6962) requires all commercial CAs to log newly issued SSL/TLS certificates into public, append-only, cryptographic audit logs?",
      options: ["Certificate Transparency (CT)", "DNSSEC", "Domain Name System", "WHOIS"],
      answer: 0,
      explanation: "Certificate Transparency requires all issued certificates to be appended to publicly verifiable Merkle tree logs, allowing domain owners to detect unauthorized or rogue certificates."
    },
    {
      id: 120,
      question: "What DNS Resource Record allows domain owners to explicitly declare which specific Certificate Authorities (CAs) are permitted to issue certificates for their domain?",
      options: ["CAA (Certification Authority Authorization) Record", "MX Record", "CNAME Record", "PTR Record"],
      answer: 0,
      explanation: "A DNS CAA record (e.g. example.com. CAA 0 issue 'letsencrypt.org') instructs CAs to verify permission before issuing a certificate, stopping unauthorized issuance."
    },

    // Spread 13: Steganalysis and its Challenges (Q121–Q130)
    {
      id: 121,
      question: "What is the formal definition and primary objective of 'Steganalysis' in cyber forensics?",
      options: [
        "The forensic science of discovering, detecting, extracting, or destroying concealed data hidden inside carrier files without knowing the stego-key",
        "The process of cracking Wi-Fi passwords",
        "The analysis of network latency",
        "The reverse engineering of hardware chips"
      ],
      answer: 0,
      explanation: "Steganalysis is the counter-discipline to steganography: analyzing suspect multimedia files or network streams to determine if hidden communication is taking place."
    },
    {
      id: 122,
      question: "In steganalysis, what is the distinction between 'Targeted Steganalysis' and 'Blind (Universal) Steganalysis'?",
      options: [
        "Targeted steganalysis exploits known mathematical quirks of a specific embedding tool (e.g. LSB in BMP); Blind steganalysis uses generalized statistical anomaly detection across unknown algorithms",
        "Targeted steganalysis is legal; Blind steganalysis is illegal",
        "Targeted steganalysis is used for text; Blind steganalysis is used for audio",
        "Targeted steganalysis requires supercomputers; Blind steganalysis runs on mobile phones"
      ],
      answer: 0,
      explanation: "Targeted attacks look for the specific fingerprint of a known tool (e.g. Jsteg). Blind/universal attacks evaluate general image features and train machine-learning classifiers to spot anomalies."
    },
    {
      id: 123,
      question: "What visual steganalysis technique inspects individual bit planes of an image to spot unnatural structural patterns or uniform white noise in the least significant bit plane?",
      options: ["Bit-Plane Slicing (Bit-Plane Analysis)", "Color Inversion", "Histogram Equalization", "Contrast Stretching"],
      answer: 0,
      explanation: "Bit-plane slicing isolates the 0th bit of every pixel. In a clean image, the LSB plane looks like random organic noise. When structured data is embedded sequentially, visible outlines appear."
    },
    {
      id: 124,
      question: "What statistical steganalysis attack, pioneered by Westfeld and Pfitzmann, analyzes Pairs of Values (PoVs, e.g. 2k and 2k+1) in pixel histograms to detect LSB replacement?",
      options: ["The Chi-Square (Chi-Square) Attack", "The Birthday Attack", "The Meet-in-the-Middle Attack", "The Dictionary Attack"],
      answer: 0,
      explanation: "Under sequential LSB replacement, adjacent color values (like 12 and 13) exchange frequencies and tend to equalize. A Chi-Square statistical test detects this unnatural balance."
    },
    {
      id: 125,
      question: "What advanced spatial domain steganalysis technique evaluates sample pairs of adjacent pixels to estimate the exact hidden message length with high mathematical precision?",
      options: ["Sample Pair Analysis (SPA)", "Fourier Transform", "Parity Bit Check", "Huffman Decoding"],
      answer: 0,
      explanation: "Sample Pair Analysis (SPA) analyzes finite state transitions among pixel pairs, measuring how LSB embedding perturbs spatial correlation to calculate embedded payload length."
    },
    {
      id: 126,
      question: "Which of the following is a renowned open-source forensic tool used by investigators to analyze image bit-planes and automatically extract LSB payloads from PNG and BMP files?",
      options: ["Stegsolve / zsteg", "Nmap", "Wireshark", "Metasploit"],
      answer: 0,
      explanation: "Stegsolve (Java GUI) and zsteg (Ruby CLI) are standard forensic utilities for viewing bit-planes, checking color palettes, and extracting hidden LSB payloads from lossless images."
    },
    {
      id: 127,
      question: "Why does recompressing an image into lossy JPEG format (or an audio file into lossy MP3) pose a massive challenge to steganographic data recovery?",
      options: [
        "Lossy compression algorithms mathematically discard subtle high-frequency spatial details (including modified LSBs), corrupting or destroying the embedded payload",
        "Lossy compression encrypts the files with AES",
        "Lossy compression changes the file extension to .exe",
        "Lossy compression deletes the original author metadata"
      ],
      answer: 0,
      explanation: "Lossy compression quantizes frequency coefficients, wiping out subtle bit-level modifications made in the spatial domain and corrupting the concealed message."
    },
    {
      id: 128,
      question: "Why does pre-encrypting a secret payload before steganographic embedding create an immense hurdle for statistical steganalysis tools?",
      options: [
        "Cryptographically secure encryption produces high-entropy pseudo-random ciphertext that statistically resembles natural camera sensor noise",
        "Encrypted files cannot be saved as images",
        "Encryption increases image file size by 500%",
        "Encryption forces the image to turn black"
      ],
      answer: 0,
      explanation: "Encrypted data has maximum entropy (flat byte distributions). When embedded, it blends perfectly into the natural thermal and optical noise of the digital camera sensor."
    },
    {
      id: 129,
      question: "In real-world enterprise digital forensics, what is the greatest practical operational obstacle when screening millions of files for steganography?",
      options: [
        "Extremely high False-Positive rates caused by natural image sensor variations and benign graphic filters",
        "Steganography software is illegal to download",
        "Hard drives cannot store steganographic images",
        "Antivirus software blocks all image files"
      ],
      answer: 0,
      explanation: "Automated steganalysis algorithms frequently flag complex textures, high-ISO camera photos, or stylized graphic filters as hidden payloads, creating overwhelming false alarms."
    },
    {
      id: 130,
      question: "What defensive technique, known as 'Destructive Steganalysis' (or Active Warden sanitization), neutralizes potential covert communications without attempting extraction?",
      options: [
        "Re-compressing, adding mild gaussian noise, or resizing all inbound/outbound multimedia files to scramble any fragile embedded bits",
        "Deleting all image files across the entire corporate network",
        "Formatting all hard drives daily",
        "Blocking all internet traffic"
      ],
      answer: 0,
      explanation: "An Active Warden sanitizes media in transit: by re-compressing JPEGs or applying minor filtering, fragile steganographic payloads are destroyed while preserving innocent visual quality."
    },

    // Spread 14: VAPT Fundamentals & Vulnerability vs Weakness (Q131–Q140)
    {
      id: 131,
      question: "What is the primary operational distinction between a Vulnerability Assessment (VA) and a Penetration Test (PT)?",
      options: [
        "A Vulnerability Assessment identifies and catalogs known flaws across assets WITHOUT exploiting them; a Penetration Test actively exploits flaws to prove real business impact",
        "A Vulnerability Assessment is illegal; a Penetration Test is authorized",
        "A Vulnerability Assessment tests hardware; a Penetration Test tests humans",
        "A Vulnerability Assessment takes 5 years; a Penetration Test takes 1 hour"
      ],
      answer: 0,
      explanation: "VA provides wide breadth, scanning IP ranges to list missing patches without exploiting them. PT provides depth, simulating an attacker by exploiting vulnerabilities to compromise systems."
    },
    {
      id: 132,
      question: "What penetration testing engagement model provides the security tester with ZERO prior knowledge of internal networks, architecture, or credentials?",
      options: ["Black Box Testing (Zero-Knowledge Testing)", "White Box Testing", "Grey Box Testing", "Crystal Box Testing"],
      answer: 0,
      explanation: "In Black Box testing, the tester simulates an external unauthenticated attacker, discovering everything from scratch through public reconnaissance."
    },
    {
      id: 133,
      question: "What penetration testing engagement model provides the security tester with COMPLETE access to source code, architecture documentation, network diagrams, and administrative credentials?",
      options: ["White Box Testing (Full-Knowledge Testing)", "Black Box Testing", "Blind Testing", "Double-Blind Testing"],
      answer: 0,
      explanation: "White Box testing simulates an insider threat, malicious developer, or advanced adversary with internal access, enabling comprehensive code review and architecture auditing."
    },
    {
      id: 134,
      question: "Under global cybersecurity standards maintained by MITRE, what is the exact difference between a 'Weakness' (CWE) and a 'Vulnerability' (CVE)?",
      options: [
        "A Weakness (CWE) is a conceptual flaw type or design bug in software; a Vulnerability (CVE) is a specific, instantiated occurrence of a flaw in a concrete software product that enables exploit",
        "A Weakness is in hardware; a Vulnerability is in software",
        "A Weakness is public; a Vulnerability is secret",
        "CWE is for Windows; CVE is for Linux"
      ],
      answer: 0,
      explanation: "CWE defines flaw types (e.g., CWE-89 is SQL Injection). CVE catalogs a specific real-world instance in a product (e.g., CVE-2021-44228 in Log4j)."
    },
    {
      id: 135,
      question: "In vulnerability management terminology, what is an 'Exploit'?",
      options: [
        "A piece of software, script, or sequence of commands that takes advantage of a vulnerability to cause unintended behavior or unauthorized access",
        "The price of a software license",
        "A backup file stored in the cloud",
        "A firewall configuration rule"
      ],
      answer: 0,
      explanation: "An exploit is the weaponized payload or technique that turns a theoretical vulnerability into actual compromise (e.g. executing arbitrary code or elevating privileges)."
    },
    {
      id: 136,
      question: "In cybersecurity terminology, what is a 'Security Exposure'?",
      options: [
        "A system configuration issue or mistake that exposes an organization to increased attack risk (e.g. default passwords, open administrative ports, unencrypted protocols)",
        "A physical breach of a server room door",
        "A stolen laptop reported to police",
        "A marketing press release"
      ],
      answer: 0,
      explanation: "An exposure is not necessarily a software code bug, but an operational configuration weakness (like leaving Telnet open or default passwords intact) that enables compromise."
    },
    {
      id: 137,
      question: "In information security risk management, what is the fundamental mathematical relationship connecting Risk, Threat, Vulnerability, and Impact?",
      options: [
        "Risk = Threat x Vulnerability x Impact (or Likelihood x Impact)",
        "Risk = Threat + Vulnerability - Impact",
        "Risk = Vulnerability / Threat",
        "Risk = Threat + Impact"
      ],
      answer: 0,
      explanation: "Risk is the product of Threat (adversary capability), Vulnerability (flaw), and Impact (damage). If Vulnerability is eliminated (patched), Risk drops to zero."
    },
    {
      id: 138,
      question: "What critical legal document, signed before any penetration test commences, specifies target IP ranges, prohibited techniques, allowed testing windows, and emergency escalation contacts?",
      options: [
        "Rules of Engagement (ROE) / Scope Document",
        "Non-Disclosure Agreement only",
        "Software End User License Agreement (EULA)",
        "Hardware Warranty Certificate"
      ],
      answer: 0,
      explanation: "The Rules of Engagement (ROE) establishes the legal boundaries and scope of the test, protecting testers from criminal prosecution and ensuring client production systems are not damaged."
    },
    {
      id: 139,
      question: "What is 'Attack Surface Reduction' (ASR) in defensive system hardening?",
      options: [
        "Disabling unnecessary network services, closing unused ports, uninstalling redundant software, and enforcing strict firewall rules to minimize potential entry points",
        "Buying larger monitor screens",
        "Increasing the number of admin accounts",
        "Disabling system antivirus"
      ],
      answer: 0,
      explanation: "Attack Surface Reduction shrinks the total number of vulnerable points an attacker could probe by removing unneeded services, closing idle ports, and restricting interfaces."
    },
    {
      id: 140,
      question: "In vulnerability management, what is the difference between a False Positive and a False Negative?",
      options: [
        "A False Positive incorrectly flags a vulnerability where none exists; a False Negative fails to detect a real vulnerability that actually exists",
        "A False Positive is a virus; a False Negative is a firewall",
        "A False Positive is an external scan; a False Negative is an internal scan",
        "There is no difference"
      ],
      answer: 0,
      explanation: "False Positives waste remediation time by sounding false alarms. False Negatives are far more dangerous, leaving real vulnerabilities undetected and exposed to attackers."
    },

    // Spread 15: Types of Vulnerabilities: Software & Memory Flaws (Q141–Q150)
    {
      id: 141,
      question: "What broad category of software vulnerabilities occurs when an application accepts input from external sources without sufficient validation, filtering, or encoding?",
      options: [
        "Input Validation Vulnerabilities",
        "Hardware Power Glitches",
        "Cable Sniffing Vulnerabilities",
        "Cooling System Failures"
      ],
      answer: 0,
      explanation: "Input validation flaws represent the root cause of the most pervasive cyber attacks (including SQL Injection, Cross-Site Scripting, and Command Injection)."
    },
    {
      id: 142,
      question: "What vulnerability (CWE-89) occurs when untrusted user input is directly concatenated into a database query string, allowing attackers to manipulate query logic?",
      options: ["SQL Injection (SQLi)", "Cross-Site Scripting", "Buffer Overflow", "Clickjacking"],
      answer: 0,
      explanation: "SQL Injection occurs when user input is treated as SQL code by the database parser, allowing attackers to bypass authentication (' OR '1'='1) or dump tables."
    },
    {
      id: 143,
      question: "What is the primary, industry-standard architectural defense against SQL Injection vulnerabilities?",
      options: [
        "Parameterized Queries (Prepared Statements) with bind variables",
        "Installing larger database hard drives",
        "Using MD5 hashing on table names",
        "Hiding database error messages only"
      ],
      answer: 0,
      explanation: "Prepared Statements separate SQL query structure from user data. The database treats input purely as literal parameter values, making SQL command execution impossible."
    },
    {
      id: 144,
      question: "What vulnerability (CWE-79) occurs when a web application includes unsanitized user-supplied data in a web page sent to other users, allowing malicious scripts to execute in their browsers?",
      options: ["Cross-Site Scripting (XSS)", "SQL Injection", "Buffer Overflow", "Server-Side Request Forgery"],
      answer: 0,
      explanation: "Cross-Site Scripting (XSS) allows attackers to inject malicious client-side JavaScript that executes in the context of the victim's session, stealing session cookies and tokens."
    },
    {
      id: 145,
      question: "What type of Cross-Site Scripting (XSS) occurs when malicious JavaScript is permanently saved into a backend database (e.g. comment forum, user profile) and delivered to all visitors?",
      options: ["Stored (Persistent) XSS", "Reflected (Non-Persistent) XSS", "DOM-based XSS", "Self-XSS"],
      answer: 0,
      explanation: "Stored XSS is the most dangerous form: the payload is saved permanently on the server and executed automatically whenever any user views the affected page."
    },
    {
      id: 146,
      question: "What vulnerability (CWE-78) occurs when an application executes arbitrary operating system commands by concatenating user input directly into system shell calls (e.g. system(), exec())?",
      options: ["OS Command Injection", "Cross-Site Request Forgery", "Directory Traversal", "Clickjacking"],
      answer: 0,
      explanation: "OS Command Injection allows an attacker to append shell metacharacters (e.g., ; ls -la or | whoami) to execute unauthorized operating system commands on the host server."
    },
    {
      id: 147,
      question: "What vulnerability (CWE-22) allows an attacker to access arbitrary files on the server file system outside the intended web root directory by supplying dot-dot-slash (../) sequences?",
      options: ["Path Traversal (Directory Traversal)", "SQL Injection", "Buffer Overflow", "Cross-Site Scripting"],
      answer: 0,
      explanation: "Path Traversal uses ../ sequences (e.g. ../../../etc/passwd) to break out of the document root and view sensitive operating system files."
    },
    {
      id: 148,
      question: "What memory corruption vulnerability (CWE-120) occurs when an application writes more data to a memory buffer than it was allocated to hold, overflowing into adjacent memory?",
      options: ["Buffer Overflow", "SQL Injection", "Cross-Site Scripting", "Broken Object Level Authorization"],
      answer: 0,
      explanation: "A Buffer Overflow writes past the buffer boundary. In C/C++ applications lacking boundary checks, an attacker can overwrite the saved function return address to hijack control flow."
    },
    {
      id: 149,
      question: "What compiler and operating system security mitigation places a random, unpredictable integer value on the stack frame immediately before the return address to detect buffer overflows?",
      options: ["Stack Canary (Stack Cookie)", "ASLR", "DEP", "WORM"],
      answer: 0,
      explanation: "Stack Canaries are placed before the return address. Before a function returns, the canary is checked; if it was overwritten by an overflow, the program terminates immediately."
    },
    {
      id: 150,
      question: "What operating system security feature randomizes the base virtual memory addresses of the stack, heap, and loaded libraries on every program execution to prevent predictable exploits?",
      options: [
        "Address Space Layout Randomization (ASLR)",
        "Data Execution Prevention (DEP)",
        "Stack Canaries",
        "Control Flow Guard"
      ],
      answer: 0,
      explanation: "ASLR randomizes memory positions on every boot/execution, making it impossible for an attacker to reliably jump to hardcoded memory addresses."
    }
  ]
};

