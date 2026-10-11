/* أثَر ATHAR — منطق الواجهة (بيانات تجريبية محلية فقط) */
"use strict";

const TRACKS = [
  { id:"ai", icon:"🤖", title:"الذكاء الاصطناعي", level:"مبتدئ إلى متوسط", desc:"اكتشف كيف تفكر الآلات: تعلم أساسيات الذكاء الاصطناعي وبناء مشاريع أخلاقية تخدم مجتمعك.", points:150, lessons:["مدخل ممتع للذكاء الاصطناعي","أخلاقيات الذكاء الاصطناعي","مشروع: مساعد دراسي ذكي"] },
  { id:"code", icon:"💻", title:"البرمجة وصناعة التطبيقات", level:"مبتدئ", desc:"من الصفر إلى تطبيقك الأول: أساسيات البرمجة وبناء صفحات وتطبيقات تفاعلية خطوة بخطوة.", points:200, lessons:["أساسيات HTML و CSS","التفكير البرمجي بـ JavaScript","مشروع: تطبيق مبادرتي"] },
  { id:"design", icon:"🎨", title:"التصميم والإبداع الرقمي", level:"جميع المستويات", desc:"حوّل أفكارك إلى تصاميم تأسر العين: مبادئ التصميم وصناعة المحتوى البصري والهوية.", points:120, lessons:["لغة الألوان والخطوط","التصميم بالهاتف والحاسوب","مشروع: هوية مبادرة شبابية"] },
  { id:"safety", icon:"🛡️", title:"الأمن الرقمي والوعي التقني", level:"أساسي للجميع", desc:"احمِ نفسك ومن حولك: الخصوصية، وكشف الاحتيال، والتعامل الواعي مع الإنترنت ومواقعه.", points:100, lessons:["كلمات المرور والخصوصية","التنمر الرقمي والاحتيال","مشروع: ميثاق الأمان الرقمي"] },
  { id:"lead", icon:"🤝", title:"القيادة والعمل الجماعي", level:"متوسط", desc:"القائد يصنع الفريق: مهارات التواصل، وإدارة المشاريع الصغيرة، وقيادة المبادرات التطوعية.", points:130, lessons:["فن التواصل والإقناع","إدارة فريق صغير","مشروع: قيادة مبادرة حي"] },
  { id:"values", icon:"🌱", title:"القيم والأثر المجتمعي", level:"جميع المستويات", desc:"التقنية بلا قيم ضجيج: الصدق والأمانة والعطاء، وكيف تقيس أثرك الحقيقي في مجتمعك.", points:110, lessons:["قيم صانع الأثر","من الفكرة إلى المبادرة","مشروع: تقرير أثري الأول"] },
];

const CHALLENGES = [
  { id:"c1", icon:"💡", title:"اصنع فكرتك التقنية الأولى", desc:"حوّل مشكلة صغيرة في يومك إلى فكرة تطبيق أو موقع من صفحة واحدة واعرضها على مجتمعك.", duration:"5 أيام", level:"سهل", status:"open", points:50 },
  { id:"c2", icon:"💙", title:"أسبوع بلا تنمر رقمي", desc:"التزم بأسبوع كامل من التواصل الإيجابي، وادعم ثلاثة أشخاص بكلمات طيبة وبلّغ عن أي إساءة.", duration:"7 أيام", level:"سهل", status:"open", points:60 },
  { id:"c3", icon:"🏘️", title:"ابتكر حلًا لمشكلة في مجتمعك", desc:"رصد مشكلة حقيقية في حيّك أو مدرستك وصمم حلًا تقنيًا أو تطوعيًا بسيطًا قابلًا للتنفيذ.", duration:"10 أيام", level:"متوسط", status:"open", points:100 },
  { id:"c4", icon:"🎬", title:"تحدي المحتوى الهادف", desc:"أنتج مقطعًا أو منشورًا توعويًا قصيرًا ينشر قيمة إيجابية ويحقق 50 تفاعلًا حقيقيًا على الأقل.", duration:"7 أيام", level:"متوسط", status:"soon", points:80 },
  { id:"c5", icon:"🌍", title:"صمم مبادرة تطوعية رقمية", desc:"صمم مبادرة تطوعية تُدار بالكامل عن بُعد: الهدف، والفريق، والمهام، وخطة الأسبوع الأول.", duration:"14 يومًا", level:"متقدم", status:"soon", points:120 },
];

