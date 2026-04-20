---
layout: default
title: "Közéleti"
---

# 💡 Közéleti gondolatok

Nem kívánok a megmondó ember szintjére süllyedni. Ebbe a kategóriába akkor szeretném apróbb gondolatom közreadni, amikor valamilyen eseménnyel kapcsolatban
tényleg a közlendőt, meglátást, valamiért nagyon fontosnak tartom. 

>Amiket itt olvashatsz sosem szentírás, de legalább logikus alapokra helyezett vélemények 😉

---

## Bejegyzéseim időrendben 👇

{% assign raw_posts = site.categories["kozeleti"] %}
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
