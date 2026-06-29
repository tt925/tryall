const puzzles = [
  {
    id: "play-001",
    type: "play",
    typeName: "出牌逻辑",
    difficulty: "入门",
    title: "队友快走时，不要只顾自己顺",
    level: "打 8，红桃 8 为逢人配",
    seats: { left: "上家：剩 6 张", partner: "对家：剩 2 张", right: "下家：剩 8 张", me: "你：剩 9 张" },
    lastTrick: "下家刚出：单张 Q",
    scenario: "你手里有大王、A、K、K、10、10、9、9、红桃8。对家上一轮主动放过对子，明显像是只剩一手小对子或小连对。",
    goal: "当前重点不是自己一口气走完，而是夺回牌权后给对家创造出手机会。",
    hand: ["大王", "♠A", "♣K", "♦K", "♠10", "♥10", "♣9", "♦9", "♥8*"],
    history: ["本局主牌：8，红桃 8 可配任意牌", "小王已出 1 张，大王未全部明朗", "下家用 Q 试探，可能在等大单或对子机会"],
    question: "现在轮到你，最佳选择是什么？",
    choices: [
      { text: "出 A 压住，保留大王和对子结构", correct: true },
      { text: "直接出大王，确保这一手最大", correct: false },
      { text: "拆红桃 8 配成三个 K，先走强牌型", correct: false },
      { text: "不要，等待下家继续出牌", correct: false }
    ],
    summary: "推荐出 A。你要拿牌权，但没必要过早交出大王或拆掉可塑性最强的配牌。",
    reasons: [
      "A 足够压 Q，能用较低成本拿回牌权。",
      "大王留到残局更像保险，可以防止敌方突然用 2、小王或大王控场。",
      "对家只剩 2 张时，拿到牌权后的第一目标是观察能否送对子或安全小牌。"
    ],
    tip: "残局里，炸弹和王牌不只是“大”，更是控制权。能用 A 解决的问题，通常先不要用王。"
  },
  {
    id: "memory-001",
    type: "memory",
    typeName: "记牌训练",
    difficulty: "入门",
    title: "先记会改变牌权的牌",
    level: "打 10，红桃 10 为逢人配",
    seats: { left: "上家：剩 10 张", partner: "对家：剩 7 张", right: "下家：剩 6 张", me: "你：剩 11 张" },
    lastTrick: "上家出：单张 A",
    scenario: "前面已经出现过：大王 1 张、小王 1 张、红桃10 1 张、普通 10 共 5 张、2 共 4 张。",
    goal: "判断这时最该优先记住什么，而不是试图把所有小牌全背下来。",
    hand: ["小王", "♠A", "♥K", "♣Q", "♦Q", "♠J", "♣J", "♦10", "♣8", "♥7", "♠6"],
    history: ["大王：已出 1 / 2", "小王：已出 1 / 2，你手里还有 1 张", "红桃10：已出 1 / 2", "2：已出 4 / 8"],
    question: "这个局面最有价值的记牌重点是什么？",
    choices: [
      { text: "还剩 1 张大王、1 张红桃10，以及较多 2，敌方仍有强控牌可能", correct: true },
      { text: "重点记住 6、7、8 的数量，因为小牌决定残局", correct: false },
      { text: "小王已经全部出完，所以你的手牌小王一定无效", correct: false },
      { text: "普通 10 出了很多，所以所有炸弹都不可能出现", correct: false }
    ],
    summary: "记牌优先级应围绕控制牌：王、级牌、逢人配、2、炸弹可能性。",
    reasons: [
      "新手先记“能抢牌权的牌”，比平均记每张牌更有效。",
      "红桃级牌没有完全明朗时，对手仍可能临时配出炸弹或关键牌型。",
      "2 还剩很多，单张 A 并不绝对安全。"
    ],
    tip: "实战记牌顺序：王和逢人配优先，其次级牌、2、A，再关注炸弹断点。"
  },
  {
    id: "infer-001",
    type: "infer",
    typeName: "推理手牌",
    difficulty: "进阶",
    title: "对手连续不要，往往也是信息",
    level: "打 J，红桃 J 为逢人配",
    seats: { left: "上家：剩 5 张", partner: "对家：剩 9 张", right: "下家：剩 4 张", me: "你：剩 7 张" },
    lastTrick: "你上一手出对子 9，三家都不要",
    scenario: "下家只剩 4 张，但面对对子 9 没有压。上家也不要。对家之前出过一手三带二后停住。",
    goal: "根据“不要”推断对手牌型，避免给下家舒服出完。",
    hand: ["♠A", "♥A", "♣K", "♣K", "♦Q", "♠9", "♥8"],
    history: ["下家刚刚主动过对子 9", "下家前两轮抢过单张 A", "上家没有暴露炸弹", "对家出过 333+55"],
    question: "下一手如果你拿到牌权，最稳的出牌思路是什么？",
    choices: [
      { text: "优先出对子 A 或对子 K，继续压制下家可能的单张尾牌", correct: true },
      { text: "出单张 8，试试看下家要不要", correct: false },
      { text: "出单张 A，因为 A 一定能控住", correct: false },
      { text: "拆对子连续出小单，让自己尽快减少张数", correct: false }
    ],
    summary: "下家不要对子 9，说明他大概率不是强对子结构。你应继续用对子路线卡住他。",
    reasons: [
      "只剩 4 张的人如果有大对子，通常会压对子 9 争取出完机会。",
      "下家前面抢单张 A，反而说明他单张线可能强，对子线可能弱。",
      "你有两组大对子，应该沿着对手短板出，而不是喂他单张。"
    ],
    tip: "推理不是猜具体每张牌，而是判断对手强在哪条牌型线：单张、对子、三带二、顺子或炸弹。"
  },
  {
    id: "tribute-001",
    type: "tribute",
    typeName: "进贡还贡",
    difficulty: "入门",
    title: "还贡不是随便还小牌",
    level: "打 A，红桃 A 为逢人配",
    seats: { left: "上游：你方", partner: "对家：二游", right: "下游：对方", me: "你：上游" },
    lastTrick: "新一局开始：对方下游向你进贡",
    scenario: "你收到下游进贡的一张小王。你的手牌里已有大王、红桃A、A、A、K、K、Q、J、10、9、9、8、7。",
    goal: "选择还贡牌时既要符合规则，也要尽量不帮对手重组牌型。",
    hand: ["大王", "小王", "♥A*", "♠A", "♦A", "♣K", "♦K", "♠Q", "♣J", "♦10", "♠9", "♥9", "♣8", "♦7"],
    history: ["国标常见原则：进贡者给最大牌，受贡者还一张不超过 10 的牌", "若双下游且两人各有一张大王，可抗贡", "还贡后再开始出牌规划"],
    question: "你更倾向还哪张牌？",
    choices: [
      { text: "还 7，尽量不给对手中张连接和组牌空间", correct: true },
      { text: "还 10，因为规则允许且看起来不大", correct: false },
      { text: "还 9，因为你有一对 9，可以拆一张", correct: false },
      { text: "还 K，表达诚意", correct: false }
    ],
    summary: "通常还最弱且不帮对方成型的牌。这里还 7 更干净。",
    reasons: [
      "还贡牌一般不能超过 10，K 不合规。",
      "10、9 这类中张更容易帮助对手补顺子、连对或三带二结构。",
      "你手里 9 是对子，拆掉会降低自己的出牌效率。"
    ],
    tip: "还贡看两件事：守规则，少送结构。不是只看牌面大小。"
  },
  {
    id: "play-002",
    type: "play",
    typeName: "出牌逻辑",
    difficulty: "进阶",
    title: "什么时候值得拆炸",
    level: "打 6，红桃 6 为逢人配",
    seats: { left: "上家：剩 3 张", partner: "对家：剩 12 张", right: "下家：剩 5 张", me: "你：剩 10 张" },
    lastTrick: "上家出：三带二 777+44",
    scenario: "你有 8888、QQ、A、K、红桃6、5。下家只剩 5 张，上一轮没有要对子 Q。",
    goal: "判断炸弹是否该保留，还是现在抢回牌权。",
    hand: ["♠8", "♥8", "♣8", "♦8", "♠Q", "♦Q", "♣A", "♥K", "♥6*", "♣5"],
    history: ["上家剩 3 张，当前出三带二后如果没人压，他可能接近出完", "下家剩 5 张，可能也有一手整牌", "你的对家牌多，需要你控场"],
    question: "此时怎么处理更合理？",
    choices: [
      { text: "用 8888 炸掉，先阻止敌方连续走牌", correct: true },
      { text: "不要，保留炸弹等更大牌型", correct: false },
      { text: "拆 8888 出一组三带二", correct: false },
      { text: "用红桃 6 配成更大的三带二去压", correct: false }
    ],
    summary: "敌方两家都接近走完时，炸弹的价值就是打断节奏。",
    reasons: [
      "上家已经剩 3 张，放过这一手可能直接进入危险残局。",
      "你方对家牌多，保炸等机会可能等不到。",
      "炸完后可以出对子 Q 或单 A，继续控制牌型方向。"
    ],
    tip: "炸弹不是收藏品。敌方快走、队友牌多、你能接着组织出牌时，炸弹就该承担刹车作用。"
  },
  {
    id: "infer-002",
    type: "infer",
    typeName: "推理手牌",
    difficulty: "进阶",
    title: "从抢牌权看对手意图",
    level: "打 9，红桃 9 为逢人配",
    seats: { left: "上家：剩 9 张", partner: "对家：剩 4 张", right: "下家：剩 13 张", me: "你：剩 8 张" },
    lastTrick: "对家出单张 10，下家用 2 压住",
    scenario: "下家明明牌最多，却用 2 抢一个单张 10。上家不要。你有小王、A、K、Q、Q、J、10、8。",
    goal: "判断下家的 2 是真强控，还是为了阻止你方对家走牌。",
    hand: ["小王", "♠A", "♣K", "♠Q", "♦Q", "♥J", "♣10", "♠8"],
    history: ["对家只剩 4 张，此前出过一组连对", "下家牌最多，却主动压单张", "上家没有接 2"],
    question: "你是否应该用小王继续压？",
    choices: [
      { text: "应该压。下家多半是在拦对家，你要夺回牌权配合对家", correct: true },
      { text: "不压。小王必须留到最后一轮", correct: false },
      { text: "不压。下家牌多所以一定不是威胁", correct: false },
      { text: "压了以后立刻出单 8，让自己少一张", correct: false }
    ],
    summary: "下家牌多却抢小单，通常是在截断你方对家的出完路线。",
    reasons: [
      "对家只剩 4 张，是当前最接近胜利的人。",
      "下家用 2 抢 10，成本偏高，目的性很强。",
      "你压回后应优先寻找能送对家的牌型，而不是随便甩小单。"
    ],
    tip: "看出牌意图时，要把“谁快走了”放在第一层。很多看似奇怪的压牌，都是在拦最快的人。"
  }
];