const INITIATIVES = [
  { icon:"📚", title:"مكتبة الحي الرقمية", field:"تقنية وتعليم", desc:"منصة بسيطة جمعها طلاب لجمع الكتب والملخصات الدراسية ومشاركتها مجانًا مع زملائهم.", by:"فريق نور المعرفة" },
  { icon:"🌳", title:"حيّنا أخضر", field:"بيئة واستدامة", desc:"مبادرة تشجير وتوعية بيئية وثّقها الشباب بالصور والخرائط التفاعلية لتحفيز الأحياء المجاورة.", by:"نادي البيئة المدرسية" },
  { icon:"🧠", title:"عقول آمنة", field:"صحة ووعي رقمي", desc:"حملة توعية ضد الإدمان الرقمي والتنمر، قدّمت ورشًا قصيرة لأكثر من 300 طالب وطالبة.", by:"سارة ولينا" },
  { icon:"🩺", title:"طبيب الحي", field:"تطوع وخدمة مجتمع", desc:"دليل رقمي بأرقام الطوارئ ومواعيد العيادات القريبة، صممه متطوعون لخدمة كبار السن.", by:"فريق عطاء" },
];

const STORIES = [
  { avatar:"👩‍💻", name:"رغد، 16 سنة", tag:"البرمجة", text:"بدأت من مسار البرمجة دون أي خبرة، واليوم بنت موقعًا لمبادرة مدرستها لجمع التبرعات العينية.", metric:"+200 نقطة أثر" },
  { avatar:"👦🏽", name:"يوسف، 14 سنة", tag:"الأمن الرقمي", text:"قاد حملة «أسبوع بلا تنمر» في مدرسته بعد مسار الوعي التقني، وشارك فيها 120 طالبًا.", metric:"120 مشاركًا" },
  { avatar:"🧕🏼", name:"مريم، 17 سنة", tag:"الذكاء الاصطناعي", text:"صممت مساعدًا دراسيًا بسيطًا يساعد زميلاتها على المراجعة، وعرضت فكرتها في ملتقى شبابي.", metric:"مشروع منشور" },
];

const BADGES = [
  { id:"b1", icon:"🌱", name:"الخطوة الأولى", rule:"ابدأ مسارك الأول", check:s=>s.startedTracks.length>=1 },
  { id:"b2", icon:"⚡", name:"روح التحدي", rule:"انضم لتحدٍّ واحد", check:s=>s.joined.length>=1 },
  { id:"b3", icon:"🏅", name:"صانع الأثر", rule:"أكمل تحديًا واحدًا", check:s=>s.completed.length>=1 },
  { id:"b4", icon:"💡", name:"صاحب فكرة", rule:"اعرض مبادرة", check:s=>s.ideas>=1 },
  { id:"b5", icon:"🔥", name:"مثابر", rule:"اجمع 300 نقطة", check:s=>s.points>=300 },
  { id:"b6", icon:"👑", name:"ملهم المجتمع", rule:"اجمع 600 نقطة", check:s=>s.points>=600 },
];

const KEY = "athar_state_v1";
const defaultState = () => ({ nickname:"صانع الأثر", avatar:"🦊", points:40, joined:[], completed:[], startedTracks:[], ideas:0, bonusDay:"", customIdeas:[] });
let state;
try { state = Object.assign(defaultState(), JSON.parse(localStorage.getItem(KEY) || "{}")); }
catch { state = defaultState(); }
const save = () => localStorage.setItem(KEY, JSON.stringify(state));

