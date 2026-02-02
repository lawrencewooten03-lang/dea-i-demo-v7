
const steps = [
  {
    key: "intake",
    title: "1) Intake Moment: DEA I Activates Category Intelligence",
    sub: "Workfront Smart Intake → Category recognition → Controls activated",
    pill: "Direct Mail • Intake",
    confidence: 92,
    terminal: [
      "Smart Intake received: “New card launch direct mail campaign. Volume: 2,000,000 pieces.”",
      "Category classified: Direct Mail (Print, Postage, Fulfillment, Distribution)",
      "Sourcing threshold likely exceeded → sourcing controls activated",
      "Cost drivers detected: paper, print, postage, fulfillment, data integrity",
      "Risk signal: elevated incumbent lock-in probability",
      "Direct Mail monitoring logic activated."
    ],
    insights: [
      {t:"Category recognized instantly", b:"No manual routing. DEA I activates category-specific logic at intake.", badge:["info","Category = Direct Mail"]},
      {t:"Sourcing threshold predicted", b:"Triggers sourcing + risk engagement early, before rework occurs.", badge:["info","Controls activated"]},
      {t:"Lock-in risk detected", b:"Proactively prevents ‘repeat the last supplier’ default.", badge:["warn","Incumbent risk"]},
    ],
    toast: {t:"Intake activated", b:"DEA I starts where spend decisions begin — the front door."}
  },
  {
    key: "suppliers",
    title: "2) Supplier Landscape Monitoring: Preferred, Approved, Diverse",
    sub: "Coupa supplier lists + performance + capacity + inclusion",
    pill: "Supplier Intelligence",
    confidence: 88,
    terminal: [
      "Pulling preferred supplier list from Coupa…",
      "Surfacing active MSAs and contracted rate cards…",
      "Loading performance indicators: on-time delivery, SLA adherence…",
      "Preferred supplier concentration computed…",
      "Expanding to approved but underutilized suppliers…",
      "Cross-referencing certified diverse suppliers + capability match…",
      "Generating lot strategy for scale constraints…"
    ],
    insights: [
      {t:"Preferred supplier concentration", b:"Two preferred suppliers account for 78% of Direct Mail volume.", badge:["warn","78% concentration"]},
      {t:"Approved suppliers underutilized", b:"Three approved suppliers were not included in the last four events.", badge:["info","3 suppliers excluded"]},
      {t:"Diverse suppliers surfaced early", b:"2 diverse suppliers viable now; 1 phased via lot-splitting strategy.", badge:["good","Inclusion by design"]},
    ],
    toast: {t:"Supplier landscape surfaced", b:"Visibility expands beyond incumbents — with inclusion built in."}
  },
  {
    key: "cost",
    title: "3) Cost Intelligence & Pricing Transparency",
    sub: "CPP estimates + paper volatility + rebates + benchmark drift",
    pill: "Cost Intelligence",
    confidence: 84,
    terminal: [
      "Generating baseline pricing from historical campaigns…",
      "Computing cost per piece (CPP) + driver breakdown…",
      "CPP estimate: $0.42–$0.47 based on prior campaigns",
      "Monitoring paper costs: historical vs current market…",
      "Flag: paper inflation +9% YoY",
      "Outlier detected: incumbent pass-through +14%",
      "Checking rebates: tier progress vs commitments…",
      "Rebate threshold missed by 3% → renegotiation opportunity."
    ],
    insights: [
      {t:"CPP baseline before sourcing", b:"Estimated CPP range: $0.42–$0.47 (pre-RFP).", badge:["info","CPP $0.42–$0.47"]},
      {t:"Paper inflation + outlier pass-through", b:"Market +9% YoY; one incumbent passed through +14%.", badge:["warn","+14% flagged"]},
      {t:"Rebate leakage opportunity", b:"Supplier A missed threshold by 3% → volume aggregation leverage.", badge:["good","Recover rebates"]},
    ],
    toast: {t:"Cost drivers exposed", b:"DEA I makes hidden cost leakage visible early — before the RFP."}
  },
  {
    key: "profile",
    title: "4) Supplier Profile Intelligence: Risk + Resilience",
    sub: "Company size, revenue stability, regulated experience, capacity timing",
    pill: "Risk & Resilience",
    confidence: 86,
    terminal: [
      "Building supplier profiles…",
      "Classifying size: SMB vs mid-market vs enterprise…",
      "Checking revenue stability signals…",
      "Validating scale alignment to 2M-piece campaign…",
      "Scanning current customers for regulated industry experience…",
      "Capacity check: production windows and fulfillment slots…"
    ],
    insights: [
      {t:"Capacity + timing advantage", b:"Supplier C supports 4 peer financial institutions and has excess capacity in Q2.", badge:["good","Q2 capacity"]},
      {t:"Regulated experience verified", b:"Reduces operational and compliance surprises downstream.", badge:["info","Regulated ready"]},
      {t:"Resilience lens applied", b:"Decision includes stability and capacity — not just price.", badge:["info","Resilience"]},
    ],
    toast: {t:"Resilience view added", b:"Risk isn’t a later step — DEA I evaluates it upfront."}
  },
  {
    key: "competition",
    title: "5) Competitive & Market Safeguards",
    sub: "Bid history, exclusion patterns, concentration, dependency",
    pill: "Competition Guardrails",
    confidence: 90,
    terminal: [
      "Reviewing historical RFQs/RFPs…",
      "Computing bid spreads and inclusion patterns…",
      "Flag: supplier set unchanged across last 3 events",
      "Running monopoly & concentration check…",
      "Alert: 72% of volume awarded to one supplier over last 24 months",
      "Recommendation: mandatory competitive sourcing triggered."
    ],
    insights: [
      {t:"Stagnant supplier set", b:"Supplier set unchanged across last 3 events — competition signal.", badge:["warn","Stagnation"]},
      {t:"Monopoly/concentration alert", b:"72% volume awarded to one supplier over 24 months.", badge:["warn","72% dependency"]},
      {t:"Policy-aligned trigger", b:"DEA I recommends mandatory competition to reduce dependency risk.", badge:["info","Competition required"]},
    ],
    toast: {t:"Safeguards triggered", b:"Governance without friction — competition becomes automatic."}
  },
  {
    key: "contracts",
    title: "6) Rate Card & Contract Intelligence",
    sub: "Rate card locks, CPI ties, SLAs, postage strategy, contract leverage",
    pill: "Contract Intelligence",
    confidence: 82,
    terminal: [
      "Analyzing current rate cards vs historical…",
      "Checking volume breaks effectiveness…",
      "Benchmarking peer supplier pricing…",
      "Finding: rate card not optimized for increased volume tiers",
      "Evaluating contract duration: 3–5 years + optional extensions…",
      "Validating SLA language: on-time print/ship, accurate quoting/invoicing…",
      "Postage strategy signals: volume, uniform sizes, commingling, data cleansing…",
      "Opportunity: bundle Q2–Q4 campaigns → 6–8% pricing improvement."
    ],
    insights: [
      {t:"Rate card optimization gap", b:"Current rate cards not adjusted for increased volume tiers.", badge:["warn","Rate card gap"]},
      {t:"Contract strategy surfaced", b:"3–5 year term with performance incentives + CPI ties recommended.", badge:["info","Contract strategy"]},
      {t:"Bundling opportunity", b:"Bundling Q2–Q4 campaigns could unlock 6–8% improvement.", badge:["good","6–8% leverage"]},
    ],
    toast: {t:"Leverage unlocked", b:"DEA I turns contract history into negotiation advantage."}
  },
  {
    key: "summary",
    title: "7) DEA I Recommendation Summary",
    sub: "Clear actions, explainable logic, measurable outcomes",
    pill: "Final Guidance",
    confidence: 95,
    terminal: [
      "Synthesizing recommendations…",
      "✔ Competitive sourcing required",
      "✔ Include at least 1–2 certified diverse suppliers",
      "✔ Re-baseline paper cost assumptions",
      "✔ Renegotiate rebate thresholds and volume tiers",
      "✔ Bundle volumes to increase leverage",
      "✔ Avoid single-supplier dependency",
      "Projected outcome: 4–7% CPP reduction + improved resilience + proactive inclusion."
    ],
    insights: [
      {t:"Actionable guidance", b:"DEA I outputs decisions and the why — not just analytics.", badge:["info","Explainable"]},
      {t:"Measurable value", b:"Estimated 4–7% CPP reduction with risk reduction.", badge:["good","Value"]},
      {t:"Inclusion by default", b:"Supplier diversity embedded at the front door.", badge:["good","Inclusive"]},
    ],
    toast: {t:"Ready for decision", b:"DEA I makes the right decision the easiest decision."}
  }
];