const rules = [
  {
    title: "牌型基准",
    body: "两副牌共 108 张。常见牌型包括单张、对子、三张、三带二、顺子、连对、钢板、炸弹、同花顺、四王炸。训练题会避免使用地方玩法。"
  },
  {
    title: "级牌与逢人配",
    body: "每局有当前级牌，红桃级牌通常作为逢人配，可替代除大小王外的任意牌参与成牌。它的价值在于补结构，不只是当大牌。"
  },
  {
    title: "进贡还贡",
    body: "常见国标竞技原则是下游向上游进最大牌，受贡者还不超过 10 的牌；双下游同时各有大王时可抗贡。实战先确认比赛细则。"
  },
  {
    title: "接风意识",
    body: "同伴最后一手牌无人压住时，由你获得下一轮出牌权。接风后不要机械出最大牌，要先想队友是否已经完成任务。"
  },
  {
    title: "记牌优先级",
    body: "先记王、逢人配、级牌、2、A 和炸弹可能性；再记关键牌型是否断裂。新手不必一开始追求记住全部 108 张。"
  },
  {
    title: "出牌目标",
    body: "每一手先判断目标：自己冲、送队友、抢牌权、逼炸、试探、堵敌方。目标清楚后，牌面大小才有意义。"
  }
];

const state = {
  filter: "all",
  index: 0,
  answered: false,
  selectedId: null,
  stats: loadStats()
};

