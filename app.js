/* ============================================================
   LUMI — Global App Logic (nav, search, concierge, toasts, utils)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initSearch();
  initConcierge();
  initRevealObserver();
  initStaggerObserver();
  markActiveNav();
});

/* ===== NAV ===== */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

function markActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(l => {
    const href = l.getAttribute('href');
    if (href === page || (page === 'index.html' && href === './') || (page === '' && href === './')) {
      l.classList.add('active');
    }
  });
}

/* ===== SEARCH OVERLAY ===== */
function initSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input   = document.getElementById('searchInput');
  const openBtn = document.getElementById('searchBtn');
  const closeBtn= document.getElementById('searchClose');
  if (!overlay) return;

  const open  = () => { overlay.classList.add('open'); setTimeout(()=>input?.focus(),100); };
  const close = () => { overlay.classList.remove('open'); };

  openBtn?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target===overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key==='/'&&!overlay.classList.contains('open')){e.preventDefault();open();} if(e.key==='Escape') close(); });

  input?.addEventListener('input', debounce(e => renderSearchResults(e.target.value), 250));
}

function renderSearchResults(query) {
  const container = document.getElementById('searchResults');
  if (!container || typeof FILMS === 'undefined') return;
  if (!query.trim()) { container.innerHTML = ''; return; }
  const q = query.toLowerCase();
  const hits = FILMS.filter(f => f.title.toLowerCase().includes(q) || f.director.toLowerCase().includes(q));
  container.innerHTML = hits.slice(0,6).map(f => `
    <a href="film.html?id=${f.id}" class="search-result-item" onclick="document.getElementById('searchOverlay').classList.remove('open')">
      <img src="${f.poster}" alt="${f.title}" class="search-result-poster" onerror="this.style.background='var(--bg-elevated)'">
      <div>
        <div style="font-weight:600">${f.title}</div>
        <div style="font-size:.8rem;color:var(--text-secondary)">${f.year} · ${f.director}</div>
      </div>
      <div style="margin-left:auto;font-family:var(--font-mono);font-size:.8rem;color:var(--gold)">${f.scores.critic}%</div>
    </a>`).join('');
}

/* ===== AI CONCIERGE ===== */
const AI_RESPONSES = {
  default: "I'd love to help with that! Based on your taste profile, let me surface something perfect for you. 🎬",
  tonight: "Tonight I'm feeling **Oppenheimer** for you — epic, cerebral, IMAX-worthy. Or if you want something shorter, **Whiplash** will consume your next 107 minutes completely.",
  mood: "Tell me more about your mood — are we talking existential dread, cathartic tears, or pure adrenaline? I have recommendations for all three. 😄",
  surprise: "Going rogue: **Parasite** (2019). A genre-defying Korean thriller that won the Oscar for Best Picture and will leave you speechless. Start it now.",
  similar: "Based on Blade Runner's DNA — neo-noir aesthetics, existential questions, rain-soaked cities — try **Her** (2013) or **Arrival** (2016). Both will haunt you.",
  explain: "Happy to unpack that ending. Which film are we dissecting? No spoilers here for others, just drop the title. 🔍",
  ranking: "The ranking debates are endless. My take: The Godfather sits above all for structural perfection, but The Dark Knight is the more *emotionally* devastating experience.",
};

function getAIResponse(msg) {
  const m = msg.toLowerCase();
  if (m.includes('tonight') || m.includes('watch')) return AI_RESPONSES.tonight;
  if (m.includes('mood') || m.includes('feel')) return AI_RESPONSES.mood;
  if (m.includes('surprise') || m.includes('random')) return AI_RESPONSES.surprise;
  if (m.includes('similar') || m.includes('like') || m.includes('blade runner')) return AI_RESPONSES.similar;
  if (m.includes('explain') || m.includes('ending') || m.includes('mean')) return AI_RESPONSES.explain;
  if (m.includes('rank') || m.includes('best') || m.includes('greatest')) return AI_RESPONSES.ranking;
  return AI_RESPONSES.default;
}

function initConcierge() {
  const fab     = document.getElementById('conciergeFab');
  const panel   = document.getElementById('conciergePanel');
  const input   = document.getElementById('conciergeInput');
  const send    = document.getElementById('conciergeSend');
  const msgs    = document.getElementById('conciergeMessages');
  const quicks  = document.querySelectorAll('.concierge-quick');
  if (!fab) return;

  const toggle = () => panel?.classList.toggle('open');
  fab.addEventListener('click', toggle);

  const sendMsg = (text) => {
    if (!text.trim()) return;
    appendMsg(text, 'user');
    if (input) input.value = '';
    setTimeout(() => {
      const typing = appendTyping();
      setTimeout(() => {
        typing.remove();
        appendMsg(getAIResponse(text), 'ai');
      }, 900);
    }, 300);
  };

  send?.addEventListener('click', () => sendMsg(input?.value || ''));
  input?.addEventListener('keydown', e => { if (e.key==='Enter') sendMsg(input.value); });
  quicks.forEach(q => q.addEventListener('click', () => sendMsg(q.textContent)));

  function appendMsg(text, who) {
    if (!msgs) return null;
    const d = document.createElement('div');
    d.className = `chat-msg chat-msg-${who}`;
    d.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }
  function appendTyping() {
    if (!msgs) return { remove:()=>{} };
    const d = document.createElement('div');
    d.className = 'chat-msg chat-msg-ai';
    d.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }
}