/* أدوات مساعدة */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function toast(msg, type=""){
  const t = document.createElement("div");
  t.className = "toast " + type; t.textContent = msg;
  $("#toasts").appendChild(t);
  setTimeout(()=>{ t.style.opacity="0"; setTimeout(()=>t.remove(),300); }, 2800);
}
function levelOf(p){ if(p>=600) return {n:4,name:"ملهم • المستوى 4",next:1000}; if(p>=300) return {n:3,name:"صانع • المستوى 3",next:600}; if(p>=100) return {n:2,name:"نشيط • المستوى 2",next:300}; return {n:1,name:"مستكشف • المستوى 1",next:100}; }
const statusLabel = s => s==="open" ? ["مفتوح للتسجيل","st-open"] : s==="soon" ? ["يبدأ قريبًا","st-soon"] : [s,"st-open"];

/* عرض المسارات */
function renderTracks(filter=""){
  const grid = $("#tracksGrid");
  const q = filter.trim();
  const list = TRACKS.filter(t => !q || (t.title+t.desc+t.level).includes(q));
  $("#tracksEmpty").hidden = list.length>0;
  grid.innerHTML = list.map(t=>{
    const started = state.startedTracks.includes(t.id);
    return `<article class="card reveal visible" role="listitem">
      <div class="card-top"><span class="card-icon">${t.icon}</span><span class="level">${esc(t.level)}</span></div>
      <h3>${esc(t.title)}</h3><p>${esc(t.desc)}</p>
      <div class="card-meta"><span>⭐ ${t.points} نقطة</span><span>📚 ${t.lessons.length} وحدات</span>${started?'<span>✅ بدأته</span>':''}</div>
      <div class="card-actions">
        <button class="btn btn-primary btn-sm" data-track="${t.id}">استكشف المسار</button>
      </div></article>`;
  }).join("");
}

/* عرض التحديات */
let challengeFilter = "all";
function renderChallenges(filter=""){
  const grid = $("#challengesGrid");
  const q = filter.trim();
  const list = CHALLENGES.filter(c=>{
    const okQ = !q || (c.title+c.desc+c.level).includes(q);
    const okF = challengeFilter==="all" || (challengeFilter==="joined" ? state.joined.includes(c.id) : c.status===challengeFilter);
    return okQ && okF;
  });
  $("#challengesEmpty").hidden = list.length>0;
  grid.innerHTML = list.map(c=>{
    const [label, cls] = statusLabel(c.status);
    const joined = state.joined.includes(c.id), done = state.completed.includes(c.id);
    return `<article class="card reveal visible" role="listitem">
      <div class="card-top"><span class="card-icon">${c.icon}</span><span class="badge-status ${done?'st-done':joined?'st-joined':cls}">${done?'مكتمل ✅':joined?'مشترك فيه 🎯':label}</span></div>
      <h3>${esc(c.title)}</h3><p>${esc(c.desc)}</p>
      <div class="card-meta"><span>⏱️ ${esc(c.duration)}</span><span>📊 ${esc(c.level)}</span><span>⭐ ${c.points} نقطة</span></div>
      <div class="card-actions">
        <button class="btn ${done?'btn-ghost':'btn-primary'} btn-sm" data-challenge="${c.id}">${done?'عرض التفاصيل':'التفاصيل والمشاركة'}</button>
      </div></article>`;
  }).join("");
}

/* المبادرات */
function renderInitiatives(){
  const all = [...state.customIdeas, ...INITIATIVES];
  $("#initiativesGrid").innerHTML = all.map((m,i)=>`<article class="card reveal visible" role="listitem">
    <div class="card-top"><span class="card-icon">${esc(m.icon||"💡")}</span><span class="level">${esc(m.field||"مبادرة")}</span></div>
    <h3>${esc(m.title)}</h3><p>${esc(m.desc)}</p>
    <div class="card-meta"><span>👥 ${esc(m.by||"مبادرة مجتمعية")}</span>${i<state.customIdeas.length?'<span>✨ فكرتك (محلية)</span>':''}</div>
  </article>`).join("");
}