const els = {
  doneCount: document.querySelector("#doneCount"),
  rightRate: document.querySelector("#rightRate"),
  streakCount: document.querySelector("#streakCount"),
  puzzleType: document.querySelector("#puzzleType"),
  puzzleTitle: document.querySelector("#puzzleTitle"),
  difficulty: document.querySelector("#difficulty"),
  seatPartner: document.querySelector("#seatPartner"),
  seatLeft: document.querySelector("#seatLeft"),
  seatRight: document.querySelector("#seatRight"),
  seatMe: document.querySelector("#seatMe"),
  lastTrick: document.querySelector("#lastTrick"),
  scenario: document.querySelector("#scenario"),
  goal: document.querySelector("#goal"),
  handCards: document.querySelector("#handCards"),
  levelInfo: document.querySelector("#levelInfo"),
  history: document.querySelector("#history"),
  memoryHint: document.querySelector("#memoryHint"),
  question: document.querySelector("#question"),
  choices: document.querySelector("#choices"),
  answerPanel: document.querySelector("#answerPanel"),
  answerTitle: document.querySelector("#answerTitle"),
  answerSummary: document.querySelector("#answerSummary"),
  reasonList: document.querySelector("#reasonList"),
  tipBox: document.querySelector("#tipBox"),
  nextBtn: document.querySelector("#nextBtn"),
  shareBtn: document.querySelector("#shareBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  ruleGrid: document.querySelector("#ruleGrid"),
  toast: document.querySelector("#toast")
};

function loadStats() {
  const fallback = { done: 0, right: 0, streak: 0, answered: {} };
  try {
    return JSON.parse(localStorage.getItem("guandan-trainer-stats")) || fallback;
  } catch {
    return fallback;
  }
}

function saveStats() {
  localStorage.setItem("guandan-trainer-stats", JSON.stringify(state.stats));
}

function filteredPuzzles() {
  return state.filter === "all" ? puzzles : puzzles.filter((puzzle) => puzzle.type === state.filter);
}

function currentPuzzle() {
  const list = filteredPuzzles();
  return list[state.index % list.length];
}

function cardParts(card) {
  if (card.includes("王")) return { joker: true, rank: card };
  const clean = card.replace("*", "");
  return {
    rank: clean.slice(1),
    suit: clean.slice(0, 1),
    level: card.includes("*"),
    red: clean.startsWith("♥") || clean.startsWith("♦")
  };
}

function renderCard(card) {
  const parts = cardParts(card);
  if (parts.joker) {
    return `<span class="card joker">${parts.rank}</span>`;
  }
  return `
    <span class="card ${parts.red ? "red" : "black"} ${parts.level ? "level" : ""}">
      <span class="rank">${parts.rank}</span>
      <span class="suit">${parts.suit}</span>
    </span>
  `;
}

function renderPuzzle() {
  const puzzle = currentPuzzle();
  state.answered = false;
  state.selectedId = null;

  els.puzzleType.textContent = puzzle.typeName;
  els.puzzleTitle.textContent = puzzle.title;
  els.difficulty.textContent = puzzle.difficulty;
  els.seatPartner.textContent = puzzle.seats.partner;
  els.seatLeft.textContent = puzzle.seats.left;
  els.seatRight.textContent = puzzle.seats.right;
  els.seatMe.textContent = puzzle.seats.me;
  els.lastTrick.textContent = puzzle.lastTrick;
  els.scenario.textContent = puzzle.scenario;
  els.goal.textContent = puzzle.goal;
  els.levelInfo.textContent = puzzle.level;
  els.memoryHint.textContent = `${puzzle.history.length} 条线索`;
  els.question.textContent = puzzle.question;
  els.handCards.innerHTML = puzzle.hand.map(renderCard).join("");
  els.history.innerHTML = puzzle.history.map((item) => `<div class="history-item">${item}</div>`).join("");
  els.answerPanel.classList.add("hidden");
  els.choices.innerHTML = puzzle.choices
    .map((choice, choiceIndex) => `<button class="choice" type="button" data-choice="${choiceIndex}">${choice.text}</button>`)
    .join("");
  updateStats();
  updateHash(puzzle.id);
}

function renderRules() {
  els.ruleGrid.innerHTML = rules
    .map((rule) => `<article class="rule-card"><h3>${rule.title}</h3><p>${rule.body}</p></article>`)
    .join("");
}

function answer(choiceIndex) {
  if (state.answered) return;
  const puzzle = currentPuzzle();
  const choice = puzzle.choices[choiceIndex];
  state.answered = true;
  state.selectedId = choiceIndex;

  state.stats.done += 1;
  if (choice.correct) {
    state.stats.right += 1;
    state.stats.streak += 1;
  } else {
    state.stats.streak = 0;
  }
  state.stats.answered[puzzle.id] = choice.correct;
  saveStats();

  [...els.choices.querySelectorAll(".choice")].forEach((button, index) => {
    const item = puzzle.choices[index];
    button.disabled = true;
    if (item.correct) button.classList.add("correct");
    if (index === choiceIndex && !item.correct) button.classList.add("wrong");
    if (index === choiceIndex) button.classList.add("selected");
  });

  els.answerTitle.textContent = choice.correct ? "判断正确" : "这手容易误判";
  els.answerSummary.textContent = puzzle.summary;
  els.reasonList.innerHTML = puzzle.reasons.map((reason) => `<div class="reason">${reason}</div>`).join("");
  els.tipBox.textContent = puzzle.tip;
  els.answerPanel.classList.remove("hidden");
  updateStats();
}

function updateStats() {
  els.doneCount.textContent = state.stats.done;
  els.streakCount.textContent = state.stats.streak;
  const rate = state.stats.done ? Math.round((state.stats.right / state.stats.done) * 100) : 0;
  els.rightRate.textContent = `${rate}%`;
}

function goNext() {
  const list = filteredPuzzles();
  state.index = (state.index + 1) % list.length;
  renderPuzzle();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setFilter(filter) {
  state.filter = filter;
  state.index = 0;
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.filter === filter);
  });
  renderPuzzle();
}

