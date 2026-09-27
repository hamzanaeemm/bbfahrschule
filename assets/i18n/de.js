/* B&B Fahrschule — Deutsch (Standardsprache, maßgeblich für alle Rechtstexte) */
window.BBi18n.register('de', {

  brand: {
    tagline: 'Deine Fahrschule',
    claim: 'Sicher ans Ziel. Mit Führerschein.'
  },

  nav: {
    home: 'Startseite', classes: 'Führerscheinklassen', prices: 'Preise & Rechner',
    process: 'Ablauf', about: 'Über uns', contact: 'Kontakt',
    impressum: 'Impressum', privacy: 'Datenschutz', terms: 'AGB', withdrawal: 'Widerruf',
    menu: 'Menü', close: 'Schließen'
  },

  cta: {
    register: 'Jetzt anmelden', calc: 'Kosten berechnen', call: 'Anrufen',
    contact: 'Kontakt aufnehmen', more: 'Mehr erfahren', allClasses: 'Alle Klassen ansehen',
    waText: 'Hallo! Ich interessiere mich für einen Führerschein und hätte eine Frage.',
    bookNow: 'Termin vereinbaren', toPrices: 'Zu den Preisen'
  },

  days: { mon:'Montag', tue:'Dienstag', wed:'Mittwoch', thu:'Donnerstag',
          fri:'Freitag', sat:'Samstag', sun:'Sonntag' },
  hours: { closed:'Geschlossen', title:'Öffnungszeiten', office:'Büro & Anmeldung',
           theory:'Theorieunterricht', today:'Heute' },

  a11y: { langSwitch:'Sprache wählen', toTop:'Nach oben', skip:'Zum Inhalt springen',
          logo:'Logo B&B Fahrschule', car:'Schulfahrzeug VW T-Roc' },

  dev: { placeholders:'Platzhalter in assets/js/config.js noch nicht ersetzt — vor dem Livegang anpassen.',
         hide:'Ausblenden' },

  /* ------------------------------------------------------------ Startseite */
  home: {
    metaTitle: 'Führerschein machen',
    metaDesc: 'B&B Fahrschule — moderne Fahrschule mit erfahrenen Fahrlehrern. Führerschein Klasse B, B197, B78, BF17 und mehr. Jetzt Kosten berechnen und anmelden.',
    heroEyebrow: 'Fahrschule in {city}',
    heroTitle: 'Hol dir <em>jetzt</em> deinen Führerschein.',
    heroLead: 'Persönliche Betreuung, moderne Fahrzeuge und flexible Termine. Bei uns lernst du entspannt Auto fahren — vom ersten Theorieabend bis zur bestandenen Prüfung.',
    trust: { students:'Fahrschüler', pass:'Bestehensquote', years:'Jahre Erfahrung', rating:'Bewertung' },
    heroPlate: 'Ausbildung im VW T-Roc — Automatik & Schaltgetriebe',

    barItems: ['Kostenlose Erstberatung', 'Theorie auch online lernen',
               'Fahrstunden ab Wunschort', 'Ausbildung in 4 Sprachen'],

    uspEyebrow: 'Warum B&B Fahrschule',
    uspTitle: 'Eine Fahrschule, die sich nach dir richtet',
    uspLead: 'Wir wissen: Schule, Ausbildung oder Job lassen wenig Luft. Deshalb ist bei uns alles darauf ausgelegt, dass du schnell und ohne Stress zum Führerschein kommst.',
    usp: [
      { t:'Erfahrene Fahrlehrer', d:'Ruhig, geduldig und mit jahrelanger Praxis. Bei uns bekommst du deinen festen Fahrlehrer — kein ständiger Wechsel.' },
      { t:'Moderne Fahrzeuge', d:'Gepflegte, sichere Schulfahrzeuge mit aktueller Assistenztechnik. Automatik und Schaltgetriebe stehen bereit.' },
      { t:'Flexible Termine', d:'Fahrstunden am Morgen, am Abend oder samstags. Abholung an Schule, Uni oder Arbeitsplatz ist meist möglich.' },
      { t:'Theorie online lernen', d:'Mit App und Online-Zugang lernst du wann und wo du willst — im Bus, in der Pause oder abends auf dem Sofa.' },
      { t:'Faire, klare Preise', d:'Keine versteckten Kosten. Du siehst vorab, was auf dich zukommt — mit unserem Kostenrechner sogar auf den Euro genau geschätzt.' },
      { t:'Ausbildung in 4 Sprachen', d:'Deutsch, Englisch, Türkisch und Arabisch. Sprich uns an — wir finden immer einen Weg, dich zu begleiten.' }
    ],

    classesEyebrow: 'Führerscheinklassen',
    classesTitle: 'Welcher Führerschein soll es sein?',
    classesLead: 'Auto oder Anhänger, Automatik oder Schaltgetriebe — wir bilden in allen gängigen Pkw-Klassen aus und beraten dich, welche wirklich zu dir passt.',

    stepsEyebrow: 'So läuft es ab',
    stepsTitle: 'In fünf Schritten zum Führerschein',
    stepsLead: 'Von der Anmeldung bis zum Führerschein in der Hand — du musst dich um nichts alleine kümmern. Wir sagen dir bei jedem Schritt genau, was zu tun ist.',
    steps: [
      { t:'Anmelden', d:'Kostenloses Beratungsgespräch, Ausbildungsvertrag unterschreiben — mehr brauchst du für den Start nicht.' },
      { t:'Unterlagen besorgen', d:'Sehtest, Erste-Hilfe-Kurs und Passbild. Den Antrag bei der Behörde stellen wir gemeinsam mit dir.' },
      { t:'Theorie lernen', d:'Unterricht bei uns vor Ort plus App für unterwegs. Danach die Theorieprüfung bei TÜV oder DEKRA.' },
      { t:'Fahren üben', d:'Erst Grundlagen, dann Stadtverkehr, zum Schluss die zwölf vorgeschriebenen Sonderfahrten.' },
      { t:'Prüfung bestehen', d:'Rund 45 Minuten mit dem Prüfer — und der Führerschein gehört dir.' }
    ],

    calcEyebrow: 'Kostenrechner',
    calcTitle: 'Was kostet dein Führerschein?',
    calcLead: 'Der Preis hängt vor allem davon ab, wie viele Fahrstunden du brauchst. Mit unserem Rechner bekommst du in 30 Sekunden eine realistische Schätzung — ganz ohne Anmeldung.',
    calcBullets: ['Getrennt nach Fahrschul- und Fremdkosten',
                  'Alle gesetzlichen Pflichtstunden bereits enthalten',
                  'Sofort sichtbar, keine E-Mail nötig'],

    fleetEyebrow: 'Unsere Fahrzeuge',
    fleetTitle: 'Lernen im VW T-Roc',
    fleetLead: 'Unser Schulfahrzeug ist übersichtlich, sicher und angenehm zu fahren — ideal für die ersten Stunden und stark genug für Autobahn und Überland.',
    fleetList: ['Rückfahrkamera und Parksensoren', 'Abstands- und Spurhalteassistent',
                'Klimaautomatik und höhenverstellbare Sitze', 'Automatik- und Schaltvariante verfügbar',
                'Regelmäßig gewartet und voll versichert'],

    reviewsEyebrow: 'Bewertungen',
    reviewsTitle: 'Was unsere Fahrschüler sagen',
    reviews: [
      { n:'Lena M.', r:'Klasse B · Bestanden', q:'Ich hatte echt Respekt vor dem Autofahren. Mein Fahrlehrer hat mir die Angst komplett genommen — beim ersten Versuch bestanden. Danke!' },
      { n:'Yusuf K.', r:'Klasse B197 · Bestanden', q:'Termine waren super flexibel, ich konnte die Fahrstunden gut neben der Arbeit legen. Erklärt wurde alles in Ruhe, auch auf Türkisch.' },
      { n:'Sarah B.', r:'Klasse B78 · Bestanden', q:'Sehr gut organisiert. Der Theorieunterricht war nie langweilig und man hat gemerkt, dass die Fahrlehrer wirklich Lust auf den Job haben.' }
    ],

    faqEyebrow: 'Häufige Fragen',
    faqTitle: 'Das wollen die meisten wissen',
    faq: [
      { q:'Wie lange dauert es, bis ich den Führerschein habe?',
        a:'In der Regel drei bis sechs Monate. Wie schnell es geht, hängt davon ab, wie oft du Theorieunterricht besuchst und wie viele Fahrstunden pro Woche du nimmst. Mit einem Intensivkurs ist es auch deutlich schneller möglich.' },
      { q:'Wie viele Fahrstunden brauche ich wirklich?',
        a:'Das ist sehr individuell. Neben den zwölf gesetzlich vorgeschriebenen Sonderfahrten für die Klasse B nehmen die meisten Fahrschüler zwischen 20 und 35 Übungsstunden. Dein Fahrlehrer sagt dir ehrlich, wann du prüfungsreif bist — wir verkaufen niemandem unnötige Stunden.' },
      { q:'Kann ich mich schon mit 17 anmelden?',
        a:'Ja. Beim Begleiteten Fahren ab 17 (BF17) kannst du die Ausbildung bereits mit 16,5 Jahren beginnen und die Prüfung frühestens einen Monat vor deinem 17. Geburtstag ablegen. Danach fährst du bis 18 in Begleitung einer eingetragenen Person.' },
      { q:'Was ist der Unterschied zwischen B und B197?',
        a:'Bei B197 machst du die Ausbildung und die Prüfung auf einem Automatikfahrzeug, darfst aber trotzdem Schaltwagen fahren. Voraussetzung sind mindestens zehn Fahrstunden auf einem Schaltfahrzeug und eine 15-minütige Testfahrt. Du bekommst dann einen Führerschein der Klasse B ohne die Schlüsselzahl 78.' },
      { q:'Welche Unterlagen brauche ich für die Anmeldung?',
        a:'Einen gültigen Personalausweis oder Reisepass, ein biometrisches Passbild, die Bescheinigung über den Sehtest und die Teilnahmebescheinigung des Erste-Hilfe-Kurses. Den Antrag bei der Führerscheinstelle reichen wir gemeinsam mit dir ein.' },
      { q:'Kann ich die Kosten in Raten zahlen?',
        a:'Bei uns zahlst du nicht alles auf einmal: Der Grundbetrag wird bei der Anmeldung fällig, Fahrstunden rechnest du laufend ab. Sprich uns an, wenn du eine individuelle Aufteilung brauchst — wir finden fast immer eine Lösung.' },
      { q:'Bietet ihr den Unterricht auch in anderen Sprachen an?',
        a:'Ja. Wir betreuen unsere Fahrschüler auf Deutsch, Englisch, Türkisch und Arabisch. Die amtliche Theorieprüfung kann in mehreren Fremdsprachen abgelegt werden — sprich uns an, dann klären wir das gemeinsam.' },
      { q:'Was passiert, wenn ich durch die Prüfung falle?',
        a:'Kein Weltuntergang — das passiert vielen. Nach einer nicht bestandenen Prüfung gilt eine Wartezeit von zwei Wochen. Wir schauen uns gemeinsam an, woran es lag, üben gezielt nach und melden dich neu an.' }
    ],

    ctaTitle: 'Bereit für die erste Fahrstunde?',
    ctaLead: 'Melde dich unverbindlich bei uns. Wir beraten dich kostenlos, beantworten alle Fragen und du entscheidest in Ruhe.',

    seoIntroTitle: 'Fahrschule in {city} — persönlich, modern und fair',
    seoIntro: 'Die B&B Fahrschule begleitet Fahranfängerinnen und Fahranfänger in {city} und Umgebung auf dem Weg zum Führerschein. Wir setzen auf kleine Theoriegruppen, feste Fahrlehrer und ein Ausbildungstempo, das zu dir passt. Ob Klasse B fürs Auto, B197 mit Automatik, B78 nur Automatik oder die Erweiterung um einen Anhänger — bei uns bekommst du eine ehrliche Einschätzung, wie viele Stunden du brauchst, und eine transparente Aufstellung aller Kosten. Komm gerne unverbindlich zu einem Beratungsgespräch vorbei.'
  },

  /* ----------------------------------------------------- Klassen (Stammdaten) */
  class: {
    B:    { short:'B',    name:'Klasse B — Auto',
            desc:'Der klassische Autoführerschein für Fahrzeuge bis 3,5 t zulässiger Gesamtmasse mit bis zu acht Sitzplätzen außer dem Fahrersitz.',
            drive:'Pkw bis 3,5 t · Anhänger bis 750 kg' },
    B197: { short:'B197', name:'Klasse B197 — Automatik mit Schaltberechtigung',
            desc:'Ausbildung und Prüfung im Automatikfahrzeug — und trotzdem ein vollwertiger Führerschein, mit dem du auch Schaltwagen fahren darfst.',
            drive:'Wie Klasse B, ohne Schlüsselzahl 78' },
    B78:  { short:'B78',  name:'Klasse B78 — nur Automatik',
            desc:'Ausbildung und Prüfung im Automatikfahrzeug. Im Führerschein wird die Schlüsselzahl 78 eingetragen — du darfst damit ausschließlich Automatikfahrzeuge fahren.',
            drive:'Wie Klasse B, nur Automatik (Schlüsselzahl 78)' },
    BF17: { short:'BF17', name:'Begleitetes Fahren ab 17',
            desc:'Ein Jahr früher starten: Nach bestandener Prüfung fährst du bis zum 18. Geburtstag in Begleitung einer eingetragenen Person.',
            drive:'Wie Klasse B, in Begleitung' },
    B96:  { short:'B96',  name:'Schlüsselzahl B96 — Anhänger',
            desc:'Eintägige Zusatzqualifikation ohne Prüfung für Gespanne zwischen 3,5 t und 4,25 t — ideal für Wohnwagen und Pferdeanhänger.',
            drive:'Zug bis 4,25 t zulässige Gesamtmasse' },
    BE:   { short:'BE',   name:'Klasse BE — großer Anhänger',
            desc:'Für schwerere Anhänger über 750 kg bis 3,5 t. Mit praktischer Prüfung, aber ohne zusätzlichen Theorieunterricht.',
            drive:'Pkw + Anhänger bis 3,5 t' }
  },

  /* -------------------------------------------------------- Klassen-Seite */
  classes: {
    metaTitle: 'Führerscheinklassen',
    metaDesc: 'Alle Führerscheinklassen bei der B&B Fahrschule: Klasse B, B197, B78, BF17, B96 und BE — mit Mindestalter, Pflichtstunden und Voraussetzungen.',
    title: 'Führerscheinklassen im Überblick',
    lead: 'Welche Klasse passt zu dir? Hier findest du zu jedem Führerschein die wichtigsten Eckdaten: Mindestalter, vorgeschriebene Sonderfahrten, Theorieumfang und was du damit fahren darfst.',
    minAge: 'Mindestalter',
    years: 'Jahre',
    theoryUnits: '{n} Doppelstunden Theorie',
    specialRides: '{n} Sonderfahrten',
    noSpecial: 'Keine Sonderfahrten',
    noExam: 'Ohne Prüfung',
    youMayDrive: 'Das darfst du fahren',
    requirements: 'Voraussetzungen',
    fromPrice: 'Schätzung ab',
    popular: 'Beliebt',
    estimateAvg: 'Schätzung bei Ø {n} Übungsstunden',
    packagePrice: 'Komplettpaket',
    calcFor: 'Kosten für diese Klasse berechnen',
    reqCommon: ['Mindestalter erreicht (bei BF17 ab 16,5 Jahren Ausbildungsbeginn)',
                'Gültiger Personalausweis oder Reisepass',
                'Amtlicher Sehtest (nicht älter als zwei Jahre)',
                'Teilnahme an einem Erste-Hilfe-Kurs mit 9 Unterrichtseinheiten',
                'Biometrisches Passbild',
                'Antrag bei der zuständigen Führerscheinstelle'],
    noteTitle: 'Gut zu wissen',
    note: 'Wer bereits eine Fahrerlaubnis besitzt und eine weitere Klasse erwerben möchte, muss nur sechs statt zwölf Doppelstunden Grundstoff besuchen. Sehtest, Erste-Hilfe-Kurs und Passbild entfallen dann in der Regel ebenfalls.',
    ctaTitle: 'Noch unsicher, welche Klasse die richtige ist?',
    ctaLead: 'Ruf uns an oder komm einfach vorbei. Wir hören uns an, was du vorhast, und sagen dir ehrlich, welcher Führerschein sich für dich lohnt.'
  },

  /* ------------------------------------------------------------ Preisseite */
  prices: {
    metaTitle: 'Preise & Kostenrechner',
    metaDesc: 'Transparente Preise der B&B Fahrschule: Grundbetrag, Fahrstunde, Sonderfahrten und Prüfungsgebühren. Jetzt individuelle Kosten für deinen Führerschein berechnen.',
    title: 'Preise & Kostenrechner',
    lead: 'Bei uns weißt du vorher, was auf dich zukommt. Unten findest du unsere aktuelle Preisliste — und darüber einen Rechner, der dir eine realistische Gesamtsumme für deinen Führerschein schätzt.',
    tableSchool: 'Leistungen der Fahrschule',
    tableThird: 'Fremdkosten (Prüforganisation, Behörde, Arzt)',
    tableExtras: 'Zusatzleistungen',
    colItem: 'Leistung', colPrice: 'Preis',
    perLesson: 'je 45 Minuten',
    third: {
      intro: 'Diese Beträge gehen nicht an die Fahrschule, sondern an TÜV bzw. DEKRA, an die Führerscheinstelle oder an den Arzt. Wir führen sie hier nur zur Vollständigkeit auf, damit du die Gesamtkosten im Blick hast.'
    },
    legalNote: 'Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer. Nach § 19 Fahrlehrergesetz hängen unsere Entgelte zusätzlich in den Geschäftsräumen aus. Die tatsächliche Höhe der Gesamtkosten richtet sich nach der Anzahl der benötigten Fahrstunden.',
    priceTitle: 'Unsere Preisliste',
    payTitle: 'Zahlung und Fälligkeit',
    payText: 'Der Grundbetrag wird bei der Anmeldung fällig. Fahrstunden und Sonderfahrten rechnen wir laufend ab, die Vorstellungsentgelte jeweils vor der Prüfung. Du zahlst also nie alles auf einmal. Wenn du eine andere Aufteilung brauchst, sprich uns einfach an.',
    items: {
      grundbetrag: 'Grundbetrag (Anmeldung, Theorieunterricht, Verwaltung)',
      lernmaterial: 'Lernmaterial (Lehrbuch und Online-/App-Zugang)',
      fahrstunde: 'Übungsfahrstunde',
      sonderfahrt: 'Sonderfahrt (Überland, Autobahn, Nacht)',
      vorstellungTheorie: 'Vorstellungsentgelt theoretische Prüfung',
      vorstellungPraxis: 'Vorstellungsentgelt praktische Prüfung',
      pruefTheorie: 'Prüfungsgebühr Theorie (TÜV/DEKRA)',
      pruefPraxis: 'Prüfungsgebühr Praxis (TÜV/DEKRA)',
      sehtest: 'Amtlicher Sehtest',
      ersteHilfe: 'Erste-Hilfe-Kurs (9 Unterrichtseinheiten)',
      passbild: 'Biometrisches Passbild',
      antrag: 'Antragsgebühr Führerscheinstelle',
      b96: 'Schlüsselzahl B96 — Komplettpaket',
      simulator: 'Fahrsimulator je Einheit',
      intensiv: 'Aufschlag Ferien- oder Intensivkurs'
    }
  },

  /* ------------------------------------------------------------- Rechner */
  calc: {
    title: 'Kostenrechner',
    lead: 'Stell einfach ein, was auf dich zutrifft. Die Schätzung aktualisiert sich sofort.',
    stepClass: 'Welchen Führerschein möchtest du machen?',
    stepLessons: 'Wie viele Übungsfahrstunden planst du ein?',
    stepOptions: 'Was trifft auf dich zu?',
    avgHint: 'Durchschnitt bei dieser Klasse: etwa {n} Übungsstunden. Die gesetzlich vorgeschriebenen Sonderfahrten sind bereits zusätzlich eingerechnet.',
    lessonsUnit: 'Stunden',

    opt: {
      firstLicence:  { t:'Es ist mein erster Führerschein', d:'Sehtest, Erste-Hilfe-Kurs, Passbild und Antragsgebühr fallen dann zusätzlich an.' },
      schalt:        { t:'Schaltkompetenz nachweisen (B197)', d:'Zehn zusätzliche Fahrstunden auf einem Schaltfahrzeug plus Testfahrt — danach darfst du auch Schaltwagen fahren.' },
      sehtest:       { t:'Sehtest wird noch benötigt', d:'Beim Optiker oder Augenarzt, gültig zwei Jahre.' },
      ersteHilfe:    { t:'Erste-Hilfe-Kurs wird noch benötigt', d:'Neun Unterrichtseinheiten, gilt unbefristet.' },
      passbild:      { t:'Biometrisches Passbild wird noch benötigt', d:'Für den Antrag bei der Führerscheinstelle.' },
      antrag:        { t:'Antragsgebühr der Behörde einrechnen', d:'Gebühr der Führerscheinstelle für die Bearbeitung deines Antrags.' },
      intensiv:      { t:'Intensiv- oder Ferienkurs', d:'Kompakte Ausbildung in kurzer Zeit, mit Aufschlag.' },
      retryBuffer:   { t:'Puffer für eine Wiederholungsprüfung', d:'Rechnet eine zweite praktische Prüfung samt Vorstellungsentgelt mit ein.' }
    },

    groupSchool: 'Leistungen der Fahrschule',
    groupThird: 'Fremdkosten (TÜV/DEKRA, Behörde, Arzt)',
    subtotalSchool: 'Zwischensumme Fahrschule',
    subtotalThird: 'Zwischensumme Fremdkosten',
    estimate: 'Geschätzte Gesamtkosten',
    range: 'Realistische Spanne: {low} bis {high}',
    reset: 'Zurücksetzen',
    print: 'Als PDF speichern',

    row: {
      grundbetrag:'Grundbetrag', lernmaterial:'Lernmaterial',
      fahrstunden:'Übungsfahrstunden', schaltstunden:'Fahrstunden Schaltfahrzeug',
      sonderfahrten:'Pflicht-Sonderfahrten', bf17:'Aufschlag Begleitetes Fahren',
      b197nachweis:'Nachweis Schaltkompetenz', intensiv:'Aufschlag Intensivkurs',
      vorstellungTheorie:'Vorstellungsentgelt Theorie', vorstellungPraxis:'Vorstellungsentgelt Praxis',
      pruefTheorie:'Prüfungsgebühr Theorie', pruefPraxis:'Prüfungsgebühr Praxis',
      sehtest:'Sehtest', ersteHilfe:'Erste-Hilfe-Kurs', passbild:'Passbild',
      antrag:'Antragsgebühr Behörde',
      retrySchool:'Puffer: zweites Vorstellungsentgelt', retryFee:'Puffer: zweite Prüfungsgebühr'
    },
    pkg: { B96:'Komplettpaket Schlüsselzahl B96' },

    info: { age:'Mindestalter {n} Jahre', theory:'{n} Doppelstunden Theorie',
            special:'{n} Pflicht-Sonderfahrten', noExam:'Ohne praktische Prüfung' },

    disclaimer: 'Diese Berechnung ist eine unverbindliche Schätzung und kein Angebot im Rechtssinne. Wie viele Fahrstunden du tatsächlich brauchst, lässt sich vorher niemandem seriös versprechen — es hängt von deinem Lerntempo, deiner Vorerfahrung und der Verkehrssituation vor Ort ab. Fremdkosten für TÜV/DEKRA, Behörde und Arzt können sich jederzeit ändern. Maßgeblich ist immer die in der Fahrschule ausgehängte Preisliste nach § 19 Fahrlehrergesetz.'
  },

  /* ------------------------------------------------------------ Ablauf */
  process: {
    metaTitle: 'Ablauf der Fahrausbildung',
    metaDesc: 'Von der Anmeldung bis zum Führerschein: So läuft die Fahrausbildung bei der B&B Fahrschule Schritt für Schritt ab.',
    title: 'So kommst du zum Führerschein',
    lead: 'Der Weg zum Führerschein ist klar geregelt — und wir gehen ihn gemeinsam mit dir. Hier siehst du jeden Schritt, was du dafür brauchst und wie lange es ungefähr dauert.',
    stepsTitle: 'Dein Weg in acht Schritten',
    duration: 'Dauer',
    youNeed: 'Das brauchst du',
    steps: [
      { t:'Beratung und Anmeldung',
        d:'Komm zu einem kostenlosen Beratungsgespräch vorbei. Wir klären, welche Klasse zu dir passt, wie der Zeitplan aussieht und was es kostet. Danach füllst du den Ausbildungsvertrag aus.',
        dur:'ca. 30 Minuten', need:'Personalausweis oder Reisepass' },
      { t:'Sehtest und Erste-Hilfe-Kurs',
        d:'Den Sehtest machst du beim Optiker, den Erste-Hilfe-Kurs mit neun Unterrichtseinheiten bei einer anerkannten Stelle. Beides brauchst du für den Antrag.',
        dur:'ein Nachmittag', need:'Sehtest, Erste-Hilfe-Bescheinigung, Passbild' },
      { t:'Antrag bei der Führerscheinstelle',
        d:'Wir stellen den Antrag gemeinsam mit dir und reichen ihn bei der zuständigen Behörde ein. Die Bearbeitung dauert je nach Stadt einige Wochen — fang also früh an.',
        dur:'4 bis 8 Wochen Bearbeitung', need:'Alle Unterlagen aus Schritt 2' },
      { t:'Theorieunterricht',
        d:'Für die Klasse B sind zwölf Doppelstunden Grundstoff und zwei Doppelstunden klassenspezifischer Zusatzstoff vorgeschrieben. Parallel lernst du mit App und Online-Zugang.',
        dur:'3 bis 6 Wochen', need:'Lernmaterial und Zugangsdaten' },
      { t:'Theoretische Prüfung',
        d:'Die Prüfung legst du am Computer bei TÜV oder DEKRA ab. Für die Klasse B darfst du höchstens zehn Fehlerpunkte haben. Die Prüfung kann in mehreren Sprachen abgelegt werden.',
        dur:'ca. 45 Minuten', need:'Ausweis und Prüfauftrag' },
      { t:'Praktische Ausbildung',
        d:'Jetzt geht es aufs Fahrzeug. Zuerst Grundfahraufgaben auf ruhigen Strecken, dann Stadtverkehr. Dein Fahrlehrer plant die Stunden so, dass du stetig sicherer wirst.',
        dur:'individuell', need:'Führerscheinantrag muss genehmigt sein' },
      { t:'Sonderfahrten',
        d:'Zwölf gesetzlich vorgeschriebene Fahrten für die Klasse B: fünf Überlandfahrten, vier Autobahnfahrten und drei Nachtfahrten. Sie sind Pflicht und können nicht ersetzt werden.',
        dur:'12 × 45 Minuten', need:'Bestandene Theorieprüfung' },
      { t:'Praktische Prüfung',
        d:'Rund 45 Minuten fährst du mit einem Prüfer von TÜV oder DEKRA. Wenn alles passt, bekommst du direkt im Anschluss deinen Führerschein ausgehändigt oder abgeholt.',
        dur:'ca. 45 bis 55 Minuten', need:'Ausweis, Prüfauftrag, Sehtest' }
    ],
    tipsTitle: 'Tipps, mit denen es schneller geht',
    tips: ['Melde dich an, bevor du 17 bzw. 18 wirst — die Behörde braucht Bearbeitungszeit.',
           'Besuche den Theorieunterricht möglichst am Stück statt verteilt über Monate.',
           'Lerne täglich zehn Minuten mit der App statt einmal pro Woche zwei Stunden.',
           'Nimm mindestens zwei Fahrstunden pro Woche — sonst verlierst du zwischendurch wieder Sicherheit.',
           'Lege die Sonderfahrten erst, wenn du im Stadtverkehr sicher bist.'],
    ctaTitle: 'Fragen zum Ablauf?',
    ctaLead: 'Wir erklären dir gern in Ruhe, was als Nächstes ansteht — telefonisch, per WhatsApp oder direkt bei uns im Büro.'
  },

  /* ----------------------------------------------------------- Über uns */
  about: {
    metaTitle: 'Über uns',
    metaDesc: 'Die B&B Fahrschule stellt sich vor: erfahrene Fahrlehrer, moderne Fahrzeuge und eine Ausbildung in vier Sprachen.',
    title: 'Über die B&B Fahrschule',
    lead: 'Wir sind eine inhabergeführte Fahrschule, die sich Zeit für ihre Fahrschüler nimmt. Kein Massenbetrieb, keine wechselnden Fahrlehrer — sondern persönliche Betreuung vom ersten Gespräch bis zur bestandenen Prüfung.',
    storyTitle: 'Unsere Geschichte',
    storyText: 'Angefangen haben wir mit zwei Fahrzeugen und der Überzeugung, dass Fahrschule auch entspannt gehen kann. Seitdem haben wir viele Fahrschülerinnen und Fahrschüler begleitet — junge Menschen auf dem Weg zur ersten eigenen Mobilität genauso wie Erwachsene, die den Führerschein später nachholen. Was sich nicht geändert hat: Wir nehmen uns Zeit, wir reden Klartext, und wir verkaufen niemandem Fahrstunden, die er nicht braucht.',
    valuesTitle: 'Wofür wir stehen',
    values: [
      { t:'Geduld', d:'Jeder lernt anders schnell. Bei uns gibt es kein Genervtsein und keinen Druck — sondern so viele Erklärungen, wie du brauchst.' },
      { t:'Ehrlichkeit', d:'Wir sagen dir offen, wann du prüfungsreif bist. Auch dann, wenn das bedeutet, dass wir weniger verdienen.' },
      { t:'Sicherheit', d:'Wir bilden nicht für die Prüfung aus, sondern fürs echte Leben danach. Dazu gehören Gefahrenerkennung und vorausschauendes Fahren.' },
      { t:'Offenheit', d:'Bei uns ist jeder willkommen — unabhängig von Herkunft, Alter oder Sprache. Wir betreuen auf Deutsch, Englisch, Türkisch und Arabisch.' }
    ],
    teamTitle: 'Dein Team',
    teamLead: 'Wir sind ein kleines Team und du wirst uns alle kennenlernen. Dein Fahrlehrer bleibt dabei über die gesamte Ausbildung derselbe.',
    team: [
      { n:'[PLATZHALTER] Name', r:'Inhaber & Fahrlehrer', d:'Fahrlehrerlaubnis der Klassen A und B, seit vielen Jahren im Beruf. Bringt jedem das Einparken bei.' },
      { n:'[PLATZHALTER] Name', r:'Fahrlehrerin', d:'Spezialistin für ängstliche Fahranfänger und Wiedereinsteiger nach langer Pause.' },
      { n:'[PLATZHALTER] Name', r:'Büro & Anmeldung', d:'Kümmert sich um Termine, Anträge und alle Fragen rund um Unterlagen und Gebühren.' }
    ],
    teamNote: 'Die Angaben zum Team sind noch Platzhalter und werden vor dem Livegang durch die echten Personen ersetzt.',
    fleetTitle: 'Unsere Fahrzeuge',
    ctaTitle: 'Lern uns kennen',
    ctaLead: 'Der beste Weg, eine Fahrschule einzuschätzen, ist ein Besuch. Komm während der Bürozeiten vorbei — ein Termin ist nicht nötig.'
  },

  /* ------------------------------------------------------------- Kontakt */
  contact: {
    metaTitle: 'Kontakt',
    metaDesc: 'Kontakt zur B&B Fahrschule: Adresse, Telefon, E-Mail und Öffnungszeiten. Jetzt unverbindlich beraten lassen.',
    title: 'Kontakt',
    lead: 'Ruf uns an, schreib uns oder komm einfach vorbei. Die Erstberatung ist kostenlos und unverbindlich.',
    addressTitle: 'Adresse',
    phoneTitle: 'Telefon',
    mobileTitle: 'Mobil & WhatsApp',
    mailTitle: 'E-Mail',
    hoursTitle: 'Öffnungszeiten',
    theoryTitle: 'Theorieunterricht',
    directions: 'Route planen',
    formTitle: 'Schreib uns',
    formLead: 'Fülle einfach das Formular aus — wir melden uns in der Regel innerhalb eines Werktages zurück.',
    mapTitle: 'Standort der B&B Fahrschule',
    mapConsent: 'Beim Laden der Karte werden Daten an den Kartenanbieter übertragen, unter anderem deine IP-Adresse. Erst nach deinem Klick wird die Karte geladen.',
    mapLoad: 'Karte laden',
    mapNote: 'Mehr dazu in unserer Datenschutzerklärung.'
  },

  form: {
    title: 'Kontaktformular',
    submit: 'Nachricht senden',
    sending: 'Wird gesendet …',
    okSent: 'Vielen Dank! Deine Nachricht ist bei uns angekommen. Wir melden uns schnellstmöglich zurück.',
    errSend: 'Das hat leider nicht geklappt. Bitte versuche es erneut oder ruf uns direkt an.',
    errValidation: 'Bitte fülle die markierten Pflichtfelder aus.',
    mailtoFallback: 'Dein E-Mail-Programm wurde geöffnet. Bitte schicke die vorbereitete Nachricht ab.',
    mailSubject: 'Anfrage über die Website',
    required: 'Pflichtfeld',
    f: {
      name:'Name', email:'E-Mail', phone:'Telefon', klasse:'Gewünschte Führerscheinklasse',
      message:'Deine Nachricht', website:'Bitte frei lassen'
    },
    ph: {
      name:'Vor- und Nachname', email:'name@beispiel.de', phone:'Optional, für den Rückruf',
      message:'Worum geht es? Schreib uns gern, wann du am besten erreichbar bist.'
    },
    selectClass: 'Bitte auswählen',
    other: 'Weiß ich noch nicht',
    privacy: 'Ich habe die <a href="datenschutz.html">Datenschutzerklärung</a> gelesen und bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert werden.',
    privacyNote: 'Deine Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet und nicht an Dritte weitergegeben. Du kannst deine Einwilligung jederzeit widerrufen.'
  },

  /* -------------------------------------------------------------- Footer */
  footer: {
    about: 'Deine Fahrschule für alle gängigen Führerscheinklassen — persönlich, modern und mit fairen Preisen.',
    navTitle: 'Fahrschule', legalTitle: 'Rechtliches', contactTitle: 'Kontakt',
    rights: 'Alle Rechte vorbehalten.',
    socialTitle: 'Folge uns',
    madeNote: 'Diese Website enthält keine Tracking-Cookies.'
  },

  cookie: {
    title: 'Cookies und Statistik',
    text: 'Wir verwenden nur technisch notwendige Speicherung. Zusätzlich möchten wir anonyme Statistiken erheben, um die Website zu verbessern. Du entscheidest.',
    accept: 'Einverstanden', decline: 'Nur Notwendige'
  },

  notfound: {
    metaTitle: 'Seite nicht gefunden',
    title: 'Hier geht es nicht weiter',
    lead: 'Diese Seite existiert nicht oder wurde verschoben. Vielleicht hilft dir einer dieser Wege weiter:',
    home: 'Zur Startseite'
  },

  legal: {
    toc: 'Inhalt',
    updated: 'Stand dieser Fassung',
    bindingNote: 'Rechtlich maßgeblich ist ausschließlich die deutsche Fassung dieses Dokuments. Übersetzungen dienen nur der besseren Verständlichkeit.',

    impressum: {
      metaTitle: 'Impressum',
      metaDesc: 'Impressum der B&B Fahrschule gemäß § 5 DDG mit Anbieterkennzeichnung, Aufsichtsbehörde und Berufsangaben.',
      title: 'Impressum',
      lead: 'Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Absatz 2 Medienstaatsvertrag (MStV).',
      sections: [
        { h: 'Diensteanbieter', html:
          '<p>Verantwortlicher Diensteanbieter dieser Website im Sinne des § 5 DDG ist:</p>' +
          '<address><strong>{business.legalName}</strong><br>{business.street}<br>{business.zip} {business.city}<br>{business.country}</address>' +
          '<p>Vertreten durch: {business.owner}</p>' +
          '<p>Registereintrag: {business.register}</p>' },

        { h: 'Kontakt', html:
          '<p>Telefon: {business.phone}<br>Mobil: {business.mobile}<br>E-Mail: {business.email}<br>Internet: {business.website}</p>' },

        { h: 'Umsatzsteuer-Identifikationsnummer', html:
          '<p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br>{business.vatId}</p>' +
          '<p>Steuernummer: {business.taxNumber}</p>' },

        { h: 'Zuständige Aufsichtsbehörde', html:
          '<p>Die Erlaubnis zum Betrieb einer Fahrschule wurde erteilt durch:</p>' +
          '<address>{business.licenceAuthority}</address>' +
          '<p>Fahrschulerlaubnis: {business.licenceNumber}</p>' +
          '<p>Die Aufsicht über die Fahrschule und die Fahrlehrer obliegt der vorgenannten Behörde.</p>' },

        { h: 'Berufsbezeichnung und berufsrechtliche Regelungen', html:
          '<p>Berufsbezeichnung: {business.profession}</p>' +
          '<p>Es gelten insbesondere folgende berufsrechtliche Regelungen:</p>' +
          '<ul>' +
          '<li>Fahrlehrergesetz (FahrlG)</li>' +
          '<li>Fahrschüler-Ausbildungsordnung (FahrschAusbO)</li>' +
          '<li>Durchführungsverordnung zum Fahrlehrergesetz (DV-FahrlG)</li>' +
          '<li>Fahrerlaubnis-Verordnung (FeV)</li>' +
          '<li>Straßenverkehrsgesetz (StVG)</li>' +
          '</ul>' +
          '<p>Die genannten Regelungen können unter <a href="{business.professionLawUrl}" target="_blank" rel="noopener noreferrer">gesetze-im-internet.de</a> eingesehen werden.</p>' },

        { h: 'Berufshaftpflichtversicherung', html:
          '<p>Name und Sitz des Versicherers:</p>' +
          '<address>{business.insurer}</address>' +
          '<p>Räumlicher Geltungsbereich des Versicherungsschutzes: {business.insuranceScope}</p>' },

        { h: 'Redaktionell verantwortlich', html:
          '<p>Verantwortlich für journalistisch-redaktionelle Inhalte gemäß § 18 Absatz 2 MStV:</p>' +
          '<address>{business.owner}<br>{business.street}<br>{business.zip} {business.city}</address>' },

        { h: 'Verbraucherstreitbeilegung', html:
          '<p>Die Europäische Kommission hat den Betrieb ihrer Plattform zur Online-Streitbeilegung (OS-Plattform) zum 20. Juli 2025 eingestellt. Ein Verweis auf diese Plattform ist daher nicht mehr möglich.</p>' +
          '<p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle im Sinne des Verbraucherstreitbeilegungsgesetzes (VSBG) teilzunehmen. Diese Information erfolgt nach § 36 VSBG.</p>' +
          '<p>Selbstverständlich bemühen wir uns, Meinungsverschiedenheiten mit unseren Fahrschülerinnen und Fahrschülern stets im direkten Gespräch zu klären. Wenden Sie sich in einem solchen Fall bitte zunächst an die oben genannten Kontaktdaten.</p>' },

        { h: 'Haftung für Inhalte', html:
          '<p>Als Diensteanbieter sind wir gemäß § 7 Absatz 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach den §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>' +
          '<p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>' +
          '<p>Alle Angaben zu Preisen, Ausbildungsinhalten, Fristen und gesetzlichen Anforderungen auf dieser Website wurden sorgfältig recherchiert. Eine Gewähr für Aktualität, Richtigkeit und Vollständigkeit können wir jedoch nicht übernehmen. Maßgeblich sind stets die jeweils geltenden gesetzlichen Bestimmungen sowie die in unseren Geschäftsräumen ausgehängte Preisliste nach § 19 FahrlG.</p>' },

        { h: 'Haftung für Links', html:
          '<p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>' +
          '<p>Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>' },

        { h: 'Urheberrecht', html:
          '<p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>' +
          '<p>Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>' },

        { h: 'Bildnachweise', html:
          '<p>Logo und Wort-Bild-Marke: {business.legalName}</p>' +
          '<p>[PLATZHALTER] Fahrzeugabbildung (VW T-Roc): Der Rechteinhaber dieser Aufnahme ist hier zwingend zu benennen, oder die Abbildung ist vor dem Livegang durch ein eigenes Foto des Schulfahrzeugs bzw. durch lizenziertes Bildmaterial zu ersetzen.</p>' +
          '<p>Sämtliche Icons dieser Website wurden als eigene SVG-Grafiken erstellt.</p>' }
      ]
    },

    datenschutz: {
      metaTitle: 'Datenschutzerklärung',
      metaDesc: 'Datenschutzerklärung der B&B Fahrschule nach DSGVO: Verarbeitung, Rechtsgrundlagen, Speicherdauer und Betroffenenrechte.',
      title: 'Datenschutzerklärung',
      lead: 'Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie gemäß Artikel 13 und 14 der Datenschutz-Grundverordnung (DSGVO) darüber, welche Daten wir verarbeiten und welche Rechte Ihnen zustehen.',
      sections: [
        { h: 'Verantwortlicher', html:
          '<p>Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne des Artikel 4 Nummer 7 DSGVO ist:</p>' +
          '<address><strong>{business.legalName}</strong><br>{business.street}<br>{business.zip} {business.city}<br>Telefon: {business.phone}<br>E-Mail: {business.email}</address>' +
          '<p>Ein Datenschutzbeauftragter ist nicht bestellt, da die gesetzlichen Voraussetzungen des § 38 Bundesdatenschutzgesetz hierfür nicht vorliegen. Bei Fragen zum Datenschutz wenden Sie sich bitte direkt an die oben genannten Kontaktdaten.</p>' },

        { h: 'Grundsätzliches zur Datenverarbeitung', html:
          '<p>Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Leistungen erforderlich ist. Eine Verarbeitung erfolgt regelmäßig nur nach Ihrer Einwilligung oder wenn eine Rechtsvorschrift die Verarbeitung gestattet.</p>' +
          '<p>Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können, beispielsweise Name, Anschrift, Telefonnummer oder E-Mail-Adresse.</p>' +
          '<p>Wir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>' },

        { h: 'Hosting', html:
          '<p>Diese Website wird bei einem externen Dienstleister gehostet. Die auf dieser Website erfassten personenbezogenen Daten werden auf den Servern des Hosters gespeichert. Hierbei kann es sich vor allem um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten sowie Zugriffsdaten handeln.</p>' +
          '<p>[PLATZHALTER] Name und vollständige Anschrift des Hosting-Anbieters sind hier einzutragen.</p>' +
          '<p>Der Einsatz des Hosters erfolgt im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Onlineangebots durch einen professionellen Anbieter. Rechtsgrundlage ist Artikel 6 Absatz 1 Buchstabe f DSGVO (berechtigtes Interesse).</p>' +
          '<p>Mit dem Hosting-Anbieter besteht ein Vertrag über die Auftragsverarbeitung gemäß Artikel 28 DSGVO.</p>' },

        { h: 'Server-Logfiles', html:
          '<p>Der Provider dieser Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>' +
          '<ul>' +
          '<li>Browsertyp und Browserversion</li>' +
          '<li>verwendetes Betriebssystem</li>' +
          '<li>Referrer-URL</li>' +
          '<li>Hostname des zugreifenden Rechners</li>' +
          '<li>Uhrzeit der Serveranfrage</li>' +
          '<li>IP-Adresse</li>' +
          '</ul>' +
          '<p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Artikel 6 Absatz 1 Buchstabe f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website. Hierzu müssen die Server-Logfiles erfasst werden.</p>' +
          '<p>Die Logfiles werden in der Regel nach spätestens sieben Tagen gelöscht, soweit sie nicht zur Aufklärung eines konkreten Missbrauchsfalls benötigt werden.</p>' },

        { h: 'Lokale Speicherung im Browser', html:
          '<p>Diese Website setzt keine Tracking-Cookies ein. Für die Grundfunktionen nutzen wir den lokalen Speicher Ihres Browsers (Local Storage). Dort werden ausschließlich folgende Angaben abgelegt:</p>' +
          '<ul>' +
          '<li><strong>bb-lang</strong> — die von Ihnen gewählte Sprache, damit die Seite beim nächsten Besuch in derselben Sprache erscheint</li>' +
          '<li><strong>bb-map-consent</strong> — Ihre Entscheidung, die Kartenansicht zu laden</li>' +
          '<li><strong>bb-consent</strong> — Ihre Entscheidung zur Statistikerfassung, sofern diese aktiviert ist</li>' +
          '</ul>' +
          '<p>Diese Angaben verbleiben ausschließlich auf Ihrem Endgerät und werden nicht an uns oder an Dritte übertragen. Da es sich um eine von Ihnen ausdrücklich gewünschte Funktion handelt, ist die Speicherung nach § 25 Absatz 2 Nummer 2 des Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG) einwilligungsfrei. Sie können die gespeicherten Angaben jederzeit über die Einstellungen Ihres Browsers löschen.</p>' },

        { h: 'Kontaktaufnahme', html:
          '<h3>Kontaktformular</h3>' +
          '<p>Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>' +
          '<p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Artikel 6 Absatz 1 Buchstabe b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Artikel 6 Absatz 1 Buchstabe f DSGVO) oder auf Ihrer Einwilligung (Artikel 6 Absatz 1 Buchstabe a DSGVO).</p>' +
          '<h3>Anfragen per E-Mail, Telefon oder Messenger</h3>' +
          '<p>Wenn Sie uns per E-Mail, Telefon oder über einen Messenger-Dienst kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.</p>' +
          '<p>Bitte beachten Sie, dass bei der Nutzung von WhatsApp Daten an den Betreiber des Dienstes übertragen werden. Wenn Sie dies vermeiden möchten, nutzen Sie bitte Telefon, E-Mail oder das Kontaktformular.</p>' },

        { h: 'Ausbildungsvertrag und Fahrschülerdaten', html:
          '<p>Im Rahmen der Anmeldung und der Fahrausbildung verarbeiten wir die zur Durchführung des Ausbildungsvertrags erforderlichen Daten. Dazu gehören insbesondere Name, Anschrift, Geburtsdatum, Kontaktdaten, Angaben zum Ausbildungsstand, die Ausbildungsnachweise sowie Zahlungsdaten.</p>' +
          '<p>Rechtsgrundlage ist Artikel 6 Absatz 1 Buchstabe b DSGVO (Vertragserfüllung). Soweit wir zur Führung von Ausbildungsnachweisen gesetzlich verpflichtet sind, erfolgt die Verarbeitung zusätzlich auf Grundlage von Artikel 6 Absatz 1 Buchstabe c DSGVO in Verbindung mit dem Fahrlehrergesetz und der Fahrschüler-Ausbildungsordnung.</p>' +
          '<p>Eine Übermittlung Ihrer Daten erfolgt an die zuständige Fahrerlaubnisbehörde sowie an die amtlich anerkannte Prüforganisation (TÜV oder DEKRA), soweit dies zur Anmeldung zur Prüfung erforderlich ist.</p>' },

        { h: 'Kartendarstellung', html:
          '<p>Auf unserer Kontaktseite binden wir eine Kartenansicht ein, um Ihnen die Anfahrt zu erleichtern. Die Karte wird <strong>nicht automatisch geladen</strong>. Erst wenn Sie aktiv auf die Schaltfläche „Karte laden" klicken, wird eine Verbindung zu den Servern des Kartenanbieters hergestellt.</p>' +
          '<p>Dabei wird Ihre IP-Adresse an den Anbieter übermittelt. Rechtsgrundlage für diese Übermittlung ist Ihre Einwilligung nach Artikel 6 Absatz 1 Buchstabe a DSGVO und § 25 Absatz 1 TDDDG. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den lokalen Speicher Ihres Browsers löschen.</p>' +
          '<p>Solange Sie die Karte nicht laden, findet keinerlei Datenübertragung an den Kartenanbieter statt.</p>' },

        { h: 'Schriftarten und externe Inhalte', html:
          '<p>Diese Website verwendet ausschließlich die auf Ihrem Endgerät bereits vorhandenen Systemschriftarten. Es werden keine externen Schriftarten nachgeladen, insbesondere keine Google Fonts. Dadurch findet beim Aufruf unserer Seiten keine Verbindung zu Servern Dritter statt.</p>' +
          '<p>Auch Bilder, Symbole und Skripte werden ausschließlich von unserem eigenen Server ausgeliefert.</p>' },

        { h: 'Reichweitenmessung', html:
          '<p>In der Grundeinstellung dieser Website ist keine Reichweitenmessung aktiv. Sollte zu einem späteren Zeitpunkt ein Statistikwerkzeug eingesetzt werden, geschieht dies ausschließlich nach Ihrer ausdrücklichen Einwilligung über einen entsprechenden Hinweis beim Seitenaufruf. Rechtsgrundlage wäre dann Artikel 6 Absatz 1 Buchstabe a DSGVO in Verbindung mit § 25 Absatz 1 TDDDG.</p>' +
          '<p>Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</p>' },

        { h: 'Empfänger und Auftragsverarbeitung', html:
          '<p>Ihre Daten werden nur an Dritte weitergegeben, wenn dies zur Vertragserfüllung erforderlich ist, eine gesetzliche Verpflichtung besteht oder Sie ausdrücklich eingewilligt haben. Mögliche Empfänger sind:</p>' +
          '<ul>' +
          '<li>der Hosting-Anbieter dieser Website</li>' +
          '<li>die zuständige Fahrerlaubnisbehörde</li>' +
          '<li>die amtlich anerkannte Prüforganisation (TÜV oder DEKRA)</li>' +
          '<li>unser Steuerberater sowie das Finanzamt im Rahmen gesetzlicher Aufbewahrungspflichten</li>' +
          '<li>Zahlungsdienstleister und Kreditinstitute bei bargeldloser Zahlung</li>' +
          '</ul>' +
          '<p>Mit Dienstleistern, die in unserem Auftrag personenbezogene Daten verarbeiten, haben wir Verträge zur Auftragsverarbeitung nach Artikel 28 DSGVO geschlossen. Eine Übermittlung in Drittländer außerhalb der Europäischen Union findet nicht statt.</p>' },

        { h: 'Speicherdauer', html:
          '<p>Soweit in dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.</p>' +
          '<ul>' +
          '<li>Anfragen ohne Vertragsschluss: Löschung spätestens sechs Monate nach abschließender Bearbeitung</li>' +
          '<li>Ausbildungsunterlagen: entsprechend den Vorgaben des Fahrlehrergesetzes</li>' +
          '<li>Rechnungen und steuerlich relevante Unterlagen: zehn Jahre gemäß § 147 Abgabenordnung und § 257 Handelsgesetzbuch</li>' +
          '<li>Server-Logfiles: in der Regel sieben Tage</li>' +
          '</ul>' +
          '<p>Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung widerrufen, werden Ihre Daten gelöscht, sofern keine anderen rechtlich zulässigen Gründe für die Speicherung bestehen.</p>' },

        { h: 'Ihre Rechte als betroffene Person', html:
          '<p>Ihnen stehen gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten zu:</p>' +
          '<ul>' +
          '<li><strong>Auskunft</strong> (Artikel 15 DSGVO) — Sie können Auskunft darüber verlangen, ob und welche Daten wir über Sie verarbeiten.</li>' +
          '<li><strong>Berichtigung</strong> (Artikel 16 DSGVO) — Sie können die Korrektur unrichtiger oder die Vervollständigung unvollständiger Daten verlangen.</li>' +
          '<li><strong>Löschung</strong> (Artikel 17 DSGVO) — Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>' +
          '<li><strong>Einschränkung der Verarbeitung</strong> (Artikel 18 DSGVO)</li>' +
          '<li><strong>Datenübertragbarkeit</strong> (Artikel 20 DSGVO) — Herausgabe Ihrer Daten in einem strukturierten, gängigen und maschinenlesbaren Format.</li>' +
          '<li><strong>Widerruf einer Einwilligung</strong> (Artikel 7 Absatz 3 DSGVO) — jederzeit mit Wirkung für die Zukunft.</li>' +
          '</ul>' +
          '<p>Zur Ausübung dieser Rechte genügt eine formlose Nachricht an die im Abschnitt „Verantwortlicher" genannten Kontaktdaten.</p>' },

        { h: 'Widerspruchsrecht nach Artikel 21 DSGVO', html:
          '<p><strong>Wenn die Datenverarbeitung auf Grundlage von Artikel 6 Absatz 1 Buchstabe e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.</strong></p>' +
          '<p>Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>' },

        { h: 'Beschwerderecht bei der Aufsichtsbehörde', html:
          '<p>Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.</p>' +
          '<p>Da die Fahrschule ihren Sitz in Koblenz (Rheinland-Pfalz) hat, ist dies:</p>' +
          '<address>Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz<br>Hintere Bleiche 34<br>55116 Mainz</address>' +
          '<p>[PLATZHALTER] Bitte die Anschrift der Aufsichtsbehörde vor dem Livegang auf Aktualität prüfen.</p>' +
          '<p>Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>' },

        { h: 'SSL- und TLS-Verschlüsselung', html:
          '<p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- beziehungsweise TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und am Schloss-Symbol in Ihrer Browserzeile.</p>' +
          '<p>Wenn die SSL- oder TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>' },

        { h: 'Änderungen dieser Datenschutzerklärung', html:
          '<p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen, etwa bei der Einführung neuer Funktionen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>' }
      ]
    },

    agb: {
      metaTitle: 'Allgemeine Geschäftsbedingungen',
      metaDesc: 'Allgemeine Geschäftsbedingungen der B&B Fahrschule für den Ausbildungsvertrag: Leistungen, Entgelte, Absagen und Kündigung.',
      title: 'Allgemeine Geschäftsbedingungen',
      lead: 'Diese Bedingungen gelten für den Ausbildungsvertrag zwischen der B&B Fahrschule und ihren Fahrschülerinnen und Fahrschülern.',
      sections: [
        { h: 'Geltungsbereich', html:
          '<p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über die Ausbildung zum Erwerb einer Fahrerlaubnis sowie über sonstige Leistungen zwischen {business.legalName} (nachfolgend „Fahrschule") und der Fahrschülerin beziehungsweise dem Fahrschüler (nachfolgend „Fahrschüler").</p>' +
          '<p>Abweichende Bedingungen des Fahrschülers werden nicht Vertragsbestandteil, es sei denn, die Fahrschule stimmt ihrer Geltung ausdrücklich in Textform zu.</p>' +
          '<p>Ergänzend gelten die Vorschriften des Fahrlehrergesetzes, der Fahrschüler-Ausbildungsordnung sowie der Fahrerlaubnis-Verordnung in ihrer jeweils gültigen Fassung.</p>' },

        { h: 'Vertragsschluss', html:
          '<p>Der Ausbildungsvertrag kommt mit der Unterzeichnung des schriftlichen Ausbildungsvertrags durch beide Vertragsparteien zustande. Die Darstellung von Leistungen und Preisen auf dieser Website stellt kein bindendes Angebot dar, sondern eine unverbindliche Aufforderung zur Kontaktaufnahme.</p>' +
          '<p>Bei Minderjährigen ist die Zustimmung des gesetzlichen Vertreters erforderlich. Der gesetzliche Vertreter haftet in diesem Fall neben dem Fahrschüler für die Entgelte.</p>' +
          '<p>Der Fahrschüler versichert, dass er die zum Erwerb der angestrebten Fahrerlaubnis erforderlichen körperlichen und geistigen Voraussetzungen erfüllt und dass gegen ihn keine Maßnahmen bestehen, die dem Erwerb entgegenstehen.</p>' },

        { h: 'Leistungen der Fahrschule', html:
          '<p>Die Fahrschule erbringt die theoretische und praktische Ausbildung nach den Vorgaben der Fahrschüler-Ausbildungsordnung. Sie stellt geeignete Ausbildungsfahrzeuge sowie qualifizierte Fahrlehrer zur Verfügung.</p>' +
          '<p>Die Fahrschule meldet den Fahrschüler nach Erreichen der Ausbildungsreife zur theoretischen und praktischen Prüfung an. Die Entscheidung über die Prüfungsreife trifft der ausbildende Fahrlehrer nach pflichtgemäßem Ermessen.</p>' +
          '<p>Ein Anspruch auf Ausbildung durch einen bestimmten Fahrlehrer besteht nicht. Die Fahrschule ist bemüht, dem Fahrschüler nach Möglichkeit einen festen Fahrlehrer zuzuordnen.</p>' +
          '<p>Die Fahrschule schuldet die ordnungsgemäße Ausbildung, nicht jedoch das Bestehen der Prüfung.</p>' },

        { h: 'Pflichten des Fahrschülers', html:
          '<p>Der Fahrschüler verpflichtet sich:</p>' +
          '<ul>' +
          '<li>zu den vereinbarten Ausbildungsterminen pünktlich und fahrtüchtig zu erscheinen,</li>' +
          '<li>vor jeder praktischen Ausbildungsfahrt keine Mittel zu sich zu nehmen, die die Fahrtüchtigkeit beeinträchtigen, insbesondere keinen Alkohol und keine Betäubungsmittel,</li>' +
          '<li>bei jeder Ausbildungsfahrt einen gültigen Lichtbildausweis sowie die erforderlichen Nachweise mitzuführen,</li>' +
          '<li>Änderungen seiner Anschrift, Telefonnummer oder E-Mail-Adresse unverzüglich mitzuteilen,</li>' +
          '<li>den Anweisungen des Fahrlehrers während der Ausbildungsfahrt Folge zu leisten.</li>' +
          '</ul>' +
          '<p>Erscheint der Fahrschüler erkennbar fahruntüchtig, ist der Fahrlehrer berechtigt und verpflichtet, die Ausbildungsfahrt abzulehnen. Das Entgelt für die ausgefallene Fahrstunde ist in diesem Fall zu entrichten.</p>' },

        { h: 'Entgelte und Fälligkeit', html:
          '<p>Es gelten die im Zeitpunkt des Vertragsschlusses in den Geschäftsräumen der Fahrschule ausgehängten Entgelte nach § 19 Fahrlehrergesetz. Alle Entgelte verstehen sich einschließlich der gesetzlichen Mehrwertsteuer.</p>' +
          '<p>Fällig sind:</p>' +
          '<ul>' +
          '<li>der Grundbetrag sowie das Lernmaterial bei Vertragsschluss,</li>' +
          '<li>die Entgelte für Fahrstunden und Sonderfahrten jeweils nach der erbrachten Leistung, spätestens jedoch monatlich,</li>' +
          '<li>die Vorstellungsentgelte sowie die Gebühren der Prüforganisation vor der jeweiligen Prüfung.</li>' +
          '</ul>' +
          '<p>Die Fahrschule ist berechtigt, die Anmeldung zur Prüfung von der vollständigen Bezahlung der bis dahin erbrachten Leistungen abhängig zu machen.</p>' +
          '<p>Gebühren der Prüforganisation, der Fahrerlaubnisbehörde sowie Kosten für Sehtest, Erste-Hilfe-Kurs und Lichtbilder sind Fremdkosten. Sie werden nicht von der Fahrschule vereinnahmt und können sich jederzeit ändern.</p>' +
          '<p>Bei einer Erhöhung der Entgelte während eines laufenden Ausbildungsverhältnisses gelten die neuen Entgelte für alle nach der Bekanntgabe erbrachten Leistungen. Die Bekanntgabe erfolgt durch Aushang in den Geschäftsräumen mit einer Frist von mindestens vier Wochen.</p>' },

        { h: 'Absage von Ausbildungsterminen', html:
          '<p>Vereinbarte Fahrstunden und Sonderfahrten können vom Fahrschüler kostenfrei abgesagt werden, wenn die Absage spätestens <strong>48 Stunden</strong> vor dem vereinbarten Termin bei der Fahrschule eingeht. Maßgeblich ist der Zugang der Absage während der Bürozeiten.</p>' +
          '<p>Bei späterer Absage oder bei Nichterscheinen ist das vereinbarte Entgelt als Ausfallentgelt zu entrichten. Dies gilt nicht, wenn der Fahrschüler nachweist, dass ihm die rechtzeitige Absage aus einem von ihm nicht zu vertretenden Grund unmöglich war, insbesondere bei plötzlicher Erkrankung gegen Vorlage einer Bescheinigung.</p>' +
          '<p>Muss die Fahrschule einen Termin absagen, wird unverzüglich ein Ersatztermin angeboten. Ein Anspruch auf Schadensersatz besteht nicht, es sei denn, die Fahrschule handelt vorsätzlich oder grob fahrlässig.</p>' },

        { h: 'Prüfungen', html:
          '<p>Die Anmeldung zur theoretischen und praktischen Prüfung erfolgt durch die Fahrschule, sobald die gesetzlichen Voraussetzungen vorliegen und der Fahrlehrer die Ausbildungsreife festgestellt hat.</p>' +
          '<p>Erscheint der Fahrschüler nicht oder nicht rechtzeitig zur Prüfung oder fehlen die erforderlichen Unterlagen, trägt er die dadurch entstehenden Kosten einschließlich eines erneuten Vorstellungsentgelts.</p>' +
          '<p>Bei nicht bestandener Prüfung ist eine erneute Anmeldung frühestens nach Ablauf der gesetzlichen Wartefrist möglich. Für die Wiederholungsprüfung fallen erneut ein Vorstellungsentgelt sowie die Gebühren der Prüforganisation an.</p>' },

        { h: 'Ruhen und Kündigung des Ausbildungsverhältnisses', html:
          '<p>Der Ausbildungsvertrag kann von beiden Seiten jederzeit ohne Einhaltung einer Frist gekündigt werden. Die Kündigung bedarf der Textform.</p>' +
          '<p>Im Falle der Kündigung sind die bis zum Wirksamwerden der Kündigung erbrachten Leistungen abzurechnen und zu bezahlen. Bereits geleistete Zahlungen für noch nicht erbrachte Leistungen werden erstattet.</p>' +
          '<p>Nimmt der Fahrschüler länger als drei Monate keine Ausbildungsleistung in Anspruch, ohne dies mit der Fahrschule abgestimmt zu haben, gilt das Ausbildungsverhältnis als ruhend. Die Fahrschule ist in diesem Fall berechtigt, den Vertrag zu kündigen und abzurechnen.</p>' +
          '<p>Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt für die Fahrschule insbesondere vor, wenn der Fahrschüler wiederholt fahruntüchtig erscheint oder trotz Mahnung mit der Zahlung fälliger Entgelte in Verzug ist.</p>' },

        { h: 'Haftung', html:
          '<p>Die Fahrschule haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen, sowie für sonstige Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen.</p>' +
          '<p>Bei der Verletzung wesentlicher Vertragspflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Fahrschüler regelmäßig vertrauen darf, haftet die Fahrschule auch bei einfacher Fahrlässigkeit, jedoch begrenzt auf den vertragstypischen, vorhersehbaren Schaden.</p>' +
          '<p>Im Übrigen ist die Haftung ausgeschlossen. Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.</p>' +
          '<p>Während der Ausbildungsfahrt gilt der Fahrlehrer als Führer des Fahrzeugs im Sinne des § 2 Absatz 15 Straßenverkehrsgesetz. Für Schäden, die der Fahrschüler während einer Ausbildungsfahrt vorsätzlich oder grob fahrlässig verursacht, haftet er nach den allgemeinen gesetzlichen Bestimmungen.</p>' },

        { h: 'Widerrufsrecht', html:
          '<p>Wurde der Ausbildungsvertrag außerhalb der Geschäftsräume der Fahrschule oder ausschließlich über Fernkommunikationsmittel geschlossen, steht dem Fahrschüler als Verbraucher ein gesetzliches Widerrufsrecht zu.</p>' +
          '<p>Die Einzelheiten ergeben sich aus unserer <a href="widerruf.html">Widerrufsbelehrung</a>, die Bestandteil dieser Bedingungen ist.</p>' },

        { h: 'Datenschutz', html:
          '<p>Die Fahrschule verarbeitet personenbezogene Daten des Fahrschülers ausschließlich im Rahmen der gesetzlichen Bestimmungen. Einzelheiten ergeben sich aus unserer <a href="datenschutz.html">Datenschutzerklärung</a>.</p>' },

        { h: 'Streitbeilegung und Schlussbestimmungen', html:
          '<p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).</p>' +
          '<p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Ist der Fahrschüler Verbraucher, bleiben zwingende Verbraucherschutzvorschriften des Staates seines gewöhnlichen Aufenthalts unberührt.</p>' +
          '<p>Sollten einzelne Bestimmungen dieser Bedingungen ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>' +
          '<p>Änderungen und Ergänzungen des Ausbildungsvertrags bedürfen der Textform.</p>' }
      ]
    },

    widerruf: {
      metaTitle: 'Widerrufsbelehrung',
      metaDesc: 'Widerrufsbelehrung und Muster-Widerrufsformular der B&B Fahrschule für außerhalb der Geschäftsräume geschlossene Verträge.',
      title: 'Widerrufsbelehrung',
      lead: 'Diese Belehrung gilt für Verträge, die außerhalb unserer Geschäftsräume oder ausschließlich über Fernkommunikationsmittel wie Telefon, E-Mail oder unsere Website geschlossen wurden.',
      sections: [
        { h: 'Widerrufsrecht', html:
          '<p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>' +
          '<p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>' +
          '<p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns</p>' +
          '<address>{business.legalName}<br>{business.street}<br>{business.zip} {business.city}<br>Telefon: {business.phone}<br>E-Mail: {business.email}</address>' +
          '<p>mittels einer eindeutigen Erklärung, zum Beispiel eines mit der Post versandten Briefes oder einer E-Mail, über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das untenstehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>' +
          '<p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>' },

        { h: 'Folgen des Widerrufs', html:
          '<p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.</p>' +
          '<p>Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart. In keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>' +
          '<p>Haben Sie verlangt, dass die Dienstleistung während der Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.</p>' },

        { h: 'Vorzeitiges Erlöschen des Widerrufsrechts', html:
          '<p>Das Widerrufsrecht erlischt bei einem Vertrag über die Erbringung von Dienstleistungen vorzeitig, wenn wir die Dienstleistung vollständig erbracht haben und mit der Ausführung der Dienstleistung erst begonnen haben, nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben und gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung durch uns verlieren.</p>' },

        { h: 'Besonderer Hinweis für Fahrschulverträge', html:
          '<p>Wenn Sie ausdrücklich wünschen, dass die Ausbildung bereits vor Ablauf der Widerrufsfrist beginnt, können Sie an theoretischem Unterricht und an Fahrstunden teilnehmen. In diesem Fall schulden Sie uns bei einem späteren Widerruf Wertersatz für die bis dahin tatsächlich erbrachten Leistungen.</p>' +
          '<p>Kosten, die wir in Ihrem Auftrag an Dritte weitergeleitet haben, insbesondere Gebühren der Fahrerlaubnisbehörde und der Prüforganisation, können wir nicht erstatten, soweit diese bereits angefallen sind.</p>' },

        { h: 'Muster-Widerrufsformular', html:
          '<p>Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden Sie es zurück.</p>' +
          '<address>' +
          'An:<br>{business.legalName}<br>{business.street}<br>{business.zip} {business.city}<br>E-Mail: {business.email}<br><br>' +
          'Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*)<br><br>' +
          '_______________________________________________<br><br>' +
          'Bestellt am (*) / erhalten am (*): _____________________<br><br>' +
          'Name des/der Verbraucher(s): _____________________<br><br>' +
          'Anschrift des/der Verbraucher(s): _____________________<br><br>' +
          'Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): _____________________<br><br>' +
          'Datum: _____________________<br><br>' +
          '(*) Unzutreffendes streichen.' +
          '</address>' }
      ]
    }
  }
});
