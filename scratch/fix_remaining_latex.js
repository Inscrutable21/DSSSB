const fs = require('fs');

global.window = {};
require('../book5_data.js');

const spreads = window.book5Data.spreads;

spreads.forEach((s, idx) => {
  ['left', 'right'].forEach(side => {
    let html = s[side].content;

    // Fix remaining ext{ and oplus
    html = html.replace(/\$?\s*ext\{Ciphertext Bit\}\s*=\s*ext\{Plaintext Bit\}\s*oplus\s*ext\{Keystream Bit\}\s*\$?/, '<code>Ciphertext Bit = Plaintext Bit XOR Keystream Bit</code>');
    html = html.replace(/\$?\s*ext\{Plaintext Bit\}\s*=\s*ext\{Ciphertext Bit\}\s*oplus\s*ext\{Keystream Bit\}\s*\$?/, '<code>Plaintext Bit = Ciphertext Bit XOR Keystream Bit</code>');
    
    html = html.replace(/\$C_1 = E_K\(P_1 oplus\s*ext\{IV\}\)\$/, '<code>Ciphertext_1 = Encrypt(Key, Plaintext_1 XOR IV)</code>');
    html = html.replace(/\$C_i = P_i oplus E_K\( ext\{Nonce\} mathbin\{Vert\}\s*ext\{Counter\}_i\)\$/, '<code>Ciphertext_i = Plaintext_i XOR Encrypt(Key, Nonce + Counter_i)</code>');

    // Fix rac{
    html = html.replace(/\$?\s*rac\{N\(N-1\)\}\{2\}\s*\$?/, '<strong>(N &times; (N - 1)) &divide; 2</strong>');
    html = html.replace(/\$?\s*rac\{23\s*imes\s*22\}\{2\}\s*=\s*253\s*pairs\s*\$?/, '(23 &times; 22) &divide; 2 = 253 pairs');

    // Fix RSA math
    html = html.replace(/\$d equiv e\^\{-1\} pmod\{phi\(n\)\} iff \(d\s*imes e\) pmod\{phi\(n\)\} = 1\$/, '<strong>d &equiv; e<sup>-1</sup> mod &phi;(n)</strong> &nbsp;(meaning: <code>(d &times; e) mod &phi;(n) = 1</code>)');
    html = html.replace(/\$E\(M_1\)\s*imes E\(M_2\) pmod n = E\(M_1\s*imes M_2 pmod n\)\$/, '<code>Encrypt(M1) &times; Encrypt(M2) mod n = Encrypt(M1 &times; M2) mod n</code>');

    // Fix DH
    html = html.replace(/finding \$a\$ given \$g\^a pmod p\$/, 'finding private exponent <em>a</em> given public (g<sup>a</sup> mod p)');

    // Fix mathbf
    html = html.replace(/\$mathbf\{2\^\{n\/2\}\}\$/, '<strong>2<sup>n/2</sup></strong>');
    html = html.replace(/\$mathbf\{2\^\{n\/2\}\}\$ operations/g, '<strong>2<sup>n/2</sup></strong> operations');

    // Fix Signatures
    html = html.replace(/\$H =\s*ext\{SHA-256\}\(M\)\$/, '<strong>Digest = SHA-256(Document)</strong>');
    html = html.replace(/H_\{computed\} =\s*ext\{SHA-256\}\(M\)/, 'Computed_Digest = SHA-256(Document)');
    html = html.replace(/\$k = H\(\s*ext\{key\}\s*\+\s*M\)\$/, 'k = Hash(PrivateKey + Message)');

    // Fix Risk
    html = html.replace(/\$?\s*ext\{Risk\} =\s*ext\{Threat\}\s*imes\s*ext\{Vulnerability\}\s*imes\s*ext\{Impact\}\s*\$?/, '<strong>Risk = Threat &times; Vulnerability &times; Impact</strong>');
    html = html.replace(/\(\$?\s*ext\{Threat\}\s*=\s*0\s*\$?\)/, '(Threat = 0)');

    // Any remaining stray dollar signs
    html = html.replace(/\$/g, '');

    s[side].content = html;
  });
});

const output = '// Book 5 Data: Information Security, Applied Cryptography & VAPT\n// Comprehensive 80-Page Architecture: 4 Full In-Depth Pages per Syllabus Topic (Clean Plain English)\nwindow.book5Data = ' + JSON.stringify(window.book5Data, null, 2) + ';\n';
fs.writeFileSync('book5_data.js', output, 'utf8');
console.log('Successfully completed final polish in book5_data.js!');