function updateHash(id) {
  const next = `${location.pathname}#${id}`;
  history.replaceState(null, "", next);
}

function loadFromHash() {
  const id = location.hash.replace("#", "");
  const found = puzzles.find((puzzle) => puzzle.id === id);
  if (!found) return;
  state.filter = "all";
  state.index = puzzles.findIndex((puzzle) => puzzle.id === id);
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.filter === "all");
  });
}

async function shareCurrent() {
  const puzzle = currentPuzzle();
  const url = `${location.origin}${location.pathname}#${puzzle.id}`;
  const text = `我在练这道掼蛋关键局面题：${puzzle.title}`;
  try {
    if (navigator.share) {
      await navigator.share({ title: "掼蛋关键局面训练器", text, url });
    } else {
      await navigator.clipboard.writeText(url);
      showToast("题目链接已复制");
    }
  } catch {
    showToast("分享已取消");
  }
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.setTimeout(() => els.toast.classList.remove("show"), 1800);
}

function resetStats() {
  state.stats = { done: 0, right: 0, streak: 0, answered: {} };
  saveStats();
  updateStats();
  showToast("进度已重置");
}

els.choices.addEventListener("click", (event) => {
  const button = event.target.closest(".choice");
  if (!button) return;
  answer(Number(button.dataset.choice));
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => setFilter(tab.dataset.filter));
});

els.nextBtn.addEventListener("click", goNext);
els.shareBtn.addEventListener("click", shareCurrent);
els.resetBtn.addEventListener("click", resetStats);
window.addEventListener("hashchange", () => {
  loadFromHash();
  renderPuzzle();
});

loadFromHash();
renderRules();
renderPuzzle();
