const fs = require('fs');
const lines = fs.readFileSync('C:/Users/poona/.gemini/antigravity/brain/a1d22687-557d-479c-8b89-bc8d7391e2e8/.system_generated/logs/transcript.jsonl', 'utf8').trim().split('\n');
console.log('Total lines:', lines.length);
const last5 = lines.slice(-5);
last5.forEach(l => {
  const obj = JSON.parse(l);
  console.log(`Step ${obj.step_index}: source=${obj.source}, type=${obj.type}`);
  if (obj.type === 'USER_INPUT') console.log('USER_INPUT content:', obj.content);
});
