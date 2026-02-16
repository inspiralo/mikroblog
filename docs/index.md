---
title: "Inspiráló mikroblog"
---

# Inspiráló mikroblogom

Ez a mikroblog különböző témák rövid, tömör, gondolatébresztő bejegyzéseit gyűjti össze.  
Célom, hogy értékes ismeretekhez juttassalak. A bonyolultabb dolgokat rendszerint nagyobb erőforráskezelés árán lehet csak az érdeklődők elé tárni. Éppen ezért használom eme mikro gondolataimat, amelyek a komplexebb, kifejtősebb tartalmaim felé fognak navigálni. Talán jobb ez így, mert statikusan bejárható, az emberek gyorsabban érik el, s természetesen a keresőgépeknek is erőforrást kímélő feldolgozási támpont, hogy a ki szemfüles 🤖 **AI ügynökökről** már ne is beszéljek 😉

## Témák

{% comment %}
  Témák = minden olyan oldal, ami:
  - index.md
  - nem a gyökér (tehát nem a főoldal)
  A GitHub Pages nem támogatja a where_exp-et,
  ezért kézzel gyűjtjük ki a megfelelő oldalakat.
{% endcomment %}

{% assign sections = "" | split: "" %}

{% for p in site.pages %}
  {% if p.name == "index.md" and p.url != "/" %}
    {% assign sections = sections | push: p %}
  {% endif %}
{% endfor %}

{% for page in sections %}
- **[{{ page.title }}]({{ page.url | relative_url }})**
{% endfor %}

---

## Legutóbbi bejegyzések

{% comment %}
  A GitHub Pages nem támogatja a where_exp-et,
  ezért kézzel gyűjtjük ki a nem-index.md oldalakat.
{% endcomment %}

{% assign recent = "" | split: "" %}

{% for p in site.pages %}
  {% if p.name != "index.md" %}
    {% assign recent = recent | push: p %}
  {% endif %}
{% endfor %}

{% assign recent = recent | sort: "date" | reverse | slice: 0, 10 %}

{% for file in recent %}
  {% if file.title %}
- **[{{ file.title }}]({{ file.url | relative_url }})**
  {% endif %}
{% endfor %}
