---
layout: default
title: "A Windows GDI azonosító és a digitális nyomkövetés valósága"
category: kozeleti
tags: [Microsoft,GDI,GDID,telemetria,adatvédelem,kibervédelem]
date: 2026-07-14
permalink: /kozeleti/windows-gdi-azonosito.html
categories: ["kozeleti"]
---

# Egy okkal több, hogy inkább GNU/Linux -ot használj 😉

> Ne értsen félre senki, egy bűnözőt elkapni remek dolog. De éppenséggel itt társadalmak akaratukon kívül történő megfigyelése zajlik,
> ami most felszínre is jött 👇 

A Windows operációs rendszer minden eszközön létrehoz egy úgynevezett **Global Device Identifier (GDI / GDID)** azonosítót. 
Ez egy tartós, beégetett eszközazonosító, amely nem változik akkor sem, ha a felhasználó újratelepíti a rendszert, hardvert cserél, 
vagy különböző hálózatokból használja a gépet.

A GDID eredetileg diagnosztikai telemetriára, hibajelentésekhez és licencellenőrzéshez készült, de a gyakorlatban 
**összekapcsolható a felhasználó online aktivitásával**, ha a hatóságok hozzáférnek a Microsoft telemetriai naplóihoz, márpedig hozzá tudnak
férni, elég áttanulányozni a jogszabályokat.

A közelmúltban egy ismert kiberbűnözői csoport tagját is ezzel az azonosítóval sikerült beazonosítani: a GDID minden Windows‑telepítésben
jelen van, így a hatóságok több különböző eszközön is ugyanazt a tartós azonosítót találták meg.

Ez a történet jól mutatja, hogy a modern digitális környezetben **a hardverhez kötött azonosítók** milyen jelentős szerepet játszanak a nyomkövetésben, 
a bűnüldözésben és az adatvédelemről szóló közéleti vitákban. 

>Fogadd meg a tanácsom és kezdj el, minél előbb ismerkedni a GNU/Linux -al,
hiszen ez a GDID még a gestapós leleményességen is túlmutat❗ 

## A GDID működési filozófiájáról 

Egyébként nem a személyedet azonosítja. Teljesen mindegy, hogy a Windows gépeden Te kamuadatot, stb. adtál meg. Nem ez a lényeg. Magát az
eszközt azonosítja és rögzíti a telematriai naplójában. Akkor is, ha soha a Windows rendszerrel nem csatlakoztál a felhőalapú szolgáltatáshoz.
De miután az eszköz nyomkövetett, azután már egy hatósági eljárás során, nagyon könnyen az eszközt használó személyt is fel lehet fedni. 
Például a legtöbb internet szolgáltató tagadja, hogy IP alapján tudná ki is van mögötte. De ez hülyeség. **DHCP** alapon minden *szolgáltató cég* pontosan
tudja, hogy az adott pillanatban *kiosztott* **IP** melyik előfizetőjükhöz tartozik. Egyébként **EU**-n belül csak el kell olvasni figyelmesen a **GDPR**-t, abban is benne van,
hogy ezek az adatok hatósági eljárások során beszerezhetők. 

> 👋 A gond itt az, ami egyébként az adatvédelmi aggályt okozza, hogy korántsem csak bűnözők személyazonossága fedhető fel... szóval lényeg a lényeg, a tisztességes becsületes emberek
számára sokkal jobb az az aranyos kis pingvin 😊
