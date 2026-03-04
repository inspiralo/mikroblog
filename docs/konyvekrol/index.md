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

## Bejegyzéseim, könyvekről a kronológia alapján 👇

{% assign posts = "" | split: "" %}

{% for p in site.pages %}
  {% if p.path contains 'konyvekrol/' and p.name != 'index.md' %}
    {% assign posts = posts | push: p %}
  {% endif %}
{% endfor %}

{% assign posts = posts | sort: "date" | reverse %}

{% assign years = "" | split: "" %}

{% for post in posts %}
  {% assign y = post.date | date: "%Y" %}
  {% unless years contains y %}
    {% assign years = years | push: y %}
  {% endunless %}
{% endfor %}

{% for y in years %}
<details>
  <summary><strong>{{ y }}</strong></summary>

  {% assign months = "" | split: "" %}
  {% for post in posts %}
    {% assign post_y = post.date | date: "%Y" %}
    {% if post_y == y %}
      {% assign m = post.date | date: "%m" %}
      {% unless months contains m %}
        {% assign months = months | push: m %}
      {% endunless %}
    {% endif %}
  {% endfor %}

  {% for m in months %}
  <details style="margin-left: 1rem;">
    <summary><strong>{{ y }}. {{ m }}.</strong></summary>
    <ul>
      {% for post in posts %}
        {% assign post_y = post.date | date: "%Y" %}
        {% assign post_m = post.date | date: "%m" %}
        {% if post_y == y and post_m == m %}
          <li>
            <strong><a href="{{ post.url | relative_url }}">{{ post.title }}</a></strong><br>
            <small>{{ post.date | date: "%Y. %m. %d." }}</small>
            {% if post.tags %}
              <br><small>Címkék: {{ post.tags | join: ', ' }}</small>
            {% endif %}
          </li>
        {% endif %}
      {% endfor %}
    </ul>
  </details>
  {% endfor %}

</details>
{% endfor %}
