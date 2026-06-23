/* ===== WHITE PAPERS DATA + LOGIC ===== */
const PAPERS = [
  {
    id: "wcat",
    name: "WCAT 白皮书",
    fullName: "意志回路激活理论：结构状态框架",
    versions: [
      { v: "1.2", status: "current", date: "2026-05-10", changelog: "新增 R3 区细分定义（R3.1 文化单解耦态 / R3.2 边界倾向）；修正 S_exe 计算方式。" },
      { v: "1.1", status: "superseded", date: "2025-11-02", changelog: "新增 E1–E8 结构事件画像体系。" },
      { v: "1.0", status: "superseded", date: "2025-08-15", changelog: "首个公开版本。" }
    ],
    abstract: "本文提出意志回路激活理论（WCAT），尝试把'意志'从模糊的人格特质重新描述为一种可观察、可测量的结构状态。框架核心包括语义系统与行动系统的耦合度（S_sem / S_exe）、个体对自身吸引子模式的觉察能力，以及脱离旧有路径后重建新结构所承受的压力（重建风险）。本白皮书定义了完整的结构状态分区（R-zone）与八项结构事件指标（E1–E8），并提供初步案例验证。"
  },
  {
    id: "cmc",
    name: "CMC 白皮书",
    fullName: "意识—意义—文明映射框架",
    versions: [
      { v: "1.0", status: "current", date: "2025-12-20", changelog: "首个公开版本，从个体意志框架（WCAT）延伸至更广义的生成—耦合—回馈结构。" }
    ],
    abstract: "CMC 框架延伸 WCAT 的个体结构观察，尝试描述生成层（Generation）、耦合层（Coupling）与回馈层（Feedback）三者之间的动态关系，为理解意义系统的形成、崩塌与重建提供更广义的映射工具。目前仍处早期阶段，案例验证有限。"
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
      <a class="link-arrow">查看详情与版本历史 →</a>
    </div>`;
  }).join('');
}

function openPaper(id) {
  const p = PAPERS.find(x => x.id === id);
  const el = document.getElementById('paper-detail');
  el.innerHTML = `
    <div class="section" style="border-top:1px solid var(--border-subtle); padding-top:2.5rem;">
      <a class="link-arrow" onclick="closePaper()">← 返回白皮书列表</a>
      <h2 class="detail-title" style="margin-top:1.5rem;">${p.fullName}</h2>
      <p class="detail-body">${p.abstract}</p>

      <div class="section-title" style="margin-top:2rem;">版本历史</div>
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
        <a class="btn btn-primary" href="#">下载 PDF（v${p.versions[0].v}）</a>
        <a class="btn btn-secondary" onclick="showPage('join'); selectIntent('cobuild');">提交学术合作申请</a>
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
    name: "《意志简史》",
    status: "serializing",
    statusLabel: "连载中",
    description: "面向大众的叙事性入口。从历史脉络出发，追溯人类如何理解'意志'这个概念——不需要任何背景知识即可阅读。",
    chapters: [
      { number: 1, title: "意志是什么", date: "2025-08-01" },
      { number: 2, title: "古典时代的意志观", date: "2025-08-15" },
      { number: 3, title: "意志的消失：行为主义的冲击", date: "2025-09-02" },
      { number: 4, title: "重新发现结构", date: "2025-10-10" },
      { number: 5, title: "知道却做不到", date: "2025-11-20" },
      { number: 6, title: "吸引子与命名", date: "2026-01-15" },
      { number: 7, title: "命名与失效", date: "2026-06-10" }
    ]
  },
  {
    id: "consciousness-history",
    name: "《意识简史》",
    status: "serializing",
    statusLabel: "连载中",
    description: "《意志简史》的延伸阅读，探讨意识与意志之间更深的结构关系，为 CMC 框架提供叙事性背景。",
    chapters: [
      { number: 1, title: "意识问题的回归", date: "2026-02-01" },
      { number: 2, title: "反身性是如何形成的", date: "2026-04-18" }
    ]
  },
  {
    id: "2080",
    name: "《2080》",
    status: "planned",
    statusLabel: "规划中",
    description: "面向未来的长篇虚构 / 推测性作品，探讨个体结构理论在更长时间尺度上的应用。尚未开始连载。",
    chapters: []
  }
];

