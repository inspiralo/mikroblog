---
layout: default
title: "Online Marketing"
---

# Online Marketing
>Az Online Marketing világa igen szerteágazó. Ezekben a témákban apróbb gondolataim hasznosak lehetnek számodra, ha tartalomfejlesztő vagy.
>Nem tervezem, hogy sűrűn írnék ide, de ha valamit érdekesnek találok arról teszek egy megjegyzést. Már csak azért is mert az utóbbi időkben az Online Marketing folyamatokat inkább negatív változások érték, így ha vannak jó dolgok, megérdemli a kommunikációt 😉 

---

## Bejegyzéseim időrendben 👇

{% assign raw_posts = site.categories["online-marketing"] %}
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
