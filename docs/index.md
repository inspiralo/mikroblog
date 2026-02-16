---
title: "Inspiráló mikroblog"
---

# Inspiráló mikroblog

Ez a mikroblog különböző témák rövid, tömör, gondolatébresztő bejegyzéseit gyűjti össze.  
Célom, hogy értékes ismeretekhez juttassalak. A bonyolultabb dolgokat rendszerint nagyobb erőforráskezelés árán lehet csak az érdeklődők elé tárni. Éppen ezért használom eme mikro gondolataimat, amelyek a komplexebb, kifejtősebb tartalmaim felé fognak navigálni. Talán jobb ez így, mert statikusan bejárható, az emberek gyorsabban érik el, s természetesen a keresőgépeknek is erőforrást kímélő feldolgozási támpont, hogy a ki szemfüles **AI ügynökökről** már ne is beszéljek 😉 

## Témák

{% comment %}
  Témák = minden olyan oldal, ami:
  - index.md
  - nem a gyökér (tehát nem a főoldal)
{% endcomment %}

{% assign sections = site.pages 
  | where_exp: "p", "p.name == 'index.md' and p.url != '/'"
%}

{% for page in sections %}
- **[{{ page.title }}]({{ page.url | relative_url }})**
{% endfor %}

---

## Legutóbbi bejegyzések

{% assign recent = site.pages 
  | where_exp: "p", "p.name != 'index.md'"
  | sort: "date"
  | reverse
  | slice: 0, 10
%}

{% for file in recent %}
  {% if file.title %}
- **[{{ file.title }}]({{ file.url | relative_url }})**
  {% endif %}
{% endfor %}