/* ===== SCROLL REVEAL ===== */
function initRevealObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function initStaggerObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('go'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.stagger-children').forEach(el => obs.observe(el));
}

/* ===== SCORE RINGS ===== */
function initScoreRings() {
  document.querySelectorAll('[data-score-ring]').forEach(svg => {
    const score   = parseInt(svg.dataset.scoreRing);
    const r       = parseFloat(svg.dataset.radius || 44);
    const circ    = 2 * Math.PI * r;
    const fill    = svg.querySelector('.score-ring-fill');
    if (!fill) return;
    fill.style.strokeDasharray  = circ;
    fill.style.strokeDashoffset = circ;
    setTimeout(() => {
      const offset = circ - (score / 100) * circ;
      fill.style.strokeDashoffset = offset;
    }, 400);
  });
}

/* ===== TABS ===== */
function initTabs(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const btns   = container.querySelectorAll('.tab-btn');
  const panels = container.querySelectorAll('.tab-panel');
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.tab);
    if (target) target.classList.add('active');
  }));
}

/* ===== WATCHLIST ===== */
function toggleWatchlist(filmId, btn) {
  let wl = JSON.parse(localStorage.getItem('lumi_watchlist') || '[]');
  const idx = wl.indexOf(filmId);
  if (idx === -1) {
    wl.push(filmId);
    btn.classList.add('in-watchlist');
    showToast('🔖 Added to Watchlist', 'gold');
  } else {
    wl.splice(idx, 1);
    btn.classList.remove('in-watchlist');
    showToast('Removed from Watchlist', 'default');
  }
  localStorage.setItem('lumi_watchlist', JSON.stringify(wl));
}

function isInWatchlist(filmId) {
  const wl = JSON.parse(localStorage.getItem('lumi_watchlist') || '[]');
  return wl.includes(filmId);
}

/* ===== TOASTS ===== */
function showToast(message, type = 'default', duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = { gold:'⭐', violet:'✨', crimson:'🔥', default:'ℹ️' };
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icons[type]||icons.default}</span><span>${message}</span>`;
  if (type !== 'default') toast.style.borderColor = `var(--${type})`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

/* ===== FILM CARD RENDERER ===== */
function renderFilmCard(film, size = 'md') {
  const w = size === 'sm' ? '160px' : size === 'lg' ? '240px' : '195px';
  const inWL = isInWatchlist(film.id);
  return `
  <div class="film-card card-shine" style="width:${w}" onclick="location.href='film.html?id=${film.id}'">
    <div class="film-card-poster">
      <img src="${film.poster}" alt="${film.title}" loading="lazy"
           onerror="this.src='';this.style.cssText='width:100%;height:100%;background:linear-gradient(145deg,var(--bg-tertiary),var(--bg-elevated));display:flex;align-items:center;justify-content:center'">
      <div class="film-card-overlay"></div>
      <div class="film-card-actions">
        <button class="btn btn-primary btn-sm" style="flex:1;font-size:.75rem" onclick="event.stopPropagation();location.href='film.html?id=${film.id}'">View</button>
        <button class="btn btn-ghost btn-icon btn-sm ${inWL?'in-watchlist':''}"
          style="${inWL?'color:var(--gold);border-color:var(--gold)':''}"
          onclick="event.stopPropagation();toggleWatchlist(${film.id},this)"
          title="Add to Watchlist">🔖</button>
      </div>
    </div>
    <div class="film-card-body">
      <div class="film-card-title truncate">${film.title}</div>
      <div class="film-card-meta">
        <span class="score-pill score-pill-gold">★ ${film.scores.critic}%</span>
        <span class="t-xs c-muted">${film.year}</span>
      </div>
    </div>
  </div>`;
}

/* ===== UTILITY ===== */
function debounce(fn, delay) {
  let t; return (...args) => { clearTimeout(t); t = setTimeout(()=>fn(...args), delay); };
}
function formatNumber(n) {
  return n >= 1000 ? (n/1000).toFixed(1)+'k' : n.toString();
}
function getURLParam(key) {
  return new URLSearchParams(location.search).get(key);
}