/* قصص */
function renderStories(){
  $("#storiesGrid").innerHTML = STORIES.map(s=>`<article class="card reveal visible" role="listitem">
    <div class="story-avatar">${s.avatar}</div>
    <h3>${esc(s.name)}</h3><span class="level">${esc(s.tag)}</span>
    <p class="story-quote">«${esc(s.text)}»</p>
    <div class="card-meta"><span>${esc(s.metric)}</span></div>
  </article>`).join("");
}

/* لوحة الإنجازات */
function renderDash(){
  const lv = levelOf(state.points);
  $("#levelName").textContent = lv.name;
  $("#pointsLine").textContent = `${state.points} نقطة • تبقى ${Math.max(0,lv.next-state.points)} للمستوى التالي`;
  $("#levelBar").style.width = Math.min(100, Math.round(state.points/lv.next*100)) + "%";
  $("#nickname").value = state.nickname;
  $("#avatarPreview").textContent = state.avatar;
  $$(".avatar-pick button").forEach(b=>b.classList.toggle("active", b.dataset.avatar===state.avatar));
  $("#badgesRow").innerHTML = BADGES.map(b=>{
    const un = b.check(state);
    return `<div class="badge-item ${un?'unlocked':''}" title="${esc(b.rule)}"><span class="b">${un?b.icon:'🔒'}</span>${esc(b.name)}<br><small>${esc(b.rule)}</small></div>`;
  }).join("");
  $("#myTracks").innerHTML = state.startedTracks.length ? state.startedTracks.map(id=>{
    const t = TRACKS.find(x=>x.id===id); if(!t) return "";
    return `<li><span>${t.icon} ${esc(t.title)}</span><button class="x" data-untrack="${id}" aria-label="إزالة">✕</button></li>`;
  }).join("") : `<li>لم تبدأ أي مسار بعد — <a href="#tracks">اكتشف المسارات</a> 🌱</li>`;
  const doneHtml = state.completed.map(id=>{
    const c = CHALLENGES.find(x=>x.id===id); if(!c) return "";
    return `<li><span>${c.icon} ${esc(c.title)} ✅</span><span>+${c.points}</span></li>`;
  }).join("");
  const progHtml = state.joined.filter(id=>!state.completed.includes(id)).map(id=>{
    const c = CHALLENGES.find(x=>x.id===id);
    return c?`<li><span>${c.icon} ${esc(c.title)} 🎯 جارٍ التنفيذ</span><button class="btn btn-primary btn-sm" data-complete="${id}">أنجزته ✓</button></li>`:"";
  }).join("");
  $("#myChallenges").innerHTML = (doneHtml+progHtml) || `<li>لا تحديات مكتملة بعد — <a href="#challenges">ابدأ تحديك الأول</a> ⚡</li>`;
}

