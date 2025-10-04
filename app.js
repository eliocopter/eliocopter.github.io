/* ===== i18n dictionaries ===== */
const I18N = {
  it: {
    nav: { projects: "Progetti", about: "About", contact: "Contatti" },
    hero: {
      badge: "IoT • ML • Web • Web3",
      title: "Portfolio tecnico con casi studio reali",
      lead: "Una selezione dei miei lavori: agenti di trading (Transformer Actor–Critic), sistemi IoT agricoli (RTK, MQTT), robotica amatoriale e prodotti web in produzione. Ogni progetto ha repo/documentazione e mock di interfaccia.",
      cta: { explore: "Esplora i progetti", cv: "Scarica CV" }
    },
    projects: { title: "Progetti", desc: "Filtra per area o usa la ricerca. Premi invio per aprire i dettagli del progetto evidenziato." },
    filters: { all: "Tutti" },
    search: { label: "Cerca", placeholder: "es. RTK, Actor–Critic, MQTT, e‑commerce..." },
    about: { title: "About", text: "Ingegnere informatico specializzato in IoT, sicurezza e ML. Progetto soluzioni end-to-end: firmware ESP32/Raspberry, MQTT/TLS, Android/Flutter, backend Java/Spring & Python con streaming gRPC/WebSocket, e frontend React/TS. Porto i prototipi sul campo (RTK, sensori, attuatori) e li rendo prodotti: telemetria, policy di sicurezza, UX chiara." },
    contact: { title: "Contatti", emailLabel: "Email", githubLabel: "GitHub", linkedinLabel: "LinkedIn" },
    footer: { tail: "Euplio Lisi Portfolio" },
    modal: { close: "Chiudi" },
    actions: { live: "More", details: "Dettagli" }
  },
  en: {
    nav: { projects: "Projects", about: "About", contact: "Contact" },
    hero: {
      badge: "IoT • ML • Web • Web3",
      title: "Technical portfolio with real case studies",
      lead: "A selection of my work: trading agents (Transformer Actor–Critic), agricultural IoT (RTK, MQTT), hobby robotics and production web products. Each project has repo/docs and interface mocks.",
      cta: { explore: "Explore projects", cv: "Download CV" }
    },
    projects: { title: "Projects", desc: "Filter by area or use search. Press Enter to open details of the focused project." },
    filters: { all: "All" },
    search: { label: "Search", placeholder: "e.g., RTK, Actor–Critic, MQTT, e‑commerce..." }, 
    about: { title: "About", text: "Computer engineer focused on IoT, security and ML. I design end-to-end systems: ESP32/Raspberry firmware, MQTT/TLS, Android/Flutter, Java/Spring & Python backends with gRPC/WebSocket, and React/TS front-ends. I take prototypes to the field (RTK, sensors, actuators) and ship products: telemetry, safety policies, clear UX." },
    contact: { title: "Contact", emailLabel: "Email", githubLabel: "GitHub", linkedinLabel: "LinkedIn" },
    footer: { tail: "Euplio Lisi Portfolio" },
    modal: { close: "Close" },
    actions: { live: "More", details: "Details" }
  }
};

