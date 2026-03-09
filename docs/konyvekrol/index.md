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

## Bejegyzéseim időrendben 👇

{% assign raw_posts = site.categories["konyvekrol"] %}
{% if raw_posts %}
  {% assign posts = raw_posts | sort: "date" | reverse %}
{% else %}
  {% assign posts = "" %}
{% endif %}

{% assign current_year = "" %}
{% assign current_month = "" %}

{% for post in posts %}
  {% assign y = post.date | date: "%Y" %}
  {% assign m = post.date | date: "%m" %}

  {% if y != current_year %}
  <h2>{{ y }}</h2>
  {% assign current_year = y %}
  {% assign current_month = "" %}
  {% endif %}

  {% if m != current_month %}
  <h3>{{ y }}. {{ m }}.</h3>
  {% assign current_month = m %}
  {% endif %}

  <p>
    <strong><a href="{{ post.url | relative_url }}">{{ post.title }}</a></strong><br>
    <small>{{ post.date | date: "%Y. %m. %d." }}</small>
  </p>

{% endfor %}
