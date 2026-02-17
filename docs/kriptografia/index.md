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

A kriptográfia a digitális biztonság alapja: védi az adatokat, hitelesíti a kommunikációt és biztosítja a tranzakciók integritását. A jövő a **kvantumbiztos** és **elliptikus görbéken alapuló** megoldások felé mutat, mivel a klasszikus algoritmusok hosszú távon nem lesznek elegendőek. Tehát a mikroblogomnak ez olyan meglehetősen tágas szeglete, ahol a kriptográfia világával releváns apróbb gondolataim vagy épp edukatív jellegű tartalmaim olvashatod. Természetesen ha akadnak érdekesebb szolgáltatások azokra is felhívom a figyelmed, vagy ha a kriptográfia relevanciájában a médiában történik valami kommunikáció amivel kapcsolatban apróbb véleményem adnám közre, azt is itt láthatod.

## ℹ️ Ebben a kriptográfia igen tág témájában, jelenleg az alábbi gondolataimmal szolgálhatok 👇
{% for file in site.pages %} {% if file.path contains 'kriptografia/' and file.title and file.name != 'index.md' %}

[{{ file.title }}]({{ file.url | relative_url }})
{% if file.tags %} Címkék: {{ file.tags | join: ', ' }} {% endif %} {% endif %} {% endfor %}
