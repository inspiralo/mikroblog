---
title: "Kriptográfia"
---

# Kriptográfia 

A kriptográfia olyan módszerek és algoritmusok összessége, amelyek célja az információ védelme: *bizalmasság*, *integritás*, *hitelesség* és a *nem‑megtagadhatóság* biztosítása. A modern digitális világban ez alapvető technológia minden **online kommunikáció**, **tranzakció** és **adatvédelem** mögött.

---

## Miért fontos a kriptográfia❓

A kriptográfia védi többek között:

- a jelszavakat és hitelesítést,
- az online vásárlásokat és banki adatokat,
- a kriptovaluták tranzakcióit,
- a webes kommunikációt (SSL/TLS),
- az üzenetküldő alkalmazások titkosítását (end‑to‑end),
- a digitális aláírásokat és dokumentumhitelesítést.

---

## A kriptográfia fő típusai

### Szimmetrikus kriptográfia
- Egyetlen közös kulcsot használ titkosításhoz és visszafejtéshez.
- Gyors és hatékony nagy adatmennyiségnél.
- Példák: **AES**, **DES**.

### Aszimmetrikus kriptográfia
- Két kulcsot használ: nyilvános és privát kulcs.
- Biztonságos kulcscsere, hitelesítés és digitális aláírás alapja.
- Példa: **RSA**.

### Hash függvények és digitális aláírások
- Hash: az adatok integritásának ellenőrzése (pl. SHA‑1, SHA‑256).
- Digitális aláírás: hitelesség és nem‑megtagadhatóság biztosítása.

---

## Kulcskezelés

A kriptográfia egyik legkritikusabb területe a kulcsok biztonságos kezelése:

- generálás,
- tárolás,
- csere,
- megsemmisítés.

A **Diffie–Hellman** kulcscsere protokoll az egyik alapvető megoldás a biztonságos kulcsmegosztásra.

---

## Modern irányok

### Elliptikus görbéken alapuló kriptográfia (ECC)
- Kisebb kulcsméret, nagyobb hatékonyság.
- Mobil eszközökhöz ideális.
- Használja többek között: USA kormányzati rendszerek, Bitcoin, Apple iMessage.

### Kvantumbiztos kriptográfia
- A kvantumszámítógépek fenyegetése miatt új algoritmusokra van szükség.
- A kvantumkriptográfia fizikai törvényeken alapul, nem matematikai nehézségen.
- Előny: a lehallgatás észlelhető.
- Hátrány: jelenleg drága és technológiailag korlátozott.

---

## Összegzés

A kriptográfia a digitális biztonság alapja: védi az adatokat, hitelesíti a kommunikációt és biztosítja a tranzakciók integritását. A jövő a **kvantumbiztos** és **elliptikus görbéken alapuló** megoldások felé mutat.  
Ez a mikroblogom egyik legfontosabb szeglete: itt találod az apróbb gondolataimat, edukatív jegyzeteimet és a kriptográfia világához kapcsolódó rövid tartalmaimat.

---

## Bejegyzéseim időrendben 👇

{% assign raw_posts = site.categories["kriptografia"] %}
{% if raw_posts %}
  {% assign posts = raw_posts | sort: "date" | reverse %}
{% else %}
  {% assign posts = "" %}
{% endif %}

{% assign years = posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in years %}
<details>
  <summary><strong>{{ year.name }}</strong></summary>

  {% assign months = year.items | group_by_exp: "post", "post.date | date: '%Y. %m.'" %}

  {% for month in months %}
  <details style="margin-left: 1rem;">
    <summary><strong>{{ month.name }}</strong></summary>
    <ul>
      {% for post in month.items %}
      <li>
        <strong><a href="{{ post.url | relative_url }}">{{ post.title }}</a></strong><br>
        <small>{{ post.date | date: "%Y. %m. %d." }}</small>
        {% if post.tags %}
          <br><small>Címkék: {{ post.tags | join: ', ' }}</small>
        {% endif %}
      </li>
      {% endfor %}
    </ul>
  </details>
  {% endfor %}

</details>
{% endfor %}
