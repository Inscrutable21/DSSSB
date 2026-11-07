/**
 * DSSSB Junior Scientific Assistant (Cyber Forensic)
 * 3D Interactive Digital Textbook Controller — 2-Book Multi-Curriculum Engine
 * Fully paginated:
 *   • Book 1: Cyber Crimes, Offences & Penalties (IT Act 2000, BNS 2023, BSA 2023)
 *   • Book 2: Digital Forensics & Electronic Evidence (SOPs, Acquisition, Carving, Hashing, Tools)
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const leftPageEl = document.getElementById('leftPage');
  const rightPageEl = document.getElementById('rightPage');
  const textbook = document.getElementById('textbook');
  const turningLeaf = document.getElementById('turningLeaf');
  const leafFront = document.getElementById('leafFront');
  const leafBack = document.getElementById('leafBack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const firstPageBtn = document.getElementById('firstPageBtn');
  const lastPageBtn = document.getElementById('lastPageBtn');
  const autoFlipBtn = document.getElementById('autoFlipBtn');
  const pageRange = document.getElementById('pageRange');
  const pageIndicator = document.getElementById('pageIndicator');
  const tocToggleBtn = document.getElementById('tocToggleBtn');
  const tocDrawer = document.getElementById('tocDrawer');
  const closeTocBtn = document.getElementById('closeTocBtn');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const tocList = document.getElementById('tocList');
  const deepDiveToggleBtn = document.getElementById('deepDiveToggleBtn');
  const deepDiveDrawer = document.getElementById('deepDiveDrawer');
  const closeDeepDiveBtn = document.getElementById('closeDeepDiveBtn');
  const deepDiveTabs = document.getElementById('deepDiveTabs');
  const deepDiveBody = document.getElementById('deepDiveBody');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const searchResultsDropdown = document.getElementById('searchResultsDropdown');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const fontSizeIncBtn = document.getElementById('fontSizeIncBtn');
  const fontSizeDecBtn = document.getElementById('fontSizeDecBtn');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const viewModeToggleBtn = document.getElementById('viewModeToggleBtn');
  const audioNarrationBtn = document.getElementById('audioNarrationBtn');
  const bottomAudioBtn = document.getElementById('bottomAudioBtn');
  const audioStatusText = document.getElementById('audioStatusText');

  // Book Switcher & Bookshelf Modal Elements
  const bookBtn1 = document.getElementById('bookBtn1');
  const bookBtn2 = document.getElementById('bookBtn2');
  const bookBtn3 = document.getElementById('bookBtn3');
  const bookBtn4 = document.getElementById('bookBtn4');
  const bookBtn5 = document.getElementById('bookBtn5');
  const libraryModalBtn = document.getElementById('libraryModalBtn');
  const bookshelfModal = document.getElementById('bookshelfModal');
  const closeBookshelfBtn = document.getElementById('closeBookshelfBtn');
  const headerExamBadge = document.getElementById('headerExamBadge');
  const headerBookTitle = document.getElementById('headerBookTitle');
  const toastNotification = document.getElementById('toastNotification');

  // Multi-Book Registry
  const books = {
    book1: window.book1Data,
    book2: window.book2Data,
    book3: window.book3Data,
    book4: window.book4Data,
    book5: window.book5Data
  };

  // State
  let activeBookId = 'book1';
  try {
    const savedBook = localStorage.getItem('dsssb_active_book');
    if (savedBook && books[savedBook]) {
      activeBookId = savedBook;
    }
  } catch (e) {}

  let currentBook = books[activeBookId] || books.book1;
  let spreads = currentBook.spreads;
  let tocData = currentBook.tocData;
  let deepDiveData = currentBook.deepDiveData;
  let deepDiveTabsConfig = currentBook.deepDiveTabs;

  // Stored reading positions per book
  const bookPositions = {
    book1: { currentSpread: 0, currentPageIndex: 0 },
    book2: { currentSpread: 0, currentPageIndex: 0 },
    book3: { currentSpread: 0, currentPageIndex: 0 },
    book4: { currentSpread: 0, currentPageIndex: 0 },
    book5: { currentSpread: 0, currentPageIndex: 0 }
  };

  let isSinglePage = (window.innerWidth <= 768);
  let currentSpread = 0;
  let currentPageIndex = 0;
  let isFlipping = false;
  let isAutoFlip = false;
  let autoFlipInterval = null;
  let isSpeaking = false;
  let currentUtterance = null;
  let currentThemeIndex = 0;
  const themes = ['theme-parchment', 'theme-white', 'theme-dark'];
  let currentFontSizePercent = 100;

  // Flat list of pages for single-page mode
  let pages = [];
  function updatePagesList() {
    pages = [];
    spreads.forEach((spread, sIdx) => {
      pages.push({ ...spread.left, spreadIndex: sIdx, side: 'left' });
      pages.push({ ...spread.right, spreadIndex: sIdx, side: 'right' });
    });
  }
  updatePagesList();

  // =========================================================================
  // TOAST NOTIFICATION
  // =========================================================================
  let toastTimer = null;
  function showNotification(message, icon = '📖') {
    if (!toastNotification) return;
    toastNotification.innerHTML = `<span class="toast-icon">${icon}</span> <span>${message}</span>`;
    toastNotification.classList.remove('hidden');
    toastNotification.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('visible');
      setTimeout(() => toastNotification.classList.add('hidden'), 300);
    }, 2400);
  }

  function showToast(message, icon = '🎯') {
    showNotification(message, icon);
  }
  window.showNotification = showNotification;
  window.showToast = showToast;

  // =========================================================================
  // BOOK SWITCHER ENGINE
  // =========================================================================
  function switchBook(bookId, targetSpread = null) {
    if (!books[bookId] || bookId === activeBookId && targetSpread === null) return;

    // Save position of current book
    bookPositions[activeBookId] = {
      currentSpread,
      currentPageIndex
    };

    stopAudioNarration();

    activeBookId = bookId;
    currentBook = books[activeBookId];
    spreads = currentBook.spreads;
    tocData = currentBook.tocData;
    deepDiveData = currentBook.deepDiveData;
    deepDiveTabsConfig = currentBook.deepDiveTabs;
    updatePagesList();

    try {
      localStorage.setItem('dsssb_active_book', activeBookId);
    } catch (e) {}

    // Update Header Metadata
    if (headerExamBadge) headerExamBadge.textContent = currentBook.badge;
    if (headerBookTitle) headerBookTitle.textContent = currentBook.shortTitle;

    // Update Header Switcher Tabs
    if (bookBtn1) bookBtn1.classList.toggle('active', activeBookId === 'book1');
    if (bookBtn2) bookBtn2.classList.toggle('active', activeBookId === 'book2');
    if (bookBtn3) bookBtn3.classList.toggle('active', activeBookId === 'book3');
    if (bookBtn4) bookBtn4.classList.toggle('active', activeBookId === 'book4');
    if (bookBtn5) bookBtn5.classList.toggle('active', activeBookId === 'book5');

    // Update Deep-Dive / Lab Button Label
    if (deepDiveToggleBtn) {
      const longLabel = deepDiveToggleBtn.querySelector('.deepdive-label-long');
      const shortLabel = deepDiveToggleBtn.querySelector('.deepdive-label-short');
      if (longLabel) longLabel.textContent = currentBook.labBtnLong;
      if (shortLabel) shortLabel.textContent = currentBook.labBtnShort;
      deepDiveToggleBtn.title = currentBook.labDrawerSubtitle;
    }

    // Update Table of Contents
    const tocSubtitle = document.querySelector('.toc-subtitle');
    if (tocSubtitle) tocSubtitle.textContent = currentBook.tocSubtitle;
    initTOC();

    // Update Deep Dive Drawer Header & Tabs
    updateDeepDiveDrawerConfig();

    // Update Bookshelf Modal active cards
    updateBookshelfModalCards();

    // Determine target spread/page
    if (targetSpread !== null && targetSpread >= 0 && targetSpread < spreads.length) {
      currentSpread = targetSpread;
      currentPageIndex = currentSpread * 2;
    } else {
      const saved = bookPositions[activeBookId];
      currentSpread = saved.currentSpread || 0;
      currentPageIndex = saved.currentPageIndex || 0;
    }

    renderCurrentView();

    document.body.setAttribute('data-active-book', activeBookId);

    const bookIcon = (activeBookId === 'book2') ? '🔬' : (activeBookId === 'book3') ? '⚡' : (activeBookId === 'book4') ? '📱' : (activeBookId === 'book5') ? '🛡️' : '📖';
    showNotification(`Opened ${currentBook.shortTitle}`, bookIcon);
  }

  // =========================================================================
  // BOOKSHELF MODAL CONTROLLER
  // =========================================================================
  function openBookshelfModal() {
    updateBookshelfModalCards();
    if (bookshelfModal) {
      bookshelfModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeBookshelfModal() {
    if (bookshelfModal) {
      bookshelfModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  function updateBookshelfModalCards() {
    const card1 = document.getElementById('shelfCardBook1');
    const card2 = document.getElementById('shelfCardBook2');
    const card3 = document.getElementById('shelfCardBook3');
    const card4 = document.getElementById('shelfCardBook4');
    const card5 = document.getElementById('shelfCardBook5');

    if (card1) {
      const isAct1 = (activeBookId === 'book1');
      card1.classList.toggle('active-reading', isAct1);
      const b1 = card1.querySelector('.active-badge');
      if (b1) b1.classList.toggle('hidden', !isAct1);
    }

    if (card2) {
      const isAct2 = (activeBookId === 'book2');
      card2.classList.toggle('active-reading', isAct2);
      const b2 = card2.querySelector('.active-badge');
      if (b2) b2.classList.toggle('hidden', !isAct2);
    }

    if (card3) {
      const isAct3 = (activeBookId === 'book3');
      card3.classList.toggle('active-reading', isAct3);
      const b3 = card3.querySelector('.active-badge');
      if (b3) b3.classList.toggle('hidden', !isAct3);
    }

    if (card4) {
      const isAct4 = (activeBookId === 'book4');
      card4.classList.toggle('active-reading', isAct4);
      const b4 = card4.querySelector('.active-badge');
      if (b4) b4.classList.toggle('hidden', !isAct4);
    }

    if (card5) {
      const isAct5 = (activeBookId === 'book5');
      card5.classList.toggle('active-reading', isAct5);
      const b5 = card5.querySelector('.active-badge');
      if (b5) b5.classList.toggle('hidden', !isAct5);
    }
  }

  // =========================================================================
  // AUDIO NARRATION CONTROLLER (Web Speech API)
  // =========================================================================
  function stopAudioNarration() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    isSpeaking = false;
    if (audioNarrationBtn) {
      audioNarrationBtn.classList.remove('active');
      if (audioStatusText) audioStatusText.textContent = 'Listen';
    }
    if (bottomAudioBtn) {
      bottomAudioBtn.classList.remove('btn-primary');
      bottomAudioBtn.textContent = 'Audio: Play';
    }
    document.querySelectorAll('.page-body').forEach(el => el.classList.remove('audio-reading-active'));
  }

  function toggleAudioNarration() {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in this browser.');
      return;
    }

    if (isSpeaking) {
      stopAudioNarration();
      return;
    }

    let activeBody = null;
    if (isSinglePage) {
      activeBody = rightPageEl.querySelector('.page-body');
    } else {
      activeBody = leftPageEl.querySelector('.page-body') || rightPageEl.querySelector('.page-body');
    }

    if (!activeBody) return;

    const textToRead = activeBody.innerText || activeBody.textContent;
    if (!textToRead || textToRead.trim().length === 0) return;

    window.speechSynthesis.cancel();
    currentUtterance = new SpeechSynthesisUtterance(textToRead);
    currentUtterance.rate = 0.95;
    currentUtterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('David')));
    if (naturalVoice) {
      currentUtterance.voice = naturalVoice;
    }

    currentUtterance.onstart = () => {
      isSpeaking = true;
      if (audioNarrationBtn) {
        audioNarrationBtn.classList.add('active');
        if (audioStatusText) audioStatusText.textContent = 'Stop';
      }
      if (bottomAudioBtn) {
        bottomAudioBtn.classList.add('btn-primary');
        bottomAudioBtn.textContent = 'Audio: Stop';
      }
      activeBody.classList.add('audio-reading-active');
    };

    currentUtterance.onend = () => {
      stopAudioNarration();
    };

    currentUtterance.onerror = () => {
      stopAudioNarration();
    };

    window.speechSynthesis.speak(currentUtterance);
  }

  // =========================================================================
  // RENDER CONTROLLER (Two-Page Spread & Single-Page View)
  // =========================================================================
  function renderPageContent(pageData, isLeft) {
    const qStart = currentSpread * 10 + 1;
    const qEnd = Math.min(currentSpread * 10 + 10, 200);
    const ctaBanner = !isLeft ? `
      <div class="spread-quiz-cta-banner">
        <div class="spread-quiz-cta-info">
          <span class="spread-quiz-icon">🎯</span>
          <div>
            <div class="spread-quiz-title">Test Your Mastery on this Topic</div>
            <div class="spread-quiz-subtitle">10 high-yield DSSSB exam questions (Q${qStart}–Q${qEnd}) map directly to this spread.</div>
          </div>
        </div>
        <button class="btn-spread-cta-action" onclick="window.openMCQForCurrentSpread()">
          Practice Questions (Q${qStart}–Q${qEnd}) &rarr;
        </button>
      </div>
    ` : '';

    return `
      <div class="page-content">
        <div class="page-running-head">
          <span>${isLeft ? pageData.runningHead : 'P. ' + pageData.pageNumber}</span>
          <span>${isLeft ? 'P. ' + pageData.pageNumber : pageData.runningHead}</span>
        </div>
        <div class="page-body">
          ${pageData.content}
          ${ctaBanner}
        </div>
        <div class="page-footer">
          <span>${currentBook.shortTitle}</span>
          <span>Page ${pageData.pageNumber}</span>
        </div>
      </div>
    `;
  }

  function renderCurrentView() {
    stopAudioNarration();

    if (window.innerWidth <= 768) {
      isSinglePage = true;
    }

    if (isSinglePage) {
      document.body.classList.add('single-page-mode');
      if (viewModeToggleBtn) viewModeToggleBtn.textContent = '2-Page';

      rightPageEl.innerHTML = renderPageContent(pages[currentPageIndex], false);

      pageRange.min = 0;
      pageRange.max = pages.length - 1;
      pageRange.value = currentPageIndex;

      const pNum = pages[currentPageIndex].pageNumber;
      pageIndicator.textContent = `Page ${pNum} of ${pages.length} (${currentBook.id === 'book1' ? 'Book 1' : 'Book 2'})`;

      prevBtn.disabled = (currentPageIndex === 0);
      firstPageBtn.disabled = (currentPageIndex === 0);
      nextBtn.disabled = (currentPageIndex === pages.length - 1);
      lastPageBtn.disabled = (currentPageIndex === pages.length - 1);

      document.querySelectorAll('.toc-item').forEach((el, idx) => {
        el.classList.toggle('active', idx === Math.floor(currentPageIndex / 2));
      });
    } else {
      document.body.classList.remove('single-page-mode');
      if (viewModeToggleBtn) viewModeToggleBtn.textContent = '1-Page';

      currentSpread = Math.floor(currentPageIndex / 2);
      const spread = spreads[currentSpread];
      leftPageEl.innerHTML = renderPageContent(spread.left, true);
      rightPageEl.innerHTML = renderPageContent(spread.right, false);

      pageRange.min = 0;
      pageRange.max = spreads.length - 1;
      pageRange.value = currentSpread;

      const pLeft = spread.left.pageNumber;
      const pRight = spread.right.pageNumber;
      pageIndicator.textContent = `Spread ${currentSpread + 1} of ${spreads.length} (Pages ${pLeft}–${pRight})`;

      prevBtn.disabled = (currentSpread === 0);
      firstPageBtn.disabled = (currentSpread === 0);
      nextBtn.disabled = (currentSpread === spreads.length - 1);
      lastPageBtn.disabled = (currentSpread === spreads.length - 1);

      document.querySelectorAll('.toc-item').forEach((el, idx) => {
        el.classList.toggle('active', idx === currentSpread);
      });
    }
    updateSpreadTestButton();
  }

  function updateSpreadTestButton() {
    const btnLabel = document.getElementById('testSpreadBtnLabel');
    if (btnLabel) {
      const qStart = currentSpread * 10 + 1;
      const qEnd = Math.min(currentSpread * 10 + 10, 200);
      btnLabel.textContent = `🎯 Q${qStart}–Q${qEnd}`;
    }
  }

  function turnToPage(newIndex) {
    if (isFlipping || newIndex === currentPageIndex || newIndex < 0 || newIndex >= pages.length) {
      return;
    }

    stopAudioNarration();

    if (Math.abs(newIndex - currentPageIndex) > 1) {
      currentPageIndex = newIndex;
      currentSpread = Math.floor(currentPageIndex / 2);
      renderCurrentView();
      return;
    }

    isFlipping = true;
    const isForward = newIndex > currentPageIndex;
    const currentPageData = pages[currentPageIndex];
    const targetPageData = pages[newIndex];

    if (isForward) {
      leafFront.innerHTML = renderPageContent(currentPageData, false);
      leafBack.innerHTML = renderPageContent(targetPageData, false);
      rightPageEl.innerHTML = renderPageContent(targetPageData, false);
      turningLeaf.className = 'turning-leaf active turn-forward';
    } else {
      leafBack.innerHTML = renderPageContent(currentPageData, false);
      leafFront.innerHTML = renderPageContent(targetPageData, false);
      rightPageEl.innerHTML = renderPageContent(targetPageData, false);
      turningLeaf.className = 'turning-leaf active turn-backward';
    }

    setTimeout(() => {
      currentPageIndex = newIndex;
      currentSpread = Math.floor(currentPageIndex / 2);
      turningLeaf.className = 'turning-leaf';
      renderCurrentView();
      isFlipping = false;
    }, 550);
  }

  function turnToSpread(newIndex) {
    if (isFlipping || newIndex === currentSpread || newIndex < 0 || newIndex >= spreads.length) {
      return;
    }

    stopAudioNarration();

    if (Math.abs(newIndex - currentSpread) > 1) {
      currentSpread = newIndex;
      currentPageIndex = currentSpread * 2;
      renderCurrentView();
      return;
    }

    isFlipping = true;
    const isForward = newIndex > currentSpread;
    const currentSpreadData = spreads[currentSpread];
    const targetSpreadData = spreads[newIndex];

    if (isForward) {
      leafFront.innerHTML = renderPageContent(currentSpreadData.right, false);
      leafBack.innerHTML = renderPageContent(targetSpreadData.left, true);
      rightPageEl.innerHTML = renderPageContent(targetSpreadData.right, false);
      turningLeaf.className = 'turning-leaf active turn-forward';

      setTimeout(() => {
        leftPageEl.innerHTML = renderPageContent(targetSpreadData.left, true);
        turningLeaf.className = 'turning-leaf';
        currentSpread = newIndex;
        currentPageIndex = currentSpread * 2;
        renderCurrentView();
        isFlipping = false;
      }, 700);
    } else {
      leafBack.innerHTML = renderPageContent(currentSpreadData.left, true);
      leafFront.innerHTML = renderPageContent(targetSpreadData.right, false);
      leftPageEl.innerHTML = renderPageContent(targetSpreadData.left, true);
      turningLeaf.className = 'turning-leaf active turn-backward';

      setTimeout(() => {
        rightPageEl.innerHTML = renderPageContent(targetSpreadData.right, false);
        turningLeaf.className = 'turning-leaf';
        currentSpread = newIndex;
        currentPageIndex = currentSpread * 2;
        renderCurrentView();
        isFlipping = false;
      }, 700);
    }
  }

  function nextPage() {
    if (isSinglePage) {
      if (currentPageIndex < pages.length - 1) {
        turnToPage(currentPageIndex + 1);
      }
    } else {
      if (currentSpread < spreads.length - 1) {
        turnToSpread(currentSpread + 1);
      }
    }
  }

  function prevPage() {
    if (isSinglePage) {
      if (currentPageIndex > 0) {
        turnToPage(currentPageIndex - 1);
      }
    } else {
      if (currentSpread > 0) {
        turnToSpread(currentSpread - 1);
      }
    }
  }

  // =========================================================================
  // AUTO-PAGE TURN
  // =========================================================================
  function toggleAutoFlip() {
    isAutoFlip = !isAutoFlip;
    if (isAutoFlip) {
      autoFlipBtn.textContent = 'Auto-Turn: ON';
      autoFlipBtn.style.backgroundColor = '#15803d';
      autoFlipBtn.style.color = '#fff';
      autoFlipInterval = setInterval(() => {
        if (!isFlipping) {
          if (isSinglePage) {
            if (currentPageIndex < pages.length - 1) nextPage();
            else turnToPage(0);
          } else {
            if (currentSpread < spreads.length - 1) nextPage();
            else turnToSpread(0);
          }
        }
      }, 5000);
    } else {
      autoFlipBtn.textContent = 'Auto-Turn: OFF';
      autoFlipBtn.style.backgroundColor = '';
      autoFlipBtn.style.color = '';
      if (autoFlipInterval) {
        clearInterval(autoFlipInterval);
        autoFlipInterval = null;
      }
    }
  }

  // =========================================================================
  // TABLE OF CONTENTS INITIALIZATION
  // =========================================================================
  function initTOC() {
    if (!tocList) return;
    tocList.innerHTML = '';
    tocData.forEach((item, idx) => {
      const li = document.createElement('li');
      const isCurrent = isSinglePage ? (idx === Math.floor(currentPageIndex / 2)) : (idx === currentSpread);
      li.className = `toc-item ${isCurrent ? 'active' : ''}`;
      li.innerHTML = `
        <span class="toc-ch-num">${item.chapter}</span>
        <span class="toc-ch-title">${item.title}</span>
        <span class="toc-page-num">${item.page}</span>
      `;
      li.addEventListener('click', () => {
        if (isSinglePage) {
          turnToPage(item.spreadIndex * 2);
        } else {
          turnToSpread(item.spreadIndex);
        }
        closeTOC();
      });
      tocList.appendChild(li);
    });
  }

  function openTOC() {
    tocDrawer.classList.remove('hidden');
    drawerOverlay.classList.remove('hidden');
  }

  function closeTOC() {
    tocDrawer.classList.add('hidden');
    if (deepDiveDrawer && deepDiveDrawer.classList.contains('hidden')) {
      drawerOverlay.classList.add('hidden');
    }
  }

  // =========================================================================
  // DEEP DIVE / FORENSICS LAB DRAWER ENGINE
  // =========================================================================
  function updateDeepDiveDrawerConfig() {
    const titleEl = document.querySelector('.deepdive-header h3');
    if (titleEl) titleEl.textContent = currentBook.labDrawerTitle;

    const subEl = document.querySelector('.deepdive-subtitle');
    if (subEl) subEl.textContent = currentBook.labDrawerSubtitle;

    if (deepDiveTabs && deepDiveTabsConfig) {
      deepDiveTabs.innerHTML = '';
      deepDiveTabsConfig.forEach((tab, idx) => {
        const btn = document.createElement('button');
        btn.className = `dd-tab ${idx === 0 ? 'active' : ''}`;
        btn.dataset.sec = tab.key;
        btn.textContent = tab.label;
        btn.addEventListener('click', () => {
          renderDeepDive(tab.key);
        });
        deepDiveTabs.appendChild(btn);
      });

      if (deepDiveTabsConfig.length > 0) {
        renderDeepDive(deepDiveTabsConfig[0].key);
      }
    }
  }

  function renderDeepDive(key) {
    if (!deepDiveBody || !deepDiveData[key]) return;
    const sec = deepDiveData[key];

    // Update active tab styling
    if (deepDiveTabs) {
      deepDiveTabs.querySelectorAll('.dd-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.sec === key);
      });
    }

    let scenariosHtml = '';
    sec.scenarios.forEach(sc => {
      scenariosHtml += `
        <div class="scenario-item">
          <div class="scenario-header">
            <span class="scenario-name">${sc.name}</span>
            <span class="verdict-tag ${sc.verdictClass}">${sc.verdict}</span>
          </div>
          <div class="scenario-facts"><strong>Facts:</strong> ${sc.facts}</div>
          <div class="scenario-legal"><strong>Analysis & Evidence Rule:</strong> ${sc.legal}</div>
        </div>
      `;
    });

    let ingredientsHtml = '';
    sec.ingredients.forEach(ing => {
      ingredientsHtml += `<li>${ing}</li>`;
    });

    let forensicsHtml = '';
    sec.forensics.forEach(fn => {
      forensicsHtml += `<li>${fn}</li>`;
    });

    deepDiveBody.innerHTML = `
      <div class="dd-card">
        <div class="dd-card-title">
          <span>${sec.title}</span>
        </div>
        <div style="font-size: 0.8rem; color: var(--accent-gold); font-weight: 700; margin-bottom: 8px;">
          ${sec.subtitle}
        </div>
        <div class="statute-quote">"${sec.quote}"</div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px; margin: 10px 0; font-size: 0.8rem;">
          <div style="background: var(--page-bg-subtle); padding: 8px; border-radius: 4px;">
            <strong>Standard / Classification:</strong> ${sec.nature}
          </div>
          <div style="background: var(--page-bg-subtle); padding: 8px; border-radius: 4px;">
            <strong>Jurisdiction / Forum:</strong> ${sec.forum}
          </div>
        </div>

        <div style="background: #fef2f2; border-left: 3px solid #b91c1c; padding: 7px 10px; border-radius: 0 4px 4px 0; margin-bottom: 12px; font-size: 0.8rem; color: #991b1b;">
          <strong>Legal Threshold / Evidentiary Repercussion:</strong> ${sec.penalty}
        </div>

        <h4>Essential Elements & Standard Operating Guidelines</h4>
        <ul class="dd-list">${ingredientsHtml}</ul>

        <h4 style="margin-top: 14px;">Real-World Laboratory Scenarios & Judicial Analysis</h4>
        ${scenariosHtml}

        <h4 style="margin-top: 14px;">Forensic Examination & Evidence Protocols</h4>
        <ul class="dd-list">${forensicsHtml}</ul>

        <div class="judicial-precedent">
          <div class="judicial-precedent-title">Authoritative Judicial Precedent / Forensic Milestone</div>
          <div>${sec.precedents}</div>
        </div>
      </div>
    `;

    deepDiveBody.scrollTop = 0;
  }

  function openDeepDive(sectionKey) {
    if (deepDiveDrawer) deepDiveDrawer.classList.remove('hidden');
    if (drawerOverlay) drawerOverlay.classList.remove('hidden');
    const firstKey = (deepDiveTabsConfig && deepDiveTabsConfig.length > 0) ? deepDiveTabsConfig[0].key : 'bns78';
    renderDeepDive(sectionKey || firstKey);
  }

  function closeDeepDive() {
    if (deepDiveDrawer) deepDiveDrawer.classList.add('hidden');
    if (tocDrawer && tocDrawer.classList.contains('hidden')) {
      drawerOverlay.classList.add('hidden');
    }
  }

  // =========================================================================
  // UNIVERSAL CROSS-BOOK SEARCH ENGINE
  // =========================================================================
  function performSearch(query) {
    if (!query || query.trim().length < 2) {
      searchResultsDropdown.classList.add('hidden');
      searchResultsDropdown.innerHTML = '';
      return;
    }

    const q = query.toLowerCase().trim();
    const results = [];

    // Search across both books
    Object.keys(books).forEach(bId => {
      const bObj = books[bId];
      if (!bObj || !bObj.spreads) return;

      bObj.spreads.forEach((spread, spreadIdx) => {
        // Left page
        const leftText = spread.left.content.replace(/<[^>]+>/g, ' ');
        if (leftText.toLowerCase().includes(q)) {
          results.push({
            bookId: bId,
            bookTitle: bObj.shortTitle,
            spreadIndex: spreadIdx,
            pageNumber: spread.left.pageNumber,
            title: spread.left.runningHead,
            snippet: extractSnippet(leftText, q)
          });
        }

        // Right page
        const rightText = spread.right.content.replace(/<[^>]+>/g, ' ');
        if (rightText.toLowerCase().includes(q)) {
          results.push({
            bookId: bId,
            bookTitle: bObj.shortTitle,
            spreadIndex: spreadIdx,
            pageNumber: spread.right.pageNumber,
            title: spread.right.runningHead,
            snippet: extractSnippet(rightText, q)
          });
        }
      });
    });

    renderSearchResults(results);
  }

  function extractSnippet(text, query) {
    const idx = text.toLowerCase().indexOf(query);
    const start = Math.max(0, idx - 40);
    const end = Math.min(text.length, idx + query.length + 50);
    let snippet = text.substring(start, end).replace(/\s+/g, ' ');
    if (start > 0) snippet = '...' + snippet;
    if (end < text.length) snippet = snippet + '...';

    const regex = new RegExp(`(${query})`, 'gi');
    return snippet.replace(regex, '<mark>$1</mark>');
  }

  function renderSearchResults(results) {
    if (results.length === 0) {
      searchResultsDropdown.innerHTML = '<div class="search-result-item" style="cursor: default;">No results found across textbooks.</div>';
      searchResultsDropdown.classList.remove('hidden');
      return;
    }

    let html = `
      <div style="padding: 6px 12px; font-size: 0.72rem; font-weight: 700; color: var(--text-muted); background: var(--page-bg-subtle); border-bottom: 1px solid var(--ui-border); display: flex; justify-content: space-between;">
        <span>Found ${results.length} results</span>
        <span>Click result to read</span>
      </div>
    `;

    results.slice(0, 16).forEach(res => {
      let tagLabel = 'Book 1 • Law';
      let tagStyle = 'background: rgba(140, 45, 25, 0.1); color: var(--accent-color); border: 1px solid var(--accent-color);';
      if (res.bookId === 'book2') {
        tagLabel = 'Book 2 • Forensics';
        tagStyle = 'background: rgba(14, 116, 144, 0.12); color: #0284c7; border: 1px solid #0284c7;';
      } else if (res.bookId === 'book3') {
        tagLabel = 'Book 3 • RAM';
        tagStyle = 'background: rgba(124, 58, 237, 0.12); color: #7c3aed; border: 1px solid #7c3aed;';
      } else if (res.bookId === 'book4') {
        tagLabel = 'Book 4 • Mobile';
        tagStyle = 'background: rgba(16, 185, 129, 0.12); color: #059669; border: 1px solid #059669;';
      } else if (res.bookId === 'book5') {
        tagLabel = 'Book 5 • InfoSec';
        tagStyle = 'background: rgba(217, 119, 6, 0.12); color: #d97706; border: 1px solid #d97706;';
      }

      html += `
        <div class="search-result-item" data-book-id="${res.bookId}" data-spread="${res.spreadIndex}" data-page="${res.pageNumber}">
          <div class="search-result-title">
            <span style="font-size: 0.65rem; font-weight: 700; padding: 2px 5px; border-radius: 4px; ${tagStyle} margin-right: 5px;">
              ${tagLabel}
            </span>
            ${res.title} (Page ${res.pageNumber})
          </div>
          <div class="search-result-snippet">${res.snippet}</div>
        </div>
      `;
    });

    searchResultsDropdown.innerHTML = html;
    searchResultsDropdown.classList.remove('hidden');

    searchResultsDropdown.querySelectorAll('.search-result-item').forEach(el => {
      if (!el.dataset.spread) return;
      el.addEventListener('click', () => {
        const targetBookId = el.dataset.bookId;
        const targetSpread = parseInt(el.dataset.spread, 10);
        const targetPage = parseInt(el.dataset.page, 10);

        if (targetBookId !== activeBookId) {
          switchBook(targetBookId, targetSpread);
        } else {
          if (isSinglePage) {
            turnToPage(targetPage - 1);
          } else {
            turnToSpread(targetSpread);
          }
        }

        searchResultsDropdown.classList.add('hidden');
        searchInput.value = '';
        clearSearchBtn.classList.add('hidden');
      });
    });
  }

  // =========================================================================
  // THEMES, FONTS & FULLSCREEN
  // =========================================================================
  function cycleTheme() {
    document.body.classList.remove(...themes);
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.body.classList.add(themes[currentThemeIndex]);
  }

  function adjustFontSize(deltaPercent) {
    currentFontSizePercent = Math.min(130, Math.max(80, currentFontSizePercent + deltaPercent));
    document.documentElement.style.setProperty('--font-scale', `${currentFontSizePercent}%`);
    const bodies = document.querySelectorAll('.page-body');
    bodies.forEach(b => {
      b.style.fontSize = `${0.83 * (currentFontSizePercent / 100)}rem`;
    });
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn('Fullscreen error:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // =========================================================================
  // EVENT LISTENERS & NAVIGATION CONTROLS
  // =========================================================================
  prevBtn.addEventListener('click', prevPage);
  nextBtn.addEventListener('click', nextPage);

  firstPageBtn.addEventListener('click', () => {
    if (isSinglePage) turnToPage(0);
    else turnToSpread(0);
  });

  lastPageBtn.addEventListener('click', () => {
    if (isSinglePage) turnToPage(pages.length - 1);
    else turnToSpread(spreads.length - 1);
  });

  autoFlipBtn.addEventListener('click', toggleAutoFlip);

  pageRange.addEventListener('input', (e) => {
    const targetVal = parseInt(e.target.value, 10);
    if (isSinglePage) {
      turnToPage(targetVal);
    } else {
      turnToSpread(targetVal);
    }
  });

  // Header Book Switcher Buttons
  if (bookBtn1) {
    bookBtn1.addEventListener('click', () => switchBook('book1'));
  }
  if (bookBtn2) {
    bookBtn2.addEventListener('click', () => switchBook('book2'));
  }
  if (bookBtn3) {
    bookBtn3.addEventListener('click', () => switchBook('book3'));
  }
  if (bookBtn4) {
    bookBtn4.addEventListener('click', () => switchBook('book4'));
  }
  if (bookBtn5) {
    bookBtn5.addEventListener('click', () => switchBook('book5'));
  }

  // Bookshelf Modal Controls
  if (libraryModalBtn) {
    libraryModalBtn.addEventListener('click', openBookshelfModal);
  }
  if (closeBookshelfBtn) {
    closeBookshelfBtn.addEventListener('click', closeBookshelfModal);
  }
  if (bookshelfModal) {
    bookshelfModal.addEventListener('click', (e) => {
      if (e.target === bookshelfModal) closeBookshelfModal();
    });
  }

  // Bookshelf Card Click Events
  document.querySelectorAll('.book-card-item, .btn-card-open').forEach(el => {
    el.addEventListener('click', (e) => {
      const bookId = el.dataset.bookId || el.closest('[data-book-id]')?.dataset.bookId;
      if (bookId) {
        switchBook(bookId);
        closeBookshelfModal();
      }
    });
  });

  // View Mode Toggle
  if (viewModeToggleBtn) {
    viewModeToggleBtn.addEventListener('click', () => {
      isSinglePage = !isSinglePage;
      renderCurrentView();
    });
  }

  // Responsive Resize Listener
  window.addEventListener('resize', () => {
    const autoSingle = (window.innerWidth <= 768);
    if (autoSingle !== isSinglePage) {
      isSinglePage = autoSingle;
      renderCurrentView();
    }
  });

  // Touch Swipe Gesture for Mobile Reading
  let touchStartX = 0;
  let touchStartY = 0;

  textbook.addEventListener('touchstart', (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  textbook.addEventListener('touchend', (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const dx = touchEndX - touchStartX;
    const dy = touchEndY - touchStartY;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 35) {
      if (dx < 0) {
        nextPage();
      } else {
        prevPage();
      }
    }
  }, { passive: true });

  // Click on book to turn
  textbook.addEventListener('click', (e) => {
    const selection = window.getSelection().toString();
    if (selection.length > 0) return;
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
    if (e.target.tagName === 'A' || e.target.closest('a')) return;

    // If user clicked inside page-body content (reading, scrolling, dragging scrollbar), don't flip
    // Allow page turn if clicked on page margins, running-head, footer, or outer book edges
    if (e.target.closest('.page-body')) {
      const rect = textbook.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      if (clickX >= rect.width * 0.07 && clickX <= rect.width * 0.93) {
        return;
      }
    }

    const rect = textbook.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX < rect.width / 2) {
      prevPage();
    } else {
      nextPage();
    }
  });

  // Drawer Controls
  tocToggleBtn.addEventListener('click', openTOC);
  closeTocBtn.addEventListener('click', closeTOC);

  const tocDeepDiveBtn = document.getElementById('tocDeepDiveBtn');
  if (tocDeepDiveBtn) {
    tocDeepDiveBtn.addEventListener('click', () => {
      closeTOC();
      openDeepDive();
    });
  }

  if (deepDiveToggleBtn) {
    deepDiveToggleBtn.addEventListener('click', () => {
      deepDiveDrawer.classList.contains('hidden') ? openDeepDive() : closeDeepDive();
    });
  }
  if (closeDeepDiveBtn) {
    closeDeepDiveBtn.addEventListener('click', closeDeepDive);
  }

  drawerOverlay.addEventListener('click', () => {
    closeTOC();
    closeDeepDive();
  });

  // Audio Controls
  if (audioNarrationBtn) {
    audioNarrationBtn.addEventListener('click', toggleAudioNarration);
  }
  if (bottomAudioBtn) {
    bottomAudioBtn.addEventListener('click', toggleAudioNarration);
  }

  // Search Controls
  searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    clearSearchBtn.classList.toggle('hidden', val.length === 0);
    performSearch(val);
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.classList.add('hidden');
    searchResultsDropdown.classList.add('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResultsDropdown.contains(e.target)) {
      searchResultsDropdown.classList.add('hidden');
    }
  });

  // Tools Controls
  themeToggleBtn.addEventListener('click', cycleTheme);
  fontSizeIncBtn.addEventListener('click', () => adjustFontSize(4));
  fontSizeDecBtn.addEventListener('click', () => adjustFontSize(-4));
  fullscreenBtn.addEventListener('click', toggleFullscreen);

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.target === searchInput) return;

    if (e.key === 'ArrowRight') {
      nextPage();
    } else if (e.key === 'ArrowLeft') {
      prevPage();
    } else if (e.code === 'Space') {
      e.preventDefault();
      toggleAutoFlip();
    } else if (e.key === 'Home') {
      if (isSinglePage) turnToPage(0);
      else turnToSpread(0);
    } else if (e.key === 'End') {
      if (isSinglePage) turnToPage(pages.length - 1);
      else turnToSpread(spreads.length - 1);
    } else if (e.key === 'Escape') {
      closeTOC();
      closeDeepDive();
      closeBookshelfModal();
      searchResultsDropdown.classList.add('hidden');
    } else if (e.altKey && e.key.toLowerCase() === 't') {
      tocDrawer.classList.contains('hidden') ? openTOC() : closeTOC();
    } else if (e.altKey && e.key.toLowerCase() === 'd') {
      deepDiveDrawer.classList.contains('hidden') ? openDeepDive() : closeDeepDive();
    } else if (e.altKey && e.key.toLowerCase() === 'b') {
      bookshelfModal.classList.contains('hidden') ? openBookshelfModal() : closeBookshelfModal();
    } else if (e.altKey && e.key === '1') {
      switchBook('book1');
    } else if (e.altKey && e.key === '2') {
      switchBook('book2');
    } else if (e.altKey && e.key === '3') {
      switchBook('book3');
    } else if (e.altKey && e.key === '4') {
      switchBook('book4');
    } else if (e.altKey && e.key === '5') {
      switchBook('book5');
    } else if (e.altKey && e.key.toLowerCase() === 'm') {
      openMCQForCurrentSpread();
    } else if (e.altKey && e.key.toLowerCase() === 'q') {
      if (mcqModal.classList.contains('hidden')) {
        openMCQModal();
      } else {
        closeMCQModal();
      }
    }
  });

  // ==========================================================================
  // 1,000 MCQ Practice & Examination Engine Controller
  // ==========================================================================
  const mcqModalBtn = document.getElementById('mcqModalBtn');
  const mcqModal = document.getElementById('mcqModal');
  const closeMcqBtn = document.getElementById('closeMcqBtn');
  const mcqBookTabs = document.querySelectorAll('.mcq-tab');
  const mcqQNumber = document.getElementById('mcqQNumber');
  const mcqQText = document.getElementById('mcqQText');
  const mcqOptionsContainer = document.getElementById('mcqOptionsContainer');
  const mcqExplanationBox = document.getElementById('mcqExplanationBox');
  const mcqVerdictBadge = document.getElementById('mcqVerdictBadge');
  const mcqExplanationText = document.getElementById('mcqExplanationText');
  const mcqPrevBtn = document.getElementById('mcqPrevBtn');
  const mcqNextBtn = document.getElementById('mcqNextBtn');
  const mcqRandomBtn = document.getElementById('mcqRandomBtn');
  const mcqResetBtn = document.getElementById('mcqResetBtn');
  const mcqQuestionCounter = document.getElementById('mcqQuestionCounter');
  const mcqScoreCorrect = document.getElementById('mcqScoreCorrect');
  const mcqScoreAttempted = document.getElementById('mcqScoreAttempted');
  const mcqScorePercent = document.getElementById('mcqScorePercent');
  const mcqProgressFill = document.getElementById('mcqProgressFill');
  const mcqJumpSelect = document.getElementById('mcqJumpSelect');
  const mcqSearchInput = document.getElementById('mcqSearchInput');
  const mcqModePracticeBtn = document.getElementById('mcqModePracticeBtn');
  const mcqModeTestBtn = document.getElementById('mcqModeTestBtn');
  const mcqFontDecBtn = document.getElementById('mcqFontDecBtn');
  const mcqFontIncBtn = document.getElementById('mcqFontIncBtn');
  const mcqFontSizeLabel = document.getElementById('mcqFontSizeLabel');
  const mcqBookPill = document.getElementById('mcqBookPill');
  const mcqBody = document.getElementById('mcqBody');
  const testSpreadBtn = document.getElementById('testSpreadBtn');
  const testSpreadBtnLabel = document.getElementById('testSpreadBtnLabel');
  const mcqSpreadFilterSelect = document.getElementById('mcqSpreadFilterSelect');
  const mcqSpreadSourceBadge = document.getElementById('mcqSpreadSourceBadge');
  const mcqViewInNotesBtn = document.getElementById('mcqViewInNotesBtn');
  const mcqExplanationNotesBtn = document.getElementById('mcqExplanationNotesBtn');
  const mcqExplSpreadNum = document.getElementById('mcqExplSpreadNum');
  const mcqExplPageRange = document.getElementById('mcqExplPageRange');

  // Datasets per book
  const mcqDatasets = {
    book1: window.book1MCQs || [],
    book2: window.book2MCQs || [],
    book3: window.book3MCQs || [],
    book4: window.book4MCQs || [],
    book5: window.book5MCQs || []
  };

  // State
  let mcqActiveBook = activeBookId || 'book1';
  let mcqCurrentIndex = 0;
  let mcqMode = 'practice'; // 'practice' or 'test'
  let mcqFontScale = 1.05;

  try {
    const savedScale = localStorage.getItem('dsssb_mcq_font_scale');
    if (savedScale) mcqFontScale = parseFloat(savedScale) || 1.05;
  } catch (e) {}

  function applyMCQFontScale(scale) {
    mcqFontScale = Math.min(1.6, Math.max(0.85, Math.round(scale * 100) / 100));
    document.documentElement.style.setProperty('--mcq-scale', mcqFontScale);
    if (mcqFontSizeLabel) {
      mcqFontSizeLabel.textContent = `${Math.round(mcqFontScale * 100)}%`;
    }
    try {
      localStorage.setItem('dsssb_mcq_font_scale', mcqFontScale.toFixed(2));
    } catch (e) {}
  }
  applyMCQFontScale(mcqFontScale);
  
  // User answers per book: { book1: { [index]: selectedOptionIndex } }
  const mcqUserAnswers = {
    book1: {},
    book2: {},
    book3: {},
    book4: {},
    book5: {}
  };

  let mcqCurrentSpreadFilter = 'all';

  function openMCQForCurrentSpread() {
    openMCQForSpread(currentSpread);
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
    if (mcqModal) {
      mcqModal.classList.remove('hidden');
    }
    document.body.style.overflow = 'hidden';
    if (typeof showToast === 'function') {
      showToast(`🎯 Testing Spread ${sIdx + 1} (Questions Q${sIdx * 10 + 1}–Q${sIdx * 10 + 10})`);
    }
  }
  window.openMCQForSpread = openMCQForSpread;

  function jumpToNotesFromMCQ() {
    const list = mcqDatasets[mcqActiveBook] || [];
    const q = list[mcqCurrentIndex];
    if (!q) return;
    const targetSpread = Math.floor((q.id - 1) / 10);
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

    showToast(`📖 Jumped to Notes: Spread ${targetSpread + 1} (Pages ${pLeft}–${pRight}) for Q${q.id}!`);
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

    for (let s = 0; s < 20; s++) {
      const opt = document.createElement('option');
      opt.value = s.toString();
      const pL = s * 2 + 1;
      const pR = s * 2 + 2;
      const qStart = s * 10 + 1;
      const qEnd = s * 10 + 10;
      let title = '';
      if (bookObj.tocData && bookObj.tocData[s]) {
        title = bookObj.tocData[s].title;
      }
      opt.textContent = `Spread ${s + 1} (P. ${pL}–${pR}): Q${qStart}–Q${qEnd} • ${title}`;
      if (mcqCurrentSpreadFilter === s.toString()) {
        opt.selected = true;
      }
      mcqSpreadFilterSelect.appendChild(opt);
    }
  }

  function openMCQModal() {
    mcqActiveBook = activeBookId || 'book1';
    mcqCurrentSpreadFilter = 'all';
    updateMCQTabs();
    populateMCQSpreadFilterSelect();
    populateMCQJumpSelect();
    renderMCQQuestion();
    if (mcqModal) {
      mcqModal.classList.remove('hidden');
    }
    document.body.style.overflow = 'hidden';
  }
  window.openMCQModal = openMCQModal;

  function closeMCQModal() {
    if (mcqModal) {
      mcqModal.classList.add('hidden');
    }
    document.body.style.overflow = '';
  }
  window.closeMCQModal = closeMCQModal;

  function updateMCQTabs() {
    mcqBookTabs.forEach(tab => {
      const bookId = tab.dataset.mcqBook;
      tab.classList.toggle('active', bookId === mcqActiveBook);
    });
  }

  function switchMCQBook(bookId) {
    if (!mcqDatasets[bookId] || mcqDatasets[bookId].length === 0) return;
    mcqActiveBook = bookId;
    mcqCurrentIndex = 0;
    updateMCQTabs();
    populateMCQJumpSelect();
    renderMCQQuestion();
    showToast(`Switched Quiz to Book ${bookId.replace('book', '')} (200 Questions)`);
  }

  function populateMCQJumpSelect(filter = '', spreadFilter = null) {
    const list = mcqDatasets[mcqActiveBook] || [];
    mcqJumpSelect.innerHTML = '';
    const cleanFilter = filter.toLowerCase().trim();
    const effectiveSpread = (spreadFilter !== null) ? spreadFilter : mcqCurrentSpreadFilter;

    list.forEach((q, idx) => {
      if (effectiveSpread !== 'all') {
        const sIdx = parseInt(effectiveSpread, 10);
        if (Math.floor(idx / 10) !== sIdx) return;
      }
      if (cleanFilter && !q.question.toLowerCase().includes(cleanFilter)) {
        return;
      }
      const opt = document.createElement('option');
      opt.value = idx;
      const snippet = q.question.length > 55 ? q.question.substring(0, 55) + '...' : q.question;
      opt.textContent = `Q${idx + 1}: ${snippet}`;
      if (idx === mcqCurrentIndex) opt.selected = true;
      mcqJumpSelect.appendChild(opt);
    });
  }

  function updateMCQScoreAndProgress() {
    const list = mcqDatasets[mcqActiveBook] || [];
    const answers = mcqUserAnswers[mcqActiveBook] || {};
    let correct = 0;
    let attempted = 0;

    Object.keys(answers).forEach(idxStr => {
      const idx = parseInt(idxStr, 10);
      const userAns = answers[idx];
      if (userAns !== undefined && list[idx]) {
        attempted++;
        if (userAns === list[idx].answer) {
          correct++;
        }
      }
    });

    const percent = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    mcqScoreCorrect.textContent = correct;
    mcqScoreAttempted.textContent = attempted;
    mcqScorePercent.textContent = `${percent}%`;

    // Progress bar across the 200 questions
    const progressPercent = list.length > 0 ? ((mcqCurrentIndex + 1) / list.length) * 100 : 0;
    mcqProgressFill.style.width = `${progressPercent}%`;

    mcqQuestionCounter.textContent = `Question ${mcqCurrentIndex + 1} of ${list.length}`;
    if (mcqJumpSelect.value != mcqCurrentIndex) {
      mcqJumpSelect.value = mcqCurrentIndex;
    }
  }

  function renderMCQQuestion() {
    const list = mcqDatasets[mcqActiveBook] || [];
    if (list.length === 0) {
      mcqQText.textContent = 'No questions loaded for this book.';
      mcqOptionsContainer.innerHTML = '';
      mcqExplanationBox.classList.add('hidden');
      return;
    }

    if (mcqCurrentIndex < 0) mcqCurrentIndex = 0;
    if (mcqCurrentIndex >= list.length) mcqCurrentIndex = list.length - 1;

    const q = list[mcqCurrentIndex];
    mcqQNumber.textContent = `Question ${q.id} of 200`;
    mcqQText.textContent = q.question;

    const spreadIdx = Math.floor((q.id - 1) / 10);
    const pLeft = spreadIdx * 2 + 1;
    const pRight = spreadIdx * 2 + 2;
    const bookObj = books[mcqActiveBook] || currentBook;
    const tocTitle = (bookObj.tocData && bookObj.tocData[spreadIdx]) ? bookObj.tocData[spreadIdx].title : '';

    if (mcqSpreadSourceBadge) {
      mcqSpreadSourceBadge.textContent = `📍 Spread ${spreadIdx + 1} • P. ${pLeft}–${pRight}`;
      mcqSpreadSourceBadge.title = `Source Notes: Spread ${spreadIdx + 1} (${tocTitle})`;
    }

    if (mcqExplSpreadNum) mcqExplSpreadNum.textContent = `Spread ${spreadIdx + 1}`;
    if (mcqExplPageRange) mcqExplPageRange.textContent = `${pLeft}–${pRight}`;

    const bookPillTitles = {
      book1: 'Book 1 • Cyber Law & Penalties',
      book2: 'Book 2 • Digital Forensics SOPs',
      book3: 'Book 3 • Memory Forensics (RAM)',
      book4: 'Book 4 • Mobile Forensics & CDR',
      book5: 'Book 5 • InfoSec, Crypto & VAPT'
    };
    if (mcqBookPill) {
      mcqBookPill.textContent = bookPillTitles[mcqActiveBook] || `Book ${mcqActiveBook.replace('book', '')}`;
    }

    const userAns = mcqUserAnswers[mcqActiveBook][mcqCurrentIndex];
    const isAnswered = (userAns !== undefined);

    // Build 4 option buttons
    mcqOptionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'mcq-option-btn';
      btn.setAttribute('data-option-index', optIdx);

      const badge = document.createElement('span');
      badge.className = 'option-badge';
      badge.textContent = letters[optIdx];

      const text = document.createElement('span');
      text.className = 'option-text';
      text.textContent = optText;

      btn.appendChild(badge);
      btn.appendChild(text);

      if (isAnswered) {
        btn.classList.add('disabled');
        if (mcqMode === 'practice') {
          if (optIdx === q.answer) {
            btn.classList.add('correct');
            badge.textContent = '✓';
          } else if (optIdx === userAns) {
            btn.classList.add('wrong');
            badge.textContent = '✕';
          }
        } else {
          // Test mode
          if (optIdx === userAns) {
            btn.classList.add('selected');
          }
        }
      } else {
        btn.addEventListener('click', () => handleMCQSelect(optIdx));
      }

      mcqOptionsContainer.appendChild(btn);
    });

    // Explanation Box Handling
    if (isAnswered && mcqMode === 'practice') {
      const isCorrect = (userAns === q.answer);
      mcqExplanationBox.classList.remove('hidden');
      mcqExplanationBox.classList.toggle('is-wrong', !isCorrect);
      mcqVerdictBadge.textContent = isCorrect ? '✓ Correct Answer' : '✕ Incorrect';
      mcqExplanationText.textContent = q.explanation;
    } else {
      mcqExplanationBox.classList.add('hidden');
    }

    updateMCQScoreAndProgress();

    // Scroll MCQ body back to top on question change
    if (mcqBody) {
      mcqBody.scrollTop = 0;
    }
  }

  function handleMCQSelect(selectedIdx) {
    const list = mcqDatasets[mcqActiveBook] || [];
    if (!list[mcqCurrentIndex]) return;

    mcqUserAnswers[mcqActiveBook][mcqCurrentIndex] = selectedIdx;
    renderMCQQuestion();
  }

  function nextMCQ() {
    const list = mcqDatasets[mcqActiveBook] || [];
    if (mcqCurrentIndex < list.length - 1) {
      mcqCurrentIndex++;
      renderMCQQuestion();
    } else {
      showToast('You have reached the end of the 200 questions!');
    }
  }

  function prevMCQ() {
    if (mcqCurrentIndex > 0) {
      mcqCurrentIndex--;
      renderMCQQuestion();
    }
  }

  function randomMCQ() {
    const list = mcqDatasets[mcqActiveBook] || [];
    if (list.length > 0) {
      mcqCurrentIndex = Math.floor(Math.random() * list.length);
      renderMCQQuestion();
    }
  }

  function resetMCQBook() {
    if (confirm(`Reset your test progress and answers for Book ${mcqActiveBook.replace('book', '')}?`)) {
      mcqUserAnswers[mcqActiveBook] = {};
      mcqCurrentIndex = 0;
      renderMCQQuestion();
      showToast(`Progress for Book ${mcqActiveBook.replace('book', '')} has been reset.`);
    }
  }

  // Event Listeners for MCQ Controls
  if (testSpreadBtn) {
    testSpreadBtn.addEventListener('click', openMCQForCurrentSpread);
  }

  if (mcqModalBtn) {
    mcqModalBtn.addEventListener('click', openMCQModal);
  }
  if (closeMcqBtn) {
    closeMcqBtn.addEventListener('click', closeMCQModal);
  }

  if (mcqViewInNotesBtn) {
    mcqViewInNotesBtn.addEventListener('click', jumpToNotesFromMCQ);
  }
  if (mcqExplanationNotesBtn) {
    mcqExplanationNotesBtn.addEventListener('click', jumpToNotesFromMCQ);
  }

  if (mcqSpreadFilterSelect) {
    mcqSpreadFilterSelect.addEventListener('change', (e) => {
      mcqCurrentSpreadFilter = e.target.value;
      if (mcqCurrentSpreadFilter === 'all') {
        populateMCQJumpSelect();
        renderMCQQuestion();
      } else {
        const s = parseInt(mcqCurrentSpreadFilter, 10);
        mcqCurrentIndex = s * 10;
        populateMCQJumpSelect('', mcqCurrentSpreadFilter);
        renderMCQQuestion();
      }
    });
  }

  mcqBookTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const bookId = tab.dataset.mcqBook;
      if (bookId) switchMCQBook(bookId);
    });
  });

  if (mcqPrevBtn) mcqPrevBtn.addEventListener('click', prevMCQ);
  if (mcqNextBtn) mcqNextBtn.addEventListener('click', nextMCQ);
  if (mcqRandomBtn) mcqRandomBtn.addEventListener('click', randomMCQ);
  if (mcqResetBtn) mcqResetBtn.addEventListener('click', resetMCQBook);

  if (mcqJumpSelect) {
    mcqJumpSelect.addEventListener('change', (e) => {
      mcqCurrentIndex = parseInt(e.target.value, 10) || 0;
      renderMCQQuestion();
    });
  }

  if (mcqSearchInput) {
    mcqSearchInput.addEventListener('input', (e) => {
      populateMCQJumpSelect(e.target.value);
    });
  }

  if (mcqFontIncBtn) {
    mcqFontIncBtn.addEventListener('click', () => {
      applyMCQFontScale(mcqFontScale + 0.1);
    });
  }

  if (mcqFontDecBtn) {
    mcqFontDecBtn.addEventListener('click', () => {
      applyMCQFontScale(mcqFontScale - 0.1);
    });
  }


  if (mcqModePracticeBtn) {
    mcqModePracticeBtn.addEventListener('click', () => {
      mcqMode = 'practice';
      mcqModePracticeBtn.classList.add('active');
      mcqModeTestBtn.classList.remove('active');
      renderMCQQuestion();
      showToast('Practice Mode: Instant answers and detailed explanations');
    });
  }

  if (mcqModeTestBtn) {
    mcqModeTestBtn.addEventListener('click', () => {
      mcqMode = 'test';
      mcqModeTestBtn.classList.add('active');
      mcqModePracticeBtn.classList.remove('active');
      renderMCQQuestion();
      showToast('Test Mode: Explanations hidden until review');
    });
  }

  // Keyboard navigation when modal is open
  document.addEventListener('keydown', (e) => {
    if (mcqModal.classList.contains('hidden')) return;

    if (e.target === mcqSearchInput) return;

    if (e.key === 'Escape') {
      closeMCQModal();
    } else if (e.key.toLowerCase() === 'n' || e.key.toLowerCase() === 'v') {
      e.preventDefault();
      jumpToNotesFromMCQ();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextMCQ();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevMCQ();
    } else if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4') {
      const optIdx = parseInt(e.key, 10) - 1;
      const userAns = mcqUserAnswers[mcqActiveBook][mcqCurrentIndex];
      if (userAns === undefined) {
        handleMCQSelect(optIdx);
      }
    }
  });

  // Initialize App with active book
  switchBook(activeBookId, 0);
});

