---
title: "Könyvekről"
---

# 📚 Könyvekről

Ez a szekció a mikroblog könyvekkel kapcsolatos tartalmait gyűjti össze: rövid ajánlókat, elemzéseket, gondolatébresztő kivonatokat és olyan reflexiókat, amelyek túlmutatnak a klasszikus könyvkritikákon.  
A cél nem a tartalomismertetés, hanem az, hogy a könyvek mögötti rendszereket, társadalmi mintázatokat és emberi dilemmákat világítsam meg — tömören, inspirálóan, sallangmentesen.

## 🤔 Miért külön téma a könyvek világa❓

A könyvek nemcsak történeteket mesélnek, hanem gondolkodásmódokat, struktúrákat és világértelmezéseket is közvetítenek.  
Ebben a szekcióban olyan művek jelennek meg, amelyek valamilyen szempontból:

- új nézőpontot adnak,  
- társadalmi vagy gazdasági rendszerekre világítanak rá,  
- vagy egyszerűen csak elindítanak egy gondolatot, amelyet érdemes továbbvinni.

---

## Bejegyzések 👇

{% for file in site.pages %}
  {% if file.path contains 'konyvekrol/' and file.title and file.name != 'index.md' %}
- **[{{ file.title }}]({{ file.url | relative_url }})**  
  {% if file.tags %}
    <sub>Címkék: {{ file.tags | join: ', ' }}</sub>
  {% endif %}
  {% endif %}
{% endfor %}
