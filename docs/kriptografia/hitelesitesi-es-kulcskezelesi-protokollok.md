---
title: "Hitelesítési és kulcskezelési protokollok"
tags: [hitelesítési-protokollok, kulcskezelés, smime, srtp, eap-tls, fido2, webauthn, wifi-biztonsag, voip-biztonság, email-biztonság, jelszómentes-hitelesítés, digitális-biztonság, kriptográfia]
---

# Hitelesítési és kulcskezelési protokollok

A hitelesítési és kulcskezelési protokollok biztosítják, hogy a kommunikáló felek valóban azok legyenek, akiknek mondják magukat, valamint hogy a titkosításhoz szükséges kulcsok biztonságosan kerüljenek átadásra vagy kezelésre. Ezek a protokollok a modern hálózati biztonság alaprétegét alkotják.

---

## S/MIME
A **Secure/Multipurpose Internet Mail Extensions (S/MIME)** egy vállalati környezetben széles körben használt szabvány, amely **e‑mailek titkosítására és digitális aláírására** szolgál.  
A PKI‑alapú működésnek köszönhetően:

- biztosítja az üzenetek bizalmasságát,  
- ellenőrzi a feladó hitelességét,  
- és védi az üzenet integritását.

Leginkább nagyvállalati rendszerekben, Microsoft Exchange és hasonló infrastruktúrák mellett használják.

---

## SRTP
A **Secure Real‑Time Transport Protocol (SRTP)** a VoIP‑hívások és videókommunikáció titkosítására szolgáló protokoll.  
Fő céljai:

- a hang- és videócsomagok titkosítása,  
- a lehallgatás megakadályozása,  
- a csomagok integritásának védelme.

A legtöbb modern kommunikációs platform (pl. WebRTC) SRTP‑t használ a valós idejű média biztonságához.

---

## EAP‑TLS
Az **Extensible Authentication Protocol – Transport Layer Security (EAP‑TLS)** a vállalati Wi‑Fi hálózatok egyik legbiztonságosabb hitelesítési módszere.  
Jellemzői:

- kliens- és szerveroldali tanúsítványokat használ,  
- nem igényel jelszót,  
- ellenáll a brute‑force és phishing támadásoknak.

A WPA2‑Enterprise és WPA3‑Enterprise környezetekben ez a “gold standard”.

---

## FIDO2 / WebAuthn
A **FIDO2** és a hozzá tartozó **WebAuthn** szabványok a **jelszómentes hitelesítés** modern alapjai.  
A működés lényege:

- a felhasználó eszköze (pl. telefon, hardverkulcs, biometrikus azonosító) végzi a hitelesítést,  
- a privát kulcs soha nem hagyja el az eszközt,  
- a weboldalak csak a nyilvános kulcsot ismerik.

Ez a megközelítés gyakorlatilag megszünteti a jelszólopás, credential stuffing és phishing támadások nagy részét.

---

## Tömörgyönyör összegzőm miért is fontosak ezek, amelyekről ☝️ fent írtam
A hitelesítési és kulcskezelési protokollok a digitális biztonság kritikus elemei: védik az e‑maileket, a valós idejű kommunikációt, a vállalati hálózatokat és a felhasználói fiókokat. A modern trend egyértelműen a **jelszómentes**, kulcsalapú hitelesítés irányába mutat, ahol a felhasználó eszköze válik a biztonság központi elemévé.
