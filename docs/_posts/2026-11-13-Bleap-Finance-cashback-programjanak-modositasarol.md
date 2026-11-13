---
layout: default
title: "A Bleap Finance cashback-programjának módosításait bejelentő 2026. november 10.-én érkeztetett hírlevélről"
category: kriptografia
tags: [Bleap, cashback]
date: 2026-11-13
permalink: /kriptografia/bleap-finance-cashback-programvaltozas.html
categories: ["kriptografia"]
---

# Vélemény a Bleap Finance cashback-program módosításairól

*Tárgy: A Bleap Finance cashback-programjának módosításait bejelentő, 2026. november 10-én kézhezvett elektronikus hírlevél értékelése.*

*Az irat elkülöníti a tényállást (a hírlevél szó szerinti tartalma és ellenőrzött külső források), a megállapításokat (elemzés) és a következtetéseket. A feltételes megállapítások külön jelölve szerepelnek.*

---

## I. TÉNYÁLLÁS

### 1. A bejelentés tárgya és hatályba lépése

A hírlevél két, egymástól függetlenül értelmezendő változtatást jelent be.

#### 1.1. Éves cashback-limit megszüntetése, havi limitek bevezetése

A változás a hírlevél datálásának napjától, azaz 2026. november 10-től **azonnali hatállyal** érvényes. Az új limitek a hírlevél szerint az egyes szolgáltatások standard havi árával esnek egybe:

| Kategória | Szolgáltatás | Havi limit |
|---|---|---|
| AI | Claude | 22 EUR |
| AI | ChatGPT, Gemini | 23 EUR |
| Streaming | Netflix | 24 EUR |
| Streaming | YouTube, Disney+ | 16 EUR |
| Streaming | Amazon Prime | 5 EUR |
| Gaming | PlayStation Plus | 19 EUR |
| Gaming | Steam | 10 EUR |
| Gaming | Nintendo | 4 EUR |
| Gaming | Xbox Game Pass, Twitch | 35 EUR (változatlan) |
| Everyday | Minden 1%-os költés | 3.000 EUR költési felső határ |

A cashback-ráták változatlanok; a maximális bónuszkategória-ráta 20%.

#### 1.2. Kifizetési aktivitási feltétel bevezetése

