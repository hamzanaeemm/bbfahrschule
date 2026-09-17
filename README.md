# BBFahrschule — Website

Statische, mehrsprachige Website für eine Fahrschule. Kein Build-Schritt, kein
Framework, keine Abhängigkeiten — HTML, CSS und Vanilla-JavaScript. Die Seite
läuft auf jedem Webspace, der Dateien ausliefern kann.

---

## ⚠️ Vor dem Livegang — Pflichtaufgaben

### 1. Geschäftsdaten eintragen

Alle Geschäftsdaten stehen an **einer einzigen Stelle**: `assets/js/config.js`.
Dort ist jeder noch offene Wert mit `[PLACEHOLDER]` markiert.

**Standort:** Die Fahrschule sitzt in **Koblenz** — Theorieunterricht und Fahrstunden
finden ausschließlich dort statt. Der Ort ist in `config.js` bereits fest eingetragen
und wird automatisch überall eingesetzt (Überschriften, Fließtext, Impressum,
strukturierte Daten). Straße, PLZ und Rufnummer sind noch Platzhalter, aber bereits
auf Koblenz abgestimmt (PLZ-Bereich 56068–56077, Vorwahl 0261).

```bash
grep -n "\[PLACEHOLDER\]" assets/js/config.js
```

Solange Platzhalter übrig sind, erscheint beim lokalen Aufruf ein Warnbalken am
oberen Seitenrand. Auf einer echten Domain wird dieser Balken **nicht** angezeigt.

Betroffen sind unter anderem: Firmierung, Inhaber, Anschrift, Telefon, E-Mail,
Registereintrag, USt-IdNr., Aufsichtsbehörde, Fahrschulerlaubnis, Versicherer,
Öffnungszeiten, Social-Media-Links, Kennzahlen und **sämtliche Preise**.

### 2. Bildrechte klären (wichtig)

Das Fahrzeugbild wurde aus einer fremden Quelle übernommen und freigestellt.
**Für die kommerzielle Nutzung liegen keine Nutzungsrechte vor.**

Vor dem Livegang zwingend eines von beiden:

- ein **eigenes Foto** des Schulfahrzeugs freistellen und als
  `assets/img/car.png` + `assets/img/car.webp` ablegen, **oder**
- Nutzungsrechte am vorhandenen Bild erwerben und den Rechteinhaber im
  Impressum unter „Bildnachweise" benennen.

Der entsprechende Abschnitt ist in allen vier Sprachdateien bereits als
Platzhalter vorbereitet.

### 3. Rechtstexte juristisch prüfen lassen

Impressum, Datenschutzerklärung, AGB und Widerrufsbelehrung sind vollständig und
nach aktueller Rechtslage formuliert (DDG, MStV, DSGVO, TDDDG, FahrlG, VSBG).
Sie sind jedoch **keine Rechtsberatung**. Lassen Sie die Texte vor der
Veröffentlichung von einer Rechtsanwältin oder einem Rechtsanwalt prüfen —
insbesondere AGB und Ausbildungsvertrag.

Offen sind dort zusätzlich:

- Name und Anschrift des **Hosting-Anbieters** (Datenschutz, Abschnitt 3)
- die **Datenschutz-Aufsichtsbehörde** ist bereits eingetragen (LfDI Rheinland-Pfalz,
  Mainz — zuständig für Koblenz). Anschrift vor dem Livegang auf Aktualität prüfen
  (Datenschutz, Abschnitt 15).

> Hinweis: Die EU-Plattform zur Online-Streitbeilegung wurde zum 20.07.2025
> eingestellt. Der früher übliche OS-Link fehlt deshalb bewusst; stattdessen
> steht die Erklärung nach § 36 VSBG im Impressum.

### 4. Domain eintragen

In `robots.txt` und `sitemap.xml` steht eine Beispiel-Domain. Beide Dateien
anpassen. Die strukturierten Daten (schema.org) werden automatisch aus
`config.js` erzeugt und brauchen keine separate Pflege.

### 5. Kontaktformular anbinden

Ein statisches Formular kann ohne Backend nicht versenden. In `config.js`:

```js
form: { endpoint: 'https://formspree.io/f/xxxxxxx' }
```

Bleibt das Feld leer, öffnet das Formular als Rückfalllösung das E-Mail-Programm
der Besucherin oder des Besuchers (`mailto:`) — funktioniert, ist aber
unkomfortabler. Geeignet sind z. B. Formspree, Basin, Web3Forms oder ein eigenes
PHP-Skript.

---

## Lokal ansehen

Wegen der Sprachdateien am besten über einen kleinen Webserver:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

Ein Doppelklick auf `index.html` funktioniert ebenfalls — die Sprachdateien
werden per Script-Tag geladen, nicht per `fetch`, und sind daher auch über
`file://` erreichbar.

---

## Aufbau

