(function () {
  'use strict';

  var QUESTIONS = window.QUESTIONS || [];
  var DOMAINS = {
    1: { code: 'D1', name: 'Conceptos de la nube', weight: 24 },
    2: { code: 'D2', name: 'Seguridad y cumplimiento', weight: 30 },
    3: { code: 'D3', name: 'Tecnología y servicios', weight: 34 },
    4: { code: 'D4', name: 'Facturación, precios y soporte', weight: 12 }
  };
  var LETTERS = 'ABCDEFGH';
  var app = document.getElementById('app');
  var state = null;
  var timerId = null;

  /* ---------- utilidades ---------- */

  function h(tag, props) {
    var node = document.createElement(tag);
    props = props || {};
    Object.keys(props).forEach(function (k) {
      var v = props[k];
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else if (k.slice(0, 2) === 'on') node.addEventListener(k.slice(2), v);
      else if (v !== false && v !== null && v !== undefined) node.setAttribute(k, v === true ? '' : v);
    });
    function add(kid) {
      if (kid === null || kid === undefined || kid === false) return;
      if (Array.isArray(kid)) { kid.forEach(add); return; }
      node.appendChild(typeof kid === 'string' ? document.createTextNode(kid) : kid);
    }
    for (var i = 2; i < arguments.length; i++) add(arguments[i]);
    return node;
  }

  function shuffle(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function clear() {
    stopTimer();
    while (app.firstChild) app.removeChild(app.firstChild);
  }

  function stopTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }

  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    return a.every(function (x) { return b.indexOf(x) !== -1; });
  }

  function formatTime(sec) {
    sec = Math.max(0, sec);
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  /* ---------- selección de preguntas ---------- */

  function byDomain(d) {
    return QUESTIONS.filter(function (q) { return q.domain === d; });
  }

  function pickQuestions(domain, count) {
    if (domain !== 'mix') {
      return shuffle(byDomain(Number(domain))).slice(0, count);
    }
    var picked = [];
    var ds = [1, 2, 3, 4];
    var counts = {};
    var used = 0;
    ds.forEach(function (d) {
      var avail = byDomain(d).length;
      counts[d] = Math.min(avail, Math.round(count * DOMAINS[d].weight / 100));
      used += counts[d];
    });
    // ajustar para llegar a `count` si hay preguntas disponibles
    var guard = 0;
    while (used < count && guard < 1000) {
      guard++;
      var moved = false;
      ds.slice().sort(function (a, b) { return DOMAINS[b].weight - DOMAINS[a].weight; }).forEach(function (d) {
        if (used < count && counts[d] < byDomain(d).length) { counts[d]++; used++; moved = true; }
      });
      if (!moved) break;
    }
    while (used > count) {
      var biggest = ds.slice().sort(function (a, b) { return counts[b] - counts[a]; })[0];
      counts[biggest]--; used--;
    }
    ds.forEach(function (d) {
      picked = picked.concat(shuffle(byDomain(d)).slice(0, counts[d]));
    });
    return shuffle(picked);
  }

  function makeItems(questions) {
    return questions.map(function (q) {
      var order = shuffle(q.options.map(function (_, i) { return i; }));
      return { q: q, order: order, selected: [], checked: false, flagged: false };
    });
  }

  /* ---------- pantalla de inicio ---------- */

  function renderSetup() {
    clear();
    state = null;
    var total = QUESTIONS.length;

    var modeGroup = h('fieldset', null,
      h('legend', { text: 'Modo' }),
      radio('mode', 'practice', 'Práctica: ves la respuesta y la explicación después de cada pregunta', true),
      radio('mode', 'exam', 'Examen: sin pistas; el resultado se muestra al final', false)
    );

    var domSelect = h('select', { id: 'domain' },
      h('option', { value: 'mix', text: 'Mixto (con el peso del examen)' }),
      h('option', { value: '1', text: 'D1 · ' + DOMAINS[1].name + ' (' + byDomain(1).length + ')' }),
      h('option', { value: '2', text: 'D2 · ' + DOMAINS[2].name + ' (' + byDomain(2).length + ')' }),
      h('option', { value: '3', text: 'D3 · ' + DOMAINS[3].name + ' (' + byDomain(3).length + ')' }),
      h('option', { value: '4', text: 'D4 · ' + DOMAINS[4].name + ' (' + byDomain(4).length + ')' })
    );

    var countSelect = h('select', { id: 'count' });
    [10, 20, 30].forEach(function (n) {
      if (n < total) countSelect.appendChild(h('option', { value: String(n), text: n + ' preguntas' }));
    });
    countSelect.appendChild(h('option', { value: 'all', text: 'Todas las disponibles' }));

    var timerBox = h('input', { type: 'checkbox', id: 'timer' });
    var timerLabel = h('label', { class: 'choice', for: 'timer' }, timerBox,
      h('span', { text: 'Cronómetro en modo examen (aprox. 1 min 20 s por pregunta)' }));

    var start = h('button', { class: 'primary', type: 'button', text: 'Comenzar',
      onclick: function () {
        var mode = document.querySelector('input[name="mode"]:checked').value;
        var domain = domSelect.value;
        var avail = domain === 'mix' ? total : byDomain(Number(domain)).length;
        var count = countSelect.value === 'all' ? avail : Math.min(Number(countSelect.value), avail);
        var questions = pickQuestions(domain, count);
        if (!questions.length) return;
        startRun(questions, mode, mode === 'exam' && timerBox.checked);
      } });

    app.appendChild(h('section', { class: 'card' },
      h('h2', { text: 'Simulacro de examen' }),
      h('p', { class: 'muted', text: '65 preguntas mixtas con el peso de los 4 dominios, sin pistas y con cronómetro de 90 minutos, como el examen real.' }),
      h('div', { class: 'row' }, h('span', { class: 'muted', text: 'Preguntas distintas en cada intento' }),
        h('button', { class: 'primary', type: 'button', text: 'Iniciar simulacro (65)',
          onclick: function () {
            var qs = pickQuestions('mix', Math.min(65, total));
            if (!qs.length) return;
            startRun(qs, 'exam', true, 90 * 60);
          } }))
    ));

    app.appendChild(h('section', { class: 'card' },
      h('h2', { text: 'Configura tu práctica' }),
      modeGroup,
      h('fieldset', null, h('legend', { text: 'Dominio' }), domSelect),
      h('fieldset', null, h('legend', { text: 'Cantidad' }), countSelect),
      timerLabel,
      h('div', { class: 'row' }, h('span', { class: 'muted', text: total + ' preguntas en el banco' }), start)
    ));

    app.appendChild(h('div', { class: 'notice',
      text: 'Las preguntas de «selecciona DOS» indican cuántas opciones elegir. Para acertar, debes marcar exactamente las correctas.' }));
  }

  function radio(name, value, label, checked) {
    var input = h('input', { type: 'radio', name: name, value: value, checked: checked });
    return h('label', { class: 'choice' }, input, h('span', { text: label }));
  }

  /* ---------- ejecución ---------- */

  function startRun(questions, mode, useTimer, seconds) {
    state = {
      mode: mode,
      items: makeItems(questions),
      idx: 0,
      useTimer: useTimer,
      endAt: useTimer ? Date.now() + (seconds || Math.round(questions.length * 80)) * 1000 : 0,
      finished: false
    };
    renderQuestion();
  }

  function renderQuestion() {
    clear();
    var s = state;
    var item = s.items[s.idx];
    var q = item.q;
    var multi = q.answer.length > 1;
    var locked = s.mode === 'practice' && item.checked;
    var pct = Math.round((s.idx + 1) / s.items.length * 100);

    var header = h('div', { class: 'row' },
      h('span', { class: 'muted', text: 'Pregunta ' + (s.idx + 1) + ' de ' + s.items.length }),
      h('span', { class: 'tag', text: DOMAINS[q.domain].code + ' · ' + DOMAINS[q.domain].name }),
      s.useTimer ? h('span', { class: 'timer', id: 'timer-out', 'aria-live': 'off', text: '' }) : null
    );

    var list = h('div', { role: multi ? 'group' : 'radiogroup', 'aria-label': 'Opciones' });
    item.order.forEach(function (origIdx, pos) {
      var isSel = item.selected.indexOf(origIdx) !== -1;
      var isAnswer = q.answer.indexOf(origIdx) !== -1;
      var cls = 'choice' + (isSel ? ' sel' : '') + (locked ? ' dis' : '');
      if (locked && isAnswer) cls += ' ok';
      if (locked && isSel && !isAnswer) cls += ' bad';
      var input = h('input', {
        type: multi ? 'checkbox' : 'radio', name: 'opt', value: String(origIdx),
        checked: isSel, disabled: locked,
        onchange: function () { onSelect(origIdx, multi); }
      });
      var mark = locked ? (isAnswer ? ' ✔ correcta' : (isSel ? ' ✘ tu respuesta' : '')) : '';
      list.appendChild(h('label', { class: cls },
        input,
        h('span', { text: LETTERS[pos] + '. ' + q.options[origIdx] + mark })
      ));
    });

    var nav = h('div', { class: 'row', style: 'margin-top:14px' });
    nav.appendChild(h('button', { type: 'button', text: 'Anterior', disabled: s.idx === 0,
      onclick: function () { if (s.idx > 0) { s.idx--; renderQuestion(); } } }));

    if (s.mode === 'exam') {
      nav.appendChild(h('button', { type: 'button', text: item.flagged ? 'Quitar marca' : 'Marcar para revisar',
        onclick: function () { item.flagged = !item.flagged; renderQuestion(); } }));
    }

    var last = s.idx === s.items.length - 1;
    if (s.mode === 'practice' && !item.checked) {
      nav.appendChild(h('button', { type: 'button', class: 'primary', text: 'Comprobar',
        disabled: item.selected.length === 0,
        onclick: function () { item.checked = true; renderQuestion(); } }));
    } else if (last) {
      nav.appendChild(h('button', { type: 'button', class: 'primary', text: 'Finalizar',
        onclick: confirmFinish }));
    } else {
      nav.appendChild(h('button', { type: 'button', class: 'primary', text: 'Siguiente',
        onclick: function () { s.idx++; renderQuestion(); } }));
    }

    var card = h('section', { class: 'card' },
      header,
      h('div', { class: 'bar', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': '100', 'aria-valuenow': String(pct) },
        h('span', { style: 'width:' + pct + '%' })),
      h('p', { class: 'q-text', text: q.q }),
      multi ? h('p', { class: 'muted', text: 'Selecciona ' + q.answer.length + ' opciones.' }) : null,
      list,
      locked ? explanation(q) : null,
      nav
    );
    app.appendChild(card);

    if (s.mode === 'exam') app.appendChild(h('div', { class: 'row' },
      h('button', { type: 'button', text: 'Terminar examen ahora', onclick: confirmFinish }),
      h('span', { class: 'muted', text: unanswered() + ' sin responder · ' + flaggedCount() + ' marcadas' })
    ));

    if (s.useTimer) { tick(); timerId = setInterval(tick, 1000); }
    var firstInput = app.querySelector('input[name="opt"]');
    if (firstInput && !locked) firstInput.focus({ preventScroll: true });
  }

  function explanation(q) {
    return h('div', { class: 'explain' },
      h('p', { text: q.explain }),
      h('p', { class: 'muted' },
        'Referencia: ',
        h('a', { href: q.ref, target: '_blank', rel: 'noopener noreferrer', text: q.ref })
      )
    );
  }

  function onSelect(origIdx, multi) {
    var item = state.items[state.idx];
    if (multi) {
      var at = item.selected.indexOf(origIdx);
      if (at === -1) item.selected.push(origIdx); else item.selected.splice(at, 1);
    } else {
      item.selected = [origIdx];
    }
    // actualizar estilos y botón sin perder el foco
    var labels = app.querySelectorAll('label.choice');
    Array.prototype.forEach.call(labels, function (lab) {
      var inp = lab.querySelector('input');
      if (!inp) return;
      lab.classList.toggle('sel', item.selected.indexOf(Number(inp.value)) !== -1);
    });
    var check = Array.prototype.filter.call(app.querySelectorAll('button.primary'), function (b) { return b.textContent === 'Comprobar'; })[0];
    if (check) check.disabled = item.selected.length === 0;
  }

  function unanswered() {
    return state.items.filter(function (it) { return it.selected.length === 0; }).length;
  }
  function flaggedCount() {
    return state.items.filter(function (it) { return it.flagged; }).length;
  }

  function tick() {
    var left = Math.round((state.endAt - Date.now()) / 1000);
    var out = document.getElementById('timer-out');
    if (out) {
      out.textContent = '⏱ ' + formatTime(left);
      out.className = 'timer' + (left <= 60 ? ' low' : '');
    }
    if (left <= 0) { stopTimer(); finish(); }
  }

  function confirmFinish() {
    var pending = unanswered();
    if (pending > 0 && !window.confirm('Tienes ' + pending + ' pregunta(s) sin responder. ¿Terminar de todos modos?')) return;
    finish();
  }

  /* ---------- resultados ---------- */

  function isCorrect(item) {
    return sameSet(item.selected, item.q.answer);
  }

  function finish() {
    stopTimer();
    state.finished = true;
    renderResults();
  }

  function renderResults() {
    clear();
    var items = state.items;
    var correct = items.filter(isCorrect).length;
    var pct = Math.round(correct / items.length * 100);

    var perDomain = {};
    items.forEach(function (it) {
      var d = it.q.domain;
      perDomain[d] = perDomain[d] || { ok: 0, total: 0 };
      perDomain[d].total++;
      if (isCorrect(it)) perDomain[d].ok++;
    });

    var rows = Object.keys(perDomain).sort().map(function (d) {
      var r = perDomain[d];
      return h('tr', null,
        h('td', { text: DOMAINS[d].code + ' · ' + DOMAINS[d].name }),
        h('td', { text: r.ok + ' / ' + r.total }),
        h('td', { text: Math.round(r.ok / r.total * 100) + ' %' })
      );
    });

    var wrong = items.filter(function (it) { return !isCorrect(it); });

    var summary = h('section', { class: 'card' },
      h('h2', { text: 'Resultado' }),
      h('div', { class: 'score', text: correct + ' / ' + items.length + ' (' + pct + ' %)' }),
      h('p', { class: 'muted', text: 'El examen real usa puntaje escalado (aprobar es 700 de 1000), así que este porcentaje es solo una referencia.' }),
      h('table', null,
        h('thead', null, h('tr', null, h('th', { text: 'Dominio' }), h('th', { text: 'Aciertos' }), h('th', { text: '%' }))),
        h('tbody', null, rows)
      ),
      h('div', { class: 'row' },
        h('button', { type: 'button', text: 'Volver al inicio', onclick: renderSetup }),
        wrong.length ? h('button', { type: 'button', class: 'primary', text: 'Repetir solo los fallos (' + wrong.length + ')',
          onclick: function () { startRun(wrong.map(function (w) { return w.q; }), state.mode === 'exam' ? 'practice' : state.mode, false); } }) : null
      )
    );
    app.appendChild(summary);

    var review = h('section', { class: 'card' }, h('h2', { text: wrong.length ? 'Preguntas a repasar' : 'Sin fallos' }));
    if (!wrong.length) review.appendChild(h('p', { text: 'Respondiste todo correctamente. Intenta otro dominio o una tanda más grande.' }));
    wrong.forEach(function (it) {
      var q = it.q;
      var mine = it.selected.length
        ? it.selected.map(function (i) { return q.options[i]; }).join(' · ')
        : '(sin responder)';
      var right = q.answer.map(function (i) { return q.options[i]; }).join(' · ');
      review.appendChild(h('div', { class: 'review-item' },
        h('span', { class: 'tag', text: q.id }),
        h('p', { class: 'q-text', text: q.q }),
        h('p', null, h('strong', { text: 'Tu respuesta: ' }), mine),
        h('p', null, h('strong', { text: 'Correcta: ' }), right),
        explanation(q)
      ));
    });
    app.appendChild(review);
    window.scrollTo(0, 0);
  }

  /* ---------- arranque ---------- */

  if (!QUESTIONS.length) {
    app.appendChild(h('div', { class: 'notice', text: 'No se encontró el banco de preguntas (questions.js).' }));
  } else {
    renderSetup();
  }
})();
