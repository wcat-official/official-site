/* ===== WHITE PAPERS DATA + LOGIC ===== */
const PAPERS = [
  {
    id: "wcat",
    name: "《意志回路激活理论（W-CAT）显影系统与结构模型》",
    shortName: "W-CAT 显影系统与结构模型",
    version: "简体中文白皮书 V1.0",
    date: "2026-04-15",
    doi: "https://doi.org/10.17605/OSF.IO/KB6SY",
    citation: "嘉炜（Jiawei）. (2026).《意志回路激活理论（W-CAT）显影系统与结构模型 简中白皮书 · 第一版》. OSF. https://doi.org/10.17605/OSF.IO/KB6SY",
    abstract: "该白皮书集中呈现 W-CAT 的显影系统、结构模型与应用接口，是当前更接近工具化阶段的理论文本。正文、附件与版本记录以 OSF 页面为准。"
  },
  {
    id: "wcat-basic",
    name: "《意志回路激活理论（W-CAT）》",
    shortName: "W-CAT 简中白皮书",
    version: "简体中文白皮书 v1.0.1",
    date: "2026-01-12",
    doi: "https://doi.org/10.17605/OSF.IO/86KN7",
    citation: "嘉炜（Jiawei）. (2026).《意志回路激活理论（W-CAT）简中白皮书 · 第一版》. OSF. https://doi.org/10.17605/OSF.IO/86KN7",
    abstract: "该白皮书发布 W-CAT 的基础理论结构，以结构性自由意志为核心，作为可被检验、反驳与扩展的工作假说。"
  },
  {
    id: "cmc",
    name: "《意識映射宇宙論（CMC）》",
    shortName: "CMC 繁中白皮书",
    version: "繁體中文白皮書 · 第一版",
    date: "2025",
    doi: "https://doi.org/10.17605/OSF.IO/ZSHGK",
    citation: "嘉炜（Jiawei）. (2025).《意識映射宇宙論（CMC）繁體中文白皮書 · 第一版》. OSF. https://doi.org/10.17605/OSF.IO/ZSHGK",
    abstract: "CMC 是与 W-CAT 相关的意识与经验世界框架，作为后续理解经验世界、主体结构与结构性自由的背景文本。"
  }
];

function renderPapersIndex() {
  document.getElementById('papers-index').innerHTML = `
    ${PAPERS.map(p => `
    <div class="wp-row" style="cursor:pointer;" onclick="openPaper('${p.id}')">
      <div>
        <span class="wp-name">${p.name}</span>
        <span class="wp-ver">${p.version} · ${p.date}</span>
      </div>
      <a class="link-arrow">查看授权与引用方式 →</a>
    </div>`).join('')}
    <div class="notice" style="margin-top:1.75rem;">
      <strong>说明：</strong>官网不再维护完整白皮书正文与复杂版本历史。白皮书正文、下载文件与版本记录以 OSF 页面为准。
    </div>
  `;
}

