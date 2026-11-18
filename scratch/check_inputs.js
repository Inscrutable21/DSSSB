const fs = require('fs');
const readline = require('readline');
const stream = fs.createReadStream('C:/Users/poona/.gemini/antigravity/brain/a1d22687-557d-479c-8b89-bc8d7391e2e8/.system_generated/logs/transcript.jsonl');
const rl = readline.createInterface({ input: stream });
const userInputs = [];
rl.on('line', (line) => {
  if (line.includes('"USER_INPUT"')) {
    try {
      userInputs.push(JSON.parse(line));
    } catch(e) {}
  }
});
rl.on('close', () => {
  console.log('Total user inputs:', userInputs.length);
  const lastInputs = userInputs.slice(-3);
  lastInputs.forEach((u, i) => {
    console.log(`--- User Input ${i} (step ${u.step_index}) ---`);
    console.log(u.content);
    if (u.media) console.log('Media:', u.media);
  });
});
