/* ===== WHITE PAPERS DATA + LOGIC ===== */
const PAPERS = [
  {
    id: "wcat",
    name: "WCAT White Paper",
    fullName: "Will Circuit Activation Theory: A Structural State Framework",
    versions: [
      { v: "1.2", status: "current", date: "2026-05-10", changelog: "Added refined definitions for the R3 zone (R3.1 cultural single-decoupling state / R3.2 boundary tendency); revised the S_exe calculation method." },
      { v: "1.1", status: "superseded", date: "2025-11-02", changelog: "Added the E1–E8 Structural Event Profile system." },
      { v: "1.0", status: "superseded", date: "2025-08-15", changelog: "First public version." }
    ],
    abstract: "This white paper introduces Will Circuit Activation Theory (WCAT), seeking to redescribe 'volition' from a vague personality trait into an observable, measurable structural state. The framework centers on the coupling between the semantic and action systems (S_sem / S_exe), an individual's awareness of their own attractor patterns, and the pressure involved in rebuilding new structures after leaving an old path (reconstruction risk). This paper defines the full structural state zones (R-zone) and the eight structural event indicators (E1–E8), and provides preliminary case validation."
  },
  {
    id: "cmc",
    name: "CMC White Paper",
    fullName: "Consciousness–Meaning–Civilization Mapping Framework",
    versions: [
      { v: "1.0", status: "current", date: "2025-12-20", changelog: "First public version, extending the individual volition framework (WCAT) into a broader generation–coupling–feedback structure." }
    ],
    abstract: "The CMC framework extends WCAT's observation of individual structure, attempting to describe the dynamic relationship between Generation, Coupling, and Feedback. It offers a broader mapping tool for understanding the formation, collapse, and reconstruction of meaning systems. It remains in an early stage, with limited case validation."
  }
];

function renderPapersIndex() {
  document.getElementById('papers-index').innerHTML = PAPERS.map(p => {
    const current = p.versions.find(v => v.status === 'current');
    return `
    <div class="wp-row" style="cursor:pointer;" onclick="openPaper('${p.id}')">
      <div>
        <span class="wp-name">${p.name}</span>
        <span class="wp-ver">v${current.v} · current</span>
      </div>
      <a class="link-arrow">View details and version history →</a>
    </div>`;
  }).join('');
}

function openPaper(id) {
  const p = PAPERS.find(x => x.id === id);
  const el = document.getElementById('paper-detail');
  el.innerHTML = `
    <div class="section" style="border-top:1px solid var(--border-subtle); padding-top:2.5rem;">
      <a class="link-arrow" onclick="closePaper()">← Back to white paper list</a>
      <h2 class="detail-title" style="margin-top:1.5rem;">${p.fullName}</h2>
      <p class="detail-body">${p.abstract}</p>

      <div class="section-title" style="margin-top:2rem;">Version History</div>
      ${p.versions.map(v => `
        <div class="hypo-card" style="border-left-color: ${v.status === 'current' ? 'var(--primary-300)' : 'var(--border-default)'};">
          <div class="hypo-top">
            <span class="hypo-id">v${v.v} · ${v.date}</span>
            <span class="hypo-status ${v.status === 'current' ? 'validating' : ''}" style="${v.status !== 'current' ? 'background:var(--bg-tertiary); color:var(--text-tertiary);' : ''}">${v.status === 'current' ? 'CURRENT' : 'SUPERSEDED'}</span>
          </div>
          <div class="hypo-text" style="font-family:var(--sans); font-size:13.5px;">${v.changelog}</div>
        </div>
      `).join('')}

      <div class="detail-cta" style="padding-top:2rem;">
        <a class="btn btn-primary" href="#">Download PDF (v${p.versions[0].v})</a>
        <a class="btn btn-secondary" onclick="showPage('join'); selectIntent('cobuild');">Submit collaboration inquiry</a>
      </div>
    </div>
  `;
  document.getElementById('papers-index').parentElement.style.display = 'none';
  el.style.display = 'block';
  window.scrollTo(0,0);
}
function closePaper() {
  document.getElementById('paper-detail').style.display = 'none';
  document.getElementById('papers-index').parentElement.style.display = 'block';
}

