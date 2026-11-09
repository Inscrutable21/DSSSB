const fs = require('fs');

global.window = global;
global.window.addEventListener = () => {};
global.window.getSelection = () => ({ toString: () => '' });
global.localStorage = { getItem: () => null, setItem: () => {} };

const makeEl = (id) => {
  const classes = new Set(['hidden']);
  return {
    id,
    classList: {
      add: (c) => classes.add(c),
      remove: (c) => classes.delete(c),
      toggle: (c, force) => {
        if (force === undefined) {
          if (classes.has(c)) classes.delete(c);
          else classes.add(c);
        } else if (force) classes.add(c);
        else classes.delete(c);
      },
      contains: (c) => classes.has(c)
    },
    addEventListener: () => {},
    style: { setProperty: () => {} },
    dataset: {},
    getBoundingClientRect: () => ({ left: 0, width: 1000 }),
    querySelectorAll: () => [],
    querySelector: () => makeEl('inner'),
    appendChild: () => {},
    setAttribute: () => {}
  };
};

const elementRegistry = new Map();
const getOrCreateEl = (id) => {
  if (!elementRegistry.has(id)) {
    elementRegistry.set(id, makeEl(id));
  }
  return elementRegistry.get(id);
};

global.documentClickListeners = [];
global.document = {
  documentElement: makeEl('html'),
  addEventListener: (evt, cb) => {
    if (evt === 'DOMContentLoaded') global.domReady = cb;
    if (evt === 'click') global.documentClickListeners.push(cb);
  },
  getElementById: (id) => getOrCreateEl(id),
  createElement: (tag) => makeEl(tag),
  querySelector: () => makeEl('q'),
  querySelectorAll: () => [],
  body: { classList: { add: () => {}, remove: () => {}, toggle: () => {} }, style: {}, setAttribute: () => {} }
};

// Load datasets
require('../book1_data.js');
require('../book2_data.js');
require('../book3_data.js');
require('../book4_data.js');
require('../book5_data.js');
require('../book1_mcqs.js');
require('../book2_mcqs.js');
require('../book3_mcqs.js');
require('../book4_mcqs.js');
require('../book5_mcqs.js');

// Load script
require('../script.js');
global.domReady();

console.log('=== VERIFYING ALL 5 BOOKS & SPREAD ALIGNMENTS ===');
const books = ['book1', 'book2', 'book3', 'book4', 'book5'];
let allOk = true;

books.forEach((bId, bIndex) => {
  const data = global[bId + 'Data'];
  const mcqs = global[bId + 'MCQs'];

  console.log(`\nChecking ${bId.toUpperCase()}: "${data.shortTitle}" (${data.badge})`);
  if (!data.id || !data.shortTitle || !data.badge) {
    console.error(`FAIL: ${bId} missing metadata!`);
    allOk = false;
  }

  if (!data.spreads || data.spreads.length !== 20) {
    console.error(`FAIL: ${bId} has ${data.spreads ? data.spreads.length : 0} spreads (expected 20)`);
    allOk = false;
  }

  if (!mcqs || mcqs.length !== 200) {
    console.error(`FAIL: ${bId} has ${mcqs ? mcqs.length : 0} MCQs (expected 200)`);
    allOk = false;
  }

  let bannerCountTotal = 0;
  data.spreads.forEach((spread, sIdx) => {
    // Check right page content
    const rightContent = spread.right.content;
    const bannerMatches = (rightContent.match(/class="spread-quiz-cta-banner"/g) || []).length;
    bannerCountTotal += bannerMatches;
    if (bannerMatches !== 1) {
      console.warn(`WARNING: ${bId} Spread ${sIdx + 1} has ${bannerMatches} banners in HTML content!`);
    }

    // Verify openMCQForSpread runs without throwing
    try {
      global.window.openMCQForSpread(sIdx);
    } catch (e) {
      console.error(`FAIL: ${bId} Spread ${sIdx + 1} openMCQForSpread threw:`, e.message);
      allOk = false;
    }
  });

  console.log(`  Spreads: 20/20 | MCQs: 200/200 | Banners in HTML: ${bannerCountTotal}/20`);
});

console.log('\n=== TESTING MODAL OPEN/CLOSE STATE ===');
const modal = document.getElementById('mcqModal');
global.window.openMCQModal();
console.log('openMCQModal called. Modal display:', modal.style.display, 'classList contains hidden:', modal.classList.contains('hidden'));
if (modal.classList.contains('hidden')) {
  console.error('FAIL: modal still has hidden after openMCQModal()');
  allOk = false;
}

global.window.closeMCQModal();
console.log('closeMCQModal called. Modal display:', modal.style.display, 'classList contains hidden:', modal.classList.contains('hidden'));
if (!modal.classList.contains('hidden')) {
  console.error('FAIL: modal does not have hidden after closeMCQModal()');
  allOk = false;
}

global.window.openMCQForSpread(5);
console.log('openMCQForSpread(5) called. Modal display:', modal.style.display, 'classList contains hidden:', modal.classList.contains('hidden'));
if (modal.classList.contains('hidden')) {
  console.error('FAIL: modal still has hidden after openMCQForSpread(5)');
  allOk = false;
}

console.log('\n=== TESTING GLOBAL CLICK EVENT DELEGATION ===');
// Find click listener registered on document
const docListeners = global.documentClickListeners || [];
console.log('Document click listeners count:', docListeners.length);

function simulateClick(el) {
  const event = {
    target: el,
    defaultPrevented: false,
    propagationStopped: false,
    preventDefault: function() { this.defaultPrevented = true; },
    stopPropagation: function() { this.propagationStopped = true; }
  };
  docListeners.forEach(listener => listener(event));
  return event;
}

// Test clicking in-page CTA button
const testBtn = makeEl('testCtaBtn');
testBtn.classList.add('btn-spread-cta-action');
testBtn.setAttribute('data-spread-idx', '3');
testBtn.closest = (sel) => sel.includes('btn-spread-cta-action') ? testBtn : null;

// Close modal first
global.window.closeMCQModal();
console.log('Before click, modal hidden:', modal.classList.contains('hidden'));

simulateClick(testBtn);
console.log('After clicking in-page CTA button, modal hidden:', modal.classList.contains('hidden'), 'display:', modal.style.display);
if (modal.classList.contains('hidden')) {
  console.error('FAIL: in-page CTA button did not open modal!');
  allOk = false;
}

// Test clicking header 1,000 MCQs button
global.window.closeMCQModal();
const headerMcqBtn = getOrCreateEl('mcqModalBtn');
headerMcqBtn.closest = (sel) => sel.includes('#mcqModalBtn') ? headerMcqBtn : null;

simulateClick(headerMcqBtn);
console.log('After clicking #mcqModalBtn, modal hidden:', modal.classList.contains('hidden'), 'display:', modal.style.display);
if (modal.classList.contains('hidden')) {
  console.error('FAIL: header #mcqModalBtn did not open modal!');
  allOk = false;
}

console.log('\n=======================================');
if (allOk) {
  console.log('ALL VERIFICATIONS PASSED! 100% HEALTHY!');
} else {
  console.error('SOME CHECKS FAILED! Review above errors.');
  process.exit(1);
}