// UI refs
const timelineEl = document.getElementById("timeline");
const stepTitleEl = document.getElementById("stepTitle");
const stepSubEl = document.getElementById("stepSub");
const stepPillEl = document.getElementById("stepPill");
const terminalEl = document.getElementById("terminal");
const insightsEl = document.getElementById("insights");
const progressBar = document.getElementById("progressBar");
const autoplayToggle = document.getElementById("autoplayToggle");

const btnNext = document.getElementById("btnNext");
const btnSkip = document.getElementById("btnSkip");
const btnReset = document.getElementById("btnReset");
const btnBack = document.getElementById("btnBack");
const btnNextMain = document.getElementById("btnNextMain");

const confidenceBar = document.getElementById("confidenceBar");
const confidenceValue = document.getElementById("confidenceValue");

const intro = document.getElementById("intro");
const btnStart = document.getElementById("btnStart");

const toast = document.getElementById("toast");

let idx = 0;
let typingAbort = { abort:false };
let autoplay = true;
let autoplayTimer = null;

function buildTimeline(){
  if(!timelineEl) return;
  timelineEl.innerHTML = "";
  steps.forEach((s, i)=>{
    const item = document.createElement("div");
    item.className = "t-item";
    const shortTitle = s.title.split(") ")[0] + ") " + (s.key === "summary" ? "Summary" : s.title.split(") ")[1]);
    item.innerHTML = `<div class="t-title">${shortTitle}</div><div class="t-sub">${s.sub}</div>`;
    item.addEventListener("click", ()=> goTo(i, true));
    timelineEl.appendChild(item);
  });
}

