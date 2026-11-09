// Hustle Up — thư viện dựng logo bằng font thật + SVG (dùng chung cho guideline.html và export.html).
// Thông số giữ đúng bản đã chốt trong brand.html / hu.html.
const C = {
  red: '#C4261D', butter: '#FAF4D3', cream: '#FBF5E8',
  blushL: '#F08A7E', blushR: '#F6B3A3', brown: '#3A1F1A', ink: '#1A1A1A'
};
function ring(r, c) { return [...Array(16)].map((_, k) => { const a = k / 16 * 2 * Math.PI; return `${(Math.cos(a) * r).toFixed(1)}px ${(Math.sin(a) * r).toFixed(1)}px 0 ${c}` }).join(',') }
const _cv = document.createElement('canvas').getContext('2d');
function ink(ch, font) { _cv.font = font; const m = _cv.measureText(ch); return { l: -m.actualBoundingBoxLeft, r: m.actualBoundingBoxRight, a: m.actualBoundingBoxAscent, d: m.actualBoundingBoxDescent } }
function word(card, text, { x = 0, y = 0, size, family, weight = 400, color, bg, dy = [], rot = [], sc = [], ov = -0.02, space = .26 }) {
  const w = document.createElement('div'); w.className = 'word';
  w.style.cssText += `position:absolute;white-space:nowrap;line-height:1;left:${x}px;top:${y}px;font-size:${size}px;font-family:${family};font-weight:${weight};color:${color}`;
  const mk = document.createElement('span'); mk.style.cssText = 'display:inline-block;width:0;height:0'; w.appendChild(mk);
  const sh = bg ? ring(Math.max(2.5, size * 0.028), bg) : 'none'; const spans = [];
  [...text].forEach((ch, i) => {
    const s = document.createElement('span'); s.className = 'l'; s.style.display = 'inline-block'; s.style.position = 'relative';
    if (ch === ' ') { s.style.width = space + 'em'; s.style.height = '1px'; } else { s.textContent = ch; s.style.textShadow = sh; s.style.marginRight = ov + 'em'; }
    if ((sc[i] || 1) > 1 && ch !== ' ') { const k = sc[i] - 1; s.style.marginLeft = (k * 0.3) + 'em'; s.style.marginRight = (ov + k * 0.3) + 'em'; }
    s.dataset.dy = dy[i] || 0; s.dataset.rot = rot[i] || 0; s.dataset.sc = sc[i] || 1;
    s.style.transform = `translateY(${dy[i] || 0}em) rotate(${rot[i] || 0}deg) scale(${sc[i] || 1})`; s.style.transformOrigin = '50% 80%'; s.style.zIndex = i; s.dataset.ch = ch; w.appendChild(s); spans.push(s)
  });
  card.appendChild(w); return { w, spans, size, family, weight, mk };
}
function glyph(card, o, i) {
  const cr = card.getBoundingClientRect(), s = o.spans[i];
  const base = o.mk.getBoundingClientRect().bottom - cr.top;
  const m = ink(s.dataset.ch, `${o.weight} ${o.size}px ${o.family}`);
  const left = s.offsetLeft + o.w.offsetLeft, sw = s.offsetWidth, top = s.offsetTop + o.w.offsetTop, sh = s.offsetHeight;
  return { l: left + m.l, r: left + m.r, top: base - m.a, bot: base + m.d, base, ox: left + sw * 0.5, oy: top + sh * 0.8, dy: +s.dataset.dy * o.size, rot: +s.dataset.rot, sc: +s.dataset.sc };
}
function addSvg(card, inner) { const d = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); d.setAttribute('width', card.clientWidth); d.setAttribute('height', card.clientHeight); d.style.cssText = 'position:absolute;left:0;top:0;overflow:visible;z-index:50;pointer-events:none'; d.innerHTML = inner; card.appendChild(d); return d }
// mắt ∧ + má hồng, vẽ trong khung chưa biến đổi của chữ rồi áp cùng transform với chữ
// halo: màu viền sticker quanh mắt (thường = màu nền), haloW: độ dày viền mỗi bên (px)
function face(card, g, { color, blush, sw, spread = .56, ew = .34, lift = .26, bdx = .62, brx = .12, by = .32, halo = null, haloW = 0 }) {
  const W = g.r - g.l, h = g.bot - g.top, cx = (g.l + g.r) / 2;
  const eW = W * ew, eH = eW * 0.55, yC = g.top - h * lift;
  let p = ''; [cx - W * spread / 2, cx + W * spread / 2].forEach(x => { p += `<path d="M${x - eW * 0.46},${yC + eH * 0.62} L${x},${yC - eH * 0.62} L${x + eW * 0.46},${yC + eH * 0.62}"/>` });
  let bl = ''; if (blush) [cx - W * bdx, cx + W * bdx].forEach(x => bl += `<ellipse cx="${x}" cy="${g.top + h * by}" rx="${W * brx}" ry="${W * brx * 0.58}" fill="${blush}"/>`);
  const T = `translate(${g.ox},${g.oy + g.dy}) rotate(${g.rot}) scale(${g.sc}) translate(${-g.ox},${-g.oy})`;
  const hl = halo ? `<g fill="none" stroke="${halo}" stroke-width="${(sw + 2 * haloW) / g.sc}" stroke-linecap="round" stroke-linejoin="round">${p}</g>` : '';
  addSvg(card, `<g transform="${T}">${bl}${hl}<g fill="none" stroke="${color}" stroke-width="${sw / g.sc}" stroke-linecap="round" stroke-linejoin="round">${p}</g></g>`);
}
function sbox(g) { const sc = g.sc || 1; return { ...g, l: g.ox + (g.l - g.ox) * sc, r: g.ox + (g.r - g.ox) * sc, top: g.oy + (g.top - g.oy) * sc + g.dy, bot: g.oy + (g.bot - g.oy) * sc + g.dy, base: g.oy + (g.base - g.oy) * sc + g.dy, dy: 0, sc: 1 } }
function flat(card, text, x, y, size, color) { const d = document.createElement('div'); d.className = 'flat'; d.textContent = text; d.style.cssText = `position:absolute;left:${x}px;top:${y}px;font-family:Fredoka;font-weight:600;font-size:${size}px;line-height:1.2;letter-spacing:.14em;color:${color};white-space:nowrap;z-index:60`; card.appendChild(d); return d }
function stage(card) { const d = document.createElement('div'); d.className = 'stage'; d.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;transform-origin:50% 50%'; card.appendChild(d); return d }
function shape(card, cx, cy, w, h, r, fill) { const d = document.createElement('div'); d.className = 'shape'; d.style.cssText = `position:absolute;left:${cx - w / 2}px;top:${cy - h / 2}px;width:${w}px;height:${h}px;border-radius:${r}px;background:${fill};z-index:0`; card.appendChild(d); return d }
function centerXY(card, o, dx = 0, dy = 0) { const cr = card.getBoundingClientRect(), r = o.w.getBoundingClientRect(); o.w.style.left = (parseFloat(o.w.style.left) + (cr.left + cr.width / 2 - (r.left + r.width / 2)) + dx) + 'px'; o.w.style.top = (parseFloat(o.w.style.top) + (cr.top + cr.height / 2 - (r.top + r.height / 2)) + dy) + 'px' }

// Hộp bao phần mực thật (chữ, mắt, má, chữ phụ) của một stage, theo toạ độ màn hình
function inkBox(st) {
  let l = 1e9, t = 1e9, r = -1e9, b = -1e9;
  const add = R => { if (R.width > 0 && R.height > 0) { l = Math.min(l, R.left); t = Math.min(t, R.top); r = Math.max(r, R.right); b = Math.max(b, R.bottom) } };
  st.querySelectorAll('.word').forEach(w => w.querySelectorAll('.l').forEach(s => {
    if (!s.textContent) return; const o = w._o; const i = o.spans.indexOf(s); const g = sbox(glyph(st, o, i)); const cr = st.getBoundingClientRect();
    add({ left: g.l + cr.left, right: g.r + cr.left, top: g.top + cr.top, bottom: g.bot + cr.top, width: 1, height: 1 });
  }));
  st.querySelectorAll('path,ellipse,.flat,.shape').forEach(e => {
    if (e.classList && e.classList.contains('flat')) { const R = e.getBoundingClientRect(); const fs = parseFloat(e.style.fontSize); add({ left: R.left, right: R.right - fs * .14, top: R.top + fs * .28, bottom: R.bottom - fs * .2, width: 1, height: 1 }); }
    else { const R = e.getBoundingClientRect(); const g = e.closest('g[stroke-width]'); const pd = (e.tagName === 'path' && g) ? parseFloat(g.getAttribute('stroke-width')) / 2 * (R.width / (e.getBBox().width || 1) || 1) : 0; add({ left: R.left - pd, right: R.right + pd, top: R.top - pd, bottom: R.bottom + pd, width: 1, height: 1 }) }
  });
  return { l, t, r, b, w: r - l, h: b - t };
}
// dời cả stage để phần mực nằm giữa thẻ
function fit(card, st, dx = 0, dy = 0) {
  st.style.transform = ''; const B = inkBox(st), cr = card.getBoundingClientRect();
  st.style.transform = `translate(${cr.left + cr.width / 2 - (B.l + B.r) / 2 + dx}px,${cr.top + cr.height / 2 - (B.t + B.b) / 2 + dy}px)`;
}
function track(o) { o.w._o = o; return o }

// ===== Các biến thể logo. s = cỡ chữ "Hustle" (px). =====
// Logo ngang (logo chính)
function logoH(card, s, { col = C.red, bg = C.butter, blush = C.blushL, face: hasFace = true } = {}) {
  const st = stage(card);
  const o = track(word(st, 'Hustle up', { size: s, family: 'Grandstander', weight: 900, color: col, bg, dy: [0, 0, 0, 0, 0, 0, 0, -.03, -.08], sc: [1.2, 1, 1, 1, 1, 1, 1, 1.2, 1.2], rot: [0, 0, 0, 0, 0, 0, 0, -6, -6] }));
  if (hasFace) face(st, glyph(st, o, 7), { color: col, blush, sw: s * 0.1, spread: .56, ew: .29, lift: .25, bdx: .3, brx: .11, by: .5 });
  const g = sbox(glyph(st, o, 0)); flat(st, 'study cafe', g.l + s * 0.017, g.top - s * 0.367, s * 0.225, col);
  fit(card, st); return { st, o };
}
// Logo dọc
function logoV(card, s, { col = C.red, bg = C.butter, blush = C.blushL } = {}) {
  const st = stage(card);
  const h = track(word(st, 'Hustle', { size: s, family: 'Grandstander', weight: 900, color: col, bg, sc: [1.2, 1, 1, 1, 1, 1] }));
  const u = track(word(st, 'up', { size: s * 1.827, family: 'Grandstander', weight: 900, color: col, bg, rot: [-6, -6], dy: [0, -.04] }));
  const hr = h.w.getBoundingClientRect(), ur = u.w.getBoundingClientRect(), cr = st.getBoundingClientRect();
  u.w.style.left = (hr.left - cr.left + hr.width / 2 - ur.width / 2 + s * 0.077) + 'px';
  u.w.style.top = (hr.bottom - cr.top + s * 0.058) + 'px';
  face(st, glyph(st, u, 0), { color: col, blush, sw: s * 0.144, spread: .56, ew: .29, lift: .25, bdx: .3, brx: .11, by: .5 });
  const g = sbox(glyph(st, h, 0)); flat(st, 'study cafe', g.l + s * 0.02, g.top - s * 0.385, s * 0.23, col);
  fit(card, st); return { st, o: h };
}
// Biểu tượng "Hu" (phương án A, chọn 09/11/2026): H đứng thẳng, "u" nghiêng −6° đè lên chân H
// như hai miếng sticker dán chồng. Hai mắt ∧ có viền cùng màu nền để tách khỏi chữ H.
function markHu(card, size, { col = C.red, bg = C.butter, blush = C.blushL, simple = false, plate = null, plateR = 0.26, plateSize = 1.95 } = {}) {
  const st = stage(card); const ground = plate || bg;
  if (plate) { const cr = card.getBoundingClientRect(); const P = size * plateSize; shape(st, cr.width / 2, cr.height / 2, P, P, P * plateR, plate); }
  const o = track(word(st, 'Hu', { size, family: 'Grandstander', weight: 900, color: col, bg: ground, rot: [0, -6], dy: [0, -.02], sc: [1, 1.12], ov: -.14 }));
  o.spans[1].style.marginLeft = '.03em';
  if (plate) centerXY(st, o, size * .02, size * .12);
  face(st, glyph(st, o, 1), { color: col, blush: simple ? null : blush, sw: size * (simple ? .095 : .07), spread: .56, ew: simple ? .38 : .31, lift: .25, bdx: .3, brx: .11, by: .5, halo: ground, haloW: Math.max(2.5, size * 0.028) * (simple ? .7 : 1) });
  if (!plate) fit(card, st);
  return { st, o };
}
// Biểu tượng phụ: gương mặt chữ "u"
function markU(card, size, { col = C.cream, bg = C.red, blush = C.blushR, plate = C.red, plateSize = 1.4 } = {}) {
  const st = stage(card); const cr = card.getBoundingClientRect();
  if (plate) shape(st, cr.width / 2, cr.height / 2, size * plateSize, size * plateSize, size * plateSize / 2, plate);
  const o = track(word(st, 'u', { size, family: 'Grandstander', weight: 900, color: col, bg }));
  centerXY(st, o, 0, size * 0.147);
  face(st, glyph(st, o, 0), { color: col, blush, sw: size * 0.1, spread: .56, ew: .29, lift: .25, bdx: .3, brx: .11, by: .5 });
  return { st, o };
}
function fontsReady() { return Promise.all(['900 80px Grandstander', '600 20px Fredoka', '400 16px Nunito', '800 16px Nunito'].map(f => document.fonts.load(f))).then(() => document.fonts.ready) }
