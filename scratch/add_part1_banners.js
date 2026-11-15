const fs = require('fs');
global.window = {};
require('../book5_data.js');

const spreads = window.book5Data.spreads;
spreads.forEach((s, idx) => {
  if (idx % 2 === 0) {
    const topicNum = Math.floor(idx / 2) + 1;
    const topicIdx = Math.floor(idx / 2);
    const qStart = topicIdx * 10 + 1;
    const qEnd = (topicIdx + 1) * 10;
    const marker = `Topic ${topicNum} (Part 1/2) Complete`;
    if (!s.right.content.includes(marker)) {
      const bannerHtml = `
    <div style="margin-top: 14px; padding: 10px 14px; background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; border-radius: 4px; font-size: 0.82rem; color: var(--navy-primary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
      <span>📖 <strong>Topic ${topicNum} (Part 1/2) Complete.</strong> Turn page for Deep Dive, Attacks &amp; Exam Traps &rarr;</span>
      <button class="btn-tool btn-mcq btn-spread-cta-action" data-spread-idx="${topicIdx}" onclick="window.openMCQForSpread(${topicIdx})" style="font-size: 0.76rem; padding: 5px 12px;">
        Practice Quiz (Q${qStart}–Q${qEnd}) &rarr;
      </button>
    </div>`;
      s.right.content += bannerHtml;
    }
  }
});

const output = '// Book 5 Data: Information Security, Applied Cryptography & VAPT\n// Comprehensive 80-Page Architecture: 4 Full In-Depth Pages per Syllabus Topic\nwindow.book5Data = ' + JSON.stringify(window.book5Data, null, 2) + ';\n';
fs.writeFileSync('book5_data.js', output, 'utf8');
console.log('Successfully added Part 1 banners to all 20 even spreads in book5_data.js!');

