/* ============================================================================
   BBFahrschule — i18n
   ----------------------------------------------------------------------------
   Sprachdateien werden per <script>-Injection geladen (kein fetch), damit die
   Seite auch per Doppelklick über file:// funktioniert — fetch() scheitert dort
   an der CORS-Policy.

   Markup-API
     data-i18n="key"                     -> textContent
     data-i18n-html="key"                -> innerHTML (nur eigene Übersetzungen)
     data-i18n-attr="placeholder:key"    -> Attribut(e), mehrere mit ";" trennen
     data-bb="business.phone"            -> Wert aus config.js
     data-bb-href-tel / -mailto / -href  -> Link aus config.js
   ========================================================================== */
(function (w, d) {
  'use strict';

  var CFG   = w.BB_CONFIG || {};
  var I18N  = (CFG.i18n) || { default: 'de', available: ['de'], rtl: [] };
  var STORE = {};                       // { de: {...}, en: {...} }
  var PENDING = {};                     // laufende Ladevorgänge
  var PLACEHOLDER_RE = /^\s*\[PLACEHOLDER\]\s*/;

  var LANG_META = {
    de: { name: 'Deutsch',  flag: '🇩🇪', dir: 'ltr' },
    en: { name: 'English',  flag: '🇬🇧', dir: 'ltr' },
    tr: { name: 'Türkçe',   flag: '🇹🇷', dir: 'ltr' },
    ar: { name: 'العربية',  flag: '🇸🇦', dir: 'rtl' }
  };

  /* --------------------------------------------------------------- Helfer */
  function dig(obj, path) {
    if (!obj || !path) return undefined;
    var parts = String(path).split('.'), cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur === null || typeof cur !== 'object' || !(parts[i] in cur)) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function clean(v) {
    return typeof v === 'string' ? v.replace(PLACEHOLDER_RE, '') : v;
  }

  /** Ersetzt {platzhalter} durch params, sonst durch Werte aus config.js. */
  function interpolate(str, params) {
    if (typeof str !== 'string' || str.indexOf('{') === -1) return str;
    return str.replace(/\{([\w.]+)\}/g, function (m, key) {
      if (params && key in params) return params[key];
      var fromCfg = dig(CFG, key);
      if (fromCfg !== undefined) return clean(fromCfg);
      var short = dig(CFG.business, key);
      if (short !== undefined) return clean(short);
      return m;
    });
  }

  /* ---------------------------------------------------------------- Kern */
  var api = {
    lang: I18N.default,
    meta: LANG_META,

    /** Wird vom Ende jeder Sprachdatei aufgerufen. */
    register: function (code, dict) {
      STORE[code] = dict;
      if (PENDING[code]) { PENDING[code].forEach(function (fn) { fn(); }); delete PENDING[code]; }
    },

    has: function (code) { return !!STORE[code]; },

    /** Übersetzt einen Schlüssel; fällt auf die Standardsprache zurück. */
    t: function (key, params) {
      var v = dig(STORE[api.lang], key);
      if (v === undefined) v = dig(STORE[I18N.default], key);
      if (v === undefined) return key;          // sichtbar = fehlende Übersetzung
      return interpolate(v, params);
    },

    /** Array-Werte (z. B. Listen) in der aktuellen Sprache.
        Strings werden — auch innerhalb von Objekten — interpoliert, damit
        {business.street} & Co. in Rechtstexten und Listen aufgelöst werden. */
    list: function (key) {
      var v = dig(STORE[api.lang], key);
      if (!Array.isArray(v)) v = dig(STORE[I18N.default], key);
      if (!Array.isArray(v)) return [];
      return v.map(function (item) {
        if (typeof item === 'string') return interpolate(item);
        if (item && typeof item === 'object' && !Array.isArray(item)) {
          var o = {};
          Object.keys(item).forEach(function (k) {
            o[k] = typeof item[k] === 'string' ? interpolate(item[k]) : item[k];
          });
          return o;
        }
        return item;
      });
    },

    /** Interpolation auch einzeln verfügbar. */
    interp: interpolate,

    /** Zahl/Währung passend zur Sprache formatieren. */
    money: function (n) {
      var loc = api.lang === 'de' ? 'de-DE'
              : api.lang === 'tr' ? 'tr-TR'
              : api.lang === 'ar' ? 'ar-u-nu-latn' : 'en-GB';
      try {
        return new Intl.NumberFormat(loc, {
          style: 'currency', currency: (CFG.pricing && CFG.pricing.currency) || 'EUR',
          minimumFractionDigits: 0, maximumFractionDigits: 0
        }).format(n);
      } catch (e) { return Math.round(n) + ' €'; }
    },

    num: function (n) {
      var loc = api.lang === 'de' ? 'de-DE' : api.lang === 'ar' ? 'ar-u-nu-latn' : 'en-GB';
      try { return new Intl.NumberFormat(loc).format(n); } catch (e) { return String(n); }
    },

    /** Sprachdatei nachladen und anwenden. */
    set: function (code, opts) {
      opts = opts || {};
      if (I18N.available.indexOf(code) === -1) code = I18N.default;

      function finish() {
        api.lang = code;
        var meta = LANG_META[code] || LANG_META.de;
        d.documentElement.lang = code;
        d.documentElement.dir  = meta.dir;
        try { localStorage.setItem('bb-lang', code); } catch (e) {}
        if (!opts.silent) {
          try {
            var u = new URL(w.location.href);
            u.searchParams.set('lang', code);
            history.replaceState(null, '', u);
          } catch (e) {}
        }
        api.apply();
        d.dispatchEvent(new CustomEvent('bb:langchange', { detail: { lang: code, dir: meta.dir } }));
      }

      if (STORE[code]) { finish(); return; }
      api.load(code, function () {
        // Sprachdatei nicht ladbar -> auf die Standardsprache zurückfallen
        if (!STORE[code]) code = I18N.default;
        finish();
      });
    },

    /** Lädt assets/i18n/<code>.js per Script-Tag (file://-tauglich). */
    load: function (code, cb) {
      if (STORE[code]) { cb && cb(); return; }
      if (PENDING[code]) { cb && PENDING[code].push(cb); return; }
      PENDING[code] = cb ? [cb] : [];

      var base = d.documentElement.getAttribute('data-base') || '';
      var s = d.createElement('script');
      s.src = base + 'assets/i18n/' + code + '.js';
      s.async = true;
      s.onerror = function () {
        console.warn('[i18n] Sprachdatei nicht gefunden:', code);
        var q = PENDING[code] || []; delete PENDING[code];
        q.forEach(function (fn) { fn(); });
      };
      d.head.appendChild(s);
    },

    /** Schreibt alle Übersetzungen + Konfigwerte ins DOM. */
    apply: function (root) {
      root = root || d;

      root.querySelectorAll('[data-i18n]').forEach(function (el) {
        var v = api.t(el.getAttribute('data-i18n'));
        if (v != null) el.textContent = v;
      });

      root.querySelectorAll('[data-i18n-html]').forEach(function (el) {
        var v = api.t(el.getAttribute('data-i18n-html'));
        if (v != null) el.innerHTML = v;
      });

      root.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
        el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
          var i = pair.indexOf(':'); if (i < 0) return;
          var attr = pair.slice(0, i).trim(), key = pair.slice(i + 1).trim();
          if (attr && key) el.setAttribute(attr, api.t(key));
        });
      });

      // Werte aus config.js
      root.querySelectorAll('[data-bb]').forEach(function (el) {
        var v = dig(CFG, el.getAttribute('data-bb'));
        if (v !== undefined && v !== null && v !== '') el.textContent = clean(v);
      });
      root.querySelectorAll('[data-bb-href]').forEach(function (el) {
        var v = clean(dig(CFG, el.getAttribute('data-bb-href')));
        if (v) el.setAttribute('href', v);
      });
      root.querySelectorAll('[data-bb-href-tel]').forEach(function (el) {
        var v = clean(dig(CFG, el.getAttribute('data-bb-href-tel')));
        if (v) el.setAttribute('href', 'tel:' + String(v).replace(/[^\d+]/g, ''));
      });
      root.querySelectorAll('[data-bb-href-mailto]').forEach(function (el) {
        var v = clean(dig(CFG, el.getAttribute('data-bb-href-mailto')));
        if (v) el.setAttribute('href', 'mailto:' + v);
      });

      // <title> und meta description
      var tk = d.documentElement.getAttribute('data-title-key');
      if (tk) d.title = api.t(tk) + ' | ' + (CFG.business ? clean(CFG.business.name) : 'BBFahrschule');
      var dk = d.documentElement.getAttribute('data-desc-key');
      if (dk) {
        var m = d.querySelector('meta[name="description"]');
        if (m) m.setAttribute('content', api.t(dk));
      }
    },

    /** Startsprache: ?lang= > localStorage > Browsersprache > Standard. */
    detect: function () {
      var q;
      try { q = new URL(w.location.href).searchParams.get('lang'); } catch (e) {}
      if (q && I18N.available.indexOf(q) > -1) return q;
      var s; try { s = localStorage.getItem('bb-lang'); } catch (e) {}
      if (s && I18N.available.indexOf(s) > -1) return s;
      var navLangs = (navigator.languages || [navigator.language || '']).map(function (l) {
        return String(l).slice(0, 2).toLowerCase();
      });
      for (var i = 0; i < navLangs.length; i++) {
        if (I18N.available.indexOf(navLangs[i]) > -1) return navLangs[i];
      }
      return I18N.default;
    },

    /** Zählt noch offene [PLACEHOLDER]-Werte in der Konfiguration. */
    countPlaceholders: function () {
      var n = 0;
      (function walk(o) {
        if (!o || typeof o !== 'object') return;
        Object.keys(o).forEach(function (k) {
          var v = o[k];
          if (typeof v === 'string') { if (PLACEHOLDER_RE.test(v)) n++; }
          else if (typeof v === 'object') walk(v);
        });
      })(CFG);
      return n;
    },

    dig: dig,
    clean: clean
  };

  w.BBi18n = api;
})(window, document);