function openPaper(id) {
  const p = PAPERS.find(x => x.id === id);
  const el = document.getElementById('paper-detail');
  el.innerHTML = `
    <div class="section" style="border-top:1px solid var(--border-subtle); padding-top:2.5rem;">
      <a class="link-arrow" onclick="closePaper()">← 返回白皮书列表</a>
      <h2 class="detail-title" style="margin-top:1.5rem;">${p.shortName}</h2>
      <p class="detail-body">${p.abstract}</p>

      <div class="section-title" style="margin-top:2rem;">授权与使用声明</div>
      <div class="intro-prose" style="font-size:14.5px;">
        <p>《意志回路激活理论（Will-Circuit Activation Theory, W-CAT）》是一个以结构性自由意志为核心的理论模型体系，由独立研究人嘉炜（Jiawei）以工作假说形式发布，旨在提供可被检验、反驳与扩展的结构视角。</p>
        <p>作者鼓励在明确署名与溯源的前提下，对本理论进行非商业性的阅读、分享、引用、翻译、教学与学术讨论。</p>
        <p>随着 W-CAT 理论结构的逐步冻结及其进入应用接口与工具化阶段，自 RELEASE v1.0.1（Logic Frozen Edition）起，文本使用权与应用使用权明确区分。</p>
      </div>

      <div class="section-title" style="margin-top:2rem;">需要书面授权的使用</div>
      <div class="commit-list">
        <div class="commit-item"><span class="commit-mark">—</span><div>将 W-CAT 的理论结构、核心模型、术语体系或推导逻辑用于商业目的。</div></div>
        <div class="commit-item"><span class="commit-mark">—</span><div>基于 W-CAT 开发或提供付费课程、咨询服务、产品、平台或组织解决方案。</div></div>
        <div class="commit-item"><span class="commit-mark">—</span><div>将 W-CAT 理论结构直接或间接用于人工智能模型训练、系统设计或决策代理。</div></div>
        <div class="commit-item"><span class="commit-mark">—</span><div>以可能造成理论误导、结构性偏离或降维滥用的方式，对 W-CAT 进行再诠释或传播。</div></div>
      </div>

      <div class="notice" style="margin-top:1.5rem;">
        <strong>伦理与语境提示：</strong>W-CAT 提供的是结构可见性工具，而非价值判断或行为规范。使用者需对其具体语境中的应用承担反身性责任。
      </div>

      <div class="section-title" style="margin-top:2rem;">引用方式</div>
      <p class="detail-body" style="font-family:var(--mono); font-size:12.5px; line-height:1.8;">${p.citation}</p>

      <div class="detail-cta" style="padding-top:2rem;">
        <a class="btn btn-primary" href="${p.doi}" target="_blank" rel="noopener">在 OSF 查看 / 下载</a>
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
    trackingUrl: "https://read.douban.com/column/72467157/?dcs=search",
    intro: { title: "导论：为什么必须重写一部意志史？", url: "https://mp.weixin.qq.com/s?__biz=Mzk0NTY1MjAzMQ==&mid=2247484065&idx=1&sn=616390aa9d366e1ba8c393228a7fc4c7&scene=21#wechat_redirect" },
    parts: [
      {
        partTitle: "第一编｜系统0：意志尚未诞生的世界",
        partIntro: "我们从最底层的'意志'来源出发，从一种想当然的属性，还原为一个在演化中艰难生成的结构。",
        chapters: [
          { title: "系统0：在没有'我'的世界里：云雾态意识", date: "2026-01-28", url: "https://mp.weixin.qq.com/s?__biz=Mzk0NTY1MjAzMQ==&mid=2247484074&idx=1&sn=1e5d61806f9aee8ea8abeb980ca9d5ed&scene=21#wechat_redirect" },
          { title: "回路0.5：前意志结构：生命如何被无形牵引", date: "2026-01-30", url: "https://mp.weixin.qq.com/s?__biz=Mzk0NTY1MjAzMQ==&mid=2247484079&idx=1&sn=ecc20e808d3292ac69e207454939b82d&scene=21#wechat_redirect" }
        ]
      },
      {
        partTitle: "第二编｜个人意志的生成：W-CAT四回路模型",
        partIntro: "我们从个体意志的角度，慢慢描绘出一张个体如何以结构拓扑的形式，拉扯与跃迁的地图，它并不特别，每个人都有可能握住它，选择自己的结构入口。",
        chapters: [
          { title: "回路1.0：本能驱动的牢笼", date: "2026-01-31", url: "https://mp.weixin.qq.com/s?__biz=Mzk0NTY1MjAzMQ==&mid=2247484085&idx=1&sn=d2d69485620edf2e5edbcacbb0b31c6f&scene=21#wechat_redirect" },
          { title: "回路1.5：基因与模因的战争：关于\"青春期叛逆\"与\"中年危机\"的结构性解读", date: "2026-02-03", url: "https://mp.weixin.qq.com/s?__biz=Mzk0NTY1MjAzMQ==&mid=2247484092&idx=1&sn=83d0922b5fbc84fab34c1f899c38b7b4&scene=21#wechat_redirect" },
          { title: "回路2.0：我们都在一艘巨大的意识航母之上，自动航行", date: "2026-02-05", url: "https://mp.weixin.qq.com/s?__biz=Mzk0NTY1MjAzMQ==&mid=2247484099&idx=1&sn=70c027b554c4420e087ec42edfa63491&scene=21#wechat_redirect" },
          { title: "回路2.5：高功能陷阱：为什么越聪明的人，越容易陷入危险的自由", date: "2026-02-11", url: "https://mp.weixin.qq.com/s?__biz=Mzk0NTY1MjAzMQ==&mid=2247484246&idx=1&sn=d0ed3c482cfbb72d8db6a777715f8a18&scene=21#wechat_redirect" },
          { title: "回路3.0：当认知的重力消失之后", date: "2026-02-12", url: "https://mp.weixin.qq.com/s?__biz=Mzk0NTY1MjAzMQ==&mid=2247484110&idx=1&sn=c91c587faf4f7a2a8a63775ce5f3aff5&scene=21#wechat_redirect" },
          { title: "回路3.5：当认知的重力消失之后，系统只有两个选择，那是回退，还是重组？", date: "2026-02-20", url: "https://mp.weixin.qq.com/s?__biz=Mzk0NTY1MjAzMQ==&mid=2247484124&idx=1&sn=ff09b2e5f110f7db86e06dc242d29bfa&scene=21#wechat_redirect" },
          { title: "回路4.0：自主生成吸引子与创造性语义耦合——从《红楼梦》、皮娜·鲍什 到《芬尼根的守灵夜》", date: "2026-03-10", url: "https://mp.weixin.qq.com/s?__biz=Mzk0NTY1MjAzMQ==&mid=2247484155&idx=1&sn=dbfae5db417b346149544d1e305bd66d&scene=21#wechat_redirect" }
        ]
      },
      {
        partTitle: "第三编｜文明意志的沉积：谁在替人类做选择？",
        partIntro: "个体意志与集体意志缠绕而生，拓扑同构地形成文明史，这也揭示了我们所面临时代的结构性困境。",
        chapters: [
          { title: "从个体到文明：意志结构如何被世界继承", date: "2026-05-17", url: "https://mp.weixin.qq.com/s?__biz=Mzk0NTY1MjAzMQ==&mid=2247484252&idx=1&sn=5d6a4fc1be6adc44e3c657799ebf32a4&scene=21#wechat_redirect" },
          { title: "文明结构 0.5：当意志开始被文明记住——巫性文明与集体结构的第一次沉积", date: "2026-05-17", url: "https://mp.weixin.qq.com/s?__biz=Mzk0NTY1MjAzMQ==&mid=2247484297&idx=1&sn=bf432493403a624214caf8d797486413&scene=21#wechat_redirect" },
          { title: "文明结构 1.0：当人类开始命名世界——生理吸引子如何冻结为文明现实", date: "2026-05-23", url: "https://mp.weixin.qq.com/s?__biz=Mzk0NTY1MjAzMQ==&mid=2247484321&idx=1&sn=44bb23e4557608050e7be8e9ee99c153&scene=21#wechat_redirect" },
          { title: "文明结构 1.5：当人类开始思考自身——抽象意义如何塑造文明", date: "2026-06-16", url: null },
          { title: "文明结构 2.0：当思想开始统治世界——规训系统如何塑造文明现实", date: "2026-06-16", url: null }
        ]
      }
    ]
  },
  {
    id: "consciousness-history",
    name: "《意识简史》",
    status: "planned",
    statusLabel: "规划中",
    description: "《意志简史》的延伸阅读，探讨意识与意志之间更深的结构关系，为 CMC 框架提供叙事性背景。尚未开始连载。",
    intro: null,
    parts: []
  },
  {
    id: "2080",
    name: "《2080》",
    status: "planned",
    statusLabel: "规划中",
    description: "面向未来的长篇虚构 / 推测性作品，探讨个体结构理论在更长时间尺度上的应用。尚未开始连载。",
    intro: null,
    parts: []
  }
];

function renderPubsIndex() {
  document.getElementById('pubs-index').innerHTML = PUBS.map(p => {
    const chCount = p.parts.reduce((sum, part) => sum + part.chapters.length, 0) + (p.intro ? 1 : 0);
    return `
    <div class="wp-row" style="cursor:pointer;" onclick="openPub('${p.id}')">
      <div>
        <span class="wp-name">${p.name}</span>
        <span class="wp-ver">${p.statusLabel}${chCount ? ' · ' + chCount + ' 篇' : ''}</span>
      </div>
      <a class="link-arrow">${chCount ? '查看章节 →' : '了解详情 →'}</a>
    </div>
  `;
  }).join('');
}

function chapterRow(pubId, c, idx) {
  const safeIdx = idx !== undefined ? idx : 0;
  return `<div class="toc-entry" id="ch-${pubId}-${safeIdx}">
    <div class="toc-entry-title">${c.title}</div>
    <div class="toc-entry-date">${c.date || ''}</div>
  </div>`;
}

function openPub(id) {
  const p = PUBS.find(x => x.id === id);
  const el = document.getElementById('pub-detail');
  const chCount = p.parts.reduce((sum, part) => sum + part.chapters.length, 0) + (p.intro ? 1 : 0);
  let chapIdx = 0;
  const partsHtml = p.parts.map(part => `
    ${part.partTitle ? `<div class="section-title" style="margin-top:2rem;">${part.partTitle}</div>` : ''}
    ${part.partIntro ? `<p style="font-size:13px; color:var(--text-tertiary); font-style:italic; margin-bottom:1rem; max-width:560px; line-height:1.7;">${part.partIntro}</p>` : ''}
    <div class="works-list">
      ${part.chapters.map(c => chapterRow(p.id, c, chapIdx++)).join('')}
    </div>
  `).join('');

  el.innerHTML = `
    <div class="section" style="border-top:1px solid var(--border-subtle); padding-top:2.5rem;">
      <a class="link-arrow" onclick="closePub()">← 返回出版物列表</a>
      <h2 class="detail-title" style="margin-top:1.5rem;">${p.name}</h2>
      <p class="detail-body">${p.description}</p>

      ${chCount ? `
        ${p.intro ? `<div class="section-title" style="margin-top:2rem;">导论</div><div class="works-list">${chapterRow(p.id, p.intro, 'intro')}</div>` : ''}
        ${partsHtml}
      ` : `
        <div class="notice" style="margin-top:1.5rem;">该作品尚未开始连载，目前处于规划阶段。</div>
      `}

      <div class="detail-cta" style="padding-top:2rem;">
        ${p.trackingUrl
          ? `<a class="btn btn-primary" href="${p.trackingUrl}" target="_blank" rel="noopener">前往豆瓣阅读最新章节</a>`
          : (chCount ? `<a class="btn btn-primary" onclick="jumpToLatestChapter('${p.id}')">查看最新章节</a>` : '')}
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
  if (!p) return;
  const flat = [];
  if (p.intro) flat.push({ ...p.intro, domIdx: 'intro' });
  let idx = 0;
  p.parts.forEach(part => part.chapters.forEach(c => flat.push({ ...c, domIdx: idx++ })));
  if (!flat.length) return;
  const latest = flat.reduce((a, b) => ((a.date || '') > (b.date || '') ? a : b));
  const row = document.getElementById(`ch-${pubId}-${latest.domIdx}`);
  if (!row) return;
  row.scrollIntoView({ behavior: 'smooth', block: 'center' });
  row.style.background = 'var(--primary-50)';
  row.style.transition = 'background 0.6s';
  setTimeout(() => { row.style.background = 'transparent'; }, 1400);
}