```
.
├── index.html                  Startseite
├── fuehrerscheinklassen.html   Alle Führerscheinklassen
├── preise.html                 Preisliste + Kostenrechner
├── ablauf.html                 Ablauf der Ausbildung (8 Schritte)
├── ueber-uns.html              Team, Werte, Fahrzeuge
├── kontakt.html                Formular, Öffnungszeiten, Karte
├── impressum.html              § 5 DDG
├── datenschutz.html            DSGVO
├── agb.html                    Ausbildungsvertrag
├── widerruf.html               Widerrufsbelehrung + Musterformular
├── 404.html
├── robots.txt · sitemap.xml
├── logo.jpeg                   Originaldatei (Quelle für die Varianten)
└── assets/
    ├── css/main.css            Ein Stylesheet, logische Eigenschaften (RTL-fähig)
    ├── js/
    │   ├── config.js           ← ALLE Geschäftsdaten und Preise
    │   ├── i18n.js             Sprach-Engine
    │   ├── app.js              Navigation, FAQ, Formular, Renderer
    │   └── calculator.js       Kostenrechner
    ├── i18n/                   de.js · en.js · tr.js · ar.js
    └── img/                    Logo-Varianten, Favicons, Fahrzeug
```

---

## Mehrsprachigkeit

Vier Sprachen: **Deutsch** (Standard), **Englisch**, **Türkisch**, **Arabisch**.
Arabisch schaltet die Seite automatisch auf RTL um (`dir="rtl"`); das Layout
nutzt durchgängig logische CSS-Eigenschaften und spiegelt daher vollständig.

Sprachwahl in dieser Reihenfolge: `?lang=xx` in der URL → zuletzt gewählte
Sprache (localStorage) → Browsersprache → Deutsch.

### Texte ändern

Alle sichtbaren Texte liegen in `assets/i18n/<sprache>.js`. Im HTML stehen nur
Schlüssel:

```html
<h2 data-i18n="home.uspTitle"></h2>
<p  data-i18n-html="form.privacy"></p>          <!-- erlaubt HTML -->
<input data-i18n-attr="placeholder:form.ph.name">
<span data-bb="business.phone"></span>          <!-- Wert aus config.js -->
```

Fehlt ein Schlüssel in einer Übersetzung, greift automatisch die deutsche
Fassung. Ein Prüfskript vergleicht die Sprachdateien — alle vier enthalten
aktuell dieselben 336 Schlüssel.

### Sprache hinzufügen

1. `assets/i18n/de.js` kopieren, übersetzen, `register('de', …)` anpassen.
2. In `config.js` unter `i18n.available` ergänzen (RTL-Sprachen zusätzlich
   unter `i18n.rtl`).
3. In `assets/js/i18n.js` einen Eintrag in `LANG_META` ergänzen.

---

## Kostenrechner

Auf `preise.html#rechner`. Rechnet aus `config.js` und trennt sauber zwischen
**Leistungen der Fahrschule** und **Fremdkosten** (TÜV/DEKRA, Behörde, Arzt) —
die Unterscheidung, über die es sonst am häufigsten Missverständnisse gibt.

Berücksichtigt werden Klasse, Anzahl der Übungsstunden, die gesetzlich
vorgeschriebenen Sonderfahrten, der B197-Schaltnachweis, Erst- oder
Erweiterungsfahrerlaubnis, behördliche Nebenkosten, Intensivkurs und optional
ein Puffer für eine Wiederholungsprüfung. Ausgegeben werden eine Einzelaufstellung,
eine Gesamtsumme und eine realistische Spanne (± 10 %, einstellbar über
`pricing.estimateSpread`).

Vorauswahl per Link möglich: `preise.html?klasse=B197#rechner`

Preise ändern Sie ausschließlich in `config.js` — Rechner, Preistabellen und die
„ab"-Preise auf den Klassenkarten ziehen dieselben Werte.

---

## Datenschutz by default

- **keine** Google Fonts — ausschließlich Systemschriften
- **keine** Tracking-Cookies, kein Analytics in der Grundeinstellung
- **keine** externen Requests beim Seitenaufruf
- Karte lädt erst nach ausdrücklichem Klick (Opt-in, zwei Klicks)
- localStorage nur für Sprache und Karten-Einwilligung

Das Cookie-Banner erscheint deshalb bewusst **nicht**. Es aktiviert sich
automatisch, sobald in `config.js` unter `analytics.enabled` auf `true`
gesetzt wird.

---

## Barrierefreiheit

Sprungmarke zum Inhalt, sichtbare Fokusrahmen, ARIA-Auszeichnung für Menü,
Sprachwahl und Akkordeon, Tastaturbedienung durchgängig, `prefers-reduced-motion`
wird respektiert, Kontraste nach WCAG AA.

---

## Bekannte Einschränkungen

- **Übersetzungen per JavaScript.** Suchmaschinen führen JS aus, sehen im
  Quelltext aber zunächst Deutsch. Für maximale Sichtbarkeit in den anderen
  Sprachen wären eigene statische Seiten je Sprache nötig (`/en/…`).
- **Header und Footer sind pro Seite dupliziert.** Bewusst so gewählt: echtes
  statisches HTML, kein Build. Bei Änderungen an der Navigation alle elf
  HTML-Dateien anpassen.
- **Die Rechtstexte ersetzen keine anwaltliche Prüfung** (siehe Punkt 3).