2026. **december 10-étől** a cashback-kifizetés (withdrawal) fenntartásához szükséges, hogy a felhasználó az azt megelőző, az aktuális naptól visszaszámított **gördülő 30 napos** időszakban legalább **200 EUR** értékben az 1%-os („everyday") költési kategóriákban vásároljon.

**Nem számít bele:**

- a külön rátával jutalmazott előfizetések (AI, streaming, gaming),
- készpénzfelvétel,
- kártyáról kártyára átutalás,
- visszatérítés.

**Beleszámít:** szupermarket, étterem és kávézó, vásárlás, gyógyszertár, utazás, és minden más, ami az 1%-os standard cashbacket hozza.

#### 1.3. A feltételsértés következményei

A hírlevél szó szerinti leírása alapján:

1. Ha a gördülő 30 napos költés 200 EUR alá esik, a felhasználó **7 napos türelmi időt** kap, amelyen belül a kifizetés aktív marad;
2. a 7 nap elmulasztása után a kifizetés szünetel, azonban a **cashback-gyűjtés nem áll le**;
3. a felhasználó további **30 napot** kap a 200 EUR-szint visszaszerzésére; sikeres visszatérés esetén a kifizetés azonnal visszaáll;
4. sikeres visszatérés elmaradása esetén a **ki nem fizetett cashback a költés első 200 EUR alá esésétől számított 37. napon lejár** — a lejárat nem a 37 nap alatt gyűjtött összegre, hanem az összes, kifizetésre váró egyenlegre terjed ki.

A hírlevél ígéri, hogy az alkalmazás a haladást mutatja, és a szünetelés vagy lejárat előtt figyelmezteti a felhasználót.

### 2. Ellenőrzött külső tények

1. A 2026-os magyar minimálbér bruttó összege 322 800 forint, nettója 214 662 forint (forrás: officina.hu, allampapirkalkulator.hu, biztosdontes.hu — egymással egybehangzó források). A hivatkozott időpont körüli EUR/HUF árfolyam kb. 363 (Világgazdaság). Így a nettó minimálbér kb. 590 EUR, amiből a 200 EUR-os küszöb kb. **34%-ot** képvisel.
2. A Bleap kártya egy (self-custodial) Mastercard, amely 0% devizaköltséggel, előfizetés nélkül, stabilcoinnal ( [USDC](https://inspirator.blog/mi-az-a-usdc/) ) feltölthető; a pénzforgalmi jövedelme (interchange) és a cashback-fizetési kötelezettsége közvetlenül a kártyaforgalomhoz kötődik (forrás: Bleap publikus anyagai, 2026).

### 3. Vélemezett ügyfélbázis-struktúra *(feltételes megállapítás)*

A [Bleap](https://inspirator.blog/bleap-kartya) ügyfélbázisának túlnyomó része **alacsony, fragmentált költésű felhasználó** („kis költő"), aki a pénzintézeti [MCC](https://inspirator.blog/mcc-kodok-listaja) - (Merchant Category Code-) osztályozás korlátai miatt több kártyát tart, és a bónuszkategóriánkénti jutalmazás optimalizálására szétdolgozza a költését.

> **Megjegyzés:** e tényállási elem a jelen iratból **nem függetlenül ellenőrizhető** (a cég nem közöl ügyfélszám- vagy költésstatisztikát), ezért feltételes megállapításként kezelendő, de ugyanakkor nagyon is racionális meglátás. Szegény emberből mindig több van alapon, s rendszerint a profittermelés is rájuk van berendezkedve (lásd: hagyományos bankszektor kinek
> nyújt ingyenes szolgáltatást? Tehetősnek! Ki fizeti meg az árat? A szegény réteg!)

---

## II. MEGÁLLAPÍTÁSOK

### 1. A havi limitek bevezetése az anyagilag lényegesebb vágás

A limitrendszer csendes, de a küszöbnél nagyobb horderejű. A havi cap az adott előfizetés havi árával egyezik meg, így a maximálisan elérhető bónuszcashback (20% ráta mellett) felső határai:

| Szolgáltatás | Limit | Max. havi cashback (20%) |
|---|---|---|
| Claude | 22 EUR | 4,40 EUR |
| ChatGPT | 23 EUR | 4,60 EUR |
| Gemini | 23 EUR | 4,60 EUR |
| Netflix | 24 EUR | 4,80 EUR |
| YouTube / Disney+ | 16 EUR | 3,20 EUR |
| Amazon Prime | 5 EUR | 1,00 EUR |
| PlayStation Plus | 19 EUR | 3,80 EUR |
| Steam | 10 EUR | 2,00 EUR |
| Nintendo | 4 EUR | 0,80 EUR |
| Everyday (1%) | 3.000 EUR költés | 30,00 EUR |

Egy tipikus, négy szolgáltatást használó előfizető (pl. Claude + Netflix + ChatGPT + Steam) havi bónuszcashback-felső határa így kb. **15–16 EUR**.

Az éves limit megszűnése pozitív (a keret nem merül ki év elején, nincs „reset-várakozás"), ugyanakkor a havi szintre szorítás számottevő lehet a korábban az éves keretből halmozó felhasználók számára. A hírlevél a korábbi éves limit nagyságát nem közli, így a veszteség mértéke objektíven **nem számszerűsíthető** — e tényhiányra az irat hiánypótlási igényt jelöl.

### 2. A 200 EUR-os feltétel koncentrációra, nem növekedésre ösztönöz

A gördülő 30 napos ablak definíció szerint naptárfüggetlen, ezért **technikailag megengedi a költés koncentrálását**: a felhasználó költése tetszőleges 30 napos ablakban elérheti a 200 EUR-t anélkül, hogy folyamatosan, naponta kártyáznia kellene. A minta lépései:

1. a felhasználó banki „zsebében" felhalmozza az összeget, amíg az el nem éri a 200 EUR-t;
2. feltölti a Bleap-egyenlegét, egy koncentrált költési időszakban (30 napon belül) elkölti, ide vonja az egyébként máshol költött összegeket;
3. azonnal kifizeti a cashback-et, és visszatér a korábbi (nem-Bleap) kártyakészletéhez.

E minta mellett a kártyán forgó **összmennyiség matematikailag változatlan marad** — csupán időbeli eloszlása heterogenizálódik („koncentrált költési hónap"). Ez a hírlevél szabályaival ellenkezés nélkül kompatibilis.

### 3. A batch-elési stratégia végrehajtási kockázatai

A koncentrált minta azonban három, a hírlevélből szigorúan levezethető megbukási módra érzékeny:

- **Időzítési kockázat** — a lejárat határideje (37. nap) nem a költési ciklushoz, hanem a költés **első** 200 EUR alá esésének napjához kötődik. A minta csak akkor hibátlan, ha minden kör lezárásakor azonnali kifizetés történik (a 7 napos türelmi ablak kihasználásával), és a következő betöltés nem csúszik a 37. napon túlra — ellenkező esetben az akkor felgyűlt cashback **teljes egésében** lejár.
- **Opportunitásköltség** — a felhalmozási időszakban a pénz termelése szünetel, a cashback-események gyakorisága a ciklus hosszával arányosan csökken; a stablecoin-feltöltés további adás-vételi súrlódást okoz.
- **Likviditási előfeltétel** — a minta működése megkívánja, hogy a felhasználó 200 EUR-t anélkül parkoltathasson, hogy a mindennapi ellátása ezzel összeütközésbe kerülne; ez a legalacsonyabb jövedelmi szegmensben önmagában szelekciós korlát.

Ezek együttesen **breakage-hez (lejárt cashback-bevételhez)** vezetnek a nem tökéletesen diszciplinált felhasználóknál — ez a szabály kialakításának várható gazdasági haszna a cég oldalán. *(Ez a megállapítás gazdasági logikai következtetés, nem a hírlevélben deklarált cél.)*

### 4. A feltétel struktúrája önellentmondó a bónuszkeresőkhöz

A hírlevél saját példája szerint a 20%-ot hozó előfizetés-vásárlások **nem számítanak be** a 200 EUR-ba. A program legjövedelmezőbb tevékenysége tehát definíció szerint nem szolgálja a program fenntartásának feltételét.

Aki a kártyát kifejezetten a bónuszkategóriákért tartja (az MCC-optimalizáló kártyaszétosztás klasszikus mintája), pontosan az kerül legnehezebb helyzetbe. Ugyanakkor a beleszámító kategóriakör a mindennapos költés széles spektrumát lefedi, így az „alap költést egy kártyára vonó" — nem bónuszoptimalizáló — felhasználó számára a küszöb reális elérése kb. **47 EUR/hétnyi** rutinvásárlást igényel (a hírlevél „heti 50 EUR-os bevásárlás" példája ezzel egyezik).

### 5. A szegmenshatás értékelése 

**Öt megállapítás:**

1. A cél („aktív kártyahasználat minden nap") a vélemezett módon domináns kis költői szegmensben **nem valósul meg**; a szabály erre a szegmensre batch-elést vagy kiszállást ösztönöz, mindkettő a napi engagement csökkenésével jár.
2. A 200 EUR-os küszöb abszolút nagysága egyetlen, minden költést egy kártyára koncentráló háztartás számára megfizethető, de **több kártyás, MCC-optimalizáló háztartás esetében a koncentráció hiánya miatt valósul meg nehezen**.
3. A küszöb valójában elsődleges kártyává válásra ösztönöz — aki ezt nem vállalja, annak kiszállás vagy koncentrált költés marad, s álláspontom szerint ez utóbbi fog történni.
4. Fenntartás: a szegmensméretről szóló állítás (túlnyomórészt kis költői bázis) nem függetlenül ellenőrzött adat; ha a bázis arányosabban oszlik meg, a cég vállalati kimenete máshol jut egyensúlyba.
5. A kifizetés-szüneteltetés protokollja (7 + 30 nap) megbocsátóbb, mint egy naptári hónaphoz kötött szabály lenne — de csak aktív figyelés mellett.

---

## III. KÖVETKEZTETÉSEK ÉS VÉLEMÉNY

1. **A bejelentés formailag transzparens, tartalmilag kétirányú.** A hírlevél a limitek nagyságát, a dátumokat és a mechanikát megadja; az apró betűs részletek (lejárat a teljes kifizetésre váró egyenlegre, a gördülő ablak, a bónuszkategóriák kizárása a feltételből) azonban együtt olyan konstrukciót alkotnak, amely a kisebb költésű, bónuszoptimalizáló felhasználót véglegesen vagy időszakosan kiszorítja.
2. **A szabály elsődleges kártyává válásra kényszerít.** Aki ezt nem teljesíti, annak a hírlevél a batch-elés — a saját betűivel megengedett, koncentrált költési minta — lehetőségét adja. E minta az összforgalmat konzerválja, ám a napi használati jelenlétet lebontja, és hibázás esetén breakage-t generál a cég javára.
3. **A valós gazdasági változás a limitekben van.** A 20%-os bónuszkategóriák havi capjai együttesen, a tipikus előfizetés-portfólió esetén kb. 15–16 EUR/hó felső határt jelentenek — ez a havi rendszer előtti keretekhez képest többségében szűkítés, amelyet a hírlevél nem számszerűsít.
4. **A kis költői szegmens legreálisább következménye a kifizetés szünetelése, nem a cashback keresés elvesztése.** A gyűjtés minden forgatókönyvben folytatódik; a kifizetés azonban csak a 7 + 30 napos protokoll betartásával fenntartható, elmulasztása pedig a teljes, kifizetésre váró caschback egyenleget 37 napos határidővel égeti el.

### Felhasználói cselekvési útmutató

1. Rendes — legalább ciklusvégi — kifizetés a 7 napos türelmi ablakban;
2. a gördülő 30 napos költés aktív figyelése az alkalmazásban, nem a naptári hónaphoz igazítva;
3. 200 EUR alá esés esetén visszatérés legkésőbb a 37. nap előtt;
4. a bónuszkategóriás (nembeszámító) vásárlásokra soha nem szabad építeni a küszöb teljesítését. 

### Hiánypótlási igény

A jelen vélemény becslései számszerűvé tehetők, amennyiben a Bleap Finance közzéteszi:

- a korábbi éves limitek nagyságát,
- az ügyfélbázis költésmegoszlását,
- valamint azt, hogy a lejáratra ítélt cashback visszaírása bevételként kerül-e könyvelésre. Ez az összegzőm vicces része, hisz ilyet sosem fog tenni 😂

### A Bleap finance eredeti angol nyelvű hírlevelének pontos idézete 👇

📜 „ Updates to your Bleap cashback
Hi,

Cashback is one of the many perks of using your Bleap card. We want to keep it that way for everyone, so we’re making two updates to the current program.

1. No more annual cap: a fresh limit every month, from today

We're removing the annual caps and using monthly limits only, to keep cashback fair for everyone. Each limit now aligns with the standard monthly price of the service. Rates stay the same, so you can keep earning up to 20% on these, up to that monthly amount.

AI: Claude 22 EUR, ChatGPT and Gemini 23 EUR per month
Streaming: Netflix 24 EUR, YouTube 16 EUR, Disney+ 16 EUR, Amazon Prime 5 EUR per month
Gaming: PlayStation Plus 19 EUR, Steam 10 EUR, Nintendo 4 EUR per month (Xbox Game Pass and Twitch stay at 35 EUR)
Everyday 1%: up to 3,000 EUR of spend per month
Rides and food delivery: no change
2. Starting December 10th, keep cashback withdrawals active with everyday spending

To keep withdrawing your cashback, you’ll need to spend at least EUR 200 on everyday purchases in the previous 30 days. The 30 days always count back from the current day, so it moves with you and not with the calendar month.

What counts as everyday purchases

Counts: supermarkets, restaurants and cafés, shopping, pharmacies, travel and anything else that earns the standard 1% cashback.
Doesn’t count: subscriptions that earn their own rate (Claude, ChatGPT, Netflix, YouTube and similar), cash withdrawals, card-to-card transfers and refunds.
What changes for you?

You use your card day to day. You spend EUR 200 or more in the categories that earn 1% cashback, so nothing changes for you.
You only use the card for subscriptions, deliveries and rides. For example, you pay for Claude and Netflix and earn 20% on them, but haven’t used the Bleap card on your other purchases. You’ll still earn that cashback, but these purchases don’t count toward the EUR 200. To keep your withdrawals active, start using your card for everyday purchases. Something as simple as a weekly grocery shop of EUR 50 gets you to the EUR 200 target.
Your spending drops. You usually spend EUR 250 a month, but the last 30 days come to EUR 120. You have 7 days to get back above EUR 200, and your withdrawals stay on in the meantime. After those 7 days, you keep earning cashback but withdrawals are paused, and you have 30 more days to get back to EUR 200. If you do, withdrawals turn back on straight away. Otherwise, any unwithdrawn cashback expires 37 days after your spending first dropped below EUR 200.
You never stop earning cashback. Every eligible purchase still earns, up to your cashback cap, even while withdrawals are paused.
We’ll show your progress in the app and remind you before anything is paused or expires.

Why we made this change

Linking withdrawals to everyday spending is what lets us keep offering attractive cashback rates. You get rewarded for the way you already use your card, and the program stays strong for the long term.

Questions? Read our FAQ.

The Bleap Team ”

---

*Meglátásaim az ellenőrzött külső források (officina.hu, allampapirkalkulator.hu, biztosdontes.hu, Világgazdaság, Bleap publikus anyagai) alapján láttak napvilágot. A feltételes megállapításokat jelöltem.*