/* ===== Projects data (localized) ===== */
const PROJECTS = [
  {
    id: "crypto-mcp",
    year: 2025,
    tags: ["ml", "web", "websocket", "gRPC"],
    links: {  demo: "mock-cryptomcp.html" },
      media: [
            { type: "img",   src: "media/session.png" },

    { type: "img",   src: "media/homepage.png" },
    ],
    i18n: {
      it: {
        title: "Crypto Agent, Actor-Critic Agent per HFT - Tesi Magistrale",
        subtitle: "Agent di Trading Transformer Actor–Critic",
        summary: "Piattaforma di trading per crypto con Actor & Critic basati su Transformer Encoder, backend Java/Spring + Python micro‑services, streaming gRPC→WS, dashboard real‑time e policy di rischio.",
        bullets: [
          "Modelli Actor & Critic: Transformer Encoder (non LLM)",
          "Backend: Java 21 • Spring Boot 3.5 • gRPC • Kafka (opz.) • SQLite/Firestore",
          "Client: Dashboard React/TS, live via WebSocket + REST backfill",
          "Explainability: XAI top‑k, warmup RSI, trailing/TP watcher configurabili"
        ]
      },
      en: {
        title: "Crypto MCP, Actor-Critic Agent for HFT - Master Degree Thesis",
        subtitle: "Transformer Actor–Critic Trading Agent",
        summary: "Crypto trading platform with Transformer‑Encoder Actor & Critic, Java/Spring + Python micro‑services, gRPC→WS streaming, real‑time dashboard and risk policies.",
        bullets: [
          "Actor & Critic: Transformer Encoder (non‑LLM)",
          "Backend: Java 21 • Spring Boot 3.5 • gRPC • Kafka (opt.) • SQLite/Firestore",
          "Client: React/TS dashboard, live via WebSocket + REST backfill",
          "Explainability: XAI top‑k, RSI warmup, configurable trailing/TP watchers"
        ]
      }
    }
  },
  {
    id: "smartfarm",
    year: 2025,
    tags: ["iot", "mobile", "mqtt", "rtk"],
    links: { demo: "mock-smartfarm.html" },
      media: [
    { type: "img",   src: "media/prototype.png" },
  ],
    i18n: {
      it: {
        title: "SmartFarm",
        subtitle: "Guida parallela RTK + App Android + MQTT",
        summary: "Sistema IoT agricolo: antenna RTK (2 cm), Raspberry + ESP32, broker MQTT e app Android per guida AB/Corona e telemetria in campo.",
        bullets: [
          "RTK GNSS (simpleRTK2B Lite) • NTRIP • heading GNRMC",
          "Gateway: Python + Flask/Socket.IO • mappe OSM • eventi DGPS/RTK",
          "Android: Firebase Auth, overlay Osmdroid, salvataggio campi",
          "ESP32: PubSubClient TLS, attuatori LED/Buzzer, topic dedicati"
        ]
      },
      en: {
        title: "SmartFarm",
        subtitle: "Parallel guidance RTK + Android App + MQTT",
        summary: "Agricultural IoT system: RTK antenna (2 cm), Raspberry + ESP32, MQTT broker and Android app for AB/Circle guidance and field telemetry.",
        bullets: [
          "RTK GNSS (simpleRTK2B Lite) • NTRIP • GNRMC heading",
          "Gateway: Python + Flask/Socket.IO • OSM maps • DGPS/RTK events",
          "Android: Firebase Auth, Osmdroid overlays, field saving",
          "ESP32: PubSubClient TLS, LED/Buzzer actuators, dedicated topics"
        ]
      }
    }
  },
  {
    id: "donkeycar",
    year: 2023,
    tags: ["ml", "iot", "robotica"],
    links: { demo: "mock-donkeycar.html" },
      media: [
    { type: "img",   src: "media/donkey-car.png" },
    { type: "img",   src: "media/simulation.gif" },
    { type: "img",   src: "media/donkey-web.gif" }
  ],
    i18n: {
      it: {
        title: "RC‑Car con DonkeyCar - Tesi Triennale",
        subtitle: "Autonomous RC basata su visione",
        summary: "Piattaforma RC con DonkeyCar: dataset locale, addestramento modello di pilotaggio, telemetria e loop di controllo su Raspberry.",
        bullets: ["Dataset track‑indoor, augmentation", "ConvNet leggera", "UI di telemetria e calibrazione"]
      },
      en: {
        title: "RC‑Car with DonkeyCar - Bachelor Degree Thesis",
        subtitle: "Vision‑based autonomous RC",
        summary: "RC platform using DonkeyCar: local datasets, driving model training, telemetry and control loop on Raspberry.",
        bullets: ["Indoor tracks dataset + augmentation", "Lightweight ConvNet", "Telemetry & calibration UI"]
      }
    }
  },
  {
    id: "rele-cancello",
    year: 2025,
    tags: ["iot", "mqtt", "embedded"],
    links: { demo: "mock-releesp32.html" },
      media: [
    { type: "img",   src: "media/rele login.png" },
    { type: "img",   src: "media/rele-admin-view.png" },
    { type: "img", src: "media/rele-homepage-device.png" },
  ],
    i18n: {
      it: {
        title: "ESP32 / Relè",
        subtitle: "ESP32 + MQTT + Firebase",
        summary: "Controllo remoto cancello/porta con ESP32, relè, feedback stato e log su MQTT/Firebase. Hardening su riconnessioni e watchdog.",
        bullets: ["ESP32 su TLS 8883", "Debounce, fail‑safe e retry", "Monitoraggio uptime e diagnostica"]
      },
      en: {
        title: "ESP32 / Relay",
        subtitle: "ESP32 + MQTT + Firebase",
        summary: "Remote control for gate/door with ESP32, relay, state feedback and logs via MQTT/Firebase. Hardened reconnections and watchdog.",
        bullets: ["ESP32 over TLS 8883", "Debounce, fail‑safe & retries", "Uptime monitoring and diagnostics"]
      }
    }
  },
  {
    id: "web3",
    year: 2023,
    tags: ["web3", "web"],
    links: {  demo: "mock-web3.html" },
      media: [
    { type: "img",   src: "media/nfe.gif" },
    { type: "img",   src: "media/minting-nfe.gif" },
    { type: "img",   src: "media/trumpxbiden.gif" }
  ],
    i18n: {
      it: {
        title: "Soluzioni Web3",
        subtitle: "NFT, token & dApp",
        summary: "Deploy collezioni NFT, dApp con wallet connect e minting controls.",
        bullets: ["ERC‑721/1155", "Mint UI minimale", "CI/CD per deploy"]
      },
      en: {
        title: "Web3 Solutions",
        subtitle: "NFT, tokens & light dApps",
        summary: "Deploy of NFT collections, dApps with wallet connect and minting controls.",
        bullets: ["ERC‑721/1155", "Minimal mint UI", "CI/CD for deploys"]
      }
    }
  },
  {
    id: "websites",
    year: 2022,
    tags: ["web"],
    links: { demo: "mock-web.html" },
    i18n: {
      it: {
        title: "Siti Web & e‑commerce",
        subtitle: "Laravel / Symfony / WordPress / PrestaShop",
        summary: "Siti vetrina e store: performance, SEO, integrazioni pagamenti/spedizioni, CMS su misura.",
        bullets: ["SSR/CSR a seconda dei casi", "Ottimizzazione Core Web Vitals", "Temi responsive personalizzati"]
      },
      en: {
        title: "Websites & e‑commerce",
        subtitle: "Laravel / Symfony / WordPress / PrestaShop",
        summary: "Showcase sites and stores: performance, SEO, payments/shipping integrations, custom CMS.",
        bullets: ["SSR/CSR case‑by‑case", "Core Web Vitals optimization", "Custom responsive themes"]
      }
    }
  }
];

