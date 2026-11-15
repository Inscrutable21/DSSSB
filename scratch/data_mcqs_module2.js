// Module 2: Spreads 6 to 10 (MCQs Q51 to Q100 & Spreads Data)
module.exports = {
  mcqs: [
    // Spread 6: Asymmetric Algorithms: RSA Cryptosystem (Q51–Q60)
    {
      id: 51,
      question: "What core architectural principle defines Asymmetric (Public-Key) Cryptography?",
      options: [
        "It uses a single secret key that must be pre-shared over an out-of-band courier",
        "It uses a mathematically linked Key Pair: a Public Key for encryption/verification and a Private Key for decryption/signing",
        "It does not use mathematical keys, relying entirely on network firewalls",
        "It only encrypts data during daytime hours"
      ],
      answer: 1,
      explanation: "Asymmetric cryptography utilizes a key pair. The public key is openly distributed to anyone who wants to send encrypted data, while the corresponding private key is kept strictly secret by the recipient."
    },
    {
      id: 52,
      question: "What mathematical construct forms the foundation of all asymmetric cryptosystems, being computationally easy to execute in one direction but virtually impossible to invert without secret auxiliary information?",
      options: ["Trapdoor One-Way Function", "Linear Permutation Matrix", "Symmetric XOR Gate", "Modulo 26 Shift"],
      answer: 0,
      explanation: "A Trapdoor One-Way Function is easy to compute in one direction (e.g. multiplying large primes), but computationally infeasible to invert (factoring) unless one knows the secret 'trapdoor' key."
    },
    {
      id: 53,
      question: "On what hard mathematical problem is the security of the classic RSA public-key cryptosystem fundamentally based?",
      options: [
        "The computational hardness of factoring the product of two large prime numbers (Prime Factorization Problem)",
        "The discrete logarithm problem in elliptic curves",
        "The shortest vector problem in multi-dimensional Euclidean lattices",
        "The challenge of reversing SHA-256 hashes"
      ],
      answer: 0,
      explanation: "RSA relies on the fact that multiplying two 1024-bit primes (n = p * q) takes microseconds, but factoring composite modulus n back into p and q would take millions of compute years."
    },
    {
      id: 54,
      question: "In RSA key generation, how is Euler's totient function phi(n) calculated from two distinct secret prime numbers p and q?",
      options: [
        "phi(n) = (p + 1) * (q + 1)",
        "phi(n) = (p - 1) * (q - 1)",
        "phi(n) = p^2 + q^2",
        "phi(n) = sqrt(p * q)"
      ],
      answer: 1,
      explanation: "For n = p * q where p and q are prime numbers, Euler's totient function phi(n), which counts positive integers up to n coprime to n, is exactly (p - 1) * (q - 1)."
    },
    {
      id: 55,
      question: "What numerical value is universally chosen as the public encryption exponent e in modern RSA implementations due to its low Hamming weight?",
      options: ["3", "17", "65,537 (Fermat prime F4 = 2^16 + 1)", "1,048,576"],
      answer: 2,
      explanation: "The Fermat prime 65,537 (hex 0x10001, binary 10000000000000001) has only two 1-bits. This makes modular exponentiation fast while preventing small-exponent attacks (like Coppersmith's attack on e=3)."
    },
    {
      id: 56,
      question: "In RSA key generation, how is the private decryption exponent d mathematically derived from public exponent e and totient phi(n)?",
      options: [
        "d = e * phi(n)",
        "d = e^(-1) mod phi(n) (the modular multiplicative inverse of e modulo phi(n))",
        "d = e + phi(n)",
        "d = phi(n) / e"
      ],
      answer: 1,
      explanation: "The private exponent d is calculated using the Extended Euclidean Algorithm such that (e * d) mod phi(n) = 1, making d the modular multiplicative inverse of e."
    },
    {
      id: 57,
      question: "What is the mathematical formula used to encrypt a plaintext message M into ciphertext C using public key (e, n) in RSA?",
      options: [
        "C = (M * e) mod n",
        "C = (M^e) mod n",
        "C = (e^M) mod n",
        "C = (M + e) mod n"
      ],
      answer: 1,
      explanation: "In RSA, encryption computes C = (M^e) mod n. Decryption reverses this using private key d: M = (C^d) mod n."
    },
    {
      id: 58,
      question: "Why is 'textbook' (unpadded) RSA strictly forbidden in secure software implementations?",
      options: [
        "Because it is too slow to execute",
        "Because raw RSA is deterministic: encrypting the same message with the same public key always yields the exact same ciphertext, exposing it to chosen-ciphertext attacks",
        "Because textbook RSA only works with 8-bit characters",
        "Because textbook RSA keys expire after 24 hours"
      ],
      answer: 1,
      explanation: "Deterministic encryption allows an eavesdropper to confirm guesses about plaintext contents. Furthermore, mathematical homomorphic properties allow adversaries to forge valid ciphertexts."
    },
    {
      id: 59,
      question: "What padding scheme is mandatory in modern RSA encryption to introduce randomness and prevent Bleichenbacher and Coppersmith attacks?",
      options: [
        "RSA-OAEP (Optimal Asymmetric Encryption Padding)",
        "PKCS#1 v1.5 Zero Padding",
        "Bitwise Null Padding",
        "DES Parity Padding"
      ],
      answer: 0,
      explanation: "RSA-OAEP (RFC 8017) uses a two-round Feistel network with cryptographic hash functions and random seeds to make RSA probabilistically secure against chosen-ciphertext attacks."
    },
    {
      id: 60,
      question: "What minimum RSA key length is currently recommended by NIST to provide acceptable security for enterprise and government communications beyond 2030?",
      options: ["512 bits", "1024 bits", "2048 bits (or 3072 bits for long-term security)", "128 bits"],
      answer: 2,
      explanation: "NIST deprecated 1024-bit RSA keys in 2013. A minimum of 2048 bits is required for current enterprise systems, and 3072 bits is recommended for security beyond 2030."
    },

    // Spread 7: Asymmetric Algorithms: Diffie-Hellman & ECC (Q61–Q70)
    {
      id: 61,
      question: "What revolutionary cryptographic capability was established by Whitfield Diffie and Martin Hellman in their 1976 protocol?",
      options: [
        "A method for two communicating parties to establish a shared secret key over an unencrypted public channel without exchanging any prior secrets",
        "The first digital signature scheme",
        "The first hardware random number generator",
        "The DES block cipher algorithm"
      ],
      answer: 0,
      explanation: "Diffie-Hellman (DH) solved the ancient Key Distribution Problem by allowing two strangers (Alice and Bob) to create a shared symmetric key across a public tapped wire."
    },
    {
      id: 62,
      question: "On what hard mathematical problem is the security of the classic Diffie-Hellman key exchange protocol based?",
      options: [
        "Integer Prime Factorization",
        "Discrete Logarithm Problem (DLP) over a finite prime field",
        "Finding collisions in SHA-1",
        "Inverting AES S-boxes"
      ],
      answer: 1,
      explanation: "Diffie-Hellman relies on the Discrete Logarithm Problem: given generator g, prime p, and public value A = (g^a) mod p, it is computationally infeasible to extract secret exponent a."
    },
    {
      id: 63,
      question: "What active attack can completely compromise unauthenticated classic Diffie-Hellman key exchanges if endpoints do not verify identities using digital signatures or certificates?",
      options: [
        "Man-in-the-Middle (MitM) Attack",
        "Buffer Overflow Attack",
        "SQL Injection Attack",
        "Cross-Site Scripting"
      ],
      answer: 0,
      explanation: "An active attacker (Eve) sitting between Alice and Bob can perform two independent DH exchanges (Alice-Eve and Eve-Bob), intercepting and reading all traffic unless endpoints authenticate each other."
    },
    {
      id: 64,
      question: "What security property is guaranteed by Ephemeral Diffie-Hellman (DHE / ECDHE) in modern protocols like TLS 1.3?",
      options: [
        "Perfect Forward Secrecy (PFS)",
        "Zero-Knowledge Proofs",
        "Passwordless Authentication",
        "Hardware-enforced MAC address filtering"
      ],
      answer: 0,
      explanation: "Ephemeral Diffie-Hellman generates new, temporary keys for every session. Once the session ends, the keys are discarded. If the server's long-term master key is stolen later, past sessions cannot be decrypted."
    },
    {
      id: 65,
      question: "On what mathematical foundation is Elliptic Curve Cryptography (ECC) established?",
      options: [
        "The algebraic structure of elliptic curves over finite fields and the Elliptic Curve Discrete Logarithm Problem (ECDLP)",
        "Factoring large composite numbers",
        "Finding collisions in Merkle-Damgård trees",
        "Solving simultaneous quadratic equations in Euclidean space"
      ],
      answer: 0,
      explanation: "ECC relies on points lying on algebraic curves (e.g. y^2 = x^3 + ax + b). Its security is anchored on the computational hardness of the Elliptic Curve Discrete Logarithm Problem (ECDLP)."
    },
    {
      id: 66,
      question: "What major efficiency advantage does Elliptic Curve Cryptography (ECC) offer over traditional RSA?",
      options: [
        "ECC provides equivalent cryptographic security strength with drastically smaller key sizes (e.g. 256-bit ECC matches 3072-bit RSA)",
        "ECC does not require mathematics",
        "ECC can only be run on quantum supercomputers",
        "ECC keys never need to be updated"
      ],
      answer: 0,
      explanation: "Because no sub-exponential algorithm exists to solve ECDLP (unlike the Number Field Sieve for RSA factoring), ECC achieves the same security as a 3072-bit RSA key using only 256 bits."
    },
    {
      id: 67,
      question: "What modern, high-speed Edwards-curve Digital Signature Algorithm implemented over Curve25519 is widely adopted in TLS 1.3, OpenSSH, and Signal?",
      options: ["Ed25519", "RSA-512", "DES-EDE", "MD5-Sign"],
      answer: 0,
      explanation: "Ed25519 (developed by Daniel J. Bernstein) is an elliptic curve signature scheme over Curve25519. It runs in strict constant time, completely eliminating cache-timing side-channel vulnerabilities."
    },
    {
      id: 68,
      question: "In ECC point arithmetic, what operation is repeated to compute public point Q = k * P from private integer k and generator base point P?",
      options: ["Point Addition and Point Doubling", "Matrix Inversion", "Polynomial Long Division", "Square Root Extraction"],
      answer: 0,
      explanation: "Scalar multiplication in ECC is computed using iterative Point Doubling and Point Addition (the double-and-add algorithm), which is easy to compute forward but impossible to reverse."
    },
    {
      id: 69,
      question: "Why is Elliptic Curve Cryptography particularly vital for mobile smartphones, smart cards, and IoT sensors?",
      options: [
        "Smaller key sizes require vastly less memory, transmission bandwidth, and battery power to process",
        "Mobile phones cannot run modular arithmetic",
        "IoT sensors do not support digital signatures",
        "Mobile networks block RSA packets"
      ],
      answer: 0,
      explanation: "Smaller key sizes mean faster handshakes, less power consumption, and minimal memory footprints, making ECC the premier choice for battery-constrained mobile and embedded architectures."
    },
    {
      id: 70,
      question: "What quantum algorithm, formulated by Peter Shor in 1994, is mathematically proven to factor large integers and solve discrete logarithms in polynomial time, threatening both RSA and ECC?",
      options: ["Shor's Algorithm", "Grover's Algorithm", "Dijkstra's Algorithm", "The Kasiski Algorithm"],
      answer: 0,
      explanation: "Shor's Algorithm on a sufficiently large fault-tolerant quantum computer breaks both Prime Factorization (RSA) and Discrete Logarithms (DH and ECC) in polynomial time O((log n)^3)."
    },

    // Spread 8: Hashing Algorithms: Core Properties & Classical Hashes (Q71–Q80)
    {
      id: 71,
      question: "What is the operational definition of a Cryptographic Hash Function?",
      options: [
        "A mathematical algorithm that transforms an arbitrary-length block of data into a fixed-size, deterministic bitstring (digest)",
        "A cipher that encrypts data using a secret password",
        "A protocol that compresses files into ZIP format",
        "A firewall rule that filters packet headers"
      ],
      answer: 0,
      explanation: "A cryptographic hash function takes an input of any size and produces a fixed-length digest (e.g. SHA-256 always outputs 256 bits). It is deterministic: the same input always yields the identical digest."
    },
    {
      id: 72,
      question: "What property of a cryptographic hash function mandates that changing just a single bit in the input message should drastically alter roughly 50% of the output digest bits?",
      options: ["The Avalanche Effect", "The Sponge Construction", "Perfect Forward Secrecy", "Non-repudiation"],
      answer: 0,
      explanation: "The Avalanche Effect ensures that even microscopic changes to input plaintext create completely uncorrelated, chaotic changes across approximately half the hash digest bits."
    },
    {
      id: 73,
      question: "What property mandates that given a hash digest h, it is computationally infeasible to find the original message x such that Hash(x) = h?",
      options: [
        "Pre-image Resistance (One-Way Property)",
        "Second Pre-image Resistance",
        "Collision Resistance",
        "Homomorphic Property"
      ],
      answer: 0,
      explanation: "Pre-image resistance (the one-way property) guarantees that an attacker cannot reverse-engineer a hash digest back into the original plaintext or password."
    },
    {
      id: 74,
      question: "What property mandates that given a specific input message x, it is computationally infeasible to find a DIFFERENT message y (y != x) such that Hash(x) = Hash(y)?",
      options: [
        "Second Pre-image Resistance (Weak Collision Resistance)",
        "Pre-image Resistance",
        "Confusion",
        "Perfect Secrecy"
      ],
      answer: 0,
      explanation: "Second pre-image resistance ensures an attacker cannot take an existing signed document x and forge a fraudulent document y that produces the exact same hash value."
    },
    {
      id: 75,
      question: "What property mandates that it is computationally infeasible to find ANY two arbitrary distinct messages x and y (x != y) such that Hash(x) = Hash(y)?",
      options: [
        "Collision Resistance (Strong Collision Resistance)",
        "Diffusion",
        "Pre-image Resistance",
        "Linear Cryptanalysis"
      ],
      answer: 0,
      explanation: "Collision resistance ensures no two arbitrary messages in the universe produce identical hash digests, forming the bedrock of digital signatures."
    },
    {
      id: 76,
      question: "What mathematical principle explains why finding an arbitrary hash collision requires only approximately 2^(n/2) operations instead of 2^n for an n-bit hash?",
      options: [
        "The Birthday Paradox (Birthday Attack)",
        "Euler's Totient Theorem",
        "The Chinese Remainder Theorem",
        "Fermat's Little Theorem"
      ],
      answer: 0,
      explanation: "The Birthday Paradox shows that in a group of 23 people, there is a >50% chance two share a birthday. In hashing, searching for ANY collision reduces complexity to the square-root bound: 2^(n/2)."
    },
    {
      id: 77,
      question: "What output digest length is produced by the Message Digest 5 (MD5 / RFC 1321) algorithm, which is now considered cryptographically broken?",
      options: ["128 bits (32 hexadecimal characters)", "160 bits", "256 bits", "512 bits"],
      answer: 0,
      explanation: "MD5 produces a 128-bit digest. Due to collision attacks that can generate colliding files in seconds on a laptop, MD5 is strictly prohibited for security certificates and signatures."
    },
    {
      id: 78,
      question: "In 2017, what landmark research attack conducted by Google and CWI Amsterdam produced the world's first practical collision against SHA-1?",
      options: ["The SHAttered Attack", "The POODLE Attack", "The Heartbleed Exploit", "The Sweet32 Attack"],
      answer: 0,
      explanation: "The SHAttered attack produced two distinct PDF documents with different visible contents that generated the exact same SHA-1 hash (160 bits), cementing the deprecation of SHA-1."
    },
    {
      id: 79,
      question: "In computer forensics, why does an investigator calculate the cryptographic hash (e.g. SHA-256) of a suspect hard drive immediately after physical acquisition?",
      options: [
        "To establish a digital fingerprint that proves in a court of law that the disk image was never altered or tampered with during analysis (Chain of Custody)",
        "To decrypt passwords on the drive",
        "To speed up hard drive reading speeds",
        "To format corrupt sectors"
      ],
      answer: 0,
      explanation: "Cryptographic verification ensures evidence integrity. If the verification hash computed at trial matches the acquisition hash, it proves beyond doubt that the evidence was not modified."
    },
    {
      id: 80,
      question: "What precomputed lookup table attack allows attackers to crack unsalted password hashes in seconds by trading offline storage space for online computing time?",
      options: ["Rainbow Table Attack", "SQL Injection", "Cross-Site Scripting", "Buffer Overflow"],
      answer: 0,
      explanation: "Rainbow tables use precomputed chains of hash-reduction pairs to invert unsalted hashes instantly. Adding a cryptographically random Salt to each password defeats Rainbow Tables completely."
    },

    // Spread 9: Hashing Algorithms: SHA-2, SHA-3 Sponge & HMAC (Q81–Q90)
    {
      id: 81,
      question: "Which hash algorithm family was designed by the NSA to replace SHA-1, standardized in FIPS 180-4, and includes SHA-256 and SHA-512?",
      options: ["SHA-2", "SHA-3", "MD5", "RIPEMD"],
      answer: 0,
      explanation: "The SHA-2 family includes SHA-224, SHA-256, SHA-384, and SHA-512. It remains the dominant enterprise hashing standard worldwide."
    },
    {
      id: 82,
      question: "What vulnerability plagues hash functions based on the Merkle-Damgard construction (MD5, SHA-1, SHA-256) when used naively as MAC = Hash(Secret || Message)?",
      options: [
        "Length Extension Attack",
        "Buffer Overflow Attack",
        "Padding Oracle Attack",
        "Meet-in-the-Middle Attack"
      ],
      answer: 0,
      explanation: "In Merkle-Damgard hashes, the output hash represents the internal state. An attacker who knows Hash(Secret || Message) and the secret length can append data and calculate the valid hash without knowing the secret."
    },
    {
      id: 83,
      question: "What standardized mechanism (RFC 2104) defeats length-extension attacks by computing a nested hash with inner and outer padding keys?",
      options: [
        "HMAC (Hash-based Message Authentication Code)",
        "ECB Mode",
        "AES-CTR",
        "RSA-OAEP"
      ],
      answer: 0,
      explanation: "HMAC computes Hash((Key XOR opad) || Hash((Key XOR ipad) || Message)). Because the inner hash output is hashed a second time, length extension attacks are mathematically impossible."
    },
    {
      id: 84,
      question: "What cryptographic security goals are simultaneously achieved when two communicating systems exchange messages accompanied by an HMAC tag?",
      options: [
        "Data Integrity AND Message Origin Authentication",
        "Confidentiality and Encryption",
        "Non-repudiation in court",
        "Public Key Distribution"
      ],
      answer: 0,
      explanation: "HMAC guarantees that the message was not modified in transit (Integrity) and that it was generated by someone who possesses the shared secret key (Authentication)."
    },
    {
      id: 85,
      question: "What revolutionary architectural design is utilized by the SHA-3 (Keccak / FIPS 202) hashing standard, fundamentally differing from Merkle-Damgard hashes?",
      options: [
        "The Sponge Construction",
        "The Feistel Network",
        "The Substitution-Permutation Network",
        "The Shift Register Generator"
      ],
      answer: 0,
      explanation: "SHA-3 is based on Keccak's Sponge Construction operating on a 1600-bit state permutation array, completely discarding the Merkle-Damgard block-chaining model."
    },
    {
      id: 86,
      question: "What are the two continuous operational phases in the SHA-3 Keccak Sponge Construction?",
      options: [
        "The Absorbing Phase (absorbing input blocks into the state) and the Squeezing Phase (extracting output digest bits)",
        "The Encryption Phase and Decryption Phase",
        "The Expansion Phase and Compression Phase",
        "The Substitution Phase and Permutation Phase"
      ],
      answer: 0,
      explanation: "In the Absorbing phase, message blocks are XORed into the internal state and permuted. In the Squeezing phase, output bits are read from the state until the requested digest length is reached."
    },
    {
      id: 87,
      question: "Why is SHA-3 inherently immune to Length Extension Attacks without requiring nested HMAC constructions?",
      options: [
        "Because only a portion of the internal 1600-bit state is squeezed to the output; the remaining capacity bits are hidden from the attacker",
        "Because SHA-3 does not allow messages longer than 1 MB",
        "Because SHA-3 uses asymmetric private keys",
        "Because SHA-3 operates only in RAM"
      ],
      answer: 0,
      explanation: "In the Sponge construction, the state is split into bitrate r and capacity c. The capacity bits are never revealed in the output digest, preventing an attacker from reconstructing the state."
    },
    {
      id: 88,
      question: "Why is it dangerously insecure to store user account passwords using fast general-purpose cryptographic hashes like SHA-256 or MD5?",
      options: [
        "Because modern GPU clusters and ASICs can compute tens of billions of SHA-256 hashes per second, allowing rapid offline brute-force cracking",
        "Because SHA-256 loses passwords after 30 days",
        "Because SHA-256 cannot hash special characters",
        "Because SHA-256 requires root permissions"
      ],
      answer: 0,
      explanation: "Fast hash functions are engineered for high-throughput file verification. For passwords, high speed benefits the attacker. Password storage mandates slow, computationally intensive Key Derivation Functions (KDFs)."
    },
    {
      id: 89,
      question: "What memory-hard password hashing algorithm, developed by Alex Biryukov and winner of the Password Hashing Competition (PHC), is recommended for modern password storage?",
      options: ["Argon2 (specifically Argon2id)", "MD5", "SHA-1", "CRC32"],
      answer: 0,
      explanation: "Argon2id combines resistance to side-channel cache attacks with memory-hardness, filling large chunks of RAM to defeat massively parallel GPU and ASIC cracking hardware."
    },
    {
      id: 90,
      question: "In secure password storage, what is the distinction between a 'Salt' and a 'Pepper'?",
      options: [
        "A Salt is a unique random string stored openly alongside the hash in the database; a Pepper is a secret key stored separately outside the database (e.g. in an HSM or config file)",
        "A Salt is used for symmetric ciphers; a Pepper is used for asymmetric ciphers",
        "A Salt is encrypted; a Pepper is plain text",
        "A Salt expires every year; a Pepper never expires"
      ],
      answer: 0,
      explanation: "Salts are public and unique per user to defeat precomputed Rainbow Tables. Peppers are secret master keys stored in secure key vaults, ensuring that even if the database is leaked, hashes cannot be cracked offline."
    },

    // Spread 10: Cryptanalysis: Attack Models, Techniques & Cipher Breakers (Q91–Q100)
    {
      id: 91,
      question: "What is the formal definition of 'Cryptanalysis' in cybersecurity?",
      options: [
        "The science and art of deciphering ciphertext or breaking cryptographic security without having prior access to the secret key",
        "The process of creating new encryption algorithms",
        "The hardware design of microprocessors",
        "The legal prosecution of hackers"
      ],
      answer: 0,
      explanation: "Cryptanalysis is the study of mathematical and operational techniques for finding weaknesses in ciphers, defeating encryption, and recovering secret keys or plaintexts."
    },
    {
      id: 92,
      question: "In cryptanalysis attack models, what is a 'Ciphertext-Only Attack' (COA)?",
      options: [
        "An attack where the adversary has access strictly to captured ciphertext strings, with no knowledge of the underlying plaintext",
        "An attack where the adversary has the secret key",
        "An attack where the adversary can choose what messages are encrypted",
        "An attack where the adversary decrypts messages using hardware probes"
      ],
      answer: 0,
      explanation: "Ciphertext-Only Attack is the most restrictive threat model: the attacker only sees the intercepted encrypted messages and must rely on statistical flaws or entropy analysis."
    },
    {
      id: 93,
      question: "What cryptanalytic attack model assumes the attacker possesses both the ciphertext and its corresponding original plaintext for one or more messages?",
      options: ["Known-Plaintext Attack (KPA)", "Ciphertext-Only Attack", "Brute Force Attack", "Social Engineering"],
      answer: 0,
      explanation: "In a Known-Plaintext Attack (KPA), the attacker has access to matching plaintext-ciphertext pairs (e.g. standard headers, known file footers) to deduce the secret key."
    },
    {
      id: 94,
      question: "What attack model allows the cryptanalyst to feed arbitrary plaintexts of their choice into an encryption engine and inspect the resulting ciphertexts?",
      options: ["Chosen-Plaintext Attack (CPA)", "Known-Plaintext Attack", "Ciphertext-Only Attack", "Shoulder Surfing"],
      answer: 0,
      explanation: "In a Chosen-Plaintext Attack (CPA), the attacker chooses specific plaintexts to be encrypted (e.g., differential cryptanalysis analyzing how bit differences propagate through rounds)."
    },
    {
      id: 95,
      question: "What attack model allows the cryptanalyst to submit chosen ciphertexts to a decryption oracle and observe the resulting plaintexts or error messages?",
      options: ["Chosen-Ciphertext Attack (CCA)", "Ciphertext-Only Attack", "Known-Plaintext Attack", "Traffic Analysis"],
      answer: 0,
      explanation: "In a Chosen-Ciphertext Attack (CCA), the attacker can probe a decryption oracle. Padding Oracle attacks (POODLE, Bleichenbacher) are practical real-world CCA exploits."
    },
    {
      id: 96,
      question: "What classical cryptanalytic technique breaks simple monoalphabetic substitution ciphers (e.g. Caesar, simple substitution) by analyzing the occurrence rates of characters?",
      options: ["Frequency Analysis", "Differential Cryptanalysis", "Linear Cryptanalysis", "Integral Cryptanalysis"],
      answer: 0,
      explanation: "Frequency Analysis exploits the fact that natural human languages have non-uniform letter distributions (in English, 'E' appears ~12.7%, followed by 'T', 'A', 'O', 'I', 'N')."
    },
    {
      id: 97,
      question: "What cryptanalytic method, developed by Friedrich Kasiski in 1863, deduces the keyword length of polyalphabetic ciphers (like Vigenere) by measuring distances between repeated ciphertext strings?",
      options: ["The Kasiski Examination (or Kasiski Test)", "Frequency Analysis", "Meet-in-the-Middle Attack", "Birthday Attack"],
      answer: 0,
      explanation: "The Kasiski Examination identifies repeated words in ciphertext. The Greatest Common Divisor (GCD) of the distances between these repetitions reveals the repeating keyword length."
    },
    {
      id: 98,
      question: "What is an 'Exhaustive Key Search' (Brute-Force Attack) in cryptanalysis?",
      options: [
        "Systematically testing every possible key in the cipher's key space until the correct plaintext is revealed",
        "Guessing the password by calling the victim",
        "Listening to keyboard strokes using a microphone",
        "Injecting faults into CPU power lines"
      ],
      answer: 0,
      explanation: "Brute-force testing systematically iterates through all 2^k possible keys. For DES (2^56 keys), it took 22 hours in 1999; for AES-128 (2^128 keys), it would take trillions of years."
    },
    {
      id: 99,
      question: "What category of cryptanalytic attack does NOT target mathematical algorithms, but instead measures physical emissions—such as execution time, power consumption (DPA), or electromagnetic radiation—from hardware chips?",
      options: ["Side-Channel Attack", "Man-in-the-Middle Attack", "Replay Attack", "Dictionary Attack"],
      answer: 0,
      explanation: "Side-Channel Attacks (e.g. Differential Power Analysis DPA, timing attacks, acoustic cryptanalysis) extract secret keys by monitoring physical hardware characteristics during cryptographic execution."
    },
    {
      id: 100,
      question: "What humorous cryptanalytic term describes extracting cryptographic keys through physical coercion, bribery, extortion, or legal compulsion rather than mathematical attack?",
      options: ["Rubber-Hose Cryptanalysis", "Cold-Boot Attack", "Evil Maid Attack", "Shoulder Surfing"],
      answer: 0,
      explanation: "Rubber-Hose Cryptanalysis refers to compelling a person holding the key to surrender it via physical coercion, interrogation, or threat, highlighting that humans are often the weakest security link."
    }
  ]
};

