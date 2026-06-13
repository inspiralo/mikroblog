---
layout: default
title: "Mesterséges Intelligencia"
---

# Mesterséges Intelligencia

Gondolataim ebben a témában, mely meglehetősen tágas. Ugyanis azokkal kapcsolatban is meglátásaim leírnám itt, amelyek igazából 
csupán a mesterséges intelligenciának a címkéjével vannak ellátva. Sok mindent besorol az ipar a mesterséges intelligencia ágazatába, 
ilyen az **LLM** - nagy nyelvi modellek - világa is, amelyet így önmagában nem tudok mesterséges intelligenciának hívni. 

Kifejezetten az LLM körül, szerény véleményem szerint a hype jelenség óriási. Pedig egyáltalán nem lehet látni annak egzakt jövőképét, 
hogy a gazdasági élet szereplőinek ezek igénybevétele, használata rentábilis lesz. 

---

## 🤖 Szándékaim szerint, leginkább mikor szeretnék ebbe a kategóriába írni❓

Például amikor valamilyen komolyabb, valóban szakmai MI releváns gondolatom osztanám meg, vagy pedig olyan talán hasznosabb ötlettel
szolgálnék a felkapott LLM témákban, amelyek inkább elősegíthetik a saját jogos önrendelkezésed, adatvédelmed lehetőségének manifesztálását.
Esetleg egészen egyszerűen szeretném kifejezni nemtetszésem, valamely BigTech csoda alantas törekvéseivel kapcsolatban 😉

---

## Bejegyzéseim időrendben 👇

{% assign raw_posts = site.categories["mesterseges-intelligencia"] %}
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
