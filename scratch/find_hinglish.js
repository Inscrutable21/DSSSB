const fs = require('fs');
const readline = require('readline');
const stream = fs.createReadStream('C:/Users/poona/.gemini/antigravity/brain/a1d22687-557d-479c-8b89-bc8d7391e2e8/.system_generated/logs/transcript.jsonl');
const rl = readline.createInterface({ input: stream });
rl.on('line', (line) => {
  if (/hinglish/i.test(line)) {
    const obj = JSON.parse(line);
    console.log(`Step ${obj.step_index} (${obj.source}, ${obj.type}):`);
    if (obj.content) console.log(obj.content.substring(0, 300));
    if (obj.tool_calls) console.log(JSON.stringify(obj.tool_calls).substring(0, 300));
  }
});
