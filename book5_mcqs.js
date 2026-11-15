// Book 5 MCQs: Information Security, Applied Cryptography & VAPT (200 Questions - 10 Per Spread)
window.book5MCQs = [
  {
    "id": 1,
    "question": "What fundamental security property guarantees that sensitive information is accessible strictly to authorized entities and protected from unauthorized disclosure?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Non-repudiation"
    ],
    "answer": 0,
    "explanation": "Confidentiality ensures that information is not made available or disclosed to unauthorized individuals, entities, or processes (achieved via encryption and access controls)."
  },
  {
    "id": 2,
    "question": "What security property guarantees that data has not been altered, modified, tampered with, or fabricated during transit or storage?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Authorization"
    ],
    "answer": 1,
    "explanation": "Integrity ensures the accuracy, completeness, and unaltered state of data from creation to transmission and storage (enforced via cryptographic hashes and digital signatures)."
  },
  {
    "id": 3,
    "question": "What security property guarantees that authorized users have timely and reliable access to information assets, systems, and networks upon request?",
    "options": [
      "Non-repudiation",
      "Confidentiality",
      "Availability",
      "Authentication"
    ],
    "answer": 2,
    "explanation": "Availability ensures that computing systems, network infrastructure, and data remain operable and reachable when needed by authorized users (enforced via redundancy and DDoS defenses)."
  },
  {
    "id": 4,
    "question": "In security control categorization, an IPS (Intrusion Prevention System) or a firewall is classified as what type of control?",
    "options": [
      "Preventive Control",
      "Detective Control",
      "Corrective Control",
      "Compensating Control"
    ],
    "answer": 0,
    "explanation": "Preventive controls (firewalls, encryption, IPS, biometric doors) actively stop security incidents before they occur."
  },
  {
    "id": 5,
    "question": "What security architectural principle advocates implementing multiple concentric layers of overlapping defensive controls rather than relying on a single perimeter wall?",
    "options": [
      "Security through Obscurity",
      "Defense-in-Depth (Layered Security)",
      "Single Point of Failure",
      "Separation of Privilege"
    ],
    "answer": 1,
    "explanation": "Defense-in-Depth ensures that if one defensive layer is breached (e.g., perimeter firewall), subsequent layers (host IDS, endpoint protection, database encryption) prevent compromise."
  },
  {
    "id": 6,
    "question": "What foundational cryptographic tenet (Auguste Kerckhoffs, 1883) mandates that a cryptographic system must remain secure even if everything about the design and algorithm is public knowledge?",
    "options": [
      "Shannon's Law of Entropy",
      "Kerckhoffs's Principle",
      "Diffie-Hellman Theorem",
      "The Vernam Principle"
    ],
    "answer": 1,
    "explanation": "Kerckhoffs's Principle states that a cryptosystem must be secure even if the enemy knows the entire system, provided only the secret key is kept confidential."
  },
  {
    "id": 7,
    "question": "In information security risk management, how are Threat, Vulnerability, and Risk mathematically related?",
    "options": [
      "Risk = Threat + Vulnerability + Asset Value",
      "Risk = Threat x Vulnerability x Impact (or Likelihood x Impact)",
      "Risk = Threat / Vulnerability",
      "Risk = Vulnerability - Threat"
    ],
    "answer": 1,
    "explanation": "Risk is the product of Threat (adversary capability), Vulnerability (flaw/weakness), and Impact (consequence of compromise). If Vulnerability is zero, Risk is zero."
  },
  {
    "id": 8,
    "question": "What security principle dictates that user accounts and applications should only be granted the absolute minimum privileges necessary to perform their legitimate job functions?",
    "options": [
      "Principle of Open Design",
      "Principle of Least Privilege (PoLP)",
      "Principle of Economy of Mechanism",
      "Fail-Safe Defaults"
    ],
    "answer": 1,
    "explanation": "The Principle of Least Privilege limits access rights for users, programs, and processes to only the bare minimum permissions required for authorized work, limiting exploit blast radius."
  },
  {
    "id": 9,
    "question": "What security operational control requires that critical high-impact tasks (e.g. transferring $10M or launching missiles) require two or more authorized individuals to complete?",
    "options": [
      "Single Sign-On (SSO)",
      "Separation of Duties (Dual Control / Two-Man Rule)",
      "Job Rotation",
      "Mandatory Vacations"
    ],
    "answer": 1,
    "explanation": "Separation of Duties and Dual Control divide critical transactions among multiple personnel so no single individual can unilaterally execute fraudulent or destructive actions."
  },
  {
    "id": 10,
    "question": "What social engineering attack vector uses deceptive emails, spoofed sender domains, and urgent pretexts to manipulate employees into revealing credentials or transferring funds?",
    "options": [
      "Phishing",
      "Port Scanning",
      "Buffer Overflow",
      "SQL Injection"
    ],
    "answer": 0,
    "explanation": "Phishing is a social engineering attack where malicious actors impersonate legitimate institutions via email to trick victims into providing sensitive credentials or installing malware."
  },
  {
    "id": 11,
    "question": "In the AAA security architecture framework, what do the three 'A' initials represent?",
    "options": [
      "Access, Assessment, Auditing",
      "Authentication, Authorization, Accounting (or Auditing)",
      "Algorithm, Architecture, Application",
      "Availability, Accuracy, Authenticity"
    ],
    "answer": 1,
    "explanation": "AAA stands for Authentication (verifying identity), Authorization (determining permissions), and Accounting/Auditing (logging user activity)."
  },
  {
    "id": 12,
    "question": "What authentication factor category does a fingerprint scan, facial recognition, or retina pattern fall under?",
    "options": [
      "Something you know (Knowledge)",
      "Something you have (Possession)",
      "Something you are (Inherence)",
      "Somewhere you are (Location)"
    ],
    "answer": 2,
    "explanation": "Biometric traits (fingerprint, iris, retina, face, voice) represent the 'Something you are' (Inherence) authentication factor."
  },
  {
    "id": 13,
    "question": "To qualify as true Multi-Factor Authentication (MFA), an authentication mechanism must require:",
    "options": [
      "Two different passwords created on different dates",
      "Two or more independent authentication factors from DIFFERENT categories (e.g. password + hardware token)",
      "A password and a security question (e.g. mother's maiden name)",
      "A PIN entered twice from two separate browsers"
    ],
    "answer": 1,
    "explanation": "True MFA mandates using at least two different factor categories (e.g. Something you know + Something you have). A password and a PIN are both 'something you know' and do NOT qualify as MFA."
  },
  {
    "id": 14,
    "question": "What access control model assigns permissions to specific job titles or organizational functions rather than directly to individual user accounts?",
    "options": [
      "Discretionary Access Control (DAC)",
      "Role-Based Access Control (RBAC)",
      "Mandatory Access Control (MAC)",
      "Rule-Based Access Control"
    ],
    "answer": 1,
    "explanation": "RBAC (Role-Based Access Control) assigns permissions to organizational roles (e.g., 'Auditor', 'Doctor'), and users are assigned to roles, dramatically simplifying enterprise administration."
  },
  {
    "id": 15,
    "question": "What strict access control model (used in military and government intelligence) enforces security labels (e.g., Top Secret, Secret) and prevents resource owners from granting permissions?",
    "options": [
      "Mandatory Access Control (MAC)",
      "Discretionary Access Control (DAC)",
      "Role-Based Access Control (RBAC)",
      "Open Access Control"
    ],
    "answer": 0,
    "explanation": "In Mandatory Access Control (MAC), the central operating system policy strictly enforces access based on security clearances and classification labels (e.g., Bell-LaPadula model); data owners cannot override it."
  },
  {
    "id": 16,
    "question": "What advanced access control model evaluates dynamic runtime context—such as user department, device health, time of day, and geolocation—using policies defined in XACML?",
    "options": [
      "Discretionary Access Control (DAC)",
      "Attribute-Based Access Control (ABAC)",
      "Identity-Based Access Control",
      "Static File Permissions"
    ],
    "answer": 1,
    "explanation": "Attribute-Based Access Control (ABAC) uses fine-grained boolean policies evaluating subject, resource, action, and environmental context attributes (e.g., allow if time is 9am-5pm and location is office)."
  },
  {
    "id": 17,
    "question": "What security service ensures that a party to a transaction or digital communication cannot falsely deny having sent the message or initiated the action?",
    "options": [
      "Non-repudiation",
      "Confidentiality",
      "Availability",
      "Authentication"
    ],
    "answer": 0,
    "explanation": "Non-repudiation provides indisputable cryptographic proof of the origin and integrity of a transaction, preventing a sender from claiming they did not transmit it."
  },
  {
    "id": 18,
    "question": "Why can symmetric encryption algorithms (like AES or DES) NOT provide non-repudiation on their own?",
    "options": [
      "Because symmetric keys are too short to resist quantum attacks",
      "Because both the sender and receiver share the exact same secret key, so either party could have created the message",
      "Because symmetric ciphers do not support block chaining",
      "Because symmetric encryption cannot process binary data"
    ],
    "answer": 1,
    "explanation": "In symmetric cryptography, both sender and receiver possess identical copies of the secret key. Therefore, either party could have generated the ciphertext, making non-repudiation impossible."
  },
  {
    "id": 19,
    "question": "What cryptographic mechanism provides legally enforceable non-repudiation in modern digital forensics and e-commerce?",
    "options": [
      "Symmetric AES-GCM tags",
      "Asymmetric Digital Signatures (signed with sender's private key)",
      "CRC32 Checksums",
      "Base64 Obfuscation"
    ],
    "answer": 1,
    "explanation": "Digital signatures provide non-repudiation because only the sender holds the unique private key used to sign the message digest, and anyone can verify it with their public key."
  },
  {
    "id": 20,
    "question": "In digital forensic investigations, why must enterprise security audit logs be transmitted to an immutable centralized SIEM with NTP synchronization?",
    "options": [
      "To ensure timestamps across all servers correlate accurately and logs cannot be deleted or altered by local root attackers",
      "To compress log files to save hard drive space",
      "To eliminate the need for firewalls",
      "To allow users to modify their past authentication attempts"
    ],
    "answer": 0,
    "explanation": "Centralized logging with Network Time Protocol (NTP) synchronization guarantees that forensic timelines are chronologically accurate and prevents adversaries from wiping local logs to hide their tracks."
  },
  {
    "id": 21,
    "question": "What is the fundamental difference between Cryptography and Steganography?",
    "options": [
      "Cryptography hides the meaning of a message; Steganography hides the very existence of the communication",
      "Cryptography is used only on mobile phones; Steganography is used only on servers",
      "Cryptography relies on passwords; Steganography uses no mathematical algorithms",
      "Cryptography was invented in 2000; Steganography was invented by Claude Shannon"
    ],
    "answer": 0,
    "explanation": "Cryptography ('secret writing') scrambles the content into unintelligible ciphertext (the communication is visible, but unreadable). Steganography ('covered writing') conceals the fact that a message exists inside a carrier."
  },
  {
    "id": 22,
    "question": "How does Digital Watermarking fundamentally differ from Steganography?",
    "options": [
      "Watermarking aims to prove copyright/ownership and must be robust against removal, whereas steganography prioritizes covert data exfiltration",
      "Watermarking uses symmetric keys; Steganography uses asymmetric keys",
      "Watermarking is only used on video files; Steganography is only used on text files",
      "Watermarking is an illegal hacking technique"
    ],
    "answer": 0,
    "explanation": "Digital watermarking embeds an indelible mark to assert intellectual property and verify ownership, requiring extreme robustness against filtering. Steganography prioritizes stealth and capacity."
  },
  {
    "id": 23,
    "question": "In steganography terminology, the innocent file (image, audio track, video) that carries the concealed payload is known as the:",
    "options": [
      "Cover Object (or Carrier Medium)",
      "Stego-Key",
      "Ciphertext",
      "Initialization Vector"
    ],
    "answer": 0,
    "explanation": "The original innocent file before data embedding is the 'Cover Object' (carrier); after embedding the hidden payload, it is termed the 'Stego-Object'."
  },
  {
    "id": 24,
    "question": "What spatial domain steganography technique embeds secret data bits into the least significant bits of uncompressed image pixel color bytes?",
    "options": [
      "Discrete Wavelet Transform (DWT)",
      "Least Significant Bit (LSB) Insertion",
      "Discrete Cosine Transform (DCT)",
      "Huffman Encoding"
    ],
    "answer": 1,
    "explanation": "LSB (Least Significant Bit) insertion overwrites the lowest-order bit of RGB color bytes (0-255). Changing the last bit alters luminance by only 1/255th, invisible to the human eye."
  },
  {
    "id": 25,
    "question": "In a standard 24-bit RGB bitmap image (BMP or lossless PNG), how many secret bits can be hidden per pixel using 1-bit LSB substitution across all color channels?",
    "options": [
      "1 bit",
      "3 bits (1 bit in Red, 1 bit in Green, 1 bit in Blue)",
      "8 bits",
      "24 bits"
    ],
    "answer": 1,
    "explanation": "Each pixel in a 24-bit image has 3 color bytes (Red, Green, Blue). Modifying the 1 least significant bit of each color byte allows embedding exactly 3 secret bits per pixel."
  },
  {
    "id": 26,
    "question": "In lossy compressed images (such as JPEG), steganographic algorithms (e.g. Jsteg, F5) embed secret payload bits into which mathematical domain?",
    "options": [
      "Raw spatial pixels",
      "Quantized Discrete Cosine Transform (DCT) coefficients",
      "File metadata EXIF tags only",
      "Color palette headers"
    ],
    "answer": 1,
    "explanation": "JPEG steganography operates in the frequency domain, modifying the quantized Discrete Cosine Transform (DCT) coefficients of 8x8 pixel blocks to survive lossy compression."
  },
  {
    "id": 27,
    "question": "In Network Steganography, what fields within the TCP/IP protocol stack are frequently manipulated to establish covert channels?",
    "options": [
      "TCP Initial Sequence Number (ISN), IP Identification (IP ID), and Urgent Pointer",
      "Ethernet preamble and MAC CRC fields only",
      "DNS port number exclusively",
      "Subnet mask bits"
    ],
    "answer": 0,
    "explanation": "Adversaries manipulate TCP Initial Sequence Numbers (ISN), IP Identification fields, or TCP Urgent Pointers to transmit secret data without generating abnormal application traffic."
  },
  {
    "id": 28,
    "question": "In steganography software (e.g. OpenStego, QuickStego), what role does the 'Stego-Key' serve?",
    "options": [
      "It acts as a secret password that pseudorandomly determines which specific pixel locations or carrier bytes hold the embedded payload bits",
      "It decompresses the JPEG file into a bitmap",
      "It generates a public X.509 certificate",
      "It sends an alert to the network administrator"
    ],
    "answer": 0,
    "explanation": "A Stego-Key controls a pseudorandom number generator (PRNG) that scatters payload bits across non-sequential carrier locations, preventing unauthorized parties from extracting the data even if they know the carrier format."
  },
  {
    "id": 29,
    "question": "What fundamental trilemma dictates the design and trade-offs of all steganographic systems?",
    "options": [
      "Payload Capacity, Invisibility (Imperceptibility), and Robustness against distortion/compression",
      "Speed, Cost, and Encryption Key Length",
      "Portability, CPU usage, and Hard drive size",
      "RAM usage, Display resolution, and Bandwidth"
    ],
    "answer": 0,
    "explanation": "The Steganographic Triangle dictates that increasing payload Capacity degrades Invisibility (making statistical detection easier) or reduces Robustness against image processing."
  },
  {
    "id": 30,
    "question": "What classic theoretical problem, formulated by Gustavus Simmons in 1983, mathematically models steganographic communication under the surveillance of an active warden?",
    "options": [
      "The Byzantine Generals Problem",
      "The Prisoners' Problem",
      "The Dining Philosophers Problem",
      "The Two Generals Problem"
    ],
    "answer": 1,
    "explanation": "The Prisoners' Problem models two inmates (Alice and Bob) attempting to hatch an escape plan under the watchful eye of a prison warden (Wendy), requiring their secret messages to appear completely innocent."
  },
  {
    "id": 31,
    "question": "What fundamental characteristic defines a Symmetric Key Cryptosystem?",
    "options": [
      "Two mathematically related keys are used: a public key for encryption and a private key for decryption",
      "A single shared secret key is utilized for both encryption and decryption",
      "No keys are needed; security is based on hash digest length",
      "Encryption is performed with a password, but decryption requires biometric hardware"
    ],
    "answer": 1,
    "explanation": "Symmetric cryptography (secret-key cryptography) relies on both communicating parties sharing and keeping confidential the exact same secret key."
  },
  {
    "id": 32,
    "question": "What is the operational definition of a 'Stream Cipher' versus a 'Block Cipher'?",
    "options": [
      "Stream ciphers encrypt plaintext bit-by-bit (or byte-by-byte) using a pseudorandom keystream generator; block ciphers encrypt fixed-size chunks of data as discrete units",
      "Stream ciphers are asymmetric; block ciphers are symmetric",
      "Stream ciphers are only used on hard drives; block ciphers are only used in web browsers",
      "Stream ciphers use S-boxes; block ciphers only use XOR operations"
    ],
    "answer": 0,
    "explanation": "Stream ciphers continuously XOR plaintext bits with a pseudorandom keystream (low latency, zero buffering). Block ciphers process fixed-size chunks (e.g. 64 or 128 bits) through multiple rounds."
  },
  {
    "id": 33,
    "question": "Which of the following is a modern, high-speed stream cipher standardized in RFC 8439 (used in TLS 1.3 and WireGuard) that uses Add-Rotate-XOR (ARX) operations?",
    "options": [
      "DES",
      "AES-CBC",
      "ChaCha20",
      "RSA-2048"
    ],
    "answer": 2,
    "explanation": "ChaCha20 is a modern stream cipher using 256-bit keys, a 96-bit nonce, and ARX operations. It is immune to cache-timing attacks, replacing the obsolete and vulnerable RC4 cipher."
  },
  {
    "id": 34,
    "question": "What block size and effective key length are standardized by the Data Encryption Standard (DES / FIPS PUB 46)?",
    "options": [
      "128-bit block size and 128-bit key length",
      "64-bit block size and 56-bit effective key length (with 8 parity check bits discarded)",
      "64-bit block size and 64-bit effective key length",
      "32-bit block size and 56-bit key length"
    ],
    "answer": 1,
    "explanation": "DES operates on 64-bit blocks. The input key is 64 bits, but bits 8, 16, 24, 32, 40, 48, 56, and 64 are parity bits, leaving strictly 56 effective key bits (2^56 keys)."
  },
  {
    "id": 35,
    "question": "Claude Shannon established that all secure block ciphers must satisfy two fundamental architectural properties: Confusion and Diffusion. What do these mean?",
    "options": [
      "Confusion obscures the relationship between the key and ciphertext (via S-boxes); Diffusion spreads plaintext statistics across many ciphertext bits (Avalanche effect)",
      "Confusion means adding noise; Diffusion means deleting unnecessary bytes",
      "Confusion uses public keys; Diffusion uses private keys",
      "Confusion is stream encryption; Diffusion is block decryption"
    ],
    "answer": 0,
    "explanation": "Confusion makes the mathematical relationship between key and ciphertext as complex as possible (non-linear S-boxes). Diffusion ensures that changing one bit in plaintext alters roughly 50% of ciphertext bits."
  },
  {
    "id": 36,
    "question": "How many Feistel rounds are executed within the Data Encryption Standard (DES) algorithm?",
    "options": [
      "10 rounds",
      "12 rounds",
      "16 rounds",
      "20 rounds"
    ],
    "answer": 2,
    "explanation": "DES executes exactly 16 Feistel rounds. In each round, the 64-bit block is split into two 32-bit halves, swapped, and transformed through the Feistel F-function."
  },
  {
    "id": 37,
    "question": "What major hardware and software implementation advantage is provided by a Feistel Network architecture?",
    "options": [
      "It eliminates the need for secret keys",
      "Encryption and decryption utilize the identical hardware circuit and code, merely applying round subkeys in reverse order",
      "It prevents all brute-force attacks automatically",
      "It converts block ciphers into asymmetric algorithms"
    ],
    "answer": 1,
    "explanation": "In a Feistel cipher, decryption is mathematically identical to encryption; one simply applies the round keys in reverse order (Key 16 down to Key 1), saving silicon chip area."
  },
  {
    "id": 38,
    "question": "Why did Double DES (2DES / encrypting twice with two separate 56-bit keys) fail to provide the expected 2^112 security strength?",
    "options": [
      "Because of the Meet-in-the-Middle attack, which precomputes forward encryption and backward decryption to crack both keys in only 2^57 operations",
      "Because DES keys cannot be doubled",
      "Because the second key cancels out the first key automatically",
      "Because Feistel ciphers only allow one key"
    ],
    "answer": 0,
    "explanation": "Diffie and Hellman proved Double DES vulnerable to the Meet-in-the-Middle attack: forward encryption from plaintext meets backward decryption from ciphertext, dropping security from 112 bits to just 57 bits."
  },
  {
    "id": 39,
    "question": "How does Triple DES (3DES / TDEA) operate to maintain backward compatibility with legacy single DES systems?",
    "options": [
      "By using Encrypt-Decrypt-Encrypt (EDE) mode; setting Key1 = Key2 = Key3 causes the middle Decrypt to cancel the first Encrypt",
      "By dividing the block size in half",
      "By using RSA as an initial handshake",
      "By appending 64 zeroes to the key"
    ],
    "answer": 0,
    "explanation": "3DES uses EDE sequence: C = E(K3, D(K2, E(K1, P))). When K1 = K2 = K3, the middle Decrypt cancels the first Encrypt, behaving exactly as a standard single DES engine."
  },
  {
    "id": 40,
    "question": "What vulnerability caused NIST to formally retire Triple DES (3DES) from all US government systems in 2023?",
    "options": [
      "The Sweet32 collision attack (CVE-2016-2183), where 3DES's small 64-bit block size leads to Birthday Paradox collisions in CBC mode after 32 GB of data",
      "The complete loss of source code",
      "3DES keys cannot be stored on modern SSDs",
      "The algorithm was discovered to be non-invertible"
    ],
    "answer": 0,
    "explanation": "Because 3DES inherits DES's tiny 64-bit block size, after encrypting 2^32 blocks (32 GB) under CBC mode, birthday collisions occur, exposing plaintext blocks (the Sweet32 attack)."
  },
  {
    "id": 41,
    "question": "What block size is standardized for the Advanced Encryption Standard (AES / FIPS 197 / Rijndael)?",
    "options": [
      "64 bits",
      "128 bits (16 bytes)",
      "256 bits",
      "512 bits"
    ],
    "answer": 1,
    "explanation": "In AES, the block size is ALWAYS fixed at exactly 128 bits (16 bytes, organized as a 4x4 matrix of bytes). It does not change with key size."
  },
  {
    "id": 42,
    "question": "How many transformation rounds are executed in AES-128, AES-192, and AES-256 respectively?",
    "options": [
      "8 rounds, 10 rounds, and 12 rounds",
      "10 rounds, 12 rounds, and 14 rounds",
      "12 rounds, 16 rounds, and 20 rounds",
      "16 rounds in all variants"
    ],
    "answer": 1,
    "explanation": "AES round counts are strictly standardized: AES-128 executes 10 rounds; AES-192 executes 12 rounds; AES-256 executes 14 rounds."
  },
  {
    "id": 43,
    "question": "Which transformation step in the AES round provides non-linear confusion by substituting each byte using an S-Box lookup table over Galois Field GF(2^8)?",
    "options": [
      "ShiftRows",
      "SubBytes",
      "MixColumns",
      "AddRoundKey"
    ],
    "answer": 1,
    "explanation": "SubBytes is the sole non-linear transformation in AES. It substitutes each byte with an entry from an invertible S-box constructed from the multiplicative inverse over GF(2^8)."
  },
  {
    "id": 44,
    "question": "Which transformation step in the AES round mixes data across bytes within each column using matrix multiplication over Galois Field GF(2^8), and is OMITTED in the final round?",
    "options": [
      "SubBytes",
      "ShiftRows",
      "MixColumns",
      "AddRoundKey"
    ],
    "answer": 2,
    "explanation": "MixColumns provides linear diffusion across 4-byte columns. To make decryption symmetrical and save cycles, MixColumns is omitted in the final round (Round 10, 12, or 14)."
  },
  {
    "id": 45,
    "question": "What is the critical cryptographic weakness of Electronic Codebook (ECB) mode?",
    "options": [
      "It requires two Initialization Vectors",
      "Each block is encrypted independently without an IV, causing identical plaintext blocks to produce identical ciphertext blocks and leaking patterns",
      "It cannot encrypt data faster than 1 KB/s",
      "It can only be used on 32-bit computers"
    ],
    "answer": 1,
    "explanation": "ECB encrypts each 128-bit block independently with the key. Identical plaintext blocks yield identical ciphertext blocks, notoriously leaking visual and data patterns (e.g. the ECB Penguin)."
  },
  {
    "id": 46,
    "question": "In Cipher Block Chaining (CBC) mode, how is the first plaintext block randomized before encryption?",
    "options": [
      "It is bitwise XORed with an unpredictable, random Initialization Vector (IV)",
      "It is padded with 64 zero bytes",
      "It is encrypted with a public RSA key",
      "It is hashed using SHA-256"
    ],
    "answer": 0,
    "explanation": "In CBC mode, the first plaintext block is XORed with a random, unique Initialization Vector (IV) before block encryption. Each subsequent block is XORed with the previous ciphertext block."
  },
  {
    "id": 47,
    "question": "What web vulnerability (demonstrated in POODLE and BEAST) exploits distinct server error responses when PKCS#7 padding is invalid in CBC-mode decryption?",
    "options": [
      "Padding Oracle Attack",
      "Cross-Site Scripting",
      "SQL Injection",
      "Server-Side Request Forgery"
    ],
    "answer": 0,
    "explanation": "Padding Oracle attacks exploit servers that return different errors for invalid padding vs incorrect passwords, allowing attackers to systematically decrypt ciphertexts byte-by-byte without the key."
  },
  {
    "id": 48,
    "question": "What block cipher mode converts a block cipher into a stream cipher by encrypting sequential counter values, supporting multi-threaded parallel processing and random-access read/write?",
    "options": [
      "ECB (Electronic Codebook)",
      "CBC (Cipher Block Chaining)",
      "CTR (Counter Mode)",
      "OFB (Output Feedback)"
    ],
    "answer": 2,
    "explanation": "CTR (Counter Mode) encrypts incrementing counter values (Nonce + Counter) and XORs the result with plaintext. Because counter blocks are independent, processing can be 100% parallelized."
  },
  {
    "id": 49,
    "question": "What does an 'AEAD' (Authenticated Encryption with Associated Data) mode of operation achieve?",
    "options": [
      "It provides Confidentiality, Integrity, AND Authenticity verification in a single cryptographic pass (e.g. AES-GCM)",
      "It rotates symmetric keys every 60 seconds",
      "It only encrypts files containing biometric fingerprints",
      "It requires three separate passwords to decrypt"
    ],
    "answer": 0,
    "explanation": "AEAD combines confidentiality with cryptographic integrity verification (MAC). It protects encrypted data and authenticates unencrypted headers (Associated Data, AAD)."
  },
  {
    "id": 50,
    "question": "What AEAD operational mode pairs Counter (CTR) mode encryption with universal polynomial hashing over Galois Field GF(2^128) called GHASH to generate an authentication tag?",
    "options": [
      "AES-ECB",
      "AES-CBC",
      "AES-GCM (Galois/Counter Mode)",
      "AES-XTS"
    ],
    "answer": 2,
    "explanation": "AES-GCM combines CTR mode encryption with Galois Field multiplication (GHASH) to generate a 128-bit authentication tag, making it the industry standard for TLS 1.3 and IPsec."
  },
  {
    "id": 51,
    "question": "What core architectural principle defines Asymmetric (Public-Key) Cryptography?",
    "options": [
      "It uses a single secret key that must be pre-shared over an out-of-band courier",
      "It uses a mathematically linked Key Pair: a Public Key for encryption/verification and a Private Key for decryption/signing",
      "It does not use mathematical keys, relying entirely on network firewalls",
      "It only encrypts data during daytime hours"
    ],
    "answer": 1,
    "explanation": "Asymmetric cryptography utilizes a key pair. The public key is openly distributed to anyone who wants to send encrypted data, while the corresponding private key is kept strictly secret by the recipient."
  },
  {
    "id": 52,
    "question": "What mathematical construct forms the foundation of all asymmetric cryptosystems, being computationally easy to execute in one direction but virtually impossible to invert without secret auxiliary information?",
    "options": [
      "Trapdoor One-Way Function",
      "Linear Permutation Matrix",
      "Symmetric XOR Gate",
      "Modulo 26 Shift"
    ],
    "answer": 0,
    "explanation": "A Trapdoor One-Way Function is easy to compute in one direction (e.g. multiplying large primes), but computationally infeasible to invert (factoring) unless one knows the secret 'trapdoor' key."
  },
  {
    "id": 53,
    "question": "On what hard mathematical problem is the security of the classic RSA public-key cryptosystem fundamentally based?",
    "options": [
      "The computational hardness of factoring the product of two large prime numbers (Prime Factorization Problem)",
      "The discrete logarithm problem in elliptic curves",
      "The shortest vector problem in multi-dimensional Euclidean lattices",
      "The challenge of reversing SHA-256 hashes"
    ],
    "answer": 0,
    "explanation": "RSA relies on the fact that multiplying two 1024-bit primes (n = p * q) takes microseconds, but factoring composite modulus n back into p and q would take millions of compute years."
  },
  {
    "id": 54,
    "question": "In RSA key generation, how is Euler's totient function phi(n) calculated from two distinct secret prime numbers p and q?",
    "options": [
      "phi(n) = (p + 1) * (q + 1)",
      "phi(n) = (p - 1) * (q - 1)",
      "phi(n) = p^2 + q^2",
      "phi(n) = sqrt(p * q)"
    ],
    "answer": 1,
    "explanation": "For n = p * q where p and q are prime numbers, Euler's totient function phi(n), which counts positive integers up to n coprime to n, is exactly (p - 1) * (q - 1)."
  },
  {
    "id": 55,
    "question": "What numerical value is universally chosen as the public encryption exponent e in modern RSA implementations due to its low Hamming weight?",
    "options": [
      "3",
      "17",
      "65,537 (Fermat prime F4 = 2^16 + 1)",
      "1,048,576"
    ],
    "answer": 2,
    "explanation": "The Fermat prime 65,537 (hex 0x10001, binary 10000000000000001) has only two 1-bits. This makes modular exponentiation fast while preventing small-exponent attacks (like Coppersmith's attack on e=3)."
  },
  {
    "id": 56,
    "question": "In RSA key generation, how is the private decryption exponent d mathematically derived from public exponent e and totient phi(n)?",
    "options": [
      "d = e * phi(n)",
      "d = e^(-1) mod phi(n) (the modular multiplicative inverse of e modulo phi(n))",
      "d = e + phi(n)",
      "d = phi(n) / e"
    ],
    "answer": 1,
    "explanation": "The private exponent d is calculated using the Extended Euclidean Algorithm such that (e * d) mod phi(n) = 1, making d the modular multiplicative inverse of e."
  },
  {
    "id": 57,
    "question": "What is the mathematical formula used to encrypt a plaintext message M into ciphertext C using public key (e, n) in RSA?",
    "options": [
      "C = (M * e) mod n",
      "C = (M^e) mod n",
      "C = (e^M) mod n",
      "C = (M + e) mod n"
    ],
    "answer": 1,
    "explanation": "In RSA, encryption computes C = (M^e) mod n. Decryption reverses this using private key d: M = (C^d) mod n."
  },
  {
    "id": 58,
    "question": "Why is 'textbook' (unpadded) RSA strictly forbidden in secure software implementations?",
    "options": [
      "Because it is too slow to execute",
      "Because raw RSA is deterministic: encrypting the same message with the same public key always yields the exact same ciphertext, exposing it to chosen-ciphertext attacks",
      "Because textbook RSA only works with 8-bit characters",
      "Because textbook RSA keys expire after 24 hours"
    ],
    "answer": 1,
    "explanation": "Deterministic encryption allows an eavesdropper to confirm guesses about plaintext contents. Furthermore, mathematical homomorphic properties allow adversaries to forge valid ciphertexts."
  },
  {
    "id": 59,
    "question": "What padding scheme is mandatory in modern RSA encryption to introduce randomness and prevent Bleichenbacher and Coppersmith attacks?",
    "options": [
      "RSA-OAEP (Optimal Asymmetric Encryption Padding)",
      "PKCS#1 v1.5 Zero Padding",
      "Bitwise Null Padding",
      "DES Parity Padding"
    ],
    "answer": 0,
    "explanation": "RSA-OAEP (RFC 8017) uses a two-round Feistel network with cryptographic hash functions and random seeds to make RSA probabilistically secure against chosen-ciphertext attacks."
  },
  {
    "id": 60,
    "question": "What minimum RSA key length is currently recommended by NIST to provide acceptable security for enterprise and government communications beyond 2030?",
    "options": [
      "512 bits",
      "1024 bits",
      "2048 bits (or 3072 bits for long-term security)",
      "128 bits"
    ],
    "answer": 2,
    "explanation": "NIST deprecated 1024-bit RSA keys in 2013. A minimum of 2048 bits is required for current enterprise systems, and 3072 bits is recommended for security beyond 2030."
  },
  {
    "id": 61,
    "question": "What revolutionary cryptographic capability was established by Whitfield Diffie and Martin Hellman in their 1976 protocol?",
    "options": [
      "A method for two communicating parties to establish a shared secret key over an unencrypted public channel without exchanging any prior secrets",
      "The first digital signature scheme",
      "The first hardware random number generator",
      "The DES block cipher algorithm"
    ],
    "answer": 0,
    "explanation": "Diffie-Hellman (DH) solved the ancient Key Distribution Problem by allowing two strangers (Alice and Bob) to create a shared symmetric key across a public tapped wire."
  },
  {
    "id": 62,
    "question": "On what hard mathematical problem is the security of the classic Diffie-Hellman key exchange protocol based?",
    "options": [
      "Integer Prime Factorization",
      "Discrete Logarithm Problem (DLP) over a finite prime field",
      "Finding collisions in SHA-1",
      "Inverting AES S-boxes"
    ],
    "answer": 1,
    "explanation": "Diffie-Hellman relies on the Discrete Logarithm Problem: given generator g, prime p, and public value A = (g^a) mod p, it is computationally infeasible to extract secret exponent a."
  },
  {
    "id": 63,
    "question": "What active attack can completely compromise unauthenticated classic Diffie-Hellman key exchanges if endpoints do not verify identities using digital signatures or certificates?",
    "options": [
      "Man-in-the-Middle (MitM) Attack",
      "Buffer Overflow Attack",
      "SQL Injection Attack",
      "Cross-Site Scripting"
    ],
    "answer": 0,
    "explanation": "An active attacker (Eve) sitting between Alice and Bob can perform two independent DH exchanges (Alice-Eve and Eve-Bob), intercepting and reading all traffic unless endpoints authenticate each other."
  },
  {
    "id": 64,
    "question": "What security property is guaranteed by Ephemeral Diffie-Hellman (DHE / ECDHE) in modern protocols like TLS 1.3?",
    "options": [
      "Perfect Forward Secrecy (PFS)",
      "Zero-Knowledge Proofs",
      "Passwordless Authentication",
      "Hardware-enforced MAC address filtering"
    ],
    "answer": 0,
    "explanation": "Ephemeral Diffie-Hellman generates new, temporary keys for every session. Once the session ends, the keys are discarded. If the server's long-term master key is stolen later, past sessions cannot be decrypted."
  },
  {
    "id": 65,
    "question": "On what mathematical foundation is Elliptic Curve Cryptography (ECC) established?",
    "options": [
      "The algebraic structure of elliptic curves over finite fields and the Elliptic Curve Discrete Logarithm Problem (ECDLP)",
      "Factoring large composite numbers",
      "Finding collisions in Merkle-Damgård trees",
      "Solving simultaneous quadratic equations in Euclidean space"
    ],
    "answer": 0,
    "explanation": "ECC relies on points lying on algebraic curves (e.g. y^2 = x^3 + ax + b). Its security is anchored on the computational hardness of the Elliptic Curve Discrete Logarithm Problem (ECDLP)."
  },
  {
    "id": 66,
    "question": "What major efficiency advantage does Elliptic Curve Cryptography (ECC) offer over traditional RSA?",
    "options": [
      "ECC provides equivalent cryptographic security strength with drastically smaller key sizes (e.g. 256-bit ECC matches 3072-bit RSA)",
      "ECC does not require mathematics",
      "ECC can only be run on quantum supercomputers",
      "ECC keys never need to be updated"
    ],
    "answer": 0,
    "explanation": "Because no sub-exponential algorithm exists to solve ECDLP (unlike the Number Field Sieve for RSA factoring), ECC achieves the same security as a 3072-bit RSA key using only 256 bits."
  },
  {
    "id": 67,
    "question": "What modern, high-speed Edwards-curve Digital Signature Algorithm implemented over Curve25519 is widely adopted in TLS 1.3, OpenSSH, and Signal?",
    "options": [
      "Ed25519",
      "RSA-512",
      "DES-EDE",
      "MD5-Sign"
    ],
    "answer": 0,
    "explanation": "Ed25519 (developed by Daniel J. Bernstein) is an elliptic curve signature scheme over Curve25519. It runs in strict constant time, completely eliminating cache-timing side-channel vulnerabilities."
  },
  {
    "id": 68,
    "question": "In ECC point arithmetic, what operation is repeated to compute public point Q = k * P from private integer k and generator base point P?",
    "options": [
      "Point Addition and Point Doubling",
      "Matrix Inversion",
      "Polynomial Long Division",
      "Square Root Extraction"
    ],
    "answer": 0,
    "explanation": "Scalar multiplication in ECC is computed using iterative Point Doubling and Point Addition (the double-and-add algorithm), which is easy to compute forward but impossible to reverse."
  },
  {
    "id": 69,
    "question": "Why is Elliptic Curve Cryptography particularly vital for mobile smartphones, smart cards, and IoT sensors?",
    "options": [
      "Smaller key sizes require vastly less memory, transmission bandwidth, and battery power to process",
      "Mobile phones cannot run modular arithmetic",
      "IoT sensors do not support digital signatures",
      "Mobile networks block RSA packets"
    ],
    "answer": 0,
    "explanation": "Smaller key sizes mean faster handshakes, less power consumption, and minimal memory footprints, making ECC the premier choice for battery-constrained mobile and embedded architectures."
  },
  {
    "id": 70,
    "question": "What quantum algorithm, formulated by Peter Shor in 1994, is mathematically proven to factor large integers and solve discrete logarithms in polynomial time, threatening both RSA and ECC?",
    "options": [
      "Shor's Algorithm",
      "Grover's Algorithm",
      "Dijkstra's Algorithm",
      "The Kasiski Algorithm"
    ],
    "answer": 0,
    "explanation": "Shor's Algorithm on a sufficiently large fault-tolerant quantum computer breaks both Prime Factorization (RSA) and Discrete Logarithms (DH and ECC) in polynomial time O((log n)^3)."
  },
  {
    "id": 71,
    "question": "What is the operational definition of a Cryptographic Hash Function?",
    "options": [
      "A mathematical algorithm that transforms an arbitrary-length block of data into a fixed-size, deterministic bitstring (digest)",
      "A cipher that encrypts data using a secret password",
      "A protocol that compresses files into ZIP format",
      "A firewall rule that filters packet headers"
    ],
    "answer": 0,
    "explanation": "A cryptographic hash function takes an input of any size and produces a fixed-length digest (e.g. SHA-256 always outputs 256 bits). It is deterministic: the same input always yields the identical digest."
  },
  {
    "id": 72,
    "question": "What property of a cryptographic hash function mandates that changing just a single bit in the input message should drastically alter roughly 50% of the output digest bits?",
    "options": [
      "The Avalanche Effect",
      "The Sponge Construction",
      "Perfect Forward Secrecy",
      "Non-repudiation"
    ],
    "answer": 0,
    "explanation": "The Avalanche Effect ensures that even microscopic changes to input plaintext create completely uncorrelated, chaotic changes across approximately half the hash digest bits."
  },
  {
    "id": 73,
    "question": "What property mandates that given a hash digest h, it is computationally infeasible to find the original message x such that Hash(x) = h?",
    "options": [
      "Pre-image Resistance (One-Way Property)",
      "Second Pre-image Resistance",
      "Collision Resistance",
      "Homomorphic Property"
    ],
    "answer": 0,
    "explanation": "Pre-image resistance (the one-way property) guarantees that an attacker cannot reverse-engineer a hash digest back into the original plaintext or password."
  },
  {
    "id": 74,
    "question": "What property mandates that given a specific input message x, it is computationally infeasible to find a DIFFERENT message y (y != x) such that Hash(x) = Hash(y)?",
    "options": [
      "Second Pre-image Resistance (Weak Collision Resistance)",
      "Pre-image Resistance",
      "Confusion",
      "Perfect Secrecy"
    ],
    "answer": 0,
    "explanation": "Second pre-image resistance ensures an attacker cannot take an existing signed document x and forge a fraudulent document y that produces the exact same hash value."
  },
  {
    "id": 75,
    "question": "What property mandates that it is computationally infeasible to find ANY two arbitrary distinct messages x and y (x != y) such that Hash(x) = Hash(y)?",
    "options": [
      "Collision Resistance (Strong Collision Resistance)",
      "Diffusion",
      "Pre-image Resistance",
      "Linear Cryptanalysis"
    ],
    "answer": 0,
    "explanation": "Collision resistance ensures no two arbitrary messages in the universe produce identical hash digests, forming the bedrock of digital signatures."
  },
  {
    "id": 76,
    "question": "What mathematical principle explains why finding an arbitrary hash collision requires only approximately 2^(n/2) operations instead of 2^n for an n-bit hash?",
    "options": [
      "The Birthday Paradox (Birthday Attack)",
      "Euler's Totient Theorem",
      "The Chinese Remainder Theorem",
      "Fermat's Little Theorem"
    ],
    "answer": 0,
    "explanation": "The Birthday Paradox shows that in a group of 23 people, there is a >50% chance two share a birthday. In hashing, searching for ANY collision reduces complexity to the square-root bound: 2^(n/2)."
  },
  {
    "id": 77,
    "question": "What output digest length is produced by the Message Digest 5 (MD5 / RFC 1321) algorithm, which is now considered cryptographically broken?",
    "options": [
      "128 bits (32 hexadecimal characters)",
      "160 bits",
      "256 bits",
      "512 bits"
    ],
    "answer": 0,
    "explanation": "MD5 produces a 128-bit digest. Due to collision attacks that can generate colliding files in seconds on a laptop, MD5 is strictly prohibited for security certificates and signatures."
  },
  {
    "id": 78,
    "question": "In 2017, what landmark research attack conducted by Google and CWI Amsterdam produced the world's first practical collision against SHA-1?",
    "options": [
      "The SHAttered Attack",
      "The POODLE Attack",
      "The Heartbleed Exploit",
      "The Sweet32 Attack"
    ],
    "answer": 0,
    "explanation": "The SHAttered attack produced two distinct PDF documents with different visible contents that generated the exact same SHA-1 hash (160 bits), cementing the deprecation of SHA-1."
  },
  {
    "id": 79,
    "question": "In computer forensics, why does an investigator calculate the cryptographic hash (e.g. SHA-256) of a suspect hard drive immediately after physical acquisition?",
    "options": [
      "To establish a digital fingerprint that proves in a court of law that the disk image was never altered or tampered with during analysis (Chain of Custody)",
      "To decrypt passwords on the drive",
      "To speed up hard drive reading speeds",
      "To format corrupt sectors"
    ],
    "answer": 0,
    "explanation": "Cryptographic verification ensures evidence integrity. If the verification hash computed at trial matches the acquisition hash, it proves beyond doubt that the evidence was not modified."
  },
  {
    "id": 80,
    "question": "What precomputed lookup table attack allows attackers to crack unsalted password hashes in seconds by trading offline storage space for online computing time?",
    "options": [
      "Rainbow Table Attack",
      "SQL Injection",
      "Cross-Site Scripting",
      "Buffer Overflow"
    ],
    "answer": 0,
    "explanation": "Rainbow tables use precomputed chains of hash-reduction pairs to invert unsalted hashes instantly. Adding a cryptographically random Salt to each password defeats Rainbow Tables completely."
  },
  {
    "id": 81,
    "question": "Which hash algorithm family was designed by the NSA to replace SHA-1, standardized in FIPS 180-4, and includes SHA-256 and SHA-512?",
    "options": [
      "SHA-2",
      "SHA-3",
      "MD5",
      "RIPEMD"
    ],
    "answer": 0,
    "explanation": "The SHA-2 family includes SHA-224, SHA-256, SHA-384, and SHA-512. It remains the dominant enterprise hashing standard worldwide."
  },
  {
    "id": 82,
    "question": "What vulnerability plagues hash functions based on the Merkle-Damgard construction (MD5, SHA-1, SHA-256) when used naively as MAC = Hash(Secret || Message)?",
    "options": [
      "Length Extension Attack",
      "Buffer Overflow Attack",
      "Padding Oracle Attack",
      "Meet-in-the-Middle Attack"
    ],
    "answer": 0,
    "explanation": "In Merkle-Damgard hashes, the output hash represents the internal state. An attacker who knows Hash(Secret || Message) and the secret length can append data and calculate the valid hash without knowing the secret."
  },
  {
    "id": 83,
    "question": "What standardized mechanism (RFC 2104) defeats length-extension attacks by computing a nested hash with inner and outer padding keys?",
    "options": [
      "HMAC (Hash-based Message Authentication Code)",
      "ECB Mode",
      "AES-CTR",
      "RSA-OAEP"
    ],
    "answer": 0,
    "explanation": "HMAC computes Hash((Key XOR opad) || Hash((Key XOR ipad) || Message)). Because the inner hash output is hashed a second time, length extension attacks are mathematically impossible."
  },
  {
    "id": 84,
    "question": "What cryptographic security goals are simultaneously achieved when two communicating systems exchange messages accompanied by an HMAC tag?",
    "options": [
      "Data Integrity AND Message Origin Authentication",
      "Confidentiality and Encryption",
      "Non-repudiation in court",
      "Public Key Distribution"
    ],
    "answer": 0,
    "explanation": "HMAC guarantees that the message was not modified in transit (Integrity) and that it was generated by someone who possesses the shared secret key (Authentication)."
  },
  {
    "id": 85,
    "question": "What revolutionary architectural design is utilized by the SHA-3 (Keccak / FIPS 202) hashing standard, fundamentally differing from Merkle-Damgard hashes?",
    "options": [
      "The Sponge Construction",
      "The Feistel Network",
      "The Substitution-Permutation Network",
      "The Shift Register Generator"
    ],
    "answer": 0,
    "explanation": "SHA-3 is based on Keccak's Sponge Construction operating on a 1600-bit state permutation array, completely discarding the Merkle-Damgard block-chaining model."
  },
  {
    "id": 86,
    "question": "What are the two continuous operational phases in the SHA-3 Keccak Sponge Construction?",
    "options": [
      "The Absorbing Phase (absorbing input blocks into the state) and the Squeezing Phase (extracting output digest bits)",
      "The Encryption Phase and Decryption Phase",
      "The Expansion Phase and Compression Phase",
      "The Substitution Phase and Permutation Phase"
    ],
    "answer": 0,
    "explanation": "In the Absorbing phase, message blocks are XORed into the internal state and permuted. In the Squeezing phase, output bits are read from the state until the requested digest length is reached."
  },
  {
    "id": 87,
    "question": "Why is SHA-3 inherently immune to Length Extension Attacks without requiring nested HMAC constructions?",
    "options": [
      "Because only a portion of the internal 1600-bit state is squeezed to the output; the remaining capacity bits are hidden from the attacker",
      "Because SHA-3 does not allow messages longer than 1 MB",
      "Because SHA-3 uses asymmetric private keys",
      "Because SHA-3 operates only in RAM"
    ],
    "answer": 0,
    "explanation": "In the Sponge construction, the state is split into bitrate r and capacity c. The capacity bits are never revealed in the output digest, preventing an attacker from reconstructing the state."
  },
  {
    "id": 88,
    "question": "Why is it dangerously insecure to store user account passwords using fast general-purpose cryptographic hashes like SHA-256 or MD5?",
    "options": [
      "Because modern GPU clusters and ASICs can compute tens of billions of SHA-256 hashes per second, allowing rapid offline brute-force cracking",
      "Because SHA-256 loses passwords after 30 days",
      "Because SHA-256 cannot hash special characters",
      "Because SHA-256 requires root permissions"
    ],
    "answer": 0,
    "explanation": "Fast hash functions are engineered for high-throughput file verification. For passwords, high speed benefits the attacker. Password storage mandates slow, computationally intensive Key Derivation Functions (KDFs)."
  },
  {
    "id": 89,
    "question": "What memory-hard password hashing algorithm, developed by Alex Biryukov and winner of the Password Hashing Competition (PHC), is recommended for modern password storage?",
    "options": [
      "Argon2 (specifically Argon2id)",
      "MD5",
      "SHA-1",
      "CRC32"
    ],
    "answer": 0,
    "explanation": "Argon2id combines resistance to side-channel cache attacks with memory-hardness, filling large chunks of RAM to defeat massively parallel GPU and ASIC cracking hardware."
  },
  {
    "id": 90,
    "question": "In secure password storage, what is the distinction between a 'Salt' and a 'Pepper'?",
    "options": [
      "A Salt is a unique random string stored openly alongside the hash in the database; a Pepper is a secret key stored separately outside the database (e.g. in an HSM or config file)",
      "A Salt is used for symmetric ciphers; a Pepper is used for asymmetric ciphers",
      "A Salt is encrypted; a Pepper is plain text",
      "A Salt expires every year; a Pepper never expires"
    ],
    "answer": 0,
    "explanation": "Salts are public and unique per user to defeat precomputed Rainbow Tables. Peppers are secret master keys stored in secure key vaults, ensuring that even if the database is leaked, hashes cannot be cracked offline."
  },
  {
    "id": 91,
    "question": "What is the formal definition of 'Cryptanalysis' in cybersecurity?",
    "options": [
      "The science and art of deciphering ciphertext or breaking cryptographic security without having prior access to the secret key",
      "The process of creating new encryption algorithms",
      "The hardware design of microprocessors",
      "The legal prosecution of hackers"
    ],
    "answer": 0,
    "explanation": "Cryptanalysis is the study of mathematical and operational techniques for finding weaknesses in ciphers, defeating encryption, and recovering secret keys or plaintexts."
  },
  {
    "id": 92,
    "question": "In cryptanalysis attack models, what is a 'Ciphertext-Only Attack' (COA)?",
    "options": [
      "An attack where the adversary has access strictly to captured ciphertext strings, with no knowledge of the underlying plaintext",
      "An attack where the adversary has the secret key",
      "An attack where the adversary can choose what messages are encrypted",
      "An attack where the adversary decrypts messages using hardware probes"
    ],
    "answer": 0,
    "explanation": "Ciphertext-Only Attack is the most restrictive threat model: the attacker only sees the intercepted encrypted messages and must rely on statistical flaws or entropy analysis."
  },
  {
    "id": 93,
    "question": "What cryptanalytic attack model assumes the attacker possesses both the ciphertext and its corresponding original plaintext for one or more messages?",
    "options": [
      "Known-Plaintext Attack (KPA)",
      "Ciphertext-Only Attack",
      "Brute Force Attack",
      "Social Engineering"
    ],
    "answer": 0,
    "explanation": "In a Known-Plaintext Attack (KPA), the attacker has access to matching plaintext-ciphertext pairs (e.g. standard headers, known file footers) to deduce the secret key."
  },
  {
    "id": 94,
    "question": "What attack model allows the cryptanalyst to feed arbitrary plaintexts of their choice into an encryption engine and inspect the resulting ciphertexts?",
    "options": [
      "Chosen-Plaintext Attack (CPA)",
      "Known-Plaintext Attack",
      "Ciphertext-Only Attack",
      "Shoulder Surfing"
    ],
    "answer": 0,
    "explanation": "In a Chosen-Plaintext Attack (CPA), the attacker chooses specific plaintexts to be encrypted (e.g., differential cryptanalysis analyzing how bit differences propagate through rounds)."
  },
  {
    "id": 95,
    "question": "What attack model allows the cryptanalyst to submit chosen ciphertexts to a decryption oracle and observe the resulting plaintexts or error messages?",
    "options": [
      "Chosen-Ciphertext Attack (CCA)",
      "Ciphertext-Only Attack",
      "Known-Plaintext Attack",
      "Traffic Analysis"
    ],
    "answer": 0,
    "explanation": "In a Chosen-Ciphertext Attack (CCA), the attacker can probe a decryption oracle. Padding Oracle attacks (POODLE, Bleichenbacher) are practical real-world CCA exploits."
  },
  {
    "id": 96,
    "question": "What classical cryptanalytic technique breaks simple monoalphabetic substitution ciphers (e.g. Caesar, simple substitution) by analyzing the occurrence rates of characters?",
    "options": [
      "Frequency Analysis",
      "Differential Cryptanalysis",
      "Linear Cryptanalysis",
      "Integral Cryptanalysis"
    ],
    "answer": 0,
    "explanation": "Frequency Analysis exploits the fact that natural human languages have non-uniform letter distributions (in English, 'E' appears ~12.7%, followed by 'T', 'A', 'O', 'I', 'N')."
  },
  {
    "id": 97,
    "question": "What cryptanalytic method, developed by Friedrich Kasiski in 1863, deduces the keyword length of polyalphabetic ciphers (like Vigenere) by measuring distances between repeated ciphertext strings?",
    "options": [
      "The Kasiski Examination (or Kasiski Test)",
      "Frequency Analysis",
      "Meet-in-the-Middle Attack",
      "Birthday Attack"
    ],
    "answer": 0,
    "explanation": "The Kasiski Examination identifies repeated words in ciphertext. The Greatest Common Divisor (GCD) of the distances between these repetitions reveals the repeating keyword length."
  },
  {
    "id": 98,
    "question": "What is an 'Exhaustive Key Search' (Brute-Force Attack) in cryptanalysis?",
    "options": [
      "Systematically testing every possible key in the cipher's key space until the correct plaintext is revealed",
      "Guessing the password by calling the victim",
      "Listening to keyboard strokes using a microphone",
      "Injecting faults into CPU power lines"
    ],
    "answer": 0,
    "explanation": "Brute-force testing systematically iterates through all 2^k possible keys. For DES (2^56 keys), it took 22 hours in 1999; for AES-128 (2^128 keys), it would take trillions of years."
  },
  {
    "id": 99,
    "question": "What category of cryptanalytic attack does NOT target mathematical algorithms, but instead measures physical emissions—such as execution time, power consumption (DPA), or electromagnetic radiation—from hardware chips?",
    "options": [
      "Side-Channel Attack",
      "Man-in-the-Middle Attack",
      "Replay Attack",
      "Dictionary Attack"
    ],
    "answer": 0,
    "explanation": "Side-Channel Attacks (e.g. Differential Power Analysis DPA, timing attacks, acoustic cryptanalysis) extract secret keys by monitoring physical hardware characteristics during cryptographic execution."
  },
  {
    "id": 100,
    "question": "What humorous cryptanalytic term describes extracting cryptographic keys through physical coercion, bribery, extortion, or legal compulsion rather than mathematical attack?",
    "options": [
      "Rubber-Hose Cryptanalysis",
      "Cold-Boot Attack",
      "Evil Maid Attack",
      "Shoulder Surfing"
    ],
    "answer": 0,
    "explanation": "Rubber-Hose Cryptanalysis refers to compelling a person holding the key to surrender it via physical coercion, interrogation, or threat, highlighting that humans are often the weakest security link."
  },
  {
    "id": 101,
    "question": "What core security services are simultaneously established by an Asymmetric Digital Signature?",
    "options": [
      "Confidentiality, Traffic Padding, and Speed",
      "Signer Authentication, Data Integrity, and Non-Repudiation",
      "Network Routing and Bandwidth Allocation",
      "Automatic Password Recovery"
    ],
    "answer": 1,
    "explanation": "A digital signature guarantees who created the message (Authentication), proves the content has not changed (Integrity), and legally prevents the signer from denying it (Non-repudiation)."
  },
  {
    "id": 102,
    "question": "In a standard Digital Signature scheme, what cryptographic key is used by the SENDER to create the signature?",
    "options": [
      "The sender's Private Key",
      "The sender's Public Key",
      "The recipient's Public Key",
      "A shared symmetric secret key"
    ],
    "answer": 0,
    "explanation": "The sender hashes the document into a digest and encrypts the digest using their own PRIVATE KEY. Because only the sender possesses this private key, only the sender could have signed it."
  },
  {
    "id": 103,
    "question": "In a Digital Signature scheme, what key is used by the RECIPIENT to verify the validity of the signature?",
    "options": [
      "The sender's Public Key",
      "The sender's Private Key",
      "The recipient's Private Key",
      "The Root CA's private key"
    ],
    "answer": 0,
    "explanation": "Anyone in the world can verify the signature by decrypting it with the sender's PUBLIC KEY and verifying that the resulting digest matches their independently calculated document hash."
  },
  {
    "id": 104,
    "question": "Why can symmetric Message Authentication Codes (like HMAC) NOT provide legal Non-Repudiation?",
    "options": [
      "Because symmetric keys are shared equally between sender and recipient, meaning the recipient could have generated the MAC tag themselves",
      "Because HMAC tags are too short",
      "Because HMAC requires internet access to verify",
      "Because symmetric ciphers are illegal for contracts"
    ],
    "answer": 0,
    "explanation": "Because both parties hold the exact same secret key in symmetric systems, an arbitrator cannot prove whether Alice sent the message or Bob fabricated it himself."
  },
  {
    "id": 105,
    "question": "In modern RSA digital signatures, why is RSA-PSS (Probabilistic Signature Scheme / PKCS#1 v2.1) preferred over legacy PKCS#1 v1.5?",
    "options": [
      "RSA-PSS incorporates random salts into the signing process, providing provable cryptographic security reductions",
      "RSA-PSS eliminates the need for prime numbers",
      "RSA-PSS is a symmetric cipher",
      "RSA-PSS keys never expire"
    ],
    "answer": 0,
    "explanation": "RSA-PSS adds randomized salt before hashing, eliminating mathematical structure in the signature and providing provable security against chosen-message forgery attacks."
  },
  {
    "id": 106,
    "question": "What government cryptographic standard, defined in FIPS 186 by NIST, introduced the standalone Digital Signature Algorithm based on discrete logarithms in modular sub-groups?",
    "options": [
      "DSA (Digital Signature Algorithm)",
      "DES",
      "AES",
      "MD5"
    ],
    "answer": 0,
    "explanation": "NIST standardized DSA in FIPS 186 in 1991. It provides digital signatures exclusively (cannot be used for encryption), based on the discrete logarithm problem."
  },
  {
    "id": 107,
    "question": "What digital signature algorithm adapts DSA to elliptic curves, providing high-speed signatures with drastically shorter key lengths?",
    "options": [
      "ECDSA (Elliptic Curve Digital Signature Algorithm)",
      "RC4",
      "3DES",
      "Blowfish"
    ],
    "answer": 0,
    "explanation": "ECDSA combines the efficiency of elliptic curves with digital signatures. A 256-bit ECDSA key offers equivalent security strength to a 3072-bit legacy RSA key."
  },
  {
    "id": 108,
    "question": "Why must digital signatures be calculated over the cryptographic HASH of a document rather than encrypting the entire raw document?",
    "options": [
      "Asymmetric operations on large files are computationally expensive, and asymmetric algorithms can only encrypt blocks smaller than the modulus n",
      "Because hashing makes the document unreadable",
      "Because private keys can only sign 8 bytes at a time",
      "Because raw documents contain viruses"
    ],
    "answer": 0,
    "explanation": "Asymmetric math is slow. Hashing compresses arbitrary-length files into a fixed 256-bit digest, which is fast to sign and fits neatly into the asymmetric algorithm's block size."
  },
  {
    "id": 109,
    "question": "What modern signature algorithm over Curve25519 (EdDSA) is designed to operate in strict constant time, completely preventing side-channel cache-timing attacks?",
    "options": [
      "Ed25519",
      "RSA-512",
      "DES-Sign",
      "MD5-MAC"
    ],
    "answer": 0,
    "explanation": "Ed25519 (RFC 8032) delivers blindingly fast signature generation and verification while avoiding secret-dependent memory lookups and conditional branches, eliminating timing leaks."
  },
  {
    "id": 110,
    "question": "Under Section 3 and Section 2(1)(p) of India's Information Technology (IT) Act 2000, how is a legal 'Digital Signature' formally authenticated?",
    "options": [
      "By using an asymmetric crypto-system and a hash function that envelops the electronic record",
      "By typing one's name in cursive font at the bottom of an email",
      "By scanning a handwritten paper signature into a JPEG file",
      "By entering a phone number in an online form"
    ],
    "answer": 0,
    "explanation": "The IT Act 2000 legally defines digital signatures as authentication of electronic records using an asymmetric cryptosystem and hash function, ensuring integrity and identity verification."
  },
  {
    "id": 111,
    "question": "What is the primary role of a Public Key Digital Certificate in internet communications?",
    "options": [
      "To cryptographically bind an entity's identity (domain name or person) to their verified public key, digitally signed by a trusted Certifying Authority",
      "To encrypt hard drive sectors on local computers",
      "To generate passwords for Wi-Fi routers",
      "To act as a license for web design software"
    ],
    "answer": 0,
    "explanation": "A digital certificate acts as an electronic passport: it proves that a given public key legitimately belongs to the specific domain or organization named in the certificate."
  },
  {
    "id": 112,
    "question": "What international standard (formulated by the ITU-T and IETF) defines the universal format, fields, and encoding for public-key digital certificates?",
    "options": [
      "ITU-T X.509 Standard (RFC 5280)",
      "ISO 27001",
      "IEEE 802.11",
      "RFC 1918"
    ],
    "answer": 0,
    "explanation": "The X.509 v3 standard defines the universal schema for certificates used in TLS/HTTPS, S/MIME secure email, IPsec, and code signing."
  },
  {
    "id": 113,
    "question": "Which of the following is NOT a mandatory standard field found within an ITU-T X.509 v3 digital certificate?",
    "options": [
      "The Subject's Private Decryption Key",
      "Serial Number",
      "Issuer (Certifying Authority name)",
      "Validity Period (Not Before / Not After)"
    ],
    "answer": 0,
    "explanation": "Private keys are NEVER included in a digital certificate. Certificates contain only the Subject's PUBLIC key, identity metadata, and the CA's digital signature."
  },
  {
    "id": 114,
    "question": "What critical extension in X.509 v3 certificates allows a single certificate to secure multiple distinct domain names and subdomains (e.g. example.com, api.example.com)?",
    "options": [
      "Subject Alternative Name (SAN) Extension",
      "Basic Constraints Extension",
      "Key Usage Extension",
      "Extended Key Usage (EKU)"
    ],
    "answer": 0,
    "explanation": "The SAN extension (RFC 5280) replaces legacy Common Name (CN) matching, allowing multiple Fully Qualified Domain Names (FQDNs) and IP addresses to share one certificate."
  },
  {
    "id": 115,
    "question": "In Public Key Infrastructure (PKI), what is a 'Chain of Trust' (Certificate Hierarchy)?",
    "options": [
      "A hierarchical sequence of certificates from the end-entity certificate through intermediate CAs to a pre-installed, trusted Root CA",
      "A chain of symmetric passwords",
      "A series of firewall rules connecting servers",
      "A blockchain of Bitcoin transactions"
    ],
    "answer": 0,
    "explanation": "Trust chains allow a browser to verify an end-entity certificate signed by an Intermediate CA whose own certificate is signed by a trusted Root CA stored in the operating system's trust store."
  },
  {
    "id": 116,
    "question": "What is a 'Certificate Revocation List' (CRL) in PKI management?",
    "options": [
      "A periodically published, digitally signed file listing the serial numbers of revoked digital certificates that should no longer be trusted",
      "A list of blocked IP addresses",
      "A directory of expired credit cards",
      "A registry of compromised router MAC addresses"
    ],
    "answer": 0,
    "explanation": "A CRL is published periodically by a CA. When a private key is leaked or an employee leaves, the certificate serial number is posted on the CRL to alert clients."
  },
  {
    "id": 117,
    "question": "What lightweight protocol (RFC 6960) allows web browsers to check the revocation status of a specific digital certificate in real time without downloading huge CRL files?",
    "options": [
      "OCSP (Online Certificate Status Protocol)",
      "DNSSEC",
      "SNMP",
      "NTP"
    ],
    "answer": 0,
    "explanation": "OCSP allows a client to query the CA directly: 'Is certificate #12345 revoked?'. The CA immediately responds with 'good', 'revoked', or 'unknown'."
  },
  {
    "id": 118,
    "question": "What performance and privacy optimization allows a web server to periodically query the CA and attach the cached, CA-signed OCSP response directly to the TLS handshake?",
    "options": [
      "OCSP Stapling (TLS Certificate Status Request)",
      "DNS Zone Transfer",
      "HTTP Strict Transport Security",
      "Certificate Pinning"
    ],
    "answer": 0,
    "explanation": "OCSP Stapling eliminates the browser connection to the CA, preventing performance bottlenecks and preventing the CA from monitoring what websites users visit."
  },
  {
    "id": 119,
    "question": "What security transparency framework (RFC 6962) requires all commercial CAs to log newly issued SSL/TLS certificates into public, append-only, cryptographic audit logs?",
    "options": [
      "Certificate Transparency (CT)",
      "DNSSEC",
      "Domain Name System",
      "WHOIS"
    ],
    "answer": 0,
    "explanation": "Certificate Transparency requires all issued certificates to be appended to publicly verifiable Merkle tree logs, allowing domain owners to detect unauthorized or rogue certificates."
  },
  {
    "id": 120,
    "question": "What DNS Resource Record allows domain owners to explicitly declare which specific Certificate Authorities (CAs) are permitted to issue certificates for their domain?",
    "options": [
      "CAA (Certification Authority Authorization) Record",
      "MX Record",
      "CNAME Record",
      "PTR Record"
    ],
    "answer": 0,
    "explanation": "A DNS CAA record (e.g. example.com. CAA 0 issue 'letsencrypt.org') instructs CAs to verify permission before issuing a certificate, stopping unauthorized issuance."
  },
  {
    "id": 121,
    "question": "What is the formal definition and primary objective of 'Steganalysis' in cyber forensics?",
    "options": [
      "The forensic science of discovering, detecting, extracting, or destroying concealed data hidden inside carrier files without knowing the stego-key",
      "The process of cracking Wi-Fi passwords",
      "The analysis of network latency",
      "The reverse engineering of hardware chips"
    ],
    "answer": 0,
    "explanation": "Steganalysis is the counter-discipline to steganography: analyzing suspect multimedia files or network streams to determine if hidden communication is taking place."
  },
  {
    "id": 122,
    "question": "In steganalysis, what is the distinction between 'Targeted Steganalysis' and 'Blind (Universal) Steganalysis'?",
    "options": [
      "Targeted steganalysis exploits known mathematical quirks of a specific embedding tool (e.g. LSB in BMP); Blind steganalysis uses generalized statistical anomaly detection across unknown algorithms",
      "Targeted steganalysis is legal; Blind steganalysis is illegal",
      "Targeted steganalysis is used for text; Blind steganalysis is used for audio",
      "Targeted steganalysis requires supercomputers; Blind steganalysis runs on mobile phones"
    ],
    "answer": 0,
    "explanation": "Targeted attacks look for the specific fingerprint of a known tool (e.g. Jsteg). Blind/universal attacks evaluate general image features and train machine-learning classifiers to spot anomalies."
  },
  {
    "id": 123,
    "question": "What visual steganalysis technique inspects individual bit planes of an image to spot unnatural structural patterns or uniform white noise in the least significant bit plane?",
    "options": [
      "Bit-Plane Slicing (Bit-Plane Analysis)",
      "Color Inversion",
      "Histogram Equalization",
      "Contrast Stretching"
    ],
    "answer": 0,
    "explanation": "Bit-plane slicing isolates the 0th bit of every pixel. In a clean image, the LSB plane looks like random organic noise. When structured data is embedded sequentially, visible outlines appear."
  },
  {
    "id": 124,
    "question": "What statistical steganalysis attack, pioneered by Westfeld and Pfitzmann, analyzes Pairs of Values (PoVs, e.g. 2k and 2k+1) in pixel histograms to detect LSB replacement?",
    "options": [
      "The Chi-Square (Chi-Square) Attack",
      "The Birthday Attack",
      "The Meet-in-the-Middle Attack",
      "The Dictionary Attack"
    ],
    "answer": 0,
    "explanation": "Under sequential LSB replacement, adjacent color values (like 12 and 13) exchange frequencies and tend to equalize. A Chi-Square statistical test detects this unnatural balance."
  },
  {
    "id": 125,
    "question": "What advanced spatial domain steganalysis technique evaluates sample pairs of adjacent pixels to estimate the exact hidden message length with high mathematical precision?",
    "options": [
      "Sample Pair Analysis (SPA)",
      "Fourier Transform",
      "Parity Bit Check",
      "Huffman Decoding"
    ],
    "answer": 0,
    "explanation": "Sample Pair Analysis (SPA) analyzes finite state transitions among pixel pairs, measuring how LSB embedding perturbs spatial correlation to calculate embedded payload length."
  },
  {
    "id": 126,
    "question": "Which of the following is a renowned open-source forensic tool used by investigators to analyze image bit-planes and automatically extract LSB payloads from PNG and BMP files?",
    "options": [
      "Stegsolve / zsteg",
      "Nmap",
      "Wireshark",
      "Metasploit"
    ],
    "answer": 0,
    "explanation": "Stegsolve (Java GUI) and zsteg (Ruby CLI) are standard forensic utilities for viewing bit-planes, checking color palettes, and extracting hidden LSB payloads from lossless images."
  },
  {
    "id": 127,
    "question": "Why does recompressing an image into lossy JPEG format (or an audio file into lossy MP3) pose a massive challenge to steganographic data recovery?",
    "options": [
      "Lossy compression algorithms mathematically discard subtle high-frequency spatial details (including modified LSBs), corrupting or destroying the embedded payload",
      "Lossy compression encrypts the files with AES",
      "Lossy compression changes the file extension to .exe",
      "Lossy compression deletes the original author metadata"
    ],
    "answer": 0,
    "explanation": "Lossy compression quantizes frequency coefficients, wiping out subtle bit-level modifications made in the spatial domain and corrupting the concealed message."
  },
  {
    "id": 128,
    "question": "Why does pre-encrypting a secret payload before steganographic embedding create an immense hurdle for statistical steganalysis tools?",
    "options": [
      "Cryptographically secure encryption produces high-entropy pseudo-random ciphertext that statistically resembles natural camera sensor noise",
      "Encrypted files cannot be saved as images",
      "Encryption increases image file size by 500%",
      "Encryption forces the image to turn black"
    ],
    "answer": 0,
    "explanation": "Encrypted data has maximum entropy (flat byte distributions). When embedded, it blends perfectly into the natural thermal and optical noise of the digital camera sensor."
  },
  {
    "id": 129,
    "question": "In real-world enterprise digital forensics, what is the greatest practical operational obstacle when screening millions of files for steganography?",
    "options": [
      "Extremely high False-Positive rates caused by natural image sensor variations and benign graphic filters",
      "Steganography software is illegal to download",
      "Hard drives cannot store steganographic images",
      "Antivirus software blocks all image files"
    ],
    "answer": 0,
    "explanation": "Automated steganalysis algorithms frequently flag complex textures, high-ISO camera photos, or stylized graphic filters as hidden payloads, creating overwhelming false alarms."
  },
  {
    "id": 130,
    "question": "What defensive technique, known as 'Destructive Steganalysis' (or Active Warden sanitization), neutralizes potential covert communications without attempting extraction?",
    "options": [
      "Re-compressing, adding mild gaussian noise, or resizing all inbound/outbound multimedia files to scramble any fragile embedded bits",
      "Deleting all image files across the entire corporate network",
      "Formatting all hard drives daily",
      "Blocking all internet traffic"
    ],
    "answer": 0,
    "explanation": "An Active Warden sanitizes media in transit: by re-compressing JPEGs or applying minor filtering, fragile steganographic payloads are destroyed while preserving innocent visual quality."
  },
  {
    "id": 131,
    "question": "What is the primary operational distinction between a Vulnerability Assessment (VA) and a Penetration Test (PT)?",
    "options": [
      "A Vulnerability Assessment identifies and catalogs known flaws across assets WITHOUT exploiting them; a Penetration Test actively exploits flaws to prove real business impact",
      "A Vulnerability Assessment is illegal; a Penetration Test is authorized",
      "A Vulnerability Assessment tests hardware; a Penetration Test tests humans",
      "A Vulnerability Assessment takes 5 years; a Penetration Test takes 1 hour"
    ],
    "answer": 0,
    "explanation": "VA provides wide breadth, scanning IP ranges to list missing patches without exploiting them. PT provides depth, simulating an attacker by exploiting vulnerabilities to compromise systems."
  },
  {
    "id": 132,
    "question": "What penetration testing engagement model provides the security tester with ZERO prior knowledge of internal networks, architecture, or credentials?",
    "options": [
      "Black Box Testing (Zero-Knowledge Testing)",
      "White Box Testing",
      "Grey Box Testing",
      "Crystal Box Testing"
    ],
    "answer": 0,
    "explanation": "In Black Box testing, the tester simulates an external unauthenticated attacker, discovering everything from scratch through public reconnaissance."
  },
  {
    "id": 133,
    "question": "What penetration testing engagement model provides the security tester with COMPLETE access to source code, architecture documentation, network diagrams, and administrative credentials?",
    "options": [
      "White Box Testing (Full-Knowledge Testing)",
      "Black Box Testing",
      "Blind Testing",
      "Double-Blind Testing"
    ],
    "answer": 0,
    "explanation": "White Box testing simulates an insider threat, malicious developer, or advanced adversary with internal access, enabling comprehensive code review and architecture auditing."
  },
  {
    "id": 134,
    "question": "Under global cybersecurity standards maintained by MITRE, what is the exact difference between a 'Weakness' (CWE) and a 'Vulnerability' (CVE)?",
    "options": [
      "A Weakness (CWE) is a conceptual flaw type or design bug in software; a Vulnerability (CVE) is a specific, instantiated occurrence of a flaw in a concrete software product that enables exploit",
      "A Weakness is in hardware; a Vulnerability is in software",
      "A Weakness is public; a Vulnerability is secret",
      "CWE is for Windows; CVE is for Linux"
    ],
    "answer": 0,
    "explanation": "CWE defines flaw types (e.g., CWE-89 is SQL Injection). CVE catalogs a specific real-world instance in a product (e.g., CVE-2021-44228 in Log4j)."
  },
  {
    "id": 135,
    "question": "In vulnerability management terminology, what is an 'Exploit'?",
    "options": [
      "A piece of software, script, or sequence of commands that takes advantage of a vulnerability to cause unintended behavior or unauthorized access",
      "The price of a software license",
      "A backup file stored in the cloud",
      "A firewall configuration rule"
    ],
    "answer": 0,
    "explanation": "An exploit is the weaponized payload or technique that turns a theoretical vulnerability into actual compromise (e.g. executing arbitrary code or elevating privileges)."
  },
  {
    "id": 136,
    "question": "In cybersecurity terminology, what is a 'Security Exposure'?",
    "options": [
      "A system configuration issue or mistake that exposes an organization to increased attack risk (e.g. default passwords, open administrative ports, unencrypted protocols)",
      "A physical breach of a server room door",
      "A stolen laptop reported to police",
      "A marketing press release"
    ],
    "answer": 0,
    "explanation": "An exposure is not necessarily a software code bug, but an operational configuration weakness (like leaving Telnet open or default passwords intact) that enables compromise."
  },
  {
    "id": 137,
    "question": "In information security risk management, what is the fundamental mathematical relationship connecting Risk, Threat, Vulnerability, and Impact?",
    "options": [
      "Risk = Threat x Vulnerability x Impact (or Likelihood x Impact)",
      "Risk = Threat + Vulnerability - Impact",
      "Risk = Vulnerability / Threat",
      "Risk = Threat + Impact"
    ],
    "answer": 0,
    "explanation": "Risk is the product of Threat (adversary capability), Vulnerability (flaw), and Impact (damage). If Vulnerability is eliminated (patched), Risk drops to zero."
  },
  {
    "id": 138,
    "question": "What critical legal document, signed before any penetration test commences, specifies target IP ranges, prohibited techniques, allowed testing windows, and emergency escalation contacts?",
    "options": [
      "Rules of Engagement (ROE) / Scope Document",
      "Non-Disclosure Agreement only",
      "Software End User License Agreement (EULA)",
      "Hardware Warranty Certificate"
    ],
    "answer": 0,
    "explanation": "The Rules of Engagement (ROE) establishes the legal boundaries and scope of the test, protecting testers from criminal prosecution and ensuring client production systems are not damaged."
  },
  {
    "id": 139,
    "question": "What is 'Attack Surface Reduction' (ASR) in defensive system hardening?",
    "options": [
      "Disabling unnecessary network services, closing unused ports, uninstalling redundant software, and enforcing strict firewall rules to minimize potential entry points",
      "Buying larger monitor screens",
      "Increasing the number of admin accounts",
      "Disabling system antivirus"
    ],
    "answer": 0,
    "explanation": "Attack Surface Reduction shrinks the total number of vulnerable points an attacker could probe by removing unneeded services, closing idle ports, and restricting interfaces."
  },
  {
    "id": 140,
    "question": "In vulnerability management, what is the difference between a False Positive and a False Negative?",
    "options": [
      "A False Positive incorrectly flags a vulnerability where none exists; a False Negative fails to detect a real vulnerability that actually exists",
      "A False Positive is a virus; a False Negative is a firewall",
      "A False Positive is an external scan; a False Negative is an internal scan",
      "There is no difference"
    ],
    "answer": 0,
    "explanation": "False Positives waste remediation time by sounding false alarms. False Negatives are far more dangerous, leaving real vulnerabilities undetected and exposed to attackers."
  },
  {
    "id": 141,
    "question": "What broad category of software vulnerabilities occurs when an application accepts input from external sources without sufficient validation, filtering, or encoding?",
    "options": [
      "Input Validation Vulnerabilities",
      "Hardware Power Glitches",
      "Cable Sniffing Vulnerabilities",
      "Cooling System Failures"
    ],
    "answer": 0,
    "explanation": "Input validation flaws represent the root cause of the most pervasive cyber attacks (including SQL Injection, Cross-Site Scripting, and Command Injection)."
  },
  {
    "id": 142,
    "question": "What vulnerability (CWE-89) occurs when untrusted user input is directly concatenated into a database query string, allowing attackers to manipulate query logic?",
    "options": [
      "SQL Injection (SQLi)",
      "Cross-Site Scripting",
      "Buffer Overflow",
      "Clickjacking"
    ],
    "answer": 0,
    "explanation": "SQL Injection occurs when user input is treated as SQL code by the database parser, allowing attackers to bypass authentication (' OR '1'='1) or dump tables."
  },
  {
    "id": 143,
    "question": "What is the primary, industry-standard architectural defense against SQL Injection vulnerabilities?",
    "options": [
      "Parameterized Queries (Prepared Statements) with bind variables",
      "Installing larger database hard drives",
      "Using MD5 hashing on table names",
      "Hiding database error messages only"
    ],
    "answer": 0,
    "explanation": "Prepared Statements separate SQL query structure from user data. The database treats input purely as literal parameter values, making SQL command execution impossible."
  },
  {
    "id": 144,
    "question": "What vulnerability (CWE-79) occurs when a web application includes unsanitized user-supplied data in a web page sent to other users, allowing malicious scripts to execute in their browsers?",
    "options": [
      "Cross-Site Scripting (XSS)",
      "SQL Injection",
      "Buffer Overflow",
      "Server-Side Request Forgery"
    ],
    "answer": 0,
    "explanation": "Cross-Site Scripting (XSS) allows attackers to inject malicious client-side JavaScript that executes in the context of the victim's session, stealing session cookies and tokens."
  },
  {
    "id": 145,
    "question": "What type of Cross-Site Scripting (XSS) occurs when malicious JavaScript is permanently saved into a backend database (e.g. comment forum, user profile) and delivered to all visitors?",
    "options": [
      "Stored (Persistent) XSS",
      "Reflected (Non-Persistent) XSS",
      "DOM-based XSS",
      "Self-XSS"
    ],
    "answer": 0,
    "explanation": "Stored XSS is the most dangerous form: the payload is saved permanently on the server and executed automatically whenever any user views the affected page."
  },
  {
    "id": 146,
    "question": "What vulnerability (CWE-78) occurs when an application executes arbitrary operating system commands by concatenating user input directly into system shell calls (e.g. system(), exec())?",
    "options": [
      "OS Command Injection",
      "Cross-Site Request Forgery",
      "Directory Traversal",
      "Clickjacking"
    ],
    "answer": 0,
    "explanation": "OS Command Injection allows an attacker to append shell metacharacters (e.g., ; ls -la or | whoami) to execute unauthorized operating system commands on the host server."
  },
  {
    "id": 147,
    "question": "What vulnerability (CWE-22) allows an attacker to access arbitrary files on the server file system outside the intended web root directory by supplying dot-dot-slash (../) sequences?",
    "options": [
      "Path Traversal (Directory Traversal)",
      "SQL Injection",
      "Buffer Overflow",
      "Cross-Site Scripting"
    ],
    "answer": 0,
    "explanation": "Path Traversal uses ../ sequences (e.g. ../../../etc/passwd) to break out of the document root and view sensitive operating system files."
  },
  {
    "id": 148,
    "question": "What memory corruption vulnerability (CWE-120) occurs when an application writes more data to a memory buffer than it was allocated to hold, overflowing into adjacent memory?",
    "options": [
      "Buffer Overflow",
      "SQL Injection",
      "Cross-Site Scripting",
      "Broken Object Level Authorization"
    ],
    "answer": 0,
    "explanation": "A Buffer Overflow writes past the buffer boundary. In C/C++ applications lacking boundary checks, an attacker can overwrite the saved function return address to hijack control flow."
  },
  {
    "id": 149,
    "question": "What compiler and operating system security mitigation places a random, unpredictable integer value on the stack frame immediately before the return address to detect buffer overflows?",
    "options": [
      "Stack Canary (Stack Cookie)",
      "ASLR",
      "DEP",
      "WORM"
    ],
    "answer": 0,
    "explanation": "Stack Canaries are placed before the return address. Before a function returns, the canary is checked; if it was overwritten by an overflow, the program terminates immediately."
  },
  {
    "id": 150,
    "question": "What operating system security feature randomizes the base virtual memory addresses of the stack, heap, and loaded libraries on every program execution to prevent predictable exploits?",
    "options": [
      "Address Space Layout Randomization (ASLR)",
      "Data Execution Prevention (DEP)",
      "Stack Canaries",
      "Control Flow Guard"
    ],
    "answer": 0,
    "explanation": "ASLR randomizes memory positions on every boot/execution, making it impossible for an attacker to reliably jump to hardcoded memory addresses."
  },
  {
    "id": 151,
    "question": "What web/API vulnerability occurs when an application exposes a direct reference to an internal database object (e.g. /api/user/1004) without verifying that the requesting user owns that object?",
    "options": [
      "Insecure Direct Object Reference (IDOR / BOLA - Broken Object Level Authorization)",
      "SQL Injection",
      "Cross-Site Scripting",
      "Buffer Overflow"
    ],
    "answer": 0,
    "explanation": "IDOR (or BOLA, ranked #1 in OWASP API Top 10) allows an attacker to change an ID parameter in an API request and access other users' private accounts without authorization."
  },
  {
    "id": 152,
    "question": "What category of vulnerabilities encompasses flaws in credential management, such as permitting weak passwords, failing to invalidate session tokens on logout, or lacking rate-limiting on login forms?",
    "options": [
      "Broken Authentication and Session Management",
      "Hardware Power Glitching",
      "Memory Leaks",
      "Physical Cable Sniffing"
    ],
    "answer": 0,
    "explanation": "Broken Authentication allows attackers to compromise passwords, session tokens, or keys to assume the identities of other users (leading to credential stuffing and account takeover)."
  },
  {
    "id": 153,
    "question": "What attack (CWE-352) tricks an authenticated victim's browser into executing unwanted actions (e.g. changing an email or transferring funds) on a vulnerable trusted web application?",
    "options": [
      "Cross-Site Request Forgery (CSRF)",
      "SQL Injection",
      "Buffer Overflow",
      "Server-Side Request Forgery"
    ],
    "answer": 0,
    "explanation": "CSRF exploits the browser's automatic inclusion of session cookies with cross-site requests. Mitigated using Anti-CSRF synchronizer tokens and SameSite cookie attributes (SameSite=Strict/Lax)."
  },
  {
    "id": 154,
    "question": "What vulnerability (CWE-918) occurs when a web application takes a user-supplied URL and makes a backend server-side request to that URL without validation, allowing attackers to access internal cloud metadata (169.254.169.254)?",
    "options": [
      "Server-Side Request Forgery (SSRF)",
      "Cross-Site Scripting",
      "Path Traversal",
      "Command Injection"
    ],
    "answer": 0,
    "explanation": "SSRF tricks the backend server into acting as a proxy to probe internal private networks or steal cloud credentials from instance metadata endpoints (169.254.169.254)."
  },
  {
    "id": 155,
    "question": "Which of the following is a classic example of a 'Security Misconfiguration' vulnerability under the OWASP Top 10?",
    "options": [
      "Leaving default administrative passwords enabled, keeping unnecessary debug features active, or exposing directory listings",
      "Using AES-256 for database encryption",
      "Enforcing Multi-Factor Authentication",
      "Applying security patches within 24 hours"
    ],
    "answer": 0,
    "explanation": "Security Misconfiguration happens when systems are deployed with default accounts, unneeded sample files, open administrative ports, or verbose error messages showing stack traces."
  },
  {
    "id": 156,
    "question": "What vulnerability occurs when an application transmits sensitive data (such as passwords or credit cards) in cleartext over unencrypted protocols (e.g. HTTP, Telnet, FTP)?",
    "options": [
      "Cryptographic Failure / Sensitive Data Exposure",
      "Buffer Overflow",
      "Cross-Site Scripting",
      "SQL Injection"
    ],
    "answer": 0,
    "explanation": "Transmitting sensitive data in cleartext exposes it to interception via Wi-Fi sniffing or Man-in-the-Middle attacks. Enforcing TLS 1.3 and HSTS prevents this."
  },
  {
    "id": 157,
    "question": "What concurrency flaw (CWE-367), known as a Time-of-Check to Time-of-Use (TOCTOU) vulnerability, occurs when a system's state changes between the time a permission is verified and the time the action is executed?",
    "options": [
      "Race Condition Vulnerability",
      "SQL Injection",
      "Buffer Overflow",
      "Format String Bug"
    ],
    "answer": 0,
    "explanation": "A Race Condition occurs when multiple threads or processes access shared resources concurrently. In a TOCTOU flaw, an attacker changes the file or state between the check and use operations."
  },
  {
    "id": 158,
    "question": "What web vulnerability tricks a user into clicking transparent or hidden buttons positioned over an innocent-looking website, and how is it defended against in HTTP headers?",
    "options": [
      "Clickjacking (UI Redressing); defended using X-Frame-Options: DENY and Content-Security-Policy (CSP) frame-ancestors",
      "SQL Injection; defended using firewalls",
      "Buffer Overflow; defended using ASLR",
      "ARP Spoofing; defended using HTTPS"
    ],
    "answer": 0,
    "explanation": "Clickjacking loads the target website in an invisible iframe over an attacker's page. The HTTP header X-Frame-Options: DENY (or CSP frame-ancestors 'none') stops framing entirely."
  },
  {
    "id": 159,
    "question": "What vulnerability (CWE-434) occurs when a web application allows users to upload executable files (e.g. .php, .jsp, .aspx web shells) directly into a publicly accessible web root without type validation?",
    "options": [
      "Unrestricted File Upload",
      "SQL Injection",
      "Cross-Site Scripting",
      "Clickjacking"
    ],
    "answer": 0,
    "explanation": "Unrestricted File Upload allows an attacker to upload an executable server script (web shell) and navigate to its URL, achieving immediate Remote Code Execution (RCE) on the server."
  },
  {
    "id": 160,
    "question": "What API vulnerability occurs when an application endpoint automatically binds user-supplied JSON or form parameters directly to backend database model fields without an explicit whitelist, allowing users to escalate to admin?",
    "options": [
      "Mass Assignment (Auto-Binding Vulnerability)",
      "Buffer Overflow",
      "Path Traversal",
      "Memory Corruption"
    ],
    "answer": 0,
    "explanation": "Mass Assignment occurs when modern web frameworks bind request parameters directly to object properties, allowing attackers to inject unauthorized fields like {\"is_admin\": true}."
  },
  {
    "id": 161,
    "question": "What is the primary role of the Common Vulnerabilities and Exposures (CVE) program maintained by MITRE?",
    "options": [
      "To provide a standardized, publicly accessible reference identifier and dictionary for known cybersecurity vulnerabilities",
      "To sell commercial antivirus licenses",
      "To prosecute international cyber criminals",
      "To manufacture encryption hardware"
    ],
    "answer": 0,
    "explanation": "The CVE system provides a standard identifier (e.g. CVE-2021-44228) so security researchers, vendors, and IT teams worldwide can discuss the exact same vulnerability without confusion."
  },
  {
    "id": 162,
    "question": "What is the standard naming format utilized by MITRE to catalog public cybersecurity vulnerabilities?",
    "options": [
      "CVE-YYYY-NNNNN (e.g. CVE-2021-44228)",
      "BUG-XXXX-YYYY",
      "EXPLOIT-NNNNN",
      "VULN-YYYY-MM-DD"
    ],
    "answer": 0,
    "explanation": "CVE identifiers follow the format CVE-YYYY-NNNNN, where YYYY is the year of assignment and NNNNN is an arbitrary 4+ digit sequence number."
  },
  {
    "id": 163,
    "question": "What organizations are authorized by MITRE to assign official CVE identifiers to newly discovered software vulnerabilities in their own products?",
    "options": [
      "CVE Numbering Authorities (CNAs)",
      "Root Certificate Authorities",
      "Regional Internet Registries (RIRs)",
      "Domain Name Registrars"
    ],
    "answer": 0,
    "explanation": "CNAs (CVE Numbering Authorities) are vendors (like Microsoft, Google, Red Hat) and research institutions authorized to assign CVE numbers directly to flaws."
  },
  {
    "id": 164,
    "question": "What is the Common Vulnerability Scoring System (CVSS v3.1), and what score range does it produce?",
    "options": [
      "An open industry standard for assessing the severity of security vulnerabilities on a decimal scale from 0.0 to 10.0",
      "A scale from 1 to 100 for internet connection speed",
      "A test score for cybersecurity job applicants",
      "A hardware rating for server cooling units"
    ],
    "answer": 0,
    "explanation": "Maintained by FIRST, CVSS v3.1 evaluates vulnerability characteristics across Base, Temporal, and Environmental metric groups, producing a severity score from 0.0 to 10.0."
  },
  {
    "id": 165,
    "question": "Which of the following is an Exploitability Metric within the CVSS v3.1 Base Score group?",
    "options": [
      "Attack Vector (AV)",
      "Remediation Level (RL)",
      "Exploit Code Maturity (E)",
      "Modified Base Metrics (M)"
    ],
    "answer": 0,
    "explanation": "The CVSS Base Exploitability metrics are Attack Vector (AV), Attack Complexity (AC), Privileges Required (PR), and User Interaction (UI)."
  },
  {
    "id": 166,
    "question": "In a CVSS v3.1 vector string, what does an Attack Vector value of 'AV:N' represent?",
    "options": [
      "Network (the vulnerability is remotely exploitable across the public Internet)",
      "Adjacent (requires local Wi-Fi or subnet access)",
      "Local (requires local shell access)",
      "Physical (requires physical access to the device)"
    ],
    "answer": 0,
    "explanation": "AV:N (Network) carries the highest severity weight: the attacker can exploit the vulnerability remotely over the Internet without physical or local subnet proximity."
  },
  {
    "id": 167,
    "question": "In a CVSS v3.1 vector string, what does 'UI:R' represent?",
    "options": [
      "User Interaction: Required (a human victim must perform an action like clicking a link or downloading a file)",
      "User Interface: Responsive",
      "Universal Identity: Registered",
      "User Isolation: Redundant"
    ],
    "answer": 0,
    "explanation": "UI:R indicates that exploitation cannot succeed autonomously; a human user must be tricked into participating (e.g., clicking a phishing link in an XSS attack)."
  },
  {
    "id": 168,
    "question": "In CVSS v3.1, what does the 'Scope' (S) metric evaluate?",
    "options": [
      "Whether a vulnerability exploited in one software authority impacts resources governed by a DIFFERENT security authority (Scope Changed - S:C)",
      "The number of lines of code in the program",
      "The file size of the patch",
      "The duration of the penetration test"
    ],
    "answer": 0,
    "explanation": "Scope Changed (S:C) occurs when an exploit breaks out of its security boundary (e.g. a Virtual Machine escape escaping the guest OS to compromise the host hypervisor)."
  },
  {
    "id": 169,
    "question": "Under the qualitative severity rating scale of CVSS v3.1, what score range corresponds to a 'Critical' severity rating?",
    "options": [
      "9.0 to 10.0",
      "7.0 to 8.9",
      "4.0 to 6.9",
      "0.1 to 3.9"
    ],
    "answer": 0,
    "explanation": "CVSS ratings are: None (0.0), Low (0.1–3.9), Medium (4.0–6.9), High (7.0–8.9), and Critical (9.0–10.0). Critical vulnerabilities require emergency patching."
  },
  {
    "id": 170,
    "question": "What U.S. government database maintained by NIST provides CVSS scoring, CWE classification, and fix information for all published CVEs?",
    "options": [
      "The National Vulnerability Database (NVD)",
      "The NSA Threat Library",
      "The CIA Factbook",
      "The FBI Internet Crime Complaint Center"
    ],
    "answer": 0,
    "explanation": "The National Vulnerability Database (NVD, nvd.nist.gov) synchronizes with MITRE CVEs and provides detailed CVSS scoring, impacted software CPE strings, and fix advisory links."
  },
  {
    "id": 171,
    "question": "What is the standard sequential workflow of an enterprise Vulnerability Assessment life cycle?",
    "options": [
      "Asset Discovery -> Service Enumeration -> Vulnerability Scanning -> Analysis & Verification -> Reporting & Remediation",
      "Exploitation -> Privilege Escalation -> Looting -> Disconnection",
      "Purchasing Software -> Running Scans -> Disabling Firewalls",
      "Deleting Logs -> Formatting Disks -> Reporting"
    ],
    "answer": 0,
    "explanation": "A structured VA lifecycle systematically discovers alive hosts, enumerates open ports/services, executes vulnerability scanning plugins, analyzes findings, and produces remediation reports."
  },
  {
    "id": 172,
    "question": "What is the difference between a Credentialed (Authenticated) scan and a Non-Credentialed (Unauthenticated) scan?",
    "options": [
      "A Credentialed scan logs into target endpoints with admin credentials to inspect local software versions and registry keys; an Unauthenticated scan probes only exposed network ports from the outside",
      "A Credentialed scan is illegal; an Unauthenticated scan is legal",
      "A Credentialed scan uses wireless; an Unauthenticated scan uses ethernet",
      "A Credentialed scan is only for web servers"
    ],
    "answer": 0,
    "explanation": "Credentialed scans provide deep inside-out visibility (detecting missing OS patches and insecure local configurations) with near-zero network overhead and minimal false positives."
  },
  {
    "id": 173,
    "question": "Why do enterprise security auditors strongly prefer Credentialed vulnerability scans over unauthenticated network scans for compliance audits?",
    "options": [
      "They detect missing internal patches, inspect registry settings, and produce significantly fewer False Positives",
      "They bypass the need for a scanner license",
      "They run 1,000 times faster",
      "They automatically patch the computer during the scan"
    ],
    "answer": 0,
    "explanation": "Unauthenticated scans guess software versions from external banner strings (which are often modified or masked), whereas credentialed scans verify exact file versions on disk."
  },
  {
    "id": 174,
    "question": "What industry-leading enterprise vulnerability scanner, developed by Tenable, uses a proprietary modular plugin architecture written in NASL?",
    "options": [
      "Nessus",
      "Wireshark",
      "Burp Suite",
      "John the Ripper"
    ],
    "answer": 0,
    "explanation": "Nessus is the worldwide standard vulnerability scanner, executing over 150,000 modular vulnerability check plugins written in the Nessus Attack Scripting Language (NASL)."
  },
  {
    "id": 175,
    "question": "What popular open-source enterprise vulnerability scanner was originally forked from Nessus when Nessus transitioned to a closed-source proprietary model in 2005?",
    "options": [
      "OpenVAS (Greenbone Vulnerability Management)",
      "Nmap",
      "Nikto",
      "Metasploit"
    ],
    "answer": 0,
    "explanation": "OpenVAS (Open Vulnerability Assessment System), maintained by Greenbone, is the premier open-source vulnerability scanner providing daily-updated Network Vulnerability Tests (NVTs)."
  },
  {
    "id": 176,
    "question": "What cloud-based vulnerability management and compliance platform deploys lightweight Cloud Agents directly onto endpoints to provide continuous real-time vulnerability tracking?",
    "options": [
      "Qualys (QualysGuard)",
      "Cain and Abel",
      "Hydra",
      "Aircrack-ng"
    ],
    "answer": 0,
    "explanation": "Qualys is a leading enterprise SaaS platform that gathers telemetry from lightweight agents installed on endpoints, eliminating the need for bulky scheduled network scans."
  },
  {
    "id": 177,
    "question": "What open-source command-line web server vulnerability scanner, written in Perl by Chris Sullo, scans for over 6,700 dangerous CGIs, outdated server software, and configuration files?",
    "options": [
      "Nikto",
      "Nessus",
      "Wireshark",
      "Burp Intruder"
    ],
    "answer": 0,
    "explanation": "Nikto is a renowned open-source web server scanner that rapidly identifies dangerous files, outdated server banners, insecure HTTP headers, and default installation files."
  },
  {
    "id": 178,
    "question": "What open-source suite provides automated vulnerability auditing against NIST Security Content Automation Protocol (SCAP) security compliance baselines on Linux?",
    "options": [
      "OpenSCAP",
      "OpenSSH",
      "OpenSSL",
      "OpenVPN"
    ],
    "answer": 0,
    "explanation": "OpenSCAP evaluates Linux system configurations against standardized security baselines (such as DISA STIGs and CIS Benchmarks) using automated SCAP policy XML documents."
  },
  {
    "id": 179,
    "question": "What is 'Passive Vulnerability Assessment' in sensitive operational environments (such as hospital medical devices or SCADA/ICS power grids)?",
    "options": [
      "Monitoring network traffic passively via SPAN/TAP ports without injecting active probe packets that could crash fragile industrial systems",
      "Running scans while the server is powered off",
      "Asking system administrators for verbal confirmation",
      "Reading the hardware instruction manual"
    ],
    "answer": 0,
    "explanation": "In SCADA and healthcare networks, active scanning can crash sensitive controllers. Passive scanners (like Tenable NNM) inspect mirrored network packets to detect flaws safely."
  },
  {
    "id": 180,
    "question": "What U.S. government catalog, maintained by CISA, is utilized by modern vulnerability management teams to prioritize patching based on real-world active exploitation in the wild?",
    "options": [
      "The Known Exploited Vulnerabilities (KEV) Catalog",
      "The Top Secret CIA Library",
      "The FBI Cyber Most Wanted",
      "The NSA Cyber Advisory List"
    ],
    "answer": 0,
    "explanation": "CISA's Known Exploited Vulnerabilities (KEV) catalog lists CVEs that are confirmed to be actively weaponized in real-world attacks, establishing mandatory remediation deadlines."
  },
  {
    "id": 181,
    "question": "What penetration testing framework standardizes the engagement lifecycle into 7 sequential phases: Pre-engagement, Intelligence Gathering, Threat Modeling, Vulnerability Analysis, Exploitation, Post-Exploitation, and Reporting?",
    "options": [
      "PTES (Penetration Testing Execution Standard)",
      "ITIL Framework",
      "COBIT",
      "PCI-DSS"
    ],
    "answer": 0,
    "explanation": "The PTES standard defines the complete lifecycle of a professional penetration test, ensuring thoroughness, ethical compliance, and high technical quality."
  },
  {
    "id": 182,
    "question": "In penetration testing intelligence gathering, what is the distinction between 'Passive Reconnaissance' and 'Active Reconnaissance'?",
    "options": [
      "Passive reconnaissance gathers data without sending any traffic directly to target systems (e.g. WHOIS, OSINT); Active reconnaissance sends probe packets directly to target assets",
      "Passive reconnaissance is illegal; Active reconnaissance is legal",
      "Passive reconnaissance requires passwords; Active reconnaissance requires no passwords",
      "Passive reconnaissance tests employees; Active reconnaissance tests hardware"
    ],
    "answer": 0,
    "explanation": "Passive recon gathers intelligence invisibly (via search engines, DNS records, and social media). Active recon probes ports directly, generating traffic logged by firewalls."
  },
  {
    "id": 183,
    "question": "What renowned network exploration and port scanning tool was created by Gordon Lyon (Fyodor) and is considered the premier reconnaissance utility worldwide?",
    "options": [
      "Nmap (Network Mapper)",
      "Nessus",
      "Metasploit",
      "Burp Suite"
    ],
    "answer": 0,
    "explanation": "Nmap is the open-source industry standard utility for network discovery, port scanning, OS fingerprinting, and vulnerability scanning."
  },
  {
    "id": 184,
    "question": "In Nmap port scanning, what command-line flag executes a 'TCP SYN Stealth Scan' (Half-Open Scan)?",
    "options": [
      "-sS",
      "-sT",
      "-sU",
      "-sA"
    ],
    "answer": 0,
    "explanation": "-sS executes a SYN stealth scan: it sends a SYN packet, waits for SYN/ACK, and immediately responds with an RST to tear down the connection without completing the 3-way handshake."
  },
  {
    "id": 185,
    "question": "In Nmap, what command-line flag executes a full 'TCP Connect Scan' utilizing the operating system's native network socket API?",
    "options": [
      "-sT",
      "-sS",
      "-sN",
      "-sX"
    ],
    "answer": 0,
    "explanation": "-sT completes the full 3-way handshake (SYN -> SYN/ACK -> ACK). It is used when an unprivileged user cannot craft raw network packets on the local operating system."
  },
  {
    "id": 186,
    "question": "What Nmap flag instructs the scanner to determine the exact application name and version string running on open ports (e.g. Apache 2.4.49, OpenSSH 8.2p1)?",
    "options": [
      "-sV",
      "-sP",
      "-sO",
      "-v"
    ],
    "answer": 0,
    "explanation": "-sV executes Service Version detection, querying listening ports with custom protocol probes to extract application banners and version numbers."
  },
  {
    "id": 187,
    "question": "What Nmap flag instructs the scanner to execute standard, safe vulnerability enumeration scripts from the Nmap Scripting Engine (NSE)?",
    "options": [
      "-sC (or --script=default)",
      "-sA",
      "-sL",
      "-sn"
    ],
    "answer": 0,
    "explanation": "-sC runs the default category of NSE scripts, checking for common misconfigurations, default credentials, and information disclosure."
  },
  {
    "id": 188,
    "question": "What Nmap command-line flag disables ICMP ping host discovery, forcing Nmap to scan target ports even if the host blocks or ignores ping requests?",
    "options": [
      "-Pn",
      "-p-",
      "-T4",
      "-n"
    ],
    "answer": 0,
    "explanation": "-Pn (Treat all hosts as online) skips host discovery. If a target Windows host drops ICMP pings via its local firewall, -Pn ensures Nmap still probes its ports."
  },
  {
    "id": 189,
    "question": "In Nmap scan output, what does a port status of 'Filtered' indicate to a penetration tester?",
    "options": [
      "A firewall, packet filter, or router ACL is dropping probes, preventing Nmap from determining if the port is open or closed",
      "The port is actively running a database",
      "The port is completely open to the Internet",
      "The target host is powered off"
    ],
    "answer": 0,
    "explanation": "A 'Filtered' state means Nmap received no response (or received an ICMP unreachable error), indicating that a firewall or packet filter is intercepting the traffic."
  },
  {
    "id": 190,
    "question": "What exotic Nmap scan type sets the FIN, PSH, and URG flags simultaneously, illuminating the TCP packet 'like a Christmas tree' to evade stateless packet filters?",
    "options": [
      "-sX (TCP Xmas Scan)",
      "-sN (Null Scan)",
      "-sF (FIN Scan)",
      "-sI (Idle Scan)"
    ],
    "answer": 0,
    "explanation": "-sX sets FIN, PSH, and URG flags. According to RFC 793, closed ports must reply with RST, while open ports silently drop the packet, allowing testers to detect open ports stealthily."
  },
  {
    "id": 191,
    "question": "What open-source penetration testing framework, created by H.D. Moore in 2003, is the most widely adopted platform for developing and executing exploit code against remote targets?",
    "options": [
      "The Metasploit Framework",
      "Nmap",
      "Wireshark",
      "OpenVAS"
    ],
    "answer": 0,
    "explanation": "Metasploit provides a vast library of public exploits, auxiliary scanners, and modular payloads for automating the exploitation phase of penetration tests."
  },
  {
    "id": 192,
    "question": "In the Metasploit Framework architecture, what is the role of an 'Exploit' module versus a 'Payload' module?",
    "options": [
      "An Exploit delivers and triggers the vulnerability on the target; a Payload is the actual malicious code (e.g. command shell, reverse shell) executed after successful compromise",
      "An Exploit is a firewall; a Payload is an antivirus",
      "An Exploit scans ports; a Payload generates passwords",
      "An Exploit is legal; a Payload is illegal"
    ],
    "answer": 0,
    "explanation": "The Exploit takes advantage of the vulnerability to gain execution; the Payload is the software payload (such as Meterpreter) deposited on the target to give the attacker control."
  },
  {
    "id": 193,
    "question": "In Metasploit payload terminology, what is the difference between a 'Staged' payload and a 'Single' (Inline) payload?",
    "options": [
      "A Staged payload injects a tiny 'stager' that connects back to download the full payload; a Single payload is completely self-contained in one file",
      "A Staged payload is for Linux; a Single payload is for Windows",
      "A Staged payload is encrypted; a Single payload is plaintext",
      "A Staged payload never requires an IP address"
    ],
    "answer": 0,
    "explanation": "Staged payloads (e.g. windows/meterpreter/reverse_tcp) are tiny, fitting inside small memory buffers; they fetch the rest of Meterpreter once connected. Singles (windows/meterpreter_reverse_tcp) contain everything in one binary."
  },
  {
    "id": 194,
    "question": "What advanced post-exploitation payload within Metasploit executes entirely in the target computer's volatile memory (RAM) via Reflective DLL Injection without touching the physical hard drive?",
    "options": [
      "Meterpreter",
      "Netcat",
      "Telnet",
      "Command Prompt"
    ],
    "answer": 0,
    "explanation": "Meterpreter resides entirely in memory and uses encrypted TLS communications, evading traditional endpoint antivirus disk scanners and leaving minimal forensic artifacts."
  },
  {
    "id": 195,
    "question": "What leading web application penetration testing platform (developed by PortSwigger) acts as an intercepting HTTP/S proxy between the browser and target web server?",
    "options": [
      "Burp Suite",
      "Nmap",
      "Nessus",
      "John the Ripper"
    ],
    "answer": 0,
    "explanation": "Burp Suite captures, intercepts, inspects, and modifies web traffic in real time, making it the essential platform for web application penetration testing."
  },
  {
    "id": 196,
    "question": "In Burp Suite, what tool allows a penetration tester to manually modify individual HTTP requests and repeatedly reissue them to observe fine-grained server responses?",
    "options": [
      "Burp Repeater",
      "Burp Sequencer",
      "Burp Decoder",
      "Burp Comparer"
    ],
    "answer": 0,
    "explanation": "Burp Repeater allows testers to tweak headers, parameters, and payloads one at a time and resend requests instantly to analyze server reactions."
  },
  {
    "id": 197,
    "question": "What automated tool within Burp Suite is designed for performing customized attacks against web applications, such as dictionary credential brute-forcing and parameter fuzzing?",
    "options": [
      "Burp Intruder",
      "Burp Repeater",
      "Burp Proxy",
      "Burp Spider"
    ],
    "answer": 0,
    "explanation": "Burp Intruder automates high-speed parameter fuzzing and credential testing across attack positions using configurable payload lists."
  },
  {
    "id": 198,
    "question": "What open-source password cracking utility is renowned as the world's fastest GPU-accelerated rule-based password recovery tool, supporting hundreds of hash formats?",
    "options": [
      "Hashcat",
      "Nmap",
      "Wireshark",
      "Burp Suite"
    ],
    "answer": 0,
    "explanation": "Hashcat harnesses the massively parallel computing power of modern GPUs to crack password hashes at billions of combinations per second."
  },
  {
    "id": 199,
    "question": "What are the two essential, mandatory deliverables that must be included in an accredited Penetration Testing Final Report?",
    "options": [
      "An Executive Summary (high-level business risk for C-level leadership) and a Technical Remediation Report (detailed proof-of-concept steps, CVSS ratings, and developer fix guidance)",
      "A list of employee salaries and marketing brochures",
      "A receipt for hardware purchases and software licenses",
      "A copy of the operating system source code"
    ],
    "answer": 0,
    "explanation": "A professional report provides an Executive Summary explaining business impact in non-technical terms, accompanied by a Detailed Technical Report with reproducible POCs and remediation guidance."
  },
  {
    "id": 200,
    "question": "Following the completion of an authorized penetration test, what is the tester's final ethical and contractual obligation during the Post-Engagement phase?",
    "options": [
      "Thoroughly clean up and remove all deployed test accounts, web shells, and artifacts, followed by a formal re-test to verify remediation",
      "Publish the customer's passwords on social media",
      "Leave backdoors open for future tests",
      "Format the customer's production database"
    ],
    "answer": 0,
    "explanation": "Testers must sanitize the environment, remove all testing artifacts and temporary credentials, and perform a re-test after patches are deployed to confirm vulnerabilities are resolved."
  }
];