/* ===== App state ===== */
const state = {
  lang: localStorage.getItem("lang") || "it",
  filter: "all",
  query: ""
};

/* ===== Utilities ===== */
function $(sel, root=document){ return root.querySelector(sel); }
function $all(sel, root=document){ return [...root.querySelectorAll(sel)]; }

function deviceSVG(label){
  return `<svg viewBox='0 0 640 400' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Preview ${label}'>
    <defs><linearGradient id='gg' x1='0' y1='0' x2='1' y2='1'><stop stop-color='#7c5cff' offset='0'/><stop stop-color='#6ee7ff' offset='1'/></linearGradient></defs>
    <rect x='40' y='30' rx='18' width='560' height='340' fill='#0f1422' stroke='url(#gg)' stroke-width='3'/>
    <rect x='70' y='60' rx='10' width='240' height='140' fill='#141a2a'/>
    <rect x='330' y='60' rx='10' width='240' height='240' fill='#141a2a'/>
    <rect x='70' y='220' rx='10' width='240' height='80' fill='#141a2a'/>
    <text x='80' y='90' font-family='Inter' font-size='18' fill='#8b93a7'>${label}</text>
  </svg>`;
}

/* ===== i18n engine ===== */
function applyI18N(){
  const dict = I18N[state.lang];
  document.documentElement.setAttribute('lang', state.lang);
  // text nodes
  $all('[data-i18n]').forEach(el => {
    const path = el.getAttribute('data-i18n').split('.');
    let val = dict;
    for(const k of path){ val = val?.[k]; }
    if(typeof val === 'string'){ el.innerHTML = val; }
  });
  // placeholders
  $all('[data-i18n-placeholder]').forEach(el => {
    const path = el.getAttribute('data-i18n-placeholder').split('.');
    let val = dict;
    for(const k of path){ val = val?.[k]; }
    if(typeof val === 'string'){ el.setAttribute('placeholder', val); el.setAttribute('aria-label', val); }
  });
  // nav aria-labels (optional)
}

