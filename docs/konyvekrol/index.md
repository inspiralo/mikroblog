---
layout: default
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
