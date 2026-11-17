const fs = require('fs');
global.window = global;
require('../book5_data.js');

window.book5Data.spreads.forEach((s, idx) => {
  const mH2Left = s.left.content.match(/<h2>(.*?)<\/h2>/);
  const mBadgeLeft = s.left.content.match(/class="badge-primary">(.*?)<\/span>/);
  const mH2Right = s.right.content.match(/<h2>(.*?)<\/h2>/);
  const mBadgeRight = s.right.content.match(/class="badge-primary">(.*?)<\/span>/);
  
  const topicNum = Math.floor(idx / 2) + 1;
  const partNum = (idx % 2) + 1;
  
  console.log(`Topic ${topicNum} (Part ${partNum}) [Spread ${idx}, Pages ${idx*2+1}-${idx*2+2}]:`);
  console.log(`   Left : [${mBadgeLeft ? mBadgeLeft[1] : ''}] -> ${mH2Left ? mH2Left[1] : ''}`);
  console.log(`   Right: [${mBadgeRight ? mBadgeRight[1] : ''}] -> ${mH2Right ? mH2Right[1] : ''}`);
});