/* ===== RESEARCH LOG DATA + LOGIC ===== */
const LOG_ENTRIES = [
  { date:"2026-06-15", type:"案例增长", text:"案例库已形成十余个长期观察与数十个短期观察，开始改用样本聚类方式呈现阶段性特征。" },
  { date:"2026-05-20", type:"量表更新", text:"25题专业量表完成第二次修订，新增结构状态判定逻辑。" },
  { date:"2026-05-10", type:"理论修订", text:"W-CAT 白皮书与版本记录迁移至 OSF，官网仅保留索引、授权说明与引用方式。" },
  { date:"2026-04-02", type:"理论修订", text:"WCAT-H3 假说措辞调整，明确\"长期拖延\"与\"意志薄弱\"的区分边界。" },
  { date:"2026-03-20", type:"案例增长", text:"CASE-004 完成追踪周期，结构状态进入稳定区间，转入归档。" },
  { date:"2025-12-20", type:"合作进展", text:"CMC 白皮书在 OSF 发布并建立确权记录。" },
  { date:"2025-11-02", type:"量表更新", text:"W-CAT 结构事件画像体系进入白皮书修订。" },
  { date:"2025-08-15", type:"理论修订", text:"W-CAT 早期白皮书版本完成公开发布。" }
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

/* ===== SAMPLE CLUSTER DATA + LOGIC ===== */
const CASE_CLUSTERS = [
  {
    id:"CLUSTER-01",
    status:"stable",
    statusLabel:"初步稳定",
    title:"理解充分，但行动系统难以启动",
    tags:["知道却做不到","执行脱耦","创造性停滞"],
    sampleHint:"长期追踪与短期观察中均反复出现",
    summary:"参与者通常具备较强自我观察与表达能力，能够清楚描述问题、目标与后果，但行动系统长期无法稳定启动。当前更适合被视为语义系统与执行系统之间的脱耦，而不是简单的懒惰或意志薄弱。",
    signals:["理解能力高于行动整合度","反复进入“即将开始”的准备状态","行动失败后自责，但结构未改变"],
    variables:{sSem:"中-高",sExe:"低",risk:"中"},
    note:"该聚类是目前最核心的观察方向之一，后续需要补充年龄、职业阶段与持续时间信息。"
  },
  {
    id:"CLUSTER-02",
    status:"stable",
    statusLabel:"初步稳定",
    title:"意义系统失效与目标完成后的空心化",
    tags:["意义危机","身份转变","回馈层下降"],
    sampleHint:"长期案例中较常见，短期案例中也有明显信号",
    summary:"部分参与者并非没有取得外部成果，而是在完成目标、职业转向或身份变化之后，原有意义系统突然失去支撑。问题常表现为方向感下降、价值感变弱，以及对既有路径的持续怀疑。",
    signals:["外部功能仍可维持，但内在回馈下降","旧目标完成后没有生成新的意义结构","职业、关系或身份变化后出现空心化"],
    variables:{sSem:"中",sExe:"低-中",risk:"中-高"},
    note:"该聚类需要继续区分短期情绪波动、职业倦怠与深层意义结构失效。"
  },
  {
    id:"CLUSTER-03",
    status:"observing",
    statusLabel:"持续观察",
    title:"重复关系模式与吸引子循环",
    tags:["情绪循环","关系模式","吸引子锁定"],
    sampleHint:"短期观察中出现频率较高，长期样本仍在补充",
    summary:"不同个体在亲密关系、合作关系或家庭互动中，反复进入相似的冲突结构。参与者往往已经意识到模式重复，但仍难以在关键节点采取不同反应。",
    signals:["不同对象中出现相似冲突路径","知道模式存在，但触发时仍自动进入旧反应","关系结束后问题并未真正消失"],
    variables:{sSem:"中",sExe:"低-中",risk:"中"},
    note:"该聚类后续需要更谨慎地区分关系互动因素与个体内部结构因素。"
  },
  {
    id:"CLUSTER-04",
    status:"observing",
    statusLabel:"持续观察",
    title:"高认知停滞与解释系统过载",
    tags:["高认知停滞","理论领先现实","防御锁定"],
    sampleHint:"长期案例中已有若干清晰样本",
    summary:"部分参与者有较强理解、阅读、反思和建构能力，但现实行动、关系推进或作品完成反而长期停滞。解释系统可能暂时领先于现实承载能力，甚至成为延迟行动的保护性结构。",
    signals:["理论理解持续增长，现实进展有限","频繁重构解释，但关键行动不发生","越能解释自己，越难完成转变"],
    variables:{sSem:"高",sExe:"低",risk:"中-高"},
    note:"该聚类对 WCAT 的 ΔP 与防御锁定假说很重要，但目前仍需更多外部验证。"
  },
  {
    id:"CLUSTER-05",
    status:"needs-data",
    statusLabel:"人口学待补",
    title:"身份过渡期与旧叙事失效",
    tags:["身份转变","文化解耦","重建风险"],
    sampleHint:"样本数量在增加，但背景信息仍不完整",
    summary:"参与者开始脱离原有家庭、教育、职业或文化叙事，但新的自我解释尚未稳定形成。此阶段不一定是退化，也可能是结构重组过程中的正常不稳定。",
    signals:["旧路径不再可信，但新路径还没有长出来","对外部评价的依赖下降，同时方向感短暂下降","自我解释系统处于重组期"],
    variables:{sSem:"中",sExe:"中",risk:"高"},
    note:"该聚类特别需要补充年龄、职业阶段、文化背景与转折事件。"
  },
  {
    id:"CLUSTER-06",
    status:"early",
    statusLabel:"探索阶段",
    title:"梦境张力与潜在结构映射",
    tags:["梦境结构","重复张力","象征对象"],
    sampleHint:"目前作为辅助材料，不单独作为理论证据",
    summary:"部分梦境记录中反复出现追逐、封闭空间、无法抵达、关系修复等主题。它们不被直接解释为真相，但可能作为观察主体张力、应对方式与路径锁死的辅助材料。",
    signals:["梦境主题与现实压力存在弱对应","重复出现同类空间、人物或失败动作","醒后情绪延续，影响现实解释"],
    variables:{sSem:"不定",sExe:"不定",risk:"待观察"},
    note:"梦境观察目前只作为辅助线索，不能单独构成案例判断。"
  }
];
let activeTags = new Set();
let activeStatus = null;

function allTags() { return Array.from(new Set(CASE_CLUSTERS.flatMap(c => c.tags))); }
function renderFilters() {
  document.getElementById('tag-filters').innerHTML = allTags().map(t =>
    `<span class="chip ${activeTags.has(t)?'active':''}" onclick="toggleTag('${t}')">${t}</span>`).join('');
  const statuses = [
    {key:null,label:"全部"},
    {key:"stable",label:"初步稳定"},
    {key:"observing",label:"持续观察"},
    {key:"needs-data",label:"人口学待补"},
    {key:"early",label:"探索阶段"}
  ];
  document.getElementById('status-filters').innerHTML = statuses.map(s =>
    `<span class="chip ${activeStatus===s.key?'active':''}" onclick="setStatus(${s.key?`'${s.key}'`:'null'})">${s.label}</span>`).join('');
}
function toggleTag(t){ activeTags.has(t)?activeTags.delete(t):activeTags.add(t); renderFilters(); renderList(); }
function setStatus(s){ activeStatus=s; renderFilters(); renderList(); }
function filteredCases(){ return CASE_CLUSTERS.filter(c => (activeTags.size===0||c.tags.some(t=>activeTags.has(t))) && (!activeStatus||c.status===activeStatus)); }
function renderList(){
  const grid = document.getElementById('cl-case-grid');
  const empty = document.getElementById('cl-empty-state');
  const list = filteredCases();
  document.getElementById('result-count').textContent = `显示 ${list.length} / ${CASE_CLUSTERS.length} 个聚类特征 · 基于十余个长期案例与数十个短期观察初步整理，非案例数量`;
  if (list.length===0){ grid.innerHTML=''; empty.style.display='block'; return; }
  empty.style.display='none';
  grid.innerHTML = list.map(c => `
    <div class="case-card cluster-card" onclick="openCase('${c.id}')">
      <div class="case-top-row"><span class="case-id">${c.id}</span><span class="status-dot ${c.status}">${c.statusLabel}</span></div>
      <div class="case-tags">${c.tags.slice(0,3).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="case-summary" style="font-weight:600; margin-bottom:0.55rem;">${c.title}</div>
      <div class="cluster-hint">${c.sampleHint}</div>
      <div class="cluster-signal">${c.summary.slice(0,72)}...</div>
    </div>`).join('');
}
function renderDetail(c){
  const signalsHtml = c.signals.map(s => `<li>${s}</li>`).join('');
  document.getElementById('cl-detail-view').innerHTML = `
    <a class="back-link" onclick="closeCase()">← 返回聚类观察</a>
    <div class="detail-head">
      <div class="detail-id-row"><span class="detail-id">${c.id}</span><span class="status-dot ${c.status}">${c.statusLabel}</span>
        <div class="case-tags">${c.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></div>
      <h1 class="detail-title">${c.title}</h1>
      <div class="state-block"><div class="state-code">样本聚类特征</div><div class="state-gloss">${c.sampleHint}</div></div>
    </div>
    <div class="detail-section"><div class="detail-section-title">聚类摘要</div><p class="summary-text">${c.summary}</p></div>
    <div class="detail-section"><div class="detail-section-title">常见信号</div><ul class="cluster-list">${signalsHtml}</ul></div>
    <div class="detail-section"><div class="detail-section-title">初步结构变量</div>
      <div class="var-grid">
        <div class="var-cell"><div class="var-num">${c.variables.sSem}</div><div class="var-label">S_sem 语义成熟度</div></div>
        <div class="var-cell"><div class="var-num">${c.variables.sExe}</div><div class="var-label">S_exe 存在整合度</div></div>
        <div class="var-cell"><div class="var-num">${c.variables.risk}</div><div class="var-label">重建风险 / 观察强度</div></div>
      </div>
      <p class="detail-body" style="margin-top:1rem;">${c.note}</p>
    </div>
    <div class="detail-section"><div class="detail-section-title">资料说明</div>
      <p class="detail-body">该条目不是单个案例，也不对应某一位参与者。它是当前阶段从匿名长期案例、短期观察、梦境记录与访谈材料中整理出的现象聚类，后续会随着样本结构和人口学信息补足而修正。</p>
    </div>
    <div class="detail-cta">
      <a class="btn btn-primary" onclick="showPage('join'); selectIntent('open_obs');">参与开放观察</a>
      <a class="btn btn-secondary" onclick="closeCase()">返回聚类观察</a>
    </div>`;
}
function openCase(id){
  const c = CASE_CLUSTERS.find(x=>x.id===id);
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
