/* ============================================================================
   BBFahrschule — app.js  (Interaktion & Seitenlogik)
   ========================================================================== */
(function (w, d) {
  'use strict';

  var CFG = w.BB_CONFIG || {};
  var T   = w.BBi18n;
  var $   = function (s, r) { return (r || d).querySelector(s); };
  var $$  = function (s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); };

  var ICON = {
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
  };

  /* --------------------------------------------------------- Sprachauswahl */
  function initLang() {
    var box = $('.lang'); if (!box) return;
    var btn = $('.lang__btn', box), menu = $('.lang__menu', box);
    if (!btn || !menu) return;

    var avail = (CFG.i18n && CFG.i18n.available) || ['de'];
    menu.innerHTML = avail.map(function (c) {
      var m = T.meta[c] || { name: c.toUpperCase() };
      return '<button type="button" role="option" data-lang="' + c + '" aria-selected="false" ' +
             'lang="' + c + '" dir="' + (m.dir || 'ltr') + '">' +
             '<span class="lang__code" aria-hidden="true">' + c.toUpperCase() + '</span>' +
             '<span>' + m.name + '</span></button>';
    }).join('');

    function paint() {
      var m = T.meta[T.lang] || {};
      var l = $('[data-lang-label]', btn);
      if (l) l.textContent = T.lang.toUpperCase();
      btn.setAttribute('aria-label', (T.t('a11y.langSwitch') || 'Sprache') + ': ' + (m.name || T.lang));
      $$('button', menu).forEach(function (b) {
        b.setAttribute('aria-selected', String(b.dataset.lang === T.lang));
      });
    }

    function close() { menu.dataset.open = 'false'; btn.setAttribute('aria-expanded', 'false'); }
    function open()  { menu.dataset.open = 'true';  btn.setAttribute('aria-expanded', 'true'); }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.dataset.open === 'true' ? close() : open();
    });
    menu.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-lang]'); if (!b) return;
      T.set(b.dataset.lang); close(); btn.focus();
    });
    d.addEventListener('click', function (e) { if (!box.contains(e.target)) close(); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    d.addEventListener('bb:langchange', paint);
    paint();
  }

  /* ------------------------------------------------------------ Navigation */
  function initNav() {
    var header = $('.header');
    if (header) {
      var onScroll = function () {
        header.classList.toggle('header--scrolled', w.scrollY > 8);
      };
      w.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    }

    var burger = $('.burger'), mob = $('.mobilenav');
    if (burger && mob) {
      burger.addEventListener('click', function () {
        var open = mob.dataset.open !== 'true';
        mob.dataset.open = String(open);
        burger.setAttribute('aria-expanded', String(open));
        d.body.dataset.navopen = String(open);
      });
      $$('a', mob).forEach(function (a) {
        a.addEventListener('click', function () {
          mob.dataset.open = 'false'; burger.setAttribute('aria-expanded', 'false');
          d.body.dataset.navopen = 'false';
        });
      });
      w.addEventListener('resize', function () {
        if (w.innerWidth > 1060 && mob.dataset.open === 'true') {
          mob.dataset.open = 'false'; burger.setAttribute('aria-expanded', 'false');
          d.body.dataset.navopen = 'false';
        }
      });
    }

    // aktive Seite markieren
    var here = location.pathname.split('/').pop() || 'index.html';
    $$('.nav a, .mobilenav a').forEach(function (a) {
      var href = (a.getAttribute('href') || '').split('?')[0].split('#')[0];
      if (href && href === here) a.setAttribute('aria-current', 'page');
    });
  }

  /* ------------------------------------------------------------------ FAQ */
  function initFaq() {
    $$('.faq__q').forEach(function (q) {
      q.addEventListener('click', function () {
        var open = q.getAttribute('aria-expanded') === 'true';
        var panel = d.getElementById(q.getAttribute('aria-controls'));
        q.setAttribute('aria-expanded', String(!open));
        if (panel) panel.dataset.open = String(!open);
      });
    });
  }

  /* --------------------------------------------------------- Scroll-Effekte */
  function initReveal() {
    var els = $$('.reveal'); if (!els.length) return;
    if (!('IntersectionObserver' in w) ||
        matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(function (e) { e.dataset.shown = 'true'; }); return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.dataset.shown = 'true'; io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    els.forEach(function (e) { io.observe(e); });
  }

  function initToTop() {
    var b = $('.totop'); if (!b) return;
    var on = function () { b.dataset.show = String(w.scrollY > 700); };
    w.addEventListener('scroll', on, { passive: true }); on();
    b.addEventListener('click', function () {
      w.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  }

  /* ------------------------------------------------------- Öffnungszeiten */
  var DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  function renderHours() {
    var host = $('[data-hours]'); if (!host || !CFG.hours) return;
    var today = DAYS[new Date().getDay()];
    var order = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    host.innerHTML = order.map(function (k) {
      var v = CFG.hours[k];
      var label = T.t('days.' + k);
      var val = v ? T.clean(v) : T.t('hours.closed');
      return '<li' + (k === today ? ' data-today="true"' : '') + '>' +
             '<span class="day">' + label + '</span><b>' + val + '</b></li>';
    }).join('');
  }

  /* ------------------------------------------------------- Karte (Opt-in) */
  function initMap() {
    var box = $('.mapbox'); if (!box) return;
    var btn = $('[data-map-load]', box);
    if (!btn) return;
    btn.addEventListener('click', function () {
      var url = T.clean((CFG.map && CFG.map.embedUrl) || '');
      if (!url) return;
      box.innerHTML = '<iframe title="' + T.t('contact.mapTitle') + '" src="' + url +
                      '" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
      try { localStorage.setItem('bb-map-consent', '1'); } catch (e) {}
    });
    try { if (localStorage.getItem('bb-map-consent') === '1') btn.click(); } catch (e) {}
  }

  /* ------------------------------------------------------- Cookie-Banner
     Erscheint nur, wenn in config.js Analytics aktiviert wurde. Ohne Analytics
     nutzt die Seite ausschließlich technisch notwendigen lokalen Speicher. */
  function initCookie() {
    var bar = $('.cookie'); if (!bar) return;
    if (!(CFG.analytics && CFG.analytics.enabled)) { bar.remove(); return; }
    var stored;
    try { stored = localStorage.getItem('bb-consent'); } catch (e) {}
    if (stored) { if (stored === 'all') loadAnalytics(); return; }
    setTimeout(function () { bar.dataset.open = 'true'; }, 900);

    bar.addEventListener('click', function (e) {
      var b = e.target.closest('[data-consent]'); if (!b) return;
      var v = b.dataset.consent;
      try { localStorage.setItem('bb-consent', v); } catch (err) {}
      bar.dataset.open = 'false';
      if (v === 'all') loadAnalytics();
    });
  }

  function loadAnalytics() {
    var a = CFG.analytics || {};
    if (!a.enabled || !a.scriptUrl) return;
    var s = d.createElement('script');
    s.defer = true; s.src = a.scriptUrl;
    if (a.domain) s.setAttribute('data-domain', a.domain);
    d.head.appendChild(s);
  }

  /* --------------------------------------------------------- Kontaktformular */
  function initForm() {
    var form = $('#contact-form'); if (!form) return;
    var box  = $('#form-status');

    function say(type, key) {
      if (!box) return;
      box.className = 'alert alert--' + type;
      box.textContent = T.t(key);
      box.hidden = false;
      box.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var ok = true;
      $$('[required]', form).forEach(function (el) {
        var field = el.closest('.field') || el.closest('.checkrow');
        var valid = el.type === 'checkbox' ? el.checked : String(el.value).trim() !== '';
        if (valid && el.type === 'email') valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value);
        if (field) field.dataset.invalid = String(!valid);
        if (!valid && ok) { el.focus(); ok = false; }
        if (!valid) ok = false;
      });
      if (!ok) { say('err', 'form.errValidation'); return; }

      // Honeypot gegen Bots
      var hp = form.querySelector('[name="website"]');
      if (hp && hp.value) return;

      var endpoint = (CFG.form && CFG.form.endpoint) || '';
      var btn = $('[type="submit"]', form);

      if (!endpoint) {                                   // Fallback: mailto:
        var fd = new FormData(form), lines = [];
        fd.forEach(function (v, k) {
          if (k === 'website' || k === 'privacy') return;
          lines.push(T.t('form.f.' + k, {}) + ': ' + v);
        });
        var mail = T.clean(CFG.business.email);
        w.location.href = 'mailto:' + mail +
          '?subject=' + encodeURIComponent(T.t('form.mailSubject')) +
          '&body=' + encodeURIComponent(lines.join('\n'));
        say('info', 'form.mailtoFallback');
        return;
      }

      if (btn) { btn.disabled = true; btn.dataset.orig = btn.textContent; btn.textContent = T.t('form.sending'); }
      fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          form.reset(); say('ok', 'form.okSent');
          var redir = CFG.form.successRedirect;
          if (redir) setTimeout(function () { w.location.href = redir; }, 1200);
        })
        .catch(function () { say('err', 'form.errSend'); })
        .finally(function () {
          if (btn) { btn.disabled = false; btn.textContent = btn.dataset.orig || T.t('form.submit'); }
        });
    });

    form.addEventListener('input', function (e) {
      var f = e.target.closest('.field, .checkrow');
      if (f && f.dataset.invalid === 'true') f.dataset.invalid = 'false';
    });
  }

  /* ------------------------------------------- Platzhalter-Warnung (lokal) */
  function initDevWarning() {
    var local = ['localhost', '127.0.0.1', ''].indexOf(location.hostname) > -1 ||
                location.protocol === 'file:';
    if (!local) return;
    var n = T.countPlaceholders();
    if (!n) return;
    var bar = d.createElement('div');
    bar.className = 'devwarn';
    bar.innerHTML = '⚠️ <b>' + n + '</b> ' + T.t('dev.placeholders') +
                    ' <button type="button">' + T.t('dev.hide') + '</button>';
    bar.querySelector('button').addEventListener('click', function () { bar.remove(); });
    d.body.insertBefore(bar, d.body.firstChild);
  }


  /* ------------------------------------------------- Rechtstexte rendern
     Die Dokumente (Impressum, Datenschutz, AGB, Widerruf) liegen als Array
     [{h, html}] in den Sprachdateien. Hier entstehen daraus Abschnitte mit
     stabilen Ankern plus ein automatisches Inhaltsverzeichnis. */
  function initLegal() {
    var host = $('[data-legal]'); if (!host) return;
    var docKey = host.dataset.legal;

    function render() {
      var secs = T.list('legal.' + docKey + '.sections');
      if (!secs.length) return;
      host.innerHTML = secs.map(function (s, i) {
        var id = 'sec-' + (i + 1);
        return '<section id="' + id + '"><h2>' + (i + 1) + '. ' + s.h + '</h2>' + s.html + '</section>';
      }).join('');

      var toc = $('[data-legal-toc]');
      if (toc) {
        var ol = $('ol', toc);
        if (ol) ol.innerHTML = secs.map(function (s, i) {
          return '<li><a href="#sec-' + (i + 1) + '">' + s.h + '</a></li>';
        }).join('');
        var h = $('h2', toc);
        if (h) h.textContent = T.t('legal.toc');
      }
      T.apply(host);
    }

    render();
    d.addEventListener('bb:langchange', render);
  }


  /* ------------------------------------------------- Schätzpreis je Klasse
     Gleiche Logik wie im Kostenrechner, aber mit den Durchschnittswerten. */
  function estimateFor(c) {
    var P = CFG.pricing || {}, third = P.third || {}, ex = P.extras || {};
    if (c.fixedPackage) return ex[c.fixedPackage] || 0;
    var spec = 0, sp = c.special || {};
    Object.keys(sp).forEach(function (k) { spec += sp[k] || 0; });
    var theory = ((c.theory && c.theory.basic) || 0) + ((c.theory && c.theory.specific) || 0) > 0;
    var t = P.grundbetrag + P.lernmaterial
          + (c.avgLessons || 0) * P.fahrstunde
          + spec * P.sonderfahrt
          + P.vorstellungPraxis
          + (c.examFee || third.pruefgebuehrPraxis || 0);
    if (theory) t += P.vorstellungTheorie + (third.pruefgebuehrTheorie || 0);
    if (c.id === 'B197' && c.schaltLessons) t += c.schaltLessons * P.fahrstunde;
    return t;
  }

  function countSpecial(c) {
    var n = 0, sp = c.special || {};
    Object.keys(sp).forEach(function (k) { n += sp[k] || 0; });
    return n;
  }
  function countTheory(c) {
    return ((c.theory && c.theory.basic) || 0) + ((c.theory && c.theory.specific) || 0);
  }

  /* --------------------------------------------------- Klassenkarten */
  function initClassCards() {
    var compact = $('[data-classes-grid]');
    var full    = $('[data-classes-full]');
    if (!compact && !full) return;

    function meta(c) {
      var m = ['<span>' + T.t('classes.minAge', {}) + ': ' + c.minAge + '</span>'];
      if (countTheory(c))  m.push('<span>' + T.t('classes.theoryUnits',  { n: countTheory(c) })  + '</span>');
      if (countSpecial(c)) m.push('<span>' + T.t('classes.specialRides', { n: countSpecial(c) }) + '</span>');
      else if (c.noExam)   m.push('<span>' + T.t('classes.noExam') + '</span>');
      return m.join('');
    }

    function card(c, detailed) {
      var est = estimateFor(c);
      return '<article class="klass' + (c.popular ? ' klass--featured' : '') + '">' +
        (c.popular ? '<span class="klass__tag">' + T.t('classes.popular') + '</span>' : '') +
        '<div class="klass__key">' + T.t('class.' + c.id + '.short') + '</div>' +
        '<h3>' + T.t('class.' + c.id + '.name') + '</h3>' +
        '<p class="klass__desc">' + T.t('class.' + c.id + '.desc') + '</p>' +
        '<div class="klass__meta">' + meta(c) + '</div>' +
        (detailed
          ? '<p class="small muted" style="margin-block-end:1rem"><strong>' + T.t('classes.youMayDrive') +
            ':</strong> ' + T.t('class.' + c.id + '.drive') + '</p>'
          : '') +
        '<div class="klass__foot"><p class="klass__price">' +
          T.t(c.fixedPackage ? 'classes.packagePrice' : 'classes.estimateAvg', { n: c.avgLessons }) +
          '<b>' + T.money(est) + '</b></p>' +
        '<a class="btn btn--ghost btn--block" style="margin-block-start:1rem" href="preise.html?klasse=' +
          c.id + '#rechner">' + T.t('classes.calcFor') + '</a></div>' +
      '</article>';
    }

    function render() {
      var list = CFG.classes || [];
      if (compact) compact.innerHTML = list.slice(0, 6).map(function (c) { return card(c, false); }).join('');
      if (full)    full.innerHTML    = list.map(function (c) { return card(c, true); }).join('');
    }
    render();
    d.addEventListener('bb:langchange', render);
  }

  /* ------------------------------------------------------ Preistabellen */
  function initPriceTables() {
    var hosts = $$('[data-price-table]');
    if (!hosts.length) return;
    var P = CFG.pricing || {}, third = P.third || {}, ex = P.extras || {};

    var SETS = {
      school: [
        ['grundbetrag',        P.grundbetrag],
        ['lernmaterial',       P.lernmaterial],
        ['fahrstunde',         P.fahrstunde,  'prices.perLesson'],
        ['sonderfahrt',        P.sonderfahrt, 'prices.perLesson'],
        ['vorstellungTheorie', P.vorstellungTheorie],
        ['vorstellungPraxis',  P.vorstellungPraxis]
      ],
      third: [
        ['pruefTheorie', third.pruefgebuehrTheorie],
        ['pruefPraxis',  third.pruefgebuehrPraxis],
        ['sehtest',      third.sehtest],
        ['ersteHilfe',   third.ersteHilfe],
        ['passbild',     third.passbild],
        ['antrag',       third.antragsgebuehr]
      ],
      extras: [
        ['b96',       ex.b96Paket],
        ['simulator', ex.simulatorStunde],
        ['intensiv',  ex.intensivZuschlag]
      ]
    };

    function render() {
      hosts.forEach(function (host) {
        var rows = SETS[host.dataset.priceTable] || [];
        host.innerHTML =
          '<caption>' + T.t('prices.table' +
            host.dataset.priceTable.charAt(0).toUpperCase() + host.dataset.priceTable.slice(1)) + '</caption>' +
          '<thead><tr><th>' + T.t('prices.colItem') + '</th><th>' + T.t('prices.colPrice') + '</th></tr></thead>' +
          '<tbody>' + rows.filter(function (r) { return r[1]; }).map(function (r) {
            return '<tr><td>' + T.t('prices.items.' + r[0]) +
                   (r[2] ? ' <span class="muted">(' + T.t(r[2]) + ')</span>' : '') +
                   '</td><td>' + T.money(r[1]) + '</td></tr>';
          }).join('') + '</tbody>';
      });
    }
    render();
    d.addEventListener('bb:langchange', render);
  }

  /* ------------------------------------- Strukturierte Daten (schema.org)
     Wird aus config.js erzeugt, damit es nur EINE Datenquelle gibt. */
  function initSchema() {
    var b = CFG.business || {}; if (!b.name) return;
    var c = T.clean;
    var openings = [], MAP = { mon:'Monday', tue:'Tuesday', wed:'Wednesday',
      thu:'Thursday', fri:'Friday', sat:'Saturday', sun:'Sunday' };
    Object.keys(CFG.hours || {}).forEach(function (k) {
      var v = CFG.hours[k]; if (!v) return;
      var m = c(v).match(/(\d{1,2}[:.]\d{2})\s*[–-]\s*(\d{1,2}[:.]\d{2})/);
      if (!m) return;
      openings.push({ '@type':'OpeningHoursSpecification', dayOfWeek: MAP[k],
                      opens: m[1].replace('.', ':'), closes: m[2].replace('.', ':') });
    });
    var data = {
      '@context':'https://schema.org',
      '@type':['LocalBusiness','EducationalOrganization'],
      name: c(b.name), legalName: c(b.legalName), description: T.t('home.metaDesc'),
      url: c(b.website), telephone: c(b.phone), email: c(b.email),
      image: c(b.website).replace(/\/$/, '') + '/assets/img/favicon-512.png',
      address: { '@type':'PostalAddress', streetAddress: c(b.street),
                 postalCode: c(b.zip), addressLocality: c(b.city), addressCountry:'DE' },
      openingHoursSpecification: openings,
      areaServed: c(b.city),
      knowsLanguage: (CFG.i18n && CFG.i18n.available) || ['de']
    };
    var s = d.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(data);
    d.head.appendChild(s);
  }


  var SVG = {
    users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
    car:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3v-5l2-5h14l2 5v5h-2"/><circle cx="7.5" cy="17" r="2"/><circle cx="16.5" cy="17" r="2"/><path d="M9.5 17h5"/></svg>',
    cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    euro:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6a8 8 0 1 0 0 12"/><path d="M3 10h9M3 14h9"/></svg>',
    globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>',
    shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.4 9.3-8 10-4.6-.7-8-5-8-10V6z"/><path d="m9 12 2 2 4-4"/></svg>',
    award:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="M8.2 13.9 7 22l5-3 5 3-1.2-8.1"/></svg>',
    heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1l8.8 8.8 8.8-8.8a5 5 0 0 0 0-7.1z"/></svg>',
    star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.1 6.1 20.2l1.2-6.6L2.5 9l6.6-.9z"/></svg>',
    plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>'
  };

  /* ---------------------------------------------- Listen aus Sprachdateien
     <div data-render="cards" data-key="home.usp" data-icons="users,car,…">  */
  function initRenderers() {
    var hosts = $$('[data-render]'); if (!hosts.length) return;
    var esc = function (x) { return String(x == null ? '' : x); };

    var MAKE = {
      cards: function (items, host) {
        var ic = (host.dataset.icons || '').split(',');
        return items.map(function (it, i) {
          var key = (ic[i] || '').trim();
          return '<article class="card card--hover reveal">' +
            (SVG[key] ? '<div class="card__icon">' + SVG[key] + '</div>' : '') +
            '<h3>' + esc(it.t) + '</h3><p>' + esc(it.d) + '</p></article>';
        }).join('');
      },

      steps: function (items) {
        return items.map(function (it) {
          return '<article class="step reveal"><h3>' + esc(it.t) + '</h3><p>' + esc(it.d) + '</p></article>';
        }).join('');
      },

      stepsDetail: function (items) {
        return items.map(function (it) {
          return '<article class="step reveal"><h3>' + esc(it.t) + '</h3><p>' + esc(it.d) + '</p>' +
            '<div class="klass__meta" style="margin-block:1rem 0;padding:0;border:0">' +
            (it.dur  ? '<span>' + SVGtxt('clock') + esc(it.dur) + '</span>' : '') +
            (it.need ? '<span>' + esc(it.need) + '</span>' : '') +
            '</div></article>';
        }).join('');
      },

      reviews: function (items) {
        return items.map(function (it) {
          var stars = new Array(6).join(SVG.star);
          return '<article class="quote reveal"><div class="quote__stars" aria-label="5/5">' + stars + '</div>' +
            '<p>&bdquo;' + esc(it.q) + '&ldquo;</p><footer>' +
            '<div class="quote__av" aria-hidden="true">' + esc(it.n).charAt(0) + '</div>' +
            '<div class="quote__who"><b>' + esc(it.n) + '</b><span>' + esc(it.r) + '</span></div>' +
            '</footer></article>';
        }).join('');
      },

      faq: function (items, host) {
        return items.map(function (it, i) {
          var id = (host.dataset.idPrefix || 'faq') + '-' + i;
          return '<div class="faq__item">' +
            '<button class="faq__q" type="button" aria-expanded="false" aria-controls="' + id + '">' +
            '<span>' + esc(it.q) + '</span><span class="faq__ico">' + SVG.plus + '</span></button>' +
            '<div class="faq__a" id="' + id + '" data-open="false"><div><p>' + esc(it.a) + '</p></div></div>' +
            '</div>';
        }).join('');
      },

      team: function (items) {
        return items.map(function (it) {
          return '<article class="card reveal"><div class="quote__av" style="inline-size:56px;block-size:56px;font-size:1.2rem;margin-block-end:1rem">' +
            esc(it.n).replace('[PLATZHALTER] ', '').charAt(0) + '</div>' +
            '<h3>' + esc(it.n) + '</h3>' +
            '<p style="color:var(--accent-700);font-weight:700;margin-block-end:.5rem">' + esc(it.r) + '</p>' +
            '<p>' + esc(it.d) + '</p></article>';
        }).join('');
      },

      ticks: function (items) {
        return items.map(function (it) {
          return '<li>' + ICON.check + '<span>' + esc(it) + '</span></li>';
        }).join('');
      }
    };

    function SVGtxt(k) {
      return '<span style="display:inline-flex;inline-size:.9em;block-size:.9em;margin-inline-end:.35rem;vertical-align:-1px">' + SVG[k] + '</span>';
    }

    function render() {
      hosts.forEach(function (host) {
        var fn = MAKE[host.dataset.render];
        if (!fn) return;
        var items = T.list(host.dataset.key);
        if (!items.length) return;
        host.innerHTML = fn(items, host);
      });
      initFaq(); initReveal();
    }
    render();
    d.addEventListener('bb:langchange', render);
  }

  /* ------------------------------------------------------------- Kleinkram */
  function initMisc() {
    $$('[data-year]').forEach(function (e) { e.textContent = new Date().getFullYear(); });

    // WhatsApp-Link aus der Konfiguration
    $$('[data-wa]').forEach(function (a) {
      var n = T.clean((CFG.business && CFG.business.whatsapp) || '').replace(/[^\d]/g, '');
      if (!n) { a.remove(); return; }
      a.href = 'https://wa.me/' + n + '?text=' + encodeURIComponent(T.t('cta.waText'));
    });

    // Social-Icons ohne hinterlegte URL entfernen
    $$('[data-social]').forEach(function (a) {
      var u = T.clean((CFG.social && CFG.social[a.dataset.social]) || '');
      if (!u) a.remove(); else a.href = u;
    });

    // Klassen-Auswahl im Kontaktformular
    $$('[data-class-options]').forEach(function (sel) {
      var fill = function () {
        var cur = sel.value;
        sel.innerHTML = '<option value="">' + T.t('form.selectClass') + '</option>' +
          (CFG.classes || []).map(function (c) {
            return '<option value="' + c.id + '">' + T.t('class.' + c.id + '.name') + '</option>';
          }).join('') + '<option value="unsure">' + T.t('form.other') + '</option>';
        if (cur) sel.value = cur;
      };
      fill();
      d.addEventListener('bb:langchange', fill);
    });

    // Ticklisten aus Übersetzungs-Arrays füllen
    $$('[data-i18n-list]').forEach(function (ul) {
      var render = function () {
        ul.innerHTML = T.list(ul.dataset.i18nList).map(function (item) {
          return '<li>' + ICON.check + '<span>' + item + '</span></li>';
        }).join('');
      };
      render();
      d.addEventListener('bb:langchange', render);
    });
  }

  /* ------------------------------------------------------------------ Boot */
  function boot() {
    T.apply();
    renderHours();
    initLang(); initNav(); initFaq(); initReveal(); initToTop();
    initMap(); initCookie(); initForm(); initLegal();
    initClassCards(); initPriceTables(); initRenderers(); initSchema();
    initMisc(); initDevWarning();
    d.addEventListener('bb:langchange', function () { renderHours(); });
    d.documentElement.dataset.ready = 'true';
  }

  d.addEventListener('DOMContentLoaded', function () {
    var start = T.detect();
    var def   = (CFG.i18n && CFG.i18n.default) || 'de';
    // Die Standardsprache wird IMMER geladen — sie ist der Rückfall für
    // Schlüssel, die in einer Übersetzung (noch) fehlen.
    T.load(def, function () {
      if (start === def) { T.set(start, { silent: true }); boot(); return; }
      T.load(start, function () { T.set(start, { silent: true }); boot(); });
    });
  });
})(window, document);