/* نافذة منبثقة */
let lastFocus = null;
function openModal(html){ lastFocus = document.activeElement; $("#modalContent").innerHTML = html; $("#modalBackdrop").hidden = false; $("#modalClose").focus(); document.body.style.overflow="hidden"; }
function closeModal(){ $("#modalBackdrop").hidden = true; document.body.style.overflow=""; if(lastFocus && lastFocus.focus) lastFocus.focus(); }
function trackModal(t){
  const started = state.startedTracks.includes(t.id);
  openModal(`<span class="kicker">${t.icon} مسار تعليمي</span>
    <h3 id="modalTitle">${esc(t.title)}</h3>
    <p>${esc(t.desc)}</p>
    <p><span class="level">${esc(t.level)}</span> <span class="level">⭐ ${t.points} نقطة عند الإتمام</span></p>
    <strong>ماذا ستتعلم؟</strong>
    <ul>${t.lessons.map(l=>`<li>${esc(l)}</li>`).join("")}</ul>
    <div class="form-actions">
      ${started?`<button class="btn btn-ghost" id="mClose">مسارك بدأ بالفعل ✅</button>`:`<button class="btn btn-primary" id="mStart">ابدأ هذا المسار (+20 نقطة)</button>`}
      <button class="btn btn-ghost" id="mClose2">إغلاق</button>
    </div>
    <p class="muted" style="font-size:.85rem;color:var(--muted)">التقدم تجريبي ويُحفظ في متصفحك فقط.</p>`);
  $("#mClose")?.addEventListener("click", closeModal);
  $("#mClose2")?.addEventListener("click", closeModal);
  $("#mStart")?.addEventListener("click", ()=>{
    state.startedTracks.push(t.id); state.points += 20; save();
    renderTracks($("#trackSearch").value); renderDash(); closeModal();
    toast(`أحسنت! بدأت مسار «${t.title}» وكسبت 20 نقطة 🎉`, "ok");
    document.getElementById("dashboard").scrollIntoView({behavior:"smooth"});
  });
}
function challengeModal(c){
  const joined = state.joined.includes(c.id), done = state.completed.includes(c.id);
  const [label] = statusLabel(c.status);
  openModal(`<span class="kicker">${c.icon} تحدٍّ • ${label}</span>
    <h3 id="modalTitle">${esc(c.title)}</h3>
    <p>${esc(c.desc)}</p>
    <div class="card-meta"><span>⏱️ ${esc(c.duration)}</span><span>📊 ${esc(c.level)}</span><span>⭐ ${c.points} نقطة</span></div>
    <strong>خطوات التنفيذ المقترحة:</strong>
    <ul><li>اقرأ الوصف جيدًا وحدد هدفك الشخصي.</li><li>نفّذ نشاطًا واحدًا صغيرًا كل يوم.</li><li>وثّق تقدمك وشاركه مع صديق أو عائلتك.</li><li>اضغط «أنجزته» في لوحتك عند الانتهاء لكسب النقاط.</li></ul>
    <div class="form-actions">
      ${done?`<button class="btn btn-ghost" id="mClose">مكتمل — أحسنت! ✅</button>`
        :joined?`<button class="btn btn-primary" id="mDone">أنجزت التحدي ✓ (+${c.points})</button>`
        :c.status==="soon"?`<button class="btn btn-ghost" id="mSoon">ذكّرني عند الافتتاح 🔔</button>`
        :`<button class="btn btn-primary" id="mJoin">اشترك الآن 🎯</button>`}
      <button class="btn btn-ghost" id="mClose2">إغلاق</button>
    </div>`);
  $("#mClose")?.addEventListener("click", closeModal);
  $("#mClose2")?.addEventListener("click", closeModal);
  $("#mJoin")?.addEventListener("click", ()=>{
    state.joined.push(c.id); state.points += 10; save();
    renderChallenges($("#challengeSearch").value); renderDash(); closeModal();
    toast(`انضممت إلى «${c.title}» (+10 نقاط) — بالتوفيق! 🚀`, "ok");
  });
  $("#mSoon")?.addEventListener("click", ()=>{ closeModal(); toast("تم! سنعرض لك التحدي في لوحتك عند توفره (تجريبي) 🔔", "ok"); });
  $("#mDone")?.addEventListener("click", ()=>completeChallenge(c.id));
}
function completeChallenge(id){
  const c = CHALLENGES.find(x=>x.id===id); if(!c || state.completed.includes(id)) return;
  if(!state.joined.includes(id)) state.joined.push(id);
  state.completed.push(id); state.points += c.points; save();
  renderChallenges($("#challengeSearch").value); renderDash(); closeModal();
  toast(`مذهل! أكملت «${c.title}» وكسبت ${c.points} نقطة 🏅`, "ok");
}

