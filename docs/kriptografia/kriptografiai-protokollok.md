---
title: "Kriptográfiai protokollok"
layout: post
tags: [kriptográfia, kriptográfiai-protokollok, tls, ssl, https, hsts, ssh, ipsec, vpn, pgp, gpg, diffie-hellman, kerberos, oauth2, openid-connect, webes-biztonság, hitelesítés, titkosítás, digitális-biztonság]
---

# Kriptográfiai protokollok, csak a legfontosabb alapokról

A modern digitális biztonság gerincét néhány kulcsfontosságú kriptográfiai protokoll adja. Ezek határozzák meg, hogyan titkosítjuk a kommunikációt, hogyan hitelesítjük a feleket, és hogyan cserélünk biztonságosan kulcsokat. Az alábbi protokollok ismerete nélkül nem lehet megérteni a mai internetbiztonság működését.

---

## TLS / SSL
A webes titkosítás alapja.  
A HTTPS mögött futó protokoll, amely biztosítja a böngésző és a szerver közötti titkosított kommunikációt.  
Védi az adatokat *lehallgatás*, *módosítás* és *hamisítás* ellen. Viszont önmagában a **HTTPS** sem elégséges: az online tartalmakat szolgáltatók részéről fontos lenne, hogy weboldalaik megfelelő [**HSTS fejléccel rendelkezzenek**](https://inspirator.blog/hsts-fejlec-hozzaadasa/).  
Ha ez a fejléc jelen van, a böngészők még első alkalommal sem próbálkoznak a sima HTTP protokollal, így elkerülhető a downgrade‑támadás és az SSL stripping.


---

## SSH
Biztonságos távoli hozzáférést biztosító protokoll.  
Rendszergazdák, fejlesztők és szerverüzemeltetők alap eszköze.  
Titkosított csatornát hoz létre, és kulcsalapú hitelesítést is támogat.

---

## IPSec
A VPN‑ek egyik legfontosabb építőeleme.  
Titkosítja az IP‑csomagokat, így biztonságos alagutat hoz létre két hálózat vagy két eszköz között.  
Vállalati környezetben széles körben használt.

---

## PGP / GPG
[**E‑mail titkosításra**](https://inspirator.blog/email-titkositas-gyorstalpaloja/) és digitális aláírásra szolgáló protokollcsalád.  
A felhasználók saját nyilvános és privát kulcspárral rendelkeznek, így biztosítható a bizalmasság és a hitelesség.  
A GPG a PGP nyílt forrású implementációja. Pont ebben a témában ha érdekel egy kifejtősebb írásom is elolvasára javaslom, ezért is linkeltem. 

---

## Diffie–Hellman kulcscsere
Az egyik legfontosabb kriptográfiai alapmechanizmus.  
Lehetővé teszi, hogy két fél biztonságosan osszon meg egy közös titkos kulcsot anélkül, hogy azt valaha is elküldenék egymásnak.  
A legtöbb modern protokoll (pl. TLS) épít rá.

---

## Kerberos
Hitelesítési protokoll nagyvállalati környezetben.  
Központi “jegykiadó” szerver (KDC) segítségével biztosítja, hogy a felhasználók és szolgáltatások megbízhatóan azonosíthatók legyenek.  
Windows domain környezetekben alapértelmezett.

---

## OAuth 2.0 és OpenID Connect
A modern webes hitelesítés és jogosultságkezelés szabványai.  
Lehetővé teszik, hogy egy alkalmazás hozzáférést kapjon egy másik szolgáltatás erőforrásaihoz anélkül, hogy jelszót kellene megosztani.  
Az OpenID Connect az OAuth 2.0-ra épül, és kifejezetten a felhasználók hitelesítésére szolgál.

---

## Jelen apróbb összeállításom indoka 👇
Ezek a protokollok alkotják a digitális biztonság alaprétegét: a webes titkosítástól a VPN‑eken át a modern webes hitelesítésig. A kriptográfia gyakorlati megértéséhez ezek ismerete elengedhetetlen.