/* ===== Render grid ===== */
function renderGrid(){
  const grid = $('#grid');
  grid.innerHTML = '';
  const q = state.query.trim().toLowerCase();
  const list = PROJECTS.filter(p => (state.filter==='all' || p.tags.includes(state.filter)) &&
    (!q || [p.i18n[state.lang].title, p.i18n[state.lang].subtitle, p.i18n[state.lang].summary, p.tags.join(' ')].join(' ').toLowerCase().includes(q))
  );
  if(!list.length){
    const empty = document.createElement('div');
    empty.className = 'muted';
    empty.style.gridColumn = 'span 12';
    empty.textContent = state.lang==='it' ? 'Nessun risultato. Prova a cambiare filtro o ricerca.' : 'No results. Try changing filter or search.';
    grid.appendChild(empty); return;
  }
  list.forEach(p => grid.appendChild(card(p)));
}

function card(p){
  const t = p.i18n[state.lang];
  const el = document.createElement('article');
  el.className = 'card';
  el.tabIndex = 0;
  el.setAttribute('role','button');
  el.setAttribute('aria-label', (state.lang==='it' ? 'Apri dettagli ' : 'Open details for ') + t.title);
  el.innerHTML = `
    ${previewHTML(p.media, t.title)}
    <div class='pad'>
      <div class='subtitle'>${p.year} • ${t.subtitle}</div>
      <div class='title'>${t.title}</div>
      <div class='tags'>${p.tags.map(tag => `<span class='tag'>#${tag}</span>`).join('')}</div>
      <div class='actions'>
        <button class='btn small secondary' data-open='${p.id}'>${I18N[state.lang].actions.details}</button>
        ${p.links.demo?`<a class='btn small' href='${p.links.demo}' target='_blank' rel='noopener'>${I18N[state.lang].actions.live}</a>`:''}
        ${p.links.repo?`<a class='btn small secondary' href='${p.links.repo}' target='_blank' rel='noopener'>${I18N[state.lang].actions.repo}</a>`:''}
      </div>
    </div>`;
  // anteprima interattiva
  setupPreview(el);

  el.addEventListener('click', (e)=>{
    if(e.target.matches('[data-open]')) openModal(p);
  });
  el.addEventListener('keydown', (e)=>{ if(e.key==='Enter') openModal(p); });
  return el;
}


/* ===== Preview builder (images & videos) ===== */
function previewHTML(media, title){
  if(!media || !media.length){
    return `<div class="mock">${deviceSVG(title)}</div>`;
  }
  const max = Math.min(media.length, 6); // limitiamo per performance
  const frames = media.slice(0, max).map((m, i) => {
    if(m.type === 'video'){
      return `<figure class="frame ${i===0?'active':''}">
        <video ${i===0?'autoplay':''} loop muted playsinline preload="metadata" src="${m.src}"></video>
      </figure>`;
    } else {
      return `<figure class="frame ${i===0?'active':''}">
        <img src="${m.src}" alt="${title} preview ${i+1}" loading="lazy">
      </figure>`;
    }
  }).join('');
  const dots = `<div class="dots">${Array.from({length:max}).map((_,i)=>`<i class="${i===0?'on':''}"></i>`).join('')}</div>`;
  return `<div class="mock"><div class="preview">${frames}${dots}</div></div>`;
}

function setupPreview(root){
  const preview = root.querySelector('.preview');
  if(!preview) return;
  const frames = [...preview.querySelectorAll('.frame')];
  const dots = [...preview.querySelectorAll('.dots i')];
  let idx = 0, timer = null;

  function show(i){
    idx = i % frames.length;
    frames.forEach((f, j) => {
      f.classList.toggle('active', j===idx);
      const v = f.querySelector('video');
      if(v){ j===idx ? v.play().catch(()=>{}) : v.pause(); }
    });
    dots.forEach((d, j)=> d.classList.toggle('on', j===idx));
  }

  function start(){
    if(frames.length < 2) return;
    stop();
    timer = setInterval(()=> show(idx+1), 1400);
  }
  function stop(){ if(timer){ clearInterval(timer); timer=null; } show(0); }

  // hover/focus
  preview.addEventListener('pointerenter', start);
  preview.addEventListener('pointerleave', stop);
  preview.addEventListener('focusin', start);
  preview.addEventListener('focusout', stop);

  // hover-scrub: sposta il mouse per scegliere il frame
  preview.addEventListener('mousemove', (e)=>{
    const r = preview.getBoundingClientRect();
    const ratio = Math.min(0.999, Math.max(0, (e.clientX - r.left) / r.width));
    const target = Math.floor(ratio * frames.length);
    show(target);
  });

  show(0);
}


/* ===== Modal ===== */
const modal = $('#modal');
$('#m-close').addEventListener('click', ()=> closeModal());
window.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && modal.open) closeModal(); });
function openModal(p){
  const t = p.i18n[state.lang];
  $('#m-title').textContent = t.title;
  $('#m-sub').textContent = `${p.year} • ${t.subtitle}`;
  $('#m-tags').innerHTML = p.tags.map(tag=>`<span class='pill'>#${tag}</span>`).join('');
  $('#m-summary').textContent = t.summary;
  $('#m-bullets').innerHTML = t.bullets.map(b=>`<li>${b}</li>`).join('');
  const links = [];
  if(p.links.demo) links.push(`<a class='btn small' href='${p.links.demo}' target='_blank' rel='noopener'>${I18N[state.lang].actions.live}</a>`);
  if(p.links.repo) links.push(`<a class='btn small secondary' href='${p.links.repo}' target='_blank' rel='noopener'>${I18N[state.lang].actions.repo}</a>`);
  $('#m-links').innerHTML = links.join('');
  modal.showModal();
}
function closeModal(){ modal.close(); }

