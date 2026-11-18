const fs = require('fs');
const readline = require('readline');
const stream = fs.createReadStream('C:/Users/poona/.gemini/antigravity/brain/a1d22687-557d-479c-8b89-bc8d7391e2e8/.system_generated/logs/transcript.jsonl');
const rl = readline.createInterface({ input: stream });
rl.on('line', (line) => {
  if (line.includes('"USER_INPUT"') && /skill\.md/i.test(line)) {
    const obj = JSON.parse(line);
    console.log(`Step ${obj.step_index}:`);
    console.log(obj.content);
  }
});
