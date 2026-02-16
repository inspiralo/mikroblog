---
title: "Inspiráló mikroblog"
---

# Inspiráló mikroblog

Ez a mikroblog különböző témák rövid, tömör, gondolatébresztő bejegyzéseit gyűjti össze.  
A cél a rendszerek, mintázatok, dilemmák és összefüggések feltárása — sallangmentesen.

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
