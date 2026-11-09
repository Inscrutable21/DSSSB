const { spawn } = require('child_process');
const http = require('http');

async function run() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--user-data-dir=C:\\Users\\poona\\.gemini\\antigravity\\brain\\a1d22687-557d-479c-8b89-bc8d7391e2e8\\scratch\\chrome_profile',
    '--disable-gpu',
    '--no-sandbox',
    'file:///e:/DSSSB/index.html'
  ]);

  // Wait for remote debugging port
  let wsUrl = null;
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 250));
    try {
      const data = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:9222/json/list', res => {
          let buf = '';
          res.on('data', chunk => buf += chunk);
          res.on('end', () => resolve(buf));
        }).on('error', reject);
      });
      const pages = JSON.parse(data);
      if (pages.length > 0 && pages[0].webSocketDebuggerUrl) {
        wsUrl = pages[0].webSocketDebuggerUrl;
        break;
      }
    } catch (e) {}
  }

  if (!wsUrl) {
    console.error('Could not connect to Chrome debugging port');
    chrome.kill();
    return;
  }

  console.log('Connected to Chrome CDP:', wsUrl);
  const ws = new WebSocket(wsUrl);

  let msgId = 1;
  const pending = new Map();
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.method === 'Runtime.consoleAPICalled') {
      console.log('[BROWSER CONSOLE]', msg.params.type, msg.params.args.map(a => a.value || a.description).join(' '));
    } else if (msg.method === 'Runtime.exceptionThrown') {
      console.error('[BROWSER EXCEPTION]', msg.params.exceptionDetails.text, msg.params.exceptionDetails.exception ? msg.params.exceptionDetails.exception.description : '');
    }
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg.result);
      pending.delete(msg.id);
    }
  };

  const send = (method, params = {}) => new Promise((resolve) => {
    const id = msgId++;
    pending.set(id, resolve);
    ws.send(JSON.stringify({ id, method, params }));
  });

  await new Promise(r => ws.onopen = r);
  await send('Runtime.enable');
  await send('Page.enable');

  await new Promise(r => setTimeout(r, 1000));

  console.log('\n--- EVALUATING BROWSER STATE ---');
  const evalResult = await send('Runtime.evaluate', {
    expression: `({
      openMCQForSpreadType: typeof window.openMCQForSpread,
      openMCQForCurrentSpreadType: typeof window.openMCQForCurrentSpread,
      openMCQModalType: typeof window.openMCQModal,
      activeBook: typeof activeBookId !== 'undefined' ? activeBookId : 'undefined',
      mcqModalHidden: document.getElementById('mcqModal') ? document.getElementById('mcqModal').classList.contains('hidden') : 'no-modal',
      ctaButtonsCount: document.querySelectorAll('.spread-quiz-cta-banner button, .btn-spread-cta-action').length,
      ctaButtonsText: Array.from(document.querySelectorAll('.spread-quiz-cta-banner button, .btn-spread-cta-action')).map(b => b.textContent.trim())
    })`,
    returnByValue: true
  });
  console.log('Browser State:', evalResult.result.value);

  console.log('\n--- TESTING CLICK ON IN-PAGE BUTTON ---');
  const clickTest = await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('.spread-quiz-cta-banner button, .btn-spread-cta-action');
      if (!btn) return 'No button found';
      btn.click();
      const modal = document.getElementById('mcqModal');
      return {
        buttonClicked: btn.textContent.trim(),
        modalHiddenNow: modal ? modal.classList.contains('hidden') : null,
        modalDisplay: modal ? window.getComputedStyle(modal).display : null,
        questionText: document.getElementById('mcqQText') ? document.getElementById('mcqQText').textContent.substring(0, 50) : null
      };
    })()`,
    returnByValue: true
  });
  console.log('Click Test Result:', clickTest.result.value);

  ws.close();
  chrome.kill();
}

run().catch(console.error);
