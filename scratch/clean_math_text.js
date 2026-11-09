const fs = require('fs');

let content = fs.readFileSync('book5_data.js', 'utf8');

const additionalReplacements = [
  [/\$L_i = R_\{i-1\}\$/g, 'Left half takes previous Right half'],
  [/\$R_i = L_\{i-1\} \\\\oplus F\(R_\{i-1\}, K_i\)\$/g, 'Right half takes previous Left half XORed with Round Function output'],
  [/\$\(M, Key 1\)\$/g, '(intermediate value M, Key 1)'],
  [/\$\\\\approx 1\.4 × 10<sup>17<\/sup>\$/g, '(roughly 1.4 × 10<sup>17</sup> steps)'],
  [/\$M'\$/g, "M'"],
  [/\$\(Key 1, Key 2\)\$/g, '(Key 1, Key 2)'],
  [/\$Galois Field GF\(2<sup>8<\/sup>\)\$/g, 'Galois Field GF(2<sup>8</sup>)'],
  [/\$GF\(2\)\$/g, 'GF(2)'],
  [/\$\(x\^4 \+ 1\)\$/g, 'modulo (x<sup>4</sup> + 1)'],
  [/\$\[02, 03, 01, 01\]\$/g, '[02, 03, 01, 01]'],
  [/\$i \\\\ge 2\$/g, 'all subsequent blocks'],
  [/\$C_1\$/g, 'Ciphertext Block 1'],
  [/\$P_1\$/g, 'Plaintext Block 1'],
  [/\$P_2\$/g, 'Plaintext Block 2'],
  [/\$P_3, P_4, \\\\dots\$/g, 'Plaintext Blocks 3, 4, and beyond'],
  [/\$\\\\text\{GF\}\(2\^\{128\}\)\$/g, 'Galois Field GF(2<sup>128</sup>)'],
  [/\$n = p \\times q\$/g, 'n = p × q'],
  [/\$phi\(n\) = \(p - 1\) × \(q - 1\)\$/g, 'phi(n) = (p - 1) × (q - 1)'],
  [/\$m_1 \\neq m_2\$/g, 'two different messages m1 &ne; m2'],
  [/\$H\(\\text\{secret\} \\\\parallel \\text\{data\}\)\$/g, 'Hash(secret || data)'],
  [/\$\\text\{HMAC\}\(K, m\) = H\(\(K \\\\oplus \\text\{opad\}\) \\\\parallel H\(\(K \\\\oplus \\text\{ipad\}\) \\\\parallel m\)\)\$/g, '<code>HMAC(Key, Message) = Hash((Key XOR opad) || Hash((Key XOR ipad) || Message))</code>'],
  [/\$d < \\frac\{1\}\{3\} n\^\{1\/4\}\$/g, 'd is smaller than (1/3) × n<sup>1/4</sup>'],
  [/\$8 \\times 8\$/g, '8×8'],
  [/\$\\nightarrow\$/g, '&rarr;'],
  [/\\nightarrow/g, '&rarr;']
];

additionalReplacements.forEach(([pattern, repl]) => {
  content = content.replace(pattern, repl);
});

// Check if any $ remains
const remaining = content.match(/\$[^$\n]+\$/g) || [];
console.log('Final remaining dollar patterns:', remaining.length);
if (remaining.length > 0) {
  console.log('Remaining:', remaining);
}

fs.writeFileSync('book5_data.js', content, 'utf8');
console.log('Finished updating book5_data.js');