/* ===== PUBLICATIONS DATA + LOGIC ===== */
const PUBS = [
  {
    id: "will-history",
    name: "The Short History of Will",
    status: "serializing",
    statusLabel: "Serializing",
    description: "An accessible narrative entry point for general readers. Beginning from the historical arc, it traces how humans have understood the concept of 'volition' — no background knowledge required.",
    chapters: [
      { number: 1, title: "What Is Volition?", date: "2025-08-01" },
      { number: 2, title: "Volition in the Classical Age", date: "2025-08-15" },
      { number: 3, title: "The Disappearance of Volition: The Behaviorist Shock", date: "2025-09-02" },
      { number: 4, title: "Rediscovering Structure", date: "2025-10-10" },
      { number: 5, title: "Knowing but Not Doing", date: "2025-11-20" },
      { number: 6, title: "Attractors and Naming", date: "2026-01-15" },
      { number: 7, title: "Naming and Breakdown", date: "2026-06-10" }
    ]
  },
  {
    id: "consciousness-history",
    name: "The Short History of Consciousness",
    status: "serializing",
    statusLabel: "Serializing",
    description: "An extended companion to The Short History of Will, exploring the deeper structural relationship between consciousness and volition, and providing the narrative background for the CMC framework.",
    chapters: [
      { number: 1, title: "The Return of the Consciousness Problem", date: "2026-02-01" },
      { number: 2, title: "How Reflexivity Forms", date: "2026-04-18" }
    ]
  },
  {
    id: "2080",
    name: "《2080》",
    status: "planned",
    statusLabel: "Planned",
    description: "A long-form fictional / speculative work oriented toward the future, exploring how individual structural theory may apply across longer timescales. Serialization has not yet begun.",
    chapters: []
  }
];

function renderPubsIndex() {
  document.getElementById('pubs-index').innerHTML = PUBS.map(p => `
    <div class="wp-row" style="cursor:pointer;" onclick="openPub('${p.id}')">
      <div>
        <span class="wp-name">${p.name}</span>
        <span class="wp-ver">${p.statusLabel}${p.chapters.length ? ' · ' + p.chapters.length + ' chapters' : ''}</span>
      </div>
      <a class="link-arrow">${p.chapters.length ? 'View chapters →' : 'Learn more →'}</a>
    </div>
  `).join('');
}