function renderPubsIndex() {
  document.getElementById('pubs-index').innerHTML = PUBS.map(p => `
    <div class="wp-row" style="cursor:pointer;" onclick="openPub('${p.id}')">
      <div>
        <span class="wp-name">${p.name}</span>
        <span class="wp-ver">${p.statusLabel}${p.chapters.length ? ' · ' + p.chapters.length + ' 章' : ''}</span>
      </div>
      <a class="link-arrow">${p.chapters.length ? '查看章节 →' : '了解详情 →'}</a>
    </div>
  `).join('');
}

function openPub(id) {
  const p = PUBS.find(x => x.id === id);
  const el = document.getElementById('pub-detail');
  el.innerHTML = `
    <div class="section" style="border-top:1px solid var(--border-subtle); padding-top:2.5rem;">
      <a class="link-arrow" onclick="closePub()">← 返回出版物列表</a>
      <h2 class="detail-title" style="margin-top:1.5rem;">${p.name}</h2>
      <p class="detail-body">${p.description}</p>

      ${p.chapters.length ? `
        <div class="section-title" style="margin-top:2rem;">章节列表</div>
        <div class="works-list">
          ${p.chapters.map(c => `
            <div class="work-row" id="ch-${p.id}-${c.number}">
              <span class="work-name">第${c.number}章 · ${c.title}</span>
              <span class="work-meta">${c.date}</span>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="notice" style="margin-top:1.5rem;">该作品尚未开始连载，目前处于规划阶段。</div>
      `}

      <div class="detail-cta" style="padding-top:2rem;">
        ${p.chapters.length ? `<a class="btn btn-primary" onclick="jumpToLatestChapter('${p.id}')">查看最新章节</a>` : ''}
        <a class="btn btn-secondary" onclick="showPage('join'); selectIntent('cobuild');">讨论出版合作</a>
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
  { date:"2026-06-15", type:"案例增长", text:"案例库新增第三个长期追踪样本，进入纵向观察阶段。" },
  { date:"2026-05-20", type:"量表更新", text:"25题专业量表完成第二次修订，新增结构状态判定逻辑。" },
  { date:"2026-05-10", type:"理论修订", text:"WCAT 白皮书更新至 v1.2，新增 R3 区细分定义。" },
  { date:"2026-04-02", type:"理论修订", text:"WCAT-H3 假说措辞调整，明确\"长期拖延\"与\"意志薄弱\"的区分边界。" },
  { date:"2026-03-20", type:"案例增长", text:"CASE-004 完成追踪周期，结构状态进入稳定区间，转入归档。" },
  { date:"2025-12-20", type:"合作进展", text:"CMC 白皮书 v1.0 发布。" },
  { date:"2025-11-02", type:"量表更新", text:"WCAT 白皮书更新至 v1.1，新增 E1–E8 结构事件画像体系。" },
  { date:"2025-08-15", type:"理论修订", text:"WCAT 白皮书 v1.0 首次公开发布。" }
];

let activeLogType = null;
function logTypes() { return Array.from(new Set(LOG_ENTRIES.map(e => e.type))); }

function renderLogFilters() {
  const box = document.getElementById('log-filters');
  const types = [{ key: null, label: "全部" }, ...logTypes().map(t => ({ key: t, label: t }))];
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
  { group: "核心变量", code: "S_sem", name: "语义成熟度", def: "个体结构思维与自我观察能力的发展程度。S_sem 较低提示尚处于早期阶段：有初步观察力但意义系统未稳定；较高则提示已形成稳定的自我作者化能力。" },
  { group: "核心变量", code: "S_exe", name: "存在整合度", def: "理解与行动之间的同步程度。S_exe 较低提示存在明显的认知—行动脱耦，即'知道却做不到'；较高则提示行动系统运转正常，无明显执行崩塌。" },
  { group: "核心变量", code: "ΔP", name: "理论-现实领先关系", def: "衡量个体的理论理解速度与现实承载能力是否同步。ΔP > 0 表示理论领先现实（容易出现'建构偷跑'）；ΔP < 0 表示现实领先理论；ΔP = 0（balanced）表示二者大体同步，是相对健康的结构状态。" },

  { group: "结构状态分区 R-zone", code: "R1", name: "前解耦区", def: "个体尚未开始脱离既有文化叙事路径，仍主要依赖外部权威与既定路径做出判断。" },
  { group: "结构状态分区 R-zone", code: "R2", name: "吸引子识别区", def: "已能识别自身的重复行为模式（吸引子），但尚未获得脱离该模式所需的结构资源。" },
  { group: "结构状态分区 R-zone", code: "R3.1", name: "文化单解耦态", def: "已开始脱离既有文化叙事，具备初步结构观察能力与反身性，但尚未进入稳定建构阶段。文化解耦已发生，生物解耦未完全稳定。" },
  { group: "结构状态分区 R-zone", code: "R3.2", name: "边界倾向", def: "对情绪、身体状态与行为反应已具备一定观察能力，但尚未达到稳定的生物解耦，处于 R3 内部的过渡边界。" },

  { group: "结构事件画像 E1–E8", code: "E1", name: "吸引子捕获", def: "个体当前受身份、习惯或路径吸引子影响的程度。数值越高，说明行为受既定模式牵引越强。" },
  { group: "结构事件画像 E1–E8", code: "E2", name: "吸引子过载", def: "是否出现价值崩塌、系统失控或强烈意义危机等过载表现。" },
  { group: "结构事件画像 E1–E8", code: "E3", name: "情绪主导", def: "情绪是否已成为当前行为与决策的主要驱动力，而非理性评估。" },
  { group: "结构事件画像 E1–E8", code: "E4", name: "命名失败", def: "个体是否已意识到旧有解释系统不足、开始寻找新的结构语言。这通常是 R2→R3 转折的重要信号——命名是结构锁定机制，命名失败往往意味着旧结构开始失效。" },
  { group: "结构事件画像 E1–E8", code: "E5", name: "文化解耦", def: "个体不再自动相信主流路径、不再完全依赖外部评价，开始自主判断的程度。" },
  { group: "结构事件画像 E1–E8", code: "E6", name: "生物解耦", def: "个体能否观察自身情绪与身体状态，并将其与决定本身区分开——即对生理驱动的反身性意识程度。" },
  { group: "结构事件画像 E1–E8", code: "E7", name: "重建风险", def: "个体离开旧结构、但新结构尚未稳定时所承受的身份重组、价值重组与路径重组压力。数值高并不代表结构退化，通常是结构重组过程中的正常现象。" },
  { group: "结构事件画像 E1–E8", code: "E8", name: "防御锁定", def: "系统是否处于自我封闭、理论防御或身份固化状态。数值为 0 表示系统开放，无明显防御性锁定。" },

  { group: "IR 指标", code: "IR-1", name: "旧意义系统残留", def: "衡量个体尚未完成与旧意义系统脱离的程度——文化解耦尚未彻底稳定时，该指标通常较高。" },
  { group: "IR 指标", code: "IR-3", name: "意义自生信号", def: "探测个体是否已开始尝试自我决定、自我解释与自我路径设计，但尚未形成稳定的生成机制。数值较高提示早期意义自生信号已出现，但尚不稳定。" },

  { group: "CMC 映射", code: "Generation", name: "生成层", def: "个体生成新路径、新解释、新行动方案的能力强弱。" },
  { group: "CMC 映射", code: "Coupling", name: "耦合层", def: "新生成的路径与现实条件、既有关系结构之间的连接强度。" },
  { group: "CMC 映射", code: "Feedback", name: "回馈层", def: "新路径在实践后能否获得稳定、可观察的正向回馈，从而形成自我强化的闭环。" }
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
    list.innerHTML = `<div class="empty-state">没有找到匹配的术语</div>`;
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
  btn.textContent = html.classList.contains('dark') ? '亮色模式' : '暗色模式';
}

/* ===== CASE LIBRARY DATA + LOGIC ===== */
const CASES = [
  { id:"CASE-001", status:"active", statusLabel:"长期追踪中", tags:["创造性停滞","主体结构变化"],
    primaryState:"R2.3", primaryGloss:"外部功能稳定区：行为表现正常，但内部驱动系统已出现持续性停转。",
    coreVars:{sSem:3,sExe:1,deltaP:2,deltaPLabel:"理论领先现实"},
    profile:{e1:4,e2:2,e3:1,e4:5,e5:2,e6:3,e7:6,e8:5}, ir:{ir1:3,ir3:1},
    cmc:{stage:"生成层活跃，回馈层停滞",generation:"中-高",coupling:"低",feedback:"极低"},
    summary:"个体具备清晰的自我观察与语言表达能力，能准确描述自己的停滞状态，但这种清晰度并未转化为行动。结构压力主要来自长期的'即将开始'状态，防御锁定程度较高，提示当前的停滞可能具有一定的保护性功能。",
    tracking:[{date:"2026-06-10",wellbeing:5,stress:7,meaning:4,clarity:6,agency:2,event:"尝试重启一个搁置半年的项目，三天后再次停止。",note:"自我观察能力没有问题，执行系统持续受阻。"},
              {date:"2026-05-02",wellbeing:5,stress:6,meaning:4,clarity:6,agency:2,event:"首次访谈，确认现象持续时间已超过18个月。",note:"建档，开始长期追踪。"}] },
  { id:"CASE-002", status:"active", statusLabel:"长期追踪中", tags:["解耦过程","意义危机"],
    primaryState:"R3.1", primaryGloss:"文化单解耦态：已开始脱离既有文化叙事，具备初步结构观察能力，但尚未进入稳定建构阶段。",
    coreVars:{sSem:2,sExe:2,deltaP:0,deltaPLabel:"balanced"},
    profile:{e1:5,e2:0,e3:0,e4:5,e5:4,e6:6,e7:7,e8:0}, ir:{ir1:2,ir3:3},
    cmc:{stage:"反身性闭环早期形成期",generation:"中",coupling:"低-中",feedback:"低"},
    summary:"个体已经意识到旧解释系统不足，开始寻找新的结构语言，这通常是R2→R3转折的重要事件。当前核心冲突不是'我是谁'，而是旧解释已经不够用，但新解释还没有长出来。重建风险处于全量表最高位，但这是结构重组过程中的正常现象，而非结构退化。",
    tracking:[{date:"2026-06-15",wellbeing:6,stress:6,meaning:5,clarity:5,agency:5,event:"职业方向出现新的探索信号。",note:"重建风险维持高位，符合该阶段预期。"},
              {date:"2026-05-04",wellbeing:5,stress:7,meaning:3,clarity:4,agency:4,event:"首次建档访谈，完成完整结构判定。",note:"首次判定为R3.1/R3.2边界态。"}] },
  { id:"CASE-003", status:"active", statusLabel:"长期追踪中", tags:["情绪循环","主体结构变化"],
    primaryState:"R2.1", primaryGloss:"吸引子锁定区：个体已能识别重复模式，但尚未获得脱离该模式所需的结构资源。",
    coreVars:{sSem:3,sExe:2,deltaP:1,deltaPLabel:"轻度领先"},
    profile:{e1:7,e2:3,e3:4,e4:3,e5:1,e6:3,e7:3,e8:6}, ir:{ir1:4,ir3:1},
    cmc:{stage:"生成层尚未激活",generation:"低",coupling:"低",feedback:"中"},
    summary:"三段不同关系呈现高度一致的结构模式：相同的吸引子捕获路径、相同的冲突触发点。个体在意识到循环之后仍然无法跳出，提示问题核心不在认知层面，而在吸引子本身的强度与防御锁定程度。",
    tracking:[{date:"2026-06-01",wellbeing:4,stress:7,meaning:5,clarity:7,agency:3,event:"主动结束一段呈现相同模式的关系，为首次主动中断。",note:"行动力首次出现可观测的提升信号。"}] },
  { id:"CASE-004", status:"completed", statusLabel:"已完成", tags:["创造性停滞","主体结构变化"],
    primaryState:"R1.4", primaryGloss:"语义-行动脱耦态：理解系统运转正常，行动系统持续受阻，二者之间缺乏稳定连接。",
    coreVars:{sSem:4,sExe:2,deltaP:2,deltaPLabel:"理论领先现实"},
    profile:{e1:3,e2:1,e3:2,e4:6,e5:3,e6:4,e7:2,e8:3}, ir:{ir1:5,ir3:2},
    cmc:{stage:"生成层完成，耦合层建立",generation:"高",coupling:"中-高",feedback:"中"},
    summary:"追踪周期内完成从'知道却做不到'到行动系统初步重建的全过程。命名失败指标的下降与执行整合度的上升同步发生，提示语言层面的重新命名可能是该案例转变的关键触发点。",
    tracking:[{date:"2026-03-20",wellbeing:7,stress:4,meaning:7,clarity:8,agency:6,event:"完成追踪周期，结构状态进入稳定区间。",note:"结案，转入归档。"},
              {date:"2025-09-12",wellbeing:4,stress:6,meaning:4,clarity:5,agency:2,event:"首次建档。",note:"——"}] },
  { id:"CASE-005", status:"active", statusLabel:"长期追踪中", tags:["意义危机","情绪循环"],
    primaryState:"R3.2", primaryGloss:"边界倾向：文化解耦已发生，生物解耦未完全稳定，处于结构过渡边界。",
    coreVars:{sSem:2,sExe:1,deltaP:1,deltaPLabel:"轻度领先"},
    profile:{e1:4,e2:5,e3:6,e4:4,e5:5,e6:4,e7:6,e8:2}, ir:{ir1:1,ir3:2},
    cmc:{stage:"回馈层崩塌后重建中",generation:"中",coupling:"低",feedback:"低"},
    summary:"重大职业变动后原有意义系统迅速失效，伴随明显的情绪主导特征，提示当前阶段结构压力主要由情绪系统承载，而非认知系统。需优先关注重建风险与情绪强度的交互。",
    tracking:[{date:"2026-05-28",wellbeing:3,stress:8,meaning:2,clarity:3,agency:3,event:"原职业身份彻底失效后的第三个月。",note:"情绪主导指标持续偏高，建议加强回访频率。"}] },
  { id:"CASE-006", status:"archived", statusLabel:"已归档", tags:["创造性停滞","解耦过程"],
    primaryState:"R1.2", primaryGloss:"路径模糊态：具备基本行动能力，但缺乏明确的方向性结构支撑。",
    coreVars:{sSem:2,sExe:3,deltaP:-1,deltaPLabel:"现实领先理论"},
    profile:{e1:2,e2:1,e3:3,e4:2,e5:2,e6:2,e7:2,e8:4}, ir:{ir1:4,ir3:1},
    cmc:{stage:"未进入反身性闭环",generation:"低",coupling:"中",feedback:"中"},
    summary:"参与者在追踪初期主动退出研究，现有数据保留作为早期阶段参考样本，不再更新。",
    tracking:[{date:"2026-02-01",wellbeing:5,stress:5,meaning:4,clarity:4,agency:5,event:"参与者主动退出追踪计划。",note:"按研究伦理原则，案例归档保留，不再联系。"}] }
];
const PROFILE_NAMES = { e1:"吸引子捕获",e2:"吸引子过载",e3:"情绪主导",e4:"命名失败",e5:"文化解耦",e6:"生物解耦",e7:"重建风险",e8:"防御锁定" };
const CASE_CATEGORIES = ["情绪循环","意义危机","解耦过程","梦境结构","AI耦合","创造性停滞","主体结构变化"];
let activeTags = new Set();
let activeStatus = null;

function allTags() { return CASE_CATEGORIES; }
function renderFilters() {
  document.getElementById('tag-filters').innerHTML = allTags().map(t =>
    `<span class="chip ${activeTags.has(t)?'active':''}" onclick="toggleTag('${t}')">${t}</span>`).join('');
  const statuses = [{key:null,label:"全部"},{key:"active",label:"长期追踪中"},{key:"completed",label:"已完成"},{key:"archived",label:"已归档"}];
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
  document.getElementById('result-count').textContent = `显示 ${list.length} / ${CASES.length} 个案例`;
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
      <div class="tl-metrics">幸福感 ${t.wellbeing} · 压力 ${t.stress} · 意义感 ${t.meaning} · 清晰度 ${t.clarity} · 行动力 ${t.agency}</div>
      <div class="tl-event">${t.event}</div><div class="tl-note">${t.note}</div></div>`).join('');
  document.getElementById('cl-detail-view').innerHTML = `
    <a class="back-link" onclick="closeCase()">← 返回案例库</a>
    <div class="detail-head">
      <div class="detail-id-row"><span class="detail-id">${c.id}</span><span class="status-dot ${c.status}">${c.statusLabel}</span>
        <div class="case-tags">${c.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></div>
      <h1 class="detail-title">结构观察记录</h1>
      <div class="state-block"><div class="state-code">${c.primaryState}</div><div class="state-gloss">${c.primaryGloss}</div></div>
    </div>
    <div class="detail-section"><div class="detail-section-title">核心变量</div>
      <div class="var-grid">
        <div class="var-cell"><div class="var-num">${c.coreVars.sSem}</div><div class="var-label">S_sem 语义成熟度</div></div>
        <div class="var-cell"><div class="var-num">${c.coreVars.sExe}</div><div class="var-label">S_exe 存在整合度</div></div>
        <div class="var-cell"><div class="var-num">${c.coreVars.deltaP>=0?'+':''}${c.coreVars.deltaP}</div><div class="var-label">ΔP · ${c.coreVars.deltaPLabel}</div></div>
      </div></div>
    <div class="detail-section"><div class="detail-section-title">结构事件画像 E1–E8</div>${profileRows}</div>
    <div class="detail-section"><div class="detail-section-title">CMC 映射</div>
      <div class="cmc-stage">${c.cmc.stage}</div>
      <div class="cmc-grid">
        <div class="cmc-cell"><div class="cmc-label">Generation 生成</div><div class="cmc-val">${c.cmc.generation}</div></div>
        <div class="cmc-cell"><div class="cmc-label">Coupling 耦合</div><div class="cmc-val">${c.cmc.coupling}</div></div>
        <div class="cmc-cell"><div class="cmc-label">Feedback 回馈</div><div class="cmc-val">${c.cmc.feedback}</div></div>
      </div></div>
    <div class="detail-section"><div class="detail-section-title">研究者摘要</div><p class="summary-text">${c.summary}</p></div>
    <div class="detail-section"><div class="detail-section-title">纵向追踪</div><div class="timeline">${trackingHtml}</div></div>
    <div class="detail-cta">
      <a class="btn btn-primary" onclick="showPage('join'); selectIntent('longterm');">申请成为案例参与者</a>
      <a class="btn btn-secondary" onclick="closeCase()">返回案例库</a>
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
  { key:"read", titleEn:"READ", title:"阅读", desc:"免费公开资料，无需申请，直接浏览即可", meta:"无需联系" },
  { key:"open_obs", titleEn:"OPEN OBSERVATION", title:"开放观察", desc:"适合：职业困扰 / 关系问题 / 情绪波动 / 梦境记录 / 意义感危机", meta:"基础参与免费",
    type:"wechat",
    detailTitle:"开放观察",
    detailBody:"内容包括：一次性结构观察、梦境记录与整理、基础访谈、状态追踪、匿名案例研究。<br><br>所有资料默认匿名处理。参与不代表认同理论。<strong>基础参与免费。</strong>" },
  { key:"longterm", titleEn:"LONG-TERM CASE", title:"长期案例", desc:"持续记录变化过程，共同参与研究积累", meta:"长期观察",
    type:"wechat",
    detailTitle:"长期随访与案例共建",
    detailBody:"内容包括：定期随访、梦境追踪、人生阶段记录、相位差变化观察、结构变化档案、工具反馈与共同完善。<br><br>通常在完成基础观察后逐步进入。重点并非咨询，而是共同完成一个长期案例。" },
  { key:"research", titleEn:"RESEARCH & PUBLICATION", title:"研究与出版合作", desc:"适合：研究人员 / 博士生 / AI研究者 / 翻译者 / 出版机构 / 媒体", meta:"学术合作",
    type:"contact",
    detailTitle:"学术、出版与研究合作",
    detailBody:"合作方向包括：理论讨论、实验设计、数据分析、翻译项目、出版合作、AI工具开发、案例数据库建设。" },
  { key:"cobuild", titleEn:"CO-BUILD", title:"共建计划", desc:"适合：长期关注项目 / 希望贡献能力", meta:"志愿协作",
    type:"wechat",
    detailTitle:"志愿协作与项目共建",
    detailBody:"可能参与：网站维护、AI工具开发、翻译工作、播客与视频制作、数据整理、国际传播。<br><br>项目目前仍由个人维护，未来会逐渐形成开放协作网络。" }
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
      <div class="wechat-label">微信</div>
      <div class="wechat-id">meta-jiawei</div>
    </div>
    <button class="btn btn-secondary" type="button" onclick="closeJoinPanel()" style="margin-top:1.5rem;">关闭</button>`;
  panel.style.display='block';
  panel.scrollIntoView({behavior:'smooth', block:'start'});
}
function closeJoinPanel(){ selectedKey=null; renderGrid(); document.getElementById('join-detail-panel').style.display='none'; }
function toggleFaq(btn){ btn.closest('.faq-item').classList.toggle('open'); }

/* ===== INIT ===== */
renderFilters();
renderList();
renderGrid();
