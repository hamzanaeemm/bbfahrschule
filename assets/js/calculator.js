/* ============================================================================
   BBFahrschule — Kostenrechner
   ----------------------------------------------------------------------------
   Unverbindliche Schätzung. Rechnet getrennt nach
     A) Leistungen der Fahrschule   B) Fremdkosten (TÜV/DEKRA, Behörde, Arzt)
   Alle Beträge stammen aus BB_CONFIG.pricing — nichts ist hier fest verdrahtet.
   ========================================================================== */
(function (w, d) {
  'use strict';

  var CFG = w.BB_CONFIG || {};
  var T   = w.BBi18n;
  var P   = CFG.pricing || {};
  var $   = function (s, r) { return (r || d).querySelector(s); };

  var host = null;

  /* Zustand — wird bei Sprachwechsel bewahrt. */
  var S = {
    cls: 'B',
    lessons: null,        // null = Vorgabewert der Klasse
    schalt: true,         // B197: Schaltkompetenz-Nachweis
    firstLicence: true,   // erste Fahrerlaubnis?
    sehtest: true,
    ersteHilfe: true,
    passbild: true,
    antrag: true,
    intensiv: false,
    retryBuffer: false
  };

  function cls(id) {
    return (CFG.classes || []).filter(function (c) { return c.id === (id || S.cls); })[0]
        || (CFG.classes || [])[0];
  }
  function specialCount(c) {
    var s = c.special || {}, n = 0;
    Object.keys(s).forEach(function (k) { n += s[k] || 0; });
    return n;
  }
  function theoryCount(c) {
    var t = c.theory || {};
    return (t.basic || 0) + (t.specific || 0);
  }

  /* ------------------------------------------------------------- Rechnung */
  function compute() {
    var c = cls(), third = P.third || {}, ex = P.extras || {};
    var school = [], other = [];
    var add = function (arr, key, amount, sub, note) {
      if (!amount) return;
      arr.push({ key: key, amount: amount, sub: !!sub, note: note });
    };

    if (c.fixedPackage) {
      add(school, 'pkg.' + c.id, ex[c.fixedPackage] || 0);
    } else {
      var lessons = S.lessons == null ? c.avgLessons : S.lessons;
      var schalt  = (c.id === 'B197' && S.schalt) ? (c.schaltLessons || 0) : 0;
      var spec    = specialCount(c);
      var theory  = theoryCount(c) > 0;

      add(school, 'row.grundbetrag', P.grundbetrag);
      if (S.firstLicence) add(school, 'row.lernmaterial', P.lernmaterial);

      if (lessons > 0)
        add(school, 'row.fahrstunden', lessons * P.fahrstunde, false,
            lessons + ' × ' + T.money(P.fahrstunde));
      if (schalt > 0)
        add(school, 'row.schaltstunden', schalt * P.fahrstunde, false,
            schalt + ' × ' + T.money(P.fahrstunde));
      if (spec > 0)
        add(school, 'row.sonderfahrten', spec * P.sonderfahrt, false,
            spec + ' × ' + T.money(P.sonderfahrt));

      if (c.id === 'BF17' && ex.bf17Zuschlag) add(school, 'row.bf17', ex.bf17Zuschlag);
      if (c.id === 'B197' && S.schalt && ex.schaltkompetenzB197)
        add(school, 'row.b197nachweis', ex.schaltkompetenzB197);
      if (S.intensiv && ex.intensivZuschlag) add(school, 'row.intensiv', ex.intensivZuschlag);

      if (theory) add(school, 'row.vorstellungTheorie', P.vorstellungTheorie);
      add(school, 'row.vorstellungPraxis', P.vorstellungPraxis);

      if (theory) add(other, 'row.pruefTheorie', third.pruefgebuehrTheorie);
      add(other, 'row.pruefPraxis', c.examFee || third.pruefgebuehrPraxis);

      if (S.retryBuffer) {
        add(school, 'row.retrySchool', P.vorstellungPraxis, true);
        add(other,  'row.retryFee',   c.examFee || third.pruefgebuehrPraxis, true);
      }
    }

    if (S.firstLicence) {
      if (S.sehtest)    add(other, 'row.sehtest',   third.sehtest);
      if (S.ersteHilfe) add(other, 'row.ersteHilfe', third.ersteHilfe);
      if (S.passbild)   add(other, 'row.passbild',  third.passbild);
      if (S.antrag)     add(other, 'row.antrag',    third.antragsgebuehr);
    }

    var sum = function (a) { return a.reduce(function (t, r) { return t + r.amount; }, 0); };
    var sSchool = sum(school), sOther = sum(other), total = sSchool + sOther;
    var spread  = typeof P.estimateSpread === 'number' ? P.estimateSpread : 0.1;

    return {
      school: school, other: other,
      sumSchool: sSchool, sumOther: sOther, total: total,
      low: total * (1 - spread), high: total * (1 + spread)
    };
  }

  /* ------------------------------------------------------------- Bedienung */
  function renderControls() {
    var c = cls();
    var chips = $('[data-calc-classes]', host);
    if (chips) {
      chips.innerHTML = (CFG.classes || []).map(function (k) {
        return '<button type="button" class="chip" role="button" data-cls="' + k.id + '" ' +
               'aria-pressed="' + (k.id === S.cls) + '">' + T.t('class.' + k.id + '.short') + '</button>';
      }).join('');
    }

    var slider = $('[data-calc-lessons]', host);
    var wrapEl = $('[data-calc-lessons-group]', host);
    if (slider && wrapEl) {
      var fixed = !!c.fixedPackage || c.maxLessons === 0;
      wrapEl.hidden = fixed;
      if (!fixed) {
        slider.min = c.minLessons; slider.max = c.maxLessons;
        var val = S.lessons == null ? c.avgLessons : Math.min(Math.max(S.lessons, c.minLessons), c.maxLessons);
        slider.value = val;
        paintSlider(slider);
        var out = $('[data-calc-lessons-val]', host);
        if (out) out.textContent = val;
        var hint = $('[data-calc-lessons-hint]', host);
        if (hint) hint.textContent = T.t('calc.avgHint', { n: c.avgLessons });
      }
    }

    var sg = $('[data-calc-schalt-group]', host);
    if (sg) sg.hidden = (S.cls !== 'B197');

    // Erst-Fahrerlaubnis steuert die behördlichen Nebenkosten
    ['sehtest', 'ersteHilfe', 'passbild', 'antrag'].forEach(function (k) {
      var row = $('[data-calc-row="' + k + '"]', host);
      if (row) row.hidden = !S.firstLicence;
    });

    Object.keys(S).forEach(function (k) {
      var inp = $('[data-calc-toggle="' + k + '"]', host);
      if (inp) inp.checked = !!S[k];
    });

    var info = $('[data-calc-info]', host);
    if (info) {
      var bits = [];
      bits.push(T.t('calc.info.age', { n: c.minAge }));
      if (theoryCount(c)) bits.push(T.t('calc.info.theory', { n: theoryCount(c) }));
      if (specialCount(c)) bits.push(T.t('calc.info.special', { n: specialCount(c) }));
      if (c.noExam) bits.push(T.t('calc.info.noExam'));
      info.innerHTML = bits.map(function (b) { return '<span>' + b + '</span>'; }).join('');
    }
  }

  function paintSlider(el) {
    var min = +el.min, max = +el.max, v = +el.value;
    var pct = max > min ? ((v - min) / (max - min)) * 100 : 0;
    el.style.setProperty('--fill', pct + '%');
  }

  /* ------------------------------------------------------------- Ergebnis */
  function renderResult() {
    var r = compute();
    var rows = $('[data-calc-rows]', host);

    var line = function (item) {
      return '<div class="rrow' + (item.sub ? ' rrow--sub' : '') + '">' +
             '<span>' + T.t('calc.' + item.key) +
             (item.note ? ' <em style="opacity:.6;font-style:normal">(' + item.note + ')</em>' : '') +
             '</span><b>' + T.money(item.amount) + '</b></div>';
    };

    var html = '';
    if (r.school.length) {
      html += '<h4>' + T.t('calc.groupSchool') + '</h4>' + r.school.map(line).join('');
      html += '<div class="rrow rrow--total"><span>' + T.t('calc.subtotalSchool') +
              '</span><b>' + T.money(r.sumSchool) + '</b></div>';
    }
    if (r.other.length) {
      html += '<h4>' + T.t('calc.groupThird') + '</h4>' + r.other.map(line).join('');
      html += '<div class="rrow rrow--total"><span>' + T.t('calc.subtotalThird') +
              '</span><b>' + T.money(r.sumOther) + '</b></div>';
    }
    if (rows) rows.innerHTML = html;

    var sumEl = $('[data-calc-sum]', host);
    if (sumEl) sumEl.textContent = T.money(r.total);
    var rangeEl = $('[data-calc-range]', host);
    if (rangeEl) rangeEl.textContent = T.t('calc.range', {
      low: T.money(Math.floor(r.low / 10) * 10), high: T.money(Math.ceil(r.high / 10) * 10)
    });
  }

  function renderAll() { renderControls(); renderResult(); }

  /* ----------------------------------------------------------------- Boot */
  function bind() {
    host.addEventListener('click', function (e) {
      var chip = e.target.closest('[data-cls]');
      if (chip) {
        S.cls = chip.dataset.cls; S.lessons = null;
        renderAll();
        return;
      }
      if (e.target.closest('[data-calc-reset]')) {
        S = { cls: 'B', lessons: null, schalt: true, firstLicence: true, sehtest: true,
              ersteHilfe: true, passbild: true, antrag: true, intensiv: false, retryBuffer: false };
        renderAll();
      }
      if (e.target.closest('[data-calc-print]')) w.print();
    });

    host.addEventListener('input', function (e) {
      var sl = e.target.closest('[data-calc-lessons]');
      if (sl) {
        S.lessons = +sl.value;
        paintSlider(sl);
        var out = $('[data-calc-lessons-val]', host);
        if (out) out.textContent = sl.value;
        renderResult();
        return;
      }
      var tg = e.target.closest('[data-calc-toggle]');
      if (tg) {
        S[tg.dataset.calcToggle] = tg.checked;
        renderAll();
      }
    });

    d.addEventListener('bb:langchange', renderAll);
  }

  d.addEventListener('DOMContentLoaded', function () {
    host = $('[data-calculator]');
    if (!host || !T) return;
    // Vorauswahl über ?klasse=B möglich
    try {
      var q = new URL(w.location.href).searchParams.get('klasse');
      if (q && cls(q)) S.cls = cls(q).id;
    } catch (e) {}
    bind();
    // Nach dem Laden der Sprachdatei erstmalig zeichnen
    if (T.has(T.detect())) renderAll();
    d.addEventListener('bb:langchange', function once() {
      renderAll(); d.removeEventListener('bb:langchange', once);
    });
  });
})(window, document);