function setTimelineState(){
  if(!timelineEl) return;
  [...timelineEl.children].forEach((el, i)=>{
    el.classList.toggle("active", i === idx);
    el.classList.toggle("done", i < idx);
  });
}

function setProgress(){
  const pct = Math.round(((idx) / (steps.length-1)) * 100);
  progressBar.style.width = pct + "%";
}

function setConfidence(val){
  if(!confidenceBar || !confidenceValue) return;
  confidenceBar.style.width = `${val}%`;
  confidenceValue.textContent = `${val}%`;
}

function showToast(t, b){
  if(!toast) return;
  toast.innerHTML = `<div class="toast-title">${t}</div><div class="toast-body">${b}</div>`;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(()=> toast.classList.remove("show"), 3600);
}

function clearTerminal(){
  terminalEl.innerHTML = `<div class="terminal-row"><span class="prompt">DEA I</span><span class="cursor">▌</span></div>`;
  terminalEl._currentLine = null;
}

function sleep(ms){ return new Promise(r=>setTimeout(r, ms)); }

async function typeLines(lines, speed=14, lineDelay=240){
  typingAbort.abort = false;
  for (const line of lines){
    if (typingAbort.abort) return;
    let out = "";
    for (let c=0; c<line.length; c++){
      if (typingAbort.abort) return;
      out += line[c];
      if (!terminalEl._currentLine){
        terminalEl._currentLine = document.createElement("div");
        terminalEl._currentLine.className = "terminal-line";
        terminalEl.appendChild(terminalEl._currentLine);
      }
      terminalEl._currentLine.textContent = out;
      terminalEl.scrollTop = terminalEl.scrollHeight;
      await sleep(speed);
    }
    terminalEl._currentLine = null;
    await sleep(lineDelay);
  }
}

