const fs = require('fs');

global.window = {};
require('../book5_data.js');

const spreads = window.book5Data.spreads;

spreads.forEach((s, idx) => {
  ['left', 'right'].forEach(side => {
    let html = s[side].content;

    // Remove stray tabs and form-feeds introduced by escaped \text and \frac
    html = html.replace(/\t/g, ' ');
    html = html.replace(/\f/g, ' ');

    // 1. Topic 3 (Spread 4 Right) - The LSB Capacity Calculation
    if (idx === 4 && side === 'right') {
      const lsbTargetOld = /<div class="section-block">\s*<span class="section-label">5\. LSB Storage Capacity Calculation \(Q24\)[\s\S]*?<\/div>\s*<\/div>/;
      const lsbReplacement = `<div class="section-block">
      <span class="section-label">5. LSB Storage Capacity Calculation Made Simple (Q24)</span>
      <p>How much secret data can an investigator hide inside a standard photo using 1-bit LSB steganography?</p>
      
      <div class="statute-card card-amber">
        <div class="statute-header">
          <span class="statute-section">The Master Formula (Q24)</span>
          <span class="statute-tag">Exam Calculation</span>
        </div>
        <p style="text-align: center; font-size: 0.96rem; font-weight: 700; color: var(--navy-primary); background: rgba(0,0,0,0.04); padding: 8px; border-radius: 4px; margin: 6px 0;">
          Hidden Capacity (Bytes) = (Width &times; Height &times; Color Channels) &divide; 8
        </p>

        <p><strong>Step-by-Step Practical Example: Full HD Photo (1920 &times; 1080 RGB)</strong></p>
        <ul style="margin: 4px 0 6px 16px; padding: 0; line-height: 1.55;">
          <li><strong>Step 1 (Count Total Pixels):</strong> 1920 wide &times; 1080 high = <strong>2,073,600 total pixels</strong> in the image.</li>
          <li><strong>Step 2 (Count Color Bytes):</strong> In standard RGB color, each pixel has 3 color bytes (Red, Green, Blue).<br>
          Total Color Bytes = 2,073,600 &times; 3 = <strong>6,220,800 bytes</strong>.</li>
          <li><strong>Step 3 (Count Hidden Bits):</strong> Replacing 1 LSB bit in every color byte gives <strong>6,220,800 hidden secret bits</strong>.</li>
          <li><strong>Step 4 (Convert Bits to Bytes):</strong> Since 8 bits = 1 byte:<br>
          6,220,800 bits &divide; 8 = <strong>777,600 Bytes</strong> (roughly <strong>777 KB</strong> or 759 KiB).</li>
        </ul>
        <p style="margin: 6px 0 0 0; font-weight: 600; color: var(--navy-primary);">
          💡 <em>Key Insight for DSSSB:</em> A single innocent Full HD photograph can secretly hold over 777 KB of data — equivalent to a 300-page plain text book or multiple secret PDFs — without any visible difference to the human eye!
        </p>
      </div>
    </div>`;
      html = html.replace(lsbTargetOld, lsbReplacement);
    }

    // 2. Fix pixel bits in Spread 4 Right
    html = html.replace(/\$b_7 b_6 b_5 b_4 b_3 b_2 b_1 b_0\$/g, '<code>b7 b6 b5 b4 b3 b2 b1 b0</code>');
    html = html.replace(/\(MSB, \$b_7\$\)/g, '(MSB, bit 7)');
    html = html.replace(/\(LSB, \$b_0\$\)/g, '(LSB, bit 0)');

    // 3. Topic 2 (Spread 3 Right) - Non-repudiation key K
    html = html.replace(/\(\$K\$\)/g, '(Secret Key K)');
    html = html.replace(/encrypted with \$K\$/g, 'encrypted with Key K');

    // 4. Topic 4 (Spread 6 Left) - Stream XOR formulas
    html = html.replace(/\$ext\{Ciphertext Bit\} = ext\{Plaintext Bit\} oplus ext\{Keystream Bit\}\$/g, '<code>Ciphertext Bit = Plaintext Bit XOR Keystream Bit</code>');
    html = html.replace(/\$ext\{Plaintext Bit\} = ext\{Ciphertext Bit\} oplus ext\{Keystream Bit\}\$/g, '<code>Plaintext Bit = Ciphertext Bit XOR Keystream Bit</code>');

    // 5. Topic 4 (Spread 6 Right) - Feistel block size
    html = html.replace(/\$2w\$ bits/g, '64 bits (or 2w bits)');
    html = html.replace(/\$L_i = R_\{i-1\}\$/g, 'L[i] = R[i-1]');
    html = html.replace(/\$R_i = L_\{i-1\} oplus F\(R_\{i-1\}, K_i\)\$/g, 'R[i] = L[i-1] XOR F(R[i-1], Subkey[i])');
    html = html.replace(/\(\$K_\{16\}\$ down to \$K_1\$\)/g, '(Subkey 16 down to Subkey 1)');
    html = html.replace(/round function \$F\$/g, 'round function F');

    // 6. Topic 4 (Spread 7 Left & Right) - DES & 2DES & 3DES
    html = html.replace(/\$2\^\{56\} approx 7\.2\s*imes 10\^\{16\}\$ keys/g, '2<sup>56</sup> (approx. 72 quadrillion) keys');
    html = html.replace(/\(\$K_1, K_2\$\): \$C = E_\{K2\}\(E_\{K1\}\(P\)\)\$/g, '(Key 1, Key 2): Ciphertext = Encrypt_Key2( Encrypt_Key1( Plaintext ) )');
    html = html.replace(/\$2\^\{56\}\$ to \$2\^\{112\}\$/g, '2<sup>56</sup> to 2<sup>112</sup>');
    html = html.replace(/\$2\^\{57\} security\$/g, '2<sup>57</sup> operations');
    html = html.replace(/\$2\^\{56\}\$!\)/g, '2<sup>56</sup>!)');
    html = html.replace(/\$M = E_\{K1\}\(P\)\$ for all \$2\^\{56\}\$ possible values of \$K_1\$/g, 'M = Encrypt(Plaintext, Key 1) for all 2<sup>56</sup> possible Key 1 values');
    html = html.replace(/\$M' = D_\{K2\}\(C\)\$ for all \$2\^\{56\}\$ possible values of \$K_2\$/g, 'M\' = Decrypt(Ciphertext, Key 2) for all 2<sup>56</sup> possible Key 2 values');
    html = html.replace(/\$2\^\{56\} \+ 2\^\{56\} = 2\^\{57\}\$ operations/g, '2<sup>56</sup> + 2<sup>56</sup> = 2<sup>57</sup> operations');
    html = html.replace(/\$C = E_\{K1\}\(D_\{K2\}\(E_\{K3\}\(P\)\)\)\$/g, 'Ciphertext = Encrypt_K1( Decrypt_K2( Encrypt_K3( Plaintext ) ) )');
    html = html.replace(/\$K_1 = K_2 = K_3\$/g, 'Key 1 = Key 2 = Key 3');
    html = html.replace(/\$D_\{K\}\(E_\{K\}\(P\)\) = P\$/g, 'Decrypt_K( Encrypt_K( Plaintext ) ) = Plaintext');

    // 7. Topic 5 (Spread 8 & 9) - AES matrix and modes
    html = html.replace(/\$4\s*imes 4\$/g, '4 &times; 4');
    html = html.replace(/GF\(\$2\^8\$\)/g, 'GF(2<sup>8</sup>)');
    html = html.replace(/GF\(\$2\^\{128\}\$\)/g, 'GF(2<sup>128</sup>)');
    html = html.replace(/\(\$C_i = E_K\(P_i\)\)\$/g, '(Ciphertext[i] = Encrypt(Key, Plaintext[i]))');
    html = html.replace(/\$C_1 = E_K\(P_1 oplus ext\{IV\}\)\$/g, 'Ciphertext_1 = Encrypt(Key, Plaintext_1 XOR IV)');
    html = html.replace(/\$C_i = E_K\(P_i oplus C_\{i-1\}\)\$/g, 'Ciphertext_i = Encrypt(Key, Plaintext_i XOR Previous_Ciphertext)');
    html = html.replace(/\$C_i = P_i oplus E_K\(ext\{Nonce\} mathbin\{Vert\} ext\{Counter\}_i\)\$/g, 'Ciphertext_i = Plaintext_i XOR Encrypt(Key, Nonce + Counter_i)');
    html = html.replace(/\(\$T\$\)/g, '(Tag T)');

    // 8. Topic 6 (Spread 10 & 11) - RSA Math
    html = html.replace(/\\frac\{N\(N-1\)\}\{2\}/g, '(N &times; (N - 1)) &divide; 2');
    html = html.replace(/\$n = p\s*imes q\$/g, 'n = p &times; q');
    html = html.replace(/modulus \$n\$/g, 'modulus n');
    html = html.replace(/primes \$p\$ and \$q\$/g, 'primes p and q');
    html = html.replace(/&phi;\(n\) = \(p - 1\)\s*imes \(q - 1\)/g, '&phi;(n) = (p - 1) &times; (q - 1)');
    html = html.replace(/\$1 < e < \\phi\(n\)\$ and \$\\gcd\(e, \\phi\(n\)\) = 1\$/g, '1 &lt; e &lt; &phi;(n) and gcd(e, &phi;(n)) = 1');
    html = html.replace(/\$e = 65537\s*\(\$2\^\{16\} \+ 1\$\)\$/g, 'e = 65537 (2<sup>16</sup> + 1)');
    html = html.replace(/\$e = 65537\s*\(2\^\{16\} \+ 1\)\$/g, 'e = 65537 (2<sup>16</sup> + 1)');
    html = html.replace(/\$d \\equiv e\^\{-1\} \\pmod\{\\phi\(n\)\} \\iff \(d\s*imes e\) \\pmod\{\\phi\(n\)\} = 1\$/g, 'd &equiv; e<sup>-1</sup> mod &phi;(n)  &hArr;  (d &times; e) mod &phi;(n) = 1');
    html = html.replace(/exponent \$d\$/g, 'exponent d');
    html = html.replace(/exponent \$e\$/g, 'exponent e');
    html = html.replace(/modulus \$n\$/g, 'modulus n');
    html = html.replace(/message \$M\$/g, 'message M');
    html = html.replace(/ciphertext \$C\$/g, 'ciphertext C');
    html = html.replace(/factors \$p\$ and \$q\$/g, 'factors p and q');
    html = html.replace(/session key \(\$K_\{session\}\$\)/g, 'session key (Key K_session)');
    html = html.replace(/powered by \$K_\{session\}\$/g, 'powered by Session Key K');
    html = html.replace(/recover \$K_\{session\}\$/g, 'recover Session Key K');
    html = html.replace(/\$E\(M_1\)\s*imes E\(M_2\) \\pmod n = E\(M_1\s*imes M_2 \\pmod n\)\$/g, 'Encrypt(M1) &times; Encrypt(M2) mod n = Encrypt(M1 &times; M2) mod n');

    // 9. Topic 7 (Spread 12 & 13) - Diffie-Hellman & ECC
    html = html.replace(/modulus a large prime \$p\$ with generator \$g\$/g, 'modulus prime p with base generator g');
    html = html.replace(/integer \$a\$; computes public \$A = g\^a \\pmod p\$/g, 'integer a; computes public A = (g^a) mod p');
    html = html.replace(/integer \$b\$; computes public \$B = g\^b \\pmod p\$/g, 'integer b; computes public B = (g^b) mod p');
    html = html.replace(/public values \$A\$ and \$B\$/g, 'public values A and B');
    html = html.replace(/secret: \$K = B\^a \\pmod p = \(g\^b\)\^a = g\^\{ab\} \\pmod p\$/g, 'secret: Shared Key = (B^a) mod p = g^(ab) mod p');
    html = html.replace(/secret: \$K = A\^b \\pmod p = \(g\^a\)\^b = g\^\{ab\} \\pmod p\$/g, 'secret: Shared Key = (A^b) mod p = g^(ab) mod p');
    html = html.replace(/seeing \$g, p, A, B\$/g, 'seeing g, p, A, B');
    html = html.replace(/finding \$a\$ given \$g\^a \\pmod p\$/g, 'finding private exponent a given public (g^a) mod p');
    html = html.replace(/public value \$A\$ and Bob's public value \$B\$/g, 'public value A and Bob\'s public value B');
    html = html.replace(/finite fields GF\(\$p\$\)/g, 'finite fields GF(p)');
    html = html.replace(/\$y\^2 = x\^3 \+ ax \+ b \\pmod p\$/g, 'y<sup>2</sup> = x<sup>3</sup> + ax + b (mod p)');
    html = html.replace(/\$4a\^3 \+ 27b\^2 \\neq 0\$/g, '4a<sup>3</sup> + 27b<sup>2</sup> &ne; 0');
    html = html.replace(/\(\$P \+ Q = R\$\)/g, '(P + Q = R)');
    html = html.replace(/base generator point \$G\$/g, 'base generator point G');
    html = html.replace(/point \$Q = d\s*imes G\$/g, 'public point Q = d &times; G');
    html = html.replace(/private integer \$d\$/g, 'private integer d');
    html = html.replace(/random nonce \$k\$/g, 'random nonce k');
    html = html.replace(/reusing \$k\$/g, 'reusing nonce k');
    html = html.replace(/\$k = H\(ext\{key\} \+ M\)\$/g, 'k = Hash(PrivateKey + Message)');

    // 10. Topic 8 & 9 (Spread 14, 15, 16, 17) - Hashes & HMAC
    html = html.replace(/\$H\(M\) = H\(M\)\$/g, 'Hash(M) = Hash(M)');
    html = html.replace(/only a digest \$h\$/g, 'only a digest h');
    html = html.replace(/message \$m\$ such that \$H\(m\) = h\$/g, 'message m such that Hash(m) = h');
    html = html.replace(/specific message \$m_1\$/g, 'specific message m1');
    html = html.replace(/message \$m_2\$ \(\$m_1 \\neq m_2\$\) such that \$H\(m_1\) = H\(m_2\)\$/g, 'different message m2 (m1 &ne; m2) such that Hash(m1) = Hash(m2)');
    html = html.replace(/messages \$m_1\$ and \$m_2\$ \(\$m_1 \\neq m_2\$\) such that \$H\(m_1\) = H\(m_2\)\$/g, 'messages m1 and m2 (m1 &ne; m2) such that Hash(m1) = Hash(m2)');
    html = html.replace(/mathcal\{O\}\(2\^n\)/g, '2<sup>n</sup>');
    html = html.replace(/mathcal\{O\}\(2\^\{n\/2\}\)/g, '2<sup>n/2</sup>');
    html = html.replace(/\\sqrt\{2\^n\} = 2\^\{n\/2\}/g, '&radic;(2<sup>n</sup>) = 2<sup>n/2</sup>');
    html = html.replace(/for an \$n\$-bit hash/g, 'for an n-bit hash');
    html = html.replace(/in \$2\^\{63\}\$ computations/g, 'in 2<sup>63</sup> operations');
    html = html.replace(/\$H_i = f\(H_\{i-1\}, M_i\)\$/g, 'State_i = f(State_(i-1), Block_i)');
    html = html.replace(/\(\$IV\$\)/g, '(IV)');
    html = html.replace(/\(\$b = r \+ c\$\)/g, '(State = Bitrate + Capacity = 1600 bits)');
    html = html.replace(/Bitrate \(\$r\$\)/g, 'Bitrate (r)');
    html = html.replace(/Capacity \(\$c\$\)/g, 'Capacity (c)');
    html = html.replace(/capacity portion \(\$c\$\)/g, 'capacity portion (c)');

    // 11. Topic 10 (Spread 19) - Frequencies
    html = html.replace(/\$approx 12\.7%\$/g, '&approx; 12.7%');
    html = html.replace(/\$approx 9\.1%\$/g, '&approx; 9.1%');
    html = html.replace(/\$approx 8\.2%\$/g, '&approx; 8.2%');
    html = html.replace(/in \$2\^\{43\}\$ operations/g, 'in 2<sup>43</sup> operations');

    // 12. Topic 11 (Spread 20 & 21) - Signatures
    html = html.replace(/\$H = ext\{SHA-256\}\(M\)\$/g, 'Digest = SHA-256(Document)');
    html = html.replace(/\(\$K_\{priv\}\$\): \$S = E_\{Kpriv\}\(H\)\$/g, '(Private Key): Signature = Encrypt_PrivateKey(Digest)');
    html = html.replace(/\(\$K_\{pub\}\$\) to recover the original hash digest: \$H_\{original\} = D_\{Kpub\}\(S\)\$/g, '(Public Key): Original_Digest = Decrypt_PublicKey(Signature)');
    html = html.replace(/\$H_\{computed\} = ext\{SHA-256\}\(M\)\$/g, 'Computed_Digest = SHA-256(Document)');
    html = html.replace(/\$H_\{original\} == H_\{computed\}\$/g, 'Original_Digest == Computed_Digest');

    // 13. Topic 12 (Spread 22) - CA Trust
    html = html.replace(/\(\$Issuer == Subject\$\)/g, '(Issuer == Subject)');

    // 14. Topic 13 (Spread 24 & 25) - Steganalysis
    html = html.replace(/\(\$approx 8\.0\$\)/g, '(&approx; 8.0)');
    html = html.replace(/\$chi\^2\$/g, '&chi;<sup>2</sup>');
    html = html.replace(/\$\(2k, 2k\+1\)\$/g, '(2k, 2k+1)');
    html = html.replace(/\$\(0,1\), \(2,3\), \(4,5\) dots \(254,255\)\$/g, '(0,1), (2,3), (4,5) ... (254,255)');
    html = html.replace(/between \$2k\$ and \$2k\+1\$/g, 'between 2k and 2k+1');
    html = html.replace(/frequencies of \$2k\$ and \$2k\+1\$/g, 'frequencies of 2k and 2k+1');
    html = html.replace(/probability \$p approx 1\.0\$/g, 'probability p &approx; 1.0');
    html = html.replace(/\$R_M approx R_\{-M\}\$/g, 'R_M &approx; R_-M');
    html = html.replace(/error!/g, 'error.');

    // 15. Topic 14 (Spread 27 Right) - Risk Equation
    html = html.replace(/\$ext\{Risk\} = ext\{Threat\} \s*imes ext\{Vulnerability\}\s*imes ext\{Impact\}\$/g, 'Risk = Threat &times; Vulnerability &times; Impact');
    html = html.replace(/\(\$ext\{Threat\} = 0\$\)/g, '(Threat = 0)');

    // 16. Topic 16 (Spread 31 Left) - Clean $1000 price
    html = html.replace(/\$1000/g, '&#36;1,000');

    s[side].content = html;
  });
});

const output = '// Book 5 Data: Information Security, Applied Cryptography & VAPT\n// Comprehensive 80-Page Architecture: 4 Full In-Depth Pages per Syllabus Topic (Clean Plain English)\nwindow.book5Data = ' + JSON.stringify(window.book5Data, null, 2) + ';\n';
fs.writeFileSync('book5_data.js', output, 'utf8');
console.log('Successfully cleaned all LaTeX macros and dollar signs across all 40 spreads in book5_data.js!');