/* تهيئة الأحداث */
document.addEventListener("DOMContentLoaded", ()=>{
  $("#year").textContent = new Date().getFullYear();
  renderTracks(); renderChallenges(); renderInitiatives(); renderStories(); renderDash();

  // القائمة للجوال
  const menu = $("#menuBtn"), links = $("#navLinks");
  menu.addEventListener("click", ()=>{
    const open = links.classList.toggle("open");
    menu.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", e=>{ if(e.target.tagName==="A") links.classList.remove("open"); });

  // البحث
  $("#trackSearch").addEventListener("input", e=>renderTracks(e.target.value));
  $("#challengeSearch").addEventListener("input", e=>renderChallenges(e.target.value));
  $$("[data-clear]").forEach(b=>b.addEventListener("click", ()=>{
    $("#"+b.dataset.clear).value=""; renderTracks($("#trackSearch").value); renderChallenges($("#challengeSearch").value);
  }));
  $$(".chip").forEach(ch=>ch.addEventListener("click", ()=>{
    $$(".chip").forEach(x=>{x.classList.remove("active");x.setAttribute("aria-pressed","false");}); ch.classList.add("active"); ch.setAttribute("aria-pressed","true");
    challengeFilter = ch.dataset.filter; renderChallenges($("#challengeSearch").value);
  }));

  // تفويض النقرات
  document.addEventListener("click", e=>{
    const t = e.target.closest("[data-track]"); if(t){ const tr = TRACKS.find(x=>x.id===t.dataset.track); if(tr) trackModal(tr); }
    const ch = e.target.closest("[data-challenge]"); if(ch){ const c = CHALLENGES.find(x=>x.id===ch.dataset.challenge); if(c) challengeModal(c); }
    const done = e.target.closest("[data-complete]"); if(done) completeChallenge(done.dataset.complete);
    const un = e.target.closest("[data-untrack]"); if(un){
      state.startedTracks = state.startedTracks.filter(x=>x!==un.dataset.untrack); save();
      renderTracks($("#trackSearch").value); renderDash(); toast("تمت إزالة المسار من لوحتك.", "");
    }
    const av = e.target.closest("[data-avatar]"); if(av){ state.avatar = av.dataset.avatar; save(); renderDash(); }
  });

  // النافذة
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalBackdrop").addEventListener("click", e=>{ if(e.target.id==="modalBackdrop") closeModal(); });
  document.addEventListener("keydown", e=>{ if(e.key==="Escape" && !$("#modalBackdrop").hidden) closeModal(); });

  // نموذج المبادرة
  $("#ideaForm").addEventListener("submit", e=>{
    e.preventDefault();
    const name=$("#ideaName").value.trim(), field=$("#ideaField").value, owner=$("#ideaOwner").value.trim(), desc=$("#ideaDesc").value.trim();
    let ok = true;
    const setErr=(id,msg)=>{ $(`[data-error="${id}"]`).textContent = msg||""; if(msg) ok=false; };
    setErr("ideaName", name.length<3 ? "فضلًا أدخل اسمًا لا يقل عن 3 أحرف." : "");
    setErr("ideaField", !field ? "فضلًا اختر مجال المبادرة." : "");
    setErr("ideaOwner", owner.length<2 ? "فضلًا أدخل اسمك المستعار." : "");
    setErr("ideaDesc", desc.length<20 ? "الوصف قصير — اكتب 20 حرفًا على الأقل." : "");
    const note = $("#ideaNote");
    if(!ok){ note.textContent="⚠️ راجع الحقول المحددة بالأحمر وحاول مجددًا."; note.className="form-note err"; return; }
    state.customIdeas.unshift({icon:"💡", title:name, field, desc, by:owner});
    state.ideas++; state.points += 30; save();
    renderInitiatives(); renderDash(); e.target.reset();
    note.textContent="✅ تم استلام فكرتك بنجاح! أُضيفت لقائمة المبادرات محليًا وكسبت 30 نقطة. (عرض تجريبي — غير محفوظة على خادم)";
    note.className="form-note ok"; toast("فكرتك أصبحت ضمن المبادرات +30 نقطة 🌱","ok");
    $("#initiativesGrid").scrollIntoView({behavior:"smooth", block:"center"});
  });

  // لوحة المستخدم
  $("#nickname").addEventListener("change", e=>{
    state.nickname = e.target.value.trim() || "صانع الأثر"; save(); toast("تم حفظ اسمك المستعار محليًا ✓","ok");
  });
  $("#dailyBonus").addEventListener("click", ()=>{
    const today = new Date().toDateString();
    if(state.bonusDay===today){ toast("حصلت على مكافأة اليوم مسبقًا — عُد غدًا! 🎁","err"); return; }
    state.bonusDay = today; state.points += 10; save(); renderDash();
    toast("مكافأة اليوم: +10 نقاط! استمر 🎁","ok");
  });
  $("#shareBtn").addEventListener("click", async ()=>{
    const text = `أنا ${state.nickname} في منصة أثَر: ${state.points} نقطة، أكملت ${state.completed.length} تحديات وبدأت ${state.startedTracks.length} مسارات. انضم واصنع أثرك! 🌱`;
    try{
      if(navigator.share){ await navigator.share({title:"أثَر", text}); }
      else if(navigator.clipboard){ await navigator.clipboard.writeText(text); toast("نُسخ تقدمك — الصقه أين تشاء ✓","ok"); }
      else{ toast(text, "ok"); }
    }catch(err){ if(err && err.name!=="AbortError") toast("تعذّر النسخ التلقائي — انسخ تقدمك يدويًا من اللوحة", "err"); }
  });
  $("#resetDemo").addEventListener("click", ()=>{
    if(!confirm("سيتم تصفير كل البيانات التجريبية المحلية. متابعة؟")) return;
    localStorage.removeItem(KEY); state = defaultState(); save();
    renderTracks($("#trackSearch").value); renderChallenges($("#challengeSearch").value); renderInitiatives(); renderDash();
    toast("تم تصفير البيانات التجريبية ↺","");
  });

  // نموذج الانضمام
  $("#joinForm").addEventListener("submit", e=>{
    e.preventDefault();
    const v = $("#joinEmail").value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    $(`[data-error="joinEmail"]`).textContent = valid ? "" : "فضلًا أدخل بريدًا إلكترونيًا صحيحًا.";
    const note = $("#joinNote");
    if(!valid){ note.textContent=""; return; }
    note.textContent="🎉 أهلًا بك في مجتمع أثَر! (تجريبي — لم نرسل أي بيانات لأي خادم، وتم تسجيل اهتمامك محليًا فقط)";
    note.className="form-note ok"; e.target.reset(); toast("تم تسجيل اهتمامك بالانضمام ✓","ok");
  });

  // إبراز الرابط النشط + عدّادات + ظهور تدريجي
  const secs = ["home","tracks","challenges","initiatives","stories","mission","dashboard"];
  const navA = [...$("#navLinks").querySelectorAll("a")];
  const obs = new IntersectionObserver(es=>{
    es.forEach(en=>{ if(en.isIntersecting){ navA.forEach(a=>a.classList.toggle("active", a.getAttribute("href")==="#"+en.target.id)); } });
  },{rootMargin:"-40% 0px -55% 0px"});
  secs.forEach(id=>{ const el=document.getElementById(id); if(el) obs.observe(el); });

  const counters = $$("[data-count]");
  const cObs = new IntersectionObserver(es=>{
    es.forEach(en=>{
      if(!en.isIntersecting) return;
      const el = en.target, target = +el.dataset.count; let cur = 0;
      const step = Math.max(1, Math.round(target/40));
      const tick = ()=>{ cur += step; if(cur>=target){ el.textContent = target+"+"; } else { el.textContent = cur; setTimeout(tick, 30); } };
      tick(); cObs.unobserve(el);
    });
  },{threshold:.6});
  counters.forEach(el=>cObs.observe(el));

  const rObs = new IntersectionObserver(es=>es.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("visible"); rObs.unobserve(en.target);} }),{threshold:.12});
  const watchReveals = ()=>$$(".card:not(.visible),.mission-visual,.form-card").forEach(el=>{ el.classList.add("reveal"); rObs.observe(el); });
  watchReveals();
});