/* ===== Controls ===== */
$all('.controls .chip').forEach(ch => ch.addEventListener('click', ()=>{
  $all('.controls .chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
  ch.setAttribute('aria-pressed', 'true');
  state.filter = ch.dataset.filter || 'all';
  renderGrid();
}));

const search = $('#search');
search.addEventListener('input', ()=>{ state.query = search.value; renderGrid(); });
window.addEventListener('keydown', (e)=>{ if(e.key === '/' && document.activeElement.tagName !== 'INPUT'){ e.preventDefault(); search.focus(); }});

/* ===== Language switch ===== */
function setLang(lang){
  state.lang = lang;
  localStorage.setItem('lang', lang);
  applyI18N();
  // update chips labels that are localized
  const firstChip = document.querySelector('.controls .chip[data-filter="all"]');
  if(firstChip){ firstChip.textContent = I18N[lang].filters.all; }
  // update modal close label
  $('#m-close').innerHTML = I18N[lang].modal.close;
  // update lang switch pressed state
  $('#lang-it').setAttribute('aria-pressed', String(lang==='it'));
  $('#lang-en').setAttribute('aria-pressed', String(lang==='en'));
  renderGrid();
}
$('#lang-it').addEventListener('click', ()=> setLang('it'));
$('#lang-en').addEventListener('click', ()=> setLang('en'));

/* ===== Init ===== */
(function init(){
  $('#y').textContent = new Date().getFullYear();
  applyI18N();
  setLang(state.lang); // triggers renderGrid too
})();
