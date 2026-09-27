/* ============================================================================
   BBFahrschule — ZENTRALE KONFIGURATION
   ----------------------------------------------------------------------------
   Dies ist die EINZIGE Datei, die vor dem Livegang angepasst werden muss.
   Jeder Wert mit dem Marker  [PLACEHOLDER]  ist ein Platzhalter und MUSS durch
   echte Geschäftsdaten ersetzt werden (rechtliche Pflicht, u. a. § 5 DDG).

   Suchen Sie einfach nach "[PLACEHOLDER]" um alle offenen Stellen zu finden.
   ========================================================================== */

window.BB_CONFIG = {

  /* ---------------------------------------------------------------- Firma */
  business: {
    name:        'B&B Fahrschule',
    legalName:   '[PLACEHOLDER] B&B Fahrschule — Inhaber Max Mustermann e. K.',
    owner:       '[PLACEHOLDER] Max Mustermann',
    tagline_key: 'brand.tagline',
    founded:     '[PLACEHOLDER] 2015',
    // Einziger Standort: Koblenz. Theorieunterricht und Fahrstunden finden
    // ausschließlich hier statt.
    street:      'Löhrstraße 101',
    zip:         '56068',
    city:        'Koblenz',
    country:     'Deutschland',
    phone:       '015563133338',
    mobile:      '015222333390',
    whatsapp:    '[PLACEHOLDER] +4915112345678',   // nur Ziffern, mit Ländercode
    email:       '[PLACEHOLDER] info@bbfahrschule.de',
    website:     '[PLACEHOLDER] https://www.bbfahrschule.de',

    // Rechtliche Angaben (Impressum)
    register:      '[PLACEHOLDER] Amtsgericht Koblenz, HRA 12345',
    vatId:         '[PLACEHOLDER] DE123456789',          // USt-IdNr. § 27a UStG
    taxNumber:     '[PLACEHOLDER] 22/123/45678',
    licenceAuthority: '[PLACEHOLDER] Stadtverwaltung Koblenz, Straßenverkehrsamt — Fahrerlaubnisbehörde',
    licenceNumber: '[PLACEHOLDER] Fahrschulerlaubnis Nr. FS-12345',
    profession:    'Fahrlehrer / Fahrschulinhaber (verliehen in der Bundesrepublik Deutschland)',
    professionLaw: 'Fahrlehrergesetz (FahrlG) und Fahrschüler-Ausbildungsordnung (FahrschAusbO)',
    professionLawUrl: 'https://www.gesetze-im-internet.de/fahrlg_2018/',
    insurer:       '[PLACEHOLDER] Musterversicherung AG, Musterweg 1, 56068 Koblenz',
    insuranceScope:'Deutschland / Geltungsbereich der EU',
    dpo:           '', // Datenschutzbeauftragter — leer lassen, falls nicht bestellt
  },

  /* ----------------------------------------------------------- Öffnungszeiten
     Büro-/Anmeldezeiten. Schlüssel = Wochentag, Wert = Zeitstring oder null. */
  hours: {
    mon: '[PLACEHOLDER] 15:00 – 19:00',
    tue: '[PLACEHOLDER] 15:00 – 19:00',
    wed: '[PLACEHOLDER] 15:00 – 19:00',
    thu: '[PLACEHOLDER] 15:00 – 19:00',
    fri: '[PLACEHOLDER] 15:00 – 18:00',
    sat: '[PLACEHOLDER] 10:00 – 13:00',
    sun: null,                                  // null = geschlossen
  },
  theoryTimes: '[PLACEHOLDER] Mo. – Do., 18:30 – 20:00 Uhr',

  /* ------------------------------------------------------------- Social Media
     Leerer String = Icon wird ausgeblendet. */
  social: {
    instagram: '[PLACEHOLDER] https://www.instagram.com/bbfahrschule',
    facebook:  '[PLACEHOLDER] https://www.facebook.com/bbfahrschule',
    tiktok:    '',
    youtube:   '',
  },

  /* ------------------------------------------------------------- Kennzahlen */
  stats: {
    students:  '[PLACEHOLDER] 2.400+',
    passRate:  '[PLACEHOLDER] 92 %',
    years:     '[PLACEHOLDER] 10',
    rating:    '[PLACEHOLDER] 4,8',
  },

  /* ------------------------------------------------------------ Kontaktformular
     Ohne Backend kann ein statisches Formular nicht versenden. Tragen Sie eine
     Endpoint-URL ein (z. B. Formspree / Basin / eigenes PHP-Skript).
     Bleibt der Wert leer, fällt das Formular automatisch auf mailto: zurück. */
  form: {
    endpoint: '',                               // z. B. 'https://formspree.io/f/xxxxxxx'
    successRedirect: '',
  },

  /* --------------------------------------------------------------- Karte
     Die Karte wird aus Datenschutzgründen ERST NACH KLICK geladen (Opt-in). */
  map: {
    enabled: true,
    // Google-Maps-Embed-URL (Menü „Teilen“ → „Karte einbetten“) oder OSM-Embed
    embedUrl: '[PLACEHOLDER] https://www.openstreetmap.org/export/embed.html?bbox=7.56%2C50.34%2C7.63%2C50.38&layer=mapnik',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=L%C3%B6hrstra%C3%9Fe+101+56068+Koblenz',
  },

  /* ------------------------------------------------------------- Analytics
     Standardmäßig AUS. Erst bei true erscheint das Cookie-Consent-Banner. */
  analytics: {
    enabled: false,
    provider: '',                               // 'plausible' | 'matomo' | ''
    domain: '',
    scriptUrl: '',
  },

  /* ========================================================================
     PREISE — alle Beträge in EUR, brutto.
     Nach § 19 FahrlG müssen Entgelte in der Fahrschule ausgehängt werden.
     Diese Werte sind BRANCHENÜBLICHE RICHTWERTE und MÜSSEN durch Ihre
     tatsächlichen Preise ersetzt werden.
     ===================================================================== */
  pricing: {
    currency: 'EUR',
    locale:   'de-DE',

    // Eigene Leistungen der Fahrschule
    grundbetrag:        450.00,  // [PLACEHOLDER] Anmeldung, Theorieunterricht, Verwaltung
    lernmaterial:        90.00,  // [PLACEHOLDER] Lehrbuch + Online-/App-Zugang
    fahrstunde:          65.00,  // [PLACEHOLDER] Übungsfahrstunde à 45 Min.
    sonderfahrt:         75.00,  // [PLACEHOLDER] Überland / Autobahn / Nacht à 45 Min.
    vorstellungTheorie: 120.00,  // [PLACEHOLDER] Vorstellungsentgelt Theorieprüfung
    vorstellungPraxis:  300.00,  // [PLACEHOLDER] Vorstellungsentgelt praktische Prüfung

    // Fremdkosten (nicht die Fahrschule — TÜV/DEKRA, Behörde, Arzt)
    third: {
      pruefgebuehrTheorie: 26.60,  // [PLACEHOLDER] TÜV/DEKRA Theorieprüfung
      pruefgebuehrPraxis: 155.00,  // [PLACEHOLDER] TÜV/DEKRA praktische Prüfung (klassenabhängig)
      sehtest:              7.00,  // [PLACEHOLDER] amtlicher Sehtest
      ersteHilfe:          50.00,  // [PLACEHOLDER] Erste-Hilfe-Kurs (9 UE)
      passbild:            15.00,  // [PLACEHOLDER] biometrisches Passbild
      antragsgebuehr:      45.00,  // [PLACEHOLDER] Antrag bei der Führerscheinstelle
    },

    // Zuschläge / Sonderleistungen
    extras: {
      bf17Zuschlag:        0.00,  // [PLACEHOLDER] Aufschlag Begleitetes Fahren ab 17
      schaltkompetenzB197: 0.00,  // [PLACEHOLDER] Pauschale für den B197-Nachweis
      b96Paket:          490.00,  // [PLACEHOLDER] Komplettpreis Schlüsselzahl B96
      simulatorStunde:    39.00,  // [PLACEHOLDER] Fahrsimulator je Einheit
      intensivZuschlag:  180.00,  // [PLACEHOLDER] Ferien-/Intensivkurs Aufschlag
    },

    /* Toleranz für die „von–bis“-Spanne im Kostenrechner (±). */
    estimateSpread: 0.10,
  },

  /* ========================================================================
     FÜHRERSCHEINKLASSEN
     minLessons/avgLessons = ÜBUNGSfahrstunden (ohne Sonderfahrten).
     special = gesetzlich vorgeschriebene Sonderfahrten à 45 Min.
     theory  = Doppelstunden à 90 Min. (Grundstoff / klassenspezifischer Zusatzstoff)
     ===================================================================== */
  classes: [
    { id: 'B',   minAge: 18, avgLessons: 25, minLessons: 5,  maxLessons: 60,
      special: { ueberland: 5, autobahn: 4, nacht: 3 },
      theory:  { basic: 12, specific: 2 },
      examFee: 155.00, popular: true },

    { id: 'B197', minAge: 18, avgLessons: 25, minLessons: 5, maxLessons: 60,
      special: { ueberland: 5, autobahn: 4, nacht: 3 },
      theory:  { basic: 12, specific: 2 },
      examFee: 155.00, schaltLessons: 10, popular: true },

    { id: 'B78', minAge: 18, avgLessons: 25, minLessons: 5, maxLessons: 60,
      special: { ueberland: 5, autobahn: 4, nacht: 3 },
      theory:  { basic: 12, specific: 2 },
      examFee: 155.00 },

    { id: 'BF17', minAge: 17, avgLessons: 25, minLessons: 5, maxLessons: 60,
      special: { ueberland: 5, autobahn: 4, nacht: 3 },
      theory:  { basic: 12, specific: 2 },
      examFee: 155.00 },

    { id: 'B96', minAge: 18, avgLessons: 0, minLessons: 0, maxLessons: 0,
      special: {}, theory: { basic: 0, specific: 0 },
      examFee: 0, fixedPackage: 'b96Paket', noExam: true },

    { id: 'BE',  minAge: 18, avgLessons: 4, minLessons: 0, maxLessons: 20,
      special: { ueberland: 3, autobahn: 1, nacht: 1 },
      theory:  { basic: 0, specific: 0 },
      examFee: 190.00 },
  ],

  /* ------------------------------------------------------------------ i18n */
  i18n: {
    default: 'de',
    available: ['de', 'en', 'tr', 'ar'],
    rtl: ['ar'],
  },
};