function openPub(id) {
  const p = PUBS.find(x => x.id === id);
  const el = document.getElementById('pub-detail');
  el.innerHTML = `
    <div class="section" style="border-top:1px solid var(--border-subtle); padding-top:2.5rem;">
      <a class="link-arrow" onclick="closePub()">← Back to publications list</a>
      <h2 class="detail-title" style="margin-top:1.5rem;">${p.name}</h2>
      <p class="detail-body">${p.description}</p>

      ${p.chapters.length ? `
        <div class="section-title" style="margin-top:2rem;">Chapter List</div>
        <div class="works-list">
          ${p.chapters.map(c => `
            <div class="work-row" id="ch-${p.id}-${c.number}">
              <span class="work-name">Chapter ${c.number} · ${c.title}</span>
              <span class="work-meta">${c.date}</span>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="notice" style="margin-top:1.5rem;">This work has not begun serialization yet and is currently in planning.</div>
      `}

      <div class="detail-cta" style="padding-top:2rem;">
        ${p.chapters.length ? `<a class="btn btn-primary" onclick="jumpToLatestChapter('${p.id}')">View latest chapter</a>` : ''}
        <a class="btn btn-secondary" onclick="showPage('join'); selectIntent('cobuild');">Discuss publication collaboration</a>
      </div>
    </div>
  `;
  document.getElementById('pubs-index').parentElement.style.display = 'none';
  el.style.display = 'block';
  window.scrollTo(0,0);
}
function closePub() {
  document.getElementById('pub-detail').style.display = 'none';
  document.getElementById('pubs-index').parentElement.style.display = 'block';
}
function jumpToLatestChapter(pubId) {
  const p = PUBS.find(x => x.id === pubId);
  if (!p || !p.chapters.length) return;
  const latest = p.chapters.reduce((a, b) => (a.date > b.date ? a : b));
  const row = document.getElementById(`ch-${pubId}-${latest.number}`);
  if (!row) return;
  row.scrollIntoView({ behavior: 'smooth', block: 'center' });
  row.style.background = 'var(--primary-50)';
  row.style.transition = 'background 0.6s';
  setTimeout(() => { row.style.background = 'transparent'; }, 1400);
}

/* ===== RESEARCH LOG DATA + LOGIC ===== */
const LOG_ENTRIES = [
  { date:"2026-06-15", type:"Case Growth", text:"A third long-term follow-up sample was added to the case archive, entering the longitudinal observation phase." },
  { date:"2026-05-20", type:"Scale Update", text:"The 25-item professional scale completed its second revision, adding structural state classification logic." },
  { date:"2026-05-10", type:"Theory Revision", text:"WCAT White Paper updated to v1.2, adding refined R3-zone definitions." },
  { date:"2026-04-02", type:"Theory Revision", text:"WCAT-H3 wording revised to clarify the boundary between \"chronic procrastination\" and \"weak volition.\"" },
  { date:"2026-03-20", type:"Case Growth", text:"CASE-004 completed its tracking cycle, entered a stable structural range, and moved to archive." },
  { date:"2025-12-20", type:"Collaboration Progress", text:"CMC White Paper v1.0 released." },
  { date:"2025-11-02", type:"Scale Update", text:"WCAT White Paper updated to v1.1, adding the E1–E8 Structural Event Profile system." },
  { date:"2025-08-15", type:"Theory Revision", text:"WCAT White Paper v1.0 released publicly for the first time." }
];

let activeLogType = null;
function logTypes() { return Array.from(new Set(LOG_ENTRIES.map(e => e.type))); }

function renderLogFilters() {
  const box = document.getElementById('log-filters');
  const types = [{ key: null, label: "All" }, ...logTypes().map(t => ({ key: t, label: t }))];
  box.innerHTML = types.map(t =>
    `<span class="chip ${activeLogType === t.key ? 'active' : ''}" onclick="setLogType(${t.key ? `'${t.key}'` : 'null'})">${t.label}</span>`
  ).join('');
}
function setLogType(t) { activeLogType = t; renderLogFilters(); renderLogList(); }

function renderLogList() {
  const list = LOG_ENTRIES.filter(e => !activeLogType || e.type === activeLogType);
  document.getElementById('log-list').innerHTML = list.map(e => `
    <div class="log-row">
      <div class="log-date">${e.date.replace(/-/g,'.')}</div>
      <div class="log-type">${e.type}</div>
      <div class="log-text">${e.text}</div>
    </div>
  `).join('');
}

renderPapersIndex();
/* ===== GLOSSARY DATA + LOGIC ===== */
const GLOSSARY = [
  { group: "Core Variables", code: "S_sem", name: "Semantic Maturity", def: "The developmental level of structural thinking and self-observation. A lower S_sem suggests an early stage: there is some initial observational capacity, but the meaning system remains unstable; a higher S_sem suggests a stable capacity for self-authorship." },
  { group: "Core Variables", code: "S_exe", name: "Existential Integration", def: "The degree of synchronization between understanding and action. A lower S_exe suggests a clear cognition–action decoupling — 'knowing but not doing'; a higher S_exe suggests the action system is functioning normally, with no obvious execution collapse." },
  { group: "Core Variables", code: "ΔP", name: "Theory–Reality Lead Relationship", def: "Measures whether the speed of theoretical understanding is synchronized with the capacity of reality to bear it. ΔP > 0 means theory leads reality (making 'premature construction' more likely); ΔP < 0 means reality leads theory; ΔP = 0 (balanced) means the two are broadly synchronized, representing a relatively healthy structural state." },

  { group: "Structural State Zones (R-zone)", code: "R1", name: "Pre-decoupling Zone", def: "The individual has not yet begun to depart from existing cultural narrative pathways, and still relies primarily on external authority and preset paths to make judgments." },
  { group: "Structural State Zones (R-zone)", code: "R2", name: "Attractor Recognition Zone", def: "The individual can already recognize their own repetitive behavioral patterns (attractors), but has not yet acquired the structural resources needed to leave them." },
  { group: "Structural State Zones (R-zone)", code: "R3.1", name: "Cultural Single-Decoupling State", def: "The individual has begun to depart from existing cultural narratives and has developed preliminary structural observation and reflexivity, but has not yet entered a stable construction stage. Cultural decoupling has occurred; biological decoupling has not yet fully stabilized." },
  { group: "Structural State Zones (R-zone)", code: "R3.2", name: "Boundary Tendency", def: "There is some observational capacity regarding emotions, bodily states, and behavioral reactions, but stable biological decoupling has not yet been reached; the individual remains on a transitional boundary within R3." },

  { group: "Structural Event Profile E1–E8", code: "E1", name: "Attractor Capture", def: "The extent to which the individual is currently influenced by identity, habit, or path attractors. The higher the value, the more strongly behavior is pulled by established patterns." },
  { group: "Structural Event Profile E1–E8", code: "E2", name: "Attractor Overload", def: "Whether overload phenomena such as value collapse, system loss of control, or an intense meaning crisis are present." },
  { group: "Structural Event Profile E1–E8", code: "E3", name: "Emotion Dominance", def: "Whether emotion has become the main driver of current behavior and decision-making, rather than rational assessment." },
  { group: "Structural Event Profile E1–E8", code: "E4", name: "Naming Failure", def: "Whether the individual has realized that the old explanatory system is insufficient and has begun searching for a new structural language. This is often an important signal of the R2→R3 transition — naming is a structural locking mechanism, and naming failure often means the old structure is beginning to fail." },
  { group: "Structural Event Profile E1–E8", code: "E5", name: "Cultural Decoupling", def: "The degree to which the individual no longer automatically believes in mainstream pathways or fully relies on external evaluation, and begins making autonomous judgments." },
  { group: "Structural Event Profile E1–E8", code: "E6", name: "Biological Decoupling", def: "Whether the individual can observe their own emotions and bodily states and distinguish them from the decision itself — that is, the degree of reflexive awareness of physiological drives." },
  { group: "Structural Event Profile E1–E8", code: "E7", name: "Reconstruction Risk", def: "The pressure of identity, value, and path reorganization borne when an individual has left an old structure but the new one has not yet stabilized. A high score does not indicate structural deterioration; it is often a normal feature of structural reorganization." },
  { group: "Structural Event Profile E1–E8", code: "E8", name: "Defensive Lock-in", def: "Whether the system is in a state of self-closure, theoretical defensiveness, or identity fixation. A value of 0 indicates an open system, with no obvious defensive lock-in." },

  { group: "IR Indicators", code: "IR-1", name: "Residual Legacy Meaning System", def: "Measures the degree to which the individual has not yet fully separated from the old meaning system — when cultural decoupling has not yet fully stabilized, this indicator is usually high." },
  { group: "IR Indicators", code: "IR-3", name: "Autogenic Meaning Signal", def: "Detects whether the individual has begun attempting self-determination, self-explanation, and self-designed pathways, but has not yet formed a stable generative mechanism. A higher value suggests early autogenic meaning signals have appeared, but remain unstable." },

  { group: "CMC Mapping", code: "Generation", name: "Generation Layer", def: "The strength of the individual's capacity to generate new paths, new explanations, and new action plans." },
  { group: "CMC Mapping", code: "Coupling", name: "Coupling Layer", def: "The strength of connection between newly generated paths and real conditions, as well as existing relational structures." },
  { group: "CMC Mapping", code: "Feedback", name: "Feedback Layer", def: "Whether a new path can obtain stable, observable positive feedback in practice, thereby forming a self-reinforcing closed loop." }
];

function groupedGlossary(filterText) {
  const f = (filterText || '').trim().toLowerCase();
  const filtered = !f ? GLOSSARY : GLOSSARY.filter(g =>
    g.code.toLowerCase().includes(f) || g.name.toLowerCase().includes(f) || g.def.toLowerCase().includes(f)
  );
  const groups = {};
  filtered.forEach(g => { (groups[g.group] = groups[g.group] || []).push(g); });
  return groups;
}

function renderGlossary(filterText) {
  const groups = groupedGlossary(filterText);
  const keys = Object.keys(groups);
  const list = document.getElementById('glossary-list');
  if (keys.length === 0) {
    list.innerHTML = `<div class="empty-state">No matching terms found</div>`;
    return;
  }
  list.innerHTML = keys.map(k => `
    <div class="gloss-group">
      <div class="gloss-group-title">${k}</div>
      ${groups[k].map(g => `
        <div class="gloss-entry">
          <div class="gloss-entry-code">${g.code}</div>
          <div>
            <div class="gloss-entry-name">${g.name}</div>
            <div class="gloss-entry-def">${g.def}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}
function filterGlossary(text) { renderGlossary(text); }

renderPubsIndex();
renderLogFilters();
renderLogList();
renderGlossary();

/* ===== NAV / PAGE ROUTING ===== */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  const link = document.querySelector('[data-page="' + id + '"]');
  if (link) link.classList.add('active');
  window.scrollTo(0,0);
  document.getElementById('navLinks').classList.remove('open');
}
function toggleMenu() { document.getElementById('navLinks').classList.toggle('open'); }
function toggleMode() {
  const html = document.documentElement;
  const btn = document.querySelector('.mode-toggle');
  html.classList.toggle('dark');
  btn.textContent = html.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
}

/* ===== CASE LIBRARY DATA + LOGIC ===== */
const CASES = [
  { id:"CASE-001", status:"active", statusLabel:"Long-term ongoing", tags:["Creative Stasis","Subject Structure Change"],
    primaryState:"R2.3", primaryGloss:"Externally stable functional zone: outward behavior remains normal, but the internal drive system has entered sustained stoppage.",
    coreVars:{sSem:3,sExe:1,deltaP:2,deltaPLabel:"Theory Leads Reality"},
    profile:{e1:4,e2:2,e3:1,e4:5,e5:2,e6:3,e7:6,e8:5}, ir:{ir1:3,ir3:1},
    cmc:{stage:"Generation active, feedback stalled",generation:"Medium-High",coupling:"Low",feedback:"Very Low"},
    summary:"The individual possesses clear self-observation and verbal expression, and can accurately describe their stalled state, but that clarity has not translated into action. Structural pressure comes mainly from a long-standing state of 'about to begin,' and the degree of defensive lock-in is relatively high, suggesting the current stasis may serve a protective function.",
    tracking:[{date:"2026-06-10",wellbeing:5,stress:7,meaning:4,clarity:6,agency:2,event:"Tried to restart a project shelved for half a year, then stopped again after three days.",note:"Self-observation is not the problem; the execution system remains persistently blocked."},
              {date:"2026-05-02",wellbeing:5,stress:6,meaning:4,clarity:6,agency:2,event:"Initial interview confirmed that the pattern has persisted for more than 18 months.",note:"Intake record created; long-term follow-up begins."}] },
  { id:"CASE-002", status:"active", statusLabel:"Long-term ongoing", tags:["Decoupling Process","Meaning Crisis"],
    primaryState:"R3.1", primaryGloss:"Cultural single-decoupling state: the person has begun to depart from existing cultural narratives and has basic structural observation capacity, but has not yet entered stable construction.",
    coreVars:{sSem:2,sExe:2,deltaP:0,deltaPLabel:"balanced"},
    profile:{e1:5,e2:0,e3:0,e4:5,e5:4,e6:6,e7:7,e8:0}, ir:{ir1:2,ir3:3},
    cmc:{stage:"Early reflexive loop formation",generation:"Medium",coupling:"Low-Medium",feedback:"Low"},
    summary:"The individual has realized that the old explanatory system is insufficient and has begun searching for a new structural language — often a major event in the R2→R3 transition. The core conflict is not 'Who am I?' but that the old explanation no longer works while the new one has not yet grown in. Reconstruction risk sits at the top of the full scale, but this is a normal feature of structural reorganization rather than structural decline.",
    tracking:[{date:"2026-06-15",wellbeing:6,stress:6,meaning:5,clarity:5,agency:5,event:"New exploratory signals have appeared in vocational direction.",note:"Reconstruction risk remains high, consistent with expectations for this stage."},
              {date:"2026-05-04",wellbeing:5,stress:7,meaning:3,clarity:4,agency:4,event:"Initial intake interview completed; full structural assessment finished.",note:"First assessed as an R3.1/R3.2 boundary state."}] },
  { id:"CASE-003", status:"active", statusLabel:"Long-term ongoing", tags:["Emotion Loop","Subject Structure Change"],
    primaryState:"R2.1", primaryGloss:"Attractor lock-in zone: the individual can recognize repetitive patterns but has not yet gained the structural resources needed to leave them.",
    coreVars:{sSem:3,sExe:2,deltaP:1,deltaPLabel:"Mild Lead"},
    profile:{e1:7,e2:3,e3:4,e4:3,e5:1,e6:3,e7:3,e8:6}, ir:{ir1:4,ir3:1},
    cmc:{stage:"Generation layer not yet activated",generation:"Low",coupling:"Low",feedback:"Medium"},
    summary:"Three different relationships display a highly consistent structural pattern: the same attractor-capture pathways and the same conflict triggers. Even after becoming aware of the loop, the individual still cannot step out of it, suggesting the core issue lies not at the cognitive level but in the strength of the attractor itself and the degree of defensive lock-in.",
    tracking:[{date:"2026-06-01",wellbeing:4,stress:7,meaning:5,clarity:7,agency:3,event:"Actively ended a relationship showing the same pattern — the first intentional interruption.",note:"Observable improvement in agency appeared for the first time."}] },
  { id:"CASE-004", status:"completed", statusLabel:"Completed", tags:["Creative Stasis","Subject Structure Change"],
    primaryState:"R1.4", primaryGloss:"Semantic–action decoupling state: the understanding system functions normally, but the action system remains blocked, with no stable connection between the two.",
    coreVars:{sSem:4,sExe:2,deltaP:2,deltaPLabel:"Theory Leads Reality"},
    profile:{e1:3,e2:1,e3:2,e4:6,e5:3,e6:4,e7:2,e8:3}, ir:{ir1:5,ir3:2},
    cmc:{stage:"Generation complete, coupling established",generation:"High",coupling:"Medium-High",feedback:"Medium"},
    summary:"During the tracking cycle, the full process from 'knowing but not doing' to the initial reconstruction of the action system was completed. The decline in the naming-failure indicator occurred in sync with rising execution integration, suggesting that renaming at the language level may have been the key trigger in this case's transformation.",
    tracking:[{date:"2026-03-20",wellbeing:7,stress:4,meaning:7,clarity:8,agency:6,event:"Completed the tracking cycle; structural state entered a stable range.",note:"Case closed and moved to archive."},
              {date:"2025-09-12",wellbeing:4,stress:6,meaning:4,clarity:5,agency:2,event:"Initial intake record created.",note:"——"}] },
  { id:"CASE-005", status:"active", statusLabel:"Long-term ongoing", tags:["Meaning Crisis","Emotion Loop"],
    primaryState:"R3.2", primaryGloss:"Boundary tendency: cultural decoupling has occurred, while biological decoupling is not yet fully stable; the case sits at a transitional structural boundary.",
    coreVars:{sSem:2,sExe:1,deltaP:1,deltaPLabel:"Mild Lead"},
    profile:{e1:4,e2:5,e3:6,e4:4,e5:5,e6:4,e7:6,e8:2}, ir:{ir1:1,ir3:2},
    cmc:{stage:"Rebuilding after feedback-layer collapse",generation:"Medium",coupling:"Low",feedback:"Low"},
    summary:"After a major career disruption, the original meaning system rapidly failed, accompanied by pronounced emotion-dominant features. This suggests that structural pressure at the current stage is being borne mainly by the emotional system rather than the cognitive system. Priority should be given to the interaction between reconstruction risk and emotional intensity.",
    tracking:[{date:"2026-05-28",wellbeing:3,stress:8,meaning:2,clarity:3,agency:3,event:"The third month after the original occupational identity completely failed.",note:"The emotion-dominance indicator remains elevated; increased follow-up frequency is recommended."}] },
  { id:"CASE-006", status:"archived", statusLabel:"Archived", tags:["Creative Stasis","Decoupling Process"],
    primaryState:"R1.2", primaryGloss:"Path-ambiguous state: basic action capacity exists, but there is no clear directional structural support.",
    coreVars:{sSem:2,sExe:3,deltaP:-1,deltaPLabel:"Reality Leads Theory"},
    profile:{e1:2,e2:1,e3:3,e4:2,e5:2,e6:2,e7:2,e8:4}, ir:{ir1:4,ir3:1},
    cmc:{stage:"No reflexive loop yet",generation:"Low",coupling:"Medium",feedback:"Medium"},
    summary:"The participant voluntarily withdrew from the study during the early tracking period. Existing data are retained as an early-stage reference sample and will not be updated further.",
    tracking:[{date:"2026-02-01",wellbeing:5,stress:5,meaning:4,clarity:4,agency:5,event:"Participant voluntarily withdrew from the follow-up program.",note:"In line with research ethics principles, the case remains archived and there will be no further contact."}] }
];
const PROFILE_NAMES = { e1:"Attractor Capture",e2:"Attractor Overload",e3:"Emotion Dominance",e4:"Naming Failure",e5:"Cultural Decoupling",e6:"Biological Decoupling",e7:"Reconstruction Risk",e8:"Defensive Lock-in" };
const CASE_CATEGORIES = ["Emotion Loop","Meaning Crisis","Decoupling Process","Dream Structure","AI Coupling","Creative Stasis","Subject Structure Change"];
let activeTags = new Set();
let activeStatus = null;

function allTags() { return CASE_CATEGORIES; }
function renderFilters() {
  document.getElementById('tag-filters').innerHTML = allTags().map(t =>
    `<span class="chip ${activeTags.has(t)?'active':''}" onclick="toggleTag('${t}')">${t}</span>`).join('');
  const statuses = [{key:null,label:"All"},{key:"active",label:"Long-term ongoing"},{key:"completed",label:"Completed"},{key:"archived",label:"Archived"}];
  document.getElementById('status-filters').innerHTML = statuses.map(s =>
    `<span class="chip ${activeStatus===s.key?'active':''}" onclick="setStatus(${s.key?`'${s.key}'`:'null'})">${s.label}</span>`).join('');
}
function toggleTag(t){ activeTags.has(t)?activeTags.delete(t):activeTags.add(t); renderFilters(); renderList(); }
function setStatus(s){ activeStatus=s; renderFilters(); renderList(); }
function filteredCases(){ return CASES.filter(c => (activeTags.size===0||c.tags.some(t=>activeTags.has(t))) && (!activeStatus||c.status===activeStatus)); }
function barWidth(v){ return Math.round((v/7)*100)+'%'; }
function topProfileBars(c){
  return Object.entries(c.profile).sort((a,b)=>b[1]-a[1]).slice(0,2).map(([k,v]) =>
    `<div class="bar-row"><span class="bar-label">${k.toUpperCase()}</span><div class="bar-track"><div class="bar-fill" style="width:${barWidth(v)};"></div></div><span class="bar-val">${v}</span></div>`).join('');
}
function renderList(){
  const grid = document.getElementById('cl-case-grid');
  const empty = document.getElementById('cl-empty-state');
  const list = filteredCases();
  document.getElementById('result-count').textContent = `Showing ${list.length} / ${CASES.length} cases`;
  if (list.length===0){ grid.innerHTML=''; empty.style.display='block'; return; }
  empty.style.display='none';
  grid.innerHTML = list.map(c => `
    <div class="case-card" onclick="openCase('${c.id}')">
      <div class="case-top-row"><span class="case-id">${c.id}</span><span class="status-dot ${c.status}">${c.statusLabel}</span></div>
      <div class="case-tags">${c.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="case-summary">${c.summary.slice(0,58)}...</div>
      ${topProfileBars(c)}
    </div>`).join('');
}
function renderDetail(c){
  const profileRows = Object.entries(c.profile).map(([k,v]) => `
    <div class="profile-row"><span class="profile-code">${k.toUpperCase()}</span><span class="profile-name">${PROFILE_NAMES[k]}</span>
      <div class="profile-track"><div class="profile-fill" style="width:${barWidth(v)};"></div></div><span class="profile-val">${v}</span></div>`).join('');
  const trackingHtml = c.tracking.map(t => `
    <div class="tl-entry"><div class="tl-date">${t.date}</div>
      <div class="tl-metrics">Well-being ${t.wellbeing} · Stress ${t.stress} · Meaning ${t.meaning} · Clarity ${t.clarity} · Agency ${t.agency}</div>
      <div class="tl-event">${t.event}</div><div class="tl-note">${t.note}</div></div>`).join('');
  document.getElementById('cl-detail-view').innerHTML = `
    <a class="back-link" onclick="closeCase()">← Back to Case Archive</a>
    <div class="detail-head">
      <div class="detail-id-row"><span class="detail-id">${c.id}</span><span class="status-dot ${c.status}">${c.statusLabel}</span>
        <div class="case-tags">${c.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></div>
      <h1 class="detail-title">Structural Observation Record</h1>
      <div class="state-block"><div class="state-code">${c.primaryState}</div><div class="state-gloss">${c.primaryGloss}</div></div>
    </div>
    <div class="detail-section"><div class="detail-section-title">Core Variables</div>
      <div class="var-grid">
        <div class="var-cell"><div class="var-num">${c.coreVars.sSem}</div><div class="var-label">S_sem Semantic Maturity</div></div>
        <div class="var-cell"><div class="var-num">${c.coreVars.sExe}</div><div class="var-label">S_exe Existential Integration</div></div>
        <div class="var-cell"><div class="var-num">${c.coreVars.deltaP>=0?'+':''}${c.coreVars.deltaP}</div><div class="var-label">ΔP · ${c.coreVars.deltaPLabel}</div></div>
      </div></div>
    <div class="detail-section"><div class="detail-section-title">Structural Event Profile E1–E8</div>${profileRows}</div>
    <div class="detail-section"><div class="detail-section-title">CMC Mapping</div>
      <div class="cmc-stage">${c.cmc.stage}</div>
      <div class="cmc-grid">
        <div class="cmc-cell"><div class="cmc-label">Generation</div><div class="cmc-val">${c.cmc.generation}</div></div>
        <div class="cmc-cell"><div class="cmc-label">Coupling</div><div class="cmc-val">${c.cmc.coupling}</div></div>
        <div class="cmc-cell"><div class="cmc-label">Feedback</div><div class="cmc-val">${c.cmc.feedback}</div></div>
      </div></div>
    <div class="detail-section"><div class="detail-section-title">Researcher Summary</div><p class="summary-text">${c.summary}</p></div>
    <div class="detail-section"><div class="detail-section-title">Longitudinal Tracking</div><div class="timeline">${trackingHtml}</div></div>
    <div class="detail-cta">
      <a class="btn btn-primary" onclick="showPage('join'); selectIntent('longterm');">Apply to Become a Case Participant</a>
      <a class="btn btn-secondary" onclick="closeCase()">Return to Case Archive</a>
    </div>`;
}
function openCase(id){
  const c = CASES.find(x=>x.id===id);
  renderDetail(c);
  document.getElementById('cl-list-view').style.display='none';
  document.getElementById('cl-detail-view').style.display='block';
  window.scrollTo(0,0);
}
function closeCase(){
  document.getElementById('cl-detail-view').style.display='none';
  document.getElementById('cl-list-view').style.display='block';
  window.scrollTo(0,0);
}

/* ===== JOIN DATA + LOGIC ===== */
const INTENTS = [
  { key:"read", titleEn:"READ", title:"Read", desc:"Free public materials; no application needed — just browse.", meta:"No contact needed" },
  { key:"open_obs", titleEn:"OPEN OBSERVATION", title:"Open Observation", desc:"Best for: career difficulties / relationship issues / emotional fluctuation / dream records / crises of meaning", meta:"Basic participation is free",
    type:"wechat",
    detailTitle:"Open Observation",
    detailBody:"Includes: one-time structural observation, dream recording and organization, basic interviews, state tracking, and anonymized case research.<br><br>All materials are anonymized by default. Participation does not imply agreement with the theory. <strong>Basic participation is free.</strong>" },
  { key:"longterm", titleEn:"LONG-TERM CASE", title:"Long-term Case", desc:"Continuously document change processes and contribute jointly to the research archive", meta:"Long-term observation",
    type:"wechat",
    detailTitle:"Long-term Follow-up & Case Co-Building",
    detailBody:"Includes: regular follow-ups, dream tracking, life-stage records, observation of phase-shift changes, structural change dossiers, tool feedback, and collaborative refinement.<br><br>Participation usually begins gradually after basic observation is completed. The focus is not counseling, but jointly completing a long-term case." },
  { key:"research", titleEn:"RESEARCH & PUBLICATION", title:"Research & Publication Collaboration", desc:"Best for: researchers / doctoral students / AI researchers / translators / publishers / media", meta:"Academic collaboration",
    type:"contact",
    detailTitle:"Academic, Publishing & Research Collaboration",
    detailBody:"Collaboration may include: theoretical discussion, experimental design, data analysis, translation projects, publishing partnerships, AI tool development, and case database construction." },
  { key:"cobuild", titleEn:"CO-BUILD", title:"Co-Build Program", desc:"Best for: people following the project long term / those wishing to contribute skills", meta:"Volunteer Collaboration",
    type:"wechat",
    detailTitle:"Volunteer Collaboration & Project Co-Building",
    detailBody:"Possible contributions: website maintenance, AI tool development, translation, podcast and video production, data organization, and international outreach.<br><br>The project is still maintained individually at present, but an open collaboration network will gradually take shape." }
];
let selectedKey = null;
function renderGrid(){
  document.getElementById('intent-grid-a').innerHTML = INTENTS.map(i => {
    if (i.key === 'read') {
      return `<div class="intent-card" onclick="showPage('pubs')">
        <div class="intent-title-en">${i.titleEn}</div>
        <div class="intent-title">${i.title}</div><div class="intent-desc">${i.desc}</div><div class="intent-meta">${i.meta}</div>
      </div>`;
    }
    return `<div class="intent-card ${selectedKey===i.key?'selected':''}" onclick="selectIntent('${i.key}')">
      <div class="intent-title-en">${i.titleEn}</div>
      <div class="intent-title">${i.title}</div><div class="intent-desc">${i.desc}</div><div class="intent-meta">${i.meta}</div>
    </div>`;
  }).join('');
}
function selectIntent(key){
  const item = INTENTS.find(i=>i.key===key);
  if (item && item.type === 'contact') {
    showPage('contact');
    return;
  }
  selectedKey = key;
  renderGrid();
  const panel = document.getElementById('join-detail-panel');
  panel.innerHTML = `
    <div class="detail-eyebrow">${item.titleEn}</div>
    <h2 class="detail-title">${item.detailTitle}</h2>
    <p class="detail-body">${item.detailBody}</p>
    <div class="wechat-contact">
      <div class="wechat-label">WeChat</div>
      <div class="wechat-id">meta-jiawei</div>
    </div>
    <button class="btn btn-secondary" type="button" onclick="closeJoinPanel()" style="margin-top:1.5rem;">Close</button>`;
  panel.style.display='block';
  panel.scrollIntoView({behavior:'smooth', block:'start'});
}
function closeJoinPanel(){ selectedKey=null; renderGrid(); document.getElementById('join-detail-panel').style.display='none'; }
function toggleFaq(btn){ btn.closest('.faq-item').classList.toggle('open'); }

/* ===== INIT ===== */
renderFilters();
renderList();
renderGrid();
