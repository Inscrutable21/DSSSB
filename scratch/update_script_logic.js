const fs = require('fs');
let script = fs.readFileSync('script.js', 'utf8');
const isCRLF = script.includes('\r\n');
if (isCRLF) {
  script = script.replace(/\r\n/g, '\n');
}

const startMarker = 'function openMCQForCurrentSpread() {';
const endMarker = 'function openMCQModal() {';

const startIdx = script.indexOf(startMarker);
const endIdx = script.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error('Markers not found! start:', startIdx, 'end:', endIdx);
  process.exit(1);
}

const replacement = `function openMCQForCurrentSpread() {
    const isBook5 = (activeBookId === 'book5');
    const targetIdx = isBook5 ? Math.floor(currentSpread / 2) : currentSpread;
    openMCQForSpread(targetIdx);
  }
  window.openMCQForCurrentSpread = openMCQForCurrentSpread;

  function openMCQForSpread(targetSpreadIdx) {
    const sIdx = parseInt(targetSpreadIdx, 10) || 0;
    mcqActiveBook = activeBookId || 'book1';
    mcqCurrentSpreadFilter = sIdx.toString();
    mcqCurrentIndex = Math.max(0, Math.min(sIdx * 10, 199));
    updateMCQTabs();
    populateMCQSpreadFilterSelect();
    if (mcqSpreadFilterSelect) {
      mcqSpreadFilterSelect.value = mcqCurrentSpreadFilter;
    }
    populateMCQJumpSelect('', mcqCurrentSpreadFilter);
    renderMCQQuestion();
    const modal = mcqModal || document.getElementById('mcqModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.style.display = 'flex';
    }
    document.body.style.overflow = 'hidden';
    if (typeof showToast === 'function') {
      const isBook5 = (mcqActiveBook === 'book5');
      const label = isBook5 ? \`Topic \${sIdx + 1}\` : \`Spread \${sIdx + 1}\`;
      showToast(\`🎯 Testing \${label} (Questions Q\${sIdx * 10 + 1}–Q\${sIdx * 10 + 10})\`);
    }
  }
  window.openMCQForSpread = openMCQForSpread;

  function jumpToNotesFromMCQ() {
    const list = mcqDatasets[mcqActiveBook] || [];
    const q = list[mcqCurrentIndex];
    if (!q) return;
    const isBook5 = (mcqActiveBook === 'book5');
    const topicIdx = Math.floor((q.id - 1) / 10);
    const targetSpread = isBook5 ? (topicIdx * 2) : topicIdx;
    const pLeft = targetSpread * 2 + 1;
    const pRight = targetSpread * 2 + 2;

    if (activeBookId !== mcqActiveBook) {
      switchBook(mcqActiveBook);
    }
    closeMCQModal();
    turnToSpread(targetSpread);

    setTimeout(() => {
      const activeBodies = document.querySelectorAll('.page-body');
      activeBodies.forEach(b => {
        b.style.transition = 'box-shadow 0.4s ease, outline 0.4s ease';
        b.style.outline = '3px solid #0ea5e9';
        setTimeout(() => { b.style.outline = 'none'; }, 2200);
      });
    }, 350);

    const label = isBook5 ? \`Topic \${topicIdx + 1}\` : \`Spread \${targetSpread + 1}\`;
    showToast(\`📖 Jumped to Notes: \${label} (Pages \${pLeft}–\${pRight}) for Q\${q.id}!\`);
  }
  window.jumpToNotesFromMCQ = jumpToNotesFromMCQ;

  function populateMCQSpreadFilterSelect() {
    if (!mcqSpreadFilterSelect) return;
    const bookObj = books[mcqActiveBook] || currentBook;
    mcqSpreadFilterSelect.innerHTML = '';

    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = '📚 All 200 Questions (Full Book)';
    mcqSpreadFilterSelect.appendChild(allOpt);

    const isBook5 = (mcqActiveBook === 'book5');
    const topicCount = 20;

    for (let s = 0; s < topicCount; s++) {
      const opt = document.createElement('option');
      opt.value = s.toString();
      const pL = isBook5 ? (s * 4 + 1) : (s * 2 + 1);
      const pR = isBook5 ? (s * 4 + 4) : (s * 2 + 2);
      const qStart = s * 10 + 1;
      const qEnd = s * 10 + 10;
      let title = '';
      const tocIdx = isBook5 ? (s * 2) : s;
      if (bookObj.tocData && bookObj.tocData[tocIdx]) {
        title = bookObj.tocData[tocIdx].title;
      }
      opt.textContent = isBook5
        ? \`Topic \${s + 1} (P. \${pL}–\${pR}): Q\${qStart}–Q\${qEnd} • \${title}\`
        : \`Spread \${s + 1} (P. \${pL}–\${pR}): Q\${qStart}–Q\${qEnd} • \${title}\`;
      if (mcqCurrentSpreadFilter === s.toString()) {
        opt.selected = true;
      }
      mcqSpreadFilterSelect.appendChild(opt);
    }
  }

  `;

script = script.substring(0, startIdx) + replacement + script.substring(endIdx);
if (isCRLF) {
  script = script.replace(/\n/g, '\r\n');
}
fs.writeFileSync('script.js', script, 'utf8');
console.log('Successfully updated script.js with topic navigation support!');
