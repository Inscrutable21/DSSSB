// Module 1: Spreads 1 to 5 (MCQs Q1 to Q50 & Spreads Data)
module.exports = {
  mcqs: [
    // Spread 1: CIA Triad & Core InfoSec Principles (Q1–Q10)
    {
      id: 1,
      question: "What fundamental security property guarantees that sensitive information is accessible strictly to authorized entities and protected from unauthorized disclosure?",
      options: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
      answer: 0,
      explanation: "Confidentiality ensures that information is not made available or disclosed to unauthorized individuals, entities, or processes (achieved via encryption and access controls)."
    },
    {
      id: 2,
      question: "What security property guarantees that data has not been altered, modified, tampered with, or fabricated during transit or storage?",
      options: ["Confidentiality", "Integrity", "Availability", "Authorization"],
      answer: 1,
      explanation: "Integrity ensures the accuracy, completeness, and unaltered state of data from creation to transmission and storage (enforced via cryptographic hashes and digital signatures)."
    },
    {
      id: 3,
      question: "What security property guarantees that authorized users have timely and reliable access to information assets, systems, and networks upon request?",
      options: ["Non-repudiation", "Confidentiality", "Availability", "Authentication"],
      answer: 2,
      explanation: "Availability ensures that computing systems, network infrastructure, and data remain operable and reachable when needed by authorized users (enforced via redundancy and DDoS defenses)."
    },
    {
      id: 4,
      question: "In security control categorization, an IPS (Intrusion Prevention System) or a firewall is classified as what type of control?",
      options: ["Preventive Control", "Detective Control", "Corrective Control", "Compensating Control"],
      answer: 0,
      explanation: "Preventive controls (firewalls, encryption, IPS, biometric doors) actively stop security incidents before they occur."
    },
    {
      id: 5,
      question: "What security architectural principle advocates implementing multiple concentric layers of overlapping defensive controls rather than relying on a single perimeter wall?",
      options: ["Security through Obscurity", "Defense-in-Depth (Layered Security)", "Single Point of Failure", "Separation of Privilege"],
      answer: 1,
      explanation: "Defense-in-Depth ensures that if one defensive layer is breached (e.g., perimeter firewall), subsequent layers (host IDS, endpoint protection, database encryption) prevent compromise."
    },
    {
      id: 6,
      question: "What foundational cryptographic tenet (Auguste Kerckhoffs, 1883) mandates that a cryptographic system must remain secure even if everything about the design and algorithm is public knowledge?",
      options: ["Shannon's Law of Entropy", "Kerckhoffs's Principle", "Diffie-Hellman Theorem", "The Vernam Principle"],
      answer: 1,
      explanation: "Kerckhoffs's Principle states that a cryptosystem must be secure even if the enemy knows the entire system, provided only the secret key is kept confidential."
    },
    {
      id: 7,
      question: "In information security risk management, how are Threat, Vulnerability, and Risk mathematically related?",
      options: [
        "Risk = Threat + Vulnerability + Asset Value",
        "Risk = Threat x Vulnerability x Impact (or Likelihood x Impact)",
        "Risk = Threat / Vulnerability",
        "Risk = Vulnerability - Threat"
      ],
      answer: 1,
      explanation: "Risk is the product of Threat (adversary capability), Vulnerability (flaw/weakness), and Impact (consequence of compromise). If Vulnerability is zero, Risk is zero."
    },
    {
      id: 8,
      question: "What security principle dictates that user accounts and applications should only be granted the absolute minimum privileges necessary to perform their legitimate job functions?",
      options: ["Principle of Open Design", "Principle of Least Privilege (PoLP)", "Principle of Economy of Mechanism", "Fail-Safe Defaults"],
      answer: 1,
      explanation: "The Principle of Least Privilege limits access rights for users, programs, and processes to only the bare minimum permissions required for authorized work, limiting exploit blast radius."
    },
    {
      id: 9,
      question: "What security operational control requires that critical high-impact tasks (e.g. transferring $10M or launching missiles) require two or more authorized individuals to complete?",
      options: ["Single Sign-On (SSO)", "Separation of Duties (Dual Control / Two-Man Rule)", "Job Rotation", "Mandatory Vacations"],
      answer: 1,
      explanation: "Separation of Duties and Dual Control divide critical transactions among multiple personnel so no single individual can unilaterally execute fraudulent or destructive actions."
    },
    {
      id: 10,
      question: "What social engineering attack vector uses deceptive emails, spoofed sender domains, and urgent pretexts to manipulate employees into revealing credentials or transferring funds?",
      options: ["Phishing", "Port Scanning", "Buffer Overflow", "SQL Injection"],
      answer: 0,
      explanation: "Phishing is a social engineering attack where malicious actors impersonate legitimate institutions via email to trick victims into providing sensitive credentials or installing malware."
    },

    // Spread 2: Authentication, Authorization & Non-Repudiation (Q11–Q20)
    {
      id: 11,
      question: "In the AAA security architecture framework, what do the three 'A' initials represent?",
      options: [
        "Access, Assessment, Auditing",
        "Authentication, Authorization, Accounting (or Auditing)",
        "Algorithm, Architecture, Application",
        "Availability, Accuracy, Authenticity"
      ],
      answer: 1,
      explanation: "AAA stands for Authentication (verifying identity), Authorization (determining permissions), and Accounting/Auditing (logging user activity)."
    },
    {
      id: 12,
      question: "What authentication factor category does a fingerprint scan, facial recognition, or retina pattern fall under?",
      options: ["Something you know (Knowledge)", "Something you have (Possession)", "Something you are (Inherence)", "Somewhere you are (Location)"],
      answer: 2,
      explanation: "Biometric traits (fingerprint, iris, retina, face, voice) represent the 'Something you are' (Inherence) authentication factor."
    },
    {
      id: 13,
      question: "To qualify as true Multi-Factor Authentication (MFA), an authentication mechanism must require:",
      options: [
        "Two different passwords created on different dates",
        "Two or more independent authentication factors from DIFFERENT categories (e.g. password + hardware token)",
        "A password and a security question (e.g. mother's maiden name)",
        "A PIN entered twice from two separate browsers"
      ],
      answer: 1,
      explanation: "True MFA mandates using at least two different factor categories (e.g. Something you know + Something you have). A password and a PIN are both 'something you know' and do NOT qualify as MFA."
    },
    {
      id: 14,
      question: "What access control model assigns permissions to specific job titles or organizational functions rather than directly to individual user accounts?",
      options: ["Discretionary Access Control (DAC)", "Role-Based Access Control (RBAC)", "Mandatory Access Control (MAC)", "Rule-Based Access Control"],
      answer: 1,
      explanation: "RBAC (Role-Based Access Control) assigns permissions to organizational roles (e.g., 'Auditor', 'Doctor'), and users are assigned to roles, dramatically simplifying enterprise administration."
    },
    {
      id: 15,
      question: "What strict access control model (used in military and government intelligence) enforces security labels (e.g., Top Secret, Secret) and prevents resource owners from granting permissions?",
      options: ["Mandatory Access Control (MAC)", "Discretionary Access Control (DAC)", "Role-Based Access Control (RBAC)", "Open Access Control"],
      answer: 0,
      explanation: "In Mandatory Access Control (MAC), the central operating system policy strictly enforces access based on security clearances and classification labels (e.g., Bell-LaPadula model); data owners cannot override it."
    },
    {
      id: 16,
      question: "What advanced access control model evaluates dynamic runtime context—such as user department, device health, time of day, and geolocation—using policies defined in XACML?",
      options: ["Discretionary Access Control (DAC)", "Attribute-Based Access Control (ABAC)", "Identity-Based Access Control", "Static File Permissions"],
      answer: 1,
      explanation: "Attribute-Based Access Control (ABAC) uses fine-grained boolean policies evaluating subject, resource, action, and environmental context attributes (e.g., allow if time is 9am-5pm and location is office)."
    },
    {
      id: 17,
      question: "What security service ensures that a party to a transaction or digital communication cannot falsely deny having sent the message or initiated the action?",
      options: ["Non-repudiation", "Confidentiality", "Availability", "Authentication"],
      answer: 0,
      explanation: "Non-repudiation provides indisputable cryptographic proof of the origin and integrity of a transaction, preventing a sender from claiming they did not transmit it."
    },
    {
      id: 18,
      question: "Why can symmetric encryption algorithms (like AES or DES) NOT provide non-repudiation on their own?",
      options: [
        "Because symmetric keys are too short to resist quantum attacks",
        "Because both the sender and receiver share the exact same secret key, so either party could have created the message",
        "Because symmetric ciphers do not support block chaining",
        "Because symmetric encryption cannot process binary data"
      ],
      answer: 1,
      explanation: "In symmetric cryptography, both sender and receiver possess identical copies of the secret key. Therefore, either party could have generated the ciphertext, making non-repudiation impossible."
    },
    {
      id: 19,
      question: "What cryptographic mechanism provides legally enforceable non-repudiation in modern digital forensics and e-commerce?",
      options: ["Symmetric AES-GCM tags", "Asymmetric Digital Signatures (signed with sender's private key)", "CRC32 Checksums", "Base64 Obfuscation"],
      answer: 1,
      explanation: "Digital signatures provide non-repudiation because only the sender holds the unique private key used to sign the message digest, and anyone can verify it with their public key."
    },
    {
      id: 20,
      question: "In digital forensic investigations, why must enterprise security audit logs be transmitted to an immutable centralized SIEM with NTP synchronization?",
      options: [
        "To ensure timestamps across all servers correlate accurately and logs cannot be deleted or altered by local root attackers",
        "To compress log files to save hard drive space",
        "To eliminate the need for firewalls",
        "To allow users to modify their past authentication attempts"
      ],
      answer: 0,
      explanation: "Centralized logging with Network Time Protocol (NTP) synchronization guarantees that forensic timelines are chronologically accurate and prevents adversaries from wiping local logs to hide their tracks."
    },

    // Spread 3: Concepts of Cryptography & Steganography (Q21–Q30)
    {
      id: 21,
      question: "What is the fundamental difference between Cryptography and Steganography?",
      options: [
        "Cryptography hides the meaning of a message; Steganography hides the very existence of the communication",
        "Cryptography is used only on mobile phones; Steganography is used only on servers",
        "Cryptography relies on passwords; Steganography uses no mathematical algorithms",
        "Cryptography was invented in 2000; Steganography was invented by Claude Shannon"
      ],
      answer: 0,
      explanation: "Cryptography ('secret writing') scrambles the content into unintelligible ciphertext (the communication is visible, but unreadable). Steganography ('covered writing') conceals the fact that a message exists inside a carrier."
    },
    {
      id: 22,
      question: "How does Digital Watermarking fundamentally differ from Steganography?",
      options: [
        "Watermarking aims to prove copyright/ownership and must be robust against removal, whereas steganography prioritizes covert data exfiltration",
        "Watermarking uses symmetric keys; Steganography uses asymmetric keys",
        "Watermarking is only used on video files; Steganography is only used on text files",
        "Watermarking is an illegal hacking technique"
      ],
      answer: 0,
      explanation: "Digital watermarking embeds an indelible mark to assert intellectual property and verify ownership, requiring extreme robustness against filtering. Steganography prioritizes stealth and capacity."
    },
    {
      id: 23,
      question: "In steganography terminology, the innocent file (image, audio track, video) that carries the concealed payload is known as the:",
      options: ["Cover Object (or Carrier Medium)", "Stego-Key", "Ciphertext", "Initialization Vector"],
      answer: 0,
      explanation: "The original innocent file before data embedding is the 'Cover Object' (carrier); after embedding the hidden payload, it is termed the 'Stego-Object'."
    },
    {
      id: 24,
      question: "What spatial domain steganography technique embeds secret data bits into the least significant bits of uncompressed image pixel color bytes?",
      options: ["Discrete Wavelet Transform (DWT)", "Least Significant Bit (LSB) Insertion", "Discrete Cosine Transform (DCT)", "Huffman Encoding"],
      answer: 1,
      explanation: "LSB (Least Significant Bit) insertion overwrites the lowest-order bit of RGB color bytes (0-255). Changing the last bit alters luminance by only 1/255th, invisible to the human eye."
    },
    {
      id: 25,
      question: "In a standard 24-bit RGB bitmap image (BMP or lossless PNG), how many secret bits can be hidden per pixel using 1-bit LSB substitution across all color channels?",
      options: ["1 bit", "3 bits (1 bit in Red, 1 bit in Green, 1 bit in Blue)", "8 bits", "24 bits"],
      answer: 1,
      explanation: "Each pixel in a 24-bit image has 3 color bytes (Red, Green, Blue). Modifying the 1 least significant bit of each color byte allows embedding exactly 3 secret bits per pixel."
    },
    {
      id: 26,
      question: "In lossy compressed images (such as JPEG), steganographic algorithms (e.g. Jsteg, F5) embed secret payload bits into which mathematical domain?",
      options: ["Raw spatial pixels", "Quantized Discrete Cosine Transform (DCT) coefficients", "File metadata EXIF tags only", "Color palette headers"],
      answer: 1,
      explanation: "JPEG steganography operates in the frequency domain, modifying the quantized Discrete Cosine Transform (DCT) coefficients of 8x8 pixel blocks to survive lossy compression."
    },
    {
      id: 27,
      question: "In Network Steganography, what fields within the TCP/IP protocol stack are frequently manipulated to establish covert channels?",
      options: [
        "TCP Initial Sequence Number (ISN), IP Identification (IP ID), and Urgent Pointer",
        "Ethernet preamble and MAC CRC fields only",
        "DNS port number exclusively",
        "Subnet mask bits"
      ],
      answer: 0,
      explanation: "Adversaries manipulate TCP Initial Sequence Numbers (ISN), IP Identification fields, or TCP Urgent Pointers to transmit secret data without generating abnormal application traffic."
    },
    {
      id: 28,
      question: "In steganography software (e.g. OpenStego, QuickStego), what role does the 'Stego-Key' serve?",
      options: [
        "It acts as a secret password that pseudorandomly determines which specific pixel locations or carrier bytes hold the embedded payload bits",
        "It decompresses the JPEG file into a bitmap",
        "It generates a public X.509 certificate",
        "It sends an alert to the network administrator"
      ],
      answer: 0,
      explanation: "A Stego-Key controls a pseudorandom number generator (PRNG) that scatters payload bits across non-sequential carrier locations, preventing unauthorized parties from extracting the data even if they know the carrier format."
    },
    {
      id: 29,
      question: "What fundamental trilemma dictates the design and trade-offs of all steganographic systems?",
      options: [
        "Payload Capacity, Invisibility (Imperceptibility), and Robustness against distortion/compression",
        "Speed, Cost, and Encryption Key Length",
        "Portability, CPU usage, and Hard drive size",
        "RAM usage, Display resolution, and Bandwidth"
      ],
      answer: 0,
      explanation: "The Steganographic Triangle dictates that increasing payload Capacity degrades Invisibility (making statistical detection easier) or reduces Robustness against image processing."
    },
    {
      id: 30,
      question: "What classic theoretical problem, formulated by Gustavus Simmons in 1983, mathematically models steganographic communication under the surveillance of an active warden?",
      options: ["The Byzantine Generals Problem", "The Prisoners' Problem", "The Dining Philosophers Problem", "The Two Generals Problem"],
      answer: 1,
      explanation: "The Prisoners' Problem models two inmates (Alice and Bob) attempting to hatch an escape plan under the watchful eye of a prison warden (Wendy), requiring their secret messages to appear completely innocent."
    },

    // Spread 4: Symmetric Encryption: Stream vs Block & DES/3DES (Q31–Q40)
    {
      id: 31,
      question: "What fundamental characteristic defines a Symmetric Key Cryptosystem?",
      options: [
        "Two mathematically related keys are used: a public key for encryption and a private key for decryption",
        "A single shared secret key is utilized for both encryption and decryption",
        "No keys are needed; security is based on hash digest length",
        "Encryption is performed with a password, but decryption requires biometric hardware"
      ],
      answer: 1,
      explanation: "Symmetric cryptography (secret-key cryptography) relies on both communicating parties sharing and keeping confidential the exact same secret key."
    },
    {
      id: 32,
      question: "What is the operational definition of a 'Stream Cipher' versus a 'Block Cipher'?",
      options: [
        "Stream ciphers encrypt plaintext bit-by-bit (or byte-by-byte) using a pseudorandom keystream generator; block ciphers encrypt fixed-size chunks of data as discrete units",
        "Stream ciphers are asymmetric; block ciphers are symmetric",
        "Stream ciphers are only used on hard drives; block ciphers are only used in web browsers",
        "Stream ciphers use S-boxes; block ciphers only use XOR operations"
      ],
      answer: 0,
      explanation: "Stream ciphers continuously XOR plaintext bits with a pseudorandom keystream (low latency, zero buffering). Block ciphers process fixed-size chunks (e.g. 64 or 128 bits) through multiple rounds."
    },
    {
      id: 33,
      question: "Which of the following is a modern, high-speed stream cipher standardized in RFC 8439 (used in TLS 1.3 and WireGuard) that uses Add-Rotate-XOR (ARX) operations?",
      options: ["DES", "AES-CBC", "ChaCha20", "RSA-2048"],
      answer: 2,
      explanation: "ChaCha20 is a modern stream cipher using 256-bit keys, a 96-bit nonce, and ARX operations. It is immune to cache-timing attacks, replacing the obsolete and vulnerable RC4 cipher."
    },
    {
      id: 34,
      question: "What block size and effective key length are standardized by the Data Encryption Standard (DES / FIPS PUB 46)?",
      options: [
        "128-bit block size and 128-bit key length",
        "64-bit block size and 56-bit effective key length (with 8 parity check bits discarded)",
        "64-bit block size and 64-bit effective key length",
        "32-bit block size and 56-bit key length"
      ],
      answer: 1,
      explanation: "DES operates on 64-bit blocks. The input key is 64 bits, but bits 8, 16, 24, 32, 40, 48, 56, and 64 are parity bits, leaving strictly 56 effective key bits (2^56 keys)."
    },
    {
      id: 35,
      question: "Claude Shannon established that all secure block ciphers must satisfy two fundamental architectural properties: Confusion and Diffusion. What do these mean?",
      options: [
        "Confusion obscures the relationship between the key and ciphertext (via S-boxes); Diffusion spreads plaintext statistics across many ciphertext bits (Avalanche effect)",
        "Confusion means adding noise; Diffusion means deleting unnecessary bytes",
        "Confusion uses public keys; Diffusion uses private keys",
        "Confusion is stream encryption; Diffusion is block decryption"
      ],
      answer: 0,
      explanation: "Confusion makes the mathematical relationship between key and ciphertext as complex as possible (non-linear S-boxes). Diffusion ensures that changing one bit in plaintext alters roughly 50% of ciphertext bits."
    },
    {
      id: 36,
      question: "How many Feistel rounds are executed within the Data Encryption Standard (DES) algorithm?",
      options: ["10 rounds", "12 rounds", "16 rounds", "20 rounds"],
      answer: 2,
      explanation: "DES executes exactly 16 Feistel rounds. In each round, the 64-bit block is split into two 32-bit halves, swapped, and transformed through the Feistel F-function."
    },
    {
      id: 37,
      question: "What major hardware and software implementation advantage is provided by a Feistel Network architecture?",
      options: [
        "It eliminates the need for secret keys",
        "Encryption and decryption utilize the identical hardware circuit and code, merely applying round subkeys in reverse order",
        "It prevents all brute-force attacks automatically",
        "It converts block ciphers into asymmetric algorithms"
      ],
      answer: 1,
      explanation: "In a Feistel cipher, decryption is mathematically identical to encryption; one simply applies the round keys in reverse order (Key 16 down to Key 1), saving silicon chip area."
    },
    {
      id: 38,
      question: "Why did Double DES (2DES / encrypting twice with two separate 56-bit keys) fail to provide the expected 2^112 security strength?",
      options: [
        "Because of the Meet-in-the-Middle attack, which precomputes forward encryption and backward decryption to crack both keys in only 2^57 operations",
        "Because DES keys cannot be doubled",
        "Because the second key cancels out the first key automatically",
        "Because Feistel ciphers only allow one key"
      ],
      answer: 0,
      explanation: "Diffie and Hellman proved Double DES vulnerable to the Meet-in-the-Middle attack: forward encryption from plaintext meets backward decryption from ciphertext, dropping security from 112 bits to just 57 bits."
    },
    {
      id: 39,
      question: "How does Triple DES (3DES / TDEA) operate to maintain backward compatibility with legacy single DES systems?",
      options: [
        "By using Encrypt-Decrypt-Encrypt (EDE) mode; setting Key1 = Key2 = Key3 causes the middle Decrypt to cancel the first Encrypt",
        "By dividing the block size in half",
        "By using RSA as an initial handshake",
        "By appending 64 zeroes to the key"
      ],
      answer: 0,
      explanation: "3DES uses EDE sequence: C = E(K3, D(K2, E(K1, P))). When K1 = K2 = K3, the middle Decrypt cancels the first Encrypt, behaving exactly as a standard single DES engine."
    },
    {
      id: 40,
      question: "What vulnerability caused NIST to formally retire Triple DES (3DES) from all US government systems in 2023?",
      options: [
        "The Sweet32 collision attack (CVE-2016-2183), where 3DES's small 64-bit block size leads to Birthday Paradox collisions in CBC mode after 32 GB of data",
        "The complete loss of source code",
        "3DES keys cannot be stored on modern SSDs",
        "The algorithm was discovered to be non-invertible"
      ],
      answer: 0,
      explanation: "Because 3DES inherits DES's tiny 64-bit block size, after encrypting 2^32 blocks (32 GB) under CBC mode, birthday collisions occur, exposing plaintext blocks (the Sweet32 attack)."
    },

    // Spread 5: Symmetric Encryption: AES & Modes of Operation (Q41–Q50)
    {
      id: 41,
      question: "What block size is standardized for the Advanced Encryption Standard (AES / FIPS 197 / Rijndael)?",
      options: ["64 bits", "128 bits (16 bytes)", "256 bits", "512 bits"],
      answer: 1,
      explanation: "In AES, the block size is ALWAYS fixed at exactly 128 bits (16 bytes, organized as a 4x4 matrix of bytes). It does not change with key size."
    },
    {
      id: 42,
      question: "How many transformation rounds are executed in AES-128, AES-192, and AES-256 respectively?",
      options: [
        "8 rounds, 10 rounds, and 12 rounds",
        "10 rounds, 12 rounds, and 14 rounds",
        "12 rounds, 16 rounds, and 20 rounds",
        "16 rounds in all variants"
      ],
      answer: 1,
      explanation: "AES round counts are strictly standardized: AES-128 executes 10 rounds; AES-192 executes 12 rounds; AES-256 executes 14 rounds."
    },
    {
      id: 43,
      question: "Which transformation step in the AES round provides non-linear confusion by substituting each byte using an S-Box lookup table over Galois Field GF(2^8)?",
      options: ["ShiftRows", "SubBytes", "MixColumns", "AddRoundKey"],
      answer: 1,
      explanation: "SubBytes is the sole non-linear transformation in AES. It substitutes each byte with an entry from an invertible S-box constructed from the multiplicative inverse over GF(2^8)."
    },
    {
      id: 44,
      question: "Which transformation step in the AES round mixes data across bytes within each column using matrix multiplication over Galois Field GF(2^8), and is OMITTED in the final round?",
      options: ["SubBytes", "ShiftRows", "MixColumns", "AddRoundKey"],
      answer: 2,
      explanation: "MixColumns provides linear diffusion across 4-byte columns. To make decryption symmetrical and save cycles, MixColumns is omitted in the final round (Round 10, 12, or 14)."
    },
    {
      id: 45,
      question: "What is the critical cryptographic weakness of Electronic Codebook (ECB) mode?",
      options: [
        "It requires two Initialization Vectors",
        "Each block is encrypted independently without an IV, causing identical plaintext blocks to produce identical ciphertext blocks and leaking patterns",
        "It cannot encrypt data faster than 1 KB/s",
        "It can only be used on 32-bit computers"
      ],
      answer: 1,
      explanation: "ECB encrypts each 128-bit block independently with the key. Identical plaintext blocks yield identical ciphertext blocks, notoriously leaking visual and data patterns (e.g. the ECB Penguin)."
    },
    {
      id: 46,
      question: "In Cipher Block Chaining (CBC) mode, how is the first plaintext block randomized before encryption?",
      options: [
        "It is bitwise XORed with an unpredictable, random Initialization Vector (IV)",
        "It is padded with 64 zero bytes",
        "It is encrypted with a public RSA key",
        "It is hashed using SHA-256"
      ],
      answer: 0,
      explanation: "In CBC mode, the first plaintext block is XORed with a random, unique Initialization Vector (IV) before block encryption. Each subsequent block is XORed with the previous ciphertext block."
    },
    {
      id: 47,
      question: "What web vulnerability (demonstrated in POODLE and BEAST) exploits distinct server error responses when PKCS#7 padding is invalid in CBC-mode decryption?",
      options: ["Padding Oracle Attack", "Cross-Site Scripting", "SQL Injection", "Server-Side Request Forgery"],
      answer: 0,
      explanation: "Padding Oracle attacks exploit servers that return different errors for invalid padding vs incorrect passwords, allowing attackers to systematically decrypt ciphertexts byte-by-byte without the key."
    },
    {
      id: 48,
      question: "What block cipher mode converts a block cipher into a stream cipher by encrypting sequential counter values, supporting multi-threaded parallel processing and random-access read/write?",
      options: ["ECB (Electronic Codebook)", "CBC (Cipher Block Chaining)", "CTR (Counter Mode)", "OFB (Output Feedback)"],
      answer: 2,
      explanation: "CTR (Counter Mode) encrypts incrementing counter values (Nonce + Counter) and XORs the result with plaintext. Because counter blocks are independent, processing can be 100% parallelized."
    },
    {
      id: 49,
      question: "What does an 'AEAD' (Authenticated Encryption with Associated Data) mode of operation achieve?",
      options: [
        "It provides Confidentiality, Integrity, AND Authenticity verification in a single cryptographic pass (e.g. AES-GCM)",
        "It rotates symmetric keys every 60 seconds",
        "It only encrypts files containing biometric fingerprints",
        "It requires three separate passwords to decrypt"
      ],
      answer: 0,
      explanation: "AEAD combines confidentiality with cryptographic integrity verification (MAC). It protects encrypted data and authenticates unencrypted headers (Associated Data, AAD)."
    },
    {
      id: 50,
      question: "What AEAD operational mode pairs Counter (CTR) mode encryption with universal polynomial hashing over Galois Field GF(2^128) called GHASH to generate an authentication tag?",
      options: ["AES-ECB", "AES-CBC", "AES-GCM (Galois/Counter Mode)", "AES-XTS"],
      answer: 2,
      explanation: "AES-GCM combines CTR mode encryption with Galois Field multiplication (GHASH) to generate a 128-bit authentication tag, making it the industry standard for TLS 1.3 and IPsec."
    }
  ]
};