function renderInsights(items){
  insightsEl.innerHTML = "";
  items.forEach((x)=>{
    const div = document.createElement("div");
    div.className = "insight";
    div.innerHTML = `
      <div class="insight-title">${x.t}</div>
      <div class="insight-body">${x.b}</div>
      ${x.badge ? `<div class="badge ${x.badge[0]}">${x.badge[1]}</div>` : ""}
    `;
    insightsEl.appendChild(div);
  });
}

async function renderStep(i, manual=false){
  idx = i;
  setTimelineState();
  setProgress();

  const s = steps[idx];
  stepTitleEl.textContent = s.title;
  stepSubEl.textContent = s.sub;
  stepPillEl.textContent = s.pill;
  setConfidence(s.confidence);

  typingAbort.abort = true;
  clearTerminal();
  renderInsights([]);

  await sleep(120);
  renderInsights(s.insights);
  showToast(s.toast.t, s.toast.b);

  await sleep(220);
  await typeLines(s.terminal, 14, 240);

  if (autoplay && !manual){
    if (idx < steps.length - 1){
      clearTimeout(autoplayTimer);
      autoplayTimer = setTimeout(()=> goTo(idx+1, false), 900);
    }
  }
}

function goTo(i, manual){
  i = Math.max(0, Math.min(steps.length - 1, i));
  renderStep(i, manual);
}

function restart(){
  goTo(0, true);
}

function skipToSummary(){
  goTo(steps.length - 1, true);
}

// KPI counters
function animateCount(el, to, duration=1100){
  const start = 0;
  const t0 = performance.now();
  function tick(t){
    const p = Math.min(1, (t - t0) / duration);
    const val = Math.round(start + (to - start) * (1 - Math.pow(1-p, 3)));
    el.textContent = val;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initKpis(){
  document.querySelectorAll("[data-count]").forEach(el=>{
    const to = Number(el.getAttribute("data-count"));
    animateCount(el, to, 1100 + Math.random()*600);
  });
}

function bindControls(){
  autoplayToggle.addEventListener("change", (e)=>{
    autoplay = e.target.checked;
    if (autoplay && idx < steps.length - 1){
      clearTimeout(autoplayTimer);
      autoplayTimer = setTimeout(()=> goTo(idx+1, false), 900);
    } else {
      clearTimeout(autoplayTimer);
    }
  });

  btnNext?.addEventListener("click", ()=> goTo(idx+1, true));
  btnNextMain?.addEventListener("click", ()=> goTo(idx+1, true));
  btnBack?.addEventListener("click", ()=> goTo(idx-1, true));
  btnSkip?.addEventListener("click", ()=> skipToSummary());
  btnReset?.addEventListener("click", ()=> restart());

  window.addEventListener("keydown", (e)=>{
    if (intro && !intro.classList.contains("hidden")) {
      if (e.key === "Enter") startDemo();
      return;
    }
    if (e.key === "ArrowRight") goTo(idx+1, true);
    if (e.key === "ArrowLeft") goTo(idx-1, true);
    if (e.key.toLowerCase() === "r") restart();
  });

  btnStart?.addEventListener("click", ()=> startDemo());
}

function startDemo(){
  intro?.classList.add("hidden");
  setTimeout(()=> intro?.remove(), 380);
  // kick off autoplay immediately once started
  goTo(0, false);
}

buildTimeline();
initKpis();
bindControls();

// Keep demo paused behind intro until user starts
goTo(0, true);
